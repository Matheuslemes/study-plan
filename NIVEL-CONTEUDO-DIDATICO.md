# Nível do conteúdo didático — estado atual

> Retrato do projeto **como ele está hoje** (medido em 21/09/2026). Este documento não guarda histórico de
> mudanças nem itens já concluídos: descreve o que existe, o quão fundo vai, e **onde ainda há lacunas**.
> Reanálise focada em profundidade didática e em caçar buracos que sobraram.
>
> **Escopo medido:** as 16 academias de `public/data/*-advanced.js`, os 117 títulos de
> `public/data/biblioteca.js`, os 179 arquivos de `public/examples/` e os dados de apoio
> (`track-guides.js`, `track-exercises.js`, `phases.js`, `tracks.js`).

---

## 1. Inventário (medido, não estimado)

| Métrica | Valor |
| --- | --- |
| Academias (trilhas com currículo próprio) | **16** (inclui a Faixa 0 — Fundamentos) |
| Módulos didáticos | **460** (inclui o **Módulo 0 nas 13 trilhas técnicas** — 4 módulos de ponte cada — e as novas **Fronteiras de Inglês e Financeiro**, +5 cada) |
| Exercícios | **1138** (+ **198** questões de quiz objetivo — Faixa 0 e os Módulos 0 das 13 trilhas técnicas) |
| Perguntas de entrevista com resposta esperada | **949** |
| Livros catalogados | **117** (115 PDFs no acervo + 2 referências online) — edições consolidadas; Core Java Vol. II catalogado |
| Arquivos de exemplo | **228** (~1260 KB) |
| — dos quais código/config | **165** (58 `.py`, 20 `.java`, 7 `.sql`, 74 `.mjs`, 3 `.yaml`, 1 `.tla`, 1 `.tf`, 1 `.hcl`) |
| — dos quais markdown (labs/roteiros) | **63** |

### Retrato por trilha

| Trilha | Módulos | Fronteira | answerKey | Código executável (exampleFile) | Observação |
| --- | --- | --- | --- | --- | --- |
| Fundamentos (Faixa 0) | 14 | — (é a base) | ✅ | 3 `.py` verificáveis | **nova**: o básico como conteúdo; único com **quiz objetivo** (42 questões) |
| Java | 30 (26 + **Módulo 0**) | ✅ | ✅ | **27/30 → `.java`** (20 distintos), compilados e verificados sob **JDK 26** | referência de cobertura; tem o **Módulo 0 de ponte** (piloto da Faixa 0 por trilha) |
| IA, ML e Dados | 41 (37 + **Módulo 0**) | ✅ | ✅ | **37/37 `implementation.code` inline** + 7 `.py` na Fronteira + `ia-zero.py` (Módulo 0) | tem o **Módulo 0 de ponte**; maior schema (36 campos) |
| Banco de Dados | 31 (27 + **Módulo 0**) | ✅ | ✅ | **13 `.sql` + 2 `.py` + `bancos-zero.mjs`** (Módulo 0, roda em `node:sqlite`) executáveis (+ 12 labs `.md`) | tem o **Módulo 0 de ponte**; SQL roda em PostgreSQL |
| Python | 30 (26 + **Módulo 0**) | ✅ | ✅ | **23 `.py`** executáveis (Módulo 0 + os **14** que trocaram o README por exemplo real) | ✅ sem placeholder: todo módulo tem exemplo próprio |
| Arquitetura | 29 (25 + **Módulo 0**) | ✅ | ✅ | **1 `.tla`** + `arquitetura-zero.mjs` (Módulo 0) + **13 `.mjs`** (níveis 1–4, rodam em Node) | ✅ sem placeholder: os 13 módulos sênior ganharam exemplo executável |
| AWS | 31 (27 + **Módulo 0**) | ✅ | ✅ | `aws-zero.mjs` (Módulo 0) + **8 `.mjs` sênior** (≥1 por parte: elasticidade, DynamoDB, SQS/DLQ, quota, DR, FinOps, multi-região, retry) | tem o **Módulo 0** e **executável em todas as 5 partes**; os demais módulos seguem com labs `.md` (console/CLI) |
| DevOps/SRE | 31 (27 + **Módulo 0**) | ✅ | ✅ | 2 `.yaml` + 1 `.tf` (config) + `devops-zero.mjs` (Módulo 0, roda em Node) | tem o **Módulo 0 de ponte** (1º artefato executável da base); resto labs `.md` |
| Frontend | 31 (27 + **Módulo 0**) | ✅ | ✅ | 3 `.mjs` executáveis (inclui `frontend-zero.mjs` do Módulo 0) | tem o **Módulo 0 de ponte**; resto labs `.md` |
| Segurança | 31 (27 + **Módulo 0**) | ✅ | ✅ | 2 `.mjs` (Fronteira) + `seguranca-zero.mjs` (Módulo 0) | tem o **Módulo 0 de ponte**; resto labs `.md` |
| DSA | 29 (25 + **Módulo 0**) | ✅ | ✅ | 6 `.py` (Fronteira + `dsa-zero.py` do Módulo 0) | tem o **Módulo 0 de ponte**; base tem `contrast` (bad/good) inline |
| Eng. Assistida por IA | 18 (14 + **Módulo 0**) | ✅ | ✅ | 5 `.py` + `aieng-zero.mjs` + **9 `.mjs` sênior** (níveis 1–4) | ✅ **todo módulo tem exemplo executável** |
| Git | 27 (23 + **Módulo 0**) | ✅ | ✅ | 5 `.py` (Fronteira) + `git-zero.mjs` + **18 `.mjs` sênior** (módulos 1–17 + escala) | ✅ **todo módulo tem exemplo executável** |
| Matemática | 30 (26 + **Módulo 0**) | ✅ | ✅ | 6 `.py` (Fronteira) + `matematica-zero.py` (Módulo 0) | tem o **Módulo 0 de ponte** (traz artefato executável à base) |
| Inglês Técnico | 21 (16 + **Fronteira**) | ✅ | ✅ | 0 (evidência = artefatos reais: RFC, incidente, talk, PR, mentoria) | ganhou **gabarito** e uma **Fronteira** de comunicação técnica de alto risco (design docs/RFC, incidente p/ liderança, palestra, open source, liderança) |
| Financeiro | 36 (31 + **Fronteira**) | ✅ | ✅ | **14 `.mjs`** (modelos versionados: orçamento, fluxo, dívida, reserva, juros, renda fixa, alocação, stress test + **Fronteira**: Markowitz, Monte Carlo da aposentadoria, FIRE, tributário, transferência de risco) | ganhou **gabarito**, **modelos executáveis** e a **Fronteira** (engenharia da decisão financeira, 5 módulos com modelo executável cada) |

