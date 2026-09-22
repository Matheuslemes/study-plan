"""
Módulo 4 (Python) — OO idiomática: properties, ABCs, protocols e composição.

Rode com:  python oo_idiomatico.py        (só a biblioteca padrão)
Verificado sob Pyodide (CPython) e a lógica conferida em Node.

Em Python idiomático: use @property em vez de getters/setters, ABCs para contratos
explícitos, "duck typing" (protocolos) em vez de herança forçada, e prefira
composição a heranças profundas.
"""

from abc import ABC, abstractmethod


class Conta:
    def __init__(self, saldo=0):
        self._saldo = saldo

    @property
    def saldo(self):                      # acesso como atributo: conta.saldo
        return self._saldo

    def depositar(self, valor):
        if valor <= 0:
            raise ValueError("valor deve ser positivo")  # invariante protegida
        self._saldo += valor


class Notificador(ABC):                    # contrato explícito
    @abstractmethod
    def enviar(self, msg): ...


class EmailFake(Notificador):
    def __init__(self):
        self.enviados = []
    def enviar(self, msg):
        self.enviados.append(msg)


class Pato:      # duck typing: não herda de nada, só tem o método esperado
    def quack(self):
        return "quack"


def faz_barulho(x):                        # aceita qualquer objeto com .quack()
    return x.quack()


def _run_checks():
    checks = []

    c = Conta(100)
    checks.append(("@property expõe saldo como atributo", c.saldo == 100))
    c.depositar(50)
    checks.append(("método mantém a invariante e atualiza o estado", c.saldo == 150))
    erro = False
    try:
        c.depositar(-10)
    except ValueError:
        erro = True
    checks.append(("a property/validação rejeita depósito inválido", erro))

    # ABC: não dá para instanciar sem implementar o contrato.
    abstrata_bloqueada = False
    try:
        Notificador()  # abstrata
    except TypeError:
        abstrata_bloqueada = True
    checks.append(("ABC não pode ser instanciada sem implementar o método", abstrata_bloqueada))

    email = EmailFake()
    email.enviar("oi")
    checks.append(("implementação concreta cumpre o contrato", isinstance(email, Notificador) and email.enviados == ["oi"]))

    # Duck typing: funciona por ter o método, não por herança.
    checks.append(("duck typing: basta ter .quack()", faz_barulho(Pato()) == "quack"))

    # Composição em vez de herança: um Serviço usa um Notificador (has-a).
    class Servico:
        def __init__(self, notificador):
            self.notificador = notificador
        def agir(self):
            self.notificador.enviar("feito")
    s = Servico(EmailFake())
    s.agir()
    checks.append(("composição (has-a) injeta a dependência", s.notificador.enviados == ["feito"]))

    print("=== Módulo 4 (Python) — OO idiomática ===\n")
    print("saldo:", c.saldo, "| emails:", email.enviados, "\n")
    ok = sum(1 for _, ch in checks if ch)
    for nome, ch in checks:
        print(f"  {'ok  ' if ch else 'FALHOU'} {nome}")
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("Lição: property para acesso, ABC/protocol para contrato, duck typing em vez de herança forçada e composição em vez de herança profunda.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
