"""
Módulo 2 (Python) — Estruturas de dados built-in: escolha idiomática.

Rode com:  python estruturas_dados.py        (só a biblioteca padrão)
Verificado sob Pyodide (CPython) e a lógica conferida em Node.

list, dict, set e tuple têm custos diferentes. Escolher a estrutura certa muda
correção e desempenho: pertinência em set é O(1); em list, O(n). dict preserva ordem
de inserção; set remove duplicatas; tuple é imutável (serve de chave).
"""

from collections import Counter, defaultdict


def _run_checks():
    checks = []

    # set: pertinência O(1) e remoção de duplicatas.
    nums = [1, 2, 2, 3, 3, 3, 4]
    unicos = set(nums)
    checks.append(("set remove duplicatas", unicos == {1, 2, 3, 4}))
    checks.append(("pertinência em set é direta (3 in set)", 3 in unicos))

    # dict: mapeia e preserva ordem de inserção (desde 3.7).
    ordem = {}
    for k in ["b", "a", "c"]:
        ordem[k] = True
    checks.append(("dict preserva a ordem de inserção", list(ordem) == ["b", "a", "c"]))

    # Counter: contagem idiomática (em vez de laço manual).
    cont = Counter("banana")
    checks.append(("Counter conta ocorrências", cont["a"] == 3 and cont.most_common(1) == [("a", 3)]))

    # defaultdict: agrupar sem checar chave.
    grupos = defaultdict(list)
    for palavra in ["ana", "bia", "alan", "bruno"]:
        grupos[palavra[0]].append(palavra)
    checks.append(("defaultdict agrupa sem KeyError", grupos["a"] == ["ana", "alan"]))

    # tuple imutável serve de chave de dict (list não).
    cache = {(1, 2): "ponto"}
    checks.append(("tuple (imutável) serve de chave de dict", cache[(1, 2)] == "ponto"))
    virou_erro = False
    try:
        {[1, 2]: "x"}  # list é mutável -> unhashable
    except TypeError:
        virou_erro = True
    checks.append(("list (mutável) NÃO serve de chave", virou_erro))

    # comprehension: idiomático e claro.
    pares = [n for n in range(10) if n % 2 == 0]
    checks.append(("list comprehension filtra os pares", pares == [0, 2, 4, 6, 8]))

    print("=== Módulo 2 (Python) — estruturas de dados idiomáticas ===\n")
    print("únicos:", sorted(unicos), "| Counter('banana'):", dict(cont), "| grupos:", dict(grupos), "\n")
    ok = sum(1 for _, c in checks if c)
    for nome, c in checks:
        print(f"  {'ok  ' if c else 'FALHOU'} {nome}")
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("Lição: escolha a estrutura pelo acesso — set para pertinência, dict para mapa ordenado, tuple imutável para chave, Counter/defaultdict para clareza.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
