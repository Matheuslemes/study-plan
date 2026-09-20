/*
 * JAVA ADVANCED — currículo complementar ao roadmap principal.
 *
 * O livro OCP é a referência de linguagem. Os tópicos de runtime e produção
 * usam fontes oficiais e deixam explícito quando o conteúdo extrapola o exame.
 */

const official = {
  jdk21: { label: 'OpenJDK — JDK 21', url: 'https://openjdk.org/projects/jdk/21/' },
  jls: { label: 'Java Language Specification 21', url: 'https://docs.oracle.com/javase/specs/jls/se21/html/' },
  jvms: { label: 'Java Virtual Machine Specification 21', url: 'https://docs.oracle.com/javase/specs/jvms/se21/html/' },
  api: { label: 'Java SE 21 API', url: 'https://docs.oracle.com/en/java/javase/21/docs/api/' },
  jep440: { label: 'JEP 440 — Record Patterns', url: 'https://openjdk.org/jeps/440' },
  jep441: { label: 'JEP 441 — Pattern Matching for switch', url: 'https://openjdk.org/jeps/441' },
  jep444: { label: 'JEP 444 — Virtual Threads', url: 'https://openjdk.org/jeps/444' },
  jep446: { label: 'JEP 446 — Scoped Values (preview no JDK 21)', url: 'https://openjdk.org/jeps/446' },
  jep453: { label: 'JEP 453 — Structured Concurrency (preview no JDK 21)', url: 'https://openjdk.org/jeps/453' },
  jep525: { label: 'JEP 525 — Structured Concurrency (sexto preview no JDK 26)', url: 'https://openjdk.org/jeps/525' },
  jdk25: { label: 'OpenJDK — JDK 25 (LTS atual)', url: 'https://openjdk.org/projects/jdk/25/' },
  jep506: { label: 'JEP 506 — Scoped Values (final no JDK 25)', url: 'https://openjdk.org/jeps/506' },
  jep511: { label: 'JEP 511 — Module Import Declarations (final no JDK 25)', url: 'https://openjdk.org/jeps/511' },
  jep513: { label: 'JEP 513 — Flexible Constructor Bodies (final no JDK 25)', url: 'https://openjdk.org/jeps/513' },
  jep484: { label: 'JEP 484 — Class-File API (final no JDK 24)', url: 'https://openjdk.org/jeps/484' },
  jep454: { label: 'JEP 454 — Foreign Function & Memory API (final no JDK 22)', url: 'https://openjdk.org/jeps/454' },
  jep469: { label: 'JEP 469 — Vector API (incubação continuada)', url: 'https://openjdk.org/jeps/469' },
  jep483: { label: 'JEP 483 — Ahead-of-Time Class Loading & Linking', url: 'https://openjdk.org/jeps/483' },
  leyden: { label: 'Project Leyden — tempo de startup e warmup', url: 'https://openjdk.org/projects/leyden/' },
  valhalla: { label: 'Project Valhalla — value types', url: 'https://openjdk.org/projects/valhalla/' },
  crac: { label: 'OpenJDK CRaC — Coordinated Restore at Checkpoint', url: 'https://openjdk.org/projects/crac/' },
  graalvm: { label: 'GraalVM Native Image — documentação', url: 'https://www.graalvm.org/latest/reference-manual/native-image/' },
  instrument: { label: 'java.lang.instrument — Java SE 21 API', url: 'https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/package-summary.html' },
  varhandle: { label: 'VarHandle — modos de acesso e memória', url: 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html' },
  jmh: { label: 'JMH — Java Microbenchmark Harness', url: 'https://github.com/openjdk/jmh' },
  openjdkRepo: { label: 'OpenJDK — código-fonte no GitHub', url: 'https://github.com/openjdk/jdk' },
  jbs: { label: 'JDK Bug System (JBS)', url: 'https://bugs.openjdk.org/' },
  jep1: { label: 'JEP 1 — o processo de JEPs do OpenJDK', url: 'https://openjdk.org/jeps/1' },
  bootDocs: { label: 'Spring Boot — referência oficial', url: 'https://docs.spring.io/spring-boot/index.html' },
  frameworkDocs: { label: 'Spring Framework — referência oficial', url: 'https://docs.spring.io/spring-framework/reference/' },
  jfr: { label: 'JDK Flight Recorder Guide 21', url: 'https://docs.oracle.com/en/java/javase/21/jfapi/' },
  jcmd: { label: 'jcmd — JDK 21 Tool Specification', url: 'https://docs.oracle.com/en/java/javase/21/docs/specs/man/jcmd.html' },
  gc: { label: 'HotSpot Garbage Collection Tuning Guide 21', url: 'https://docs.oracle.com/en/java/javase/21/gctuning/' },
  secure: { label: 'Oracle Secure Coding Guidelines for Java SE', url: 'https://www.oracle.com/java/technologies/javase/seccodeguide.html' },
  owasp: { label: 'OWASP Application Security Verification Standard', url: 'https://owasp.org/www-project-application-security-verification-standard/' },
  otel: { label: 'OpenTelemetry Java', url: 'https://opentelemetry.io/docs/languages/java/' }
};

export const javaBooks = Object.freeze({
  ocp: {
    title: 'OCP Java SE 17 & 21 Programmer — Exam Fundamentals',
    authors: 'Hanumant Deshmukh',
    edition: 'build 2.7',
    year: '2024',
    language: 'Inglês',
    pages: 832,
    path: '/pdfs/livros-java/ocp+java+17+21+certification+fundamentals.pdf',
    depth: 'Fundamental → sênior',
    prerequisites: 'Sintaxe básica de Java e compilação pela linha de comando',
    structure: 'Referência da linguagem e das APIs cobradas nos exames 1Z0-829/1Z0-830',
    limitations: 'Foco na linguagem e certificação; runtime profundo, produção e frameworks ficam em obras específicas.'
  },
  'effective-java': {
    title: 'Effective Java (3ª ed)',
    authors: 'Joshua Bloch',
    edition: '3ª edição',
    year: '2018',
    language: 'Inglês',
    pages: 412,
    path: '/pdfs/livros-java/Effective Java (3rd Edition).pdf',
    depth: 'Intermediário → expert',
    prerequisites: 'Java em uso diário e OO',
    structure: '90 itens: criação de objetos, métodos comuns, classes, generics, enums, lambdas, exceções e concorrência',
    limitations: 'Formato de itens; não é referência linear nem cobre frameworks.'
  },
  'modern-java': {
    title: 'Modern Java in Action (2ª ed)',
    authors: 'Raoul-Gabriel Urma, Mario Fusco e Alan Mycroft',
    edition: '2ª edição',
    year: '2018',
    language: 'Inglês',
    pages: 592,
    path: '/pdfs/livros-java/Modern Java in Action, 2nd Edition.pdf',
    depth: 'Intermediário',
    prerequisites: 'Java básico e coleções',
    structure: 'Lambdas, streams, collectors, Optional, CompletableFuture e programação funcional',
    limitations: 'Escopo em estilo funcional e streams; não cobre JVM interna nem produção.'
  },
  'core-java': {
    title: 'Core Java, Volumes I & II (12ª ed)',
    authors: 'Cay S. Horstmann',
    edition: '12ª edição',
    year: '2022',
    language: 'Inglês',
    pages: 2000,
    path: '/pdfs/livros-java/Core Java Vol 12 - I.pdf',
    depth: 'Fundamental → sênior',
    prerequisites: 'Lógica de programação',
    structure: 'Referência ampla da linguagem e da plataforma, dos fundamentos a recursos avançados (Vol. I e II)',
    limitations: 'Referência de consulta; menos opinativo que Effective Java.'
  },
  'spring-in-action': {
    title: 'Spring in Action (6ª ed)',
    authors: 'Craig Walls',
    edition: '6ª edição',
    year: '2022',
    language: 'Inglês',
    pages: 520,
    path: '/pdfs/livros-java/Spring in Action, Sixth Edition -- Craig Walls -- ( WeLib.org ).epub.pdf',
    depth: 'Intermediário',
    prerequisites: 'Java e noções de web/HTTP',
    structure: 'Spring Boot, MVC/WebFlux, dados, segurança, mensageria, integração e deploy',
    limitations: 'Amplo e introdutório por tema; performance de persistência e JVM ficam em outras obras.'
  },
  'spring-boot': {
    title: 'Spring Boot: Up and Running',
    authors: 'Mark Heckler',
    edition: '1ª edição',
    year: '2021',
    language: 'Inglês',
    pages: 330,
    path: '/pdfs/livros-java/Spring Boot- Up and Running- Building Cloud Native Java and -- Mark Heckler -- ( WeLib.org ).mobi.pdf',
    depth: 'Intermediário',
    prerequisites: 'Java e Spring básico',
    structure: 'Serviços cloud-native com Spring Boot: configuração, dados, mensageria, Actuator e resiliência',
    limitations: 'Foco em construir e operar serviços; não aprofunda a linguagem.'
  },
  'clean-code': {
    title: 'Clean Code',
    authors: 'Robert C. Martin',
    edition: '1ª edição',
    year: '2008',
    language: 'Inglês',
    pages: 464,
    path: '/pdfs/livros-java/Clean.Code.A.Handbook.of.Agile.Software.Craftsmanship.pdf',
    depth: 'Fundamental → intermediário',
    prerequisites: 'Escrever código no dia a dia',
    structure: 'Nomes, funções, comentários, classes, fronteiras, testes e princípios de código limpo',
    limitations: 'Opinativo; princípios úteis, exemplos datados. Complementa, não substitui, design de sistemas.'
  },
  jcip: {
    title: 'Java Concurrency in Practice',
    authors: 'Brian Goetz et al.',
    edition: '1ª edição',
    year: '2006',
    language: 'Inglês',
    pages: 384,
    path: '/pdfs/livros-java/Java Concurrency in Practice.pdf',
    depth: 'Sênior → expert',
    prerequisites: 'Java sólido e noção de threads',
    structure: 'Modelo de memória, thread safety, publicação, locks, pools, cancelamento e testes de concorrência',
    limitations: 'Anterior a Virtual Threads; os fundamentos permanecem a referência absoluta de concorrência.'
  },
  'spring-security': {
    title: 'Spring Security in Action (2ª ed)',
    authors: 'Laurentiu Spilca',
    edition: '2ª edição',
    year: '2024',
    language: 'Inglês',
    pages: 500,
    path: '/pdfs/livros-java/Spring Security in Action, Second Edition -- Laurențiu Spilcă -- ( WeLib.org ).epub.pdf',
    depth: 'Intermediário → sênior',
    prerequisites: 'Spring Boot e HTTP',
    structure: 'Autenticação, autorização, filtros, OAuth2/OIDC, JWT, method security, CSRF/CORS e testes',
    limitations: 'Focado em Spring Security; segurança de infraestrutura fica fora do escopo.'
  },
  'java-persistence': {
    title: 'Java Persistence with Spring Data and Hibernate',
    authors: 'Cătălin Tudose',
    edition: '1ª edição',
    year: '2023',
    language: 'Inglês',
    pages: 800,
    path: '/pdfs/livros-java/Java Persistence with Spring Data and Hibernate -- Catalin Tudose -- ( WeLib.org ).pdf',
    depth: 'Intermediário → sênior',
    prerequisites: 'Java, SQL e Spring básico',
    structure: 'JPA/Hibernate, mapeamento, transações, consultas, Spring Data e testes de persistência',
    limitations: 'Amplo em mapeamento; tuning fino de performance complementa com High-Performance Java Persistence.'
  },
  'effective-testing': {
    title: 'Effective Software Testing',
    authors: 'Maurício Aniche',
    edition: '1ª edição',
    year: '2022',
    language: 'Inglês',
    pages: 300,
    path: '/pdfs/livros-java/Effective Software Testing - A Developers Guide -- Maurício Aniche -- ( WeLib.org ).epub.pdf',
    depth: 'Intermediário → sênior',
    prerequisites: 'Java e JUnit básico',
    structure: 'Teste de especificação, estrutural, baseado em propriedade, design para testabilidade e teste de contrato',
    limitations: 'Metódico e agnóstico de framework; foca a disciplina de testes, não ferramentas específicas.'
  },
  gof: {
    title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
    authors: 'Gamma, Helm, Johnson e Vlissides',
    edition: '1ª edição',
    year: '1994',
    language: 'Inglês',
    pages: 395,
    path: '/pdfs/livros-java/Erich Gamma, Richard Helm, Ralph Johnson, John M. Vlissides-Design Patterns_ Elements of Reusable Object-Oriented Software  -Addison-Wesley Professional (1994).pdf',
    depth: 'Sênior',
    prerequisites: 'OO sólida',
    structure: '23 padrões clássicos de criação, estrutura e comportamento',
    limitations: 'Referência clássica; aplicar com critério — nem todo padrão cabe em código idiomático moderno.'
  },
  refactoring: {
    title: 'Refactoring (2ª ed)',
    authors: 'Martin Fowler',
    edition: '2ª edição',
    year: '2018',
    language: 'Inglês',
    pages: 448,
    path: '/pdfs/livros-java/Refactoring.Improving.the.Design.of.Existing.Code.2nd.Edition.2018.11.pdf',
    depth: 'Intermediário → sênior',
    prerequisites: 'Testes automatizados e OO',
    structure: 'Catálogo de refatorações, code smells e o processo de melhorar design com segurança',
    limitations: 'Exemplos em JavaScript na 2ª ed; o catálogo e os princípios são diretamente aplicáveis a Java.'
  },
  wgjd: {
    title: 'The Well-Grounded Java Developer (2ª ed)',
    authors: 'Benjamin Evans, Jason Clark e Martijn Verburg',
    edition: '2ª edição',
    year: '2022',
    language: 'Inglês',
    pages: 440,
    path: '/pdfs/livros-java/The Well-Grounded Java Developer, Second Edition -- Benjamin Evans;Martijn Verburg;Jason Clark;; Martijn Verburg -- ( WeLib.org ).epub.pdf',
    depth: 'Sênior',
    prerequisites: 'Java intermediário',
    structure: 'JPMS, class loading, bytecode, concorrência moderna, JVM, build e linguagens alternativas na JVM',
    limitations: 'Panorama de plataforma; cada tema (GC, JIT) aprofunda em Optimizing Java.'
  },
  'hp-persistence': {
    title: 'High-Performance Java Persistence',
    authors: 'Vlad Mihalcea',
    edition: '1ª edição',
    year: '2016',
    language: 'Inglês',
    pages: 460,
    path: '/pdfs/livros-java/High-Performance Java Persistence -- Vlad Mihalcea -- ( WeLib.org ).pdf',
    depth: 'Sênior → expert',
    prerequisites: 'JPA/Hibernate e SQL',
    structure: 'Fetching, N+1, batching, locking, caching, connection pooling e diagnóstico de performance de persistência',
    limitations: 'Especializado em performance de persistência; assume domínio prévio de JPA.'
  },
  'optimizing-java': {
    title: 'Optimizing Java',
    authors: 'Benjamin J. Evans, James Gough e Chris Newland',
    edition: '1ª edição',
    year: '2018',
    language: 'Inglês',
    pages: 440,
    path: '/pdfs/livros-java/Optimizing Java - Practical Techniques for Improving JVM -- Chris Newland & James Gough & Benjamin J Evans [Chris -- ( WeLib.org ).epub.pdf',
    depth: 'Sênior → expert',
    prerequisites: 'Java sólido e noção de JVM',
    structure: 'Metodologia de performance, JVM, JIT, modelo de memória, coletores de GC, JMH e profiling',
    limitations: 'Denso e especializado; foca performance, não design nem frameworks.'
  }
});

export const JAVA_RESEARCH_DATE = '2026-09-20';

/*
 * Baseline tecnológico: o que os exemplos compilam contra (21 LTS, escolhido
 * por ser a baseline do exame 1Z0-830) e o que já é corrente em produção.
 * A distância entre as duas colunas é conteúdo, não erro — módulos 21–26
 * cobrem o que mudou depois do 21.
 */
export const javaTechnologyBaseline = [
  { technology: 'JDK dos exemplos', baseline: '21 LTS', status: 'Baseline de compilação', note: 'Alinhado ao exame 1Z0-830. Exemplos compilam com `javac --release 21 -Xlint:all`.' },
  { technology: 'JDK LTS corrente', baseline: '25 (set/2025)', status: 'Adotar em projeto novo', note: 'JDK 21 sob licença permissiva da Oracle termina em out/2026; migrar para 25 ou posterior.' },
  { technology: 'JDK não-LTS', baseline: '26 (mar/2026)', status: 'Acompanhar', note: 'Usado aqui para ler JEPs em preview, não como alvo de produção.' },
  { technology: 'Scoped Values', baseline: 'final no 25 (JEP 506)', status: 'Estável', note: 'Substitui ThreadLocal em fluxos com Virtual Threads. Era preview no 21.' },
  { technology: 'Structured Concurrency', baseline: 'preview (JEP 525, JDK 26)', status: 'Ainda preview', note: 'Sexto preview; API mudou entre versões. Não usar em produção sem política de upgrade.' },
  { technology: 'Class-File API', baseline: 'final no 24 (JEP 484)', status: 'Estável', note: 'Substitui ASM para ler e gerar bytecode com API suportada. Módulo 21.' },
  { technology: 'FFM API (Panama)', baseline: 'final no 22 (JEP 454)', status: 'Estável', note: 'Substituto suportado de JNI e de `sun.misc.Unsafe`, em remoção. Módulo 25.' },
  { technology: 'Vector API', baseline: 'incubação (JEP 469)', status: 'Instável', note: 'Depende de Valhalla para estabilizar. Estudar, não depender.' },
  { technology: 'Spring Boot', baseline: '4.1 (2026)', status: 'Corrente', note: 'Boot 3.5 saiu do suporte aberto em jun/2026. Os livros da biblioteca cobrem Boot 2.x — usar a doc oficial.' },
  { technology: 'Spring Framework', baseline: '7.0', status: 'Corrente', note: 'JSpecify para nulidade, versionamento nativo de API REST, resiliência embutida, Jackson 3.' },
  { technology: 'Spring Security', baseline: '7.x', status: 'Corrente', note: 'Livro da biblioteca cobre a linha 6.x; conferir mudanças de configuração antes de copiar exemplos.' },
  { technology: 'GraalVM Native Image', baseline: 'acompanha o JDK corrente', status: 'Estável para casos definidos', note: 'Closed-world: reflexão e recursos exigem configuração explícita. Módulo 24.' }
];

export const javaAcademy = Object.freeze({
  title: 'Academia Java 21+',
  baseline: 'Exemplos em Java 21 LTS · LTS corrente 25 · baseline completo na avaliação',
  book: 'OCP (Deshmukh) sustenta a linguagem; Effective Java, Java Concurrency in Practice, Optimizing Java, Spring in Action e mais 11 obras aprofundam cada tema por área',
  parts: {
    fundamentos: {
      index: '1/5',
      title: 'Linguagem, contratos e modelagem',
      subtitle: 'Módulos 1–8 · da semântica da linguagem a APIs de domínio previsíveis.',
      prerequisites: [
        'Compilar e executar uma aplicação Java simples pela linha de comando.',
        'Ler testes e usar Git em um fluxo básico de branch e revisão.',
        'Conhecer sintaxe de classes, métodos, condicionais e loops.'
      ],
      objectives: [
        'Modelar invariantes com classes, records, sealed types e imutabilidade.',
        'Implementar contratos corretos de igualdade, hashing, ordenação e generics.',
        'Escolher collections, streams, exceptions e I/O com base em semântica e custo.',
        'Explicar as decisões com vocabulário da JLS e evidência compilável.'
      ]
    },
    runtime: {
      index: '2/5',
      title: 'Runtime, concorrência e performance',
      subtitle: 'Módulos 9–13 · JMM, Loom, JVM, GC e diagnóstico orientado por evidência.',
      prerequisites: [
        'Dominar os módulos 1–8 ou demonstrar equivalência no diagnóstico.',
        'Entender mutabilidade, collections, exceptions e composição funcional.',
        'Saber executar testes e observar métricas básicas de uma aplicação.'
      ],
      objectives: [
        'Provar correção concorrente usando happens-before, ownership e cancelamento.',
        'Selecionar executors, futures e Virtual Threads conforme o perfil da carga.',
        'Explicar class loading, bytecode, JIT, heap, stacks, safepoints e GC.',
        'Diagnosticar CPU, memória, locks e latência antes de propor tuning.'
      ]
    },
    producao: {
      index: '3/5',
      title: 'Engenharia de produção',
      subtitle: 'Módulos 14–20 · APIs, testes, dados, distribuição, segurança e arquitetura.',
      prerequisites: [
        'Dominar a base da linguagem e reconhecer limites do runtime.',
        'Conhecer HTTP, SQL, Git e o ciclo build–test–deploy.',
        'Conseguir interpretar logs, métricas e um diagrama simples de arquitetura.'
      ],
      objectives: [
        'Desenhar APIs e módulos evolutivos com contratos explícitos.',
        'Construir estratégia de testes proporcional ao risco.',
        'Projetar persistência e fluxos distribuídos com consistência deliberada.',
        'Defender uma arquitetura com segurança, observabilidade, ADRs e critérios de evolução.'
      ]
    },
    fronteira: {
      index: '4/5',
      title: 'Fronteira: a plataforma por dentro',
      subtitle: 'Módulos 21–26 · bytecode, JIT, memória de baixo nível, AOT, FFM e leitura do OpenJDK.',
      prerequisites: [
        'Dominar os módulos 9–13: JMM, concorrência, JVM, GC e diagnóstico com JFR/JMH.',
        'Saber medir antes de concluir — benchmark com warmup, baseline registrada e variância conhecida.',
        'Aceitar que aqui a resposta certa costuma ser "medi e não compensou".'
      ],
      objectives: [
        'Ler e gerar bytecode, e instrumentar uma aplicação em runtime com um agent próprio.',
        'Explicar o que o JIT faz com o seu código e provar o efeito de inlining, escape analysis e desotimização.',
        'Escolher o modo de acesso à memória pelo custo real e reconhecer false sharing e contenção.',
        'Decidir entre JIT, AOT, Native Image e checkpoint por requisito de startup, pico e operação.',
        'Substituir JNI e Unsafe por FFM em fronteiras nativas e dados densos.',
        'Responder uma dúvida de comportamento lendo o código-fonte do OpenJDK, não um blog.'
      ]
    },
    avaliacao: {
      index: '5/5',
      title: 'Avaliação, casos e capstones',
      subtitle: 'Rubricas, estudos de caso e projetos para produzir evidência de nível sênior/expert.',
      prerequisites: [
        'Concluir os exercícios aplicados dos módulos relacionados ao projeto escolhido.',
        'Manter decisões, medições e limitações registradas no repositório.',
        'Aceitar revisão técnica baseada em evidência, não apenas em conclusão funcional.'
      ],
      objectives: [
        'Resolver casos ambíguos e justificar trade-offs sob restrições.',
        'Produzir um portfólio auditável com código, ADRs, testes, sinais e runbooks.',
        'Demonstrar diagnóstico de falhas e evolução arquitetural.',
        'Responder entrevistas por nível com critérios de correção transparentes.'
      ]
    }
  }
});

export const javaModules = [
  {
    number: 1,
    part: 'fundamentos',
    id: 'linguagem-execucao',
    title: 'Fundamentos profundos da linguagem e modelo de execução',
    level: 'Base avançada',
    objective: 'Implementar e explicar um programa Java 21 prevendo conversões, escopo, resolução de overload e ordem de inicialização sem depender de tentativa e erro.',
    prerequisites: ['Sintaxe básica', 'Compilação com javac', 'Leitura de stack traces'],
    problem: 'Código que “parece óbvio” pode compilar para outra sobrecarga, perder precisão, falhar na inicialização ou carregar comportamento implícito. Em produção isso aparece como bugs de borda e APIs ambíguas.',
    concepts: ['Tipos primitivos, wrappers e promoção numérica', 'Escopo, shadowing e definite assignment', 'Passagem por valor e referências', 'Overload, varargs e resolução estática', 'Inicialização de classes, instâncias e blocos'],
    internals: ['O compilador fixa a assinatura do método no call site.', 'Autoboxing cria conversões, não muda o modelo pass-by-value.', 'Campos estáticos são inicializados quando a classe é inicializada, depois de loading, verification e linking.'],
    useWhen: ['Use tipos explícitos em fronteiras públicas.', 'Use `var` quando o tipo permanece evidente e local.', 'Use value objects para impedir combinações inválidas.'],
    avoidWhen: ['Não crie overloads que diferem apenas por boxing/varargs.', 'Não use `double` para dinheiro.', 'Não esconda efeito colateral em inicializadores.'],
    contrast: {
      bad: 'Receber `double amount` e quatro booleanos em um método sobrecarregado.',
      good: 'Receber `Money amount` e uma opção tipada, com validação na construção.'
    },
    tradeoffs: ['Tipos de domínio aumentam arquivos, mas reduzem estados inválidos.', '`var` reduz ruído, mas pode esconder tipos pouco intuitivos.', 'Overload melhora descoberta até introduzir ambiguidade.'],
    production: 'Uma API de cobrança escolhe a sobrecarga errada após um `null` ser introduzido. O exercício exige reproduzir a ambiguidade, redesenhar a assinatura e proteger o contrato com testes de compilação/uso.',
    risks: ['Narrowing silencioso via cast', 'NPE por unboxing', 'Inicialização circular', 'Assinatura pública ambígua'],
    checklist: ['Consigo prever a sobrecarga escolhida?', 'A unidade está no tipo?', 'Há conversão ou boxing implícito?', 'A ordem de inicialização é relevante?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Java passa objetos por referência?', expected: 'Explicar que tudo é passado por valor; o valor pode ser uma referência.' },
      { level: 'Sênior/Expert', question: 'Como remover ambiguidade de uma API com overload, boxing e null?', expected: 'Redesenhar tipos e nomes, discutir compatibilidade e demonstrar call sites problemáticos.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Prever e validar 12 expressões com promoção, overflow e unboxing.', evidence: 'Tabela hipótese × resultado.' },
      { level: 'Aplicado', task: 'Refatorar uma API de preço com primitive obsession.', evidence: 'Value objects e testes.' },
      { level: 'Expert', task: 'Preservar compatibilidade binária ao substituir overloads ambíguos.', evidence: 'ADR e teste com cliente antigo.' }
    ],
    challenge: 'Escrever um analisador de regras de preço que rejeite estados inválidos na construção e documentar as decisões de tipo.',
    book: 'OCP cap. 1–2, 6 e 10 (tipos, métodos, operadores); Effective Java, cap. 2 (criação e destruição de objetos).',
    complements: [official.jls, official.jvms],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/LanguageSemantics.java'
  },
  {
    number: 2,
    part: 'fundamentos',
    id: 'oop-modelagem',
    title: 'OO, imutabilidade, records e sealed hierarchies',
    level: 'Base avançada',
    objective: 'Modelar um domínio com invariantes explícitas e escolher composição, herança, record ou sealed hierarchy conforme a necessidade de evolução.',
    prerequisites: ['Módulo 1', 'Classes e interfaces', 'Encapsulamento'],
    problem: 'Modelos anêmicos espalham regras por services; heranças abertas permitem estados inesperados; objetos mutáveis aumentam acoplamento temporal.',
    concepts: ['Invariantes e encapsulamento', 'Composição sobre herança', 'Records como value carriers', 'Sealed types e enumeração fechada', 'Pattern matching exaustivo'],
    internals: ['Records geram accessors, construtor canônico e contratos baseados nos componentes.', 'Sealed hierarchies restringem implementações no nível da linguagem.', 'Pattern switch final no Java 21 permite decomposição exaustiva com record patterns.'],
    useWhen: ['Record para valores imutáveis e transparentes.', 'Sealed para conjunto fechado controlado.', 'Classe para identidade, ciclo de vida ou representação encapsulada.'],
    avoidWhen: ['Não use record como entidade JPA mutável.', 'Não abra herança sem contrato estável.', 'Não use pattern switch como substituto automático de polimorfismo.'],
    contrast: {
      bad: 'Entidade com setters públicos e validação duplicada em controllers.',
      good: 'Agregado controla transições; comandos são records; resultado é uma sealed hierarchy.'
    },
    tradeoffs: ['Hierarquia fechada facilita exaustividade, mas restringe extensibilidade externa.', 'Imutabilidade simplifica concorrência, mas pode gerar mais alocações.', 'Polimorfismo distribui comportamento; pattern matching centraliza operações.'],
    production: 'Um fluxo de pedidos aceita transição “entregue → pago”. O redesign coloca a máquina de estados no agregado e torna respostas possíveis exaustivas.',
    risks: ['Modelo anêmico', 'Herança por reutilização', 'Estado mutável compartilhado', 'Match não exaustivo em evolução'],
    checklist: ['Onde vive a invariável?', 'O tipo representa valor ou identidade?', 'O conjunto de variantes é realmente fechado?', 'A mudança exige editar quantos pontos?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Quando usar record em vez de classe?', expected: 'Valor transparente, componentes no contrato e imutabilidade rasa.' },
      { level: 'Sênior/Expert', question: 'Sealed hierarchy com pattern matching viola Open/Closed?', expected: 'Depende do eixo de mudança; explicar expressão problem, fronteira e custo de extensão.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Criar Money e Email imutáveis com invariantes.', evidence: 'Testes de construção válida/inválida.' },
      { level: 'Aplicado', task: 'Modelar estados de pagamento com sealed interface.', evidence: 'Switch exaustivo e sem default artificial.' },
      { level: 'Expert', task: 'Comparar modelo polimórfico e data-oriented para pricing.', evidence: 'ADR com eixo de mudança.' }
    ],
    challenge: 'Modelar um checkout que impossibilite estados ilegais e sobreviva à inclusão de um novo meio de pagamento.',
    book: 'OCP cap. 5, 7, 9 e 13–14 (classes, records, sealed); Effective Java, cap. 4 (classes e interfaces).',
    complements: [official.jep440, official.jep441],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/DomainModeling.java'
  },
  {
    number: 3,
    part: 'fundamentos',
    id: 'object-contratos',
    title: 'Contratos de Object, identidade, igualdade e hashing',
    level: 'Pleno → Sênior',
    objective: 'Implementar e testar `equals`, `hashCode`, `toString` e ordenação sem corromper collections, cache ou identidade de entidades.',
    prerequisites: ['Módulo 2', 'Set e Map básicos', 'Imutabilidade'],
    problem: 'Uma igualdade errada torna chaves “invisíveis”, duplica elementos, quebra caches e entra em conflito com proxies ou IDs gerados.',
    concepts: ['Identidade (`==`) versus igualdade', 'Contrato reflexivo, simétrico, transitivo e consistente', 'Vínculo entre `equals` e `hashCode`', 'Ordem natural e `Comparator`', 'Entidades, value objects e proxies'],
    internals: ['HashMap usa hash para localizar buckets e igualdade para resolver chaves.', 'Alterar campos participantes enquanto o objeto é chave torna a entrada inalcançável.', 'Records derivam igualdade e hash de todos os componentes.'],
    useWhen: ['Value objects com todos os componentes relevantes.', 'Chaves de Map imutáveis.', 'Comparator explícito para múltiplas ordenações.'],
    avoidWhen: ['Não baseie hash em campo mutável.', 'Não misture comparação por ID nulo e estado completo sem política.', 'Não faça `compareTo` incompatível com `equals` sem documentar.'],
    contrast: {
      bad: 'Entidade JPA usa ID gerado no hash e entra no HashSet antes de persistir.',
      good: 'Política de identidade estável documentada; value objects usam componentes imutáveis.'
    },
    tradeoffs: ['Business key pode ser estável, mas tem custo e regra de unicidade.', 'ID técnico simplifica igualdade após persistência, mas exige cuidado no estado transient.', 'Ordenação consistente reduz surpresa, mas pode descartar “duplicados” em TreeSet.'],
    production: 'Um Set de permissões contém duplicatas em memória e remove o item errado após atualização. O diagnóstico liga mutabilidade, hash e lifecycle.',
    risks: ['Hash instável', 'Simetria quebrada por herança', 'Dados sensíveis em toString', 'TreeSet descartando valores'],
    checklist: ['Campos de igualdade são imutáveis?', 'Objetos iguais têm o mesmo hash?', 'A política funciona antes/depois da persistência?', '`toString` vaza segredo?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que sobrescrever equals exige hashCode?', expected: 'Collections hash localizam por hash e confirmam por igualdade.' },
      { level: 'Sênior/Expert', question: 'Como definir igualdade para entidades JPA com proxies e ID gerado?', expected: 'Discutir lifecycle, classe/proxy, business key e testes de contratos.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Implementar value object e verificar propriedades do contrato.', evidence: 'Testes parametrizados ou property-style.' },
      { level: 'Aplicado', task: 'Reproduzir chave perdida em HashMap por mutação.', evidence: 'Teste vermelho e correção.' },
      { level: 'Expert', task: 'Definir política de igualdade para entidade persistente.', evidence: 'ADR + testes transient/managed/detached.' }
    ],
    challenge: 'Criar uma suíte reutilizável de testes de contrato para igualdade e ordenação.',
    book: 'OCP cap. 18 (equals, Comparable/Comparator); Effective Java, cap. 3 (métodos comuns a todos os objetos: itens 10–14).',
    complements: [official.api],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/ObjectContracts.java'
  },
  {
    number: 4,
    part: 'fundamentos',
    id: 'generics',
    title: 'Generics, type erasure, variance e APIs type-safe',
    level: 'Pleno → Sênior',
    objective: 'Projetar APIs genéricas sem casts inseguros, justificar PECS e reconhecer limites impostos por type erasure.',
    prerequisites: ['Módulos 1–3', 'Herança', 'Collections'],
    problem: 'Wildcards mal escolhidos inutilizam APIs; raw types adiam falhas para runtime; heap pollution faz um código aparentemente tipado lançar ClassCastException longe da origem.',
    concepts: ['Type parameters e bounds', 'Invariância', '`? extends` e `? super`', 'Métodos genéricos', 'Raw types, reifiable types e heap pollution'],
    internals: ['Erasure remove a maioria dos argumentos de tipo no bytecode e pode inserir casts.', 'Bridge methods preservam polimorfismo após erasure.', 'Arrays são covariantes e reificados; generics são invariantes e majoritariamente apagados.'],
    useWhen: ['Parametrizar comportamento independente do tipo.', 'Usar `extends` para produtores e `super` para consumidores.', 'Preferir tipo concreto no retorno quando ele faz parte do contrato.'],
    avoidWhen: ['Não exponha raw types.', 'Não use wildcard em todo lugar.', 'Não crie arrays genéricos por cast sem confinamento e prova.'],
    contrast: {
      bad: 'Método recebe `List<Object>` para somente ler números.',
      good: 'Método recebe `List<? extends Number>`; transferência usa produtor/consumidor.'
    },
    tradeoffs: ['Wildcards flexibilizam call sites, mas dificultam escrita.', 'Tipo nomeado melhora relações complexas; wildcard é melhor para variância de uso.', 'Erasure mantém compatibilidade, mas limita reflexão e criação de instâncias.'],
    production: 'Um adapter usa raw List e insere DTO em coleção de entidades. A falha surge no mapper. O laboratório confina a fronteira e elimina warnings.',
    risks: ['Unchecked cast', 'Heap pollution', 'API invariável demais', 'Warnings ignorados'],
    checklist: ['Quem produz e quem consome?', 'O cast é comprovável?', 'Há warning unchecked?', 'O tipo captura uma relação real?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que List<Integer> não é List<Number>?', expected: 'Invariância evita inserir Double numa lista de Integer.' },
      { level: 'Sênior/Expert', question: 'Explique erasure, bridge methods e heap pollution num incidente real.', expected: 'Relacionar fonte, bytecode, casts inseridos e fronteira insegura.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Implementar `copy(source, target)` com PECS.', evidence: 'Compilação para três hierarquias.' },
      { level: 'Aplicado', task: 'Eliminar raw types de um registry de handlers.', evidence: 'Zero warnings com `-Xlint:unchecked`.' },
      { level: 'Expert', task: 'Projetar event bus type-safe sem cast espalhado.', evidence: 'Cast confinado, teste e justificativa.' }
    ],
    challenge: 'Criar um pipeline genérico de validação que preserve o tipo do erro e do valor.',
    book: 'OCP cap. 16 (Generics); Effective Java, cap. 5 (Generics: itens 26–33).',
    complements: [official.jls, official.jvms],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/GenericsAndCollections.java'
  },
  {
    number: 5,
    part: 'fundamentos',
    id: 'collections',
    title: 'Collections, complexidade, ordenação e concorrência',
    level: 'Pleno → Sênior',
    objective: 'Escolher e configurar uma collection conforme semântica, padrão de acesso, custo de memória e comportamento concorrente.',
    prerequisites: ['Módulos 3–4', 'Big O', 'Iteradores'],
    problem: 'Escolher por hábito produz scans desnecessários, ordenação instável, contenção e consumo de memória que só aparecem sob carga.',
    concepts: ['List, Set, Queue, Deque e Map', 'Hash, árvores e ordem de iteração', 'Views, iteradores e fail-fast', 'Collections imutáveis e cópias defensivas', 'ConcurrentHashMap e filas concorrentes'],
    internals: ['ArrayList favorece localidade; LinkedList raramente vence em uso real.', 'HashMap depende de distribuição do hash e redimensiona a tabela.', 'ConcurrentHashMap coordena updates sem um lock global e oferece operações atômicas compostas.'],
    useWhen: ['ArrayList como default de sequência.', 'Set quando unicidade é parte do domínio.', 'Map quando lookup por chave é a operação central.', 'Deque para pilha/fila.'],
    avoidWhen: ['Não escolha LinkedList só por inserção O(1).', 'Não use coleção sincronizada e depois faça check-then-act fora do lock.', 'Não retorne coleção mutável interna.'],
    contrast: {
      bad: '`contains` repetido em List dentro de loop e `Collections.synchronizedMap` com operação composta.',
      good: 'Set para membership e `computeIfAbsent` em ConcurrentHashMap.'
    },
    tradeoffs: ['Ordem custa CPU/memória.', 'Imutabilidade reduz risco, mas exige cópias ou estruturas persistentes.', 'Estruturas concorrentes ganham throughput, mas não tornam workflows inteiros atômicos.'],
    production: 'Catálogo de milhões de itens usa List para lookup e degrada p99. A correção mede cardinalidade, custo, memória e padrão de acesso.',
    risks: ['Complexidade escondida', 'Hash ruim', 'Mutation through view', 'Operação composta não atômica'],
    checklist: ['Qual é a operação dominante?', 'Preciso de ordem ou unicidade?', 'Qual a cardinalidade?', 'Quem pode mutar?', 'Existe concorrência?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'ArrayList ou LinkedList?', expected: 'Responder pelo padrão de acesso e localidade, não só por Big O isolado.' },
      { level: 'Sênior/Expert', question: 'Como escolher estrutura para cache concorrente?', expected: 'Atomicidade, eviction, contenção, memória e biblioteca especializada.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Comparar List, Set e Map em buscas e duplicatas.', evidence: 'Teste funcional e complexidade.' },
      { level: 'Aplicado', task: 'Corrigir race em contador por chave.', evidence: 'Teste concorrente repetível.' },
      { level: 'Expert', task: 'Modelar índice in-memory com limite de memória.', evidence: 'Benchmark, estimativa e decisão.' }
    ],
    challenge: 'Implementar um pequeno LRU correto e depois justificar por que uma biblioteca pronta é preferível em produção.',
    book: 'OCP cap. 18 e 20; Effective Java, cap. 9 (uso geral); Java Concurrency in Practice, cap. 5 (blocos concorrentes).',
    complements: [official.api],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/GenericsAndCollections.java'
  },
  {
    number: 6,
    part: 'fundamentos',
    id: 'lambdas-streams',
    title: 'Lambdas, Streams e collectors',
    level: 'Pleno → Sênior',
    objective: 'Construir pipelines legíveis, livres de efeitos colaterais e adequados ao volume, escolhendo loop, stream, collector ou paralelismo com critério.',
    prerequisites: ['Módulos 4–5', 'Interfaces funcionais', 'Imutabilidade'],
    problem: 'Streams podem esconder N+1, múltiplas travessias, alocações, side effects e paralelismo inseguro sob uma sintaxe elegante.',
    concepts: ['Funções, closures e effectively final', 'Lazy evaluation e short-circuit', 'Map/filter/reduce', 'Collectors e composição', 'Streams paralelos e spliterator'],
    internals: ['Operações intermediárias formam um pipeline lazy.', 'Terminal operation dirige a travessia.', 'Parallel stream usa por padrão o common ForkJoinPool e exige operações associativas/não interferentes.'],
    useWhen: ['Transformação declarativa com pipeline curto.', 'Collector para agregação explícita.', 'Loop quando controle de fluxo ou performance fica mais claro.'],
    avoidWhen: ['Não faça I/O oculto em map.', 'Não mutile acumulador externo.', 'Não use parallelStream em request path sem medição e isolamento.'],
    contrast: {
      bad: 'Stream altera lista externa e consulta banco em cada elemento.',
      good: 'Dados são buscados em lote; pipeline puro agrega com collector.'
    },
    tradeoffs: ['Stream favorece composição; loop favorece controle.', 'Collector customizado concentra regra, mas aumenta complexidade.', 'Paralelismo pode aumentar throughput e piorar latência/contensão.'],
    production: 'Relatório dispara uma query por item dentro de map. O caso separa I/O, cria batch e mede alocação do pipeline.',
    risks: ['Side effect', 'N+1 invisível', 'Redução não associativa', 'Common pool saturado'],
    checklist: ['O pipeline é puro?', 'Quantas travessias?', 'Existe I/O?', 'A redução é associativa?', 'Loop seria mais claro?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que operações intermediárias são lazy?', expected: 'Pipeline é executado pela operação terminal, permitindo fusão e short-circuit.' },
      { level: 'Sênior/Expert', question: 'Quando parallelStream é aceitável num backend?', expected: 'CPU-bound, dados divisíveis, operação associativa, pool/ambiente controlado e benchmark.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Transformar pedidos em resumo por cliente.', evidence: 'Pipeline e testes de borda.' },
      { level: 'Aplicado', task: 'Criar collector de estatísticas de pagamento.', evidence: 'Supplier/accumulator/combiner corretos.' },
      { level: 'Expert', task: 'Comparar loop, stream e parallel stream.', evidence: 'JMH e análise sem conclusão por cronômetro ingênuo.' }
    ],
    challenge: 'Otimizar um pipeline real apenas depois de capturar baseline e perfil de alocação.',
    book: 'OCP cap. 14, 17 e 21; Modern Java in Action, partes 1–2 (lambdas, streams e collectors).',
    complements: [official.api],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/StreamsAndErrors.java'
  },
  {
    number: 7,
    part: 'fundamentos',
    id: 'exceptions-io',
    title: 'Exceptions, recursos, I/O e NIO.2',
    level: 'Pleno → Sênior',
    objective: 'Definir fronteiras de falha e implementar I/O seguro com propagação, tradução, cleanup e observabilidade coerentes.',
    prerequisites: ['Módulos 1–6', 'Filesystem e rede básicos', 'Testes'],
    problem: 'Capturar `Exception`, perder causa, repetir operação não idempotente ou ler arquivo inteiro em memória transforma falha local em incidente.',
    concepts: ['Checked versus unchecked por recuperabilidade', 'Exception translation e causa', 'Try-with-resources e suppressed exceptions', 'Path/Files, streams e channels', 'Charsets, atomic move e serialização segura'],
    internals: ['Try-with-resources fecha em ordem reversa e preserva falhas de close como suppressed.', 'NIO.2 modela paths e operações do filesystem sem assumir representação textual.', 'Stack trace é capturado na criação da Throwable e tem custo.'],
    useWhen: ['Traduza exceção na fronteira que adiciona contexto.', 'Faça streaming de dados grandes.', 'Use operação atômica quando o filesystem suportar.'],
    avoidWhen: ['Não use exception como fluxo comum.', 'Não faça retry genérico.', 'Não serialize objetos Java não confiáveis.', 'Não descarte a causa.'],
    contrast: {
      bad: '`catch (Exception) { return null; }` ao importar arquivo.',
      good: 'Erro de domínio inclui linha/campo, preserva causa e deixa política de retry na borda.'
    },
    tradeoffs: ['Checked força tratamento, mas pode poluir camadas.', 'Buffer maior reduz syscalls e aumenta memória.', 'Fail-fast reduz dano; tolerância parcial aumenta disponibilidade com complexidade.'],
    production: 'Importação de 8 GB causa OOM e arquivo parcial. A solução faz streaming, valida checkpoints e publica por rename atômico.',
    risks: ['Causa perdida', 'Retry de efeito não idempotente', 'Path traversal', 'OOM por leitura integral'],
    checklist: ['Quem pode recuperar?', 'A causa foi preservada?', 'O recurso fecha em falha?', 'A entrada é confiável?', 'A operação é idempotente?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que try-with-resources resolve?', expected: 'Fechamento determinístico, ordem reversa e suppressed exceptions.' },
      { level: 'Sênior/Expert', question: 'Onde traduzir exceções entre infraestrutura e domínio?', expected: 'Na fronteira sem perder causa; preservar semântica e observabilidade.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Ler CSV em streaming com charset explícito.', evidence: 'Teste com arquivo grande e linha inválida.' },
      { level: 'Aplicado', task: 'Implementar escrita temporária + move atômico.', evidence: 'Teste de falha antes da publicação.' },
      { level: 'Expert', task: 'Projetar política de erro/retry para importação idempotente.', evidence: 'State machine e runbook.' }
    ],
    challenge: 'Construir importador resiliente com checkpoint, backpressure e relatório de erros sem carregar tudo em memória.',
    book: 'OCP cap. 15 e 19; Effective Java, cap. 10 (exceções: itens 69–77).',
    complements: [official.api, official.secure],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/StreamsAndErrors.java'
  },
  {
    number: 8,
    part: 'fundamentos',
    id: 'modulos-tempo-localizacao',
    title: 'Módulos, Date/Time e internacionalização',
    level: 'Pleno',
    objective: 'Criar fronteiras modulares e manipular tempo/localidade sem depender de timezone, locale ou reflexão implícitos.',
    prerequisites: ['Módulos 1–7', 'Packages', 'Build básico'],
    problem: 'Dependências acidentais, timezone default e strings localizadas no domínio criam sistemas que funcionam apenas na máquina do autor.',
    concepts: ['JPMS: requires/exports/opens', 'Classpath versus module path', 'Instant, LocalDateTime, ZonedDateTime e Duration', 'Clock injetável', 'Locale, ResourceBundle e formatação'],
    internals: ['JPMS verifica readability e encapsula packages.', '`opens` concede reflexão sem exportar API normal.', 'LocalDateTime não representa um instante sem zone/offset.'],
    useWhen: ['Instant para eventos globais.', 'LocalDate para calendário de negócio.', 'Clock para testes.', 'Módulos para fronteiras que justificam encapsulamento forte.'],
    avoidWhen: ['Não persista “hora global” como LocalDateTime.', 'Não use timezone/locale default em regra crítica.', 'Não modularize mecanicamente cada package.'],
    contrast: {
      bad: '`LocalDateTime.now()` espalhado e module-info abrindo tudo.',
      good: 'Clock injetado, Instant na infraestrutura e exports/opens mínimos.'
    },
    tradeoffs: ['JPMS melhora encapsulamento, mas adiciona custo a frameworks reflexivos.', 'UTC simplifica transporte, mas calendário de negócio exige zone.', 'Texto localizado na borda preserva domínio estável.'],
    production: 'Agendamento duplica execução na mudança de horário de verão. O caso exige explicitar zona, política para gaps/overlaps e testes com Clock.',
    risks: ['Timezone implícito', 'DST', 'opens excessivo', 'Locale usado como regra de domínio'],
    checklist: ['É instante ou horário civil?', 'A zona está explícita?', 'O relógio é testável?', 'O módulo exporta só API?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Instant e LocalDateTime representam a mesma coisa?', expected: 'Não; LocalDateTime não tem zona/offset.' },
      { level: 'Sênior/Expert', question: 'Quando JPMS vale o custo num backend Spring?', expected: 'Encapsulamento e distribuição versus reflexão, build e maturidade da equipe.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Testar expiração com Clock fixo.', evidence: 'Zero sleep.' },
      { level: 'Aplicado', task: 'Converter agenda local em instantes.', evidence: 'Casos de DST documentados.' },
      { level: 'Expert', task: 'Modularizar um core sem expor implementações.', evidence: 'jdeps/javac e ADR.' }
    ],
    challenge: 'Projetar scheduler multi-timezone e justificar representação, persistência e reprocessamento.',
    book: 'OCP cap. 22–24; The Well-Grounded Java Developer, parte sobre o sistema de módulos (JPMS).',
    complements: [official.api, official.jls],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/TimeAndModules.java'
  },
  {
    number: 9,
    part: 'runtime',
    id: 'jmm',
    title: 'Java Memory Model e concorrência correta',
    level: 'Sênior',
    objective: 'Demonstrar ausência de data races e visibilidade correta por happens-before, confinamento, imutabilidade ou sincronização.',
    prerequisites: ['Módulos 2–5', 'Threads básicas', 'Testes repetíveis'],
    problem: 'Código pode parecer correto em testes e falhar sob otimização, outro core ou outra carga porque atomicidade, visibilidade e ordenação são propriedades distintas.',
    concepts: ['Data race e race condition', 'Happens-before', 'Monitor, volatile e atomics', 'Safe publication e final fields', 'Ownership, confinement e immutability'],
    internals: ['JMM permite reordenações preservando semântica single-thread.', 'Unlock happens-before lock subsequente no mesmo monitor.', 'Write volatile happens-before read subsequente; volatile não torna sequência composta atômica.'],
    useWhen: ['Imutabilidade e message passing primeiro.', 'Lock para invariantes compostas.', 'Atomic para operação simples bem definida.', 'Volatile para publicação/flags.'],
    avoidWhen: ['Não use sleep como sincronização.', 'Não faça check-then-act com volatile.', 'Não publique `this` durante construção.', 'Não assuma que teste sem falha prova correção.'],
    contrast: {
      bad: '`volatile int count; count++` e lista mutável publicada sem lock.',
      good: 'AtomicInteger para contador ou lock que protege toda a invariável; estado imutável publicado com segurança.'
    },
    tradeoffs: ['Lock simplifica invariantes, mas pode causar contenção.', 'Atomics escalam em operações pequenas e complicam composições.', 'Copy-on-write favorece leitura e penaliza escrita.'],
    production: 'Cache publica objeto parcialmente inicializado e retorna preço zero em raras requisições. O diagnóstico identifica unsafe publication.',
    risks: ['Lost update', 'Visibility bug', 'Deadlock', 'Livelock', 'False confidence por teste'],
    checklist: ['Quem possui o estado?', 'Qual aresta happens-before existe?', 'A invariável envolve quantos campos?', 'Cancelamento/interrupção é preservado?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'volatile torna count++ thread-safe?', expected: 'Não; leitura-modificação-escrita continua não atômica.' },
      { level: 'Sênior/Expert', question: 'Prove a publicação segura de um objeto.', expected: 'Construção, final fields e aresta HB via lock, volatile, static init ou estrutura concorrente.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Reproduzir lost update e corrigir de duas formas.', evidence: 'Teste de estresse e explicação.' },
      { level: 'Aplicado', task: 'Proteger invariável saldo+versão.', evidence: 'Lock com escopo mínimo e teste.' },
      { level: 'Expert', task: 'Revisar implementação double-checked locking.', evidence: 'Prova JMM e alternativa simples.' }
    ],
    challenge: 'Projetar componente concorrente com invariantes documentadas e teste de estresse sem sleeps como oráculo.',
    book: 'Java Concurrency in Practice, cap. 2–3 e 16 (thread safety, publicação e o JMM); OCP cap. 20 como base.',
    complements: [official.jls, official.jvms],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/ConcurrencyModels.java'
  },
  {
    number: 10,
    part: 'runtime',
    id: 'concorrencia-moderna',
    title: 'Executors, CompletableFuture, Virtual Threads e concorrência estruturada',
    level: 'Sênior → Expert',
    objective: 'Selecionar o modelo de concorrência pelo perfil da carga e implementar deadline, cancelamento, limites e propagação de falhas.',
    prerequisites: ['Módulo 9', 'I/O bloqueante', 'Medição de latência'],
    problem: 'Mais threads não tornam CPU-bound mais rápido; futures não estruturados vazam trabalho; Virtual Threads sem limites apenas deslocam o gargalo para banco ou serviço remoto.',
    concepts: ['Executor ownership e lifecycle', 'CompletableFuture e composição', 'Virtual Threads final no Java 21', 'Structured Concurrency preview no Java 21 e sexto preview no JDK 26', 'Scoped Values preview no Java 21; final no 25'],
    internals: ['Virtual thread é montada em carrier enquanto executa e desmontada em bloqueios suportados.', 'Ela melhora escalabilidade de espera, não velocidade de CPU.', 'StructuredTaskScope vincula lifecycle, falha e cancelamento ao escopo léxico.'],
    useWhen: ['Virtual Threads para muitas tarefas independentes que esperam I/O bloqueante.', 'Pool limitado para CPU-bound.', 'Semaphore/rate limit para proteger dependências.', 'Deadline comum em fan-out.'],
    avoidWhen: ['Não use Virtual Threads para loop CPU-bound esperando aceleração.', 'Não faça pool de Virtual Threads.', 'Não ignore pinning/native blocking na baseline 21.', 'Não adote preview sem política de upgrade.'],
    contrast: {
      bad: 'Criar 100 mil chamadas JDBC sem limite porque threads são baratas.',
      good: 'Uma virtual thread por tarefa, mas concorrência limitada pela capacidade do pool de conexões e deadline propagado.'
    },
    tradeoffs: ['Código síncrono fica simples; dependências continuam finitas.', 'CompletableFuture é estável, mas composição/cancelamento ficam complexos.', 'Preview oferece estrutura melhor com custo de compatibilidade.'],
    production: 'Endpoint faz fan-out para três serviços. Um timeout deixa subtarefas executando e esgota conexões. O redesign aplica deadline, cancelamento e bulkhead.',
    risks: ['Pool starvation', 'Thread leak', 'Sem limite de downstream', 'Timeout sem cancelamento', 'Uso acidental de preview'],
    checklist: ['Carga é CPU ou espera?', 'Quem fecha o executor?', 'Deadline chega às subtarefas?', 'Dependência tem limite?', 'Como observar VT/pinning?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Virtual Thread torna a tarefa mais rápida?', expected: 'Não; melhora throughput de espera sem criar mais CPU.' },
      { level: 'Sênior/Expert', question: 'Quando NÃO usar Virtual Threads?', expected: 'CPU-bound, dependência não escalável, código que exige pool/ThreadLocal pesado ou bloqueio incompatível; medir pinning.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Comparar 500 tarefas de espera com pool fixo e Virtual Threads.', evidence: 'Tempo e threads observadas.' },
      { level: 'Aplicado', task: 'Implementar fan-out com deadline e cancelamento.', evidence: 'Teste de timeout sem trabalho órfão.' },
      { level: 'Expert', task: 'Avaliar adoção de Structured Concurrency.', evidence: 'Spike isolado, status por JDK e plano de migração.' }
    ],
    challenge: 'Projetar agregador resiliente que preserve contexto, cancele subtarefas e limite cada downstream.',
    book: 'Java Concurrency in Practice, cap. 6–8 (execução de tarefas, cancelamento, pools); The Well-Grounded Java Developer (Virtual Threads e concorrência moderna).',
    complements: [official.jep444, official.jep453, official.jep525, official.jep446],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/ConcurrencyModels.java'
  },
  {
    number: 11,
    part: 'runtime',
    id: 'jvm-jit',
    title: 'JVM: class loading, bytecode, memória e JIT',
    level: 'Sênior',
    objective: 'Explicar o caminho fonte → bytecode → execução e usar esse modelo para investigar linkage, warm-up, reflexão e otimizações.',
    prerequisites: ['Módulos 1–10', 'Linha de comando JDK', 'Noções de processo/SO'],
    problem: 'Sem modelo da JVM, ClassNotFound, NoSuchMethodError, warm-up e regressões de reflexão parecem aleatórios e recebem correções supersticiosas.',
    concepts: ['Class loaders e delegation', 'Loading, linking e initialization', 'Bytecode e operand stack', 'Heap, stacks, metaspace e code cache', 'Interpreter, tiered compilation, profiling e deoptimization'],
    internals: ['Identidade de classe inclui nome e class loader.', 'Linkage errors podem revelar incompatibilidade binária entre compile/runtime.', 'JIT usa perfil observado; benchmark curto mede aquecimento e não steady state.'],
    useWhen: ['Use `javap` para verificar bytecode e assinaturas.', 'Use class loading logs para conflito.', 'Use JFR/JIT logs quando a hipótese exigir.'],
    avoidWhen: ['Não atribua tudo ao GC.', 'Não force flags sem baseline.', 'Não dependa de ordem de carregamento não documentada.'],
    contrast: {
      bad: 'Reiniciar serviço e aumentar heap diante de NoSuchMethodError.',
      good: 'Comparar classpath/runtime artifact, class loader e assinatura binária.'
    },
    tradeoffs: ['Reflexão/proxies aceleram desenvolvimento e dificultam análise/AOT.', 'Warm-up melhora throughput e afeta cold start.', 'Class loader isolation viabiliza plugins e aumenta complexidade.'],
    production: 'Deploy compila, mas falha com NoSuchMethodError por jar divergente. O runbook coleta versão, árvore de dependências e classe efetivamente carregada.',
    risks: ['Classpath hell', 'Metaspace leak', 'Code cache pressure', 'Benchmark durante warm-up'],
    checklist: ['Qual classe foi carregada e por quem?', 'Compile e runtime usam a mesma API?', 'A medição separa cold/steady state?', 'Há evidência do JIT?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Heap e stack guardam o quê?', expected: 'Objetos no heap; frames/variáveis/operand stack por thread, com nuances de otimização.' },
      { level: 'Sênior/Expert', question: 'Como um NoSuchMethodError ocorre após compilação bem-sucedida?', expected: 'Incompatibilidade binária ou classpath/class loader diferente no runtime.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Inspecionar bytecode de record e lambda com javap.', evidence: 'Anotações sobre métodos/indy.' },
      { level: 'Aplicado', task: 'Reproduzir linkage error com duas versões de biblioteca.', evidence: 'Runbook de diagnóstico.' },
      { level: 'Expert', task: 'Analisar warm-up e compilação em benchmark.', evidence: 'JFR/log e conclusão limitada.' }
    ],
    challenge: 'Explicar uma regressão de startup separando class loading, framework initialization e JIT.',
    book: 'The Well-Grounded Java Developer (class loading e bytecode); Optimizing Java, cap. 2–4 (JVM, interpretador e JIT).',
    complements: [official.jvms, official.jfr, official.jcmd],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/BytecodeAndAgents.java'
  },
  {
    number: 12,
    part: 'runtime',
    id: 'garbage-collection',
    title: 'Garbage Collection e tuning orientado por métricas',
    level: 'Sênior → Expert',
    objective: 'Relacionar padrão de alocação, live set, pausas e throughput para selecionar/ajustar GC sem mascarar vazamentos.',
    prerequisites: ['Módulo 11', 'Métricas e percentis', 'Logs de processo'],
    problem: 'Aumentar heap ou trocar collector pode adiar OOM, ampliar pausas e esconder retenção. O objetivo é distinguir allocation rate, live set, leak e pressão nativa.',
    concepts: ['Roots, reachability e generations', 'Young/old collections', 'Safepoints, pauses e concurrent phases', 'G1, ZGC e Shenandoah', 'Heap sizing, allocation rate e live set'],
    internals: ['Collectors usam barreiras para manter invariantes durante coleta concorrente/incremental.', 'G1 divide heap em regions e busca metas de pausa.', 'ZGC e Shenandoah priorizam pausas baixas com trabalho concorrente e custos próprios.'],
    useWhen: ['Comece por requisito: throughput, p99, footprint e headroom.', 'Colete GC logs/JFR.', 'Corrija retenção antes de tunar sintomas.'],
    avoidWhen: ['Não selecione collector por moda.', 'Não fixe heap sem observar limite do container.', 'Não chame System.gc como tuning.', 'Não conclua leak por heap serrilhado.'],
    contrast: {
      bad: 'Dobrar Xmx ao ver Full GC.',
      good: 'Medir live set pós-GC, allocation rate, pausa, CPU e limite de memória; testar uma hipótese por vez.'
    },
    tradeoffs: ['Heap maior reduz frequência e pode aumentar footprint/pausa.', 'Low-pause collectors consomem recursos concorrentes.', 'Throughput e latência têm objetivos diferentes.'],
    production: 'Serviço em container sofre OOMKill sem Java heap OOM. A investigação separa heap, metaspace, direct buffers, stacks e limite do cgroup.',
    risks: ['Retenção tratada como falta de heap', 'Overhead do collector ignorado', 'Container headroom insuficiente', 'Mudanças simultâneas'],
    checklist: ['Qual é o live set?', 'Quanto aloca por segundo?', 'Qual SLO de pausa?', 'Há memória não heap?', 'A hipótese foi comparada em carga representativa?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Objeto sem referência é coletado imediatamente?', expected: 'Não há garantia de momento; reachability torna elegível.' },
      { level: 'Sênior/Expert', question: 'G1 ou ZGC para este serviço?', expected: 'Pedir heap, SLO, CPU, allocation/live set, versão e carga antes de decidir.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Gerar e ler GC log de uma carga alocadora.', evidence: 'Timeline de ciclos e pausas.' },
      { level: 'Aplicado', task: 'Distinguir leak de allocation pressure.', evidence: 'JFR/heap após GC e hipótese.' },
      { level: 'Expert', task: 'Comparar collectors sob um SLO.', evidence: 'Protocolo reprodutível e decisão.' }
    ],
    challenge: 'Produzir recomendação de GC com budget de memória/CPU, p99 e plano de rollback.',
    book: 'Optimizing Java, cap. 6–8 (modelo de memória, coletores de GC e tuning orientado por métricas).',
    complements: [official.gc, official.jfr, official.jcmd],
    exampleFile: '../../examples/java21-senior/README.md'
  },
  {
    number: 13,
    part: 'runtime',
    id: 'performance-diagnostico',
    title: 'Performance e diagnóstico com JMH, JFR/JMC, jcmd e dumps',
    level: 'Sênior → Expert',
    objective: 'Conduzir investigação hipótese → sinal → medição → mudança → regressão, distinguindo CPU, espera, lock, alocação e I/O.',
    prerequisites: ['Módulos 9–12', 'Estatística básica', 'SLOs'],
    problem: 'Cronômetros ad hoc, médias e profiling sem hipótese produzem otimizações falsas. Performance é um sistema de restrições, não uma linha mais rápida.',
    concepts: ['Latency, throughput, percentis e coordinated omission', 'JMH: forks, warmup e dead-code elimination', 'JFR/JMC e eventos', '`jcmd`, thread/heap dumps', 'Flame graphs, async-profiler e limites de observação'],
    internals: ['JMH isola forks e oferece blackholes para evitar otimização inválida.', 'JFR registra eventos da aplicação, JVM e SO com configuração de overhead.', 'Thread dump mostra stacks/locks num instante; heap dump é caro e contém dados sensíveis.'],
    useWhen: ['Benchmark micro para decisão local isolada.', 'Load test para comportamento sistêmico.', 'JFR contínuo low-overhead para retrospectiva.'],
    avoidWhen: ['Não extrapole microbenchmark para sistema.', 'Não colete heap dump sem segurança/capacidade.', 'Não otimize sem budget e baseline.', 'Não use média para cauda.'],
    contrast: {
      bad: 'Comparar duas implementações com `System.nanoTime()` uma vez.',
      good: 'JMH com warmup/forks e análise de profiler, depois validação end-to-end.'
    },
    tradeoffs: ['Mais instrumentação aumenta visibilidade e algum custo.', 'Sampling é barato e pode perder eventos raros.', 'Instrumentação detalhada aumenta precisão e perturba a carga.'],
    production: 'p99 cresce sem mudança de média. JFR revela contenção e safepoints; o caso correlaciona com pool de conexões e não culpa CPU.',
    risks: ['Benchmark otimizado embora resultado não seja usado', 'Ambiente ruidoso', 'Dump com PII', 'Causalidade inferida de correlação'],
    checklist: ['Qual SLO regrediu?', 'A carga é representativa?', 'A ferramenta mede a hipótese?', 'Há baseline/controle?', 'Como prevenir regressão?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Thread dump e heap dump respondem a mesma pergunta?', expected: 'Não; execução/locks versus objetos/retenção.' },
      { level: 'Sênior/Expert', question: 'Como provar que uma otimização melhora produção?', expected: 'SLO, baseline, protocolo, variância, sinais, canary e guardrail de regressão.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Capturar JFR e identificar hot methods/allocations.', evidence: 'Relatório com limitações.' },
      { level: 'Aplicado', task: 'Diagnosticar deadlock por thread dump.', evidence: 'Causa, correção e teste.' },
      { level: 'Expert', task: 'Projetar benchmark e load test complementares.', evidence: 'Matriz de hipótese e decisão.' }
    ],
    challenge: 'Investigar uma regressão plantada sem alterar flags até apresentar evidência causal.',
    book: 'Optimizing Java, cap. 5 e 9–12 (metodologia de performance, JMH, profiling e diagnóstico).',
    complements: [official.jfr, official.jcmd],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/JitAndEscapeAnalysis.java'
  },
  {
    number: 14,
    part: 'producao',
    id: 'api-design',
    title: 'Design de APIs, compatibilidade e modularidade',
    level: 'Sênior',
    objective: 'Projetar contrato Java/HTTP evolutivo com invariantes, erros, idempotência e compatibilidade explícitos.',
    prerequisites: ['Módulos 1–13', 'HTTP', 'Versionamento semântico'],
    problem: 'API não é só assinatura: nullability, erros, tempo, retries e compatibilidade moldam todos os consumidores.',
    concepts: ['API mínima e coesa', 'DTO versus domínio', 'Compatibilidade source/binary/behavioral', 'Idempotency key e optimistic concurrency', 'Problem Details, paginação e versionamento'],
    internals: ['Mudança de assinatura pode compilar servidor e quebrar cliente binário.', 'Defaults e campos opcionais mudam semântica mesmo sem quebrar schema.', 'ETag/If-Match expressam concorrência otimista no protocolo.'],
    useWhen: ['Tipos fortes no core; DTOs na borda.', 'Erro estável e machine-readable.', 'Versionar quando há ruptura sem migração compatível.'],
    avoidWhen: ['Não exponha entidade JPA.', 'Não devolva null/exception genérica.', 'Não versionar toda mudança.', 'Não transforme POST não idempotente em retry automático.'],
    contrast: {
      bad: 'Controller retorna entidade, 200 para erro e timestamp local.',
      good: 'Contrato explícito, Problem Details, Instant, idempotência e schema versionado.'
    },
    tradeoffs: ['Compatibilidade adiciona adapters e deprecação.', 'Contrato genérico reduz endpoints e perde semântica.', 'Versionamento preserva clientes e aumenta matriz operacional.'],
    production: 'Cliente móvel antigo quebra após campo virar obrigatório. O plano define compatibilidade, rollout e telemetria de versões.',
    risks: ['Breaking change silenciosa', 'Mass assignment', 'Erro instável', 'Retry duplicando efeito'],
    checklist: ['Contrato está separado do domínio?', 'Mudança é compatível?', 'Erro é acionável?', 'Idempotência existe onde precisa?', 'Deprecação é observável?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que não expor entidade JPA na API?', expected: 'Acoplamento, lazy loading, segurança, ciclo de vida e evolução.' },
      { level: 'Sênior/Expert', question: 'Como evoluir um campo obrigatório sem quebrar clientes?', expected: 'Expand/contract, default temporário, telemetria, comunicação e remoção.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Modelar erros com Problem Details.', evidence: 'Contrato e testes.' },
      { level: 'Aplicado', task: 'Adicionar idempotência a criação de pagamento.', evidence: 'Teste de repetição/concorrência.' },
      { level: 'Expert', task: 'Planejar evolução incompatível.', evidence: 'ADR, rollout e rollback.' }
    ],
    challenge: 'Publicar uma API que suporte cliente antigo durante migração e provar ausência de efeito duplicado.',
    book: 'Effective Java, cap. 4 e 8 (design de classes e de métodos, compatibilidade); apoio do JPMS em The Well-Grounded Java Developer.',
    complements: [official.jls, official.api],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/DomainModeling.java'
  },
  {
    number: 15,
    part: 'producao',
    id: 'padroes-solid',
    title: 'Padrões de projeto, SOLID e anti-patterns',
    level: 'Sênior',
    objective: 'Aplicar padrão somente quando a força de mudança o justificar e reconhecer complexidade acidental criada por abstrações prematuras.',
    prerequisites: ['Módulos 2, 4 e 14', 'Testes', 'Modelagem de domínio'],
    problem: 'Padrões usados como checklist geram fábricas de fábricas, interfaces de uma implementação e fluxo impossível de seguir.',
    concepts: ['SOLID como heurísticas', 'Strategy, Factory e Decorator', 'Adapter, Facade e Anti-corruption Layer', 'Observer/eventos e State', 'Template Method versus composição'],
    internals: ['Padrões reorganizam dependências e eixos de mudança; não removem complexidade.', 'Dispatch dinâmico, lambdas e sealed types oferecem alternativas com custos distintos.', 'DI container não corrige fronteiras ruins.'],
    useWhen: ['Strategy para política substituível.', 'Adapter para isolar contrato externo.', 'Decorator para responsabilidade ortogonal composável.'],
    avoidWhen: ['Não crie interface especulativa.', 'Não use singleton como estado global.', 'Não aplique pattern por nome sem problema recorrente.'],
    contrast: {
      bad: 'Cinco camadas pass-through e interface para cada classe.',
      good: 'Uma abstração no ponto real de volatilidade, com dependência apontando para o domínio.'
    },
    tradeoffs: ['Abstração reduz acoplamento específico e aumenta indireção.', 'Eventos desacoplam tempo e ampliam dificuldade de rastrear fluxo.', 'Herança reutiliza estrutura e fixa acoplamento.'],
    production: 'Integração com três gateways acumula `if provider`. Adapter + Strategy isolam protocolos sem abstrair o domínio inteiro.',
    risks: ['Pattern fever', 'God service', 'Service locator', 'Camadas sem decisão', 'Evento para chamada local simples'],
    checklist: ['Qual mudança recorrente motiva a abstração?', 'Quantas implementações reais existem?', 'O fluxo continua observável?', 'Remover a abstração seria simples?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Dê um uso real de Strategy.', expected: 'Política intercambiável com contrato coeso, não apenas enum+if renomeado.' },
      { level: 'Sênior/Expert', question: 'Quando SOLID piora o design?', expected: 'Aplicação dogmática, eixos especulativos, indireção e custo cognitivo sem mudança real.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Substituir condicional de gateway por Strategy.', evidence: 'Teste por contrato.' },
      { level: 'Aplicado', task: 'Isolar SDK externo com Adapter.', evidence: 'Domínio sem dependência do SDK.' },
      { level: 'Expert', task: 'Remover abstrações especulativas de um módulo.', evidence: 'Diff e análise de complexidade.' }
    ],
    challenge: 'Refatorar um “clean architecture” cerimonial preservando apenas fronteiras que protegem decisões.',
    book: 'Design Patterns (GoF), catálogo; Refactoring (2ª ed), code smells e refatorações; Clean Code, classes e SOLID.',
    complements: [official.jls, official.api],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/DomainModeling.java'
  },
  {
    number: 16,
    part: 'producao',
    id: 'testes',
    title: 'Estratégia de testes e testabilidade',
    level: 'Sênior',
    objective: 'Construir portfólio de testes por risco que detecte regressões sem acoplar comportamento a detalhes internos.',
    prerequisites: ['Módulos 1–15', 'JUnit 5 básico', 'Build e CI'],
    problem: 'Cobertura alta pode esconder assertions fracas; mocks demais testam implementação; E2E demais tornam feedback lento e flakey.',
    concepts: ['Pirâmide/troféu por risco', 'State versus interaction testing', 'Fakes, stubs, mocks e spies', 'Integration e Testcontainers', 'Contract, property-based, mutation e concurrency testing'],
    internals: ['Test double substitui colaboração; não substitui compreensão do contrato.', 'Teste determinístico controla relógio, aleatoriedade, I/O e scheduling.', 'Mutation testing mede capacidade de detectar mudanças, não quantidade de linhas executadas.'],
    useWhen: ['Unidade para regra pura.', 'Integração para infraestrutura real.', 'Contrato para fronteiras entre serviços.', 'E2E para jornadas críticas mínimas.'],
    avoidWhen: ['Não mocke value object.', 'Não use sleep.', 'Não teste método privado.', 'Não trate 100% coverage como objetivo.'],
    contrast: {
      bad: 'Teste verifica sequência de cinco chamadas internas.',
      good: 'Teste verifica estado/resultado; interações apenas onde são o contrato, como publicação única.'
    },
    tradeoffs: ['Mais realismo custa tempo e isolamento.', 'Mock rápido pode divergir do provedor.', 'Property tests exploram espaço maior e exigem bons invariantes.'],
    production: 'Retry duplica publicação, mas mocks sempre retornam sucesso. Um teste de integração injeta falha e verifica idempotência.',
    risks: ['Teste tautológico', 'Fixture opaca', 'Flakiness', 'Banco em memória divergente', 'Assertion ausente'],
    checklist: ['Qual risco este teste cobre?', 'Falha pelo motivo certo?', 'Controla tempo/aleatoriedade?', 'Usa a fronteira mais barata que captura o bug?', 'Roda no CI?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Stub e mock são iguais?', expected: 'Stub fornece respostas; mock também verifica interação esperada.' },
      { level: 'Sênior/Expert', question: 'Como testar concorrência sem sleep?', expected: 'Barriers/latches, invariantes, stress tools, timeout e desenho controlável.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Testar regra com Clock injetado.', evidence: 'Teste determinístico.' },
      { level: 'Aplicado', task: 'Testar repository em PostgreSQL real.', evidence: 'Testcontainer e migração.' },
      { level: 'Expert', task: 'Criar teste de contrato consumidor/provedor.', evidence: 'Pipeline bloqueando incompatibilidade.' }
    ],
    challenge: 'Desenhar estratégia completa para pagamento: riscos, níveis, dados, tempo de execução e gates.',
    book: 'Effective Software Testing (Aniche), cap. 1–7 (teste de especificação, estrutural, por propriedade e design para testabilidade).',
    complements: [official.api],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/CompileSmoke.java'
  },
  {
    number: 17,
    part: 'producao',
    id: 'persistencia',
    title: 'Persistência, transações, locking e eficiência',
    level: 'Sênior',
    objective: 'Definir fronteira transacional e implementar acesso a dados correto sob concorrência, volume e falha.',
    prerequisites: ['Módulos 3, 7, 14 e 16', 'SQL', 'JPA/JDBC básico'],
    problem: 'ORM esconde round trips e lifecycle; transação longa segura recursos; retry pode violar unicidade; cache pode servir estado incoerente.',
    concepts: ['JDBC, pool e prepared statements', 'Persistence context, dirty checking e flush', 'N+1, fetch plans, projections e batching', 'Isolation, optimistic/pessimistic locking', 'Migrations, idempotência e outbox'],
    internals: ['Transação da aplicação deve respeitar transação do banco e capacidade do pool.', 'JPA sincroniza unit of work no flush; acesso lazy fora do contexto falha ou dispara I/O oculto.', 'Optimistic lock detecta conflito; não o resolve.'],
    useWhen: ['Query explícita para leitura crítica.', 'Optimistic lock em conflito raro.', 'Pessimistic lock para seção curta com conflito alto e requisito forte.', 'Outbox para commit DB+evento.'],
    avoidWhen: ['Não use EAGER para “corrigir” N+1.', 'Não abra transação durante chamada remota.', 'Não faça retry cego de transação.', 'Não gere schema em produção.'],
    contrast: {
      bad: 'Iterar entidades e acessar coleção lazy, depois chamar API externa dentro de @Transactional.',
      good: 'Fetch plan/projection explícito; transação curta; efeito externo via outbox.'
    },
    tradeoffs: ['ORM acelera domínio CRUD e pode esconder custo.', 'Lock forte preserva consistência e reduz concorrência.', 'Desnormalização acelera leitura e aumenta reconciliação.'],
    production: 'Dois workers vendem o último item. O caso compara optimistic lock, update condicional e fila, medindo conflito.',
    risks: ['N+1', 'Lost update', 'Pool exhaustion', 'Migration lock', 'Dual write'],
    checklist: ['Quantas queries e rows?', 'Onde começa/termina a transação?', 'Qual anomalia é aceitável?', 'Conflito é esperado?', 'Migração tem rollback/expand-contract?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que é N+1?', expected: 'Uma query inicial seguida de query por item; identificar e corrigir por caso.' },
      { level: 'Sênior/Expert', question: 'Optimistic ou pessimistic locking?', expected: 'Taxa/custo de conflito, duração, UX, retry e throughput.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Reproduzir e medir N+1.', evidence: 'Contagem SQL antes/depois.' },
      { level: 'Aplicado', task: 'Implementar update concorrente com versão.', evidence: 'Teste com duas transações.' },
      { level: 'Expert', task: 'Implementar outbox com publisher idempotente.', evidence: 'Falhas injetadas e reconciliação.' }
    ],
    challenge: 'Projetar checkout consistente sem transação distribuída, documentando garantias e compensações.',
    book: 'Java Persistence with Spring Data and Hibernate (mapeamento, transações, Spring Data); High-Performance Java Persistence (fetching, N+1, locking e tuning).',
    complements: [official.api],
    exampleFile: '../../examples/java21-senior/README.md'
  },
  {
    number: 18,
    part: 'producao',
    id: 'distribuidos',
    title: 'Sistemas distribuídos, mensageria e resiliência',
    level: 'Sênior → Expert',
    objective: 'Projetar interação remota assumindo falha parcial, duplicação, reordenação e latência variável.',
    prerequisites: ['Módulos 10, 14, 16 e 17', 'HTTP e mensageria', 'Observabilidade básica'],
    problem: 'Rede não é chamada local. Timeout ausente, retry sincronizado e “exactly once” mal entendido causam cascatas e efeitos duplicados.',
    concepts: ['Timeout, deadline, retry com backoff/jitter', 'Circuit breaker, bulkhead e rate limit', 'At-least-once, idempotência e ordering', 'Outbox, saga e compensação', 'Schema evolution e consumer lag'],
    internals: ['Timeout deve caber no budget do chamador e propagar deadline.', 'Retry multiplica carga e só é seguro para operação idempotente/transiente.', 'Exactly-once costuma ser uma propriedade delimitada, não garantia fim a fim automática.'],
    useWhen: ['Retry limitado com jitter para falha transitória.', 'Circuit breaker quando falhar rápido protege o sistema.', 'Saga para processo longo com compensações de negócio.'],
    avoidWhen: ['Não retry 4xx/regra de negócio.', 'Não use mensageria para acoplamento local simples.', 'Não suponha ordem global.', 'Não esconda falha com fallback incorreto.'],
    contrast: {
      bad: 'Três camadas fazem três retries cada, sem deadline.',
      good: 'Budget único, retry numa camada, jitter, limite e telemetria de tentativas.'
    },
    tradeoffs: ['Assíncrono desacopla disponibilidade e adiciona consistência eventual.', 'Circuit breaker reduz cascata e pode atrasar recuperação.', 'Compensação mantém progresso e não apaga todos os efeitos.'],
    production: 'Pagamento confirma, mas resposta se perde; retry cobra novamente. Idempotency key e estado transacional tornam repetição segura.',
    risks: ['Retry storm', 'Poison message', 'DLQ sem processo', 'Evento incompatível', 'Compensação impossível'],
    checklist: ['Qual deadline?', 'Operação é idempotente?', 'Qual semântica de entrega?', 'Como reprocessar?', 'Quem reconcilia divergência?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Retry sempre aumenta disponibilidade?', expected: 'Não; pode amplificar falha e requer transiência/idempotência.' },
      { level: 'Sênior/Expert', question: 'Outbox resolve exatamente o quê?', expected: 'Atomicidade DB+registro do evento; publicação/consumo ainda exigem idempotência e monitoramento.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Implementar retry limitado com jitter.', evidence: 'Teste de classificação de falhas.' },
      { level: 'Aplicado', task: 'Consumidor idempotente com inbox.', evidence: 'Replay e duplicata.' },
      { level: 'Expert', task: 'Modelar saga de pedido.', evidence: 'Estados, compensações e reconciliação.' }
    ],
    challenge: 'Conduzir game day com atraso, duplicação e indisponibilidade, preservando invariantes e SLO.',
    book: 'Spring in Action (6ª ed), integração e mensageria; Spring Boot: Up and Running (serviços cloud-native e resiliência).',
    complements: [official.jep444, official.otel],
    exampleFile: '../../examples/java21-senior/README.md'
  },
  {
    number: 19,
    part: 'producao',
    id: 'seguranca-observabilidade',
    title: 'Segurança, observabilidade e operação',
    level: 'Sênior',
    objective: 'Projetar controles a partir de ameaças e ligar logs, métricas e traces a SLOs, alertas e resposta a incidentes.',
    prerequisites: ['Módulos 7, 10, 13, 14 e 18', 'AuthN/AuthZ', 'Operação básica'],
    problem: 'JWT não é estratégia de segurança; “temos logs” não é observabilidade. Sem threat model e sinais acionáveis, a falha é descoberta pelo cliente.',
    concepts: ['Threat modeling e least privilege', 'Validação, secrets e supply chain', 'AuthN, AuthZ, OAuth2/OIDC e method security', 'Logs estruturados, métricas, traces e correlação', 'SLI/SLO, alertas, runbooks e postmortem'],
    internals: ['Trace context precisa cruzar threads/processos sem virar estado global inseguro.', 'Cardinalidade explode custo de métricas.', 'Logs e dumps podem conter PII/secrets e exigem retenção/acesso controlados.'],
    useWhen: ['Controle na fronteira e no domínio sensível.', 'SLO baseado em jornada do usuário.', 'Alertas por sintomas e burn rate.', 'Tracing para fluxo distribuído amostrado.'],
    avoidWhen: ['Não logue token/senha/PII.', 'Não use métrica com userId.', 'Não autorize só no controller.', 'Não alerte toda exceção.'],
    contrast: {
      bad: 'Logar request completo e alertar CPU > 70%.',
      good: 'Redação de dados, correlation ID, SLI de sucesso/latência e alerta de burn rate com runbook.'
    },
    tradeoffs: ['Mais telemetria custa e pode expor dados.', 'Sampling reduz custo e perde raridades.', 'Controle mais forte aumenta fricção e deve ser proporcional ao risco.'],
    production: 'Credential stuffing eleva latência e custo. Rate limit, sinais de abuso, resposta uniforme e alertas são avaliados sem vazar existência de usuário.',
    risks: ['Broken access control', 'Secret em log', 'Dependency vulnerável', 'Métrica de alta cardinalidade', 'Alerta sem ação'],
    checklist: ['Qual ameaça e ativo?', 'Controle tem teste?', 'Sinal responde pergunta operacional?', 'Dado sensível é redigido?', 'Alerta tem owner/runbook?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Autenticação e autorização diferem como?', expected: 'Identidade versus permissão para ação/recurso.' },
      { level: 'Sênior/Expert', question: 'Quais sinais criaria para um checkout?', expected: 'SLIs de sucesso/latência, métricas de dependência, traces amostrados, logs correlacionados e alertas por SLO.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Criar threat model de endpoint.', evidence: 'Ameaça, mitigação e teste.' },
      { level: 'Aplicado', task: 'Instrumentar fluxo com traceId e métricas de baixa cardinalidade.', evidence: 'Dashboard e consulta.' },
      { level: 'Expert', task: 'Definir SLO e alerta de burn rate.', evidence: 'Runbook e game day.' }
    ],
    challenge: 'Responder a incidente simulado com timeline, evidência, mitigação, correção e postmortem sem culpabilização.',
    book: 'Spring Security in Action (2ª ed), autenticação e autorização; Spring Boot: Up and Running (Actuator e observabilidade).',
    complements: [official.secure, official.owasp, official.otel, official.jfr],
    exampleFile: '../../examples/java21-senior/README.md'
  },
  {
    number: 20,
    part: 'producao',
    id: 'arquitetura-ddd',
    title: 'DDD, arquitetura hexagonal, monólito modular e microsserviços',
    level: 'Sênior → Expert',
    objective: 'Defender limites arquiteturais e um caminho de evolução com base em domínio, acoplamento, capacidade operacional e métricas.',
    prerequisites: ['Módulos 1–19', 'C4 e ADR básicos', 'Experiência com sistema completo'],
    problem: 'Microsserviços prematuros distribuem transações e ownership antes de existir domínio/equipe capaz de operá-los; “clean architecture” pode virar cerimônia.',
    concepts: ['Bounded contexts e ubiquitous language', 'Agregados e invariantes', 'Ports/adapters e dependency rule', 'Monólito modular e fitness functions', 'Microsserviços, data ownership e evolução'],
    internals: ['Fronteira arquitetural deve aparecer no build, código, dados e ownership.', 'Agregado é limite de consistência, não árvore de objetos.', 'Extração de serviço troca acoplamento local por protocolo, falha parcial e operação independente.'],
    useWhen: ['Monólito modular como default para domínio/equipe em descoberta.', 'Hexagonal onde adapters mudam ou testes precisam isolar I/O.', 'Serviço quando há capacidade, autonomia e limite estável.'],
    avoidWhen: ['Não crie microserviço por tabela.', 'Não use DDD tático sem linguagem/modelo.', 'Não adote CQRS/event sourcing sem requisito.', 'Não faça camada pass-through.'],
    contrast: {
      bad: 'Doze serviços compartilham banco e deploy, chamados “microservices”.',
      good: 'Módulos com ownership e contratos; extração só após métricas e limite estável.'
    },
    tradeoffs: ['Monólito simplifica transação/deploy e pode exigir disciplina modular.', 'Serviços permitem autonomia e cobram rede, dados, operação e testes.', 'DDD aprofunda modelo e tem custo que não serve a CRUD simples.'],
    production: 'Módulo de faturamento bloqueia deploy e escala diferente. O caso mede acoplamento, ownership, SLO e dados antes de extrair.',
    risks: ['Distributed monolith', 'Shared database', 'Big ball of mud modular', 'ADR sem revisão', 'Complexidade acima da equipe'],
    checklist: ['Qual decisão a fronteira protege?', 'Quem possui dados e operação?', 'Há necessidade de deploy/escala independente?', 'Como testar contrato?', 'Qual gatilho e rollback da extração?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que uma porta protege na arquitetura hexagonal?', expected: 'Contrato do core contra detalhes de entrada/saída.' },
      { level: 'Sênior/Expert', question: 'Quando extrair um módulo para serviço?', expected: 'Limite estável, autonomia, escala/SLO, ownership, dados, custo operacional e migração reversível.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Desenhar C4 e dependências de um módulo.', evidence: 'Diagrama consistente com código.' },
      { level: 'Aplicado', task: 'Separar adapter de persistência do core.', evidence: 'Teste do core sem framework.' },
      { level: 'Expert', task: 'Planejar extração strangler de um contexto.', evidence: 'ADRs, métricas, contratos e rollback.' }
    ],
    challenge: 'Defender em architecture review a evolução de um monólito modular com opções explícitas de não extrair.',
    book: 'Refactoring (2ª ed) e Clean Code (fronteiras e arquitetura limpa); DDD e microsserviços aprofundam na trilha de Arquitetura.',
    complements: [official.jls, official.otel],
    exampleFile: '../../examples/java21-senior/README.md'
  },
  {
    number: 21,
    part: 'fronteira',
    id: 'bytecode-agents',
    title: 'Class file, bytecode e instrumentação em runtime',
    level: 'Expert',
    objective: 'Ler o bytecode gerado pelo compilador, explicar a diferença entre o que você escreveu e o que a JVM executa, e escrever um agent que instrumenta classes sem tocar no código da aplicação.',
    prerequisites: ['Módulo 11', 'Class loading e linking', 'Leitura de stack traces e descritores de método'],
    problem: 'Comportamentos sem explicação no código-fonte — concatenação que não aloca StringBuilder, lambda que não vira classe anônima, campo que some, método de APM que aparece do nada no profile — só têm explicação um nível abaixo. Quem não lê bytecode atribui isso a "mágica do framework" e para o diagnóstico ali.',
    concepts: ['Formato class file: constant pool, descritores e atributos', 'Verificação de bytecode antes da execução', '`javap -c -p` como ferramenta de diagnóstico', 'Class-File API (JEP 484) e ASM', '`java.lang.instrument`: premain, agentmain e ClassFileTransformer', 'Retransformação e seus limites'],
    internals: [
      'A JVM verifica o bytecode antes de executar: type-safety do fluxo de operandos é garantida no linking, não em runtime.',
      '`invokedynamic` adia a ligação: lambdas e concatenação de strings resolvem o call site na primeira execução e o memorizam.',
      'Um `-javaagent` roda o `premain` antes do `main` da aplicação, e enxerga as classes antes de serem definidas.',
      'A retransformação não pode adicionar, remover ou mudar a assinatura de membros — só trocar corpos de métodos.'
    ],
    useWhen: ['Use `javap` quando o comportamento observado não bate com o código-fonte.', 'Use a Class-File API para gerar ou reescrever bytecode com API suportada pelo JDK.', 'Use um agent para instrumentar código que você não controla (biblioteca, legado, fornecedor).'],
    avoidWhen: ['Não instrumente para resolver um problema que uma interface ou um decorator resolve.', 'Não gere bytecode à mão onde um record ou uma lambda basta.', 'Não deixe agent de diagnóstico ligado em produção sem medir o overhead que ele mesmo introduz.'],
    contrast: {
      bad: 'Concluir "o Hibernate é lento" a partir de um profile em que metade das entradas são classes proxy geradas que você não sabe ler.',
      good: 'Descompilar o proxy, identificar a interceptação, medir o custo dela isolado e decidir com número.'
    },
    tradeoffs: ['Instrumentação enxerga tudo sem alterar o código, e cria uma camada invisível no diagnóstico.', 'Class-File API é suportada e acompanha o JDK; ASM é mais madura e tem mais exemplos.', 'Retransformação permite instrumentar tarde, ao custo de restrições de forma da classe.'],
    production: 'Um serviço ganha 40 ms de p99 após subir a versão do agent de APM. O time culpa o GC. A investigação com `-XX:+TraceClassLoading`, `javap` no bytecode transformado e um benchmark do interceptor mostra instrumentação aplicada a um método chamado em loop quente. A correção é um filtro de pacote no agent, não tuning de GC.',
    risks: ['Agent que instrumenta caminho quente e some do radar', 'Bytecode gerado inválido que só falha no linking em runtime', 'Conflito entre dois agents transformando a mesma classe', 'Dependência de detalhe de implementação que muda de JDK'],
    checklist: ['Consigo prever o bytecode antes de rodar `javap`?', 'O agent declara e respeita um filtro de escopo?', 'O overhead da instrumentação foi medido separado da aplicação?', 'A geração usa API suportada ou detalhe interno?', 'A transformação sobrevive a uma troca de JDK?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que acontece com `"a" + variavel` depois que o compilador processa?', expected: 'Não é necessariamente StringBuilder: desde o Java 9 o compilador emite `invokedynamic` para `StringConcatFactory`, que resolve a estratégia no primeiro uso.' },
      { level: 'Sênior/Expert', question: 'Como você investigaria uma regressão de latência que só aparece com o agent de observabilidade ligado?', expected: 'Isolar com e sem agent, listar classes transformadas, medir o interceptor em JMH, comparar bytecode antes/depois e restringir escopo — não tratar como problema de GC ou de aplicação.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Compilar cinco trechos (concatenação, lambda, switch sobre string, foreach em List, try-with-resources) e prever o bytecode antes de rodar `javap -c -p`.', evidence: 'Tabela previsão × saída real do javap, com as divergências explicadas.' },
      { level: 'Aplicado', task: 'Escrever um `-javaagent` que mede o tempo dos métodos de um pacote configurável e imprime um histograma ao encerrar.', evidence: 'Agent versionado, MANIFEST com Premain-Class e execução sobre uma aplicação de teste.' },
      { level: 'Expert', task: 'Medir o custo da própria instrumentação com JMH e definir um filtro que mantenha o overhead abaixo de um limite declarado.', evidence: 'Benchmark com e sem agent, overhead em percentual e ADR do limite adotado.' }
    ],
    challenge: 'Escrever um agent que detecte chamadas bloqueantes dentro de virtual threads e reporte o stack trace responsável, sem alterar a aplicação observada.',
    book: 'Optimizing Java, cap. 2–4 (bytecode, class loading e o que o compilador realmente emite); The Well-Grounded Java Developer (plataforma, bytecode e ferramentas).',
    complements: [official.jvms, official.jep484, official.instrument],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/BytecodeAndAgents.java'
  },
  {
    number: 22,
    part: 'fronteira',
    id: 'jit-compilacao',
    title: 'JIT: tiered compilation, inlining, escape analysis e desotimização',
    level: 'Expert',
    objective: 'Explicar o que o compilador JIT faz com um método quente e provar experimentalmente o efeito de inlining, escape analysis e desotimização sobre um benchmark próprio.',
    prerequisites: ['Módulo 11', 'Módulo 13 (JMH e JFR)', 'Noção de perfil de execução e warmup'],
    problem: 'Medições de performance em Java mentem por padrão. Um benchmark sem warmup mede o interpretador; um loop que "ficou mais rápido" pode ter sido eliminado inteiro por dead code elimination; uma abstração "gratuita" deixa de ser quando o call site vira megamórfico. Sem entender o JIT, otimização em Java é superstição.',
    concepts: ['Interpretador → C1 (rápido, pouco otimizado) → C2 (lento, agressivo)', 'Profiling em runtime e compilação especulativa', 'Inlining: limites de tamanho, hot/warm e call sites mono/bi/megamórficos', 'Escape analysis e scalar replacement', 'Desotimização (uncommon trap) e recompilação', 'OSR — On-Stack Replacement', 'JVMCI e o compilador Graal como alternativa ao C2'],
    internals: [
      'O C2 compila com base no perfil observado até ali; se a suposição quebra (um tipo novo aparece, um branch nunca tomado é tomado), ele desotimiza e devolve a execução ao interpretador.',
      'Inlining é a otimização habilitadora: sem ela, escape analysis e constant folding não enxergam através da chamada.',
      'Um call site que vê um só tipo é inlinado; com dois, ainda pode; com três ou mais vira megamórfico e a chamada passa a ser virtual de verdade.',
      'Escape analysis pode eliminar a alocação inteira de um objeto que não escapa do método, substituindo-o por campos em registradores.'
    ],
    useWhen: ['Use `-XX:+PrintCompilation` para ver o que compila, recompila e desotimiza.', 'Use `-XX:+UnlockDiagnosticVMOptions -XX:+PrintInlining` quando uma abstração parecer cara.', 'Use JMH com `Blackhole` sempre que medir trecho pequeno.'],
    avoidWhen: ['Não conclua nada de benchmark sem warmup declarado.', 'Não "otimize" removendo métodos pequenos: eles são inlinados e ajudam o JIT.', 'Não desabilite o JIT para "medir o custo real" — o custo real inclui o JIT.'],
    contrast: {
      bad: 'Rodar um `System.nanoTime()` em volta de um loop de mil iterações e publicar o número como evidência de performance.',
      good: 'JMH com warmup, forks, modo de saída explícito e Blackhole, reportando média, desvio e intervalo de confiança.'
    },
    tradeoffs: ['Compilação especulativa dá pico alto e custa warmup e imprevisibilidade no começo.', 'Mais inlining melhora o código e aumenta o code cache e o tempo de compilação.', 'Graal costuma otimizar melhor código com muita abstração; o C2 é mais previsível e mais testado.'],
    production: 'Um endpoint tem p99 alto só nos primeiros minutos após cada deploy. O time aumenta réplicas. A leitura de `PrintCompilation` mostra o caminho crítico ainda em C1 durante o aquecimento, e o `CodeCache` enchendo por causa de um agente que gera classes. A correção combina warmup dirigido no readiness probe e limite de geração de classes — não escala horizontal.',
    risks: ['Deoptimization storm por perfil instável', 'CodeCache cheio e queda para modo interpretado', 'Benchmark que mede dead code eliminado', 'Megamorfismo introduzido por uma abstração nova em caminho quente'],
    checklist: ['O benchmark tem warmup e fork?', 'O resultado é consumido por Blackhole?', 'O call site crítico é mono, bi ou megamórfico?', 'Houve desotimização repetida no log?', 'O CodeCache tem folga?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que o mesmo código fica mais rápido depois de alguns segundos rodando?', expected: 'Tiered compilation: começa interpretado, passa por C1 e chega ao C2 conforme o método esquenta e o perfil é coletado.' },
      { level: 'Sênior/Expert', question: 'Uma refatoração introduziu uma interface e a latência subiu 15%. Como você investiga sem reverter às cegas?', expected: 'Verificar se o call site virou megamórfico, checar PrintInlining, medir com JMH nos dois desenhos, avaliar se escape analysis deixou de eliminar alocação; só então decidir entre reverter, especializar ou aceitar.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Rodar o mesmo método com `-Xint`, com `-XX:TieredStopAtLevel=1` e normal, e explicar as três medições.', evidence: 'Tabela com os três tempos e a explicação de cada diferença.' },
      { level: 'Aplicado', task: 'Construir um benchmark JMH que demonstre escape analysis, comparando com `-XX:-DoEscapeAnalysis`.', evidence: 'Resultado JMH com alocação por operação (`-prof gc`) nos dois modos.' },
      { level: 'Expert', task: 'Provocar megamorfismo em um call site e medir o custo, depois eliminá-lo por especialização.', evidence: 'PrintInlining antes/depois, números de JMH e ADR justificando o desenho final.' }
    ],
    challenge: 'Pegar uma otimização "óbvia" já aplicada em algum projeto seu, medir corretamente com JMH e mostrar que ela não fazia diferença — ou quanto fazia.',
    book: 'Optimizing Java, cap. 9–11 (JIT, inlining e otimizações do C2); Java Concurrency in Practice, cap. 11 (performance e a armadilha da medição ingênua).',
    complements: [official.jmh, official.jvms, official.jfr],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/JitAndEscapeAnalysis.java'
  },
  {
    number: 23,
    part: 'fronteira',
    id: 'memoria-baixo-nivel',
    title: 'Memória de baixo nível: VarHandle, barreiras, false sharing e lock-free',
    level: 'Expert',
    objective: 'Escolher o modo de acesso à memória pelo custo real que ele impõe, reconhecer contenção de cache line e avaliar honestamente quando uma estrutura lock-free compensa.',
    prerequisites: ['Módulo 9 (JMM e happens-before)', 'Módulo 22 (medição confiável)', 'Noção de cache de CPU'],
    problem: '`volatile` em tudo é caro e `volatile` em nada é incorreto. Entre os dois extremos existe um espectro de modos de acesso que a maioria dos desenvolvedores Java nunca usou, e existe um custo invisível — duas variáveis independentes na mesma linha de cache podem destruir a escalabilidade de um contador sem nenhum erro aparente no código.',
    concepts: ['`VarHandle` e os modos plain, opaque, acquire/release e volatile', 'Barreiras de memória e o que cada modo garante', 'Compare-and-set e o problema ABA', 'False sharing, linha de cache e `@Contended`', '`LongAdder` versus `AtomicLong` sob contenção', '`Thread.onSpinWait` e espera ativa'],
    internals: [
      'Cada modo de acesso é um contrato de ordenação diferente: plain não ordena nada, acquire/release ordena um lado, volatile ordena os dois e é o mais caro.',
      'A unidade de coerência entre núcleos é a linha de cache (tipicamente 64 bytes), não a variável: escrever em um campo invalida a linha inteira para os outros núcleos.',
      '`LongAdder` troca precisão de leitura instantânea por células separadas, evitando que todos os núcleos disputem a mesma linha.',
      'CAS em loop sob alta contenção degrada: o trabalho útil cai e o de repetição sobe.'
    ],
    useWhen: ['Use acquire/release quando publicar um objeto construído, e não precisar de ordem total.', 'Use `LongAdder` para contadores de alta frequência e leitura rara.', 'Use padding ou `@Contended` só depois de medir contenção real.'],
    avoidWhen: ['Não escreva estrutura lock-free porque parece mais rápida — escreva quando o benchmark mostrar que o lock é o gargalo.', 'Não use modo plain em publicação entre threads.', 'Não conclua false sharing sem medir: a maior parte dos casos suspeitos não é.'],
    contrast: {
      bad: 'Substituir `synchronized` por um loop CAS artesanal em um caminho com pouca contenção e comemorar o "código sem lock".',
      good: 'Medir contenção com JFR, verificar que o lock domina, testar `LongAdder` e CAS, e escolher o mais simples que atinge a meta.'
    },
    tradeoffs: ['Lock-free elimina bloqueio e multiplica a dificuldade de prova de correção.', 'Modos fracos são mais baratos e exigem raciocínio explícito sobre ordenação.', 'Padding gasta memória para ganhar escalabilidade — vale por variável, não por padrão.'],
    production: 'Um contador de requisições com `AtomicLong` deixa de escalar acima de 16 núcleos: o throughput cai conforme se adicionam threads. O perfil mostra a maior parte do tempo em CAS repetido. A troca por `LongAdder` restaura a escala linear; a leitura passa a ser aproximada, o que o caso de uso aceita.',
    risks: ['Correção concorrente frágil que passa nos testes e falha em produção', 'ABA em estrutura artesanal', 'Otimização de false sharing aplicada sem medição, gastando memória à toa', 'Dependência de detalhe de arquitetura de CPU'],
    checklist: ['A contenção foi medida antes de otimizar?', 'Cada acesso tem o modo mais fraco que ainda é correto?', 'Existe prova (ou teste de stress) da correção concorrente?', 'A escalabilidade foi medida com número crescente de threads?', 'O ganho justifica a perda de legibilidade?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual a diferença entre `AtomicLong` e `LongAdder`?', expected: 'AtomicLong é um único ponto de CAS; LongAdder distribui em células para reduzir contenção, ao custo de leitura agregada e não instantânea.' },
      { level: 'Sênior/Expert', question: 'Quando você usaria acquire/release em vez de volatile?', expected: 'Quando a garantia necessária é publicação de um lado (escreve e depois publica; lê a flag e depois lê os dados) e a ordem total do volatile não é requisito — com o custo de ter que justificar a ordenação explicitamente.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Implementar um contador com `VarHandle` nos quatro modos e medir o custo relativo de cada um.', evidence: 'Benchmark JMH com os quatro modos e a explicação da ordem obtida.' },
      { level: 'Aplicado', task: 'Reproduzir false sharing com dois contadores adjacentes e eliminá-lo com padding, medindo antes e depois.', evidence: 'Throughput por número de threads nos dois desenhos.' },
      { level: 'Expert', task: 'Comparar `synchronized`, `AtomicLong`, `LongAdder` e uma fila lock-free sob contenção crescente, e recomendar um.', evidence: 'Curva de escalabilidade, análise de correção e ADR com a recomendação.' }
    ],
    challenge: 'Escrever uma estrutura lock-free simples (pilha ou fila SPSC), provar a correção com teste de stress e depois mostrar em que faixa de contenção ela perde para a versão com lock.',
    book: 'Java Concurrency in Practice, cap. 15–16 (atômicos, não-bloqueio e o modelo de memória); Optimizing Java, cap. 5–7 (hardware, cache e o custo real da memória).',
    complements: [official.varhandle, official.jmh, official.jvms],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/LowLevelMemory.java'
  },
  {
    number: 24,
    part: 'fronteira',
    id: 'aot-startup',
    title: 'Startup e AOT: CDS, Project Leyden, GraalVM Native Image e CRaC',
    level: 'Expert',
    objective: 'Escolher entre JIT puro, AOT cache, imagem nativa e checkpoint/restore a partir de requisitos explícitos de startup, throughput de pico, custo e carga operacional — e provar a escolha com medição.',
    prerequisites: ['Módulo 22 (o que o JIT entrega e a que custo)', 'Módulo 11 (class loading)', 'Noção de custo de infraestrutura e de escala elástica'],
    problem: 'Java tem excelente throughput de pico e péssimo startup, e as duas coisas estão ligadas: o pico vem do JIT, que precisa de tempo e perfil. Em função serverless, escala reativa e CLI, esse trade-off quebra. As quatro respostas disponíveis têm custos muito diferentes, e escolher por moda custa caro.',
    concepts: ['Custo de class loading, linking e warmup no startup', 'AppCDS: arquivo de classes compartilhado', 'AOT cache do Project Leyden (JEP 483 e sucessores)', 'GraalVM Native Image e o modelo closed-world', 'Configuração de reflexão, proxies e recursos na imagem nativa', 'CRaC: checkpoint e restore de um processo aquecido', 'Startup × pico × footprint × previsibilidade'],
    internals: [
      'Native Image resolve o mundo em tempo de build: o que não for alcançável estaticamente não existe em runtime, e reflexão dinâmica precisa ser declarada.',
      'Sem JIT, a imagem nativa não tem perfil de runtime: o pico costuma ficar abaixo do da JVM, mesmo com startup ordens de grandeza melhor.',
      'AppCDS e o AOT cache do Leyden atacam o startup mantendo a JVM e o JIT — ganho menor, risco muito menor.',
      'CRaC restaura um processo já aquecido, o que exige que recursos externos (conexões, arquivos, aleatoriedade) sejam fechados no checkpoint e reabertos no restore.'
    ],
    useWhen: ['Use AppCDS/AOT cache quando o requisito é reduzir startup sem mudar a arquitetura.', 'Use Native Image quando startup e footprint dominam e o pico sustentado não é o gargalo.', 'Use CRaC quando o warmup é longo e o ambiente permite snapshot do processo.'],
    avoidWhen: ['Não adote Native Image em serviço de throughput sustentado sem medir o pico.', 'Não escolha AOT para "ficar mais rápido" — AOT melhora o começo, raramente o regime.', 'Não subestime o custo de manter a configuração de reflexão de um ecossistema inteiro.'],
    contrast: {
      bad: 'Migrar o serviço principal para imagem nativa porque o cold start de um lambda secundário incomodava.',
      good: 'Classificar os workloads por requisito, aplicar CDS no serviço de regime e imagem nativa só onde o startup é o SLO.'
    },
    tradeoffs: ['Imagem nativa dá startup em milissegundos e custa pico, build lento e ecossistema restrito.', 'CDS/AOT cache é barato e conservador, com ganho proporcionalmente menor.', 'CRaC preserva o pico aquecido e adiciona um ciclo de vida novo para gerenciar.'],
    production: 'Uma API em container leva 6 s para ficar pronta; o autoscaler reage tarde e o p99 estoura em picos. Três caminhos são medidos: AppCDS reduz para 4 s sem mudar nada; imagem nativa cai para 90 ms mas perde 20% de throughput sustentado; CRaC entrega 200 ms e obriga a tratar o pool de conexões no checkpoint. A decisão registrada em ADR escolhe CDS para este serviço e imagem nativa apenas para os jobs de curta duração.',
    risks: ['Falha só em runtime por reflexão não declarada na imagem', 'Queda silenciosa de throughput após migração', 'Divergência entre o comportamento em JVM e em imagem nativa nos testes', 'Snapshot CRaC com estado externo inválido no restore'],
    checklist: ['O requisito é startup, pico ou footprint? Está escrito?', 'A medição comparou os quatro caminhos no mesmo workload?', 'Os testes rodam no mesmo modo de execução que a produção?', 'A configuração de reflexão está versionada e testada?', 'Existe caminho de volta se o pico regredir?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que uma aplicação Java compilada para imagem nativa inicia tão mais rápido?', expected: 'Não há class loading, linking nem warmup do JIT em runtime: o trabalho foi feito em tempo de build.' },
      { level: 'Sênior/Expert', question: 'Em que situação você recusaria Native Image mesmo com o time pedindo?', expected: 'Serviço de throughput sustentado onde o pico do C2 é o que atende o SLO, ou stack com reflexão dinâmica pesada cuja configuração seria um custo permanente — apresentando a medição de pico como argumento.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Medir o startup da mesma aplicação com JVM padrão e com AppCDS ativado.', evidence: 'Tempo até readiness nos dois modos, com cinco execuções cada.' },
      { level: 'Aplicado', task: 'Gerar uma imagem nativa de um serviço simples e fazer passar um teste que usa reflexão.', evidence: 'Build reproduzível, configuração de reflexão versionada e teste verde na imagem.' },
      { level: 'Expert', task: 'Comparar JVM, CDS e imagem nativa no mesmo workload e recomendar um caminho por tipo de serviço.', evidence: 'Startup, p99 em regime, memória e custo por requisição, com ADR.' }
    ],
    challenge: 'Definir uma política de execução para uma plataforma com três perfis de workload (API de regime, job curto, CLI), com o critério de escolha escrito e medido.',
    book: 'Optimizing Java, cap. 1–3 e 12 (custo de execução, medição e o ciclo de vida da JVM); The Well-Grounded Java Developer (plataforma, build e alternativas de runtime).',
    complements: [official.jep483, official.leyden, official.graalvm, official.crac],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/StartupAndAot.java'
  },
  {
    number: 25,
    part: 'fronteira',
    id: 'panama-dados-densos',
    title: 'FFM (Panama), Vector API e dados densos fora do heap',
    level: 'Expert',
    objective: 'Substituir JNI e `sun.misc.Unsafe` por FFM em fronteiras nativas, controlar o ciclo de vida de memória fora do heap com `Arena` e avaliar o ganho real de vetorização.',
    prerequisites: ['Módulo 7 (I/O e NIO.2)', 'Módulo 23 (memória e cache)', 'Noção de layout binário e endianness'],
    problem: '`sun.misc.Unsafe` está em remoção e JNI é caro de escrever, inseguro e difícil de manter. Ao mesmo tempo, cresce a demanda por processar formatos binários densos e chamar bibliotecas nativas sem sair do Java. A FFM API é a resposta suportada, e quem só conhece `ByteBuffer` não consegue avaliá-la.',
    concepts: ['`MemorySegment`, `MemoryLayout` e acesso estruturado', '`Arena` e ciclo de vida: confined, shared e automático', '`Linker` e `downcall`/`upcall` para código nativo', 'FFM como substituto de JNI e de Unsafe', 'Vector API e SIMD: quando o ganho é real', 'Relação com Project Valhalla e value types'],
    internals: [
      'Uma `Arena` define quem pode acessar a memória e quando ela é liberada: o acesso após o fechamento falha de forma determinística, e não com corrupção silenciosa.',
      'Um `MemoryLayout` descreve o formato binário uma vez e deriva os acessadores, em vez de espalhar offsets mágicos pelo código.',
      'A Vector API expressa intenção de SIMD; a JVM decide se consegue mapear para instruções do hardware — sem garantia.',
      'Valhalla é o que falta para que tipos de valor eliminem a indireção de objeto; até lá, densidade em Java significa arrays de primitivos ou memória fora do heap.'
    ],
    useWhen: ['Use FFM quando precisar chamar biblioteca nativa ou mapear formato binário grande.', 'Use `Arena.ofConfined` quando o ciclo de vida é claramente delimitado.', 'Considere Vector API só depois de comprovar que o loop escalar é o gargalo.'],
    avoidWhen: ['Não use FFM onde `ByteBuffer` ou uma biblioteca madura resolve.', 'Não use `Arena` compartilhada sem necessidade: o fechamento seguro custa coordenação.', 'Não dependa de Vector API em produção enquanto estiver em incubação.'],
    contrast: {
      bad: 'Parser binário com dezenas de `buffer.getInt(offset + 12)` e constantes mágicas espalhadas por três classes.',
      good: 'Um `MemoryLayout` declarativo que descreve o registro uma vez, com acessadores derivados e nomes de campo.'
    },
    tradeoffs: ['FFM é segura e explícita; exige aprender um modelo novo.', 'Memória fora do heap tira pressão do GC e transfere a responsabilidade de liberar para você.', 'Vetorização pode dar múltiplos de ganho ou nenhum, dependendo do hardware e do formato dos dados.'],
    production: 'Um serviço que lê arquivos binários de mercado gasta 30% do tempo em cópias entre `byte[]` e objetos de domínio, e pressiona o GC com objetos de vida curta. A reescrita com `MemorySegment` mapeando o arquivo e um layout declarado elimina a cópia, reduz a taxa de alocação e torna o parser legível — o ganho medido vem mais da cópia eliminada do que de qualquer vetorização.',
    risks: ['Vazamento de memória fora do heap por `Arena` não fechada', 'Crash do processo em chamada nativa mal descrita', 'Ganho presumido de SIMD que não se confirma no hardware alvo', 'Acoplamento a API em incubação'],
    checklist: ['Quem é dono da `Arena` e quando ela fecha?', 'O layout binário está declarado em um lugar só?', 'A fronteira nativa tem teste que cobre o caminho de erro?', 'O ganho foi medido no hardware de produção?', 'Existe alternativa suportada mais simples?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual a diferença entre memória no heap e fora do heap para uma aplicação Java?', expected: 'Heap é gerenciado pelo GC; fora do heap não é coletado, não pressiona o GC e precisa ser liberado explicitamente — com FFM, pelo fechamento da Arena.' },
      { level: 'Sênior/Expert', question: 'Por que a FFM API é preferível a JNI para uma integração nova?', expected: 'Segurança de ciclo de vida verificada, sem código C intermediário, sem build nativo separado, com erros determinísticos em vez de corrupção — e porque Unsafe está em remoção.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Ler um arquivo binário de formato conhecido com `ByteBuffer` e depois com `MemorySegment` + `MemoryLayout`.', evidence: 'As duas implementações, com comparação de legibilidade e de tempo.' },
      { level: 'Aplicado', task: 'Fazer um downcall para uma função da libc e tratar o caminho de erro.', evidence: 'Código versionado, teste do caminho feliz e do caminho de falha.' },
      { level: 'Expert', task: 'Vetorizar um loop numérico com a Vector API e medir o ganho contra o loop escalar no hardware alvo.', evidence: 'Benchmark JMH nos dois desenhos, com a conclusão — inclusive se for "não compensou".' }
    ],
    challenge: 'Escrever um leitor de um formato binário real (por exemplo, um cabeçalho de arquivo conhecido) com layout declarativo, zero cópia e liberação determinística de memória.',
    book: 'Optimizing Java, cap. 6–8 (memória, alocação e o custo da cópia); Core Java Vol. II (I/O, NIO e interoperabilidade da plataforma).',
    complements: [official.jep454, official.jep469, official.valhalla, official.api],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/ForeignMemoryAndVectors.java'
  },
  {
    number: 26,
    part: 'fronteira',
    id: 'ler-openjdk',
    title: 'Ler o OpenJDK: da dúvida ao código-fonte',
    level: 'Expert → fronteira',
    objective: 'Responder uma dúvida de comportamento da plataforma lendo a implementação no OpenJDK, e transformar o achado em reprodução mínima, teste ou relato de bug.',
    prerequisites: ['Módulos 21–23', 'Inglês técnico de leitura', 'Git e leitura de histórico de commits'],
    problem: 'Quase toda dúvida difícil de Java tem resposta definitiva em três lugares: a especificação, o código-fonte e o histórico de mudanças. A maioria das pessoas procura em um quarto lugar — posts de blog de 2014 — e herda conclusões erradas ou desatualizadas. Saber navegar a fonte é o que encerra a discussão.',
    concepts: ['Estrutura do repositório do OpenJDK e onde fica cada coisa', 'Ler `java.util.HashMap`, `ConcurrentHashMap`, `ArrayList` e `ForkJoinPool`', 'Especificação (JLS/JVMS) versus implementação', 'JBS: buscar um bug, ler a discussão e a decisão', 'O processo de JEP: draft, candidate, preview, final', 'jtreg e como um comportamento é travado por teste', 'Construir o JDK localmente'],
    internals: [
      'Nem tudo que a implementação faz é garantido: a especificação define o contrato, e detalhes como a ordem de iteração de um `HashMap` são implementação, não promessa.',
      '`HashMap` converte um bucket em árvore a partir de um limiar, o que muda o pior caso de O(n) para O(log n) — e isso é implementação, não contrato.',
      'Recursos em preview mudam entre releases justamente porque o processo de JEP reserva o direito de mudá-los; ler o JEP evita depender de API instável.',
      'Cada correção relevante costuma vir acompanhada de um teste jtreg que trava o comportamento — o teste é a melhor documentação do caso de borda.'
    ],
    useWhen: ['Use a fonte quando o comportamento observado contraria a documentação.', 'Use o JBS antes de reportar: quase sempre alguém já descreveu o caso.', 'Use o JEP quando precisar decidir se adota um recurso novo.'],
    avoidWhen: ['Não transforme detalhe de implementação em premissa de arquitetura.', 'Não copie otimização interna do JDK para código de aplicação sem medir.', 'Não abra bug sem reprodução mínima e sem checar a versão corrente.'],
    contrast: {
      bad: 'Afirmar em code review que "HashMap é O(n) no pior caso" com base em um artigo antigo, sem checar a implementação corrente.',
      good: 'Abrir o código, mostrar a conversão para árvore, citar a versão em que entrou e explicar por que continua sendo implementação e não contrato.'
    },
    tradeoffs: ['Ler a fonte dá certeza e custa tempo.', 'Conhecer a implementação melhora o diagnóstico e tenta a depender do que não é garantido.', 'Contribuir ensina muito e envolve processo, revisão e paciência.'],
    production: 'Um serviço apresenta latência anômala em um `ConcurrentHashMap` sob carga específica. A busca no JBS encontra um caso conhecido corrigido em uma versão posterior, com teste jtreg anexado. O time reproduz localmente com o teste, confirma o diagnóstico e resolve com atualização do JDK — em vez de reescrever a estrutura de dados.',
    risks: ['Ler versão diferente da que roda em produção', 'Confundir comentário desatualizado com comportamento atual', 'Generalizar detalhe específico de uma implementação da JVM', 'Gastar tempo em profundidade que o problema não exigia'],
    checklist: ['Estou lendo a mesma versão que roda em produção?', 'O comportamento é especificado ou é implementação?', 'Existe issue no JBS sobre isso?', 'Consigo reduzir a uma reprodução mínima?', 'O achado virou teste ou nota no repositório?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'A ordem de iteração de um `HashMap` é garantida?', expected: 'Não. É consequência da implementação e pode mudar entre versões; quem precisa de ordem usa `LinkedHashMap` ou `TreeMap`.' },
      { level: 'Sênior/Expert', question: 'Como você resolveria uma divergência de comportamento entre dois JDKs que ninguém do time consegue explicar?', expected: 'Reproduzir minimamente, comparar a especificação, ler a implementação nas duas versões, buscar no JBS e no histórico de commits, e concluir com evidência — não com tentativa e erro.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Ler a implementação de `HashMap` no JDK 21 e explicar a treeificação, o limiar e por que ele existe.', evidence: 'Nota técnica com trechos citados, link permanente e a diferença entre contrato e implementação.' },
      { level: 'Aplicado', task: 'Escolher uma dúvida real que você já teve, encontrar a resposta no código-fonte ou no JBS e escrever a conclusão.', evidence: 'Documento com a pergunta, o caminho até a fonte, a citação e a reprodução mínima.' },
      { level: 'Expert', task: 'Construir o OpenJDK localmente e executar um teste jtreg existente da área que você estudou.', evidence: 'Build concluído, teste executado e registro dos obstáculos encontrados.' }
    ],
    challenge: 'Escolher um caso de borda documentado do JDK, escrever a reprodução mínima, o teste que o trava e a explicação — no formato que um relato de bug exigiria.',
    book: 'Core Java Vol. I & II como mapa da plataforma antes de descer à fonte; Effective Java, cap. 3 e 5 (para separar contrato de implementação ao ler código alheio).',
    complements: [official.openjdkRepo, official.jbs, official.jep1, official.jls],
    exampleFile: '../../examples/java21-senior/src/dev/studyplan/javaexpert/ReadingTheJdk.java'
  }
];

