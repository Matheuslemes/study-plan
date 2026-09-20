# Nível do Conteúdo Didático — Diagnóstico com Checagem Externa

> **Escopo:** as 13 academias de `public/data/*-advanced.js`, os 114 títulos de `public/data/biblioteca.js`
> e os exemplos de código de `public/examples/`.
> **Método:** inventário programático do conteúdo + verificação de cada tema contra fontes oficiais
> (release notes, specs, docs de fornecedor, relatórios de indústria).
> **Data da checagem externa:** 20/09/2026.
> **Ressalva:** versões de software mudam em semanas. Todo número aqui tem fonte datada no final.

---

## 1. O que existe hoje (medido, não estimado)

| Métrica | Valor |
| --- | --- |
| Academias (trilhas com currículo próprio) | 13 |
| Módulos didáticos | **272** |
| Exercícios | **648** |
| Perguntas de entrevista com resposta esperada | **550** |
| Livros catalogados | 114 (113 PDFs locais + 1 curso online) |
| Obras distintas de fato | **109** (ver §5.3) |
| Exemplos de código executável | 43 arquivos · ~44 KB · 8 trilhas |
| Rubrica de avaliação por trilha | 13/13 |

Isso é um volume grande e incomum. A questão não é quantidade — é **em que nível esse volume coloca quem
estuda** e **se ainda descreve a realidade de 2026**.

---

## 2. Veredito por trilha

Legenda de nível: **Jr** = júnior · **Pl** = pleno · **Sr** = sênior · **St** = staff/principal.
"Nível declarado" é o que os módulos afirmam; "nível entregue" é o que o texto, os exercícios e os
exemplos sustentam.

| Trilha | Módulos | Nível declarado | **Nível entregue** | Atualidade técnica |
| --- | --- | --- | --- | --- |
| **IA, ML e Dados** | 30 | Fundamental → Expert | **Pl → Sr forte** | 🟢 Versões conferidas e corretas · 🔴 sem MCP |
| **Java** | 20 | Base → Expert | **Sr real** | 🟠 Java 21 (LTS atual é 25) · 🔴 Spring 5/Boot 2 nos livros |
| **Arquitetura** | 18 | Base sênior → Expert | **Sr → St** | 🟢 Alinhada ao debate de 2026 · 🟠 livros 1ª ed. |
| **Segurança** | 20 | Fundação → Staff | **Sr → St** | 🟢 ASVS 5.0 + Top 10:2025 · 🟠 sem pós-quântica/IA |
| **DevOps/SRE** | 20 | Base → Staff | **Sr → St** | 🟢 DORA de 5 métricas · 🟠 sem OpenTofu |
| **Banco de Dados** | 20 | Base → Sr/Expert | **Sr** | 🟢 PostgreSQL 18 · 🟠 sem Valkey/pgvector |
| **AWS** | 20 | Fundação → Staff | **Sr → St** | 🟢 conteúdo · 🔴 livro de certificação 2 gerações atrás |
| **Python** | 20 | Base sênior → Expert | **Sr** | 🟠 3.12 (atual é 3.14) · 🔴 sem free-threading/ruff |
| **Frontend** | 20 | Fundação → Staff | **Pl → Sr** | 🟢 INP, WCAG 2.2, RSC · 🔴 livros de 2018–2020 |
| **Matemática** | 20 | Fundamentos → Produção | **Jr → Pl (adequado)** | 🟢 estável · 🟠 texto genérico |
| **Git** | 17 | Fundamentos → Produção | **Pl (conteúdo Sr mal servido)** | 🟢 estável · 🟠 texto genérico |
| **Inglês Técnico** | 16 | Fundamentos → Produção | **B1+ → B2/C1 produção** | 🟢 estável · 🟠 texto genérico |
| **Financeiro** | 31 | Fundamentos → Produção | **fora do eixo técnico** | 🟢 estável · 🟠 texto genérico |
| **Algoritmos e ED** | **0** | — | **inexistente** | 🔴 buraco estrutural |

### Resumo em uma frase

> O conteúdo está, no núcleo (9 trilhas, 210 módulos), **legitimamente em nível sênior** — bem acima do
> material de curso comum em português. O problema não é profundidade: é **defasagem de versão em 3
> trilhas**, **enchimento automático em 4 trilhas** e **duas ausências que o próprio mercado de 2026
> trata como obrigatórias** (engenharia assistida por IA e algoritmos).

---

## 3. Por que "sênior" se sustenta no núcleo

Não é auto-declaração. O padrão dos módulos das 9 trilhas principais tem 23 campos e inclui o que
separa material sênior de material introdutório:

- **`internals`** — mecanismo, não uso. Ex.: *"HashMap usa hash para localizar buckets e igualdade para
  resolver chaves; alterar campos participantes enquanto o objeto é chave torna a entrada inalcançável."*
- **`tradeoffs` e `avoidWhen`** — quando *não* usar, com custo explícito.
- **`production`** — um incidente concreto por módulo, não um exemplo de brinquedo.
- **`interview`** com dois níveis e **resposta esperada** — 550 no total.
- **`exercises`** em três faixas (Básico → Aplicado → Expert) com **evidência exigida** (ADR, teste
  vermelho, tabela hipótese × resultado).

O currículo de IA vai além: 36 campos por módulo, incluindo `mathematics`, `hypothesis`, `complexity`,
`wrongApproach` e `correctedApproach`. É o material mais forte do projeto.

**Calibração externa:** o relatório DORA 2025 e o próprio `MERCADO-DEV-2026.html` definem sênior de 2026
como quem "decide e consegue provar que a decisão se sustenta em produção". A estrutura
`decisão → trade-off → evidência → risco residual` dos módulos foi desenhada exatamente para isso. O
método está certo.

---

## 4. Checagem externa, tema a tema

### 4.1 Java — 🟠 defasagem de plataforma, 🔴 defasagem de framework

| Item | No plano | Realidade em 09/2026 |
| --- | --- | --- |
| LTS | Java 21 | **Java 25** (set/2025). Java 26 saiu em mar/2026; Java 27 chega agora |
| Certificação OCP | 1Z0-829/830 | **1Z0-830 continua a prova corrente** ✅ |
| Spring (livros) | Spring in Action 6ª ed (Boot 2.x, 2022) | **Spring Boot 4.1 / Framework 7.0** |
| Spring Security | 2ª ed (Security 6.x, 2024) | **Spring Security 7** |

