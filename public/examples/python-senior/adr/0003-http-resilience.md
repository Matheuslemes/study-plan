# ADR 0003 — Resiliência de integração HTTP

- Status: aceito

## Contexto
Integrações sem timeout travavam o serviço quando uma dependência externa ficava
lenta; payloads externos eram confiados sem validação.

## Decisão
Todo cliente HTTP tem timeout e retry com backoff em erro transitório; um circuit
breaker protege dependências instáveis; o corpo é validado por schema (pydantic)
antes de uso; contratos são versionados com compatibilidade.

## Consequências
- Positivo: falha rápida e controlada; dados externos viram tipos seguros.
- Negativo: mais configuração e lógica de resiliência.
- Verificação: testes simulam lentidão, falha e payload inválido.
