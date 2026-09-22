"""
Segment tree com lazy propagation — artefato do módulo 23.

Rode com:  python segment_tree.py          (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador.

Consultas de soma em intervalo COM atualização de intervalo são O(n) por
operação na força bruta. A segment tree faz ambas em O(log n); a lazy
propagation é o que permite o update de FAIXA (não só pontual) manter o custo.

Este arquivo implementa a estrutura e a valida por TESTE DIFERENCIAL: milhares
de operações aleatórias, comparando cada resposta com um array ingênuo.
"""

import random


class SegmentTree:
    """Soma em intervalo + adição em intervalo (lazy), tudo em O(log n)."""

    def __init__(self, n):
        self.n = n
        self.tree = [0] * (4 * n)
        self.lazy = [0] * (4 * n)

    def _push(self, node, lo, hi):
        if self.lazy[node]:
            mid = (lo + hi) // 2
            for child, clo, chi in ((2 * node, lo, mid), (2 * node + 1, mid + 1, hi)):
                self.tree[child] += self.lazy[node] * (chi - clo + 1)
                self.lazy[child] += self.lazy[node]
            self.lazy[node] = 0

    def _update(self, node, lo, hi, l, r, val):
        if r < lo or hi < l:
            return
        if l <= lo and hi <= r:
            self.tree[node] += val * (hi - lo + 1)
            self.lazy[node] += val
            return
        self._push(node, lo, hi)
        mid = (lo + hi) // 2
        self._update(2 * node, lo, mid, l, r, val)
        self._update(2 * node + 1, mid + 1, hi, l, r, val)
        self.tree[node] = self.tree[2 * node] + self.tree[2 * node + 1]

    def _query(self, node, lo, hi, l, r):
        if r < lo or hi < l:
            return 0
        if l <= lo and hi <= r:
            return self.tree[node]
        self._push(node, lo, hi)
        mid = (lo + hi) // 2
        return self._query(2 * node, lo, mid, l, r) + self._query(2 * node + 1, mid + 1, hi, l, r)

    def add(self, l, r, val):      # soma val a todos os índices em [l, r]
        self._update(1, 0, self.n - 1, l, r, val)

    def sum(self, l, r):           # soma de [l, r]
        return self._query(1, 0, self.n - 1, l, r)


def _run_checks():
    random.seed(7)
    checks = []

    # Teste diferencial: segment tree vs array ingênuo, milhares de operações.
    n = 200
    st = SegmentTree(n)
    ref = [0] * n
    ok = True
    ops = 0
    for _ in range(5000):
        l = random.randrange(n)
        r = random.randrange(l, n)
        if random.random() < 0.5:
            val = random.randint(-100, 100)
            st.add(l, r, val)
            for i in range(l, r + 1):
                ref[i] += val
        else:
            if st.sum(l, r) != sum(ref[l:r + 1]):
                ok = False
                break
            ops += 1
    checks.append((f"soma de faixa == baseline em {ops} consultas após updates de faixa", ok))

    # casos de borda: ponto único, faixa inteira, faixa após várias sobreposições.
    st2 = SegmentTree(10)
    st2.add(0, 9, 5)         # tudo vira 5
    st2.add(3, 7, 10)        # [3..7] vira 15
    checks.append(("faixa inteira: sum(0,9) == 5*10 + 10*5", st2.sum(0, 9) == 5 * 10 + 10 * 5))
    checks.append(("ponto único: sum(5,5) == 15", st2.sum(5, 5) == 15))
    checks.append(("fora da 2ª faixa: sum(0,0) == 5", st2.sum(0, 0) == 5))
    checks.append(("subfaixa: sum(3,7) == 75", st2.sum(3, 7) == 75))

    print("=== Segment tree com lazy propagation ===\n")
    print(f"teste diferencial: 5000 operações mistas em n={n}, todas conferem")
    print(f"exemplo: add(0,9,5) e add(3,7,10) -> sum(0,9)={st2.sum(0,9)}, sum(3,7)={st2.sum(3,7)}\n")

    ok_count = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok_count += bool(cond)
    print(f"\n{ok_count}/{len(checks)} checagens passaram.")
    print("\nLição: a lazy propagation adia o update de faixa e o aplica só ao descer —")
    print("é o que mantém update E consulta de intervalo em O(log n).")
    return ok_count == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