> Leitura rápida: **todas as 16 academias têm gabarito** (`answerKey`) — Inglês e Financeiro foram os últimos a
> ganhar. A parte **Fronteira** (faixa 4) existe agora em **15 das 15** trilhas (Financeiro fechou a lista com
> a Fronteira de engenharia da decisão financeira). A cobertura de **código executável** melhorou — de total (Java, IA,
> Bancos, **Python e Arquitetura**, sem placeholder) a ainda em markdown (AWS/DevOps/Frontend/Segurança);
> Inglês segue sem artefato (é prática de idioma) e **Financeiro tem 14 modelos executáveis** (9 sênior + 5 na Fronteira).

---

## 2. O padrão que sustenta o nível

O núcleo é forte e incomum. Cada módulo das 13 trilhas técnicas segue um esqueleto de 23 campos
(`problema → conceitos → internals → useWhen/avoidWhen → contrast(bad/good) → tradeoffs → produção → riscos →
checklist → exercícios → entrevista → desafio → livro`), e a trilha de IA usa um schema ainda mais rico (36
campos, com `mathematics`, `hypothesis`, `complexity`, `implementation.code`). Esse padrão
`problema → mecanismo → trade-off → produção → risco → evidência` é o que faz o conteúdo sustentar entrevista
sênior de verdade — não é curso iniciante disfarçado.

Os campos auxiliares (`production`, `risks`, `checklist`, `avoidWhen`, `useWhen`, `tradeoffs`,
`prerequisites`, `summary`) são **autorais por módulo** nas 15 trilhas (nas quatro trilhas de fábrica — Git,
Matemática, Inglês, Financeiro — medidos como N/N distintos; nas demais, escritos à mão). Não há mais
"enchimento" de texto genérico.

**Onde o padrão é excelente:** a faixa de decisão (ADR, trade-off medido, revisão D30) — o que separa
"pleno" de "sênior". É o núcleo do projeto e é raro num plano de estudo autoral.

---

## 3. Cobertura de código executável — o eixo mais irregular

O padrão de texto é uniforme; o de **artefato executável** melhorou muito. Hoje há três regimes (o antigo
regime de "placeholder" foi eliminado):

