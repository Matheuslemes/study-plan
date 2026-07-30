# ADR 0001 — Estratégia de tipagem gradual

- Status: aceito
- Data: 2026-07-27

## Contexto
Um módulo central sem type hints escondia contratos; refatorações quebravam
silenciosamente e argumentos primitivos eram trocados sem ninguém perceber.

## Decisão
Adotar tipagem gradual com mypy no CI. Anotar primeiro as fronteiras públicas,
criar tipos de domínio (NewType/Enum/dataclass) para conceitos-chave e evoluir
para mypy estrito módulo a módulo.

## Consequências
- Positivo: erros de contrato capturados antes da execução; intenção documentada.
- Negativo: exige manter anotações corretas e evitar Any como escape.
- Verificação: o pipeline falha em erro de tipo; nada de `type: ignore` sem justificativa.
