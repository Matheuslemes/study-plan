# C4 — Nível 1 (Contexto) e Nível 2 (Contêineres)

## Nível 1 — Contexto do sistema
- Ator: Cliente — faz pedidos e acompanha o status.
- Ator: Operador — gerencia catálogo e reconciliação.
- Sistema: Plataforma de Pedidos (foco).
- Sistema externo: Gateway de Pagamento.
- Sistema externo: ERP legado (catálogo e faturamento).

## Nível 2 — Contêineres da Plataforma de Pedidos
- Web/App (SPA) — interface do cliente.
- API de Pedidos (Spring Boot) — orquestra o checkout e expõe contratos REST.
- Serviço de Estoque (módulo) — reserva e baixa de itens.
- Broker de Mensagens — eventos de domínio (CloudEvents/AsyncAPI).
- Banco Relacional — pedidos e outbox na mesma transação.
- Cache — leitura quente de catálogo, com invalidação e anti-stampede.

## Notas
- Fronteiras de confiança explícitas entre público, aplicação e dados.
- Cada chamada remota tem timeout, e o gateway é protegido por circuit breaker.
- Diagramar em C4 níveis 1 a 3; nível 4 (código) só quando agregar valor.