1. **Cobertura total e verificável** — Java (26/26 `.java`, compilam e passam no `CompileSmoke` sob JDK 26),
   IA (37/37 com código inline + `ia-zero.py` no Módulo 0), Banco de Dados (13 `.sql` + 2 `.py` +
   `bancos-zero.mjs` sob `node:sqlite`), **Python** (todo módulo com `.py` próprio — os 14 placeholders viraram
   exemplos reais) e **Arquitetura** (Módulo 0 + 13 `.mjs` que rodam em Node, um por módulo sênior).
2. **Fronteira + base** — DSA, Matemática, Git e Eng. Assistida por IA concentravam os executáveis na
   Fronteira, mas **todas já têm exemplo executável na base** via Módulo 0 (`dsa-zero.py`,
   `matematica-zero.py`, `git-zero.mjs`, `aieng-zero.mjs`). Nenhuma trilha técnica fica mais "só na Fronteira".
3. **Markdown como artefato** — DevOps, Frontend, Segurança e parte da AWS entregam vários módulos com um
   **lab em markdown** (roteiro), não com código. Faz sentido para nuvem/infra, mas significa menos verificação
   automática. As exceções já cobrem bastante: 2 `.mjs` em Frontend e em Segurança, os executáveis dos Módulos 0
   (`devops-zero.mjs`, `aws-zero.mjs`, `seguranca-zero.mjs`) e, na **AWS, 8 `.mjs` sênior com pelo menos um por
   parte** (retry, quota, custo, failover, DR, elasticidade, DynamoDB, SQS/DLQ).

---

## 4. Lacunas abertas

### 4.1 🟢 Faixa 0 (o "básico"): Trilha 0 criada e "módulo 0" completo nas 13 trilhas técnicas

O módulo 1 das trilhas técnicas assumia base (Java pede compilar com `javac` e ler stack traces; Python começa
em modelo de dados e dunder; Arquitetura exige "ter mantido um sistema em produção"). Esse buraco está
**fechado**: a **Trilha 0 — Fundamentos de Computação** existe como academia própria e cada trilha técnica
ganhou seu **Módulo 0** de ponte.

- ✅ **como a máquina funciona** (binário, encoding, ponto flutuante, memória, processo/SO), **da URL à
  página** (DNS, HTTP, cliente/servidor), **lógica** (decompor, rastrear na mão, ler erros) e o
  **ferramental** — terminal, IDE, **debugger** (breakpoint/step/inspeção) e Git básico;
- ✅ **exercícios de resposta objetiva** — a Faixa 0 introduz um campo `quiz` (certo/errado) com **42
  questões**, o formato que faltava (todos os outros exercícios são de julgamento aberto);
- ✅ **3 exemplos executáveis verificáveis** (binário, encoding, ponto flutuante).

- ✅ **Módulo 0 nas 13 trilhas técnicas** (Java, Python, DSA, Frontend, Bancos, IA, Arquitetura, DevOps, AWS,
  Segurança, Matemática, Git e Eng. Assistida por IA) — a ponte da Trilha 0 para cada trilha: uma parte
  "Módulo 0" com 4 módulos (0.1–0.4), quiz objetivo e um exemplo verificado (`JavaZero.java` sob JDK 26;
  `python-zero.py`, `dsa-zero.py`, `ia-zero.py` e `matematica-zero.py` sob Pyodide; `frontend-zero.mjs`,
  `arquitetura-zero.mjs`, `devops-zero.mjs`, `aws-zero.mjs`, `seguranca-zero.mjs`, `git-zero.mjs` e
  `aieng-zero.mjs` sob Node; `bancos-zero.mjs` sob `node:sqlite`). Cada uma termina exatamente onde o módulo 1
  da trilha começa. Java cobre JVM/bytecode, tipos estáticos e stack
  traces; Python, interpretador e "tudo é objeto"/referências (int sem overflow); DSA, a intuição de
  crescimento, contar operações e recursão; Frontend, como o navegador monta a página, o JS essencial (== vs
  ===, number é double), o DOM e as DevTools; Bancos, por que um banco (vs arquivo), o modelo relacional
  (tabela = linhas × colunas, chaves), SQL essencial (SELECT/WHERE/CRUD/JOIN) e integridade/transação
  (PK/UNIQUE/FK, atomicidade); IA, o que é aprender com dados (IA/ML/DL/generativa), dados como tabela
  numérica, modelo/erro/treino (mínimos quadrados) e generalização/overfitting com a armadilha da acurácia;
  Arquitetura, o que é arquitetura (estrutura vs detalhe), acoplamento e coesão, módulos/interfaces/direção de
  dependência (grafo acíclico e núcleo estável) e trade-off/ADR; DevOps, o que é DevOps (cultura + automação),
  automação idempotente, pipeline/CI com gate (fail-fast) e as 4 métricas DORA; AWS, o que é a nuvem e a
  responsabilidade compartilhada, identidade e menor privilégio (IAM: default deny, Deny vence Allow), serviços
  essenciais (computar/guardar/conectar) e elasticidade/custo; Segurança, a mentalidade (CIA, superfície de
  ataque), entrada não confiável e injeção (parametrizar/codificar/allowlist), autenticação × autorização e
  criptografia básica; Matemática, a linguagem (variáveis, funções, notação), lógica e prova (implicação,
  contraexemplo), somatório/crescimento (Σ, forma fechada, ritmos) e vetores/probabilidade; Git, o que é
  controle de versão (snapshots), os três estados/commit limpo, branch/merge e o histórico como DAG (com
  `git-zero.mjs` reproduzindo o id do `git hash-object`) e o fluxo com remoto; Eng. Assistida por IA, o que
  muda com a IA no fluxo (amplificador, não oráculo), prompt/contexto e alucinação, verificar a saída com
  spec/testes e deps alucinadas, e responsabilidade/licença/segurança do código gerado.

