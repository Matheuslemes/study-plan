"""
Módulo 3 (Python) — Funções de primeira classe, closures e decorators.

Rode com:  python decorators.py        (só a biblioteca padrão)
Verificado sob Pyodide (CPython) e a lógica conferida em Node.

Funções são objetos: podem ser passadas, retornadas e capturar variáveis (closure).
Um decorator é uma função que embrulha outra para adicionar comportamento sem alterá-la.
"""

import functools


def contar_chamadas(fn):
    @functools.wraps(fn)                 # preserva nome/docstring da função original
    def wrapper(*args, **kwargs):
        wrapper.chamadas += 1
        return fn(*args, **kwargs)
    wrapper.chamadas = 0
    return wrapper


def memoizar(fn):
    cache = {}                            # closure: o cache vive entre chamadas
    @functools.wraps(fn)
    def wrapper(n):
        if n not in cache:
            cache[n] = fn(n)
        return cache[n]
    wrapper.cache = cache
    return wrapper


@contar_chamadas
def saudar(nome):
    """Diz olá."""
    return f"olá, {nome}"


def _run_checks():
    checks = []

    # Primeira classe: função em variável e como argumento.
    f = saudar
    checks.append(("função é objeto de primeira classe", f("Ana") == "olá, Ana"))

    # Decorator adiciona comportamento (contagem) sem mudar a função.
    saudar("Bia")
    saudar("Cadu")
    checks.append(("decorator contou 3 chamadas", saudar.chamadas == 3))
    checks.append(("functools.wraps preserva o nome e a docstring", saudar.__name__ == "saudar" and "olá" in saudar.__doc__))

    # Closure: fábrica de multiplicadores captura o fator.
    def multiplicador(fator):
        return lambda x: x * fator
    dobro, triplo = multiplicador(2), multiplicador(3)
    checks.append(("closure captura a variável (dobro/triplo independentes)", dobro(10) == 20 and triplo(10) == 30))

    # Memoização por closure: cache persiste entre chamadas.
    chamadas_reais = {"n": 0}
    @memoizar
    def quadrado(n):
        chamadas_reais["n"] += 1
        return n * n
    quadrado(5); quadrado(5); quadrado(6)
    checks.append(("memoização calcula 5 uma vez só (2 valores distintos)", chamadas_reais["n"] == 2))
    checks.append(("o cache guarda os resultados", quadrado.cache == {5: 25, 6: 36}))

    print("=== Módulo 3 (Python) — closures e decorators ===\n")
    print("chamadas de saudar:", saudar.chamadas, "| cache de quadrado:", quadrado.cache, "\n")
    ok = sum(1 for _, c in checks if c)
    for nome, c in checks:
        print(f"  {'ok  ' if c else 'FALHOU'} {nome}")
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("Lição: funções são objetos; closures guardam estado e decorators adicionam comportamento (log, cache, retry) sem tocar na função original.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
