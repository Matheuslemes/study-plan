# Auditoria Java 21+ — OCP, engenharia de produção e nível sênior/expert

> Diagnóstico registrado antes da alteração da trilha Java.
>
> Data da análise: 27/07/2026  
> Referência principal: **OCP Java 17 and 21 Programmer — Exam Fundamentals**, Hanumant Deshmukh, build 2.7, 28/09/2024, 832 páginas.  
> Escopo do projeto: `public/trilhas/java.html`, dados didáticos ligados à trilha Java, navegação/PWA e exemplos Java adicionados por esta evolução.

## 1. Resumo executivo

O material atual tem boa amplitude de backend: Java 21, Spring, persistência, segurança, testes, arquitetura, mensageria, observabilidade, concorrência, performance e legado. A sequência das 12 fases também já aproxima estudo e produção.

O problema não é falta de assuntos, e sim **profundidade e verificabilidade**:

- a página principal é majoritariamente uma referência em listas e tabelas, não uma formação por capítulos;
- o alvo declarado ainda é “pleno forte”, abaixo do objetivo sênior/expert;
- fundamentos importantes estão agrupados em poucos bullets, sem pré-requisitos, internals, exemplos contrastados e critérios locais;
- JVM, JIT, class loading, GC e diagnóstico são citados, mas não ensinados como uma disciplina operacional;
- exercícios e entrevistas da trilha são genéricos e não cobrem os 20 módulos;
- os projetos Java existentes não formam uma progressão explícita com decisões, SLOs, incidentes e evolução arquitetural;
- exemplos de frameworks são trechos contextuais e não há um conjunto JDK 21 compilável que prove os fundamentos apresentados.

O livro resolve muito bem a base de linguagem e a preparação OCP, mas não deve ser tratado como fonte suficiente para engenharia de produção. A evolução adotará duas camadas:

1. **Base OCP rastreável:** conceitos ligados a capítulo e seção reais do livro.
2. **Complemento de produção:** especificações do Java 21, JEPs oficiais, documentação da JVM/JFR e práticas de arquitetura, testes, persistência e sistemas distribuídos.

## 2. Estrutura real do livro

| Capítulo | Tema principal | Início |
|---:|---|---:|
| 1 | Kickstarter for Beginners | p. 1 |
| 2 | Primitive Data Types | p. 37 |
| 3 | Arrays | p. 61 |
| 4 | Loops | p. 79 |
| 5 | Object Oriented Approach | p. 103 |
| 6 | Methods | p. 141 |
| 7 | Encapsulation | p. 183 |
| 8 | Enums | p. 199 |
| 9 | Records | p. 207 |
| 10 | Operators, `instanceof` e pattern matching | p. 219 |
| 11 | APIs de `String` | p. 255 |
| 12 | Fluxo, switch expressions e pattern matching | p. 277 |
| 13 | Herança, abstração, sealed classes e polimorfismo | p. 313 |
| 14 | Interfaces e interfaces funcionais | p. 369 |
| 15 | Exceptions | p. 387 |
| 16 | Generics | p. 431 |
| 17 | Lambdas e method references | p. 477 |
| 18 | Collections, `equals`, `Comparable` e `Comparator` | p. 501 |
| 19 | I/O, NIO e serialização | p. 531 |
| 20 | Concorrência, JMM, locks, executors e coleções concorrentes | p. 575 |
| 21 | Streams, collectors, streams paralelos e virtual threads | p. 637 |
| 22 | Date/Time | p. 681 |
| 23 | Modules | p. 709 |
| 24 | Localização | p. 749 |
| 25 | JDBC e transações | p. 763 |
| 26 | Revisões | p. 783 |

### Leitura crítica da referência

**Cobertura forte**

- sintaxe, tipos, fluxo, escopo, métodos e sobrecarga;
- orientação a objetos, encapsulamento, herança, polimorfismo, interfaces, records e sealed types;
- exceptions, generics, lambdas, collections, streams, I/O/NIO;
- concorrência exigida no exame, virtual threads, módulos, localização e JDBC;
- armadilhas de compilação e comportamento relevantes para certificação.

**Cobertura insuficiente para o objetivo profissional**