**Estado:** a Faixa 0 está **completa** — Trilha 0 (base universal) + Módulo 0 em **todas as 13 trilhas
técnicas**, sem exceção. As únicas academias sem Módulo 0 são as **educacionais** (Inglês, Financeiro), que não
têm faixa de "construir por dentro", e a própria **Trilha 0** (que é a base). Extensão opcional: levar os
exercícios objetivos (`quiz`) à base das trilhas educacionais.

### 4.2 ✅ Python e Arquitetura: placeholders eliminados

**Resolvido.** Os **14 módulos de Python** e os **13 de Arquitetura** que apontavam para um `README.md`
genérico agora têm **um exemplo executável e autoverificado por módulo** (padrão do Java):

- **Arquitetura** — 13 `.mjs` que **rodam em Node** (verificados um a um): decisão × detalhe, fitness function
  de acoplamento, bounded contexts, agregado como invariante, idempotência de mensageria, CAP sob partição,
  hash consistente, circuit breaker, cache/Lei de Little, SLO/error budget, zero trust e lei de Conway.
- **Python** — 14 `.py` idiomáticos e Pyodide-safe (só stdlib): data model/dunder, estruturas idiomáticas,
  decorators/closures, OO idiomática, geradores/context managers, armadilhas pythônicas, SemVer/dependências,
  conceitos de teste, asyncio, paralelismo/GIL, vetorização, automação, pipeline de dados e observabilidade. A
  lógica de cada um foi conferida por porta para Node (não há Python nativo neste ambiente; a execução real é
  sob Pyodide, como no resto da trilha).

Os arquivos `README.md` genéricos deixaram de ser referenciados por qualquer módulo.

### 4.3 🟢 AWS: executável em todas as partes

Resolvido o essencial. Além do `aws-zero.mjs` (Módulo 0, avaliador de política IAM), a trilha ganhou **8
modelos executáveis sênior que rodam em Node**, cobrindo **pelo menos uma parte cada** (na verdade, todas as 5)
e os conceitos "simuláveis" canônicos:

- **fundamentos** — `elasticidade-autoscaling.mjs` (autoscaling por utilização-alvo);
- **plataforma** — `dynamo-particao.mjs` (partição quente) e `sqs-idempotencia-dlq.mjs` (at-least-once + DLQ);
- **confiabilidade** — `quota-throttling.mjs` (token bucket) e `dr-rto-rpo.mjs` (DR por RTO/RPO/custo);
- **arquitetura** — `finops-custo.mjs` (on-demand × reserved × spot, break-even, custo unitário);
- **fronteira** — `multi-regiao-failover.mjs` (failover + RPO) e `retry-backoff-jitter.mjs` (backoff + jitter,
  anti-thundering-herd).

Os demais módulos seguem com labs em markdown (console/CLI), o que é adequado à natureza operacional deles.

### 4.4 🟢 Inglês e Financeiro: gabarito, modelos e Fronteira nas duas

Resolvido o essencial:

