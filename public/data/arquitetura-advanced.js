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
  teamtopologies: { label: 'Team Topologies — recursos', url: 'https://teamtopologies.com/key-concepts' },
  eventSourcing: { label: 'Martin Fowler — Event Sourcing', url: 'https://martinfowler.com/eaaDev/EventSourcing.html' },
  cqrs: { label: 'Martin Fowler — CQRS', url: 'https://martinfowler.com/bliki/CQRS.html' },
  eventStorming: { label: 'EventStorming — Alberto Brandolini', url: 'https://www.eventstorming.com/' },
  tlaplus: { label: 'TLA+ — Leslie Lamport', url: 'https://lamport.azurewebsites.net/tla/tla.html' },
  learnTla: { label: 'Learn TLA+ — guia prático', url: 'https://learntla.com/' },
  alloy: { label: 'Alloy — modelagem e análise de software', url: 'https://alloytools.org/' },
  amazonTla: { label: 'How Amazon Web Services Uses Formal Methods (CACM)', url: 'https://dl.acm.org/doi/10.1145/2699417' },
  jepsen: { label: 'Jepsen — análises de consistência sob falha', url: 'https://jepsen.io/analyses' },
  fdbTesting: { label: 'FoundationDB — simulação determinística', url: 'https://apple.github.io/foundationdb/testing.html' },
  tigerbeetle: { label: 'TigerBeetle — VOPR e simulação', url: 'https://docs.tigerbeetle.com/concepts/safety/' },
  principlesChaos: { label: 'Principles of Chaos Engineering', url: 'https://principlesofchaos.org/' },
  cellBased: { label: 'AWS — Reducing the scope of impact with cell-based architecture', url: 'https://docs.aws.amazon.com/wellarchitected/latest/reducing-scope-of-impact-with-cell-based-architecture/reducing-scope-of-impact-with-cell-based-architecture.html' },
  shuffleSharding: { label: 'Amazon Builders’ Library — Workload isolation using shuffle-sharding', url: 'https://aws.amazon.com/builders-library/workload-isolation-using-shuffle-sharding/' },
  staticStability: { label: 'Amazon Builders’ Library — Static stability using Availability Zones', url: 'https://aws.amazon.com/builders-library/static-stability-using-availability-zones/' },
  buildersLibrary: { label: 'Amazon Builders’ Library', url: 'https://aws.amazon.com/builders-library/' },
  dynamoPaper: { label: 'Dynamo: Amazon’s Highly Available Key-value Store', url: 'https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf' },
  spannerPaper: { label: 'Spanner: Google’s Globally-Distributed Database', url: 'https://research.google/pubs/pub39966/' },
  borgPaper: { label: 'Large-scale cluster management at Google with Borg', url: 'https://research.google/pubs/pub43438/' },
  kafkaPaper: { label: 'Kafka: a Distributed Messaging System for Log Processing', url: 'https://notes.stephenholiday.com/Kafka.pdf' },
  papersWeLove: { label: 'Papers We Love — repositório de papers fundadores', url: 'https://github.com/papers-we-love/papers-we-love' },
  howToRead: { label: 'How to Read a Paper — S. Keshav', url: 'https://web.stanford.edu/class/ee384m/Handouts/HowtoReadPaper.pdf' },
  modulith: { label: 'Spring Modulith — fronteiras verificadas em monólito modular', url: 'https://docs.spring.io/spring-modulith/reference/' },
  archunit: { label: 'ArchUnit — fitness functions executáveis', url: 'https://www.archunit.org/' },
  mcp: { label: 'Model Context Protocol — especificação', url: 'https://modelcontextprotocol.io/' },
  nistAi: { label: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' }
};

