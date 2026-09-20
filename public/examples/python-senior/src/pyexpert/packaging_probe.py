"""Módulo 25 — empacotar e distribuir: tags, ABI e reprodutibilidade.

Este arquivo não constrói um pacote: ele ensina a LER o que define se um artefato
instala ou não no ambiente alvo. A maioria das falhas de deploy em Python é uma tag
incompatível que ninguém olhou.

    python -m pyexpert.packaging_probe
"""

from __future__ import annotations

import hashlib
import platform
import sys
import sysconfig
from pathlib import Path


def interpreter_tag() -> str:
    """Tag do interpretador, por exemplo ``cp312``.

    É o primeiro componente do nome de um wheel: quem pode instalar.
    """
    implementation = "cp" if platform.python_implementation() == "CPython" else "py"
    return f"{implementation}{sys.version_info.major}{sys.version_info.minor}"


def abi_tag() -> str:
    """Tag de ABI: a interface binária que a extensão espera encontrar.

    Derivada do ``SOABI``: ``cpython-312-x86_64-linux-gnu`` vira ``cp312``. Na
    build free-threaded o SOABI traz o sufixo ``t`` (``cpython-314t-...``), que
    é propagado — e é por isso que um wheel binário da build padrão não serve
    para ela.

    ``abi3`` indica ABI estável — um único wheel serve várias versões do
    interpretador, ao custo de acesso a parte da C API.
    """
    soabi = sysconfig.get_config_var("SOABI")
    if soabi:
        parts = soabi.split("-")
        if len(parts) > 1 and parts[0] == "cpython":
            return f"cp{parts[1]}"
        return parts[0]
    return interpreter_tag()


def platform_tag() -> str:
    """Tag de plataforma, normalizada como o empacotador faz."""
    tag = sysconfig.get_platform().replace("-", "_").replace(".", "_")
    return tag


def wheel_name(distribution: str, version: str) -> str:
    """Monta o nome de wheel que ESTE ambiente produziria.

    Compare com o nome do wheel que o seu CI gera. Divergência aqui é a causa
    típica do 'funciona no CI e quebra em produção'.
    """
    return f"{distribution}-{version}-{interpreter_tag()}-{abi_tag()}-{platform_tag()}.whl"


def is_free_threaded() -> bool:
    """A build free-threaded usa tags próprias (sufixo ``t``).

    Um wheel binário construído para a build padrão não serve para ela.
    """
    probe = getattr(sys, "_is_gil_enabled", None)
    return probe is not None and not probe()


def environment_report() -> dict[str, object]:
    return {
        "python": platform.python_version(),
        "implementacao": platform.python_implementation(),
        "tag_interpretador": interpreter_tag(),
        "tag_abi": abi_tag(),
        "tag_plataforma": platform_tag(),
        "free_threaded": is_free_threaded(),
        "wheel_exemplo": wheel_name("meupacote", "1.0.0"),
    }


def hash_artifact(path: Path) -> str:
    """Hash SHA-256 de um artefato, no formato usado em lockfiles.

    Um lockfile sem hash não garante reprodutibilidade: a mesma versão pode ter
    conteúdo diferente. Com hash, a instalação falha em vez de divergir em silêncio.
    """
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for block in iter(lambda: handle.read(65536), b""):
            digest.update(block)
    return f"sha256:{digest.hexdigest()}"


MINIMAL_PYPROJECT = """\
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "meupacote"
version = "1.0.0"
requires-python = ">=3.12"
dependencies = []

[tool.ruff]
line-length = 100

[tool.mypy]
strict = true
"""


def main() -> None:
    for key, value in environment_report().items():
        print(f"{key:<20} {value}")

    print("\n-- pyproject.toml mínimo e declarativo (PEP 517 + PEP 621) --")
    print(MINIMAL_PYPROJECT)

    here = Path(__file__).resolve()
    print(f"hash deste arquivo: {hash_artifact(here)}")
    print(
        "\nExercício: gere o wheel do seu projeto e confira se as três tags acima\n"
        "batem com o ambiente de produção. Se o CI usa imagem mais nova que a de\n"
        "produção, o wheel pode exigir uma libc que lá não existe."
    )


if __name__ == "__main__":
    main()
