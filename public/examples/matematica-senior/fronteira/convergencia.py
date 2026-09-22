"""
Análise real e por que o rigor importa — artefato do módulo 26.

Rode com:  python convergencia.py           (requer apenas numpy)
Verificado sob Pyodide 0.28 no navegador.

Análise real e teoria da medida parecem abstratas até quebrarem uma intuição na
sua cara. Este arquivo demonstra, com números, TRÊS armadilhas que só o rigor
resolve — cada uma com um assert que a torna concreta:

  1. Rearranjo de Riemann: uma série condicionalmente convergente pode somar
     valores DIFERENTES conforme a ORDEM. "Soma infinita" sem convergência
     absoluta não é comutativa.
  2. Convergência pontual ≠ uniforme: fₙ(x)=xⁿ converge ponto a ponto para uma
     função descontínua, mesmo cada fₙ sendo contínua. O limite não "herda"
     a continuidade sem convergência uniforme.
  3. Lei dos grandes números / Monte Carlo: a integral como esperança converge,
     e o erro cai como 1/√n — a base medida-teórica de por que amostrar funciona.
"""

import numpy as np


def alternating_harmonic(n):
    # Σ (-1)^(k+1)/k  ->  ln 2  (na ordem natural)
    k = np.arange(1, n + 1)
    return np.sum((-1) ** (k + 1) / k)


def rearranjo_dois_pos_um_neg(blocos):
    """
    Rearranjo da série harmônica alternada: 2 termos positivos, 1 negativo.
      1 + 1/3 - 1/2 + 1/5 + 1/7 - 1/4 + ...
    Riemann: este rearranjo converge para (3/2)·ln2, não ln2.
    """
    total = 0.0
    pos = 1      # próximo ímpar (positivos: 1,3,5,...)
    neg = 2      # próximo par   (negativos: 2,4,6,...)
    for _ in range(blocos):
        total += 1.0 / pos; pos += 2
        total += 1.0 / pos; pos += 2
        total -= 1.0 / neg; neg += 2
    return total


def sup_erro_pontual(n, grid=2001):
    # fₙ(x)=xⁿ em [0,1]; limite pontual f(x)=0 em [0,1), f(1)=1.
    x = np.linspace(0, 1, grid)
    fn = x ** n
    f = np.where(x < 1.0, 0.0, 1.0)
    return np.max(np.abs(fn - f))          # sup |fₙ - f|: se não -> 0, não é uniforme


def monte_carlo_erro(ns, rng):
    # estima ∫₀¹ 4√(1-x²) dx = π por amostragem; erro ~ C/√n.
    erros = []
    for n in ns:
        x = rng.random(n)
        est = np.mean(4.0 * np.sqrt(1 - x ** 2))
        erros.append(abs(est - np.pi))
    return np.array(erros)


def _run_checks():
    rng = np.random.default_rng(0)
    checks = []
    ln2 = np.log(2)

    # 1. ordem natural -> ln2; rearranjo -> (3/2)ln2. Somas DIFERENTES.
    natural = alternating_harmonic(2_000_000)
    rearr = rearranjo_dois_pos_um_neg(400_000)
    checks.append((f"ordem natural -> ln2 ({natural:.4f} ≈ {ln2:.4f})", abs(natural - ln2) < 1e-3))
    checks.append((f"rearranjo -> (3/2)ln2 ({rearr:.4f} ≈ {1.5*ln2:.4f})", abs(rearr - 1.5 * ln2) < 1e-3))
    checks.append(("os dois limites são diferentes (não comutativa!)", abs(natural - rearr) > 0.3))

    # 2. convergência pontual mas NÃO uniforme: sup|fₙ-f| não vai a zero.
    sups = [sup_erro_pontual(n) for n in (2, 10, 100, 1000)]
    checks.append(("fₙ(x)=xⁿ converge pontualmente a 0 em x<1", (0.5 ** np.array([2, 10, 100, 1000]))[-1] < 1e-9))
    checks.append(("mas sup|fₙ-f| fica ≈ 1 (NÃO é convergência uniforme)", min(sups) > 0.6))

    # 3. Monte Carlo: erro cai como 1/√n (inclinação ≈ -0.5 em log-log).
    ns = [10 ** k for k in range(2, 7)]
    # média de várias repetições para estabilizar a estimativa de erro
    erros = np.mean([monte_carlo_erro(ns, rng) for _ in range(40)], axis=0)
    inclinacao = np.polyfit(np.log(ns), np.log(erros), 1)[0]
    checks.append((f"erro de Monte Carlo ~ n^(-0.5) (inclinação {inclinacao:.2f})", abs(inclinacao + 0.5) < 0.12))

    print("=== Análise real: por que o rigor importa ===\n")
    print(f"1. série alternada  ordem natural = {natural:.5f}   (ln2   = {ln2:.5f})")
    print(f"   mesmo termos, rearranjada       = {rearr:.5f}   (3/2·ln2 = {1.5*ln2:.5f})")
    print(f"2. sup|xⁿ - f| para n=2,10,100,1000 = {[round(s,3) for s in sups]}  (não -> 0)")
    print(f"3. inclinação log-log do erro MC    = {inclinacao:.3f}  (teoria: -0.5)\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: sem convergência absoluta, somar fora de ordem muda o resultado; sem")
    print("convergência uniforme, o limite perde a continuidade. Medida e rigor não são")
    print("luxo — são o que impede conclusões falsas sobre limites, integrais e amostras.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
