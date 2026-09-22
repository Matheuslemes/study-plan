"""
Módulo 8 (Python) — Ambientes, dependências e empacotamento.

Rode com:  python empacotamento.py        (só a biblioteca padrão)
Verificado sob Pyodide (CPython) e a lógica conferida em Node.

Reprodutibilidade exige fixar dependências por versão. Aqui reproduzimos o núcleo
de um resolvedor: versionamento semântico (MAJOR.MINOR.PATCH) e a regra do "caret"
(^1.2.3 aceita correções e features, mas nunca um MAJOR que quebra compatibilidade).
"""


def parse(versao):
    return tuple(int(p) for p in versao.split("."))


# ^1.2.3 => >= 1.2.3 e < 2.0.0 (não sobe o MAJOR).
def compativel_caret(alvo, candidata):
    a = parse(alvo)
    c = parse(candidata)
    return c >= a and c[0] == a[0]


def resolver(requerido, disponiveis):
    """A maior versão disponível que satisfaz o caret do requerido."""
    ok = [v for v in disponiveis if compativel_caret(requerido, v)]
    return max(ok, key=parse) if ok else None


def _run_checks():
    checks = []

    # SemVer compara por campo, não como texto ("1.10.0" > "1.9.0").
    checks.append(("comparação semântica: 1.10.0 > 1.9.0", parse("1.10.0") > parse("1.9.0")))
    checks.append(("como texto seria errado: '1.10.0' < '1.9.0'", "1.10.0" < "1.9.0"))

    # Caret aceita PATCH e MINOR maiores, no mesmo MAJOR.
    checks.append(("^1.2.3 aceita 1.2.4 (patch)", compativel_caret("1.2.3", "1.2.4")))
    checks.append(("^1.2.3 aceita 1.5.0 (minor)", compativel_caret("1.2.3", "1.5.0")))
    # Mas rejeita MAJOR novo (quebra) e versões anteriores.
    checks.append(("^1.2.3 REJEITA 2.0.0 (major quebra compat)", not compativel_caret("1.2.3", "2.0.0")))
    checks.append(("^1.2.3 rejeita 1.2.2 (anterior ao pedido)", not compativel_caret("1.2.3", "1.2.2")))

    # Resolver escolhe a maior compatível.
    disp = ["1.2.3", "1.4.0", "1.9.1", "2.0.0", "0.9.0"]
    checks.append(("resolver ^1.2.3 escolhe a maior no major 1 (1.9.1)", resolver("1.2.3", disp) == "1.9.1"))
    checks.append(("sem candidata compatível, resolve para None", resolver("3.0.0", disp) is None))

    print("=== Módulo 8 (Python) — versionamento e resolução de dependências ===\n")
    print("disponíveis:", disp, "| ^1.2.3 ->", resolver("1.2.3", disp), "\n")
    ok = sum(1 for _, c in checks if c)
    for nome, c in checks:
        print(f"  {'ok  ' if c else 'FALHOU'} {nome}")
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("Lição: fixe dependências por SemVer (compare por campo, não por texto); o caret dá correções sem arriscar um MAJOR incompatível. Use venv + lockfile para reprodutibilidade.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
