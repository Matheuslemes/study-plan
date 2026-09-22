"""
Módulo 0 (Python) — Da Faixa 0 ao Python, com código que roda.

Rode com:  python python-zero.py   (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador.

Liga os fundamentos universais (memória valor×referência, ponto flutuante) à
forma concreta que eles tomam em Python — e mostra onde o Python DIFERE do que
a Faixa 0 viu em linguagens de tipo fixo:
  1. float continua aproximado (0.1 + 0.2 ≠ 0.3) — isso é universal;
  2. int em Python NÃO transborda: cresce sem limite (2**100 é exato);
  3. tudo é objeto e nomes são referências — `is` (identidade) ≠ `==` (valor);
  4. list é mutável (alias muda os dois); tuple é imutável.
"""


def soma_ate(n):
    """Controle de fluxo básico: somar 1..n com um laço."""
    total = 0
    for i in range(1, n + 1):
        total += i
    return total


def _run_checks():
    checks = []

    # 1. float é aproximado (igual à Faixa 0).
    soma = 0.1 + 0.2
    checks.append(("float é aproximado: 0.1 + 0.2 ≠ 0.3", soma != 0.3 and abs(soma - 0.3) < 1e-9))

    # 2. int em Python não transborda — cresce sem limite.
    grande = 2 ** 100
    checks.append(("int não transborda: 2**100 é exato", grande == 1267650600228229401496703205376))
    checks.append(("int grande + 1 continua exato", grande + 1 == 1267650600228229401496703205377))

    # 3. tudo é objeto; `is` é identidade, `==` é valor.
    a = [1, 2, 3]
    b = [1, 2, 3]
    checks.append(("listas com mesmo conteúdo: == é True", a == b))
    checks.append(("...mas is é False (objetos distintos)", a is not b))
    checks.append(("tudo é objeto: type(5) is int e 5 tem métodos", type(5) is int and (255).bit_length() == 8))

    # 4. nome é referência: alias muda os dois; copiar não.
    original = [1, 2]
    alias = original          # aponta para o MESMO objeto
    alias.append(3)
    checks.append(("alias de list muda o original ([1,2,3])", original == [1, 2, 3]))
    copia = original[:]       # cópia rasa: objeto novo
    copia.append(4)
    checks.append(("cópia é independente (original não muda)", original == [1, 2, 3]))

    # 5. tuple é imutável.
    imutavel = (1, 2, 3)
    try:
        imutavel[0] = 99
        mutou = True
    except TypeError:
        mutou = False
    checks.append(("tuple é imutável (atribuir item lança TypeError)", not mutou))

    # 6. controle de fluxo.
    checks.append(("laço soma 1..5 = 15", soma_ate(5) == 15))

    print("=== Módulo 0 (Python) — do fundamento ao código ===")
    print(f"float: 0.1 + 0.2 = {soma!r}")
    print(f"int sem overflow: 2**100 = {grande}")
    print(f"is vs ==: {a} == {b} -> {a == b} | a is b -> {a is b}")
    print(f"alias: original virou {original}")
    print(f"laço 1..5 = {soma_ate(5)}")
    print()

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("Lição: os fundamentos da Faixa 0 reaparecem em Python — float aproximado, nome = referência,")
    print("`is` vs `==` — mas o int cresce sem limite (sem overflow), diferente de linguagens de tipo fixo.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
