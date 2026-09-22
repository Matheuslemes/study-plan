"""
Otimização convexa: KKT e dualidade — artefato do módulo 24.

Rode com:  python dualidade.py              (requer apenas numpy)
Verificado sob Pyodide 0.28 no navegador.

"Convexo × não convexo" é a fronteira que decide se um problema é resolvível com
garantia. Este arquivo trata o caso canônico do Boyd — o QP com restrição de
igualdade — porque ele tem solução fechada pelas condições KKT e permite PROVAR,
com asserts, os teoremas em vez de só citá-los:

    minimizar   ½ xᵀQx + cᵀx      (Q simétrica positiva definida => convexo)
    sujeito a   Ax = b

  - KKT: no ótimo existe ν tal que Qx + c + Aᵀν = 0 e Ax = b;
  - convexidade: KKT é suficiente, então a solução é o mínimo GLOBAL;
  - dualidade forte: o valor do primal é igual ao valor do dual (gap = 0).
"""

import numpy as np


def resolver_qp_kkt(Q, c, A, b):
    """
    Resolve o sistema KKT linear:
        [ Q  Aᵀ ] [x]   [-c]
        [ A  0  ] [ν] = [ b]
    Devolve (x, ν). Para Q PD e A de posto cheio, a solução é única.
    """
    n = Q.shape[0]
    m = A.shape[0]
    KKT = np.block([[Q, A.T], [A, np.zeros((m, m))]])
    rhs = np.concatenate([-c, b])
    sol = np.linalg.solve(KKT, rhs)
    return sol[:n], sol[n:]


def dual_valor(Q, c, A, b, nu):
    # A função dual g(ν) = -½(c+Aᵀν)ᵀ Q⁻¹ (c+Aᵀν) - bᵀν  (derivada do lagrangiano).
    Qi = np.linalg.inv(Q)
    w = c + A.T @ nu
    return -0.5 * w @ Qi @ w - b @ nu


def _run_checks():
    rng = np.random.default_rng(3)
    checks = []

    # Constrói Q positiva definida (convexo) e uma restrição de igualdade.
    M = rng.standard_normal((4, 4))
    Q = M @ M.T + 4 * np.eye(4)          # simétrica PD
    c = rng.standard_normal(4)
    A = rng.standard_normal((2, 4))      # 2 restrições, posto cheio
    b = rng.standard_normal(2)

    # convexidade: Q PD <=> todos os autovalores > 0.
    autov = np.linalg.eigvalsh(Q)
    checks.append(("Q é positiva definida (problema convexo)", np.all(autov > 0)))

    x, nu = resolver_qp_kkt(Q, c, A, b)

    # 1. KKT: estacionariedade e viabilidade primal.
    estac = Q @ x + c + A.T @ nu
    checks.append(("estacionariedade: Qx + c + Aᵀν = 0", np.allclose(estac, 0, atol=1e-9)))
    checks.append(("viabilidade primal: Ax = b", np.allclose(A @ x, b, atol=1e-9)))

    f_estrela = 0.5 * x @ Q @ x + c @ x

    # 2. suficiência da KKT: qualquer ponto viável tem custo >= f*.
    pior = True
    for _ in range(2000):
        # gera ponto viável: x + componente no núcleo de A (Az = 0)
        z = rng.standard_normal(4)
        # projeta z no núcleo de A: z - Aᵀ(AAᵀ)⁻¹A z
        z = z - A.T @ np.linalg.solve(A @ A.T, A @ z)
        xv = x + 0.3 * z
        fv = 0.5 * xv @ Q @ xv + c @ xv
        if fv < f_estrela - 1e-9:
            pior = False
            break
    checks.append(("KKT é mínimo global: nenhum ponto viável tem custo menor", pior))

    # 3. dualidade forte: g(ν*) == f(x*)  (gap = 0 para QP convexo).
    g_estrela = dual_valor(Q, c, A, b, nu)
    checks.append(("dualidade forte: gap primal-dual ≈ 0", np.isclose(f_estrela, g_estrela, atol=1e-8)))

    # 4. dualidade fraca: g(ν) <= f* para qualquer ν (o dual limita por baixo).
    fraca = all(dual_valor(Q, c, A, b, nu + 0.5 * rng.standard_normal(2)) <= f_estrela + 1e-9
                for _ in range(1000))
    checks.append(("dualidade fraca: g(ν) <= f* para todo ν", fraca))

    # 5. a restrição está ativa: o ótimo restrito difere do irrestrito.
    x_livre = np.linalg.solve(Q, -c)            # mínimo sem restrição
    checks.append(("a restrição muda a solução (Ax_livre != b)", not np.allclose(A @ x_livre, b, atol=1e-6)))

    print("=== Otimização convexa: KKT e dualidade ===\n")
    print(f"autovalores de Q      = {np.round(autov, 3)}  (todos > 0 => convexo)")
    print(f"x* (ótimo restrito)   = {np.round(x, 4)}")
    print(f"ν* (multiplicadores)  = {np.round(nu, 4)}")
    print(f"f(x*) primal          = {f_estrela:.6f}")
    print(f"g(ν*) dual            = {g_estrela:.6f}   -> gap = {abs(f_estrela-g_estrela):.2e}\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: em problema convexo, KKT + convexidade = ótimo global garantido, e o")
    print("dual dá um certificado de otimalidade (gap 0). Fora da convexidade, nada disso vale.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