export const arquiteturaBooks = Object.freeze({
  fundamentals: {
    title: 'Fundamentals of Software Architecture',
    authors: 'Mark Richards e Neal Ford',
    edition: '2ª edição',
    year: '2025',
    language: 'Inglês',
    pages: 432,
    path: '/pdfs/livros-arquitetura/fundamentals-of-software-architecture-2e.pdf',
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
    authors: 'Martin Kleppmann e Chris Riccomini',
    edition: '2ª edição',
    year: '2026',
    language: 'Inglês',
    pages: 616,
    path: '/pdfs/livros-arquitetura/designing-data-intensive-applications-2e.pdf',
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

/*
 * A trilha é deliberadamente agnóstica de fornecedor, então este baseline não
 * lista produtos: lista as ESPECIFICAÇÕES e OBRAS DE REFERÊNCIA que sustentam as
 * decisões, com o estado de cada uma. Onde a biblioteca local está uma edição
 * atrás, isso é declarado em vez de escondido.
 */
export const arquiteturaTechnologyBaseline = [
  { technology: 'Fundamentals of Software Architecture (livro-âncora)', baseline: '2ª ed (set/2025)', status: 'Biblioteca tem a 1ª ed (2020)', note: 'A 2ª edição traz cinco capítulos novos, incluindo IA generativa, dados e Team Topologies. Conteúdo da trilha já cobre boa parte; usar a 1ª ed sabendo o que falta.' },
  { technology: 'Designing Data-Intensive Applications', baseline: '2ª ed (mar/2026)', status: 'Biblioteca tem a de 2017', note: 'Kleppmann & Riccomini. Os fundamentos mudam em décadas; os detalhes de tecnologia mudaram. Espinha dorsal dos módulos 11 e 18.' },
  { technology: 'C4 Model', baseline: 'corrente', status: 'Estável', note: 'Notação para os quatro níveis de diagrama. Estável há anos; não há versionamento formal.' },
  { technology: 'arc42', baseline: '8.x', status: 'Estável', note: 'Template de documentação arquitetural. Complementa o C4: o C4 desenha, o arc42 estrutura o texto.' },
  { technology: 'OpenAPI', baseline: '3.1.x', status: 'Estável', note: 'Alinhada a JSON Schema. Contrato de API síncrona.' },
  { technology: 'AsyncAPI', baseline: '3.x', status: 'Estável', note: 'Contrato de API assíncrona. A mudança 2.x→3.x foi quebrante; conferir a versão do seu tooling.' },
  { technology: 'CloudEvents', baseline: '1.0.2', status: 'Estável (CNCF)', note: 'Envelope padrão de evento. Resolve metadado comum sem acoplar ao broker.' },
  { technology: 'RFC 9457 (Problem Details)', baseline: 'publicada', status: 'Estável', note: 'Substitui a RFC 7807. Formato de erro HTTP interoperável.' },
  { technology: 'OpenTelemetry — convenções semânticas', baseline: 'estáveis para HTTP e parciais para o resto', status: 'Em evolução', note: 'Sinal de observabilidade é contrato arquitetural. Fixe a versão da convenção usada.' },
  { technology: 'Monólito modular como padrão', baseline: 'consenso revisado (2026)', status: 'Corrente', note: 'Parte das organizações que adotaram microsserviços está reconsolidando. Módulos 8 e 15 já tratam; a decisão é por acoplamento e capacidade, não por moda.' },
  { technology: 'Fitness functions executáveis', baseline: 'ArchUnit · Spring Modulith', status: 'Estável', note: 'Fronteira que não é verificada por build não é fronteira. Módulo 4.' },
  { technology: 'TLA+ / Alloy', baseline: 'maduros', status: 'Nicho de alto valor', note: 'Usados em produção por AWS e outros para protocolos distribuídos. Módulo 20.' },
  { technology: 'Agentes de IA como componente', baseline: 'MCP (padrão de fato, 2026)', status: 'Emergente', note: 'Componente não determinístico dentro da arquitetura, com custo e latência variáveis. Módulo 25.' }
];

export const arquiteturaAcademy = Object.freeze({
  title: 'Academia de Arquitetura',
  baseline: 'Decisões agnósticas de fornecedor, com trade-offs explícitos e evidência auditável',
  book: 'Fundamentals of Software Architecture (Richards & Ford) como espinha dorsal; obras específicas por tema',
  parts: {
    base: {
      index: '0/6',
      range: 'Módulos 0.1–0.4',
      title: 'Módulo 0 — da Faixa 0 à arquitetura',
      subtitle: 'Ponte dos fundamentos: o que é arquitetura, acoplamento e coesão, módulos/interfaces/direção de dependência e trade-off/ADR.',
      prerequisites: [
        'Concluir a Trilha 0 (Fundamentos) ou equivalente.',
        'Ter escrito um programa com mais de um arquivo.',
        'Nenhuma experiência prévia de arquitetura.'
      ],
      objectives: [
        'Distinguir decisão estrutural (cara de reverter) de detalhe local.',
        'Entender acoplamento e coesão e por que a meta é baixo acoplamento com alta coesão.',
        'Ver um sistema como grafo de módulos, esconder o "como" atrás de interfaces e evitar ciclos.',
        'Aceitar que toda decisão é um trade-off e registrá-la num ADR curto.'
      ]
    },
    fundamentos: {
      index: '1/6',
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
      index: '2/6',
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
      index: '3/6',
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
      index: '4/6',
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
    fronteira: {
      index: '5/6',
      range: 'Módulos 19–25',
      title: 'Fronteira: provar a arquitetura',
      subtitle: 'Event sourcing, especificação formal, simulação determinística, caos, células e os papers que definiram a área.',
      prerequisites: [
        'Dominar os módulos 10–14: falha parcial, consistência, resiliência e escala.',
        'Ter desenhado ao menos um sistema distribuído e visto uma hipótese sua ser desmentida por produção.',
        'Aceitar que aqui o objetivo é procurar o erro no próprio desenho antes que o cliente encontre.'
      ],
      objectives: [
        'Modelar o estado como log de eventos e derivar projeções, sabendo o preço de fazer isso.',
        'Especificar um protocolo em TLA+ ou Alloy e encontrar por verificação um erro que a revisão humana não pegaria.',
        'Testar sistema distribuído por simulação determinística e injeção de falha, com reprodução por semente.',
        'Conduzir chaos engineering como experimento com hipótese, raio de alcance e critério de parada.',
        'Projetar isolamento por células e shuffle sharding, calculando o raio de impacto em vez de estimá-lo.',
        'Extrair de um paper fundador a decisão, a restrição da época e o que ainda se aplica.',
        'Tratar um agente de IA como componente arquitetural: não determinístico, com custo, latência e fallback.'
      ]
    },
    avaliacao: {
      index: '6/6',
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
    number: '0.1',
    part: 'base',
    id: 'base-o-que-e-arquitetura',
    title: 'O que é arquitetura (e o que não é)',
    level: 'Ponte (Faixa 0)',
    objective: 'Distinguir decisão estrutural (cara de reverter) de detalhe local (reversível) e entender por que a estrutura de um sistema — não o framework — decide o custo de mudá-lo.',
    prerequisites: ['Trilha 0 (como um programa roda, funções, lógica)', 'Ter escrito um programa com mais de um arquivo', 'Nenhuma experiência prévia de arquitetura'],
    problem: 'Quem sai da Faixa 0 sabe escrever funções, mas nunca pensou na FORMA do sistema. Sem isso, "arquitetura" vira escolher framework ou desenhar caixinhas bonitas — e o custo real (mudar sem quebrar tudo) fica invisível.',
    concepts: ['Estrutura vs comportamento', 'Decisão estrutural vs detalhe de implementação', 'Custo de reversão', 'Por que a forma decide o custo de mudança', '"Não existe a melhor arquitetura"'],
    internals: ['Comportamento é o que o sistema faz; estrutura é como as partes se conectam — e é a estrutura que decide o quão caro é mudar.', 'Uma decisão é arquitetural quando é cara de reverter ou cruza fronteiras de equipe; o resto é detalhe local.', 'Trocar a cor de um botão é detalhe; trocar "tudo num arquivo" por módulos separados é estrutural.'],
    useWhen: ['Trate como arquitetural o que é caro de reverter (formato de dados, fronteiras entre partes).', 'Deixe como detalhe o que é local e trocável (nome de variável, biblioteca de formatação).', 'Pense na estrutura antes de escolher a ferramenta.'],
    avoidWhen: ['Não confunda escolher um framework com definir a arquitetura.', 'Não desenhe caixinhas sem dizer quem depende de quem.', 'Não persiga a "arquitetura perfeita": ela não existe.'],
    contrast: {
      bad: 'Jogar todo o código num só arquivo gigante porque "funciona" — qualquer mudança arrisca quebrar o resto.',
      good: 'Separar o programa em partes com responsabilidades claras, de modo que mudar uma quase nunca obrigue mexer nas outras.'
    },
    tradeoffs: ['Pensar a estrutura cedo custa tempo e evita reescrita depois.', 'Estrutura demais cedo demais (over-engineering) trava um projeto simples.', 'Nenhuma estrutura é grátis: toda escolha privilegia algo e sacrifica outro.'],
    production: 'Um sistema nasce como um arquivo só e cresce; um dia toda alteração quebra algo distante. O exercício identifica quais decisões eram estruturais (e deviam ter sido explícitas) e quais eram detalhe.',
    risks: ['Confundir arquitetura com framework', 'Arquitetura acidental (ninguém decidiu, virou assim)', 'Over-engineering num projeto simples', 'Ignorar o custo de reverter'],
    checklist: ['Esta decisão é cara de reverter?', 'Ela cruza a fronteira entre partes ou times?', 'É estrutura ou detalhe local?', 'A forma do sistema está clara para quem vai mexer?', 'Estou escolhendo pela força certa, não pela moda?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual a diferença entre arquitetura e detalhe de implementação?', expected: 'Arquitetura são decisões estruturais caras de reverter (fronteiras, formato de dados); detalhe é local e reversível (nome, biblioteca trocável).' },
      { level: 'Sênior/Expert', question: 'Por que se diz que "não existe a melhor arquitetura"?', expected: 'Porque toda estrutura privilegia certas forças (simplicidade, escala, velocidade) e sacrifica outras; a boa escolha depende das forças priorizadas e do custo de reversão.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Listar 8 decisões de um programa seu e marcar cada uma como "estrutural" ou "detalhe".', evidence: 'Tabela com justificativa de custo de reversão.' },
      { level: 'Aplicado', task: 'Pegar um script de arquivo único e desenhar como você o separaria em 3 partes com responsabilidades.', evidence: 'Diagrama simples de partes e dependências.' },
      { level: 'Expert', task: 'Explicar uma decisão estrutural que você tomaria hoje e a força que ela privilegia vs a que sacrifica.', evidence: 'Meia página com o trade-off explícito.' }
    ],
    challenge: 'Explicar, em 5 minutos e sem jargão, por que "está tudo num arquivo só" é uma decisão de arquitetura — e o que ela custa quando o sistema cresce.',
    book: 'Fundamentals of Software Architecture, cap. 1–2 (o que é arquitetura e pensamento arquitetural).',
    complements: [official.fowler, official.c4],
    quiz: [
      { question: 'O que caracteriza uma decisão ARQUITETURAL (vs um detalhe)?', options: ['Ser cara de reverter e/ou cruzar fronteiras entre partes/times', 'Usar uma linguagem de programação específica', 'Ter muitas linhas de código', 'Estar num arquivo grande'], answer: 0, why: 'Arquitetura = decisões estruturais caras de reverter; detalhe é local e reversível.' },
      { question: 'Por que "não existe a melhor arquitetura"?', options: ['Toda estrutura privilegia certas forças e sacrifica outras', 'Porque todas são igualmente ruins', 'Porque falta uma ferramenta boa', 'Porque ninguém entende de arquitetura'], answer: 0, why: 'A escolha depende das forças priorizadas e das restrições — é sempre um trade-off.' },
      { question: 'Estrutura vs comportamento: o que decide o custo de MUDAR um sistema?', options: ['A estrutura (como as partes se conectam)', 'A cor da interface', 'O nome das variáveis', 'A quantidade de comentários'], answer: 0, why: 'O comportamento é o que o sistema faz; a estrutura é o que torna a mudança barata ou cara.' }
    ]
  },
  {
    number: '0.2',
    part: 'base',
    id: 'base-acoplamento-coesao',
    title: 'Acoplamento e coesão: o par que decide tudo',
    level: 'Ponte (Faixa 0)',
    objective: 'Entender acoplamento (o quanto um módulo depende de outros) e coesão (o quanto o que está junto pertence junto), e por que a meta é baixo acoplamento com alta coesão.',
    prerequisites: ['Módulo 0.1', 'Saber separar código em funções/arquivos', 'Ideia de dependência (A usa B)'],
    problem: 'Iniciante junta código por acaso: funções sem relação no mesmo arquivo e módulos que dependem de detalhes internos uns dos outros. Aí uma mudança pequena estoura em cascata pelo sistema.',
    concepts: ['Acoplamento (dependência entre módulos)', 'Coesão (pertencimento interno)', 'Baixo acoplamento, alta coesão', 'Efeito cascata da mudança', 'Fan-in e fan-out (intuição)'],
    internals: ['Acoplamento alto: mudar A obriga a mexer em B, C, D — a mudança se propaga.', 'Coesão alta: tudo dentro de um módulo serve ao mesmo propósito, então ele muda por um motivo só.', 'A meta prática é isolar o que muda junto e separar o que muda por razões diferentes.'],
    useWhen: ['Agrupe (alta coesão) o que muda pela mesma razão.', 'Separe (baixo acoplamento) o que muda por razões diferentes.', 'Reduza o acoplamento escondendo detalhes atrás de um contrato (módulo 0.3).'],
    avoidWhen: ['Não junte funções sem relação só porque "cabem" no mesmo arquivo.', 'Não deixe um módulo depender do interior de outro.', 'Não crie mil módulos minúsculos (baixa coesão também é ruim).'],
    contrast: {
      bad: 'Um módulo "utils" que faz de tudo (data, e-mail, imposto): baixa coesão, e meio sistema depende dele (acoplamento alto).',
      good: 'Um módulo "imposto" coeso, usado por outros só através de uma função pública clara: alta coesão, baixo acoplamento.'
    },
    tradeoffs: ['Menos acoplamento custa mais interfaces/indireção.', 'Buscar coesão perfeita pode fragmentar demais o sistema.', 'Reduzir dependências às vezes duplica um pouco de código — e tudo bem se evita a cascata.'],
    production: 'Uma mudança de regra de imposto obriga a alterar 12 arquivos porque a lógica estava espalhada (baixa coesão) e todo mundo chamava seus detalhes (alto acoplamento). O exercício reagrupa e reduz as dependências.',
    risks: ['Módulo "faz-tudo" (God object / utils)', 'Dependência de detalhes internos alheios', 'Efeito cascata a cada mudança', 'Fragmentação excessiva'],
    checklist: ['Cada módulo tem um propósito só (alta coesão)?', 'Quem depende deste módulo?', 'Uma mudança aqui vaza para quantos lugares?', 'As dependências passam por um contrato público?', 'Há um "utils" fazendo coisas demais?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que são acoplamento e coesão?', expected: 'Acoplamento é o grau de dependência entre módulos; coesão é o quanto os elementos de um módulo pertencem juntos. A meta é baixo acoplamento e alta coesão.' },
      { level: 'Sênior/Expert', question: 'Por que baixo acoplamento importa na prática?', expected: 'Porque limita o alcance de uma mudança: com baixo acoplamento, alterar um módulo não obriga a mexer nos outros, reduzindo risco, retrabalho e regressões.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Dado um módulo "utils" que mistura 3 assuntos, propor como separá-lo por coesão.', evidence: 'Lista dos módulos coesos resultantes.' },
      { level: 'Aplicado', task: 'Mapear as dependências (quem usa quem) de um mini-sistema e apontar o de maior acoplamento.', evidence: 'Grafo simples com fan-in/fan-out anotados.' },
      { level: 'Expert', task: 'Reduzir o acoplamento de um módulo escondendo seus detalhes atrás de uma interface.', evidence: 'Antes/depois do grafo de dependências.' }
    ],
    challenge: 'Pegar um "utils" real e defender uma separação por coesão, mostrando como o acoplamento cai no grafo de dependências.',
    book: 'Fundamentals of Software Architecture, cap. 3–4 (modularidade: acoplamento, coesão e conexão).',
    complements: [official.fowler, official.archunit],
    quiz: [
      { question: 'Qual é a meta clássica de modularidade?', options: ['Baixo acoplamento e alta coesão', 'Alto acoplamento e baixa coesão', 'Muitos módulos minúsculos', 'Um único módulo grande'], answer: 0, why: 'Baixo acoplamento limita o alcance da mudança; alta coesão faz cada módulo mudar por um motivo só.' },
      { question: 'Um módulo "utils" que faz data, e-mail e imposto sofre de:', options: ['Baixa coesão (assuntos sem relação juntos)', 'Alta coesão', 'Baixo acoplamento', 'Falta de comentários'], answer: 0, why: 'Coisas sem relação no mesmo módulo = baixa coesão; e, como todos o usam, o acoplamento sobe.' },
      { question: 'Por que baixo acoplamento reduz risco?', options: ['Uma mudança num módulo não se propaga para os outros', 'Deixa o código mais bonito', 'Usa menos memória', 'Elimina a necessidade de testes'], answer: 0, why: 'Com baixo acoplamento, o alcance de uma alteração fica contido, reduzindo regressões.' }
    ]
  },
  {
    number: '0.3',
    part: 'base',
    id: 'base-modulos-interfaces',
    title: 'Dividir para conquistar: módulos, interfaces e direção de dependência',
    level: 'Ponte (Faixa 0)',
    objective: 'Ver um sistema como um grafo de módulos, esconder o "como" atrás de uma interface (contrato) e fazer as dependências apontarem para um núcleo estável, sem ciclos.',
    prerequisites: ['Módulo 0.2', 'Ideia de função pública vs detalhe interno', 'Saber ler um grafo simples'],
    problem: 'Sem fronteiras, tudo conhece tudo: o sistema vira um novelo onde qualquer fio puxa os outros. Faltam interfaces (contratos) e uma direção clara para as dependências.',
    concepts: ['Módulo e fronteira', 'Interface/contrato esconde o "como"', 'Grafo de dependências', 'Ciclo de dependência (o inimigo)', 'Direção de dependência para um núcleo estável'],
    internals: ['Uma interface separa o QUE um módulo oferece do COMO ele faz; quem usa depende do contrato, não do detalhe.', 'Dependências formam um grafo; um ciclo (A→B→A) acopla os dois para sempre.', 'Apontar as dependências para um núcleo estável (que não depende de ninguém) deixa cada camada mudar sozinha.'],
    useWhen: ['Exponha cada módulo por uma interface e esconda o resto.', 'Mantenha o grafo de dependências acíclico.', 'Faça o que muda muito depender do que muda pouco (o núcleo estável).'],
    avoidWhen: ['Não deixe um módulo alcançar o interior de outro.', 'Não crie ciclos de dependência.', 'Não faça o núcleo estável depender de detalhes de UI ou infraestrutura.'],
    contrast: {
      bad: 'Pagamento chama pedidos e pedidos chama pagamento: um ciclo em que mudar um obriga mexer no outro.',
      good: 'Pagamento publica um evento; o núcleo (domínio) não depende de ninguém e todos apontam para ele — grafo acíclico.'
    },
    tradeoffs: ['Interfaces custam indireção, mas compram liberdade de mudar o "como".', 'Inverter dependências (apontar para o núcleo) adiciona abstração, mas remove ciclos.', 'Mais fronteiras dão isolamento e cobram um pouco de cerimônia.'],
    production: 'Um ciclo entre módulos impede testar ou dar deploy de um sem o outro. O exercício quebra o ciclo com um evento/interface e prova, no grafo, que a mudança volta a ser local. (Ver o exemplo executável.)',
    risks: ['Ciclos de dependência', 'Vazamento de detalhes internos', 'Núcleo dependendo de UI/infra', 'Interface que só repassa (indireção inútil)'],
    checklist: ['Cada módulo é usado só pela sua interface?', 'O grafo de dependências é acíclico?', 'As dependências apontam para um núcleo estável?', 'O núcleo depende de alguém? (não deveria)', 'Dá para testar/mudar um módulo isolado?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Para que serve uma interface entre módulos?', expected: 'Ela separa o que o módulo oferece do como ele faz; quem usa depende do contrato, permitindo trocar a implementação sem afetar os outros.' },
      { level: 'Sênior/Expert', question: 'Por que ciclos de dependência são um problema e como removê-los?', expected: 'Ciclos acoplam módulos permanentemente (não dá para mudar/testar/deployar um sem o outro); removem-se invertendo a dependência — por exemplo, um evento ou uma interface no núcleo estável.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Rodar o exemplo e explicar por que o design "ruim" tem ciclo e o "bom" não.', evidence: 'Saída do script + explicação do ciclo.' },
      { level: 'Aplicado', task: 'Desenhar o grafo de um mini-sistema e apontar a direção das dependências para um núcleo.', evidence: 'Grafo acíclico com o núcleo identificado.' },
      { level: 'Expert', task: 'Quebrar um ciclo real invertendo a dependência (interface ou evento) e mostrar o grafo antes/depois.', evidence: 'Diff do grafo + justificativa.' }
    ],
    challenge: 'Dado um grafo com ciclo, quebrar o ciclo por inversão de dependência e provar, medindo fan-in/fan-out, que o acoplamento caiu.',
    book: 'Fundamentals of Software Architecture, cap. 3–5; Software Architecture: The Hard Parts (fronteiras e acoplamento).',
    complements: [official.c4, official.modulith],
    exampleFile: '../../examples/arquitetura-senior/arquitetura-zero.mjs',
    quiz: [
      { question: 'Para que serve uma interface (contrato) entre módulos?', options: ['Separar o QUE o módulo oferece do COMO ele faz, escondendo detalhes', 'Deixar o código mais longo', 'Aumentar o acoplamento', 'Substituir os testes'], answer: 0, why: 'Quem usa depende do contrato, não do detalhe — a implementação pode mudar sem afetar os outros.' },
      { question: 'Por que um ciclo de dependência (A→B→A) é ruim?', options: ['Acopla os módulos: não dá para mudar/testar/deployar um sem o outro', 'Usa mais disco', 'Deixa o grafo mais bonito', 'Não é ruim'], answer: 0, why: 'O ciclo torna os módulos inseparáveis; quebra-se invertendo a dependência (evento/interface).' },
      { question: 'Num bom design, as dependências devem apontar para:', options: ['Um núcleo estável, que não depende de ninguém', 'A interface do usuário', 'O banco de dados', 'O módulo mais novo'], answer: 0, why: 'O núcleo estável (fan-out 0, fan-in alto) deixa as camadas externas mudarem sem arrastar o resto.' }
    ]
  },
  {
    number: '0.4',
    part: 'base',
    id: 'base-tradeoff-adr',
    title: 'Trade-off e ADR: toda decisão custa algo — registre',
    level: 'Ponte (Faixa 0)',
    objective: 'Aceitar que toda decisão de arquitetura é um trade-off (nada é grátis) e aprender a registrar a decisão, a alternativa descartada e o porquê num ADR curto.',
    prerequisites: ['Módulo 0.3', 'Ter tomado ao menos uma decisão técnica', 'Saber escrever um parágrafo claro'],
    problem: 'Iniciante decide por hábito ou hype ("todo mundo usa X") e não anota nada. Meses depois ninguém lembra por que foi assim, e a discussão recomeça do zero a cada nova pessoa.',
    concepts: ['Trade-off: privilegiar uma força sacrificando outra', 'Decisão por evidência vs por moda', 'ADR (Architecture Decision Record)', 'Alternativas consideradas', 'Contexto e consequência da decisão'],
    internals: ['Toda escolha estrutural ganha algo e perde algo; o trabalho é tornar essa troca explícita.', 'Um ADR registra contexto, decisão, alternativas descartadas e consequências — em uma página.', 'A alternativa descartada, escrita, é o que impede refazer a mesma discussão depois.'],
    useWhen: ['Escreva um ADR quando a decisão for cara de reverter ou afetar outros times.', 'Liste a força privilegiada e a sacrificada.', 'Registre a alternativa que você NÃO escolheu e por quê.'],
    avoidWhen: ['Não decida por "todo mundo usa" sem mapear a força relevante.', 'Não escreva um ADR de 20 páginas — ele morre sem leitura.', 'Não deixe decisões estruturais sem registro algum.'],
    contrast: {
      bad: 'Adotar microsserviços "porque é moderno", sem escala nem time, e não registrar nada.',
      good: 'Registrar em ADR: "monólito modular escolhido por simplicidade operacional; microsserviços descartados por falta de escala; revisar se a carga passar de X".'
    },
    tradeoffs: ['Escrever o ADR custa minutos e economiza horas de rediscussão.', 'ADR longo demais não é lido; curto demais perde o contexto.', 'Registrar a alternativa descartada expõe o raciocínio — e é justamente isso que dá valor.'],
    production: 'Uma decisão importante foi tomada num chat e se perdeu; seis meses depois o time reabre a mesma briga. O exercício reconstrói a decisão como ADR com contexto, alternativas e consequências.',
    risks: ['Decidir por hype (resume-driven development)', 'Decisão sem registro', 'ADR que ninguém lê', 'Esconder o trade-off ("é só vantagem")'],
    checklist: ['Qual força esta decisão privilegia e qual sacrifica?', 'Qual alternativa foi descartada e por quê?', 'O contexto está registrado?', 'A consequência (o que fica mais difícil) está clara?', 'O ADR cabe em uma página?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que é um trade-off em arquitetura?', expected: 'É a troca inevitável de uma escolha: privilegiar uma qualidade (ex.: simplicidade) custa outra (ex.: escala). Não existe decisão só com vantagens.' },
      { level: 'Sênior/Expert', question: 'Para que serve um ADR e o que não pode faltar nele?', expected: 'Registrar uma decisão arquitetural com contexto, a decisão, as alternativas descartadas e as consequências — para que a escolha seja rastreável e não se rediscuta sem informação nova.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Escrever um ADR de uma página para uma decisão real (ex.: SQL vs planilha), com a alternativa descartada.', evidence: 'ADR no formato contexto/decisão/consequências.' },
      { level: 'Aplicado', task: 'Pegar uma decisão tomada "por moda" e reescrevê-la explicitando o trade-off.', evidence: 'ADR com a força privilegiada e a sacrificada.' },
      { level: 'Expert', task: 'Escrever um ADR de superseção que reverte uma decisão antiga com base em nova restrição.', evidence: 'ADR de superseção com gatilho medido.' }
    ],
    challenge: 'Defender uma decisão técnica sua em 5 minutos usando um ADR: contexto, trade-off, alternativa descartada e quando reconsiderar.',
    book: 'Fundamentals of Software Architecture, cap. 19 (decisões de arquitetura e ADR).',
    complements: [official.adr, official.fowler],
    quiz: [
      { question: 'O que é um trade-off em arquitetura?', options: ['Privilegiar uma qualidade sacrificando outra — nada é só vantagem', 'Um bug que aparece em produção', 'Uma técnica de otimização', 'Escolher a melhor opção sem custo algum'], answer: 0, why: 'Toda decisão estrutural ganha algo e perde algo; o trabalho é tornar a troca explícita.' },
      { question: 'O que um ADR precisa conter?', options: ['Contexto, a decisão, alternativas descartadas e consequências', 'Só o nome do framework escolhido', 'O código completo do sistema', 'A lista de bugs'], answer: 0, why: 'O ADR torna a decisão rastreável; a alternativa descartada evita rediscutir sem informação nova.' },
      { question: 'Por que registrar a alternativa que você NÃO escolheu?', options: ['Para não refazer a mesma discussão quando alguém novo chegar', 'Para deixar o documento maior', 'Porque a alternativa é a certa', 'Não há motivo'], answer: 0, why: 'O raciocínio registrado (por que descartamos X) é o que dá valor ao ADR ao longo do tempo.' }
    ]
  },
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
    exampleFile: '../../examples/arquitetura-senior/natureza-decisao.mjs'
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
    exampleFile: '../../examples/arquitetura-senior/estilos-fit.mjs'
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
    exampleFile: '../../examples/arquitetura-senior/fitness-acoplamento.mjs'
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
    exampleFile: '../../examples/arquitetura-senior/context-mapping.mjs'
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
    exampleFile: '../../examples/arquitetura-senior/agregado-invariante.mjs'
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
    exampleFile: '../../examples/arquitetura-senior/mensageria-idempotencia.mjs'
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
    exampleFile: '../../examples/arquitetura-senior/cap-particao.mjs'
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
    exampleFile: '../../examples/arquitetura-senior/particionamento-hash.mjs'
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
    exampleFile: '../../examples/arquitetura-senior/circuit-breaker.mjs'
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
    exampleFile: '../../examples/arquitetura-senior/cache-little.mjs'
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
    exampleFile: '../../examples/arquitetura-senior/slo-error-budget.mjs'
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
    exampleFile: '../../examples/arquitetura-senior/zero-trust-authz.mjs'
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
    exampleFile: '../../examples/arquitetura-senior/conway-fitness.mjs'
  },
  {
    number: 19,
    part: 'fronteira',
    id: 'event-sourcing-cqrs',
    title: 'Event sourcing e CQRS: o log como modelo de escrita',
    level: 'Sênior → Expert',
    objective: 'Decidir quando o estado deve ser derivado de um log de eventos imutáveis, e projetar streams, projeções e versionamento sabendo o preço que isso cobra por décadas.',
    prerequisites: ['Módulo 7 (agregados e domain events)', 'Módulo 12 (outbox e idempotência)', 'Módulo 11 (dados intensivos)'],
    problem: 'Event sourcing é adotado por motivos errados — "queremos auditoria", "queremos desacoplar" — e o custo só aparece dois anos depois, quando é preciso mudar o formato de um evento que já tem cem milhões de instâncias gravadas, ou apagar o dado de um cliente de um log imutável.',
    concepts: ['Evento como fato imutável no passado, não como comando', 'Stream por agregado e limite de consistência', 'Projeções e read models eventualmente consistentes', 'Snapshots e o custo do replay', 'Versionamento de evento, upcasting e weak schema', 'CQRS: separar o modelo de escrita do de leitura', 'Direito ao esquecimento sobre log imutável: crypto-shredding'],
    internals: [
      'O log é a fonte da verdade; qualquer visão de leitura é derivada e descartável — essa é a propriedade que dá o poder e também o custo.',
      'Replay é a operação que torna tudo possível e é o gargalo: sem snapshot, reconstruir um agregado longevo lê o stream inteiro.',
      'Evento gravado não se altera. Evoluir formato significa conviver com todas as versões passadas — upcasting na leitura, não migração na escrita.',
      'CQRS é ortogonal a event sourcing: dá para ter um sem o outro, e a maior parte dos sistemas quer CQRS sem event sourcing.'
    ],
    useWhen: ['Use quando o histórico de como se chegou ao estado É o requisito (financeiro, regulatório, auditoria forense).', 'Use quando várias leituras muito diferentes precisam do mesmo fato.', 'Use CQRS sozinho quando o problema é só assimetria entre leitura e escrita.'],
    avoidWhen: ['Não use para CRUD com auditoria: tabela de histórico resolve com uma fração do custo.', 'Não use quando o time não tem como sustentar versionamento de evento por anos.', 'Não aplique ao sistema inteiro — é decisão por bounded context.'],
    contrast: {
      bad: 'Event sourcing em todos os contextos "para padronizar", com eventos nomeados como comandos (`AtualizarCliente`) e sem política de versionamento.',
      good: 'Event sourcing apenas no contexto de conta corrente, onde o extrato é o produto; os demais contextos usam estado com histórico, e só a leitura é segregada.'
    },
    tradeoffs: ['O log dá auditoria perfeita e temporalidade, e cobra complexidade permanente de versionamento.', 'Projeções dão leituras sob medida e introduzem consistência eventual visível ao usuário.', 'Snapshots aceleram replay e criam um segundo artefato para manter correto.'],
    production: 'Um sistema de pedidos adota event sourcing em todos os contextos. Dois anos depois, a inclusão de um campo obrigatório exige upcaster para quatro versões do evento, o replay de um agregado leva 40 s e uma solicitação de exclusão de dados pessoais não tem resposta técnica. O redesign mantém o log apenas onde o histórico é o produto e adota crypto-shredding para o dado pessoal.',
    risks: ['Evento nomeado como comando, acoplando o log à implementação', 'Ausência de política de versionamento desde o primeiro evento', 'Replay inviável por falta de snapshot', 'Consistência eventual exposta ao usuário sem desenho de UX', 'Conflito entre log imutável e direito ao esquecimento'],
    checklist: ['O histórico é requisito ou conveniência?', 'Os eventos estão no passado e na linguagem do domínio?', 'Existe política de versionamento escrita antes do primeiro deploy?', 'O replay do maior agregado cabe no orçamento de tempo?', 'Há resposta técnica para exclusão de dado pessoal?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual a diferença entre CQRS e event sourcing?', expected: 'CQRS separa o modelo de leitura do de escrita; event sourcing guarda o estado como sequência de eventos. São independentes — CQRS sem event sourcing é comum e muito mais barato.' },
      { level: 'Sênior/Expert', question: 'Como evoluir o formato de um evento que já tem milhões de instâncias gravadas?', expected: 'Não se altera o gravado: adiciona-se versão nova e um upcaster na leitura, mantendo compatibilidade com todas as anteriores; mudanças quebrantes exigem novo tipo de evento e período de convivência. Discutir também weak schema e tolerância a campos desconhecidos.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Modelar um agregado de conta corrente como stream de eventos e derivar o saldo por replay.', evidence: 'Eventos nomeados no passado, projeção de saldo e teste que reconstrói o estado do zero.' },
      { level: 'Aplicado', task: 'Evoluir um evento para uma versão nova e implementar o upcaster sem tocar no que já está gravado.', evidence: 'As duas versões convivendo, upcaster testado e nota de compatibilidade.' },
      { level: 'Expert', task: 'Comparar event sourcing e estado com histórico para o mesmo contexto e recomendar um.', evidence: 'ADR com custo de manutenção por 3 anos, resposta a exclusão de dado pessoal e critério de reversão.' }
    ],
    challenge: 'Escrever o ADR que recusa event sourcing para um contexto em que ele foi pedido, com a alternativa que atende ao requisito real por um custo menor.',
    book: 'Implementing Domain-Driven Design, cap. 8 (domain events); Designing Data-Intensive Applications, cap. 11 (processamento de stream e derivação de estado).',
    complements: [official.eventSourcing, official.cqrs, official.eventStorming],
    exampleFile: '../../examples/arquitetura-senior/adr/0006-event-sourcing-scope.md'
  },
  {
    number: 20,
    part: 'fronteira',
    id: 'metodos-formais',
    title: 'Especificação formal: TLA+, Alloy e verificação de protocolos',
    level: 'Expert',
    objective: 'Especificar um protocolo distribuído em TLA+ ou Alloy e deixar o verificador encontrar o intercalamento de eventos que a revisão humana não encontraria.',
    prerequisites: ['Módulo 10 (falha parcial e consenso)', 'Módulo 12 (saga e idempotência)', 'Disposição para pensar em estados, não em código'],
    problem: 'Os piores defeitos de sistemas distribuídos não são bugs de código: são desenhos que só falham numa ordem específica de mensagens, sob uma falha específica, uma vez a cada milhões de execuções. Nenhum volume de code review acha isso, porque o ser humano não enumera intercalamentos. Um verificador de modelos enumera.',
    concepts: ['Especificar o QUE o sistema deve fazer, separado de COMO', 'Estado, ação, invariante e propriedade temporal', 'Safety ("nada ruim acontece") versus liveness ("algo bom acaba acontecendo")', 'Verificação por enumeração de estados e explosão combinatória', 'TLA+/PlusCal para protocolos; Alloy para estruturas e relações', 'Contraexemplo como principal produto: o traço que leva à violação', 'Onde parar: especificar o protocolo, não a implementação'],
    internals: [
      'O verificador explora todos os intercalamentos possíveis dentro dos limites que você declarar; ele não prova o sistema, prova o modelo — a fidelidade do modelo é sua responsabilidade.',
      'O valor prático aparece antes de rodar o verificador: escrever a invariante obriga a dizer o que "correto" significa, e é aí que boa parte das ambiguidades morre.',
      'A explosão de estados é gerenciada limitando o modelo (três nós, duas mensagens) — defeitos de protocolo costumam aparecer em modelos pequenos.',
      'Amazon relata em publicação revisada o uso de TLA+ para achar defeitos sutis em serviços de produção antes do lançamento.'
    ],
    useWhen: ['Use em protocolo de consenso, replicação, saga de múltiplos passos e migração com dupla escrita.', 'Use quando o custo de um defeito raro for alto demais para descobrir em produção.', 'Use Alloy quando a dúvida for sobre estrutura e relações, não sobre ordem no tempo.'],
    avoidWhen: ['Não especifique CRUD nem lógica de negócio sequencial.', 'Não tente modelar a implementação inteira: o modelo tem de caber na cabeça.', 'Não trate o modelo verificado como garantia da implementação — são artefatos distintos.'],
    contrast: {
      bad: 'Revisar por três semanas um desenho de replicação em reunião, aprovar por consenso e descobrir o problema seis meses depois num incidente.',
      good: 'Escrever 60 linhas de especificação, rodar o verificador, receber um traço de 11 passos que viola a invariante e corrigir o desenho antes de escrever código.'
    },
    tradeoffs: ['A verificação encontra defeitos que nenhuma revisão encontra e custa aprender uma notação nova.', 'Modelo pequeno verifica rápido e pode esconder defeitos que só aparecem em escala maior.', 'A especificação envelhece se não for mantida junto com o desenho.'],
    production: 'Uma migração com dupla escrita entre dois bancos é aprovada em revisão. A especificação em TLA+ revela que, se a segunda escrita falhar exatamente após a confirmação da primeira e antes do registro do outbox, existe uma janela em que a reconciliação escolhe o valor antigo. O contraexemplo tem nove passos; nenhum dos quatro revisores o tinha imaginado.',
    risks: ['Modelo que não corresponde ao sistema real', 'Confundir modelo verificado com implementação correta', 'Especificação abandonada e divergente do desenho', 'Escopo grande demais tornando a verificação inviável'],
    checklist: ['A invariante está escrita em uma frase antes do modelo?', 'O modelo tem o menor número de nós que ainda expõe o problema?', 'Safety e liveness estão separadas?', 'O contraexemplo foi traduzido para linguagem de gente?', 'A especificação está versionada junto com o ADR?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que é uma invariante de sistema, e por que escrevê-la ajuda antes de qualquer ferramenta?', expected: 'É uma propriedade que precisa valer em todo estado alcançável. Escrevê-la obriga a definir o que significa "correto", o que resolve ambiguidade mesmo sem verificador.' },
      { level: 'Sênior/Expert', question: 'Quando você investiria duas semanas escrevendo uma especificação formal?', expected: 'Protocolo novo de replicação, consenso, migração com dupla escrita ou saga longa, em que o defeito é raro, caro e praticamente indetectável em teste — e em que o desenho ainda pode mudar. Nunca para lógica sequencial de negócio.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Escrever em uma frase a invariante de segurança de um sistema que você mantém e mostrar um cenário que a violaria.', evidence: 'Invariante escrita, cenário descrito e verificação de que o sistema atual a protege ou não.' },
      { level: 'Aplicado', task: 'Especificar em TLA+ (ou PlusCal) uma saga de dois passos com compensação e verificar a invariante de que nunca há débito sem crédito ou compensação.', evidence: 'Especificação versionada, saída do verificador e interpretação do resultado.' },
      { level: 'Expert', task: 'Introduzir deliberadamente um defeito no desenho e usar o contraexemplo do verificador para explicar a falha a alguém que não conhece TLA+.', evidence: 'Traço do contraexemplo traduzido em narrativa e ADR com a correção.' }
    ],
    challenge: 'Pegar um desenho seu já aprovado em revisão, especificá-lo e verificar se o verificador concorda com os revisores.',
    book: 'Designing Data-Intensive Applications, cap. 8–9 (problemas de sistemas distribuídos, consistência e consenso) como base conceitual da especificação.',
    complements: [official.tlaplus, official.learnTla, official.alloy, official.amazonTla],
    exampleFile: '../../examples/arquitetura-senior/formal/OrderSaga.tla'
  },
  {
    number: 21,
    part: 'fronteira',
    id: 'simulacao-deterministica',
    title: 'Testar o distribuído: simulação determinística e injeção de falha',
    level: 'Expert',
    objective: 'Projetar um regime de teste em que falhas raras se tornam frequentes e reprodutíveis por semente, em vez de esperar que a produção as encontre.',
    prerequisites: ['Módulo 10', 'Módulo 13 (resiliência)', 'Módulo 20 ajuda, mas não é obrigatório'],
    problem: 'Teste de integração comum exercita o caminho feliz com a rede funcionando. As falhas que derrubam sistemas distribuídos — partição no meio de um commit, relógio andando para trás, disco devolvendo dado antigo, mensagem duplicada dez minutos depois — não acontecem em CI, acontecem às três da manhã. E quando acontecem, não se reproduzem.',
    concepts: ['Determinismo como propriedade de projeto: tempo, aleatoriedade e I/O injetáveis', 'Simulação determinística e reprodução por semente', 'Injeção de falha: partição, atraso, duplicação, reordenação, perda, crash', 'Relógio lógico versus relógio de parede no teste', 'Property-based testing aplicado a protocolo', 'Verificação de linearizabilidade (abordagem Jepsen)', 'Custo de tornar o sistema determinístico'],
    internals: [
      'A ideia central é remover toda fonte de não determinismo do sistema e colocá-la no simulador: se tempo, escalonamento, rede e aleatoriedade vêm de uma semente, a execução inteira é reprodutível.',
      'Com o relógio sob controle, dias de tempo simulado rodam em segundos — é isso que torna a falha rara frequente.',
      'Quando o teste falha, o artefato é a semente: qualquer pessoa reproduz exatamente a mesma execução, inclusive no depurador.',
      'FoundationDB e TigerBeetle construíram o sistema inteiro em torno dessa propriedade; adotá-la depois é muito mais caro do que desde o início.'
    ],
    useWhen: ['Use quando correção sob falha é requisito e não conveniência (dados, pagamento, coordenação).', 'Use injeção de falha mesmo sem determinismo total — é o degrau mais barato.', 'Use verificação de linearizabilidade para checar a garantia que o sistema anuncia.'],
    avoidWhen: ['Não busque determinismo total em sistema que só orquestra chamadas de terceiros.', 'Não substitua teste em produção por simulação: o simulador só tem as falhas que você modelou.', 'Não introduza a abstração de tempo injetável em toda a base sem um caso que a justifique.'],
    contrast: {
      bad: 'Suite verde há dois anos, e um incidente por trimestre causado por reordenação de mensagem que nenhum teste jamais produziu.',
      good: 'Teste que roda dez mil execuções com falhas injetadas por semente e, ao falhar, entrega a semente que reproduz o defeito no depurador.'
    },
    tradeoffs: ['Determinismo dá reprodutibilidade e exige arquitetura desenhada para isso.', 'Injeção de falha é barata de começar e não cobre o que você não pensou em injetar.', 'Mais execuções aumentam a chance de achar o defeito raro e consomem tempo de CI.'],
    production: 'Um serviço de conciliação apresenta divergência de centavos uma vez por mês, sem reprodução. A adoção de relógio e rede injetáveis permite rodar 50 mil execuções com duplicação e reordenação; o defeito aparece em 0,3% delas e passa a ter semente fixa. A correção é uma chave de idempotência; o teste que a trava roda em 4 segundos.',
    risks: ['Falsa confiança: o simulador só falha do jeito que você programou', 'Determinismo parcial que esconde não determinismo residual', 'Tempo de CI inviável por número de execuções', 'Testes que dependem de tempo real e ficam intermitentes'],
    checklist: ['Tempo, aleatoriedade e I/O são injetáveis?', 'Uma falha entrega semente reprodutível?', 'Quais modos de falha estão modelados — e quais não estão?', 'A suíte roda execuções suficientes para o defeito raro aparecer?', 'A garantia anunciada é verificada, não presumida?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que um teste que usa `sleep` e relógio real costuma ficar intermitente?', expected: 'Porque o resultado depende de escalonamento e carga da máquina, que variam; o teste vira uma amostra aleatória em vez de uma verificação. Tempo injetável elimina a variável.' },
      { level: 'Sênior/Expert', question: 'Um defeito acontece uma vez por mês em produção e não reproduz. Como você o transforma em teste?', expected: 'Tornar as fontes de não determinismo injetáveis, modelar os modos de falha suspeitos, rodar muitas execuções por semente até reproduzir, fixar a semente como teste de regressão — e declarar quais modos de falha continuam não cobertos.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Substituir relógio real por relógio injetável num componente com timeout e escrever um teste que não usa espera real.', evidence: 'Teste determinístico, rodando em milissegundos, cobrindo o caso de expiração.' },
      { level: 'Aplicado', task: 'Injetar duplicação e reordenação de mensagens num consumidor e provar (ou refutar) a idempotência dele.', evidence: 'Harness de injeção, execuções com sementes e o defeito encontrado ou a evidência de ausência.' },
      { level: 'Expert', task: 'Construir um laço de simulação com semente que rode mil execuções com falhas combinadas e reporte a semente de cada falha.', evidence: 'Harness versionado, relatório de execuções e uma regressão travada por semente.' }
    ],
    challenge: 'Pegar o último incidente que "não reproduz" do seu sistema e transformá-lo num teste com semente fixa.',
    book: 'Designing Data-Intensive Applications, cap. 8 (falhas, relógios e verdade em sistemas distribuídos); Release It!, cap. sobre testes e padrões de estabilidade.',
    complements: [official.fdbTesting, official.tigerbeetle, official.jepsen],
    exampleFile: '../../examples/arquitetura-senior/testing/deterministic-simulation.md'
  },
  {
    number: 22,
    part: 'fronteira',
    id: 'chaos-engineering',
    title: 'Chaos engineering como disciplina experimental',
    level: 'Expert',
    objective: 'Conduzir experimentos de falha em produção com hipótese declarada, raio de alcance limitado e critério de parada — e distinguir isso de quebrar coisas.',
    prerequisites: ['Módulo 13 (resiliência)', 'Módulo 16 (observabilidade e SLO)', 'Autorização explícita e plano de reversão'],
    problem: 'Sistema resiliente não é o que tem circuit breaker no código: é o que já foi verificado falhando. A maioria dos mecanismos de resiliência nunca foi exercitada — o timeout está configurado errado, o fallback tem um bug, o alerta não dispara. Isso só se descobre no incidente real, a menos que você provoque o incidente sob controle.',
    concepts: ['Estado estável definido por métrica de negócio, não por CPU', 'Hipótese falsificável antes do experimento', 'Raio de alcance (blast radius) e escalada gradual', 'Critério de parada e reversão automática', 'Game day: o experimento com pessoas no laço', 'Diferença entre injeção de falha, game day e chaos contínuo', 'Pré-requisitos: observabilidade, SLO e autorização'],
    internals: [
      'A ordem é: definir estado estável mensurável → formular hipótese de que ele se mantém sob a falha X → limitar o alcance → executar → comparar. Sem hipótese, é sabotagem com relatório.',
      'O experimento que confirma a hipótese também tem valor: ele converte uma crença em evidência datada.',
      'O game day testa o sistema sociotécnico — runbook, alerta, escalonamento, decisão humana — e não só o software.',
      'Chaos em produção só faz sentido depois que o básico está em pé: sem observabilidade, você provoca a falha e não consegue medir o efeito.'
    ],
    useWhen: ['Use para validar mecanismo de resiliência que nunca foi exercitado.', 'Use game day antes de evento de pico conhecido.', 'Use para treinar resposta a incidente sem esperar o incidente.'],
    avoidWhen: ['Não faça caos sem observabilidade: você não saberá o que aconteceu.', 'Não comece em produção — comece em ambiente de teste e escale.', 'Não execute sem autorização, janela combinada e critério de parada.'],
    contrast: {
      bad: '"Vamos matar um pod em produção e ver o que acontece", sem hipótese, sem métrica de estado estável e sem combinar com ninguém.',
      good: 'Hipótese: "com uma zona indisponível, a taxa de sucesso de checkout permanece acima de 99,5% por 10 minutos". Alcance: 5% do tráfego. Parada: taxa abaixo de 99%. Resultado registrado.'
    },
    tradeoffs: ['Caos em produção dá evidência real e carrega risco real ao cliente.', 'Ambiente de teste é seguro e não reproduz a carga, os dados nem as dependências reais.', 'Automação contínua encontra regressões e exige maturidade para não virar ruído.'],
    production: 'Um serviço anuncia tolerância à perda de uma zona. O game day derruba a zona e a taxa de erro sobe a 30%: o pool de conexões tinha timeout maior que o do balanceador, e o failover levava 90 segundos. O mecanismo existia no diagrama e não na realidade; a correção é de configuração, e agora é verificada a cada trimestre.',
    risks: ['Experimento sem critério de parada', 'Raio de alcance maior que o previsto por dependência oculta', 'Resultado não registrado, virando folclore', 'Caos como teatro: sempre o mesmo experimento, sempre confirmando'],
    checklist: ['O estado estável é uma métrica de negócio?', 'A hipótese é falsificável e está escrita antes?', 'O raio de alcance está limitado e é conhecido?', 'Existe critério de parada e reversão automática?', 'O resultado vira ADR, correção ou item de backlog?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual a diferença entre chaos engineering e teste de falha?', expected: 'Teste de falha verifica um comportamento esperado em ambiente controlado; chaos engineering é um experimento com hipótese sobre o sistema real, incluindo dependências e pessoas, com raio de alcance limitado.' },
      { level: 'Sênior/Expert', question: 'Que pré-requisitos você exigiria antes de autorizar caos em produção?', expected: 'Observabilidade que meça o estado estável, SLO definido, hipótese escrita, raio de alcance limitado, critério de parada, reversão testada, janela combinada e autorização — e a mesma falha já exercitada em ambiente inferior.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Definir o estado estável de um serviço com uma métrica de negócio e o limiar que caracterizaria degradação.', evidence: 'Métrica, limiar, fonte do dado e justificativa do número.' },
      { level: 'Aplicado', task: 'Executar um game day em ambiente de teste com uma dependência indisponível e registrar o resultado.', evidence: 'Runbook do experimento, hipótese, medição antes/durante/depois e achados.' },
      { level: 'Expert', task: 'Desenhar a escalada de um experimento até produção, com raio de alcance crescente e gates entre etapas.', evidence: 'Plano com etapas, critérios de avanço e parada, autorização e plano de comunicação.' }
    ],
    challenge: 'Escolher o mecanismo de resiliência do seu sistema em que você mais confia e projetar o experimento que provaria que ele não funciona.',
    book: 'Release It! (padrões de estabilidade e o que falha em produção); Site Reliability Engineering (Google), cap. sobre teste de confiabilidade e resposta a emergência.',
    complements: [official.principlesChaos, official.sre, official.buildersLibrary],
    exampleFile: '../../examples/arquitetura-senior/testing/game-day-runbook.md'
  },
  {
    number: 23,
    part: 'fronteira',
    id: 'celulas-isolamento',
    title: 'Isolamento em escala: células, shuffle sharding e raio de impacto',
    level: 'Expert',
    objective: 'Projetar particionamento por células e shuffle sharding de modo que o raio de impacto de uma falha seja calculado, e não estimado.',
    prerequisites: ['Módulo 13 (bulkhead)', 'Módulo 14 (escala e sharding)', 'Módulo 17 (multi-tenancy)'],
    problem: 'Redundância protege contra falha de componente, não contra falha correlacionada: um deploy ruim, um dado envenenado ou um cliente abusivo atinge todas as réplicas ao mesmo tempo. Sem isolamento deliberado, todo sistema multi-tenant tem um único raio de impacto — todos os clientes — e nenhuma arquitetura de HA muda isso.',
    concepts: ['Célula como unidade completa e independente do sistema', 'Roteamento de célula e a camada fina que o faz', 'Shuffle sharding: combinações distintas por cliente', 'Cálculo do raio de impacto em vez de estimativa', 'Poison pill e falha correlacionada por dado', 'Control plane versus data plane e a regra de dependência', 'Estabilidade estática: não depender do plano de controle para continuar servindo', 'Deploy por célula e escalonamento de blast radius'],
    internals: [
      'Com n nós e k por cliente, existem C(n,k) combinações possíveis; a chance de dois clientes caírem na mesma combinação completa é 1/C(n,k) — é isso que torna o isolamento calculável.',
      'O ganho do shuffle sharding vem de o cliente barulhento afetar apenas quem compartilha TODAS as suas instâncias, e não quem compartilha alguma.',
      'A camada de roteamento é a nova fonte de falha global e por isso precisa ser a parte mais simples e estável do sistema.',
      'Estabilidade estática significa que a célula continua servindo com o plano de controle fora do ar — a dependência vale na direção contrária.'
    ],
    useWhen: ['Use células quando o sistema é multi-tenant e a indisponibilidade total é inaceitável.', 'Use shuffle sharding quando o recurso é compartilhado e o abuso de um cliente afeta os demais.', 'Use deploy por célula para converter um deploy ruim em incidente parcial.'],
    avoidWhen: ['Não celularize antes de ter automação: dez células manuais são dez vezes o trabalho operacional.', 'Não crie células que compartilham banco ou fila — isso é maquiagem, não isolamento.', 'Não aplique a sistema de tenant único.'],
    contrast: {
      bad: 'Três zonas de disponibilidade, um único banco regional e um deploy simultâneo em tudo — a arquitetura parece resiliente e tem raio de impacto total.',
      good: 'Oito células independentes, cliente fixado em uma, deploy em onda por célula: um deploy ruim atinge no máximo 12,5% dos clientes e é revertido antes da onda seguinte.'
    },
    tradeoffs: ['Mais células reduzem o raio de impacto e aumentam custo fixo e carga operacional.', 'Shuffle sharding melhora o isolamento sem multiplicar infraestrutura e complica roteamento e diagnóstico.', 'Célula grande é eficiente; célula pequena é segura.'],
    production: 'Um SaaS sofre indisponibilidade total quando um cliente dispara uma consulta que satura o pool compartilhado. A adoção de shuffle sharding com 16 instâncias e 2 por cliente reduz o conjunto atingido a quem compartilha exatamente as mesmas duas — cerca de 1 em 120 combinações. O mesmo incidente passa a ser um chamado, não uma interrupção.',
    risks: ['Célula com dependência compartilhada escondida', 'Camada de roteamento virando ponto único de falha', 'Explosão de custo operacional por falta de automação', 'Migração de cliente entre células sem procedimento'],
    checklist: ['Qual é o raio de impacto, em número de clientes, de cada modo de falha?', 'Existe alguma dependência compartilhada entre células?', 'O plano de dados sobrevive à queda do plano de controle?', 'O deploy é por onda, com gate entre células?', 'O cálculo de combinações foi feito, não estimado?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que redundância não é a mesma coisa que isolamento?', expected: 'Redundância protege contra falha independente de componente; não protege contra falha correlacionada — deploy ruim, dado envenenado, cliente abusivo — que atinge todas as réplicas ao mesmo tempo.' },
      { level: 'Sênior/Expert', question: 'Como você quantificaria o benefício de shuffle sharding antes de implementá-lo?', expected: 'Calculando C(n,k) para a configuração proposta, a fração de clientes que compartilha o conjunto completo e o raio de impacto resultante por modo de falha — e comparando com o custo operacional das alternativas.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Calcular o raio de impacto de cada modo de falha do seu sistema hoje, em número de clientes afetados.', evidence: 'Tabela modo de falha × clientes afetados, com a origem de cada número.' },
      { level: 'Aplicado', task: 'Projetar o shuffle sharding de um recurso compartilhado e calcular C(n,k) e a sobreposição esperada.', evidence: 'Cálculo, escolha de n e k justificada e desenho do roteamento.' },
      { level: 'Expert', task: 'Desenhar a topologia celular de um sistema real, incluindo roteamento, deploy em onda e migração de cliente.', evidence: 'ADR com número de células, dependências verificadas, custo e procedimento de migração.' }
    ],
    challenge: 'Encontrar, no seu sistema, a dependência compartilhada que transforma qualquer falha em falha total — e propor o isolamento com o número do raio de impacto antes e depois.',
    book: 'Release It! (bulkhead, falha correlacionada e padrões de estabilidade); Designing Data-Intensive Applications, cap. 6 (particionamento).',
    complements: [official.cellBased, official.shuffleSharding, official.staticStability],
    exampleFile: '../../examples/arquitetura-senior/cells/cell-topology.md'
  },
  {
    number: 24,
    part: 'fronteira',
    id: 'papers-fundadores',
    title: 'Ler os papers que definiram a área',
    level: 'Expert → fronteira',
    objective: 'Extrair de um paper fundador a decisão, a restrição da época e o que continua válido — e usar isso para julgar a tecnologia de hoje em vez de repetir o vocabulário dela.',
    prerequisites: ['Módulos 10–14', 'Inglês técnico de leitura', 'Disposição para ler o original em vez do resumo'],
    problem: 'Quase todo conceito que a indústria repete — consistência eventual, quórum, log replicado, agendamento de container — nasceu num paper com contexto e restrições explícitas. Quem só conhece a versão de blog herda o vocabulário sem o raciocínio, e aplica em 2026 uma decisão que fazia sentido para o hardware e a escala de 2007.',
    concepts: ['Método de três passagens para ler um paper (Keshav)', 'Separar a contribuição da engenharia circunstancial', 'Identificar a restrição da época: hardware, rede, custo, escala', 'Dynamo: disponibilidade acima de consistência e o preço disso', 'Spanner: relógio como infraestrutura e o que TrueTime compra', 'Raft: inteligibilidade como requisito de projeto', 'Borg e Kafka: as ideias que viraram Kubernetes e log distribuído', 'O que envelheceu e o que continua verdadeiro'],
    internals: [
      'Ler um paper de sistemas é ler uma decisão sob restrição: a pergunta certa não é "o que eles fizeram", é "o que eles não podiam fazer e por quê".',
      'Dynamo escolhe disponibilidade e entrega o conflito resolvido para a aplicação; boa parte das críticas atuais ignora que essa era a restrição de negócio, não um descuido.',
      'Spanner só oferece o que oferece porque comprou incerteza de relógio limitada com hardware dedicado — a lição é que uma garantia distribuída sempre é comprada em algum lugar.',
      'Raft existe porque Paxos era correto e incompreensível: inteligibilidade foi tratada como requisito de engenharia, e isso é uma decisão arquitetural.'
    ],
    useWhen: ['Use ao avaliar uma tecnologia nova que reivindica uma garantia forte.', 'Use quando a equipe discute um trade-off que já foi estudado há vinte anos.', 'Use o método de três passagens para triar rápido o que merece leitura profunda.'],
    avoidWhen: ['Não trate paper como manual de implementação.', 'Não copie a decisão sem copiar a restrição que a justificava.', 'Não transforme leitura em erudição: o produto é uma decisão melhor, não uma citação.'],
    contrast: {
      bad: 'Adotar consistência eventual "como o Dynamo" num sistema de saldo, sem o modelo de resolução de conflito que o paper exige da aplicação.',
      good: 'Reconhecer que a escolha do Dynamo pressupõe que a aplicação resolve conflito, verificar que no seu domínio isso é inaceitável e escolher outra garantia — citando o motivo.'
    },
    tradeoffs: ['Ler o original dá profundidade e custa horas por paper.', 'Conhecer o histórico evita reinventar e tenta a aplicar a solução fora do contexto.', 'A terceira passagem dá domínio real e raramente se justifica para todos os papers.'],
    production: 'Um time propõe um banco distribuído novo alegando "consistência forte e alta disponibilidade sem trade-off". A leitura do paper de referência mostra a suposição de rede e o modo de falha em que a garantia não vale. A avaliação passa a ter uma pergunta objetiva para o fornecedor, e a decisão deixa de depender de material de marketing.',
    risks: ['Aplicar decisão fora do contexto original', 'Confundir o sistema descrito com o produto atual de mesmo nome', 'Ler apenas o abstract e concluir', 'Usar o paper como argumento de autoridade em vez de raciocínio'],
    checklist: ['Qual era a restrição que o paper tentava contornar?', 'Essa restrição ainda existe?', 'Qual garantia foi abandonada para obter a outra?', 'O que o paper exige da aplicação?', 'A conclusão mudou alguma decisão minha?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que o teorema CAP, sozinho, é um guia ruim para escolher um banco?', expected: 'Porque ele trata só do comportamento sob partição e é binário; na prática a escolha é sobre latência e consistência no caso sem partição — que é o que o PACELC explicita — e sobre quais anomalias específicas a aplicação tolera.' },
      { level: 'Sênior/Expert', question: 'Um fornecedor afirma oferecer consistência forte e disponibilidade total. Que perguntas você faz?', expected: 'Qual o comportamento sob partição, qual a suposição de relógio, o que acontece com escritas durante failover, qual a garantia exata em linguagem formal, e quais resultados de verificação independente existem.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Aplicar o método de três passagens a um paper fundador e produzir o resumo da primeira passagem em cinco linhas.', evidence: 'Resumo com contribuição, contexto e decisão de aprofundar ou não.' },
      { level: 'Aplicado', task: 'Ler o paper do Dynamo e listar o que ele transfere para a aplicação e o que isso implicaria no seu domínio.', evidence: 'Nota técnica com as responsabilidades transferidas e a avaliação de viabilidade no seu contexto.' },
      { level: 'Expert', task: 'Comparar dois papers que resolvem o mesmo problema com decisões opostas e defender qual se aplica ao seu sistema.', evidence: 'Comparação com restrições de cada época e ADR com a escolha.' }
    ],
    challenge: 'Escolher uma tecnologia que seu time usa hoje, ler o paper que a originou e escrever o que muda na forma de operá-la.',
    book: 'Designing Data-Intensive Applications — as referências ao final de cada capítulo são a melhor lista de leitura dirigida da área; System Design Interview Vol. 1 e 2 para conectar paper e desenho.',
    complements: [official.howToRead, official.dynamoPaper, official.spannerPaper, official.raft, official.borgPaper, official.kafkaPaper, official.papersWeLove],
    exampleFile: '../../examples/arquitetura-senior/papers/reading-list.md'
  },
  {
    number: 25,
    part: 'fronteira',
    id: 'agentes-componente',
    title: 'Agentes de IA como componente arquitetural',
    level: 'Expert',
    objective: 'Tratar um modelo ou agente como componente de arquitetura — não determinístico, com custo e latência variáveis — e desenhar fronteira, fallback e verificação em torno dele.',
    prerequisites: ['Módulo 13 (resiliência)', 'Módulo 17 (segurança arquitetural)', 'Módulo 2 (atributos de qualidade)'],
    problem: 'Componentes de software sempre foram determinísticos: mesma entrada, mesma saída, custo previsível. Um agente quebra as três premissas ao mesmo tempo, e times o integram como se fosse mais uma chamada HTTP. O resultado é um sistema cuja corretude ninguém consegue afirmar, cujo custo varia por requisição e cujo modo de falha é produzir uma resposta errada com confiança.',
    concepts: ['Não determinismo como atributo de qualidade a ser tratado, não eliminado', 'Fronteira de permissão: o que o agente propõe versus o que ele executa', 'Custo e latência por requisição como requisito arquitetural', 'Fallback determinístico e degradação graciosa', 'Avaliação contínua (evals) como o teste de regressão desse componente', 'Injeção de prompt como fronteira de confiança, não como bug', 'MCP e interoperabilidade de ferramentas', 'Quando um workflow determinístico resolve melhor'],
    internals: [
      'A saída do modelo é uma proposta; quem executa é código determinístico que valida, autoriza e limita. Confundir as duas coisas é a origem da maior parte dos incidentes.',
      'Todo conteúdo que entra no contexto vem de uma fronteira de confiança: documento, página, resposta de ferramenta. Tratar isso como dado, e não como instrução, é decisão de arquitetura.',
      'Sem eval automatizado, não existe regressão detectável: a mudança de um prompt ou de uma versão de modelo é um deploy sem teste.',
      'Custo e latência escalam com tokens e passos, não com requisições — o modelo de capacidade é diferente de tudo o mais no sistema.'
    ],
    useWhen: ['Use agente onde o espaço de entrada é aberto demais para enumerar regras.', 'Use workflow determinístico quando os passos são conhecidos — é mais barato e verificável.', 'Use human-in-the-loop onde a ação é irreversível ou cara.'],
    avoidWhen: ['Não coloque agente no caminho crítico sem fallback determinístico.', 'Não dê ao agente permissão que você não daria a um usuário anônimo da internet.', 'Não trate saída de modelo como verdade sem verificação estrutural.'],
    contrast: {
      bad: 'Um agente com acesso direto ao banco e à API de pagamento, "porque o prompt diz para ele só consultar".',
      good: 'O agente propõe; uma camada determinística valida contra o esquema, checa autorização por RBAC, aplica limite de valor e exige confirmação humana para o irreversível.'
    },
    tradeoffs: ['Agente cobre casos abertos e reduz a previsibilidade do sistema.', 'Fallback determinístico garante disponibilidade e exige manter dois caminhos.', 'Eval contínuo dá rede de segurança e adiciona custo por execução de pipeline.'],
    production: 'Um assistente de suporte é integrado com acesso à API interna de reembolso. Um documento enviado por um cliente contém instruções endereçadas ao agente, que as segue. O incidente não é um bug do modelo: é ausência de fronteira. O redesign move o reembolso para uma tool com RBAC, limite de valor e confirmação humana, e passa a tratar todo conteúdo externo como dado.',
    risks: ['Injeção de prompt por conteúdo externo', 'Custo por requisição sem limite superior', 'Regressão silenciosa ao trocar versão do modelo', 'Ausência de fallback quando o provedor degrada', 'Dependência de fornecedor único sem porta de saída'],
    checklist: ['O componente tem fallback determinístico?', 'Existe limite superior de custo e de passos por requisição?', 'Todo conteúdo externo é tratado como dado, não como instrução?', 'Há eval automatizado rodando antes de cada mudança de prompt ou modelo?', 'Qual ação o agente pode executar sozinho, e qual exige confirmação?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que um componente baseado em LLM muda o desenho em volta dele?', expected: 'Porque quebra determinismo, previsibilidade de custo e de latência ao mesmo tempo; exige fallback, limite de custo, validação de saída e um teste de regressão que não é teste unitário.' },
      { level: 'Sênior/Expert', question: 'Como você limitaria o raio de ação de um agente com acesso a ferramentas internas?', expected: 'Separar proposta de execução, autorizar cada ferramenta por RBAC com a identidade do usuário final, impor limites de valor e de passos, exigir confirmação para o irreversível, tratar conteúdo externo como dado e registrar tudo em auditoria.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Classificar as ações de um fluxo com IA em automáticas, revisáveis e que exigem confirmação, com o critério de cada faixa.', evidence: 'Tabela de ações com reversibilidade, custo do erro e decisão.' },
      { level: 'Aplicado', task: 'Desenhar a fronteira de permissão de um agente com duas ferramentas, uma de leitura e uma de escrita.', evidence: 'Diagrama C4 de componente, contrato das tools e regra de autorização.' },
      { level: 'Expert', task: 'Escrever o ADR que decide entre workflow determinístico e agente para um caso real, com custo, avaliação e plano de reversão.', evidence: 'ADR com alternativas, orçamento por requisição, estratégia de eval e gatilho de reversão.' }
    ],
    challenge: 'Pegar um fluxo do seu sistema que alguém quer "colocar IA" e escrever o desenho em que o agente é a menor parte possível — e o ADR que justifica cada fronteira.',
    book: 'Release It! (padrões de estabilidade aplicados a dependência instável); Fundamentals of Software Architecture (atributos de qualidade e decisões sob incerteza). A construção do sistema de IA em si é a trilha de IA.',
    complements: [official.mcp, official.nistAi, official.awswa],
    exampleFile: '../../examples/arquitetura-senior/adr/0007-agent-boundary.md'
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
    'Os 18 objetivos dos módulos 1–18 foram demonstrados por evidência (C4, ADR, contrato, teste ou métrica), não por leitura.',
    'Cada decisão estrutural relevante tem um ADR com contexto, alternativas e consequências.',
    'Ao menos 36 exercícios foram concluídos, incluindo 18 aplicados e 5 de nível expert.',
    'Os cinco casos foram defendidos com trade-offs, riscos, plano de rollback e sinais de senioridade.',
    'Um capstone atende aos critérios; o projeto Expert exige também impacto e governança entre times.',
    'Nenhum módulo é marcado como Dominado antes de evidência validada em architecture review.',
    'Fronteira (módulos 19–25) é opcional para o gate sênior e obrigatória para reivindicar nível expert.',
    'Fronteira concluída exige: um ADR que recusa event sourcing com alternativa defendida, uma especificação formal cujo verificador encontrou um contraexemplo, um defeito que "não reproduzia" travado por semente, um game day executado com hipótese escrita antes, o raio de impacto do sistema calculado em número de clientes, um paper fundador que mudou uma decisão sua, e a fronteira de permissão de um componente de IA desenhada e testada contra injeção.'
  ]
});

/*
 * Gabarito de autoavaliação. Em arquitetura a resposta certa quase nunca é única —
 * o critério é a qualidade do raciocínio e da evidência, não a coincidência com o texto.
 */
export const arquiteturaAnswerKey = arquiteturaModules.map((module) => ({
  module: module.number,
  title: module.title,
  objetivoAtingido: module.objective,
  respostaEsperadaNaEntrevista: module.interview.map((item) => `${item.level}: ${item.expected}`),
  erroMaisComum: module.contrast?.bad || module.risks?.[0] || 'Decidir sem registrar a alternativa descartada.',
  criterioDeAceite: module.exercises.map((item) => `${item.level} — evidência: ${item.evidence}`),
  sinalDeQueNaoDominou: module.risks || []
}));
