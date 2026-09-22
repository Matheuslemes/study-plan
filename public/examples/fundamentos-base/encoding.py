"""
Faixa 0 — Texto é bytes: ASCII, UTF-8 e por que aparece "Ã©".

Rode com:  python encoding.py   (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador.

Um arquivo não guarda "letras", guarda BYTES. Uma codificação (encoding) é a
regra que diz qual byte vira qual letra. ASCII cobre o inglês (1 byte por
caractere); UTF-8 cobre o mundo (1 a 4 bytes). Ler bytes de UTF-8 como se
fossem de outra codificação produz o "mojibake" (o famoso "Ã©" no lugar de "é").
"""


def _run_checks():
    checks = []

    # 1. ASCII: 1 byte por caractere; "A" é o byte 65.
    checks.append(('"A" é o byte 65 em ASCII', "A".encode("ascii") == bytes([65])))
    checks.append(('"Hi" ocupa 2 bytes', len("Hi".encode("utf-8")) == 2))

    # 2. UTF-8: um acento ocupa 2 bytes; um emoji, 4.
    a_bytes = "á".encode("utf-8")
    checks.append(('"á" ocupa 2 bytes em UTF-8', len(a_bytes) == 2))
    checks.append(("um emoji ocupa 4 bytes em UTF-8", len("😀".encode("utf-8")) == 4))
    checks.append(("nº de caracteres ≠ nº de bytes (\"olá\" = 3 chars, 4 bytes)",
                   len("olá") == 3 and len("olá".encode("utf-8")) == 4))

    # 3. round-trip: encode e decode na MESMA codificação sempre volta igual.
    original = "coração 42 €"
    checks.append(("encode+decode em UTF-8 preserva o texto",
                   original.encode("utf-8").decode("utf-8") == original))

    # 4. mojibake: ler bytes de UTF-8 como Latin-1 estraga o acento.
    mojibake = "café".encode("utf-8").decode("latin-1")
    checks.append(('ler UTF-8 como Latin-1 vira mojibake ("café" -> "cafÃ©")', mojibake == "cafÃ©"))
    checks.append(("ASCII não consegue representar 'á' (dá erro)", _falha_ascii("á")))

    print("=== Texto é bytes (encoding) ===\n")
    print(f'"á" em UTF-8: {list("á".encode("utf-8"))} (2 bytes)')
    print(f'"olá": {len("olá")} caracteres, {len("olá".encode("utf-8"))} bytes')
    print(f'mojibake de "café" lido como Latin-1: {mojibake!r}')
    print()

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: sempre saiba a codificação dos seus bytes. Use UTF-8 em tudo e")
    print("decodifique com a mesma regra com que foi codificado — senão, mojibake.")
    return ok == len(checks)


def _falha_ascii(texto):
    try:
        texto.encode("ascii")
        return False
    except UnicodeEncodeError:
        return True


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