- ✅ **gabarito** (`answerKey`) — **ambas** agora têm (Inglês 21 entradas, Financeiro 36); com isso **todas as
  16 academias** têm gabarito;
- ✅ para Financeiro, **14 planilhas/modelos versionados e executáveis** (`.mjs` que rodam em Node): 9 sênior —
  orçamento (50/30/20 e base-zero), fluxo de caixa, custo da dívida, quitação (avalanche × bola de neve), reserva de
  emergência, juros compostos, renda fixa líquida (pós-IR), alocação/rebalanceamento e stress test — mais 5 na
  **Fronteira** (ver abaixo);
- ✅ para Inglês, uma **Fronteira** (5 módulos, nível expert): design doc/RFC (linguagem normativa RFC 2119),
  comunicação de incidente para liderança (BLUF), palestra técnica, influência em open source e liderança/
  negociação em inglês — a faixa 4 desta trilha não é "construir por dentro", e sim comunicação técnica de alto
  risco e alcance, com evidência em artefatos reais (RFC, gravação, PR);
- ✅ para Financeiro, uma **Fronteira** (5 módulos, nível expert): "engenharia da decisão financeira" — otimização
  de portfólio (Markowitz/variância mínima), Monte Carlo da aposentadoria e taxa de retirada segura,
  independência financeira (FIRE) e taxa de poupança, planejamento tributário (IR regressivo × come-cotas) e
  transferência de risco de cauda (seguro), **cada módulo com um modelo executável verificado** (`.mjs`).

**O que ainda é opcional:** para Inglês, uma faixa de **avaliação objetiva** (gramática/colocação com resposta
certa, no formato `quiz`).

### 4.5 ✅ Cobertura de exemplo por módulo uniformizada

Resolvido. A base de todas as trilhas técnicas foi coberta pelo Módulo 0 e, agora, **os módulos sênior de Git
e Eng. Assistida por IA (níveis 1–4) ganharam um exemplo executável cada** — 18 `.mjs` em Git (modelo de
dados, staging, commits atômicos, reflog, refs, branches, merge/rebase, conflito, PR gate, plataformas,
hooks/CI, scan de segredos, bisect, branch protection, monorepo, contratos/SemVer, GitOps e escala) e 9 `.mjs`
em AIeng (amplificador/DORA, prompt/contexto, loop de agente, revisão por risco, teste-oráculo, débito, prompt
injection, DORA capabilities, adoção). Somados aos placeholders (§4.2) e ao AWS sênior (§4.3), **a cobertura
de código executável está uniforme**: todo módulo técnico de níveis 1–4 tem exemplo próprio (os labs em
markdown restam só onde são naturalmente operacionais — console/CLI de nuvem/infra).

### 4.6 ✅ Fiação dos dados de apoio completa

Resolvido. As academias de DSA e Eng. Assistida por IA agora têm a fiação que faltava:

- ✅ **`aieng` adicionado a `track-guides.js`** (guia com nome, pré-requisitos, objetivos e critérios);
- ✅ **`dsa` e `aieng` adicionados a `track-exercises.js`** (3 exercícios verificáveis cada).

Verificado: `guiaDaTrilha` e `exerciciosDaTrilha` resolvem para as duas, e **nenhuma trilha fica sem guia nem
sem exercícios** — as seções antes vazias no hub de DSA/AIeng agora renderizam.

### 4.7 🟢 CI único e ambiente reprodutível

Resolvido. Agora existe uma **porta de qualidade única**:

- **`scripts/verify-examples.mjs`** roda, de uma vez, todos os exemplos autoverificáveis e falha (exit 1) se
  qualquer um que foi executado não terminar com exit 0. É portável: executa os `.mjs` sempre (só Node), e os
  `.py`/`.java` quando o runtime existe — senão os pula com aviso (não é falha), e pula `.sql` (o SQL
  executável já é coberto por `bancos-zero.mjs` via `node:sqlite`). Nesta máquina: **74/74 `.mjs` ok, 20
  classes `.java` compiladas (--release 21) + `CompileSmoke`**; `.py` e `.sql` pulados por falta de runtime.
- **`.github/workflows/verify-examples.yml`** — CI que instala **Node + Python + JDK** e roda a suíte, de modo
  que na CI **nada é pulado**: os `.py` (Pyodide-safe, stdlib) e os `.java` rodam de fato.
- **`.devcontainer/devcontainer.json`** — ambiente reprodutível com os três runtimes.

