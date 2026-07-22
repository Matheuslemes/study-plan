/* ═══════════════════════════════════════════════
   TRACKS — trilhas, cores, metadados e cards

   CK   → mapa de cores por chave de trilha
   tracks → badges de frequência semanal
   quickTracks → cards de navegação para as páginas

   Fonte única de verdade — não duplicar estes dados
   em nenhuma página. Importe deste módulo.
═══════════════════════════════════════════════ */

export const CK = {
  java: { t: "#22c55e", b: "#0d2e1a" },
  ingles: { t: "#14b8a6", b: "#0c2f2b" },
  sec: { t: "#2dd4bf", b: "#0c2623" },
  git: { t: "#f97316", b: "#2e170c" },
  arquitetura: { t: "#facc15", b: "#2e2608" },
  frontend: { t: "#06b6d4", b: "#092a33" },
  dsa: { t: "#fb7185", b: "#2e1119" },
  pratica: { t: "#7c6ae8", b: "#1e1a3a" },
  aws: { t: "#f59e0b", b: "#2e2010" },
  py: { t: "#60a5fa", b: "#0d1e35" },
  devops: { t: "#f472b6", b: "#2e1025" },
  db: { t: "#38bdf8", b: "#0e2538" },
  math: { t: "#34d399", b: "#0d2e1a" },
  ia: { t: "#a78bfa", b: "#1a1735" },
  fin: { t: "#fb923c", b: "#2e1a10" },
  treino: { t: "#ef4444", b: "#2f1115" },
  sleep: { t: "#a78bfa", b: "#1a1735" },
  cardio: { t: "#ef4444", b: "#2f1115" },
  strength: { t: "#ef4444", b: "#2f1115" },
  dinner: { t: "#fb923c", b: "#2e1a10" },
  database: { t: "#38bdf8", b: "#0e2538" },
  testing: { t: "#22d3b0", b: "#0d2e28" },
  cloud: { t: "#f59e0b", b: "#2e2010" },
  security: { t: "#2dd4bf", b: "#0c2623" },
  architecture: { t: "#facc15", b: "#2e2608" },
  ai: { t: "#a78bfa", b: "#1a1735" },
  frontendBlock: { t: "#06b6d4", b: "#092a33" },
  specialization: { t: "#a78bfa", b: "#1a1735" },
  break: { t: "#94a3b8", b: "#141a24" },
  review: { t: "#22d3b0", b: "#0d2e28" },
  closing: { t: "#94a3b8", b: "#141a24" },
  buffer: { t: "#fbbf24", b: "#2e2410" },
  project: { t: "#7c6ae8", b: "#1e1a3a" },
  study: { t: "#22c55e", b: "#0d2e1a" },
  n: { t: "#94a3b8", b: "#141a24" }
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
  { "key": "treino", "label": "Treino Híbrido", "h": "5–6x/sem · 60–90min", "suffix": "" }
];

