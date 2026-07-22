/* ═══════════════════════════════════════════════
   PDFS — biblioteca de materiais

   Os livros comerciais não são versionados.
   Ver public/pdfs/BIBLIOGRAFIA.md.

   Fonte única de verdade — não duplicar estes dados
   em nenhuma página. Importe deste módulo.
═══════════════════════════════════════════════ */

export const pdfDocuments = [
  { key: "java", title: "Java + Spring Boot + Engenharia de Software", area: "Backend", level: "Avançado/Sênior", file: "./pdfs/java-spring-engenharia-software-senior.pdf", desc: "Plano técnico para evolução em Java moderno, Spring Boot, arquitetura, sistemas distribuídos, qualidade, testes, performance e liderança técnica.", tags: ["Java 21", "Spring Boot", "Backend", "Arquitetura", "Kafka", "Testes"] },
  { key: "aws", title: "AWS — Plano Técnico Sênior", area: "Cloud", level: "Avançado/Sênior", file: "./pdfs/trilha-aws-plano-tecnico-senior-padronizado.pdf", desc: "Trilha AWS com foco em arquitetura cloud, operação, segurança, EKS, DevOps, automação, FinOps e workloads reais em produção.", tags: ["AWS", "Cloud", "EKS", "FinOps", "Segurança", "DevOps"] },
  { key: "db", title: "Banco de Dados SQL/NoSQL", area: "Dados", level: "Avançado/Sênior", file: "./pdfs/banco-dados-sql-nosql-senior.pdf", desc: "Material técnico sobre SQL, PostgreSQL, NoSQL, MongoDB, Redis, DynamoDB, CDC, tuning, modelagem e operação em produção.", tags: ["SQL", "NoSQL", "PostgreSQL", "Redis", "DynamoDB", "CDC"] },
  { key: "devops", title: "DevOps + Cloud + SRE", area: "Operação", level: "Avançado/Sênior", file: "./pdfs/devops-cloud-sre.pdf", desc: "Plano de estudos para Linux, redes, Docker, CI/CD, Kubernetes, Terraform, observabilidade, SRE, DevSecOps e confiabilidade.", tags: ["DevOps", "SRE", "Docker", "Kubernetes", "Terraform", "Observabilidade"] },
  { key: "ia", title: "Trilha Técnica Completa de Inteligência Artificial", area: "Inteligência Artificial", level: "Básico ao Sênior", file: "./pdfs/ia-completa-profissional-V-GPT.pdf", desc: "Material completo de IA aplicada: fundamentos, matemática, Python, dados, ML, Deep Learning, NLP, LLMs, RAG, agentes, MLOps, cloud, segurança, governança, projetos e checklist.", tags: ["IA", "ML", "Deep Learning", "NLP", "LLMs", "RAG", "MLOps", "Governança"] },
  { key: "ingles", title: "Inglês Técnico para Engenharia", area: "Carreira", level: "B2+/Sênior", file: "./pdfs/ingles-tecnico-senior.pdf", desc: "Plano para leitura, escrita, speaking, listening, comunicação técnica, reuniões, incidentes, code review e entrevistas internacionais.", tags: ["Inglês", "Reading", "Writing", "Speaking", "Entrevistas", "Tech English"] },
  { key: "math", title: "Matemática Aplicada", area: "Base IA + Algoritmos", level: "Avançado/Sênior", file: "./pdfs/matematica-aplicada-senior.pdf", desc: "Fundamentos matemáticos aplicados a algoritmos, complexidade, álgebra linear, estatística, ML, RAG, LLMs e leitura de papers.", tags: ["Matemática", "Algoritmos", "Álgebra Linear", "Estatística", "ML", "RAG"] },
  { key: "py", title: "Python Backend + IA", area: "Backend + IA", level: "Avançado/Sênior", file: "./pdfs/python-backend-ia-senior.pdf", desc: "Python moderno, FastAPI, Django/DRF, async, performance, dados, pipelines, MLOps, RAG, arquitetura e produção.", tags: ["Python", "FastAPI", "Django", "MLOps", "RAG", "Backend"] },
  { key: "sec", title: "Segurança Full Stack", area: "Security", level: "Avançado/Sênior", file: "./pdfs/seguranca-full-stack-senior.pdf", desc: "AppSec, DevSecOps, frontend seguro, backend seguro, APIs, cloud, Kubernetes, SIEM, supply chain e segurança em produção.", tags: ["Security", "OWASP", "AppSec", "DevSecOps", "Cloud IAM", "Supply Chain"] },
  { key: "frontend", title: "Frontend Engineering", area: "Frontend", level: "Básico ao Sênior", file: "./pdfs/frontend-engineering-basico-senior.pdf", desc: "HTML, CSS, JavaScript, TypeScript, React, Next.js, arquitetura frontend, performance, segurança, testes, acessibilidade e design systems.", tags: ["Frontend", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"] },
  { key: "arquitetura", title: "Arquitetura de Integração e Solução", area: "Arquitetura", level: "Básico ao Sênior", file: "./pdfs/arquitetura_integracao_solucao_senior.pdf", desc: "APIs, eventos, mensageria, contratos, sistemas distribuídos, resiliência, observabilidade, cloud, governança, ADRs e trade-offs.", tags: ["Arquitetura", "APIs", "Eventos", "Kafka", "ADR", "Integração"] },
  { key: "git", title: "Git, Versionamento e Plataformas", area: "Versionamento", level: "Básico ao Sênior", file: "./pdfs/git_versionamento_codigo_senior.pdf", desc: "Git, branches, commits, merge, rebase, conflitos, Pull Requests, GitHub, GitLab, governança, segurança, monorepo e GitOps.", tags: ["Git", "GitHub", "GitLab", "Branching", "Pull Request", "GitOps"] }
];

/* ═══════════════════════════════════════════════
   BIBLIOGRAFIA (STUDY-015)

   Livros comerciais usados como referência. Os PDFs
   NÃO são versionados nem hospedados — são obras
   protegidas por direitos autorais. Aqui existe apenas
   a referência bibliográfica: título, autor e onde
   cada livro entra no plano.
═══════════════════════════════════════════════ */

export const bibliografia = [
  // ── Arquitetura, sistemas distribuídos e system design ──
  { titulo: 'Fundamentals of Software Architecture', autor: 'Mark Richards, Neal Ford', area: 'Arquitetura', fase: 7, prioridade: 'Essencial' },
  { titulo: 'Software Architecture: The Hard Parts', autor: 'Neal Ford, Mark Richards et al.', area: 'Arquitetura', fase: 8, prioridade: 'Diferencial' },
  { titulo: 'Designing Data-Intensive Applications', autor: 'Martin Kleppmann', area: 'Arquitetura', fase: 8, prioridade: 'Essencial' },
  { titulo: 'Domain-Driven Design', autor: 'Eric Evans', area: 'Arquitetura', fase: 7, prioridade: 'Essencial' },
  { titulo: 'Implementing Domain-Driven Design', autor: 'Vaughn Vernon', area: 'Arquitetura', fase: 7, prioridade: 'Muito importante' },
  { titulo: 'Building Microservices', autor: 'Sam Newman', area: 'Arquitetura', fase: 8, prioridade: 'Muito importante' },
  { titulo: 'Monolith to Microservices', autor: 'Sam Newman', area: 'Arquitetura', fase: 8, prioridade: 'Diferencial' },
  { titulo: 'Enterprise Integration Patterns', autor: 'Gregor Hohpe, Bobby Woolf', area: 'Arquitetura', fase: 8, prioridade: 'Muito importante' },
  { titulo: 'Release It!', autor: 'Michael T. Nygard', area: 'Operação', fase: 6, prioridade: 'Essencial' },
  { titulo: 'System Design Interview — Volume 1', autor: 'Alex Xu', area: 'System Design', fase: 10, prioridade: 'Essencial' },
  { titulo: 'System Design Interview — Volume 2', autor: 'Alex Xu', area: 'System Design', fase: 10, prioridade: 'Muito importante' },
  { titulo: 'Team Topologies', autor: 'Matthew Skelton, Manuel Pais', area: 'Carreira', fase: 12, prioridade: 'Diferencial' },

  // ── Inteligência artificial, machine learning e dados ──
  { titulo: 'Hands-On Machine Learning', autor: 'Aurélien Géron', area: 'IA', fase: 11, prioridade: 'Essencial' },
  { titulo: 'Designing Machine Learning Systems', autor: 'Chip Huyen', area: 'IA', fase: 11, prioridade: 'Muito importante' },
  { titulo: 'AI Engineering', autor: 'Chip Huyen', area: 'IA', fase: 11, prioridade: 'Muito importante' },
  { titulo: 'Machine Learning Design Patterns', autor: 'Lakshmanan, Robinson, Munn', area: 'IA', fase: 11, prioridade: 'Diferencial' },
  { titulo: 'Building ML Powered Applications', autor: 'Emmanuel Ameisen', area: 'IA', fase: 11, prioridade: 'Diferencial' },
  { titulo: 'Natural Language Processing with Transformers', autor: 'Tunstall, von Werra, Wolf', area: 'IA', fase: 11, prioridade: 'Diferencial' },
  { titulo: 'Deep Learning', autor: 'Goodfellow, Bengio, Courville', area: 'IA', fase: 12, prioridade: 'Especialização' },
  { titulo: 'Pattern Recognition and Machine Learning', autor: 'Christopher Bishop', area: 'IA', fase: 12, prioridade: 'Especialização' },
  { titulo: 'The Elements of Statistical Learning', autor: 'Hastie, Tibshirani, Friedman', area: 'IA', fase: 12, prioridade: 'Especialização' }
];

/** Regras de uso da bibliografia, exibidas junto da lista. */
export const bibliografiaNotas = [
  'Não leia em paralelo ao estudo principal: cada livro entra na fase indicada, como leitura de apoio de 20–30 min no bloco de revisão.',
  'Um livro por vez. Ler três pela metade equivale a não ter lido nenhum.',
  'Leitura ativa: cada capítulo relevante gera uma nota curta em inglês e, quando aplicável, um exercício ou lab.',
  'Os títulos marcados como Especialização são referências matemáticas densas — consulta pontual, não leitura linear.',
  'Os PDFs não são distribuídos por este site. Compra nas editoras, assinatura O’Reilly ou biblioteca universitária.'
];
