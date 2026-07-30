/*
 * ARQUITETURA ADVANCED — fonte única do aprofundamento sênior/expert da trilha
 * de Arquitetura de Solução e Integração.
 *
 * Conteúdo original, ancorado nos 12 livros locais (public/pdfs/livros-arquitetura)
 * e em fontes primárias oficiais registradas abaixo. Não contém transcrições.
 */

export const ARQ_RESEARCH_DATE = '2026-07-27';

const official = {
  c4: { label: 'C4 Model — Simon Brown', url: 'https://c4model.com/' },
  arc42: { label: 'arc42 — template de documentação', url: 'https://arc42.org/overview' },
  adr: { label: 'Architecture Decision Records (adr.github.io)', url: 'https://adr.github.io/' },
  fowler: { label: 'martinfowler.com — Software Architecture Guide', url: 'https://martinfowler.com/architecture/' },
  microservices: { label: 'microservices.io — Chris Richardson', url: 'https://microservices.io/patterns/index.html' },
  eip: { label: 'Enterprise Integration Patterns (catálogo)', url: 'https://www.enterpriseintegrationpatterns.com/patterns/messaging/' },
  twelvefactor: { label: 'The Twelve-Factor App', url: 'https://12factor.net/' },
  reactive: { label: 'The Reactive Manifesto', url: 'https://www.reactivemanifesto.org/' },
  awswa: { label: 'AWS Well-Architected Framework', url: 'https://aws.amazon.com/architecture/well-architected/' },
  openapi: { label: 'OpenAPI Specification', url: 'https://spec.openapis.org/oas/latest.html' },
  asyncapi: { label: 'AsyncAPI Specification', url: 'https://www.asyncapi.com/docs' },
  cloudevents: { label: 'CloudEvents Specification', url: 'https://cloudevents.io/' },
  problem: { label: 'RFC 9457 — Problem Details for HTTP APIs', url: 'https://www.rfc-editor.org/rfc/rfc9457' },
  raft: { label: 'Raft — In Search of an Understandable Consensus Algorithm', url: 'https://raft.github.io/' },
  ddd: { label: 'DDD Reference — Eric Evans', url: 'https://www.domainlanguage.com/ddd/reference/' },
  sre: { label: 'Google SRE Book', url: 'https://sre.google/sre-book/table-of-contents/' },
  otel: { label: 'OpenTelemetry', url: 'https://opentelemetry.io/docs/' },
  teamtopologies: { label: 'Team Topologies — recursos', url: 'https://teamtopologies.com/key-concepts' }
};

export const arquiteturaBooks = Object.freeze({
  fundamentals: {
    title: 'Fundamentals of Software Architecture',
    authors: 'Mark Richards e Neal Ford',
    edition: '1ª edição',
    year: '2020',
    language: 'Inglês',
    pages: 400,
    path: '/pdfs/livros-arquitetura/fundamentals-of-software-architecture.pdf',
    depth: 'Fundamental → sênior',
    prerequisites: 'Experiência com desenvolvimento e um sistema completo',
    structure: '24 capítulos: características arquiteturais, estilos, decisões, análise, diagramação e soft skills',
    limitations: 'Panorama amplo; cada estilo e tática exige aprofundamento em obra específica.'
  },
  'hard-parts': {
    title: 'Software Architecture: The Hard Parts',
    authors: 'Neal Ford, Mark Richards, Pramod Sadalage e Zhamak Dehghani',
    edition: '1ª edição',
    year: '2021',
    language: 'Inglês',
    pages: 464,
    path: '/pdfs/livros-arquitetura/software-architecture-the-hard-parts.pdf',
    depth: 'Sênior → expert',
    prerequisites: 'Fundamentos de arquitetura, dados distribuídos e microsserviços',
    structure: 'Decomposição, granularidade, dados distribuídos, contratos, saga e trade-off analysis',
    limitations: 'Assume decisão de distribuir; foco em trade-offs difíceis, não em introdução.'
  },
  ddd: {
    title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
    authors: 'Eric Evans',
    edition: '1ª edição',
    year: '2003',
    language: 'Inglês',
    pages: 560,
    path: '/pdfs/livros-arquitetura/domain-driven-design.pdf',
    depth: 'Fundamental → expert',
    prerequisites: 'OO, modelagem e colaboração com domínio de negócio',
    structure: 'Quatro partes: linguagem ubíqua, blocos táticos, refatoração profunda e design estratégico',
    limitations: 'Denso e anterior a microsserviços; conceitos permanecem, exemplos são datados.'
  },
  iddd: {
    title: 'Implementing Domain-Driven Design',
    authors: 'Vaughn Vernon',
    edition: '1ª edição',
    year: '2013',
    language: 'Inglês',
    pages: 656,
    path: '/pdfs/livros-arquitetura/implementing-domain-driven-design.pdf',
    depth: 'Intermediário → sênior',
    prerequisites: 'DDD conceitual e programação em camadas',
    structure: 'Contextos, agregados, eventos de domínio, arquitetura hexagonal, CQRS e integração',
    limitations: 'Foca implementação em stack específica; princípios são portáveis.'
  },
  eip: {
    title: 'Enterprise Integration Patterns',
    authors: 'Gregor Hohpe e Bobby Woolf',
    edition: '1ª edição',
    year: '2003',
    language: 'Inglês',
    pages: 736,
    path: '/pdfs/livros-arquitetura/enterprise-integration-patterns.pdf',
    depth: 'Fundamental → expert',
    prerequisites: 'Mensageria, filas e integração entre sistemas',
    structure: '65 padrões: canais, mensagens, roteamento, transformação, endpoints e gestão',
    limitations: 'Vocabulário anterior ao Kafka/streaming; os padrões seguem atuais e agnósticos.'
  },
  ddia: {
    title: 'Designing Data-Intensive Applications',
    authors: 'Martin Kleppmann',
    edition: '1ª edição',
    year: '2017',
    language: 'Inglês',
    pages: 616,
    path: '/pdfs/livros-arquitetura/designing-data-intensive-applications.pdf',
    depth: 'Sênior → expert',
    prerequisites: 'Bancos, concorrência e sistemas distribuídos básicos',
    structure: '12 capítulos: modelos, storage, encoding, replicação, particionamento, transações e consenso',
    limitations: 'Referência de fundamentos de dados; não cobre estilos de arquitetura de aplicação.'
  },
  'building-microservices': {
    title: 'Building Microservices',
    authors: 'Sam Newman',
    edition: '2ª edição',
    year: '2021',
    language: 'Inglês',
    pages: 612,
    path: '/pdfs/livros-arquitetura/building-microservices.pdf',
    depth: 'Intermediário → sênior',
    prerequisites: 'Serviços, HTTP, mensageria e deploy',
    structure: 'Modelagem, integração, workflow, build, deploy, testes, observabilidade e escala organizacional',
    limitations: 'Assume interesse em microsserviços; deve ser lido junto ao caso de não distribuir.'
  },
  'monolith-to-microservices': {
    title: 'Monolith to Microservices',
    authors: 'Sam Newman',
    edition: '1ª edição',
    year: '2019',
    language: 'Inglês',
    pages: 272,
    path: '/pdfs/livros-arquitetura/monolith-to-microservices.pdf',
    depth: 'Intermediário → sênior',
    prerequisites: 'Um monólito real e pressão de evolução',
    structure: 'Padrões de migração incremental: strangler fig, decomposição de banco e transações',
    limitations: 'Foco em migração; não substitui a decisão estratégica de distribuir.'
  },
  'release-it': {
    title: 'Release It! Design and Deploy Production-Ready Software',
    authors: 'Michael T. Nygard',
    edition: '2ª edição',
    year: '2018',
    language: 'Inglês',
    pages: 376,
    path: '/pdfs/livros-arquitetura/release-it.pdf',
    depth: 'Fundamental → sênior',
    prerequisites: 'Sistemas em produção e operação básica',
    structure: 'Antipadrões e padrões de estabilidade, capacidade, deploy, controle e adaptação',
    limitations: 'Foco em estabilidade e operação; não aborda modelagem de domínio.'
  },
  'sdi-1': {
    title: 'System Design Interview — Volume 1',
    authors: 'Alex Xu',
    edition: '1ª edição',
    year: '2020',
    language: 'Inglês',
    pages: 322,
    path: '/pdfs/livros-arquitetura/system-design-interview-volume-1.pdf',
    depth: 'Intermediário → sênior',
    prerequisites: 'Cache, filas, bancos e balanceamento',
    structure: 'Framework de entrevista e estudos: rate limiter, feed, chat, busca e armazenamento',
    limitations: 'Otimizado para entrevista; simplifica restrições reais de operação.'
  },
  'sdi-2': {
    title: 'System Design Interview — Volume 2',
    authors: 'Alex Xu e Sahn Lam',
    edition: '1ª edição',
    year: '2022',
    language: 'Inglês',
    pages: 648,
    path: '/pdfs/livros-arquitetura/system-design-interview-volume-2.pdf',
    depth: 'Sênior',
    prerequisites: 'Volume 1 e fundamentos de dados distribuídos',
    structure: 'Casos avançados: pagamentos, hotel, métricas, notificações, ad click e near-cache',
    limitations: 'Continuação em profundidade; mantém o viés de formato de entrevista.'
  },
  'team-topologies': {
    title: 'Team Topologies',
    authors: 'Matthew Skelton e Manuel Pais',
    edition: '1ª edição',
    year: '2019',
    language: 'Inglês',
    pages: 240,
    path: '/pdfs/livros-arquitetura/team-topologies.pdf',
    depth: 'Sênior → liderança',
    prerequisites: 'Lei de Conway e experiência com times de software',
    structure: 'Quatro tipos de time, três modos de interação, carga cognitiva e fluxo de valor',
    limitations: 'Foco organizacional; complementa, não substitui, a arquitetura técnica.'
  }
});

