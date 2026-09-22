/* ═══════════════════════════════════════════════
   TRACKS — trilhas, cores, metadados e cards

   CK   → mapa de cores por chave de trilha
   tracks → badges de frequência semanal
   quickTracks → cards de navegação para as páginas

   Fonte única de verdade — não duplicar estes dados
   em nenhuma página. Importe deste módulo.
═══════════════════════════════════════════════ */

export const CK = {
  java: { t: 'var(--track-java)', b: 'color-mix(in srgb, var(--track-java) 10%, transparent)' },
  ingles: { t: 'var(--track-ingles)', b: 'color-mix(in srgb, var(--track-ingles) 10%, transparent)' },
  sec: { t: 'var(--track-sec)', b: 'color-mix(in srgb, var(--track-sec) 10%, transparent)' },
  git: { t: 'var(--track-git)', b: 'color-mix(in srgb, var(--track-git) 10%, transparent)' },
  arquitetura: { t: 'var(--track-arquitetura)', b: 'color-mix(in srgb, var(--track-arquitetura) 10%, transparent)' },
  frontend: { t: 'var(--track-frontend)', b: 'color-mix(in srgb, var(--track-frontend) 10%, transparent)' },
  dsa: { t: 'var(--state-recovery)', b: 'color-mix(in srgb, var(--state-recovery) 10%, transparent)' },
  aieng: { t: 'var(--state-validated)', b: 'color-mix(in srgb, var(--state-validated) 10%, transparent)' },
  fundamentos: { t: 'var(--state-info)', b: 'color-mix(in srgb, var(--state-info) 10%, transparent)' },
  pratica: { t: 'var(--state-validated)', b: 'color-mix(in srgb, var(--state-validated) 10%, transparent)' },
  aws: { t: 'var(--track-aws)', b: 'color-mix(in srgb, var(--track-aws) 10%, transparent)' },
  py: { t: 'var(--track-python)', b: 'color-mix(in srgb, var(--track-python) 10%, transparent)' },
  devops: { t: 'var(--track-devops)', b: 'color-mix(in srgb, var(--track-devops) 10%, transparent)' },
  db: { t: 'var(--track-bancos)', b: 'color-mix(in srgb, var(--track-bancos) 10%, transparent)' },
  math: { t: 'var(--track-matematica)', b: 'color-mix(in srgb, var(--track-matematica) 10%, transparent)' },
  ia: { t: 'var(--track-ia)', b: 'color-mix(in srgb, var(--track-ia) 10%, transparent)' },
  fin: { t: 'var(--track-financeiro)', b: 'color-mix(in srgb, var(--track-financeiro) 10%, transparent)' },
  treino: { t: 'var(--track-treino)', b: 'color-mix(in srgb, var(--track-treino) 10%, transparent)' },
  sleep: { t: 'var(--state-validated)', b: 'color-mix(in srgb, var(--state-validated) 10%, transparent)' },
  cardio: { t: 'var(--state-danger)', b: 'color-mix(in srgb, var(--state-danger) 10%, transparent)' },
  strength: { t: 'var(--state-danger)', b: 'color-mix(in srgb, var(--state-danger) 10%, transparent)' },
  dinner: { t: 'var(--state-warning)', b: 'color-mix(in srgb, var(--state-warning) 10%, transparent)' },
  database: { t: 'var(--track-bancos)', b: 'color-mix(in srgb, var(--track-bancos) 10%, transparent)' },
  testing: { t: 'var(--state-success)', b: 'color-mix(in srgb, var(--state-success) 10%, transparent)' },
  cloud: { t: 'var(--track-aws)', b: 'color-mix(in srgb, var(--track-aws) 10%, transparent)' },
  security: { t: 'var(--track-sec)', b: 'color-mix(in srgb, var(--track-sec) 10%, transparent)' },
  architecture: { t: 'var(--track-arquitetura)', b: 'color-mix(in srgb, var(--track-arquitetura) 10%, transparent)' },
  ai: { t: 'var(--track-ia)', b: 'color-mix(in srgb, var(--track-ia) 10%, transparent)' },
  frontendBlock: { t: 'var(--track-frontend)', b: 'color-mix(in srgb, var(--track-frontend) 10%, transparent)' },
  specialization: { t: 'var(--state-validated)', b: 'color-mix(in srgb, var(--state-validated) 10%, transparent)' },
  break: { t: 'var(--text-3)', b: 'var(--surface-soft)' },
  review: { t: 'var(--state-success)', b: 'color-mix(in srgb, var(--state-success) 10%, transparent)' },
  closing: { t: 'var(--text-3)', b: 'var(--surface-soft)' },
  buffer: { t: 'var(--state-warning)', b: 'color-mix(in srgb, var(--state-warning) 10%, transparent)' },
  project: { t: 'var(--state-validated)', b: 'color-mix(in srgb, var(--state-validated) 10%, transparent)' },
  study: { t: 'var(--state-success)', b: 'color-mix(in srgb, var(--state-success) 10%, transparent)' },
  n: { t: 'var(--text-3)', b: 'var(--surface-soft)' }
};

