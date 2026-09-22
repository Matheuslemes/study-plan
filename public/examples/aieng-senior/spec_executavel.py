"""
Especificação executável — artefato do módulo 4.

Rode com:  python spec_executavel.py        (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador.

Spec-driven development (GitHub Spec Kit, 2025–2026): a especificação vem ANTES
do código e é o CONTRATO que o agente usa para gerar, testar e validar. Este
arquivo mostra a forma mais concreta disso — uma spec EXECUTÁVEL: os critérios
de aceite são código que roda contra qualquer implementação e falha quando a
intenção é violada.

Prova, com asserts:
  1. uma implementação correta passa em todos os critérios da spec;
  2. uma implementação que "compila e parece certa" falha nos critérios exatos
     que o teste do caminho feliz não pegaria (idempotência, borda, hífen final).
"""


# --- a SPEC: critérios de aceite como código (o contrato) --------------------
# Cada critério recebe a função candidata e devolve True se a satisfaz.
SPEC_SLUGIFY = [
    ("minúsculas", lambda f: f("Olá Mundo") == f("Olá Mundo").lower()),
    ("espaço vira hífen", lambda f: " " not in f("olá mundo")),
    ("sem caractere não alfanumérico", lambda f: all(c.isalnum() or c == "-" for c in f("a!b@c#"))),
    ("sem hífen no início/fim", lambda f: not f(" borda ").startswith("-") and not f(" borda ").endswith("-")),
    ("sem hífens duplicados", lambda f: "--" not in f("a   b")),
    ("idempotente", lambda f: f(f("Título de Exemplo!")) == f("Título de Exemplo!")),
    ("string vazia é vazia", lambda f: f("") == ""),
]


def verificar_spec(spec, impl):
    """Roda a spec contra uma implementação; devolve lista (critério, passou)."""
    resultado = []
    for nome, criterio in spec:
        try:
            passou = bool(criterio(impl))
        except Exception:
            passou = False
        resultado.append((nome, passou))
    return resultado


# --- implementação CORRETA (satisfaz o contrato) -----------------------------
import re


def slugify_ok(texto):
    s = texto.lower()
    s = re.sub(r"[^a-z0-9\s-]", "", s)      # remove não alfanuméricos
    s = re.sub(r"[\s-]+", "-", s)           # espaços/hífens viram um hífen
    return s.strip("-")                      # tira hífen de borda


# --- implementação PLAUSÍVEL mas ERRADA (passa no caminho feliz) -------------
def slugify_bug(texto):
    s = texto.lower()
    s = s.replace(" ", "-")                  # troca espaço por hífen...
    s = re.sub(r"[^a-z0-9-]", "", s)         # ...mas não colapsa duplicados
    return s                                  # e NÃO tira hífen de borda


def _run_checks():
    checks = []

    ok = verificar_spec(SPEC_SLUGIFY, slugify_ok)
    bug = verificar_spec(SPEC_SLUGIFY, slugify_bug)

    # 1. a implementação correta passa em TODOS os critérios.
    checks.append(("implementação correta passa em toda a spec", all(p for _, p in ok)))

    # 2. o "caminho feliz" (sem acento, sem borda) passa nas duas — não distingue.
    caminho_feliz = slugify_ok("Hello World") == "hello-world" and slugify_bug("Hello World") == "hello-world"
    checks.append(("o teste do caminho feliz passa nas DUAS (não distingue)", caminho_feliz))

    # 3. a spec executável pega a implementação errada — e nos critérios exatos.
    bug_falhas = {nome for nome, p in bug if not p}
    ok_map = dict(ok)
    checks.append(("a spec reprova a implementação errada", len(bug_falhas) > 0))
    checks.append(("falha em 'sem hífen no início/fim' (borda)", "sem hífen no início/fim" in bug_falhas))
    checks.append(("falha em 'sem hífens duplicados'", "sem hífens duplicados" in bug_falhas))
    checks.append(("a implementação correta é idempotente (a errada só falha na borda)", ok_map["idempotente"]))

    print("=== Especificação executável ===\n")
    print("A spec de slugify() tem", len(SPEC_SLUGIFY), "critérios de aceite executáveis.")
    print("caminho feliz: slugify('Hello World') ->", repr(slugify_ok("Hello World")), "(igual nas duas impls)")
    print("\nspec × implementação correta:")
    for nome, p in ok:
        print(f"  {'ok  ' if p else 'FALHOU'} {nome}")
    print("\nspec × implementação plausível-mas-errada:")
    for nome, p in bug:
        print(f"  {'ok  ' if p else 'FALHOU'} {nome}")
    print(f"  ex.: slugify_bug(' borda ') -> {slugify_bug(' borda ')!r}  (hífen de borda)")
    print()

    ok_count = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok_count += bool(cond)
    print(f"\n{ok_count}/{len(checks)} checagens passaram.")
    print("\nLição: a spec como CONTRATO executável é a fonte da verdade do agente e do teste.")
    print("Ela reprova o 'plausível mas errado' que o caminho feliz — e a IA — deixam passar.")
    return ok_count == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
