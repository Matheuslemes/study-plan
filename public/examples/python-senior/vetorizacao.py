"""
Módulo 15 (Python) — Computação numérica: a ideia da vetorização.

Rode com:  python vetorizacao.py        (só a biblioteca padrão)
Verificado sob Pyodide (CPython) e a lógica conferida em Node.

Vetorizar é operar sobre a coleção inteira de uma vez, em vez de laço item a item.
Aqui reproduzimos, em Python puro, as operações que o NumPy faz vetorizadas
(soma elementar, escala, produto interno, média, normalização) para ver a semântica.
"""


def soma_vetores(a, b):
    return [x + y for x, y in zip(a, b)]        # elementwise, como a + b no NumPy


def escala(a, k):
    return [x * k for x in a]                    # broadcast de escalar


def produto_interno(a, b):
    return sum(x * y for x, y in zip(a, b))      # a @ b


def media(a):
    return sum(a) / len(a)


def _run_checks():
    checks = []
    a = [1.0, 2.0, 3.0, 4.0]
    b = [10.0, 20.0, 30.0, 40.0]

    checks.append(("soma elementar: a + b", soma_vetores(a, b) == [11, 22, 33, 44]))
    checks.append(("escala por escalar: 2*a", escala(a, 2) == [2, 4, 6, 8]))
    checks.append(("produto interno a·b = 300", produto_interno(a, b) == 300.0))
    checks.append(("média de a = 2.5", media(a) == 2.5))

    # Vetorizado dá o MESMO resultado do laço explícito — só que expresso de uma vez.
    laco = []
    for i in range(len(a)):
        laco.append(a[i] + b[i])
    checks.append(("vetorizado == laço explícito (mesma semântica)", laco == soma_vetores(a, b)))

    # Normalização (centrar na média) — padrão em pré-processamento de dados.
    m = media(a)
    centrado = [x - m for x in a]
    checks.append(("normalizar centrando na média: soma ~0", abs(sum(centrado)) < 1e-9))

    # Produto interno de vetor consigo = soma dos quadrados (norma²).
    checks.append(("a·a = soma dos quadrados (norma²) = 30", produto_interno(a, a) == 30.0))

    print("=== Módulo 15 (Python) — vetorização (a semântica do NumPy) ===\n")
    print("a+b =", soma_vetores(a, b), "| a·b =", produto_interno(a, b), "| média(a) =", media(a), "\n")
    ok = sum(1 for _, c in checks if c)
    for nome, c in checks:
        print(f"  {'ok  ' if c else 'FALHOU'} {nome}")
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("Lição: vetorizar expressa a operação sobre o array inteiro (mesma semântica do laço); o NumPy faz isso em C, ganhando ordens de magnitude.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