export const heroTagsData = [
  { "label": "36 meses", "cls": "htag-b" },
  { "label": "156 semanas", "cls": "htag-b" },
  { "label": "12 fases sequenciais", "cls": "htag-g" },
  { "label": "36–40h/semana", "cls": "htag-g" },
  { "label": "~500h por fase", "cls": "htag-b" },
  { "label": "~6.000h totais", "cls": "htag-b" },
  { "label": "sono 7h30 fixo", "cls": "htag-p" },
  { "label": "domingo de descanso", "cls": "htag-p" },
  { "label": "Backend Java/Spring 45%", "cls": "htag-g" },
  { "label": "Banco/SQL 12%", "cls": "htag-b" },
  { "label": "Testes 10%", "cls": "htag-g" },
  { "label": "Cloud/DevOps 12%", "cls": "htag-o" },
  { "label": "Arquitetura 9%", "cls": "htag-o" },
  { "label": "DSA transversal 3x/sem", "cls": "htag-p" },
  { "label": "Git + Inglês transversais", "cls": "htag-p" }
];

export const tracks = [
  { "key": "java", "label": "Java + Spring", "h": "4x/sem · 3h30", "suffix": "" },
  { "key": "db", "label": "Banco SQL/NoSQL", "h": "2x/sem · 1h", "suffix": "" },
  { "key": "dsa", "label": "Algoritmos e ED", "h": "3x/sem · 40min", "suffix": "" },
  { "key": "ingles", "label": "Inglês Técnico", "h": "2x/sem · 40min", "suffix": "" },
  { "key": "git", "label": "Git & Versionamento", "h": "transversal", "suffix": "" },
  { "key": "devops", "label": "DevOps / CI-CD", "h": "2x/sem · 1h–3h30", "suffix": "" },
  { "key": "sec", "label": "Segurança", "h": "1x/sem + transversal", "suffix": "" },
  { "key": "arquitetura", "label": "Arquitetura", "h": "2x/sem · 1h", "suffix": "" },
  { "key": "aws", "label": "AWS", "h": "fases 3, 6 e 9", "suffix": "" },
  { "key": "pratica", "label": "Prática e exercícios", "h": "sábado · 4h", "suffix": "" },
  { "key": "frontend", "label": "Frontend Eng", "h": "fase 11", "suffix": "" },
  { "key": "py", "label": "Python", "h": "fase 11", "suffix": "" },
  { "key": "ia", "label": "IA Engineering", "h": "fase 11", "suffix": "" },
  { "key": "math", "label": "Matemática aplicada", "h": "acoplada a DB e IA", "suffix": "" },
  { "key": "fin", "label": "Financeiro", "h": "revisão mensal · 1h", "suffix": "" },
  { "key": "treino", "label": "Treino Híbrido", "h": "5x força · cardio 2 turnos", "suffix": "" }
];

