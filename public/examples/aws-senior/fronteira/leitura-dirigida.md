# Leitura dirigida da Builders' Library — artefato do módulo 27

> A AWS publica como opera seus próprios sistemas: em detalhe, de graça e sem
> marketing. É o material mais denso sobre operação em escala disponível
> publicamente, e quase ninguém lê.

## 1. As quatro perguntas (para cada artigo)

1. Qual **restrição** o artigo tentava resolver?
2. Essa restrição **existe no meu sistema**?
3. O que foi **sacrificado** na decisão descrita?
4. **Mudou** alguma decisão minha?

A quarta é a que separa leitura de erudição. Se nada mudou, registre por quê — o
contexto pode legitimamente diferir.

## 2. Roteiro, em ordem de retorno

### Timeouts, retries e backoff com jitter
- **Restrição:** clientes que tentam de novo derrubam o serviço que ia se recuperar.
- **Conclusão:** backoff exponencial **com jitter**, teto de tentativas e orçamento global.
- **Aplique em:** toda integração. É o artigo de maior retorno por hora de leitura.
- Artefato correspondente: `quotas-e-retry.md` (módulo 24).

### Estabilidade estática usando zonas
- **Restrição:** recuperação que depende do plano de controle falha quando ele satura.
- **Sacrifício:** capacidade ociosa em regime.
- **Aplique em:** qualquer workload cujo SLO não tolera esperar provisionamento.
- Artefato: `estabilidade-estatica.md` (módulo 22).

### Trabalho constante
- **Restrição:** sistemas orientados a evento têm pico proporcional ao caos.
- **Conclusão:** fazer sempre a mesma quantidade de trabalho elimina o modo de sobrecarga.
- **Contraintuitivo:** gastar o mesmo no dia calmo é o ponto, não o defeito.

### Evitar fallback em sistemas distribuídos
- **Contraria a prática comum.** O argumento: caminho de fallback não é
  exercitado e falha junto com o principal.
- **Pergunta para você:** o seu fallback roda em produção com que frequência?

### Shuffle sharding
- **Restrição:** um cliente barulhento afeta todos os outros.
- **Matemática:** trilha de Arquitetura, módulo 23, com os números conferidos.

### Cache e disponibilidade
- **Contraintuitivo:** cache melhora latência e pode **piorar** disponibilidade —
  o sistema passa a não aguentar operar sem ele, e o dia em que o cache esvazia
  vira o incidente.
- **Pergunta:** o seu sistema sobrevive ao cache vazio?

## 3. Registro por artigo

```
Artigo:
Data da leitura:

Restrição que resolve:
Existe no meu sistema?          sim / não
O que foi sacrificado:
Aplicável na minha escala?      sim / não / parcial

Mudou alguma decisão?           sim / não
Se sim, qual e qual foi o resultado MEDIDO:
Se não, por que o contexto difere:
```

## 4. Leitura crítica

Isto é engenharia publicada **pelo fornecedor**. Excelente, e não neutra.

- As decisões são na escala da AWS. Nem toda conclusão transfere para um sistema
  com três instâncias — e o artigo nem sempre diz isso.
- O que a AWS faz **internamente** não é o que o serviço **entrega** a você.
- Alguns artigos descrevem o problema que um serviço da AWS resolve. Isso não
  invalida o conteúdo, mas vale notar ao ler.

## 5. Formato de leitura dirigida com o time

| Etapa | Duração |
| --- | --- |
| Leitura individual prévia | 1 artigo, ~40 min |
| Discussão das quatro perguntas | 30 min |
| Decisão: aplicamos, adaptamos ou não se aplica | 15 min |
| Se aplicamos: quem, até quando, qual métrica | 15 min |

Um artigo por quinzena resolve mais discussão de arquitetura do que a maioria
das reuniões sobre arquitetura.

## 6. Critérios de aceite do módulo

- [ ] Três artigos lidos com as quatro perguntas respondidas
- [ ] Ao menos um padrão aplicado a um componente real
- [ ] O resultado **medido** antes e depois
- [ ] O resultado registrado — **inclusive se não houve ganho**
- [ ] Ao menos um caso em que a conclusão foi "não se aplica à nossa escala",
      com a justificativa
