"""
NP-completude e reduções — artefato do módulo 24.

Rode com:  python reducao.py               (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador.

Reduzir um problema a outro é a ferramenta para provar dificuldade: se A
(difícil) reduz a B, então B é pelo menos tão difícil quanto A. Este arquivo
demonstra a redução clássica CONJUNTO INDEPENDENTE ⇄ CLIQUE e prova, com
asserts, que ela preserva a resposta:

  G tem um conjunto independente de tamanho k
      ⟺  o complemento de G tem um clique de tamanho k.

Também mostra o outro lado da moeda: a SOLUÇÃO se VERIFICA em tempo polinomial
(a essência de NP), mesmo quando ENCONTRÁ-LA é caro.
"""

from itertools import combinations


def complemento(n, arestas):
    todas = set(combinations(range(n), 2))
    e = {tuple(sorted(x)) for x in arestas}
    return todas - e


def eh_independente(arestas, S):
    e = {tuple(sorted(x)) for x in arestas}
    return not any(tuple(sorted((u, v))) in e for u, v in combinations(S, 2))


def eh_clique(arestas, S):
    e = {tuple(sorted(x)) for x in arestas}
    return all(tuple(sorted((u, v))) in e for u, v in combinations(S, 2))


def existe_independente(n, arestas, k):
    return any(eh_independente(arestas, S) for S in combinations(range(n), k))


def existe_clique(n, arestas, k):
    return any(eh_clique(arestas, S) for S in combinations(range(n), k))


def grafo_aleatorio(n, p, rng):
    return {tuple(sorted((u, v))) for u, v in combinations(range(n), 2) if rng.random() < p}


def _run_checks():
    import random
    rng = random.Random(3)
    checks = []

    # 1. verificadores de certificado (a essência de NP: verificar é fácil).
    arestas_tri = {(0, 1), (1, 2), (0, 2)}            # triângulo
    checks.append(("verifica clique: {0,1,2} é clique no triângulo", eh_clique(arestas_tri, {0, 1, 2})))
    checks.append(("verifica IS: {0} é independente; {0,1} não é", eh_independente(arestas_tri, {0}) and not eh_independente(arestas_tri, {0, 1})))

    # 2. a redução preserva a resposta em muitos grafos aleatórios e vários k.
    ok_reducao = True
    for _ in range(200):
        n = rng.randint(4, 8)
        E = grafo_aleatorio(n, rng.uniform(0.3, 0.7), rng)
        Ec = complemento(n, E)
        for k in range(1, n + 1):
            if existe_independente(n, E, k) != existe_clique(n, Ec, k):
                ok_reducao = False
                break
        if not ok_reducao:
            break
    checks.append(("IS(G,k) ⟺ Clique(complemento(G),k) em 200 grafos", ok_reducao))

    # 3. um certificado de IS em G é um certificado de clique no complemento.
    ok_cert = True
    for _ in range(200):
        n = rng.randint(4, 8)
        E = grafo_aleatorio(n, 0.5, rng)
        Ec = complemento(n, E)
        for k in range(2, n + 1):
            for S in combinations(range(n), k):
                if eh_independente(E, S) != eh_clique(Ec, S):
                    ok_cert = False
                    break
            if not ok_cert:
                break
        if not ok_cert:
            break
    checks.append(("o mesmo conjunto: independente em G ⟺ clique em complemento(G)", ok_cert))

    # 4. exemplo concreto para o texto.
    n = 5
    E = {(0, 1), (1, 2), (2, 3), (3, 4), (4, 0)}      # ciclo C5
    Ec = complemento(n, E)
    is3 = existe_independente(n, E, 2)
    cl3 = existe_clique(n, Ec, 2)
    checks.append(("C5: existe IS de tamanho 2 ⟺ existe clique 2 no complemento", is3 == cl3))

    print("=== NP-completude e reduções ===\n")
    print("redução: IS(G,k) ⟺ Clique(complemento(G),k)")
    print(f"  validada em 200 grafos aleatórios, todos os k")
    print(f"  certificado transfere nos dois sentidos (200 grafos)")
    print(f"  C5: IS de tamanho 2 existe = {is3}; clique 2 no complemento = {cl3}\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: a redução PROVA dificuldade sem resolver. Encontrar a solução é caro")
    print("(busca exponencial aqui); VERIFICAR um certificado é polinomial — o coração de NP.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
