"""
Faixa 0 — Como o computador conta: binário, hexadecimal e bits.

Rode com:  python binario.py   (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador.

O computador só tem dois estados: 0 e 1 (um bit). Todo número é uma soma de
potências de 2. Hexadecimal (base 16) é só uma forma curta de escrever binário
(cada dígito hex = 4 bits). Operações bit a bit (AND, OR, deslocamento) são a
base de flags, máscaras e muita otimização.
"""


def para_binario(n, largura=8):
    """Converte um inteiro não negativo para string binária de largura fixa."""
    return format(n, f"0{largura}b")


def _run_checks():
    checks = []

    # 1. binário é soma de potências de 2: 13 = 8 + 4 + 1 = 1101.
    checks.append(("13 em binário é 1101", para_binario(13, 4) == "1101"))
    checks.append(("1101 vale 8+4+1 = 13", 0b1101 == 13))
    checks.append(("um byte (8 bits) vai de 0 a 255", (0b00000000, 0b11111111) == (0, 255)))

    # 2. hex é binário compacto: 1 dígito hex = 4 bits.
    checks.append(("0xFF é 255", 0xFF == 255))
    checks.append(("0xFF em binário é 11111111", para_binario(0xFF) == "11111111"))
    checks.append(("0x1F = 31 = 0001 1111", 0x1F == 31 and para_binario(0x1F) == "00011111"))

    # 3. operações bit a bit.
    checks.append(("AND: 0b1100 & 0b1010 == 0b1000", (0b1100 & 0b1010) == 0b1000))
    checks.append(("OR:  0b1100 | 0b1010 == 0b1110", (0b1100 | 0b1010) == 0b1110))
    checks.append(("XOR: 0b1100 ^ 0b1010 == 0b0110", (0b1100 ^ 0b1010) == 0b0110))

    # 4. deslocar à esquerda multiplica por 2; à direita divide por 2.
    checks.append(("1 << 4 == 16 (dobra 4 vezes)", (1 << 4) == 16))
    checks.append(("13 >> 1 == 6 (divide por 2, descarta o resto)", (13 >> 1) == 6))

    # 5. máscara: pegar o bit menos significativo diz se é par ou ímpar.
    checks.append(("n & 1 == 0 identifica par", all((n & 1 == 0) == (n % 2 == 0) for n in range(20))))

    print("=== Binário e hexadecimal ===\n")
    for n in (5, 13, 255):
        print(f"{n:>4} = 0b{para_binario(n)} = 0x{n:02X}")
    print(f"\n0b1100 & 0b1010 = 0b{para_binario(0b1100 & 0b1010, 4)}")
    print(f"1 << 4 = {1 << 4}  |  13 >> 1 = {13 >> 1}")
    print()

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: todo número é bits (potências de 2); hex é o atalho para lê-los.")
    print("Deslocar é multiplicar/dividir por 2; AND com máscara isola bits.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
