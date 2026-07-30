# Evidência 04 — operação e resposta

## Objetivo

Detectar, conter e recuperar de um abuso sem perder evidência nem criar privilégio permanente.

## Cenário de game day

Uma credencial de workload aparece em repositório e é usada para exportar dados.

## Evidências

- Evento com sujeito, ação, alvo, resultado e correlação, sem segredo ou PII indevida.
- Alerta com hipótese, owner, severidade e SLO.
- Timeline com detecção, contenção, revogação, erradicação e recovery.
- Teste de negação de IAM antes e depois da redução de privilégio.
- Postmortem com causa sistêmica, risco residual e guardrail preventivo.

## Critério observável

MTTD, MTTC e MTTR são medidos; a credencial anterior deixa de funcionar; o serviço retorna com privilégio mínimo; a
recorrência é bloqueada por teste, política ou paved road e a revisão D30 confirma retenção.
