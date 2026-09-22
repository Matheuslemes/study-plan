"""
Módulo 20 (Python) — Produção: logging, configuração e observabilidade.

Rode com:  python observabilidade.py        (só a biblioteca padrão)
Verificado sob Pyodide (CPython) e a lógica conferida em Node.

Em produção, log é dado estruturado (não print), com níveis e contexto (correlation
id) para ser filtrável e agregável. Aqui reproduzimos logs estruturados em JSON,
filtragem por nível e um contador de métrica — o núcleo da observabilidade.
"""

import json


NIVEIS = {"DEBUG": 10, "INFO": 20, "WARNING": 30, "ERROR": 40}


def log_estruturado(nivel, msg, **contexto):
    """Uma linha de log = um objeto JSON (parseável por máquina)."""
    return json.dumps({"nivel": nivel, "msg": msg, **contexto}, ensure_ascii=False, sort_keys=True)


def filtrar_por_nivel(linhas, minimo):
    corte = NIVEIS[minimo]
    return [l for l in linhas if NIVEIS[json.loads(l)["nivel"]] >= corte]


def _run_checks():
    checks = []

    linha = log_estruturado("ERROR", "falha ao salvar", request_id="abc123", tentativa=2)
    obj = json.loads(linha)
    checks.append(("log é JSON estruturado (parseável)", obj["nivel"] == "ERROR" and obj["msg"] == "falha ao salvar"))
    checks.append(("carrega contexto (correlation id) para correlacionar", obj["request_id"] == "abc123" and obj["tentativa"] == 2))

    logs = [
        log_estruturado("DEBUG", "detalhe"),
        log_estruturado("INFO", "requisição ok", request_id="r1"),
        log_estruturado("WARNING", "latência alta"),
        log_estruturado("ERROR", "timeout", request_id="r2"),
    ]
    # Em produção filtra-se por nível (>= WARNING): ruído fora.
    graves = filtrar_por_nivel(logs, "WARNING")
    checks.append(("filtragem por nível >= WARNING mantém 2 linhas", len(graves) == 2))
    checks.append(("DEBUG/INFO são cortados no nível de produção", all(json.loads(l)["nivel"] in ("WARNING", "ERROR") for l in graves)))

    # Métrica: contar erros por request (agregação sobre logs estruturados).
    erros = [json.loads(l) for l in logs if json.loads(l)["nivel"] == "ERROR"]
    checks.append(("métrica: 1 erro contabilizado", len(erros) == 1 and erros[0]["request_id"] == "r2"))

    # Correlação: achar todas as linhas de um request_id.
    de_r1 = [l for l in logs if json.loads(l).get("request_id") == "r1"]
    checks.append(("correlation id permite rastrear um request", len(de_r1) == 1))

    # Config por ambiente (dev x prod) controla o nível mínimo.
    config = {"dev": "DEBUG", "prod": "WARNING"}
    checks.append(("configuração por ambiente define o nível (prod = WARNING)", config["prod"] == "WARNING"))

    print("=== Módulo 20 (Python) — logging estruturado e observabilidade ===\n")
    print("exemplo de log:", linha)
    print("graves (>=WARNING):", len(graves), "| erros:", len(erros), "\n")
    ok = sum(1 for _, c in checks if c)
    for nome, c in checks:
        print(f"  {'ok  ' if c else 'FALHOU'} {nome}")
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("Lição: log é dado estruturado com nível e contexto (correlation id) — filtrável e agregável; print não escala em produção.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
