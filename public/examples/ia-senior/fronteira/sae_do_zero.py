"""
Autoencoder esparso (SAE) do zero — artefato do módulo 31.

Rode com:  python sae_do_zero.py             (requer apenas numpy)
Verificado sob Pyodide 0.28 no navegador.

Interpretabilidade mecanicista pergunta: o que UMA ativação significa? O
problema é a SUPERPOSIÇÃO — a rede empacota mais conceitos do que tem neurônios,
então cada neurônio é polissemântico (dispara para coisas não relacionadas).

O SAE (linha central da interpretabilidade da Anthropic, 2023–2025; base do
circuit tracing e dos attribution graphs de 2025) desempacota isso: aprende um
dicionário SUPERCOMPLETO e ESPARSO onde cada característica tende a ser
monossemântica.

Este arquivo constrói o cenário clássico "toy models of superposition":
  - há K conceitos verdadeiros, esparsos e independentes;
  - eles são COMPRIMIDOS num espaço de dimensão menor (superposição);
  - um SAE treinado por gradiente RECUPERA os conceitos originais.
Prova, com asserts, que o SAE reconstrói melhor que a base e recupera as
direções plantadas.
"""

import numpy as np


def relu(x):
    return np.maximum(0.0, x)


def gerar_dados(n, n_conceitos, prob, rng):
    # Conceitos verdadeiros: esparsos (cada um ativo com probabilidade `prob`)
    # e com magnitude clara. É o "mundo real" que a rede observa.
    ativo = (rng.random((n, n_conceitos)) < prob).astype(np.float64)
    magnitude = 0.5 + rng.random((n, n_conceitos))   # em [0.5, 1.5]
    return ativo * magnitude                     # (n, n_conceitos), esparso


def treinar_sae(X, n_features, passos, lr, l1, rng):
    """
    SAE:  h = relu(W_enc · (x - b_dec) + b_enc);  x_hat = W_dec · h + b_dec
    Perda = ||x - x_hat||²  +  l1 · ||h||₁   (o L1 força a esparsidade)

    Três truques padrão de SAE, escritos à mão, que fazem a recuperação funcionar:
      - b_dec (viés do decoder) inicia na média dos dados: centra a reconstrução;
      - as colunas de W_dec (o "dicionário") são renormalizadas a norma 1 a cada
        passo — senão o L1 é burlado encolhendo h e inflando W_dec;
      - otimizador Adam, para não depender de ajuste fino do learning rate.
    """
    d = X.shape[1]
    W_dec = rng.standard_normal((d, n_features))
    W_dec /= np.linalg.norm(W_dec, axis=0, keepdims=True)   # colunas unitárias
    W_enc = W_dec.T.copy()                                   # init amarrado: lê o dicionário
    b_enc = np.zeros(n_features)
    b_dec = X.mean(axis=0).copy()

    params = {"W_enc": W_enc, "b_enc": b_enc, "W_dec": W_dec, "b_dec": b_dec}
    m = {k: np.zeros_like(v) for k, v in params.items()}     # 1º momento (Adam)
    v = {k: np.zeros_like(v) for k, v in params.items()}     # 2º momento
    b1, b2, eps = 0.9, 0.999, 1e-8

    n = X.shape[0]
    batch = min(256, n)
    for passo in range(1, passos + 1):
        idx = rng.integers(0, n, size=batch)                 # minibatch (barato e estável)
        xb = X[idx]
        xc = xb - params["b_dec"]                             # centrado
        pre = xc @ params["W_enc"].T + params["b_enc"]        # (b, f)
        h = relu(pre)
        x_hat = h @ params["W_dec"].T + params["b_dec"]

        d_xhat = 2.0 * (x_hat - xb) / batch                  # (b, d)
        grads = {
            "W_dec": d_xhat.T @ h,
            "b_dec": d_xhat.sum(axis=0),
        }
        dh = d_xhat @ params["W_dec"] + l1 * (h > 0)          # L1 sobre ativações
        dpre = dh * (pre > 0)
        grads["W_enc"] = dpre.T @ xc
        grads["b_enc"] = dpre.sum(axis=0)

        for k in params:                                      # passo de Adam
            m[k] = b1 * m[k] + (1 - b1) * grads[k]
            v[k] = b2 * v[k] + (1 - b2) * grads[k] ** 2
            mhat = m[k] / (1 - b1 ** passo)
            vhat = v[k] / (1 - b2 ** passo)
            params[k] -= lr * mhat / (np.sqrt(vhat) + eps)

        # renormaliza o dicionário: cada átomo (coluna) volta a norma 1.
        params["W_dec"] /= np.linalg.norm(params["W_dec"], axis=0, keepdims=True) + 1e-9

    return params["W_enc"], params["b_enc"], params["W_dec"], params["b_dec"]


