"""
Módulo 12 (Python) — Programação assíncrona com asyncio.

Rode com:  python asyncio_basico.py        (só a biblioteca padrão)
Verificado sob Pyodide (CPython) e a lógica conferida em Node.

async/await permite concorrência de I/O num único thread: enquanto uma corrotina
"espera" (await), outra roda. asyncio.gather dispara várias ao mesmo tempo e coleta
os resultados NA ORDEM DOS ARGUMENTOS — mesmo que terminem fora de ordem.
"""

import asyncio


async def tarefa(nome, atraso, ordem_de_termino):
    await asyncio.sleep(atraso)          # cede o controle enquanto "espera"
    ordem_de_termino.append(nome)
    return nome.upper()


async def _main():
    termino = []
    # 'b' tem atraso menor => termina antes de 'a', mas gather preserva a ordem dos args.
    resultados = await asyncio.gather(
        tarefa("a", 0.02, termino),
        tarefa("b", 0.01, termino),
    )
    return resultados, termino


def _run_checks():
    checks = []
    resultados, termino = asyncio.run(_main())

    checks.append(("gather coleta resultados na ordem dos argumentos", resultados == ["A", "B"]))
    checks.append(("mas a execução é concorrente: 'b' (mais rápida) termina antes de 'a'", termino == ["b", "a"]))

    # Concorrência real: rodar as duas juntas leva ~o maior atraso, não a soma.
    async def medir():
        loop = asyncio.get_event_loop()
        ini = loop.time()
        await asyncio.gather(asyncio.sleep(0.02), asyncio.sleep(0.02))
        return loop.time() - ini
    decorrido = asyncio.run(medir())
    checks.append(("duas esperas de 0.02s concorrentes levam ~0.02s, não 0.04s", decorrido < 0.035))

    # await encadeia: uma corrotina pode aguardar outra.
    async def dobro(x):
        await asyncio.sleep(0)
        return x * 2
    async def encadeia():
        return await dobro(await dobro(5))
    checks.append(("await encadeia corrotinas (dobro(dobro(5)) = 20)", asyncio.run(encadeia()) == 20))

    print("=== Módulo 12 (Python) — asyncio ===\n")
    print("resultados (ordem dos args):", resultados, "| ordem de término:", termino)
    print(f"tempo de 2 esperas concorrentes: {decorrido:.3f}s\n")
    ok = sum(1 for _, c in checks if c)
    for nome, c in checks:
        print(f"  {'ok  ' if c else 'FALHOU'} {nome}")
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("Lição: asyncio dá concorrência de I/O num thread só; gather roda junto e preserva a ordem dos resultados — ideal para muitas esperas de rede.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
