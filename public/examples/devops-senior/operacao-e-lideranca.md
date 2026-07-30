# Evidência - operação e liderança

## Golden path

Um template cria repositório, ownership no catálogo, pipeline, artefato
imutável, dashboards, SLO, alertas, runbook e política de atualização. O escape
hatch é explícito, revisável e não remove responsabilidade do time de produto.

## Identidade e proveniência

- O runner troca OIDC por sessão curta e restrita ao ambiente.
- O build produz SBOM e proveniência vinculadas ao digest.
- O admission controller rejeita artefato sem verificação.
- Break-glass expira, gera evento e exige reconciliação.

## FinOps

Calcule:

```text
custo_unitario = custo_alocado_do_produto / transacoes_validas
headroom = capacidade_disponivel_no_pico - demanda_observada_no_pico
```

Toda otimização declara impacto esperado, SLO protegido e rollback.

## Release progressiva

O contrato define coorte, duração, métricas guardrail, limite de erro, abort e
remoção de feature flag. Migrações de dados mantêm compatibilidade durante a
janela de duas versões.

## Improvement kata

1. Estado atual medido.
2. Condição-alvo em 30 dias.
3. Próximo obstáculo verificável.
4. Experimento pequeno.
5. Resultado e aprendizado.
6. Próxima decisão.

O objetivo é mudar capacidade do sistema, não apenas instalar uma ferramenta.
