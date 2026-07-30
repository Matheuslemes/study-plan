# Evidência — aplicação tipada

## Contrato

Dados externos entram como `unknown`, são validados e só então viram modelo interno. Loading, vazio, erro e sucesso
são estados discriminados, não combinações de flags.

## Prova mínima

- TypeScript `strict` sem `any` ou assertion injustificada.
- Stories ou fixtures dos quatro estados.
- Teste de timeout, resposta inválida, sessão expirada e submit repetido.
- Requisição obsoleta cancelada ou ignorada por identidade.
- ADR da fronteira entre cliente, servidor, URL e cache.

## Resultado

Anexe build, testes e URL do fluxo implantado com uma falha reproduzível e a correção.
