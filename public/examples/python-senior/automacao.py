"""
Módulo 16 (Python) — Automação prática: processar texto e dados com a stdlib.

Rode com:  python automacao.py        (só a biblioteca padrão)
Verificado sob Pyodide (CPython) e a lógica conferida em Node.

Automação começa em transformar texto de forma confiável e testável. Aqui, sem tocar
o disco (conteúdo em memória, portável), parseamos um CSV, agregamos por chave e
extraímos campos com regex — o núcleo de qualquer script de automação.
"""

import csv
import io
import re
from collections import defaultdict


CSV_CONTEUDO = """produto,categoria,valor
café,bebida,1500
bolo,doce,800
suco,bebida,600
torta,doce,1200
água,bebida,300
"""


def total_por_categoria(texto_csv):
    leitor = csv.DictReader(io.StringIO(texto_csv))
    totais = defaultdict(int)
    for linha in leitor:
        totais[linha["categoria"]] += int(linha["valor"])
    return dict(totais)


def extrair_emails(texto):
    return re.findall(r"[\w.]+@[\w.]+", texto)


def _run_checks():
    checks = []

    totais = total_por_categoria(CSV_CONTEUDO)
    checks.append(("parse de CSV + agregação: bebida soma 2400", totais["bebida"] == 1500 + 600 + 300))
    checks.append(("agregação por categoria: doce soma 2000", totais["doce"] == 800 + 1200))
    checks.append(("todas as categorias foram agrupadas", set(totais) == {"bebida", "doce"}))

    # Regex para extrair campos estruturados de texto solto.
    texto = "contato: ana@exemplo.com e suporte@empresa.com.br para ajuda"
    emails = extrair_emails(texto)
    checks.append(("regex extrai os dois e-mails", emails == ["ana@exemplo.com", "suporte@empresa.com.br"]))

    # Transformação idempotente: rodar de novo dá o mesmo resultado (automação segura).
    checks.append(("automação determinística: reprocessar dá o mesmo total", total_por_categoria(CSV_CONTEUDO) == totais))

    # Relatório ordenado (maior total primeiro) — saída estável para um script.
    ranking = sorted(totais.items(), key=lambda kv: kv[1], reverse=True)
    checks.append(("relatório ordenado por total (bebida à frente de doce)", ranking[0][0] == "bebida"))

    print("=== Módulo 16 (Python) — automação com a stdlib ===\n")
    print("totais por categoria:", totais, "| e-mails:", emails, "\n")
    ok = sum(1 for _, c in checks if c)
    for nome, c in checks:
        print(f"  {'ok  ' if c else 'FALHOU'} {nome}")
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("Lição: a stdlib (csv, re, collections) resolve a maior parte da automação de forma testável e determinística — sem dependências externas.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
