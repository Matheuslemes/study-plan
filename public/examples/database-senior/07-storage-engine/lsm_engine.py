"""Academia DB · módulo 21 — storage engine com WAL, memtable e SSTable.

Só biblioteca padrão. Motor de brinquedo, deliberadamente: o objetivo é
entender por escrita própria o que um motor de verdade escolheu, não competir
com ele.

    cd public/examples/database-senior/07-storage-engine
    python lsm_engine.py

O que este arquivo demonstra:

1. Durabilidade vem do WAL, não da estrutura de dados.
2. `write()` bem-sucedido NÃO é dado em disco — sem fsync, a promessa é do
   cache do sistema operacional.
3. Amplificação de escrita: quantos bytes vão para o disco por byte lógico.
4. Recuperação por replay reconstrói exatamente o estado confirmado.
"""

from __future__ import annotations

import json
import os
import shutil
import struct
import tempfile
from dataclasses import dataclass, field
from pathlib import Path

TOMBSTONE = object()


@dataclass
class WriteStats:
    """Contabilidade para medir amplificação de escrita."""

    logical_bytes: int = 0
    wal_bytes: int = 0
    sstable_bytes: int = 0
    fsync_calls: int = 0

    @property
    def write_amplification(self) -> float:
        if self.logical_bytes == 0:
            return 0.0
        return (self.wal_bytes + self.sstable_bytes) / self.logical_bytes


class WriteAheadLog:
    """Log de escrita antecipada: a intenção vai para o disco antes do dado.

    Formato de registro: [4 bytes de tamanho][payload JSON]. O tamanho no
    início é o que permite detectar um registro truncado por crash — se
    faltarem bytes, o replay para ali e descarta o registro parcial.
    """

    def __init__(self, path: Path, stats: WriteStats, *, durable: bool = True) -> None:
        self.path = path
        self.stats = stats
        self.durable = durable
        self._handle = path.open("ab")

    def append(self, key: str, value: str | None) -> None:
        payload = json.dumps({"k": key, "v": value}).encode("utf-8")
        record = struct.pack(">I", len(payload)) + payload
        self._handle.write(record)
        self._handle.flush()
        if self.durable:
            # SEM esta linha o dado está apenas no cache do SO. `flush()` não
            # é durabilidade: um corte de energia aqui perde commits confirmados.
            os.fsync(self._handle.fileno())
            self.stats.fsync_calls += 1
        self.stats.wal_bytes += len(record)

    def close(self) -> None:
        self._handle.close()

    @staticmethod
    def replay(path: Path) -> list[tuple[str, str | None]]:
        """Relê o log, descartando um registro final truncado por crash."""
        entries: list[tuple[str, str | None]] = []
        if not path.exists():
            return entries
        raw = path.read_bytes()
        offset = 0
        while offset + 4 <= len(raw):
            (size,) = struct.unpack(">I", raw[offset : offset + 4])
            start = offset + 4
            if start + size > len(raw):
                break  # registro truncado: o crash aconteceu no meio da escrita
            record = json.loads(raw[start : start + size])
            entries.append((record["k"], record["v"]))
            offset = start + size
        return entries


@dataclass
class LsmEngine:
    """LSM mínima: memtable ordenada + SSTables imutáveis + compactação.

    A escrita vai para o WAL (sequencial, barata) e para a memtable (memória).
    Quando a memtable enche, vira uma SSTable imutável em disco. A leitura
    consulta a memtable primeiro e depois as SSTables da mais nova para a mais
    antiga — é essa cadeia que gera a amplificação de leitura.
    """

    directory: Path
    memtable_limit: int = 64
    durable: bool = True
    stats: WriteStats = field(default_factory=WriteStats)

    def __post_init__(self) -> None:
        self.directory.mkdir(parents=True, exist_ok=True)
        self._memtable: dict[str, str | None] = {}
        self._sstables: list[Path] = sorted(self.directory.glob("sst-*.json"))
        self._wal_path = self.directory / "wal.log"
        self._recover()
        self._wal = WriteAheadLog(self._wal_path, self.stats, durable=self.durable)

    # -- escrita ------------------------------------------------------------

    def put(self, key: str, value: str) -> None:
        self.stats.logical_bytes += len(key) + len(value)
        self._wal.append(key, value)          # 1. intenção, durável
        self._memtable[key] = value           # 2. estado, em memória
        if len(self._memtable) >= self.memtable_limit:
            self._flush()

    def delete(self, key: str) -> None:
        """Remover grava um túmulo: em LSM não se apaga, se anota a remoção."""
        self.stats.logical_bytes += len(key)
        self._wal.append(key, None)
        self._memtable[key] = None

    # -- leitura ------------------------------------------------------------

    def get(self, key: str) -> str | None:
        if key in self._memtable:
            value = self._memtable[key]
            return None if value is None else value
        for sst in reversed(self._sstables):   # da mais nova para a mais antiga
            data = json.loads(sst.read_text(encoding="utf-8"))
            if key in data:
                value = data[key]
                return None if value is None else value
        return None

    # -- manutenção ---------------------------------------------------------

    def _flush(self) -> None:
        """Memtable vira SSTable imutável. Escrita sequencial, sem update in-place."""
        path = self.directory / f"sst-{len(self._sstables):05d}.json"
        body = json.dumps(self._memtable, sort_keys=True).encode("utf-8")
        path.write_bytes(body)
        self.stats.sstable_bytes += len(body)
        self._sstables.append(path)
        self._memtable.clear()

    def compact(self) -> int:
        """Funde todas as SSTables e descarta túmulos.

        É aqui que o espaço é recuperado — e é aqui que nasce o pico de
        latência que aparece em produção sem aviso.
        """
        merged: dict[str, str | None] = {}
        for sst in self._sstables:
            merged.update(json.loads(sst.read_text(encoding="utf-8")))
        alive = {k: v for k, v in merged.items() if v is not None}
        descartados = len(merged) - len(alive)
        for sst in self._sstables:
            sst.unlink()
        self._sstables.clear()
        if alive:
            path = self.directory / "sst-00000.json"
            body = json.dumps(alive, sort_keys=True).encode("utf-8")
            path.write_bytes(body)
            self.stats.sstable_bytes += len(body)
            self._sstables.append(path)
        return descartados

    def _recover(self) -> None:
        """Reconstrói a memtable a partir do WAL, em ordem."""
        for key, value in WriteAheadLog.replay(self._wal_path):
            self._memtable[key] = value

    def close(self) -> None:
        self._wal.close()


