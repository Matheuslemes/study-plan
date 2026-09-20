# Multi-região: escolha e prova — artefato do módulo 23

> Um plano de failover que nunca foi executado não é um plano. É uma hipótese.

## 1. As quatro topologias

| Topologia | RTO típico | RPO típico | Custo em regime | O que existe na secundária |
| --- | --- | --- | --- | --- |
| Backup / restore | horas | horas | ~5% | só os backups |
| Pilot light | dezenas de min | minutos | ~15% | dados replicados, computação desligada |
| Warm standby | minutos | segundos | ~50% | tudo rodando, em escala reduzida |
| Ativo-ativo | ~zero | ~zero* | 200%+ | tudo, em escala plena |

\* RPO zero exige replicação **síncrona**, e isso impõe a latência entre regiões
em **toda escrita**. Não há como contornar — é a velocidade da luz.

> Percentuais ilustrativos, para ordem de grandeza. Calcule os seus.

## 2. A decisão vem do requisito, não o contrário

```
RPO = 0?  ──sim──> replicação síncrona ──> latência entre regiões em toda escrita
   │                                        ──> ativo-ativo ou nada
   não
   ▼
RTO < 5 min? ──sim──> warm standby (com failover exercitado)
   │
   não
   ▼
RTO < 1 h?   ──sim──> pilot light
   │
   não
   ▼
backup / restore
```

Se ninguém souber dizer o RTO e o RPO, **a conversa sobre topologia não começou**.

## 3. Escrita nas duas regiões: a pergunta que decide tudo

Ativo-ativo com escrita nas duas pontas exige resposta para conflito:

| Estratégia | Quando serve |
| --- | --- |
| Particionar por cliente/região | quase sempre a melhor: elimina o conflito |
| Uma região escreve, a outra lê | simples, e o failover de escrita é manual |
| Resolver conflito na aplicação | quando o dado é acumulativo (ver Banco de Dados, módulo 25) |
| Último que escreve vence | **perde dado em silêncio** — só se perder for aceitável |

## 4. As dependências que só aparecem no failover

Checklist do que costuma ficar preso na região primária:

- [ ] Segredos e chaves (KMS é regional)
- [ ] Filas com mensagens não drenadas
- [ ] Registro de imagens de container
- [ ] Zona DNS e certificados
- [ ] Pipeline de deploy
- [ ] Ferramentas de observabilidade
- [ ] Banco de dados de configuração
- [ ] A própria automação de failover

> A última é a mais cruel: automação de failover hospedada na região que caiu.

## 5. Registro de exercício de failover

```
Data:
Ambiente:            teste / produção
Tipo:                controlado / simulação de falha
Executado por:

RTO objetivo:        ______      RTO MEDIDO:  ______
RPO objetivo:        ______      RPO MEDIDO:  ______

Timeline
  T+0      decisão de acionar
  T+___    roteamento alterado
  T+___    primeira requisição servida pela secundária
  T+___    todas as funções verificadas
  T+___    declarado estável

Falhou alguma coisa?
Divergência de versão entre regiões?
Dependência presa na primária?
O failback foi testado?

Próxima execução agendada para:
```

**Se o RTO medido divergir do objetivo, o objetivo está errado ou a topologia
está errada.** Um dos dois muda — não os dois ficam como estão.

## 6. Failback: a metade esquecida

Voltar é mais difícil que ir. Exige responder:

1. O que foi escrito na secundária durante o evento?
2. Como isso é reconciliado com a primária?
3. Existe janela de indisponibilidade no retorno? Ela é aceitável?
4. Quem decide voltar, e com que critério?

Se essas quatro não têm resposta, o plano cobre metade do caminho.

## 7. Exercício do módulo

1. Escreva RTO e RPO do seu workload mais crítico — e **confirme com o negócio**.
   Quase sempre o número imaginado pela engenharia é mais agressivo que o exigido.
2. Classifique a topologia atual e calcule o custo em regime.
3. Execute um failover controlado no ambiente mais alto que puder e registre o
   RTO medido.
4. Compare medido × objetivo × custo, e leve a decisão.
