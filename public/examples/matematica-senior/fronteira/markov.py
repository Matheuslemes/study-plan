"""
Cadeias de Markov: distribuição estacionária e convergência — artefato do módulo 23.

Rode com:  python markov.py                 (requer apenas numpy)
Verificado sob Pyodide 0.28 no navegador.

Processos estocásticos aparecem em PageRank, MCMC, filas, modelagem de sequência
e RL. A cadeia de Markov é a peça fundamental: o futuro depende só do presente.

Este arquivo prova, com asserts, os três fatos que sustentam o uso prático:

  1. a distribuição estacionária π satisfaz πP = π (autovetor à esquerda de P
     com autovalor 1) e é única para uma cadeia ergódica;
  2. a iteração de potência converge para π a partir de QUALQUER início;
  3. a VELOCIDADE de convergência é governada pelo segundo maior autovalor
     |λ₂| — o "gap espectral". É por isso que alguns MCMC misturam devagar.
"""

import numpy as np


def estacionaria_por_autovetor(P):
    # π é o autovetor à esquerda de P com autovalor 1: πP = π  <=>  Pᵀπᵀ = πᵀ.
    valores, vetores = np.linalg.eig(P.T)
    i = np.argmin(np.abs(valores - 1.0))       # autovalor mais próximo de 1
    pi = np.real(vetores[:, i])
    pi = pi / pi.sum()
    return pi


def estacionaria_por_potencia(P, passos=2000):
    n = P.shape[0]
    v = np.full(n, 1.0 / n)                     # começa uniforme
    for _ in range(passos):
        v = v @ P
    return v


def gap_espectral(P):
    valores = np.sort(np.abs(np.linalg.eigvals(P)))[::-1]
    return valores[0], valores[1]              # (1.0, |λ₂|)


def _run_checks():
    checks = []

    # Uma cadeia ergódica (irredutível e aperiódica): clima com 3 estados.
    P = np.array([
        [0.7, 0.2, 0.1],
        [0.3, 0.5, 0.2],
        [0.2, 0.3, 0.5],
    ])
    checks.append(("cada linha de P soma 1 (matriz estocástica)", np.allclose(P.sum(axis=1), 1.0)))

    pi_eig = estacionaria_por_autovetor(P)
    pi_pow = estacionaria_por_potencia(P)

    # 1. πP = π e π é distribuição de probabilidade.
    checks.append(("πP == π (é estacionária)", np.allclose(pi_eig @ P, pi_eig)))
    checks.append(("π soma 1 e é não negativa", np.isclose(pi_eig.sum(), 1.0) and np.all(pi_eig >= -1e-12)))

    # 2. os dois métodos concordam (unicidade da estacionária ergódica).
    checks.append(("autovetor e iteração de potência concordam", np.allclose(pi_eig, pi_pow, atol=1e-6)))

    # 3. convergência independe do início.
    n = P.shape[0]
    v1 = np.array([1.0, 0.0, 0.0])
    v2 = np.array([0.0, 0.0, 1.0])
    for _ in range(2000):
        v1 = v1 @ P
        v2 = v2 @ P
    checks.append(("convergência independe do estado inicial", np.allclose(v1, v2, atol=1e-8)))
    checks.append(("converge para a estacionária", np.allclose(v1, pi_eig, atol=1e-6)))

    # 4. o gap espectral prevê a velocidade: erro após k passos ~ |λ₂|^k.
    lam1, lam2 = gap_espectral(P)
    checks.append(("maior autovalor de P é 1", np.isclose(lam1, 1.0)))
    checks.append(("|λ₂| < 1 (cadeia ergódica mistura)", lam2 < 1.0))

    v = np.array([1.0, 0.0, 0.0])
    erros = []
    for k in range(1, 11):
        v = v @ P
        erros.append(np.linalg.norm(v - pi_eig, 1))
    razao = erros[-1] / erros[-2]
    checks.append(("a razão de erro por passo ≈ |λ₂| (gap espectral rege a mistura)",
                   abs(razao - lam2) < 0.05))

    # 5. contraste: uma cadeia PERIÓDICA não converge (|λ₂| = 1).
    Pper = np.array([[0.0, 1.0], [1.0, 0.0]])   # alterna determinístico: período 2
    _, lam2_per = gap_espectral(Pper)
    a = np.array([1.0, 0.0])
    a10 = a.copy()
    for _ in range(10):
        a10 = a10 @ Pper
    checks.append(("cadeia periódica tem |λ₂| = 1", np.isclose(lam2_per, 1.0)))
    checks.append(("cadeia periódica NÃO converge (oscila)", not np.allclose(a10, [0.5, 0.5], atol=1e-3)))

    print("=== Cadeias de Markov ===\n")
    print(f"π (estacionária) = {np.round(pi_eig, 4)}")
    print(f"autovalores |λ|  = {np.round(np.sort(np.abs(np.linalg.eigvals(P)))[::-1], 4)}")
    print(f"|λ₂| (gap)       = {lam2:.4f}   -> mistura em ~{int(np.ceil(np.log(0.01)/np.log(lam2)))} passos p/ erro 1%")
    print(f"erro L1 por passo a partir de [1,0,0]: {np.round(erros, 4)}\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: πP=π dá o equilíbrio; |λ₂| dá o tempo até chegar nele. MCMC que")
    print("mistura devagar tem |λ₂| perto de 1 — o diagnóstico é espectral, não visual.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
