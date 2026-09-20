"""Módulo 24 — sair do Python: buffers, cópia zero e a fronteira nativa.

Os degraus, do mais barato ao mais caro:

    1. algoritmo e estrutura de dados
    2. evitar cópia (memoryview, buffer protocol)   <- medido aqui
    3. vetorização (NumPy)
    4. ctypes / cffi sobre biblioteca já existente  <- demonstrado aqui
    5. Cython
    6. PyO3 (Rust) ou C API

Este arquivo usa só a biblioteca padrão e cobre os degraus 2 e 4. Os degraus 5 e 6
exigem toolchain e ficam como exercício — mas a regra vale: subir um degrau por
vez, medindo cada um.
"""

from __future__ import annotations

import ctypes
import ctypes.util
import sys
import time
from typing import Callable


def make_payload(size: int = 1 << 22) -> bytes:
    return bytes(size)


def slice_copies(payload: bytes, chunk: int = 4096) -> int:
    """Fatiar ``bytes`` COPIA cada pedaço. Aqui está o custo escondido."""
    total = 0
    for offset in range(0, len(payload), chunk):
        piece = payload[offset : offset + chunk]
        total += len(piece)
    return total


def view_without_copies(payload: bytes, chunk: int = 4096) -> int:
    """Fatiar uma ``memoryview`` NÃO copia: cria uma janela sobre o mesmo buffer."""
    total = 0
    with memoryview(payload) as view:
        for offset in range(0, len(view), chunk):
            piece = view[offset : offset + chunk]
            total += len(piece)
    return total


def bench(label: str, work: Callable[[], int], repeats: int = 3) -> tuple[str, float, int]:
    best = float("inf")
    result = 0
    for _ in range(repeats):
        start = time.perf_counter()
        result = work()
        best = min(best, time.perf_counter() - start)
    return label, best, result


def copy_vs_view_crossover(payload: bytes, passes: int = 20) -> list[tuple[int, float, float]]:
    """Compara cópia e view variando o tamanho do pedaço.

    Os dois mecanismos em disputa, para você explicar os SEUS números:

    * fatiar ``bytes`` copia ``chunk`` bytes por fatia — no total, sempre o
      payload inteiro, qualquer que seja o tamanho do pedaço;
    * fatiar ``memoryview`` não copia nada, mas paga a criação de um objeto por
      fatia, igual à outra via.

    Logo a economia da view é constante (o payload inteiro) e o overhead por
    objeto é comparável nos dois lados. A vantagem relativa aparece quando a
    cópia pesa mais que o overhead — e some quando o payload é pequeno demais
    para a cópia importar.

    ``passes`` repete a varredura inteira para manter cada medição acima da
    resolução do relógio; sem isso, pedaços grandes produzem 0.0000s e você
    compara ruído. Essa é a armadilha do exercício.
    """
    rows: list[tuple[int, float, float]] = []
    for chunk in (256, 4096, 65_536, 1 << 20):

        def do_copy(c: int = chunk) -> int:
            return sum(slice_copies(payload, c) for _ in range(passes))

        def do_view(c: int = chunk) -> int:
            return sum(view_without_copies(payload, c) for _ in range(passes))

        _, copy_time, _ = bench("copy", do_copy)
        _, view_time, _ = bench("view", do_view)
        rows.append((chunk, copy_time, view_time))
    return rows


def buffer_is_shared() -> bool:
    """Prova de que a memoryview não copiou: escrever na view altera o original."""
    buffer = bytearray(b"abcdef")
    with memoryview(buffer) as view:
        view[0:3] = b"XYZ"
    return bytes(buffer) == b"XYZdef"


def load_libc() -> ctypes.CDLL | None:
    """Carrega a libc do sistema, quando existir.

    No Windows o equivalente é ``msvcrt``. Devolver ``None`` em vez de estourar é
    parte da lição: código que cruza a fronteira nativa tem caminho de erro.
    """
    if sys.platform == "win32":
        try:
            return ctypes.CDLL("msvcrt")
        except OSError:
            return None
    name = ctypes.util.find_library("c")
    if name is None:
        return None
    try:
        return ctypes.CDLL(name)
    except OSError:
        return None


def native_strlen(text: str) -> int | None:
    """Chama ``strlen`` da libc via ctypes.

    O ponto pedagógico é a declaração explícita de ``argtypes`` e ``restype``:
    sem isso, o ctypes assume ``int`` e você ganha valores truncados ou um crash
    em vez de um erro. Isto é mais caro que ``len()`` — é uma demonstração de
    mecanismo, não uma otimização.
    """
    libc = load_libc()
    if libc is None:
        return None
    strlen = libc.strlen
    strlen.argtypes = [ctypes.c_char_p]
    strlen.restype = ctypes.c_size_t
    return int(strlen(text.encode("utf-8")))


def crossing_cost(items: int = 50_000) -> dict[str, float]:
    """Custo de travessia: muitas chamadas pequenas versus uma chamada em lote.

    É o erro de design mais comum ao adotar extensão nativa. O ganho da linguagem
    compilada desaparece se a API for granular.
    """
    libc = load_libc()
    if libc is None:
        return {}
    strlen = libc.strlen
    strlen.argtypes = [ctypes.c_char_p]
    strlen.restype = ctypes.c_size_t

    words = [b"payload"] * items

    start = time.perf_counter()
    per_item = sum(strlen(word) for word in words)
    granular = time.perf_counter() - start

    start = time.perf_counter()
    batched_total = sum(len(word) for word in words)
    batched = time.perf_counter() - start

    assert per_item == batched_total
    return {"chamada_por_item_s": granular, "em_lote_puro_python_s": batched}


def main() -> None:
    payload = make_payload()
    print(f"payload de {len(payload)} bytes — cópia versus view por tamanho de pedaço\n")
    print(f"  {'pedaço':>9}  {'copiando':>10}  {'memoryview':>11}   veredito")
    for chunk, copy_time, view_time in copy_vs_view_crossover(payload):
        verdict = "view ganha" if view_time < copy_time else "cópia ganha"
        print(f"  {chunk:>9}  {copy_time:>9.4f}s  {view_time:>10.4f}s   {verdict}")
    print("\n  Explique o SEU resultado, não decore o meu: a view economiza a cópia do")
    print("  payload inteiro, mas paga um objeto por fatia igual à outra via. Se os")
    print("  tempos empatarem, a cópia não era o gargalo — e o degrau 2 não é o seu.")

    print(f"\nbuffer compartilhado pela view: {buffer_is_shared()}")

    length = native_strlen("fronteira nativa")
    print(f"strlen via ctypes: {length if length is not None else 'libc indisponível'}")

    costs = crossing_cost()
    if costs:
        for key, value in costs.items():
            print(f"{key:<26} {value:.4f}s")
        print("Uma chamada por item paga a travessia toda vez. Projete APIs em lote.")


if __name__ == "__main__":
    main()
