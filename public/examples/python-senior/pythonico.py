"""
Módulo 7 (Python) — Código pythônico e efetivo: idiomas e armadilhas.

Rode com:  python pythonico.py        (só a biblioteca padrão)
Verificado sob Pyodide (CPython) e a lógica conferida em Node.

Idiomático não é estético: evita bugs. Aqui, armadilhas clássicas (argumento
mutável default, is vs ==) e idiomas que as previnem (enumerate, zip, EAFP).
"""


# ARMADILHA: default mutável é criado UMA vez e compartilhado entre chamadas.
def bug_mutavel(item, acc=[]):
    acc.append(item)
    return acc


# CORRETO: default None e cria a lista dentro.
def ok_mutavel(item, acc=None):
    if acc is None:
        acc = []
    acc.append(item)
    return acc


def _run_checks():
    checks = []

    # A armadilha do default mutável: o estado vaza entre chamadas.
    bug_mutavel(1)
    checks.append(("armadilha: default mutável acumula entre chamadas", bug_mutavel(2) == [1, 2]))
    # A versão correta não vaza.
    ok_mutavel(1)
    checks.append(("correto: default None isola cada chamada", ok_mutavel(2) == [2]))

    # is vs ==: identidade vs igualdade de valor.
    a = [1, 2, 3]
    b = [1, 2, 3]
    checks.append(("== compara valor; is compara identidade", (a == b) and (a is not b)))

    # enumerate em vez de range(len(...)).
    letras = ["a", "b", "c"]
    idx = [(i, x) for i, x in enumerate(letras)]
    checks.append(("enumerate dá índice + valor", idx == [(0, "a"), (1, "b"), (2, "c")]))

    # zip para percorrer em paralelo.
    nomes, idades = ["Ana", "Bia"], [30, 25]
    checks.append(("zip percorre em paralelo", list(zip(nomes, idades)) == [("Ana", 30), ("Bia", 25)]))

    # EAFP (peça perdão, não permissão): tenta e trata a exceção.
    def to_int(s):
        try:
            return int(s)
        except ValueError:
            return None
    checks.append(("EAFP: try/except em vez de checagens frágeis", to_int("42") == 42 and to_int("x") is None))

    # Truthiness: coleções vazias são falsy.
    checks.append(("truthiness: coleção vazia é falsy, não-vazia é truthy", (not []) and bool([0])))

    # Desempacotamento múltiplo.
    primeiro, *meio, ultimo = [1, 2, 3, 4, 5]
    checks.append(("desempacotamento com *", primeiro == 1 and meio == [2, 3, 4] and ultimo == 5))

    print("=== Módulo 7 (Python) — código pythônico e armadilhas ===\n")
    print("bug_mutavel acumulou; ok_mutavel isolou:", bug_mutavel(3), "vs", ok_mutavel(3), "\n")
    ok = sum(1 for _, c in checks if c)
    for nome, c in checks:
        print(f"  {'ok  ' if c else 'FALHOU'} {nome}")
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("Lição: idiomático evita bug — nunca use default mutável, distinga is de ==, e prefira enumerate/zip/EAFP a gambiarras.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
