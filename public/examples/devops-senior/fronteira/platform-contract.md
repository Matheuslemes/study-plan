# Contrato de golden path — artefato do módulo 25

> Um golden path sem contrato escrito é uma recomendação verbal que vira
> obrigação informal. Este documento é o que impede isso.

---

## Identificação

| Campo | Valor |
| --- | --- |
| Golden path | `servico-http-java` |
| Versão | 2.3.0 |
| Time responsável | Plataforma |
| Clientes atuais | 14 serviços, 6 times (nominalmente listados no catálogo) |
| Adoção | **voluntária** |

## 1. Para quem é

Times que sobem serviço HTTP em Java com banco relacional e precisam de deploy,
observabilidade e SLO desde o primeiro dia.

**Para quem NÃO é:** processamento em lote, serviços com requisito de latência
abaixo de 10 ms, qualquer coisa que não seja JVM. Dizer para quem **não** serve é
metade do contrato.

## 2. O que a plataforma garante

| Garantia | Medida | Compromisso |
| --- | --- | --- |
| Repositório ao primeiro deploy | tempo | < 30 min, autosserviço |
| Pipeline com build, teste, SBOM e assinatura | funcional | sem ticket |
| Observabilidade (log, métrica, trace) | funcional | correlacionada por padrão |
| Dashboard e alerta de SLO | funcional | provisionado junto |
| Atualização de imagem base | prazo | CVE crítica em até 7 dias |
| Aviso de mudança quebrante | prazo | 90 dias |

## 3. O que se exige do cliente

- Endpoint de saúde em `/healthz` que reflita dependências reais.
- SLO declarado antes do primeiro deploy em produção.
- Runbook com pelo menos um cenário de falha.
- Dono nominal para acionamento.

## 4. A escotilha de saída

**Esta seção é o que separa plataforma de portão.**

Sair do golden path é permitido. Requer:

1. ADR explicando o que o caminho não atende.
2. Assumir as responsabilidades da tabela da seção 2 — todas.
3. Avisar a Plataforma, para não entrar na conta de adoção.

Não requer aprovação. **Se exigisse, seria um portão, e a adoção deixaria de ser
um sinal de qualidade.**

## 5. Como medimos se está funcionando

| Métrica | Alvo | Hoje |
| --- | --- | --- |
| Adoção voluntária | crescente | 14 serviços |
| Tempo até o primeiro deploy | < 30 min | |
| Espera por ação da Plataforma | **zero tickets no caminho feliz** | |
| Saídas do golden path | monitorar tendência | |
| NPS dos times clientes | trimestral | |

> **Métrica que NÃO usamos:** número de recursos entregues pela plataforma.
> Ela mede atividade, não valor, e induz a construir o que ninguém pediu.

Uma **alta** nas saídas não é fracasso automático: é sinal para entrevistar quem
saiu. Às vezes o caminho precisa mudar; às vezes aquele caso realmente não cabe.

## 6. Versionamento e depreciação

Versionamento semântico, igual a API pública:

- **maior** — mudança quebrante, 90 dias de aviso, guia de migração e as duas
  versões convivendo no período.
- **menor** — recurso novo, compatível.
- **correção** — correção compatível.

**Nunca:** mudança quebrante silenciosa no branch principal. Quebrar o contrato
interno custa a confiança que sustenta a adoção voluntária, e ela não volta rápido.

## 7. Sinais de que a plataforma virou gargalo

Revise trimestralmente:

- [ ] Existe fila de tickets no caminho feliz?
- [ ] Algum time espera a Plataforma para entregar?
- [ ] A adoção é voluntária **de fato**, ou a saída é socialmente cara?
- [ ] O tempo de espera por plataforma aparece em alguma métrica?
- [ ] Alguém já saiu do golden path nos últimos 6 meses? (nunca ter saída é
      suspeito — ou o caminho é perfeito, ou sair é proibido na prática)

## 8. A pergunta anual

> *"Se este golden path deixasse de existir amanhã, quantos times reconstruiriam
> algo parecido por conta própria?"*

Se a resposta for "nenhum", a plataforma está resolvendo um problema que não existe.