export const quickTracks = [
  {
    key: "java",
    label: "Java + Engenharia",
    href: "./trilhas/java.html",
    badge: "Backend",
    desc: "Java 21, Spring Boot em produção, JPA/Hibernate avançado, Security, APIs profissionais, Kafka, Redis, observabilidade, performance, legado e arquitetura.",
    extraBadges: [
      { label: "Java 21" },
      { label: "Spring Boot" },
      { label: "Spring Security" },
      { label: "JPA/Hibernate" },
      { label: "PostgreSQL" },
      { label: "Kafka" },
      { label: "Hexagonal · DDD" },
      { label: "Observabilidade" },
      { label: "System Design" }
    ]
  },

  {
    key: "ingles",
    label: "Inglês Técnico para Programação",
    href: "./trilhas/ingles.html",
    badge: "Fluência técnica",
    desc: "Inglês aplicado ao fluxo real de desenvolvimento: documentação oficial, debugging, logs, commits, PRs, README, escrita técnica, speaking, entrevistas, arquitetura e comunicação profissional.",
    extraBadges: [
      { label: "B1+/B2 técnico" },
      { label: "Documentação oficial" },
      { label: "Debugging em inglês" },
      { label: "Commits e PRs" },
      { label: "Speaking técnico" },
      { label: "Entrevistas" },
      { label: "Fluência funcional" },
      { label: "Portfólio global" }
    ]
  },


  {
    key: "git",
    label: "Git, Versionamento e Plataformas",
    href: "./trilhas/git.html",
    badge: "Versionamento",
    desc: "Git do básico ao nível sênior: commits, branches, PR/MR, rebase, conflitos, GitHub, GitLab, Bitbucket, Azure Repos, CI/CD, segurança, governança, monorepo e GitOps.",
    extraBadges: [
      { label: "Git Core" },
      { label: "GitHub" },
      { label: "GitLab" },
      { label: "Bitbucket" },
      { label: "Azure Repos" },
      { label: "PR/MR" },
      { label: "Rebase · Bisect" },
      { label: "CI/CD" },
      { label: "Branch Protection" },
      { label: "CODEOWNERS" },
      { label: "Monorepo" },
      { label: "GitOps" }
    ]
  },

  {
    key: "dsa",
    label: "Algoritmos e Estruturas de Dados",
    href: "./trilhas/dsa.html",
    badge: "Fundamentos",
    desc: "Do básico ao extremo: complexidade, estruturas lineares e hierárquicas, grafos, os quatro paradigmas (backtracking, D&C, guloso, DP) e a fronteira (randomizados, streaming, NP-completude, aproximação e geometria).",
    extraBadges: [
      { label: "Big O · amortizado" },
      { label: "Hashing · heaps" },
      { label: "Árvores · BST" },
      { label: "Union-Find" },
      { label: "Grafos · Dijkstra" },
      { label: "Fluxo · matching" },
      { label: "Backtracking" },
      { label: "Programação dinâmica" },
      { label: "Randomizados" },
      { label: "Streaming · sketching" },
      { label: "NP-completude" },
      { label: "Aproximação" }
    ]
  },

  {
    key: "aieng",
    label: "Engenharia Assistida por IA",
    href: "./trilhas/aieng.html",
    badge: "Prática de 2026",
    desc: "Fazer engenharia sênior no ambiente onde agentes fazem parte do fluxo: prompting de engenharia, spec executável, revisão de código gerado, evals e golden datasets, e a governança que amplifica a IA sem dependência cega.",
    extraBadges: [
      { label: "IA como amplificador" },
      { label: "Context engineering" },
      { label: "Fluxo com agentes" },
      { label: "Spec-driven dev" },
      { label: "Revisão de código gerado" },
      { label: "Teste como oráculo" },
      { label: "Evals · golden datasets" },
      { label: "Regressão de prompt" },
      { label: "LLM-as-a-judge" },
      { label: "Slopsquatting" },
      { label: "DORA AI Model" },
      { label: "Adoção governada" }
    ]
  },

  {
    key: "arquitetura",
    label: "Arquitetura de Solução e Integração",
    href: "./trilhas/arquitetura.html",
    badge: "Architecture",
    desc: "Arquitetura de integração e solução: APIs, eventos, mensageria, contratos, resiliência, segurança, observabilidade, cloud, governança, ADRs, RFCs e decisões técnicas de nível sênior.",
    extraBadges: [
      { label: "C4 Model" },
      { label: "ADRs · RFCs" },
      { label: "OpenAPI" },
      { label: "AsyncAPI" },
      { label: "Kafka" },
      { label: "Outbox · Inbox" },
      { label: "Saga · CQRS" },
      { label: "Cloud Solution" },
      { label: "Resiliência" },
      { label: "Governança" },
      { label: "Trade-offs" },
      { label: "Senior Design" }
    ]
  },

  {
    key: "frontend",
    label: "Frontend Engineering",
    href: "./trilhas/frontend.html",
    badge: "Frontend Academy",
    desc: "20 módulos da plataforma Web à produção: HTML, CSS, JavaScript, TypeScript, React, acessibilidade, design systems, testes, Web Vitals, segurança e arquitetura.",
    extraBadges: [
      { label: "20 módulos" },
      { label: "10 livros" },
      { label: "WCAG 2.2" },
      { label: "TypeScript + React" },
      { label: "Web Vitals" },
      { label: "Projeto evolutivo" }
    ]
  },

  {
    key: "aws",
    label: "AWS",
    href: "./trilhas/aws.html",
    badge: "Cloud Academy",
    desc: "20 módulos de arquitetura e operação: IAM, VPC, dados, serverless, containers, resiliência, segurança, FinOps e Well-Architected.",
    extraBadges: [
      { label: "SAA-C03" },
      { label: "20 módulos" },
      { label: "7 livros" },
      { label: "IaC" },
      { label: "Game Day" },
      { label: "FinOps" },
      { label: "Projeto evolutivo" }
    ]
  },

  {
    key: "py",
    label: "Python",
    href: "./trilhas/python.html",
    badge: "Backend + IA",
    desc: "Python moderno, typing, FastAPI, Django/DRF, SQLAlchemy, pytest, Docker, APIs profissionais, dados, ML, PyTorch, LLMs, RAG, agentes, MLOps/LLMOps e integração com Java.",
    extraBadges: [
      { label: "Python 3.12+" },
      { label: "FastAPI" },
      { label: "Django DRF" },
      { label: "SQLAlchemy" },
      { label: "pytest" },
      { label: "Pandas · NumPy" },
      { label: "PyTorch" },
      { label: "RAG · Agentes" },
      { label: "MLOps/LLMOps" }
    ]
  },

  {
    key: "devops",
    label: "DevOps",
    href: "./trilhas/devops.html",
    badge: "Operação",
    desc: "Linux, redes, Docker, CI/CD, Kubernetes, Terraform, observabilidade, SRE, DevSecOps, FinOps e troubleshooting real.",
    extraBadges: [
      { label: "Linux" },
      { label: "Networking" },
      { label: "Git" },
      { label: "Docker" },
      { label: "CI/CD" },
      { label: "GitHub Actions" },
      { label: "Jenkins" },
      { label: "Kubernetes" },
      { label: "Helm" },
      { label: "Terraform" },
      { label: "GitOps" },
      { label: "ArgoCD" },
      { label: "Prometheus" },
      { label: "Grafana" },
      { label: "OpenTelemetry" },
      { label: "DevSecOps" },
      { label: "SRE" },
      { label: "DORA Metrics" },
      { label: "FinOps" },
      { label: "Platform Engineering" }
    ]
  },


  {
    key: "sec",
    label: "Segurança — Confiança Verificável",
    href: "./trilhas/sec.html",
    badge: "AppSec · Engenharia de Segurança",
    desc: "Threat modeling, ASVS 5.0.0, identidade, autorização, segurança web e de APIs, testes, supply chain, detecção, incidentes e programa AppSec com evidência.",
    extraBadges: [
      { label: "20 módulos" },
      { label: "4 entregas encadeadas" },
      { label: "10 livros locais" },
      { label: "OWASP Top 10:2025" },
      { label: "ASVS 5.0.0" },
      { label: "Threat Modeling" },
      { label: "AuthN · AuthZ" },
      { label: "SAST · DAST · SCA" },
      { label: "Supply Chain" },
      { label: "Incident Response" }
    ]
  },

  {
    key: "db",
    label: "Banco de Dados SQL/NoSQL",
    href: "./trilhas/bancos.html",
    badge: "Dados",
    desc: "SQL relacional, PostgreSQL, JPA/Hibernate, query tuning, MongoDB, Redis, DynamoDB, transações, índices, backup, segurança e modelagem para produção.",
    extraBadges: [
      { label: "SQL" },
      { label: "PostgreSQL" },
      { label: "JPA/Hibernate" },
      { label: "MongoDB" },
      { label: "Redis" },
      { label: "DynamoDB" },
      { label: "Query Tuning" },
      { label: "EXPLAIN ANALYZE" },
      { label: "Transactions" },
      { label: "Locks" },
      { label: "Outbox" },
      { label: "CQRS" },
      { label: "Saga" },
      { label: "Backup/Restore" },
      { label: "Observabilidade" },
      { label: "LGPD" }
    ]
  },

  {
    key: "math",
    label: "Matemática",
    href: "./trilhas/matematica.html",
    badge: "Base IA + Código",
    desc: "Matemática aplicada à programação e IA: lógica, Big O, grafos, álgebra linear com NumPy, probabilidade, estatística, cálculo, otimização, métricas ML/RAG, embeddings, attention e entregáveis por fase.",
    extraBadges: [
      { label: "3x/semana" },
      { label: "156 semanas" },
      { label: "12 fases" },
      { label: "Programação" },
      { label: "Algoritmos" },
      { label: "Machine Learning" },
      { label: "Deep Learning" },
      { label: "LLMs" },
      { label: "RAG" },
      { label: "Retrieval" },
      { label: "Métricas" },
      { label: "Portfólio" }
    ]
  },

  {
    key: "ia",
    label: "IA Engineering",
    href: "./trilhas/ia.html",
    badge: "IA aplicada · produção",
    desc: "Trilha técnica completa de Inteligência Artificial, do básico ao profissional/sênior: fundamentos, matemática, Python e dados, Machine Learning, Deep Learning, NLP, LLMs, IA Generativa, RAG, agentes, engenharia de aplicações, MLOps, cloud, segurança, governança, projetos, cronogramas, checklist e biblioteca de livros em PDF.",
    extraBadges: [
      { label: "31 seções" },
      { label: "4 níveis" },
      { label: "9 livros PDF" },
      { label: "ML clássico" },
      { label: "Deep Learning" },
      { label: "NLP" },
      { label: "LLMs" },
      { label: "RAG" },
      { label: "Agentes" },
      { label: "MLOps" },
      { label: "Cloud IA" },
      { label: "OWASP LLM" },
      { label: "NIST AI RMF" },
      { label: "LGPD" },
      { label: "Portfólio" }
    ]
  },

  {
    key: "fin",
    label: "Financeiro",
    href: "./trilhas/financeiro.html",
    badge: "Renda",
    desc: "Orçamento, dívidas, reserva, investimentos, precificação, produtos digitais, microSaaS e evolução financeira.",
    extraBadges: [
      { label: "31 módulos" },
      { label: "5 macroáreas" },
      { label: "12 fases / 156 semanas" },
      { label: "3x/semana" },
      { label: "70/20/10" },
      { label: "Orçamento" },
      { label: "Dívidas" },
      { label: "Reserva" },
      { label: "Investimentos" },
      { label: "Negócios digitais" },
      { label: "IA aplicada" },
      { label: "Proteção patrimonial" }
    ]
  },

  {
    key: "treino",
    label: "Treino Híbrido",
    href: "./trilhas/treino.html",
    badge: "Saúde + Cardio",
    desc: "Plano de treino híbrido reconstruído: musculação 5x/semana com um grupo por dia (peito, pernas, costas, ombros, braços), cardio em dois turnos diários (Zona 2 em jejum e 4x4 norueguês), volume semanal auditado, progressão dupla, nutrição e avaliação em números.",
    extraBadges: [
      { label: "110 kg" },
      { label: "1,80 m" },
      { label: "Split por grupo" },
      { label: "Cardio 2 turnos" },
      { label: "4x4 norueguês" },
      { label: "10–18 séries" },
      { label: "Progressão dupla" },
      { label: "Braço 2x" },
      { label: "Abdômen 3x · Panturrilha 2x" }
    ]
  }
];