export const arquiteturaAcademy = Object.freeze({
  title: 'Academia de Arquitetura',
  baseline: 'Decisões agnósticas de fornecedor, com trade-offs explícitos e evidência auditável',
  book: 'Fundamentals of Software Architecture (Richards & Ford) como espinha dorsal; obras específicas por tema',
  parts: {
    fundamentos: {
      index: '1/5',
      range: 'Módulos 1–5',
      title: 'Fundamentos e design',
      subtitle: 'Natureza da arquitetura, atributos de qualidade, estilos, modularidade e documentação viva.',
      prerequisites: [
        'Ter construído e mantido pelo menos um sistema completo em produção.',
        'Ler diagramas simples e um contrato de API HTTP.',
        'Distinguir requisitos funcionais de não funcionais.'
      ],
      objectives: [
        'Tratar arquitetura como conjunto de decisões difíceis de reverter, não como desenho.',
        'Derivar características arquiteturais priorizadas a partir de requisitos e restrições.',
        'Escolher um estilo arquitetural pelas forças que ele privilegia, não por moda.',
        'Medir acoplamento e coesão e proteger fronteiras com fitness functions e ADRs.'
      ]
    },
    estrategico: {
      index: '2/5',
      range: 'Módulos 6–9',
      title: 'Domínio e integração',
      subtitle: 'DDD estratégico e tático, decomposição em serviços e integração corporativa por mensagens.',
      prerequisites: [
        'Dominar os módulos 1–5 ou demonstrar equivalência no diagnóstico.',
        'Ter colaborado com especialistas de domínio de negócio.',
        'Conhecer HTTP, filas e o básico de transações.'
      ],
      objectives: [
        'Descobrir bounded contexts e mapear relações entre eles com context mapping.',
        'Modelar agregados como limites de consistência e emitir eventos de domínio.',
        'Decidir entre monólito modular e microsserviços por acoplamento, dados e capacidade.',
        'Escolher integração síncrona ou assíncrona e proteger contratos entre sistemas.'
      ]
    },
    distribuidos: {
      index: '3/5',
      range: 'Módulos 10–14',
      title: 'Sistemas distribuídos e dados',
      subtitle: 'CAP e falha parcial, dados intensivos, consistência, resiliência e escala mensurável.',
      prerequisites: [
        'Dominar decomposição e limites de serviço da parte anterior.',
        'Entender bancos relacionais, índices e concorrência básica.',
        'Saber ler métricas de latência, throughput e erro.'
      ],
      objectives: [
        'Raciocinar sobre CAP, consistência, tempo e falha parcial sem ilusões de rede confiável.',
        'Escolher replicação e particionamento conforme o padrão de leitura e escrita.',
        'Garantir consistência com saga, outbox e idempotência sem transação distribuída.',
        'Aplicar padrões de estabilidade e escalar por evidência, não por suposição.'
      ]
    },
    evolucao: {
      index: '4/5',
      range: 'Módulos 15–18',
      title: 'Evolução, operação e organização',
      subtitle: 'Migração incremental, observabilidade, segurança arquitetural e topologias de time.',
      prerequisites: [
        'Dominar dados distribuídos e resiliência da parte anterior.',
        'Ter operado ou acompanhado um incidente real de produção.',
        'Conhecer conceitos básicos de segurança de aplicações.'
      ],
      objectives: [
        'Planejar migração incremental com strangler fig e reversibilidade.',
        'Definir SLOs, telemetria e prontidão operacional como parte da arquitetura.',
        'Modelar ameaças, isolamento e multi-tenancy antes do incidente.',
        'Alinhar fronteiras de software a topologias de time e governança evolutiva.'
      ]
    },
    avaliacao: {
      index: '5/5',
      range: 'Evidência',
      title: 'Avaliação, casos e capstones',
      subtitle: 'Rubricas por senioridade, estudos de caso, projetos e biblioteca técnica rastreável.',
      prerequisites: [
        'Concluir os exercícios aplicados dos módulos relacionados ao caso escolhido.',
        'Manter ADRs, diagramas e métricas versionados no repositório.',
        'Aceitar architecture review baseado em evidência, não em conclusão funcional.'
      ],
      objectives: [
        'Resolver casos ambíguos justificando trade-offs sob restrições reais.',
        'Produzir um portfólio auditável com C4, ADRs, contratos e fitness functions.',
        'Demonstrar diagnóstico de falha e um caminho de evolução reversível.',
        'Responder entrevistas de arquitetura com critérios de correção transparentes.'
      ]
    }
  }
});

