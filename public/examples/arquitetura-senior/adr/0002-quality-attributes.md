# ADR 0002 — Atributos de qualidade dirigentes

- Status: aceito

## Contexto
Requisitos não funcionais chegavam como adjetivos ("rápido", "escalável") sem
métrica, gerando decisões conflitantes em silêncio.

## Decisão
Eleger no máximo cinco atributos dirigentes, cada um expresso como cenário
mensurável (estímulo, resposta, medida). Exemplo: disponibilidade 99,9% mensal,
RTO 15 min; p99 do checkout < 1 s sob 3x a carga média.

## Consequências
- Positivo: alternativas passam a ser avaliadas contra critérios objetivos.
- Negativo: exige recusar explicitamente a otimização de atributos secundários.
- Trade-off aceito: consistência forte cede a latência onde a disponibilidade domina.
