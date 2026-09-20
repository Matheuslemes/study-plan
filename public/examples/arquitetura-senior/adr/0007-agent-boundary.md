# ADR 0007 — Fronteira de permissão de um agente de IA no atendimento

- Status: aceito
- Relacionado: ADR 0004 (consistência), ADR 0006 (event sourcing)

## Contexto
O time de atendimento quer um assistente que consulte pedidos, redija respostas e
processe reembolsos, integrado às APIs internas. A proposta inicial dá ao agente
credencial de serviço com acesso direto ao banco e à API de pagamento, "porque o
prompt instrui a apenas consultar".

O problema com essa proposta não é o modelo: é que **o prompt não é um controle de
segurança**. Todo conteúdo que entra no contexto — a mensagem do cliente, o anexo,
a resposta de uma ferramenta — vem de uma fronteira de confiança diferente. Um
documento enviado pelo cliente pode conter texto endereçado ao agente, e o agente
não distingue instrução de dado.

O componente também quebra três premissas que valiam para todo componente anterior:
determinismo, custo previsível e latência previsível.

## Decisão
O agente **propõe**; uma camada determinística **decide e executa**.

### Classificação das ações

| Ação | Reversível? | Custo do erro | Decisão |
| --- | --- | --- | --- |
| Consultar pedido | sim | baixo | automática |
| Redigir rascunho de resposta | sim | baixo | automática |
| Enviar resposta ao cliente | não | médio | revisão humana |
| Emitir reembolso | não | alto | confirmação humana + limite de valor |

### Controles

1. **Separação proposta/execução.** A saída do modelo é validada contra esquema antes
   de virar chamada de ferramenta. Saída que não valida é descartada, não corrigida.
2. **Autorização com a identidade do usuário final**, não com credencial de serviço.
   O agente nunca pode fazer o que o atendente logado não poderia.
3. **Limite de valor** no reembolso, com confirmação humana acima do limite e sempre
   para clientes fora da base conhecida.
4. **Orçamento por requisição:** máximo de passos e de tokens. Excedido, encerra com
   falha explícita — não continua "só mais um passo".
5. **Conteúdo externo é dado, nunca instrução.** Documentos e páginas entram no contexto
   delimitados e rotulados como não confiáveis.
6. **Fallback determinístico:** indisponibilidade ou degradação do provedor cai para o
   fluxo de atendimento atual, sem interromper o serviço.
7. **Eval automatizado** roda antes de qualquer mudança de prompt, de modelo ou de
   ferramenta. Sem eval verde, não há deploy.
8. **Auditoria completa:** entrada, proposta, decisão da camada determinística e ação
   executada ficam registradas e correlacionadas.

## Consequências

**Positivo**
- O raio de ação do agente é o de um atendente, e está escrito.
- Falha do provedor vira degradação, não indisponibilidade.
- Mudança de prompt passa a ter teste de regressão.

**Negativo**
- Dois caminhos para manter: o do agente e o fallback.
- Confirmação humana adiciona latência ao reembolso — aceito.
- Eval tem custo por execução de pipeline.

**Verificação**
- Teste de injeção: documento com instruções endereçadas ao agente não produz chamada
  de ferramenta fora do escopo autorizado.
- Teste de orçamento: requisição que excede o limite de passos encerra com erro claro.
- Ensaio de indisponibilidade do provedor com o fallback assumindo.
- Eval com conjunto dourado versionado, rodando em CI.

## Alternativas descartadas
- **Credencial de serviço com acesso amplo:** o prompt não é controle de acesso.
- **Workflow puramente determinístico:** avaliado primeiro, como manda o desenho; não
  cobre a variação real das solicitações de atendimento. Foi mantido como fallback.
- **Agente sem eval:** equivale a deploy sem teste, em um componente cuja saída muda
  sozinha quando o fornecedor atualiza o modelo.

## Gatilho de revisão
Se o custo médio por atendimento ultrapassar o orçamento definido, se o eval cair abaixo
do limiar acordado, ou se surgir qualquer incidente de fronteira de confiança, o
componente volta a rascunho assistido, sem execução de ferramenta.
