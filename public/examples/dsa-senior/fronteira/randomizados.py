"""
Algoritmos randomizados — artefato do módulo 21.

Rode com:  python randomizados.py           (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador.

A aleatoriedade compra duas coisas que o determinismo não dá de graça:
desempenho esperado robusto a adversário e simplicidade com garantia. Este
arquivo prova, com asserts, três usos canônicos e a diferença Las Vegas ×
Monte Carlo:

  1. quickselect (Las Vegas): sempre correto, O(n) esperado com pivô aleatório;
  2. hashing universal: função sorteada tira do adversário o poder de forçar
     colisões — o pior caso deixa de depender da entrada;
  3. Miller-Rabin (Monte Carlo): tempo fixo, erro limitado que some com repetição.
"""

import random


# --- 1. quickselect (Las Vegas) ---------------------------------------------
def quickselect(a, k):
    """k-ésimo menor (0-indexado). Pivô aleatório => O(n) esperado."""
    a = list(a)
    while True:
        if len(a) == 1:
            return a[0]
        pivo = a[random.randrange(len(a))]
        menores = [x for x in a if x < pivo]
        iguais = [x for x in a if x == pivo]
        maiores = [x for x in a if x > pivo]
        if k < len(menores):
            a = menores
        elif k < len(menores) + len(iguais):
            return pivo
        else:
            k -= len(menores) + len(iguais)
            a = maiores


# --- 2. hashing universal ----------------------------------------------------
def hash_universal(a, b, p, m):
    return lambda x: ((a * x + b) % p) % m


def maior_bucket(chaves, h, m):
    buckets = [0] * m
    for x in chaves:
        buckets[h(x)] += 1
    return max(buckets)


# --- 3. Miller-Rabin (Monte Carlo) ------------------------------------------
def is_prime(n, rodadas=20):
    if n < 2:
        return False
    for p in (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37):
        if n % p == 0:
            return n == p
    d, r = n - 1, 0
    while d % 2 == 0:
        d //= 2
        r += 1
    for _ in range(rodadas):
        a = random.randrange(2, n - 1)
        x = pow(a, d, n)
        if x == 1 or x == n - 1:
            continue
        for _ in range(r - 1):
            x = x * x % n
            if x == n - 1:
                break
        else:
            return False           # composto (testemunha encontrada)
    return True                    # provavelmente primo


def _primo_trivial(n):
    if n < 2:
        return False
    i = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i += 1
    return True


def _run_checks():
    random.seed(42)
    checks = []

    # 1. quickselect sempre acerta (Las Vegas), comparado com ordenação.
    ok_qs = True
    for _ in range(300):
        arr = [random.randint(-50, 50) for _ in range(random.randint(1, 60))]
        k = random.randrange(len(arr))
        if quickselect(arr, k) != sorted(arr)[k]:
            ok_qs = False
            break
    checks.append(("quickselect == k-ésimo por ordenação (300 casos)", ok_qs))

    # 2. hashing universal derrota o adversário do hash fixo.
    m = 64
    # adversário: todas as chaves colidem no hash fixo h(x)=x mod m (múltiplos de m).
    adversarias = [m * i for i in range(1, 501)]
    fixo = lambda x: x % m
    pior_fixo = maior_bucket(adversarias, fixo, m)     # = 500: todas no mesmo bucket
    p = 2_000_003                                        # primo > max chave
    piores_universais = []
    for _ in range(20):
        a = random.randrange(1, p)
        b = random.randrange(0, p)
        piores_universais.append(maior_bucket(adversarias, hash_universal(a, b, p, m), m))
    media_universal = sum(piores_universais) / len(piores_universais)
    checks.append((f"hash fixo colide tudo (maior bucket = {pior_fixo})", pior_fixo == len(adversarias)))
    checks.append((f"hash universal espalha (maior bucket médio {media_universal:.0f} << {pior_fixo})",
                   media_universal < pior_fixo / 10))

    # 3. Miller-Rabin bate a força bruta para todo n < 2000...
    ok_mr = all(is_prime(n) == _primo_trivial(n) for n in range(2000))
    checks.append(("Miller-Rabin == trial division para n < 2000", ok_mr))
    # ...e acerta casos conhecidos difíceis.
    checks.append(("2**31-1 (2147483647) é primo", is_prime(2147483647)))
    checks.append(("561 (Carmichael) é composto", not is_prime(561)))
    checks.append(("10**9+7 é primo", is_prime(10**9 + 7)))

    print("=== Algoritmos randomizados ===\n")
    print(f"quickselect: 300 casos, todos corretos (Las Vegas)")
    print(f"hash fixo (adversário):     maior bucket = {pior_fixo} de {len(adversarias)}")
    print(f"hash universal (sorteado):  maior bucket ≈ {media_universal:.0f}")
    print(f"Miller-Rabin: correto p/ n<2000, e em 2^31-1, 561, 10^9+7\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: Las Vegas troca tempo fixo por tempo esperado, sempre correto;")
    print("Monte Carlo troca certeza por tempo fixo, com erro que a repetição derruba.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
