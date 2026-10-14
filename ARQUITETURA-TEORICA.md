# Plano — Arquitetura com perfil teórico

> Pedido: "a trilha de Arquitetura precisa ser teórica na grande maioria".
> Diagnóstico medido antes de agir (ver abaixo) → decisão do usuário: **Ambas**
> (reforçar teoria na academia E reduzir a carga prática da sequência).

## Diagnóstico (medido)

- **Academia / trilha** (`arquitetura-advanced.js`, páginas `/trilhas/arquitetura/…`):
  29 módulos, **~84% do conteúdo é teórico** (objetivo, conceitos, internals,
  contraste, trade-offs, produção, riscos, checklist, entrevista, quiz) e ~16%
  prático (exercícios + desafio). **Já é majoritariamente teórica.**
- **Sequência de Arquitetura** (`sequences/arquitetura.js`, plano de 24 semanas):
  56 objetivos, **~66% práticos** (implementar, provisionar, medir, testar…).
  É o que dá a sensação de "trilha prática". Prática por design (labs no DevCore).

## Restrições (não quebrar)

- **Progresso da sequência é por `id`** (`track:arquitetura:slug:objId`). O *texto*
  do objetivo pode ser reescrito à vontade; o `id` **tem de ser preservado**.
- **Gates da sequência são frouxos**: `validate-sequences` exige apenas `id`+`text`
  não vazios, ids únicos/reversíveis, módulos/diagnóstico válidos. `validate-content`
  **não** mede verbo/critério da sequência (só de `phases.js` e dos módulos da academia).
- **Academia NÃO pode perder exercícios**: `validate-content` exige
  `exercises.length > 0` e `interview.length > 0` em cada módulo. Reforço da academia
  é por **enquadramento**, nunca removendo prática.
- Manter `academy.baseline` (string do header) é seguro; `arquiteturaTechnologyBaseline`
  (array) é o que o gate lê — esse não muda.

## Execução

- [x] **Sequência** — reescrever o texto dos objetivos hands-on (java, db, devops,
      sec, aws) e as `delivery`/`proof` de cada etapa para raciocínio/decisão
      (explicar, analisar, projetar no papel, especificar, justificar, comparar),
      mantendo todos os `id` e o "critério observável:". Núcleo `arquitetura` já é
      conceitual → preservado. Um artefato documental de portfólio por etapa (`pratica`).
- [x] **Academia** — deixar explícito no positioning (baseline/subtítulos) que é
      trilha conceitual: teoria e decisão primeiro, prática como verificação. Sem
      remover exercícios (gate).
- [x] **Verificação** — `validate-sequences` e `validate-content` verdes; conferir a
      rotina da sequência de Arquitetura no navegador (textos teóricos, sem quebra).
- [x] **Refinamento (rotina de estudo, não só de tarefa)** — cada objetivo passou a
      **nomear o tema/fundamento a estudar primeiro** (ex.: "Modelo C4 (Simon Brown):
      níveis Contexto e Container…", "ADR: estrutura contexto/decisão/consequências…",
      "STRIDE", "Saga", "Transactional outbox", "SLI/SLO e error budget", "Strangler
      fig"), seguido da ação teórica e do critério observável — no padrão que o
      Backend já usa. Assim a rotina diz O QUE estudar, não só o que produzir. Ids
      preservados; gates verdes; verificado no navegador (A1/A3), console limpo.
