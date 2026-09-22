"""
Módulo 0 (Matemática) — Da Faixa 0 à matemática que sustenta CS e IA.

Rode com:  python matematica-zero.py        (só a biblioteca padrão)
Verificado sob Pyodide (CPython no navegador) e a lógica conferida em Node.

Nada de decoreba escolar. O objetivo é ver, com números que você mesmo confere,
as quatro ideias que a trilha usa o tempo todo: somatório com fórmula fechada,
crescimento de funções, função como regra e média/probabilidade. Uma FÓRMULA
que você prova (o laço confere) vale mais que uma que você memoriza.

Liga os fundamentos da Faixa 0 à trilha de Matemática:
  1. somatório (Σ) tem forma fechada: 1+2+...+n = n(n+1)/2 — e dá para PROVAR conferindo;
  2. funções crescem em ritmos diferentes: log < linear < quadrático < exponencial;
  3. uma função é uma regra f(x) que leva entrada a saída;
  4. média (vetor = lista de números) e probabilidade (fração de casos) são a base de IA.
"""

import math


def soma_ate(n):
    """Somatório 1+2+...+n por laço (a definição)."""
    total = 0
    for i in range(1, n + 1):
        total += i
    return total


def forma_fechada(n):
    """A mesma soma pela fórmula fechada de Gauss: n(n+1)/2 (inteiro)."""
    return n * (n + 1) // 2


def media(xs):
    """Média de uma lista (um 'vetor' de números)."""
    return sum(xs) / len(xs)


def _run_checks():
    checks = []

    # 1. Somatório e forma fechada.
    checks.append(("soma 1..100 pela fórmula fechada = 5050", forma_fechada(100) == 5050))
    checks.append((
        "o laço confere a fórmula n(n+1)/2 para vários n",
        all(soma_ate(n) == forma_fechada(n) for n in (1, 2, 5, 10, 100, 1000)),
    ))

    # 2. Ritmos de crescimento em n = 10.
    n = 10
    linear, quadratico, exponencial, logaritmo = n, n ** 2, 2 ** n, math.log2(n)
    checks.append(("crescimento: quadrático (100) supera linear (10)", quadratico > linear))
    checks.append(("crescimento: exponencial (2^10=1024) supera o quadrático", exponencial > quadratico))
    checks.append(("crescimento: log2(10)≈3.32 cresce mais devagar que o linear", logaritmo < linear))

    # 3. Função como regra f(x) = 2x + 1.
    f = lambda x: 2 * x + 1
    checks.append(("função f(x)=2x+1: f(3)=7 e Σ f(x) para x em {0,1,2} = 9",
                   f(3) == 7 and sum(f(x) for x in range(3)) == 9))

    # 4. Média (vetor) e probabilidade (fração de casos).
    checks.append(("média do vetor [2,4,6,8] = 5.0", media([2, 4, 6, 8]) == 5.0))
    faces = [1, 2, 3, 4, 5, 6]
    p_par = len([x for x in faces if x % 2 == 0]) / len(faces)   # P(par) = 3/6
    esperanca = media(faces)                                     # E[dado] = 3.5
    checks.append(("dado justo: P(par)=0.5 e valor esperado E[dado]=3.5", p_par == 0.5 and esperanca == 3.5))

    print("=== Módulo 0 (Matemática) — somatório, crescimento, função e probabilidade ===\n")
    print(f"soma 1..100  laço={soma_ate(100)}  fórmula={forma_fechada(100)}")
    print(f"em n=10  ->  log2={logaritmo:.2f}  linear={linear}  quadrático={quadratico}  exponencial={exponencial}")
    print(f"dado justo  ->  P(par)={p_par}  E[dado]={esperanca}\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("Lição: uma fórmula que você prova (o laço confere) vale mais que uma decorada. Reconhecer")
    print("o ritmo de crescimento e pensar em média/probabilidade é o que a álgebra, o cálculo e a IA usam.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