**Leitura:** a base da *linguagem* está correta e a certificação-alvo continua válida — Java 21 é uma
escolha defensável para estudo. Mas o mercado migrou: JDK 21 sob licença permissiva termina em
**outubro de 2026**, e Spring Boot 3.5 já saiu do suporte aberto em **junho de 2026**. Os módulos 9–13
(JMM, Loom, JVM, GC, JFR/JMH) são genuinamente sênior/expert e envelhecem bem. O que envelheceu foi a
camada de framework, e ela vem inteira dos livros — que são de Boot 2.x. Um estudante que seguir
*Spring in Action 6ª ed* hoje aprende uma API que já tem duas gerações.

**Ausente e relevante:** Scoped Values e Module Import finalizados no 25; `JSpecify` e versionamento de
API REST nativo no Boot 4; migração Jackson 2 → 3.

### 4.2 IA — 🟢 o mais bem pesquisado, 🔴 falta o padrão da indústria

A tabela `iaTechnologyBaseline` foi **verificada item a item** e está correta para a data de pesquisa:

| Declarado (27/07/2026) | Verificado hoje |
| --- | --- |
| PyTorch 2.13 | ✅ 2.13.0 (08/07/2026) |
| scikit-learn 1.9 | ✅ 1.9.1 (10/09/2026) |
| Transformers 5.x | ✅ v5 lançada em 18/12/2025 (PyTorch-only, tokenização redesenhada) |
| MLflow 3.14 | ✅ correto na época; hoje 3.16.1 |

Isso é raro e merece registro: a trilha de IA é **tecnicamente honesta**, com `status` e `note` por
dependência ("zero-major: conferir changelog", "APIs mudam; pin obrigatório").

**A lacuna:** `grep` por MCP, A2A, LangGraph, vLLM, DSPy, context engineering, reasoning models,
test-time compute → **zero ocorrências**. O módulo 18 (Agentes de IA) tem um framing conceitual
excelente — política π(a|s), orçamento de passos, human-in-the-loop, RBAC por tool — mas é
deliberadamente agnóstico de protocolo. Em 2026 isso não é mais neutralidade: o **Model Context
Protocol** foi doado à Linux Foundation (Agentic AI Foundation) em dez/2025, tem ~97 milhões de
downloads mensais de SDK, 9.400+ servidores públicos e suporte nativo de Anthropic, OpenAI, Google e
Microsoft. É o equivalente a ensinar APIs sem mencionar HTTP.

### 4.3 Segurança — 🟢 na ponta

`ASVS 5.0.0` (mai/2025, 17 capítulos, ~350 requisitos) e `OWASP Top 10:2025` (final em jan/2026) são
**as versões correntes**. SLSA, SBOM, Trusted Types, CSP, SSRF e passkeys estão cobertos. Esta é a
trilha mais atualizada do projeto em relação aos seus próprios padrões de referência.

**Ausências:** criptografia pós-quântica (1 menção isolada) — ML-KEM/ML-DSA já são padrão NIST e a
migração é pauta de 2026; e segurança específica de IA/LLM (o OWASP Top 10 for LLM Apps aparece uma
vez, sem módulo próprio). O *Web Application Hacker's Handbook* (2011) é clássico mas descreve uma web
anterior a CSP, SameSite e passkeys.

### 4.4 DevOps/SRE — 🟢 métricas corretas, 🟠 tooling incompleto

O módulo 5 usa **as cinco métricas DORA atuais** — incluindo *Reliability* e *Failed deployment
recovery time* (nome novo do antigo MTTR). Isso é correto e a maior parte do material por aí ainda
ensina "as quatro métricas". Gateway API aparece no módulo 8, o que é atual.

**Ausências:** OpenTofu (fork do Terraform sob BSL; ~12% de adoção, GitLab depreciou templates
Terraform em 2025 por licenciamento) — o módulo 9 fala só de Terraform; o **DORA AI Capabilities
Model** de 2025 (sete capacidades que amplificam benefício de IA) e os sete arquétipos de time que
substituíram os quatro níveis de performance; eBPF/Cilium.

### 4.5 Banco de Dados — 🟢 base correta

`PostgreSQL 18` é a versão estável corrente (18.6). PG 19 está em beta 3 e chega agora — ou seja, o
baseline foi escolhido bem. MongoDB 8.x e Hibernate 7.x conferem.

**Ausências:** **Valkey** — o fork do Redis é hoje o padrão default no AWS ElastiCache e no Google
Memorystore, com Valkey 9 GA em out/2025; a trilha ensina "Redis 8.x" sem mencionar a bifurcação de
licença nem o fork. E **pgvector**: a trilha de IA cobre busca vetorial (HNSW, FAISS, pgvector), mas a
trilha de banco não conecta — é a integração mais comum de 2026 e cai entre as duas cadeiras.

### 4.6 Frontend — 🟢 conteúdo atual, 🔴 bibliografia antiga

O conteúdo está certo: INP (10 menções), WCAG 2.2, Core Web Vitals, Container Queries, e o módulo 10
cobre **Server e Client Components, streaming e revalidation** — isto é, o modelo React 19 / Next.js
App Router. Ancorado em `react.dev`, `nextjs.org` e MDN, o que o mantém vivo por referência.

**O descompasso é bibliográfico:** *Learning React* 2ª ed (2020, React 16/17), *JavaScript: The
Definitive Guide* 7ª ed (2020), *Eloquent JavaScript* 3ª ed (2018), *Effective TypeScript* 1ª ed
(2019). Hoje: **React 19.3** (09/09/2026, com View Transitions estável) e **Next.js 16.3**. Nenhum
desses livros descreve Server Components, Actions ou `use()`. O currículo está à frente dos próprios
livros.

### 4.7 AWS — 🟢 conteúdo, 🔴 livro de certificação

O conteúdo dos 20 módulos é sólido e vendor-realista (ECS/EKS/Fargate/Lambda por custo total, quotas,
Well-Architected). O livro de certificação, porém, é **SAA-C02 (2021)**; a prova corrente na página
oficial da AWS é **SAA-C03**. Duas gerações de defasagem no único livro de prova da trilha.

