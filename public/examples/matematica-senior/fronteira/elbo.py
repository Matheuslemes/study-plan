"""
Inferência variacional e o ELBO — artefato do módulo 25.

Rode com:  python elbo.py                   (requer apenas numpy)
Verificado sob Pyodide 0.28 no navegador.

O ELBO (Evidence Lower BOund) é a função objetivo dos VAEs, da difusão e da
inferência bayesiana aproximada. A identidade central:

    log p(x)  =  ELBO(q)  +  KL( q(z) ‖ p(z|x) )

Como KL ≥ 0, o ELBO é um LIMITE INFERIOR da log-evidência — daí o nome. E como
log p(x) é fixo, MAXIMIZAR o ELBO é MINIMIZAR a KL entre a aproximação q e a
posterior verdadeira. É assim que se troca uma integral intratável por uma
otimização.

Este arquivo usa um modelo conjugado gaussiano, onde a posterior e a evidência
têm forma fechada, para PROVAR com asserts que:
  1. ELBO(q) ≤ log p(x) para todo q;
  2. o gap é exatamente KL(q ‖ posterior);
  3. no q ótimo (a própria posterior), o gap zera e o ELBO encosta na evidência.
"""

import numpy as np


def log_normal(x, mu, var):
    return -0.5 * (np.log(2 * np.pi * var) + (x - mu) ** 2 / var)


def kl_gaussianas(mq, vq, mp, vp):
    # KL( N(mq,vq) ‖ N(mp,vp) ) — forma fechada.
    return 0.5 * (np.log(vp / vq) + (vq + (mq - mp) ** 2) / vp - 1.0)


def elbo_mc(x, mq, vq, prior_var, ruido_var, rng, n=200000):
    """
    ELBO = E_q[ log p(x,z) - log q(z) ], estimado por Monte Carlo.
    Modelo: z ~ N(0, prior_var);  x | z ~ N(z, ruido_var).
    """
    z = rng.normal(mq, np.sqrt(vq), size=n)
    log_pxz = log_normal(x, z, ruido_var) + log_normal(z, 0.0, prior_var)  # log p(x|z)+log p(z)
    log_qz = log_normal(z, mq, vq)
    return np.mean(log_pxz - log_qz)


def posterior_exata(x, prior_var, ruido_var):
    # Conjugado gaussiano: posterior de z dado x é N(mu_post, var_post), fechado.
    var_post = 1.0 / (1.0 / prior_var + 1.0 / ruido_var)
    mu_post = var_post * (x / ruido_var)
    return mu_post, var_post


def log_evidencia(x, prior_var, ruido_var):
    # p(x) = N(x; 0, prior_var + ruido_var)  (marginalizando z).
    return log_normal(x, 0.0, prior_var + ruido_var)


def _run_checks():
    rng = np.random.default_rng(0)
    checks = []

    x = 2.0
    prior_var, ruido_var = 1.0, 0.5

    mu_post, var_post = posterior_exata(x, prior_var, ruido_var)
    log_px = log_evidencia(x, prior_var, ruido_var)

    # 1. ELBO ≤ log p(x) para vários q subótimos (a desigualdade do limite).
    candidatos = [(0.0, 1.0), (1.0, 0.5), (mu_post, var_post), (3.0, 2.0), (mu_post, 0.1)]
    todos_abaixo = True
    for mq, vq in candidatos:
        e = elbo_mc(x, mq, vq, prior_var, ruido_var, rng)
        if e > log_px + 5e-3:
            todos_abaixo = False
    checks.append(("ELBO(q) <= log p(x) para todo q testado", todos_abaixo))

    # 2. o gap log p(x) - ELBO é exatamente KL(q ‖ posterior).
    mq, vq = 1.0, 0.4
    e = elbo_mc(x, mq, vq, prior_var, ruido_var, rng)
    gap = log_px - e
    kl = kl_gaussianas(mq, vq, mu_post, var_post)
    checks.append((f"gap == KL(q‖posterior) ({gap:.4f} ≈ {kl:.4f})", abs(gap - kl) < 5e-3))

    # 3. no q ótimo (= posterior), o gap zera e o ELBO encosta na evidência.
    e_opt = elbo_mc(x, mu_post, var_post, prior_var, ruido_var, rng)
    checks.append(("no q = posterior, KL = 0", np.isclose(kl_gaussianas(mu_post, var_post, mu_post, var_post), 0.0)))
    checks.append((f"ELBO ótimo ≈ log p(x) ({e_opt:.4f} ≈ {log_px:.4f})", abs(e_opt - log_px) < 5e-3))

    # 4. maximizar o ELBO é minimizar a KL: o melhor q entre os candidatos é a posterior.
    elbos = [elbo_mc(x, mq, vq, prior_var, ruido_var, rng) for mq, vq in candidatos]
    kls = [kl_gaussianas(mq, vq, mu_post, var_post) for mq, vq in candidatos]
    checks.append(("o q de maior ELBO é o de menor KL", np.argmax(elbos) == np.argmin(kls)))

    # 5. KL sempre ≥ 0 (é o que garante que o ELBO é limite INFERIOR).
    checks.append(("KL(q‖posterior) >= 0 para todo q", all(k >= -1e-9 for k in kls)))

    print("=== Inferência variacional: o ELBO ===\n")
    print(f"x = {x} | prior N(0,{prior_var}) | ruído var {ruido_var}")
    print(f"posterior exata      = N({mu_post:.4f}, {var_post:.4f})")
    print(f"log p(x) (evidência) = {log_px:.4f}")
    print(f"ELBO(q subótimo)     = {e:.4f}   gap = {gap:.4f} = KL {kl:.4f}")
    print(f"ELBO(q = posterior)  = {e_opt:.4f}   gap ≈ 0\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: o ELBO troca a integral intratável de p(x) por uma otimização. O preço")
    print("é o gap — a KL entre a sua aproximação e a posterior real. É o coração do VAE.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
