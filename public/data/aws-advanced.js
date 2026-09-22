/*
 * Fonte única da Academia AWS.
 * O currículo privilegia decisões reproduzíveis, operação e evidência.
 */

export const AWS_RESEARCH_DATE = '2026-07-29';

const official = Object.freeze({
  sharedResponsibility: {
    label: 'AWS — modelo de responsabilidade compartilhada',
    url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-risk-and-compliance/shared-responsibility-security-and-compliance-model.html'
  },
  iam: {
    label: 'AWS IAM — práticas recomendadas',
    url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html'
  },
  vpc: {
    label: 'Amazon VPC — documentação',
    url: 'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html'
  },
  ec2: {
    label: 'Amazon EC2 — práticas recomendadas',
    url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-best-practices.html'
  },
  storage: {
    label: 'AWS Well-Architected — seleção de armazenamento',
    url: 'https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/selecting-a-storage-solution.html'
  },
  databases: {
    label: 'AWS — escolha de banco de dados',
    url: 'https://docs.aws.amazon.com/decision-guides/latest/databases-on-aws-how-to-choose/databases-on-aws-how-to-choose.html'
  },
  dynamodb: {
    label: 'DynamoDB — práticas de design',
    url: 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html'
  },
  lambda: {
    label: 'AWS Lambda — práticas recomendadas',
    url: 'https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html'
  },
  events: {
    label: 'AWS — guia de decisão para mensageria',
    url: 'https://docs.aws.amazon.com/decision-guides/latest/messaging-on-aws-how-to-choose/messaging-on-aws-how-to-choose.html'
  },
  containers: {
    label: 'AWS — guia de decisão para containers',
    url: 'https://docs.aws.amazon.com/decision-guides/latest/containers-on-aws-how-to-choose/containers-on-aws-how-to-choose.html'
  },
  observability: {
    label: 'AWS Well-Architected — observabilidade',
    url: 'https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/observability.html'
  },
  reliability: {
    label: 'AWS Well-Architected — pilar de confiabilidade',
    url: 'https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html'
  },
  disasterRecovery: {
    label: 'AWS — disaster recovery de workloads',
    url: 'https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html'
  },
  cloudFormation: {
    label: 'AWS CloudFormation — práticas recomendadas',
    url: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html'
  },
  performance: {
    label: 'AWS Well-Architected — eficiência de desempenho',
    url: 'https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/welcome.html'
  },
  security: {
    label: 'AWS Well-Architected — pilar de segurança',
    url: 'https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html'
  },
  controlTower: {
    label: 'AWS Control Tower — estratégia multiaccount',
    url: 'https://docs.aws.amazon.com/controltower/latest/userguide/aws-multi-account-landing-zone.html'
  },
  cost: {
    label: 'AWS Well-Architected — otimização de custos',
    url: 'https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html'
  },
  wellArchitected: {
    label: 'AWS Well-Architected — seis pilares',
    url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html'
  },
  migration: {
    label: 'AWS Prescriptive Guidance — estratégia de migração',
    url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-migration/welcome.html'
  },
  saa: {
    label: 'AWS Certification — guia SAA-C03',
    url: 'https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03.html'
  }
});

export const awsBooks = Object.freeze({
  action: {
    title: 'Amazon Web Services in Action',
    authors: 'Andreas Wittig e Michael Wittig',
    edition: '3ª edição',
    year: 2023,
    language: 'Inglês',
    pages: 730,
    path: '/pdfs/livros-aws/Amazon Web Services in Action, Third Edition- An in-depth -- Andreas Wittig, Michael Wittig -- ( WeLib.org ).mobi.pdf',
    depth: 'Base ampla e aplicada',
    prerequisites: 'Linux, HTTP e linha de comando',
    structure: 'Fundamentos, computação, rede, dados, automação, disponibilidade e arquiteturas modernas',
    limitations: 'Serviços mudam continuamente; confirme nomes, limites, preços e recursos na documentação oficial.'
  },
  cookbook: {
    title: 'AWS Cookbook: Recipes for Success on AWS',
    authors: 'John Culkin e Mike Zazon',
    edition: '1ª edição',
    year: 2022,
    language: 'Inglês',
    pages: 568,
    path: '/pdfs/livros-aws/AWS Cookbook- Recipes for Success on Aws -- John Culkin; Mike Zazon; James Ferguson; OReilly for Higher -- ( WeLib.org ).pdf',
    depth: 'Laboratórios e receitas',
    prerequisites: 'Conta sandbox, AWS CLI e noções dos serviços centrais',
    structure: 'Receitas de segurança, rede, storage, bancos, serverless, containers, dados e contas',
    limitations: 'Receitas são pontos de partida; adapte políticas, versões, regiões e custos ao contexto.'
  },
  wellArchitected: {
    title: 'AWS Well-Architected Framework',
    authors: 'Amazon Web Services',
    edition: 'Edição arquivada',
    year: 2020,
    language: 'Inglês',
    pages: 97,
    path: '/pdfs/livros-aws/AWS_Well-Architected_Framework.pdf',
    depth: 'Modelo de revisão arquitetural',
    prerequisites: 'Experiência com uma arquitetura implantada',
    structure: 'Princípios, perguntas de revisão e cinco pilares da edição local',
    limitations: 'O PDF local é histórico e não contém o pilar de sustentabilidade; use a versão oficial atual de seis pilares.'
  },
  finops: {
    title: 'Cloud FinOps',
    authors: 'J. R. Storment e Mike Fuller',
    edition: '2ª edição',
    year: 2023,
    language: 'Inglês',
    pages: 457,
    path: '/pdfs/livros-aws/Cloud FinOps- Collaborative, Real-Time Cloud Value Decision -- J.R. Storment; Mike Fuller -- ( WeLib.org ).pdf',
    depth: 'Economia e modelo operacional',
    prerequisites: 'Noções de faturamento cloud, engenharia e orçamento',
    structure: 'Cultura, alocação, previsão, otimização de uso e compromissos',
    limitations: 'O livro é multicloud; preços, descontos e instrumentos AWS devem ser conferidos no momento da decisão.'
  },
  serverless: {
    title: 'Serverless Architectures on AWS',
    authors: 'Peter Sbarski, Yan Cui e Ajay Nair',
    edition: '2ª edição · MEAP V06',
    year: 2020,
    language: 'Inglês',
    pages: 156,
    path: '/pdfs/livros-aws/Serverless Architectures on AWS, Second Edition (MEAP V06) -- Peter Sbarski, Yan Cui, Ajay Nair -- ( WeLib.org ).pdf',
    depth: 'Arquiteturas orientadas a eventos',
    prerequisites: 'APIs, eventos, IAM e persistência',
    structure: 'Fundamentos serverless, casos, escolhas de serviços e processamento paralelo',
    limitations: 'Arquivo parcial de pré-publicação; valide APIs atuais e complemente lacunas na documentação oficial.'
  },
  goodParts: {
    title: 'The Good Parts of AWS',
    authors: 'Daniel Vassallo e Josh Pschorr',
    edition: 'Edição independente',
    year: 2020,
    language: 'Inglês',
    pages: 176,
    path: '/pdfs/livros-aws/The Good Parts of AWS -- Daniel Vassallo, Josh Pschorr -- ( WeLib.org ).pdf',
    depth: 'Heurísticas de simplicidade',
    prerequisites: 'Noções dos principais serviços AWS',
    structure: 'Seleção deliberada de serviços e guia enxuto de bootstrap',
    limitations: 'As heurísticas refletem um contexto específico; trate-as como hipótese, não como regra universal.'
  },
  saa: {
    title: 'AWS Certified Solutions Architect Study Guide',
    authors: 'Ben Piper e David Clinton',
    edition: '3ª edição · SAA-C02',
    year: 2021,
    language: 'Inglês',
    pages: 466,
    path: '/pdfs/livros-aws/toaz.info-aws-certified-solutions-architect-study-guide-3e-associate-saa-c02-exam-aws--pr_f277131c51db1f71ddd98f9cc9c23553.pdf',
    depth: 'Revisão de serviços e arquitetura',
    prerequisites: 'Fundamentos de cloud e redes',
    structure: 'Serviços centrais, exercícios e pilares Well-Architected da versão da prova',
    limitations: 'Cobre SAA-C02, não o exame atual SAA-C03; use apenas para fundamentos e confira o guia oficial vigente.'
  }
});