**Ausência:** nada de Bedrock, SageMaker ou serviços de IA gerenciados — em uma trilha de 2026 com
uma academia de IA ao lado.

### 4.8 Arquitetura — 🟢 alinhada ao debate corrente

O módulo 8 (monólito modular × microsserviços) e o 15 (strangler fig, arquitetura evolutiva) batem com
o consenso de 2026: cerca de 42% das organizações que adotaram microsserviços estão reconsolidando, e
o modular monolith com fronteiras impostas por CI virou o default sensato. O plano já ensina isso —
não caiu na moda de microsserviços por padrão. Bom sinal.

**Ausências:** Spring Modulith (a ferramenta concreta para modular monolith em Java); event sourcing e
CQRS (1 menção); agentes de IA como componente arquitetural de primeira classe — o item genuinamente
novo de 2026.

**Bibliografia:** *Fundamentals of Software Architecture* 2ª ed saiu em set/2025 com cinco capítulos
novos (incluindo IA generativa e Team Topologies) — a biblioteca tem a 1ª ed (2020). E **DDIA 2ª ed
(Kleppmann & Riccomini, mar/2026)** — a biblioteca tem a de 2017. DDIA é a espinha dorsal da fase 8 em
*duas* trilhas.

### 4.9 Python — 🟠 conservador demais

Baseline `3.12+` quando o estável é **3.14.7** e o 3.15 sai em outubro. Ser conservador é defensável,
mas isso custa dois assuntos que mudam a resposta de entrevista:

- **Free-threaded CPython** (PEP 703/779): oficialmente suportado desde o 3.14. O módulo 11 ensina o
  GIL como fato absoluto — *"o GIL permite que apenas uma thread execute bytecode Python por vez"* —
  sem uma linha sobre a build sem GIL. Hoje isso é uma resposta incompleta.
- **ruff**: zero menções. Virou o linter/formatter padrão de fato; o material fala de mypy (27x, bom)
  mas não do resto do toolchain moderno. `uv` aparece 2x.

---

## 5. Três problemas estruturais

### 5.1 🔴 Duas velocidades de qualidade didática

Medi quantos textos são **únicos por módulo** versus **idênticos em todos os módulos da trilha**:

| Trilha | `production` | `risks` | `checklist` | `avoidWhen` | `prerequisites` | `tradeoffs` |
| --- | --- | --- | --- | --- | --- | --- |
| java, python, ia, arquitetura, bancos, devops, aws, frontend, sec | 20/20 | 20/20 | 20/20 | 20/20 | 20/20 | 20/20 |
| **git** | **1/17** | **1/17** | **1/17** | **1/17** | **1/17** | **1/17** |
| **matematica** | **1/20** | **1/20** | **1/20** | **1/20** | **1/20** | **1/20** |
| **ingles** | **1/16** | **1/16** | **1/16** | **1/16** | **1/16** | **1/16** |
| **financeiro** | **1/31** | **1/31** | **1/31** | **1/31** | **1/31** | **1/31** |

`1/N` significa: **o mesmo parágrafo em todos os módulos da trilha.** Em 84 módulos (31% do total),
seis dos oito campos didáticos são preenchidos por `academy-data-factory.js` com texto genérico:

> `production`: "A entrega deve incluir resultado, limite conhecido, risco residual e procedimento de verificação."
> `avoidWhen`: "Não use uma técnica por hábito sem comparar restrições e alternativas."
> `risks`: "Confundir conclusão de leitura com domínio."

Além disso, **84/84** `useWhen` e **84/84** `summary` são gerados por substituição do título, e 25
objetivos viram frases como:

> *"Aplicar explorar os internals do git com comandos plumbing (cat-file, hash-object, update-ref) e
> explicar como packfiles e a compressão delta armazenam o histórico. em um cenário verificável e
> justificar a decisão com evidência."*

(note o ponto duplo — é concatenação de template com o título)

**O que salva:** `problem`, `concepts`, `exercises` e `interview` **são autorais em 100% dos módulos**,
inclusive nas 4 trilhas. O esqueleto é real; o recheio é que é automático.

**Por que importa:** a trilha de Git tem tópicos de nível sênior — plumbing, packfiles, GitOps,
proveniência de supply chain, monorepo × multirepo. O conteúdo *merece* o tratamento das outras nove.
Hoje ele é servido com o mesmo parágrafo genérico 17 vezes.

### 5.2 🟠 Exemplos de código rasos nos módulos mais avançados

43 arquivos, ~44 KB, para 272 módulos. Em Java (a trilha principal), os 20 módulos mapeiam para 8
arquivos — e **7 módulos apontam para `README.md`, não para código**:

| Módulo | Tema | Artefato |
| --- | --- | --- |
| 11 | JVM: class loading, bytecode, JIT | `README.md` |
| 12 | Garbage Collection e tuning | `README.md` |
| 13 | JMH, JFR/JMC, jcmd, dumps | `README.md` |
| 17 | Persistência, transações, locking | `README.md` |
| 18 | Distribuídos, mensageria, resiliência | `README.md` |
| 19 | Segurança, observabilidade, operação | `README.md` |
| 20 | DDD, hexagonal, microsserviços | `README.md` |

São exatamente os módulos **Sênior → Expert**. O texto promete "diagnóstico orientado por evidência" e
"provar correção concorrente", mas o artefato executável para isso não existe. 598 linhas de Java no
total.

### 5.3 🟠 Quatro livros "fantasma" na biblioteca

Dos 113 PDFs locais, todos existem em disco (0 arquivos faltando ✅), mas **4 títulos apontam para o
arquivo de outro livro**:

| Título catalogado | PDF que abre de verdade |
| --- | --- |
| System Design Interview — **Volume 2** | `system-design-interview-volume-1.pdf` |
| JavaScript: The Definitive Guide (7ª ed) | *Eloquent JavaScript, 3rd Edition* |
| Linear Algebra Done Right (Axler) | *Introduction to Linear Algebra* (Strang) |
| OWASP Testing Guide 3.0 | `OWASP_ASVS_5.0.0_en.pdf` |

A biblioteca real tem **109 obras distintas**, não 113.

