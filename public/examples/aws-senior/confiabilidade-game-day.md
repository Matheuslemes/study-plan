# Game day de confiabilidade AWS

Artefato de referência para os módulos 11–15. Execute apenas em sandbox ou ambiente autorizado.

## Hipótese

Declare antes do teste qual componente falhará, o impacto esperado, o sinal de detecção, o limite de abortar e o caminho de recuperação.

## Timeline mínima

- T0: falha injetada.
- T1: primeiro sintoma de usuário.
- T2: alarme recebido e reconhecido.
- T3: mitigação iniciada.
- T4: serviço dentro do SLO.
- T5: integridade dos dados validada.

## Saída

Compare RTO/RPO observados com os objetivos, revise o runbook, registre riscos residuais e transforme cada correção em item com responsável e critério observável.
