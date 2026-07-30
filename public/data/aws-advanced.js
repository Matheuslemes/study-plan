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

export const awsAcademy = Object.freeze({
  title: 'Academia AWS — arquitetura e operação',
  baseline: `Pesquisa técnica: ${AWS_RESEARCH_DATE} · evidência acima de console e certificação`,
  book: 'action',
  parts: {
    fundamentos: {
      index: '1/5',
      range: 'Módulos 1–5',
      page: 'fundamentos.html',
      navLabel: 'Fundamentos e limites',
      title: 'Fundamentos, identidade e infraestrutura',
      subtitle: 'Construa o limite de confiança antes de publicar o primeiro workload.',
      prerequisites: ['Operar Linux e Git pela linha de comando', 'Explicar DNS, HTTP, CIDR e estado de uma aplicação', 'Usar uma conta sandbox com orçamento e MFA'],
      objectives: ['Explicar responsabilidade, região, zona e conta como limites distintos', 'Projetar identidade temporária e rede segmentada', 'Escolher computação e armazenamento por requisito', 'Produzir uma fundação rastreável sem acesso público acidental']
    },
    plataforma: {
      index: '2/5',
      range: 'Módulos 6–10',
      page: 'plataforma.html',
      navLabel: 'Dados e execução',
      title: 'Dados, eventos e plataformas de execução',
      subtitle: 'Escolha serviços gerenciados pelo acesso, acoplamento e carga operacional.',
      prerequisites: ['VPC, IAM e armazenamento demonstráveis', 'Aplicação com API, banco e testes', 'Noções de container, fila e consistência'],
      objectives: ['Escolher banco pelo padrão de acesso e falha', 'Modelar funções e eventos idempotentes', 'Comparar ECS, EKS, Fargate e Lambda por custo total', 'Operar backpressure, retries e dead-letter queues']
    },
    confiabilidade: {
      index: '3/5',
      range: 'Módulos 11–15',
      page: 'confiabilidade.html',
      navLabel: 'Confiabilidade',
      title: 'Operação, resiliência e desempenho',
      subtitle: 'Meça o serviço, plante falhas e recupere dentro de objetivos explícitos.',
      prerequisites: ['Workload implantado por pipeline', 'Logs e métricas mínimas disponíveis', 'Requisitos de disponibilidade, RTO e RPO definidos'],
      objectives: ['Correlacionar telemetria e mudanças', 'Dimensionar disponibilidade e capacidade', 'Testar backup, restore e failover', 'Entregar infraestrutura versionada e caminhos de baixa latência']
    },
    arquitetura: {
      index: '4/5',
      range: 'Módulos 16–20',
      page: 'arquitetura.html',
      navLabel: 'Governança e decisão',
      title: 'Segurança, governança e decisão arquitetural',
      subtitle: 'Escale contas, custo e evolução sem ampliar o raio de impacto.',
      prerequisites: ['Workload observável e recuperável', 'Infraestrutura como código revisável', 'Capacidade de escrever ADR, runbook e threat model'],
      objectives: ['Projetar defesa em profundidade e resposta', 'Organizar landing zone e controles multiaccount', 'Alocar custo por unidade econômica', 'Conduzir revisão dos seis pilares e plano de evolução']
    },
    avaliacao: {
      index: '5/5',
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
    complements: [official.ec2], exampleFile: '../../examples/aws-senior/fundacao-segura.md'
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
    complements: [official.dynamodb], exampleFile: '../../examples/aws-senior/workload-evolutivo.md'
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
    complements: [official.events], exampleFile: '../../examples/aws-senior/workload-evolutivo.md'
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
    complements: [official.reliability], exampleFile: '../../examples/aws-senior/confiabilidade-game-day.md'
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
    complements: [official.disasterRecovery], exampleFile: '../../examples/aws-senior/confiabilidade-game-day.md'
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
    complements: [official.cost], exampleFile: '../../examples/aws-senior/governanca-well-architected.md'
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
    'Não marca Dominado antes de evidência validada e revisão D30.'
  ]
});
