"""
Tokenizador BPE do zero — artefato do módulo 28.

Rode com:  python bpe_do_zero.py            (só biblioteca padrão — sem numpy)
Verificado sob Pyodide 0.28 no navegador.

Pré-treinar um modelo começa ANTES do modelo: no tokenizador. Byte Pair
Encoding (BPE) é o que GPT, Llama e a maioria dos LLMs usam. A regra é simples
e vale a pena implementar à mão uma vez na vida:

  1. comece com bytes (vocabulário de 256 símbolos — cobre qualquer texto);
  2. conte o par de símbolos adjacentes mais frequente;
  3. funda esse par num símbolo novo; repita até o tamanho de vocabulário alvo.

O que este arquivo prova com asserts:
  - encode/decode é um round-trip perfeito (nenhum byte se perde);
  - treinar em bytes lida com UTF-8 e emoji sem caso especial;
  - mais merges => menos tokens por texto (a compressão que o treino compra).
"""

from collections import Counter


def _contar_pares(ids):
    pares = Counter()
    for a, b in zip(ids, ids[1:]):
        pares[(a, b)] += 1
    return pares


def _fundir(ids, par, novo_id):
    saida, i = [], 0
    while i < len(ids):
        if i < len(ids) - 1 and ids[i] == par[0] and ids[i + 1] == par[1]:
            saida.append(novo_id)
            i += 2
        else:
            saida.append(ids[i])
            i += 1
    return saida


def treinar(texto, tamanho_vocab):
    assert tamanho_vocab >= 256
    ids = list(texto.encode("utf-8"))          # começa em bytes
    merges = {}                                  # (a, b) -> novo_id
    n_merges = tamanho_vocab - 256
    for k in range(n_merges):
        pares = _contar_pares(ids)
        if not pares:
            break
        melhor = max(pares, key=pares.get)
        if pares[melhor] < 2:                    # nada mais compensa fundir
            break
        novo_id = 256 + k
        ids = _fundir(ids, melhor, novo_id)
        merges[melhor] = novo_id
    return merges


def encode(texto, merges):
    ids = list(texto.encode("utf-8"))
    # aplica os merges na ORDEM em que foram aprendidos (essencial p/ determinismo)
    for par, novo_id in merges.items():
        ids = _fundir(ids, par, novo_id)
    return ids


def decode(ids, merges):
    # reconstrói a tabela de bytes de cada id e desfaz até virar bytes puros
    vocab = {i: bytes([i]) for i in range(256)}
    for (a, b), novo_id in merges.items():
        vocab[novo_id] = vocab[a] + vocab[b]
    bs = b"".join(vocab[i] for i in ids)
    return bs.decode("utf-8", errors="replace")


CORPUS = (
    "a arquitetura transformer processa tokens em paralelo. "
    "a atenção pesa a relevância entre tokens. "
    "o tokenizador transforma texto em tokens antes do modelo. "
    "tokens, tokens e mais tokens: a compressão importa. "
) * 12


def _run_checks():
    checks = []

    merges = treinar(CORPUS, tamanho_vocab=320)   # 64 merges sobre bytes

    # 1. round-trip em texto ASCII
    amostra = "a atenção entre tokens é o coração do transformer."
    ids = encode(amostra, merges)
    checks.append(("round-trip ASCII: decode(encode(x)) == x", decode(ids, merges) == amostra))

    # 2. round-trip em UTF-8 com acento e emoji (o BPE opera em bytes)
    unicode_amostra = "tokenização é fácil 🤖 até não ser — çãé"
    ids_u = encode(unicode_amostra, merges)
    checks.append(("round-trip UTF-8/emoji preservado", decode(ids_u, merges) == unicode_amostra))

    # 3. compressão: mais merges reduz tokens/caractere no corpus de treino
    poucos = treinar(CORPUS, 256 + 5)
    muitos = treinar(CORPUS, 256 + 80)
    n_poucos = len(encode(CORPUS, poucos))
    n_muitos = len(encode(CORPUS, muitos))
    n_bytes = len(CORPUS.encode("utf-8"))
    checks.append(("mais merges => menos tokens", n_muitos < n_poucos < n_bytes))

    # 4. determinismo: encode é reprodutível
    checks.append(("encode é determinístico", encode(amostra, merges) == encode(amostra, merges)))

    # 5. um merge realmente encurta a sequência de bytes
    so_bytes = len(amostra.encode("utf-8"))
    checks.append(("tokens < bytes crus para o texto", len(ids) < so_bytes))

    print("=== BPE do zero ===\n")
    print(f"corpus: {n_bytes} bytes")
    print(f"tokens com  5 merges: {n_poucos}")
    print(f"tokens com 80 merges: {n_muitos}   (razão de compressão {n_bytes/n_muitos:.2f}x sobre bytes)")
    print(f"'{amostra}'")
    print(f"  -> {len(ids)} tokens (de {so_bytes} bytes)\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: o vocabulário é uma decisão de PRÉ-treino, não do modelo. Errar o")
    print("tokenizador (domínio, idioma, código) encarece cada token no treino inteiro.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
