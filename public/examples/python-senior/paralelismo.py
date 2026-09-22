"""
Módulo 13 (Python) — Paralelismo: o GIL, threads (I/O) e processos (CPU).

Rode com:  python paralelismo.py        (só a biblioteca padrão)
Verificado sob Pyodide (CPython) e a lógica conferida em Node.

O GIL do CPython impede dois threads de executarem BYTECODE Python ao mesmo tempo:
threads ajudam em I/O (que solta o GIL ao esperar), mas não em CPU puro — aí usam-se
PROCESSOS. Aqui decidimos a ferramenta pela natureza da carga e provamos a decomposição.
"""

from concurrent.futures import ThreadPoolExecutor


# Decisão: escolher a ferramenta pela natureza da carga.
def ferramenta_para(carga):
    if carga == "cpu":
        return "processos (ProcessPoolExecutor) — driblam o GIL em CPU puro"
    if carga in ("io", "rede"):
        return "threads ou asyncio — o I/O solta o GIL enquanto espera"
    return "sequencial — sem ganho em paralelizar"


def trabalho(n):                 # trabalho "embaraçosamente paralelo": independente por item
    return n * n


def _run_checks():
    checks = []

    checks.append(("carga de CPU pura pede PROCESSOS (por causa do GIL)", "processos" in ferramenta_para("cpu")))
    checks.append(("carga de I/O pede threads/asyncio (I/O solta o GIL)", "threads" in ferramenta_para("io")))

    dados = list(range(10))
    esperado = [x * x for x in dados]

    # Decomposição paralelizável: map dá o MESMO resultado, em qualquer ordem de execução.
    with ThreadPoolExecutor(max_workers=4) as ex:
        paralelo = list(ex.map(trabalho, dados))
    checks.append(("map paralelo preserva a ordem e o resultado do sequencial", paralelo == esperado))

    # Determinismo: trabalho independente por item não depende da ordem de conclusão.
    sequencial = [trabalho(x) for x in dados]
    checks.append(("resultado é determinístico (independe da ordem de execução)", sequencial == paralelo))

    # Redução após o map (padrão map-reduce).
    total = sum(paralelo)
    checks.append(("soma dos quadrados 0..9 = 285 (map + reduce)", total == 285))

    print("=== Módulo 13 (Python) — paralelismo e o GIL ===\n")
    print("cpu ->", ferramenta_para("cpu"))
    print("io  ->", ferramenta_para("io"))
    print("map paralelo:", paralelo, "| soma:", total, "\n")
    ok = sum(1 for _, c in checks if c)
    for nome, c in checks:
        print(f"  {'ok  ' if c else 'FALHOU'} {nome}")
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("Lição: o GIL faz threads ajudarem em I/O, não em CPU; para CPU puro use processos. Trabalho independente por item paraleliza sem mudar o resultado.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