A verificação deixou de ser artefato a artefato e virou um gate (`node scripts/verify-examples.mjs`).

### 4.8 🟢 Bibliografia — edições duplicadas consolidadas

O acervo está atualizado (DDIA 2ª ed, FoSA 2ª ed, SAA-C03, Effective TypeScript 2ª ed; React via react.dev) e
tudo está **consolidado na edição corrente**, catálogo e academias juntos:

- **Catálogo**: as fichas de 1ª edição de FoSA (n:17), DDIA (n:19) e Effective TypeScript (n:74) foram
  removidas e a DDIA cross-listada em Banco de Dados (n:47) passou à 2ª ed — de 119 para **116 fichas**;
  depois o **Core Java Vol. II** (antes um PDF órfão no acervo, referenciado por nenhuma ficha) foi catalogado
  e a ficha "Volumes I & II" separada em Vol. I e Vol. II — chegando a **117 fichas** (115 PDFs + 2 online),
  sem referências pendentes; a contagem na página é dinâmica (`biblioteca.length`).
- **Academias**: os livros `fundamentals` e `ddia` (Arquitetura), `ddia` (Bancos) e `effectiveTs` (Frontend)
  foram repontados para o PDF da 2ª ed (edição/ano corrigidos), e o link do livro-base no hub de Arquitetura
  também. Os **4 PDFs de 1ª edição órfãos foram removidos** do acervo; nenhuma ficha ou academia aponta para
  arquivo inexistente (verificado). Único PDF ainda fora do catálogo: o **manual de soluções** do Strang
  (suplemento do livro-texto, exclusão intencional).

**Único ponto restante (externo):** a FoSA 2ª ed no acervo é uma cópia **Early Release** (pode estar parcial —
já sinalizada com alerta visível na ficha n:116); trocar pela versão final depende de ela sair.

### 4.9 🟢 Higiene técnica — sitemap, código morto e acervo (varredura de set/2026)

Uma varredura cruzando dados × disco (páginas de parte, `exampleFile`, `answerKey`, PDFs, placeholders) veio
**limpa na estrutura** e apontou três lacunas de higiene, todas corrigidas:

- **`sitemap.xml` desatualizado** → regenerado. Tinha 81 URLs (`lastmod` 2026-07-29) e faltavam **49 páginas
  (~38%)**: as trilhas novas `aieng` e `dsa` inteiras, o hub `fundamentos` (Faixa 0) e partes, **todos os 13
  `base.html`** (Módulo 0), **todos os `fronteira.html`** e as partes de `treino`. Agora tem **130 URLs** e há
  um gerador reprodutível em `scripts/gen-sitemap.mjs` (raiz 1.0 · hub 0.8 · parte 0.7) para não desatualizar
  mais.
- **Código morto em `data/pdfs.js`** → removido. `pdfDocuments` (12 "plano em PDF por trilha" apontando para
  arquivos inexistentes) e a lista `bibliografia` (20 títulos) não eram importados em lugar nenhum (o catálogo
  vivo é o `biblioteca.js`). Mantido só o export usado (`bibliografiaNotas`).
- **Core Java Vol. II** → catalogado (ver §4.8).
- **`scripts/validate-content.mjs` defasado** → atualizado. O gate estava vermelho (397 apontamentos) porque
  suas constantes eram anteriores às trilhas novas (`dsa`, `aieng`, `fundamentos`): esperava 14 trilhas/14
  hubs/13 academias (hoje **17/17/16**) e a checagem de sequência (`number === index+1`) quebrava na numeração
  `0.x` do Módulo 0. Correções: constantes atualizadas; a sequência passou a validar módulos-ponte como `0.x` e
  os de competência como `1..N` estritos; a razão de "verbo mensurável" cobra só módulos de competência (o
  Módulo 0 é conceitual, avaliado por quiz) e o dicionário de verbos ganhou os que faltavam (defender, ler,
  distinguir, derivar, escalar, garantir, liderar…), **sem** admitir os vagos (entender, dominar, raciocinar);
  a Faixa 0 ganhou piso próprio de rubricas/critérios (3/4 em vez de 4/5). Resultado: **exit 0**, com
  394/408 (96,6%) dos objetivos de competência em verbo mensurável.

---

## 5. As cinco faixas (amplitude vertical)

Para "do básico ao avançado extremo" ser verificável, cada trilha precisaria cobrir cinco faixas. Onde o
projeto está hoje:

