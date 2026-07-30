# Ledger poliglota: contrato de cada cópia

| Componente | Fonte de verdade | Acesso servido | Validade | Reconciliação |
|---|---|---|---|---|
| PostgreSQL | lançamentos e contas | escrita transacional | imediata | constraints + consulta de balanço |
| Outbox | mesma transação do lançamento | publicação confiável | até o relay confirmar | replay por LSN e id do evento |
| MongoDB | projeção derivada | extrato documental | SLO de lag ≤ 5 s | rebuild por eventos |
| Redis | cópia efêmera | saldo/timeline quente | TTL + invalidação | miss consulta a projeção/origem |
| DynamoDB | projeção opcional regional | acessos enumerados por PK/SK | consistência declarada por consulta | replay e verificação de versão |

Regras:

1. O commit do lançamento e da outbox é atômico.
2. Todo evento possui `event_id`, `aggregate_id`, `version` e `occurred_at`.
3. Consumidores registram a chave idempotente na mesma transação do efeito local.
4. Nenhuma projeção é atualizada por dual-write do request.
5. Lag, duplicatas, rebuild e falha do cache fazem parte do teste de aceitação.