---

## 6. As duas ausências que o mercado de 2026 cobra

### 6.1 🔴 Algoritmos e Estruturas de Dados

- Trilha ativa na rotina: **3x/semana · 40 min**
- Academia: **não existe** (só um guia de 12 linhas com critérios)
- Livros na biblioteca: **zero** — nenhum Cormen, Skiena, Sedgewick, Grokking ou *Cracking the Coding
  Interview* entre os 114 títulos
- Exercícios didáticos: **zero**. O roteiro em `phases.js` define **meta de volume** — 60 problemas por
  fase, ~660 em 36 meses, com foco declarado (árvores na F3, grafos na F4, DP na F6) — mas não há lista
  de problemas, taxonomia de padrões, solução comentada nem progressão. É uma cota, não um currículo.

O plano tem *System Design Interview* Vol. 1 e 2 para a metade de design da entrevista sênior, e nada
para a metade de algoritmos. É a assimetria mais clara do projeto: 272 módulos didáticos e nenhum para
a trilha que o próprio cronograma executa três vezes por semana durante 36 meses.

### 6.2 🔴 Engenharia assistida por IA como prática

`grep` por Copilot, Cursor, Claude Code, "código gerado por IA", "assistido por IA" em
`public/data/*.js` → **zero ocorrências**. Uma menção solta a Copilot em `public/trilhas/git.html`.

Isso contradiz diretamente o documento de mercado do próprio projeto
(`MERCADO-DEV-2026.html`), que define o pleno de 2026 como quem tem "fluxo com agentes sem dependência
cega" e o sênior como quem faz "revisão como gargalo assumido", "especificação executável" e "evals,
golden datasets e regressão de prompt". E é reforçado pelo DORA 2025, cuja tese central é que a IA
**amplifica** — para o bem ou para o mal — a capacidade organizacional existente.

O currículo ensina a fazer engenharia sênior. Não ensina a fazer engenharia sênior **no ambiente onde
essa engenharia acontece em 2026**. A trilha de IA ensina a *construir* sistemas de IA; não existe
nada sobre *trabalhar com* IA como ferramenta de engenharia.

---

## 7. Prioridade de correção

| # | Ação | Esforço | Impacto |
| --- | --- | --- | --- |
| 1 | **Criar a academia de DSA** (20 módulos no padrão de 23 campos) + adicionar 2–3 livros | Alto | 🔴 Crítico |
| 2 | **Módulo/eixo transversal de engenharia assistida por IA** (spec executável, revisão de código gerado, evals, limites do agente) | Médio | 🔴 Crítico |
| 3 | **MCP no módulo 18 de IA** + um exercício de servidor MCP | Baixo | 🔴 Alto |
| 4 | **Reescrever os 6 campos genéricos** das 4 trilhas Tier B (84 módulos) | Alto | 🟠 Alto |
| 5 | Atualizar bibliografia: **DDIA 2ª ed**, **FoSA 2ª ed**, SAA-C03, React/TS recentes | Baixo (compra/troca) | 🟠 Alto |
| 6 | **Camada Spring Boot 4 / Framework 7** na trilha Java (independente do livro) | Médio | 🟠 Alto |
| 7 | Free-threading + ruff na trilha Python; subir baseline para 3.13/3.14 | Baixo | 🟠 Médio |
| 8 | Código executável para os 7 módulos Java 11–13, 17–20 | Alto | 🟠 Médio |
| 9 | Valkey + pgvector na trilha de bancos; OpenTofu no DevOps | Baixo | 🟡 Médio |
| 10 | Corrigir os 4 `path` de livros fantasma em `biblioteca.js` | Trivial | 🟡 Baixo |
| 11 | Pós-quântica e segurança de LLM na trilha sec | Baixo | 🟡 Médio |

**Os itens 1, 2, 3 e 10 dão o maior retorno por hora investida.** O item 10 leva minutos.

---

## 8. O que falta para ir do básico ao avançado extremo

As seções anteriores mediram *atualidade* e *qualidade*. Esta mede **amplitude vertical**: o quanto o
currículo cobre da faixa completa de uma área, do zero absoluto até a fronteira técnica.

### 8.1 Onde a curva realmente começa e termina

Extraí o pré-requisito do módulo 1 e o teto do último módulo de cada academia:

| Trilha | Entrada real (pré-requisito do módulo 1) | Teto (último módulo) | Faixa coberta |
| --- | --- | --- | --- |
| Java | "Sintaxe básica · compilação com javac" | DDD, hexagonal, microsserviços | Pl → Sr/Expert |
| Python | "Python básico · classes · tracebacks" | Produção e observabilidade | Pl → Sr/Expert |
| Arquitetura | **"Um sistema completo mantido em produção"** | Team Topologies e governança | Sr → Expert |
| Banco de Dados | "Entidades · SQL DDL básico" | Observabilidade e incidentes | Pl → Sr/Expert |
| DevOps/SRE | "Git · noção de deploy · um serviço" | Sistema sociotécnico | Pl → Staff |
| AWS | "Linux e redes · virtualização · conta sandbox" | Migração e liderança | Pl → Staff |
| Frontend | "Sintaxe HTML · árvore de elementos" | Arquitetura e liderança | Jr/Pl → Staff |
| Segurança | "Arquitetura básica · fluxo de negócio · CIA" | Programa AppSec e métricas | Pl → Staff |
| IA | "Programação básica · nenhuma matemática avançada" | Liderança técnica em IA | **Jr → Expert** |
| Matemática | (genérico) | Matemática do self-attention | Jr → Pl |
| Git | (genérico) | GitOps auditável | Jr → Sr |

**A leitura:** o currículo cobre bem a faixa do **meio** — mais ou menos de "pleno inicial" a
"sênior/staff". As duas pontas são fracas por motivos opostos: **a base é assumida como pré-requisito**
e **a fronteira nunca é alcançada**. A única trilha que cobre a curva quase inteira é IA, que
explicitamente parte de "nenhum domínio prévio de cálculo, álgebra linear, estatística ou Python
científico" e chega a KV cache, MoE e scaling laws.

---

### 8.2 A ponta de baixo: o "básico" é pré-requisito, não conteúdo

Nenhuma academia ensina do zero. Alguns exemplos literais:

