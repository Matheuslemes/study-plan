"""
Módulo 6 (Python) — Iteradores, geradores e context managers.

Rode com:  python geradores_context.py        (só a biblioteca padrão)
Verificado sob Pyodide (CPython) e a lógica conferida em Node.

Geradores produzem valores sob demanda (preguiçosos, memória O(1) para sequências
infinitas). Context managers (with) garantem setup/teardown mesmo com exceção.
"""

import itertools
from contextlib import contextmanager


def fibonacci():                 # gerador infinito: só calcula o que for pedido
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b


@contextmanager
def recurso(registro):
    registro.append("abre")      # setup
    try:
        yield "handle"
    finally:
        registro.append("fecha")  # teardown garantido, mesmo com exceção


def _run_checks():
    checks = []

    # Gerador é preguiçoso: pegar só os 8 primeiros de uma sequência infinita.
    primeiros = list(itertools.islice(fibonacci(), 8))
    checks.append(("gerador infinito + islice pega só o necessário", primeiros == [0, 1, 1, 2, 3, 5, 8, 13]))

    # Um gerador se esgota (é um iterador de passagem única).
    g = (x * x for x in range(3))
    checks.append(("generator expression produz sob demanda", list(g) == [0, 1, 4] and list(g) == []))

    # Context manager garante teardown mesmo quando ocorre exceção.
    reg = []
    with recurso(reg) as h:
        checks.append(("with entrega o handle e roda o setup", h == "handle" and reg == ["abre"]))
    checks.append(("with roda o teardown ao sair", reg == ["abre", "fecha"]))

    reg2 = []
    houve_erro = False
    try:
        with recurso(reg2):
            raise ValueError("boom")
    except ValueError:
        houve_erro = True
    checks.append(("teardown roda mesmo com exceção", houve_erro and reg2 == ["abre", "fecha"]))

    # itertools compõe pipelines preguiçosos.
    pares_ao_quadrado = list(itertools.islice((n * n for n in itertools.count() if n % 2 == 0), 4))
    checks.append(("pipeline preguiçoso: quadrados dos pares", pares_ao_quadrado == [0, 4, 16, 36]))

    print("=== Módulo 6 (Python) — geradores e context managers ===\n")
    print("primeiros fib:", primeiros, "| registro do with:", reg, "\n")
    ok = sum(1 for _, c in checks if c)
    for nome, c in checks:
        print(f"  {'ok  ' if c else 'FALHOU'} {nome}")
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("Lição: geradores dão sequências preguiçosas com memória O(1); context managers garantem liberar recursos mesmo sob exceção.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
