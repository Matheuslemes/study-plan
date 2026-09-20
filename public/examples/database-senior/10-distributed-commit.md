# Commit distribuído e consenso — artefato do módulo 24

> O produto deste módulo não é escolher um banco: é saber **o que perguntar** para
> que material de marketing não consiga responder.

## 1. Os quatro mecanismos, e o que cada um cobra

| Mecanismo | Resolve | Cobra | Bloqueia? |
| --- | --- | --- | --- |
| **2PC** | atomicidade entre recursos | coordenador é ponto único | **sim**, in-doubt |
| **Consenso** (Raft/Paxos) | acordo sobre uma sequência | 1 round-trip de quórum por decisão | não, com maioria viva |
| **Determinístico** (Calvin) | ordena antes de executar | exige conjunto de acesso conhecido | não |
| **Relógio** (Spanner/TrueTime) | consistência externa global | hardware + espera da incerteza | não, espera |

## 2. Por que 2PC bloqueia

```
   Coordenador            Participante A        Participante B
        |                       |                     |
        |------ prepare ------->|                     |
        |------ prepare --------------------------->  |
        |<----- ready ----------|                     |
        |<----- ready ------------------------------- |
        |                       |                     |
        X  <-- coordenador cai aqui                   |
        |                       |                     |
        |              locks SEGURADOS       locks SEGURADOS
        |              indefinidamente       indefinidamente
```

Os participantes prometeram que conseguem confirmar e **não podem decidir
sozinhos**: abortar pode divergir de quem confirmou, confirmar pode divergir de
quem abortou. Ficam presos até o coordenador voltar.

É por isso que entre serviços independentes a resposta é saga com compensação
(módulo 12 da trilha de Arquitetura), não 2PC.

## 3. Consenso não é a mesma coisa que commit distribuído

Confusão frequente. **Consenso** faz um grupo de réplicas concordar sobre uma
sequência de valores — é replicação do log. **Commit distribuído** faz recursos
*diferentes* concordarem sobre uma transação que toca os dois.

Um banco pode usar consenso para replicar cada partição e ainda precisar de 2PC
para uma transação que cruza partições. Saber disso muda a pergunta que se faz.

## 4. O custo em latência, que ninguém mostra no slide

Quórum exige que a maioria confirme. Com nós em três continentes:

| Topologia | Round-trip do quórum | Latência de escrita |
| --- | ---: | ---: |
| 3 nós, mesma zona | < 1 ms | ~1 ms |
| 3 nós, 3 zonas da mesma região | 1–2 ms | ~5 ms |
| 3 nós, 3 regiões do mesmo continente | 20–30 ms | ~40 ms |
| 3 nós, 3 continentes | 100–150 ms | **~250 ms** |

Nenhum defeito: é o preço da garantia, e é geografia, não engenharia. Um cluster
global com escrita em qualquer lugar paga isso em toda escrita.

> Valores ilustrativos. Meça na sua topologia — é o exercício aplicado.

## 5. As perguntas para o fornecedor

Copie esta lista para a próxima avaliação. Nenhuma delas é respondível com
material de marketing.

1. Qual a garantia exata, no vocabulário formal? *Linearizável? Snapshot
   isolation? Serializável? Read-committed?* "Consistência forte" não é resposta.
2. Qual o comportamento sob partição de rede? Quem continua aceitando escrita?
3. Há suposição sobre relógio? Qual a incerteza máxima tolerada e o que acontece
   se ela for excedida?
4. Onde fica o quórum, e qual a latência de escrita imposta por ele?
5. O que acontece com escritas em voo durante um failover?
6. Transações que cruzam partições usam qual mecanismo?
7. Existe verificação independente da garantia (análise de terceiros, resultados
   de teste de consistência sob falha)?
8. Qual o comportamento em split-brain, e como ele é prevenido?

## 6. Registro da avaliação

```
Produto:
Versão avaliada:
Data:

Garantia anunciada:
Garantia formal (após as perguntas):
Comportamento sob partição:
Suposição de relógio:
Latência de escrita medida (nossa topologia):
Verificação independente encontrada:

O nosso domínio precisa desta garantia?   sim / não
Se não, qual é a mais fraca que atende:
```

## 7. Critérios de aceite

- [ ] A garantia está escrita em vocabulário formal, não em adjetivo
- [ ] O comportamento sob partição está documentado
- [ ] A latência de escrita foi **medida** na topologia pretendida
- [ ] Existe verificação independente, ou está registrado que não existe
- [ ] Está escrito por que o domínio precisa dessa garantia — ou por que uma mais
      fraca bastaria