- processo de class loading, bytecode, verificação, linking e inicialização;
- compilação tiered, profiling do JIT, inlining, deoptimization e efeitos de warm-up;
- heaps geracionais, barreiras, safepoints e escolha entre G1, ZGC e Shenandoah;
- medição com JMH, JFR/JMC, `jcmd`, dumps, análise de alocação e investigação orientada por evidência;
- desenho de APIs públicas, compatibilidade, versionamento e modularização de domínio;
- estratégia de testes, test doubles, testes de contrato, integração e concorrência;
- persistência em produção: N+1, locking, batching, migrações, idempotência e fronteira transacional;
- resiliência e consistência distribuída: timeout, retry, backoff, circuit breaker, outbox e saga;
- segurança de aplicação, secrets, supply chain e observabilidade;
- DDD, arquitetura hexagonal, monólito modular, microsserviços e ADRs.

## 3. Diagnóstico do conteúdo existente

### Pontos fortes

- abrangência incomum para uma única página de trilha;
- presença explícita de JMM, happens-before, locks, executors e Virtual Threads;
- orientação prática em Spring, JPA, testes, APIs, mensageria e observabilidade;
- seção “quando não usar Virtual Threads” já introduzida;
- ligação da trilha ao roadmap de 12 fases e ao projeto evolutivo DevCore;
- referências oficiais e livros complementares já presentes.

### Lacunas e inconsistências

| Área | Estado anterior | Evidência / impacto | Decisão |
|---|---|---|---|
| Objetivo profissional | “Pleno forte” | desalinhado ao pedido sênior/expert | reposicionar a página e os critérios |
| Progressão | assuntos amplos em uma página | difícil identificar dependências e domínio | criar 20 módulos progressivos |
| Base da linguagem | 8 bullets em “Java Core” | pouca profundidade em contratos e internals | expandir módulos 1–8 |
| `Object` e collections | cobertura breve | falhas em `equals`/`hashCode` quebram Set/Map/JPA | módulo e laboratório próprios |
| Generics | lista conceitual | ausência de type erasure, heap pollution e API variance | aprofundar com PECS e limites |
| Streams | foco em operações | falta de custo, side effects, collectors e paralelismo | acrescentar critérios de uso |
| Erros e I/O | seções dispersas | sem taxonomia operacional e fronteiras de recuperação | consolidar em um módulo |
| JMM e concorrência | boa visão geral | falta método de prova, cancelamento e testes determinísticos | aprofundar módulos 9–10 |
| Java moderno | Java 21 presente | preview/final e baseline não estão claramente separados | criar matriz de status |
| JVM | seção rasa | não habilita diagnóstico de class loading/JIT | criar módulo 11 |
| GC | menções genéricas | não ensina escolha, métricas ou tuning | criar módulo 12 |
| Performance | lista de ferramentas | falta método hipótese → medida → mudança → regressão | criar módulo 13 |
| API e padrões | distribuído | falta coesão, compatibilidade e anti-patterns | módulos 14–15 |
| Testes | boa amplitude | falta pirâmide por risco e teste concorrente | módulo 16 |
| Persistência | boa amplitude JPA | falta fronteira transacional e consistência | módulo 17 |
| Distribuídos | mensageria presente | falta resiliência e semântica de entrega | módulo 18 |
| Segurança/observabilidade | duas seções | falta threat model e ligação sinal → SLO → ação | módulo 19 |
| Arquitetura | boa visão geral | falta caminho monólito modular → serviços e gates | módulo 20 |
| Exercícios | 3 exercícios Java genéricos | não mede domínio por módulo | banco progressivo por módulo |
| Entrevistas | simulações por fase | sem rubrica por senioridade | perguntas e rubricas por módulo |
| Projetos | projetos e mini-projetos separados | pouca evidência de evolução arquitetural | 2 capstones progressivos |
| Código | snippets misturam JDK e frameworks | não existe suíte compilável de referência | adicionar exemplos JDK 21 |

## 4. Mapa de gaps: livro × material atual × formação desejada

Legenda: **C** coberto; **P** parcial; **A** ausente.