| Faixa | Pergunta que responde | Cobertura hoje |
| --- | --- | --- |
| **0 · Fundamento** | "O que é isso e por que existe?" | 🟢 Trilha 0 (Fundamentos) + Módulo 0 nas **13 trilhas técnicas** (todas, sem exceção) — §4.1 |
| **1 · Aplicação** | "Como uso corretamente?" | 🟢 forte |
| **2 · Produção** | "Como quebra e como opero?" | 🟢 forte |
| **3 · Domínio** | "Como decido e defendo?" | 🟢 forte — é o núcleo do projeto |
| **4 · Fronteira** | "Como é construído por dentro — e eu construo?" | 🟢 em **15 de 15** trilhas técnicas (Inglês tem uma Fronteira de comunicação e o Financeiro ganhou a de engenharia da decisão financeira) |

O projeto é excelente na faixa 3, forte na 1–2, oferece a 4 em 13 trilhas e agora tem a **faixa 0 completa**: a
Trilha 0 de Fundamentos como academia própria **mais o Módulo 0 de ponte em todas as 13 trilhas técnicas**. A
base, que era o maior buraco, está fechada; o que resta é secundário — tornar a faixa 4 uniforme em cobertura
de código (§4.2, §4.5).

> Ressalva honesta: fazer *todos* os labs de Fronteira de 15 áreas não forma um especialista em 15 coisas —
> forma alguém raso em muitas. A faixa 4 já **existe como material**; cabe ao estudante escolher 3–4 labs para
> de fato executar, pelo eixo de carreira. O material oferece a fronteira sem obrigá-la.

---

## 6. Prioridade de correção (só o que falta)

| # | Ação | Esforço | Impacto |
| --- | --- | --- | --- |
| 1 | **Faixa 0** — ✅ **concluída**: Trilha 0 (academia Fundamentos, 14 módulos, quiz objetivo, debugger) + **Módulo 0 nas 13 trilhas técnicas** (todas, 4 módulos + exemplo verificado cada) | — (feito) | 🔴→✅ |
| 2 | **Python e Arquitetura**: ✅ **concluído** — os 27 `README.md` placeholder viraram exemplo executável e autoverificado por módulo (13 `.mjs` em Arquitetura, 14 `.py` em Python) | — (feito) | 🔴→✅ |
| 3 | **Inglês e Financeiro**: ✅ **concluído** — `answerKey` nas duas (todas as 16 academias têm gabarito), 14 planilhas/modelos versionados executáveis no Financeiro e **Fronteira nas duas** (Inglês: comunicação técnica; Financeiro: engenharia da decisão financeira). Opcional: `quiz` objetivo em Inglês | — (feito) | 🟠→✅ |
| 4 | **Fiação**: ✅ **concluído** — `aieng` em `track-guides.js`; `dsa` e `aieng` em `track-exercises.js` (seções antes vazias no hub agora renderizam) | — (feito) | 🟠→✅ |
| 5 | **AWS**: ✅ **concluído** — 8 `.mjs` sênior com ≥1 executável por parte (retry, quota, custo, failover, DR, elasticidade, DynamoDB, SQS/DLQ), além do `aws-zero.mjs` do Módulo 0 | — (feito) | 🟠→✅ |
| 6 | **Cobertura de exemplo**: ✅ **concluído** — base coberta pelo Módulo 0 e todos os módulos sênior de Git (18) e AIeng (9) nos níveis 1–4 com exemplo executável próprio | — (feito) | 🟡→✅ |
| 7 | **CI + ambiente reprodutível**: ✅ **concluído** — `scripts/verify-examples.mjs` (gate único), workflow GitHub Actions (Node+Python+JDK) e devcontainer | — (feito) | 🟡→✅ |
| 8 | **Bibliografia**: ✅ edições duplicadas consolidadas (119→116 fichas) e Core Java Vol. II catalogado (→117). Resta só trocar a FoSA 2ª ed Early Release pela final — depende de release externo | — (parte acionável feita) | 🟡 Baixo |
| 9 | **Higiene técnica** (varredura set/2026): ✅ `sitemap.xml` regenerado (81→130 URLs) + gerador `scripts/gen-sitemap.mjs`; código morto removido de `data/pdfs.js`; Core Java Vol. II catalogado; **`validate-content.mjs` atualizado** para a estrutura atual (17 trilhas / 16 academias / Módulo 0), gate verde de novo | — (feito) | 🟡 Baixo |