export const arquiteturaModules = [
  {
    number: 1,
    part: 'fundamentos',
    id: 'natureza-arquitetura',
    title: 'A natureza da arquitetura: decisões, trade-offs e restrições',
    level: 'Base sênior',
    objective: 'Explicar arquitetura como o conjunto de decisões estruturais caras de reverter e conduzir cada uma por trade-offs explícitos em vez de preferência pessoal.',
    prerequisites: ['Um sistema completo mantido', 'Leitura de diagramas', 'Noção de requisitos'],
    problem: 'Equipes tratam arquitetura como desenho bonito ou escolha de framework. Decisões estruturais são tomadas por hábito, hype ou conforto, e o custo aparece meses depois como acoplamento irreversível e reescrita.',
    concepts: ['Decisão estrutural vs detalhe de implementação', 'Trade-off como essência da arquitetura', 'Restrições de negócio, técnicas e organizacionais', 'Arquitetura implícita vs deliberada', 'Custo de reversão e o "último momento responsável"'],
    internals: ['Toda decisão arquitetural remove opções futuras; o valor está em quais opções vale a pena preservar.', 'Não existe melhor arquitetura, apenas a menos ruim para um conjunto priorizado de forças.', 'A lei de Conway faz a estrutura de comunicação da organização vazar para a estrutura do sistema.'],
    useWhen: ['Torne a decisão explícita quando ela for cara de reverter ou cruzar fronteiras de equipe.', 'Adie a decisão até o último momento responsável quando faltar informação.', 'Documente a força que a decisão privilegia e a que ela sacrifica.'],
    avoidWhen: ['Não trate escolha de biblioteca trocável como decisão arquitetural.', 'Não decida por "todo mundo usa" sem mapear a força relevante.', 'Não persiga uma arquitetura ideal ignorando restrição de prazo e time.'],
    contrast: {
      bad: 'Adotar microsserviços e Kafka no dia zero porque o mercado usa, sem escala nem time para operar.',
      good: 'Registrar em ADR que o monólito modular é escolhido por simplicidade operacional, com gatilhos medidos para reconsiderar.'
    },
    tradeoffs: ['Decisão cedo dá clareza e cobra opções perdidas se estiver errada.', 'Adiar preserva opções e cobra ambiguidade temporária.', 'Documentar custa tempo e economiza retrabalho e discussão circular.'],
    production: 'Um serviço distribui transações antes de existir domínio estável; cada mudança agora exige coordenação entre times. O exercício reconstrói a decisão como ADR com trade-offs e um caminho de recuo.',
    risks: ['Arquitetura acidental por omissão', 'Resume-driven development', 'Decisão irreversível sem necessidade', 'Ignorar a lei de Conway'],
    checklist: ['Que força esta decisão privilegia?', 'O que ela torna mais difícil?', 'É cara de reverter?', 'Poderia ser adiada com segurança?', 'Está registrada e visível para os afetados?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual a diferença entre arquitetura e design?', expected: 'Arquitetura reúne decisões estruturais caras de mudar; design são escolhas locais e reversíveis dentro dessas fronteiras.' },
      { level: 'Sênior/Expert', question: 'Por que não existe a melhor arquitetura?', expected: 'Porque cada estilo privilegia certas características e sacrifica outras; a escolha depende das forças priorizadas, das restrições e do custo de reversão.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Listar dez decisões de um sistema e classificar cada uma como arquitetural ou detalhe.', evidence: 'Tabela com justificativa de custo de reversão.' },
      { level: 'Aplicado', task: 'Escrever um ADR para uma decisão real explicitando força privilegiada e sacrificada.', evidence: 'ADR no formato padrão versionado.' },
      { level: 'Expert', task: 'Reavaliar uma decisão antiga com base em novas restrições e propor recuo reversível.', evidence: 'ADR de superseção com gatilhos medidos.' }
    ],
    challenge: 'Conduzir um architecture review de 30 minutos defendendo por que NÃO distribuir um módulo, com trade-offs e critérios de reconsideração.',
    book: 'Fundamentals of Software Architecture, cap. 1–3 (definição, pensamento arquitetural e trade-offs).',
    complements: [official.fowler, official.adr],
    exampleFile: '../../examples/arquitetura-senior/README.md'
  },
  {
    number: 2,
    part: 'fundamentos',
    id: 'atributos-qualidade',
    title: 'Atributos de qualidade e requisitos arquiteturalmente significativos',
    level: 'Base sênior',
    objective: 'Extrair de requisitos e restrições um conjunto priorizado e mensurável de atributos de qualidade que dirige o desenho, evitando otimizar tudo ao mesmo tempo.',
    prerequisites: ['Módulo 1', 'Requisitos funcionais e não funcionais', 'Noção de métricas'],
    problem: 'Requisitos não funcionais aparecem como adjetivos vagos: "rápido", "escalável", "seguro". Sem cenários mensuráveis, ninguém sabe se a arquitetura atende, e decisões conflitantes são tomadas em silêncio.',
    concepts: ['Características operacionais, estruturais e transversais', 'Cenários de atributo de qualidade (estímulo, resposta, medida)', 'Requisito arquiteturalmente significativo (ASR)', 'Priorização e conflito entre atributos', 'Do adjetivo à métrica: p99, RTO/RPO, MTTR'],
    internals: ['Atributos competem entre si: disponibilidade e consistência, performance e simplicidade, segurança e usabilidade.', 'Um atributo só é acionável quando vira cenário mensurável com estímulo, resposta esperada e medida.', 'Poucos atributos realmente dirigem a arquitetura; a maioria é secundária e não deve custar decisões estruturais.'],
    useWhen: ['Traduza cada requisito não funcional em um cenário mensurável antes de projetar.', 'Priorize explicitamente os três a cinco atributos que dirigem a estrutura.', 'Use os atributos como critério de avaliação de alternativas.'],
    avoidWhen: ['Não tente maximizar todos os atributos simultaneamente.', 'Não aceite "tem que ser escalável" sem número e contexto.', 'Não trate segurança ou observabilidade como item opcional de backlog.'],
    contrast: {
      bad: 'Requisito diz "o sistema deve ser altamente disponível" e a equipe assume 99,999% sem custo nem medida.',
      good: 'Cenário define 99,9% mensal, RTO de 15 min e degradação graciosa de leitura durante falha do banco primário.'
    },
    tradeoffs: ['Mais disponibilidade cobra redundância, custo e complexidade operacional.', 'Consistência forte cobra latência e disponibilidade sob partição.', 'Alta configurabilidade cobra simplicidade e clareza.'],
    production: 'Um checkout promete consistência forte e alta disponibilidade global e falha sob partição de rede. O exercício reescreve os atributos como cenários priorizados e escolhe onde ceder consistência.',
    risks: ['Requisito não funcional implícito', 'Atributo sem métrica', 'Otimização prematura de tudo', 'Ignorar conflito entre atributos'],
    checklist: ['O atributo tem estímulo, resposta e medida?', 'Qual a prioridade relativa dele?', 'Com qual outro atributo ele conflita?', 'Como vou medir em produção?', 'A estrutura reflete essa prioridade?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Como você transforma "o sistema precisa ser rápido" em um requisito útil?', expected: 'Definir cenário mensurável: qual operação, sob qual carga, com qual p95/p99 aceitável e em qual contexto.' },
      { level: 'Sênior/Expert', question: 'Como você prioriza atributos que conflitam entre si?', expected: 'Mapear as forças de negócio, escolher os poucos atributos dirigentes, explicitar o que se sacrifica e registrar a decisão com cenários.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Converter cinco requisitos vagos em cenários de atributo de qualidade mensuráveis.', evidence: 'Tabela estímulo/resposta/medida.' },
      { level: 'Aplicado', task: 'Priorizar os atributos de um sistema real e apontar os conflitos.', evidence: 'Matriz de priorização com justificativa.' },
      { level: 'Expert', task: 'Derivar uma decisão estrutural a partir do atributo dominante e provar o atendimento.', evidence: 'ADR ligado a um teste ou métrica.' }
    ],
    challenge: 'Produzir a folha de características arquiteturais de um sistema, com no máximo cinco atributos dirigentes justificados e mensuráveis.',
    book: 'Fundamentals of Software Architecture, cap. 4–5 (características arquiteturais e identificação).',
    complements: [official.awswa, official.sre],
    exampleFile: '../../examples/arquitetura-senior/adr/0002-quality-attributes.md'
  },
  {
    number: 3,
    part: 'fundamentos',
    id: 'estilos-arquiteturais',
    title: 'Estilos arquiteturais e táticas de design',
    level: 'Base sênior → sênior',
    objective: 'Escolher um estilo arquitetural pela combinação de forças que ele privilegia e comparar alternativas com uma análise de trade-offs, não por familiaridade.',
    prerequisites: ['Módulos 1–2', 'Atributos de qualidade priorizados', 'Camadas e componentes'],
    problem: 'Estilos viram rótulo: "usamos camadas", "somos event-driven". Sem entender o que cada estilo otimiza e cobra, a equipe herda dores estruturais que poderiam ter sido previstas.',
    concepts: ['Monolítico em camadas e modular monolith', 'Pipeline e microkernel (plugin)', 'Baseado em serviços vs microsserviços', 'Event-driven (broker e mediator)', 'Space-based e orientado a espaço para escala extrema'],
    internals: ['Cada estilo é um conjunto de decisões pré-empacotadas: define fluxo de controle, granularidade de deploy e topologia de dados.', 'Estilos monolíticos privilegiam simplicidade e cobram escalabilidade granular; distribuídos invertem isso.', 'Event-driven melhora desacoplamento e responsividade e cobra rastreabilidade, ordenação e complexidade de fluxo.'],
    useWhen: ['Camadas/modular monolith como default para domínio em descoberta e time único.', 'Event-driven quando responsividade, desacoplamento temporal e picos irregulares dominam.', 'Microkernel quando o núcleo é estável e a variação vive em plugins.'],
    avoidWhen: ['Não adote microsserviços sem escala, autonomia de time e capacidade operacional.', 'Não use event-driven onde o fluxo é essencialmente síncrono e transacional.', 'Não misture estilos sem uma fronteira clara entre eles.'],
    contrast: {
      bad: 'Escolher microsserviços "para escalar" um sistema com dez usuários e um time de quatro pessoas.',
      good: 'Adotar modular monolith com módulos de ownership claro e um caminho de extração medido para o futuro.'
    },
    tradeoffs: ['Monólito simplifica deploy/transação e limita escala e deploy independentes.', 'Microsserviços dão autonomia e cobram rede, dados distribuídos e operação.', 'Event-driven desacopla e dificulta depuração e garantias de ordem.'],
    production: 'Um sistema event-driven perde eventos e ninguém consegue reconstruir o fluxo de uma transação. O exercício compara broker vs mediator e adiciona rastreabilidade e reprocessamento.',
    risks: ['Estilo como moda', 'Distributed monolith', 'Event-driven sem observabilidade', 'Big ball of mud em camadas'],
    checklist: ['Que forças este estilo privilegia?', 'Qual característica ele sacrifica?', 'O time consegue operá-lo?', 'A granularidade de deploy é necessária?', 'Comparei ao menos duas alternativas?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Quando um monólito em camadas é uma boa escolha?', expected: 'Quando o domínio ainda é descoberto, o time é único e simplicidade de deploy e transação vale mais que escala independente.' },
      { level: 'Sênior/Expert', question: 'Compare event-driven com estilo em camadas para um sistema de pedidos.', expected: 'Discutir desacoplamento temporal, responsividade e picos contra rastreabilidade, ordenação e complexidade, e amarrar à priorização de atributos.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Mapear três sistemas conhecidos ao seu estilo predominante e às forças que ele otimiza.', evidence: 'Quadro estilo/força/custo.' },
      { level: 'Aplicado', task: 'Escolher um estilo para um caso dado e justificar com atributos priorizados.', evidence: 'ADR comparando duas alternativas.' },
      { level: 'Expert', task: 'Projetar uma fronteira que combine dois estilos sem criar acoplamento oculto.', evidence: 'Diagrama de componentes e contrato entre estilos.' }
    ],
    challenge: 'Fazer uma análise de trade-offs comparando três estilos para um mesmo requisito e defender a escolha em uma página.',
    book: 'Fundamentals of Software Architecture, cap. 9–18 (estilos arquiteturais).',
    complements: [official.reactive, official.microservices],
    exampleFile: '../../examples/arquitetura-senior/README.md'
  },
  {
    number: 4,
    part: 'fundamentos',
    id: 'modularidade-acoplamento',
    title: 'Modularidade, acoplamento, coesão e fitness functions',
    level: 'Sênior',
    objective: 'Medir acoplamento e coesão de forma explícita e proteger as fronteiras arquiteturais com fitness functions automatizadas, transformando arquitetura em algo verificável.',
    prerequisites: ['Módulos 1–3', 'Componentes e dependências', 'Testes automatizados'],
    problem: 'Fronteiras arquiteturais existem só no diagrama. No código, tudo importa tudo, e a arquitetura apodrece sem que ninguém perceba até a próxima grande dor.',
    concepts: ['Acoplamento aferente e eferente e a métrica de instabilidade', 'Coesão funcional vs coincidental', 'Conectância e efeito dominó', 'Arquitetura evolutiva e fitness functions', 'Fronteiras verificáveis em build/CI'],
    internals: ['Acoplamento não é bom nem ruim; é dívida direcional que deve apontar para abstrações estáveis.', 'Uma fitness function é um teste que falha o build quando uma característica arquitetural é violada.', 'Coesão alta reduz a superfície de mudança; baixa coesão espalha uma alteração por muitos módulos.'],
    useWhen: ['Meça dependências entre módulos e imponha a direção permitida em CI.', 'Crie fitness function para regras que você não quer descobrir violadas em produção.', 'Refatore em direção a coesão funcional quando uma mudança tocar módulos demais.'],
    avoidWhen: ['Não crie abstração sem um eixo real de variação.', 'Não confie em revisão manual para preservar fronteira que muda toda semana.', 'Não persiga acoplamento zero: integração exige alguma dependência.'],
    contrast: {
      bad: 'Documento diz "camada de domínio não depende de infraestrutura" e o código importa o cliente de banco direto no domínio.',
      good: 'Teste de arquitetura falha o build se o pacote de domínio importar qualquer pacote de infraestrutura.'
    },
    tradeoffs: ['Fronteiras rígidas dão proteção e cobram cerimônia e indireção.', 'Fitness functions dão garantia contínua e cobram manutenção do teste.', 'Alta modularidade melhora evolução e pode fragmentar o entendimento.'],
    production: 'Uma mudança simples de preço exige alterar seis módulos porque a regra vazou para todos. O exercício mede o acoplamento, recompõe a coesão e adiciona uma fitness function de dependência.',
    risks: ['Fronteira só no diagrama', 'Dependência cíclica', 'Abstração especulativa', 'Erosão arquitetural silenciosa'],
    checklist: ['Qual a direção permitida de dependência?', 'Ela é verificada automaticamente?', 'A coesão do módulo é funcional?', 'Existe ciclo entre módulos?', 'A abstração tem eixo de variação real?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual a diferença entre acoplamento e coesão?', expected: 'Acoplamento mede dependência entre módulos; coesão mede quão relacionadas estão as responsabilidades dentro de um módulo. Busca-se baixo acoplamento e alta coesão.' },
      { level: 'Sênior/Expert', question: 'O que é uma fitness function e por que ela importa?', expected: 'É um teste objetivo que verifica uma característica arquitetural continuamente; transforma regras de fronteira em garantias executáveis que impedem erosão.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Calcular instabilidade (Ce/(Ca+Ce)) de três módulos e interpretar.', evidence: 'Planilha com direção de dependência.' },
      { level: 'Aplicado', task: 'Escrever uma fitness function que proíba dependência do domínio para a infraestrutura.', evidence: 'Teste de arquitetura passando no CI.' },
      { level: 'Expert', task: 'Detectar e quebrar um ciclo de dependência preservando o comportamento.', evidence: 'Antes/depois com teste e ADR.' }
    ],
    challenge: 'Adicionar ao pipeline um conjunto de fitness functions que trave build ao violar camadas, ciclos e limites de tamanho de módulo.',
    book: 'Fundamentals of Software Architecture, cap. 3 e 6–8 (modularidade, acoplamento, componentes).',
    complements: [official.fowler, official.twelvefactor],
    exampleFile: '../../examples/arquitetura-senior/README.md'
  },
  {
    number: 5,
    part: 'fundamentos',
    id: 'documentacao-c4-adr',
    title: 'Documentação viva: C4, arc42, views e ADRs',
    level: 'Sênior',
    objective: 'Comunicar arquitetura em múltiplos níveis de abstração com C4 e registrar decisões com ADRs, mantendo documentação que sobrevive à evolução sem virar ficção.',
    prerequisites: ['Módulos 1–4', 'Diagramas básicos', 'Controle de versão'],
    problem: 'A documentação é um PowerPoint desatualizado ou um diagrama que ninguém confia. Decisões importantes só existem na cabeça de quem saiu da empresa.',
    concepts: ['Os quatro níveis do C4: contexto, contêiner, componente, código', 'arc42 como estrutura de documento', 'Múltiplas views para múltiplas audiências', 'ADR: contexto, decisão, consequências, status', 'Diagram-as-code e documentação versionada'],
    internals: ['Diagramas úteis escolhem um nível de abstração e uma audiência por vez, em vez de misturar tudo.', 'ADR captura o porquê de uma decisão, que é justamente o que se perde com o tempo.', 'Documentação sobrevive quando mora junto do código, versionada e gerada quando possível.'],
    useWhen: ['Use C4 nível 1–2 para conversar com negócio e times vizinhos.', 'Escreva um ADR sempre que uma decisão for cara de reverter ou surpreender alguém.', 'Gere diagramas a partir de código/texto para reduzir o custo de manter atualizados.'],
    avoidWhen: ['Não crie um único diagrama tentando mostrar todos os detalhes.', 'Não documente o óbvio nem detalhe reversível que muda toda semana.', 'Não deixe a documentação fora do fluxo de versionamento.'],
    contrast: {
      bad: 'Um diagrama gigante com cinquenta caixas, sem legenda, atualizado pela última vez há dois anos.',
      good: 'C4 em quatro níveis versionado no repositório, com ADRs numerados explicando cada decisão relevante.'
    },
    tradeoffs: ['Mais documentação melhora onboarding e cobra manutenção.', 'Diagram-as-code reduz desatualização e exige disciplina de ferramenta.', 'ADRs preservam contexto e adicionam ritual de escrita.'],
    production: 'Um time novo herda um sistema sem contexto e reintroduz um erro que já tinha sido resolvido e descartado. O exercício reconstrói o histórico como ADRs e um C4 confiável.',
    risks: ['Documentação-ficção', 'Diagrama sem nível de abstração', 'Decisão sem registro', 'Doc fora do versionamento'],
    checklist: ['Qual audiência e nível de abstração?', 'A decisão tem contexto e consequências?', 'O diagrama tem legenda e é atual?', 'A doc está versionada com o código?', 'É possível gerar em vez de desenhar à mão?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Quais são os níveis do modelo C4?', expected: 'Contexto (sistema no ambiente), Contêiner (aplicações e datastores), Componente (blocos internos) e Código (opcional, detalhe de classes).' },
      { level: 'Sênior/Expert', question: 'Por que registrar ADRs em vez de só desenhar a arquitetura final?', expected: 'Porque o diagrama mostra o "o quê" e perde o "porquê"; o ADR preserva contexto, alternativas e consequências, evitando repetir erros e permitindo revisão consciente.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Desenhar os níveis 1 e 2 do C4 para um sistema existente.', evidence: 'Dois diagramas com legenda.' },
      { level: 'Aplicado', task: 'Escrever três ADRs para decisões reais no formato contexto/decisão/consequências.', evidence: 'ADRs numerados versionados.' },
      { level: 'Expert', task: 'Configurar diagram-as-code gerando o C4 a partir de texto no pipeline.', evidence: 'Diagramas gerados no build.' }
    ],
    challenge: 'Montar o dossiê de arquitetura de um sistema: C4 (níveis 1–3), pasta de ADRs e uma view de deployment, tudo versionado.',
    book: 'Fundamentals of Software Architecture, cap. 19 e 21 (diagramação e apresentação); arc42.',
    complements: [official.c4, official.arc42, official.adr],
    exampleFile: '../../examples/arquitetura-senior/c4/context.md'
  },
  {
    number: 6,
    part: 'estrategico',
    id: 'ddd-estrategico',
    title: 'DDD estratégico: bounded contexts, context mapping e linguagem ubíqua',
    level: 'Sênior',
    objective: 'Descobrir fronteiras de domínio pelos significados da linguagem de negócio e mapear as relações entre contextos, evitando um modelo único que serve mal a todos.',
    prerequisites: ['Módulos 1–5', 'Colaboração com domínio', 'Modelagem básica'],
    problem: 'Um modelo canônico tenta representar "Cliente" ou "Produto" para toda a empresa e vira um monstro acoplado onde nenhuma mudança é segura e nenhum time é dono.',
    concepts: ['Domínio, subdomínios core, supporting e generic', 'Bounded context e linguagem ubíqua', 'Context mapping: partnership, customer-supplier, conformist, ACL', 'Anti-corruption layer', 'Fronteira de contexto vs fronteira de serviço'],
    internals: ['A mesma palavra tem significados diferentes em contextos diferentes; forçar um único modelo cria acoplamento semântico.', 'O bounded context define onde um modelo e sua linguagem são consistentes e válidos.', 'O context map explicita poder e dependência entre times, não só entre sistemas.'],
    useWhen: ['Separe contextos onde a linguagem ou as regras do mesmo termo divergem.', 'Use anti-corruption layer para se proteger de um modelo externo ou legado ruim.', 'Invista modelagem profunda apenas no subdomínio core que diferencia o negócio.'],
    avoidWhen: ['Não crie um modelo canônico único para toda a organização.', 'Não modele em profundidade um subdomínio genérico que se compra pronto.', 'Não confunda fronteira de contexto com tabela ou microsserviço automático.'],
    contrast: {
      bad: 'Uma entidade "Cliente" com quarenta campos usada por vendas, cobrança, logística e suporte ao mesmo tempo.',
      good: 'Contextos de Vendas, Cobrança e Logística, cada um com seu modelo de cliente e integração por contrato explícito.'
    },
    tradeoffs: ['Múltiplos modelos reduzem acoplamento e cobram tradução entre contextos.', 'ACL protege o núcleo e adiciona código de fronteira.', 'Foco no core aprofunda valor e exige aceitar simplicidade no resto.'],
    production: 'Uma mudança na regra de cobrança quebra logística porque ambos compartilham a mesma entidade. O exercício separa os contextos e introduz um anti-corruption layer.',
    risks: ['Modelo canônico', 'Linguagem ambígua', 'Contexto sem dono', 'Vazamento de modelo externo'],
    checklist: ['O termo significa o mesmo em todo o modelo?', 'Onde a linguagem muda?', 'Quem é dono deste contexto?', 'Qual a relação com contextos vizinhos?', 'Preciso de ACL na fronteira?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que é um bounded context?', expected: 'A fronteira dentro da qual um modelo de domínio e sua linguagem ubíqua são consistentes e válidos; fora dela os termos podem significar outra coisa.' },
      { level: 'Sênior/Expert', question: 'Como o context mapping ajuda a decidir integração entre times?', expected: 'Ele explicita a relação de poder e dependência (customer-supplier, conformist, ACL), orientando contratos, anti-corruption layers e a autonomia possível entre equipes.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Identificar três bounded contexts em um domínio e a linguagem ubíqua de cada um.', evidence: 'Glossário por contexto.' },
      { level: 'Aplicado', task: 'Desenhar o context map de um sistema real com os tipos de relação.', evidence: 'Diagrama de context mapping.' },
      { level: 'Expert', task: 'Projetar um anti-corruption layer contra um legado e definir seu contrato.', evidence: 'Interface de ACL e casos de tradução.' }
    ],
    challenge: 'Facilitar um event storming e produzir o context map com core/supporting/generic e a estratégia de integração de cada fronteira.',
    book: 'Domain-Driven Design (Evans), parte IV (design estratégico); Implementing DDD, cap. 2–3.',
    complements: [official.ddd, official.fowler],
    exampleFile: '../../examples/arquitetura-senior/README.md'
  },
  {
    number: 7,
    part: 'estrategico',
    id: 'ddd-tatico',
    title: 'DDD tático: agregados, entidades, value objects e domain events',
    level: 'Sênior',
    objective: 'Modelar um domínio com agregados como limites de consistência, proteger invariantes na fronteira do agregado e comunicar mudanças com eventos de domínio.',
    prerequisites: ['Módulo 6', 'OO e imutabilidade', 'Transações básicas'],
    problem: 'Modelos anêmicos jogam regras para services; agregados gigantes forçam transações enormes; invariantes de negócio ficam espalhadas e são violadas por qualquer caminho de escrita.',
    concepts: ['Entidade vs value object', 'Agregado, raiz e limite de consistência', 'Invariantes e regra de transação por agregado', 'Domain events e desacoplamento', 'Repositórios e fábricas'],
    internals: ['O agregado é a menor unidade que precisa ser consistente em uma transação, não uma árvore de objetos do banco.', 'Referências entre agregados devem ser por identidade, não por objeto, para preservar limites.', 'Eventos de domínio permitem reagir a uma mudança sem acoplar o agregado a quem consome.'],
    useWhen: ['Desenhe um agregado por invariante que precisa ser mantida atomicamente.', 'Use value object para conceitos definidos por valor, como Money ou Endereço.', 'Emita domain event quando outros contextos precisam reagir a uma mudança.'],
    avoidWhen: ['Não crie agregados grandes que forçam locking e contenção.', 'Não referencie outro agregado por objeto dentro de uma transação.', 'Não transforme domain event em RPC síncrono disfarçado.'],
    contrast: {
      bad: 'Um agregado Pedido que carrega Cliente, Estoque e Pagamento inteiros e trava tudo numa transação única.',
      good: 'Pedido guarda apenas as invariantes de item e total; estoque e pagamento reagem por eventos e identidade.'
    },
    tradeoffs: ['Agregados pequenos reduzem contenção e cobram consistência eventual entre eles.', 'Value objects clarificam o modelo e aumentam o número de tipos.', 'Domain events desacoplam e adicionam infraestrutura de publicação.'],
    production: 'A confirmação de um pedido trava por segundos porque o agregado abrange estoque e pagamento. O exercício redesenha os limites e move a coordenação para eventos.',
    risks: ['Modelo anêmico', 'Agregado gigante', 'Invariante fora do agregado', 'Evento como chamada síncrona'],
    checklist: ['Qual invariante este agregado protege?', 'Ele é o menor limite consistente possível?', 'Referências externas são por identidade?', 'A regra vive dentro do agregado?', 'Preciso emitir um evento aqui?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual a diferença entre entidade e value object?', expected: 'Entidade tem identidade e ciclo de vida; value object é definido pelos seus atributos, é imutável e substituível, sem identidade própria.' },
      { level: 'Sênior/Expert', question: 'Por que um agregado deve ser pequeno?', expected: 'Porque ele é o limite de consistência transacional; agregados grandes aumentam contenção e locking, e a coordenação entre agregados deve ser eventual, via eventos e identidade.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Classificar conceitos de um domínio em entidade ou value object.', evidence: 'Tabela com justificativa.' },
      { level: 'Aplicado', task: 'Modelar um agregado com invariante protegida na raiz e testes.', evidence: 'Código do agregado com testes de invariante.' },
      { level: 'Expert', task: 'Substituir uma transação multi-agregado por coordenação via domain events.', evidence: 'Antes/depois com consistência eventual documentada.' }
    ],
    challenge: 'Modelar um domínio de pedidos com três agregados, invariantes explícitas e um fluxo de eventos entre eles, provando a consistência por testes.',
    book: 'Domain-Driven Design (Evans), parte II; Implementing DDD (Vernon), cap. 5–8 e 10.',
    complements: [official.ddd, official.microservices],
    exampleFile: '../../examples/arquitetura-senior/README.md'
  },
  {
    number: 8,
    part: 'estrategico',
    id: 'decomposicao-servicos',
    title: 'Decomposição: monólito modular, microsserviços e limites de serviço',
    level: 'Sênior → Expert',
    objective: 'Decidir onde traçar limites de serviço com base em domínio, acoplamento de dados, capacidade de operação e necessidade real de autonomia, e não por contagem de entidades.',
    prerequisites: ['Módulos 6–7', 'Bounded contexts', 'Deploy e operação'],
    problem: 'Microsserviços prematuros criam um monólito distribuído: acoplamento de tempo de execução, transações espalhadas por rede e ownership difuso, com todo o custo e nenhum benefício.',
    concepts: ['Modular monolith como default', 'Decomposição por domínio vs por dados', 'Granularidade e integradores de serviço', 'Ownership de dados e fim do banco compartilhado', 'Gatilhos objetivos de extração'],
    internals: ['A fronteira de serviço deve coincidir com a fronteira de dados; serviços que compartilham banco continuam acoplados.', 'Distribuir troca chamada de método por protocolo de rede, com latência, falha parcial e versionamento.', 'A granularidade é uma força a equilibrar: fina demais explode integração, grossa demais impede autonomia.'],
    useWhen: ['Comece modular monolith com módulos de ownership claro e contratos internos.', 'Extraia um serviço quando escala, autonomia de time ou isolamento de falha exigirem, com métricas.', 'Separe os dados junto com o serviço, nunca só o código.'],
    avoidWhen: ['Não crie um serviço por tabela ou por entidade.', 'Não mantenha banco compartilhado entre serviços "independentes".', 'Não distribua antes de ter observabilidade e automação de deploy.'],
    contrast: {
      bad: 'Doze serviços que leem e escrevem no mesmo banco e sobem juntos no mesmo release.',
      good: 'Monólito modular com faturamento isolado por ownership de dados, extraído só após gatilhos medidos de escala.'
    },
    tradeoffs: ['Monólito modular simplifica transação e deploy e exige disciplina de fronteira.', 'Microsserviços dão autonomia e cobram rede, dados distribuídos e operação madura.', 'Granularidade fina isola falhas e multiplica integração e latência.'],
    production: 'O módulo de faturamento precisa escalar e fazer deploy sozinho, mas está preso ao monólito e ao banco comum. O exercício avalia acoplamento, define ownership de dados e planeja a extração.',
    risks: ['Distributed monolith', 'Shared database', 'Serviço nano', 'Extração sem gatilho medido'],
    checklist: ['A fronteira segue um bounded context?', 'Os dados têm ownership único?', 'Existe necessidade real de deploy/escala independente?', 'O time consegue operar mais um serviço?', 'A extração é reversível e medida?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que é um monólito distribuído e por que é ruim?', expected: 'São serviços separados fisicamente mas acoplados por banco ou deploy comum; pagam o custo da distribuição (rede, falha parcial) sem ganhar autonomia real.' },
      { level: 'Sênior/Expert', question: 'Quais gatilhos justificam extrair um módulo para serviço?', expected: 'Limite de domínio estável, necessidade de escala ou deploy independentes, isolamento de falha, autonomia de time e ownership de dados, sempre com métricas e caminho reversível.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Avaliar um sistema e apontar candidatos a serviço e por quê.', evidence: 'Lista com critério de acoplamento.' },
      { level: 'Aplicado', task: 'Separar o ownership de dados de um módulo dentro de um monólito.', evidence: 'Esquema com fronteira de dados e testes.' },
      { level: 'Expert', task: 'Escrever o ADR de extração de um serviço com gatilhos, métricas e plano reversível.', evidence: 'ADR com fitness functions de fronteira.' }
    ],
    challenge: 'Defender em architecture review a decisão de manter um módulo no monólito, com métricas de acoplamento e os gatilhos que mudariam a decisão.',
    book: 'The Hard Parts, cap. 4–7 (decomposição e granularidade); Building Microservices, cap. 1–3.',
    complements: [official.microservices, official.fowler],
    exampleFile: '../../examples/arquitetura-senior/adr/0003-service-boundaries.md'
  },
  {
    number: 9,
    part: 'estrategico',
    id: 'integracao-mensageria',
    title: 'Integração corporativa: EIP, síncrono vs assíncrono e contratos',
    level: 'Sênior',
    objective: 'Escolher o estilo de integração adequado entre sistemas e aplicar padrões de integração corporativa para roteamento, transformação e confiabilidade sem acoplar produtores e consumidores.',
    prerequisites: ['Módulos 6–8', 'HTTP e filas', 'Serialização'],
    problem: 'Integrações viram teia de chamadas síncronas ponto a ponto: uma falha em cascata derruba tudo, e cada mudança de contrato quebra vários consumidores ao mesmo tempo.',
    concepts: ['Estilos de integração: arquivo, banco, RPC, mensageria', 'Message channel, endpoint, roteamento e transformação', 'Comando vs evento vs documento', 'Contratos e schema evolution (OpenAPI, AsyncAPI, CloudEvents)', 'Confiabilidade: entrega, ordenação e idempotência'],
    internals: ['Integração síncrona acopla disponibilidade: o chamador só está no ar se o chamado estiver.', 'Mensageria desacopla no tempo e no espaço e cobra ordenação, duplicação e rastreabilidade.', 'O contrato é a fronteira real entre sistemas; sua evolução precisa de compatibilidade, não de coragem.'],
    useWhen: ['Use síncrono quando o chamador precisa da resposta para prosseguir e a latência é aceitável.', 'Use mensageria para desacoplar picos, notificar mudanças e integrar sistemas heterogêneos.', 'Versione contratos com compatibilidade retroativa e telemetria de versões.'],
    avoidWhen: ['Não encadeie chamadas síncronas profundas sem timeout e fallback.', 'Não publique evento com o modelo interno completo do produtor.', 'Não quebre contrato sem período de convivência entre versões.'],
    contrast: {
      bad: 'Serviço A chama B que chama C que chama D de forma síncrona; a lentidão de D derruba a home page.',
      good: 'A publica um evento de domínio; B, C e D reagem de forma assíncrona, idempotente e com contrato versionado.'
    },
    tradeoffs: ['Síncrono é simples de raciocinar e propaga falha e latência.', 'Assíncrono resiliente cobra ordenação, duplicação e observabilidade de fluxo.', 'Contrato rígido dá estabilidade e reduz flexibilidade de mudança rápida.'],
    production: 'Uma mudança no payload de um evento quebra três consumidores em produção. O exercício introduz versionamento de contrato, compatibilidade e telemetria de versões.',
    risks: ['Integração ponto a ponto síncrona', 'Contrato sem versionamento', 'Evento com modelo interno vazado', 'Falta de idempotência no consumidor'],
    checklist: ['O chamador realmente precisa da resposta agora?', 'É comando, evento ou documento?', 'O contrato é versionado e compatível?', 'O consumidor é idempotente?', 'Como rastreio o fluxo ponta a ponta?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Quando usar integração assíncrona em vez de uma chamada REST síncrona?', expected: 'Quando não é preciso a resposta imediata, para desacoplar disponibilidade, absorver picos e notificar mudanças, aceitando consistência eventual.' },
      { level: 'Sênior/Expert', question: 'Como evoluir o schema de um evento sem quebrar consumidores?', expected: 'Manter compatibilidade retroativa (campos opcionais, versão no tipo), conviver com versões, medir quem consome cada versão e só remover após a deprecação segura.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Classificar cinco integrações reais em síncrona ou assíncrona e justificar.', evidence: 'Quadro com forças de cada escolha.' },
      { level: 'Aplicado', task: 'Definir um contrato de evento com AsyncAPI/CloudEvents e regra de compatibilidade.', evidence: 'Especificação versionada e exemplo.' },
      { level: 'Expert', task: 'Refatorar uma cadeia síncrona frágil para mensageria com idempotência e rastreio.', evidence: 'Diagrama antes/depois e teste de duplicação.' }
    ],
    challenge: 'Projetar a integração de um pedido entre quatro sistemas usando padrões EIP, contratos versionados e um plano de compatibilidade.',
    book: 'Enterprise Integration Patterns, introdução e cap. 2–7; Building Microservices, cap. 4.',
    complements: [official.eip, official.asyncapi, official.cloudevents, official.openapi],
    exampleFile: '../../examples/arquitetura-senior/README.md'
  },
  {
    number: 10,
    part: 'distribuidos',
    id: 'fundamentos-distribuidos',
    title: 'Fundamentos de sistemas distribuídos: CAP, falha parcial, tempo e consenso',
    level: 'Sênior → Expert',
    objective: 'Raciocinar sobre as garantias e limites fundamentais de um sistema distribuído — falha parcial, ausência de relógio global, CAP e consenso — antes de assumir que a rede é confiável.',
    prerequisites: ['Módulos 8–9', 'Concorrência básica', 'Redes e latência'],
    problem: 'Sistemas são projetados como se a rede fosse confiável, os relógios sincronizados e as falhas totais. Em produção, a realidade das falhas parciais e da assincronia produz bugs impossíveis de reproduzir.',
    concepts: ['As falácias da computação distribuída', 'Falha parcial e detecção por timeout', 'Ausência de relógio global; relógios lógicos', 'Teorema CAP e o espectro de consistência (PACELC)', 'Consenso: quórum, replicação e Raft/Paxos'],
    internals: ['Em rede assíncrona não dá para distinguir um nó lento de um nó morto; só há suspeita por timeout.', 'CAP não é escolher dois de três no dia a dia: sob partição, escolhe-se consistência ou disponibilidade; sem partição, troca-se latência por consistência.', 'Consenso resolve acordo com maioria (quórum), pagando latência e disponibilidade sob falhas.'],
    useWhen: ['Assuma falha parcial e projete timeout, retry e detecção em toda chamada remota.', 'Escolha o ponto de consistência por operação, não para o sistema inteiro.', 'Use consenso/quórum quando precisar de acordo forte sobre estado replicado.'],
    avoidWhen: ['Não confie em relógio de parede para ordenar eventos entre nós.', 'Não trate rede como confiável nem latência como zero.', 'Não exija consistência forte global onde consistência eventual basta.'],
    contrast: {
      bad: 'Ordenar eventos de dois serviços pelo timestamp de cada máquina e confiar que a soma bate.',
      good: 'Usar identificadores lógicos e versões para ordenar, aceitando consistência eventual onde é seguro.'
    },
    tradeoffs: ['Consistência forte cobra latência e disponibilidade sob partição.', 'Disponibilidade sob partição cobra divergência temporária e reconciliação.', 'Consenso dá acordo forte e reduz throughput e tolerância a falha.'],
    production: 'Um saldo aparece errado porque dois nós divergiram durante uma partição de rede. O exercício mapeia as garantias reais e escolhe consistência por operação.',
    risks: ['Assumir rede confiável', 'Relógio de parede para ordem', 'CAP mal interpretado', 'Consenso onde não é necessário'],
    checklist: ['O que acontece nesta chamada sob falha parcial?', 'Preciso de consistência forte aqui?', 'Como ordeno eventos sem relógio global?', 'Qual o comportamento sob partição?', 'O custo de latência do consenso se justifica?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que o teorema CAP realmente diz?', expected: 'Sob uma partição de rede, um sistema distribuído precisa escolher entre manter consistência ou disponibilidade; não é uma escolha permanente de dois entre três.' },
      { level: 'Sênior/Expert', question: 'Por que não se deve confiar em relógios para ordenar eventos entre nós?', expected: 'Porque não há relógio global e há deriva e sincronização imperfeita; usa-se relógios lógicos, versões ou consenso para estabelecer ordem causal confiável.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Listar as falácias da computação distribuída e um exemplo real de cada.', evidence: 'Tabela falácia/consequência.' },
      { level: 'Aplicado', task: 'Analisar uma operação e definir seu ponto na escala de consistência (PACELC).', evidence: 'Documento de decisão por operação.' },
      { level: 'Expert', task: 'Modelar o comportamento de um serviço replicado sob partição e reconciliação.', evidence: 'Cenário de falha com estados e recuperação.' }
    ],
    challenge: 'Escrever um documento de garantias distribuídas de um sistema: o que é forte, o que é eventual, como se ordena e o que acontece sob partição.',
    book: 'Designing Data-Intensive Applications, cap. 8–9 (problemas distribuídos e consistência/consenso).',
    complements: [official.raft, official.fowler],
    exampleFile: '../../examples/arquitetura-senior/README.md'
  },
  {
    number: 11,
    part: 'distribuidos',
    id: 'dados-intensivos',
    title: 'Sistemas de dados intensivos: replicação, particionamento e storage engines',
    level: 'Sênior → Expert',
    objective: 'Escolher estratégias de replicação e particionamento conforme o padrão de leitura e escrita e entender como o storage engine determina o desempenho e as garantias do sistema.',
    prerequisites: ['Módulo 10', 'Bancos e índices', 'Latência e throughput'],
    problem: 'Bancos são tratados como caixa preta. Sob crescimento, o sistema fica lento ou inconsistente porque a estratégia de replicação e particionamento não combina com o padrão de acesso.',
    concepts: ['Storage engines: B-Tree vs LSM-Tree', 'Replicação single-leader, multi-leader e leaderless', 'Lag de replicação e leituras suas-próprias-escritas', 'Particionamento por range e por hash; rebalanceamento', 'Índices secundários e hotspots'],
    internals: ['B-Tree otimiza leitura e escrita in-place; LSM-Tree otimiza escrita sequencial e cobra compactação e amplificação de leitura.', 'Replicação assíncrona dá disponibilidade e introduz lag; síncrona dá consistência e reduz disponibilidade.', 'A escolha da chave de particionamento define hotspots: uma chave sequencial concentra carga em uma partição.'],
    useWhen: ['Prefira LSM para cargas de escrita intensa e ingestão; B-Tree para leitura transacional balanceada.', 'Use replicação leaderless/multi-leader quando disponibilidade e escrita geo-distribuída dominam.', 'Escolha a chave de partição pela distribuição de acesso, não pela ordem natural.'],
    avoidWhen: ['Não particione por chave sequencial que cria hotspot.', 'Não assuma leitura consistente logo após escrita em réplica assíncrona.', 'Não adicione índice secundário sem medir o custo de escrita e o fan-out.'],
    contrast: {
      bad: 'Particionar eventos por timestamp crescente e concentrar toda a escrita na última partição.',
      good: 'Particionar por hash de uma chave bem distribuída e planejar rebalanceamento sem downtime.'
    },
    tradeoffs: ['LSM acelera escrita e cobra compactação e latência de cauda variável.', 'Replicação assíncrona dá disponibilidade e cobra lag e leitura inconsistente.', 'Mais réplicas melhoram leitura e encarecem escrita e coordenação.'],
    production: 'Uma listagem paginada fica lenta e às vezes retorna dados velhos por lag de réplica. O exercício ajusta o roteamento de leitura e a chave de particionamento.',
    risks: ['Hotspot por chave sequencial', 'Read-after-write inconsistente', 'Fan-out de índice secundário', 'Rebalanceamento com downtime'],
    checklist: ['O padrão é leitura ou escrita intensa?', 'A chave de partição distribui a carga?', 'Existe leitura que exige ver a própria escrita?', 'Qual o custo de cada índice secundário?', 'O rebalanceamento é possível sem parar?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual a diferença prática entre B-Tree e LSM-Tree?', expected: 'B-Tree faz escrita in-place, boa para leitura balanceada; LSM acumula escritas sequenciais e compacta depois, ótima para escrita intensa, com custo de amplificação de leitura.' },
      { level: 'Sênior/Expert', question: 'Como você escolhe a chave de particionamento?', expected: 'Pela distribuição do acesso: evitar hotspots (chaves sequenciais), equilibrar carga por hash quando não há necessidade de range, e considerar rebalanceamento e consultas.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Comparar dois storage engines para uma carga descrita e justificar.', evidence: 'Quadro carga/engine/motivo.' },
      { level: 'Aplicado', task: 'Escolher estratégia de replicação e particionamento para um caso de leitura/escrita dado.', evidence: 'ADR com padrão de acesso e riscos.' },
      { level: 'Expert', task: 'Diagnosticar e corrigir um hotspot de particionamento.', evidence: 'Antes/depois com distribuição de carga.' }
    ],
    challenge: 'Projetar o esquema de dados de um sistema de alto volume definindo storage, replicação, particionamento e o comportamento sob lag.',
    book: 'Designing Data-Intensive Applications, cap. 3, 5 e 6 (storage, replicação, particionamento).',
    complements: [official.fowler, official.awswa],
    exampleFile: '../../examples/arquitetura-senior/README.md'
  },
  {
    number: 12,
    part: 'distribuidos',
    id: 'consistencia-transacoes',
    title: 'Consistência, transações distribuídas, saga, outbox e idempotência',
    level: 'Expert',
    objective: 'Garantir consistência entre serviços sem transação distribuída, usando saga, transactional outbox e consumidores idempotentes, e escolher deliberadamente o nível de consistência de cada fluxo.',
    prerequisites: ['Módulos 10–11', 'Transações locais', 'Mensageria'],
    problem: 'Uma operação precisa mudar dados em dois serviços. Sem transação distribuída viável, o dual-write deixa o sistema inconsistente: um lado grava, o outro falha, e ninguém percebe.',
    concepts: ['Níveis de isolamento e anomalias', 'Por que 2PC raramente serve a microsserviços', 'Saga coreografada vs orquestrada e compensação', 'Transactional outbox e o problema do dual-write', 'Idempotência, deduplicação e exactly-once efetivo'],
    internals: ['Dual-write (banco + mensagem) não é atômico; falhar entre os dois deixa estados divergentes.', 'Outbox grava o evento na mesma transação do dado e um relay publica depois, garantindo pelo menos uma entrega.', 'Exactly-once de ponta a ponta não existe na prática; obtém-se efeito único com idempotência e deduplicação.'],
    useWhen: ['Use saga quando uma operação cruza serviços e precisa de compensação em vez de rollback distribuído.', 'Use outbox para publicar eventos de forma confiável junto da escrita.', 'Torne todo consumidor idempotente com chave de deduplicação.'],
    avoidWhen: ['Não use 2PC entre serviços com bancos e times independentes.', 'Não publique evento fora da transação do dado (dual-write).', 'Não assuma que a fila entrega exatamente uma vez.'],
    contrast: {
      bad: 'Salvar o pedido e, logo depois, publicar o evento; se o processo cair no meio, o evento nunca sai.',
      good: 'Salvar pedido e evento na mesma transação (outbox); um relay publica e o consumidor deduplica por id.'
    },
    tradeoffs: ['Saga elimina 2PC e cobra lógica de compensação e estados intermediários visíveis.', 'Outbox garante entrega e adiciona um relay e uma tabela a operar.', 'Idempotência protege contra duplicação e exige chave e armazenamento de dedupe.'],
    production: 'Um pagamento é cobrado duas vezes porque o consumidor reprocessou uma mensagem duplicada. O exercício adiciona outbox no produtor e idempotência no consumidor.',
    risks: ['Dual-write', 'Saga sem compensação', 'Consumidor não idempotente', 'Ilusão de exactly-once'],
    checklist: ['Esta operação cruza fronteira de dados?', 'Como publico o evento atomicamente?', 'A saga tem compensação para cada passo?', 'O consumidor é idempotente?', 'Como reconcilio divergências?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que é o padrão transactional outbox e qual problema resolve?', expected: 'Grava o evento na mesma transação do dado de negócio e o publica depois via relay, resolvendo o dual-write e garantindo entrega ao menos uma vez.' },
      { level: 'Sênior/Expert', question: 'Como você garante que um pagamento não seja processado duas vezes?', expected: 'Consumidor idempotente com chave de idempotência ou tabela de dedupe, aceitando entrega ao menos uma vez e obtendo efeito único; reconciliação para divergências.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Explicar por que o dual-write é inconsistente com um cenário de falha.', evidence: 'Diagrama de sequência com a janela de falha.' },
      { level: 'Aplicado', task: 'Implementar outbox e um consumidor idempotente para um evento.', evidence: 'Teste que injeta duplicação sem efeito duplicado.' },
      { level: 'Expert', task: 'Modelar uma saga orquestrada com compensações e reconciliação.', evidence: 'Máquina de estados e teste de falha em cada passo.' }
    ],
    challenge: 'Projetar o fluxo de checkout entre pedido, estoque e pagamento sem transação distribuída, com saga, outbox, idempotência e plano de reconciliação.',
    book: 'The Hard Parts, cap. 12 (saga); Designing Data-Intensive Applications, cap. 7 (transações).',
    complements: [official.microservices, official.eip],
    exampleFile: '../../examples/arquitetura-senior/adr/0004-consistency-saga.md'
  },
  {
    number: 13,
    part: 'distribuidos',
    id: 'resiliencia-estabilidade',
    title: 'Resiliência e estabilidade: timeout, circuit breaker, bulkhead e backpressure',
    level: 'Sênior → Expert',
    objective: 'Projetar sistemas que degradam com graça sob falha e sobrecarga, aplicando padrões de estabilidade e evitando os antipadrões que transformam um incidente local em queda total.',
    prerequisites: ['Módulos 9–12', 'Chamadas remotas', 'Pools e filas'],
    problem: 'Um serviço lento a jusante consome todas as threads a montante, filas ilimitadas incham a memória e um retry sem controle vira tempestade. Uma falha local vira apagão global.',
    concepts: ['Timeout em toda chamada remota', 'Circuit breaker e half-open', 'Bulkhead e isolamento de recursos', 'Retry com backoff, jitter e limite', 'Backpressure, fila limitada e load shedding'],
    internals: ['Sem timeout, um recurso preso não é liberado e a saturação se propaga para cima em cascata.', 'Circuit breaker para de bater em um dependente doente, dando tempo de recuperação e falhando rápido.', 'Backpressure e fila limitada preservam a estabilidade rejeitando carga em vez de acumular trabalho invisível.'],
    useWhen: ['Coloque timeout e limite em toda chamada e pool remotos.', 'Use circuit breaker para dependência que pode ficar indisponível.', 'Aplique bulkhead para que uma dependência ruim não consuma todos os recursos.'],
    avoidWhen: ['Não use fila ilimitada nem pool sem teto.', 'Não faça retry sem backoff, jitter e orçamento máximo.', 'Não repita retry em erro não transitório (4xx de validação).'],
    contrast: {
      bad: 'Sem timeout e com retry imediato: quando o pagamento fica lento, toda a aplicação trava e reenvia em loop.',
      good: 'Timeout curto, circuit breaker, bulkhead por dependência e degradação graciosa da funcionalidade não essencial.'
    },
    tradeoffs: ['Timeout agressivo evita saturação e pode cortar operação lenta legítima.', 'Circuit breaker protege e pode rejeitar durante recuperação parcial.', 'Backpressure preserva estabilidade e rejeita carga que o negócio talvez quisesse aceitar.'],
    production: 'Uma lentidão no gateway de pagamento derruba a home page porque as threads ficam presas. O exercício introduz timeout, bulkhead e circuit breaker e mede a diferença.',
    risks: ['Falta de timeout', 'Fila ilimitada', 'Retry storm', 'Falha em cascata', 'Cache stampede'],
    checklist: ['Toda chamada remota tem timeout?', 'Existe circuit breaker no dependente crítico?', 'Os recursos estão isolados por bulkhead?', 'O retry tem backoff, jitter e limite?', 'O sistema rejeita carga em vez de acumular?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que todo timeout importa em chamada remota?', expected: 'Sem timeout, um dependente lento mantém recursos presos (threads, conexões), e a saturação se propaga para cima em cascata até a queda total.' },
      { level: 'Sênior/Expert', question: 'Como o circuit breaker e o bulkhead se complementam?', expected: 'O bulkhead isola recursos por dependência para conter o dano; o circuit breaker para de chamar um dependente doente e falha rápido, dando tempo de recuperação. Juntos limitam a propagação da falha.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Mapear os antipadrões de estabilidade presentes em um sistema real.', evidence: 'Checklist de antipadrões encontrados.' },
      { level: 'Aplicado', task: 'Adicionar timeout, retry com backoff e circuit breaker a uma integração.', evidence: 'Teste que simula lentidão e mede contenção.' },
      { level: 'Expert', task: 'Executar um game day injetando falha e provar a degradação graciosa.', evidence: 'Relatório de experimento com métricas antes/depois.' }
    ],
    challenge: 'Aplicar os padrões de estabilidade a um fluxo crítico e comprovar, sob injeção de falha, que a queda de um dependente não derruba o sistema inteiro.',
    book: 'Release It! (Nygard), parte I (antipadrões de estabilidade e padrões).',
    complements: [official.reactive, official.sre],
    exampleFile: '../../examples/arquitetura-senior/README.md'
  },
  {
    number: 14,
    part: 'distribuidos',
    id: 'escala-performance',
    title: 'Escala e performance: cache, sharding, filas, CDN e balanceamento',
    level: 'Sênior → Expert',
    objective: 'Escalar um sistema por evidência, escolhendo mecanismos (cache, fila, réplica, sharding, CDN) a partir de gargalos medidos e não de suposição, e conhecendo o custo de cada um.',
    prerequisites: ['Módulos 10–13', 'Métricas de latência', 'Cache e filas'],
    problem: 'A resposta padrão para lentidão é "adicionar mais máquina" ou "colocar um cache", sem medir onde está o gargalo. O custo cresce, a consistência sofre e o problema real permanece.',
    concepts: ['Escala vertical vs horizontal e estado', 'Cache: estratégias, invalidação, stampede e coerência', 'Load balancing e sticky sessions', 'Filas para nivelar picos e desacoplar', 'CDN, read replicas e sharding'],
    internals: ['O caminho para escalar horizontalmente é remover estado do nó; sessão local impede escala.', 'Cache troca frescor por latência; a parte difícil é sempre a invalidação e a coerência.', 'Fila absorve pico (load leveling) transformando latência em profundidade de fila, que precisa de limite.'],
    useWhen: ['Meça o gargalo antes de escolher o mecanismo de escala.', 'Use cache para leitura quente com tolerância a algum atraso de frescor.', 'Use fila para nivelar picos e desacoplar produtor de consumidor.'],
    avoidWhen: ['Não adicione cache sem estratégia de invalidação e proteção contra stampede.', 'Não dependa de sticky session para escalar sem estado.', 'Não faça sharding cedo sem necessidade nem chave adequada.'],
    contrast: {
      bad: 'Dobrar o número de instâncias para resolver lentidão causada por um N+1 no banco.',
      good: 'Medir com traces, corrigir a query, adicionar índice e só então avaliar cache para o caminho quente.'
    },
    tradeoffs: ['Cache reduz latência e cobra invalidação e risco de dado velho.', 'Fila absorve pico e adiciona latência e complexidade de consumo.', 'Sharding escala escrita e complica consultas cruzadas e transações.'],
    production: 'Uma promoção derruba o sistema por pico de escrita e um cache mal invalidado serve preço errado. O exercício mede, aplica load leveling por fila e corrige a coerência de cache.',
    risks: ['Escalar sem medir', 'Cache stampede', 'Dado velho por invalidação errada', 'Sharding prematuro', 'Sticky session'],
    checklist: ['Onde está o gargalo medido?', 'O cache tem invalidação e proteção de stampede?', 'O nó é sem estado?', 'A fila tem limite e monitoramento de lag?', 'A chave de shard distribui a carga?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Quais são as duas coisas difíceis em cache?', expected: 'Invalidação (manter o cache coerente com a fonte) e nomeação/coerência; o benefício de latência sempre cobra frescor e complexidade de invalidação.' },
      { level: 'Sênior/Expert', question: 'Como uma fila ajuda a escalar sob picos de tráfego?', expected: 'Faz load leveling: absorve o pico como profundidade de fila e permite ao consumidor processar no seu ritmo, desde que a fila tenha limite e o lag seja monitorado, aceitando consistência eventual.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Estimar capacidade (QPS, storage, banda) de um sistema com números de guardanapo.', evidence: 'Cálculo de back-of-the-envelope.' },
      { level: 'Aplicado', task: 'Projetar a estratégia de cache de um caminho quente com invalidação e anti-stampede.', evidence: 'Diagrama e teste de coerência.' },
      { level: 'Expert', task: 'Desenhar o escalonamento de um sistema de alto volume com CDN, réplicas, filas e sharding.', evidence: 'Diagrama de arquitetura com justificativa por gargalo.' }
    ],
    challenge: 'Fazer o system design de um serviço de alto tráfego (feed, encurtador ou notificações) partindo de estimativas de capacidade e justificando cada mecanismo de escala.',
    book: 'System Design Interview Vol. 1, cap. 1–5; Vol. 2 (casos avançados); DDIA cap. 1.',
    complements: [official.awswa, official.sre],
    exampleFile: '../../examples/arquitetura-senior/README.md'
  },
  {
    number: 15,
    part: 'evolucao',
    id: 'evolucao-migracao',
    title: 'Arquitetura evolutiva e migração: strangler fig e monolith-to-microservices',
    level: 'Sênior → Expert',
    objective: 'Evoluir e migrar sistemas de forma incremental e reversível, usando strangler fig e decomposição de dados, em vez de reescritas big-bang que quase sempre falham.',
    prerequisites: ['Módulos 4, 8 e 12', 'Um sistema legado', 'Deploy contínuo'],
    problem: 'A reação ao legado é a reescrita total, que roda por dois anos, atrasa, não alcança paridade e coloca a empresa em risco. Ninguém consegue congelar o negócio para reescrever.',
    concepts: ['Arquitetura evolutiva e mudança guiada', 'Strangler fig application', 'Branch by abstraction', 'Decomposição incremental do banco de dados', 'Paridade, coexistência e reversibilidade'],
    internals: ['Migração incremental substitui o sistema aos poucos atrás de uma fachada, mantendo o negócio no ar.', 'A parte mais difícil não é o código, é decompor o banco compartilhado sem quebrar a consistência.', 'Uma migração segura é reversível a cada passo; big-bang aposta tudo em um único evento.'],
    useWhen: ['Prefira strangler fig para substituir um legado sem parar o negócio.', 'Use branch by abstraction para trocar uma peça sob uma interface estável.', 'Decomponha os dados junto do código, passo a passo, com coexistência controlada.'],
    avoidWhen: ['Não faça reescrita big-bang de um sistema em produção crítico.', 'Não migre o código deixando o banco compartilhado para depois.', 'Não avance um passo que você não consegue reverter.'],
    contrast: {
      bad: 'Congelar features por 18 meses para reescrever tudo e migrar num único fim de semana.',
      good: 'Rotear rota a rota para o novo sistema atrás de uma fachada, medindo paridade e podendo reverter.'
    },
    tradeoffs: ['Incremental reduz risco e prolonga a coexistência de dois sistemas.', 'Strangler dá reversibilidade e cobra roteamento e sincronização temporária de dados.', 'Decompor o banco cedo evita acoplamento e adiciona complexidade transitória.'],
    production: 'Uma reescrita big-bang atrasa e a empresa fica sem entregar features por um ano. O exercício replaneja como strangler fig com marcos reversíveis e paridade medida.',
    risks: ['Big-bang rewrite', 'Banco compartilhado na migração', 'Passo irreversível', 'Perda de paridade funcional'],
    checklist: ['A migração é incremental e reversível?', 'Existe fachada para rotear gradualmente?', 'Os dados são decompostos junto do código?', 'Como meço paridade com o legado?', 'Qual o plano de rollback de cada passo?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que é o padrão strangler fig?', expected: 'Substituir um sistema legado de forma incremental, interceptando funcionalidades atrás de uma fachada e migrando aos poucos, até o legado ser desativado, sem big-bang.' },
      { level: 'Sênior/Expert', question: 'Por que decompor o banco é a parte mais difícil de migrar um monólito?', expected: 'Porque separar dados compartilhados envolve consistência, transações que cruzavam tabelas, sincronização temporária e ownership; o código migra fácil, os dados exigem coexistência cuidadosa e reversível.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Planejar a migração de um módulo com strangler fig em marcos.', evidence: 'Roadmap com pontos de reversão.' },
      { level: 'Aplicado', task: 'Aplicar branch by abstraction para trocar uma dependência sob interface.', evidence: 'Antes/depois com testes verdes em cada passo.' },
      { level: 'Expert', task: 'Projetar a decomposição incremental de um banco compartilhado.', evidence: 'Plano de coexistência de dados e reconciliação.' }
    ],
    challenge: 'Escrever o plano de migração de um monólito real para módulos/serviços com strangler fig, decomposição de dados, paridade medida e rollback por etapa.',
    book: 'Monolith to Microservices (Newman), cap. 3–4; Fundamentals, cap. sobre arquitetura evolutiva.',
    complements: [official.fowler, official.microservices],
    exampleFile: '../../examples/arquitetura-senior/adr/0005-strangler-migration.md'
  },
  {
    number: 16,
    part: 'evolucao',
    id: 'observabilidade-operacao',
    title: 'Observabilidade e prontidão operacional como parte da arquitetura',
    level: 'Sênior',
    objective: 'Tratar observabilidade, SLOs e prontidão operacional como requisitos arquiteturais de primeira classe, para que o sistema seja diagnosticável e operável antes do primeiro incidente.',
    prerequisites: ['Módulos 13–15', 'Logs, métricas e traces', 'Produção real'],
    problem: 'A arquitetura é declarada pronta quando os testes passam, mas em produção ninguém consegue responder por que o p99 subiu. Observabilidade vira item de backlog que nunca chega.',
    concepts: ['Os três sinais: logs, métricas, traces', 'SLI, SLO e error budget', 'Health checks, readiness e liveness', 'Correlação por trace/request id e cardinalidade', 'Prontidão operacional: runbooks e game days'],
    internals: ['Monitoramento responde perguntas conhecidas; observabilidade permite investigar perguntas novas sem novo deploy.', 'SLO transforma disponibilidade em orçamento de erro, alinhando risco de mudança e confiabilidade.', 'Um sinal só é útil se for correlacionável ponta a ponta por um identificador comum.'],
    useWhen: ['Defina SLIs/SLOs por jornada crítica antes de projetar alertas.', 'Instrumente traces com propagação de contexto entre serviços.', 'Exija runbook e prontidão operacional como critério de entrada em produção.'],
    avoidWhen: ['Não trate observabilidade como opcional pós-lançamento.', 'Não alerte em CPU/memória sem sinal ligado à experiência do usuário.', 'Não gere métricas de altíssima cardinalidade sem controle de custo.'],
    contrast: {
      bad: 'Único alerta de CPU alta; quando o checkout falha, ninguém consegue ver onde o pedido travou.',
      good: 'SLO de checkout, alerta por error budget e trace ponta a ponta que mostra o passo lento da jornada.'
    },
    tradeoffs: ['Mais instrumentação melhora diagnóstico e cobra custo de telemetria e cardinalidade.', 'SLO rígido protege o usuário e limita o ritmo de mudança sob budget esgotado.', 'Alertas sensíveis pegam problemas cedo e arriscam fadiga de alerta.'],
    production: 'O checkout degrada e o time gasta horas adivinhando a causa por falta de trace. O exercício define SLOs, instrumenta traces e cria um alerta acionável por error budget.',
    risks: ['Observabilidade como backlog', 'Alerta sem ação', 'Falta de correlação', 'Explosão de cardinalidade', 'Fadiga de alerta'],
    checklist: ['Cada jornada crítica tem SLI/SLO?', 'Os sinais se correlacionam por um id comum?', 'Os alertas são acionáveis?', 'Existe runbook para o incidente provável?', 'A prontidão foi testada em game day?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual a diferença entre monitoramento e observabilidade?', expected: 'Monitoramento acompanha perguntas conhecidas com dashboards pré-definidos; observabilidade permite investigar comportamentos novos e inesperados a partir de telemetria rica, sem precisar de novo deploy.' },
      { level: 'Sênior/Expert', question: 'O que é um error budget e como ele muda decisões?', expected: 'É o complemento do SLO (o erro tolerável no período); orienta o equilíbrio entre lançar features e estabilizar: budget esgotado freia mudanças, budget saudável libera risco.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Definir SLIs e SLOs para uma jornada crítica.', evidence: 'Tabela SLI/SLO com janela e alvo.' },
      { level: 'Aplicado', task: 'Instrumentar trace ponta a ponta com propagação de contexto.', evidence: 'Trace mostrando o passo lento.' },
      { level: 'Expert', task: 'Definir alerta por error budget e escrever o runbook associado.', evidence: 'Alerta acionável e runbook testado.' }
    ],
    challenge: 'Levar um serviço a prontidão operacional: SLOs por jornada, três sinais correlacionados, alertas por budget, runbook e um game day executado.',
    book: 'Release It! (Nygard), parte sobre transparência e operação; complemento Google SRE.',
    complements: [official.sre, official.otel],
    exampleFile: '../../examples/arquitetura-senior/README.md'
  },
  {
    number: 17,
    part: 'evolucao',
    id: 'seguranca-arquitetural',
    title: 'Segurança arquitetural, multi-tenancy e zero trust',
    level: 'Sênior → Expert',
    objective: 'Incorporar segurança na estrutura do sistema — modelagem de ameaças, isolamento, identidade e multi-tenancy — em vez de tratá-la como verniz aplicado no fim.',
    prerequisites: ['Módulos 9, 13 e 16', 'AuthN/AuthZ básicos', 'Redes'],
    problem: 'Segurança é deixada para o final e vira lista de correções. A arquitetura confia na rede interna, mistura dados de tenants e não tem fronteira de confiança clara, criando risco sistêmico.',
    concepts: ['Threat modeling (STRIDE) e superfície de ataque', 'Zero trust e fronteiras de confiança', 'Identidade, tokens, escopos e propagação', 'Isolamento e estratégias de multi-tenancy', 'Defesa em profundidade e menor privilégio'],
    internals: ['Zero trust assume que a rede é hostil: cada requisição prova identidade e autorização, não a localização.', 'Multi-tenancy é uma decisão arquitetural: silo, pool ou híbrido definem isolamento, custo e blast radius.', 'Modelar ameaças cedo é mais barato que remediar; a fronteira de confiança precisa ser explícita no diagrama.'],
    useWhen: ['Faça threat modeling na fase de desenho de fluxos sensíveis.', 'Aplique menor privilégio e defesa em profundidade em cada camada.', 'Escolha a estratégia de multi-tenancy pelo isolamento e blast radius exigidos.'],
    avoidWhen: ['Não confie em rede interna como fronteira de segurança.', 'Não misture dados de tenants sem isolamento e escopo verificados.', 'Não deixe segurança para uma fase de hardening no final.'],
    contrast: {
      bad: 'Serviços internos confiam uns nos outros sem autenticação porque estão na mesma VPC.',
      good: 'Cada chamada carrega identidade verificada e escopos; tenants isolados por decisão explícita e testados.'
    },
    tradeoffs: ['Isolamento por silo dá segurança forte e cobra custo e operação por tenant.', 'Zero trust reduz risco e adiciona latência e complexidade de identidade.', 'Defesa em profundidade aumenta resiliência e o número de controles a manter.'],
    production: 'Um bug de autorização expõe dados de um tenant a outro porque o isolamento era só lógico e não testado. O exercício modela ameaças e reforça a fronteira e o isolamento.',
    risks: ['Segurança no final', 'Confiança na rede interna', 'Vazamento entre tenants', 'Privilégio excessivo', 'Superfície de ataque não mapeada'],
    checklist: ['Qual a fronteira de confiança deste fluxo?', 'As ameaças (STRIDE) foram modeladas?', 'Cada chamada prova identidade e escopo?', 'O isolamento entre tenants é testado?', 'O princípio de menor privilégio é aplicado?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que significa zero trust na arquitetura?', expected: 'Não confiar na localização de rede como garantia; toda requisição autentica e autoriza explicitamente, tratando a rede interna como potencialmente hostil.' },
      { level: 'Sênior/Expert', question: 'Quais são as estratégias de isolamento em multi-tenancy e como escolher?', expected: 'Silo (recursos dedicados), pool (compartilhado com isolamento lógico) e híbrido; escolhe-se pelo isolamento exigido, blast radius, custo, conformidade e capacidade de operação.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Fazer um threat model STRIDE de um fluxo sensível.', evidence: 'Tabela de ameaças e mitigações.' },
      { level: 'Aplicado', task: 'Desenhar a fronteira de confiança e a propagação de identidade entre serviços.', evidence: 'Diagrama com pontos de verificação.' },
      { level: 'Expert', task: 'Escolher e provar a estratégia de isolamento multi-tenant com teste de vazamento.', evidence: 'ADR e teste de isolamento entre tenants.' }
    ],
    challenge: 'Produzir a arquitetura de segurança de um sistema multi-tenant: threat model, fronteiras de confiança, propagação de identidade e teste de isolamento.',
    book: 'Building Microservices (Newman), cap. sobre segurança; complementos AWS Well-Architected (pilar de segurança).',
    complements: [official.awswa, official.twelvefactor],
    exampleFile: '../../examples/arquitetura-senior/README.md'
  },
  {
    number: 18,
    part: 'evolucao',
    id: 'topologias-governanca',
    title: 'Team Topologies, lei de Conway e governança arquitetural evolutiva',
    level: 'Expert',
    objective: 'Alinhar fronteiras de software às fronteiras de time e conduzir governança arquitetural como um processo evolutivo e habilitador, e não como um comitê que aprova diagramas.',
    prerequisites: ['Módulos 1, 8 e 15', 'Experiência com times', 'ADRs'],
    problem: 'A arquitetura ideal no papel é sabotada pela organização: times mal desenhados criam acoplamento, a carga cognitiva estoura, e a governança vira burocracia que atrasa sem melhorar decisões.',
    concepts: ['Lei de Conway e manobra inversa', 'Os quatro tipos de time e três modos de interação', 'Carga cognitiva como restrição de fronteira', 'Governança evolutiva: princípios, ADRs e fitness functions', 'Enabling teams e plataforma como produto'],
    internals: ['A estrutura do sistema tende a espelhar a estrutura de comunicação da organização; ignorar isso desalinha software e times.', 'A manobra inversa de Conway molda os times para produzir a arquitetura desejada.', 'Governança que escala é feita de princípios e verificações automatizadas, não de aprovação manual caso a caso.'],
    useWhen: ['Desenhe fronteiras de serviço alinhadas a times stream-aligned com ownership claro.', 'Use enabling teams e plataforma para reduzir carga cognitiva.', 'Governe com princípios, ADRs e fitness functions em vez de comitês de aprovação.'],
    avoidWhen: ['Não imponha uma arquitetura que contraria a estrutura de comunicação real.', 'Não sobrecarregue um time com domínios além da sua carga cognitiva.', 'Não centralize toda decisão em um comitê que vira gargalo.'],
    contrast: {
      bad: 'Um comitê central aprova todo diagrama e todo serviço, atrasando semanas cada decisão de time.',
      good: 'Princípios claros, ADRs por time e fitness functions no CI; o grupo de arquitetura habilita, não aprova tudo.'
    },
    tradeoffs: ['Autonomia de time acelera fluxo e exige governança leve para coerência.', 'Plataforma reduz carga cognitiva e cobra investimento e tratamento como produto.', 'Governança forte dá consistência e pode virar gargalo se for manual.'],
    production: 'Cada mudança de arquitetura trava semanas no comitê e os times contornam por fora, criando inconsistência. O exercício redesenha a governança como princípios e verificações automatizadas.',
    risks: ['Arquitetura contra a lei de Conway', 'Carga cognitiva excessiva', 'Comitê gargalo', 'Governança como burocracia'],
    checklist: ['A fronteira de software casa com a de time?', 'A carga cognitiva do time é sustentável?', 'A governança usa princípios e automação?', 'Existe enabling team ou plataforma habilitando?', 'As decisões ficam registradas e revisáveis?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que a lei de Conway afirma?', expected: 'Que a estrutura de um sistema tende a espelhar a estrutura de comunicação da organização que o produz; times e arquitetura estão acoplados.' },
      { level: 'Sênior/Expert', question: 'Como escalar governança arquitetural sem virar gargalo?', expected: 'Com princípios explícitos, ADRs descentralizados, fitness functions automatizadas e grupos de arquitetura que habilitam e revisam, em vez de aprovar cada decisão manualmente.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Mapear os times atuais aos quatro tipos de Team Topologies.', evidence: 'Diagrama de times e interações.' },
      { level: 'Aplicado', task: 'Propor uma manobra inversa de Conway para uma arquitetura-alvo.', evidence: 'Plano de reorganização com fronteiras.' },
      { level: 'Expert', task: 'Desenhar um modelo de governança evolutiva com princípios e fitness functions.', evidence: 'Documento de governança e verificações no CI.' }
    ],
    challenge: 'Propor a topologia de times e o modelo de governança que sustentam uma arquitetura-alvo, com princípios, ADRs, plataforma e fitness functions.',
    book: 'Team Topologies (Skelton & Pais); Fundamentals of Software Architecture, cap. sobre soft skills e efetividade.',
    complements: [official.teamtopologies, official.fowler, official.adr],
    exampleFile: '../../examples/arquitetura-senior/README.md'
  }
];

