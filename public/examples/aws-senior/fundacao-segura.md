# Fundação AWS segura

Artefato de referência para os módulos 1–5. Adapte nomes, regiões e limites ao ambiente real.

## Evidências mínimas

- Diagrama com conta, região, zonas, sub-redes, rotas e limites de confiança.
- Budget com alerta, CloudTrail habilitado e acesso humano federado.
- Roles de workload com políticas testadas por casos permitidos e negados.
- Infraestrutura versionada, preview em pull request e plano de remoção.
- Restore de um objeto ou volume em ambiente isolado, com tempo medido.

## Decisão

Registre em ADR por que o workload precisa de internet, NAT, endpoint privado ou acesso cross-account. Inclua custo, ameaça mitigada, alternativa descartada e data de revisão.
