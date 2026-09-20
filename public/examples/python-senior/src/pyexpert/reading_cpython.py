"""Módulo 26 — ler o CPython: da dúvida ao código-fonte.

Cada função aqui produz uma observação que você NÃO deve explicar por intuição.
A tarefa é abrir a fonte indicada e explicar com o código na frente.

    python -m pyexpert.reading_cpython
"""

from __future__ import annotations

import sys
import timeit

# Onde procurar cada resposta no repositório python/cpython.
SOURCE_MAP = {
    "crescimento de lista": "Objects/listobject.c — função list_resize",
    "ordem de dict": "Objects/dictobject.c + PEP 468 e a nota de contrato no 3.7",
    "concat in-place de str": "Python/ceval.c — otimização de BINARY_OP em str com refcount 1",
    "cache de inteiros": "Objects/longobject.c — small int cache",
    "laço de avaliação": "Python/ceval.c e Python/bytecodes.c",
}


def list_capacity_steps(limit: int = 100) -> list[tuple[int, int]]:
    """Degraus de realocação de uma lista.

    ``append`` é O(1) AMORTIZADO porque a capacidade cresce em blocos. Leia
    ``list_resize`` e explique o fator de crescimento — não chute que é 2x.
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


def dict_order_is_contract() -> list[str]:
    """Ordem de inserção em ``dict``.

    Detalhe de implementação no 3.6; parte da especificação da linguagem a partir
    do 3.7. Saber DE QUANDO algo virou contrato é a habilidade do módulo.
    """
    mapping = {"delta": 1, "alpha": 2, "charlie": 3, "bravo": 4}
    mapping["echo"] = 5
    del mapping["alpha"]
    mapping["alpha"] = 6
    return list(mapping)


def string_concat_timings(rounds: int = 20_000) -> dict[str, float]:
    """Concatenação em laço versus ``join``.

    O folclore diz que o laço é sempre O(n²). O CPython tem uma otimização
    in-place que se aplica quando a string tem exatamente uma referência — o que
    torna o resultado melhor do que o esperado, e frágil. Meça, leia a fonte e
    recomende ``join`` pelo motivo certo: não depender de uma otimização que a
    documentação não promete.
    """
    loop = timeit.timeit(
        stmt="s = ''\nfor i in range(200): s += 'x'",
        number=rounds // 200,
    )
    join = timeit.timeit(
        stmt="''.join(['x'] * 200)",
        number=rounds // 200,
    )
    return {"laco_+=": loop, "join": join}


def small_int_cache_boundary() -> tuple[int, int]:
    """Encontra empiricamente a borda do cache de inteiros pequenos.

    O resultado é detalhe de implementação do CPython. Em outro interpretador
    (PyPy, GraalPy) pode ser diferente — e é por isso que não se apoia código nele.
    """
    lower = 0
    while lower > -10_000 and (lower - 1) is (lower - 1):  # noqa: F632
        lower -= 1
    upper = 0
    while upper < 10_000 and (upper + 1) is (upper + 1):  # noqa: F632
        upper += 1
    return lower, upper


def main() -> None:
    print(f"CPython {sys.version.split()[0]}\n")

    print("-- degraus de capacidade da lista --")
    print(f"  {list_capacity_steps()[:8]} ...")
    print(f"  onde ler: {SOURCE_MAP['crescimento de lista']}")

    print("\n-- ordem de dict após remover e reinserir --")
    print(f"  {dict_order_is_contract()}")
    print("  'alpha' foi para o fim: reinserção conta como inserção nova.")
    print(f"  onde ler: {SOURCE_MAP['ordem de dict']}")

    print("\n-- concatenação de string --")
    for label, seconds in string_concat_timings().items():
        print(f"  {label:<10} {seconds:.4f}s")
    print(f"  onde ler: {SOURCE_MAP['concat in-place de str']}")
    print("  Use join — não porque o laço é sempre lento, mas porque a otimização é frágil.")

    print("\n-- todas as trilhas de leitura --")
    for question, where in SOURCE_MAP.items():
        print(f"  {question:<24} -> {where}")


if __name__ == "__main__":
    main()
