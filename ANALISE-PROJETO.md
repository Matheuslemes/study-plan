# Análise Completa do Projeto — Plano Integrado de Estudos

> Documento de consulta técnica. Avaliação integrada de conteúdo, rotina, aprendizado, frontend e arquitetura.
> Baseado na análise do código real do repositório. Nenhum arquivo do projeto foi alterado nesta análise.

---

## Índice

1. [Resumo executivo](#1-resumo-executivo)
2. [Diagnóstico geral do projeto](#2-diagnóstico-geral-do-projeto)
3. [Estrutura atual encontrada](#3-estrutura-atual-encontrada)
4. [Pontos fortes](#4-pontos-fortes)
5. [Problemas encontrados](#5-problemas-encontrados)
6. [Análise do conteúdo de estudos](#6-análise-do-conteúdo-de-estudos)
7. [Lacunas de conhecimento](#7-lacunas-de-conhecimento)
8. [Conteúdos que podem ser reduzidos ou reorganizados](#8-conteúdos-que-podem-ser-reduzidos-ou-reorganizados)
9. [Nova priorização das disciplinas](#9-nova-priorização-das-disciplinas)
10. [Sequência recomendada de aprendizado](#10-sequência-recomendada-de-aprendizado)
11. [Análise da rotina atual](#11-análise-da-rotina-atual)
12. [Nova rotina recomendada](#12-nova-rotina-recomendada)
13. [Estratégia de revisão](#13-estratégia-de-revisão)
14. [Integração entre estudos e projetos](#14-integração-entre-estudos-e-projetos)
15. [Análise HTML](#15-análise-html)
16. [Análise CSS](#16-análise-css)
17. [Análise JavaScript](#17-análise-javascript)
18. [Análise da arquitetura frontend](#18-análise-da-arquitetura-frontend)
19. [Necessidade de framework](#19-necessidade-de-framework)
20. [Análise de UX](#20-análise-de-ux)
21. [Dívida técnica](#21-dívida-técnica)
22. [Melhorias P0 — Crítico](#22-melhorias-p0--crítico)
23. [Melhorias P1 — Alta prioridade](#23-melhorias-p1--alta-prioridade)
24. [Melhorias P2 — Média prioridade](#24-melhorias-p2--média-prioridade)
25. [Melhorias P3 — Evolução futura](#25-melhorias-p3--evolução-futura)
26. [Matriz impacto × esforço](#26-matriz-impacto--esforço)
27. [Backlog STUDY-XXX](#27-backlog-study-xxx)
28. [Roadmap de implementação em etapas](#28-roadmap-de-implementação-em-etapas)
29. [Estrutura recomendada das trilhas](#29-estrutura-recomendada-das-trilhas)
30. [Estrutura recomendada da rotina](#30-estrutura-recomendada-da-rotina)
31. [Arquitetura recomendada para evolução do projeto](#31-arquitetura-recomendada-para-evolução-do-projeto)
- [As 10 melhorias mais importantes](#-as-10-melhorias-mais-importantes-do-projeto)
- [As 5 primeiras ações](#-as-5-primeiras-ações-que-devem-ser-executadas)

---

## 1. Resumo executivo

O projeto é um site estático de 16 páginas HTML (~63.000 linhas) que documenta um plano de estudos de 36 meses / 156 semanas / 12 fases / 15 trilhas, publicado na Vercel. O conteúdo técnico é **denso, atualizado e de qualidade acima da média** — as trilhas de Java, Arquitetura, Segurança, Frontend e IA têm profundidade real de material sênior.

Três problemas dominam o diagnóstico:

1. **A rotina diária não tem bloco de sono.** Os blocos de `buildDailyPlan()` cobrem 00:00→00:00 sem interrupção, para os 7 dias da semana. São 16h/dia de estudo, 112h/semana — contra as "65–75h/semana" declaradas na mesma página. Este é o defeito mais grave do projeto e é de conteúdo, não de código.
2. **O plano tem duas verdades incompatíveis.** O `index.html` descreve 12 fases sequenciais; as 15 páginas de trilha ainda descrevem o modelo antigo de **8 fases / 64 semanas**. Além disso, as fases dizem "Frontend no mês 10, IA no mês 28", enquanto a rotina diária coloca Frontend, Python, IA e Matemática **todo dia desde a semana 1**.
3. **A plataforma não sabe onde você está.** Zero `localStorage`, zero progresso, zero checkbox persistido, zero revisão. Ela responde "o que existe no plano", mas não responde "o que eu estudo hoje", "quanto avancei" e "o que preciso revisar" — as perguntas para as quais ela foi criada.

No código: `assets/js/data.js`, `index.js` e `trilha.js` (1.413 linhas) **não são carregados por nenhuma página** — são código morto; `assets/css/styles.css` é um tema de geração anterior, com paleta e fontes conflitantes, ainda carregado por 10 páginas; ~28.000 linhas de CSS inline estão duplicadas entre arquivos; o mesmo script de navegação foi copiado 15 vezes com drift; e 369 MB de PDFs (incluindo livros comerciais) estão versionados, inflando o `.git` para 332 MB.

**Veredito sobre framework: mantenha HTML/CSS/JS.** O problema não é a ausência de React — é a ausência de dados centralizados. Justificativa detalhada na seção 19.

---

## 2. Diagnóstico geral do projeto

| Dimensão | Nota | Observação |
|---|---|---|
| Qualidade do conteúdo técnico | **8,5/10** | Material denso, moderno, com referências oficiais |
| Coerência interna do plano | **3/10** | Fases × rotina × páginas de trilha se contradizem |
| Sustentabilidade da rotina | **1/10** | 24h/dia sem sono; 7 dias/semana sem folga |
| Arquitetura frontend | **3/10** | Duplicação massiva, código morto, sem fonte única de dados |
| Qualidade do HTML/CSS/JS isolado | **6,5/10** | Bem escrito por arquivo; insustentável no agregado |
| UX de acompanhamento | **2/10** | Nenhum estado, progresso ou revisão |
| Acessibilidade | **4/10** | Sem `<main>`, sem skip-link, 3 páginas sem `<title>` |
| Performance / peso do repo | **3/10** | 700 MB de repositório para um site estático |

O projeto está no ponto de inflexão clássico: **cresceu por acumulação de conteúdo, não por evolução de estrutura**. Cada novo assunto virou uma página nova, com uma cópia do CSS e do JS anteriores, e o plano-mestre foi reescrito só no `index.html`.

---

## 3. Estrutura atual encontrada

```txt
study-plan/
├── vercel.json                     3 linhas (cleanUrls, trailingSlash)
└── public/
    ├── index.html                  4.493 linhas / 204 KB  ← dashboard
    ├── README.md                   77 linhas (DESATUALIZADO: descreve 8 trilhas)
    ├── assets/
    │   ├── css/styles.css          365 linhas  ← tema antigo, conflitante
    │   └── js/
    │       ├── data.js             996 linhas  ← MORTO (0 referências)
    │       ├── index.js            239 linhas  ← MORTO (0 referências)
    │       └── trilha.js           178 linhas  ← MORTO (0 referências)
    ├── trilhas/                    15 páginas · 58.574 linhas
    │   ├── ia.html                 7.195 linhas / 291 KB  ← maior página
    │   ├── blog.html               6.214 linhas / 241 KB  ← DevCore Platform
    │   ├── arquitetura.html        4.007 · git 3.911 · frontend 3.839
    │   ├── aws 3.671 · financeiro 3.666 · java 3.658 · sec 3.615
    │   ├── devops 3.564 · bancos 3.520 · ingles 3.194
    │   └── treino 2.991 · matematica 2.833 · python 2.696
    └── pdfs/                       369 MB · 38 arquivos
        ├── 12 PDFs próprios do plano (150–330 KB cada)
        ├── livros-arquitetura/     12 livros comerciais (~230 MB)
        └── livros-ia/              9 livros comerciais (~140 MB)
```

### Modelo de dados do `index.html` (tudo inline, linhas 1817–4493)

| Constante | Linha | Conteúdo |
|---|---|---|
| `PC` / `PBG` / `CK` | 1821–1886 | 3 paletas de cor paralelas (redundantes entre si) |
| `heroTagsData` | 1888 | 13 badges de percentual |
| `tracks` | 1943 | 15 trilhas com frequência semanal |
| `quickTracks` | 2039 | 15 cards com `href`, `desc`, `extraBadges` |
| `pdfDocuments` | 2377 | 12 PDFs (os 21 livros **não** estão listados) |
| `P` | 2395–3304 | **910 linhas** — as 12 fases × 15 trilhas |
| `englishByPhase` | 3305 | inglês por fase |
| `weeklyFocusByDay` | 3331 | foco dos 7 dias |
| `dailyPlansByDay` | 3411 | 7 dias × 7 blocos configuráveis |
| `buildDailyPlan()` | 3827 | **o gerador da grade de 24h** |
| `rules` | 3853 | 10 regras não negociáveis |
| `awsMilestones` | 3896 | 5 marcos de certificação |
| `syncCycles` / `syncDependencies` / `syncCheckpoints` | 4311–4369 | aba Sincronização |

### Padrão das 15 páginas de trilha

Todas seguem o mesmo molde: `<header class="track-hero-page">` → `<nav>` com barra de seções scrollável → sidebar → N `<section data-search-section>` → footer → IIFE de ~80 linhas (busca local, scrollspy via `IntersectionObserver`, back-to-top, smooth scroll).

**Duas gerações coexistem:** 11 páginas usam Bootstrap 5.3.3 + `styles.css`; 4 páginas (`matematica`, `python`, `treino`, `blog`) são autocontidas sem Bootstrap. `blog.html` e `sec.html` carregam ainda Mermaid 10.

---

## 4. Pontos fortes

1. **Profundidade real do conteúdo.** `java.html` cobre Java 21 → Spring → JPA → Security → API design → testes → arquitetura → Kafka → observabilidade → performance/JVM → legado. Isso é um currículo sério, não uma lista de buzzwords.
2. **`blog.html` (DevCore Platform) é um documento de engenharia legítimo** — 54 RFs, 32 RNFs, 11 ADRs, casos de uso, modelagem de domínio, riscos, critérios de aceite. Vale mais que a maioria dos "projetos de portfólio".
3. **A ideia de projeto integrador único** (`DevCore`) é arquiteturalmente correta: evita a armadilha dos 20 projetos-tutorial.
4. **Regras de execução (`rules`) são excelentes** — "prompt isolado não é entrega", "ADR com critério de reversão", "80% dos critérios para avançar". Isso é maturidade sênior.
5. **Inglês tratado como transversal**, não como trilha isolada — README, PR, ADR em inglês. Decisão certa.
6. **Treino e alimentação dentro do cronograma** — reconhece que consistência física sustenta 36 meses.
7. **Qualidade do CSS por arquivo**: design tokens em `:root`, paleta por trilha, tipografia deliberada (Syne/Inter/IBM Plex Mono), tema escuro coeso, mobile-first com breakpoints. O problema é a duplicação, não o gosto.
8. **JS sem dependência supérflua**: `IntersectionObserver`, `passive: true`, IIFE, `history.replaceState`. Escrito por alguém que entende a plataforma web.
9. **Busca funcional** por trilha (navbar), por PDF e por seção dentro de cada trilha.
10. **`vercel.json` com `cleanUrls`** — deploy simples e correto para site estático.

---

## 5. Problemas encontrados

### Bloqueadores

| # | Problema | Evidência |
|---|---|---|
| B1 | Rotina sem sono, 7 dias/semana | `index.html:3828-3850` — blocos cobrem 00:00→00:00 |
| B2 | 112h/semana reais vs 65–75h declaradas | 16h/dia × 7 vs `index.html:1571` e `910h ÷ 13 sem = 70h` |
| B3 | Fases (sequenciais) contradizem rotina (15 trilhas paralelas dia 1) | `P` vs `dailyPlansByDay` |
| B4 | 15 páginas ainda no modelo "8 fases / 64 semanas" | `grep "8 fases"` → java, matematica, python, bancos, devops, financeiro, arquitetura |

### Graves

| # | Problema | Evidência |
|---|---|---|
| G1 | 1.413 linhas de JS morto | `data.js`/`index.js`/`trilha.js` — 0 referências em HTML |
| G2 | `styles.css` conflitante ainda carregado por 10 páginas | `--java: #0F6E56` vs inline `#22c55e`; DM Sans vs Inter |
| G3 | Zero persistência de progresso | `localStorage` = 0 ocorrências funcionais em todo o projeto |
| G4 | 28 checkboxes em `financeiro.html` que não salvam nada | resetam a cada reload |
| G5 | 369 MB de PDFs versionados; `.git` = 332 MB | 21 livros comerciais protegidos por direitos autorais |
| G6 | 3 páginas sem `<title>` | `arquitetura.html`, `frontend.html`, `git.html` |
| G7 | Nenhuma trilha linka para outra trilha | 0 links cruzados em 15 páginas |

### Importantes

| # | Problema | Evidência |
|---|---|---|
| I1 | ~19.000 linhas de CSS inline duplicado entre trilhas | 1.246 linhas idênticas em java/git/frontend/devops/arquitetura |
| I2 | IIFE duplicada 15× com drift | hashes distintos, mesmo comportamento (70–104 linhas) |
| I3 | 3 paletas paralelas (`PC`, `PBG`, `CK`, `:root`) | `index.html:1821-1886` |
| I4 | Blocos `<style id="...-responsive-refactor">`, `<style id="...-theme-overrides">` empilhados | até 4 blocos `<style>` por página — patch sobre patch |
| I5 | 45–61 `!important` por página | sintoma de cascata fora de controle |
| I6 | Sem `<main>` (exceto `sec.html`), sem skip-link, sem favicon | 15 de 16 páginas |
| I7 | `README.md` descreve 8 trilhas; existem 15 | `README.md:5` |
| I8 | 21 livros não aparecem na aba PDFs | `pdfDocuments` lista 12 |
| I9 | `ia.html` tem 4 cronogramas concorrentes (3/6/12/18 meses) | conflita com o plano global de 36 meses |
| I10 | `blog.html` com `<style>` e `<script>` dentro do `<body>` | linhas 4189 e 4353 |

---

## 6. Análise do conteúdo de estudos

### 6.1 As 12 fases atuais

| Fase | Meses | Tema | Avaliação |
|---|---|---|---|
| 1 | 1–3 | Fundamentos de engenharia | ✅ Correta. Java + SQL + Git + Docker + Clean Code |
| 2 | 4–6 | Backend profissional com Spring | ✅ Correta |
| 3 | 7–9 | Banco de dados, JPA e performance | ⚠️ **Invertida** — JPA avançado já foi consumido na fase 2 |
| 4 | 10–12 | Frontend e integração full stack | ⚠️ Conflita com a rotina, que faz frontend desde o dia 1 |
| 5 | 13–15 | AWS + arquitetura cloud | ✅ Bem posicionada |
| 6 | 16–18 | Arquitetura, DDD, distribuídos | ✅ Correta |
| 7 | 19–21 | Kafka e mensageria | ⚠️ Poderia fundir-se à fase 6 |
| 8 | 22–24 | DevOps, CI/CD, Docker, K8s | ❌ **CI/CD tarde demais.** Pipeline é habilidade de mês 4–6, não de mês 22 |
| 9 | 25–27 | Segurança e DevSecOps | ❌ **Tarde demais.** Spring Security está na fase 2; OWASP é mês 1–6 |
| 10 | 28–30 | Python + IA aplicada | ❌ Contradiz a rotina: Python tem 18% e sábado inteiro desde a semana 1 |
| 11 | 31–33 | Matemática, ML, LLMs, RAG | ❌ Matemática aparece **todos os dias** na rotina desde a fase 1 |
| 12 | 34–36 | Senioridade, portfólio, entrevistas | ✅ Correta |

### 6.2 O conflito central

```txt
MODELO DAS FASES              MODELO DA ROTINA DIÁRIA
(index.html: P)               (index.html: dailyPlansByDay)
─────────────────             ────────────────────────────
Sequencial                    100% paralelo
Frontend no mês 10            Frontend toda terça, 18%, desde o dia 1
Python no mês 28              Python todo sábado, 18%, desde o dia 1
IA no mês 28–33               IA todo dia (bloco integration), desde o dia 1
Matemática no mês 31          Matemática todo dia (early2), desde o dia 1
Segurança no mês 25           Segurança na sexta, desde o dia 1
```

São dois planos diferentes na mesma página. **Isto precisa ser resolvido antes de qualquer melhoria de software** — é a raiz da confusão "o que estudo hoje?".

### 6.3 Redundâncias

- **Matemática em 3 lugares**: trilha própria (`matematica.html`), bloco diário `early2` em todos os 7 dias, e Fase 11 inteira.
- **IA em 4 lugares**: `ia.html` (7.195 linhas), quinta-feira inteira, bloco `integration` diário, Fases 10–11.
- **Arquitetura em 3 lugares**: `arquitetura.html`, seção dentro de `java.html`, Fase 6.
- **Segurança em 3 lugares**: `sec.html`, seção em `java.html`, Fase 9.
- **`ia.html` sozinha contém 4 cronogramas alternativos** que ignoram o plano de 36 meses.

### 6.4 Conteúdos de baixa aderência ao objetivo declarado

- **`financeiro.html`** (3.666 linhas, 31 módulos, 2×/semana): educação financeira pessoal é valiosa, mas **não é conhecimento de engenharia de software** e consome slot da rotina. Deve sair do plano técnico e virar hábito mensal.
- **`treino.html`** (2.991 linhas): o treino em si deve ficar (sustenta os 36 meses), mas 2.991 linhas de periodização detalhada dentro de um plano de estudos de programação é escopo fora de lugar.
- **`blog.html` com 54 RFs / 32 RNFs**: excelente documento, mas 54 requisitos funcionais é escopo de produto comercial, não de projeto de portfólio. Risco real de nunca sair da fase 1.

---

## 7. Lacunas de conhecimento

| Lacuna | Situação real no repo | Por que importa |
|---|---|---|
| **Estruturas de dados e algoritmos** | 1 menção a "estrutura de dados" em 63k linhas; 0 menções a LeetCode/HackerRank; árvores 4×, grafos como termo genérico | É o **principal filtro de entrevista** para pleno→sênior. Hoje só existe "algoritmos básicos + Big O" na fase 1 |
| **Concorrência em Java** | `Virtual Threads` 7×, `concorrência` 18×, mas sem seção dedicada | Thread pools, `CompletableFuture`, `synchronized`/locks, virtual threads são tema recorrente de entrevista sênior |
| **System Design praticado** | 17 menções + 2 livros em PDF, mas sem exercícios ou entregáveis | Conhecer ≠ saber desenhar sob pressão em 45 min |
| **Revisão espaçada** | 0 mecanismos; "flashcards/Anki" citados como texto, sem sistema | 36 meses sem revisão estruturada = esquecimento das fases 1–4 |
| **Métricas de progresso** | 0 | Impossível responder "quanto avancei?" |
| **Soft skills / comunicação técnica** | Parcialmente coberto por inglês e ADRs | Code review, mentoria, negociação técnica ficam implícitos |
| **Custo de cloud (FinOps)** | Menção rasa em AWS fase 1 | Decisão de arquitetura sênior é sempre decisão de custo |
| **Contratos de API modernos** | GraphQL 6×, gRPC 7× — quase ausentes | Aceitável para Java/REST, mas vale conhecer trade-offs |

---

## 8. Conteúdos que podem ser reduzidos ou reorganizados

| Conteúdo | Ação | Justificativa |
|---|---|---|
| Trilha Financeira (3.666 linhas, 2×/sem) | **Remover do plano técnico**; virar revisão mensal de 1h | Não é engenharia de software; libera slot |
| Trilha Treino (2.991 linhas) | **Manter o treino, colapsar o documento** para 1 página de referência | Treino é infraestrutura, não currículo |
| `ia.html` — 4 cronogramas alternativos | **Excluir 3, manter 1 alinhado às fases** | Contradiz o plano-mestre |
| Matemática diária (`early2` em 7 dias) | **Reduzir a 2×/semana, sempre acoplada ao uso** (SQL/estatística, IA/álgebra linear) | Matemática desconectada não retém |
| DevCore: 54 RFs / 32 RNFs | **Cortar para MVP de 12–15 RFs**, resto vira backlog | Escopo atual não fecha em 36 meses junto com tudo mais |
| Bloco IA diário (`integration`, 1h30/dia) | **Concentrar em 2 dias** | Troca de contexto diária destrói foco profundo |
| 21 livros comerciais em PDF | **Remover do repositório** (ver P0-3) | 369 MB + risco de direitos autorais; manter só a lista de títulos |
| Fase 7 (Kafka) isolada | **Fundir com Fase 6** (arquitetura distribuída) | Mensageria é meio, não fim |
| Segurança como Fase 9 | **Dissolver em transversal + módulo na Fase 2–3** | Já é pré-requisito de qualquer API pública |

---

## 9. Nova priorização das disciplinas

### Prioridade 1 — Essencial

*Sem isso não há evolução profissional imediata.*

| Disciplina | Por quê |
|---|---|
| Java moderno (17/21) | Âncora declarada da carreira; base de tudo |
| OO, Clean Code, SOLID | Determina se o código é mantível; avaliado em todo code review |
| Spring Boot + REST | Stack de 90% das vagas Java no mercado brasileiro |
| SQL + PostgreSQL + modelagem | Todo backend é I/O sobre dados; gargalo #1 em produção |
| JPA/Hibernate (incl. N+1, fetch) | Fonte #1 de incidentes de performance em Spring |
| Testes (JUnit, Mockito, Testcontainers) | Critério objetivo de senioridade |
| Git (branch, PR, rebase, conflito) | Pré-requisito de qualquer time |
| Docker + Docker Compose | Ambiente reproduzível é pré-requisito de tudo |
| Inglês técnico (leitura) | Toda documentação primária está em inglês |
| **Estruturas de dados e algoritmos** | ⚠️ **Lacuna atual.** Filtro de entrevista |

### Prioridade 2 — Muito importante

*Necessário para consolidar nível pleno.*

Spring Security/JWT/OAuth2 · API design e versionamento · CI/CD (GitHub Actions) · Observabilidade (logs estruturados, métricas, tracing) · Arquitetura em camadas e hexagonal · Redis (cache, sessão, lock) · Segurança aplicada (OWASP Top 10) · Cloud básica (AWS: IAM, EC2, RDS, S3, VPC) · Inglês escrito (README, PR, ADR) · Linux e troubleshooting.

### Prioridade 3 — Diferencial profissional

*Aumenta significativamente empregabilidade e qualidade técnica.*

DDD tático e estratégico · Kafka e arquitetura orientada a eventos (outbox, idempotência) · Microsserviços e seus trade-offs · System Design praticado · Kubernetes (uso, não operação) · Terraform / IaC · Performance e tuning de JVM · NoSQL aplicado (MongoDB/DynamoDB) · Frontend React/TypeScript funcional · Inglês falado.

### Prioridade 4 — Especialização

*Depois da base consolidada.*

Python/FastAPI · IA aplicada, LLMs, RAG, embeddings · Matemática para ML (álgebra linear, probabilidade) · MLOps · Certificações AWS além da SAA · Azure · SRE avançado (SLO, error budget, chaos) · Arquitetura multi-região · GraphQL/gRPC · Liderança técnica.

> **Reclassificação crítica:** o projeto trata hoje IA, Matemática, Python e Frontend como **P1** (18% + 18% + 18% da rotina, desde o dia 1). Para o objetivo declarado — Backend Java/Spring — eles são **P3/P4**. Esses três blocos consomem ~54% da rotina para competências que não são a âncora da carreira.

---

## 10. Sequência recomendada de aprendizado

A sequência de referência está essencialmente correta. Ajustes necessários com base no que existe:

```txt
Fundamentos (lógica, Linux, terminal)
   ↓
Java Core + OO  ────────────────┐
   ↓                            │  Git (transversal desde o dia 1)
SQL + modelagem relacional      │  Inglês (transversal desde o dia 1)
   ↓                            │  Algoritmos/DSA (contínuo, 3×/sem)
Java avançado (collections,     │
  streams, exceptions, generics)│
   ↓                            │
Spring Boot + REST + JPA        │
   ↓                            │
Testes (unit → integração)      │
   ↓                            │
Docker + CI/CD  ← ANTECIPADO de mês 22 para mês 6-8
   ↓
Segurança aplicada  ← ANTECIPADO de mês 25 para mês 8-10
   ↓
Performance de banco + Redis (cache)
   ↓
Observabilidade  ← ANTECIPADO de mês 20+ para mês 12
   ↓
Arquitetura (camadas → hexagonal → DDD)
   ↓
Mensageria/Kafka + Microsserviços (juntos)
   ↓
Cloud (AWS) + IaC + Kubernetes
   ↓
System Design (praticado, semanal)
   ↓
Especialização: Python/IA/Matemática · Frontend · certificações
   ↓
Projetos reais + portfólio + entrevistas
```

### As 5 correções de ordem mais importantes

| # | Hoje | Recomendado | Motivo |
|---|---|---|---|
| 1 | CI/CD na Fase 8 (mês 22) | **Mês 6–8** | Sem pipeline, todo estudo posterior é feito sem rede de segurança |
| 2 | Segurança na Fase 9 (mês 25) | **Transversal + módulo no mês 8–10** | Spring Security já é usado na Fase 2 |
| 3 | Observabilidade diluída até mês 20+ | **Mês 12** | É o que separa "faz funcionar" de "opera em produção" |
| 4 | Frontend/Python/IA/Matemática desde o dia 1 com 54% | **Frontend mês 10+ (10%), Python/IA mês 24+ (P4)** | Diluição da âncora Java |
| 5 | DSA quase ausente | **3×/semana, contínuo, do mês 1 ao 36** | Lacuna que bloqueia entrevistas |

---

## 11. Análise da rotina atual

### 11.1 A grade real de `buildDailyPlan()` — idêntica nos 7 dias

| Horário | Duração | Tipo |
|---|---|---|
| 00:00–01:00 | 1h | Fechamento/revisão |
| 01:00–03:00 | 2h | Estudo madrugada |
| 03:00–05:00 | 2h | Estudo madrugada |
| 05:00–06:00 | 1h | Cardio |
| 06:00–07:00 | 1h | Higiene + café |
| 07:00–09:00 | 2h | Foco profundo |
| 09:00–09:30 | 30min | Pausa |
| 09:30–11:30 | 2h | Projeto |
| 11:30–12:30 | 1h | Almoço |
| 12:30–14:00 | 1h30 | Técnico |
| 14:00–14:30 | 30min | Pausa |
| 14:30–16:00 | 1h30 | Integração |
| 16:00–17:00 | 1h | Inglês |
| 17:00–18:00 | 1h | Pausa |
| 18:00–19:30 | 1h30 | Musculação |
| 19:30–21:00 | 1h30 | Banho + jantar |
| 21:00–23:00 | 2h | Estudo noturno |
| 23:00–00:00 | 1h | Checklist/GitHub |

**Total: 24h00. Sono: 0h00.** Existe uma chave de cor `sleep` definida em `CK` (linha 1866) que **nunca é usada** — indício de que o bloco de sono existiu e foi removido.

### 11.2 Números

| Métrica | Valor real | Valor declarado | Erro |
|---|---|---|---|
| Estudo/dia | 16h | — | — |
| Estudo/semana | **112h** | 65–75h | **+55%** |
| Dias de folga/semana | 0 | — | — |
| Sono/noite | 0h | — | — |
| Domínios distintos/dia | 5–6 | — | — |
| Trilhas ativas simultâneas | 15 | — | — |
| Total do plano | inconsistente | 10.920h (910×12) | inconsistente |

### 11.3 Problemas estruturais da rotina

1. **Sono zero.** Privação de sono destrói consolidação de memória — literalmente anula o estudo das outras 16h. É autodestrutivo e o plano não sobrevive 3 semanas, muito menos 156.
2. **Zero dias de folga.** Domingo é "revisão + inglês + matemática + planejamento" — ainda é trabalho.
3. **Blocos 01:00–05:00 marcados como `intensity: média`** — são as horas de pior desempenho cognitivo possível.
4. **5–6 domínios por dia.** Segunda-feira: Java, Matemática, Java, Java, Testes, IA, Inglês, Revisão. Cada troca custa 15–25 min de reaquecimento — ~2h/dia perdidas só em context switching.
5. **Revisão declarada, não sistematizada.** "Anki", "flashcards", "active recall" aparecem como texto de bloco, sem nenhum mecanismo, agendamento ou registro.
6. **Rotina idêntica 7/7** — ignora fadiga acumulada, imprevistos, doença, vida.
7. **Sem margem de recuperação.** Um dia perdido não tem onde ser reposto; a rotina quebra e a culpa vira abandono.

> **Diagnóstico:** esta não é uma rotina agressiva — é uma rotina **fisiologicamente impossível**. O risco não é "não conseguir cumprir 100%": é abandonar o plano inteiro na semana 3 por não conseguir cumprir nem 40%.

---

## 12. Nova rotina recomendada

### 12.1 Princípios

1. **Sono é bloco fixo inegociável** — 7h30 mínimo. É o bloco que faz os outros funcionarem.
2. **Máximo 2 domínios técnicos por dia** (1 principal + 1 complementar).
3. **Um dia de folga real por semana.**
4. **Meta realista: 35–42h/semana de foco efetivo** — ~5.500–6.500h em 36 meses. Mais que suficiente para chegar a sênior forte.
5. **Buffer semanal de 3h** para reposição, imprevisto e transbordo.

### 12.2 Grade diária (dia útil)

| Horário | Duração | Bloco |
|---|---|---|
| 23:00–06:30 | 7h30 | 🛏️ **Sono (fixo)** |
| 06:30–07:15 | 45min | Cardio leve + higiene |
| 07:15–07:45 | 30min | Café + definição do foco do dia |
| 07:45–09:45 | **2h** | 🎯 **Deep work 1 — domínio principal do dia** |
| 09:45–10:15 | 30min | Pausa sem tela |
| 10:15–11:45 | **1h30** | 🎯 **Deep work 2 — mesmo domínio, aplicação/projeto** |
| 11:45–13:00 | 1h15 | Almoço + descanso real |
| 13:00–14:00 | **1h** | 📘 Domínio complementar do dia |
| 14:00–14:20 | 20min | Pausa |
| 14:20–15:00 | **40min** | 🧮 DSA / algoritmos (3×/sem) ou inglês (2×/sem) |
| 15:00–18:00 | 3h | Vida, trabalho, deslocamento, folga |
| 18:00–19:30 | 1h30 | 🏋️ Musculação |
| 19:30–21:00 | 1h30 | Banho + jantar + descompressão |
| 21:00–22:15 | **1h15** | 🔁 **Revisão ativa + fila D1/D7/D30** |
| 22:15–23:00 | 45min | Fechamento: commit, notas, plano do dia seguinte |

**Foco técnico: ~6h30/dia útil.**

### 12.3 Ciclo semanal — dias temáticos

| Dia | Principal (3h30) | Complementar (1h) | 40min |
|---|---|---|---|
| **Seg** | Java/Spring — feature nova | Banco/SQL | DSA |
| **Ter** | Java/Spring — testes e refino | Arquitetura | Inglês |
| **Qua** | Banco de dados / performance | Docker/CI-CD | DSA |
| **Qui** | Java/Spring — integração e projeto | Segurança | Inglês |
| **Sex** | DevOps / Cloud / observabilidade | Arquitetura | DSA |
| **Sáb** | Projeto integrador (DevCore) — 4h | — | System Design 1h |
| **Dom** | 🌴 **Folga** + 1h de revisão leve (D7/D30) | — | — |

**Total: ~38h/semana.** Java/Spring ≈ 45% do foco técnico (contra 22% hoje) — coerente com o objetivo declarado.

### 12.4 Por que dias temáticos, e não blocos rotativos

| Modelo | Veredito |
|---|---|
| Blocos diários com muitos assuntos | ❌ É o modelo atual — 5–6 trocas de contexto/dia |
| **Dias temáticos** | ✅ **Recomendado.** 1 domínio dominante por dia = profundidade real; encaixa nas trilhas existentes sem reescrevê-las |
| Ciclos semanais (1 semana = 1 tema) | ⚠️ Bom para imersão, ruim para retenção — Java ficaria 3 semanas sem toque |
| Ciclos mensais | ❌ Só serve como camada de meta, não de execução |

**Recomendação: dias temáticos (execução) + ciclos mensais (meta e checkpoint).** Os dias garantem profundidade; o ciclo mensal garante direção. É a estrutura que o projeto já quase tem — falta só remover os assuntos extras de cada dia.

### 12.5 Ciclo mensal

| Semana | Função |
|---|---|
| 1–3 | Execução normal (conteúdo novo + projeto) |
| 4 | **Consolidação**: sem conteúdo novo. Revisão D30, refatoração, ADR, deploy, checklist da fase, ajuste de rota |

Isso substitui o "1 semana de checkpoint por trimestre" atual (frequência baixa demais para corrigir rota).

### 12.6 Cronograma de certificações — ajuste

O calendário atual (CLF mês 6, SAA mês 15, DVA mês 24, SOA/DOP mês 30, Well-Architected mês 36) é **quantidade demais**. Recomendação:

- **CLF-C02 — mês 8** (após base de Docker/CI-CD, não antes)
- **SAA-C03 — mês 18** (após arquitetura e cloud reais)
- **DVA-C02 — opcional, mês 28+** — só se houver demanda concreta de mercado
- **SOA/DOP — remover.** São certificações de perfil de operação, não de desenvolvedor backend

> Duas certificações bem preparadas valem mais que cinco superficiais.

---

## 13. Estratégia de revisão

O projeto **não tem nenhum mecanismo de revisão**. A menção a "Anki" e "flashcards" é texto descritivo dentro de blocos, sem sistema. Em 36 meses, isso significa esquecer as fases 1–4 antes de chegar na 8.

### Modelo recomendado — D0/D1/D7/D30

Simples de propósito. Não construa um sistema de repetição espaçada completo.

| Marco | Quando | Duração | O que fazer |
|---|---|---|---|
| **D0** | Dia do estudo | 10min (no bloco de fechamento) | Escrever 3 perguntas sobre o que estudou + 1 frase de resumo |
| **D1** | Dia seguinte | 10min (início do deep work) | Responder as 3 perguntas **sem consultar** |
| **D7** | +7 dias | 20min (bloco 21:00–22:15) | Reexplicar o conceito em voz alta ou por escrito, em inglês |
| **D30** | +30 dias | 30min (semana 4 do ciclo) | Reimplementar ou redesenhar algo daquele tópico, do zero |

### Implementação mínima na plataforma

Um objeto simples, não um SRS:

```js
// data/revisions.js — estrutura sugerida
{ id: "spring-transacoes", trilha: "java", d0: "2026-07-21",
  perguntas: ["Quando @Transactional não faz rollback?", "...", "..."],
  d1: null, d7: null, d30: null }
```

Uma view "Revisões de hoje" no dashboard, calculada a partir de `d0` + `localStorage`. **~120 linhas de JS resolvem.** Nada de algoritmo SM-2.

---

## 14. Integração entre estudos e projetos

### Situação atual

- **Projetos existentes:** `DevCore Platform` (o único integrador, muito bem documentado) + "projetos práticos" listados textualmente em cada trilha.
- **Problema 1:** DevCore tem 54 RFs / 32 RNFs / 11 ADRs / 7 fases próprias — escopo de produto comercial. Risco alto de nunca sair da fase 1.
- **Problema 2:** as 7 fases do DevCore não têm mapeamento explícito para as 12 fases do plano.
- **Problema 3:** os "projetos práticos" de cada trilha são desconectados entre si e do DevCore — se executados literalmente, viram 40+ projetos paralelos.
- **Problema 4:** a rotina diária de segunda diz "exercício ou repositório de estudo", desacoplando deliberadamente o estudo do projeto — enfraquece exatamente a integração que o DevCore deveria dar.

### Recomendação: um projeto, evoluído por camadas

**Não crie projetos novos.** Evolua o DevCore, cortando o escopo para MVP e usando cada fase como camada:

```txt
Fase 1  Java + Git + SQL      → CRUD Java puro, README em inglês, 20 commits
Fase 2  Spring + JPA          → API REST v1, autenticação JWT, Swagger
Fase 3  Testes + Postgres     → Testcontainers, cobertura de regra, migrations
Fase 4  Docker + CI/CD        → Compose, GitHub Actions, pipeline verde  ← ANTECIPADO
Fase 5  Segurança             → OWASP checklist, secrets, SAST           ← ANTECIPADO
Fase 6  Redis + performance   → cache, índices, EXPLAIN, N+1 resolvido
Fase 7  Observabilidade       → logs estruturados, métricas, tracing     ← ANTECIPADO
Fase 8  Arquitetura + DDD     → refatoração hexagonal, ADRs, bounded contexts
Fase 9  Kafka + eventos       → outbox, idempotência, consumer
Fase 10 Cloud (AWS) + IaC     → deploy real, Terraform, custo medido
Fase 11 Frontend React/TS     → interface consumindo a própria API
Fase 12 IA aplicada + portfólio → 1 feature de RAG sobre o conteúdo do blog
```

**Regra a adotar:** *nenhum tópico é considerado dominado até existir um commit no DevCore que o utilize.* Isso transforma automaticamente o checklist de estudo em checklist de projeto — e o portfólio se constrói sozinho.

**Corte de escopo:** de 54 RFs para ~15 RFs de MVP. O resto vira backlog público (que também demonstra maturidade de produto).

---

## 15. Análise HTML

### Semântica e estrutura

| Aspecto | Situação |
|---|---|
| `<!DOCTYPE html>` + `lang="pt-BR"` | ✅ Presente em todas |
| `<h1>` único por página | ✅ 16/16 |
| Hierarquia de headings | ✅ Coerente (h1→h2→h3) |
| `<header>`, `<nav>`, `<footer>` | ✅ 15/15 nas trilhas · ❌ ausentes no `index.html` |
| **`<main>`** | ❌ **Só `sec.html` tem.** 15 páginas sem landmark principal |
| `<section>` / `<article>` | ✅ Uso abundante (`ia.html`: 31 sections, 266 articles) |
| `<table>` com `<thead>`/`<tbody>` | ✅ Correto |
| **`<title>`** | ❌ **Ausente em `arquitetura.html`, `frontend.html`, `git.html`** |
| `<meta name="description">` | ⚠️ Ausente em `blog.html` |
| `<img>` | ✅ Zero imagens — nenhum problema de `alt` |
| Favicon | ❌ Ausente em 16/16 |

### Acessibilidade

| Item | Situação |
|---|---|
| `aria-label` | ⚠️ 2–9 por página — insuficiente para a densidade de navegação |
| Skip-link ("pular para o conteúdo") | ❌ Ausente em 16/16. Páginas de 7.000 linhas com nav longa — impacto real |
| Foco visível customizado | ❌ Não encontrado |
| `role`/`aria-selected` nas tabs do dashboard | ⚠️ `role="tablist"` presente, mas sem `aria-controls`/`aria-selected` |
| Contraste | ⚠️ `--text3: #64748b` sobre `--bg: #07090f` fica abaixo de 4.5:1 em texto pequeno |
| Navegação por teclado nas barras scrolláveis | ⚠️ Só botões de mouse (`navScrollLeft/Right`) |
| `prefers-reduced-motion` | ❌ Ausente — há `fade-up` e `scroll-behavior: smooth` sem escape |

### Repetição estrutural

- Header hero, nav scrollável, sidebar, back-to-top e footer são **reescritos por extenso em 15 arquivos**. Uma mudança de navegação exige 15 edições manuais.
- Nenhum mecanismo de include/partial — nem build, nem `fetch`, nem template.

### SEO

- ✅ `description` em 15/16, títulos descritivos, `cleanUrls`
- ❌ Sem `sitemap.xml`, sem `robots.txt`, sem Open Graph, sem `<link rel="canonical">`
- ⚠️ 3 páginas sem `<title>` = perda direta de indexação e de nome no bookmark

---

## 16. Análise CSS

### Volume e distribuição

| Local | Linhas | Estado |
|---|---|---|
| `assets/css/styles.css` | 365 | ⚠️ **Tema de geração anterior**, carregado por 10 páginas, integralmente sobrescrito |
| `index.html` inline | ~1.490 | Fonte de verdade do design atual |
| 15 trilhas inline (1º bloco) | 987–1.798 cada · **~19.700 total** | ~60–70% idêntico entre arquivos |
| Blocos `<style id="...">` extras | 2–4 por página | Camadas de patch acumuladas |
| **Total estimado** | **~28.000 linhas de CSS** | Para um site de 16 páginas |

### Conflito de temas — problema concreto

```css
/* assets/css/styles.css (carregado) */
--java: #0F6E56;   --accent: #0F6E56;
font-family: 'DM Sans' / 'JetBrains Mono';
--surface: #141416;

/* inline em cada trilha (vence) */
--java: #22c55e;   --accent: #22d3b0;
font-family: 'Inter' / 'Syne' / 'IBM Plex Mono';
--surface: #0d1117;
```

10 páginas baixam e parseiam 365 linhas de CSS **cujo único efeito é ser sobrescrito**. Custo: request extra + risco de FOUC + confusão de manutenção.

### Camadas de patch

Os IDs dos blocos de estilo contam a história da dívida:

```txt
<style id="architecture-responsive-refactor">     (linha 1266)
<style id="reference-card-style">                 (linha 1854)
<style id="architecture-theme-overrides">         (linha 1981)
```

Cada correção virou um bloco novo em vez de editar o original. Resultado: **45–61 `!important` por página** (`ingles.html`: 61, `devops.html`: 54, `bancos.html`: 48). Isso é o indicador clássico de cascata perdida — a próxima correção visual precisará de `!important` também.

### Duplicação medida

O bloco `reference-card-style` tem **hash idêntico** entre `git.html` e `java.html`, e variantes drifted em `arquitetura`, `aws`, `devops`, `frontend`, `ingles`, `blog`. O mesmo componente visual existe em 7 versões ligeiramente diferentes.

### Pontos positivos

- ✅ Design tokens bem organizados em `:root` (backgrounds, borders, text, accents, paleta por trilha)
- ✅ Mobile-first com breakpoints coerentes
- ✅ Reset consistente (`box-sizing: border-box`)
- ✅ Nomenclatura previsível (`.metric-card`, `.phase-card`, `.track-badge`, `.daily-block`)
- ✅ Tema escuro visualmente coeso e agradável

> **O CSS não é ruim — é bom, escrito 16 vezes.**

---

## 17. Análise JavaScript

### Distribuição

| Local | Linhas | Estado |
|---|---|---|
| `assets/js/data.js` | 996 | ☠️ **Morto** — 0 referências |
| `assets/js/index.js` | 239 | ☠️ **Morto** — 0 referências |
| `assets/js/trilha.js` | 178 | ☠️ **Morto** — 0 referências |
| `index.html` inline | ~2.670 | Dados + render, tudo junto |
| 15 trilhas — IIFE | 70–104 cada · ~1.250 | Mesmo comportamento, 15 cópias com drift |

> Os três arquivos em `assets/js/` (**1.413 linhas**) descrevem exatamente a arquitetura correta que o `README.md` documenta — dados separados, render compartilhado. Ela foi construída e depois abandonada. **É a prova de que a solução já foi concebida neste próprio repositório.**

### Qualidade do código vivo

**Bom:**

- ✅ `IntersectionObserver` para scrollspy (correto, performático)
- ✅ `{ passive: true }` nos listeners de scroll
- ✅ IIFE evitando poluição global nas trilhas
- ✅ `history.replaceState` em vez de `pushState` para âncoras
- ✅ Normalização de acentos correta: `.normalize('NFD').replace(/[̀-ͯ]/g, '')`
- ✅ Guard clauses (`if (!el) return`) consistentes
- ✅ Funções pequenas e nomeadas com clareza

**Problemas:**

| # | Problema | Evidência |
|---|---|---|
| J1 | **Dados e apresentação no mesmo arquivo** | `P` (910 linhas de currículo) misturado com `renderPhaseDetails()` |
| J2 | **21 usos de `innerHTML` com template strings** | Sem escaping — funciona porque o conteúdo é seu, mas é padrão frágil |
| J3 | **Zero tratamento de erro** | Nenhum `try/catch`, nenhum fallback se um `getElementById` mudar de nome |
| J4 | **Zero estado de aplicação** | Nada persiste; recarregar zera tudo |
| J5 | **Zero `localStorage`** | Confirmado em 16/16 páginas |
| J6 | **Globais via `window.`** | `window.filterPhase`, `window.filterTrack` — acoplados a `onclick` no HTML |
| J7 | **3 paletas paralelas** (`PC`, `PBG`, `CK`) + `:root` | Mesma informação de cor em 4 lugares |
| J8 | **Lógica de busca reescrita 3×** | `filterTrackCardsByName`, `setupPdfSearch`, e a busca de cada trilha |
| J9 | **28 checkboxes sem persistência** | `financeiro.html` — UX que promete e não entrega |
| J10 | **Drift entre as 15 IIFEs** | Hashes distintos para comportamento equivalente; correção de bug exige 15 edições |

---

## 18. Análise da arquitetura frontend

| Sintoma | Presente? | Evidência |
|---|---|---|
| HTML extremamente grande | ✅ **Sim** | `ia.html` 7.195 linhas/291 KB · `blog.html` 6.214 |
| CSS duplicado entre páginas | ✅ **Sim** | ~19.700 linhas inline, 60–70% redundantes |
| JavaScript duplicado | ✅ **Sim** | IIFE em 15 cópias drifted |
| Menus repetidos | ✅ **Sim** | Nav + sidebar + footer reescritos 15× |
| Dados de estudo hardcoded em vários lugares | ✅ **Sim** | Fases no `index.html` **e** nas 15 trilhas, dessincronizados |
| Manutenção manual excessiva | ✅ **Sim** | Trocar "8 fases"→"12 fases" = editar 7 arquivos à mão (ainda não foi feito) |
| Ausência de componentes reutilizáveis | ✅ **Sim** | Nenhum mecanismo de include |
| Ausência de configuração central | ✅ **Sim** | `data.js` existe mas está morto |
| Dependência excessiva de `localStorage` | ❌ **Não** | Problema **inverso**: dependência zero |
| Acoplamento conteúdo × layout | ✅ **Sim** | Currículo técnico dentro de template strings de render |

**9 de 10 sintomas presentes.** O projeto está no limite do que o modelo copy-paste sustenta.

### O ponto que decide tudo

O `README.md` já documenta a arquitetura correta:

> *"`assets/js/data.js`: dados reutilizáveis das fases, trilhas, métricas, cronograma e conteúdo das páginas."*

E ela **existe no repositório, com 996 linhas, sem ser carregada por ninguém.** A dívida não é conceitual — é de execução interrompida.

### Estrutura recomendada

```txt
public/
├── index.html                    ← só markup + <script type="module">
├── trilhas/*.html                ← só markup + <script type="module">
├── assets/
│   ├── css/
│   │   ├── tokens.css            ← :root, cores, tipografia, spacing
│   │   ├── base.css              ← reset, body, tipografia
│   │   ├── components.css        ← cards, badges, tabelas, timeline, nav
│   │   └── pages/<trilha>.css    ← só o que for REALMENTE específico
│   └── js/
│       ├── core/
│       │   ├── nav.js            ← a IIFE, UMA vez (scrollspy, busca, back-to-top)
│       │   ├── search.js         ← lógica de busca unificada
│       │   ├── storage.js        ← wrapper de localStorage com try/catch
│       │   └── render.js         ← helpers de template
│       ├── features/
│       │   ├── progress.js       ← progresso por trilha e geral
│       │   ├── today.js          ← "o que estudo hoje"
│       │   └── review.js         ← fila D1/D7/D30
│       └── pages/
│           ├── dashboard.js
│           └── trilha.js
└── data/
    ├── config.js                 ← 12 fases, 156 semanas, ciclos (FONTE ÚNICA)
    ├── tracks.js                 ← as 15 trilhas: key, label, cor, href, badges
    ├── phases.js                 ← o P atual, extraído
    ├── routine.js                ← a grade diária/semanal
    ├── pdfs.js                   ← biblioteca (incl. os 21 livros ausentes hoje)
    └── milestones.js             ← certificações e checkpoints
```

**Ganho concreto:** mudar "12 fases" ou renomear uma trilha passa a ser **1 edição em 1 arquivo**, propagando para as 16 páginas. Hoje são 16 edições manuais — e é exatamente por isso que as trilhas ficaram travadas no modelo de 8 fases.

Aproveite `data.js`/`index.js`/`trilha.js` como base — **eles já são quase isso**.

---

## 19. Necessidade de framework

### Veredito: **mantenha HTML/CSS/JS. Não migre.**

| Critério | Situação | Puxa para framework? |
|---|---|---|
| Nº de páginas | 16, estáveis | ❌ Não |
| Estado da aplicação | Praticamente nenhum (progresso + revisões = 2 objetos em `localStorage`) | ❌ Não |
| Interatividade | Busca, filtro, tabs, scrollspy | ❌ Não — DOM puro resolve |
| Reaproveitamento de componentes | **Alto e mal resolvido** | ⚠️ **Sim** — mas ES Modules resolvem igual |
| Roteamento | Nenhum (páginas estáticas) | ❌ Não |
| Dados dinâmicos / backend | Zero | ❌ Não |
| Objetivo do projeto | Uso pessoal, consulta rápida | ❌ Não |
| SEO / performance | Estático já é ótimo | ❌ Não |
| Custo de migração | **Muito alto** — 63.000 linhas de conteúdo denso a portar | ❌ Forte contra |

### Por que não migrar

1. **O problema é ausência de fonte única de dados, não ausência de framework.** ES Modules + um diretório `data/` resolvem 100% da duplicação — sem build, sem `node_modules`, sem toolchain.
2. **Migrar 63.000 linhas de HTML de conteúdo para JSX é semanas de trabalho e risco de perda de conteúdo** — tempo que deveria ir para estudar, não para reescrever.
3. **O deploy atual é perfeito**: estático, `cleanUrls`, zero build, custo zero.
4. **Você já estuda React/TypeScript** — o lugar certo para praticar isso é o **DevCore Platform** (que já prevê Next.js na Fase 4/11), não este dashboard.

### Quando reconsiderar

Só se aparecer **pelo menos um** destes:

- Necessidade de backend (sincronizar progresso entre dispositivos)
- Autenticação real
- Mais de ~40 páginas com estruturas divergentes
- Estado compartilhado complexo entre views

**Nenhum está no horizonte.** Uma etapa realista, se algum dia quiser build: adotar Astro (que aceita HTML como está, adiciona layouts/componentes e gera estático). Mas isso é P3 — não é necessário hoje.

---

## 20. Análise de UX

A plataforma deve responder 6 perguntas. Testando cada uma contra o produto real:

| Pergunta | Responde? | Realidade |
|---|---|---|
| **"O que preciso estudar hoje?"** | ⚠️ **Parcial** | A aba "Rotina diária" mostra o dia — mas você precisa clicar no dia certo, e a grade é idêntica em todos os dias. Não sabe em qual **fase** você está |
| **"Por que estou estudando isso?"** | ✅ **Sim** | Melhor ponto de UX. Cada dia tem `strategy` e `connection` explicando o encaixe. Excelente |
| **"Qual é o próximo assunto?"** | ❌ **Não** | Nenhum indicador de posição atual nem de "próximo". A aba Fases lista as 12; nenhuma está marcada como atual |
| **"Quanto já avancei?"** | ❌ **Não** | `#phaseProgress` mostra *distribuição de horas planejadas*, não progresso. Zero persistência |
| **"O que preciso revisar?"** | ❌ **Não** | Revisão só existe como texto descritivo de bloco |
| **"O que está bloqueando o próximo?"** | ⚠️ **Parcial** | `syncDependencies` na aba Sincronização é bom conceitualmente, mas é estático — não sabe onde você está |

**Placar: 1 respondida, 2 parciais, 3 não respondidas.** A plataforma é hoje uma **enciclopédia do plano**, não um **instrumento de navegação do plano**.

### Outros achados de UX

| # | Achado |
|---|---|
| U1 | **Nenhuma trilha linka para outra** — 0 links cruzados em 15 páginas. Só existe "voltar ao dashboard". Java não aponta para Bancos, Arquitetura não aponta para Java |
| U2 | **`ia.html` com 7.195 linhas em página única** — sem paginação nem TOC persistente; navegar é rolar |
| U3 | **Sem "continuar de onde parei"** — nem âncora, nem histórico |
| U4 | **Checkboxes em `financeiro.html` que somem no reload** — promessa quebrada de UX |
| U5 | **Sem favicon** — 16 abas idênticas no navegador |
| U6 | **A aba mais valiosa (Sincronização, com dependências e checkpoints) é a 7ª de 8** — enterrada |
| U7 | **Certificações existem só como timeline visual** — sem status, data-alvo ou checklist de preparo |
| U8 | **Busca de trilha e busca de PDF são separadas e não se comunicam** — não há busca global |

---

## 21. Dívida técnica

### 21.1 Dívida técnica crítica

#### DT-C1 — Rotina diária sem bloco de sono

- **Arquivo:** `public/index.html:3828-3850` (`buildDailyPlan()`)
- **Problema:** blocos cobrem 00:00→00:00 nos 7 dias. Sono = 0h. Chave `sleep` definida em `CK:1866` e nunca usada.
- **Causa:** compressão iterativa da grade para acomodar mais trilhas; o bloco de sono foi sacrificado.
- **Risco:** **abandono total do plano em semanas**; dano à saúde; a privação de sono anula a consolidação de memória do restante.
- **Solução:** inserir bloco fixo `sleep` de 7h30 (23:00–06:30) e reduzir a ~6h30 de foco/dia útil.

#### DT-C2 — Contradição fases × rotina diária

- **Arquivos:** `index.html` — `P:2395` vs `dailyPlansByDay:3411`
- **Problema:** as fases são sequenciais (Frontend mês 10, IA mês 28, Matemática mês 31); a rotina executa os 15 domínios em paralelo desde a semana 1.
- **Causa:** dois modelos criados em momentos diferentes, ambos mantidos.
- **Risco:** impossível saber o que estudar; o plano vira decoração.
- **Solução:** eleger o modelo de fases como fonte de verdade e derivar a rotina dele — a rotina de cada dia deve mudar conforme a fase ativa.

#### DT-C3 — Números do plano inconsistentes entre si

- **Arquivo:** `index.html:1571` ("65–75h/semana"), `P.h = 910` (÷13 = 70h/sem), grade real (112h/sem)
- **Risco:** todo o planejamento de 10.920h é irreal; metas incumpríveis por construção.
- **Solução:** recalcular a partir de ~38h/semana → ~500h/fase → ~6.000h totais.

#### DT-C4 — 15 páginas travadas no modelo de 8 fases

- **Arquivos:** `java`, `matematica`, `python`, `bancos`, `devops`, `financeiro`, `arquitetura` (+ `README.md`)
- **Problema:** `grep "12 fases"` retorna 0 em todas as trilhas; "Roadmap integrado às 8 fases" é o título literal nas páginas.
- **Causa:** ausência de fonte única — atualizar exigia 16 edições manuais.
- **Risco:** o dashboard diz uma coisa, a trilha diz outra; conteúdo perde confiabilidade.
- **Solução:** extrair fases para `data/phases.js` e renderizar o roadmap nas trilhas a partir dele.

#### DT-C5 — 369 MB de PDFs versionados, incluindo 21 livros comerciais

- **Arquivos:** `public/pdfs/livros-arquitetura/` (12), `public/pdfs/livros-ia/` (9); `.git` = 332 MB
- **Risco:** clone/deploy lentíssimos; limites da Vercel; **distribuição pública de obras protegidas por direitos autorais** num site aberto na internet.
- **Solução:** remover os livros do repositório (`git rm`, `.gitignore`, e limpeza de histórico com `git filter-repo` se quiser recuperar os 332 MB). Manter apenas a **lista de títulos** como referência bibliográfica — que é o que tem valor no plano. Os 12 PDFs próprios (150–330 KB) podem ficar.

### 21.2 Dívida técnica importante

#### DT-I1 — 1.413 linhas de JavaScript morto

- **Arquivos:** `assets/js/data.js` (996), `index.js` (239), `trilha.js` (178)
- **Problema:** nenhuma página os carrega. Confirmado por grep em 16 arquivos.
- **Causa:** refatoração para arquitetura modular iniciada e abandonada.
- **Risco:** confusão de manutenção; o `README` descreve uma arquitetura que não roda.
- **Solução:** **não deletar** — usar como base da extração de `data/` (é a arquitetura certa, já 60% pronta).

#### DT-I2 — `styles.css` conflitante carregado por 10 páginas

- **Arquivo:** `assets/css/styles.css`
- **Problema:** paleta e fontes de geração anterior, 100% sobrescritas pelo CSS inline.
- **Risco:** FOUC; qualquer classe não sobrescrita renderiza com tema errado.
- **Solução:** decidir — ou vira o CSS compartilhado real (recebendo os tokens atuais), ou é removido dos 10 `<link>`.

#### DT-I3 — ~19.700 linhas de CSS inline duplicado

- **Arquivos:** 15 trilhas, 987–1.798 linhas cada
- **Risco:** ajuste visual global = 15 edições; drift visual progressivo entre páginas.
- **Solução:** extrair `tokens.css` + `base.css` + `components.css`; manter por página só o realmente específico.

#### DT-I4 — IIFE de navegação duplicada 15× com drift

- **Arquivos:** todas as trilhas, blocos `<script>` finais (70–104 linhas)
- **Risco:** bug de navegação exige 15 correções; já há divergência de comportamento.
- **Solução:** `assets/js/core/nav.js` como ES Module, importado por todas.

#### DT-I5 — Zero persistência de estado

- **Escopo:** todo o projeto
- **Risco:** impossível medir progresso em 36 meses; os 28 checkboxes de `financeiro.html` mentem para o usuário.
- **Solução:** `core/storage.js` com `try/catch` + versionamento de schema.

#### DT-I6 — 3 páginas sem `<title>`

- **Arquivos:** `arquitetura.html`, `frontend.html`, `git.html`
- **Risco:** aba mostra a URL; bookmark sem nome; SEO perdido.
- **Solução:** adicionar `<title>` (correção de 3 linhas).

#### DT-I7 — Nenhum link cruzado entre trilhas

- **Escopo:** 15 páginas
- **Risco:** conhecimento fragmentado; nenhuma noção de dependência ao navegar.
- **Solução:** bloco "Trilhas relacionadas" gerado a partir de `data/tracks.js`.

#### DT-I8 — Ausência de `<main>` e skip-link

- **Escopo:** 15 de 16 páginas
- **Risco:** navegação por leitor de tela em páginas de 7.000 linhas fica inviável.
- **Solução:** envolver conteúdo em `<main id="conteudo">` + skip-link no topo.

### 21.3 Melhorias estruturais

| ID | Refatoração | Descrição |
|---|---|---|
| ME-1 | Extrair `data/` | 6 arquivos de dados como fonte única |
| ME-2 | Modularizar CSS | tokens → base → components → page-specific |
| ME-3 | Modularizar JS | `core/`, `features/`, `pages/` via ES Modules |
| ME-4 | Eliminar `!important` | 45–61 por página → alvo < 5, via especificidade correta |
| ME-5 | Consolidar paletas | `PC`/`PBG`/`CK`/`:root` → um único mapa de cores |
| ME-6 | Unificar busca | 1 módulo de busca para trilhas, PDFs e seções |
| ME-7 | Fragmentar `ia.html` | 7.195 linhas → 3–4 páginas ou seções colapsáveis |
| ME-8 | Substituir `window.*` globais | Event delegation em vez de `onclick` inline |

### 21.4 Melhorias opcionais

Favicon · `sitemap.xml` + `robots.txt` + Open Graph · `prefers-reduced-motion` · modo claro · atalhos de teclado (`/` para busca) · exportar progresso em JSON · gráfico de evolução · PWA/offline · autohospedar Bootstrap e fontes (elimina 2 CDNs).

---

## 22. Melhorias P0 — Crítico

*Comprometem funcionamento, saúde ou coerência do plano. Bloqueiam tudo.*

| ID | Melhoria | Tipo | Arquivos |
|---|---|---|---|
| **P0-1** | **Inserir bloco de sono (7h30) e reduzir a ~6h30 de foco/dia** | Rotina | `index.html:3828-3850` |
| **P0-2** | **Resolver contradição fases × rotina** — eleger fases como fonte de verdade, rotina derivada da fase ativa | Plano | `index.html` (`P`, `dailyPlansByDay`) |
| **P0-3** | **Remover 21 livros comerciais do repositório** (369 MB, direitos autorais) — manter só a bibliografia | Código/Legal | `public/pdfs/livros-*/` |
| **P0-4** | **Recalcular todos os números** para ~38h/sem · ~500h/fase · ~6.000h | Plano | `index.html` (`P.h`, hero, notas) |
| **P0-5** | **Adicionar 1 dia de folga real por semana** | Rotina | `dailyPlansByDay.domingo` |
| **P0-6** | **Corrigir `<title>` ausente** em 3 páginas | Código | `arquitetura`, `frontend`, `git` |

---

## 23. Melhorias P1 — Alta prioridade

*Impacto direto na qualidade e na utilidade diária.*

| ID | Melhoria | Tipo |
|---|---|---|
| **P1-1** | Extrair `data/` (config, tracks, phases, routine, pdfs, milestones) a partir de `data.js` | Código |
| **P1-2** | Sincronizar as 15 trilhas com o modelo de 12 fases (renderizar a partir de `data/phases.js`) | Conteúdo |
| **P1-3** | Implementar persistência (`core/storage.js`) + progresso por trilha e geral | Plataforma |
| **P1-4** | Criar view **"Hoje"** — fase atual + dia da semana + 3 blocos + revisões pendentes | Plataforma/UX |
| **P1-5** | Antecipar CI/CD (mês 22 → 6–8) e Segurança (mês 25 → 8–10) | Plano |
| **P1-6** | Reduzir a rotina a 2 domínios/dia; adotar dias temáticos | Rotina |
| **P1-7** | Implementar revisão D0/D1/D7/D30 com fila no dashboard | Plataforma/Rotina |
| **P1-8** | Extrair `core/nav.js` — eliminar as 15 IIFEs duplicadas | Código |
| **P1-9** | Adicionar trilha de **Estruturas de Dados e Algoritmos**, 3×/semana, contínua | Conteúdo |
| **P1-10** | Cortar DevCore de 54 RFs para ~15 RFs de MVP + mapear às 12 fases | Conteúdo |
| **P1-11** | Resolver `styles.css`: promover a compartilhado real ou remover os 10 `<link>` | Código |
| **P1-12** | Reduzir Frontend/Python/IA/Matemática de 54% para ~25% da rotina | Plano |

---

## 24. Melhorias P2 — Média prioridade

| ID | Melhoria | Tipo |
|---|---|---|
| **P2-1** | Extrair `tokens.css` + `base.css` + `components.css` | Código |
| **P2-2** | Adicionar `<main>` + skip-link + foco visível em 15 páginas | Acessibilidade |
| **P2-3** | Bloco "Trilhas relacionadas" gerado de `data/tracks.js` | UX |
| **P2-4** | Persistir os 28 checkboxes de `financeiro.html` | Plataforma |
| **P2-5** | Adicionar os 21 livros à biblioteca (como referência, sem hospedar o PDF) | Conteúdo |
| **P2-6** | Unificar busca (trilhas + PDFs + seções) em um módulo | Código/UX |
| **P2-7** | Consolidar as 4 paletas em uma | Código |
| **P2-8** | Fragmentar `ia.html` (7.195 linhas) e remover os 3 cronogramas conflitantes | Conteúdo |
| **P2-9** | Reduzir certificações AWS de 5 para 2 (CLF mês 8, SAA mês 18) | Plano |
| **P2-10** | Mover trilha Financeira para fora do plano técnico (revisão mensal) | Plano |
| **P2-11** | Atualizar `README.md` (descreve 8 trilhas; existem 15) | Código |
| **P2-12** | Reduzir `!important` de ~45–61/página para < 5 | Código |
| **P2-13** | Promover a aba Sincronização (7ª → 2ª posição) | UX |
| **P2-14** | Adicionar favicon | UX |
| **P2-15** | Painel de certificações com status e data-alvo | Plataforma |

---

## 25. Melhorias P3 — Evolução futura

| ID | Melhoria | Tipo |
|---|---|---|
| **P3-1** | `sitemap.xml`, `robots.txt`, Open Graph, `canonical` | SEO |
| **P3-2** | `prefers-reduced-motion` + modo claro | Acessibilidade |
| **P3-3** | Gráfico de evolução (horas/semana, tópicos concluídos) | Plataforma |
| **P3-4** | Exportar/importar progresso em JSON (backup) | Plataforma |
| **P3-5** | Atalhos de teclado (`/` busca, `g h` home) | UX |
| **P3-6** | PWA / offline | Performance |
| **P3-7** | Autohospedar Bootstrap + fontes (elimina 2 CDNs) | Performance |
| **P3-8** | Migrar para Astro **se e somente se** surgir necessidade de build | Arquitetura |
| **P3-9** | Histórico/log de estudo (o que foi feito em cada dia) | Plataforma |
| **P3-10** | Timeline visual de projetos × conhecimentos aplicados | UX |

---

## 26. Matriz impacto × esforço

| Item | Situação atual | Problema | Melhoria | Prior. | Impacto | Esforço |
|---|---|---|---|---|---|---|
| Sono na rotina | 0h, grade 24h | Fisiologicamente impossível | Bloco fixo 7h30 + foco 6h30 | P0 | **Alto** | **Baixo** |
| Fases × rotina | Dois planos incompatíveis | Não se sabe o que estudar | Fases como fonte; rotina derivada | P0 | **Alto** | Médio |
| PDFs de livros | 369 MB versionados | Peso + direitos autorais | Remover, manter bibliografia | P0 | **Alto** | **Baixo** |
| Carga horária | 112h vs 65–75h declarado | Metas incumpríveis | Recalcular p/ 38h/sem | P0 | **Alto** | **Baixo** |
| Dia de folga | 0/semana | Insustentável | Domingo livre | P0 | **Alto** | **Baixo** |
| `<title>` ausente | 3 páginas | Aba/SEO/bookmark quebrados | Adicionar tag | P0 | Médio | **Baixo** |
| Fonte única de dados | Hardcoded em 16 arquivos | 16 edições por mudança | Extrair `data/` | P1 | **Alto** | Médio |
| Trilhas em "8 fases" | 15 páginas defasadas | Contradição visível | Render a partir de `phases.js` | P1 | **Alto** | Médio |
| Persistência | Zero | "Quanto avancei?" sem resposta | `storage.js` + progresso | P1 | **Alto** | Médio |
| View "Hoje" | Inexistente | Pergunta #1 não respondida | Widget fase+dia+revisões | P1 | **Alto** | Médio |
| CI/CD tardio | Mês 22 | 16 meses sem pipeline | Mover p/ mês 6–8 | P1 | **Alto** | **Baixo** |
| Segurança tardia | Mês 25 | Usada desde a fase 2 | Transversal + mês 8–10 | P1 | **Alto** | **Baixo** |
| Domínios/dia | 5–6 | Context switching | Máx. 2, dias temáticos | P1 | **Alto** | **Baixo** |
| Revisão | Inexistente | Esquecimento em 36 meses | D0/D1/D7/D30 | P1 | **Alto** | Médio |
| IIFE duplicada | 15 cópias | Bug = 15 correções | `core/nav.js` | P1 | Médio | Médio |
| DSA ausente | 1 menção | Filtro de entrevista | Trilha contínua 3×/sem | P1 | **Alto** | Médio |
| DevCore 54 RFs | Escopo de produto | Nunca fecha | MVP de 15 RFs | P1 | **Alto** | **Baixo** |
| `styles.css` morto | 10 páginas carregam | Conflito de tema | Promover ou remover | P1 | Médio | **Baixo** |
| CSS duplicado | ~19.700 linhas | Drift visual | tokens/base/components | P2 | Médio | **Alto** |
| `<main>` + skip-link | 1/16 páginas | A11y comprometida | Adicionar landmarks | P2 | Médio | Médio |
| Links entre trilhas | Zero | Conhecimento fragmentado | "Trilhas relacionadas" | P2 | Médio | **Baixo** |
| Checkboxes financeiro | 28 sem salvar | Promessa quebrada | Persistir | P2 | **Baixo** | **Baixo** |
| `ia.html` 7.195 linhas | Página única | Navegação ruim | Fragmentar | P2 | Médio | Médio |
| Certificações | 5 planejadas | Excesso | Reduzir a 2 | P2 | Médio | **Baixo** |
| Trilha financeira | 2×/sem no plano técnico | Fora de escopo | Revisão mensal | P2 | Médio | **Baixo** |
| `!important` | 45–61/página | Cascata perdida | Especificidade correta | P2 | **Baixo** | **Alto** |
| README | Descreve 8 trilhas | Doc incorreta | Atualizar | P2 | **Baixo** | **Baixo** |
| Framework | HTML/CSS/JS | — | **Manter** | P3 | — | — |

---

## 27. Backlog STUDY-XXX

### Conteúdo (CONTENT)

| ID | Categoria | Melhoria | Prior. | Dependência |
|---|---|---|---|---|
| STUDY-001 | CONTENT | Eleger fases como fonte de verdade; eliminar contradição com a rotina | P0 | — |
| STUDY-002 | CONTENT | Recalcular horas: 38h/sem · ~500h/fase · ~6.000h totais | P0 | STUDY-001 |
| STUDY-003 | CONTENT | Sincronizar as 15 trilhas: 8 fases → 12 fases | P1 | STUDY-020 |
| STUDY-004 | CONTENT | Antecipar CI/CD para mês 6–8 | P1 | STUDY-001 |
| STUDY-005 | CONTENT | Segurança: transversal + módulo mês 8–10 | P1 | STUDY-001 |
| STUDY-006 | CONTENT | Criar trilha de Estruturas de Dados e Algoritmos (3×/sem, contínua) | P1 | STUDY-001 |
| STUDY-007 | CONTENT | Reduzir Frontend/Python/IA/Matemática de 54% para ~25% | P1 | STUDY-001 |
| STUDY-008 | CONTENT | Fundir Fase 7 (Kafka) na Fase 6 (arquitetura distribuída) | P2 | STUDY-001 |
| STUDY-009 | CONTENT | Remover 3 cronogramas conflitantes de `ia.html` | P2 | STUDY-003 |
| STUDY-010 | CONTENT | Reduzir certificações AWS de 5 para 2 (CLF m8, SAA m18) | P2 | STUDY-001 |
| STUDY-011 | CONTENT | Mover trilha Financeira para revisão mensal, fora do plano técnico | P2 | STUDY-001 |
| STUDY-012 | CONTENT | Colapsar `treino.html` para 1 página de referência | P3 | — |
| STUDY-013 | CONTENT | Adicionar Virtual Threads e concorrência como seção em `java.html` | P2 | — |
| STUDY-014 | CONTENT | Adicionar módulo de FinOps/custo em `aws.html` | P3 | — |
| STUDY-015 | CONTENT | Adicionar os 21 livros à biblioteca como bibliografia (sem PDF) | P2 | STUDY-032 |

### Rotina (ROUTINE)

| ID | Categoria | Melhoria | Prior. | Dependência |
|---|---|---|---|---|
| STUDY-016 | ROUTINE | **Inserir bloco de sono 7h30 (23:00–06:30)** | **P0** | — |
| STUDY-017 | ROUTINE | Reduzir foco para ~6h30/dia útil | P0 | STUDY-016 |
| STUDY-018 | ROUTINE | Domingo como folga real (só 1h de revisão leve) | P0 | STUDY-016 |
| STUDY-019 | ROUTINE | Máximo 2 domínios técnicos/dia; dias temáticos | P1 | STUDY-001 |
| STUDY-020 | ROUTINE | Rotina derivada da fase ativa (grade varia por fase) | P1 | STUDY-001, STUDY-021 |
| STUDY-021 | ROUTINE | Implementar ciclo mensal: 3 semanas execução + 1 consolidação | P1 | STUDY-001 |
| STUDY-022 | ROUTINE | Implementar revisão D0/D1/D7/D30 | P1 | STUDY-038 |
| STUDY-023 | ROUTINE | Buffer semanal de 3h para reposição | P2 | STUDY-017 |
| STUDY-024 | ROUTINE | Eliminar blocos 01:00–05:00 | P0 | STUDY-016 |

### Arquitetura (ARCHITECTURE)

| ID | Categoria | Melhoria | Prior. | Dependência |
|---|---|---|---|---|
| STUDY-025 | ARCHITECTURE | Criar `data/config.js` (fases, semanas, ciclos) — fonte única | P1 | STUDY-002 |
| STUDY-026 | ARCHITECTURE | Criar `data/tracks.js` (15 trilhas, cor, href, badges) | P1 | — |
| STUDY-027 | ARCHITECTURE | Criar `data/phases.js` (extrair `P`, 910 linhas) | P1 | STUDY-025 |
| STUDY-028 | ARCHITECTURE | Criar `data/routine.js` (grade diária/semanal) | P1 | STUDY-019 |
| STUDY-029 | ARCHITECTURE | Criar `data/pdfs.js` e `data/milestones.js` | P2 | — |
| STUDY-030 | ARCHITECTURE | Migrar páginas para `<script type="module">` | P1 | STUDY-025..029 |
| STUDY-031 | ARCHITECTURE | Reaproveitar `data.js`/`index.js`/`trilha.js` como base da extração | P1 | STUDY-025 |
| STUDY-032 | ARCHITECTURE | **Remover 21 livros do repo + `.gitignore` + limpar histórico** | **P0** | — |
| STUDY-033 | ARCHITECTURE | Decidir destino de `assets/css/styles.css` | P1 | STUDY-034 |

### Frontend / Refactor (FRONTEND, REFACTOR)

| ID | Categoria | Melhoria | Prior. | Dependência |
|---|---|---|---|---|
| STUDY-034 | REFACTOR | Extrair `tokens.css` + `base.css` + `components.css` | P2 | — |
| STUDY-035 | REFACTOR | Extrair `core/nav.js` — eliminar 15 IIFEs | P1 | STUDY-030 |
| STUDY-036 | REFACTOR | Unificar busca em `core/search.js` | P2 | STUDY-030 |
| STUDY-037 | REFACTOR | Consolidar `PC`/`PBG`/`CK`/`:root` em uma paleta | P2 | STUDY-026 |
| STUDY-038 | REFACTOR | Criar `core/storage.js` (localStorage + try/catch + versão) | P1 | STUDY-030 |
| STUDY-039 | FRONTEND | Adicionar `<title>` em arquitetura/frontend/git | **P0** | — |
| STUDY-040 | FRONTEND | Adicionar favicon nas 16 páginas | P2 | — |
| STUDY-041 | REFACTOR | Substituir `window.filterPhase/filterTrack` por event delegation | P2 | STUDY-030 |
| STUDY-042 | REFACTOR | Reduzir `!important` para < 5/página | P2 | STUDY-034 |
| STUDY-043 | FRONTEND | Fragmentar `ia.html` (7.195 linhas) | P2 | STUDY-034 |
| STUDY-044 | FRONTEND | Mover `<style>`/`<script>` de `blog.html` do body para o head | P3 | — |
| STUDY-045 | FRONTEND | Atualizar `README.md` (8 → 15 trilhas, arquitetura real) | P2 | STUDY-030 |

### Funcionalidades (FEATURE)

| ID | Categoria | Melhoria | Prior. | Dependência |
|---|---|---|---|---|
| STUDY-046 | FEATURE | **View "Hoje"** — fase atual, dia, 3 blocos, revisões pendentes | P1 | STUDY-038, STUDY-028 |
| STUDY-047 | FEATURE | Progresso por trilha (% concluído) | P1 | STUDY-038 |
| STUDY-048 | FEATURE | Progresso geral + fase atual destacada | P1 | STUDY-047 |
| STUDY-049 | FEATURE | Fila de revisão D1/D7/D30 no dashboard | P1 | STUDY-022 |
| STUDY-050 | FEATURE | Checklist persistente por tópico de fase | P1 | STUDY-038 |
| STUDY-051 | FEATURE | Persistir os 28 checkboxes de `financeiro.html` | P2 | STUDY-038 |
| STUDY-052 | FEATURE | Painel de certificações com status e data-alvo | P2 | STUDY-029 |
| STUDY-053 | FEATURE | Vínculo tópico ↔ commit do DevCore | P2 | STUDY-050 |
| STUDY-054 | FEATURE | Exportar/importar progresso em JSON | P3 | STUDY-038 |
| STUDY-055 | FEATURE | Gráfico de evolução (horas/semana, tópicos) | P3 | STUDY-047 |
| STUDY-056 | FEATURE | Histórico de estudo por dia | P3 | STUDY-038 |

### UX / Acessibilidade / Performance

| ID | Categoria | Melhoria | Prior. | Dependência |
|---|---|---|---|---|
| STUDY-057 | UX | Bloco "Trilhas relacionadas" em cada trilha | P2 | STUDY-026 |
| STUDY-058 | UX | Promover aba Sincronização (7ª → 2ª) | P2 | — |
| STUDY-059 | UX | Indicador visual de "fase atual" nos cards | P1 | STUDY-048 |
| STUDY-060 | UX | Busca global (trilhas + PDFs + seções) | P2 | STUDY-036 |
| STUDY-061 | UX | Atalhos de teclado (`/` busca) | P3 | STUDY-060 |
| STUDY-062 | ACCESSIBILITY | `<main>` + skip-link em 15 páginas | P2 | — |
| STUDY-063 | ACCESSIBILITY | Foco visível customizado | P2 | STUDY-034 |
| STUDY-064 | ACCESSIBILITY | Corrigir contraste de `--text3` | P2 | STUDY-034 |
| STUDY-065 | ACCESSIBILITY | `prefers-reduced-motion` | P3 | STUDY-034 |
| STUDY-066 | ACCESSIBILITY | `aria-controls`/`aria-selected` nas tabs | P2 | — |
| STUDY-067 | PERFORMANCE | Autohospedar Bootstrap e fontes | P3 | — |
| STUDY-068 | PERFORMANCE | `sitemap.xml`, `robots.txt`, Open Graph | P3 | — |
| STUDY-069 | PERFORMANCE | PWA/offline | P3 | STUDY-030 |
| STUDY-070 | ARCHITECTURE | Avaliar Astro **apenas se** surgir necessidade de build | P3 | — |

---

## 28. Roadmap de implementação em etapas

### Etapa 1 — Correções estruturais e de saúde do plano

- **Objetivo:** tornar o plano fisicamente executável e o repositório saudável.
- **Problema que resolve:** DT-C1, DT-C3, DT-C5 — rotina sem sono, números irreais, 369 MB de peso e risco autoral.
- **Arquivos:** `index.html` (`buildDailyPlan`, `P.h`, hero, notas de horas), `public/pdfs/livros-*/`, `.gitignore`, `arquitetura.html`, `frontend.html`, `git.html`
- **Alterações:** inserir bloco `sleep` 23:00–06:30 · remover blocos 01:00–05:00 · reduzir a ~6h30 de foco · domingo como folga · recalcular `P.h` de 910 → ~500 · atualizar textos "65–75h" → "36–40h" · `git rm -r --cached` dos livros · adicionar `<title>` nas 3 páginas
- **Prioridade:** P0 · **Dificuldade:** Baixa · **Impacto:** Muito alto · **Dependências:** nenhuma
- **Concluída quando:** a grade diária soma 24h **incluindo 7h30 de sono**; domingo tem ≤ 1h de estudo; todos os números da página batem entre si; `du -sh public/pdfs` < 5 MB; 16/16 páginas com `<title>`.

### Etapa 2 — Reestruturação do plano de estudos

- **Objetivo:** eliminar a contradição fases × rotina e corrigir a ordem das disciplinas.
- **Problema:** DT-C2, DT-C4 — dois planos incompatíveis; disciplinas críticas tarde demais.
- **Arquivos:** `index.html` (`P`, `weeklyFocusByDay`, `dailyPlansByDay`, `syncCycles`)
- **Alterações:** declarar fases como fonte de verdade · antecipar CI/CD (mês 22→6-8) e Segurança (mês 25→8-10) · fundir Fase 7 na 6 · criar trilha DSA contínua · reduzir Frontend/Python/IA/Matemática para ~25% · reduzir certificações para 2 · mover Financeiro para revisão mensal
- **Prioridade:** P0/P1 · **Dificuldade:** Média · **Impacto:** Muito alto · **Dependências:** Etapa 1
- **Concluída quando:** cada trilha tem UMA janela de fase declarada; a rotina só contém domínios ativos na fase corrente; CI/CD e Segurança aparecem antes do mês 10; DSA aparece do mês 1 ao 36.

### Etapa 3 — Melhoria da rotina

- **Objetivo:** rotina sustentável de 36 meses com retenção real.
- **Problema:** 5–6 domínios/dia, sem revisão, sem margem de recuperação.
- **Arquivos:** `index.html` (`dailyPlansByDay`, `weeklyFocusByDay`, `buildDailyPlan`)
- **Alterações:** dias temáticos com 1 principal + 1 complementar · ciclo mensal 3+1 · bloco fixo de revisão 21:00–22:15 · buffer de 3h/semana
- **Prioridade:** P1 · **Dificuldade:** Média · **Impacto:** Alto · **Dependências:** Etapa 2
- **Concluída quando:** nenhum dia tem mais de 2 domínios técnicos; existe bloco diário de revisão ativa; a semana 4 de cada mês não tem conteúdo novo; total = 36–40h.

### Etapa 4 — Organização do código (fonte única de dados)

- **Objetivo:** eliminar a duplicação estrutural que trava a evolução do conteúdo.
- **Problema:** DT-C4, DT-I1, DT-I3, DT-I4 — 16 edições manuais para qualquer mudança.
- **Arquivos:** novo `public/data/*.js` · novo `public/assets/js/core/*.js` · 16 HTMLs (trocar `<script>` por `<script type="module">`)
- **Alterações:** extrair `config.js`, `tracks.js`, `phases.js`, `routine.js`, `pdfs.js`, `milestones.js` (partindo de `data.js`) · criar `core/nav.js`, `core/search.js`, `core/storage.js`, `core/render.js` · remover as 15 IIFEs · resolver `styles.css`
- **Prioridade:** P1 · **Dificuldade:** Alta · **Impacto:** Muito alto · **Dependências:** Etapas 2–3 (extrair só depois do conteúdo estabilizado)
- **Concluída quando:** trocar o número de fases em `data/config.js` reflete nas 16 páginas; nenhuma IIFE de nav duplicada nas trilhas; nenhum arquivo JS não referenciado; todas as páginas funcionam idênticas ao antes.

### Etapa 5 — Sincronização das trilhas com o plano

- **Objetivo:** eliminar a contradição "8 fases" nas páginas de trilha.
- **Problema:** DT-C4 — conteúdo desatualizado em 15 páginas.
- **Arquivos:** 15 trilhas (seção "Roadmap por fase") + `README.md`
- **Alterações:** substituir o roadmap estático por um container renderizado a partir de `data/phases.js` filtrado pela `key` da trilha · atualizar README
- **Prioridade:** P1 · **Dificuldade:** Média · **Impacto:** Alto · **Dependências:** Etapa 4
- **Concluída quando:** `grep -r "8 fases" public/` retorna 0; toda trilha exibe as 12 fases com seu conteúdo próprio; README reflete 15 trilhas e a arquitetura real.

### Etapa 6 — Progresso e acompanhamento

- **Objetivo:** responder "quanto avancei?" e "o que revisar?".
- **Problema:** DT-I5 — zero persistência, zero revisão.
- **Arquivos:** `core/storage.js`, `features/progress.js`, `features/review.js`, `features/today.js`, `index.html`, 15 trilhas
- **Alterações:** checklist persistente por tópico · % por trilha e geral · fase atual destacada · fila D1/D7/D30 · persistir checkboxes de `financeiro.html` · painel de certificações
- **Prioridade:** P1 · **Dificuldade:** Média · **Impacto:** Muito alto · **Dependências:** Etapa 4
- **Concluída quando:** marcar um tópico persiste após reload; dashboard mostra % geral e fase atual; existe lista "revisar hoje"; nenhum checkbox perde estado.

### Etapa 7 — UX e navegação

- **Objetivo:** transformar enciclopédia em instrumento de navegação.
- **Problema:** 3 das 6 perguntas centrais sem resposta; 0 links cruzados.
- **Arquivos:** `index.html`, 15 trilhas, `features/today.js`, `core/search.js`
- **Alterações:** view "Hoje" no topo do dashboard · "Trilhas relacionadas" · busca global · Sincronização para 2ª aba · favicon · `<main>` + skip-link · foco visível · contraste corrigido · `aria-controls`/`aria-selected`
- **Prioridade:** P1/P2 · **Dificuldade:** Média · **Impacto:** Alto · **Dependências:** Etapas 4 e 6
- **Concluída quando:** abrir o dashboard responde "hoje é dia X da fase Y, estude A e B, revise C" em 1 tela; toda trilha linka para ≥ 2 relacionadas; Lighthouse Accessibility ≥ 90.

### Etapa 8 — Integração com projetos e prática

- **Objetivo:** ligar conhecimento a entregável verificável.
- **Problema:** DevCore com escopo de produto; tópicos sem evidência de aplicação.
- **Arquivos:** `blog.html`, `data/phases.js`, `features/progress.js`
- **Alterações:** cortar de 54 RFs para ~15 de MVP · mapear as 7 fases do DevCore às 12 do plano · campo `projeto` por tópico de fase · regra "tópico só conta com commit no DevCore" · link tópico ↔ commit
- **Prioridade:** P2 · **Dificuldade:** Média · **Impacto:** Alto · **Dependências:** Etapas 5 e 6
- **Concluída quando:** cada fase tem 1 entregável DevCore explícito; % de progresso considera evidência de projeto; DevCore MVP cabe nas fases 1–4.

### Etapa 9 — Refinamento e evolução futura

- **Objetivo:** polimento e opcionais.
- **Escopo:** extrair CSS em camadas · reduzir `!important` · fragmentar `ia.html` · SEO técnico · `prefers-reduced-motion` · modo claro · gráfico de evolução · export JSON · autohospedar CDNs · PWA
- **Prioridade:** P2/P3 · **Dificuldade:** Variável · **Impacto:** Médio · **Dependências:** Etapa 7
- **Concluída quando:** CSS inline por página < 300 linhas; `!important` < 5/página; Lighthouse ≥ 90 nas 4 categorias.

---

## 29. Estrutura recomendada das trilhas

**Base: as 15 trilhas reais existentes.** Reorganização apenas onde há justificativa.

| # | Trilha proposta | Páginas atuais | Mudança |
|---|---|---|---|
| **1** | **Backend Java e Engenharia de Software** | `java.html` | ✅ Mantida. **Trilha âncora**, ~45% do foco |
| **2** | **Banco de Dados (SQL e NoSQL)** | `bancos.html` | ✅ Mantida. Sobe para P1 permanente |
| **3** | **Testes e Qualidade** | *(hoje dentro de `java.html`)* | 🆕 **Separar.** Testes são competência autônoma e critério objetivo de senioridade |
| **4** | **Algoritmos e Estruturas de Dados** | *(quase inexistente)* | 🆕 **Criar.** Lacuna crítica; 3×/semana do mês 1 ao 36 |
| **5** | **Arquitetura e System Design** | `arquitetura.html` | ✅ Mantida + absorve mensageria/Kafka (hoje na Fase 7 isolada) |
| **6** | **Cloud, DevOps e Observabilidade** | `aws.html` + `devops.html` | 🔀 **Fundir.** Hoje se sobrepõem (Docker, CI/CD, K8s, Terraform aparecem nas duas) |
| **7** | **Segurança Aplicada** | `sec.html` | ✅ Mantida, mas **transversal desde a Fase 1**, não Fase 9 |
| **8** | **Git e Versionamento** | `git.html` | ✅ Mantida como transversal |
| **9** | **Inglês Técnico** | `ingles.html` | ✅ Mantida como transversal |
| **10** | **Frontend (complementar)** | `frontend.html` | ⬇️ **Rebaixada** de 18% para ~10%, a partir do mês 10 |
| **11** | **Python e IA Aplicada** | `python.html` + `ia.html` | 🔀 **Fundir e rebaixar** para P4 (mês 24+). Hoje são 9.891 linhas em duas páginas com forte sobreposição |
| **12** | **Matemática Aplicada** | `matematica.html` | ⬇️ **Rebaixada e acoplada** — só entra vinculada a SQL/estatística ou IA/álgebra linear |
| **13** | **DevCore Platform (projeto integrador)** | `blog.html` | 🔄 **Recategorizada:** não é trilha de estudo, é **o projeto**. Escopo cortado para MVP |
| — | ~~Trilha Financeira~~ | `financeiro.html` | ➖ **Fora do plano técnico.** Manter a página, virar revisão mensal de 1h |
| — | ~~Trilha Treino~~ | `treino.html` | ➖ **Fora do plano técnico.** Treino permanece na rotina; o documento vira referência |

**Resultado: 12 trilhas técnicas + 1 projeto integrador + 2 páginas de apoio pessoal** — contra 15 trilhas todas competindo pelo mesmo tempo. Nenhuma página é deletada; o que muda é o peso e a posição no plano.

---

## 30. Estrutura recomendada da rotina

### Camada 1 — Dia (dias temáticos)

```txt
🛏️  23:00–06:30   Sono (7h30)  ← INEGOCIÁVEL
🏃  06:30–07:45   Cardio + higiene + café + foco do dia
🎯  07:45–09:45   Deep work 1 — domínio PRINCIPAL       [2h00]
☕  09:45–10:15   Pausa sem tela
🎯  10:15–11:45   Deep work 2 — aplicação/projeto       [1h30]
🍽️  11:45–13:00   Almoço + descanso real
📘  13:00–14:00   Domínio COMPLEMENTAR                  [1h00]
☕  14:00–14:20   Pausa
🧮  14:20–15:00   DSA (3×/sem) ou Inglês (2×/sem)       [0h40]
🌤️  15:00–18:00   Vida / trabalho / folga
🏋️  18:00–19:30   Musculação
🍽️  19:30–21:00   Banho + jantar + descompressão
🔁  21:00–22:15   Revisão ativa + fila D1/D7/D30        [1h15]
✅  22:15–23:00   Fechamento: commit, notas, plano D+1  [0h45]

FOCO TÉCNICO: 6h30/dia útil
```

### Camada 2 — Semana

| Dia | Principal | Complementar | Extra |
|---|---|---|---|
| Seg | Java/Spring — feature | Banco/SQL | DSA |
| Ter | Java/Spring — testes | Arquitetura | Inglês |
| Qua | Banco / performance | Docker/CI-CD | DSA |
| Qui | Java/Spring — integração | Segurança | Inglês |
| Sex | Cloud/DevOps/observabilidade | Arquitetura | DSA |
| Sáb | 🚀 DevCore (4h) | — | System Design (1h) |
| Dom | 🌴 Folga | Revisão D7/D30 (1h) | — |

**Total: ~38h/semana.**

### Camada 3 — Mês

| Semana | Modo |
|---|---|
| 1 | Execução — conteúdo novo |
| 2 | Execução — conteúdo novo |
| 3 | Execução — aplicação no DevCore |
| 4 | **Consolidação** — sem conteúdo novo: revisão D30, refatoração, ADR, deploy, checklist, ajuste de rota |

### Camada 4 — Fase (trimestre)

12 fases × 3 meses. Avanço com ≥ 80% dos critérios (a regra atual, que é boa): projeto entregue · testes · deploy reproduzível · README em inglês · ADR quando aplicável · bugs corrigidos · explicação oral · evidência no GitHub.

### Camada 5 — Trilhas transversais (todo dia, todas as fases)

`Git` · `Inglês` · `DSA` · `Clean Code` · `Segurança básica`

### Comparação

| Métrica | Hoje | Proposto |
|---|---|---|
| Sono | **0h** | **7h30** |
| Foco/dia | 16h | 6h30 |
| Foco/semana | 112h | ~38h |
| Dias de folga | 0 | 1 |
| Domínios/dia | 5–6 | 2 |
| Java/Spring | 22% | ~45% |
| Revisão sistematizada | Não | Sim (D1/D7/D30) |
| Total 36 meses | 10.920h (irreal) | ~6.000h (executável) |

> 6.000h de estudo focado, com sono e revisão, produz um engenheiro muito mais forte que 10.920h teóricas que ninguém consegue executar. **Consistência bate intensidade em qualquer horizonte de 36 meses.**

---

## 31. Arquitetura recomendada para evolução do projeto

### Decisão: HTML + CSS + JS com ES Modules. Sem framework, sem build.

```txt
study-plan/
├── vercel.json
├── .gitignore                       ← ignorar PDFs de livros
├── README.md                        ← atualizado (15 trilhas, arquitetura real)
└── public/
    ├── index.html                   ← markup + <script type="module">
    ├── trilhas/*.html               ← 15 páginas, markup + module
    │
    ├── data/                        ← ⭐ FONTE ÚNICA DE VERDADE
    │   ├── config.js                   fases, semanas, ciclos, horas
    │   ├── tracks.js                   15 trilhas: key, label, cor, href, badges
    │   ├── phases.js                   currículo por fase × trilha (o P atual)
    │   ├── routine.js                  grade diária, dias temáticos, ciclo mensal
    │   ├── pdfs.js                     biblioteca (12 PDFs + 21 livros como bibliografia)
    │   └── milestones.js               certificações e checkpoints
    │
    ├── assets/
    │   ├── css/
    │   │   ├── tokens.css              :root — cores, tipografia, spacing
    │   │   ├── base.css                reset, body, tipografia, utilitários
    │   │   ├── components.css          cards, badges, tabelas, timeline, nav, hero
    │   │   └── pages/<trilha>.css      só o realmente específico (< 200 linhas)
    │   └── js/
    │       ├── core/
    │       │   ├── nav.js              a IIFE, UMA vez
    │       │   ├── search.js           busca unificada
    │       │   ├── storage.js          localStorage + try/catch + versão de schema
    │       │   └── render.js           helpers de template
    │       ├── features/
    │       │   ├── today.js            "o que estudo hoje"
    │       │   ├── progress.js         progresso por trilha e geral
    │       │   └── review.js           fila D1/D7/D30
    │       └── pages/
    │           ├── dashboard.js
    │           └── trilha.js
    └── pdfs/                        ← só os 12 PDFs próprios (~2,5 MB)
```

### Princípios

1. **Conteúdo em `data/`, apresentação em `assets/js/`, estrutura em HTML.** Nenhum dado de currículo dentro de função de render.
2. **ES Modules nativos.** `<script type="module">` funciona em todo navegador moderno e na Vercel sem build. Zero `node_modules`.
3. **CSS em camadas:** tokens → base → components → page. Uma página nova herda 90% do visual.
4. **`localStorage` com wrapper.** Nunca acessar direto: sempre via `core/storage.js`, com `try/catch` e versão de schema.
5. **Nenhuma reescrita de conteúdo.** As 63.000 linhas de HTML permanecem; muda o que envolve, não o que está dentro.
6. **Migração incremental.** Uma página por vez; o site nunca quebra.

### O que NÃO fazer

- ❌ Migrar para React/Next — custo enorme, benefício nulo para 16 páginas estáticas
- ❌ Adicionar bundler/npm — o projeto não precisa e o deploy fica pior
- ❌ Construir um SRS completo — D0/D1/D7/D30 com 4 datas resolve
- ❌ Criar backend — `localStorage` + export JSON cobre uso pessoal
- ❌ Deletar `data.js`/`index.js`/`trilha.js` — são a base da extração

### Ganho concreto

| Operação | Hoje | Depois |
|---|---|---|
| Mudar nº de fases | 16 arquivos | **1 arquivo** |
| Renomear trilha | 16 arquivos | **1 arquivo** |
| Corrigir bug de nav | 15 arquivos | **1 arquivo** |
| Ajustar cor de trilha | 4 lugares × 16 arquivos | **1 arquivo** |
| Adicionar trilha nova | ~3.500 linhas copiadas | **~200 linhas** |
| Clonar o repositório | 332 MB | **~10 MB** |

---

## ✅ As 10 melhorias mais importantes do projeto

| # | Melhoria | Categoria | Por quê |
|---|---|---|---|
| **1** | **Inserir bloco de sono de 7h30 e reduzir para ~6h30 de foco/dia** | Rotina | A grade atual cobre 24h sem sono, 7 dias/semana. É o único item que, sozinho, inviabiliza os outros 35 meses e 29 dias |
| **2** | **Resolver a contradição fases × rotina** | Plano | Existem dois planos incompatíveis na mesma página. Enquanto isso não se resolve, "o que estudo hoje?" não tem resposta |
| **3** | **Criar `data/` como fonte única de verdade** | Código | É a causa-raiz de toda a duplicação. As trilhas ficaram em "8 fases" porque atualizar exigia 16 edições manuais |
| **4** | **Implementar persistência de progresso** | Plataforma | Zero `localStorage` em todo o projeto. Sem isso, a plataforma nunca responde "quanto avancei?" |
| **5** | **Corrigir a carga horária declarada (112h → ~38h/semana)** | Plano | Todo o cálculo de 10.920h é ficcional. Metas incumpríveis por construção geram abandono |
| **6** | **Antecipar CI/CD (mês 22→6-8) e Segurança (mês 25→8-10)** | Plano | São pré-requisitos usados desde a Fase 2. Deixá-los no fim significa 16–20 meses estudando sem rede de segurança |
| **7** | **Criar a view "Hoje" (fase + dia + blocos + revisões)** | Plataforma | Uma tela que responde as 6 perguntas centrais vale mais que as outras 7 abas somadas |
| **8** | **Reduzir para 2 domínios técnicos/dia (dias temáticos)** | Rotina | 5–6 trocas de contexto/dia custam ~2h diárias e impedem profundidade real |
| **9** | **Implementar revisão D0/D1/D7/D30** | Rotina/Plataforma | 36 meses sem revisão sistemática = esquecer as Fases 1–4 antes de chegar na 8 |
| **10** | **Remover 369 MB de livros do repositório** | Código | Repo de 700 MB para um site estático, com 21 obras comerciais publicadas em site aberto |

---

## 🚀 As 5 primeiras ações que devem ser executadas

*Nesta ordem exata. As três primeiras são de baixo esforço e altíssimo impacto.*

### 1️⃣ Inserir o bloco de sono e reduzir a grade diária

**Arquivo:** `public/index.html:3828-3850` (`buildDailyPlan()`)

Adicionar bloco `sleep` 23:00–06:30 (a chave `sleep` já existe em `CK:1866`, basta usá-la). Remover os blocos 01:00–03:00 e 03:00–05:00. Recompor o dia para ~6h30 de foco.

→ *Esforço: 1h. Impacto: viabiliza todo o resto.*

### 2️⃣ Corrigir os números do plano

**Arquivo:** `public/index.html` — `P.h` (12×), hero eyebrow, `hours-margin-note` (linha 1571), `metric-card`

`910h/fase` → `~500h/fase`; `65–75h/sem` → `36–40h/sem`; `10.920h` → `~6.000h`.

→ *Esforço: 1h. Impacto: o plano passa a ser cumprível.*

### 3️⃣ Limpar o repositório e corrigir os `<title>` ausentes

```bash
# revisar antes de executar
git rm -r --cached public/pdfs/livros-arquitetura public/pdfs/livros-ia
echo "public/pdfs/livros-*/" >> .gitignore
```

Adicionar `<title>` em `arquitetura.html`, `frontend.html`, `git.html`.

→ *Esforço: 30min (+ opcional `git filter-repo` para recuperar os 332 MB). Impacto: repo de 700 MB → ~10 MB.*

### 4️⃣ Decidir e documentar o modelo único: fases × rotina

**Arquivos:** `index.html` — `P`, `dailyPlansByDay`, `weeklyFocusByDay`

Declarar as 12 fases como fonte de verdade. Fazer a rotina de cada dia refletir apenas os domínios ativos da fase corrente. Antecipar CI/CD e Segurança. Rebaixar Frontend/Python/IA/Matemática de 54% para ~25%.

→ *Esforço: 4–6h. Impacto: "o que estudo hoje?" passa a ter resposta.*

### 5️⃣ Extrair `data/config.js`, `data/tracks.js` e `data/phases.js`

Partindo de `assets/js/data.js` (996 linhas já escritas). Trocar `<script>` por `<script type="module">` no `index.html` e importar. Validar que a página renderiza idêntica.

→ *Esforço: 4–6h. Impacto: destrava as Etapas 4–8 inteiras; a partir daqui toda mudança de conteúdo é 1 edição em 1 arquivo.*
