"""
Object store do zero: hash-object e cat-file — artefato do módulo 18.

Rode com:  python hash_object.py            (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador E contra o git real 2.54.

O Git é, no fundo, um banco de dados endereçável por conteúdo. Este arquivo
reconstrói o coração dele em ~40 linhas e prova, com asserts, que produz
EXATAMENTE os mesmos hashes que o `git hash-object` de verdade:

  - o id de um objeto é SHA-1("<tipo> <tamanho>\\0<conteúdo>");
  - o objeto é gravado comprimido com zlib em .git/objects/ab/cdef...;
  - conteúdo idêntico → mesmo hash → dedupe automático (é o que economiza espaço).

As constantes abaixo foram tiradas do git real:
  git hash-object (blob vazio)   = e69de29bb2d1d6434b8b29ae775ad8c2e48c5391
  printf 'hello\\n' | hash-object = ce013625030ba8dba906f756967f9e9ca394464a
"""

import hashlib
import zlib


class ObjectStore:
    """Um .git/objects em memória — a mesma lógica, sem tocar o disco."""

    def __init__(self):
        self.objetos = {}          # sha_hex -> bytes comprimidos (como no disco)

    def hash_object(self, tipo, conteudo, escrever=True):
        # O formato EXATO do git: cabeçalho + NUL + conteúdo, hasheado inteiro.
        corpo = f"{tipo} {len(conteudo)}\0".encode() + conteudo
        sha = hashlib.sha1(corpo).hexdigest()
        if escrever:
            self.objetos[sha] = zlib.compress(corpo)   # git grava comprimido
        return sha

    def cat_file(self, sha):
        # Lê o objeto: descomprime, separa o cabeçalho no primeiro NUL.
        corpo = zlib.decompress(self.objetos[sha])
        cabecalho, conteudo = corpo.split(b"\0", 1)
        tipo, tamanho = cabecalho.decode().split(" ")
        assert int(tamanho) == len(conteudo), "tamanho no cabeçalho não bate"
        return tipo, conteudo

    def caminho(self, sha):
        # Onde o git gravaria: os 2 primeiros dígitos viram diretório.
        return f".git/objects/{sha[:2]}/{sha[2:]}"


BLOB_VAZIO = "e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"
BLOB_HELLO = "ce013625030ba8dba906f756967f9e9ca394464a"


def _run_checks():
    checks = []
    store = ObjectStore()

    # 1. bate com o git real: blob vazio e "hello\n".
    checks.append(("blob vazio == git real (e69de29...)", store.hash_object("blob", b"") == BLOB_VAZIO))
    checks.append(("blob 'hello\\n' == git real (ce01362...)", store.hash_object("blob", b"hello\n") == BLOB_HELLO))

    # 2. round-trip: gravar e ler devolve o mesmo conteúdo e tipo.
    sha = store.hash_object("blob", b"conteudo de teste")
    tipo, conteudo = store.cat_file(sha)
    checks.append(("round-trip preserva tipo e conteúdo", tipo == "blob" and conteudo == b"conteudo de teste"))

    # 3. dedupe: o mesmo conteúdo produz o mesmo hash (uma entrada só).
    antes = len(store.objetos)
    store.hash_object("blob", b"conteudo de teste")   # de novo
    checks.append(("conteúdo idêntico não duplica (dedupe por hash)", len(store.objetos) == antes))

    # 4. o cabeçalho importa: o MESMO conteúdo com tipo diferente muda o hash.
    checks.append(("tipo diferente => hash diferente (o cabeçalho entra no hash)",
                   store.hash_object("blob", b"x", escrever=False) != store.hash_object("commit", b"x", escrever=False)))

    # 5. o caminho no disco usa os 2 primeiros dígitos como pasta (fan-out).
    checks.append(("caminho = .git/objects/ab/cdef...", store.caminho(BLOB_HELLO) == f".git/objects/ce/{BLOB_HELLO[2:]}"))

    # 6. corrupção é detectável: mudar 1 byte do conteúdo muda o hash.
    checks.append(("1 byte diferente => hash totalmente diferente",
                   store.hash_object("blob", b"hello\n", escrever=False) != store.hash_object("blob", b"hellz\n", escrever=False)))

    print("=== Object store do zero ===\n")
    print(f"blob vazio    = {store.hash_object('blob', b'', escrever=False)}")
    print(f"blob 'hello\\n' = {store.hash_object('blob', b'hello\n', escrever=False)}")
    print(f"caminho no disco = {store.caminho(BLOB_HELLO)}")
    print(f"objetos gravados = {len(store.objetos)}\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: o Git é um mapa de SHA-1 → conteúdo comprimido. 'Commit' e 'branch'")
    print("são abstrações sobre isto; quem entende o object store depura qualquer coisa.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