export const javaAssessment = Object.freeze({
  levels: [
    {
      level: 'Júnior',
      expected: 'Explica conceitos, implementa caminho feliz e corrige falhas localizadas com orientação.',
      evidence: 'Código compilável, testes básicos e vocabulário correto.',
      redFlags: 'Memorização sem prever comportamento; solução sem teste.'
    },
    {
      level: 'Pleno',
      expected: 'Escolhe alternativas para um contexto, trata bordas e entrega componente testável/operável.',
      evidence: 'Trade-offs locais, integração real e diagnóstico básico.',
      redFlags: 'Framework como resposta universal; não mede impacto.'
    },
    {
      level: 'Sênior',
      expected: 'Conduz decisão sob restrições, antecipa falhas, coordena evolução e protege operação.',
      evidence: 'ADR, SLO, testes por risco, plano de rollout/rollback e análise causal.',
      redFlags: 'Otimização sem baseline; abstração sem eixo de mudança.'
    },
    {
      level: 'Expert',
      expected: 'Cria princípios e mecanismos reutilizáveis, limita complexidade e melhora decisões de múltiplas equipes.',
      evidence: 'Padrões validados, fitness functions, plataforma/runbooks e impacto medido.',
      redFlags: 'Complexidade como demonstração de status; decisão irreversível sem necessidade.'
    }
  ],
  caseStudies: [
    {
      id: 'checkout-concorrente',
      title: 'Checkout sob concorrência e falha parcial',
      scenario: 'Duas requisições disputam o último item; pagamento pode responder depois do deadline e eventos podem duplicar.',
      constraints: ['Sem transação distribuída', 'p99 < 800 ms', 'Não cobrar duas vezes', 'Reconciliação em até 5 min'],
      decisions: ['Lock/versão de estoque', 'Idempotência de pagamento', 'Outbox e consumidor idempotente', 'Deadline e compensação'],
      deliverables: ['Sequência de estados', 'Teste concorrente', 'ADR', 'SLO/dashboard', 'Runbook de reconciliação']
    },
    {
      id: 'latencia-jvm',
      title: 'Regressão de p99 após deploy',
      scenario: 'Média estável, p99 triplicado, CPU moderada e pausas ocasionais. O time quer trocar o collector imediatamente.',
      constraints: ['Produção com dados sensíveis', 'Rollback disponível por 30 min', '1 GiB de limite no container'],
      decisions: ['Sinais mínimos antes de mudar', 'JFR/GC log/thread dump', 'Separar heap, lock, pool e downstream', 'Canary e rollback'],
      deliverables: ['Árvore de hipóteses', 'Evidência coletada', 'Causa provável e limites', 'Guardrail de regressão']
    },
    {
      id: 'api-evolucao',
      title: 'Evolução de API com clientes antigos',
      scenario: 'Um novo requisito torna obrigatório um dado que clientes móveis antigos não enviam.',
      constraints: ['Sem forced update', 'Dois ciclos de compatibilidade', 'Auditoria do campo obrigatória'],
      decisions: ['Expand/contract', 'Default temporário seguro', 'Telemetria de versões', 'Deprecação'],
      deliverables: ['Contrato vCurrent/vNext', 'Testes de compatibilidade', 'Plano de rollout', 'Critério de remoção']
    },
    {
      id: 'monolito-extracao',
      title: 'Extrair ou não extrair faturamento',
      scenario: 'Módulo cresce, mas time e banco ainda são compartilhados. Um fornecedor propõe microsserviços como solução.',
      constraints: ['Equipe de seis pessoas', 'Deploy semanal', 'Baixa maturidade de observabilidade'],
      decisions: ['Métricas de acoplamento', 'Modularização antes da rede', 'Ownership de dados', 'Gatilhos de extração'],
      deliverables: ['C4 atual/alvo', 'ADR com opção de não extrair', 'Fitness functions', 'Plano reversível']
    },
    {
      id: 'seguranca-observabilidade',
      title: 'Incidente de credenciais e telemetria',
      scenario: 'Pico de tentativas de login, logs com dados excessivos e alerta apenas de CPU.',
      constraints: ['Não bloquear usuários legítimos', 'Retenção regulada', 'Resposta em 30 min'],
      decisions: ['Threat model', 'Rate limit/adaptive control', 'Redação de dados', 'SLIs e alertas acionáveis'],
      deliverables: ['Timeline', 'Mitigação', 'Consultas de telemetria', 'Postmortem e ações']
    }
  ],
  projects: [
    {
      id: 'ledger-modular',
      title: 'Projeto Sênior — Ledger de pagamentos modular',
      objective: 'Construir um monólito modular Java 21/Spring com contratos claros, consistência, observabilidade e evolução segura.',
      stages: [
        'Domínio imutável, Money, igualdade e máquina de estados.',
        'API idempotente, erros estáveis, persistence boundary e migrations.',
        'Optimistic locking, outbox e consumidor idempotente.',
        'Testes por risco, Testcontainers, contract tests e mutation gate.',
        'Métricas/traces, SLO, JFR baseline, threat model e runbook.',
        'Game day com duplicação, timeout e pressão de pool.'
      ],
      acceptance: ['Build reproduzível', 'ADRs conectados ao código', 'Zero efeito duplicado nos testes de falha', 'Dashboard e runbook executáveis', 'Relatório de performance com baseline'],
      seniorSignal: 'Entrega completa, trade-offs locais defensáveis e operação previsível.'
    },
    {
      id: 'commerce-platform',
      title: 'Projeto Expert — Plataforma de comércio evolutiva',
      objective: 'Evoluir o projeto anterior sob múltiplos times, cargas e contextos, provando quando manter módulos e quando extrair um serviço.',
      stages: [
        'Mapear bounded contexts, ownership e contratos.',
        'Criar fitness functions para dependências e compatibilidade.',
        'Implementar fan-out com Virtual Threads, deadlines e bulkheads.',
        'Modelar saga de pedido, reconciliação e schema evolution.',
        'Executar experimento G1/ZGC e investigação de p99 com JFR.',
        'Extrair um contexto via strangler somente se os gatilhos medidos forem satisfeitos.'
      ],
      acceptance: ['Decisão reversível e baseada em métricas', 'SLO/error budget por contexto', 'Segurança e observabilidade by design', 'Plano de capacity/custo', 'Architecture review gravável/repetível'],
      seniorSignal: 'Cria mecanismos reutilizáveis e reduz complexidade para mais de uma equipe.'
    }
  ],
  completion: [
    'Os 20 objetivos dos módulos 1–20 foram demonstrados por evidência, não apenas leitura.',
    'Os exemplos JDK 21 compilam com `javac --release 21 -Xlint:all` e o smoke test passa com assertions.',
    'Ao menos 40 exercícios foram concluídos, incluindo 20 aplicados e 5 expert.',
    'Os cinco casos foram defendidos com decisões, riscos, rollback e sinais.',
    'Um capstone atende aos critérios; o projeto Expert exige também impacto entre equipes.',
    'Nenhum módulo é marcado Dominado antes de evidência validada e revisão D30.',
    'Fronteira (módulos 21–26) é opcional para o gate sênior e obrigatória para reivindicar nível expert.',
    'Fronteira concluída exige: bytecode lido com previsão registrada, um agent próprio executado, uma medição refeita em JMH que contradiga uma conclusão anterior, um comparativo de startup entre pelo menos dois modos de execução e uma dúvida respondida pelo código-fonte do OpenJDK.'
  ]
});

/*
 * Gabarito de autoavaliação. Não substitui a evidência exigida pela rubrica: serve para o estudo
 * solo saber se a resposta estava certa antes de marcar o módulo como concluído.
 */
export const javaAnswerKey = javaModules.map((module) => ({
  module: module.number,
  title: module.title,
  objetivoAtingido: module.objective,
  respostaEsperadaNaEntrevista: module.interview.map((item) => `${item.level}: ${item.expected}`),
  erroMaisComum: module.contrast?.bad || module.risks?.[0] || 'Concluir sem medir.',
  criterioDeAceite: module.exercises.map((item) => `${item.level} — evidência: ${item.evidence}`),
  sinalDeQueNaoDominou: module.risks || []
}));

export const javaOfficialSources = Object.values(official);