| Competência | Livro | Site anterior | Formação alvo | Fonte primária / complemento |
|---|:---:|:---:|---|---|
| Sintaxe, tipos e fluxo | C | P | domínio sem armadilhas | livro, cap. 1–4 e 10–12 |
| OO, records, sealed e interfaces | C | P | modelagem orientada por invariantes | livro, cap. 5–9 e 13–14 |
| Contratos de `Object` | C | P | identidade, igualdade e hashing em produção | livro, cap. 18 + JDK API |
| Generics e type erasure | C/P | P | APIs reutilizáveis e type-safe | livro, cap. 16 + JLS |
| Collections | C | P | escolha por semântica, custo e concorrência | livro, cap. 18 + JDK API |
| Lambdas e streams | C | P | pipelines legíveis, previsíveis e medidos | livro, cap. 17 e 21 |
| Exceptions, I/O e NIO | C | P | recuperação, recursos e filesystem seguro | livro, cap. 15 e 19 |
| JMM e concorrência | C/P | P | reasoning por happens-before e ownership | livro, cap. 20 |
| Virtual Threads | C | P | I/O blocking com limites e observabilidade | livro, cap. 21 + JEP 444 |
| Structured Concurrency | A | P | cancelamento e lifetimes estruturados | JEP 453; preview no JDK 21 |
| Scoped Values | A | A | contexto imutável sem abuso de ThreadLocal | JEP 446; preview no JDK 21 |
| Class loading e bytecode | A | A | explicar execução e linkage | JVMS 21 |
| JIT e deoptimization | A | A | interpretar warm-up e profiles | HotSpot/JVM docs |
| GC e collectors | A | P | selecionar e medir G1/ZGC/Shenandoah | GC Tuning Guide |
| Profiling e diagnóstico | A | P | JFR, `jcmd`, dumps e JMH | JFR/JDK Tool Specs |
| Design de API | A | P | compatibilidade, contratos e evolução | Java API design + práticas |
| Estratégia de testes | A | P | testes por risco e arquitetura | JUnit/Mockito/Testcontainers |
| Persistência operacional | P (JDBC) | P | JPA/JDBC, locking, N+1, migrações | docs de Jakarta/Spring |
| Sistemas distribuídos | A | P | resiliência e consistência explícitas | padrões e docs oficiais |
| Segurança e observabilidade | A | P | threat model, SLOs e resposta | OWASP/OpenTelemetry |
| Arquitetura e DDD | A | P | decisões, limites e evolução | referências complementares |

## 5. Estrutura proposta: 20 módulos

### Parte I — Linguagem, contratos e modelagem

1. Fundamentos profundos da linguagem e modelo de execução
2. Orientação a objetos, imutabilidade, records e sealed hierarchies
3. Contratos de `Object`, identidade, igualdade e hashing
4. Generics, type erasure, variance e APIs type-safe
5. Collections, complexidade, ordenação e concorrência
6. Lambdas, Streams e collectors
7. Exceptions, recursos, I/O e NIO.2
8. Modularização, Date/Time e internacionalização

### Parte II — Runtime, concorrência e performance

9. Java Memory Model e concorrência correta
10. Executors, `CompletableFuture`, Virtual Threads e concorrência estruturada
11. JVM: class loading, bytecode, memória e JIT
12. Garbage Collection e tuning orientado por métricas
13. Performance e diagnóstico com JMH, JFR/JMC, `jcmd` e dumps

### Parte III — Engenharia de produção

14. Design de APIs, compatibilidade e modularidade
15. Padrões de projeto, SOLID e anti-patterns
16. Estratégia de testes e testabilidade
17. Persistência, transações, locking e eficiência
18. Sistemas distribuídos, mensageria e resiliência
19. Segurança, observabilidade e operação
20. DDD, arquitetura hexagonal, monólito modular e microsserviços

Cada módulo deve conter: objetivo observável, pré-requisitos, problema, conceitos, internals, quando usar/não usar, exemplo contrastado, trade-offs, cenário de produção, falhas comuns, checklist, perguntas de entrevista, exercícios, desafio avançado, referência exata do livro e complementos.

## 6. Plano de evolução em cinco etapas

| Etapa | Conteúdo | Dependências | Risco | Esforço | Resultado esperado |
|---|---|---|---|---|---|
| 1. Base verificável | módulos 1–8, exemplos JDK 21, contratos e exercícios | página Java e CSS compartilhado | excesso de conteúdo sem navegação | alto | base OCP aplicada, compilável e pesquisável |
| 2. Runtime e diagnóstico | módulos 9–13, JMM, Loom, JVM, GC e profiling | etapa 1; JDK tools | tratar correlação como causalidade | alto | investigação orientada por evidência |
| 3. Engenharia de produção | módulos 14–20 | etapas 1–2; conteúdo Spring/JPA existente | duplicar referências atuais | alto | decisões arquiteturais e operacionais explícitas |
| 4. Avaliação | rubricas, casos, exercícios e projetos | todos os módulos | avaliação superficial | médio/alto | evidência por nível e portfólio coerente |
| 5. Integração e QA | overview, roadmap, PWA, links, validações | etapas anteriores | regressão responsiva/offline | médio | experiência integrada e validada |

