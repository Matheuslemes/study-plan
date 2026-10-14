# Plano — Aprofundamento da Rotina Diária

> Estado vivo desta tarefa. Entregue **uma fase por vez**; ao concluir, aguardar
> autorização explícita para seguir para a próxima.

## Objetivo

Cada **horário** da "Rotina diária" deve exibir, para a fase ativa, o conteúdo
**completo e aprofundado** da trilha daquele bloco — não mais uma única linha
genérica. Vale para todos os horários, todos os dias, todas as trilhas e todas
as fases da sequência **Backend** (12 fases de `public/data/phases.js`).

## Como funciona hoje (diagnóstico)

Cada bloco (`public/data/routine.js` → `dailyPlansByDay`) mostra: título, uma
descrição genérica do slot (`b.d`) e um **selo** com **1 linha** do conteúdo da
fase (`active-phase.js` → `seloDaFase` → `conteudoDaFase(fase, trilha)[topicIndex||0]`).
A fonte do "o que estudar" por fase × trilha é `phases.js` (arrays de itens).

## O que muda (duas frentes)

1. **Renderização (uma vez, na Entrega 1):** `active-phase.js` passa a expor o
   conteúdo COMPLETO da trilha da fase, e `routine.js`/`seloDaFase` renderiza a
   lista inteira com enquadramento ("O que estudar neste horário · Trilha · Fase").
   CSS de lista no dashboard.
2. **Conteúdo (por fase):** reescrever/expandir em `phases.js` os itens de cada
   trilha de cada fase para descrições **profundas e acionáveis** — o que estudar,
   como estudar e o critério observável de domínio — mantendo concisão.

## Restrições (não quebrar o que já existe)

- **Progresso por índice.** `topicosDaTrilha` gera ids por ÍNDICE do item
  (`idTopico(trilha, faseId, i)`). Portanto: reescrever texto **no lugar** (mesmo
  índice), **não reordenar**, **não remover** itens. Se precisar acrescentar, só
  **anexar no fim** (índices novos = tópicos zerados; os antigos preservam id/estado).
- **Substrings exigidas pelo validador.** `validate-content.mjs` exige, no conjunto
  `dsa` de todas as fases, os literais: `Collections Framework`, `Contrato de equals`,
  `Contrato de hashCode`, `Comparator e Comparable`, `prefix sum`, `binary search`,
  `divide and conquer`, `greedy`, `trie`. Preservar cada um ao reescrever a trilha DSA.
- **Densidade de "critério observável".** ≥ 80% dos tópicos precisam conter
  `critério observável:`. Aprofundar já casa com isso — incluir o critério ao expandir.
- **Placeholders de trilha inativa.** Manter as linhas `Trilha inativa nesta fase…`
  como estão (não são conteúdo de estudo).

## Divisão em entregas (portão de autorização a cada conclusão)

- [x] **Entrega 1 — Renderização + Fase 1** (fatia vertical completa para revisão) ✅
      Render: `active-phase.js` (`seloDaFase` lista todos os itens da trilha/fase com
      enquadramento "…— o que estudar neste horário") + CSS `.phase-slot--list` em
      `system.css`. Conteúdo: `phases.js` Fase 1 aprofundada em java, dsa, db, git,
      arquitetura, devops, sec e prática (contagens preservadas; DSA literais mantidos).
      **Descoberta de formato:** `converterTopicoEmObjetivo` retorna o item intacto se
      ele contém `critério observável:` (minúsculo) — por isso os itens aprofundados
      usam minúsculo e aparecem sem o prefixo "Implementar em código:". Verificado:
      validate-content/validate-sequences verdes, contagens estáveis, sem duplicação.
- [x] **Entrega 2 — Fase 2** ✅
      Divisão implementada: quando a mesma trilha ocupa mais de um bloco no dia, os
      itens da fase são **repartidos** entre os blocos (`fatiaDoBloco` em active-phase.js;
      `seloDaFase` mostra "parte i/total"). Conteúdo da Fase 2 aprofundado em java, dsa,
      db, git, arquitetura, devops, sec, prática e **inglês** (`englishByPhase[2]`).
      Verificado: segunda (Java 2+2), quarta (Banco 1+1), terça (Java 2+2, Inglês 2);
      validadores verdes; contagens preservadas.
- [x] **Entrega 3 — Fase 3** ✅
      Fase 3 (Testes, Docker e CI/CD) aprofundada em java, dsa, db, git, arquitetura,
      devops, sec, prática e inglês (`englishByPhase[3]`). Contagens preservadas;
      `divide and conquer` mantido. Verificado: sexta (DevOps 2+2), validadores verdes,
      sem erros de console.
- [x] **Entrega 4 — Fase 4** ✅
      Fase 4 (Segurança aplicada e qualidade de código) aprofundada em todas as trilhas
      surfacadas + inglês (`englishByPhase[4]`). Contagens preservadas; `greedy` mantido.
      Verificado: quinta (Java 1+1 mesmo com Segurança entre os blocos, Segurança 4,
      Inglês 2); validadores verdes; sem erros de console.
- [x] **Entrega 5 — Fase 5** ✅
      Fase 5 (Performance, banco avançado e Redis) aprofundada em todas as trilhas
      surfacadas + inglês (`englishByPhase[5]`). Contagens preservadas; `trie` mantido.
      Verificado: quarta (Banco 3 itens divididos 1+2, DevOps 1, DSA 3); validadores
      verdes; sem erros de console.
- [x] **Entrega 6 — Fase 6** ✅
      Fase 6 (Observabilidade e operação em produção) aprofundada em todas as trilhas
      surfacadas + inglês (`englishByPhase[6]`). Contagens preservadas. Verificado:
      sexta (DevOps 3 itens divididos 1+2, Arquitetura 2, DSA 2); validadores verdes;
      sem erros de console.
