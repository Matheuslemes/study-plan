# Canais laterais e execução transiente — artefato do módulo 26

> Um sistema pode estar perfeito na lógica e vazar mesmo assim — pelo **tempo**,
> pelo **cache**, pelo **consumo**. O segredo não sai pela porta; sai pela fresta
> que ninguém modelou.

## 1. A ideia central

Canal lateral é informação que vaza pela **implementação física ou
micro-arquitetural**, não pela saída lógica. O cálculo está certo; o *como* ele
foi feito conta um segredo.

| Canal | O que o observador mede | Vaza |
| --- | --- | --- |
| Tempo | quanto demorou | ramo tomado, tamanho, acerto de comparação |
| Cache | latência de acesso à memória | qual endereço a vítima tocou |
| Consumo/EM | energia ou emissão | operações executadas (chaves) |
| Micro-arquitetural | efeito de execução especulativa | memória fora do limite lógico |

## 2. Timing — o caso que todo dev encontra

Comparar segredos byte a byte com saída antecipada **vaza o segredo pelo tempo**:

```
  ERRADO — retorna assim que diverge; quanto mais prefixo certo, mais demora
    for i in bytes:
        if a[i] != b[i]: return False      # o tempo revela quantos bytes batem
    return True

  CERTO — tempo independe do conteúdo; acumula a diferença e só decide no fim
    diff = 0
    for i in range(len(a)):
        diff |= a[i] ^ b[i]
    return diff == 0
```

Por isso comparação de MAC, token e senha usa função **de tempo constante**
(`crypto.timingSafeEqual`, `hmac.compare_digest`). É o canal lateral mais
acessível — e o mais fácil de errar de novo na próxima função.

> **A regra:** nenhum ramo, nenhum índice de memória e nenhum tempo de execução
> pode depender de dado secreto. Isso vale para toda comparação de segredo, não
> só na criptografia.

## 3. Execução transiente — Spectre e a família que não acaba

Processadores modernos **especulam**: executam adiantado o caminho que acham
provável e desfazem se erraram. O resultado lógico é revertido — mas o **efeito
no cache não é**. Esse resíduo é lido por um canal de cache.

```
  1. treina o preditor de desvio para "provavelmente dentro do limite"
  2. dispara um acesso ESPECULATIVO fora do limite (será revertido)
  3. o valor lido especulativamente indexa um array -> deixa marca no cache
  4. mede latência do array -> descobre o valor que "não foi lido"
```

A linhagem não parou em 2018:

| Ataque | Ano | Fronteira que quebra |
| --- | --- | --- |
| Spectre / Meltdown | 2018 | processo / kernel |
| BHI (Branch History Injection) | 2022 | isolamento de preditor |
| VMScape (CVE-2025-40300) | 2025 | **guest → hypervisor** em nuvem |

> VMScape é o lembrete de 2026: um guest malicioso vaza segredo do hipervisor na
> **configuração padrão**, sem alterar código. Isolamento por VM não é isolamento
> micro-arquitetural.

## 4. Quem precisa se importar — e quem não precisa

Honestidade de escopo evita tanto pânico quanto negligência:

| Você | Canal lateral é prioridade? |
| --- | --- |
| Escreve comparação de segredo/token/MAC | **sim** — use tempo constante, sempre |
| Implementa ou escolhe cripto | **sim** — exija bibliotecas de tempo constante |
| Roda multi-tenant no mesmo host físico | **sim** — patch de microcódigo, isolamento |
| Opera nuvem compartilhada | **sim** — acompanhe CVEs transientes, aplique mitigação |
| Faz CRUD numa VM dedicada | timing de segredo sim; transiente, baixo |

## 5. Defesas, por camada

```
  aplicação   -> comparação de tempo constante; sem ramo sobre segredo
  biblioteca  -> primitivas cripto constant-time (não role a sua)
  SO / hyperv -> flush de preditor na troca de contexto; mitigação de patch
  microcódigo -> correção do fabricante (custa desempenho)
  hardware    -> a correção real, na próxima geração
```

Toda mitigação de execução transiente **custa desempenho**. A decisão é de
risco: quanto isolamento você precisa versus quanto throughput aceita perder.
É a mesma conversa de trade-off do módulo 1, aplicada ao silício.

## 6. Exercício

1. Escreva as duas comparações do item 2 e **meça** o tempo de cada uma para
   entradas que divergem no 1º byte e no último. Mostre o vazamento de tempo na
   ingênua e a ausência dele na de tempo constante.
2. Liste, no seu sistema, toda comparação que toca segredo (senha, token, MAC,
   assinatura) e confirme que cada uma usa função de tempo constante.
3. Descreva se o seu deployment é multi-tenant no mesmo host físico e, se for,
   qual a sua política de mitigação para CVEs de execução transiente.

**Critério de aceite:** a medição que mostra o vazamento de tempo na comparação
ingênua, e o inventário de comparações de segredo do seu sistema com o veredito
de tempo constante para cada uma.

## 7. Para a entrevista

- *"Por que comparar tokens com `==` é um bug?"* — Saída antecipada vaza o
  tamanho do prefixo correto pelo tempo. Use comparação de tempo constante.
- *"O que Spectre explora?"* — O resíduo no cache deixado pela execução
  especulativa, que o resultado lógico revertido não apaga. Cite o canal de cache.
- *"VM me isola de canal lateral?"* — Não do micro-arquitetural; VMScape (2025)
  vaza do guest para o hipervisor. Isolamento lógico ≠ isolamento de silício.
