"""
Módulo 0 (IA) — Da Faixa 0 ao aprendizado de máquina, sem framework.

Rode com:  python ia-zero.py        (só a biblioteca padrão — sem numpy)
Verificado sob Pyodide (CPython no navegador) e a lógica conferida em Node.

Nada de PyTorch, sklearn ou numpy. O objetivo não é "usar um modelo" — é ver,
com números que você mesmo confere, o que "aprender com dados" significa. Quem
começa chamando `model.fit(X, y)` sem isto não sabe o que a máquina está fazendo
nem por que decorar não é aprender.

Liga os fundamentos da Faixa 0 ao módulo 1 da trilha:
  1. dados de ML são uma TABELA — cada linha é um exemplo (features, rótulo);
  2. um MODELO é uma função com parâmetros: f(x) = a*x + b;
  3. TREINAR é ajustar os parâmetros para reduzir o ERRO MÉDIO nos exemplos
     (aqui, mínimos quadrados — a mesma ideia de minimizar risco do módulo 1);
  4. GENERALIZAR (acertar em dados nunca vistos) é o que importa — e decorar o
     treino (overfitting) engana: erro 0 no treino, inútil no teste.
"""


# --- 1. os dados: uma tabela de exemplos (x = feature, y = rótulo/alvo) ---
# Relação real aproximada: y ~ 3*x + 2, com um pouco de ruído (como no mundo).
TREINO = [(1, 5), (2, 7), (3, 12), (4, 13), (5, 18)]   # o modelo VÊ estes
TESTE = [(6, 20), (7, 23)]                              # o modelo NUNCA vê estes


def treinar_reta(dados):
    """Mínimos quadrados: acha a, b de f(x)=a*x+b que minimizam o erro médio.

    É a forma fechada da mesma ideia do módulo 1 (minimizar o risco): em vez de
    chutar a e b, resolvemos qual par deixa a soma dos erros ao quadrado menor.
    """
    n = len(dados)
    soma_x = sum(x for x, _ in dados)
    soma_y = sum(y for _, y in dados)
    soma_xy = sum(x * y for x, y in dados)
    soma_xx = sum(x * x for x, _ in dados)
    a = (n * soma_xy - soma_x * soma_y) / (n * soma_xx - soma_x * soma_x)
    b = (soma_y - a * soma_x) / n
    return a, b


def erro_medio(prever, dados):
    """Erro quadrático médio (MSE): o quanto, em média, a previsão erra o alvo."""
    return sum((prever(x) - y) ** 2 for x, y in dados) / len(dados)


def _run_checks():
    checks = []

    # A tabela: linhas = exemplos, colunas = feature + rótulo. Tudo é número.
    checks.append(("a tabela de treino tem 5 exemplos (linhas)", len(TREINO) == 5))
    checks.append((
        "cada exemplo é (feature numérica, rótulo numérico)",
        all(isinstance(x, (int, float)) and isinstance(y, (int, float)) for x, y in TREINO),
    ))

    # 2+3. O modelo aprende da tabela: os parâmetros saem dos dados, não de chute.
    a, b = treinar_reta(TREINO)
    modelo = lambda x: a * x + b
    checks.append(("treino aprende a inclinação a=3.2 a partir dos dados", abs(a - 3.2) < 1e-9))
    checks.append(("treino aprende o intercepto b=1.4 a partir dos dados", abs(b - 1.4) < 1e-9))

    # O modelo NÃO decora: sobra erro no próprio treino (o mundo tem ruído).
    mse_treino_modelo = erro_medio(modelo, TREINO)
    checks.append(("o modelo não decora: erro de treino > 0", mse_treino_modelo > 0))

    # 4. Generalização: no TESTE (nunca visto) o modelo supera o baseline "chutar a média".
    media_treino = sum(y for _, y in TREINO) / len(TREINO)   # = 11.0
    baseline = lambda _x: media_treino
    mse_teste_modelo = erro_medio(modelo, TESTE)
    mse_teste_baseline = erro_medio(baseline, TESTE)
    checks.append((
        "no teste, o modelo aprendido bate o baseline da média",
        mse_teste_modelo < mse_teste_baseline,
    ))

    # 5. Decorar != aprender: um "decorador" memoriza a tabela (erro 0 no treino)...
    tabela = {x: y for x, y in TREINO}
    decorador = lambda x: tabela.get(x, media_treino)   # x novo? não sabe: chuta a média
    mse_treino_decorador = erro_medio(decorador, TREINO)
    mse_teste_decorador = erro_medio(decorador, TESTE)
    checks.append(("o decorador acerta 100% no treino (erro 0)", mse_treino_decorador == 0))
    checks.append((
        "...mas fracassa no teste — decorar não generaliza",
        mse_teste_decorador > mse_teste_modelo,
    ))

    print("=== Módulo 0 (IA) — o que 'aprender com dados' significa ===\n")
    print(f"modelo aprendido:  f(x) = {a:.1f}*x + {b:.1f}")
    print(f"erro no TREINO   -> modelo: {mse_treino_modelo:.2f}   decorador: {mse_treino_decorador:.2f}")
    print(f"erro no TESTE    -> modelo: {mse_teste_modelo:.2f}   baseline(média): {mse_teste_baseline:.2f}   decorador: {mse_teste_decorador:.2f}\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("Lição: aprender = ajustar parâmetros para reduzir o erro e GENERALIZAR a dados novos.")
    print("Decorar o treino (overfitting) dá erro 0 lá e falha no teste. Por isso se avalia no que o modelo não viu.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
