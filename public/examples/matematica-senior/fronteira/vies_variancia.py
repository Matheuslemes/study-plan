"""
Decomposição viés-variância — artefato do módulo 22.

Rode com:  python vies_variancia.py         (requer apenas numpy)
Verificado sob Pyodide 0.28 no navegador.

A teoria do aprendizado estatístico responde: por que um modelo mais complexo
nem sempre generaliza melhor? A resposta é a decomposição do erro esperado de
predição num ponto:

    E[(y - f̂(x))²]  =  viés²  +  variância  +  ruído irredutível

  - viés: erro por o modelo ser simples demais (subajuste);
  - variância: erro por o modelo ser sensível demais aos dados (sobreajuste);
  - ruído: o que nenhum modelo remove.

Este arquivo NÃO afirma a fórmula — ele a MEDE por simulação de Monte Carlo:
treina muitos modelos em datasets independentes e verifica, com asserts, que a
soma das três parcelas reproduz o erro total, e que o grau ótimo fica no meio
(o vale da curva em U), não no extremo.
"""

import numpy as np


def f_verdadeira(x):
    return 0.5 * x ** 3 - 0.8 * x   # cúbica: grau 3 é o ponto certo (viés 0 possível)


def ajustar_polinomio(x, y, grau):
    # regressão polinomial por mínimos quadrados (Vandermonde + lstsq).
    # x já vive em [-1,1], o que mantém a Vandermonde bem condicionada.
    X = np.vander(x, grau + 1)
    coef, *_ = np.linalg.lstsq(X, y, rcond=None)
    return coef


def prever(coef, x):
    return np.vander(x, len(coef)) @ coef


def decompor(grau, n_datasets=600, n_treino=30, ruido=0.15, rng=None):
    rng = rng or np.random.default_rng(0)
    x_teste = np.linspace(-1, 1, 60)
    verdade = f_verdadeira(x_teste)

    preds = np.empty((n_datasets, x_teste.size))
    for i in range(n_datasets):
        x_tr = rng.uniform(-1, 1, n_treino)
        y_tr = f_verdadeira(x_tr) + rng.normal(0, ruido, n_treino)
        preds[i] = prever(ajustar_polinomio(x_tr, y_tr, grau), x_teste)

    media_pred = preds.mean(axis=0)
    vies2 = np.mean((media_pred - verdade) ** 2)        # (E[f̂] - f)²
    variancia = np.mean(preds.var(axis=0))              # E[(f̂ - E[f̂])²]
    ruido_irr = ruido ** 2
    # erro esperado medido: média sobre datasets e pontos de (y - f̂)²,
    # com y = verdade + novo ruído independente por ponto/dataset.
    ruido_amostra = rng.normal(0, ruido, preds.shape)
    erro_total = np.mean((verdade + ruido_amostra - preds) ** 2)
    return vies2, variancia, ruido_irr, erro_total


def _run_checks():
    rng = np.random.default_rng(42)
    checks = []

    graus = [1, 2, 3, 5, 7, 9]
    linhas = []
    for g in graus:
        v2, var, ruido, total = decompor(g, rng=rng)
        linhas.append((g, v2, var, ruido, total))

    # 1. a identidade da decomposição vale em cada grau (tolerância relativa ao MC).
    for g, v2, var, ruido, total in linhas:
        soma = v2 + var + ruido
        checks.append((f"grau {g}: viés²+var+ruído ≈ erro total ({soma:.4f}≈{total:.4f})",
                       abs(soma - total) < 0.02 * max(1.0, abs(total))))

    v2s = [l[1] for l in linhas]
    vars_ = [l[2] for l in linhas]

    # 2. viés cai quando a complexidade sobe (subajuste some).
    checks.append(("viés² do grau 1 > viés² do grau 3 (menos subajuste)", v2s[0] > v2s[2]))
    # 3. variância sobe quando a complexidade sobe (sobreajuste aparece).
    checks.append(("variância do grau 9 > variância do grau 1 (mais sobreajuste)", vars_[-1] > vars_[0]))

    # 4. o erro total tem forma de U: o melhor grau não é o menor nem o maior.
    totais = [l[4] for l in linhas]
    melhor = int(np.argmin(totais))
    checks.append(("o grau ótimo está no meio, não no extremo", 0 < melhor < len(graus) - 1))

    print("=== Decomposição viés-variância ===\n")
    print(f"  {'grau':>4} {'viés²':>9} {'variância':>10} {'ruído':>8} {'erro total':>11}")
    for g, v2, var, ruido, total in linhas:
        marca = '  <- melhor' if g == graus[melhor] else ''
        print(f"  {g:>4} {v2:>9.3f} {var:>10.3f} {ruido:>8.3f} {total:>11.3f}{marca}")
    print()

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: complexidade não é qualidade. A capacidade do modelo (à la dimensão VC)")
    print("troca viés por variância; generalizar é achar o vale, não empilhar parâmetros.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
