"""
Faixa 0 — Por que 0.1 + 0.2 não é 0.3.

Rode com:  python ponto_flutuante.py   (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador.

O computador guarda números "quebrados" em binário (IEEE 754). Assim como 1/3
não termina em decimal (0.333...), 0.1 não termina em binário — então é
arredondado. Somar esses arredondamentos dá um resultado quase certo, mas não
exato. A lição da faixa 0: nunca compare floats com ==; compare com tolerância.
"""

import math


def quase_igual(a, b, tol=1e-9):
    """Compara floats com tolerância (o jeito certo)."""
    return abs(a - b) <= tol


def _run_checks():
    checks = []

    # 1. o problema clássico: a soma não bate na igualdade exata.
    soma = 0.1 + 0.2
    checks.append(("0.1 + 0.2 NÃO é exatamente 0.3 (com ==)", soma != 0.3))
    checks.append(("o erro é minúsculo (~1e-16)", abs(soma - 0.3) < 1e-15))

    # 2. o jeito certo de comparar.
    checks.append(("comparar com tolerância dá igual", quase_igual(soma, 0.3)))
    checks.append(("math.isclose também resolve", math.isclose(soma, 0.3)))

    # 3. inteiros não têm esse problema (são exatos).
    checks.append(("com inteiros a conta é exata (1 + 2 == 3)", 1 + 2 == 3))

    print("=== Ponto flutuante ===\n")
    print(f"0.1 + 0.2 = {soma!r}")
    print(f"0.3       = {0.3!r}")
    print(f"diferença = {soma - 0.3:.2e}")
    print()

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: float é aproximado. Para dinheiro use inteiros (centavos) ou Decimal;")
    print("para comparar, use tolerância (math.isclose), nunca ==.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
