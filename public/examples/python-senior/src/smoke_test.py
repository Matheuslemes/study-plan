"""Smoke test da parte Fronteira — equivalente ao CompileSmoke da trilha Java.

Só biblioteca padrão, sem pytest, para rodar em qualquer ambiente:

    cd public/examples/python-senior/src
    python smoke_test.py

Falha com AssertionError na primeira divergência. Saída limpa significa que os seis
módulos importam e que o comportamento demonstrado continua verdadeiro nesta versão
do interpretador — o que é, em si, parte da lição do módulo 26.
"""

from __future__ import annotations

import sys

from pyexpert import (
    descriptors_and_metaclasses as dm,
    free_threading as ft,
    interpreter_internals as ii,
    native_boundary as nb,
    packaging_probe as pp,
    reading_cpython as rc,
)


def check_interpreter_internals() -> None:
    trap = ii.small_int_identity_trap()
    # Detalhe de implementação do CPython, não contrato da linguagem: se estas
    # asserções falharem num outro interpretador, o módulo 26 explica por quê.
    assert trap["256_is_256_runtime"] is True, "cache de inteiros pequenos mudou nesta build"
    assert trap["257_is_257_runtime"] is False, "257 não deveria vir do cache"
    assert trap["257_is_257_literal"] is True, "literais iguais deveriam ser deduplicados"
    assert trap["257_eq_257"] is True
    assert ii.instruction_count(ii.sum_with_builtin) > 0
    steps = ii.list_growth_steps()
    assert steps, "a lista deveria realocar ao menos uma vez"
    assert all(size > 0 for _, size in steps)
    report = ii.cycle_collection_report(rounds=5)
    assert report["objetos_coletados"] >= 0


def check_descriptors() -> None:
    customer = dm.Customer("Ada", 36)
    assert customer.name == "Ada"
    assert customer.age == 36
    try:
        customer.age = "trinta"
    except TypeError:
        pass
    else:  # pragma: no cover - só ocorre se o descritor quebrar
        raise AssertionError("o descritor deveria rejeitar tipo inválido")

    assert "customers" in dm.RegisteredModel.registry
    try:
        type("SemTable", (dm.RegisteredModel,), {})
    except TypeError:
        pass
    else:  # pragma: no cover
        raise AssertionError("__init_subclass__ deveria exigir `table`")

    assert dm.mro_names(dm.Diamond) == ["Diamond", "Left", "Right", "Base", "object"]
    assert dm.Diamond().who() == "Left"
    saving = dm.slots_saving()
    assert saving["bytes_sem_slots"] > saving["bytes_com_slots"]


def check_free_threading() -> None:
    report = ft.runtime_report()
    assert report["versao"]
    assert report["nucleos"] >= 1
    assert ft.cpu_bound(1_000) >= 0
    # Não afirmamos nada sobre speedup: depende da build, e é isso que o módulo mede.
    assert isinstance(report["build_free_threaded"], bool)


def check_native_boundary() -> None:
    payload = ii.__name__.encode() * 64
    assert nb.slice_copies(payload, chunk=16) == len(payload)
    assert nb.view_without_copies(payload, chunk=16) == len(payload)
    assert nb.buffer_is_shared() is True
    length = nb.native_strlen("fronteira")
    assert length is None or length == 9, "strlen deveria contar 9 bytes ASCII"


def check_packaging() -> None:
    report = pp.environment_report()
    assert report["tag_interpretador"].startswith(("cp", "py"))
    assert str(report["tag_abi"]).startswith(("cp", "abi")), report["tag_abi"]
    assert str(report["wheel_exemplo"]).endswith(".whl")
    assert "build-system" in pp.MINIMAL_PYPROJECT
    assert pp.hash_artifact(__import__("pathlib").Path(pp.__file__)).startswith("sha256:")


def check_reading_cpython() -> None:
    order = rc.dict_order_is_contract()
    # Contrato da linguagem desde o 3.7: reinserção vai para o fim.
    assert order[-1] == "alpha", f"ordem inesperada: {order}"
    assert "echo" in order
    lower, upper = rc.small_int_cache_boundary()
    assert lower <= 0 <= upper
    assert rc.list_capacity_steps(limit=20)


CHECKS = (
    ("interpreter_internals", check_interpreter_internals),
    ("descriptors_and_metaclasses", check_descriptors),
    ("free_threading", check_free_threading),
    ("native_boundary", check_native_boundary),
    ("packaging_probe", check_packaging),
    ("reading_cpython", check_reading_cpython),
)


def main() -> int:
    print(f"Python {sys.version.split()[0]} — fronteira (módulos 21-26)")
    for name, check in CHECKS:
        check()
        print(f"  ok  {name}")
    print("Python academy examples: OK (módulos 21-26)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
