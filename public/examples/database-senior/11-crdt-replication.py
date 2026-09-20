"""Academia DB · módulo 25 — convergência sem coordenação.

Só biblioteca padrão.

    cd public/examples/database-senior
    python 11-crdt-replication.py

A propriedade que faz tudo funcionar é da OPERAÇÃO, não do protocolo: se a
junção é comutativa, associativa e idempotente, a ordem de chegada das
atualizações deixa de importar. Os testes abaixo aplicam as mesmas operações em
ordens diferentes, fora de ordem e duplicadas, e verificam a convergência.

O último bloco é o mais importante: mostra um caso em que TUDO converge e o
resultado continua inaceitável para o negócio.
"""

from __future__ import annotations

import itertools
import random
from dataclasses import dataclass, field


@dataclass
class GCounter:
    """Contador que só cresce. Cada réplica só incrementa a própria posição.

    A junção é o máximo posição a posição — comutativa, associativa e
    idempotente por construção.
    """

    replica: str
    counts: dict[str, int] = field(default_factory=dict)

    def increment(self, amount: int = 1) -> None:
        if amount < 0:
            raise ValueError("GCounter não decrementa; use PNCounter")
        self.counts[self.replica] = self.counts.get(self.replica, 0) + amount

    def value(self) -> int:
        return sum(self.counts.values())

    def merge(self, other: GCounter) -> GCounter:
        merged = GCounter(self.replica, dict(self.counts))
        for replica, count in other.counts.items():
            merged.counts[replica] = max(merged.counts.get(replica, 0), count)
        return merged


@dataclass
class PNCounter:
    """Soma e subtrai, mantendo dois GCounters. O valor é a diferença."""

    replica: str
    positive: GCounter = field(default=None)  # type: ignore[assignment]
    negative: GCounter = field(default=None)  # type: ignore[assignment]

    def __post_init__(self) -> None:
        self.positive = self.positive or GCounter(self.replica)
        self.negative = self.negative or GCounter(self.replica)

    def add(self, amount: int) -> None:
        (self.positive if amount >= 0 else self.negative).increment(abs(amount))

    def value(self) -> int:
        return self.positive.value() - self.negative.value()

    def merge(self, other: PNCounter) -> PNCounter:
        merged = PNCounter(self.replica)
        merged.positive = self.positive.merge(other.positive)
        merged.negative = self.negative.merge(other.negative)
        return merged


@dataclass
class ORSet:
    """Conjunto com remoção. Cada adição tem uma tag única; remover registra as
    tags observadas.

    É por isso que estas estruturas ACUMULAM METADADOS: para remover sem
    coordenar, é preciso lembrar o que foi removido. Sem política de descarte,
    o estado cresce para sempre — o custo que quase nunca entra na conta.
    """

    replica: str
    adds: dict[str, set[str]] = field(default_factory=dict)
    removes: dict[str, set[str]] = field(default_factory=dict)
    _seq: itertools.count = field(default_factory=lambda: itertools.count())

    def add(self, element: str) -> None:
        tag = f"{self.replica}:{next(self._seq)}"
        self.adds.setdefault(element, set()).add(tag)

    def remove(self, element: str) -> None:
        observed = self.adds.get(element, set())
        if observed:
            self.removes.setdefault(element, set()).update(observed)

    def value(self) -> set[str]:
        return {
            element
            for element, tags in self.adds.items()
            if tags - self.removes.get(element, set())
        }

    def metadata_size(self) -> int:
        return sum(len(t) for t in self.adds.values()) + sum(
            len(t) for t in self.removes.values()
        )

    def merge(self, other: ORSet) -> ORSet:
        merged = ORSet(self.replica)
        for element, tags in itertools.chain(self.adds.items(), other.adds.items()):
            merged.adds.setdefault(element, set()).update(tags)
        for element, tags in itertools.chain(self.removes.items(), other.removes.items()):
            merged.removes.setdefault(element, set()).update(tags)
        return merged


@dataclass
class LWWRegister:
    """Last-write-wins. Converge — e descarta uma das escritas em silêncio.

    "Último" depende de relógio, que em sistema distribuído não é confiável.
    Está aqui como contraexemplo, não como recomendação.
    """

    replica: str
    value: str | None = None
    timestamp: float = 0.0

    def set(self, value: str, timestamp: float) -> None:
        if (timestamp, self.replica) > (self.timestamp, self.replica):
            self.value = value
            self.timestamp = timestamp

    def merge(self, other: LWWRegister) -> LWWRegister:
        merged = LWWRegister(self.replica, self.value, self.timestamp)
        if (other.timestamp, other.replica) > (merged.timestamp, merged.replica):
            merged.value = other.value
            merged.timestamp = other.timestamp
        return merged


