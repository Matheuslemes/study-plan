# Leitura dirigida dos papers fundadores — artefato do módulo 24

> O produto desta leitura **não é um resumo**. É uma decisão sua que mudou, ou a confirmação
> explícita de que não mudou e por quê.

## Método das três passagens (Keshav)

| Passagem | Tempo | O que ler | Decisão ao final |
| --- | --- | --- | --- |
| 1ª | 5–10 min | título, abstract, introdução, títulos de seção, conclusão | vale a 2ª? |
| 2ª | ~1 h | texto sem provas nem detalhes; figuras e tabelas com atenção | vale a 3ª? |
| 3ª | 4–6 h | tudo, reconstruindo o raciocínio como se fosse escrever o paper | só para papers da sua área central |

A maior parte dos papers merece parar na 1ª. Isso é triagem, não preguiça.

## As quatro perguntas (responda para cada paper)

1. Qual **restrição da época** o paper tentava contornar? (hardware, rede, custo, escala)
2. Essa restrição **ainda existe**?
3. Qual garantia foi **abandonada** para obter a outra?
4. O que o paper **exige da aplicação** que o usa?

A pergunta 4 é a mais esquecida e a que mais causa dano: adota-se a decisão do paper sem
assumir a responsabilidade que ele transfere.

## Roteiro

### 1. Dynamo (Amazon, 2007) — disponibilidade acima de consistência
- **Restrição:** carrinho de compras não pode recusar escrita, nem durante partição.
- **Abandona:** consistência forte.
- **Exige da aplicação:** resolver conflito de versões (vector clocks; o carrinho faz união).
- **O que envelheceu:** os detalhes de implementação. **O que não:** a ideia de que a garantia
  escolhida é uma decisão de negócio, não técnica.
- **Erro comum:** adotar "consistência eventual como o Dynamo" em saldo financeiro, sem o
  modelo de resolução de conflito que o paper pressupõe.

### 2. Spanner (Google, 2012) — relógio como infraestrutura
- **Restrição:** transações globais externamente consistentes.
- **Compra:** incerteza de relógio limitada, com GPS e relógio atômico (TrueTime).
- **A lição:** toda garantia distribuída é comprada em algum lugar. Quando um fornecedor
  oferece uma garantia forte, a pergunta é **com o quê ele a pagou**.

### 3. Raft (2014) — inteligibilidade como requisito
- **Restrição:** Paxos era correto e incompreensível o bastante para gerar implementações erradas.
- **A lição arquitetural:** "as pessoas conseguem entender e implementar isto corretamente"
  é um atributo de qualidade legítimo, não um detalhe de didática.

### 4. Borg (Google, 2015) — o que virou Kubernetes
- **Restrição:** utilização alta de frota compartilhada, com cargas de prioridades diferentes.
- **Leia para:** entender por que o Kubernetes tem as abstrações que tem, e quais decisões
  do Borg **não** foram herdadas.

### 5. Kafka (2011) — o log como primitiva
- **Restrição:** ingestão de logs de atividade em volume alto, com consumidores múltiplos.
- **A lição:** transformar "fila" em "log particionado com offset por consumidor" muda o que
  é possível construir em cima. Conecta direto com o módulo 19 (event sourcing).

### 6. CAP, PACELC e Harvest & Yield
- Leia o CAP como **ponto de partida**, não como conclusão: ele fala do comportamento sob
  partição e é binário demais.
- PACELC acrescenta o que falta: na **ausência** de partição, a escolha é entre latência e
  consistência — e é aí que o sistema passa 99,9% do tempo.
- Harvest & Yield dá o vocabulário para degradação parcial (responder menos, em vez de falhar).

## Registro por paper

Copie este bloco para cada leitura.

```
Paper:
Data da leitura:
Passagem alcançada:  1ª / 2ª / 3ª

Restrição da época:
Ainda existe?
Garantia abandonada:
O que exige da aplicação:

Mudou alguma decisão minha?   sim / não
Se sim, qual e por quê:
Se não, por que o contexto difere:
```

## Critérios de aceite

- [ ] Ao menos três papers com as quatro perguntas respondidas
- [ ] Ao menos um registro em que a leitura **mudou** uma decisão, ou justificou manter uma
- [ ] Nenhuma conclusão tirada só do abstract
- [ ] Distinção explícita entre o sistema do paper e o produto atual de mesmo nome