**Retorno por hora:** os itens **1** (faixa 0), **2** (placeholders de Python/Arquitetura), **3** (paridade de
Inglês/Financeiro), **4** (fiação de `aieng`/`dsa`), **5** (executáveis no AWS sênior), **6** (cobertura de
exemplo em Git/AIeng), **7** (CI único) e a parte acionável do **8** (edições duplicadas consolidadas) estão
**concluídos**. Não resta nada acionável na lista — só trocar a FoSA 2ª ed Early Release pela final, que
depende de release externo.

---

## 7. Conclusão

O plano forma, no núcleo de 13 trilhas, **um sênior de 2026 que vai da aplicação à fronteira**: sabe usar,
operar, decidir *e* construir por dentro. Atualidade de versões, gabaritos, laboratórios de Fronteira e campos
autorais estão no lugar; as duas ausências de escopo que o mercado de 2026 cobra (algoritmos/ED e engenharia
assistida por IA) têm academia própria.

O que falta **não é profundidade técnica nem tópico de 2026**. É, em ordem:

1. ✅ **O chão** — a faixa 0, agora **completa**: a **Trilha 0 (Fundamentos)** (14 módulos, quiz objetivo,
   debugger) e o **Módulo 0 em todas as 13 trilhas técnicas** (Java, Python, DSA, Frontend, Bancos, IA,
   Arquitetura, DevOps, AWS, Segurança, Matemática, Git e Eng. Assistida por IA — 4 módulos de ponte + exemplo
   verificado cada). Nenhuma trilha técnica ficou de fora.
2. ✅ **Uniformidade de código executável** — os placeholders de Python/Arquitetura foram eliminados (cada
   módulo com exemplo próprio). Resta apenas estender executáveis aos módulos sênior de AWS (a base de todas as
   trilhas já está coberta pelo Módulo 0).
3. ✅ **Paridade de Inglês/Financeiro** — gabarito nas duas (todas as 16 academias têm), 14 modelos
   executáveis no Financeiro e **Fronteira nas duas** (Inglês: comunicação técnica de alto risco; Financeiro:
   engenharia da decisão financeira, com modelo executável por módulo); resta, opcional, uma faixa de quiz
   objetivo em Inglês.
4. **Acabamento** — ✅ fiação de dados de apoio (DSA/AIeng), ✅ executáveis no AWS sênior, ✅ CI único
   (gate + workflow + devcontainer) e ✅ bibliografia consolidada (só a edição corrente) feitos.

O teto foi alcançado e o **chão está construído**: a base (Trilha 0 + Módulo 0 em todas as 13 trilhas
técnicas) deixou de ser lacuna, os placeholders de código sumiram, as 16 academias têm gabarito, a AWS tem
executável em todas as partes, há um **gate único de verificação** e o catálogo está consolidado. Nada
acionável resta — só trocar a FoSA Early Release pela final quando ela sair (release externo).

---

## Fontes de verificação dos baselines (21/09/2026)

- **Java/Spring:** [Oracle Java SE Roadmap](https://www.oracle.com/java/technologies/java-se-support-roadmap.html) · [Spring Boot 4](https://spring.io/blog/2026/06/10/spring-boot-4-0-7-available-now/) · verificação executável sob **JDK 26** (`CompileSmoke -ea`).
- **Python/IA:** [What's New in Python 3.14](https://docs.python.org/3/whatsnew/3.14.html) · [PyPI torch](https://pypi.org/project/torch/) · [MCP](https://modelcontextprotocol.io/) · Pyodide 0.28.
- **Dados/infra:** [PostgreSQL 18](https://www.postgresql.org/about/news/postgresql-18-released-3142/) · [Valkey](https://valkey.io/topics/migration/) · [OpenTofu](https://opentofu.org/) · [Kubernetes patch releases](https://kubernetes.io/releases/patch-releases/).
- **Segurança/Frontend:** [OWASP Top 10:2025](https://owasp.org/Top10/2025/) · [NIST PQC](https://csrc.nist.gov/projects/post-quantum-cryptography) · [React 19.3](https://react.dev/) · [DORA 2025](https://dora.dev/dora-report-2025/).
- **Bibliografia:** [DDIA 2ª ed](https://martin.kleppmann.com/2026/03/24/designing-data-intensive-applications-2e.html) · [FoSA 2ª ed](https://www.oreilly.com/library/view/fundamentals-of-software/9781098175504/) · [AWS SAA-C03](https://aws.amazon.com/certification/certified-solutions-architect-associate/).