- **Java**, módulo 1, nível "Base avançada" — já pede saber compilar com `javac` e ler stack traces.
- **Python**, módulo 1, nível "**Base sênior**" — começa em modelo de dados e métodos dunder.
- **Arquitetura** — exige "ter construído e mantido pelo menos um sistema completo em produção".

O único lugar com conteúdo básico é o roteiro de fases (`phases.js`), e ali ele aparece como **meta**,
não como aula:

> *"Implementar em código: Java 21 core: tipos, OO, herança, polimorfismo, interfaces, collections,
> exceptions, generics, records e streams — critério observável: entregar código compilável…"*

Isso é um objetivo de aprendizagem. Não explica nada. Quem não sabe herança não aprende ali.

**O que falta para o curso ter um "básico" de verdade:**

| Lacuna | O que seria |
| --- | --- |
| **Trilha 0 — fundamentos de computação** | Como funciona memória, processo, sistema de arquivos, rede; o que acontece entre digitar uma URL e a página aparecer; binário, encoding, ponto flutuante |
| **Lógica e resolução de problemas** | Antes de qualquer linguagem: decompor problema, rastrear execução na mão, ler mensagem de erro |
| **Ferramental** | Terminal e Linux do zero, IDE, **debugger** (não aparece em nenhum módulo), build (Maven/Gradle, pip/uv) |
| **"Módulo 0" por trilha** | 3–5 módulos antes do atual #1 em cada academia, no mesmo padrão de 23 campos |
| **Exercícios de correção objetiva** | Os 648 exercícios atuais pedem julgamento aberto (ADR, trade-off, evidência). Na faixa básica é preciso ter resposta certa e errada |

---

### 8.3 A ponta de cima, trilha a trilha

Cada linha abaixo foi verificada por busca no conteúdo. "0" significa zero ocorrências em toda a trilha.

#### Java — teto: DDD e microsserviços

> **Atualizado em 20/09/2026 — esta lacuna foi fechada.** A trilha Java ganhou a parte **Fronteira**
> (módulos 21–26) cobrindo bytecode e agents, JIT/escape analysis, VarHandle e false sharing, AOT/Native
> Image/CRaC, FFM e leitura do OpenJDK — mais `javaTechnologyBaseline` (Java 25, Spring Boot 4.1) e
> `javaAnswerKey`. A tabela abaixo é o diagnóstico original, mantido como registro.

Já tem: ZGC e Shenandoah citados, manipulação de bytecode (3), *flame graphs* (2), JMM, Loom, JMH/JFR.

| Falta para o extremo | Hoje |
| --- | --- |
| GraalVM e Native Image (AOT, closed-world, config de reflexão) | **0** |
| Project Panama / FFM API (finalizado no JDK 22) | **0** |
| Project Valhalla (value types) e Vector API | **0** |
| Project Leyden e CRaC (startup e snapshot) | **0** |
| `VarHandle`, memory barriers, *false sharing*, `@Contended` | **0** |
| Escape analysis, inlining, desotimização do JIT, JVMCI | **0** |
| Escrever um *java agent* e instrumentar bytecode em runtime | **0** |
| Estruturas lock-free / wait-free | **0** |
| Ler código-fonte do OpenJDK (`HashMap`, `ConcurrentHashMap`, `ForkJoinPool`) | **0** |

#### Python — teto: produção e observabilidade

> **Atualizado em 20/09/2026 — esta lacuna foi fechada.** A trilha Python ganhou a parte
> **Fronteira** (módulos 21–26) cobrindo objetos/refcount/bytecode, descritores e metaclasses,
> free-threading e JIT, extensões nativas, wheels e ABI, e leitura do CPython — mais
> `pythonTechnologyBaseline` (3.14, PEP 779, uv, ruff), `pythonAnswerKey` e os primeiros exemplos
> executáveis da trilha. O módulo 11 foi corrigido: a resposta sobre o GIL passou a declarar a build.
> A tabela abaixo é o diagnóstico original, mantido como registro.

Já tem: CPython citado (6), `dis`/bytecode (3), wheels (2), GIL, asyncio, NumPy.

| Falta para o extremo | Hoje |
| --- | --- |
| Internals do interpretador: loop `ceval`, `PyObject`, *reference counting*, arenas | **0** |
| Extensões nativas: C API, **Cython**, **PyO3/Rust**, `cffi` | **0** |
| Metaclasses, protocolo de descritores, `__slots__` e layout de memória | **0** |
| Free-threading (PEP 703/779) e o JIT copy-and-patch do 3.13+ | **0** |
| Publicar wheel binária multiplataforma (manylinux, cibuildwheel) | parcial |
| Escrever uma biblioteca/framework do zero com API pública versionada | **0** |

#### Banco de dados — teto: observabilidade e incidentes

> **Atualizado em 20/09/2026 — esta lacuna foi fechada.** A trilha ganhou a parte **Fronteira**
> (módulos 21–27): storage engine com WAL, internals do otimizador, colunar e lakehouse, commit
> distribuído e consenso, CRDTs, busca vetorial com pgvector e leitura do código do PostgreSQL — mais
> `bancosTechnologyBaseline` (que trata a bifurcação Redis/Valkey), `bancosAnswerKey` e sete artefatos
> novos, quatro deles executados contra um PostgreSQL 18.6 real. O módulo 14 passou a tratar Valkey.
> A tabela abaixo é o diagnóstico original, mantido como registro.

Já tem: B-tree e LSM (5), WAL, MVCC, planner, EXPLAIN, particionamento.

| Falta para o extremo | Hoje |
| --- | --- |
| **Implementar** um storage engine (B-tree ou LSM) e um WAL | **0** |
| Consenso: Raft ou Paxos implementado | **0** |
| Commit distribuído: 2PC, 3PC, Calvin, TrueTime/Spanner | **0** |
| Armazenamento colunar e execução vetorizada (Parquet, Arrow, DuckDB) | **0** |
| Internals do otimizador: cardinalidade, *join ordering*, modelo de custo | 1 |
| Escrever uma extensão PostgreSQL em C; ler o código do Postgres | **0** |
| CRDTs e replicação sem coordenação | **0** |

#### Arquitetura — teto: Team Topologies e governança