/* ═══════════════════════════════════════════════
   RELAÇÕES ENTRE TRILHAS (STUDY-057)

   chaveTrilha (dados) → arquivo da página, e o grafo de
   trilhas relacionadas exibido no rodapé de cada página.
═══════════════════════════════════════════════ */

/** Chave de dados → nome do arquivo em /trilhas (sem extensão). */
export const ARQUIVO_TRILHA = {
  java: 'java', db: 'bancos', git: 'git', arquitetura: 'arquitetura',
  devops: 'devops', sec: 'sec', frontend: 'frontend', py: 'python',
  ia: 'ia', math: 'matematica', ingles: 'ingles', aws: 'aws',
  fin: 'financeiro', treino: 'treino', dsa: 'dsa', aieng: 'aieng',
  fundamentos: 'fundamentos'
  // pratica não tem página própria
};

/** Nome legível curto de cada trilha. */
export const NOME_TRILHA = {
  java: 'Java + Spring', db: 'Banco de Dados', git: 'Git', arquitetura: 'Arquitetura',
  devops: 'DevOps / CI-CD', sec: 'Segurança', frontend: 'Frontend', py: 'Python',
  ia: 'IA Engineering', math: 'Matemática', ingles: 'Inglês', aws: 'AWS',
  fin: 'Financeiro', treino: 'Treino', dsa: 'Algoritmos e ED', aieng: 'Engenharia Assistida por IA',
  fundamentos: 'Fundamentos'
};

