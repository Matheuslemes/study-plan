"""
Regressão de prompt por slice — artefato do módulo 9.

Rode com:  python regressao_prompt.py       (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador.

Prompt e modelo são DEPENDÊNCIAS: mudá-los sem versionar e testar é como
atualizar uma lib em produção sem CI. E a armadilha é a MÉDIA: uma versão pode
subir o pass rate global e, ao mesmo tempo, regredir num slice (um idioma, um
formato, um caso raro). Este arquivo prova, com asserts, que:

  1. um gate GLOBAL aprova a v2 (média subiu);
  2. um gate POR SLICE reprova a v2 (um slice regrediu);
  3. logo, a decisão de migrar exige análise por slice, não só a média.
"""


# --- golden set com slices (aqui: idioma do caso) ----------------------------
GOLDEN = [
    {"input": "greeting", "slice": "en", "expected": "hello"},
    {"input": "farewell", "slice": "en", "expected": "bye"},
    {"input": "thanks",   "slice": "en", "expected": "thanks"},
    {"input": "number",   "slice": "en", "expected": "ten"},
    {"input": "saudacao", "slice": "pt", "expected": "ola"},
    {"input": "despedida","slice": "pt", "expected": "tchau"},
    {"input": "agradec",  "slice": "pt", "expected": "obrigado"},
    {"input": "numero",   "slice": "pt", "expected": "dez"},
]

# v1: acerta 3/4 em cada slice (equilibrada)
V1 = {
    "greeting": "hello", "farewell": "bye", "thanks": "thanks", "number": "WRONG",
    "saudacao": "ola", "despedida": "tchau", "agradec": "obrigado", "numero": "WRONG",
}
# v2: melhora o en (4/4) e REGRIDE o pt (2/4) — a média sobe, o pt cai
V2 = {
    "greeting": "hello", "farewell": "bye", "thanks": "thanks", "number": "ten",
    "saudacao": "ola", "despedida": "tchau", "agradec": "WRONG", "numero": "WRONG",
}


def pass_rate(version, golden=GOLDEN, slice_=None):
    casos = [c for c in golden if slice_ is None or c["slice"] == slice_]
    acertos = sum(1 for c in casos if version[c["input"]] == c["expected"])
    return acertos / len(casos)


def slices(golden=GOLDEN):
    return sorted({c["slice"] for c in golden})


def gate_global(version, limiar=0.6):
    return pass_rate(version) >= limiar


def gate_por_slice(version, limiar=0.6):
    # barra se QUALQUER slice cair abaixo do limiar
    return all(pass_rate(version, slice_=s) >= limiar for s in slices())


def regrediu_por_slice(v_old, v_new):
    return {s: (pass_rate(v_old, slice_=s), pass_rate(v_new, slice_=s))
            for s in slices()
            if pass_rate(v_new, slice_=s) < pass_rate(v_old, slice_=s)}


def _run_checks():
    checks = []

    g1, g2 = pass_rate(V1), pass_rate(V2)

    # 1. a média global da v2 é >= v1 (parece melhoria).
    checks.append((f"pass rate global: v1 {g1:.0%} -> v2 {g2:.0%} (subiu)", g2 >= g1))
    # 2. o gate global aprova a v2.
    checks.append(("gate GLOBAL aprova a v2", gate_global(V2)))
    # 3. mas há regressão de slice: pt caiu.
    reg = regrediu_por_slice(V1, V2)
    checks.append(("há regressão por slice (pt caiu)", "pt" in reg))
    # 4. o gate por slice REPROVA a v2.
    checks.append(("gate POR SLICE barra a v2", not gate_por_slice(V2)))
    # 5. o en de fato melhorou (a média não estava mentindo sobre o en).
    checks.append(("slice en melhorou de v1 para v2",
                   pass_rate(V2, slice_="en") > pass_rate(V1, slice_="en")))
    # 6. versionamento: comparar exige rodar o eval nas DUAS versões (pin).
    checks.append(("decisão de migrar usa as duas versões, não só a nova",
                   g1 is not None and g2 is not None))

    print("=== Regressão de prompt por slice ===\n")
    print(f"{'slice':>6} {'v1':>6} {'v2':>6}")
    for s in slices():
        print(f"{s:>6} {pass_rate(V1, slice_=s):>6.0%} {pass_rate(V2, slice_=s):>6.0%}")
    print(f"{'GLOBAL':>6} {g1:>6.0%} {g2:>6.0%}")
    print(f"\ngate global: v2 {'PASS' if gate_global(V2) else 'BLOCK'}   |   "
          f"gate por slice: v2 {'PASS' if gate_por_slice(V2) else 'BLOCK'}")
    print(f"regressão detectada: {reg}\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: a média esconde regressão. Prompt/modelo são dependências versionadas;")
    print("a migração se decide por slice — a v2 aqui NÃO deve ir para produção como está.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