> **Atualizado em 20/09/2026 — esta lacuna foi fechada.** A trilha Arquitetura ganhou a parte
> **Fronteira** (módulos 19–25): event sourcing e CQRS, especificação formal em TLA+/Alloy, simulação
> determinística, chaos engineering, células e shuffle sharding, papers fundadores e agentes de IA como
> componente arquitetural — mais `arquiteturaTechnologyBaseline` (que declara DDIA 2ª ed e FoSA 2ª ed),
> `arquiteturaAnswerKey` e sete artefatos novos, incluindo uma especificação TLA+ e o cálculo de raio de
> impacto. A tabela abaixo é o diagnóstico original, mantido como registro.

É a trilha com o teto mais bem construído: consenso aparece 17 vezes, relógios lógicos 2.

| Falta para o extremo | Hoje |
| --- | --- |
| Métodos formais: TLA+, Alloy, especificar e verificar um protocolo | **0** |
| *Deterministic simulation testing* (estilo FoundationDB/Antithesis) | **0** |
| Chaos engineering como disciplina formal (hipótese, blast radius, automação) | **0** |
| Event sourcing e CQRS como módulo próprio | 1 menção |
| *Cell-based architecture* e *shuffle sharding* | **0** |
| Leitura dirigida dos papers fundadores (Dynamo, Spanner, Raft, Kafka, Borg) | **0** |

#### DevOps/SRE — teto: sistema sociotécnico

> **Atualizado em 20/09/2026 — esta lacuna foi fechada.** A trilha ganhou a parte **Fronteira**
> (módulos 21–27): escrever um operator, eBPF, Envoy e xDS, kernel e latência, plataforma como produto,
> OpenTofu e leitura do código do Kubernetes — mais `devopsTechnologyBaseline`, `devopsAnswerKey` e oito
> artefatos novos, três deles validados em ferramentas reais (Kubernetes 1.31, OpenTofu 1.10.6, Envoy 1.31).
> Os módulos 5 e 9 foram corrigidos: DORA com rework rate, arquétipos e modelo de IA; Terraform com o
> eixo de licença e OpenTofu. A tabela abaixo é o diagnóstico original, mantido como registro.

Já tem: cgroups, namespaces e OCI (16), builds herméticos com Bazel/Nix (5), DORA de 5 métricas.

| Falta para o extremo | Hoje |
| --- | --- |
| Escrever um **operator** Kubernetes (CRD + reconciliation + controller-runtime) | **0** |
| **eBPF**: observabilidade e rede no kernel (Cilium, Pixie) | **0** |
| Service mesh por dentro: Envoy, xDS, mTLS, políticas | **0** |
| Tuning de kernel, `perf`, análise de latência abaixo do runtime | **0** |
| Construir uma plataforma interna (IDP) ponta a ponta como projeto | parcial |
| Escrever um provider/módulo Terraform publicado | **0** |

#### AWS — teto: migração e liderança

> **Atualizado em 20/09/2026 — esta lacuna foi fechada.** A trilha ganhou a parte **Fronteira**
> (módulos 21–27): Nitro e Firecracker, estabilidade estática e células, multi-região com failover
> medido, quotas e amplificação de retry, constructs CDK, IA gerenciada (Bedrock/SageMaker — que não
> apareciam em lugar nenhum) e leitura dirigida da Builders’ Library — mais `awsTechnologyBaseline`,
> `awsAnswerKey` e sete artefatos novos. Registro: a defasagem SAA-C02 → SAA-C03 **já estava declarada**
> na ficha do livro; não era erro, era limite editorial assumido. A tabela abaixo é o diagnóstico
> original, mantido como registro.

| Falta para o extremo | Hoje |
| --- | --- |
| Multi-região ativo-ativo com consistência e failover testado | parcial |
| *Cell-based architecture* e *shuffle sharding* (o padrão da própria AWS) | **0** |
| Nitro, Firecracker e o modelo de isolamento por baixo dos serviços | **0** |
| Escrever constructs CDK e providers próprios, publicados | **0** |
| Amazon Builders' Library e os papers da AWS como leitura dirigida | **0** |
| Bedrock, SageMaker e a camada de IA gerenciada | **0** |

#### Frontend — teto: arquitetura, migração e liderança

> **Atualizado em 20/09/2026 — esta lacuna foi fechada.** Era a trilha com a maior distância até o
> extremo; ganhou a parte **Fronteira** (módulos 21–27): pipeline de renderização do navegador, React
> por dentro (fiber, lanes, scheduler), reatividade do zero, compiladores e AST, WebAssembly/workers/GPU,
> offline-first e front em escala — mais `frontendTechnologyBaseline` (React 19.3, React Compiler 1.0,
> WebGPU em Baseline) e `frontendAnswerKey`. Dois artefatos são JavaScript executável verificado. O
> baseline declara explicitamente que os livros do acervo antecedem Server Components e o compilador.
> A tabela abaixo é o diagnóstico original, mantido como registro.

Esta é a trilha com a **maior distância até o extremo**. O conteúdo é atual, mas para no nível de
aplicação: ensina a usar a plataforma, não a entender ou construir a plataforma.

| Falta para o extremo | Hoje |
| --- | --- |
| Internals do browser: parsing, style resolution, layout, paint, compositing | **0** |
| React por dentro: fiber, lanes, scheduler, reconciliação concorrente | **0** |
| Escrever um framework reativo (ou um renderer) do zero | **0** |
| Compiladores de front: React Compiler, plugins Babel/SWC, AST | **0** |
| **WebAssembly** e interoperabilidade com Rust/C | **0** |
| WebGPU/WebGL e renderização acelerada | **0** |
| HTTP/3 e QUIC | **0** |
| Colaboração offline-first e CRDTs | **0** |
| Micro-frontends e federação de módulos em escala | **0** |

#### Segurança — teto: programa AppSec e governança

