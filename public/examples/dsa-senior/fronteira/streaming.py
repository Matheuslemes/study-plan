"""
Streaming e sketching — artefato do módulo 22.

Rode com:  python streaming.py             (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador.

Quando o dado não cabe na memória, troca-se exatidão por espaço sublinear com
erro limitado. Este arquivo implementa e prova, com asserts, três sketches:

  1. Bloom filter — nunca dá falso negativo; a taxa de falso positivo bate a
     teórica (1 − e^(−kn/m))^k;
  2. reservoir sampling — amostra uniforme de tamanho k em uma passada, sem
     saber o tamanho do stream;
  3. HyperLogLog — estima cardinalidade em poucos kB com erro de poucos %.
"""

import hashlib
import math
import random


# --- 1. Bloom filter ---------------------------------------------------------
class Bloom:
    def __init__(self, m_bits, k_hashes):
        self.m = m_bits
        self.k = k_hashes
        self.bits = bytearray((m_bits + 7) // 8)

    def _hashes(self, item):
        # double hashing: h_i = (h1 + i*h2) mod m — dois hashes geram k índices.
        d = hashlib.sha256(str(item).encode()).digest()
        h1 = int.from_bytes(d[:8], "big")
        h2 = int.from_bytes(d[8:16], "big") | 1
        for i in range(self.k):
            yield (h1 + i * h2) % self.m

    def add(self, item):
        for idx in self._hashes(item):
            self.bits[idx >> 3] |= 1 << (idx & 7)

    def __contains__(self, item):
        return all(self.bits[idx >> 3] & (1 << (idx & 7)) for idx in self._hashes(item))


# --- 2. reservoir sampling ---------------------------------------------------
def reservoir(stream, k, rng):
    res = []
    for i, x in enumerate(stream):
        if i < k:
            res.append(x)
        else:
            j = rng.randrange(i + 1)      # P(manter) = k/(i+1)
            if j < k:
                res[j] = x
    return res


# --- 3. HyperLogLog ----------------------------------------------------------
class HyperLogLog:
    def __init__(self, p=14):
        self.p = p
        self.m = 1 << p
        self.reg = bytearray(self.m)

    def add(self, item):
        h = int.from_bytes(hashlib.sha1(str(item).encode()).digest()[:8], "big")
        idx = h & (self.m - 1)
        w = h >> self.p
        rank = (64 - self.p) - w.bit_length() + 1 if w else (64 - self.p) + 1
        if rank > self.reg[idx]:
            self.reg[idx] = rank

    def count(self):
        alpha = 0.7213 / (1 + 1.079 / self.m)
        soma = sum(2.0 ** -r for r in self.reg)
        est = alpha * self.m * self.m / soma
        if est <= 2.5 * self.m:                     # correção para cardinalidade baixa
            zeros = self.reg.count(0)
            if zeros:
                est = self.m * math.log(self.m / zeros)
        return est


def _run_checks():
    random.seed(1)
    checks = []

    # 1. Bloom: zero falso negativo, e FP próximo do teórico.
    n, m, k = 2000, 20000, 7
    bf = Bloom(m, k)
    inseridos = [f"user-{i}" for i in range(n)]
    for x in inseridos:
        bf.add(x)
    fn = sum(1 for x in inseridos if x not in bf)
    checks.append(("Bloom: zero falso negativo", fn == 0))

    testes = [f"outsider-{i}" for i in range(20000)]
    fp = sum(1 for x in testes if x in bf) / len(testes)
    fp_teorico = (1 - math.exp(-k * n / m)) ** k
    checks.append((f"Bloom: FP medido {fp:.4f} ≈ teórico {fp_teorico:.4f}", abs(fp - fp_teorico) < 0.02))

    # 2. reservoir: cada elemento entra com frequência ~ k/n.
    N, kk, trials = 50, 5, 20000
    contagem = [0] * N
    for _ in range(trials):
        for x in reservoir(range(N), kk, random):
            contagem[x] += 1
    freq = [c / trials for c in contagem]
    esperado = kk / N
    max_desvio = max(abs(f - esperado) for f in freq)
    checks.append((f"reservoir: uniforme (freq ≈ {esperado:.2f}, desvio máx {max_desvio:.3f})", max_desvio < 0.02))

    # 3. HyperLogLog: erro relativo pequeno para muitos distintos.
    hll = HyperLogLog(p=14)
    verdadeiro = 100000
    for i in range(verdadeiro):
        hll.add(f"item-{i}")
    est = hll.count()
    err = abs(est - verdadeiro) / verdadeiro
    checks.append((f"HLL: estimativa {est:.0f} vs {verdadeiro} (erro {err:.2%})", err < 0.05))
    # sanidade: repetir itens não muda a cardinalidade estimada.
    for i in range(verdadeiro):
        hll.add(f"item-{i}")
    checks.append(("HLL: reinserir os mesmos itens não infla a contagem", abs(hll.count() - est) / est < 0.001))

    print("=== Streaming e sketching ===\n")
    print(f"Bloom: n={n}, m={m} bits, k={k}  ->  FP {fp:.4f} (teórico {fp_teorico:.4f}), FN {fn}")
    print(f"reservoir: k={kk} de N={N}, desvio máx de uniformidade {max_desvio:.3f}")
    print(f"HLL(p=14, {1<<14} registros): {verdadeiro} distintos estimados em {est:.0f} (erro {err:.2%})\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: sketches trocam exatidão por espaço sublinear com erro DIMENSIONÁVEL.")
    print("Bloom nunca erra o negativo; HLL conta bilhões de distintos em kilobytes.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