/** Grafo de dependência/afinidade: de cada trilha, as mais próximas no plano. */
export const trilhasRelacionadas = {
  java: ['db', 'arquitetura', 'sec', 'devops'],
  db: ['java', 'arquitetura', 'devops', 'aws'],
  arquitetura: ['java', 'db', 'devops', 'sec'],
  devops: ['java', 'sec', 'aws', 'arquitetura'],
  sec: ['java', 'devops', 'arquitetura', 'aws'],
  aws: ['devops', 'arquitetura', 'db', 'sec'],
  git: ['java', 'devops', 'arquitetura'],
  ingles: ['java', 'arquitetura', 'ia'],
  frontend: ['java', 'py', 'ia'],
  py: ['ia', 'frontend', 'db', 'math'],
  ia: ['py', 'math', 'dsa'],
  math: ['ia', 'py', 'dsa'],
  dsa: ['java', 'ia', 'math'],
  aieng: ['ia', 'sec', 'devops'],
  fin: ['ingles'],
  fundamentos: ['py', 'java', 'git'],
  treino: []
};

/*
 * Registro canônico das três vistas.
 *
 * O slug público, data-track e diretório da Academia usam o mesmo identificador.
 * Os aliases existem somente para resolver URLs e dados legados durante a
 * migração; componentes e novas páginas nunca devem emiti-los.
 */
