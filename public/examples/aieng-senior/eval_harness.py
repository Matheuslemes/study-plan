"""
Eval harness com golden dataset — artefato do módulo 8.

Rode com:  python eval_harness.py           (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador.

Uma feature de IA é software: precisa de teste de regressão. O golden dataset
fixa casos representativos (entrada → esperado); o scorer mede; o pass rate vira
um GATE no CI. Este arquivo constrói o harness e prova, com asserts, que:

  1. o harness roda um golden dataset com scorers apropriados (exact, contains,
     numérico com tolerância) e calcula o pass rate;
  2. o gate barra uma versão que fica abaixo do limiar;
  3. um caso que "parece certo no olho" é reprovado pelo scorer — o motivo de
     existir o eval em vez de conferir manualmente.
"""


# --- scorers: a métrica precisa refletir a tarefa ---------------------------
def exact(saida, esperado):
    return saida.strip() == esperado.strip()


def contains(saida, esperado):
    return esperado.lower() in saida.lower()


def numeric_tol(saida, esperado, tol=0.01):
    try:
        return abs(float(saida) - float(esperado)) <= tol
    except ValueError:
        return False


# --- golden dataset: casos representativos com o esperado --------------------
GOLDEN = [
    {"input": "capital do Brasil", "expected": "Brasília", "scorer": contains},
    {"input": "2 + 2", "expected": "4", "scorer": exact},
    {"input": "pi com 2 casas", "expected": "3.14", "scorer": numeric_tol},
    {"input": "oposto de 'quente'", "expected": "frio", "scorer": contains},
    {"input": "anos em uma década", "expected": "10", "scorer": exact},
]


def avaliar(sistema, golden=GOLDEN):
    resultados = []
    for caso in golden:
        saida = sistema(caso["input"])
        passou = caso["scorer"](saida, caso["expected"])
        resultados.append((caso["input"], saida, passou))
    pass_rate = sum(p for _, _, p in resultados) / len(resultados)
    return pass_rate, resultados


def gate(pass_rate, limiar=0.8):
    return pass_rate >= limiar


# --- dois "sistemas" (ex.: prompts/modelos diferentes) -----------------------
RESP_BOM = {
    "capital do Brasil": "A capital do Brasil é Brasília.",
    "2 + 2": "4",
    "pi com 2 casas": "3.14",
    "oposto de 'quente'": "frio",
    "anos em uma década": "10",
}
RESP_RUIM = {
    "capital do Brasil": "A capital do Brasil é o Rio de Janeiro.",  # errado
    "2 + 2": "22",                                                    # concatenou
    "pi com 2 casas": "3.1",                                          # fora da tolerância
    "oposto de 'quente'": "frio",
    "anos em uma década": "dez",                                      # não bate exact
}


def _run_checks():
    checks = []

    pr_bom, res_bom = avaliar(lambda i: RESP_BOM[i])
    pr_ruim, res_ruim = avaliar(lambda i: RESP_RUIM[i])

    # 1. o harness calcula o pass rate corretamente.
    checks.append((f"pass rate do sistema bom = {pr_bom:.0%}", abs(pr_bom - 1.0) < 1e-9))
    checks.append((f"pass rate do sistema ruim = {pr_ruim:.0%}", abs(pr_ruim - 0.2) < 1e-9))

    # 2. o gate aprova o bom e barra o ruim.
    checks.append(("gate aprova o sistema bom (>= 80%)", gate(pr_bom)))
    checks.append(("gate barra o sistema ruim (< 80%)", not gate(pr_ruim)))

    # 3. o scorer certo pega o que "parece certo": '22' para 2+2 e '3.1' para pi.
    resp22 = next(p for i, o, p in res_ruim if i == "2 + 2")
    resp_pi = next(p for i, o, p in res_ruim if i == "pi com 2 casas")
    checks.append(("scorer exact reprova '22' para 2+2", not resp22))
    checks.append(("scorer numérico reprova '3.1' fora da tolerância", not resp_pi))

    # 4. a métrica precisa refletir a tarefa: 'dez' != '10' no exact, mas...
    checks.append(("'dez' reprova em exact (métrica da tarefa importa)",
                   not exact("dez", "10")))

    print("=== Eval harness com golden dataset ===\n")
    print(f"golden dataset: {len(GOLDEN)} casos · scorers: exact, contains, numérico(tol)")
    print(f"sistema bom : pass rate {pr_bom:.0%}  -> gate {'PASS' if gate(pr_bom) else 'BLOCK'}")
    print(f"sistema ruim: pass rate {pr_ruim:.0%}  -> gate {'PASS' if gate(pr_ruim) else 'BLOCK'}")
    print("casos reprovados no sistema ruim:")
    for i, o, p in res_ruim:
        if not p:
            print(f"  ✗ {i!r} -> {o!r}")
    print()

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: feature de IA = software com regressão. O golden dataset + o scorer da")
    print("tarefa + o gate no CI é o que impede a feature de degradar em silêncio.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
