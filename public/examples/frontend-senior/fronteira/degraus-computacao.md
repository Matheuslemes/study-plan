# Degraus de computação no cliente — artefato do módulo 25

> Suba um por vez, medindo. A regra é a mesma do módulo 24 da trilha de Python
> e do 21 da de Banco de Dados: o degrau mais caro raramente é o primeiro certo.

## Os degraus

```
  0. algoritmo e estrutura de dados        <- quase sempre o ganho está aqui
  1. adiar / paginar / virtualizar         <- não fazer é mais rápido que fazer rápido
  2. Web Worker                            <- tira da main thread
  3. WebAssembly                           <- troca a linguagem
  4. WebGPU                                <- paraleliza massivamente
  5. servidor                              <- às vezes a resposta certa
```

Cada degrau adiciona build, depuração mais difícil e um caminho de fallback.
**O custo não é só de execução.**

## Degrau 2 — Worker

```js
// main thread
const worker = new Worker('./processa.js', { type: 'module' });

// Transferir a POSSE em vez de copiar: o buffer deixa de existir aqui.
worker.postMessage({ buffer }, [buffer]);   // <- o 2º argumento é o que importa
```

| | Cópia (padrão) | Transferível |
| --- | --- | --- |
| Custo | proporcional ao tamanho | constante |
| O buffer original | continua utilizável | fica **inutilizável** |
| Quando usar | dados pequenos | qualquer buffer grande |

**A armadilha:** se o custo de copiar o dado for maior que o do cálculo, mover
para o worker deixa tudo **mais lento**. Meça os dois.

## Degrau 3 — WebAssembly

Vale quando:

- [ ] o cálculo é numérico e denso (imagem, áudio, física, criptografia)
- [ ] já existe biblioteca madura — não escreva do zero
- [ ] a API pode receber **lote**, não item por item

Não vale quando:

- [ ] a lógica é de interface, com muitos objetos e strings
- [ ] a travessia JS↔Wasm aconteceria por item
- [ ] ninguém no time mantém o toolchain

> **O custo da travessia:** mil chamadas pequenas perdem para uma chamada com
> mil itens. É o mesmo princípio de API em lote do módulo 24 da trilha de AWS.

## Degrau 4 — WebGPU

Desde janeiro de 2026 está disponível em todos os principais navegadores
(Chrome, Edge, Firefox e Safari, incluindo mobile). Deixou de ser experimento.

Serve para computação **massivamente paralela**, não só gráficos:

| Problema | GPU ajuda? |
| --- | --- |
| Mesma operação sobre milhões de elementos | sim |
| Multiplicação de matrizes, convolução | sim |
| Simulação de partículas | sim |
| Lógica sequencial com desvios | **não** |
| Manipulação de strings | **não** |

Exige fallback: nem todo dispositivo entrega desempenho útil.

## A tabela de decisão

Preencha com **os seus** números.

| Degrau | Tempo | Main thread bloqueada | Custo de build | Vale? |
| --- | ---: | ---: | --- | --- |
| 0 — baseline | | | nenhum | |
| 0 — algoritmo melhor | | | nenhum | |
| 1 — virtualizar | | | baixo | |
| 2 — worker (cópia) | | | baixo | |
| 2 — worker (transferível) | | | baixo | |
| 3 — Wasm | | | alto | |
| 4 — GPU | | | alto | |

**Pare no primeiro degrau que atende ao requisito** e registre por que parou ali.

## O erro clássico

> Reescrever o módulo em Rust porque "JavaScript é lento" — e descobrir depois
> que o laço percorria um array onde cabia um `Map`.

O degrau 0 resolve mais casos que todos os outros somados, e é o único de graça.

## Perguntas antes de subir qualquer degrau

1. Isso **precisa** rodar no cliente? (o degrau 5 existe)
2. Precisa rodar **agora**? (adiar é o degrau 1)
3. Precisa processar **tudo**? (paginar, amostrar, virtualizar)
4. O degrau anterior foi **medido**?

## Exercício

1. Escolha o trecho mais pesado do seu cliente e meça o baseline.
2. Suba os degraus 0, 1 e 2, medindo cada um.
3. Só então avalie 3 e 4 — e registre a decisão mesmo que seja "parei no 2".
4. Documente o custo de manutenção do degrau escolhido, não só o de execução.

**Critério de aceite:** a tabela preenchida mostra onde você parou **e por quê**.
Se a conclusão for "não precisava de Wasm", o exercício está completo.