export const TRACK_ALIASES = Object.freeze({
  py: 'python',
  db: 'bancos',
  math: 'matematica',
  fin: 'financeiro'
});

export const TRACK_REGISTRY = Object.freeze({
  java: {
    label: 'Java 21+, JVM e Engenharia de Produção',
    shortLabel: 'Java',
    brand: 'Java Track',
    dataFile: 'java-advanced.js',
    exports: {
      academy: 'javaAcademy',
      modules: 'javaModules',
      books: 'javaBooks',
      assessment: 'javaAssessment',
      answerKey: 'javaAnswerKey',
      baseline: 'javaTechnologyBaseline'
    },
    academy: true
  },
  ia: {
    label: 'IA Engineering aplicada',
    shortLabel: 'IA',
    brand: 'AI Engineering',
    dataFile: 'ia-advanced.js',
    exports: {
      academy: 'iaAcademy',
      modules: 'iaModules',
      books: 'iaBooks',
      assessment: 'iaAssessment',
      projects: 'iaProjects',
      answerKey: 'iaAnswerKey',
      baseline: 'iaTechnologyBaseline'
    },
    academy: true,
    assessmentPart: 'pratica'
  },
  arquitetura: {
    label: 'Arquitetura de Software',
    shortLabel: 'Arquitetura',
    brand: 'Architecture Track',
    dataFile: 'arquitetura-advanced.js',
    exports: {
      academy: 'arquiteturaAcademy',
      modules: 'arquiteturaModules',
      books: 'arquiteturaBooks',
      assessment: 'arquiteturaAssessment',
      answerKey: 'arquiteturaAnswerKey',
      baseline: 'arquiteturaTechnologyBaseline'
    },
    academy: true
  },
  python: {
    label: 'Python aplicado a dados',
    shortLabel: 'Python',
    brand: 'Python Track',
    dataFile: 'python-advanced.js',
    exports: {
      academy: 'pythonAcademy',
      modules: 'pythonModules',
      books: 'pythonBooks',
      assessment: 'pythonAssessment',
      answerKey: 'pythonAnswerKey',
      baseline: 'pythonTechnologyBaseline'
    },
    academy: true
  },
  aws: {
    label: 'AWS e Cloud de produção',
    shortLabel: 'AWS',
    brand: 'AWS Academy',
    dataFile: 'aws-advanced.js',
    exports: {
      academy: 'awsAcademy',
      modules: 'awsModules',
      books: 'awsBooks',
      assessment: 'awsAssessment',
      answerKey: 'awsAnswerKey',
      baseline: 'awsTechnologyBaseline'
    },
    academy: true
  },
  devops: {
    label: 'DevOps e Entrega Contínua',
    shortLabel: 'DevOps',
    brand: 'DevOps Academy',
    dataFile: 'devops-advanced.js',
    exports: {
      academy: 'devopsAcademy',
      modules: 'devopsModules',
      books: 'devopsBooks',
      assessment: 'devopsAssessment',
      answerKey: 'devopsAnswerKey',
      baseline: 'devopsTechnologyBaseline'
    },
    academy: true
  },
  frontend: {
    label: 'Frontend Engineering',
    shortLabel: 'Frontend',
    brand: 'Frontend Academy',
    dataFile: 'frontend-advanced.js',
    exports: {
      academy: 'frontendAcademy',
      modules: 'frontendModules',
      books: 'frontendBooks',
      assessment: 'frontendAssessment',
      answerKey: 'frontendAnswerKey',
      baseline: 'frontendTechnologyBaseline'
    },
    academy: true
  },
  bancos: {
    label: 'Bancos de Dados',
    shortLabel: 'Bancos',
    brand: 'Database Track',
    dataFile: 'bancos-advanced.js',
    exports: {
      academy: 'bancosAcademy',
      modules: 'bancosModules',
      books: 'bancosBooks',
      assessment: 'bancosAssessment',
      answerKey: 'bancosAnswerKey',
      baseline: 'bancosTechnologyBaseline'
    },
    academy: true
  },
  git: {
    label: 'Git e Versionamento',
    shortLabel: 'Git',
    brand: 'Git Track',
    dataFile: 'git-advanced.js',
    exports: { academy: 'gitAcademy', modules: 'gitModules', books: 'gitBooks', assessment: 'gitAssessment', answerKey: 'gitAnswerKey' },
    academy: true
  },
  dsa: {
    label: 'Algoritmos e Estruturas de Dados',
    shortLabel: 'Algoritmos',
    brand: 'DSA Academy',
    dataFile: 'dsa-advanced.js',
    exports: { academy: 'dsaAcademy', modules: 'dsaModules', books: 'dsaBooks', assessment: 'dsaAssessment', answerKey: 'dsaAnswerKey' },
    academy: true
  },
  aieng: {
    label: 'Engenharia Assistida por IA',
    shortLabel: 'Eng+IA',
    brand: 'AI-Assisted Eng',
    dataFile: 'aieng-advanced.js',
    exports: { academy: 'aiengAcademy', modules: 'aiengModules', books: 'aiengBooks', assessment: 'aiengAssessment', answerKey: 'aiengAnswerKey' },
    academy: true
  },
  fundamentos: {
    label: 'Fundamentos de Computação',
    shortLabel: 'Fundamentos',
    brand: 'Fundamentos (Faixa 0)',
    dataFile: 'fundamentos-advanced.js',
    exports: { academy: 'fundamentosAcademy', modules: 'fundamentosModules', books: 'fundamentosBooks', assessment: 'fundamentosAssessment', answerKey: 'fundamentosAnswerKey' },
    academy: true
  },
  ingles: {
    label: 'Inglês Técnico',
    shortLabel: 'Inglês',
    brand: 'English Track',
    dataFile: 'ingles-advanced.js',
    exports: {
      academy: 'inglesAcademy',
      modules: 'inglesModules',
      books: 'inglesBooks',
      assessment: 'inglesAssessment',
      answerKey: 'inglesAnswerKey'
    },
    academy: true
  },
  matematica: {
    label: 'Matemática Aplicada',
    shortLabel: 'Matemática',
    brand: 'Math Track',
    dataFile: 'matematica-advanced.js',
    exports: {
      academy: 'matematicaAcademy',
      modules: 'matematicaModules',
      books: 'matematicaBooks',
      assessment: 'matematicaAssessment',
      answerKey: 'matematicaAnswerKey'
    },
    academy: true
  },
  sec: {
    label: 'Segurança de Aplicações',
    shortLabel: 'Segurança',
    brand: 'Security Academy',
    dataFile: 'sec-advanced.js',
    exports: {
      academy: 'secAcademy',
      modules: 'secModules',
      books: 'secBooks',
      assessment: 'secAssessment',
      answerKey: 'secAnswerKey',
      baseline: 'secTechnologyBaseline'
    },
    academy: true
  },
  financeiro: {
    label: 'Gestão Financeira',
    shortLabel: 'Financeiro',
    brand: 'Finance Track',
    dataFile: 'financeiro-advanced.js',
    exports: {
      academy: 'financeiroAcademy',
      modules: 'financeiroModules',
      books: 'financeiroBooks',
      assessment: 'financeiroAssessment',
      answerKey: 'financeiroAnswerKey'
    },
    academy: true
  },
  treino: {
    label: 'Treino Híbrido',
    shortLabel: 'Treino',
    brand: 'Training Log',
    academy: false
  }
});

export function resolveTrackId(value = '') {
  const candidate = String(value).trim().toLowerCase();
  return TRACK_ALIASES[candidate] || candidate;
}

export function getTrackConfig(value = '') {
  const id = resolveTrackId(value);
  const config = TRACK_REGISTRY[id];
  return config ? { id, ...config } : null;
}