- [x] **Entrega 7 — Fase 7** ✅
      Fase 7 (Arquitetura de software e DDD) aprofundada em todas as trilhas surfacadas
      + inglês (`englishByPhase[7]`). Contagens preservadas. Verificado: terça (Java 1+1,
      Arquitetura 5, Inglês 2); validadores verdes; sem erros de console.
- [x] **Entrega 8 — Fase 8** ✅
      Fase 8 (Sistemas distribuídos, mensageria e Kafka) aprofundada em todas as trilhas
      surfacadas + inglês (`englishByPhase[8]`). Contagens preservadas. Divisão ajustada
      para *front-load* (`active-phase.js`): quando a trilha tem menos itens que blocos,
      o item vai para o primeiro bloco (ex.: sexta DevOps 1 item → parte 1/2 preenchida,
      2/2 sem lista). Verificado: sexta (Arquitetura 6), terça (Java 1+1); validadores
      verdes; sem erros de console.
- [x] **Entrega 9 — Fase 9** ✅
      Fase 9 (Cloud AWS, IaC e Kubernetes) aprofundada em todas as trilhas surfacadas
      + inglês (`englishByPhase[9]`). Contagens preservadas. Verificado: sexta (DevOps
      4 itens divididos 2+2, Arquitetura 2, DSA 2); validadores verdes; sem erros.
- [x] **Entrega 10 — Fase 10** ✅
      Fase 10 (System Design e escalabilidade) aprofundada em todas as trilhas surfacadas
      + inglês (`englishByPhase[10]`). Contagens preservadas. Verificado: terça (Java
      front-load 1 item, Arquitetura 7, Inglês 2); validadores verdes; sem erros.
- [x] **Entrega 11 — Fase 11** ✅
      Fase 11 (Frontend, Python e IA aplicada) aprofundada nas trilhas surfacadas + inglês
      E também nas **recém-ativadas Frontend (5), Python (8) e IA (9)** — que não têm bloco
      próprio na rotina mas viram conteúdo real (aparecem nas outras vistas). Contagens
      preservadas. Verificado: segunda (rotina íntegra, Java front-load); validadores
      verdes; sem erros.
- [x] **Entrega 12 — Fase 12** ✅ — **TAREFA COMPLETA**
      Fase 12 (Portfólio, entrevistas e senioridade) aprofundada em todas as trilhas
      surfacadas + frontend/py/ia (manutenção) + inglês (`englishByPhase[12]`).
      Verificação global: **222/222 itens das trilhas surfacadas (12 fases) com critério
      observável**; todos os literais do DSA preservados; englishByPhase deepened nas 12
      fases; validate-content, validate-sequences e verify-examples verdes; sem erros.

## Verificação por entrega

- `node scripts/validate-content.mjs` (integridade, razão de critério observável, DSA).
- Estabilidade de ids: conferir que a contagem de itens por (fase, trilha) **não
  diminuiu** e que os índices `0..n-1` continuam existindo.
- Navegador: abrir a Rotina diária na fase, conferir que cada horário mostra o
  conteúdo completo e aprofundado da trilha do bloco.

## Extra — Sequência de Arquitetura ✅

- [x] **Rotina da sequência de Arquitetura aprofundada** (a pedido, após as 12 fases do Backend).
      Objetivos das 6 etapas reescritos em `public/data/sequences/arquitetura.js` (chaveados por
      `id` — reescrever o texto é seguro para o progresso), mais os templates de inglês/git/prática.
      **56/56** itens da rotina de Arquitetura agora com critério observável. A rotina usa o
      mesmo `seloDaFase`/divisão; AWS renderiza via `aws.topics` (sem quebra). Verificado: A1
      (segunda) e A5 (sexta, com AWS 2 itens); `validate-sequences` e `validate-content` verdes;
      sem erros de console. Módulos, ids de objetivo e diagnóstico intactos.

## Extra — Trilhas math e fin ✅

- [x] **Matemática e Financeiro aprofundadas** nas 12 fases do Backend (`phases.js`).
      Não têm bloco próprio na Rotina diária (aparecem na aba "Fases (detalhe)", roadmap e
      progresso). Contagens preservadas (progresso por índice intacto). `math` é objetivizada,
      então usa minúsculo p/ não duplicar wrapper; `fin` não é objetivizada. Resultado:
      **28/28 itens math+fin com critério observável**, e a razão global de tópicos
      observáveis subiu de **298 para 311/324**. Verificado na aba "Fases (detalhe)" (F1
      Matemática e Financeiro); validate-content e validate-sequences verdes; sem erros.

## Extra — Trilha aws ✅

- [x] **AWS aprofundada** nas 12 fases do Backend (`phases.js`, objeto `{cert, exam, topics}`).
      Sem bloco na rotina (aparece em "Fases (detalhe)" e nos marcos de AWS). **25 tópicos**,
      contagens preservadas: **17 tarefas com critério observável** e 8 notas de sequenciamento
      (honestamente sem critério). Fases com prova (F3/F8/F9/F12) são objetivizadas → usei
      minúsculo para exibir limpo (**0 wrappers** "Demonstrar em AWS:"). Razão global de tópicos
      observáveis: **311 → 316/324**. Verificado F9 na aba "Fases (detalhe)"; validadores verdes.

## Decisões em aberto (ajusto se você pedir)

- ~~Quando a mesma trilha aparece em dois blocos do dia, cada bloco mostrava a lista
  completa.~~ **Resolvido na Entrega 2:** os itens são divididos entre os blocos
  (parte i/total), sem repetir.
- Escopo atual: sequência **Backend**. A sequência de **Arquitetura** (gerada em
  `architecture-plan.js`) fica de fora salvo pedido.
