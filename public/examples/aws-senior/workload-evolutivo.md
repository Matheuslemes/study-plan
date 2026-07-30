# Workload AWS evolutivo

Artefato de referência para os módulos 6–10. Esta fase usa a fundação anterior; não cria outra conta ou rede paralela sem justificativa.

## Fluxo verificável

1. Receba uma requisição autenticada.
2. Valide e persista o comando com idempotency key.
3. Publique evento versionado.
4. Processe o evento com concorrência limitada e destino de falha.
5. Exponha correlação entre requisição, mensagem e escrita.

## Evidências mínimas

- Matriz de decisão entre RDS/Aurora, DynamoDB e outra alternativa pertinente.
- Comparação entre Lambda, ECS/Fargate e EKS para a carga.
- Teste de duplicata, poison message, backpressure e recuperação da DLQ.
- Custo normal, ocioso e de pico com premissas explícitas.