def converge_em_qualquer_ordem(replicas: list, rng: random.Random, rounds: int = 60):
    """Troca estado entre réplicas em ordem aleatória, com duplicação.

    Se a estrutura for de fato convergente, todas terminam iguais — não
    importa a ordem nem quantas vezes a mesma mensagem chegue.
    """
    for _ in range(rounds):
        a, b = rng.sample(range(len(replicas)), 2)
        replicas[a] = replicas[a].merge(replicas[b])
        replicas[b] = replicas[b].merge(replicas[a])
        if rng.random() < 0.3:  # mensagem duplicada
            replicas[a] = replicas[a].merge(replicas[b])
    return replicas


def demo_contador(rng: random.Random) -> dict[str, object]:
    replicas = [PNCounter(f"r{i}") for i in range(3)]
    replicas[0].add(10)
    replicas[1].add(5)
    replicas[2].add(-3)
    replicas[0].add(7)
    esperado = 10 + 5 - 3 + 7

    replicas = converge_em_qualquer_ordem(replicas, rng)
    valores = [r.value() for r in replicas]
    return {
        "esperado": esperado,
        "valores_por_replica": valores,
        "convergiu": len(set(valores)) == 1 and valores[0] == esperado,
    }


def demo_conjunto(rng: random.Random) -> dict[str, object]:
    replicas = [ORSet(f"r{i}") for i in range(3)]
    replicas[0].add("alpha")
    replicas[0].add("bravo")
    replicas[1].add("charlie")
    replicas[2].add("alpha")       # mesma chave, réplica diferente: tags distintas
    replicas[0].remove("bravo")

    antes = sum(r.metadata_size() for r in replicas)
    replicas = converge_em_qualquer_ordem(replicas, rng)
    valores = [tuple(sorted(r.value())) for r in replicas]
    depois = replicas[0].metadata_size()
    return {
        "valores_por_replica": valores,
        "convergiu": len(set(valores)) == 1,
        "bravo_removido": "bravo" not in valores[0],
        "alpha_sobreviveu": "alpha" in valores[0],
        "tags_antes_do_merge": antes,
        "tags_depois_do_merge": depois,
    }


def demo_lww_perde_dado() -> dict[str, object]:
    """Duas escritas simultâneas. Uma desaparece e ninguém é avisado."""
    a = LWWRegister("r1")
    b = LWWRegister("r2")
    a.set("observação do técnico A", timestamp=100.0)
    b.set("observação do técnico B", timestamp=100.0)  # mesmo instante
    convergido = a.merge(b)
    return {
        "escreveu_A": "observação do técnico A",
        "escreveu_B": "observação do técnico B",
        "resultado": convergido.value,
        "escritas_perdidas": 1,
        "houve_aviso": False,
    }


def demo_convergencia_nao_e_correcao() -> dict[str, object]:
    """O ponto mais importante do módulo.

    Duas reservas do mesmo assento, em réplicas distintas. O conjunto converge
    perfeitamente: as duas réplicas terminam com o MESMO estado. E o estado é
    inaceitável — o assento foi vendido duas vezes.

    Convergência é propriedade do DADO. Exclusividade é invariante do NEGÓCIO,
    e nenhuma estrutura convergente a garante.
    """
    r1, r2 = ORSet("r1"), ORSet("r2")
    r1.add("assento-12A:cliente-joao")
    r2.add("assento-12A:cliente-maria")
    convergido = r1.merge(r2)
    reservas = sorted(convergido.value())
    return {
        "estado_final": reservas,
        "replicas_convergiram": True,
        "assento_12A_vendido_vezes": len(reservas),
        "aceitavel_para_o_negocio": False,
    }


def main() -> None:
    rng = random.Random(42)

    print("-- PNCounter: soma e subtração sem coordenação --")
    for k, v in demo_contador(rng).items():
        print(f"   {k:<26} {v}")

    print("\n-- ORSet: adição e remoção, e o custo em metadados --")
    for k, v in demo_conjunto(rng).items():
        print(f"   {k:<26} {v}")
    print("   Os metadados crescem com as operações, não com o tamanho do conjunto.")

    print("\n-- LWW: converge e PERDE escrita, sem aviso --")
    for k, v in demo_lww_perde_dado().items():
        print(f"   {k:<26} {v}")

    print("\n-- convergir não é estar correto --")
    for k, v in demo_convergencia_nao_e_correcao().items():
        print(f"   {k:<26} {v}")
    print("   As duas réplicas concordam. O assento foi vendido duas vezes.")
    print("   Exclusividade exige coordenação — nenhuma estrutura convergente resolve.")


if __name__ == "__main__":
    main()
