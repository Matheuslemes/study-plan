"""
Módulo 0 (DSA) — Da Faixa 0 à análise de algoritmos, com código que roda.

Rode com:  python dsa-zero.py   (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador.

Antes do formalismo (Big O vem no módulo 1), a intuição: dá para CONTAR os
passos de um algoritmo. Um laço faz n passos; dois laços aninhados fazem n×n;
dividir pela metade a cada passo faz ~log n. Recursão é caso-base + passo, e
"vive na pilha". E a estrutura escolhida muda o custo: buscar numa lista é
percorrer (até n comparações); num dicionário é acesso direto (~1).
"""


def passos_laco(n):
    """Um laço simples: conta quantos passos executa (é n)."""
    passos = 0
    for _ in range(n):
        passos += 1
    return passos


def passos_aninhado(n):
    """Dois laços aninhados: conta os passos (é n×n)."""
    passos = 0
    for _ in range(n):
        for _ in range(n):
            passos += 1
    return passos


def passos_dividindo(n):
    """Dividir por 2 a cada passo até chegar a 1: conta os passos (~log2 n)."""
    passos = 0
    while n > 1:
        n //= 2
        passos += 1
    return passos


def fatorial(n):
    """Recursão: caso-base (0! = 1) + passo (n * (n-1)!)."""
    if n <= 1:          # caso-base
        return 1
    return n * fatorial(n - 1)   # passo recursivo


def busca_linear(lista, alvo):
    """Percorre a lista; devolve (achou, nº de comparações)."""
    comparacoes = 0
    for item in lista:
        comparacoes += 1
        if item == alvo:
            return True, comparacoes
    return False, comparacoes


def _run_checks():
    checks = []

    # 1. contar passos: linear é n, aninhado é n×n.
    checks.append(("um laço faz n passos (100)", passos_laco(100) == 100))
    checks.append(("dois laços aninhados fazem n×n (10000)", passos_aninhado(100) == 10_000))
    checks.append(("dividir por 2 até 1 faz ~log2 n (1024 → 10)", passos_dividindo(1024) == 10))

    # 2. a intuição do crescimento: por que O(n²) assusta.
    n = 1000
    checks.append(("para n=1000, n² = 1.000.000 (mil vezes mais que n)", n * n == 1_000_000))

    # 3. recursão: caso-base + passo.
    checks.append(("fatorial(5) = 120", fatorial(5) == 120))
    checks.append(("fatorial(0) = 1 (caso-base)", fatorial(0) == 1))

    # 4. estrutura muda o custo: buscar o último numa lista de 1000 custa 1000 comparações...
    lista = list(range(1000))
    achou, comps = busca_linear(lista, 999)
    checks.append(("busca linear pelo último faz n comparações (1000)", achou and comps == 1000))

    # ...mas num dicionário o acesso é direto (~1 operação).
    indice = {v: i for i, v in enumerate(lista)}   # constrói o índice uma vez
    checks.append(("dicionário acha por chave em ~1 acesso", indice.get(999) == 999 and (12345 not in indice)))

    print("=== Módulo 0 (DSA) — contar passos, recursão e estrutura ===")
    print(f"laço: {passos_laco(100)} passos | aninhado: {passos_aninhado(100)} | dividindo(1024): {passos_dividindo(1024)}")
    print(f"crescimento: n=1000 → n²={1000*1000}")
    print(f"fatorial(5) = {fatorial(5)}")
    print(f"busca linear pelo último de 1000: {busca_linear(lista, 999)[1]} comparações | dict: 1 acesso")
    print()

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("Lição: dá para contar os passos antes de formalizar. Laço = n, aninhado = n², dividir = log n;")
    print("recursão é caso-base + passo; e a estrutura certa (dict vs lista) muda o custo da busca.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
