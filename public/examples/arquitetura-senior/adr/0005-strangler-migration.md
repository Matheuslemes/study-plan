# ADR 0005 — Migração incremental por strangler fig

- Status: aceito

## Contexto
Um legado precisa evoluir. A reescrita big-bang colocaria o negócio em risco por
meses sem entregar valor.

## Decisão
Substituir o legado de forma incremental atrás de uma fachada, rota a rota,
decompondo os dados junto do código. Cada passo é reversível e mede paridade
funcional com o sistema antigo.

## Consequências
- Positivo: risco distribuído, negócio no ar, rollback por etapa.
- Negativo: coexistência temporária de dois sistemas e sincronização de dados.
- Critério de fim: legado desativado após paridade comprovada.
