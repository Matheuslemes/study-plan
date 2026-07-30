# ADR 0004 — Serviço de inferência a partir do notebook

- Status: aceito

## Contexto
Um modelo aprovado em notebook precisava virar serviço, com entrada não confiável,
latência sensível e custo por chamada relevante.

## Decisão
Expor o modelo por uma API (FastAPI) com schema de entrada/saída; versionar
modelo, dados e código; aplicar guardrails à saída; instrumentar logging
estruturado e métricas de latência e custo por chamada.

## Consequências
- Positivo: inferência reprodutível, observável e defensável em produção.
- Negativo: estruturação e testes além do modelo; guardrails a manter.
- Trade-off: batch reduz custo e aumenta latência; online é responsivo e mais caro.