def _run_checks():
    rng = np.random.default_rng(1)
    checks = []

    K = 16           # conceitos verdadeiros
    d = 12           # espaço comprimido (superposição: d < K)
    n = 5000
    conceitos = gerar_dados(n, K, prob=0.05, rng=rng)   # esparso: ~1 conceito ativo por amostra

    # matriz fixa que comprime K conceitos em d dimensões (a "superposição")
    P = rng.standard_normal((d, K))
    P /= np.linalg.norm(P, axis=0, keepdims=True)
    X = conceitos @ P.T                          # (n, d) — o que a rede "vê"

    # SAE supercompleto: mais features que dimensões, para desempacotar.
    n_features = 64
    W_enc, b_enc, W_dec, b_dec = treinar_sae(X, n_features, passos=4000, lr=0.01, l1=0.002, rng=rng)

    # reconstrução do SAE vs baseline trivial (prever a média)
    h = relu((X - b_dec) @ W_enc.T + b_enc)
    X_hat = h @ W_dec.T + b_dec
    err_sae = np.mean((X - X_hat) ** 2)
    err_base = np.mean((X - X.mean(axis=0)) ** 2)
    var_explicada = 1.0 - err_sae / err_base

    # esparsidade: fração média de features ativas por exemplo (L0 normalizado)
    l0 = np.mean(np.mean(h > 1e-6, axis=1))

    # recuperação: cada conceito verdadeiro (direção P[:,k]) deve alinhar-se
    # fortemente com ALGUMA feature aprendida (coluna de W_dec, normalizada).
    D = W_dec / (np.linalg.norm(W_dec, axis=0, keepdims=True) + 1e-9)   # (d, f)
    Pn = P / (np.linalg.norm(P, axis=0, keepdims=True) + 1e-9)          # (d, K)
    sim = np.abs(Pn.T @ D)                        # (K, f) cosseno absoluto
    melhor_por_conceito = sim.max(axis=1)         # melhor feature para cada conceito
    recuperados = int(np.sum(melhor_por_conceito > 0.85))

    checks.append(("SAE reconstrói melhor que prever a média", err_sae < err_base))
    checks.append(("SAE explica >70% da variância", var_explicada > 0.70))
    checks.append(("as ativações são esparsas (<40% ativas)", l0 < 0.4))
    checks.append(("recupera a maioria dos conceitos plantados (cos>0.85)", recuperados >= K * 0.6))

    print("=== Autoencoder esparso: desempacotando superposição ===\n")
    print(f"conceitos verdadeiros: {K}  |  espaço comprimido: {d}D  |  features do SAE: {n_features}")
    print(f"erro de reconstrução — SAE: {err_sae:.4f}   baseline(média): {err_base:.4f}")
    print(f"variância explicada: {var_explicada:.1%}")
    print(f"esparsidade (fração média de features ativas): {l0:.3f}")
    print(f"conceitos recuperados com cosseno > 0.85: {recuperados}/{K}\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: o L1 força monossemântica. Um dicionário esparso e supercompleto")
    print("separa o que a superposição juntou — é o alicerce do circuit tracing.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