const frontier = Object.freeze({
  buildersLibrary: { label: 'Amazon Builders’ Library', url: 'https://aws.amazon.com/builders-library/' },
  staticStability: { label: 'Builders’ Library — Static stability using Availability Zones', url: 'https://aws.amazon.com/builders-library/static-stability-using-availability-zones/' },
  shuffleSharding: { label: 'Builders’ Library — Workload isolation using shuffle-sharding', url: 'https://aws.amazon.com/builders-library/workload-isolation-using-shuffle-sharding/' },
  timeouts: { label: 'Builders’ Library — Timeouts, retries and backoff with jitter', url: 'https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/' },
  constantWork: { label: 'Builders’ Library — Reliability, constant work and a good cup of coffee', url: 'https://aws.amazon.com/builders-library/reliability-and-constant-work/' },
  avoidingFallback: { label: 'Builders’ Library — Avoiding fallback in distributed systems', url: 'https://aws.amazon.com/builders-library/avoiding-fallback-in-distributed-systems/' },
  cellBased: { label: 'AWS — Reducing the scope of impact with cell-based architecture', url: 'https://docs.aws.amazon.com/wellarchitected/latest/reducing-scope-of-impact-with-cell-based-architecture/reducing-scope-of-impact-with-cell-based-architecture.html' },
  nitro: { label: 'AWS Nitro System', url: 'https://aws.amazon.com/ec2/nitro/' },
  nitroSecurity: { label: 'The Security Design of the AWS Nitro System (whitepaper)', url: 'https://docs.aws.amazon.com/whitepapers/latest/security-design-of-aws-nitro-system/security-design-of-aws-nitro-system.html' },
  firecracker: { label: 'Firecracker — microVM', url: 'https://firecracker-microvm.github.io/' },
  arc: { label: 'AWS Application Recovery Controller (ARC)', url: 'https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route53-recovery.html' },
  multiRegion: { label: 'AWS — Disaster recovery workloads on AWS', url: 'https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html' },
  quotas: { label: 'AWS Service Quotas', url: 'https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html' },
  throttling: { label: 'AWS SDKs — retry behavior e error handling', url: 'https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html' },
  cdk: { label: 'AWS CDK — Developer Guide', url: 'https://docs.aws.amazon.com/cdk/v2/guide/home.html' },
  cdkConstructs: { label: 'AWS CDK — construct levels e bibliotecas', url: 'https://docs.aws.amazon.com/cdk/v2/guide/constructs.html' },
  customResource: { label: 'CloudFormation — custom resources', url: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html' },
  bedrock: { label: 'Amazon Bedrock — documentação', url: 'https://docs.aws.amazon.com/bedrock/' },
  bedrockAgents: { label: 'Amazon Bedrock — agentes e AgentCore', url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html' },
  sagemaker: { label: 'Amazon SageMaker AI — documentação', url: 'https://docs.aws.amazon.com/sagemaker/' },
  bedrockOrSagemaker: { label: 'AWS — decision guide: Bedrock ou SageMaker AI?', url: 'https://docs.aws.amazon.com/decision-guides/latest/bedrock-or-sagemaker/bedrock-or-sagemaker.html' }
});

/*
 * Baseline tecnológico. A trilha ensina decisão e operação, não console: o que
 * muda de nome com frequência está aqui, para o conteúdo dos módulos não precisar
 * envelhecer junto. O livro de certificação do acervo cobre o SAA-C02 e a prova
 * corrente é a SAA-C03 — isso já está declarado na ficha do livro, e não é erro:
 * é limite editorial conhecido.
 */
export const awsTechnologyBaseline = [
  { technology: 'Certificação SAA', baseline: 'SAA-C03', status: 'Prova corrente', note: 'O livro do acervo é SAA-C02 (2021). Use-o para fundamentos e siga o guia oficial vigente para o escopo da prova.' },
  { technology: 'Well-Architected', baseline: 'seis pilares', status: 'Estável', note: 'Sustentabilidade entrou como sexto pilar. Módulo 19.' },
  { technology: 'Substrato de computação', baseline: 'Nitro System', status: 'Padrão em instâncias modernas', note: 'Virtualização, rede e armazenamento descarregados em hardware dedicado. Explica desempenho e o modelo de confiança. Módulo 21.' },
  { technology: 'Serverless — isolamento', baseline: 'Firecracker microVM', status: 'Estável', note: 'Base de Lambda e Fargate. Entender o microVM explica cold start e limites. Módulo 21.' },
  { technology: 'Isolamento de falha', baseline: 'células + shuffle sharding', status: 'Padrão interno da AWS', note: 'A matemática do raio de impacto está na trilha de Arquitetura, módulo 23. Aqui é a realização em AZ, zonal e ARC. Módulo 22.' },
  { technology: 'Recuperação multi-região', baseline: 'Application Recovery Controller', status: 'Estável', note: 'Failover com verificação de prontidão. Um failover nunca testado é uma hipótese, não um plano. Módulo 23.' },
  { technology: 'IaC', baseline: 'CloudFormation · CDK v2', status: 'Estável', note: 'CDK v1 encerrado. Terraform e OpenTofu são tratados na trilha de DevOps, módulos 9 e 26.' },
  { technology: 'IA gerenciada — inferência', baseline: 'Amazon Bedrock', status: 'Camada de orquestração', note: 'Deixou de ser só acesso a modelos: traz agentes, bases de conhecimento e guardrails gerenciados. Módulo 26.' },
  { technology: 'IA gerenciada — ciclo de ML', baseline: 'SageMaker AI · Unified Studio', status: 'Consolidando', note: 'Treino, registry, endpoints e governança. O Unified Studio aproximou as duas superfícies. Módulo 26.' },
  { technology: 'Fronteira de decisão em IA', baseline: 'construir × comprar', status: 'Decisão recorrente', note: 'A construção de sistemas de IA é a trilha de IA; aqui a decisão é de arquitetura, custo e dependência de fornecedor.' }
];

export const awsAcademy = Object.freeze({
  title: 'Academia AWS — arquitetura e operação',
  baseline: `Pesquisa técnica: ${AWS_RESEARCH_DATE} · evidência acima de console e certificação`,
  book: 'action',
  parts: {
    base: {
      index: '0/6',
      range: 'Módulos 0.1–0.4',
      page: 'base.html',
      navLabel: 'Módulo 0',
      title: 'Módulo 0 — da Faixa 0 à AWS',
      subtitle: 'Ponte dos fundamentos: o que é a nuvem e a responsabilidade compartilhada, identidade e menor privilégio (IAM), serviços essenciais e elasticidade/pay-as-you-go.',
      prerequisites: ['Concluir a Trilha 0 (Fundamentos) ou equivalente', 'Terminal, DNS/HTTP e a ideia de servidor', 'Nenhuma experiência prévia de nuvem'],
      objectives: ['Entender a nuvem sob demanda e o modelo de responsabilidade compartilhada', 'Aplicar identidade e menor privilégio (IAM: default deny, Deny vence Allow)', 'Reconhecer os serviços essenciais (computar, guardar, conectar) e região/AZ', 'Entender elasticidade, pay-as-you-go e o custo que surpreende']
    },
    fundamentos: {
      index: '1/6',
      range: 'Módulos 1–5',
      page: 'fundamentos.html',
      navLabel: 'Fundamentos e limites',
      title: 'Fundamentos, identidade e infraestrutura',
      subtitle: 'Construa o limite de confiança antes de publicar o primeiro workload.',
      prerequisites: ['Operar Linux e Git pela linha de comando', 'Explicar DNS, HTTP, CIDR e estado de uma aplicação', 'Usar uma conta sandbox com orçamento e MFA'],
      objectives: ['Explicar responsabilidade, região, zona e conta como limites distintos', 'Projetar identidade temporária e rede segmentada', 'Escolher computação e armazenamento por requisito', 'Produzir uma fundação rastreável sem acesso público acidental']
    },
    plataforma: {
      index: '2/6',
      range: 'Módulos 6–10',
      page: 'plataforma.html',
      navLabel: 'Dados e execução',
      title: 'Dados, eventos e plataformas de execução',
      subtitle: 'Escolha serviços gerenciados pelo acesso, acoplamento e carga operacional.',
      prerequisites: ['VPC, IAM e armazenamento demonstráveis', 'Aplicação com API, banco e testes', 'Noções de container, fila e consistência'],
      objectives: ['Escolher banco pelo padrão de acesso e falha', 'Modelar funções e eventos idempotentes', 'Comparar ECS, EKS, Fargate e Lambda por custo total', 'Operar backpressure, retries e dead-letter queues']
    },
    confiabilidade: {
      index: '3/6',
      range: 'Módulos 11–15',
      page: 'confiabilidade.html',
      navLabel: 'Confiabilidade',
      title: 'Operação, resiliência e desempenho',
      subtitle: 'Meça o serviço, plante falhas e recupere dentro de objetivos explícitos.',
      prerequisites: ['Workload implantado por pipeline', 'Logs e métricas mínimas disponíveis', 'Requisitos de disponibilidade, RTO e RPO definidos'],
      objectives: ['Correlacionar telemetria e mudanças', 'Dimensionar disponibilidade e capacidade', 'Testar backup, restore e failover', 'Entregar infraestrutura versionada e caminhos de baixa latência']
    },
    arquitetura: {
      index: '4/6',
      range: 'Módulos 16–20',
      page: 'arquitetura.html',
      navLabel: 'Governança e decisão',
      title: 'Segurança, governança e decisão arquitetural',
      subtitle: 'Escale contas, custo e evolução sem ampliar o raio de impacto.',
      prerequisites: ['Workload observável e recuperável', 'Infraestrutura como código revisável', 'Capacidade de escrever ADR, runbook e threat model'],
      objectives: ['Projetar defesa em profundidade e resposta', 'Organizar landing zone e controles multiaccount', 'Alocar custo por unidade econômica', 'Conduzir revisão dos seis pilares e plano de evolução']
    },
    fronteira: {
      index: '5/6',
      range: 'Módulos 21–27',
      page: 'fronteira.html',
      navLabel: 'Fronteira',
      title: 'Fronteira: o substrato e a engenharia da AWS',
      subtitle: 'Nitro e Firecracker, células e estabilidade estática, multi-região, quotas e throttling, CDK, IA gerenciada e a Builders’ Library.',
      prerequisites: [
        'Concluir os módulos 11–15: telemetria, disponibilidade, recuperação e desempenho.',
        'Ter operado um workload real, com incidente e restauração medidos.',
        'Aceitar que aqui a referência é a engenharia publicada pela AWS, não o console.'
      ],
      objectives: [
        'Explicar o que a AWS executa por baixo da instância e por que isso muda o modelo de confiança.',
        'Projetar isolamento por AZ e célula com estabilidade estática, sem depender do plano de controle.',
        'Escolher a topologia multi-região pelo RTO, RPO e custo, com failover testado.',
        'Operar no limite da API: quota, throttling, retry com jitter e trabalho constante.',
        'Estender a IaC com constructs próprios em vez de copiar template.',
        'Decidir entre Bedrock, SageMaker e construir, por custo, controle e dependência.',
        'Extrair da Builders’ Library um padrão e aplicá-lo com medição.'
      ]
    },
    avaliacao: {
      index: '6/6',
      range: 'Evidência',
      page: 'avaliacao.html',
      navLabel: 'Avaliação e biblioteca',
      title: 'Avaliação, projeto e biblioteca técnica',
      subtitle: 'Defenda decisões, reproduza falhas e evolua um workload sob critérios explícitos.',
      prerequisites: ['Concluir os 20 módulos ou comprovar equivalência', 'Manter repositório com IaC e pipeline reproduzível', 'Possuir evidências HTTP(S) revisáveis'],
      objectives: ['Demonstrar senioridade por decisão e resultado', 'Resolver casos com custo, segurança e falha', 'Evoluir um único workload em quatro entregas', 'Validar domínio com evidência e revisão D30']
    }
  }
});

function moduleOf(config) {
  return Object.freeze({
    ...config,
    interview: config.interview.map(([level, question, expected]) => ({ level, question, expected })),
    exercises: config.exercises.map(([level, task, evidence]) => ({ level, task, evidence }))
  });
}

export const awsModules = Object.freeze([
  moduleOf({
    number: '0.1', part: 'base', id: 'base-o-que-e-nuvem', title: 'O que é a nuvem (e a responsabilidade compartilhada)', level: 'Ponte (Faixa 0)',
    objective: 'Entender a nuvem como computação e serviços alugados sob demanda por API, situar região/zona/conta e saber o que é responsabilidade da AWS e o que é sua (modelo de responsabilidade compartilhada).',
    prerequisites: ['Trilha 0 (DNS, HTTP, o que é um servidor)', 'Terminal básico', 'Nenhuma experiência prévia de nuvem'],
    problem: 'Quem sai da Faixa 0 sabe rodar um servidor local, mas acha que "a nuvem" é mágica ou que "a AWS cuida de tudo". Sem entender o que é seu para proteger, deixa dados e configuração sem dono — a causa nº 1 de vazamentos.',
    concepts: ['Nuvem sob demanda via API', 'IaaS/PaaS/SaaS', 'Região e zona de disponibilidade (AZ)', 'Conta como limite', 'Responsabilidade compartilhada (da nuvem × na nuvem)'],
    internals: ['A nuvem é o computador de outra pessoa que você aluga por API e paga pelo uso — sem comprar hardware.', 'A AWS é responsável pela segurança DA nuvem (data centers, hardware); você, pela segurança NA nuvem (seus dados, acessos e configuração).', 'Região é uma área geográfica; dentro dela há várias zonas (AZs) isoladas — a base para tolerar falhas.'],
    useWhen: ['Use a nuvem quando precisar elasticidade, alcance global ou serviços gerenciados sem operar hardware.', 'Defina desde o início o que é responsabilidade sua vs da AWS.', 'Escolha a região por latência, custo e requisito legal de dados.'],
    avoidWhen: ['Não trate a nuvem como "datacenter de outro" onde a AWS protege seus dados.', 'Não assuma que um serviço gerenciado transfere a responsabilidade sobre a sua configuração.', 'Não espalhe recursos sem saber em que conta/região estão.'],
    contrast: { bad: 'Subir um serviço e presumir que "a AWS cuida da segurança", deixando um bucket público sem dono.', good: 'Mapear o que a AWS protege e o que é seu, e tratar dados, acessos e configuração como responsabilidade sua.' },
    tradeoffs: ['A nuvem troca CAPEX (comprar) por OPEX (alugar) e conveniência por dependência do provedor.', 'Serviço gerenciado reduz operação e cede algum controle.', 'Mais regiões dão resiliência e alcance, e aumentam custo e complexidade.'],
    production: 'Um time acredita que "está na nuvem, então está seguro" e expõe dados por configuração aberta. O exercício separa, item a item, o que é responsabilidade da AWS e o que é do cliente.',
    risks: ['Achar que a AWS protege seus dados/config', 'Recurso na região errada (latência/lei)', 'Conta raiz no dia a dia', 'Não saber onde os recursos estão'],
    checklist: ['Sei o que é responsabilidade da AWS e o que é minha?', 'Escolhi a região por latência/custo/lei?', 'Sei em que conta e região cada recurso está?', 'Dados e acessos têm dono?', 'Estou evitando a conta raiz no cotidiano?'],
    interview: [
      ['Júnior/Pleno', 'O que é o modelo de responsabilidade compartilhada?', 'A AWS cuida da segurança DA nuvem (infraestrutura); o cliente, da segurança NA nuvem (dados, identidade e configuração). O limite muda conforme o serviço (IaaS→SaaS).'],
      ['Sênior/Staff', 'Um serviço gerenciado transfere a responsabilidade sobre os dados?', 'Não: ele reduz tarefas operacionais, mas dados, permissões e configuração continuam responsabilidade do cliente.']
    ],
    exercises: [
      ['Básico', 'Listar 8 itens (patch do host, criptografia dos dados, senha do usuário…) e marcar "AWS" ou "cliente".', 'Tabela de responsabilidade compartilhada preenchida.'],
      ['Aplicado', 'Escolher uma região para um app brasileiro e justificar por latência, custo e lei.', 'Decisão registrada com os três critérios.'],
      ['Sênior', 'Explicar como o limite de responsabilidade muda de EC2 (IaaS) para S3/Lambda (mais gerenciado).', 'Meia página comparando os limites.']
    ],
    challenge: 'Explicar, sem jargão, por que "está na nuvem" não é o mesmo que "está seguro".',
    book: 'Amazon Web Services in Action, cap. 1; AWS Well-Architected (pilar de segurança).',
    complements: [official.sharedResponsibility],
    quiz: [
      { question: 'No modelo de responsabilidade compartilhada, quem protege os SEUS dados e configurações?', options: ['Você (o cliente) — segurança NA nuvem', 'A AWS — sempre', 'Ninguém precisa', 'O provedor de internet'], answer: 0, why: 'A AWS cuida da segurança DA nuvem; o cliente cuida da segurança NA nuvem (dados, acessos, config).' },
      { question: 'O que é uma zona de disponibilidade (AZ)?', options: ['Um data center isolado dentro de uma região, base para tolerar falhas', 'Um tipo de servidor', 'Uma conta AWS', 'Um serviço de banco de dados'], answer: 0, why: 'Uma região tem várias AZs isoladas; distribuir entre elas é o que dá alta disponibilidade.' },
      { question: 'O que melhor define "a nuvem"?', options: ['Computação e serviços alugados sob demanda por API, pagando pelo uso', 'Um HD na internet', 'Um datacenter que a AWS opera e protege inteiramente por você', 'Um software de backup'], answer: 0, why: 'Nuvem = recursos sob demanda via API, modelo pay-as-you-go — sem comprar hardware.' }
    ]
  }),
  moduleOf({
    number: '0.2', part: 'base', id: 'base-identidade-iam', title: 'Conta, identidade e menor privilégio (IAM)', level: 'Ponte (Faixa 0)',
    objective: 'Entender identidade como o centro da segurança na nuvem: usuários, papéis e políticas; negação por padrão; Deny vence Allow; e o menor privilégio como regra de ouro.',
    prerequisites: ['Módulo 0.1', 'Ideia de usuário e permissão', 'Saber ler um JSON simples'],
    problem: 'O iniciante usa a conta raiz para tudo, cola credenciais no código e dá permissão "*" para "funcionar logo". É assim que uma chave vazada vira um incidente que apaga ou expõe tudo.',
    concepts: ['Conta como fronteira', 'Usuário, papel (role) e política', 'Credenciais temporárias vs raiz', 'Negação por padrão (default deny)', 'Menor privilégio; Deny vence Allow'],
    internals: ['Toda requisição é avaliada: sem um Allow que case, o acesso é negado (default deny).', 'Um Deny explícito sempre vence qualquer Allow — é o freio de segurança.', 'Menor privilégio = conceder só a ação e o recurso necessários; papéis dão credenciais temporárias em vez de chaves fixas.'],
    useWhen: ['Conceda o mínimo necessário e negue o resto por padrão.', 'Use papéis (credenciais temporárias) no lugar de chaves no código.', 'Proteja a conta raiz com MFA e não a use no dia a dia.'],
    avoidWhen: ['Não use a conta raiz para tarefas cotidianas.', 'Não conceda Action "*" em Resource "*" por conveniência.', 'Não coloque credenciais em código ou repositório.'],
    contrast: { bad: 'Uma política com Action "*" e Resource "*" para "resolver rápido", e a chave no código.', good: 'Uma política mínima (só s3:GetObject no bucket X), papel temporário e MFA na raiz.' },
    tradeoffs: ['Menor privilégio dá segurança e custa mais políticas para manter.', 'Credenciais temporárias somem sozinhas (bom) e exigem entender papéis.', 'Um Deny amplo protege e pode bloquear demais se mal escrito.'],
    production: 'Uma chave com permissão "*" vaza num repositório público e alguém apaga recursos. O exercício reescreve a política para o mínimo e mostra, no avaliador, que o Deny explícito protege o recurso sensível.',
    risks: ['Conta raiz no cotidiano', 'Política "*:*"', 'Credenciais no código/repo', 'Sem MFA'],
    checklist: ['A política concede só o necessário (menor privilégio)?', 'Há Allow explícito, com o resto negado por padrão?', 'Recursos sensíveis têm Deny explícito?', 'Uso papéis em vez de chaves fixas?', 'A raiz tem MFA e fica fora do dia a dia?'],
    interview: [
      ['Júnior/Pleno', 'O que é o menor privilégio e por que importa?', 'Conceder apenas as ações e recursos necessários; limita o estrago de uma credencial comprometida ou de um erro.'],
      ['Sênior/Staff', 'Na avaliação IAM, o que acontece se um Allow e um Deny casam com a mesma requisição?', 'O Deny explícito sempre vence; e, sem nenhum Allow, o padrão já é negar (default deny).']
    ],
    exercises: [
      ['Básico', 'Rodar o exemplo e explicar por que o papel de leitura não consegue apagar objetos.', 'Saída do avaliador + explicação do default deny.'],
      ['Aplicado', 'Reescrever uma política "*:*" para o mínimo de uma tarefa (só ler um bucket).', 'Política mínima em JSON com Action/Resource específicos.'],
      ['Sênior', 'Adicionar um Deny explícito para um recurso sensível e provar que ele vence o Allow.', 'Antes/depois com a decisão do avaliador.']
    ],
    challenge: 'Defender por que credenciais temporárias (papéis) são melhores que chaves fixas — e o que fazer se uma chave vazar.',
    book: 'AWS Well-Architected (pilar de segurança); Amazon Web Services in Action (IAM).',
    complements: [official.iam],
    exampleFile: '../../examples/aws-senior/aws-zero.mjs',
    quiz: [
      { question: 'O que é "negação por padrão" (default deny) no IAM?', options: ['Sem uma permissão explícita que case, o acesso é negado', 'Tudo é permitido até você negar', 'Só a conta raiz é negada', 'Nada é avaliado'], answer: 0, why: 'IAM nega por padrão; é preciso um Allow explícito que case com a requisição.' },
      { question: 'Se um Allow e um Deny se aplicam à mesma requisição, o que vence?', options: ['O Deny explícito sempre vence', 'O Allow, porque é mais específico', 'O último escrito', 'Depende da região'], answer: 0, why: 'Deny explícito tem precedência sobre qualquer Allow — é o freio de segurança do IAM.' },
      { question: 'Por que evitar uma política com Action "*" e Resource "*"?', options: ['Viola o menor privilégio: uma credencial vazada faz estrago total', 'Ocupa mais espaço', 'A AWS proíbe por padrão', 'Deixa o app lento'], answer: 0, why: 'Menor privilégio limita o dano; "*:*" dá acesso a tudo, o oposto do desejável.' }
    ]
  }),
  moduleOf({
    number: '0.3', part: 'base', id: 'base-servicos-essenciais', title: 'Serviços essenciais: computar, guardar e conectar', level: 'Ponte (Faixa 0)',
    objective: 'Reconhecer os três blocos de qualquer sistema na nuvem — computação (EC2/Lambda), armazenamento (S3/EBS) e rede (VPC) — e a diferença entre gerenciar você mesmo e usar um serviço gerenciado.',
    prerequisites: ['Módulo 0.2', 'Ideia de servidor, arquivo e rede', 'Noção de HTTP'],
    problem: 'O catálogo da AWS tem centenas de serviços com nomes opacos; o iniciante se perde e escolhe pelo hype, sem enxergar que quase tudo se reduz a computar, guardar e conectar.',
    concepts: ['Computação (EC2, Lambda, containers)', 'Armazenamento (S3, EBS)', 'Rede (VPC, sub-redes)', 'Serviço gerenciado vs autogerenciado', 'Escolher pelo requisito'],
    internals: ['Quase todo sistema é: algo que executa código (compute), algo que guarda dados (storage) e algo que os conecta (rede).', 'EC2 é uma máquina que você administra; Lambda roda seu código sob demanda sem servidor para gerir; S3 guarda objetos; VPC é a sua rede privada.', 'Serviço gerenciado troca controle por menos operação — escolha pelo que o trabalho exige, não pela moda.'],
    useWhen: ['Comece mapeando o sistema em computar/guardar/conectar.', 'Prefira serviço gerenciado quando a operação não for seu diferencial.', 'Escolha o serviço pelo padrão de acesso e carga, não pelo nome.'],
    avoidWhen: ['Não escolha serviços pelo catálogo/hype sem requisito.', 'Não gerencie você mesmo o que um serviço gerenciado resolve melhor.', 'Não exponha armazenamento à internet sem necessidade.'],
    contrast: { bad: 'Adotar cinco serviços da moda sem saber qual é compute, qual é storage e qual é rede.', good: 'Mapear o sistema em computar/guardar/conectar e escolher um serviço para cada por requisito.' },
    tradeoffs: ['EC2 dá controle total e mais trabalho de operação; Lambda, menos controle e quase nenhuma operação.', 'S3 é barato e durável para objetos; um disco (EBS) serve outro padrão de acesso.', 'Serviço gerenciado acelera e cria dependência do provedor.'],
    production: 'Um time roda um servidor 24/7 para uma tarefa que acontece 1x por dia; o exercício reescreve como função sob demanda e separa compute, storage e rede.',
    risks: ['Escolher por hype', 'Storage exposto à internet', 'Operar você mesmo o que era para ser gerenciado', 'Ignorar o padrão de acesso'],
    checklist: ['Consigo mapear o sistema em computar/guardar/conectar?', 'Cada peça usa o serviço certo para o requisito?', 'O que não é diferencial está em serviço gerenciado?', 'O armazenamento está privado por padrão?', 'A rede (VPC) isola o que precisa?'],
    interview: [
      ['Júnior/Pleno', 'Quais são os três blocos essenciais de um sistema na nuvem?', 'Computação (executar código), armazenamento (guardar dados) e rede (conectar) — quase todo serviço cai numa dessas categorias.'],
      ['Sênior/Staff', 'Quando escolher Lambda em vez de EC2?', 'Quando a carga é intermitente/orientada a evento e não se quer operar servidor; EC2 quando é preciso controle do host, processos longos ou ajuste fino.']
    ],
    exercises: [
      ['Básico', 'Classificar 9 serviços/recursos em computar, guardar ou conectar.', 'Tabela com a categoria de cada um.'],
      ['Aplicado', 'Desenhar um app simples (API + banco + arquivos) mapeando compute, storage e rede.', 'Diagrama com um serviço por bloco.'],
      ['Sênior', 'Justificar EC2 vs Lambda para dois workloads diferentes.', 'Decisão com requisito de carga e operação.']
    ],
    challenge: 'Explicar por que "quase tudo na AWS é computar, guardar ou conectar" ajuda a não se perder no catálogo.',
    book: 'Amazon Web Services in Action, caps. 2–4; AWS Cookbook (compute, storage e rede).',
    complements: [official.ec2, official.vpc],
    quiz: [
      { question: 'Quais são os três blocos essenciais de quase todo sistema na nuvem?', options: ['Computar, guardar e conectar', 'Frontend, backend e mobile', 'Dev, teste e produção', 'CPU, RAM e disco'], answer: 0, why: 'Compute (executar), storage (guardar) e rede (conectar) — o mapa para não se perder no catálogo.' },
      { question: 'A principal diferença entre EC2 e Lambda é:', options: ['EC2 é uma máquina que você administra; Lambda roda seu código sob demanda sem servidor para gerir', 'Lambda é mais caro sempre', 'EC2 só serve para banco de dados', 'Não há diferença'], answer: 0, why: 'EC2 = controle e operação do host; Lambda = execução sob demanda sem gerenciar servidor.' },
      { question: 'O que é um "serviço gerenciado"?', options: ['A AWS opera boa parte da infraestrutura por você, em troca de menos controle', 'Um serviço que você mesmo instala no seu PC', 'Um serviço gratuito', 'Um serviço só para administradores'], answer: 0, why: 'Serviço gerenciado reduz operação e cede controle — escolha pelo que o trabalho exige.' }
    ]
  }),
  moduleOf({
    number: '0.4', part: 'base', id: 'base-elasticidade-custo', title: 'Elasticidade, pay-as-you-go e o custo que você não vê', level: 'Ponte (Faixa 0)',
    objective: 'Entender elasticidade (subir e descer capacidade sob demanda), o modelo pay-as-you-go e as fontes de custo invisível, usando o Well-Architected como bússola.',
    prerequisites: ['Módulo 0.3', 'Ideia de porcentagem e média', 'Noção de uso variável ao longo do dia'],
    problem: 'Vindo do "servidor sempre ligado", o iniciante provisiona para o pico e paga por capacidade ociosa — ou esquece recursos rodando, e a fatura surpreende no fim do mês.',
    concepts: ['Elasticidade (escala sob demanda)', 'Pay-as-you-go', 'Provisionar para o pico vs autoescala', 'Custo invisível (egress, recursos esquecidos)', 'Well-Architected como bússola'],
    internals: ['Na nuvem você paga pelo que usa; capacidade sobe e desce conforme a demanda em vez de ficar fixa.', 'Provisionar para o pico desperdiça nos vales; autoescala acompanha a carga e corta o ocioso.', 'Custos "invisíveis" (transferência de dados/egress, recursos esquecidos, snapshots) somam mais que a computação em muitos casos.'],
    useWhen: ['Use autoescala quando a carga varia bastante ao longo do tempo.', 'Desligue/reduza o que não está em uso.', 'Estime custo por unidade (por requisição, por usuário) antes de crescer.'],
    avoidWhen: ['Não provisione sempre para o pico "por segurança".', 'Não deixe recursos ligados sem dono nem alarme de custo.', 'Não ignore transferência de dados ao desenhar a arquitetura.'],
    contrast: { bad: 'Manter 10 servidores 24/7 para um pico que dura 1 hora por dia.', good: 'Autoescalar de 2 a 10 conforme a demanda e pagar só o que rodou — o mesmo trabalho por uma fração do custo.' },
    tradeoffs: ['Autoescala corta custo e adiciona complexidade de configuração.', 'Reservar capacidade barateia o previsível e trava flexibilidade.', 'Multi-região melhora resiliência e aumenta egress e custo.'],
    production: 'Uma fatura triplica por causa de egress e de um ambiente de teste esquecido ligado. O exercício compara o custo de "sempre ligado" com o de autoescala para uma carga com picos.',
    risks: ['Provisionar para o pico', 'Recurso esquecido ligado', 'Egress ignorado', 'Sem alarme de orçamento'],
    checklist: ['A capacidade acompanha a demanda (elástica)?', 'Pago só pelo que uso?', 'Há alarme de orçamento?', 'Considerei egress e recursos esquecidos?', 'Sei o custo por unidade (requisição/usuário)?'],
    interview: [
      ['Júnior/Pleno', 'O que é elasticidade e por que ela economiza?', 'Ajustar a capacidade para cima e para baixo conforme a demanda; evita pagar por recurso ocioso do pico durante os vales.'],
      ['Sênior/Staff', 'Quais custos costumam surpreender quem vem de servidor fixo?', 'Transferência de dados (egress), recursos esquecidos rodando, snapshots/armazenamento acumulado — muitas vezes maiores que a própria computação.']
    ],
    exercises: [
      ['Básico', 'Calcular o custo de 10 servidores 24/7 vs autoescala para uma carga com pico de 1h/dia.', 'Comparação de custo com a conta feita.'],
      ['Aplicado', 'Identificar três fontes de custo invisível num cenário dado.', 'Lista com egress, ocioso e esquecidos.'],
      ['Sênior', 'Propor um alarme de orçamento e uma política de desligamento de ambientes de teste.', 'Plano com gatilho e responsável.']
    ],
    challenge: 'Defender quando "sempre ligado" ainda faz sentido — e quando a autoescala claramente ganha.',
    book: 'AWS Well-Architected (pilar de otimização de custo); Cloud FinOps (fundamentos).',
    complements: [official.reliability],
    quiz: [
      { question: 'O que é elasticidade na nuvem?', options: ['Ajustar a capacidade para cima e para baixo conforme a demanda', 'Deixar tudo sempre ligado', 'Um tipo de banco de dados', 'Um desconto da AWS'], answer: 0, why: 'Elasticidade acompanha a carga; com pay-as-you-go, você não paga pelo ocioso do pico nos vales.' },
      { question: 'Qual é um custo "invisível" clássico na nuvem?', options: ['Transferência de dados (egress) e recursos esquecidos ligados', 'O preço da CPU', 'O custo do código-fonte', 'A licença do navegador'], answer: 0, why: 'Egress, ambientes esquecidos e armazenamento acumulado muitas vezes superam o custo de computação.' },
      { question: 'Por que provisionar sempre para o pico costuma desperdiçar?', options: ['Você paga a capacidade máxima mesmo nos vales de baixa demanda', 'O pico nunca acontece', 'A AWS não permite', 'Deixa o sistema inseguro'], answer: 0, why: 'Sem elasticidade, a capacidade fica fixa no pico e fica ociosa (paga) no resto do tempo.' }
    ]
  }),
  moduleOf({
    number: 1, part: 'fundamentos', id: 'limites-cloud', title: 'Cloud, regiões e responsabilidade compartilhada', level: 'Fundação',
    objective: 'Explicar quais riscos pertencem à AWS, ao cliente ou aos dois e localizar cada recurso em conta, região e zona.',
    prerequisites: ['Linux e redes básicas', 'Conceito de virtualização', 'Uma conta sandbox'],
    problem: 'Equipes tratam cloud como datacenter terceirizado e deixam sem dono configuração, dados e identidade.',
    concepts: ['Região e zona de disponibilidade', 'Plano de controle e plano de dados', 'Responsabilidade compartilhada', 'Escopo global e regional', 'Quota e blast radius'],
    internals: ['A conta é limite de faturamento, quota e isolamento.', 'A região não torna todo serviço automaticamente multizona.', 'Serviço gerenciado reduz tarefas, não transfere a responsabilidade sobre dados e configuração.'],
    useWhen: ['Definir fronteiras e donos antes da arquitetura.', 'Explicar impacto de região, conta e serviço.'],
    avoidWhen: ['Não use certificação como prova de operação.', 'Não assuma alta disponibilidade sem verificar o escopo do recurso.'],
    contrast: { bad: 'Escolher serviços pelo catálogo e distribuir recursos sem mapa de responsabilidade.', good: 'Partir de requisito, limite de falha, responsabilidade e evidência operacional.' },
    tradeoffs: ['Mais isolamento aumenta governança.', 'Mais regiões aumentam custo e estados.', 'Serviço gerenciado reduz controle direto.'],
    production: 'Uma configuração regional falha porque a equipe acreditava que o serviço global replicava também os dados do workload.',
    risks: ['Conta raiz usada no cotidiano.', 'Quotas ignoradas.', 'Dados em região incompatível.'],
    checklist: ['Conta, região e zona estão explícitas?', 'Cada responsabilidade tem dono?', 'Quotas críticas têm margem?', 'O diagrama mostra limites de falha?'],
    interview: [['Júnior/Pleno', 'O que muda entre região e zona de disponibilidade?', 'Distinguir isolamento, latência, falha e escopo de recursos.'], ['Sênior/Staff', 'Como decidir se um workload precisa de outra região?', 'Relacionar requisito, dependências, dados, RTO/RPO, complexidade e custo.']],
    exercises: [['Básico', 'Mapear dez recursos por escopo e responsabilidade.', 'Tabela revisada com fonte oficial.'], ['Aplicado', 'Modelar duas zonas e uma falha zonal.', 'Diagrama e impacto previsto.'], ['Sênior', 'Defender uma estratégia regional.', 'ADR com restrições, custo e gatilho de revisão.']],
    challenge: 'Demonstrar uma suposição de disponibilidade que o contrato real de um serviço invalida.',
    book: 'Amazon Web Services in Action, cap. 1; SAA-C02 Study Guide, cap. 1.',
    complements: [official.sharedResponsibility], exampleFile: '../../examples/aws-senior/fundacao-segura.md'
  }),
  moduleOf({
    number: 2, part: 'fundamentos', id: 'identidade-acesso', title: 'IAM, federação e menor privilégio', level: 'Fundação',
    objective: 'Projetar acesso humano e de workload com credenciais temporárias, menor privilégio e trilha de auditoria.',
    prerequisites: ['Conta sandbox protegida', 'Noção de autenticação e autorização', 'JSON básico'],
    problem: 'Chaves permanentes e políticas curingas transformam uma credencial vazada em comprometimento amplo.',
    concepts: ['Principal, ação e recurso', 'Policy evaluation', 'Role e STS', 'IAM Identity Center', 'Permissions boundary e SCP'],
    internals: ['Negação explícita prevalece na avaliação.', 'Role entrega credenciais temporárias por sessão.', 'SCP limita o máximo permitido, mas não concede permissão.'],
    useWhen: ['Separar acesso humano e de workload.', 'Delegar administração sem privilégio irrestrito.'],
    avoidWhen: ['Não distribua access keys humanas.', 'Não corrija AccessDenied com Action e Resource curingas.'],
    contrast: { bad: 'Um usuário por aplicação com chave estática e AdministratorAccess.', good: 'Federação para pessoas, roles para workloads e políticas construídas por uso observado.' },
    tradeoffs: ['Política granular exige inventário.', 'Federação depende do provedor de identidade.', 'Boundaries adicionam uma camada de diagnóstico.'],
    production: 'Uma função comprometida tenta listar segredos de outra aplicação; escopo por recurso e condição contém o incidente.',
    risks: ['Confused deputy.', 'Trust policy aberta.', 'Sessão sem contexto auditável.'],
    checklist: ['Root tem MFA e não é rotina?', 'Pessoas usam federação?', 'Workloads usam role?', 'A política foi testada sem curinga amplo?', 'CloudTrail permite atribuição?'],
    interview: [['Júnior/Pleno', 'Qual a diferença entre policy de identidade e trust policy?', 'Explicar quem pode assumir e o que a sessão pode fazer.'], ['Sênior/Staff', 'Como delegar criação de roles sem escalada de privilégio?', 'Combinar boundaries, PassRole restrito, condições, SCP e auditoria.']],
    exercises: [['Básico', 'Criar role somente leitura por sessão.', 'Policy, trust e evento CloudTrail.'], ['Aplicado', 'Derivar menor privilégio de acessos reais.', 'Policy reduzida e testes permitidos/negados.'], ['Sênior', 'Modelar acesso cross-account.', 'Diagrama, external ID ou condição e ameaça mitigada.']],
    challenge: 'Provar que uma política aparentemente restrita ainda permite escalada por iam:PassRole.',
    book: 'AWS Cookbook, cap. 1; Amazon Web Services in Action, segurança e IAM.',
    complements: [official.iam], exampleFile: '../../examples/aws-senior/fundacao-segura.md'
  }),
  moduleOf({
    number: 3, part: 'fundamentos', id: 'rede-vpc', title: 'VPC, DNS e caminhos de rede', level: 'Aplicado',
    objective: 'Projetar e diagnosticar o caminho entre cliente, borda, sub-rede e serviço sem confundir rota, estado e nome.',
    prerequisites: ['CIDR, DNS, TCP e TLS', 'IAM básico', 'Duas zonas de disponibilidade'],
    problem: 'Arquiteturas acumulam sub-redes “públicas” e “privadas” por rótulo, sem entender rotas, tradução e custo.',
    concepts: ['CIDR e subnet', 'Route table e gateway', 'Security group e NACL', 'NAT e VPC endpoint', 'Route 53 e resolução'],
    internals: ['Sub-rede é pública quando sua rota permite saída por internet gateway.', 'Security group é stateful; NACL é stateless.', 'NAT Gateway cobra por hora e dados, e não recebe conexão iniciada da internet.'],
    useWhen: ['Isolar camadas e dados.', 'Desenhar conectividade privada a serviços AWS.'],
    avoidWhen: ['Não adicione NAT por hábito.', 'Não use peering como malha transitiva.'],
    contrast: { bad: 'Abrir 0.0.0.0/0 para resolver conectividade.', good: 'Rastrear DNS, rota, ACL, SG, listener e aplicação em sequência.' },
    tradeoffs: ['Mais sub-redes aumentam endereçamento e gestão.', 'Endpoints reduzem exposição e podem ter custo.', 'Inspeção central adiciona latência.'],
    production: 'Tarefas privadas não alcançam S3 porque a rota esperada usa NAT indisponível; um gateway endpoint remove a dependência.',
    risks: ['CIDR sobreposto.', 'Egress sem controle.', 'DNS privado inconsistente.'],
    checklist: ['CIDRs permitem crescimento?', 'Cada salto tem rota ida/volta?', 'Regras referenciam SG quando possível?', 'Egress e custo estão visíveis?', 'Fluxo foi testado por Reachability Analyzer?'],
    interview: [['Júnior/Pleno', 'O que torna uma subnet pública?', 'Relacionar route table, internet gateway e endereço público; nome não basta.'], ['Sênior/Staff', 'Quando usar Transit Gateway em vez de peering?', 'Comparar transitividade, escala, segmentação, operação e custo.']],
    exercises: [['Básico', 'Criar VPC multizona com sub-redes por camada.', 'Diagrama, CIDRs e rotas.'], ['Aplicado', 'Diagnosticar cinco falhas de conectividade.', 'Hipóteses e evidências por camada.'], ['Sênior', 'Reduzir dependência e custo de NAT.', 'Medição antes/depois e endpoints justificados.']],
    challenge: 'Projetar conectividade híbrida com rota assimétrica detectável e rollback.',
    book: 'AWS Cookbook, cap. 2; SAA-C02 Study Guide, cap. 4.',
    complements: [official.vpc], exampleFile: '../../examples/aws-senior/fundacao-segura.md'
  }),
  moduleOf({
    number: 4, part: 'fundamentos', id: 'compute-elastico', title: 'EC2, balanceamento e elasticidade', level: 'Aplicado',
    objective: 'Dimensionar computação, balanceamento e Auto Scaling por perfil de carga, saúde e tempo de inicialização.',
    prerequisites: ['VPC e security groups', 'Processos Linux', 'Métricas de CPU, memória e latência'],
    problem: 'Instâncias são redimensionadas por intuição enquanto falhas de saúde, inicialização e estado continuam ocultas.',
    concepts: ['Famílias e tenancy', 'AMI e launch template', 'ALB e NLB', 'Auto Scaling Group', 'Spot e Savings Plans'],
    internals: ['Target health não equivale à saúde profunda do serviço.', 'Scaling reage depois que o sinal existe.', 'Spot pode ser interrompido e exige checkpoint ou reposição.'],
    useWhen: ['Precisar de runtime controlável ou software legado.', 'Escalar frota stateless por sinal mensurável.'],
    avoidWhen: ['Não mantenha sessão local em frota elástica.', 'Não use CPU como único sinal para todas as cargas.'],
    contrast: { bad: 'Uma instância grande, configurada manualmente e sem health check.', good: 'Imagem imutável, launch template, frota multizona, saúde e política de escala testadas.' },
    tradeoffs: ['Mais controle amplia patching.', 'Escala rápida exige capacidade preparada.', 'Spot reduz preço e aumenta variabilidade.'],
    production: 'O p95 cresce antes da CPU; escalar por fila pendente corrige o sinal tardio e reduz saturação.',
    risks: ['Drift de instância.', 'Drain ausente.', 'Warm-up subestimado.'],
    checklist: ['A imagem é reproduzível?', 'O health check mede capacidade de servir?', 'O estado saiu da instância?', 'Scale-in preserva requisições?', 'Custo normal e de pico foi estimado?'],
    interview: [['Júnior/Pleno', 'Quando escolher ALB ou NLB?', 'Comparar camada, protocolo, roteamento, TLS, latência e IP estático.'], ['Sênior/Staff', 'Como escalar uma carga cujo gargalo não é CPU?', 'Escolher sinal causal, target tracking ou step scaling, warm-up e limite seguro.']],
    exercises: [['Básico', 'Publicar serviço atrás de ALB.', 'Health check e acesso sem porta direta.'], ['Aplicado', 'Testar scale-out e scale-in.', 'Gráfico de carga, capacidade e latência.'], ['Sênior', 'Combinar On-Demand e Spot.', 'Política, interrupção simulada e impacto medido.']],
    challenge: 'Defender quando manter EC2 é melhor que migrar imediatamente para serverless ou containers.',
    book: 'Amazon Web Services in Action, EC2 e alta disponibilidade; The Good Parts of AWS, EC2, ELB e Auto Scaling.',
    complements: [official.ec2], exampleFile: '../../examples/aws-senior/elasticidade-autoscaling.mjs'
  }),
  moduleOf({
    number: 5, part: 'fundamentos', id: 'storage-dados', title: 'S3, EBS e EFS por semântica de acesso', level: 'Aplicado',
    objective: 'Escolher armazenamento por protocolo, durabilidade, latência, consistência, ciclo de vida e recuperação.',
    prerequisites: ['Objetos, blocos e filesystem', 'Criptografia básica', 'Perfil de acesso e retenção'],
    problem: 'Storage é escolhido pelo preço nominal e falha quando acesso, throughput, retenção ou restore entram em cena.',
    concepts: ['S3 e versionamento', 'Classes e lifecycle', 'EBS e snapshots', 'EFS e throughput', 'KMS e políticas de acesso'],
    internals: ['Durabilidade não substitui backup nem proteção contra exclusão lógica.', 'EBS pertence a uma zona; snapshot é recurso regional.', 'Lifecycle pode migrar objetos para classes com custo de recuperação.'],
    useWhen: ['S3 para objetos e data lake.', 'EBS para bloco de baixa latência e EFS para POSIX compartilhado.'],
    avoidWhen: ['Não monte S3 como filesystem sem validar semântica.', 'Não trate réplica como cópia imutável.'],
    contrast: { bad: 'Um bucket público com dados sem classificação e retenção indefinida.', good: 'Acesso bloqueado por padrão, criptografia, versão, lifecycle e restore testado.' },
    tradeoffs: ['Mais cópias aumentam custo.', 'Camada fria amplia tempo de recuperação.', 'KMS gerenciado pelo cliente amplia controle e operação.'],
    production: 'Uma regra de lifecycle arquiva dados consultados semanalmente e o custo de recuperação supera a economia prevista.',
    risks: ['Exposição pública.', 'Delete replicado.', 'Throughput incompatível.'],
    checklist: ['O protocolo combina com a aplicação?', 'Retenção e exclusão têm política?', 'Criptografia e acesso foram testados?', 'Restore foi cronometrado?', 'Custo inclui requests e transferência?'],
    interview: [['Júnior/Pleno', 'Quando escolher EBS, EFS ou S3?', 'Comparar interface, escopo, latência, compartilhamento, durabilidade e custo.'], ['Sênior/Staff', 'Como proteger dados contra exclusão maliciosa?', 'Combinar isolamento, versionamento, Object Lock quando cabível, backup e testes de recuperação.']],
    exercises: [['Básico', 'Criar bucket privado versionado.', 'Policy negativa e teste de acesso.'], ['Aplicado', 'Comparar lifecycle para três perfis.', 'Planilha de custo e recuperação.'], ['Sênior', 'Executar restauração após exclusão.', 'RPO/RTO medidos e runbook corrigido.']],
    challenge: 'Desenhar retenção auditável sem impedir exclusões legais ou explodir o custo.',
    book: 'AWS Cookbook, cap. 3; Amazon Web Services in Action, armazenamento.',
    complements: [official.storage], exampleFile: '../../examples/aws-senior/fundacao-segura.md'
  }),
  moduleOf({
    number: 6, part: 'plataforma', id: 'bancos-relacionais', title: 'RDS, Aurora e cache sob falha', level: 'Aplicado',
    objective: 'Projetar banco relacional gerenciado com conexão, réplica, backup, failover e cache coerentes com o SLO.',
    prerequisites: ['SQL e transações', 'VPC privada', 'RTO, RPO e carga estimada'],
    problem: 'Multi-AZ, read replica e cache são misturados como se resolvessem a mesma falha.',
    concepts: ['RDS e Aurora', 'Multi-AZ e read replica', 'RDS Proxy', 'Backup e PITR', 'ElastiCache'],
    internals: ['Multi-AZ prioriza disponibilidade; read replica prioriza leitura.', 'Pool sem limite pode saturar o banco durante escala da aplicação.', 'Cache introduz invalidação e consistência adicional.'],
    useWhen: ['Modelo relacional e transações importam.', 'Operação gerenciada reduz trabalho indiferenciado.'],
    avoidWhen: ['Não use réplica como backup.', 'Não adicione cache antes de medir o gargalo.'],
    contrast: { bad: 'Escalar aplicações sem limitar conexões e esperar que o banco acompanhe.', good: 'Definir orçamento de conexão, capacidade, réplica, cache e comportamento de failover.' },
    tradeoffs: ['Aurora amplia recursos e dependência.', 'Proxy protege conexões e adiciona custo.', 'Cache reduz leitura e cria estados.'],
    production: 'Um scale-out de funções abre milhares de conexões e derruba o banco; proxy e concorrência limitada estabilizam a carga.',
    risks: ['Failover não testado.', 'Réplica atrasada.', 'Cache stampede.'],
    checklist: ['Escrita e leitura foram separadas?', 'Conexões têm orçamento?', 'Backup e PITR foram restaurados?', 'Failover está no cliente?', 'Cache tem TTL e proteção contra stampede?'],
    interview: [['Júnior/Pleno', 'Multi-AZ e read replica resolvem o quê?', 'Distinguir disponibilidade, leitura, atraso, endpoint e failover.'], ['Sênior/Staff', 'Como absorver um pico de conexão sem superdimensionar o banco?', 'Limitar concorrência, usar pool/proxy, fila, backpressure e medir.']],
    exercises: [['Básico', 'Provisionar RDS privado.', 'Conexão somente a partir do workload.'], ['Aplicado', 'Executar backup e restore.', 'Tempo e perda de dados medidos.'], ['Sênior', 'Simular failover com tráfego.', 'Timeline, erros e recuperação do cliente.']],
    challenge: 'Defender quando banco autogerenciado é justificável e quais capacidades a equipe assume.',
    book: 'Amazon Web Services in Action, RDS e cache; AWS Cookbook, cap. 4.',
    complements: [official.databases], exampleFile: '../../examples/aws-senior/workload-evolutivo.md'
  }),
  moduleOf({
    number: 7, part: 'plataforma', id: 'dynamodb-acesso', title: 'DynamoDB dirigido por padrões de acesso', level: 'Avançado',
    objective: 'Modelar chaves, índices, capacidade e consistência a partir de consultas conhecidas e distribuição de tráfego.',
    prerequisites: ['NoSQL e particionamento', 'Requisitos de consistência', 'Padrões de acesso enumerados'],
    problem: 'Tabelas copiadas do modelo relacional geram scans, hot partitions e custo imprevisível.',
    concepts: ['Partition e sort key', 'GSI e LSI', 'Single-table design', 'Consistência e transações', 'Streams, TTL e capacidade'],
    internals: ['A chave distribui dados e throughput.', 'GSI mantém projeção assíncrona com custo próprio.', 'TTL remove itens sem garantia de instante exato.'],
    useWhen: ['Acesso previsível em escala e baixa latência.', 'Eventos e agregados orientados por chave.'],
    avoidWhen: ['Não use quando consultas mudam livremente e joins são centrais.', 'Não use scan como caminho normal.'],
    contrast: { bad: 'Uma tabela por entidade e filtros em scans.', good: 'Padrões de acesso primeiro, itens e índices projetados para consultas explícitas.' },
    tradeoffs: ['Single-table otimiza runtime e dificulta evolução.', 'Consistência forte custa mais e tem escopo.', 'On-demand simplifica capacidade e pode custar mais.'],
    production: 'Um tenant grande concentra a partition key e degrada todos; escrita distribuída e agregação posterior removem o hotspot.',
    risks: ['Hot key.', 'Índice sobreprojetado.', 'Item maior que o previsto.'],
    checklist: ['Padrões de acesso estão listados?', 'Chaves distribuem carga?', 'Cada índice tem consulta dona?', 'Consistência foi escolhida por requisito?', 'Carga foi testada com distribuição realista?'],
    interview: [['Júnior/Pleno', 'Por que evitar Scan em caminho crítico?', 'Relacionar leitura, latência, custo e falta de seletividade.'], ['Sênior/Staff', 'Como corrigir hot partition sem perder semântica?', 'Reprojetar chave, sharding calculado, agregação e impacto no leitor.']],
    exercises: [['Básico', 'Modelar três consultas em uma tabela.', 'Itens e expressões de chave.'], ['Aplicado', 'Comparar on-demand e provisionado.', 'Carga, custo e throttling.'], ['Sênior', 'Produzir e corrigir uma hot key.', 'Métricas e desenho antes/depois.']],
    challenge: 'Planejar migração de chave sem parada e sem dual-write inconsistente.',
    book: 'The Good Parts of AWS, DynamoDB; Amazon Web Services in Action, DynamoDB.',
    complements: [official.dynamodb], exampleFile: '../../examples/aws-senior/dynamo-particao.mjs'
  }),
  moduleOf({
    number: 8, part: 'plataforma', id: 'serverless-execucao', title: 'Lambda, API Gateway e orquestração', level: 'Aplicado',
    objective: 'Projetar funções idempotentes com concorrência, timeout, retries e estado explícitos.',
    prerequisites: ['Eventos e HTTP', 'IAM por role', 'Observabilidade básica'],
    problem: 'Serverless remove servidores visíveis, mas pode ocultar concorrência, falhas repetidas e dependências lentas.',
    concepts: ['Modelo de invocação', 'Cold start e concorrência', 'API Gateway', 'Step Functions', 'Destinations e DLQ'],
    internals: ['Invocação síncrona e assíncrona têm políticas distintas.', 'Retry pode repetir efeitos e exige idempotência.', 'Concorrência reservada também protege dependências.'],
    useWhen: ['Carga variável, eventos e duração limitada.', 'Orquestração auditável de passos.'],
    avoidWhen: ['Não use para CPU longa sem avaliar alternativas.', 'Não fragmente cada função de domínio por moda.'],
    contrast: { bad: 'Função com segredo embutido, retry cego e escrita não idempotente.', good: 'Evento versionado, idempotency key, timeout em cadeia e destino de falha.' },
    tradeoffs: ['Escala rápida pressiona dependências.', 'Provisioned concurrency reduz cold start e aumenta custo.', 'Step Functions melhora estado e amplia cobrança/transição.'],
    production: 'Uma entrega de pedido é repetida após timeout e cobra duas vezes; chave idempotente e estado durável corrigem o efeito.',
    risks: ['Retry storm.', 'Timeout desalinhado.', 'Payload incompatível.'],
    checklist: ['Invocação e retry estão explícitos?', 'Efeito é idempotente?', 'Concorrência protege downstream?', 'Falha tem destino e alarme?', 'Custo por milhão e pico foi estimado?'],
    interview: [['Júnior/Pleno', 'O que causa cold start e quando ele importa?', 'Relacionar ambiente, pacote, runtime, VPC, frequência e requisito de latência.'], ['Sênior/Staff', 'Como impedir que Lambda derrube o banco?', 'Concorrência, pool/proxy, fila, backpressure, timeout e capacidade.']],
    exercises: [['Básico', 'Publicar função HTTP com role mínima.', 'Chamada, logs e policy.'], ['Aplicado', 'Reproduzir evento duplicado.', 'Teste de idempotência e estado.'], ['Sênior', 'Modelar saga com compensação.', 'State machine, falha plantada e evidência.']],
    challenge: 'Justificar quando um serviço sempre ativo é mais simples e barato que Lambda.',
    book: 'Serverless Architectures on AWS, caps. 1, 2 e 7; AWS Cookbook, cap. 5.',
    complements: [official.lambda], exampleFile: '../../examples/aws-senior/workload-evolutivo.md'
  }),
  moduleOf({
    number: 9, part: 'plataforma', id: 'mensageria-eventos', title: 'SQS, SNS, EventBridge e streams', level: 'Avançado',
    objective: 'Escolher fila, pub/sub, barramento ou stream por entrega, ordem, replay, throughput e consumidor.',
    prerequisites: ['Assincronicidade', 'Idempotência', 'Métricas de fila e atraso'],
    problem: 'Serviços de eventos são tratados como equivalentes e perdem mensagens, ordem ou capacidade de replay.',
    concepts: ['SQS Standard e FIFO', 'SNS fan-out', 'EventBridge bus', 'Kinesis stream', 'DLQ e redrive'],
    internals: ['At-least-once implica duplicatas.', 'Visibility timeout precisa superar o processamento ou ser estendido.', 'Stream preserva log particionado; fila distribui trabalho.'],
    useWhen: ['Desacoplar ritmo e disponibilidade.', 'Propagar eventos para consumidores independentes.'],
    avoidWhen: ['Não use evento para esconder contrato indefinido.', 'Não confunda FIFO com ordem global ilimitada.'],
    contrast: { bad: 'Publicar evento sem schema, owner, retry ou retenção.', good: 'Contrato versionado, chave de idempotência, DLQ observável e política de replay.' },
    tradeoffs: ['Mais desacoplamento dificulta rastreamento.', 'FIFO reduz paralelismo por grupo.', 'Replay exige compatibilidade temporal.'],
    production: 'Um consumidor lento acumula idade de mensagem; autoscaling por CPU não reage, mas escala por backlog por consumidor.',
    risks: ['Poison message.', 'DLQ esquecida.', 'Evento com dado sensível.'],
    checklist: ['Semântica de entrega foi escolhida?', 'Duplicata é segura?', 'Backlog e idade têm alarme?', 'DLQ tem dono e redrive?', 'Schema e evolução são compatíveis?'],
    interview: [['Júnior/Pleno', 'Quando usar SQS ou SNS?', 'Distinguir fila de trabalho, fan-out, retenção e consumidor.'], ['Sênior/Staff', 'Como executar replay sem repetir efeitos perigosos?', 'Janela, versão, idempotência, isolamento, ritmo e reconciliação.']],
    exercises: [['Básico', 'Criar fila com DLQ.', 'Falha encaminhada e alarme.'], ['Aplicado', 'Implementar fan-out com dois consumidores.', 'Contratos e traces correlacionados.'], ['Sênior', 'Controlar backlog sob pico.', 'Teste de carga, escala e custo.']],
    challenge: 'Escolher entre EventBridge e Kinesis para auditoria reproduzível e defender a retenção.',
    book: 'Amazon Web Services in Action, desacoplamento; SAA-C02 Study Guide, cap. 9.',
    complements: [official.events], exampleFile: '../../examples/aws-senior/sqs-idempotencia-dlq.mjs'
  }),
  moduleOf({
    number: 10, part: 'plataforma', id: 'containers-aws', title: 'ECS, Fargate e EKS sem dogma', level: 'Avançado',
    objective: 'Escolher e operar a plataforma de containers pelo controle necessário, ecossistema, capacidade e carga da equipe.',
    prerequisites: ['Imagens e registry', 'Rede e balanceamento', 'IAM de workload'],
    problem: 'Kubernetes é adotado antes de existir problema que justifique seu plano de controle e operação.',
    concepts: ['ECR e provenance', 'ECS task e service', 'Fargate e EC2 capacity', 'EKS e Kubernetes', 'Load balancer e autoscaling'],
    internals: ['Fargate remove hosts, não remove limites de rede e runtime.', 'ECS e EKS separam deployment do provisionamento de capacidade.', 'Escala do pod não garante escala do nó nem da dependência.'],
    useWhen: ['Container é a unidade de entrega.', 'EKS quando portabilidade/ecossistema justificam a plataforma.'],
    avoidWhen: ['Não use EKS para um único serviço sem capacidade operacional.', 'Não execute imagem sem limites, probe e identidade.'],
    contrast: { bad: 'Cluster criado manualmente e workloads com role do nó.', good: 'Plataforma versionada, identidade por workload, limites, probes, escala e observabilidade.' },
    tradeoffs: ['ECS reduz superfície e portabilidade.', 'EKS amplia ecossistema e complexidade.', 'Fargate simplifica host e pode elevar custo.'],
    production: 'Pods escalam, mas IPs de subnet acabam; capacidade de rede precisa fazer parte do cálculo.',
    risks: ['Role excessiva.', 'Imagem vulnerável.', 'Eviction sem orçamento.'],
    checklist: ['A escolha resolve requisito real?', 'Imagem é imutável e verificada?', 'Workload tem role própria?', 'Probes e limites refletem runtime?', 'Capacidade de nó, IP e downstream foi testada?'],
    interview: [['Júnior/Pleno', 'ECS e EKS diferem em quê?', 'Comparar API, ecossistema, operação, portabilidade e carga cognitiva.'], ['Sênior/Staff', 'Quando não usar Kubernetes na AWS?', 'Relacionar escala organizacional, necessidades de plataforma, alternativas e custo total.']],
    exercises: [['Básico', 'Publicar imagem no ECR e executar tarefa.', 'Digest, scan e logs.'], ['Aplicado', 'Fazer deploy blue/green.', 'Tráfego, rollback e saúde.'], ['Sênior', 'Comparar ECS e EKS para o mesmo workload.', 'Matriz de decisão e custo operacional.']],
    challenge: 'Defender a alternativa mais simples diante de uma preferência institucional por EKS.',
    book: 'Amazon Web Services in Action, arquiteturas modernas; AWS Cookbook, cap. 6.',
    complements: [official.containers], exampleFile: '../../examples/aws-senior/workload-evolutivo.md'
  }),
  moduleOf({
    number: 11, part: 'confiabilidade', id: 'observabilidade-auditoria', title: 'CloudWatch, CloudTrail, Config e correlação', level: 'Aplicado',
    objective: 'Instrumentar sinais de aplicação, infraestrutura, mudança e configuração para responder perguntas operacionais.',
    prerequisites: ['Workload implantado', 'Logs estruturados', 'Hipóteses de falha'],
    problem: 'Dashboards acumulam métricas sem pergunta, enquanto ações e mudanças continuam sem correlação.',
    concepts: ['Logs, métricas e traces', 'CloudWatch alarms', 'CloudTrail', 'AWS Config', 'X-Ray e ServiceLens'],
    internals: ['CloudTrail registra atividade de API, não log da aplicação.', 'Config avalia estado de recurso e histórico.', 'Alarme útil combina sinal, janela, ausência de dados e ação.'],
    useWhen: ['Correlacionar impacto, deploy e alteração.', 'Detectar drift e comportamento anômalo.'],
    avoidWhen: ['Não registre segredo em log.', 'Não alerte cada métrica sem ação.'],
    contrast: { bad: 'Logs sem contexto e alarmes por CPU em todos os recursos.', good: 'Sinais derivados do SLO, IDs correlacionados, mudanças e runbook acionável.' },
    tradeoffs: ['Mais retenção custa mais.', 'Alta cardinalidade amplia investigação e custo.', 'Centralização exige política de acesso.'],
    production: 'A latência cresce após alteração de security group; mudança em CloudTrail e trace conectam causa e impacto.',
    risks: ['Log sensível.', 'Alarme ruidoso.', 'Região sem trail.'],
    checklist: ['Cada sinal responde uma pergunta?', 'Logs têm correlação e retenção?', 'Mudanças são atribuíveis?', 'Alarme tem ação e owner?', 'Telemetria falha de modo observável?'],
    interview: [['Júnior/Pleno', 'CloudTrail, Config e CloudWatch servem para quê?', 'Distinguir ação de API, estado/configuração e telemetria operacional.'], ['Sênior/Staff', 'Como reduzir ruído sem esconder incidentes?', 'Partir de sintomas do usuário, SLO, agregação, janela, severidade e revisão.']],
    exercises: [['Básico', 'Correlacionar request, log e métrica.', 'Consulta reproduzível por ID.'], ['Aplicado', 'Criar alarme com runbook.', 'Falha disparada e tempo de resposta.'], ['Sênior', 'Detectar alteração não autorizada.', 'Evento, regra e evidência de contenção.']],
    challenge: 'Calcular custo de observabilidade por serviço e remover sinal sem reduzir capacidade de diagnóstico.',
    book: 'SAA-C02 Study Guide, cap. 7; AWS Cookbook, account management.',
    complements: [official.observability], exampleFile: '../../examples/aws-senior/confiabilidade-game-day.md'
  }),
  moduleOf({
    number: 12, part: 'confiabilidade', id: 'alta-disponibilidade', title: 'Alta disponibilidade, escala e quotas', level: 'Avançado',
    objective: 'Dimensionar redundância, escala e quotas a partir de SLO, perfil de tráfego e modos de falha.',
    prerequisites: ['Métricas e SLO', 'Arquitetura multizona', 'Teste de carga'],
    problem: 'Adicionar réplicas não elimina dependências zonais, limites de conta ou gargalos de downstream.',
    concepts: ['SLO e disponibilidade composta', 'Multi-AZ', 'Auto Scaling', 'Load shedding', 'Service Quotas'],
    internals: ['Dependências seriais multiplicam indisponibilidade.', 'Quotas podem impedir scale-out no pico.', 'Redundância sem isolamento replica a mesma falha.'],
    useWhen: ['Capacidade e disponibilidade têm alvo explícito.', 'Falha de zona precisa ser absorvida.'],
    avoidWhen: ['Não prometa quatro noves sem orçamento de dependências.', 'Não escale consumidores além do downstream.'],
    contrast: { bad: 'Duplicar componentes e declarar alta disponibilidade.', good: 'Modelar árvore de dependências, capacidade N-1, quotas e degradação controlada.' },
    tradeoffs: ['Folga aumenta custo.', 'Mais zonas ampliam tráfego e consistência.', 'Degradação preserva funções essenciais.'],
    production: 'Após perder uma zona, a capacidade restante não suporta pico e escala falha por quota de endereço.',
    risks: ['Dependência single-AZ.', 'Quota sem alarme.', 'Retry amplificando pico.'],
    checklist: ['SLO e dependências estão modelados?', 'Capacidade N-1 foi testada?', 'Quotas têm margem?', 'Degradação está definida?', 'Retry e timeout têm orçamento?'],
    interview: [['Júnior/Pleno', 'Multi-AZ garante zero indisponibilidade?', 'Explicar failover, estado, cliente, capacidade e dependências.'], ['Sênior/Staff', 'Como calcular capacidade após perder uma zona?', 'Usar pico, distribuição, headroom, tempo de escala e limites.']],
    exercises: [['Básico', 'Calcular disponibilidade composta.', 'Planilha com dependências.'], ['Aplicado', 'Testar perda de uma zona.', 'Gráficos e impacto no SLO.'], ['Sênior', 'Implementar load shedding.', 'Teste de saturação e função preservada.']],
    challenge: 'Escolher entre capacidade ociosa e recuperação rápida com premissas econômicas explícitas.',
    book: 'Amazon Web Services in Action, alta disponibilidade e fault tolerance; AWS Well-Architected Framework local.',
    complements: [official.reliability], exampleFile: '../../examples/aws-senior/quota-throttling.mjs'
  }),
  moduleOf({
    number: 13, part: 'confiabilidade', id: 'backup-dr', title: 'Backup, restore e disaster recovery', level: 'Avançado',
    objective: 'Escolher e testar estratégia de recuperação que cumpra RTO e RPO por dependência e dado.',
    prerequisites: ['Inventário de estado', 'RTO e RPO aprovados', 'Ambiente de teste isolado'],
    problem: 'Backups existem, mas ninguém comprova integridade, ordem de restauração ou capacidade do ambiente recuperado.',
    concepts: ['RTO e RPO', 'Backup e PITR', 'Pilot light', 'Warm standby', 'Active-active'],
    internals: ['RPO depende da frequência e consistência do dado.', 'RTO inclui decisão, acesso, infraestrutura e validação.', 'DR multirregional multiplica estados e testes.'],
    useWhen: ['Impacto de perda e parada foi quantificado.', 'Dependências externas têm plano.'],
    avoidWhen: ['Não use réplica como única cópia.', 'Não declare DR sem exercício.'],
    contrast: { bad: 'Snapshot agendado e documento sem execução.', good: 'Cópia isolada, infraestrutura reproduzível, restore cronometrado e validação do negócio.' },
    tradeoffs: ['RTO menor exige prontidão cara.', 'RPO menor amplia replicação.', 'Active-active exige reconciliação.'],
    production: 'O banco é restaurado, mas chaves, filas e DNS atrasam horas; runbook por dependência corrige o RTO real.',
    risks: ['Backup comprometido junto.', 'Segredo indisponível.', 'Dados divergentes após failback.'],
    checklist: ['Estado e ordem estão inventariados?', 'Cópia tem isolamento?', 'Restore foi validado pelo negócio?', 'RTO/RPO foram medidos?', 'Failback e comunicação estão definidos?'],
    interview: [['Júnior/Pleno', 'RTO e RPO medem o quê?', 'Distinguir tempo de recuperação e perda aceitável de dados.'], ['Sênior/Staff', 'Como escolher pilot light ou warm standby?', 'Relacionar impacto, prontidão, replicação, teste, dependências e custo.']],
    exercises: [['Básico', 'Restaurar backup em ambiente limpo.', 'Integridade e tempo medidos.'], ['Aplicado', 'Executar failover e failback.', 'Timeline e inconsistências.'], ['Sênior', 'Conduzir game day regional.', 'Runbook, decisões e ações corretivas.']],
    challenge: 'Demonstrar que o RTO declarado é incompatível com a cadeia real de autorização e DNS.',
    book: 'AWS Cookbook, backup e replicação; AWS Well-Architected Framework local, Reliability.',
    complements: [official.disasterRecovery], exampleFile: '../../examples/aws-senior/dr-rto-rpo.mjs'
  }),
  moduleOf({
    number: 14, part: 'confiabilidade', id: 'infraestrutura-codigo', title: 'CloudFormation, CDK e entrega de infraestrutura', level: 'Avançado',
    objective: 'Entregar infraestrutura idempotente com revisão, preview, proteção de estado, detecção de drift e rollback.',
    prerequisites: ['Git e pipeline', 'IAM e rede', 'Arquitetura implantável'],
    problem: 'Cliques no console acumulam drift e tornam recuperação, revisão e auditoria impossíveis.',
    concepts: ['CloudFormation stack', 'Change set', 'CDK construct', 'Terraform state', 'Policy as code'],
    internals: ['IaC declarativa converge estado desejado, mas recursos stateful exigem política.', 'Change set mostra intenção sem provar efeito.', 'CDK sintetiza templates e herda limites do engine.'],
    useWhen: ['Ambientes precisam ser reproduzidos e revisados.', 'Controles devem bloquear configurações proibidas.'],
    avoidWhen: ['Não importe tudo sem estratégia de ownership.', 'Não aplique direto da estação de trabalho em produção.'],
    contrast: { bad: 'Console manual e template gigante aplicado sem preview.', good: 'Módulos pequenos, plan/change set em PR, pipeline, policy e rollback ensaiado.' },
    tradeoffs: ['Abstração acelera repetição e pode esconder recurso.', 'Stacks menores ampliam composição.', 'Terraform amplia ecossistema e exige state seguro.'],
    production: 'Uma substituição destrutiva aparece no preview; política de retenção e migração em duas fases evitam perda.',
    risks: ['State exposto.', 'Dependência circular.', 'Rollback bloqueado por recurso stateful.'],
    checklist: ['Existe fonte única?', 'Preview é revisado?', 'Segredos estão fora do state/template?', 'Drift é detectado?', 'Mudança destrutiva tem migração?'],
    interview: [['Júnior/Pleno', 'CDK substitui CloudFormation?', 'Explicar síntese, construct, template e engine de execução.'], ['Sênior/Staff', 'Como dividir stacks e estados?', 'Usar lifecycle, ownership, frequência de mudança, dependência e blast radius.']],
    exercises: [['Básico', 'Provisionar rede e serviço por IaC.', 'Pipeline e outputs.'], ['Aplicado', 'Detectar e corrigir drift.', 'Relatório e reconciliação.'], ['Sênior', 'Executar mudança stateful em duas fases.', 'Plano, migração e rollback.']],
    challenge: 'Defender CloudFormation, CDK ou Terraform para uma organização multiaccount sem transformar preferência em dogma.',
    book: 'The Good Parts of AWS, CloudFormation e IaC; Amazon Web Services in Action, automação de deployment.',
    complements: [official.cloudFormation], exampleFile: '../../examples/aws-senior/confiabilidade-game-day.md'
  }),
  moduleOf({
    number: 15, part: 'confiabilidade', id: 'performance-edge', title: 'Desempenho, cache e entrega global', level: 'Avançado',
    objective: 'Reduzir latência e custo por medição, posicionamento, cache e protocolo sem ocultar consistência.',
    prerequisites: ['Perfil de tráfego', 'Percentis de latência', 'Semântica de cache'],
    problem: 'CDN e cache são adicionados sem chave, TTL ou invalidação, produzindo dado obsoleto e custo invisível.',
    concepts: ['CloudFront', 'Route 53 routing', 'ElastiCache', 'Global Accelerator', 'Compressão e connection reuse'],
    internals: ['Cache hit ratio depende da chave e distribuição.', 'Route 53 direciona novas resoluções, não move conexão existente.', 'Edge reduz distância para conteúdo e entrada, não toda dependência interna.'],
    useWhen: ['Conteúdo ou leitura permite reutilização.', 'Usuários distribuídos sofrem latência de rede.'],
    avoidWhen: ['Não cacheie autorização sem chave segura.', 'Não escolha serviço global sem medir origem e consistência.'],
    contrast: { bad: 'TTL longo para mascarar origem lenta.', good: 'Orçamento de latência, cache key mínima, invalidação e origem dimensionada.' },
    tradeoffs: ['TTL maior melhora hit e amplia stale.', 'Mais POPs podem aumentar transferência.', 'Global Accelerator custa mais e estabiliza caminho.'],
    production: 'Header de sessão entra na cache key e derruba hit ratio; política enxuta reduz origem e p95.',
    risks: ['Cache poisoning.', 'Invalidação cara.', 'Dado privado compartilhado.'],
    checklist: ['Orçamento por salto foi medido?', 'Cache key é mínima e segura?', 'TTL reflete mutação?', 'Origem suporta miss storm?', 'Custo e hit ratio têm painel?'],
    interview: [['Júnior/Pleno', 'CloudFront e Global Accelerator resolvem o mesmo problema?', 'Comparar camada, cache, protocolos, IP e rota.'], ['Sênior/Staff', 'Como evitar stampede após expiração?', 'Stale-while-revalidate, jitter, lock, prewarm, limite e capacidade da origem.']],
    exercises: [['Básico', 'Publicar conteúdo por CloudFront.', 'TLS, headers e cache status.'], ['Aplicado', 'Otimizar cache key.', 'Hit ratio e custo antes/depois.'], ['Sênior', 'Modelar usuários em três regiões.', 'Teste de latência e decisão de edge.']],
    challenge: 'Recusar uma arquitetura multirregional quando edge e otimização da origem cumprem o requisito.',
    book: 'The Good Parts of AWS, Route 53 e ELB; Amazon Web Services in Action, scaling.',
    complements: [official.performance], exampleFile: '../../examples/aws-senior/confiabilidade-game-day.md'
  }),
  moduleOf({
    number: 16, part: 'arquitetura', id: 'seguranca-defesa', title: 'Defesa em profundidade e resposta', level: 'Sênior',
    objective: 'Projetar prevenção, detecção, contenção e recuperação para identidade, dados, rede e software.',
    prerequisites: ['IAM, rede e criptografia', 'CloudTrail e Config', 'Threat modeling'],
    problem: 'Controles isolados criam sensação de segurança sem detectar exploração nem permitir resposta.',
    concepts: ['KMS e envelope encryption', 'Secrets Manager', 'WAF e Shield', 'GuardDuty e Security Hub', 'Incident response'],
    internals: ['KMS controla uso de chave e registra chamadas, mas não classifica dado.', 'WAF reduz tráfego conhecido, não corrige aplicação.', 'Detecção sem permissão de contenção prolonga impacto.'],
    useWhen: ['Controles derivam de ameaça e dado.', 'Resposta precisa preservar evidência.'],
    avoidWhen: ['Não centralize todos os segredos numa role ampla.', 'Não confunda criptografia com autorização.'],
    contrast: { bad: 'Adicionar WAF e marcar segurança concluída.', good: 'Modelar ameaça, reduzir privilégio, proteger dado, detectar comportamento e ensaiar contenção.' },
    tradeoffs: ['Mais inspeção aumenta custo e falso positivo.', 'Chaves separadas ampliam isolamento e operação.', 'Automação de contenção pode interromper serviço.'],
    production: 'Credencial de workload é abusada; sessão curta, escopo, GuardDuty e automação isolam a role sem apagar evidências.',
    risks: ['KMS policy bloqueando recuperação.', 'Segredo em log.', 'Resposta destrutiva.'],
    checklist: ['Ameaças e dados estão classificados?', 'Controles têm cobertura e owner?', 'Detecção chega a alguém?', 'Contenção preserva evidência?', 'Runbook foi ensaiado?'],
    interview: [['Júnior/Pleno', 'KMS e Secrets Manager resolvem o quê?', 'Distinguir gestão de chaves, segredo, rotação, autorização e auditoria.'], ['Sênior/Staff', 'Como conter uma role comprometida?', 'Revogar sessões quando possível, negar, isolar, preservar evidência, avaliar impacto e recuperar.']],
    exercises: [['Básico', 'Criptografar e restringir um segredo.', 'Policy e acesso negado/permitido.'], ['Aplicado', 'Detectar acesso anômalo.', 'Finding, contexto e triagem.'], ['Sênior', 'Conduzir incidente de credencial.', 'Timeline, contenção e postmortem.']],
    challenge: 'Projetar break-glass que não vire uma credencial permanente invisível.',
    book: 'AWS Cookbook, cap. 1; AWS Well-Architected Framework local, Security.',
    complements: [official.security], exampleFile: '../../examples/aws-senior/governanca-well-architected.md'
  }),
  moduleOf({
    number: 17, part: 'arquitetura', id: 'multiaccount-governanca', title: 'Organizations, Control Tower e landing zone', level: 'Sênior',
    objective: 'Organizar contas, OUs, identidade, logs e controles para reduzir blast radius sem bloquear entrega.',
    prerequisites: ['IAM avançado', 'Arquitetura de rede', 'Requisitos de compliance e custo'],
    problem: 'Uma conta única mistura produção, auditoria e sandbox; uma estrutura excessiva cria burocracia sem controle útil.',
    concepts: ['AWS Organizations', 'Organizational Units', 'SCP', 'Control Tower', 'Log archive e audit account'],
    internals: ['Conta é contêiner e limite de isolamento.', 'SCP define guarda máxima e não concede acesso.', 'Control Tower orquestra recursos gerenciados e detecta drift.'],
    useWhen: ['Há múltiplos workloads, ambientes ou times.', 'Logs e segurança precisam de independência.'],
    avoidWhen: ['Não crie OU por organograma instável.', 'Não execute workloads no management account.'],
    contrast: { bad: 'Uma conta compartilhada ou centenas de contas sem vending e ownership.', good: 'Estrutura mínima evolutiva, account vending, identidade federada, logs isolados e controles proporcionais.' },
    tradeoffs: ['Mais contas ampliam isolamento e automação.', 'SCP rígida reduz risco e flexibilidade.', 'Rede central pode virar gargalo.'],
    production: 'Uma SCP impede serviço em produção, mas não em management account; desenho e testes consideram esse limite.',
    risks: ['Management account com workload.', 'Log archive alterável.', 'SCP sem break-glass.'],
    checklist: ['Cada conta tem propósito e owner?', 'Management está livre de workload?', 'Logs estão isolados?', 'Controles foram testados em OU canário?', 'Provisionamento e fechamento são automatizados?'],
    interview: [['Júnior/Pleno', 'Por que usar múltiplas contas?', 'Isolamento, quota, billing, segurança e ciclo de vida.'], ['Sênior/Staff', 'Como desenhar OUs que evoluem?', 'Separar política de estrutura de time, começar simples, canário e account vending.']],
    exercises: [['Básico', 'Desenhar estrutura mínima de contas.', 'Diagrama com propósito e logs.'], ['Aplicado', 'Testar SCP em OU sandbox.', 'Ações permitidas/negadas.'], ['Sênior', 'Projetar account vending.', 'Fluxo, controles, ownership e desativação.']],
    challenge: 'Reduzir o número de contas proposto sem sacrificar limites críticos de segurança.',
    book: 'AWS Cookbook, cap. 9; AWS Well-Architected Framework local, Organization.',
    complements: [official.controlTower], exampleFile: '../../examples/aws-senior/governanca-well-architected.md'
  }),
  moduleOf({
    number: 18, part: 'arquitetura', id: 'finops-economia', title: 'FinOps, custo unitário e compromissos', level: 'Sênior',
    objective: 'Alocar custo, prever demanda e otimizar uso e tarifa sem transferir risco oculto para a operação.',
    prerequisites: ['Billing e tags', 'Métricas de uso', 'Unidade de negócio definida'],
    problem: 'Cortes percentuais reduzem a fatura no curto prazo e degradam confiabilidade ou compram compromisso sem uso.',
    concepts: ['Allocation e tagging', 'Cost and Usage Report', 'Custo unitário', 'Rightsizing', 'Savings Plans e Reservations'],
    internals: ['Reduzir uso e reduzir tarifa são alavancas distintas.', 'Compromisso troca flexibilidade por desconto.', 'Custo sem unidade de valor não orienta produto.'],
    useWhen: ['Times precisam decidir com custo visível.', 'Demanda estável permite compromisso.'],
    avoidWhen: ['Não compre compromisso com previsão frágil.', 'Não otimize recurso isolado contra o SLO.'],
    contrast: { bad: 'Meta genérica de cortar 20% por conta.', good: 'Custo por transação/cliente, forecast, desperdício, compromisso e impacto no SLO.' },
    tradeoffs: ['Mais granularidade amplia dados.', 'Rightsizing reduz folga.', 'Showback informa; chargeback muda incentivos.'],
    production: 'Economia de NAT aparece ao mover tráfego por endpoint; custo unitário cai sem reduzir capacidade.',
    risks: ['Tag incompleta.', 'Compromisso ocioso.', 'Economia mascarando transferência.'],
    checklist: ['Custo tem owner e unidade?', 'Alocação cobre gasto material?', 'Forecast tem faixa?', 'Uso foi otimizado antes da tarifa?', 'Ação preserva SLO e segurança?'],
    interview: [['Júnior/Pleno', 'Rightsizing e Savings Plans diferem em quê?', 'Distinguir consumo técnico e compromisso de preço.'], ['Sênior/Staff', 'Como evitar que meta de custo prejudique confiabilidade?', 'Usar unidade, SLO, cenários, guardrails e revisão conjunta.']],
    exercises: [['Básico', 'Alocar custo por ambiente.', 'Relatório sem gasto relevante órfão.'], ['Aplicado', 'Calcular custo por transação.', 'Dashboard e premissas.'], ['Sênior', 'Comparar compromisso e flexibilidade.', 'Cenários de demanda e risco.']],
    challenge: 'Defender conscientemente um aumento de custo quando ele melhora valor ou reduz risco.',
    book: 'Cloud FinOps, partes I–IV; AWS Well-Architected Framework local, Cost Optimization.',
    complements: [official.cost], exampleFile: '../../examples/aws-senior/finops-custo.mjs'
  }),
  moduleOf({
    number: 19, part: 'arquitetura', id: 'well-architected', title: 'Well-Architected e os seis pilares', level: 'Sênior',
    objective: 'Conduzir revisão baseada em risco nos seis pilares e transformar achados em backlog priorizado.',
    prerequisites: ['Workload real e métricas', 'ADRs e diagrama atual', 'Representantes de produto, segurança e operação'],
    problem: 'Revisões viram checklist de conformidade sem contexto, owner, prazo ou validação posterior.',
    concepts: ['Excelência operacional', 'Segurança', 'Confiabilidade', 'Eficiência de desempenho', 'Otimização de custos', 'Sustentabilidade'],
    internals: ['Pilares se tensionam e exigem trade-offs explícitos.', 'Pergunta orienta conversa; resposta exige evidência.', 'Risco alto precisa de owner, prazo e condição de aceite.'],
    useWhen: ['Revisar workload antes de marco e periodicamente.', 'Priorizar risco e evolução.'],
    avoidWhen: ['Não use como selo permanente.', 'Não responda pelo time sem evidência.'],
    contrast: { bad: 'Marcar respostas verdes para concluir a revisão.', good: 'Registrar contexto, evidência, risco, decisão, owner, prazo e reavaliação.' },
    tradeoffs: ['Mitigação compete com roadmap.', 'Maior resiliência pode aumentar custo e energia.', 'Revisão profunda exige participantes diversos.'],
    production: 'A revisão encontra restore não testado e custo sem alocação; ações entram no backlog com critério verificável.',
    risks: ['PDF local desatualizado.', 'Achado sem owner.', 'Sustentabilidade ignorada.'],
    checklist: ['Os seis pilares foram cobertos?', 'Cada resposta tem evidência?', 'Riscos têm severidade e owner?', 'Trade-offs viraram ADR?', 'Revisão tem data de retorno?'],
    interview: [['Júnior/Pleno', 'Quais são os seis pilares atuais?', 'Nomear e relacionar cada um a uma decisão do workload.'], ['Sênior/Staff', 'Como priorizar riscos entre pilares?', 'Impacto, probabilidade, reversibilidade, dependências, custo e objetivo de negócio.']],
    exercises: [['Básico', 'Revisar um pilar com evidência.', 'Achados e ações.'], ['Aplicado', 'Conduzir revisão cruzada.', 'Ata, ADRs e backlog priorizado.'], ['Sênior', 'Reavaliar após mitigação.', 'Evidência antes/depois e risco residual.']],
    challenge: 'Explicar por que o PDF local de cinco pilares não deve ser descartado nem tratado como fonte atual.',
    book: 'AWS Well-Architected Framework local; SAA-C02 Study Guide, parte II.',
    complements: [official.wellArchitected], exampleFile: '../../examples/aws-senior/governanca-well-architected.md'
  }),
  moduleOf({
    number: 20, part: 'arquitetura', id: 'migracao-evolucao', title: 'Migração, modernização e liderança de decisão', level: 'Staff/Principal',
    objective: 'Planejar evolução por ondas, dependências e resultado mensurável sem reescrever o sistema por preferência.',
    prerequisites: ['Arquitetura e portfólio de aplicações', 'Dados de custo e operação', 'Capacidade de facilitação técnica'],
    problem: 'Migrações escolhem serviço-alvo antes de entender dependências, valor, risco e prontidão operacional.',
    concepts: ['7 Rs de migração', 'Dependency discovery', 'Strangler pattern', 'Platform enablement', 'Architecture Decision Record'],
    internals: ['Rehost reduz mudança inicial e preserva dívida.', 'Modernização altera operação e organização, não apenas runtime.', 'Onda segura agrupa dependências e aprendizado.'],
    useWhen: ['Resultado e restrições estão explícitos.', 'Há baseline para comparar valor.'],
    avoidWhen: ['Não migre por fim de contrato sem mapear risco.', 'Não faça rewrite sem caminho incremental.'],
    contrast: { bad: 'Mandato “cloud-first” com cronograma por número de servidores.', good: 'Portfólio segmentado, hipótese por onda, landing zone pronta, critérios e rollback.' },
    tradeoffs: ['Rehost acelera saída e adia otimização.', 'Refactor amplia valor e risco.', 'Plataforma comum reduz duplicação e exige produto interno.'],
    production: 'Uma aplicação aparentemente isolada depende de job e banco compartilhados; discovery muda a ordem da onda.',
    risks: ['Dependência oculta.', 'Egress subestimado.', 'Equipe sem capacidade operacional.'],
    checklist: ['Outcome e baseline estão definidos?', 'Dependências foram verificadas?', 'Estratégia varia por workload?', 'Onda tem rollback e suporte?', 'Valor foi medido depois?'],
    interview: [['Júnior/Pleno', 'Rehost e refactor diferem em quê?', 'Comparar mudança, velocidade, risco, dívida e benefício.'], ['Sênior/Staff', 'Como interromper uma migração que não entrega valor?', 'Usar critérios prévios, evidência, custo de oportunidade, opções reversíveis e governança.']],
    exercises: [['Básico', 'Classificar cinco workloads pelos 7 Rs.', 'Matriz com evidência.'], ['Aplicado', 'Planejar uma onda piloto.', 'Dependências, critérios e rollback.'], ['Sênior', 'Defender modernização incremental.', 'Roadmap, ADRs, baseline e resultado.']],
    challenge: 'Propor não migrar um workload e demonstrar que a decisão é técnica, econômica e reversível.',
    book: 'Amazon Web Services in Action, Architecting on AWS; Cloud FinOps, adoção e operação.',
    complements: [official.migration, official.saa], exampleFile: '../../examples/aws-senior/governanca-well-architected.md'
  }),
  moduleOf({
    number: 21,
    part: 'fronteira',
    id: 'nitro-firecracker',
    title: 'O substrato: Nitro, Firecracker e o que executa por baixo',
    level: 'Expert',
    objective: 'Explicar o que a AWS executa abaixo da sua instância e usar isso para justificar desempenho, isolamento e o modelo de confiança que você assina.',
    prerequisites: ['Módulo 4 (EC2 e elasticidade)', 'Módulo 8 (Lambda)', 'Noção de virtualização e I/O'],
    problem: '"É uma máquina virtual na nuvem" era verdade em 2010. Hoje virtualização, rede e armazenamento saíram do hipervisor para hardware dedicado, e o operador não tem acesso ao seu dado nem por engano — por projeto. Quem não conhece o substrato não consegue explicar o desempenho que observa, nem responder à área de segurança sobre o que exatamente está sendo confiado.',
    concepts: ['Hipervisor tradicional versus descarga em hardware', 'Nitro: cartões dedicados para rede, armazenamento e segurança', 'Nitro Security Chip e a ausência de acesso interativo', 'Firecracker: microVM como unidade de isolamento', 'Por que Lambda e Fargate isolam em VM, não em container', 'Cold start explicado pelo mecanismo', 'Instance store, EBS e o caminho real do I/O', 'O que o modelo de responsabilidade compartilhada significa tecnicamente'],
    internals: [
      'No Nitro, o trabalho de virtualização de rede e armazenamento roda em cartões dedicados, e não consome CPU da instância — é por isso que instâncias modernas entregam praticamente todo o processador ao seu workload.',
      'O Nitro System foi projetado sem acesso interativo de operador: não há shell no host de produção. É uma afirmação verificável em whitepaper, e é o que sustenta a resposta a auditoria.',
      'Firecracker cria microVMs em dezenas de milissegundos com superfície mínima: isolamento de VM com custo próximo ao de container. É por isso que multi-tenancy em Lambda é seguro.',
      'Cold start não é um defeito do serviço: é o tempo de criar a microVM, carregar o runtime e inicializar seu código. Conhecer as três parcelas indica onde atacar.'
    ],
    useWhen: ['Use este conhecimento ao justificar isolamento para auditoria ou área de segurança.', 'Use ao dimensionar desempenho de rede e armazenamento por tipo de instância.', 'Use ao explicar e atacar cold start.'],
    avoidWhen: ['Não transforme detalhe do substrato em premissa de arquitetura: a AWS pode mudá-lo.', 'Não presuma o mesmo comportamento em famílias antigas de instância.', 'Não use "é Nitro" como resposta a um problema de desempenho sem medir.'],
    contrast: {
      bad: 'Responder à área de segurança que "a AWS é segura" e citar certificações, sem saber o que o isolamento faz tecnicamente.',
      good: 'Explicar o modelo de isolamento, apontar o whitepaper e delimitar exatamente o que permanece responsabilidade sua.'
    },
    tradeoffs: ['Descarga em hardware dá desempenho e previsibilidade, e amarra ao tipo de instância.', 'Isolamento por microVM dá segurança em multi-tenancy e custa o tempo de criação.', 'Serverless entrega o substrato pronto e reduz o controle sobre ele.'],
    production: 'Um serviço em Lambda tem p99 penalizado por cold start em picos. A análise separa as três parcelas — criação da microVM, inicialização do runtime e do código — e mostra que a maior é a inicialização de dependências do código. A correção é enxugar o pacote e inicializar fora do handler, e não aumentar memória às cegas.',
    risks: ['Depender de detalhe do substrato como garantia', 'Comparar desempenho entre famílias sem controlar o tipo de instância', 'Atribuir a cold start uma latência que é do código', 'Confundir isolamento do provedor com segurança da aplicação'],
    checklist: ['Sei o que a AWS opera e o que eu opero, tecnicamente?', 'A comparação de desempenho controla o tipo de instância?', 'As três parcelas do cold start foram separadas?', 'A afirmação de isolamento tem fonte oficial?', 'A conclusão sobrevive a uma troca de família de instância?'],
    interview: [
      ['Pleno/Sênior', 'Por que instâncias modernas entregam quase toda a CPU ao workload?', 'Porque a virtualização de rede e armazenamento foi descarregada para hardware dedicado (Nitro), em vez de consumir ciclos do hipervisor na própria instância.'],
      ['Sênior/Expert', 'A área de segurança pergunta como sabemos que ninguém da AWS lê nossos dados. O que você responde?', 'Aponto o modelo de responsabilidade compartilhada e o design do Nitro — sem acesso interativo de operador ao host, com o whitepaper de segurança como fonte — e delimito o que continua sendo nossa responsabilidade: criptografia, chaves, IAM e dados.']
    ],
    exercises: [
      ['Aplicado', 'Comparar desempenho de rede e armazenamento entre duas famílias de instância no mesmo workload.', 'Medição com o tipo declarado e a explicação da diferença.'],
      ['Aplicado', 'Separar as três parcelas do cold start de uma função e atacar a maior.', 'Medição antes e depois, com a parcela reduzida identificada.'],
      ['Sênior', 'Escrever a resposta técnica de isolamento para uma auditoria, com fonte oficial.', 'Documento com o que é do provedor, o que é seu e a referência de cada afirmação.']
    ],
    challenge: 'Explicar a um time cético, sem usar a palavra "confie", por que multi-tenancy em serverless é seguro — e onde estão os limites reais.',
    book: 'Amazon Web Services in Action (computação e o que a plataforma entrega); The Good Parts of AWS (escolher o que realmente importa).',
    complements: [frontier.nitro, frontier.nitroSecurity, frontier.firecracker], exampleFile: '../../examples/aws-senior/fronteira/substrato-e-isolamento.md'
  }),
  moduleOf({
    number: 22,
    part: 'fronteira',
    id: 'estabilidade-estatica',
    title: 'Estabilidade estática, zonas e células na AWS',
    level: 'Expert',
    objective: 'Projetar workloads que continuam servindo durante a falha sem depender do plano de controle, e calcular o raio de impacto em vez de estimá-lo.',
    prerequisites: ['Módulo 12 (alta disponibilidade e quotas)', 'Módulo 13 (recuperação)', 'Arquitetura módulo 23 para a matemática de células'],
    problem: 'A resposta padrão a falha é "escalar" ou "provisionar o que faltou". Isso exige que o plano de controle funcione exatamente no momento em que ele está mais sobrecarregado — durante um evento que afeta todo mundo ao mesmo tempo. Sistemas que dependem disso falham justamente quando precisam funcionar.',
    concepts: ['Estabilidade estática: sobreviver sem mudar nada', 'Plano de controle versus plano de dados e a regra de dependência', 'Pré-provisionar em vez de reagir', 'Trabalho constante: sistemas que fazem sempre a mesma coisa não têm modo de sobrecarga', 'Zona de disponibilidade como unidade de falha', 'Células e shuffle sharding na realização AWS', 'Evitar fallback: o caminho alternativo que nunca é exercitado', 'Limites de célula e deploy em onda'],
    internals: [
      'A ideia central é contraintuitiva: para sobreviver à perda de uma AZ, você já precisa estar com capacidade para operar sem ela ANTES de perdê-la. Reagir exige o plano de controle, que pode estar saturado.',
      'Trabalho constante elimina o modo de sobrecarga: um sistema que processa a lista inteira a cada ciclo, independentemente de quantos itens mudaram, tem o mesmo custo em dia normal e em dia de crise.',
      'Caminho de fallback raramente exercitado é código que só roda no pior momento, sem nunca ter sido testado — por isso a recomendação é eliminá-lo, e não melhorá-lo.',
      'O plano de dados da AWS é projetado para ser mais disponível que o plano de controle: é por isso que a dependência deve valer sempre nessa direção.'
    ],
    useWhen: ['Pré-provisione capacidade para a perda de uma AZ quando o SLO não tolera a espera do autoscaling.', 'Prefira trabalho constante em componentes de controle.', 'Use células quando o sistema é multi-tenant e a indisponibilidade total é inaceitável.'],
    avoidWhen: ['Não dependa de criar recursos durante um evento de falha regional.', 'Não construa caminho de fallback que só roda em emergência.', 'Não celularize sem automação: dez células manuais são dez vezes o trabalho.'],
    contrast: {
      bad: 'Três AZs com capacidade justa e autoscaling configurado: quando uma AZ cai, o autoscaling tenta provisionar exatamente quando todo mundo está tentando, e a fila de provisionamento vira o gargalo.',
      good: 'Três AZs com capacidade para operar em duas. A perda de uma AZ não requer nenhuma ação do plano de controle — o sistema apenas continua.'
    },
    tradeoffs: ['Estabilidade estática dá sobrevivência sem ação e custa capacidade ociosa.', 'Trabalho constante é previsível e gasta o mesmo em dia calmo.', 'Mais células reduzem o raio de impacto e aumentam o custo operacional.'],
    production: 'Um sistema sobrevive ao teste de falha de AZ em ambiente controlado e falha no evento real: o autoscaling não conseguiu provisionar porque a região inteira estava tentando. O redesenho pré-provisiona 150% da capacidade distribuída em três AZs, custando mais em regime e removendo a dependência do plano de controle no pior momento.',
    risks: ['Dependência do plano de controle no momento da falha', 'Capacidade dimensionada para o caso feliz', 'Fallback nunca exercitado', 'Dependência compartilhada escondida entre células'],
    checklist: ['O workload sobrevive à perda de uma AZ sem nenhuma ação?', 'Alguma recuperação depende de criar recurso novo?', 'Existe caminho de fallback que nunca roda?', 'Qual o raio de impacto, em número de clientes, por modo de falha?', 'O deploy é por onda entre células?'],
    interview: [
      ['Pleno/Sênior', 'O que é estabilidade estática?', 'A propriedade de continuar operando durante uma falha sem precisar de nenhuma mudança — sem provisionar, escalar ou reconfigurar —, o que remove a dependência do plano de controle exatamente quando ele está mais pressionado.'],
      ['Sênior/Expert', 'Por que a AWS recomenda evitar fallback em vez de melhorá-lo?', 'Porque é código que só executa na emergência: não é exercitado, não é testado sob carga real e costuma falhar junto com o caminho principal. A alternativa é fazer o caminho principal resiliente o bastante para não precisar de um segundo.']
    ],
    exercises: [
      ['Aplicado', 'Calcular o raio de impacto de cada modo de falha do seu workload, em número de clientes.', 'Tabela modo de falha × clientes afetados, com a origem de cada número.'],
      ['Aplicado', 'Testar a perda de uma AZ e registrar se alguma recuperação dependeu do plano de controle.', 'Resultado do teste com as dependências identificadas.'],
      ['Sênior', 'Converter um componente reativo em trabalho constante e comparar o comportamento sob pico.', 'Medição nos dois desenhos, incluindo o custo em regime normal.']
    ],
    challenge: 'Encontrar no seu workload a dependência do plano de controle que só apareceria durante um evento regional — e removê-la.',
    book: 'The Good Parts of AWS (escolher o simples e previsível); Amazon Web Services in Action (disponibilidade e zonas).',
    complements: [frontier.staticStability, frontier.constantWork, frontier.avoidingFallback, frontier.cellBased], exampleFile: '../../examples/aws-senior/fronteira/estabilidade-estatica.md'
  }),
  moduleOf({
    number: 23,
    part: 'fronteira',
    id: 'multi-regiao',
    title: 'Multi-região: topologias, consistência e failover que foi testado',
    level: 'Expert',
    objective: 'Escolher a topologia multi-região pelo RTO, RPO e custo declarados, e provar o failover por execução, não por documento.',
    prerequisites: ['Módulo 13 (backup, restore e DR)', 'Módulo 22', 'Noção de consistência distribuída'],
    problem: 'Multi-região é pedida como requisito genérico — "queremos alta disponibilidade" — sem RTO, RPO nem orçamento. O resultado é uma topologia cara que ninguém sabe acionar, com um plano de failover que nunca foi executado e, portanto, não é um plano: é uma hipótese.',
    concepts: ['As quatro topologias: backup/restore, pilot light, warm standby, ativo-ativo', 'RTO e RPO como entrada, não como resultado', 'Replicação de dados e o limite da física', 'Roteamento e verificação de prontidão (ARC)', 'Failover controlado versus automático', 'O problema do retorno: failback', 'Dependências regionais escondidas', 'Custo: cada topologia em regime, não só no desastre'],
    internals: [
      'A escolha da topologia é determinada pelo RPO: se ele é zero, a replicação precisa ser síncrona, e isso impõe a latência entre as regiões em toda escrita. Não há como contornar — é a velocidade da luz.',
      'Failover automático troca tempo de recuperação por risco de acionamento indevido; em muitos casos o failover controlado, com decisão humana, é a escolha certa.',
      'A verificação de prontidão existe porque failover para uma região que não está pronta transforma um incidente em dois.',
      'Failback é a parte esquecida: voltar exige reconciliar o que foi escrito na região secundária, e isso raramente está desenhado.'
    ],
    useWhen: ['Use backup/restore quando o RTO é de horas e o custo importa.', 'Use warm standby quando o RTO é de minutos.', 'Considere ativo-ativo apenas quando o requisito justificar o custo e a complexidade de consistência.'],
    avoidWhen: ['Não faça ativo-ativo sem resolver conflito de escrita.', 'Não conte com um plano de failover nunca executado.', 'Não esqueça o failback no desenho.'],
    contrast: {
      bad: 'Warm standby provisionado há dois anos, nunca acionado, com a versão da aplicação três releases atrás e credenciais expiradas.',
      good: 'Failover exercitado trimestralmente, com RTO medido a cada execução e o resultado comparado ao objetivo declarado.'
    },
    tradeoffs: ['Ativo-ativo dá RTO próximo de zero e cobra consistência, custo e complexidade.', 'Pilot light é barato e tem RTO longo.', 'Failover automático é rápido e pode disparar sem necessidade.'],
    production: 'Uma empresa mantém warm standby por dois anos sem exercitar. No primeiro evento real, o failover falha: a secundária tem uma versão antiga do esquema de banco e uma dependência regional não replicada. O RTO real é de nove horas contra o objetivo declarado de quinze minutos — e o custo de manter a standby foi pago o tempo todo.',
    risks: ['Plano de failover nunca executado', 'Dependência regional escondida (fila, segredo, DNS)', 'Divergência de versão entre regiões', 'Failback sem desenho', 'Custo da topologia não comparado ao risco real'],
    checklist: ['RTO e RPO estão escritos e acordados com o negócio?', 'Quando o failover foi executado pela última vez?', 'Qual RTO foi medido na última execução?', 'Existe alguma dependência que só existe na região primária?', 'O failback está desenhado e testado?'],
    interview: [
      ['Pleno/Sênior', 'Qual a diferença entre RTO e RPO?', 'RTO é quanto tempo se pode levar para voltar; RPO é quanto dado se pode perder. São independentes, e cada um empurra a topologia e o custo numa direção.'],
      ['Sênior/Expert', 'Pedem multi-região ativo-ativo. Que perguntas você faz antes?', 'Qual RTO e RPO, por escrito; se há escrita nas duas regiões e como o conflito é resolvido; qual a latência aceitável se a consistência for síncrona; qual o custo em regime; quem aciona e com que critério; e quando o failover será exercitado.']
    ],
    exercises: [
      ['Aplicado', 'Mapear as quatro topologias para um workload seu, com RTO, RPO e custo estimado de cada uma.', 'Tabela comparativa com a recomendação e a justificativa.'],
      ['Aplicado', 'Executar um failover controlado em ambiente de teste e medir o RTO real.', 'Timeline da execução, RTO medido e lacunas encontradas.'],
      ['Sênior', 'Desenhar o failback e identificar o que precisa ser reconciliado.', 'Procedimento de retorno com o tratamento das escritas na secundária.']
    ],
    challenge: 'Executar o failover do seu ambiente mais crítico que você puder e comparar o RTO medido com o prometido no documento.',
    book: 'Amazon Web Services in Action (disponibilidade e recuperação); Cloud FinOps (o custo de cada topologia em regime).',
    complements: [frontier.multiRegion, frontier.arc, frontier.staticStability], exampleFile: '../../examples/aws-senior/multi-regiao-failover.mjs'
  }),
  moduleOf({
    number: 24,
    part: 'fronteira',
    id: 'quotas-throttling',
    title: 'No limite da API: quotas, throttling, retry e trabalho constante',
    level: 'Expert',
    objective: 'Operar no limite da plataforma sabendo onde estão as quotas, como a API se comporta sob pressão e por que retry ingênuo transforma degradação em interrupção.',
    prerequisites: ['Módulo 12 (quotas)', 'Módulo 22', 'Noção de fila e backpressure'],
    problem: 'Quase todo incidente grande em nuvem tem o mesmo desenho: algo degrada, os clientes tentam de novo, a carga de retry supera a carga original e o sistema que ia se recuperar sozinho não consegue mais. O mecanismo de resiliência vira a causa da indisponibilidade.',
    concepts: ['Quota como propriedade de arquitetura, não detalhe operacional', 'Quotas por conta, por região e por operação', 'Throttling e o que a API devolve quando você excede', 'Retry exponencial com jitter e por que o jitter é obrigatório', 'Tempestade de retry e colapso metaestável', 'Orçamento de retry: teto global de tentativas em voo', 'Trabalho constante como imunidade a sobrecarga', 'Diferença entre erro transitório e permanente'],
    internals: [
      'Retry exponencial sem jitter sincroniza os clientes: todos esperam o mesmo intervalo e voltam juntos, criando ondas. O jitter existe para espalhar as tentativas no tempo, e é o detalhe mais ignorado do padrão.',
      'Colapso metaestável é o estado em que o sistema permanece degradado mesmo depois de a causa original ter sumido, porque a carga de retry se autossustenta. Sair dele costuma exigir intervenção manual.',
      'Um orçamento de retry limita o total de tentativas em voo no cliente inteiro, não por requisição — é o que impede a multiplicação silenciosa.',
      'Tentar de novo um erro permanente (403, validação) é desperdício garantido; distinguir transitório de permanente é o primeiro passo de qualquer política de retry.'
    ],
    useWhen: ['Use retry apenas para erro transitório, com backoff, jitter e teto.', 'Use orçamento de retry no cliente.', 'Inventarie quotas na fase de desenho, não no incidente.'],
    avoidWhen: ['Não faça retry em erro permanente.', 'Não empilhe retry em várias camadas — multiplica.', 'Não descubra a quota durante o pico.'],
    contrast: {
      bad: 'Três tentativas com espera fixa de um segundo, em três camadas do sistema: 27 chamadas ao destino degradado por requisição do usuário.',
      good: 'Uma camada com retry, backoff exponencial com jitter, teto de tentativas e orçamento global — degradação continua sendo degradação.'
    },
    tradeoffs: ['Retry melhora a taxa de sucesso em falha transitória e amplifica carga em falha sistêmica.', 'Aumentar quota resolve hoje e pode esconder um problema de desenho.', 'Trabalho constante é imune a pico e gasta o mesmo sempre.'],
    production: 'Uma degradação de cinco minutos numa dependência vira uma indisponibilidade de quarenta. O motivo: retry em três camadas sem jitter, com os clientes sincronizados em ondas. A dependência se recupera aos oito minutos e volta a cair, porque a carga acumulada de retry é maior que a original. A correção é retry em uma camada só, com jitter e orçamento.',
    risks: ['Tempestade de retry', 'Quota descoberta no pico', 'Retry em múltiplas camadas', 'Erro permanente sendo retentado', 'Falta de load shedding quando a saturação é inevitável'],
    checklist: ['Quais quotas este workload encosta em pico, e qual a folga?', 'Quantas camadas fazem retry?', 'O backoff tem jitter?', 'Existe teto global de tentativas em voo?', 'O sistema derruba carga em excesso, ou tenta atender tudo e cai?'],
    interview: [
      ['Pleno/Sênior', 'Por que o backoff exponencial precisa de jitter?', 'Sem jitter todos os clientes esperam o mesmo intervalo e voltam ao mesmo tempo, em ondas sincronizadas que mantêm o destino saturado. O jitter espalha as tentativas no tempo.'],
      ['Sênior/Expert', 'Uma dependência degradou por 5 minutos e o sistema ficou fora por 40. O que aconteceu?', 'Provável colapso metaestável: a carga de retry acumulada superou a original e passou a se autossustentar. Investigo camadas de retry, ausência de jitter, ausência de teto e de load shedding — e corrijo o mecanismo de resiliência, que virou a causa.']
    ],
    exercises: [
      ['Aplicado', 'Inventariar as quotas que o workload encosta em pico e a folga de cada uma.', 'Tabela quota × uso em pico × folga × ação se exceder.'],
      ['Aplicado', 'Simular uma dependência degradada e medir a carga gerada pelos retries do seu sistema.', 'Comparação entre carga original e carga total com retry.'],
      ['Sênior', 'Implementar orçamento de retry com jitter e demonstrar que a amplificação desaparece.', 'Medição antes e depois sob a mesma degradação simulada.']
    ],
    challenge: 'Calcular o pior caso de chamadas que uma requisição de usuário gera na sua dependência mais crítica, somando todas as camadas de retry.',
    book: 'Amazon Web Services in Action (limites e operação); Cloud FinOps (o custo de carga desperdiçada).',
    complements: [frontier.timeouts, frontier.quotas, frontier.throttling, frontier.constantWork], exampleFile: '../../examples/aws-senior/retry-backoff-jitter.mjs'
  }),
  moduleOf({
    number: 25,
    part: 'fronteira',
    id: 'cdk-constructs',
    title: 'Estender a IaC: constructs CDK, custom resources e abstração com contrato',
    level: 'Expert',
    objective: 'Criar abstrações de infraestrutura reutilizáveis com interface, padrão seguro por omissão e escotilha de saída — em vez de copiar template entre projetos.',
    prerequisites: ['Módulo 14 (CloudFormation, CDK e entrega de infraestrutura)', 'Módulo 17 (landing zone)', 'Noção de versionamento semântico'],
    problem: 'Template copiado entre projetos diverge no primeiro mês: cada time corrige o seu, e a correção de segurança que um fez não chega aos outros. Do lado oposto, abstração que esconde tudo impede o time de diagnosticar o próprio recurso. O equilíbrio exige tratar o construct como produto.',
    concepts: ['Níveis de construct: recurso bruto, recurso com padrões, padrão completo', 'Seguro por omissão: criptografia, log e menor privilégio sem pedir', 'Interface mínima: expor a decisão, esconder a mecânica', 'Escotilha de saída para o recurso subjacente', 'Aspects e validação em tempo de síntese', 'Custom resource: quando o CloudFormation não cobre', 'Versionamento e depreciação de um construct interno', 'Testar infraestrutura pelo template sintetizado'],
    internals: [
      'A síntese acontece antes do deploy: validar ali é barato e o erro aparece para quem escreveu, não no meio de um rollback.',
      'Uma abstração sem escotilha de saída obriga o time a abandoná-la inteira quando aparece um caso não previsto — é o que mata construct interno.',
      'Custom resource é uma função que o CloudFormation chama e cuja falha precisa responder corretamente, ou a pilha trava em estado de transição.',
      'Construct interno é dependência compartilhada: sem versionamento, uma mudança atinge todos os consumidores ao mesmo tempo — a mesma lição do módulo 26 da trilha de DevOps.'
    ],
    useWhen: ['Crie construct quando o mesmo conjunto de recursos se repete em mais de dois times.', 'Codifique o padrão de segurança da organização como default.', 'Use custom resource apenas quando não houver recurso nativo.'],
    avoidWhen: ['Não abstraia antes de ter três usos reais.', 'Não esconda o recurso subjacente sem escotilha.', 'Não publique construct sem versão e política de depreciação.'],
    contrast: {
      bad: 'Um construct que recebe vinte parâmetros e expõe todas as propriedades do recurso: uma camada a mais sem nenhuma decisão embutida.',
      good: 'Um construct que recebe três decisões de negócio, aplica os padrões de segurança da organização por omissão e expõe o recurso subjacente para o caso não previsto.'
    },
    tradeoffs: ['Abstração reduz repetição e adiciona uma camada a manter e versionar.', 'Padrão seguro por omissão protege quem não sabe e frustra o caso legítimo — resolvido pela escotilha.', 'Custom resource cobre o que falta e vira código crítico no caminho do deploy.'],
    production: 'Uma correção de segurança precisa ser aplicada a quarenta buckets criados por template copiado. Não há um lugar para corrigir: cada projeto tem sua cópia, com variações. A consolidação num construct versionado transforma a próxima correção em atualizar uma dependência.',
    risks: ['Abstração sem escotilha de saída', 'Construct sem versionamento atingindo todos os consumidores', 'Custom resource que trava a pilha ao falhar', 'Interface grande demais, que não decide nada', 'Deriva entre o código e o que está implantado'],
    checklist: ['Existem pelo menos três usos reais?', 'A interface expõe decisão ou mecânica?', 'Os padrões de segurança são default?', 'Existe escotilha para o recurso subjacente?', 'Há versão, changelog e política de depreciação?'],
    interview: [
      ['Pleno/Sênior', 'Qual a diferença entre os níveis de construct do CDK?', 'O nível mais baixo espelha o recurso do CloudFormation, sem opinião; o intermediário adiciona padrões sensatos e reduz a verbosidade; o mais alto compõe vários recursos num padrão arquitetural completo.'],
      ['Sênior/Expert', 'Como você evita que um construct interno vire uma camada que só atrapalha?', 'Interface pequena expondo decisões e não mecânica, padrões seguros por omissão, escotilha de saída documentada para o recurso subjacente, versionamento com depreciação anunciada, e no mínimo três usos reais antes de abstrair.']
    ],
    exercises: [
      ['Aplicado', 'Escrever um construct que aplique os padrões de segurança da organização por omissão.', 'Construct com interface documentada e teste sobre o template sintetizado.'],
      ['Aplicado', 'Adicionar validação em tempo de síntese que barre uma configuração insegura.', 'Teste mostrando a síntese falhando com mensagem clara.'],
      ['Sênior', 'Publicar o construct com versão e migrar um consumidor real.', 'Versão publicada, changelog e o consumidor migrado sem interrupção.']
    ],
    challenge: 'Encontrar o template mais copiado da sua organização e transformá-lo num construct versionado com escotilha de saída.',
    book: 'Amazon Web Services in Action (infraestrutura como código); AWS Cookbook (receitas e composição).',
    complements: [frontier.cdk, frontier.cdkConstructs, frontier.customResource], exampleFile: '../../examples/aws-senior/fronteira/construct-contract.md'
  }),
  moduleOf({
    number: 26,
    part: 'fronteira',
    id: 'ia-gerenciada',
    title: 'IA gerenciada: Bedrock, SageMaker e a decisão de construir ou comprar',
    level: 'Sênior → Expert',
    objective: 'Escolher entre serviço gerenciado de IA, plataforma de ML e construção própria a partir de custo, controle, latência e dependência de fornecedor — e desenhar a fronteira em volta.',
    prerequisites: ['Módulo 8 (funções e eventos)', 'Módulo 18 (FinOps)', 'Trilha de IA para construir o sistema em si'],
    problem: 'A pressão para "colocar IA" chega sem requisito, e a decisão costuma ser tomada pela facilidade de começar. Seis meses depois aparecem a conta de inferência, a latência que não cabe no SLO e uma dependência de fornecedor que ninguém dimensionou. A decisão é de arquitetura, não de produto.',
    concepts: ['Bedrock como camada de orquestração: modelos, agentes, bases de conhecimento e guardrails', 'SageMaker AI: treino, registry, endpoints e governança do ciclo de ML', 'Critério de escolha: controle do modelo, custo por requisição, latência e dado', 'Onde o dado trafega e onde ele fica', 'Custo de inferência como custo unitário, não como linha de infraestrutura', 'Dependência de fornecedor e porta de saída', 'Fronteira de permissão de um agente na AWS: IAM, limite e confirmação', 'Avaliação contínua como requisito operacional'],
    internals: [
      'Serviço gerenciado troca controle por velocidade de entrega: você não escolhe a versão do modelo nem o momento em que ela muda, e uma mudança de versão é uma regressão silenciosa sem avaliação automatizada.',
      'O custo de inferência escala com tokens e passos, não com requisições — o modelo de capacidade é diferente de tudo o mais na conta, e precisa de teto por requisição.',
      'A fronteira de permissão de um agente é IAM: ele deve agir com a identidade do usuário final e nunca com uma credencial de serviço ampla. A arquitetura disso está na trilha de Arquitetura, módulo 25.',
      'Endpoint dedicado dá latência previsível e é pago por tempo provisionado, não por uso; sob carga intermitente, isso inverte a conta.'
    ],
    useWhen: ['Use serviço gerenciado quando o requisito é entregar rápido e o modelo não é diferencial.', 'Use plataforma de ML quando o modelo é seu e o ciclo de vida precisa ser governado.', 'Considere construir quando custo em escala, latência ou soberania do dado exigirem.'],
    avoidWhen: ['Não coloque inferência no caminho crítico sem fallback determinístico.', 'Não adote sem teto de custo por requisição.', 'Não troque de versão de modelo sem avaliação automatizada.'],
    contrast: {
      bad: 'Chamada ao modelo direto do handler, sem limite de tokens, sem timeout, sem fallback e sem medir custo por requisição — a conta aparece no fechamento do mês.',
      good: 'Chamada com teto de tokens, timeout menor que o SLO, fallback determinístico, custo por requisição medido e avaliação rodando antes de qualquer troca de versão.'
    },
    tradeoffs: ['Gerenciado entrega rápido e reduz controle sobre modelo e custo.', 'Plataforma de ML dá governança e exige equipe.', 'Construir dá controle total e custa tempo, especialização e operação.'],
    production: 'Um recurso de sumarização entra em produção sem teto de tokens. Um cliente envia documentos grandes e o custo diário multiplica por doze. A correção combina limite de tokens, truncamento explícito com aviso ao usuário e alarme sobre custo por requisição — e o incidente vira um item de orçamento, não de infraestrutura.',
    risks: ['Custo por requisição sem teto', 'Regressão silenciosa em troca de versão de modelo', 'Dado sensível cruzando fronteira não mapeada', 'Latência de inferência estourando o SLO', 'Dependência de fornecedor sem porta de saída'],
    checklist: ['Qual o custo por requisição, medido?', 'Existe teto de tokens e de passos?', 'Há fallback determinístico?', 'Onde o dado trafega e onde fica?', 'Existe avaliação automatizada antes de trocar de versão?'],
    interview: [
      ['Pleno/Sênior', 'Quando usar um serviço gerenciado de inferência em vez de hospedar o modelo?', 'Quando o modelo não é diferencial competitivo, o volume não justifica infraestrutura dedicada e a velocidade de entrega importa mais que o controle — medindo custo por requisição e latência antes de assumir.'],
      ['Sênior/Expert', 'Que controles você exige antes de colocar inferência no caminho crítico?', 'Teto de tokens e de passos, timeout menor que o SLO, fallback determinístico, custo por requisição medido e alarmado, avaliação automatizada antes de troca de versão, e a fronteira de permissão do agente por IAM com identidade do usuário final.']
    ],
    exercises: [
      ['Aplicado', 'Medir o custo por requisição de um caso de uso real e projetar para o volume de um ano.', 'Custo unitário medido e a projeção com a premissa de crescimento explícita.'],
      ['Aplicado', 'Implementar teto de tokens, timeout e fallback determinístico num fluxo com inferência.', 'Código e demonstração do comportamento com o provedor indisponível.'],
      ['Sênior', 'Comparar gerenciado, plataforma de ML e construir para um caso concreto.', 'ADR com custo, latência, controle, dependência e gatilho de reversão.']
    ],
    challenge: 'Escrever o ADR que recusa colocar IA num fluxo em que ela foi pedida, com a alternativa que atende ao requisito real mais barato.',
    book: 'Cloud FinOps (custo unitário e decisão econômica); The Good Parts of AWS (escolher o serviço pelo que ele resolve). A construção do sistema de IA é a trilha de IA.',
    complements: [frontier.bedrock, frontier.bedrockAgents, frontier.sagemaker, frontier.bedrockOrSagemaker], exampleFile: '../../examples/aws-senior/fronteira/ia-gerenciada.md'
  }),
  moduleOf({
    number: 27,
    part: 'fronteira',
    id: 'builders-library',
    title: 'Ler a engenharia da AWS: Builders’ Library e os papers',
    level: 'Expert → fronteira',
    objective: 'Extrair da engenharia publicada pela AWS um padrão aplicável e implementá-lo com medição, em vez de repetir o vocabulário dela.',
    prerequisites: ['Módulos 21–24', 'Inglês técnico de leitura', 'Um workload próprio para aplicar o que ler'],
    problem: 'A AWS publica como opera seus próprios sistemas — em detalhe, de graça e sem marketing. É o material mais denso disponível sobre operação em escala, e quase ninguém lê. Enquanto isso, as mesmas decisões são tomadas por tentativa e erro dentro das empresas.',
    concepts: ['Builders’ Library: engenharia interna publicada', 'Timeouts, retries e backoff com jitter', 'Trabalho constante e imunidade a sobrecarga', 'Evitar fallback em sistemas distribuídos', 'Estabilidade estática usando zonas', 'Shuffle sharding e isolamento de carga', 'Leader election, filas e o que a AWS aprendeu operando', 'Ler o texto do provedor sem engolir a conclusão'],
    internals: [
      'Os textos descrevem decisões tomadas sob restrição real, com os modos de falha que as motivaram — é o oposto do material de marketing, e a diferença aparece na primeira página.',
      'Vários artigos contradizem a prática comum da indústria: evitar fallback, preferir trabalho constante, desconfiar de cache como solução de disponibilidade. Essas contradições são o conteúdo mais valioso.',
      'O contexto importa: são decisões na escala da AWS, e nem toda conclusão transfere para um sistema com três instâncias.',
      'É engenharia publicada pelo fornecedor: excelente e não neutra. Ler criticamente faz parte.'
    ],
    useWhen: ['Use ao desenhar resiliência, para não reinventar o que já foi estudado.', 'Use como leitura dirigida de time, um artigo por vez.', 'Use para embasar decisão com referência em vez de opinião.'],
    avoidWhen: ['Não aplique a decisão sem verificar se a restrição é a sua.', 'Não use como argumento de autoridade em vez de raciocínio.', 'Não confunda o que a AWS faz internamente com o que o serviço entrega a você.'],
    contrast: {
      bad: 'Citar "a AWS recomenda" numa revisão, sem ter lido o artigo nem verificado se a restrição descrita se aplica ao seu sistema.',
      good: 'Ler o artigo, identificar a restrição, verificar que ela existe no seu caso, aplicar e medir — e registrar o resultado, inclusive se não melhorou.'
    },
    tradeoffs: ['Ler dá profundidade e custa horas por artigo.', 'Aplicar padrão validado em escala reduz risco e pode ser exagero na sua escala.', 'Fonte do fornecedor é detalhada e não é imparcial.'],
    production: 'Um time discute por três sprints como tratar retry numa integração instável. A leitura dirigida de um artigo sobre timeouts, retries e jitter resolve a discussão em uma hora: o padrão está descrito, com os modos de falha e o motivo de cada escolha. A implementação leva um dia e o resultado é medido na semana seguinte.',
    risks: ['Aplicar fora do contexto de escala', 'Autoridade substituindo raciocínio', 'Confundir prática interna com garantia do serviço', 'Ler e não aplicar'],
    checklist: ['Qual restrição o artigo tentava resolver?', 'Ela existe no meu sistema?', 'O que foi sacrificado na decisão descrita?', 'A aplicação foi medida?', 'O resultado foi registrado, inclusive se negativo?'],
    interview: [
      ['Pleno/Sênior', 'Por que a AWS recomenda jitter no backoff?', 'Porque sem ele os clientes ficam sincronizados e voltam em ondas, mantendo o destino saturado. O jitter espalha as tentativas e é o que faz o backoff funcionar de verdade.'],
      ['Sênior/Expert', 'A Builders’ Library recomenda evitar fallback. Você aplicaria isso no seu sistema?', 'Depende de verificar a restrição: o argumento é que caminho de fallback não é exercitado e falha junto com o principal. Se o meu fallback roda com frequência e é testado, o raciocínio muda. A decisão vem da verificação, não da citação.']
    ],
    exercises: [
      ['Aplicado', 'Ler um artigo da Builders’ Library e responder às quatro perguntas do módulo.', 'Registro com restrição, aplicabilidade, sacrifício e decisão.'],
      ['Aplicado', 'Aplicar um padrão lido a um componente real e medir antes e depois.', 'Medição comparada e a conclusão, inclusive se não houve ganho.'],
      ['Sênior', 'Conduzir uma leitura dirigida com o time e transformar o resultado numa mudança.', 'Ata curta, decisão tomada e a mudança implantada com métrica.']
    ],
    challenge: 'Escolher a prática de resiliência do seu sistema que você menos consegue justificar e confrontá-la com o artigo correspondente.',
    book: 'The Good Parts of AWS (leitura crítica do catálogo); Amazon Web Services in Action como mapa dos serviços citados nos artigos.',
    complements: [frontier.buildersLibrary, frontier.timeouts, frontier.constantWork, frontier.avoidingFallback, frontier.shuffleSharding], exampleFile: '../../examples/aws-senior/fronteira/leitura-dirigida.md'
  })
]);

export const awsAssessment = Object.freeze({
  levels: [
    { level: 'Nível 1 · Fundamentos', expected: 'Explica limites, cria recursos em sandbox e segue runbook.', evidence: 'Diagrama, comandos e configuração mínima.', redFlags: 'Usa root, console como fonte única ou política curinga.' },
    { level: 'Nível 2 · Aplicado', expected: 'Implanta serviço por IaC, mede e recupera falhas conhecidas.', evidence: 'Pipeline, telemetria e restore executado.', redFlags: 'Declara alta disponibilidade sem teste.' },
    { level: 'Nível 3 · Pleno', expected: 'Escolhe serviços por requisito e opera trade-offs sob carga.', evidence: 'ADR, teste de carga, custo e runbook.', redFlags: 'Decide por preferência ou certificação.' },
    { level: 'Nível 4 · Sênior', expected: 'Reduz blast radius, orienta risco, custo e evolução multiaccount.', evidence: 'Threat model, game day e revisão Well-Architected.', redFlags: 'Centraliza controle e cria gargalo organizacional.' },
    { level: 'Nível 5 · Staff/Principal', expected: 'Alinha plataforma, portfólio e negócio com opções reversíveis.', evidence: 'Estratégia por ondas e resultados após adoção.', redFlags: 'Impõe padrão único sem contexto nem métrica.' }
  ],
  caseStudies: [
    {
      id: 'caso-identidade', title: 'Credencial exposta em pipeline',
      scenario: 'Uma access key de deploy aparece em log público e a conta hospeda produção e sandbox.',
      constraints: ['Não apagar evidências', 'Produção não pode parar', 'A extensão do uso é desconhecida'],
      decisions: ['Conter sessão e chave', 'Investigar CloudTrail', 'Migrar para identidade federada de workload'],
      deliverables: ['Timeline', 'Política corrigida', 'Plano multiaccount', 'Postmortem']
    },
    {
      id: 'caso-pico', title: 'Pico, backlog e banco saturado',
      scenario: 'Uma campanha aumenta o tráfego dez vezes; funções escalam e esgotam conexões no banco.',
      constraints: ['Pedido não pode duplicar', 'P95 menor que 800 ms', 'Custo ocioso limitado'],
      decisions: ['Backpressure e fila', 'Concorrência protegendo o banco', 'Escala por backlog'],
      deliverables: ['Modelo de capacidade', 'Teste de carga', 'Dashboard', 'ADR']
    },
    {
      id: 'caso-dr', title: 'Recuperação regional incompleta',
      scenario: 'O banco tem réplica em outra região, mas segredos, DNS e filas não fazem parte do plano.',
      constraints: ['RTO de 90 minutos', 'RPO de 15 minutos', 'Failback obrigatório'],
      decisions: ['Inventariar estado', 'Escolher pilot light ou warm standby', 'Ensaiar failover e failback'],
      deliverables: ['Runbook', 'Cronometragem', 'Risco residual', 'Custo mensal']
    },
    {
      id: 'caso-governanca', title: 'Landing zone sem bloquear autonomia',
      scenario: 'Quatro times compartilham uma conta e requisitos regulatórios passam a exigir segregação e auditoria.',
      constraints: ['Migração incremental', 'Logs imutáveis', 'Sandbox continua disponível'],
      decisions: ['Estrutura de OUs e contas', 'SCP canário', 'Account vending e federação'],
      deliverables: ['Diagrama', 'Catálogo de controles', 'Fluxo de conta', 'Plano de transição']
    },
    {
      id: 'caso-custo', title: 'Economia que ameaça o SLO',
      scenario: 'A diretoria pede corte de 25%, e a proposta inicial remove capacidade de recuperação e retenção de logs.',
      constraints: ['SLO mantido', 'Auditoria por 90 dias', 'Forecast sazonal incerto'],
      decisions: ['Separar uso de tarifa', 'Priorizar custo unitário', 'Adiar compromisso frágil'],
      deliverables: ['Cenários', 'Backlog FinOps', 'Guardrails', 'Decisão executiva']
    }
  ],
  projects: [
    {
      id: 'entrega-fundacao', evolves: null, title: 'Fundação segura e observável',
      objective: 'Criar o primeiro limite confiável para receber workloads.',
      stages: ['Conta sandbox com budget e MFA', 'Rede multizona com egress explícito', 'Roles temporárias e logs de auditoria', 'Diagrama e threat model inicial'],
      acceptance: ['Zero chave humana permanente', 'CloudTrail e budget verificáveis', 'Rede recriável por IaC', 'Evidência HTTP(S) da revisão'],
      seniorSignal: 'Explica por que cada limite existe e qual risco ainda permanece.'
    },
    {
      id: 'entrega-workload', evolves: 'entrega-fundacao', title: 'Workload cloud-native por IaC',
      objective: 'Evoluir a fundação com API, dados e entrega automatizada.',
      stages: ['Imagem ou função imutável', 'Banco escolhido por acesso', 'Pipeline com preview e rollback', 'Eventos idempotentes e DLQ'],
      acceptance: ['Entrega usa a fundação anterior', 'Nenhum deploy manual oculto', 'Carga e custo normal/pico medidos', 'Falha de mensagem é recuperável'],
      seniorSignal: 'Compara pelo menos duas plataformas de execução e escolhe a menos complexa que cumpre o requisito.'
    },
    {
      id: 'entrega-confiabilidade', evolves: 'entrega-workload', title: 'Operação resiliente e game day',
      objective: 'Evoluir o workload com SLO, capacidade e recuperação verificadas.',
      stages: ['Telemetria correlacionada', 'Teste de carga e quotas', 'Backup e restore', 'Falha zonal ou de dependência'],
      acceptance: ['SLO e alertas têm owner', 'RTO/RPO são medidos', 'Runbook funciona em ambiente limpo', 'Postmortem gera ações verificáveis'],
      seniorSignal: 'Descobre e corrige uma premissa de confiabilidade antes invisível.'
    },
    {
      id: 'entrega-arquitetura', evolves: 'entrega-confiabilidade', title: 'Revisão Well-Architected e plano de escala',
      objective: 'Evoluir o mesmo produto com governança, economia e arquitetura defendida.',
      stages: ['Revisão dos seis pilares', 'Custo unitário e forecast', 'Estratégia multiaccount', 'Roadmap de riscos e modernização'],
      acceptance: ['Cada achado aponta evidência', 'Riscos têm owner e prazo', 'Trade-offs viram ADRs', 'A revisão D30 confirma retenção e correções'],
      seniorSignal: 'Equilibra risco, custo, autonomia e sustentabilidade sem transformar framework em checklist.'
    }
  ],
  completion: [
    'Conclui os 20 módulos com pelo menos um exercício aplicado e evidência por módulo.',
    'Recria fundação e workload por pipeline a partir de uma conta ou ambiente limpo.',
    'Demonstra menor privilégio, segregação de rede e trilha de auditoria.',
    'Executa carga, falha, backup, restore e failover com métricas de resultado.',
    'Entrega as quatro fases encadeadas no mesmo repositório, sem saltar dependências.',
    'Defende revisão Well-Architected atual dos seis pilares e custo unitário mensal.',
    'Não marca Dominado antes de evidência validada e revisão D30.',
    'Fronteira (módulos 21–27) é opcional para o gate sênior e obrigatória para reivindicar nível expert.',
    'Fronteira concluída exige: uma resposta técnica de isolamento com fonte oficial, um workload que sobrevive à perda de uma AZ sem nenhuma ação, um failover executado com RTO medido e comparado ao objetivo, a amplificação de retry calculada e reduzida, um construct versionado com escotilha de saída, um custo por requisição de IA medido e projetado, e um padrão da Builders’ Library aplicado com medição — inclusive se o resultado for negativo.'
  ]
});

/*
 * Gabarito de autoavaliação. Não substitui a evidência exigida pela rubrica:
 * serve para o estudo solo verificar a resposta antes de concluir o módulo.
 */
export const awsAnswerKey = awsModules.map((module) => ({
  module: module.number,
  title: module.title,
  objetivoAtingido: module.objective,
  respostaEsperadaNaEntrevista: (module.interview || []).map((item) => `${item.level}: ${item.expected}`),
  erroMaisComum: module.contrast?.bad || module.risks?.[0] || 'Decidir sem medir.',
  criterioDeAceite: (module.exercises || []).map((item) => `${item.level} — evidência: ${item.evidence}`),
  sinalDeQueNaoDominou: module.risks || []
}));
