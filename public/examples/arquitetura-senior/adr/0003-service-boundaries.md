# ADR 0003 — Limites de serviço e ownership de dados

- Status: aceito

## Contexto
Pressão para adotar microsserviços em um sistema com time único e banco
compartilhado, sob risco de criar um monólito distribuído.

## Decisão
Manter um monólito modular com módulos de ownership de dados claro. Extrair um
serviço apenas quando gatilhos medidos forem satisfeitos (escala independente,
autonomia de time, isolamento de falha), sempre com plano reversível.

## Consequências
- Positivo: simplicidade transacional e de deploy no estágio atual.
- Negativo: exige disciplina para não vazar dependências entre módulos.
- Verificação: fitness functions de dependência travam o build em violação.