export const arquiteturaAssessment = Object.freeze({
  levels: [
    {
      level: 'Júnior',
      expected: 'Aplica um estilo conhecido, segue um padrão dado e desenha o caminho feliz com orientação.',
      evidence: 'Diagrama coerente, vocabulário correto e implementação do caso principal.',
      redFlags: 'Copia arquitetura de referência sem entender a força que ela privilegia.'
    },
    {
      level: 'Pleno',
      expected: 'Escolhe entre alternativas para um contexto, trata falhas comuns e justifica a decisão localmente.',
      evidence: 'Trade-offs locais, contrato de integração e tratamento de erro e resiliência.',
      redFlags: 'Padrão da moda como resposta universal; não mede impacto da decisão.'
    },
    {
      level: 'Sênior',
      expected: 'Conduz decisão sob restrições, antecipa falha distribuída, define atributos e protege a operação.',
      evidence: 'ADRs, SLOs, C4, fitness functions e plano de rollout/rollback.',
      redFlags: 'Distribui sem necessidade; otimiza sem baseline; abstrai sem eixo de mudança.'
    },
    {
      level: 'Expert',
      expected: 'Cria princípios e mecanismos reutilizáveis, alinha times e arquitetura e reduz complexidade sistêmica.',
      evidence: 'Governança evolutiva, plataforma, fitness functions e impacto medido entre times.',
      redFlags: 'Complexidade como status; decisão irreversível sem necessidade; comitê como gargalo.'
    }
  ],
  caseStudies: [
    {
      id: 'plataforma-pedidos',
      title: 'Plataforma de pedidos sob pico e falha parcial',
      scenario: 'Checkout integra estoque e um gateway de pagamento externo que fica lento em promoções, e eventos podem duplicar.',
      constraints: ['Sem transação distribuída', 'p99 do checkout < 1 s', 'Não cobrar duas vezes', 'Reconciliação em até 10 min'],
      decisions: ['Saga com compensação', 'Outbox e consumidor idempotente', 'Timeout, circuit breaker e degradação graciosa', 'SLO e alerta por error budget'],
      deliverables: ['C4 níveis 1–3', 'Máquina de estados da saga', 'Teste de duplicação e de lentidão', 'ADRs e runbook de reconciliação']
    },
    {
      id: 'monolito-decisao',
      title: 'Extrair ou não extrair o módulo de faturamento',
      scenario: 'O faturamento cresce, precisa escalar e fazer deploy sozinho, mas divide banco e time com o monólito.',
      constraints: ['Time de seis pessoas', 'Baixa maturidade de observabilidade', 'Deploy semanal'],
      decisions: ['Medir acoplamento e ownership de dados', 'Modularizar antes de distribuir', 'Gatilhos objetivos de extração', 'Plano strangler reversível'],
      deliverables: ['C4 atual e alvo', 'ADR com a opção de não extrair', 'Fitness functions de fronteira', 'Roadmap de migração incremental']
    },
    {
      id: 'integracao-legado',
      title: 'Integrar um legado sem propagar o seu modelo',
      scenario: 'Um ERP legado precisa alimentar três sistemas novos, com dados inconsistentes e um contrato instável.',
      constraints: ['Sem alterar o legado', 'Contratos versionados', 'Consistência eventual aceitável'],
      decisions: ['Anti-corruption layer', 'Mensageria com CloudEvents/AsyncAPI', 'Idempotência e schema evolution', 'Rastreamento ponta a ponta'],
      deliverables: ['Context map', 'Contrato de eventos versionado', 'Desenho do ACL', 'Teste de compatibilidade e de duplicação']
    },
    {
      id: 'dados-escala',
      title: 'Feed de alto volume com leitura intensa',
      scenario: 'Um feed cresce para milhões de leituras por minuto, com escrita concentrada e necessidade de baixa latência.',
      constraints: ['Latência de leitura < 100 ms', 'Orçamento de infraestrutura limitado', 'Frescor tolerante a segundos'],
      decisions: ['Estratégia de cache e anti-stampede', 'Read replicas e particionamento por hash', 'CDN para conteúdo estático', 'Estimativa de capacidade'],
      deliverables: ['Cálculo de capacidade', 'Diagrama de escala', 'Estratégia de invalidação de cache', 'ADR de particionamento']
    },
    {
      id: 'seguranca-multitenant',
      title: 'Isolamento em um SaaS multi-tenant',
      scenario: 'Um SaaS cresce em número de tenants; um bug de autorização expôs dados entre clientes e a rede interna era confiável.',
      constraints: ['Conformidade exige isolamento comprovável', 'Não degradar custo por tenant além do teto', 'Resposta a incidente em 30 min'],
      decisions: ['Threat model STRIDE', 'Estratégia de multi-tenancy (silo/pool/híbrido)', 'Zero trust e propagação de identidade', 'Teste de isolamento entre tenants'],
      deliverables: ['Modelo de ameaças', 'Fronteiras de confiança no C4', 'Teste de vazamento entre tenants', 'Runbook de incidente e postmortem']
    }
  ],
  projects: [
    {
      id: 'plataforma-integrada',
      title: 'Projeto Sênior — Plataforma de pedidos integrada',
      objective: 'Desenhar e defender uma plataforma de pedidos com módulos de ownership claro, integração assíncrona confiável, resiliência e observabilidade, provando as decisões com evidência.',
      stages: [
        'Descobrir contextos com event storming e produzir o context map.',
        'Modelar agregados e eventos de domínio com invariantes protegidas.',
        'Definir contratos (OpenAPI/AsyncAPI/CloudEvents) e integração por mensagens.',
        'Implementar saga, outbox e consumidores idempotentes para o checkout.',
        'Aplicar padrões de estabilidade e degradação graciosa nas dependências.',
        'Instrumentar SLOs, três sinais correlacionados, alertas e runbook.'
      ],
      acceptance: ['C4 e ADRs conectados ao código', 'Zero efeito duplicado nos testes de falha', 'Fitness functions de fronteira no CI', 'SLOs e dashboards executáveis', 'Plano de rollout e rollback documentado'],
      seniorSignal: 'Entrega completa, trade-offs defensáveis por atributo e operação previsível sob falha.'
    },
    {
      id: 'plataforma-evolutiva',
      title: 'Projeto Expert — Evolução para plataforma multi-time',
      objective: 'Evoluir a plataforma sob múltiplos times, cargas e contextos, provando quando manter módulos e quando extrair serviços, com governança evolutiva e migração reversível.',
      stages: [
        'Mapear bounded contexts, ownership e topologia de times.',
        'Definir fitness functions de dependência e compatibilidade de contrato.',
        'Planejar extração de um contexto com strangler fig e decomposição de dados.',
        'Modelar dados intensivos: replicação, particionamento e reconciliação.',
        'Executar um game day de falha e um experimento de escala com evidência.',
        'Estabelecer governança evolutiva com princípios, ADRs e plataforma como produto.'
      ],
      acceptance: ['Decisão de extrair reversível e baseada em métricas', 'SLO e error budget por contexto', 'Segurança e multi-tenancy por design', 'Plano de capacidade e custo', 'Architecture review gravável e repetível'],
      seniorSignal: 'Cria mecanismos reutilizáveis, alinha times e arquitetura e reduz complexidade para várias equipes.'
    }
  ],
  completion: [
    'Todos os 18 objetivos foram demonstrados por evidência (C4, ADR, contrato, teste ou métrica), não por leitura.',
    'Cada decisão estrutural relevante tem um ADR com contexto, alternativas e consequências.',
    'Ao menos 36 exercícios foram concluídos, incluindo 18 aplicados e 5 de nível expert.',
    'Os cinco casos foram defendidos com trade-offs, riscos, plano de rollback e sinais de senioridade.',
    'Um capstone atende aos critérios; o projeto Expert exige também impacto e governança entre times.',
    'Nenhum módulo é marcado como Dominado antes de evidência validada em architecture review.'
  ]
});