> **Atualizado em 20/09/2026 — esta lacuna foi fechada.** A trilha ganhou a parte **Fronteira**
> (módulos 21–27): exploração de binário e o custo real das mitigações, engenharia reversa e análise
> de binário, fuzzing guiado por cobertura por dentro, criptografia por dentro e migração pós-quântica,
> verificação formal de protocolos, canais laterais e execução transiente, e segurança de sistemas de
> IA — mais `secTechnologyBaseline` (12 linhas, incl. PQC final do NIST, roteiro de memory safety de
> jan/2026, VMScape e a CRA em vigor desde 11/set/2026), `secAnswerKey` e sete artefatos novos. Dois são
> executáveis verificados: `fuzzer.mjs` (mutação cega falha em 200 mil execuções; guiado por cobertura
> acha em ~1 mil e minimiza para 5 bytes) e `pos-quantico.mjs` (ML-KEM-768 e ML-DSA-65 reais via
> OpenSSL 3.5, com os tamanhos medidos e o handshake híbrido derivado). A tabela abaixo é o diagnóstico
> original, mantido como registro.

Já tem: fuzzing (7), noções de exploit (3), seccomp/AppArmor (5), ASVS 5.0 completo.

| Falta para o extremo | Hoje |
| --- | --- |
| *Exploit development* real: heap grooming, ROP, contorno de mitigações | 3 menções |
| Engenharia reversa e análise de binário | **0** |
| Ataques de canal lateral e *timing* | **0** |
| Verificação formal de protocolos (ProVerif, Tamarin) | **0** |
| Escrever um harness de fuzzing *coverage-guided* (AFL++, libFuzzer) | parcial |
| Criptografia implementada e criptoanálise prática | parcial |
| Criptografia pós-quântica (ML-KEM/ML-DSA) e plano de migração | 1 |

#### IA — teto: liderança técnica (o teto mais alto do projeto)

Já cobre, e bem: KV cache, *continuous batching*, *speculative decoding*, fusão de kernels, paralelismo
de dados/modelo/pipeline, MoE, quantização, *scaling laws*, LLM-as-a-judge.