## 7. Critério de profundidade

O material não deve produzir a ilusão de senioridade por quantidade. O nível é avaliado pela capacidade de:

- explicar **por que** uma solução funciona, incluindo internals relevantes;
- escolher entre alternativas e explicitar custo, risco e reversibilidade;
- reproduzir falhas e gerar evidência antes de otimizar;
- projetar para teste, operação, segurança e evolução;
- diagnosticar incidentes sem “tuning por superstição”;
- reconhecer quando não usar um recurso moderno;
- conduzir decisões com ADRs, métricas e critérios de saída.

## 8. Fontes oficiais para a camada Java 21+

- [JDK 21](https://openjdk.org/projects/jdk/21/)
- [JEP 440 — Record Patterns](https://openjdk.org/jeps/440)
- [JEP 441 — Pattern Matching for switch](https://openjdk.org/jeps/441)
- [JEP 444 — Virtual Threads](https://openjdk.org/jeps/444)
- [JEP 446 — Scoped Values (Preview no JDK 21)](https://openjdk.org/jeps/446)
- [JEP 453 — Structured Concurrency (Preview no JDK 21)](https://openjdk.org/jeps/453)
- [JEP 525 — Structured Concurrency (Sexto Preview no JDK 26)](https://openjdk.org/jeps/525)
- [Java SE 21 e JDK 21 Specifications](https://docs.oracle.com/en/java/javase/21/docs/specs/)
- [JDK Flight Recorder API Guide 21](https://docs.oracle.com/en/java/javase/21/jfapi/)
- [`jcmd` no JDK 21](https://docs.oracle.com/en/java/javase/21/docs/specs/man/jcmd.html)

### Nota de versão

O baseline executável será Java 21 sem preview. Virtual Threads, record patterns e pattern matching para `switch` são finais no JDK 21. Structured Concurrency e Scoped Values serão ensinados como evolução controlada, com o status explicitamente ligado à versão: ambos eram preview no JDK 21; Scoped Values tornou-se final no JDK 25, enquanto Structured Concurrency chegou ao sexto preview no JDK 26. Exemplos compilados da trilha não dependerão de preview.

## 9. Limitações da auditoria inicial

- O PDF não é tagged e bloqueia cópia pelo leitor; a análise estrutural foi feita por extração local e conferência visual de capa e sumário.
- As páginas indicam o início dos capítulos, não intervalos exatos para cada subtópico.
- O livro é usado por referência temática, sem reprodução extensa do texto.
- Frameworks e padrões fora do escopo OCP exigem documentação e literatura complementares.
- A auditoria inicial mede a presença e a estrutura do material; a eficácia pedagógica real ainda exige execução dos exercícios e feedback de aprendizes.

## 10. Registro de implementação

### 10.1 Resultado entregue

A trilha foi elevada de uma página de referência orientada a “pleno forte” para um percurso complementar de **20 módulos sênior/expert**, sem remover a visão geral e sem substituir o roadmap de 12 fases.

| Parte | Módulos | Conteúdo |
|---|---:|---|
| Linguagem, contratos e modelagem | 1–8 | semântica, OO, Object, generics, collections, streams, erros/I/O, módulos/tempo |
| Runtime, concorrência e performance | 9–13 | JMM, Virtual Threads, Structured Concurrency, JVM/JIT, GC, diagnóstico |
| Engenharia de produção | 14–20 | APIs, padrões, testes, persistência, distribuídos, segurança/observabilidade, arquitetura |
| Avaliação, casos e capstones | transversal | rubricas, perguntas, casos, projetos e critérios de conclusão |

Cada um dos 20 módulos contém os campos definidos nesta auditoria: objetivo observável, pré-requisitos, problema, conceitos, internals, uso/não uso, contraste, trade-offs, produção, riscos, checklist, entrevista, exercícios, desafio e referências.

### 10.2 Conteúdo novo e aprofundado

- **60 exercícios**: básico, aplicado e expert em cada módulo.
- **40 perguntas de entrevista**: duas por módulo, com critério de resposta forte.
- **4 rubricas de senioridade**: júnior, pleno, sênior e expert.
- **5 estudos de caso**: checkout concorrente, regressão de p99, evolução de API, decisão de extração e incidente de segurança.
- **2 projetos encadeados**:
  - Ledger de pagamentos modular, nível sênior;
  - Plataforma de comércio evolutiva, nível expert, partindo do artefato anterior.
- **8 classes Java 21** sem dependência externa para linguagem, modelagem, contratos, generics/collections, streams/erros, tempo, concorrência e smoke test.
- laboratórios operacionais para `javap`, JFR, `jcmd`, thread dump, heap e GC, com avisos de impacto e segurança.

### 10.3 Integração no produto

- a visão geral Java passou a declarar alvo sênior/expert;
- métricas antigas foram alinhadas para 156 semanas e 12 fases;
- a navegação duplicada foi renumerada;
- uma seção “Academia Java 21+” liga as quatro novas páginas;
- guia de trilha, critérios de conclusão, exercícios e simulados foram aprofundados;
- sitemap e cache offline passaram a conhecer os novos módulos;
- o validador de conteúdo passou a exigir os 20 módulos e todos os campos obrigatórios.

### 10.4 Arquivos

**Novos**

- `public/data/java-advanced.js`
- `public/assets/js/pages/java-module.js`
- `public/trilhas/java/fundamentos.html`
- `public/trilhas/java/runtime.html`
- `public/trilhas/java/producao.html`
- `public/trilhas/java/avaliacao.html`
- `public/examples/java21-senior/README.md`
- `public/examples/java21-senior/src/dev/studyplan/javaexpert/*.java`
- `AUDITORIA-JAVA-OCP.md`

**Atualizados no escopo desta evolução**

- `public/trilhas/java.html`
- `public/assets/css/trilha-components.css`
- `public/data/track-guides.js`
- `public/data/track-exercises.js`
- `public/data/interviews.js`
- `public/sitemap.xml`
- `public/sw.js`
- `public/README.md`
- `scripts/validate-content.mjs`

### 10.5 Validações executadas

| Validação | Resultado |
|---|---|
| Sintaxe de `java-advanced.js`, renderer e service worker | aprovada com `node --check` |
| Integridade dos dados | 20 módulos; 8/5/7 por parte; 60 exercícios; 40 perguntas; 5 casos; 2 projetos; zero campo obrigatório ausente |
| Java 21 | `javac --release 21 -Xlint:all` sem warnings |
| Smoke test | `java -ea ...CompileSmoke` → `Java 21 academy examples: OK` |
| Validador geral | 298/324 objetivos observáveis (92%); links/âncoras/assets válidos; gates de evidência e D30 preservados |
| Browser desktop | 8 módulos de fundamentos, 5 de runtime, 7 de produção, 5 casos, 2 projetos e 40 perguntas renderizados; zero log de erro |
| Busca local | “type erasure” filtrou para o módulo de generics |
| Responsividade | viewport de 390 px sem overflow horizontal; sidebar removida e grids em uma coluna |
| Estrutura/a11y | uma `h1` por página, IDs únicos, âncoras existentes e controles nomeados |

### 10.6 Nível profissional resultante

O material agora oferece uma **formação sênior forte** quando executado com os exercícios, casos e primeiro capstone. O segundo capstone, as rubricas expert e os mecanismos entre equipes criam um **caminho real para expert**, mas não certificam esse nível por leitura: expert exige impacto repetido, contexto organizacional e operação de sistemas reais.

### 10.7 Limitações remanescentes e próximos passos

- Os exemplos compilados são JDK-only. Snippets Spring/JPA da visão geral continuam sendo fragmentos contextuais que exigem dependências e projeto próprio.
- Não foram executados JMH, JFR, GC experiments ou incidentes reais nesta alteração; foram definidos protocolos e critérios para o aprendiz executá-los.
- A eficácia pedagógica precisa ser acompanhada por taxa de conclusão, qualidade das evidências, desempenho em revisão D30 e feedback de usuários.
- As referências de produção são complementares ao livro e devem ser revisadas quando a baseline de Java mudar.
- Structured Concurrency permanece preview no JDK 26; não integra a baseline compilável.
- O PDF é uma obra de terceiros: o projeto referencia capítulos e temas, sem reproduzir trechos extensos.
