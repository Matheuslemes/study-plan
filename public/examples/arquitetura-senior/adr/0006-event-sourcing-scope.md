# ADR 0006 — Escopo de event sourcing por contexto

- Status: aceito
- Relacionado: ADR 0003 (fronteiras de serviço), ADR 0004 (consistência do checkout)

## Contexto
Foi proposto adotar event sourcing em todos os bounded contexts "para padronizar e
ter auditoria". Três contextos estão em discussão: conta corrente, catálogo e
preferências de usuário. A motivação declarada — auditoria — é atendida por várias
soluções de custo muito diferente.

O custo real de event sourcing não aparece na adoção; aparece no ano 2, quando é
preciso evoluir o formato de um evento com milhões de instâncias gravadas, e no dia
em que chega a primeira solicitação de exclusão de dado pessoal sobre um log imutável.

## Decisão
Adotar event sourcing **apenas em conta corrente**, onde o histórico de como se chegou
ao saldo é o próprio produto (o extrato) e é exigido por regulação.

- **Catálogo:** estado atual com tabela de histórico. Atende à auditoria por uma fração
  do custo.
- **Preferências:** estado atual, sem histórico. Não há requisito.
- **CQRS sem event sourcing** onde houver assimetria entre leitura e escrita — são
  decisões independentes, e a maioria dos casos quer só a segregação de modelos.

Em conta corrente, antes do primeiro deploy:

1. Eventos nomeados como fatos no passado, na linguagem do domínio (`DepositoRealizado`,
   nunca `AtualizarConta`).
2. Política de versionamento escrita: campo `schemaVersion` em todo evento e upcasting
   na leitura. Nada de migração retroativa do log.
3. Snapshot a cada 500 eventos por agregado, com meta de replay abaixo de 200 ms no p99.
4. Dado pessoal fora do evento; no evento, apenas a referência. Exclusão via
   crypto-shredding da chave, mantendo o log íntegro.

## Consequências

**Positivo**
- Extrato e auditoria forense são derivados do log, não construídos à parte.
- Projeções novas podem ser criadas por replay, sem migração de dados.
- O custo de versionamento fica contido a um contexto, e não à organização.

**Negativo**
- Conta corrente passa a exigir disciplina permanente de versionamento de evento.
- Leituras derivadas são eventualmente consistentes; a UI precisa tratar isso
  explicitamente (e não com um `sleep`).
- Dois modelos de persistência convivem na mesma organização — custo cognitivo real,
  aceito conscientemente.

**Verificação**
- Teste que reconstrói o saldo do zero, por replay, e compara com a projeção corrente.
- Teste de convivência: evento v1 e v2 lidos pelo mesmo consumidor, via upcaster.
- Ensaio de exclusão de dado pessoal, medindo que o log permanece íntegro e o dado,
  irrecuperável.
- Medição de replay do maior agregado em produção, com alerta se ultrapassar 200 ms.

## Alternativas descartadas
- **Event sourcing em todos os contextos:** custo de versionamento multiplicado por três,
  sem requisito que o justifique em dois deles.
- **Nenhum event sourcing, só tabela de histórico:** não atende à exigência de reconstruir
  o estado em qualquer ponto do tempo, que é regulatória em conta corrente.
- **Event sourcing sem política de versionamento desde o início:** descartada por ser o
  modo de falha mais comum e mais caro de corrigir depois.

## Gatilho de revisão
Se o replay do maior agregado passar de 200 ms no p99, ou se o número de versões ativas
de um mesmo evento passar de três, reavaliar snapshot e política de convivência.
