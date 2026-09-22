"""
Módulo 17 (Python) — Manipulação de dados: a semântica de um pipeline pandas.

Rode com:  python dados_tabela.py        (só a biblioteca padrão)
Verificado sob Pyodide (CPython) e a lógica conferida em Node.

Um DataFrame é uma tabela; as operações essenciais são filtrar, agrupar/agregar e
derivar colunas. Aqui reproduzimos esse pipeline em Python puro (lista de dicts)
para ver a semântica que o pandas expressa de forma vetorizada.
"""

from collections import defaultdict


VENDAS = [
    {"produto": "café", "regiao": "NE", "qtd": 3, "preco": 1500},
    {"produto": "bolo", "regiao": "NE", "qtd": 1, "preco": 800},
    {"produto": "café", "regiao": "SE", "qtd": 5, "preco": 1500},
    {"produto": "suco", "regiao": "SE", "qtd": 2, "preco": 600},
]


def com_coluna_total(linhas):
    return [{**l, "total": l["qtd"] * l["preco"]} for l in linhas]     # coluna derivada


def filtrar(linhas, **cond):
    return [l for l in linhas if all(l[k] == v for k, v in cond.items())]


def soma_por(linhas, chave, campo):
    agg = defaultdict(int)
    for l in linhas:
        agg[l[chave]] += l[campo]
    return dict(agg)


def _run_checks():
    checks = []
    df = com_coluna_total(VENDAS)

    # Coluna derivada: total = qtd * preço.
    checks.append(("coluna derivada total (café NE = 4500)", df[0]["total"] == 3 * 1500))

    # Filtro por condição (como df[df.regiao == 'SE']).
    se = filtrar(df, regiao="SE")
    checks.append(("filtro regiao == 'SE' retorna 2 linhas", len(se) == 2))

    # Group by + soma (como df.groupby('regiao').total.sum()).
    por_regiao = soma_por(df, "regiao", "total")
    checks.append(("groupby regiao soma total (NE = 5300)", por_regiao["NE"] == 4500 + 800))
    checks.append(("groupby regiao soma total (SE = 8700)", por_regiao["SE"] == 7500 + 1200))

    # Group by produto somando quantidade.
    qtd_por_produto = soma_por(df, "produto", "qtd")
    checks.append(("groupby produto soma qtd (café = 8)", qtd_por_produto["café"] == 8))

    # Total geral e o pipeline encadeado (filtrar -> agregar).
    total_se = sum(l["total"] for l in filtrar(df, regiao="SE"))
    checks.append(("pipeline filtrar(SE) -> somar total = 8700", total_se == 8700))

    print("=== Módulo 17 (Python) — pipeline de dados (semântica do pandas) ===\n")
    print("total por região:", por_regiao, "| qtd por produto:", qtd_por_produto, "\n")
    ok = sum(1 for _, c in checks if c)
    for nome, c in checks:
        print(f"  {'ok  ' if c else 'FALHOU'} {nome}")
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("Lição: todo pipeline de dados é derivar colunas, filtrar e agrupar/agregar; o pandas expressa isso vetorizado, mas a semântica é esta.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
