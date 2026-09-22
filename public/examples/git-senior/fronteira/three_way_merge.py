"""
Merge de três vias do zero — artefato do módulo 20.

Rode com:  python three_way_merge.py        (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador.

Por que o Git precisa da BASE (o ancestral comum) para mesclar? Porque sem ela
não dá para distinguir "os dois lados mudaram a mesma coisa" (conflito real) de
"só um lado mudou" (aplica direto). Este arquivo implementa o merge de três vias
por linha e prova, com asserts, os casos que todo dev encontra:

  - só ours mudou   -> pega ours, sem conflito;
  - só theirs mudou -> pega theirs, sem conflito;
  - ambos mudaram igual -> convergência, sem conflito;
  - ambos mudaram diferente -> CONFLITO, com marcadores <<<< ==== >>>>.

É um merge simplificado (por linha, sem diff LCS), mas a LÓGICA de decisão é
exatamente a do Git.
"""


def merge3(base, ours, theirs):
    """
    base/ours/theirs: listas de linhas. Devolve (linhas, houve_conflito).
    Alinha por índice de linha (simplificação didática do alinhamento real).
    """
    n = max(len(base), len(ours), len(theirs))
    saida = []
    conflito = False
    for i in range(n):
        b = base[i] if i < len(base) else None
        o = ours[i] if i < len(ours) else None
        t = theirs[i] if i < len(theirs) else None

        if o == t:
            # os dois lados concordam (mudaram igual ou não mudaram)
            if o is not None:
                saida.append(o)
        elif o == b:
            # ours não mexeu; theirs mexeu -> aceita theirs
            if t is not None:
                saida.append(t)
        elif t == b:
            # theirs não mexeu; ours mexeu -> aceita ours
            if o is not None:
                saida.append(o)
        else:
            # os dois mexeram de formas diferentes -> conflito
            conflito = True
            saida.append("<<<<<<< ours")
            if o is not None:
                saida.append(o)
            saida.append("=======")
            if t is not None:
                saida.append(t)
            saida.append(">>>>>>> theirs")
    return saida, conflito


def _run_checks():
    checks = []

    base = ["a", "b", "c"]

    # 1. só ours mudou -> pega ours, sem conflito.
    out, conf = merge3(base, ["a", "B", "c"], ["a", "b", "c"])
    checks.append(("só ours mudou: aceita ours, sem conflito", out == ["a", "B", "c"] and not conf))

    # 2. só theirs mudou -> pega theirs, sem conflito.
    out, conf = merge3(base, ["a", "b", "c"], ["a", "b", "C"])
    checks.append(("só theirs mudou: aceita theirs, sem conflito", out == ["a", "b", "C"] and not conf))

    # 3. ambos mudaram a MESMA linha para o MESMO valor -> convergência.
    out, conf = merge3(base, ["a", "X", "c"], ["a", "X", "c"])
    checks.append(("mudança idêntica dos dois lados: converge, sem conflito", out == ["a", "X", "c"] and not conf))

    # 4. ambos mudaram a mesma linha diferente -> CONFLITO com marcadores.
    out, conf = merge3(base, ["a", "O", "c"], ["a", "T", "c"])
    checks.append(("mudança divergente: gera conflito", conf))
    checks.append(("o conflito traz os dois lados entre marcadores",
                   "<<<<<<< ours" in out and "O" in out and "T" in out and ">>>>>>> theirs" in out))

    # 5. mudanças em linhas DIFERENTES combinam sem conflito.
    out, conf = merge3(base, ["A", "b", "c"], ["a", "b", "C"])
    checks.append(("mudanças em linhas distintas combinam", out == ["A", "b", "C"] and not conf))

    # 6. o papel da BASE: sem ela, (2) e (4) seriam indistinguíveis.
    #    Aqui, o mesmo par (ours,theirs) dá resultados diferentes conforme a base.
    o, t = ["a", "Z", "c"], ["a", "b", "c"]
    out_b1, conf_b1 = merge3(["a", "b", "c"], o, t)   # base = b -> ours mudou, theirs não
    out_b2, conf_b2 = merge3(["a", "Z", "c"], o, t)   # base = Z -> theirs removeu a mudança
    checks.append(("a BASE decide o resultado (mesmos ours/theirs, bases diferentes)",
                   out_b1 == ["a", "Z", "c"] and out_b2 == ["a", "b", "c"]))

    print("=== Merge de três vias do zero ===\n")
    out, conf = merge3(base, ["a", "O", "c"], ["a", "T", "c"])
    print("base=[a,b,c] ours=[a,O,c] theirs=[a,T,c]  ->  conflito:")
    for linha in out:
        print("   " + linha)
    print()

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: a BASE (ancestral comum) é o que separa conflito real de mudança de")
    print("um lado só. É por isso que o Git guarda o DAG inteiro, não só as duas pontas.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