def demo_durabilidade(base: Path) -> dict[str, object]:
    """Simula um crash e prova que o replay reconstrói o estado confirmado."""
    directory = base / "engine"
    engine = LsmEngine(directory, memtable_limit=1000)
    for i in range(50):
        engine.put(f"chave-{i:03d}", f"valor-{i}")
    engine.delete("chave-007")
    engine.close()  # nada de flush: o dado existe SÓ no WAL, como após um crash

    # Reabrir = recuperar. Nenhuma SSTable foi escrita.
    recuperado = LsmEngine(directory, memtable_limit=1000)
    resultado = {
        "sstables_em_disco": len(list(directory.glob("sst-*.json"))),
        "chave_000_apos_crash": recuperado.get("chave-000"),
        "chave_049_apos_crash": recuperado.get("chave-049"),
        "chave_007_removida": recuperado.get("chave-007"),
    }
    recuperado.close()
    return resultado


def demo_wal_truncado(base: Path) -> dict[str, object]:
    """Corta o WAL no meio do último registro — o crash no pior instante."""
    directory = base / "truncado"
    engine = LsmEngine(directory, memtable_limit=1000)
    for i in range(10):
        engine.put(f"k{i}", f"v{i}")
    engine.close()

    wal = directory / "wal.log"
    original = wal.read_bytes()
    wal.write_bytes(original[:-5])  # último registro fica pela metade

    recuperado = LsmEngine(directory, memtable_limit=1000)
    sobreviventes = sum(1 for i in range(10) if recuperado.get(f"k{i}") is not None)
    recuperado.close()
    return {
        "bytes_removidos": 5,
        "registros_gravados": 10,
        "registros_recuperados": sobreviventes,
        "descartou_parcial": sobreviventes == 9,
    }


def demo_amplificacao(base: Path) -> dict[str, object]:
    """Mede a amplificação de escrita com e sem fsync por operação."""
    linhas: dict[str, object] = {}
    for rotulo, durable in (("com fsync", True), ("sem fsync", False)):
        directory = base / f"amp-{durable}"
        engine = LsmEngine(directory, memtable_limit=32, durable=durable)
        for i in range(200):
            engine.put(f"chave-{i:04d}", "x" * 40)
        engine.compact()
        engine.close()
        linhas[rotulo] = {
            "bytes_logicos": engine.stats.logical_bytes,
            "bytes_wal": engine.stats.wal_bytes,
            "bytes_sstable": engine.stats.sstable_bytes,
            "amplificacao": round(engine.stats.write_amplification, 2),
            "fsyncs": engine.stats.fsync_calls,
        }
    return linhas


def main() -> None:
    base = Path(tempfile.mkdtemp(prefix="lsm-"))
    try:
        print("-- durabilidade: WAL sem nenhuma SSTable --")
        for k, v in demo_durabilidade(base).items():
            print(f"   {k:<24} {v}")
        print("   O dado sobreviveu sem nunca ter sido gravado como dado.")

        print("\n-- crash no meio de um registro do WAL --")
        for k, v in demo_wal_truncado(base).items():
            print(f"   {k:<24} {v}")
        print("   O registro parcial foi descartado; os confirmados, mantidos.")

        print("\n-- amplificação de escrita --")
        for rotulo, dados in demo_amplificacao(base).items():
            print(f"   {rotulo}: {dados}")
        print("   Cada byte lógico custa vários bytes de disco: é o preço do log.")
        print("   A amplificação é IGUAL nos dois casos — fsync não escreve mais")
        print("   bytes, ele espera o disco confirmar. O que muda é a coluna")
        print("   'fsyncs' e o tempo de parede, que num disco real é enorme e")
        print("   aqui pode nem aparecer, dependendo do sistema de arquivos.")
        print("   fsync é o que separa 'o SO recebeu' de 'o disco gravou'.")
    finally:
        shutil.rmtree(base, ignore_errors=True)


if __name__ == "__main__":
    main()
