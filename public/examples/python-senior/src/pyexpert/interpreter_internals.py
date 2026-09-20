"""Módulo 21 — o interpretador por dentro: objetos, refcount, ciclos e bytecode.

Só biblioteca padrão. Rode com ``python -m pyexpert.interpreter_internals`` a partir de
``public/examples/python-senior/src``.

O ponto do módulo não é decorar números: é ter um procedimento para responder
"quanto custa isso?" sem chutar.
"""

from __future__ import annotations

import dis
import gc
import io
import sys
import tracemalloc
from typing import Any, Callable


def bytecode_of(function: Callable[..., Any]) -> str:
    """Devolve o bytecode desmontado de uma função.

    O bytecode muda entre versões do CPython. Uma conclusão tirada aqui no 3.12
    precisa ser reconferida no interpretador de produção.
    """
    buffer = io.StringIO()
    dis.dis(function, file=buffer)
    return buffer.getvalue()


def sum_with_loop(values: list[int]) -> int:
    total = 0
    for value in values:
        total += value
    return total


def sum_with_builtin(values: list[int]) -> int:
    return sum(values)


def instruction_count(function: Callable[..., Any]) -> int:
    """Conta instruções de bytecode.

    Serve para explicar uma diferença JÁ medida em tempo — nunca como substituto
    da medição. Menos instruções não implica mais rápido.
    """
    return sum(1 for _ in dis.get_instructions(function))


def small_int_identity_trap() -> dict[str, bool]:
    """Demonstra por que ``is`` não serve para comparar valor.

    Cuidado com a armadilha DENTRO da armadilha: escrever ``257 is 257`` devolve
    ``True`` porque o compilador deduplica constantes iguais no mesmo code object
    — nada a ver com o cache de inteiros. Para observar o cache de verdade, o
    valor precisa ser produzido em tempo de execução, e é o que ``int(str(...))``
    faz aqui.
    """
    small_a = 256
    small_b = int("256")
    large_a = 257
    large_b = int("257")
    folded_a, folded_b = 257, 257  # mesmo code object: constante deduplicada
    return {
        "256_is_256_runtime": small_a is small_b,
        "257_is_257_runtime": large_a is large_b,
        "257_is_257_literal": folded_a is folded_b,
        "257_eq_257": large_a == large_b,
    }


class Node:
    """Nó que cria um ciclo de referências de propósito."""

    __slots__ = ("payload", "peer")

    def __init__(self, payload: bytes) -> None:
        self.payload = payload
        self.peer: Node | None = None


def build_reference_cycle(payload_bytes: int = 1 << 16) -> None:
    """Cria dois nós que se apontam e descarta as referências locais.

    Refcount sozinho não libera isto: cada nó ainda tem uma referência viva
    vinda do outro. Só o coletor de ciclos resolve.
    """
    first = Node(b"x" * payload_bytes)
    second = Node(b"y" * payload_bytes)
    first.peer = second
    second.peer = first


def cycle_collection_report(rounds: int = 50) -> dict[str, int]:
    """Mede quantos objetos o coletor de ciclos recupera."""
    gc.collect()
    tracemalloc.start()
    before = tracemalloc.take_snapshot()
    for _ in range(rounds):
        build_reference_cycle()
    after_cycles = tracemalloc.take_snapshot()
    collected = gc.collect()
    after_collect = tracemalloc.take_snapshot()
    tracemalloc.stop()

    def total(snapshot: tracemalloc.Snapshot) -> int:
        return sum(stat.size for stat in snapshot.statistics("filename"))

    return {
        "bytes_antes": total(before),
        "bytes_com_ciclos": total(after_cycles),
        "bytes_apos_gc": total(after_collect),
        "objetos_coletados": collected,
    }


def list_growth_steps(limit: int = 40) -> list[tuple[int, int]]:
    """Registra os degraus de crescimento da capacidade de uma lista.

    ``append`` é O(1) amortizado porque a lista cresce em blocos, não de um em um.
    Os saltos aparecem em ``sys.getsizeof``.
    """
    steps: list[tuple[int, int]] = []
    values: list[int] = []
    previous = sys.getsizeof(values)
    for index in range(limit):
        values.append(index)
        current = sys.getsizeof(values)
        if current != previous:
            steps.append((len(values), current))
            previous = current
    return steps


def main() -> None:
    print(f"CPython {sys.version.split()[0]}")
    print("\n-- armadilha do cache de inteiros pequenos --")
    for key, value in small_int_identity_trap().items():
        print(f"  {key:<22} {value}")
    print("  Note a diferença entre as duas linhas de 257: a versão com literais dá")
    print("  True por dobra de constantes, não por cache. Duas explicações distintas")
    print("  para o mesmo resultado — o tipo de erro que este módulo existe para evitar.")
    print("  Lição: `is` compara identidade. Para valor, sempre `==`.")

    print("\n-- instruções de bytecode --")
    print(f"  laço explícito : {instruction_count(sum_with_loop)}")
    print(f"  sum() built-in : {instruction_count(sum_with_builtin)}")
    print("  Menos instruções não prova mais rápido. Meça o tempo também.")

    print("\n-- ciclos de referência --")
    for key, value in cycle_collection_report().items():
        print(f"  {key:<20} {value}")

    print("\n-- degraus de crescimento da lista --")
    print(f"  {list_growth_steps()}")
    print("  Explique os degraus lendo Objects/listobject.c (módulo 26).")


if __name__ == "__main__":
    main()