| Falta para o extremo | Hoje |
| --- | --- |
| **Implementar** atenção e um transformer do zero (é tópico, não exercício obrigatório) | conceitual |
| Pré-treinar um modelo pequeno ponta a ponta (dados → tokenizer → treino → avaliação) | **0** |
| Escrever kernels CUDA/Triton; FlashAttention por dentro | **0** |
| RL pós-treino moderno implementado (GRPO, PPO) — hoje é conceitual | conceitual |
| Interpretabilidade mecanicista (probing, circuitos, SAEs) | **0** |
| **MCP** e protocolos de interoperabilidade de agentes (ver §4.2) | **0** |
| Reprodução completa de paper com ablação como **projeto** (existe como desafio em #27) | parcial |

#### Matemática — teto: a matemática do self-attention

Já tem: convexidade (6), SVD, MLE, gradiente, log-sum-exp.

| Falta para o extremo | Hoje |
| --- | --- |
| Teoria da informação: entropia, KL, cross-entropy derivada | **0** |
| Teoria do aprendizado estatístico: PAC, dimensão VC, Rademacher, *bias-variance* formal | **0** |
| Processos estocásticos e cadeias de Markov | **0** |
| Otimização convexa formal (dualidade, KKT — nível Boyd) | parcial |
| Inferência variacional e ELBO (base de VAEs e difusão) | **0** |
| Análise real e teoria da medida (para probabilidade rigorosa) | **0** |

#### Git — teto: GitOps auditável

O tópico já vai fundo (plumbing, packfiles, delta). O que falta é **forma**: *Building Git*
(James Coglan) está na biblioteca, mas "escrever um Git mínimo" — o exercício extremo natural da
área — não existe como projeto.

#### Algoritmos e ED

Não tem academia nenhuma (§6.1). Precisa da curva inteira: do básico (arrays, hashing, Big O) ao
extremo (algoritmos randomizados, estruturas persistentes, streaming/sketching, geometria
computacional, NP-completude e redução, algoritmos de aproximação).

---

### 8.4 O que falta em forma, não em tópico

Cinco ausências que não são "mais um assunto" — são o **mecanismo** pelo qual alguém passa de sênior
para fronteira:

1. **Laboratórios "construir X do zero".** Não existe nenhum. Escrever um Git, um storage engine, um
   framework reativo, um java agent, um transformer, um operator — é o único caminho conhecido para
   sair do nível de usuário avançado. Hoje o projeto tem 43 arquivos de exemplo somando 44 KB (§5.2).

2. **Leitura de código-fonte real.** Zero módulos mandam abrir o código do JDK, do CPython, do
   PostgreSQL, do React ou do Kubernetes. Ler implementação é o que separa "sei usar" de "sei como
   funciona".

3. **Reprodução de papers e benchmarks.** Só a trilha de IA toca nisso (módulo 27), e como desafio, não
   como projeto entregável.

4. **Gabarito.** Apenas IA tem `iaAnswerKey`. As outras 12 trilhas somam **558 exercícios sem
   referência de correção**. Para estudo solo, isso limita o teto: você não sabe se acertou.

5. **Ambiente reproduzível.** Não há devcontainer, dataset fixo, harness de benchmark nem suíte que
   valide as entregas. Cada exercício exige montar o ambiente do zero — atrito que, somado em 648
   exercícios, come mais tempo do que o conteúdo.

---

### 8.5 Um modelo de cinco faixas

Para "do básico ao avançado extremo" ser uma afirmação verificável e não um slogan, cada trilha
precisaria declarar e cobrir cinco faixas. O projeto hoje cobre bem as faixas 1–3.

| Faixa | Pergunta que responde | Evidência exigida | Cobertura hoje |
| --- | --- | --- | --- |
| **0 · Fundamento** | "O que é isso e por que existe?" | Exercício de resposta objetiva; conceito explicado sem jargão | 🔴 ausente (é pré-requisito) |
| **1 · Aplicação** | "Como eu uso corretamente?" | Código que funciona, com teste | 🟢 forte |
| **2 · Produção** | "Como isso quebra e como eu opero?" | Incidente reproduzido, runbook, métrica | 🟢 forte |
| **3 · Domínio** | "Como eu decido e defendo a decisão?" | ADR, trade-off medido, revisão D30 | 🟢 forte — é o núcleo do projeto |
| **4 · Fronteira** | "Como isso é construído por dentro — e eu consigo construir?" | Implementação do zero, leitura de código-fonte, paper reproduzido, contribuição upstream | 🔴 ausente em 12 de 13 trilhas |

A faixa 3 é onde o projeto é excelente e incomum. A faixa 4 é exatamente o que "avançado extremo"
nomeia, e ela **não existe** — exceto parcialmente em IA.

---

### 8.6 Dimensionamento honesto

O que custaria fechar as duas pontas, no mesmo padrão das nove trilhas boas:

| Bloco | Módulos novos/reescritos | Observação |
| --- | --- | --- |
| Faixa 0 em 12 trilhas | ~60 (5 por trilha) | O mais barato e o de maior impacto para quem começa |
| Academia de DSA completa (faixas 0–4) | ~25 | Preenche o buraco do §6.1 |
| Faixa 4 em 12 trilhas | ~60 (5 por trilha) | O mais caro: exige laboratório executável, não só texto |
| Reescrita das 4 trilhas Tier B (§5.1) | 84 | Seis campos × 84 módulos |
| Eixo de engenharia assistida por IA (§6.2) | ~8 | Transversal |
| **Total** | **~237** | ≈ 87% do volume atual (272 módulos) |

**Uma ressalva que vale mais que a tabela:** *avançado extremo em 13 áreas simultaneamente não é meta
realista para uma pessoa em 36 meses* — nem é como senioridade funciona. A faixa 4 é cara em horas e
perde valor rápido fora da área de atuação. Escrever um storage engine **e** um framework reativo **e**
um transformer do zero não forma um especialista em três coisas; forma alguém raso em três.

A recomendação que decorre da análise é **assimétrica de propósito**:

- **Faixa 0 em todas as trilhas** — barata, destrava o início, elimina a dependência de conhecimento prévio.
- **Faixas 1–3 em todas** — já é o que existe; manter e atualizar.
- **Faixa 4 em três ou quatro trilhas escolhidas** — pelo eixo de carreira. Para o perfil declarado no
  plano (backend Java/cloud com IA aplicada), o corte natural seria **Java, Arquitetura/Distribuídos,
  Banco de Dados e IA**. Frontend, AWS, DevOps e Segurança param na faixa 3, o que é suficiente e
  honesto.

Declarar isso explicitamente no material — *"esta trilha vai até a faixa 3 por decisão de escopo"* —
vale mais do que prometer profundidade extrema em tudo e entregar em nada.

---

## 9. Conclusão

O material **não é de nível iniciante disfarçado de avançado** — armadilha comum em planos de estudo
autorais. Nas nove trilhas principais, o padrão `problema → mecanismo → trade-off → produção → risco →
evidência` produz conteúdo que sustenta entrevista sênior de verdade, e a trilha de IA tem rigor de
pesquisa acima da média (as versões declaradas conferem uma a uma com PyPI e release notes oficiais).

O que separa o projeto de "atual" são três coisas de natureza diferente:

1. **Defasagem de versão** (Java/Spring, Python, bibliografia) — mecânica, resolve-se com atualização.
2. **Enchimento automático em 31% dos módulos** — estrutural, exige escrita.
3. **Duas ausências de 2026** (DSA e engenharia assistida por IA) — conceitual, exige decisão de escopo.

A número 3 é a que muda o veredito. Hoje o plano forma um **sênior de 2023 muito bem preparado**. Para
formar um sênior de 2026 — pela definição que o próprio `MERCADO-DEV-2026.html` estabelece — faltam
duas coisas, e nenhuma delas é profundidade técnica.

---

## Fontes consultadas (20/09/2026)

**Java e Spring**
- [Oracle Java SE Support Roadmap](https://www.oracle.com/java/technologies/java-se-support-roadmap.html)
- [Oracle Releases Java 26 (17/03/2026)](https://www.oracle.com/news/announcement/oracle-releases-java-26-2026-03-17/)
- [Java SE 21 Developer Professional — 1Z0-830](https://education.oracle.com/java-se-21-developer-professional/pexam_1Z0-830)
- [Spring Boot 4.0.7 available now (10/06/2026)](https://spring.io/blog/2026/06/10/spring-boot-4-0-7-available-now/)
- [Spring Boot 4 & Spring Framework 7 — Baeldung](https://www.baeldung.com/spring-boot-4-spring-framework-7)

**Python e IA**
- [PEP 745 — Python 3.14 Release Schedule](https://peps.python.org/pep-0745/)
- [What's New in Python 3.14](https://docs.python.org/3/whatsnew/3.14.html)
- [PyPI — torch](https://pypi.org/project/torch/) · [scikit-learn](https://pypi.org/project/scikit-learn/) · [mlflow](https://pypi.org/project/mlflow/)
- [Transformers v5 — Hugging Face](https://huggingface.co/blog/transformers-v5)
- [MCP — The 2026-07-28 Specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/)

**Dados e infraestrutura**
- [PostgreSQL 18 Released](https://www.postgresql.org/about/news/postgresql-18-released-3142/) · [PostgreSQL 19 Beta 1](https://www.postgresql.org/about/news/postgresql-19-beta-1-released-3313/)
- [Valkey — Migration from Redis](https://valkey.io/topics/migration/) · [What is Valkey — Redis](https://redis.io/blog/what-is-valkey/)
- [Kubernetes Patch Releases](https://kubernetes.io/releases/patch-releases/)
- [OpenTofu vs Terraform — Scalr](https://scalr.com/learning-center/opentofu-vs-terraform)
- [AWS Certified Solutions Architect – Associate](https://aws.amazon.com/certification/certified-solutions-architect-associate/)

**Segurança, frontend e prática**
- [OWASP Top 10:2025](https://owasp.org/Top10/2025/) · [OWASP ASVS](https://github.com/OWASP/ASVS)
- [React 19.3 (09/09/2026)](https://react.dev/blog/2026/09/09/react-19-3) · [Next.js Blog](https://nextjs.org/blog)
- [DORA — State of AI-assisted Software Development 2025](https://dora.dev/dora-report-2025/)

**Bibliografia**
- [Designing Data-Intensive Applications, 2ª ed (mar/2026)](https://martin.kleppmann.com/2026/03/24/designing-data-intensive-applications-2e.html)
- [Fundamentals of Software Architecture, 2ª ed (set/2025)](https://www.oreilly.com/library/view/fundamentals-of-software/9781098175504/)
