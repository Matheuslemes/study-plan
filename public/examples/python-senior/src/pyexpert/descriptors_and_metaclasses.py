"""Módulo 22 — descritores, metaclasses, MRO e ``__slots__``.

O arquivo mostra a mesma exigência resolvida de duas formas: com metaclasse e com
``__init_subclass__``. A segunda é mais curta, não conflita em herança múltipla e é
a que passa em revisão de código.
"""

from __future__ import annotations

import sys
from typing import Any, Generic, TypeVar

T = TypeVar("T")


class Typed(Generic[T]):
    """Descritor de dados que valida tipo e obrigatoriedade.

    Define ``__set__``, portanto é descritor de DADOS: tem precedência sobre o
    ``__dict__`` da instância. É por isso que ele não pode ser silenciosamente
    sobrescrito por uma atribuição — e é exatamente assim que ``property`` funciona.
    """

    def __init__(self, expected: type, *, allow_none: bool = False) -> None:
        self.expected = expected
        self.allow_none = allow_none
        self.private_name = ""

    def __set_name__(self, owner: type, name: str) -> None:
        # Sem __set_name__ o descritor não sabe em que atributo foi instalado
        # e você acaba repetindo o nome na chamada — acoplamento desnecessário.
        self.private_name = f"_{name}"

    def __get__(self, instance: Any, owner: type | None = None) -> Any:
        if instance is None:
            return self
        return getattr(instance, self.private_name, None)

    def __set__(self, instance: Any, value: Any) -> None:
        if value is None and self.allow_none:
            setattr(instance, self.private_name, None)
            return
        if not isinstance(value, self.expected):
            raise TypeError(
                f"{self.private_name[1:]} espera {self.expected.__name__}, "
                f"recebeu {type(value).__name__}"
            )
        setattr(instance, self.private_name, value)


class RequiresTableMeta(type):
    """Abordagem cara: metaclasse só para exigir um atributo nas subclasses.

    Está aqui como contraexemplo. Em herança múltipla ela pode gerar conflito de
    metaclasses, e o erro resultante é difícil de diagnosticar para quem não
    conhece o mecanismo.
    """

    def __new__(mcls, name: str, bases: tuple[type, ...], namespace: dict[str, Any]):
        cls = super().__new__(mcls, name, bases, namespace)
        if bases and not getattr(cls, "table", None):
            raise TypeError(f"{name} precisa declarar `table`")
        return cls


class ModelWithMeta(metaclass=RequiresTableMeta):
    table: str = ""


class RegisteredModel:
    """Abordagem barata: mesma exigência com ``__init_subclass__``.

    Sem metaclasse, sem risco de conflito, e qualquer pessoa que conheça herança
    consegue ler. É a versão que o módulo recomenda.
    """

    table: str = ""
    registry: dict[str, type[RegisteredModel]] = {}

    def __init_subclass__(cls, **kwargs: Any) -> None:
        super().__init_subclass__(**kwargs)
        if not cls.table:
            raise TypeError(f"{cls.__name__} precisa declarar `table`")
        RegisteredModel.registry[cls.table] = cls


class Customer(RegisteredModel):
    table = "customers"

    name = Typed(str)
    age = Typed(int)

    def __init__(self, name: str, age: int) -> None:
        self.name = name
        self.age = age


class Compact:
    """Com ``__slots__``: sem ``__dict__`` por instância."""

    __slots__ = ("x", "y")

    def __init__(self, x: int, y: int) -> None:
        self.x = x
        self.y = y


class Roomy:
    """Sem ``__slots__``: cada instância carrega um dicionário."""

    def __init__(self, x: int, y: int) -> None:
        self.x = x
        self.y = y


def slots_saving(count: int = 10_000) -> dict[str, int]:
    """Compara o custo por instância das duas formas.

    ``sys.getsizeof`` não soma o ``__dict__``, então ele é medido à parte — a
    diferença real é a soma dos dois.
    """
    compact = Compact(1, 2)
    roomy = Roomy(1, 2)
    compact_total = sys.getsizeof(compact)
    roomy_total = sys.getsizeof(roomy) + sys.getsizeof(roomy.__dict__)
    return {
        "bytes_com_slots": compact_total,
        "bytes_sem_slots": roomy_total,
        "economia_estimada": (roomy_total - compact_total) * count,
    }


class Base:
    def who(self) -> str:
        return "Base"


class Left(Base):
    def who(self) -> str:
        return "Left"


class Right(Base):
    def who(self) -> str:
        return "Right"


class Diamond(Left, Right):
    """Herança em diamante: a ordem vem da linearização C3, não da intuição."""


def mro_names(cls: type) -> list[str]:
    return [klass.__name__ for klass in cls.__mro__]


def main() -> None:
    customer = Customer("Ada", 36)
    print(f"cliente válido: {customer.name}, {customer.age}")

    try:
        customer.age = "trinta"
    except TypeError as error:
        print(f"descritor barrou: {error}")

    print(f"registry por __init_subclass__: {sorted(RegisteredModel.registry)}")

    try:
        type("SemTable", (RegisteredModel,), {})
    except TypeError as error:
        print(f"subclasse sem table barrada: {error}")

    print(f"MRO do diamante: {mro_names(Diamond)}")
    print(f"Diamond().who() = {Diamond().who()}  (C3, não 'a primeira que aparece')")

    for key, value in slots_saving().items():
        print(f"  {key:<20} {value}")
    print("  Meça antes de adotar __slots__: você perde atributos dinâmicos e weakref.")


if __name__ == "__main__":
    main()
