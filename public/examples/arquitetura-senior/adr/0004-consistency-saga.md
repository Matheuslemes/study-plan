# ADR 0004 — Consistência do checkout sem transação distribuída

- Status: aceito

## Contexto
O checkout muda dados em pedido, estoque e pagamento (externo). 2PC não é viável
entre serviços e bancos independentes.

## Decisão
Coordenar por saga com compensação; publicar eventos via transactional outbox;
tornar todo consumidor idempotente por chave de deduplicação; reconciliar
divergências em até 10 minutos.

## Consequências
- Positivo: elimina dual-write e cobrança dupla; entrega ao menos uma vez.
- Negativo: estados intermediários ficam visíveis; exige lógica de compensação.
- Verificação: teste injeta duplicação e lentidão sem efeito duplicado.
