# Reprodução de paper como projeto — artefato do módulo 33

> Ler um paper prova que você entende o que os autores *disseram*. Reproduzir
> prova que você entende o que eles *fizeram*. A distância entre os dois é onde
> mora a senioridade em pesquisa aplicada.

Este é o capstone da trilha: não mais um exercício, e sim um **projeto
entregável** com protocolo, orçamento e ablação. É a versão rigorosa do que o
módulo 27 (leitura crítica) introduziu.

## 1. Escolha do paper — critérios que evitam frustração

| Critério | Por quê |
| --- | --- |
| Tem código ou pseudocódigo suficiente | reprodução do zero absoluto raramente cabe no orçamento |
| A métrica principal é verificável | você precisa saber se acertou |
| Escala cabe no seu hardware | reproduzir em escala menor é válido — declare a redução |
| Resultado é falsificável | "melhora em algum benchmark" não serve; precisa de número-alvo |

> Reproduzir em **escala reduzida** é legítimo e frequente. O que não se admite
> é *não declarar* a redução e comparar com o número do paper como se fosse igual.

## 2. O protocolo de reprodução (a ordem importa)

```
  1. LER e extrair as afirmações testáveis  (número-alvo, condição, dataset)
  2. CONGELAR o ambiente                     (seed, versões, dados, hardware)
  3. BASELINE primeiro                       (o método SEM a contribuição do paper)
  4. IMPLEMENTAR a contribuição              (a menor mudança que a isola)
  5. MEDIR contra o baseline                 (mesma seed, mesmo dado, mesma métrica)
  6. ABLAÇÃO                                 (remover cada peça e medir o efeito)
  7. RELATAR delta e limites                 (o que bateu, o que não bateu, e por quê)
```

A regra de ouro: **baseline antes de contribuição**. Sem um baseline reproduzido
com a mesma tubulação, você não sabe se o ganho veio do método do paper ou de um
detalhe de engenharia seu.

## 3. Congelamento de ambiente — o que "reprodutível" exige

- [ ] Seed fixa para todas as fontes de aleatoriedade (dados, init, dropout, shuffle)
- [ ] Versões pinadas (framework, CUDA, bibliotecas) registradas no artefato
- [ ] Dataset com hash/versão — não "a última versão do site"
- [ ] Hardware declarado (GPU/CPU, memória) — afeta batch e, às vezes, o número
- [ ] Um comando único que reexecuta tudo do zero

> Se outra pessoa não consegue rodar `um comando` e obter o seu número, você não
> reproduziu — você observou uma vez.

## 4. Ablação — a parte que a maioria pula

A ablação é o que transforma "funcionou" em "entendi por que funcionou".

| Configuração | Métrica-alvo | Delta vs baseline |
| --- | --- | --- |
| Baseline (sem a contribuição) | ___ | — |
| + contribuição completa | ___ | ___ |
| − componente A | ___ | ___ |
| − componente B | ___ | ___ |
| variação de hiperparâmetro X | ___ | ___ |

Se remover o componente central **não** piora o resultado, ou a sua
implementação está errada, ou a contribuição do paper não é o que os autores
alegam. Ambos os casos são achados valiosos — e ambos exigem investigação antes
de relatar.

## 5. Quando o número não bate — o roteiro honesto

Não bater é o caso comum, não o fracasso. A ordem de investigação:

1. **Ambiente:** versões, seed, precisão (fp32 vs bf16), tamanho de batch.
2. **Dados:** mesma partição? mesmo pré-processamento? mesma normalização?
3. **Métrica:** exatamente a mesma definição? (há cinco jeitos de calcular F1).
4. **Detalhe não publicado:** warmup, clipping, ordem de operações — o que o
   paper "esqueceu" de dizer. Procure no código oficial, não adivinhe.
5. **A contribuição não generaliza:** possível, e publicável como tal.

> Relatar "não consegui reproduzir, e aqui está exatamente o que tentei" com
> ambiente congelado vale mais que um número bonito sem procedência.

## 6. Entregáveis do projeto

- [ ] README com as afirmações testáveis extraídas do paper
- [ ] `um comando` que reexecuta baseline + contribuição + ablação
- [ ] Tabela de resultados com **seu** número ao lado do número do paper
- [ ] Declaração de escala (se reduziu) e de ambiente (versões, hardware, seed)
- [ ] Tabela de ablação preenchida com interpretação
- [ ] Seção "o que não bateu e o que investiguei"

## 7. Rubrica de senioridade

| Nível | Sinal |
| --- | --- |
| Júnior | rodou o código dos autores e viu o número sair |
| Pleno | reimplementou e bateu o número numa escala declarada |
| Sênior | baseline próprio + ablação que isola a contribuição |
| Staff | encontrou a discrepância, achou a causa e documentou o limite de validade |

## 8. Exercício

1. Escolha um paper com número-alvo verificável e código de referência.
2. Extraia as afirmações testáveis **antes** de olhar o código.
3. Reproduza o baseline, depois a contribuição, na maior escala que couber.
4. Rode a ablação e preencha a tabela do item 4.
5. Escreva a seção de discrepância — mesmo que tudo tenha batido, diga o que
   você faria diferente com mais orçamento.

**Critério de aceite:** um repositório onde `um comando` reproduz a sua tabela,
com o seu número ao lado do número do paper, a escala declarada e a ablação
interpretada. Se o número não bateu, o critério é a **investigação documentada**,
não o número.