export const quickTracks = [
  {
    key: "java",
    label: "Java + Engenharia",
    href: "./trilhas/java.html",
    badge: "Backend",
    desc: "Java 21, Spring Boot em produção, JPA/Hibernate avançado, Security, APIs profissionais, Kafka, Redis, observabilidade, performance, legado e arquitetura.",
    extraBadges: [
      { label: "Java 21", color: "#22c55e" },
      { label: "Spring Boot", color: "#4f9ef8" },
      { label: "Spring Security", color: "#a78bfa" },
      { label: "JPA/Hibernate", color: "#22c55e" },
      { label: "PostgreSQL", color: "#38bdf8" },
      { label: "Kafka", color: "#a78bfa" },
      { label: "Hexagonal · DDD", color: "#22c55e" },
      { label: "Observabilidade", color: "#38bdf8" },
      { label: "System Design", color: "#a78bfa" }
    ]
  },

  {
    key: "ingles",
    label: "Inglês Técnico para Programação",
    href: "./trilhas/ingles.html",
    badge: "Fluência técnica",
    desc: "Inglês aplicado ao fluxo real de desenvolvimento: documentação oficial, debugging, logs, commits, PRs, README, escrita técnica, speaking, entrevistas, arquitetura e comunicação profissional.",
    extraBadges: [
      { label: "B1+/B2 técnico", color: "#14b8a6" },
      { label: "Documentação oficial", color: "#facc15" },
      { label: "Debugging em inglês", color: "#38bdf8" },
      { label: "Commits e PRs", color: "#22d3b0" },
      { label: "Speaking técnico", color: "#eab308" },
      { label: "Entrevistas", color: "#38bdf8" },
      { label: "Fluência funcional", color: "#14b8a6" },
      { label: "Portfólio global", color: "#eab308" }
    ]
  },


  {
    key: "git",
    label: "Git, Versionamento e Plataformas",
    href: "./trilhas/git.html",
    badge: "Versionamento",
    desc: "Git do básico ao nível sênior: commits, branches, PR/MR, rebase, conflitos, GitHub, GitLab, Bitbucket, Azure Repos, CI/CD, segurança, governança, monorepo e GitOps.",
    extraBadges: [
      { label: "Git Core", color: "#f97316" },
      { label: "GitHub", color: "#38bdf8" },
      { label: "GitLab", color: "#f97316" },
      { label: "Bitbucket", color: "#60a5fa" },
      { label: "Azure Repos", color: "#38bdf8" },
      { label: "PR/MR", color: "#facc15" },
      { label: "Rebase · Bisect", color: "#a78bfa" },
      { label: "CI/CD", color: "#22d3b0" },
      { label: "Branch Protection", color: "#f97316" },
      { label: "CODEOWNERS", color: "#facc15" },
      { label: "Monorepo", color: "#38bdf8" },
      { label: "GitOps", color: "#22c55e" }
    ]
  },

  {
    key: "arquitetura",
    label: "Arquitetura de Solução e Integração",
    href: "./trilhas/arquitetura.html",
    badge: "Architecture",
    desc: "Arquitetura de integração e solução: APIs, eventos, mensageria, contratos, resiliência, segurança, observabilidade, cloud, governança, ADRs, RFCs e decisões técnicas de nível sênior.",
    extraBadges: [
      { label: "C4 Model", color: "#facc15" },
      { label: "ADRs · RFCs", color: "#a78bfa" },
      { label: "OpenAPI", color: "#38bdf8" },
      { label: "AsyncAPI", color: "#22d3b0" },
      { label: "Kafka", color: "#a78bfa" },
      { label: "Outbox · Inbox", color: "#facc15" },
      { label: "Saga · CQRS", color: "#fb923c" },
      { label: "Cloud Solution", color: "#38bdf8" },
      { label: "Resiliência", color: "#22d3b0" },
      { label: "Governança", color: "#facc15" },
      { label: "Trade-offs", color: "#fb923c" },
      { label: "Senior Design", color: "#a78bfa" }
    ]
  },

  {
    key: "frontend",
    label: "Frontend Engineering",
    href: "./trilhas/frontend.html",
    badge: "Frontend",
    desc: "Frontend do básico ao sênior: HTML semântico, CSS moderno, JavaScript, TypeScript, React, Next.js, arquitetura, performance, segurança, acessibilidade, testes, observabilidade e design systems.",
    extraBadges: [
      { label: "HTML Semântico", color: "#06b6d4" },
      { label: "CSS Moderno", color: "#38bdf8" },
      { label: "JavaScript", color: "#facc15" },
      { label: "TypeScript", color: "#60a5fa" },
      { label: "React", color: "#06b6d4" },
      { label: "Next.js", color: "#e2e8f0" },
      { label: "A11y", color: "#22d3b0" },
      { label: "Performance", color: "#fb923c" },
      { label: "Testes", color: "#a78bfa" },
      { label: "Design System", color: "#06b6d4" },
      { label: "BFF", color: "#38bdf8" },
      { label: "Web Vitals", color: "#22d3b0" }
    ]
  },

  {
    key: "aws",
    label: "AWS Certifications",
    href: "./trilhas/aws.html",
    badge: "Cloud",
    desc: "CLF-C02, SAA-C03, DVA-C02, labs obrigatórios, simulados, revisão e marcos de prova.",
    extraBadges: [
      { label: "CLF-C02", color: "#f59e0b" },
      { label: "SAA-C03", color: "#38bdf8" },
      { label: "DVA-C02", color: "#a78bfa" },
      { label: "SOA-C03", color: "#f59e0b" },
      { label: "DOP-C02", color: "#38bdf8" },
      { label: "156 semanas", color: "#a78bfa" },
      { label: "AWS 4x/semana", color: "#fb923c" },
      { label: "Free Tier Labs", color: "#38bdf8" },
      { label: "Simulados", color: "#a78bfa" },
      { label: "Obsidian SP", color: "#f59e0b" },
      { label: "Projeto Blog Cloud-Native", color: "#38bdf8" }
    ]
  },

  {
    key: "py",
    label: "Python",
    href: "./trilhas/python.html",
    badge: "Backend + IA",
    desc: "Python moderno, typing, FastAPI, Django/DRF, SQLAlchemy, pytest, Docker, APIs profissionais, dados, ML, PyTorch, LLMs, RAG, agentes, MLOps/LLMOps e integração com Java.",
    extraBadges: [
      { label: "Python 3.12+", color: "#60a5fa" },
      { label: "FastAPI", color: "#22d3b0" },
      { label: "Django DRF", color: "#22d3b0" },
      { label: "SQLAlchemy", color: "#a78bfa" },
      { label: "pytest", color: "#a78bfa" },
      { label: "Pandas · NumPy", color: "#eab308" },
      { label: "PyTorch", color: "#f59e0b" },
      { label: "RAG · Agentes", color: "#fb923c" },
      { label: "MLOps/LLMOps", color: "#fb923c" }
    ]
  },

  {
    key: "devops",
    label: "DevOps",
    href: "./trilhas/devops.html",
    badge: "Operação",
    desc: "Linux, redes, Docker, CI/CD, Kubernetes, Terraform, observabilidade, SRE, DevSecOps, FinOps e troubleshooting real.",
    extraBadges: [
      { label: "Linux", color: "#f472b6" },
      { label: "Networking", color: "#38bdf8" },
      { label: "Git", color: "#a78bfa" },
      { label: "Docker", color: "#f9a8d4" },
      { label: "CI/CD", color: "#38bdf8" },
      { label: "GitHub Actions", color: "#a78bfa" },
      { label: "Jenkins", color: "#f9a8d4" },
      { label: "Kubernetes", color: "#38bdf8" },
      { label: "Helm", color: "#a78bfa" },
      { label: "Terraform", color: "#f9a8d4" },
      { label: "GitOps", color: "#38bdf8" },
      { label: "ArgoCD", color: "#a78bfa" },
      { label: "Prometheus", color: "#f9a8d4" },
      { label: "Grafana", color: "#38bdf8" },
      { label: "OpenTelemetry", color: "#a78bfa" },
      { label: "DevSecOps", color: "#f9a8d4" },
      { label: "SRE", color: "#38bdf8" },
      { label: "DORA Metrics", color: "#a78bfa" },
      { label: "FinOps", color: "#f9a8d4" },
      { label: "Platform Engineering", color: "#38bdf8" }
    ]
  },


  {
    key: "sec",
    label: "Segurança Full Stack",
    href: "./trilhas/sec.html",
    badge: "AppSec · DevSecOps",
    desc: "Trilha técnica aprofundada de segurança para desenvolvedores full stack: OWASP, frontend seguro, backend seguro, APIs, Auth/Authz, banco, cloud IAM, DevSecOps, threat modeling, observabilidade, supply chain e projetos práticos.",
    extraBadges: [
      { label: "20 seções", color: "#2dd4bf" },
      { label: "9 projetos", color: "#38bdf8" },
      { label: "12+ checklists", color: "#a78bfa" },
      { label: "OWASP Top 10", color: "#34d399" },
      { label: "ASVS · API Security", color: "#38bdf8" },
      { label: "Threat Modeling", color: "#f43f5e" },
      { label: "JWT · OAuth2 · OIDC", color: "#a78bfa" },
      { label: "Spring Security", color: "#34d399" },
      { label: "DevSecOps", color: "#f59e0b" },
      { label: "Cloud IAM · KMS", color: "#38bdf8" },
      { label: "SAST · DAST · SCA", color: "#a78bfa" },
      { label: "Supply Chain", color: "#f43f5e" }
    ]
  },

  {
    key: "db",
    label: "Banco de Dados SQL/NoSQL",
    href: "./trilhas/bancos.html",
    badge: "Dados",
    desc: "SQL relacional, PostgreSQL, JPA/Hibernate, query tuning, MongoDB, Redis, DynamoDB, transações, índices, backup, segurança e modelagem para produção.",
    extraBadges: [
      { label: "SQL", color: "#38bdf8" },
      { label: "PostgreSQL", color: "#22c55e" },
      { label: "JPA/Hibernate", color: "#a78bfa" },
      { label: "MongoDB", color: "#38bdf8" },
      { label: "Redis", color: "#22c55e" },
      { label: "DynamoDB", color: "#a78bfa" },
      { label: "Query Tuning", color: "#38bdf8" },
      { label: "EXPLAIN ANALYZE", color: "#22c55e" },
      { label: "Transactions", color: "#a78bfa" },
      { label: "Locks", color: "#38bdf8" },
      { label: "Outbox", color: "#22c55e" },
      { label: "CQRS", color: "#a78bfa" },
      { label: "Saga", color: "#38bdf8" },
      { label: "Backup/Restore", color: "#22c55e" },
      { label: "Observabilidade", color: "#a78bfa" },
      { label: "LGPD", color: "#38bdf8" }
    ]
  },

  {
    key: "math",
    label: "Matemática",
    href: "./trilhas/matematica.html",
    badge: "Base IA + Código",
    desc: "Matemática aplicada à programação e IA: lógica, Big O, grafos, álgebra linear com NumPy, probabilidade, estatística, cálculo, otimização, métricas ML/RAG, embeddings, attention e entregáveis por fase.",
    extraBadges: [
      { label: "3x/semana", color: "#22d3b0" },
      { label: "156 semanas", color: "#38bdf8" },
      { label: "12 fases", color: "#a78bfa" },
      { label: "Programação", color: "#fb923c" },
      { label: "Algoritmos", color: "#22c55e" },
      { label: "Machine Learning", color: "#60a5fa" },
      { label: "Deep Learning", color: "#a78bfa" },
      { label: "LLMs", color: "#fb923c" },
      { label: "RAG", color: "#22d3b0" },
      { label: "Retrieval", color: "#60a5fa" },
      { label: "Métricas", color: "#a78bfa" },
      { label: "Portfólio", color: "#fb923c" }
    ]
  },

  {
    key: "ia",
    label: "IA Engineering",
    href: "./trilhas/ia.html",
    badge: "IA aplicada · produção",
    desc: "Trilha técnica completa de Inteligência Artificial, do básico ao profissional/sênior: fundamentos, matemática, Python e dados, Machine Learning, Deep Learning, NLP, LLMs, IA Generativa, RAG, agentes, engenharia de aplicações, MLOps, cloud, segurança, governança, projetos, cronogramas, checklist e biblioteca de livros em PDF.",
    extraBadges: [
      { label: "31 seções", color: "#a78bfa" },
      { label: "4 níveis", color: "#38bdf8" },
      { label: "9 livros PDF", color: "#fcd34d" },
      { label: "ML clássico", color: "#22d3b0" },
      { label: "Deep Learning", color: "#a78bfa" },
      { label: "NLP", color: "#38bdf8" },
      { label: "LLMs", color: "#fb923c" },
      { label: "RAG", color: "#34d399" },
      { label: "Agentes", color: "#f87171" },
      { label: "MLOps", color: "#93c5fd" },
      { label: "Cloud IA", color: "#38bdf8" },
      { label: "OWASP LLM", color: "#c084fc" },
      { label: "NIST AI RMF", color: "#fcd34d" },
      { label: "LGPD", color: "#fb923c" },
      { label: "Portfólio", color: "#22d3b0" }
    ]
  },

  {
    key: "fin",
    label: "Financeiro",
    href: "./trilhas/financeiro.html",
    badge: "Renda",
    desc: "Orçamento, dívidas, reserva, investimentos, precificação, produtos digitais, microSaaS e evolução financeira.",
    extraBadges: [
      { label: "31 módulos", color: "#fb923c" },
      { label: "5 macroáreas", color: "#f59e0b" },
      { label: "12 fases / 156 semanas", color: "#22d3b0" },
      { label: "3x/semana", color: "#fb923c" },
      { label: "70/20/10", color: "#f59e0b" },
      { label: "Orçamento", color: "#22d3b0" },
      { label: "Dívidas", color: "#fb923c" },
      { label: "Reserva", color: "#f59e0b" },
      { label: "Investimentos", color: "#22d3b0" },
      { label: "Negócios digitais", color: "#fb923c" },
      { label: "IA aplicada", color: "#f59e0b" },
      { label: "Proteção patrimonial", color: "#22d3b0" }
    ]
  },

  {
    key: "treino",
    label: "Treino Híbrido",
    href: "./trilhas/treino.html",
    badge: "Saúde + Cardio",
    desc: "Plano de treino híbrido otimizado: musculação 3x/semana, cardio 6x/semana, fases progressivas, Zona 2, preservação muscular, adaptação para semanas difíceis e limite de 90 min/dia.",
    extraBadges: [
      { label: "103 kg", color: "#f87171" },
      { label: "1,80 m", color: "#38bdf8" },
      { label: "Massa muscular", color: "#84cc16" },
      { label: "1h30/treino", color: "#fb923c" },
      { label: "3 fases", color: "#f9a8d4" },
      { label: "Cardio 6x", color: "#22d3b0" },
      { label: "Musculação 3x", color: "#84cc16" },
      { label: "Zona 2", color: "#fb923c" },
      { label: "Semana 8", color: "#f87171" }
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
  fin: 'financeiro', treino: 'treino'
  // dsa e pratica não têm página própria
};

/** Nome legível curto de cada trilha. */
export const NOME_TRILHA = {
  java: 'Java + Spring', db: 'Banco de Dados', git: 'Git', arquitetura: 'Arquitetura',
  devops: 'DevOps / CI-CD', sec: 'Segurança', frontend: 'Frontend', py: 'Python',
  ia: 'IA Engineering', math: 'Matemática', ingles: 'Inglês', aws: 'AWS',
  fin: 'Financeiro', treino: 'Treino'
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
  ia: ['py', 'math', 'frontend'],
  math: ['ia', 'py', 'db'],
  fin: ['ingles'],
  treino: []
};
