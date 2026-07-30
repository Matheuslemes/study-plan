# Evidência 03 — pipeline verificável

## Objetivo

Comprovar que o artefato executado corresponde à revisão aprovada e às verificações registradas.

## Fluxo

1. Classificar a mudança e carregar requisitos de segurança aplicáveis.
2. Executar testes, SAST, SCA e secret scanning no código revisado.
3. Executar DAST autenticado e fuzzing controlado no artefato candidato.
4. Gerar SBOM e proveniência ligadas ao digest.
5. Assinar o digest com identidade do workload de build.
6. Verificar identidade, política, digest e attestations no deployment.

## Critério observável

O deployment falha quando código, digest, assinatura, proveniência ou política divergem. Findings possuem triagem,
owner, SLA e exceção com validade; nenhum segredo aparece nos logs ou artefatos de análise.
