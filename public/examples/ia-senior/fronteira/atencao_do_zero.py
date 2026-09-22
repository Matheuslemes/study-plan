"""
Atenção do zero — artefato do módulo 27.

Rode com:  python atencao_do_zero.py        (requer apenas numpy)
Verificado sob Pyodide 0.28 (CPython 3.13 + numpy) no navegador.

Nada de framework. Só numpy. O objetivo não é "usar attention" — é conseguir
derivar cada passo e provar, com asserts, que a implementação obedece à
definição. Quem só chama `nn.MultiheadAttention` não sabe o que quebra quando
a máscara está errada.

Cobre:
  1. softmax numericamente estável (subtração do máximo)
  2. scaled dot-product attention  (Vaswani et al., 2017)
  3. máscara causal — o passo que separa treino de vazamento de futuro
  4. multi-head como projeções independentes concatenadas
"""

import numpy as np


def softmax(x, axis=-1):
    # Estável: subtrair o máximo evita overflow em exp(). Sem isso, um logit
    # grande vira inf e a linha toda vira nan — o bug clássico de quem escreve
    # softmax "pela fórmula do livro".
    x = x - np.max(x, axis=axis, keepdims=True)
    e = np.exp(x)
    return e / np.sum(e, axis=axis, keepdims=True)


def scaled_dot_product_attention(Q, K, V, mask=None):
    # Q: (..., n_q, d_k)  K: (..., n_k, d_k)  V: (..., n_k, d_v)
    d_k = Q.shape[-1]
    scores = (Q @ np.swapaxes(K, -1, -2)) / np.sqrt(d_k)   # (..., n_q, n_k)
    if mask is not None:
        # onde mask == 0, o score vira -inf -> peso 0 depois do softmax.
        scores = np.where(mask == 0, -1e9, scores)
    weights = softmax(scores, axis=-1)                      # (..., n_q, n_k)
    return weights @ V, weights                             # (..., n_q, d_v)


def causal_mask(n):
    # Triangular inferior: a posição i só enxerga 0..i. É isto que impede o
    # modelo de "ler a resposta" durante o treino autoregressivo.
    return np.tril(np.ones((n, n), dtype=np.int64))


def multi_head_attention(X, Wq, Wk, Wv, Wo, n_heads, mask=None):
    # X: (n, d_model). Wq/Wk/Wv: (d_model, d_model). Wo: (d_model, d_model).
    n, d_model = X.shape
    assert d_model % n_heads == 0, "d_model precisa ser divisível por n_heads"
    d_head = d_model // n_heads

    Q = (X @ Wq).reshape(n, n_heads, d_head).transpose(1, 0, 2)  # (h, n, d_head)
    K = (X @ Wk).reshape(n, n_heads, d_head).transpose(1, 0, 2)
    V = (X @ Wv).reshape(n, n_heads, d_head).transpose(1, 0, 2)

    out, _ = scaled_dot_product_attention(Q, K, V, mask=mask)    # (h, n, d_head)
    out = out.transpose(1, 0, 2).reshape(n, d_model)            # concatena cabeças
    return out @ Wo


def _run_checks():
    rng = np.random.default_rng(0)
    checks = []

    # 1. softmax: cada linha soma 1 e é estável a logits enormes.
    s = softmax(np.array([[1000.0, 1000.0, 1000.0]]))
    checks.append(("softmax estável a logits grandes (sem nan)", not np.isnan(s).any()))
    checks.append(("softmax soma 1 por linha", np.allclose(s.sum(axis=-1), 1.0)))

    # 2. attention: pesos formam distribuição; saída tem shape de V.
    n, d = 4, 8
    Q, K, V = rng.standard_normal((n, d)), rng.standard_normal((n, d)), rng.standard_normal((n, d))
    out, w = scaled_dot_product_attention(Q, K, V)
    checks.append(("pesos de atenção somam 1 por consulta", np.allclose(w.sum(axis=-1), 1.0)))
    checks.append(("saída tem o shape de V", out.shape == V.shape))

    # 3. máscara causal: a consulta 0 só pode olhar a chave 0.
    m = causal_mask(n)
    _, wc = scaled_dot_product_attention(Q, K, V, mask=m)
    linha0_futuro = wc[0, 1:]
    checks.append(("máscara causal zera o futuro da 1ª posição", np.allclose(linha0_futuro, 0.0)))
    checks.append(("máscara causal é triangular inferior", np.array_equal(m, np.tril(m))))

    # 4. multi-head com 1 cabeça == atenção simples projetada (sanidade).
    d_model = 8
    X = rng.standard_normal((n, d_model))
    I = np.eye(d_model)
    mh1 = multi_head_attention(X, I, I, I, I, n_heads=1, mask=causal_mask(n))
    single, _ = scaled_dot_product_attention(X, X, X, mask=causal_mask(n))
    checks.append(("multi-head(1 cabeça, W=I) == atenção simples", np.allclose(mh1, single)))

    # 5. multi-head real: shape preservado e determinístico.
    Wq, Wk, Wv, Wo = (rng.standard_normal((d_model, d_model)) for _ in range(4))
    mh = multi_head_attention(X, Wq, Wk, Wv, Wo, n_heads=2, mask=causal_mask(n))
    checks.append(("multi-head preserva (n, d_model)", mh.shape == (n, d_model)))

    print("=== Atenção do zero ===\n")
    print(f"pesos causais da posição 2 (só 0,1,2 são != 0):\n{np.round(wc[2], 3)}\n")
    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
