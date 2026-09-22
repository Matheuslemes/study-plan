"""
Detector de dependências alucinadas (slopsquatting) — artefato do módulo 11.

Rode com:  python deps_alucinadas.py         (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador.

LLMs alucinam nomes de pacotes (pesquisa aponta ~20% dos casos). Atacantes
registram esses nomes — slopsquatting — e quem copia o código gerado e roda
`pip install` traz malware (o caso real do 'huggingface-cli' vazio teve dezenas
de milhares de downloads). A defesa NÃO é confiar no nome: é VERIFICAR toda
dependência sugerida contra o registro antes de instalar.

Este arquivo implementa o verificador e prova, com asserts, que ele:
  1. aprova pacotes que existem no registro;
  2. sinaliza pacotes INEXISTENTES (alucinados);
  3. sinaliza vizinhos por 1 edição (typo/slopsquat) de um pacote real.
"""


# Registro (allowlist) — na vida real, uma consulta ao PyPI/npm + política.
REGISTRO = {
    "requests", "numpy", "pandas", "flask", "django", "pytest",
    "scikit-learn", "torch", "transformers", "pydantic", "httpx", "sqlalchemy",
}


def levenshtein(a, b):
    if a == b:
        return 0
    if not a:
        return len(b)
    if not b:
        return len(a)
    anterior = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        atual = [i]
        for j, cb in enumerate(b, 1):
            ins = atual[j - 1] + 1
            rem = anterior[j] + 1
            sub = anterior[j - 1] + (ca != cb)
            atual.append(min(ins, rem, sub))
        anterior = atual
    return anterior[-1]


def verificar(pacote, registro=REGISTRO):
    """Devolve (status, detalhe): ok | slopsquat | alucinado."""
    if pacote in registro:
        return ("ok", None)
    # vizinho por 1 edição de um nome real -> provável typo/slopsquat
    for real in registro:
        if levenshtein(pacote, real) == 1:
            return ("slopsquat", real)
    return ("alucinado", None)


def verificar_imports(imports, registro=REGISTRO):
    return {p: verificar(p, registro) for p in imports}


def _run_checks():
    checks = []

    # imports "sugeridos pela IA": reais + 1 alucinado + 1 slopsquat (typo de requests)
    imports = ["requests", "numpy", "reqests", "flask", "torchvisionx", "pandas"]
    resultado = verificar_imports(imports)

    # 1. pacotes reais são aprovados.
    checks.append(("'requests' e 'numpy' são aprovados", resultado["requests"][0] == "ok" and resultado["numpy"][0] == "ok"))

    # 2. pacote inexistente é sinalizado como alucinado.
    checks.append(("'torchvisionx' (inexistente) é alucinado", resultado["torchvisionx"][0] == "alucinado"))

    # 3. typo de 1 edição de um real é slopsquat, apontando o alvo.
    checks.append(("'reqests' é slopsquat de 'requests'",
                   resultado["reqests"] == ("slopsquat", "requests")))

    # 4. nada real é marcado como suspeito (sem falso positivo nos reais).
    reais_ok = all(resultado[p][0] == "ok" for p in ["requests", "numpy", "flask", "pandas"])
    checks.append(("nenhum pacote real vira falso positivo", reais_ok))

    # 5. o verificador é determinístico e cobre todos os imports.
    checks.append(("todo import recebe um veredito", len(resultado) == len(imports)))

    # 6. Levenshtein correto (base do slopsquat).
    checks.append(("levenshtein('requests','reqests') == 1", levenshtein("requests", "reqests") == 1))
    checks.append(("levenshtein('numpy','pandas') > 1", levenshtein("numpy", "pandas") > 1))

    print("=== Detector de dependências alucinadas ===\n")
    print("imports sugeridos pela IA e o veredito do verificador:")
    for p, (status, alvo) in resultado.items():
        marca = {"ok": "ok  ", "slopsquat": "⚠  ", "alucinado": "✗  "}[status]
        extra = f" (parecido com '{alvo}')" if alvo else ""
        print(f"  {marca}{p}: {status}{extra}")
    print()

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: nunca confie no NOME que a IA sugeriu. Verifique contra o registro")
    print("(existência, vizinhança, proveniência) antes de instalar — no CI, não no olho.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
