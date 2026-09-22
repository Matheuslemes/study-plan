"""
Servidor MCP mínimo — artefato do módulo 32.

Rode com:  python mcp_servidor.py           (só biblioteca padrão)
Verificado sob Pyodide 0.28 no navegador.

MCP (Model Context Protocol) é o padrão aberto que a Anthropic publicou em
nov/2024 e que virou infraestrutura de agente: adotado por OpenAI, Google e
Microsoft ao longo de 2025 e doado à Agentic AI Foundation (Linux Foundation)
em dez/2025. Ele padroniza COMO um modelo descobre e chama ferramentas — o
"USB-C dos agentes".

O protocolo é JSON-RPC 2.0. As três mensagens que todo servidor precisa
responder:
  - initialize      -> negocia versão e anuncia capacidades
  - tools/list      -> descreve as ferramentas (nome, schema de entrada)
  - tools/call      -> executa uma ferramenta e devolve o resultado

Este arquivo NÃO fala stdio de verdade (para ser testável em qualquer lugar):
expõe `handle(request: dict) -> dict`, o núcleo puro do servidor, e prova com
asserts que ele obedece ao JSON-RPC e ao contrato do MCP. Em produção, um laço
liga `handle` a stdin/stdout linha a linha.

A LIÇÃO DE SEGURANÇA (a que separa sênior de júnior aqui): toda ferramenta é
superfície de ataque. Descrição de ferramenta é conteúdo não confiável;
autorização e privilégio mínimo valem para cada `tools/call`, exatamente como
no módulo 27 da trilha de Segurança.
"""

import json

PROTOCOL_VERSION = "2025-11-25"   # release do 1º aniversário do MCP

# --- ferramentas expostas: cada uma com schema de entrada declarado ----------
TOOLS = {
    "soma": {
        "description": "Soma dois números inteiros.",
        "inputSchema": {
            "type": "object",
            "properties": {"a": {"type": "integer"}, "b": {"type": "integer"}},
            "required": ["a", "b"],
        },
        "_fn": lambda args: args["a"] + args["b"],
    },
    "reverso": {
        "description": "Inverte uma string.",
        "inputSchema": {
            "type": "object",
            "properties": {"texto": {"type": "string"}},
            "required": ["texto"],
        },
        "_fn": lambda args: args["texto"][::-1],
    },
}


def _erro(id_, codigo, mensagem):
    return {"jsonrpc": "2.0", "id": id_, "error": {"code": codigo, "message": mensagem}}


def _ok(id_, resultado):
    return {"jsonrpc": "2.0", "id": id_, "result": resultado}


def handle(request):
    """Núcleo puro do servidor MCP: request dict -> response dict."""
    if request.get("jsonrpc") != "2.0":
        return _erro(request.get("id"), -32600, "Invalid Request: jsonrpc deve ser '2.0'")

    metodo = request.get("method")
    id_ = request.get("id")
    params = request.get("params", {})

    if metodo == "initialize":
        return _ok(id_, {
            "protocolVersion": PROTOCOL_VERSION,
            "capabilities": {"tools": {}},
            "serverInfo": {"name": "servidor-exemplo", "version": "1.0.0"},
        })

    if metodo == "tools/list":
        # NÃO vaza o _fn interno — só o contrato público.
        publicas = [
            {"name": nome, "description": t["description"], "inputSchema": t["inputSchema"]}
            for nome, t in TOOLS.items()
        ]
        return _ok(id_, {"tools": publicas})

    if metodo == "tools/call":
        nome = params.get("name")
        args = params.get("arguments", {})
        tool = TOOLS.get(nome)
        if tool is None:
            return _erro(id_, -32602, f"Ferramenta desconhecida: {nome!r}")
        # validação mínima do schema: exige os campos obrigatórios.
        faltando = [c for c in tool["inputSchema"].get("required", []) if c not in args]
        if faltando:
            return _erro(id_, -32602, f"Argumentos faltando: {faltando}")
        try:
            resultado = tool["_fn"](args)
        except Exception as exc:                       # nunca derrubar o servidor
            return _erro(id_, -32603, f"Erro ao executar {nome}: {exc}")
        return _ok(id_, {"content": [{"type": "text", "text": str(resultado)}]})

    return _erro(id_, -32601, f"Método não encontrado: {metodo!r}")


def _run_checks():
    checks = []

    # 1. initialize negocia versão e anuncia capabilities
    r = handle({"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {}})
    checks.append(("initialize devolve protocolVersion", r.get("result", {}).get("protocolVersion") == PROTOCOL_VERSION))
    checks.append(("initialize anuncia capability de tools", "tools" in r["result"]["capabilities"]))

    # 2. tools/list descreve ferramentas sem vazar a implementação
    r = handle({"jsonrpc": "2.0", "id": 2, "method": "tools/list"})
    tools = r["result"]["tools"]
    checks.append(("tools/list lista as 2 ferramentas", len(tools) == 2))
    checks.append(("tools/list NÃO vaza _fn interno", all("_fn" not in t for t in tools)))
    checks.append(("cada ferramenta declara inputSchema", all("inputSchema" in t for t in tools)))

    # 3. tools/call executa e devolve content
    r = handle({"jsonrpc": "2.0", "id": 3, "method": "tools/call",
                "params": {"name": "soma", "arguments": {"a": 40, "b": 2}}})
    checks.append(("tools/call soma(40,2) == 42", r["result"]["content"][0]["text"] == "42"))

    r = handle({"jsonrpc": "2.0", "id": 4, "method": "tools/call",
                "params": {"name": "reverso", "arguments": {"texto": "agente"}}})
    checks.append(("tools/call reverso('agente') == 'etnega'", r["result"]["content"][0]["text"] == "etnega"))

    # 4. contrato de erro: JSON-RPC bem formado mesmo no caminho de falha
    r = handle({"jsonrpc": "2.0", "id": 5, "method": "tools/call",
                "params": {"name": "inexistente", "arguments": {}}})
    checks.append(("ferramenta inexistente -> erro -32602", r.get("error", {}).get("code") == -32602))

    r = handle({"jsonrpc": "2.0", "id": 6, "method": "tools/call",
                "params": {"name": "soma", "arguments": {"a": 1}}})
    checks.append(("argumento faltando -> erro, não crash", "error" in r))

    r = handle({"jsonrpc": "2.0", "id": 7, "method": "metodo/fantasma"})
    checks.append(("método desconhecido -> -32601", r.get("error", {}).get("code") == -32601))

    r = handle({"id": 8, "method": "initialize"})
    checks.append(("sem jsonrpc:2.0 -> -32600", r.get("error", {}).get("code") == -32600))

    print("=== Servidor MCP mínimo (JSON-RPC 2.0) ===\n")
    demo = handle({"jsonrpc": "2.0", "id": 1, "method": "tools/list"})
    print("resposta de tools/list:")
    print(json.dumps(demo, ensure_ascii=False, indent=2)[:400] + " ...\n")

    ok = 0
    for nome, cond in checks:
        print(f"  {'ok  ' if cond else 'FALHOU'} {nome}")
        ok += bool(cond)
    print(f"\n{ok}/{len(checks)} checagens passaram.")
    print("\nLição: o servidor é trivial; o difícil é a GOVERNANÇA. Cada tools/call")
    print("é uma ação com privilégio — autorização, escopo e auditoria não são opcionais.")
    return ok == len(checks)


if __name__ == "__main__":
    import sys
    sys.exit(0 if _run_checks() else 1)
