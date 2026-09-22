"""
Módulo 1 (Python) — O modelo de dados: objetos, protocolos e dunder methods.

Rode com:  python modelo_de_dados.py        (só a biblioteca padrão)
Verificado sob Pyodide (CPython) e a lógica conferida em Node.

Em Python, "tudo é objeto" e o comportamento vem dos métodos especiais (__dunder__):
implementá-los integra o seu tipo às operações da linguagem (+, ==, len, repr, []).
"""

from dataclasses import dataclass


@dataclass(frozen=True)
class Vetor:
    x: float
    y: float

    def __add__(self, outro):          # habilita  v1 + v2
        return Vetor(self.x + outro.x, self.y + outro.y)

    def __abs__(self):                 # habilita  abs(v)
        return (self.x ** 2 + self.y ** 2) ** 0.5

    def __len__(self):                 # habilita  len(v)
        return 2

    def __getitem__(self, i):          # habilita  v[0], v[1] e iteração
        return (self.x, self.y)[i]

    def __repr__(self):                # habilita  repr(v) legível
        return f"Vetor({self.x}, {self.y})"


def _run_checks():
    checks = []
    v1, v2 = Vetor(3, 4), Vetor(1, 2)

    checks.append(("__add__ habilita v1 + v2", (v1 + v2) == Vetor(4, 6)))
    checks.append(("dataclass frozen dá __eq__ por valor", Vetor(3, 4) == Vetor(3, 4)))
    checks.append(("frozen => hashable (serve como chave/set)", len({Vetor(3, 4), Vetor(3, 4)}) == 1))
    checks.append(("__abs__ habilita abs(v) (3,4 -> 5.0)", abs(v1) == 5.0))
    checks.append(("__len__ e __getitem__ dão len() e indexação/iteração", len(v1) == 2 and list(v1) == [3, 4]))
    checks.append(("__repr__ legível", repr(v1) == "Vetor(3, 4)"))
    checks.append(("tudo é objeto: até a função tem atributos", hasattr(_run_checks, "__name__")))

    print("=== Módulo 1 (Python) — data model e dunder methods ===\n")
    print("v1 + v2 =", v1 + v2, "| abs(v1) =", abs(v1), "| list(v1) =", list(v1), "\n")
    ok = sum(1 for _, c in checks if c)
    for nome, c in checks:
        print(f"  {'ok  ' if c else 'FALHOU'} {nome}")
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("Lição: implementar os dunder methods integra seu tipo às operações da linguagem — é o coração do Python idiomático.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
