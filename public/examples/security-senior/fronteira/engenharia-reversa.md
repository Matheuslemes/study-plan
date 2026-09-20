# Engenharia reversa e análise de binário — artefato do módulo 22

> Ler um binário que você não compilou é a habilidade que separa "confio no
> fornecedor" de "verifiquei o que ele entregou". Vale para triagem de malware,
> análise de patch, resposta a incidente e auditoria de dependência binária.

## 0. Contrato de ética e segurança operacional

- Amostra suspeita **só** em VM descartável, sem rede ou com rede simulada,
  com snapshot antes e destruição depois.
- Nunca execute o que você ainda não entendeu estaticamente o suficiente.
- Binário de terceiro para estudo: só com licença/autorização que permita.
- Registre hashes da amostra e cadeia de custódia se for incidente real.

## 1. Estática antes de dinâmica — sempre

| Abordagem | O que responde | Risco |
| --- | --- | --- |
| **Estática** (não executa) | o que o código *pode* fazer | baixo |
| **Dinâmica** (executa/observa) | o que ele *faz* naquela execução | alto: você roda o alvo |

A ordem correta é estática → dinâmica. Executar primeiro é como abrir o e-mail
suspeito para ver se é phishing.

## 2. Triagem estática — a primeira meia hora

```
  file / tipo           -> ELF? PE? Mach-O? empacotado?
  strings               -> URLs, caminhos, chaves, mensagens, nomes de API
  tabela de imports     -> o que ele chama do sistema conta a intenção
  entropia por seção    -> alta = comprimido/cifrado = provável packer
  hash + VirusTotal*    -> já é conhecido? (*só se a amostra puder sair)
```

> A **tabela de imports** é a confissão do binário. `CreateRemoteThread`,
> `WriteProcessMemory`, `socket`, `crypt*`, `RegSetValue` — cada import limita o
> universo do que o programa consegue fazer. Um binário que não importa rede não
> exfiltra por rede.

## 3. Disassembly e decompilação — o que a ferramenta faz e onde erra

Um disassembler (Ghidra, radare2, objdump) traduz bytes → instruções. Um
decompiler (Ghidra, Hex-Rays) reconstrói um pseudo-C a partir disso.

| Camada | Confiança | Onde falha |
| --- | --- | --- |
| bytes → instruções | alta | código ofuscado, dados misturados com código |
| instruções → fluxo | média | saltos indiretos, tabelas de jump |
| fluxo → pseudo-C | **cuidado** | tipos, structs e nomes são **palpite** |

> O decompiler é um leitor apressado, não a verdade. Ele **inventa** nomes e
> tipos para ser legível. Confirme toda decisão importante na instrução, não no
> pseudo-C.

## 4. Fluxo de trabalho de leitura

```
  1. ache o ponto de entrada e a função principal
  2. identifique as fronteiras: onde entra input externo (rede, arquivo, args)
  3. marque as APIs perigosas e siga o dado ATÉ elas (taint manual)
  4. renomeie funções e variáveis conforme entende — o mapa é seu
  5. só então rode dinamicamente para confirmar a hipótese, num ponto específico
```

A análise **dinâmica** confirma, não descobre: você coloca um breakpoint onde a
estática levantou a hipótese e observa registradores/memória naquele ponto.

## 5. Patch diffing — o atalho do atacante que o defensor precisa conhecer

Quando um fornecedor publica uma correção, comparar o binário **antes e depois**
revela exatamente o que foi corrigido — e, portanto, onde estava a falha. É como
1-days viram exploits em horas.

A leitura defensiva:

- A janela entre patch e aplicação é curta **porque o diff entrega o bug**.
- Prioridade de patch não é sobre "gravidade teórica" — é sobre **quão fácil o
  diff revela um caminho explorável**.
- É mais um argumento para deploy rápido e verificável (trilha DevOps).

## 6. Onde isto encontra o resto do curso

- **Supply chain (módulo 15):** reverter um artefato é como você confere que o
  binário publicado corresponde ao código revisado quando a proveniência falha.
- **Resposta a incidente (módulo 19):** triagem de amostra é parte de conter e
  entender o abuso.
- **Fuzzing (módulo 23):** reverter o alvo mostra onde vale plantar o harness.

## 7. Exercício (binário próprio ou amostra autorizada, em VM isolada)

1. Compile um programa em C com uma "senha" comparada em memória. Sem rodar,
   ache a senha só por `strings` e leitura do disassembly.
2. Compile duas versões — uma com um bug, outra corrigida — e faça o **diff**
   das funções. Descreva a falha só a partir da diferença.
3. Pegue um binário `-O0` e um `-O2` do mesmo código e compare o pseudo-C.
   Registre onde o decompiler acertou e onde inventou.
4. Escreva a nota de triagem: tipo, imports relevantes, hipótese de
   comportamento, e **o que você confirmaria dinamicamente** — sem ter rodado.

**Critério de aceite:** a nota de triagem sustenta uma conclusão sobre o
comportamento do binário **antes** de qualquer execução, e aponta o ponto exato
onde a dinâmica confirmaria.

## 8. Para a entrevista

- *"Por onde começa a analisar um binário desconhecido?"* — Estática primeiro:
  tipo, strings, imports, entropia. Nunca executar antes de entender.
- *"Dá pra confiar no decompiler?"* — Na estrutura, com reservas; em tipos e
  nomes, não. Ele reconstrói um palpite legível; a verdade está na instrução.
- *"Por que patch diffing importa para a defesa?"* — Porque encurta a janela de
  exploração: o diff revela o bug. Justifica deploy rápido e priorização real.
