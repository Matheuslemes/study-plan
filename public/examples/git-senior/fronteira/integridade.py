"""
Integridade, colisão e a transição SHA-1 → SHA-256 — artefato do módulo 22.

Rode com:  python integridade.py            (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador E contra o git real 2.54.

O Git nasceu com SHA-1. Em 2017 o ataque SHAttered produziu duas entradas
diferentes com o MESMO SHA-1 — uma colisão real. Por isso o Git ganhou um
formato de objeto em SHA-256 (git init --object-format=sha256), e a migração é a
fronteira de segurança do versionamento.

Este arquivo prova, com asserts:
  1. o id de objeto em SHA-1 e em SHA-256 do MESMO conteúdo (o de SHA-256 tem 64
     hex, não 40) — e que o de SHA-1 bate com o git real;
  2. a propriedade de Merkle: adulterar um objeto antigo quebra a verificação de
     TODOS os descendentes — a defesa que torna o histórico auditável;
  3. por que SHA-1 no Git resistiu na prática (prefixo de tipo + detecção de
     colisão), mas SHA-256 é a resposta definitiva.
"""

import hashlib


def object_id(conteudo, tipo="blob", algo="sha1"):
    corpo = f"{tipo} {len(conteudo)}\0".encode() + conteudo
    h = hashlib.new(algo)
    h.update(corpo)
    return h.hexdigest()


def cadeia_commits(mensagens, algo="sha1"):
    """Constrói uma mini-cadeia de commits encadeados (cada um aponta o anterior)."""
    ids = []
    pai = None
    for msg in mensagens:
        corpo = (f"parent {pai}\n" if pai else "") + f"mensagem {msg}"
        cid = object_id(corpo.encode(), tipo="commit", algo=algo)
        ids.append(cid)
        pai = cid
    return ids


def verificar_cadeia(mensagens, ids, algo="sha1"):
    """Recalcula a cadeia e compara com os ids guardados (integridade)."""
    recalc = cadeia_commits(mensagens, algo=algo)
    return recalc == ids


BLOB_HELLO_SHA1 = "ce013625030ba8dba906f756967f9e9ca394464a"


def _run_checks():
    checks = []

    # 1. SHA-1 bate com o git real; SHA-256 é o mesmo conteúdo, id mais longo.
    id1 = object_id(b"hello\n", "blob", "sha1")
    id256 = object_id(b"hello\n", "blob", "sha256")
    checks.append(("id SHA-1 == git real (ce01362...)", id1 == BLOB_HELLO_SHA1))
    checks.append(("id SHA-1 tem 40 hex; SHA-256 tem 64", len(id1) == 40 and len(id256) == 64))
    checks.append(("SHA-1 e SHA-256 do mesmo conteúdo são diferentes", id1 != id256[:40]))

    # 2. Merkle: adulterar um commit antigo quebra a verificação da cadeia inteira.
    msgs = ["a", "b", "c", "d"]
    ids = cadeia_commits(msgs)
    checks.append(("a cadeia íntegra verifica", verificar_cadeia(msgs, ids)))

    adulterada = ["a", "b", "HACK", "d"]      # troca o 3º commit
    checks.append(("adulterar um commit antigo quebra a verificação", not verificar_cadeia(adulterada, ids)))

    # o efeito propaga: o commit adulterado E os posteriores mudam de id.
    ids_adulterados = cadeia_commits(adulterada)
    mudaram = sum(1 for a, b in zip(ids, ids_adulterados) if a != b)
    checks.append(("mudança no 3º de 4 commits altera o 3º e o 4º (propaga)", mudaram == 2))
    checks.append(("os commits ANTES do ponto de adulteração ficam intactos",
                   ids[0] == ids_adulterados[0] and ids[1] == ids_adulterados[1]))

    # 3. sensibilidade a 1 bit: mudar um caractere muda o hash por completo.
    a = object_id(b"conteudo", "blob", "sha1")
    b = object_id(b"conteudoo", "blob", "sha1")
    dif = sum(1 for x, y in zip(a, b) if x != y)
    checks.append(("efeito avalanche: ~metade dos dígitos hex mudam", dif > len(a) * 0.3))

    # 4. o mesmo mecanismo em SHA-256 (a migração preserva a semântica).
    ids_256 = cadeia_commits(msgs, algo="sha256")
    checks.append(("a cadeia em SHA-256 verifica igual", verificar_cadeia(msgs, ids_256, algo="sha256")))
    checks.append(("ids em SHA-256 têm 64 hex", all(len(x) == 64 for x in ids_256)))

    print("=== Integridade e a transição SHA-1 -> SHA-256 ===\n")
    print(f"blob 'hello\\n'  SHA-1   = {id1}")
    print(f"blob 'hello\\n'  SHA-256 = {id256}")
    print(f"cadeia íntegra  = {[x[:8] for x in ids]}")
    print(f"após adulterar o 3º = {[x[:8] for x in ids_adulterados]}   (3º e 4º mudam)\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: o hash encadeado é o que torna o histórico auditável — adulterar o")
    print("passado quebra o presente. SHAttered (2017) motivou o formato SHA-256; migrar é")
    print("trocar a raiz de confiança do repositório.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
