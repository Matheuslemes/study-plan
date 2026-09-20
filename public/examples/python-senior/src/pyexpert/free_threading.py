"""Módulo 23 — free-threading e o JIT: revisando a resposta sobre o GIL.

Este arquivo roda igual nas duas builds. O que muda é o resultado — e é isso que
o módulo pede para medir.

    python    -m pyexpert.free_threading   # build padrão, GIL ativo
    python3.14t -m pyexpert.free_threading # build free-threaded (3.14+)

Se você só rodar numa build, não tem medição: tem uma amostra.
"""

from __future__ import annotations

import platform
import sys
import threading
import time
from concurrent.futures import ThreadPoolExecutor


def gil_enabled() -> bool | None:
    """Estado do GIL em runtime.

    ``sys._is_gil_enabled`` só existe a partir do 3.13. Em versões anteriores o
    GIL está sempre ativo, mas devolvemos ``None`` para não afirmar o que não foi
    consultado.
    """
    probe = getattr(sys, "_is_gil_enabled", None)
    return bool(probe()) if probe is not None else None


def runtime_report() -> dict[str, object]:
    gil = gil_enabled()
    return {
        "versao": platform.python_version(),
        "implementacao": platform.python_implementation(),
        "gil_ativo": "indeterminado (< 3.13)" if gil is None else gil,
        "build_free_threaded": gil is False,
        "nucleos": _cpu_count(),
    }


def _cpu_count() -> int:
    # os.process_cpu_count existe a partir do 3.13 e respeita afinidade;
    # os.cpu_count é o fallback portável.
    import os

    getter = getattr(os, "process_cpu_count", None)
    return (getter() if getter else os.cpu_count()) or 1


def cpu_bound(iterations: int) -> int:
    """Trabalho CPU-bound em Python puro.

    Precisa ser Python puro de propósito: se o trabalho pesado estivesse em C
    (NumPy, hashlib, zlib), o GIL já seria liberado e a comparação não diria nada
    sobre free-threading.
    """
    total = 0
    for value in range(iterations):
        total += value * value % 7
    return total


def timed(label: str, work) -> tuple[str, float, int]:
    start = time.perf_counter()
    result = work()
    return label, time.perf_counter() - start, result


def run_serial(tasks: int, iterations: int) -> tuple[str, float, int]:
    return timed("serial", lambda: sum(cpu_bound(iterations) for _ in range(tasks)))


def run_threaded(tasks: int, iterations: int) -> tuple[str, float, int]:
    def work() -> int:
        with ThreadPoolExecutor(max_workers=tasks) as pool:
            return sum(pool.map(cpu_bound, [iterations] * tasks))

    return timed("threads", work)


def single_thread_penalty(iterations: int, repeats: int = 3) -> float:
    """Tempo da carga em thread única.

    Comparado entre as duas builds, este número é a penalidade de thread única
    que o free-threading cobra — o custo que raramente aparece nos anúncios.
    """
    best = float("inf")
    for _ in range(repeats):
        start = time.perf_counter()
        cpu_bound(iterations)
        best = min(best, time.perf_counter() - start)
    return best


def main() -> None:
    report = runtime_report()
    for key, value in report.items():
        print(f"{key:<22} {value}")

    tasks = min(4, report["nucleos"])  # type: ignore[arg-type]
    iterations = 400_000

    print(f"\ncarga: {tasks} tarefas de {iterations} iterações em Python puro")
    serial_label, serial_time, _ = run_serial(tasks, iterations)
    thread_label, thread_time, _ = run_threaded(tasks, iterations)
    print(f"  {serial_label:<10} {serial_time:.3f}s")
    print(f"  {thread_label:<10} {thread_time:.3f}s")
    speedup = serial_time / thread_time if thread_time else 0.0
    print(f"  speedup    {speedup:.2f}x")

    print(f"\nthread única (melhor de 3): {single_thread_penalty(iterations):.3f}s")

    if report["build_free_threaded"]:
        print(
            "\nBuild free-threaded: speedup próximo do número de núcleos é o esperado.\n"
            "Antes de adotar: audite TODA extensão nativa da árvore de dependências."
        )
    else:
        print(
            "\nBuild padrão: speedup próximo de 1.00x é o esperado — o GIL serializa o bytecode.\n"
            "Rode de novo em python3.14t para completar a medição."
        )
    print(f"threads ativas ao final: {threading.active_count()}")


if __name__ == "__main__":
    main()
