"""
Módulo 9 (Python) — Testes: fixtures, parametrização e mocks (os conceitos).

Rode com:  python testes.py        (só a biblioteca padrão; sem pytest)
Verificado sob Pyodide (CPython) e a lógica conferida em Node.

Este arquivo NÃO usa pytest — reproduz seus conceitos com stdlib para vê-los por
dentro: um caso parametrizado (mesma lógica, vários dados), uma fixture (setup
reaproveitado) e um mock/fake (dependência substituível para isolar o teste).
"""


# --- código sob teste ---
def desconto(preco, pct):
    if not 0 <= pct <= 90:
        raise ValueError("pct fora de 0..90")
    return round(preco * (1 - pct / 100))


class Relatorio:
    """Depende de um 'clock' injetável — para testar sem depender do tempo real."""
    def __init__(self, clock):
        self.clock = clock
    def carimbo(self):
        return f"gerado em {self.clock()}"


def _run_checks():
    checks = []

    # PARAMETRIZAÇÃO: um caso, vários dados (o que @pytest.mark.parametrize faz).
    casos = [(100, 10, 90), (100, 0, 100), (200, 50, 100)]
    parametrizado_ok = all(desconto(p, d) == esperado for p, d, esperado in casos)
    checks.append(("parametrização: a mesma lógica passa em vários dados", parametrizado_ok))

    # Teste negativo: a função rejeita entrada inválida (pytest.raises).
    lancou = False
    try:
        desconto(100, 150)
    except ValueError:
        lancou = True
    checks.append(("teste negativo: entrada inválida lança ValueError", lancou))

    # FIXTURE: setup reaproveitado entre casos (aqui, uma lista base).
    def fixture_carrinho():
        return [("café", 1500), ("bolo", 800)]
    carrinho = fixture_carrinho()
    total = sum(preco for _, preco in carrinho)
    checks.append(("fixture: setup reaproveitável (carrinho soma 2300)", total == 2300))

    # MOCK/FAKE: injeta um clock fixo para o teste ser determinístico.
    rel = Relatorio(clock=lambda: "2026-01-01")     # fake determinístico
    checks.append(("mock/fake: dependência injetada torna o teste determinístico", rel.carimbo() == "gerado em 2026-01-01"))

    # Um mini-runner que conta passes (o que o pytest faz por você).
    resultados = [desconto(p, d) == e for p, d, e in casos]
    checks.append(("mini-runner: todos os casos verdes", sum(resultados) == len(casos)))

    print("=== Módulo 9 (Python) — conceitos de teste (fixtures, parametrização, mocks) ===\n")
    print("casos parametrizados:", casos, "| carimbo (fake):", rel.carimbo(), "\n")
    ok = sum(1 for _, c in checks if c)
    for nome, c in checks:
        print(f"  {'ok  ' if c else 'FALHOU'} {nome}")
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("Lição: parametrização cobre muitos dados com um caso; fixtures reaproveitam setup; mocks/fakes isolam dependências para o teste ser determinístico.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
