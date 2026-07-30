# Evidência - fundamentos e entrega

## 1. Fluxo de valor

Registre por mudança: `requested_at`, `started_at`, `merged_at`, `deployed_at`,
`restored_at`, resultado e causa de retrabalho. Calcule espera e execução
separadamente. Não use o total de commits como produtividade.

## 2. Triagem por camadas

```bash
date -u
ps -eo pid,ppid,stat,%cpu,%mem,cmd
ss -lntp
getent hosts api.internal
curl -sv --connect-timeout 2 http://api.internal/health
```

Antes de reiniciar, preserve timestamp, eventos, limites de recurso e últimos
logs. A primeira mutação deve corresponder a uma hipótese declarada.

## 3. Contrato de release

- O build publica um artefato identificado por digest.
- Promoções reutilizam o mesmo digest.
- Configuração e segredos entram somente no deploy.
- Migrações seguem expand-contract.
- Rollback inclui código, configuração e compatibilidade de dados.

## 4. Pipeline de referência

```yaml
name: delivery
on: [pull_request]
permissions:
  contents: read
jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: ./gradlew test
      - run: docker build --tag app:${{ github.sha }} .
```

## 5. Scorecard

Publique definição, fonte e janela para frequência de deploy, lead time,
change failure rate, failed deployment recovery time e confiabilidade.
