"""
Packfiles e compressão delta do zero — artefato do módulo 21.

Rode com:  python delta.py                  (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador.

Quando o Git empacota o repositório (git gc), ele não guarda cada versão de um
arquivo inteira: guarda uma versão base e, para as outras, um DELTA — instruções
de "copie N bytes do base" e "insira estes bytes novos". É o que faz um histórico
com milhares de versões parecidas caber em poucos MB.

Este arquivo implementa um codec de delta (copy/insert) no espírito do formato do
Git e prova, com asserts, as duas propriedades que importam:

  1. corretude: aplicar o delta ao base reconstrói EXATAMENTE o alvo;
  2. compressão: para versões parecidas, o delta é muito menor que o alvo inteiro.
"""


def gerar_delta(base, alvo, janela=16):
    """
    Gera uma lista de instruções: ('copy', offset, tamanho) | ('insert', bytes).
    Estratégia gulosa: indexa substrings do base e procura o maior casamento.
    Simplificado, mas com a mesma ideia do delta do Git.
    """
    # índice: cada k-gram do base -> lista de posições
    indice = {}
    for i in range(len(base) - janela + 1):
        indice.setdefault(base[i:i + janela], []).append(i)

    instrucoes = []
    buffer_insert = bytearray()
    i = 0
    while i < len(alvo):
        melhor_off, melhor_len = -1, 0
        chave = alvo[i:i + janela]
        if len(chave) == janela and chave in indice:
            for off in indice[chave]:
                # estende o casamento o máximo possível
                comp = janela
                while (off + comp < len(base) and i + comp < len(alvo)
                       and base[off + comp] == alvo[i + comp]):
                    comp += 1
                if comp > melhor_len:
                    melhor_len, melhor_off = comp, off
        if melhor_len >= janela:
            if buffer_insert:
                instrucoes.append(("insert", bytes(buffer_insert)))
                buffer_insert = bytearray()
            instrucoes.append(("copy", melhor_off, melhor_len))
            i += melhor_len
        else:
            buffer_insert.append(alvo[i])
            i += 1
    if buffer_insert:
        instrucoes.append(("insert", bytes(buffer_insert)))
    return instrucoes


def aplicar_delta(base, instrucoes):
    saida = bytearray()
    for instr in instrucoes:
        if instr[0] == "copy":
            _, off, comp = instr
            saida += base[off:off + comp]
        else:
            saida += instr[1]
    return bytes(saida)


def tamanho_delta(instrucoes):
    # copy custa ~3 bytes (op+offset+len); insert custa 1 + os bytes inseridos.
    total = 0
    for instr in instrucoes:
        total += 3 if instr[0] == "copy" else 1 + len(instr[1])
    return total


def _run_checks():
    checks = []

    base = b"O rapido raposa marrom pula sobre o cao preguicoso. " * 20
    # alvo: o mesmo texto com uma pequena edicao no meio
    alvo = base.replace(b"marrom", b"AZUL-ESCURO", 1)

    delta = gerar_delta(base, alvo)
    reconstruido = aplicar_delta(base, delta)

    # 1. corretude: base + delta == alvo, exatamente.
    checks.append(("aplicar o delta reconstrói o alvo byte a byte", reconstruido == alvo))

    # 2. compressão: o delta é bem menor que guardar o alvo inteiro.
    checks.append(("delta << alvo para versões parecidas",
                   tamanho_delta(delta) < len(alvo) // 3))

    # 3. o delta usa cópias (reaproveita o base), não só inserts.
    tem_copy = any(instr[0] == "copy" for instr in delta)
    checks.append(("o delta reaproveita o base com instruções de copy", tem_copy))

    # 4. caso extremo: alvo == base -> delta é essencialmente uma cópia só.
    d_igual = gerar_delta(base, base)
    checks.append(("alvo idêntico ao base: reconstrói e delta minúsculo",
                   aplicar_delta(base, d_igual) == base and tamanho_delta(d_igual) < 20))

    # 5. conteúdo totalmente novo: cai em insert, e ainda assim reconstrói.
    novo = b"conteudo completamente diferente sem relacao nenhuma com o base!!"
    d_novo = gerar_delta(base, novo)
    checks.append(("conteúdo sem relação: sem copy, mas reconstrói certo",
                   aplicar_delta(base, d_novo) == novo))

    # 6. round-trip em muitas edições aleatórias-determinísticas.
    ok_roundtrip = True
    v = base
    for k in range(1, 6):
        v2 = v.replace(b"cao", bytes(f"gato{k}", "ascii"), 1)
        if aplicar_delta(v, gerar_delta(v, v2)) != v2:
            ok_roundtrip = False
        v = v2
    checks.append(("round-trip correto em uma cadeia de versões", ok_roundtrip))

    print("=== Packfiles e compressão delta ===\n")
    print(f"base           = {len(base)} bytes")
    print(f"alvo           = {len(alvo)} bytes (uma palavra trocada)")
    print(f"delta          = {tamanho_delta(delta)} bytes  ->  {tamanho_delta(delta)/len(alvo):.1%} do alvo")
    print(f"instruções     = {len(delta)}  (copies reaproveitam o base)\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: o packfile guarda base + deltas, não N cópias. É por isso que clonar")
    print("um repositório com anos de histórico baixa poucos MB — e por que 'git gc' importa.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
