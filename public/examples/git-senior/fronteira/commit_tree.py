"""
Trees, commits e o Merkle DAG do zero — artefato do módulo 19.

Rode com:  python commit_tree.py            (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador E contra o git real 2.54.

Um blob guarda conteúdo; uma tree guarda a estrutura de diretórios; um commit
amarra uma tree a pais, autor e mensagem. Juntos formam um DAG de Merkle: o
hash de cada nível inclui os hashes do nível abaixo, então qualquer alteração
se propaga até o commit. É isto que torna o histórico à prova de adulteração.

Este arquivo constrói tree e commit do zero e prova, com asserts, que casa com
o git real (hashes obtidos com `git write-tree` e `git commit-tree`):

  tree  (100644 hello.txt -> blob hello) = aaa96ced2d9a1c8e72c56b253a0e2fe78393feb7
  commit (essa tree, autor fixo)         = 753124015b287e1110196103855420500995af44
"""

import hashlib


def hash_conteudo(tipo, conteudo):
    corpo = f"{tipo} {len(conteudo)}\0".encode() + conteudo
    return hashlib.sha1(corpo).hexdigest()


def montar_tree(entradas):
    """
    entradas: lista de (modo, nome, sha_hex). O git ORDENA por nome e grava
    cada entrada como  b"<modo> <nome>\\0" + sha(20 bytes crus).
    """
    corpo = b""
    for modo, nome, sha_hex in sorted(entradas, key=lambda e: e[1]):
        corpo += f"{modo} {nome}\0".encode() + bytes.fromhex(sha_hex)
    return hash_conteudo("tree", corpo), corpo


def montar_commit(tree_sha, pais, autor, committer, mensagem):
    linhas = [f"tree {tree_sha}"]
    for p in pais:
        linhas.append(f"parent {p}")
    linhas.append(f"author {autor}")
    linhas.append(f"committer {committer}")
    linhas.append("")
    linhas.append(mensagem)
    corpo = ("\n".join(linhas) + "\n").encode()   # git termina a mensagem com \n
    return hash_conteudo("commit", corpo), corpo


BLOB_HELLO = "ce013625030ba8dba906f756967f9e9ca394464a"
TREE_REAL = "aaa96ced2d9a1c8e72c56b253a0e2fe78393feb7"
COMMIT_REAL = "753124015b287e1110196103855420500995af44"
EMPTY_TREE = "4b825dc642cb6eb9a060e54bf8d69288fbee4904"
ASSINATURA = "Aluno <aluno@example.com> 1700000000 +0000"


def _run_checks():
    checks = []

    # 1. a árvore vazia bate com a constante universal do git.
    checks.append(("tree vazia == git real (4b825dc...)", montar_tree([])[0] == EMPTY_TREE))

    # 2. tree com um arquivo bate com `git write-tree`.
    tree_sha, _ = montar_tree([("100644", "hello.txt", BLOB_HELLO)])
    checks.append(("tree(hello.txt) == git real (aaa96ced...)", tree_sha == TREE_REAL))

    # 3. commit bate com `git commit-tree` (autor/committer/data fixos).
    commit_sha, corpo = montar_commit(TREE_REAL, [], ASSINATURA, ASSINATURA, "primeiro commit")
    checks.append(("commit == git real (7531240...)", commit_sha == COMMIT_REAL))
    checks.append(("o commit aponta para a tree", corpo.startswith(f"tree {TREE_REAL}".encode())))

    # 4. propriedade de Merkle: mudar o blob muda a tree muda o commit.
    blob2 = hash_conteudo("blob", b"mundo\n")
    tree2, _ = montar_tree([("100644", "hello.txt", blob2)])
    commit2, _ = montar_commit(tree2, [], ASSINATURA, ASSINATURA, "primeiro commit")
    checks.append(("blob diferente => tree diferente", tree2 != TREE_REAL))
    checks.append(("tree diferente => commit diferente (Merkle propaga)", commit2 != COMMIT_REAL))

    # 5. só a mensagem muda => tree igual, commit diferente.
    commit3, _ = montar_commit(TREE_REAL, [], ASSINATURA, ASSINATURA, "outra mensagem")
    checks.append(("mensagem diferente => commit diferente, mesma tree", commit3 != COMMIT_REAL))

    # 6. um pai diferente muda o commit (a cadeia de histórico é imutável).
    com_pai, _ = montar_commit(TREE_REAL, [COMMIT_REAL], ASSINATURA, ASSINATURA, "primeiro commit")
    checks.append(("adicionar um parent muda o hash do commit", com_pai != COMMIT_REAL))

    print("=== Trees, commits e o Merkle DAG ===\n")
    print(f"tree(hello.txt) = {tree_sha}   (git: {TREE_REAL})")
    print(f"commit          = {commit_sha}   (git: {COMMIT_REAL})")
    print(f"muda o blob     -> tree {tree2[:12]}... -> commit {commit2[:12]}...")
    print("(um byte no arquivo re-hasheia até o topo: é a prova de integridade do Git)\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: o histórico do Git é um DAG de Merkle. Reescrever qualquer commit")
    print("antigo muda o hash dele E de todos os descendentes — por isso rebase gera novos SHAs.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
