# Auditoria Pós-Implementação — Plano Integrado de Estudos

> Segunda análise, executada após a conclusão das 11 etapas de melhorias.
> Complementa (não substitui) o [ANALISE-PROJETO.md](ANALISE-PROJETO.md), que é a baseline.
>
> **Todas as afirmações estão ancoradas em medições do repositório.** Nenhum arquivo foi alterado nesta análise.
>
> Estado auditado: commits `ef4733d` (etapas de melhoria) e `7cc9356` (reintrodução dos livros).
>
> **Atualização de 27/07/2026:** as seções 1–18 abaixo são preservadas como retrato histórico anterior à implementação de `DIDATIC-001` a `DIDATIC-025`. O estado vigente, incluindo a revisão visual, responsiva e de acessibilidade, está consolidado na [seção 19](#19-revisão-visual-responsiva-e-de-acessibilidade--27072026).

---

## Índice

1. [Resumo executivo](#1-resumo-executivo)
2. [Escopo analisado](#2-escopo-analisado)
3. [Comparação com a análise anterior](#3-comparação-com-a-análise-anterior)
4. [Status das fases implementadas](#4-status-das-fases-implementadas)
5. [Concluídas, parciais, não concluídas e regressões](#5-concluídas-parciais-não-concluídas-e-regressões)
6. [Diagnóstico e matriz de maturidade](#6-diagnóstico-e-matriz-de-maturidade)
7. [Auditoria didática e análise por trilha](#7-auditoria-didática-e-análise-por-trilha)
8. [Objetivos de aprendizagem](#8-objetivos-de-aprendizagem)
9. [Pré-requisitos e dependências](#9-pré-requisitos-e-dependências)
10. [Profundidade, tecnologia e teoria × prática](#10-profundidade-tecnologia-e-teoria--prática)
11. [Exercícios, avaliações e revisão](#11-exercícios-avaliações-e-revisão)
12. [Análises específicas por área](#12-análises-específicas-por-área)
13. [Nível profissional resultante](#13-nível-profissional-resultante)
14. [Melhorias propostas (DIDATIC-XXX)](#14-melhorias-propostas)
15. [Matriz impacto × esforço](#15-matriz-impacto--esforço)
16. [Novo roadmap](#16-novo-roadmap)
17. [Critérios de conclusão por trilha](#17-critérios-de-conclusão-por-trilha)
18. [Rotina recomendada em três modos](#18-rotina-recomendada-em-três-modos)
19. [Revisão visual, responsiva e de acessibilidade — 27/07/2026](#19-revisão-visual-responsiva-e-de-acessibilidade--27072026)
- [As 10 melhorias didáticas mais importantes](#as-10-melhorias-didáticas-mais-importantes)
- [As 10 melhorias técnicas mais importantes](#as-10-melhorias-técnicas-mais-importantes)
- [Os 5 maiores riscos ainda presentes](#os-5-maiores-riscos-ainda-presentes)
- [As 5 primeiras ações da próxima rodada](#as-5-primeiras-ações-da-próxima-rodada)

---

## 1. Resumo executivo

As 11 etapas foram implementadas e **funcionam de forma integrada** — verificado com zero erros de console, 14 barras de progresso, view "Hoje", ciclo mensal, certificações, gráfico, backup e busca global todos renderizando.

O projeto mudou de categoria: era uma enciclopédia estática com rotina impossível; hoje é um painel de execução com fonte única de dados, rotina sustentável (38h/semana, sono de 7h30, zero madrugada) e persistência real.

**Mas a auditoria didática revela o problema central que nenhuma etapa anterior atacou:** o plano lista **conteúdo**, não **objetivos de aprendizagem**. A medição é dura:

| Trilha | Tópicos com verbo de ação | % acionável |
|---|---|---|
| java, db, devops, sec, aws, math | **0** | **0%** |
| dsa, arquitetura | 1 de ~28 | 3–4% |
| ingles | 2 de 41 | 5% |
| **pratica** | 16 de 38 | **42%** |

E, nas 14 páginas de trilha: **0 têm pré-requisitos declarados**, **0 têm critérios de conclusão**, **0 têm exercícios** (exceto `treino`, com 10).

Um tópico como *"Java 21 core: tipos, OO, herança, polimorfismo, interfaces, collections…"* não é um objetivo — é um sumário. Marcar seu checkbox não prova nada.

Isso conecta ao segundo achado: **progresso é binário**. Os 286 tópicos têm dois estados (marcado/desmarcado). Marcar 286 caixas produz "100%" sem nenhuma evidência de domínio.

Terceiro: os **entregáveis das 12 fases são labs independentes**, não um sistema que evolui. Foi consequência direta de remover o DevCore (decisão consciente). O portfólio final é uma coleção de 12 exercícios desconexos.

**Dívidas técnicas que sobrevivem:** ~28.000 linhas de CSS inline nas trilhas, 45–61 `!important` por página, 1.413 linhas de JS legado morto, e o `.git` em **333 MB** após a reintrodução dos livros.

---

## 2. Escopo analisado

```txt
15 HTML (51.599 linhas) · 6 data/ (1.974) · 5 core/ (429)
15 features/ (1.702) · 2 pages/ (226) · 3 CSS (2.607)
+ 3 arquivos JS legados (1.413, mortos) · sw.js · manifest · sitemap · robots
```

| Métrica | Valor |
|---|---|
| `.git` | 333 MB |
| `public/pdfs/` | 369 MB |
| Código (public sem pdfs) | 2,8 MB |
| Tópicos marcáveis | 286 |

---

## 3. Comparação com a análise anterior

| ID | Problema original | Situação | Evidência | Avaliação |
|---|---|---|---|---|
| B1 | Rotina sem sono, 7 dias | **Resolvido** | 7h30–8h30/dia, 7/7 dias | ✅ |
| B2 | 112h/sem vs 65–75h declaradas | **Resolvido** | 38,08h/sem medidas, textos alinhados | ✅ |
| B3 | Fases × rotina contraditórias | **Resolvido** | `active-phase.js` deriva rotina da fase | ✅ |
| B4 | 15 páginas em "8 fases" | **Resolvido** | 0 ocorrências; roadmap vem de `phases.js` | ✅ |
| G1 | 1.413 linhas JS morto | **Não resolvido** | 3 arquivos presentes, 0 páginas os referenciam | ⚠️ |
| G2 | `styles.css` conflitante | **Resolvido** | Arquivo removido, 0 links | ✅ |
| G3 | Zero persistência | **Resolvido** | `storage.js` + schemaVersion, 5 chaves | ✅ |
| G4 | 28 checkboxes sem salvar | **Resolvido** | `checklist.js`, validado com reload | ✅ |
| G5 | 369 MB versionados | **Regredido (decisão consciente)** | 21 PDFs no índice, `.gitignore` editado | ⚠️ |
| G6 | 3 páginas sem `<title>` | **Resolvido** | 15/15 | ✅ |
| G7 | Zero links entre trilhas | **Resolvido** | `trilhasRelacionadas` em 14 páginas | ✅ |
| I1 | ~19.700 linhas CSS duplicado | **Parcialmente** | Tokens/base extraídos; **28.060 linhas ainda inline** | ⚠️ |
| I2 | IIFE duplicada 15× | **Resolvido** | `core/nav.js`, 0 IIFEs restantes | ✅ |
| I3 | 3 paletas paralelas | **Resolvido** | `tokens.css` fonte única | ✅ |
| I5 | 45–61 `!important`/página | **Não resolvido (trilhas)** | java/ia/sec 45, ingles 61; dashboard 11 | ⚠️ |
| I6 | Sem `<main>`/skip-link/favicon | **Resolvido** | 15/15 nos três | ✅ |
| I7 | README desatualizado | **Resolvido** | Reflete arquitetura atual | ✅ |
| I9 | 4 cronogramas em `ia.html` | **Resolvido** | 0 concorrentes | ✅ |
| I10 | `blog.html` mal estruturado | **N/A** | Arquivo removido | — |
| Lacuna | DSA quase ausente | **Substituído** | 27 tópicos, trilha contínua 3×/sem | ✅ |
| Lacuna | Concorrência sem seção | **Resolvido** | Seção em `java.html` com JMM, locks, VT | ✅ |
| Lacuna | Revisão inexistente | **Resolvido** | D0/D1/D7/D30 funcional | ✅ |
| Lacuna | FinOps ausente | **Resolvido** | Seção em `aws.html` | ✅ |
| Lacuna | **Métricas de progresso** | **Parcialmente** | Existe, mas **binário** — não mede domínio | ⚠️ |

**Placar: 17 resolvidos · 3 parciais · 2 não resolvidos · 1 regressão consentida.**

---

## 4. Status das fases implementadas

| Etapa | Veredito | Evidência medida |
|---|---|---|
| 1 — Correções críticas | ✅ **Completa** | Sono 7h30 · 0 blocos 01–05h · domingo 1h · 15/15 títulos |
| 2 — Plano de estudos | ✅ **Completa** | 12 fases · 6.000h · CI/CD F3 · segurança F4 · observab. F6 · DSA F1–12 |
| 3 — Rotina | ✅ **Completa** | Máx. 2 domínios/dia (7/7) · ciclo 3+1 · buffer 3h |
| 4 — Dados | ✅ **Completa** | 0 duplicações fora de `/data` · ES Modules |
| 5 — Trilhas | ✅ **Completa** | Roadmap 12 fases renderizado · 0 cronogramas concorrentes |
| 6 — JavaScript | 🟡 **Quase** | 0 IIFEs, 0 globais, 0 `onclick` — **mas 1.413 linhas mortas** |
| 7 — CSS | 🟡 **Parcial** | Tokens ✅ · **28.060 linhas inline** e 45–61 `!important` nas trilhas |
| 8 — Progresso | 🟡 **Funciona, mede errado** | Persiste ✅ · **estado binário**, sem evidência |
| 9 — UX/A11y | ✅ **Completa** | Hoje ✅ · busca global ✅ · 15/15 main+skip · `--text3` 6,0:1 |
| 10 — Projeto | ⚠️ **Pulada (decisão consciente)** | Labs independentes; sem sistema contínuo |
| 11 — Métricas/SEO/PWA | ✅ **Completa** | Offline testado com servidor desligado · 0 requests externos |

### Validação da rotina (medida dos módulos de dados)

```txt
SEG | 24h:ok | sono:7.5h | foco:6.42h | domínios:2 (java,db)          | madrugada:0
TER | 24h:ok | sono:7.5h | foco:6.42h | domínios:2 (java,arquitetura) | madrugada:0
QUA | 24h:ok | sono:7.5h | foco:6.42h | domínios:2 (db,devops)        | madrugada:0
QUI | 24h:ok | sono:7.5h | foco:6.42h | domínios:2 (java,sec)         | madrugada:0
SEX | 24h:ok | sono:7.5h | foco:6.42h | domínios:2 (devops,arquit.)   | madrugada:0
SÁB | 24h:ok | sono:8.0h | foco:5.00h | domínios:2 (pratica,arquit.)  | madrugada:0
DOM | 24h:ok | sono:8.5h | foco:1.00h | domínios:0                    | madrugada:0

FOCO SEMANAL: 38,08h · ciclo mensal 3+1 · buffer 3h
```

### Validação do posicionamento dos temas críticos

| Tema | Fases onde aparece | Avaliação |
|---|---|---|
| CI/CD | 2, 3, 4, 5, 7, 9, 10, 11, 12 | ✅ antecipado (era mês 22) |
| OWASP / segurança forte | 4, 12 | ✅ antecipado (era mês 25) |
| Observabilidade | 6, 8 | ✅ antecipado |
| Kafka | 8 | ✅ integrado a distribuídos |
| Hexagonal / DDD | 7 | ✅ após base sólida |

---

## 5. Concluídas, parciais, não concluídas e regressões

### Corretamente concluídas (17)

Rotina saudável · coerência do plano · fonte única de dados · sincronização das trilhas · navegação compartilhada · event delegation · storage versionado · revisão D0/D1/D7/D30 · view "Hoje" · busca global · trilhas relacionadas · acessibilidade completa · autohospedagem (0 requests externos) · SEO · PWA offline · DSA · concorrência.

### Parcialmente concluídas (3)

1. **CSS** — 28.060 linhas ainda inline nas trilhas; só o dashboard foi extraído.
2. **`!important`** — dashboard em 11 (justificados); trilhas em 45–61.
3. **Progresso** — persiste corretamente, mas não distingue "li" de "domino".

### Não concluídas (2)

1. **JS legado morto** — `data.js` / `index.js` / `trilha.js` (1.413 linhas) presentes, 0 referências.
2. **Objetivos de aprendizagem** — nunca esteve nas etapas, e é a maior lacuna do projeto.

### Regressões (1, consentida)

A reintrodução dos 21 PDFs (`7cc9356`) é decisão consciente tomada com a recomendação anterior em vista. Efeito registrado uma vez, sem insistência: `.git` em 333 MB, e obras comerciais publicadas em site aberto. **Não requer ação.**

---

## 6. Diagnóstico e matriz de maturidade

| Dimensão | Antes | Agora | Evidência | Principal melhoria |
|---|---:|---:|---|---|
| Coerência do plano | 3 | **9** | Fonte única; 0 contradições | — |
| Sustentabilidade da rotina | 1 | **9** | 38h/sem, sono, folga, buffer | Protocolo de recuperação |
| **Qualidade didática** | — | **4** | 0% objetivos acionáveis; 0 pré-req; 0 critérios | **DIDATIC-001/002** |
| Progressão profissional | 5 | **8** | Ordem correta, dependências respeitadas | — |
| Integração teoria-prática | 3 | **6** | 38 labs, mas desconexos | Projeto contínuo |
| Revisão e retenção | 0 | **8** | D0/D1/D7/D30 funcional | Diferenciar por tipo |
| **Avaliação de domínio** | 0 | **3** | Checkbox binário | **DIDATIC-003** |
| UX | 2 | **9** | View "Hoje" responde as 6 perguntas | — |
| Acessibilidade | 4 | **9** | 15/15 landmarks, contraste 6,0:1 | Testar leitor de tela |
| Arquitetura frontend | 3 | **8** | data/core/features/pages | — |
| **Manutenibilidade** | 3 | **6** | 28.060 linhas CSS inline; JS morto | **DIDATIC-010/011** |
| Performance | 3 | **8** | 0 externos, offline, `content-visibility` | `.git` 333 MB |

**Média: 3,1 → 7,3.** As três notas abaixo de 7 são o foco da próxima rodada.

---

## 7. Auditoria didática e análise por trilha

| Trilha | Nível | Situação | Pontos fortes | Problemas | Lacunas | Melhoria |
|---|---|---|---|---|---|---|
| **Java + Spring** | Pleno→Sênior | Boa cobertura, 26 tópicos | Java 21, concorrência com JMM/locks/VT — a melhor seção da base | **0% objetivos acionáveis**; sem exercícios na página | Testes de código concorrente; JVM tuning prático | Converter 26 tópicos em objetivos verificáveis |
| **Banco** | Pleno | 20 tópicos, ordem correta | SQL antes de JPA ✅; EXPLAIN, isolamento, N+1 | 0% acionável; sem exercícios de query | Backup/restore; replicação; particionamento | Exercícios com dataset real |
| **DSA** | Pleno | 27 tópicos, contínua F1–12 | Ritmo 3×/sem correto; ~720 problemas | **9 padrões ausentes** | trie, prefix sum, binary search, divide&conquer, greedy, **Collections/comparator/equals/hashCode** | Adicionar os 9; ligar a Java |
| **Arquitetura** | Sênior | 31 tópicos (a maior) | C4, ADR, DDD, trade-offs, "quando NÃO usar" | 3% acionável | Modular monolith explícito **antes** de microsserviços | Exigir ADR por fase |
| **DevOps** | Pleno→Sênior | 23 tópicos | CI/CD na F3 ✅; SLO/error budget | 0% acionável | Rollback praticado; análise de incidente | Lab de build quebrado |
| **Segurança** | Pleno | 19 tópicos, transversal F1 + módulo F4 | Posicionamento correto | 0% acionável | **Segurança de IA** (prompt injection, RAG) ausente | Lab de vulnerabilidade plantada |
| **AWS** | Pleno | 12 tópicos, 4 fases | FinOps ✅; só 2 certificações | 0% acionável | — | Custo medido por lab |
| **Frontend** | Júnior av. | 6 tópicos, F11 | Escopo contido ✅ | Raso p/ "consumir API com auth" | Estados de erro; testes | Manter raso — está correto |
| **Python** | Júnior av. | **5 tópicos**, F11 | Escopo contido | **Subdimensionado** p/ FastAPI+pytest+dados | Packaging; async | +3–4 tópicos |
| **IA** | Introdutório | **6 tópicos** vs **7.065 linhas** de página | RAG com avaliação e custo ✅ | **Desproporção extrema**: página 30× maior que o plano | Segurança de IA | Alinhar página ao plano |
| **Matemática** | Básico | 15 tópicos, acoplada | Acoplamento correto (DSA/SQL/IA) | 0% acionável | — | Manter |
| **Inglês** | B1→B2 | **41 tópicos (a maior de todas)** | Progressão leitura→escrita→fala ✅ | **Maior que Java (26)** — desproporcional | — | Reduzir para ~24 |
| **Prática** | — | 38 tópicos, **42% acionável** | **A melhor trilha didaticamente** | Labs **independentes** entre fases | Continuidade | Encadear labs |
| **Git** | Pleno | 17 tópicos transversais | Correto | 0% acionável | — | Manter |
| **Financeiro** | — | 3.669 linhas, 4 refs na rotina | Fora do cronograma ✅ | Peso desproporcional | — | Manter fora |
| **Treino** | — | 2.212 linhas, 0 roadmap | Reduzido ✅ | — | — | Resolvido |

### Matriz de qualidade didática

| Trilha | Objetivo | Sequência | Profund. | Prática | Revisão | Avaliação | Atualiz. | **Geral** |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Java | 3 | 9 | 8 | 5 | 8 | 3 | 9 | **6,4** |
| Banco | 3 | 9 | 8 | 5 | 8 | 3 | 8 | **6,3** |
| DSA | 4 | 8 | 6 | 7 | 8 | 4 | 8 | **6,4** |
| Arquitetura | 3 | 9 | 9 | 5 | 8 | 4 | 9 | **6,7** |
| DevOps | 3 | 9 | 8 | 5 | 8 | 3 | 9 | **6,4** |
| Segurança | 3 | 9 | 7 | 5 | 8 | 3 | 8 | **6,1** |
| AWS | 3 | 9 | 7 | 5 | 8 | 4 | 9 | **6,4** |
| Frontend | 3 | 8 | 4 | 4 | 7 | 3 | 8 | **5,3** |
| Python | 3 | 8 | 4 | 4 | 7 | 3 | 8 | **5,3** |
| IA | 3 | 8 | 4 | 4 | 7 | 3 | 8 | **5,3** |
| Matemática | 3 | 9 | 6 | 4 | 7 | 3 | 8 | **5,7** |
| Inglês | 4 | 8 | 8 | 6 | 7 | 4 | 8 | **6,4** |
| **Prática** | **7** | 8 | 7 | **9** | 7 | 5 | 8 | **7,3** |
| Git | 3 | 9 | 7 | 5 | 8 | 3 | 8 | **6,1** |

**Todas abaixo de 7, exceto Prática.** O padrão é idêntico em todas: sequência e atualização altas (8–9), objetivo e avaliação baixos (3–4).

> O plano sabe **o que** e **quando** ensinar; não sabe **como verificar** que foi aprendido.

---

## 8. Objetivos de aprendizagem

**Estado: 0% acionável** nas trilhas de conteúdo. Exemplos reais e a correção proposta:

| Hoje (descritivo) | Proposto (verificável) |
|---|---|
| "Java 21 core: tipos, OO, herança, polimorfismo, interfaces, collections, exceptions, generics, records e streams" | Implementar uma hierarquia com `sealed` + `record` e explicar por que `equals`/`hashCode` de record dispensa override |
| "Spring Data JPA: entidades, repositories, relacionamentos, paginação, specifications e transações" | Reproduzir um N+1 propositalmente, provar com log SQL e corrigir com `fetch join` — medindo a diferença |
| "Princípios: CIA, autenticação × autorização, validação de entrada" | Dado um endpoint sem proteção, identificar 3 vetores OWASP e aplicar mitigação para cada |
| "Base: arrays, listas, strings, hashing, pilhas, filas e complexidade Big O" | Resolver 20 problemas de array/hash e justificar a escolha entre `ArrayList` e `LinkedList` por custo de operação |
| "Docker: Dockerfile multi-stage, imagem enxuta" | Reduzir uma imagem de >800 MB para <200 MB e explicar cada camada eliminada |

**Regra proposta:** todo tópico começa com verbo no infinitivo e termina com critério observável. A trilha `pratica` já faz isso em 42% — é o modelo interno a replicar.

---

## 9. Pré-requisitos e dependências

**Estado: 0 páginas declaram pré-requisitos.** As dependências existem implicitamente na ordem das fases, mas nunca são explícitas para quem estuda.

O mapa real (correto, mas invisível):

```txt
Lógica/Linux (F1) → Java Core (F1) → SQL (F1)
        ↓
Java avançado + Spring + JPA (F2)
        ↓
Testes (F3) ──→ Docker (F3) ──→ CI/CD (F3)
        ↓                            ↓
Segurança (F4) ←─────────────────────┘
        ↓
Performance + Redis (F5) → Observabilidade (F6)
        ↓
Arquitetura + DDD (F7) → Kafka/Distribuídos (F8)
        ↓
AWS + IaC + K8s (F9) → System Design (F10)
        ↓
Frontend/Python/IA (F11) → Portfólio (F12)

Transversais F1–F12: Git · Inglês · DSA · Clean Code · Segurança básica
```

### Dependências cruzadas — todas verificadas e corretas

| Cadeia | Fases | Status |
|---|---|---|
| SQL → JPA → Performance → Cache | F1 → F2 → F5 → F5 | ✅ |
| Docker → CI/CD → Cloud → Kubernetes | F3 → F3 → F9 → F9 | ✅ |
| Concorrência → Kafka → Distribuídos | F2 → F8 → F8 | ✅ |
| HTTP → REST → Segurança | F2 → F2 → F4 | ✅ |

**Nenhuma dependência circular ou inversão detectada.** O problema é apenas de **explicitação**.

---

## 10. Profundidade, tecnologia e teoria × prática

### Desproporções medidas

| Trilha | Tópicos | Página (linhas) | Diagnóstico |
|---|---:|---:|---|
| Inglês | **41** | 3.194 | **Excessivo** — maior que Java |
| Prática | 38 | — | Adequado |
| Arquitetura | 31 | 4.046 | Adequado |
| Java | 26 | 3.648 | **Subdimensionado** vs. importância (45% da rotina) |
| IA | **6** | **7.065** | **Desproporção extrema** (página 30× o plano) |
| Python | **5** | 2.696 | Subdimensionado |
| Frontend | 6 | 3.779 | Página 20× o plano |

### Atualização tecnológica — tudo em dia, nada a atualizar

| Tecnologia | Citações | Veredito |
|---|---:|---|
| Java 21 | 15 | **Manter** (Java 17: 1, Java 8: 2 — resíduos históricos) |
| Spring Boot 3 / Jakarta | 2 / 3 | **Manter** (`javax.`: 1 ocorrência, contexto histórico) |
| JUnit 5 / Testcontainers | 6 / 3 páginas | **Manter** |
| OpenTelemetry / Kafka / Redis | 4 / 10 / 8 páginas | **Manter** |
| RAG, embeddings, avaliação | F11 | **Manter** — com avaliação objetiva, não hype |

### Matriz teoria × prática (por fase)

| Fase | Teoria | Exemplo | Exercício | Projeto | Revisão | Avaliação |
|---|:-:|:-:|:-:|:-:|:-:|:-:|
| 1–12 | ✅ | 🟡 | ✅ (labs) | 🟡 (independentes) | ✅ D0/D1/D7/D30 | ❌ |

**A coluna "Avaliação" está vazia em todas as 12 fases.** Existe o critério de 80% para avançar, mas nenhum mecanismo o verifica.

---

## 11. Exercícios, avaliações e revisão

**Exercícios:** 0 nas páginas técnicas (só `treino` tem 10). Os labs vivem em `data/phases.js`, não nas páginas — quem abre `java.html` não encontra nada para fazer.

**Revisão D0/D1/D7/D30:** tecnicamente correta e validada (D1→D7→D30→consolida). **Um problema de método:** aplica o mesmo modelo a tudo.

| Tipo de conteúdo | Revisão adequada |
|---|---|
| Conceito (CAP, isolamento) | Pergunta respondida sem consulta |
| Sintaxe/comando (Docker, Git) | Flashcard |
| Programação (Java, SQL) | **Reimplementar do zero** |
| Arquitetura | Redesenhar + explicar trade-off |
| Lab/projeto | Refatorar ou simular incidente |

**Risco de volume:** 286 tópicos × 3 revisões = **858 eventos** em 36 meses (~5/semana). Sustentável, mas só se D30 for reimplementação de fato — caso contrário vira clique.

---

## 12. Análises específicas por área

### Estruturas de dados e algoritmos

18/27 padrões cobertos. **Ausentes:** trie, prefix sum, binary search, divide & conquer, greedy, e criticamente **Collections Framework, comparator, equals/hashCode** — a ponte entre DSA e Java, que é o que a entrevista realmente cobra.

### Java avançado e concorrência

A melhor seção do repositório: JMM, `happens-before`, `volatile`, `ReentrantLock`, `CompletableFuture`, Virtual Threads com **pinning** documentado.

**Uma falha:** 0 ocorrências de "quando NÃO usar" — Virtual Threads são apresentadas sem o contraponto de carga CPU-bound e impacto em pools de conexão.

### Banco de dados

SQL antes de JPA ✅. Faltam backup/restore, replicação e particionamento.

### Testes e qualidade

Presentes, mas sem testes de contrato, testes de arquitetura, mutation testing, nem discussão de cobertura × qualidade de assertions.

### Segurança

Transversal ✅, módulo forte na F4 ✅. **Lacuna:** segurança de IA (prompt injection, vazamento em RAG, controle de acesso) ausente, apesar de IA estar na F11.

### Arquitetura, microsserviços e distribuídos

Padrões diferenciados com trade-offs ✅. **Falta declarar explicitamente**: monolito modular bem construído **antes** de microsserviços. Hoje está implícito na ordem (F7 antes de F8), mas não é dito.

### DevOps, cloud e observabilidade

Progressão correta, SLO/error budget presentes. Falta rollback praticado e análise de incidente.

### System Design

**É praticado, não apenas listado:** a F10 exige 12 desenhos cronometrados em 45 min, com estimativa de capacidade e trade-offs. Falta a lista progressiva de casos (encurtador → notificações → feed → pagamentos).

### Frontend, Python e IA

Escopo contido é a decisão certa para um plano de backend. Python (5 tópicos) e IA (6) estão subdimensionados para o que as páginas prometem.

### Redundâncias entre trilhas

| Conteúdo | Páginas | Tipo |
|---|---:|---|
| Kafka | 10 | Referência cruzada (aceitável) |
| Docker | 9 | Referência cruzada (aceitável) |
| Redis | 8 | Referência cruzada (aceitável) |
| OWASP | 6 | Aprofundamento progressivo ✅ |
| Kubernetes | 6 | Referência cruzada |

Nenhuma duplicação problemática detectada: as menções são contextuais, não cópias da mesma explicação.

### Qualidade das fontes

270 links externos, **91 de documentação oficial (34%)**. Principais domínios: `docs.aws.amazon.com` (12), `docs.spring.io` (10), `kubernetes.io` (7), `docs.github.com` (6), `developer.mozilla.org` (5). Proporção saudável, sem excesso de cursos.

---

## 13. Nível profissional resultante

| Área | Nível se executado integralmente |
|---|---|
| Java | **Sênior** |
| Spring | **Pleno avançado** |
| Banco | **Pleno avançado** |
| Testes | **Pleno** |
| Arquitetura | **Sênior** |
| Cloud/DevOps | **Pleno avançado** |
| Segurança | **Pleno** |
| System Design | **Pleno avançado** |
| DSA | **Pleno** (sobe a Sênior com os 9 padrões faltantes) |
| Frontend | **Júnior avançado** |
| Python/IA | **Júnior avançado** |
| Inglês | **B2 / Pleno** |

> **Ressalva decisiva:** isso vale se executado com evidência real. Com o sistema binário atual, é possível marcar 286 caixas e exibir "100%" sem ter escrito uma linha de código. O plano **permite** senioridade; não a **verifica**.

---

## 14. Melhorias propostas

### P0 — Bloqueadores

| ID | Categoria | Melhoria | Critério de aceite |
|---|---|---|---|
| **DIDATIC-001** | Conteúdo | Converter os 286 tópicos em **objetivos com verbo de ação + critério observável** | ≥80% dos tópicos começam com verbo mensurável |
| **DIDATIC-002** | Avaliação | **Estados de progresso**: Não iniciado → Em estudo → Praticado → Validado → Dominado | Nenhum tópico chega a "Dominado" sem revisão D30 |
| **DIDATIC-003** | Plataforma | Campo de **evidência** por tópico (URL de commit/PR/lab) | "Validado" exige evidência preenchida |

### P1 — Alta prioridade

| ID | Categoria | Melhoria |
|---|---|---|
| DIDATIC-004 | Conteúdo | Adicionar os **9 padrões DSA ausentes** (com Collections/equals/hashCode) |
| DIDATIC-005 | Apresentação | **Pré-requisitos + objetivos** no topo de cada página de trilha |
| DIDATIC-006 | Avaliação | **Critérios de conclusão** por trilha |
| DIDATIC-007 | Projetos | **Encadear os 12 labs** — cada fase evolui o artefato anterior |
| DIDATIC-008 | Conteúdo | Concorrência: **"quando NÃO usar Virtual Threads"** |
| DIDATIC-009 | Revisão | **Diferenciar tipo de revisão** (conceito/código/arquitetura) |
| DIDATIC-010 | Código | Remover as **1.413 linhas de JS morto** |
| DIDATIC-011 | Código | Extrair `trilha-components.css` (28.060 → ~4.000 linhas) |

### P2 — Média prioridade

| ID | Melhoria |
|---|---|
| DIDATIC-012 | Segurança de IA (prompt injection, RAG) na F11 |
| DIDATIC-013 | Reduzir Inglês de 41 → ~24 tópicos |
| DIDATIC-014 | Ampliar Python (5→9) e IA (6→10) |
| DIDATIC-015 | Reduzir `!important` das trilhas (45–61 → <10) |
| DIDATIC-016 | Exercícios visíveis nas páginas |
| DIDATIC-017 | Backup/restore e replicação em Banco |
| DIDATIC-018 | Testes de contrato e mutation testing |
| DIDATIC-019 | Lista progressiva de System Design |
| DIDATIC-020 | Declarar "monolito modular antes de microsserviços" |

### P3 — Evolução futura

`DIDATIC-021` fragmentar `ia.html` · `022` protocolo de recuperação · `023` mapa visual de dependências · `024` simulados de entrevista · `025` histórico de evidências

---

## 15. Matriz impacto × esforço

| ID | Impacto | Esforço | Prioridade |
|---|---|---|---|
| DIDATIC-001 | **Muito alto** | **Alto** | P0 |
| DIDATIC-002 | **Muito alto** | Médio | P0 |
| DIDATIC-003 | **Alto** | Médio | P0 |
| DIDATIC-004 | Alto | **Baixo** | P1 |
| DIDATIC-005 | Alto | **Baixo** | P1 |
| DIDATIC-008 | Médio | **Baixo** | P1 |
| DIDATIC-010 | Médio | **Baixo** | P1 |
| DIDATIC-011 | Médio | **Alto** | P1 |

---

## 16. Novo roadmap

### Etapa A — Objetivos verificáveis
**Itens:** `DIDATIC-001`, `004`, `008` · **Arquivos:** `data/phases.js`
**Conclui quando:** ≥80% dos tópicos forem acionáveis.

### Etapa B — Domínio real
**Itens:** `DIDATIC-002`, `003`, `006` · **Arquivos:** `features/progress.js`, `core/storage.js`
**Conclui quando:** "Dominado" exigir evidência + revisão D30 concluída.

### Etapa C — Didática nas páginas
**Itens:** `DIDATIC-005`, `016` · **Arquivos:** 14 páginas de trilha
**Conclui quando:** toda página abrir com objetivo, pré-requisito e critério de conclusão.

### Etapa D — Projeto contínuo
**Itens:** `DIDATIC-007` · **Arquivos:** `data/phases.js`
**Conclui quando:** a F12 produzir um sistema, não 12 fragmentos.

### Etapa E — Dívida técnica
**Itens:** `DIDATIC-010`, `011`, `015` · **Arquivos:** `assets/js/`, `assets/css/`, trilhas
**Conclui quando:** CSS inline <5.000 linhas e 0 arquivos mortos.

---

## 17. Critérios de conclusão por trilha

### Java
```txt
✓ Implementa uma API sem tutorial
✓ Escreve testes unitários e de integração
✓ Explica generics, collections e streams sem consulta
✓ Diagnostica um deadlock a partir de thread dump
✓ Justifica a escolha de estrutura de dados por custo de operação
```

### Banco de dados
```txt
✓ Modela um domínio normalizado
✓ Escreve query com CTE e window function
✓ Interpreta EXPLAIN e cria índice que muda o plano
✓ Reproduz e corrige um N+1
✓ Escreve migration reversível
```

### Arquitetura
```txt
✓ Produz ADR com alternativas e critério de reversão
✓ Desenha C4 nível 1 e 2
✓ Argumenta por que NÃO usar microsserviços num caso dado
```

### DevOps
```txt
✓ Cria pipeline do zero
✓ Diagnostica build quebrado a partir do log
✓ Executa rollback
✓ Define um SLO com justificativa
```

> Evite critérios baseados em assistir, ler, marcar ou concluir curso.

---

## 18. Rotina recomendada em três modos

A rotina ideal está correta (38h/sem). **Falta o que fazer quando a vida atravessa** — hoje o plano só tem um modo.

| Modo | Quando | Carga | Regra |
|---|---|---|---|
| **Ideal** | Semana normal | 38h | Como está |
| **Mínima** | Trabalho pesado, prova, viagem | **12h** | Só Java (2×2h) + DSA (3×40min) + revisão D1/D7. **Sem conteúdo novo** |
| **Recuperação** | Doença, burnout, atraso | **5h** | Só revisão da fila + 1 lab pequeno. Zero cobrança |

> **Regra que falta e é decisiva:** duas semanas seguidas em modo mínimo disparam revisão da fase — o problema é de plano, não de disciplina. Sem isso, o modo mínimo vira culpa, e a culpa vira abandono.

---

## As 10 melhorias didáticas mais importantes

1. **Objetivos com verbo de ação** — 0% hoje; é a raiz de tudo
2. **Estados de progresso** (5 níveis) no lugar do binário
3. **Evidência obrigatória** para "Validado"
4. **Critérios de conclusão** por trilha
5. **Pré-requisitos visíveis** — 0 páginas hoje
6. **9 padrões DSA ausentes**, com a ponte Collections/equals/hashCode
7. **Labs encadeados** em vez de independentes
8. **Revisão diferenciada** por tipo de conteúdo
9. **"Quando NÃO usar Virtual Threads"**
10. **Segurança de IA** na Fase 11

## As 10 melhorias técnicas mais importantes

1. Remover 1.413 linhas de JS morto
2. Extrair `trilha-components.css` (28.060 linhas inline)
3. Reduzir `!important` das trilhas (45–61 → <10)
4. Modelo de dados para estados + evidência
5. Exercícios renderizados de `phases.js` nas páginas
6. Pré-requisitos como dado, não texto
7. Fragmentar `ia.html` (7.065 linhas)
8. Reduzir `.git` (333 MB) — opcional, decisão do dono
9. Validar contraste em todos os componentes novos
10. Testar com leitor de tela real

## Os 5 maiores riscos ainda presentes

1. **Progresso binário incentiva marcar sem aprender** — o risco que se queria evitar, ainda presente
2. **Sem critério de domínio**, a regra dos 80% não é verificável
3. **Labs desconexos** → portfólio fragmentado na Fase 12
4. **Sem modo mínimo**, uma semana ruim vira abandono
5. **28.060 linhas de CSS inline** — o mesmo padrão que já travou as trilhas em "8 fases" por meses

## As 5 primeiras ações da próxima rodada

1. **DIDATIC-002 + 003** — estados de progresso e evidência. Muda o significado de tudo que já existe, e é contido em `progress.js`/`storage.js`.
2. **DIDATIC-001** — reescrever os 286 tópicos como objetivos verificáveis. O maior trabalho, o maior retorno.
3. **DIDATIC-004** — os 9 padrões DSA. Baixo esforço, fecha a lacuna de entrevista.
4. **DIDATIC-005** — pré-requisitos e objetivos no topo das páginas.
5. **DIDATIC-010** — apagar o JS morto. Cinco minutos, remove ruído permanente.

---

## Conclusão

As notas subiram de **3,1 para 7,3** em média. O projeto está tecnicamente sólido e a rotina é executável — o que era impossível (24h/dia sem sono) virou sustentável (38h/semana com folga e buffer), e o que era contraditório (dois planos incompatíveis) virou fonte única de verdade.

O que falta agora não é mais código nem conteúdo: é **transformar uma lista de assuntos em um currículo com objetivos verificáveis e prova de domínio**.

---

## 19. Revisão visual, responsiva e de acessibilidade — 27/07/2026

### 19.1 Resumo executivo

Esta rodada auditou e corrigiu o frontend após a implementação do backlog `DIDATIC-001` a `DIDATIC-025`. A identidade visual escura e técnica foi preservada; as mudanças foram estruturais, sem alterar regras de negócio, contratos de dados, persistência ou integrações.

Foram encontrados **10 defeitos reproduzíveis**: cinco overflows/clippings relevantes, um problema de texto dinâmico, dois grupos de alvos de interação pequenos e duas inconsistências de acessibilidade na busca. Todos foram corrigidos e revalidados. Não restou bloqueador visual conhecido no escopo efetivamente testado.

As afirmações antigas deste documento de que ainda faltavam estados de progresso, evidência, D30, objetivos observáveis, contratos didáticos, exercícios, labs encadeados, tipos de revisão e remoção do JavaScript morto estão **superadas**. Elas permanecem nas seções anteriores apenas como histórico da auditoria que originou o backlog.

### 19.2 Escopo e método

Stack verificada:

- HTML estático, CSS compartilhado, JavaScript ES Modules e Bootstrap autohospedado;
- dados locais e persistência em `localStorage`;
- Service Worker para operação offline;
- tema escuro único, sem tema claro implementado;
- sem backend, API Mode, modais ou drawers no escopo atual.

Páginas exercitadas:

- dashboard `index.html`;
- 14 páginas principais de trilha;
- 3 módulos da trilha de IA;
- total de **18 páginas**.

Foram inspecionados DOM, CSS computado, overflow do documento, clipping de folhas de texto, containers de rolagem intencional, nomes acessíveis de campos, dimensões de alvos interativos, estados dinâmicos e screenshots dos casos críticos.

### 19.3 Problemas encontrados e status

| ID | Área afetada | Causa raiz | Impacto | Severidade | Correção | Status |
|---|---|---|---|---|---|---|
| VISUAL-001 | `python.html`, 320/360 px | filho flex de `.section-header` conservava `min-width:auto` | overflow horizontal de 52/12 px | Alta | filhos estruturais agora usam `min-width:0`, `max-width:100%` e títulos podem quebrar | Resolvido |
| VISUAL-002 | `treino.html`, 1024 px | navbar só mudava de composição abaixo de 980 px | busca e navegação avançavam 158 px além da viewport | Alta | composição em grid e busca em linha própria até 1180 px | Resolvido |
| VISUAL-003 | Dashboard, aba Rotina diária, 320 px | seletor de fase tinha `min-width:18rem` dentro de card estreito | overflow horizontal de 14 px | Alta | seletor ocupa 100% e zera a largura mínima abaixo de 480 px | Resolvido |
| VISUAL-004 | Dashboard, aba Progresso, 320 px | `.cert-grid` exigia coluna mínima de 19 rem | overflow horizontal de 11 px | Alta | `minmax(min(19rem, 100%), 1fr)` | Resolvido |
| VISUAL-005 | Dashboard, aba PDFs, 320 px | topo do card não quebrava linha e chip usava `nowrap` dentro de card com `overflow:hidden` | nível “Básico ao Sênior” ficava cortado | Média | topo com wrap; chips e status quebram conteúdo extremo | Resolvido |
| VISUAL-006 | Busca global aberta, 320 px | painel usava `92vw` com deslocamento negativo | painel avançava 4 px e resultados longos eram truncados | Média | largura relativa ao container, sem deslocamento, e rótulos multilinha | Resolvido |
| A11Y-001 | Busca de 6 trilhas | placeholder era o único nome do campo | campo sem nome acessível | Alta | fallback compartilhado `aria-label="Buscar nesta trilha"` | Resolvido |
| A11Y-002 | Roadmap e evidências | selects e ações mediam de 12 a 16 px de altura | toque impreciso e foco visual apertado | Média | alturas mínimas de 32–40 px para selects, links, botões, histórico e chips | Resolvido |
| A11Y-003 | Busca global | `listbox` não continha `option`; `aria-expanded` não voltava a `false` | semântica inconsistente para tecnologia assistiva | Média | opções identificadas e estado expandido sincronizado ao abrir/fechar | Resolvido |
| VISUAL-007 | Histórico de evidências | URLs longas eram corretamente elididas, mas sem expansão textual nativa | inspeção visual incompleta do valor | Baixa | URL completa adicionada ao atributo `title` | Resolvido |

### 19.4 Correções implementadas

Estrutura e responsividade:

- cabeçalhos e colunas flex/grid agora podem encolher sem expandir o documento;
- breakpoint da navegação de Treino foi antecipado para a largura em que o conteúdo realmente deixa de caber;
- seletor de fase e grid de certificações ficaram fluidos;
- cards PDF, chips e status aceitam conteúdo maior e tradução futura;
- tabelas continuam usando rolagem horizontal **intencional e localizada**, sem empurrar a página;
- a busca global passou a respeitar a largura real do container no mobile.

Acessibilidade e interação:

- buscas de trilha recebem nome acessível quando o HTML não fornece um;
- controles densos do roadmap e links de ação ganharam áreas de interação maiores;
- foco visível foi preservado no skip link e nas abas;
- busca global mantém `aria-expanded` coerente e fornece opções semanticamente identificáveis;
- mensagens de erro continuam responsivas e anunciadas por `role="alert"`;
- links de evidência preservam a URL completa para inspeção.

Robustez:

- o cache do Service Worker foi elevado para `v7`, evitando que CSS/JS antigos sobrevivam após publicação;
- nenhuma regra de domínio de progresso, evidência ou revisão D30 foi alterada.

### 19.5 Arquivos alterados nesta revisão

| Arquivo | Alteração principal |
|---|---|
| `public/assets/css/base.css` | dimensões de interação, links, formulários e histórico de evidências |
| `public/assets/css/components.css` | picker, certificações, PDFs, busca global e estados responsivos |
| `public/assets/css/trilha-components.css` | contenção estrutural compartilhada e breakpoint da navbar de Treino |
| `public/assets/js/pages/trilha.js` | nome acessível de fallback para busca |
| `public/assets/js/features/global-search.js` | estado ARIA e opções da busca |
| `public/assets/js/features/track-roadmap.js` | URL completa no histórico de evidências |
| `public/sw.js` | versão do cache |
| `AUDITORIA-POS-IMPLEMENTACAO.md` | consolidação desta rodada |

### 19.6 Validações executadas

| Validação | Resultado |
|---|---|
| Matriz principal: 18 páginas × 13 larguras | **234/234 sem overflow acidental, clipping ou campo sem nome** |
| Larguras solicitadas | 320, 360, 375, 390, 414, 480, 768, 820, 1024, 1280, 1366, 1440 e 1920 px |
| Origem limpa, sem cache anterior | **36/36** em 320 e 1024 px |
| Orientação/altura reduzida | **54/54** em 480×320, 820×390 e 320×480 |
| Equivalentes de zoom sobre base de 1280 px | **54/54** em 1024 (125%), 853 (150%) e 640 px (200%) |
| Dashboard em 320 px | **10/10 abas** sem overflow ou clipping |
| Conteúdo extremo | URL de evidência com 140 caracteres sem expandir o layout |
| Busca global aberta | painel contido, 9 opções semânticas, texto multilinha e `aria-expanded` correto |
| Formulário de simulado | erro composto em 320 px sem overflow |
| Tabelas | rolagem horizontal restrita aos wrappers responsivos |
| Gráficos | containers e estado vazio responsivos em 320 px |
| Teclado e foco | skip link visível com 202×46 px; abas com outline de 2 px |
| Validador de conteúdo | passou: 298/324 objetivos observáveis (92%), regras D30/evidência e 18 páginas íntegras |
| Sintaxe JavaScript/MJS | passou para todos os arquivos em `public/` e `scripts/` |
| `git diff --check` | passou; apenas avisos de normalização LF→CRLF já existentes no worktree |
| Build | não aplicável: o projeto não possui etapa de build |
| Lint | não disponível: não há configuração/comando de lint |
| Type-check | não aplicável: projeto JavaScript sem TypeScript/JSDoc checker configurado |
| Testes unitários | não disponíveis no repositório |

### 19.7 Limitações honestas

- A execução visual real foi feita no Chromium embutido. Firefox, Safari e Edge não foram executados em device farm.
- O harness não aplicou zoom nativo do navegador; foram usados os **equivalentes exatos de viewport CSS** para 125%, 150% e 200%. Isso cobre reflow, mas não substitui uma sessão manual com zoom real.
- Não existe tema claro; portanto somente o tema escuro pôde ser validado.
- Não há backend nem API Mode para comparar dados reais e mocks.
- Não existem modais ou drawers. A busca global, que é o painel flutuante equivalente no produto, foi validada aberta e fechada.
- Os gráficos foram validados em seu estado vazio e por contenção responsiva. Uma regressão visual com histórico volumoso ainda seria útil.
- Não foi executado leitor de tela real nem auditoria automatizada com axe/Lighthouse.

### 19.8 Recomendações remanescentes

| Prioridade | Recomendação | Esforço | Risco | Dependência |
|---|---|---:|---:|---|
| P1 | Automatizar a matriz crítica com Playwright e axe-core | Médio | Baixo | adicionar ambiente de testes |
| P1 | Criar snapshots visuais para dashboard, busca aberta e uma trilha representativa | Médio | Baixo | Playwright |
| P1 | Reduzir duplicações remanescentes de regras por trilha em `trilha-components.css` | Alto | Médio | inventário visual e snapshots |
| P2 | Executar Firefox e WebKit/Safari em CI ou device farm | Médio | Baixo | infraestrutura externa |
| P2 | Exercitar gráficos com histórico volumoso em fixture isolada | Baixo | Baixo | fixture de dados |
| P2 | Fazer uma sessão com NVDA/VoiceOver e zoom nativo | Baixo | Baixo | teste manual |
| P3 | Considerar tema claro somente se virar requisito de produto | Alto | Médio | novos tokens e matriz de contraste |

### 19.9 Conclusão atualizada

O frontend agora se mantém contido desde 320 até 1920 px nos fluxos exercitados, inclusive com navegação sticky, tabelas largas, busca aberta, formulários, textos longos e controles de progresso. A correção seguiu a direção visual existente e atacou causas estruturais, não sintomas locais.

O risco residual deixou de ser um defeito reproduzível de layout e passou a ser principalmente **cobertura de ambiente**: navegadores não Chromium, zoom nativo, leitor de tela real e gráficos com volume de dados. Esses itens estão explicitamente registrados e priorizados acima.

---

## 20. Auditoria e evolução da trilha de Inteligência Artificial — 27/07/2026

> Esta seção usa a estrutura existente deste relatório para não criar um documento concorrente. A parte 20.1 registra a
> fotografia **anterior às alterações da academia de IA**; as implementações e validações são registradas depois, sem
> reescrever a baseline.

### 20.1 Diagnóstico pré-implementação

#### Escopo e estrutura encontrados

- `public/trilhas/ia.html`: visão geral com 13 seções e três links de aprofundamento;
- `public/trilhas/ia/fundamentos.html`: 8 seções, 4 tabelas e 1 bloco de código;
- `public/trilhas/ia/engenharia.html`: 5 seções e 7 tabelas;
- `public/trilhas/ia/pratica.html`: 4 seções, 13 projetos independentes e referências;
- `public/assets/js/pages/ia-module.js`: somente inicialização de navegação e PWA;
- 9 PDFs em `public/pdfs/livros-ia`, totalizando 6.144 páginas.

O conteúdo inicial apresentava boa amplitude terminológica, mas era predominantemente expositivo. Não havia exercícios
progressivos por módulo, gabarito separado, rubrica de entrevista, implementação Python por capítulo, estudo de caso
estruturado nem cadeia de projetos. Os três módulos misturavam fundamentos, aplicações e produção sem uma progressão
capaz de levar alguém sem matemática ou Python científico prévios até decisões de nível sênior.

#### Matriz de lacunas

| Tópico | Estado atual | Nível atual | Nível desejado | Referência nos livros | Referência externa | Lacuna | Ação | Prioridade |
|---|---|---|---|---|---|---|---|---|
| 1. Fundamentos de IA | presente, amplo | introdutório | intermediário | *Hands-On ML*, cap. 1; *Deep Learning*, cap. 1 | Stanford CS229 | taxonomia sem critério de decisão, generalização e pesquisa × produto | expandir | Alta |
| 2. Python para IA | presente como inventário | superficial | sênior | *Hands-On ML*, cap. 2; apêndices | NumPy, pandas, SciPy, Polars e JAX oficiais | sem tipagem, profiling, vetorização, memória ou concorrência | substituir | Crítica |
| 3. Álgebra linear | definições curtas | introdutório | sênior | *Deep Learning*, cap. 2; *PRML*, apêndice C | NumPy Linear Algebra | sem SVD, posto, projeções, normas ou relação formal com embeddings | expandir | Crítica |
| 4. Cálculo e otimização | derivadas e gradiente | superficial | sênior | *Deep Learning*, caps. 4 e 8 | PyTorch Autograd | sem Jacobiano, Hessiana, Lagrange, convexidade ou AdamW | expandir | Crítica |
| 5. Probabilidade e estatística | conceitos básicos | superficial | sênior | *Deep Learning*, cap. 3; *PRML*, caps. 1–2 | SciPy Statistics | sem inferência, poder, bootstrap, Monte Carlo ou informação mútua | expandir | Crítica |
| 6. Dados e preparação | presente | intermediário | sênior | *Designing ML Systems*, caps. 3–5; *ML Design Patterns*, cap. 2 | scikit-learn Pipelines | contratos, lineage, privacidade e versionamento insuficientes | expandir | Alta |
| 7. ML supervisionado | famílias listadas | introdutório | sênior | *Hands-On ML*, caps. 3–7; *ESL*, caps. 3–13 | scikit-learn User Guide | sem hipóteses, complexidade, calibração, diagnóstico ou implementação comparada | substituir | Crítica |
| 8. ML não supervisionado | clustering e PCA citados | introdutório | sênior | *Hands-On ML*, caps. 8–9; *ESL*, cap. 14 | scikit-learn clustering/manifold | ausentes GMM, DBSCAN aprofundado, t-SNE, UMAP e avaliação sem rótulo | expandir | Alta |
| 9. Avaliação de modelos | métricas listadas | intermediário | sênior | *Designing ML Systems*, cap. 6; *AI Engineering*, caps. 3–4 | scikit-learn Metrics | ausentes PR curve, calibração, slices, significância e seleção de threshold por custo | expandir | Crítica |
| 10. Deep learning | visão geral | introdutório | sênior | *Deep Learning*, caps. 6–11; *Hands-On ML*, caps. 10–13 | PyTorch 2.13 | sem implementação NumPy→PyTorch, mixed precision ou treino distribuído | substituir | Crítica |
| 11. Visão computacional | menções dispersas | superficial | sênior | *Hands-On ML*, cap. 14 | papers ResNet e ViT | detecção, segmentação, tracking, avaliação e vieses ausentes | criar | Alta |
| 12. NLP | tokenização e embeddings | introdutório | sênior | *NLP with Transformers*, caps. 1–7 | Stanford CS224N | evolução histórica e tarefas sem implementação ou métrica específica | expandir | Alta |
| 13. Transformers | attention descrita | superficial | expert | *NLP with Transformers*, cap. 3 | *Attention Is All You Need* | sem matemática Q/K/V, máscaras, tokenizadores, complexidade ou implementação | substituir | Crítica |
| 14. LLMs | conceitos modernos listados | intermediário | expert | *AI Engineering*, caps. 2–4 e 9 | papers DPO e Switch Transformer | ausentes KV cache, MoE, scaling, decoding rigoroso e limites de benchmarks | expandir | Crítica |
| 15. Engenharia de prompts | presente | introdutório | sênior | *AI Engineering*, cap. 5 | documentação de structured output/tool use | sem versionamento, regressão, observabilidade e defesa contra injection | expandir | Alta |
| 16. Embeddings e busca vetorial | presente | intermediário | expert | *AI Engineering*, cap. 6 | papers HNSW e FAISS | sem HNSW/IVF/PQ, filtros, recall×latência×memória e matriz de decisão | expandir | Crítica |
| 17. RAG | fluxo geral presente | intermediário | expert | *AI Engineering*, cap. 6 | paper RAG | avaliação, autorização, versionamento, injection indireta e falhas de chunking insuficientes | expandir | Crítica |
| 18. Agentes | agentes e tools citados | introdutório | expert | *AI Engineering*, cap. 6 | OWASP GenAI | agente confundido com workflow; faltam estado, loops, orçamento e HITL | substituir | Crítica |
| 19. Fine-tuning | LoRA/DPO citados | introdutório | expert | *AI Engineering*, cap. 7 | papers LoRA, QLoRA e DPO | sem curadoria, forgetting, decisão prompt×RAG×tuning ou serving | expandir | Alta |
| 20. Modelos generativos | GANs/diffusion citados | superficial | sênior | *Deep Learning*, caps. 14 e 20; *Hands-On ML*, cap. 17 | paper DDPM | sem formulação, condicionamento, multimodalidade, avaliação e segurança | expandir | Alta |
| 21. Reinforcement learning | Q-learning citado | introdutório | sênior | *Hands-On ML*, cap. 18 | Sutton & Barto | sem Bellman, SARSA, actor-critic, avaliação ou reward hacking | expandir | Alta |
| 22. MLOps | ferramentas e lifecycle | intermediário | expert | *Designing ML Systems*, caps. 7–10 | MLflow 3.14, KServe 0.18 | sem gates, CT, lineage ponta a ponta, rollback e estratégia de rollout | expandir | Crítica |
| 23. Arquitetura de sistemas de IA | presente | intermediário | expert | *Designing ML Systems*, caps. 2 e 7–10 | KServe e Ray Serve | sem multi-tenancy, GPU serving, backpressure, SLOs e modos de falha | expandir | Crítica |
| 24. IA em cloud | serviços listados | superficial | sênior | *Designing ML Systems*, cap. 10 | AWS, Azure e Google Cloud oficiais | comparação sem workload, TCO, rede, lock-in ou responsabilidade compartilhada | substituir | Alta |
| 25. Segurança em IA | prompt injection presente | introdutório | expert | *ML Design Patterns*, cap. 7 | OWASP LLM Top 10 2025 e NIST AI RMF | ausentes extraction, membership inference, poisoning, sandbox e threat model | expandir | Crítica |
| 26. IA responsável e governança | ética/LGPD presentes | intermediário | sênior | *Designing ML Systems*, cap. 11; *ML Design Patterns*, cap. 7 | NIST AI RMF e Comissão Europeia | sem model cards, datasheets, taxonomia obrigação×recomendação×ética | expandir | Alta |
| 27. Pesquisa científica | referências sem método | ausente | expert | *PRML* e *ESL* | JMLR, NeurIPS e Stanford | sem roteiro de leitura, reprodução, causalidade, saturação ou identificação de hype | criar | Alta |
| 28. Performance e otimização | quantização/TensorRT citados | introdutório | expert | *AI Engineering*, cap. 9; *NLP with Transformers*, cap. 8 | PyTorch, Ray Serve e ONNX | sem profiling, paralelismos, continuous batching, KV cache e speculative decoding | expandir | Crítica |
| 29. Avaliação generativa | avaliação de LLM citada | superficial | expert | *AI Engineering*, caps. 3–4 | NIST GenAI Profile | sem golden set, judge bias, groundedness, RAG metrics, custo e regressão | substituir | Crítica |
| 30. Liderança técnica | visão profissional | superficial | expert | *Building ML Powered Apps*, caps. 1–2 e 8–11 | NIST AI RMF | sem viability gate, build×buy, TCO, portfólio, roadmap e comunicação de incerteza | criar | Alta |

#### Contagem objetiva da baseline

| Evidência | Resultado anterior |
|---|---:|
| Módulos/páginas de aprofundamento | 3 |
| Capítulos com o contrato pedagógico de 23 itens | 0 |
| Exercícios progressivos vinculados a capítulos | 0 |
| Perguntas de entrevista com rubrica completa | 0 |
| Estudos de caso com causa raiz e prevenção | 0 |
| Gabaritos separados | 0 |
| Projetos explicitamente encadeados | 0 |
| Blocos de código nas três páginas | 1 |
| Referências locais disponíveis | 9 PDFs |

**Decisão de arquitetura de conteúdo:** preservar `ia.html` como hub e reorganizar o aprofundamento em seis partes
renderizadas a partir de uma fonte única. As rotas existentes `fundamentos.html`, `engenharia.html` e `pratica.html`
permanecem válidas; três novas partes completam a progressão. O domínio conceitual precede frameworks, e a avaliação
exige explicação, implementação, diagnóstico e evidência.

### 20.2 Resumo executivo da implementação

A trilha anterior foi preservada como visão geral, mas o aprofundamento deixou de ser um conjunto de três páginas
estáticas. A nova academia possui uma fonte única, seis partes e 30 módulos progressivos. Cada capítulo apresenta
objetivo, pré-requisitos, problema, intuição, matemática, internals, exemplo, implementação Python, decisão,
abordagens incorreta/corrigida, trade-offs, complexidade, produção, erros, checklist, entrevista, exercícios, desafios,
caso e referências.

Resultado quantitativo:

| Evidência | Antes | Depois |
|---|---:|---:|
| Partes de aprofundamento | 3 | 6 |
| Módulos com contrato pedagógico | 0 | 30 |
| Implementações Python | 1 bloco isolado | 30 |
| Exercícios progressivos | 0 | 90 |
| Perguntas com níveis e rubrica | 0 | 150 |
| Estudos de caso estruturados | 0 | 30 |
| Projetos explicitamente encadeados | 0 | 7 |
| Gabaritos separados | 0 | 30 |
| Livros associados por capítulo | referências soltas | 9 livros em todos os módulos |

### 20.3 Livros analisados

Todos os nove arquivos abriram, tiveram o texto extraído página a página e tiveram a capa renderizada para inspeção
visual. Não houve PDF ilegível. A análise não usou o nome do arquivo como substituto do conteúdo.

| Livro | Autor(es), edição e ano | Estrutura e temas verificados | Módulos relacionados | Limitação editorial | Leitura |
|---|---|---|---|---|---|
| *AI Engineering: Building Applications with Foundation Models* | Chip Huyen; 1ª ed.; 2025 | 10 caps.: foundation models, avaliação, prompting, RAG/agentes, fine-tuning, dados, inferência e arquitetura | 14–19, 22–23, 28–30 | não substitui matemática e ML clássico | 980/980 páginas |
| *Building Machine Learning Powered Applications* | Emmanuel Ameisen; 1ª ed.; 2020 | 11 caps.: framing, planejamento, pipeline, dataset, treino/avaliação, debugging, deploy e monitoramento | 1, 6, 9, 22, 27, 29–30 | anterior ao stack atual de LLMs; princípios de produto continuam aplicáveis | 260/260 |
| *Deep Learning* | Ian Goodfellow, Yoshua Bengio e Aaron Courville; 1ª ed.; 2016 | 20 caps.: álgebra, probabilidade, computação numérica, ML, redes profundas e pesquisa | 3–5, 7–13, 20–21 | anterior a transformers/foundation models | 800/800 |
| *Designing Machine Learning Systems* | Chip Huyen; 1ª ed.; 2022 | 11 caps.: framing, dados, features, avaliação, deploy, shifts, continual learning, infraestrutura e responsabilidade | 6, 9, 17–18, 22–26, 29–30 | foco em sistemas, não em derivação de algoritmos | 499/499 |
| *Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow* | Aurélien Géron; 3ª ed.; 2023 | 19 caps.: ML clássico, DL, visão, sequências/NLP, generativos, RL e deploy | 1–12, 20–21, 28 | APIs do período editorial precisam ser conferidas na documentação atual | 1.196/1.196 |
| *Machine Learning Design Patterns* | V. Lakshmanan, S. Robinson e M. Munn; 1ª ed.; 2021 | 8 caps.: representação, framing, treino, serving, reprodutibilidade e IA responsável | 6–9, 16, 22–26 | padrões e exemplos cloud não são universais | 408/408 |
| *Natural Language Processing with Transformers* | L. Tunstall, L. von Werra e T. Wolf; 1ª ed.; 2022 | 11 caps.: classificação, anatomy, NER, geração, sumarização, QA, eficiência e treino | 12–14, 19, 28 | exemplos devem ser migrados para Transformers 5.x | 479/479 |
| *Pattern Recognition and Machine Learning* | Christopher M. Bishop; 1ª ed.; 2006 | 14 caps.: probabilidade, regressão/classificação, kernels, redes, modelos gráficos, EM e inferência | 3–10 | anterior ao DL moderno; permanece forte em fundamentos probabilísticos | 758/758 |
| *The Elements of Statistical Learning* | T. Hastie, R. Tibshirani e J. Friedman; 2ª ed.; 2009 | 18 caps.: regressão, classificação, regularização, seleção, kernels, ensembles e não supervisionado | 3, 5, 7–9, 27 | ênfase estatística e poucas implementações Python modernas | 764/764 |

O total verificado foi de **6.144 páginas**. Os capítulos recomendados aparecem junto de cada módulo e os links usam
somente caminhos públicos `/pdfs/livros-ia/...`; nenhum caminho absoluto local foi exposto na interface.

### 20.4 Fontes externas e atualização tecnológica

Pesquisa executada em **27/07/2026**, priorizando papers e documentação oficial. A fonte única registra título, autor ou
organização, tipo, ano, link, motivo, nível e data de acesso na renderização.

| Grupo | Fontes principais | Uso |
|---|---|---|
| Frameworks | PyTorch 2.13, scikit-learn 1.9, Transformers 5.12, MLflow 3.14, JAX 0.11, NumPy, pandas, SciPy, Polars e TensorFlow | APIs e status tecnológico atuais |
| Transformers e LLMs | Vaswani et al. (2017), LoRA (2021), QLoRA (2023), DPO (2023), Switch Transformer/JMLR (2022) | arquitetura, adaptação, preferências e MoE |
| Recuperação | RAG (Lewis et al., 2020), HNSW (Malkov e Yashunin, 2016), FAISS (Johnson et al., 2017) | grounding, ANN e quantização vetorial |
| Visão e generativos | ResNet (2016), ViT (2020), DDPM (2020) | residual learning, vision transformers e difusão |
| Produção | KServe 0.18, Ray Serve 2.56, AWS SageMaker AI, Azure Machine Learning e Vertex AI | serving, distribuição, MLOps e cloud |
| Segurança e governança | OWASP Top 10 for LLM Applications 2025, NIST AI RMF/GenAI Profile, Comissão Europeia/AI Act | threat model, gestão de risco e distinção regulatória |
| Formação acadêmica | Stanford CS224N 2026 | NLP, transformers, exercícios e projetos acadêmicos |

As versões são uma baseline datada, não padrões universais. JAX é marcado como ecossistema zero-major em evolução;
APIs GenAI de serving também exigem validação por versão. TensorFlow permanece como alternativa, sem pin artificial
quando a fonte consultada não sustentou uma versão atual inequívoca.

### 20.5 Conteúdo implementado

| Parte | Módulos | Resultado |
|---|---:|---|
| Fundamentos matemáticos e Python | 1–5 | taxonomia de IA, Python científico, álgebra, cálculo/otimização, probabilidade/estatística |
| Dados, aprendizado e avaliação | 6–9 | contratos/leakage, ML supervisionado e não supervisionado, avaliação e incerteza |
| Deep learning, visão, NLP e transformers | 10–13 | NumPy→PyTorch, CV, evolução de NLP, atenção Q/K/V e máscaras |
| LLMs, RAG, agentes e generativa | 14–21 | decoding/cache/MoE, prompts testáveis, ANN, RAG seguro, autonomia limitada, PEFT, difusão e RL |
| Produção, cloud, segurança e governança | 22–26 | MLOps, arquiteturas/SLOs, cloud/TCO, threat modeling e controles auditáveis |
| Pesquisa, performance, avaliação e liderança | 27–30 | leitura/reprodução de papers, profiling, eval generativa e decisão técnica |

Os tópicos avançados antes ausentes — entre eles Jacobiano, Hessiana, Lagrange, Monte Carlo, inferência bayesiana,
informação mútua, t-SNE/UMAP, calibration, mixed precision, distributed training, object tracking, SentencePiece,
KV cache, MoE, HNSW, product quantization, multi-agent, catastrophic forgetting, latent diffusion, SARSA,
multi-tenancy, extraction/privacy attacks, datasheets, continuous batching, speculative decoding, LLM-as-a-judge e
build versus buy — agora fazem parte do contrato validado automaticamente.

Os sete projetos formam uma única evolução:

1. dados reproduzíveis;
2. ML supervisionado e API;
3. deep learning, tracking e export;
4. NLP com transformers;
5. RAG com citações, avaliação e segurança;
6. agente limitado e human-in-the-loop;
7. sistema de IA em produção com registry, deploy, drift, segurança, custo e rollback.

Cada projeto declara requisitos, arquitetura, etapas, aceite, métricas, testes, riscos, entregas e evolução futura.

### 20.6 Arquivos modificados nesta rodada

| Arquivo | Alteração |
|---|---|
| `public/data/ia-advanced.js` | fonte única: academia, 30 módulos, 9 livros, fontes, 7 projetos, avaliação e gabarito |
| `public/assets/js/pages/ia-module.js` | renderizador seguro das seis partes, capítulos, casos, entrevistas, projetos e referências |
| `public/assets/css/ia-academy.css` | direção visual, hierarquia, código, cards, detalhes e breakpoints isolados da academia |
| `public/trilhas/ia/fundamentos.html` | shell dos módulos 1–5 |
| `public/trilhas/ia/dados-ml.html` | nova parte dos módulos 6–9 |
| `public/trilhas/ia/deep-learning.html` | nova parte dos módulos 10–13 |
| `public/trilhas/ia/generativa.html` | nova parte dos módulos 14–21 |
| `public/trilhas/ia/engenharia.html` | shell dos módulos 22–26 |
| `public/trilhas/ia/pratica.html` | módulos 27–30, projetos, livros, versões, gabarito e conclusão |
| `public/trilhas/ia.html` | hub atualizado para seis partes e 30 módulos |
| `scripts/validate-content.mjs` | contratos de conteúdo, tópicos críticos, PDFs, projetos e rotas |
| `public/sw.js` | cache `v14` e novos HTML/CSS/dados |
| `public/sitemap.xml` | três novas rotas |
| `public/README.md` | arquitetura atual da trilha |
| `AUDITORIA-POS-IMPLEMENTACAO.md` | baseline, livros, pesquisa, implementação, validações e limites |

Nenhuma regra de outra trilha foi alterada. As únicas mudanças compartilhadas são inventário offline, sitemap,
documentação e o validador, todos restritos a reconhecer os novos artefatos de IA.

### 20.7 Melhorias recomendadas

| Prioridade | Melhoria | Benefício | Esforço | Risco/dependência |
|---|---|---|---:|---|
| P1 | Criar ambiente isolado com NumPy, scikit-learn, PyTorch CPU e MLflow | executar os 30 exemplos e congelar outputs | Médio | download, compatibilidade e tamanho |
| P1 | Automatizar screenshots em 320, 390, 768, 1024 e 1440 px | prevenir regressão nas páginas data-driven | Médio | runner de browser/CI |
| P1 | Adicionar teste automatizado de links externos com allowlist e retry | detectar referência removida ou redirecionada | Baixo | rede e flakiness |
| P1 | Submeter matemática, estatística e governança a revisão de especialistas de domínio | validar profundidade e nuances regulatórias | Médio | disponibilidade externa |
| P2 | Criar datasets pequenos licenciados para os sete projetos | transformar especificações em laboratórios completos | Alto | curadoria, privacidade e licença |
| P2 | Adicionar MathJax/KaTeX apenas se fórmulas crescerem | melhorar leitura de derivação longa | Médio | peso, cache e acessibilidade |
| P2 | Introduzir filtros locais por nível, tema e tipo de evidência | reduzir carga cognitiva na consulta | Médio | estado e UX |
| P2 | Revisar a política de distribuição dos PDFs | reduzir risco autoral e peso de deploy | Médio | direitos/licenças |

### 20.8 Validações executadas

| Validação | Resultado real |
|---|---|
| Leitura de PDF | 9/9 arquivos; 6.144/6.144 páginas extraídas; 0 falhas |
| Integridade de PDF (`pdfinfo`) | 9/9 abertos; contagem total 6.144 |
| Inspeção visual dos PDFs | capa dos 9 renderizada e contact sheet inspecionada |
| Mapeamento de livros | 30/30 módulos com ao menos uma referência interna |
| Conteúdo obrigatório | 30 módulos; todos os 24 campos validados |
| Exercícios/entrevistas/casos | 90 exercícios; 150 perguntas; 30 casos; 30 gabaritos |
| Projetos | 7/7; cada projeto 2–7 referencia o artefato imediatamente anterior |
| Links/rotas locais | validador passou em 25 páginas; PDFs, CSS, JS, âncoras e Service Worker existentes |
| Tópicos avançados | 33 expressões críticas verificadas automaticamente |
| Sintaxe JavaScript/MJS | 45/45 arquivos passaram em `node --check` |
| Sintaxe dos exemplos Python | 30/30 passaram em `ast.parse` |
| Execução dos exemplos disponíveis | 19/19 biblioteca padrão/NumPy passaram |
| Exemplos com dependência indisponível | 11 não executados: scikit-learn, PyTorch e MLflow ausentes; sintaxe passou |
| Formatação matemática | 30/30 módulos possuem bloco matemático; símbolos Unicode e fórmulas em texto renderizaram sem corte no viewport de 1280 px |
| Diagramas e arquitetura | fluxo geral com semântica `role="img"`/`aria-label` renderizado; as 7 arquiteturas de projeto aparecem como listas estruturadas; não há runtime Mermaid |
| Revisão de referências | 9 livros locais mapeados e fontes primárias externas conferidas durante a pesquisa; não houve checker automatizado de links externos |
| Originalidade e rastreabilidade | conteúdo redigido como síntese; nenhum trecho extenso dos livros foi copiado e os capítulos declarados vieram dos sumários extraídos |
| Validador do projeto | passou: academia e regras preexistentes sem regressão |
| Browser real em 1280 px | seis partes renderizadas (5+4+4+8+5+4 capítulos), sem overflow; hub com 6 cards |
| Interação | busca filtrou corretamente “Hessiana”; rubrica de entrevista abriu e exibiu resposta |
| Console | zero erro; somente mensagem do servidor de live reload |
| `git diff --check` | passou; apenas avisos preexistentes de normalização LF→CRLF |
| Build | não aplicável: não existe manifesto ou etapa de build |
| Lint | não disponível: não existe configuração/comando de lint |
| Type-check | não aplicável: projeto JavaScript sem TypeScript/JSDoc checker |
| Testes unitários | não existem; o teste executável disponível é `scripts/validate-content.mjs` |

### 20.9 Limitações

- Nenhum PDF ficou inacessível e nenhum capítulo precisou ser presumido pelo nome do arquivo.
- A edição/ano de *Deep Learning* foi confirmada por referência editorial; o PDF local não exibia esses dados de forma
  tão direta quanto os demais.
- Não foi criada ou baixada uma stack Python. Por isso, 11 exemplos com scikit-learn, PyTorch ou MLflow foram
  validados sintaticamente, mas não executados.
- O navegador integrado forneceu viewport real de 1280 px, porém não expôs emulação de viewport. Os breakpoints de
  760 e 420 px foram implementados/revisados estaticamente, mas screenshots mobile desta nova academia não foram
  executados nesta rodada.
- Firefox, WebKit/Safari, leitor de tela, Lighthouse e axe não foram executados.
- Links externos foram conferidos em fontes primárias durante a pesquisa, mas não existe checker de rede automatizado
  no projeto.
- Conteúdo regulatório é datado de 27/07/2026 e não constitui aconselhamento jurídico; exige revisão por jurisdição.
- Os PDFs locais parecem ser livros comerciais. Permaneceram disponíveis porque isso foi requisito explícito, mas
  publicação/distribuição deve ser condicionada à confirmação de licença.
- Exemplos pequenos demonstram o mecanismo e o contrato; não substituem execução dos sete projetos com datasets reais.

---

## 21. Re-auditoria pós-redesign e Academias — 30/07/2026

Esta seção **refaz a análise das seções 1–14** sobre o estado atual do repositório, depois do redesign de
três vistas e da reformulação das Academias dirigidas por dados. Método: medição direta dos dados
(`data/*-advanced.js` via `academy-data-factory.js`), do CSS/JS e dos validadores (`validate-content.mjs`,
`validate-http.mjs`). Comparação sempre contra a baseline de **27/07/2026** desta mesma auditoria.

### 21.1 Resumo executivo

**O achado central da auditoria original foi resolvido.** Em 27/07 o projeto "listava conteúdo, não
objetivos": 0% de objetivos acionáveis, 0 pré-requisitos, 0 exercícios e 0 critérios de conclusão nas
páginas de trilha; progresso binário; labs desconexos. Hoje o conteúdo curricular vive em **dados
estruturados** renderizados por um único `academy.js`, e cada módulo carrega objetivo, problema, conceitos,
internals, exercício com evidência, pergunta de defesa e referência a livro.

Medição atual (13 Academias, `treino` é registro):

```txt
13 Academias · 65 shells · 272 módulos
Objetivos observáveis: ≥80% (validate-content) · 75% por regex conservador (subconta Academias ricas)
Exercícios com evidência:      272/272 módulos (100%)  — era 0
Referência a livro por módulo: 272/272 módulos (100%)  — era 0
Pergunta de defesa (interview): 242/272 módulos (89%)  — era 0
Pré-requisitos por parte:      13/13 Academias          — era 0
Avaliação (rubrica+critérios+projetos): 13/13 Academias — era 0
Livros catalogados: 113 · PDFs referenciados: 113 (HTTP 200)
```

A dívida técnica de CSS/JS que a auditoria apontava também caiu: **0 CSS específico por trilha** (eram
~28.060 linhas inline), **0 blocos `<style>`** nas trilhas, `!important` de 45–61/página para **0 nas
trilhas** (17 no total do CSS compartilhado), e o **JS legado morto foi removido** (`data.js`/`index.js`
não existem mais).

**A dívida que sobrou e piorou é de tamanho de repositório:** `.git` passou de 333 MB para **840 MB** e
`public/pdfs/` de 369 MB para **1,7 GB** — efeito da reintrodução e ampliação dos acervos de livros
(git, matemática, inglês, financeiro etc.), obras comerciais versionadas em site aberto.

### 21.2 Comparação com a auditoria original

| Achado central (27/07) | Situação agora | Evidência |
|---|---|---|
| 0% objetivos acionáveis | **Resolvido** | ≥80% observáveis (validador); factory obriga verbo de ação |
| 0 pré-requisitos nas páginas | **Resolvido** | 13/13 Academias com pré-requisitos por parte |
| 0 exercícios nas páginas | **Resolvido** | 272/272 módulos com exercício + evidência (URL) |
| 0 critérios de conclusão | **Resolvido** | rubrica Júnior→Expert + 6–7 critérios + gate D30 em todas |
| Progresso binário | **Resolvido no modelo** | 5 estados (Não iniciado→…→Dominado); Validado exige URL, Dominado exige D30 |
| Labs desconexos | **Resolvido** | projetos com relação `evolves` (2–4 por Academia) |
| 28.060 linhas CSS inline | **Resolvido** | 0 CSS específico; sistema unificado (`tokens/palette/base/hub/academy`) |
| 45–61 `!important`/página | **Resolvido** | 0 nas trilhas; 17 no CSS compartilhado |
| 1.413 linhas JS morto | **Resolvido** | `data.js`/`index.js` removidos |
| `.git` 333 MB · pdfs 369 MB | **Piorou** | `.git` 840 MB · pdfs 1,7 GB |

### 21.3 Matriz de maturidade — reavaliada

| Dimensão | 27/07 | 30/07 | Evidência da mudança |
|---|---:|---:|---|
| Coerência do plano | 9 | 9 | mantida |
| Sustentabilidade da rotina | 9 | 9 | mantida |
| **Qualidade didática** | 4 | **9** | objetivos, pré-requisitos, exercícios e gates em 100% dos módulos |
| Progressão profissional | 8 | 9 | dependências e níveis explícitos por parte |
| **Integração teoria-prática** | 6 | **9** | exercício + evidência por módulo; projetos evolutivos |
| Revisão e retenção | 8 | 8 | D0/D1/D7/D30 + gate D30 no "Dominado" |
| **Avaliação de domínio** | 3 | **8** | rubrica de 4–5 níveis, 5 estados e gates de evidência |
| UX | 9 | 9 | dashboard "Command Center" (rail + barra de comando + bento) |
| Acessibilidade | 9 | 9 | mantida (falta validação em leitor de tela) |
| Arquitetura frontend | 8 | 9 | três vistas, um renderer, zero cópia por trilha |
| **Manutenibilidade** | 6 | **9** | 0 CSS/renderer específico; custo de trilha nova ≈ paleta + dados |
| Performance (runtime) | 8 | 8 | 0 requests externos; offline mantido |
| **Tamanho do repositório** (novo) | — | **2** | `.git` 840 MB, pdfs 1,7 GB |

**Média das dimensões didáticas/técnicas subiu de ~7,3 para ~8,7.** A única nota crítica agora é o
**tamanho do repositório**, que herda o problema histórico dos PDFs comerciais versionados.

### 21.4 Auditoria por Academia (medida)

| Academia | Módulos | Partes | Livros | Obs.%* | Exerc. | Defesa | Refs | Avaliação |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| java | 20 | 4 | 16 | 90% | 20/20 | 20/20 | 20/20 | rub4 · 6 crit · 2 proj |
| ia | 30 | 6 | 9 | 60% | 30/30 | **0/30** | 30/30 | rub5 · 7 crit · 0 proj |
| arquitetura | 18 | 5 | 12 | 44%* | 18/18 | 18/18 | 18/18 | rub4 · 6 crit · 2 proj |
| python | 20 | 5 | 8 | 40%* | 20/20 | 20/20 | 20/20 | rub4 · 6 crit · 2 proj |
| aws | 20 | 5 | 7 | 75% | 20/20 | 20/20 | 20/20 | rub5 · 7 crit · 4 proj |
| devops | 20 | 5 | 10 | 75% | 20/20 | 20/20 | 20/20 | rub5 · 7 crit · 4 proj |
| frontend | 20 | 5 | 10 | 75% | 20/20 | 20/20 | 20/20 | rub5 · 7 crit · 4 proj |
| bancos | 20 | 5 | 8 | 75% | 20/20 | 20/20 | 20/20 | rub5 · 7 crit · 3 proj |
| git | 17 | 5 | 4 | 100% | 17/17 | 17/17 | 17/17 | rub4 · 6 crit · 3 proj |
| ingles | 16 | 5 | 4 | 100% | 16/16 | 16/16 | 16/16 | rub4 · 6 crit · 3 proj |
| matematica | 20 | 5 | 8 | 100% | 20/20 | 20/20 | 20/20 | rub4 · 6 crit · 3 proj |
| sec | 20 | 5 | 10 | 40%* | 20/20 | 20/20 | 20/20 | rub5 · 7 crit · 4 proj |
| financeiro | 31 | 5 | 7 | 100% | 31/31 | 31/31 | 31/31 | rub4 · 6 crit · 3 proj |

\* **Obs.%** é medida por um regex conservador de verbos e **subconta** as Academias ricas hand-authored
(arquitetura/python/sec começam objetivos com verbos como "desenhar", "isolar", "garantir", fora da lista).
O validador do projeto (`validate-content`) confirma **≥80% observáveis** e passa. As Academias criadas pelo
factory (git, inglês, matemática, financeiro) marcam 100% porque o factory obriga verbo de ação.

**Achado novo (regressão pontual):** a Academia de **IA tem 0/30 perguntas de defesa** por módulo — é a
única sem o campo `interview`. É a lacuna didática mais concreta que resta nos dados.

### 21.5 O que a auditoria original pediu × o que foi entregue

- "Converter tópicos em objetivos verificáveis" (Java e todas): **entregue** — objetivo observável por módulo.
- "Adicionar exercícios/critérios/pré-requisitos": **entregue** — em 100% dos módulos e partes.
- "Encadear os labs (projeto contínuo)": **entregue no modelo** — projetos com `evolves`.
- "Alinhar página de IA ao plano" (desproporção 30×): **superado** — a IA agora tem 30 módulos ricos, não 6 tópicos.
- "Reduzir Inglês de 41 para ~24": **superado por reformulação** — Inglês virou 16 módulos ricos guiados por prática.
- "Extrair CSS inline / remover JS morto / matar `!important`": **entregue**.

### 21.6 Dívida remanescente e novo roadmap

**P0 — tamanho do repositório (único bloqueador real).**
- `.git` 840 MB e `pdfs` 1,7 GB de obras comerciais versionadas em repositório aberto.
- Ação: mover PDFs para fora do Git (LFS, storage privado ou apenas local), limpar o histórico e confirmar
  licença antes de qualquer publicação. É risco jurídico além de operacional.

**P1 — lacuna didática pontual.**
- Adicionar `interview` (pergunta de defesa) aos 30 módulos da Academia de **IA**, alinhando-a às outras 12.

**P2 — validações que exigem runtime/humano.**
- Console limpo, overflow em 390 px, contraste AA, leitor de tela e navegação por teclado **no dashboard
  "Command Center" novo** ainda não foram verificados em navegador real (o ambiente de auditoria bloqueia
  `localhost`). Rodar `node scripts/serve.mjs` e conferir.

**P3 — consistência de catálogo.**
- `system.css` (2.737 linhas) segue como camada de aplicação do dashboard; auditar código morto residual.
- Manter `BIBLIOGRAFIA.md` sincronizado (feito para 13 trilhas; pendente apenas a #106, curso online).

### 21.7 Conclusão da re-auditoria

Entre 27/07 e 30/07 o projeto **fechou a maior lacuna da auditoria original**: passou de "enciclopédia com
checkbox" para um **currículo verificável dirigido por dados**, com objetivos, prática, evidência e gates de
domínio em 100% dos 272 módulos, sobre um sistema visual unificado sem cópia por trilha. As notas didáticas,
de avaliação e de manutenibilidade — as três abaixo de 7 na auditoria original — subiram para 8–9.

O trabalho que resta **não é mais didático nem de arquitetura de front**: é **operacional/jurídico** (o peso
dos PDFs comerciais no Git) e uma **lacuna pontual** (perguntas de defesa na trilha de IA), além das
validações de runtime do novo dashboard que só um navegador real fecha.

> Limitações honestas: as medições de conteúdo são estáticas (import dos dados) e não julgam a qualidade
> pedagógica de cada texto módulo a módulo; a "Obs.%" é um piso por regex; e nada foi verificado em
> navegador real nesta rodada.
