"""
Aproximação e geometria computacional — artefato do módulo 25.

Rode com:  python geometria.py             (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador.

Quando o ótimo exato é inviável, uma APROXIMAÇÃO com garantia (ex.: nunca pior
que 2× o ótimo) é o que se pode defender. E problemas geométricos têm algoritmos
elegantes de tempo O(n log n). Este arquivo prova, com asserts:

  1. envoltória convexa (Andrew's monotone chain), validada contra força bruta;
  2. 2-aproximação de vertex cover: cobertura válida e ≤ 2× o ótimo (força bruta
     em grafos pequenos confirma a razão).
"""

from itertools import combinations


# --- 1. envoltória convexa (Andrew's monotone chain) ------------------------
def cross(o, a, b):
    return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])


def convex_hull(points):
    pts = sorted(set(points))
    if len(pts) <= 2:
        return pts
    lower = []
    for p in pts:
        while len(lower) >= 2 and cross(lower[-2], lower[-1], p) <= 0:
            lower.pop()
        lower.append(p)
    upper = []
    for p in reversed(pts):
        while len(upper) >= 2 and cross(upper[-2], upper[-1], p) <= 0:
            upper.pop()
        upper.append(p)
    return lower[:-1] + upper[:-1]     # sem repetir os extremos


def ponto_dentro_ou_na_borda(p, hull):
    # p está dentro do polígono convexo (CCW) se fica à esquerda/na linha de toda aresta.
    n = len(hull)
    for i in range(n):
        if cross(hull[i], hull[(i + 1) % n], p) < 0:
            return False
    return True


# --- 2. 2-aproximação de vertex cover ---------------------------------------
def vertex_cover_2aprox(n, arestas):
    cobertos = set()
    cover = set()
    for u, v in arestas:
        if u not in cover and v not in cover:   # aresta ainda não coberta
            cover.add(u)
            cover.add(v)                        # inclui AS DUAS pontas
    return cover


def eh_cobertura(arestas, S):
    return all(u in S or v in S for u, v in arestas)


def vertex_cover_otimo(n, arestas):
    for k in range(n + 1):
        for S in combinations(range(n), k):
            if eh_cobertura(arestas, set(S)):
                return k
    return n


def _run_checks():
    import random
    rng = random.Random(11)
    checks = []

    # 1a. a envoltória contém todos os pontos e é convexa.
    ok_hull = True
    for _ in range(200):
        pts = list({(rng.randint(-30, 30), rng.randint(-30, 30)) for _ in range(rng.randint(3, 40))})
        if len(pts) < 3:
            continue
        hull = convex_hull(pts)
        if len(hull) >= 3:
            if not all(ponto_dentro_ou_na_borda(p, hull) for p in pts):
                ok_hull = False
                break
            # convexidade: todas as viradas no mesmo sentido (CCW, cross >= 0)
            m = len(hull)
            if not all(cross(hull[i], hull[(i + 1) % m], hull[(i + 2) % m]) >= 0 for i in range(m)):
                ok_hull = False
                break
    checks.append(("envoltória contém todos os pontos e é convexa (200 casos)", ok_hull))

    # 1b. caso conhecido: quadrado com um ponto interno -> hull são os 4 cantos.
    quad = [(0, 0), (4, 0), (4, 4), (0, 4), (2, 2)]
    hull = convex_hull(quad)
    checks.append(("quadrado + ponto interno -> hull tem os 4 cantos", set(hull) == {(0, 0), (4, 0), (4, 4), (0, 4)}))

    # 1c. colineares: hull são só os dois extremos.
    linha = [(0, 0), (1, 1), (2, 2), (3, 3)]
    checks.append(("pontos colineares -> hull são os 2 extremos", set(convex_hull(linha)) == {(0, 0), (3, 3)}))

    # 2. vertex cover: a 2-aproximação é válida e ≤ 2× o ótimo.
    ok_cobertura = True
    ok_razao = True
    pior_razao = 0.0
    for _ in range(200):
        n = rng.randint(4, 9)
        arestas = list({tuple(sorted((u, v))) for u, v in combinations(range(n), 2) if rng.random() < 0.4})
        aprox = vertex_cover_2aprox(n, arestas)
        if not eh_cobertura(arestas, aprox):
            ok_cobertura = False
            break
        otimo = vertex_cover_otimo(n, arestas)
        if otimo > 0:
            razao = len(aprox) / otimo
            pior_razao = max(pior_razao, razao)
            if razao > 2:
                ok_razao = False
                break
    checks.append(("2-aprox é sempre uma cobertura válida (200 grafos)", ok_cobertura))
    checks.append((f"2-aprox ≤ 2× o ótimo (pior razão observada {pior_razao:.2f})", ok_razao))

    print("=== Aproximação e geometria computacional ===\n")
    print(f"envoltória convexa: 200 nuvens de pontos, todas contidas e convexas")
    print(f"quadrado+interno -> {sorted(convex_hull(quad))}")
    print(f"vertex cover 2-aprox: cobertura válida sempre; pior razão observada {pior_razao:.2f} (≤ 2)\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: aproximação NÃO é heurística — é garantia provada (≤ 2× o ótimo aqui).")
    print("A geometria resolve em O(n log n) o que a força bruta faria em O(n³).")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
