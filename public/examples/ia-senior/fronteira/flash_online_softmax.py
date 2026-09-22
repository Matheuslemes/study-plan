"""
FlashAttention por dentro: softmax online e tiling — artefato do módulo 29.

Rode com:  python flash_online_softmax.py     (requer apenas numpy)
Verificado sob Pyodide 0.28 no navegador.

FlashAttention (Dao et al., 2022; FA-2 2023; FA-3 2024; FA-4 2026 para Blackwell)
não muda a MATEMÁTICA da atenção — muda o ACESSO À MEMÓRIA. A ideia central,
que dá para provar num laptop sem GPU, é o *softmax online*: calcular
softmax(QKᵀ)V em blocos, sem nunca materializar a matriz n×n de scores.

Este arquivo prova, com numpy, que a versão em blocos (tiled) é numericamente
IGUAL à ingênua — a diferença é onde os bytes moram, não o resultado.

Por que isso importa (o que a GPU ganha e o laptop não mostra):
  - a matriz de scores é O(n²); em contexto longo ela não cabe na SRAM.
  - a versão ingênua vai à HBM (memória lenta) O(n²) vezes.
  - a tiled mantém só um bloco na memória rápida: O(n²) vira tráfego de SRAM.
  - o resultado é idêntico; o tempo, não. É uma otimização de I/O, não de FLOPs.
"""

import numpy as np


def attention_naive(Q, K, V):
    """A forma do livro: materializa a matriz n×n inteira. Simples e cara."""
    d_k = Q.shape[-1]
    scores = (Q @ K.T) / np.sqrt(d_k)                 # (n, n)  <- O(n²) em memória
    scores = scores - scores.max(axis=-1, keepdims=True)
    weights = np.exp(scores)
    weights = weights / weights.sum(axis=-1, keepdims=True)
    return weights @ V


def attention_flash(Q, K, V, block_size=16):
    """
    Softmax online: percorre K/V em blocos, mantendo por linha um acumulador
    (m = máximo corrente, l = soma corrente, acc = saída corrente) e
    RECORRIGINDO os acumuladores quando um bloco traz um máximo maior.
    Nunca existe uma matriz (n, n) na memória — só (n, block_size).
    """
    n, d_k = Q.shape
    d_v = V.shape[1]
    scale = 1.0 / np.sqrt(d_k)

    m = np.full((n, 1), -np.inf)     # máximo corrente por linha
    l = np.zeros((n, 1))             # soma dos exp corrente por linha
    acc = np.zeros((n, d_v))         # numerador corrente (Σ p·V) por linha

    for start in range(0, n, block_size):
        end = min(start + block_size, n)
        Kb, Vb = K[start:end], V[start:end]           # bloco: (b, d)
        s = (Q @ Kb.T) * scale                         # (n, b)  <- só um bloco

        m_new = np.maximum(m, s.max(axis=-1, keepdims=True))
        p = np.exp(s - m_new)                           # (n, b)
        corr = np.exp(m - m_new)                        # fator de correção do passado
        l = corr * l + p.sum(axis=-1, keepdims=True)
        acc = corr * acc + p @ Vb                       # reescala o acumulado e soma o novo
        m = m_new

    return acc / l


def _run_checks():
    rng = np.random.default_rng(7)
    checks = []

    for (n, d) in [(64, 32), (100, 16), (128, 64)]:
        Q = rng.standard_normal((n, d))
        K = rng.standard_normal((n, d))
        V = rng.standard_normal((n, d))
        ref = attention_naive(Q, K, V)
        for bs in (1, 8, 16, 32):
            got = attention_flash(Q, K, V, block_size=bs)
            diff = np.max(np.abs(ref - got))
            checks.append((f"n={n} d={d} block={bs}: |flash-naive| < 1e-10", diff < 1e-10))

    # borda: bloco maior que a sequência tem de funcionar (um bloco só).
    Q = rng.standard_normal((10, 8)); K = rng.standard_normal((10, 8)); V = rng.standard_normal((10, 8))
    diff_big = np.max(np.abs(attention_naive(Q, K, V) - attention_flash(Q, K, V, block_size=999)))
    checks.append(("bloco > n cai no caso single-block", diff_big < 1e-10))

    # o exemplo numérico para o texto
    n, d = 128, 64
    Q = rng.standard_normal((n, d)); K = rng.standard_normal((n, d)); V = rng.standard_normal((n, d))
    ref = attention_naive(Q, K, V)
    got = attention_flash(Q, K, V, block_size=16)

    print("=== FlashAttention: softmax online por blocos ===\n")
    print(f"sequência n=128, d=64, bloco=16")
    print(f"matriz de scores que a ingênua materializa: {n}x{n} = {n*n} floats")
    print(f"maior fatia que a tiled mantém:            {n}x16 = {n*16} floats")
    print(f"máx |flash - naive| = {np.max(np.abs(ref-got)):.2e}  (idêntico a menos de ruído de ponto flutuante)\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: mesmo resultado, memória O(n·bloco) em vez de O(n²).")
    print("A GPU transforma isso em 1,3–2,7× de velocidade (FA-4, Blackwell). O laptop só prova a igualdade.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
