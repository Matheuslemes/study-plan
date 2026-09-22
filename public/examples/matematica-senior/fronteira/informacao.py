"""
Teoria da informação: entropia, KL e cross-entropy — artefato do módulo 21.

Rode com:  python informacao.py            (requer apenas numpy)
Verificado sob Pyodide 0.28 (CPython 3.13 + numpy) no navegador.

Toda função de perda de classificação em IA é teoria da informação disfarçada.
Este arquivo deriva as três quantidades centrais e prova, com asserts, as
identidades que ligam a matemática à prática:

  1. entropia H(p): a incerteza média (bits) de uma distribuição;
  2. divergência KL(p‖q): o custo extra de codificar p usando um código feito
     para q — sempre ≥ 0 (desigualdade de Gibbs), zero só quando p = q;
  3. cross-entropy H(p,q) = H(p) + KL(p‖q): exatamente a perda que você
     minimiza ao treinar um classificador. Minimizar cross-entropy É minimizar
     a KL entre o rótulo e a predição.
"""

import numpy as np


def entropia(p, base=2):
    p = np.asarray(p, dtype=np.float64)
    p = p[p > 0]                      # 0·log0 = 0 por convenção
    return -np.sum(p * (np.log(p) / np.log(base)))


def kl(p, q, base=2):
    p = np.asarray(p, dtype=np.float64)
    q = np.asarray(q, dtype=np.float64)
    mask = p > 0
    # KL exige q>0 onde p>0 (absoluta continuidade); senão é infinita.
    return np.sum(p[mask] * (np.log(p[mask] / q[mask]) / np.log(base)))


def cross_entropy(p, q, base=2):
    p = np.asarray(p, dtype=np.float64)
    q = np.asarray(q, dtype=np.float64)
    mask = p > 0
    return -np.sum(p[mask] * (np.log(q[mask]) / np.log(base)))


def info_mutua(joint, base=2):
    # I(X;Y) = H(X) + H(Y) - H(X,Y); joint é a matriz de probabilidade conjunta.
    joint = np.asarray(joint, dtype=np.float64)
    px = joint.sum(axis=1)
    py = joint.sum(axis=0)
    return entropia(px, base) + entropia(py, base) - entropia(joint.ravel(), base)


def _run_checks():
    rng = np.random.default_rng(0)
    checks = []

    n = 6
    p = rng.random(n); p /= p.sum()
    q = rng.random(n); q /= q.sum()
    unif = np.full(n, 1 / n)

    # 1. entropia máxima é a uniforme, e vale log2(n).
    checks.append(("entropia da uniforme == log2(n)", np.isclose(entropia(unif), np.log2(n))))
    checks.append(("nenhuma distribuição excede a entropia da uniforme", entropia(p) <= entropia(unif) + 1e-12))
    checks.append(("entropia de um ponto certo é 0", np.isclose(entropia([1.0, 0, 0]), 0.0)))

    # 2. KL ≥ 0 (Gibbs), e = 0 exatamente quando p == q.
    checks.append(("KL(p‖q) >= 0", kl(p, q) >= -1e-12))
    checks.append(("KL(p‖p) == 0", np.isclose(kl(p, p), 0.0)))
    checks.append(("KL não é simétrica em geral", not np.isclose(kl(p, q), kl(q, p))))

    # 3. A identidade que importa: cross-entropy = entropia + KL.
    checks.append(("H(p,q) == H(p) + KL(p‖q)", np.isclose(cross_entropy(p, q), entropia(p) + kl(p, q))))
    checks.append(("cross-entropy >= entropia (custo extra é a KL)", cross_entropy(p, q) >= entropia(p) - 1e-12))

    # 4. Conexão com o treino: minimizar cross-entropy com rótulo one-hot
    #    é minimizar -log(prob da classe correta). É a perda de classificação.
    y = np.array([0.0, 1.0, 0.0])          # rótulo one-hot (classe 1)
    pred_boa = np.array([0.1, 0.8, 0.1])
    pred_ruim = np.array([0.4, 0.3, 0.3])
    checks.append(("cross-entropy pune a predição pior", cross_entropy(y, pred_ruim) > cross_entropy(y, pred_boa)))
    checks.append(("com rótulo one-hot, H(p,q) == -log2(prob correta)",
                   np.isclose(cross_entropy(y, pred_boa), -np.log2(pred_boa[1]))))

    # 5. Informação mútua ≥ 0; e = 0 sob independência.
    joint_dep = np.array([[0.4, 0.1], [0.1, 0.4]])   # X e Y correlacionados
    px = joint_dep.sum(1); py = joint_dep.sum(0)
    joint_indep = np.outer(px, py)                    # produto das marginais
    checks.append(("I(X;Y) >= 0", info_mutua(joint_dep) >= -1e-12))
    checks.append(("I(X;Y) == 0 sob independência", np.isclose(info_mutua(joint_indep), 0.0)))
    checks.append(("dependência tem mais informação mútua que independência",
                   info_mutua(joint_dep) > info_mutua(joint_indep)))

    print("=== Teoria da informação ===\n")
    print(f"H(uniforme de {n})      = {entropia(unif):.4f} bits  (= log2 {n} = {np.log2(n):.4f})")
    print(f"H(p)                  = {entropia(p):.4f} bits")
    print(f"KL(p‖q)               = {kl(p, q):.4f} bits   |  KL(q‖p) = {kl(q, p):.4f} bits (assimétrica)")
    print(f"H(p,q) = H(p)+KL(p‖q) = {cross_entropy(p, q):.4f} = {entropia(p):.4f} + {kl(p, q):.4f}")
    print(f"I(X;Y) dependente     = {info_mutua(joint_dep):.4f} bits\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: treinar um classificador com cross-entropy é minimizar a KL entre")
    print("o rótulo e a predição. A entropia do rótulo é fixa; o que você reduz é a KL.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
