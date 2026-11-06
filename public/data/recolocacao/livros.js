/* ═══════════════════════════════════════════════
   RECOLOCAÇÃO / LIVROS — catálogo de leituras do sprint

   `biblioteca` aponta para o número (n) do livro em
   data/biblioteca.js: o PDF local é resolvido de lá.
   `url` é usado para documentação oficial ou material
   gratuito online. Livros sem `biblioteca` nem `url`
   não estão no acervo e precisam ser comprados ou
   emprestados.

   Fonte única de verdade das leituras da rotina de
   recolocação — as semanas citam estes ids.
═══════════════════════════════════════════════ */

export const AREAS_LIVRO = {
  java: 'Java e JVM',
  spring: 'Spring, APIs e persistência',
  dados: 'Banco de dados e performance',
  testes: 'Testes',
  arquitetura: 'Arquitetura e system design',
  entrega: 'Docker, CI/CD, nuvem e operação',
  seguranca: 'Segurança',
  frontend: 'Frontend e TypeScript',
  ia: 'IA aplicada',
  dsa: 'Algoritmos e entrevistas',
  carreira: 'Carreira, escrita e negociação'
};

export const LIVROS = {
  /* ─── Java e JVM ─── */
  'effective-java': { titulo: 'Effective Java (3ª ed.)', autor: 'Joshua Bloch', ano: 2018, area: 'java', biblioteca: 2 },
  'core-java-1': { titulo: 'Core Java, Vol. I — Fundamentals (12ª ed.)', autor: 'Cay S. Horstmann', ano: 2022, area: 'java', biblioteca: 4 },
  'modern-java': { titulo: 'Modern Java in Action', autor: 'Urma, Fusco, Mycroft', ano: 2018, area: 'java', biblioteca: 3 },
  'jcip': { titulo: 'Java Concurrency in Practice', autor: 'Brian Goetz et al.', ano: 2006, area: 'java', biblioteca: 8 },
  'well-grounded': { titulo: 'The Well-Grounded Java Developer (2ª ed.)', autor: 'Evans, Clark, Verburg', ano: 2022, area: 'java', biblioteca: 14 },
  'optimizing-java': { titulo: 'Optimizing Java', autor: 'Evans, Gough, Newland', ano: 2018, area: 'java', biblioteca: 16 },
  'dev-java': { titulo: 'dev.java — trilhas oficiais da Oracle', autor: 'Oracle', ano: 'atual', area: 'java', url: 'https://dev.java/learn/', gratis: true },
  'jep-444': { titulo: 'JEP 444 — Virtual Threads', autor: 'OpenJDK', ano: 2023, area: 'java', url: 'https://openjdk.org/jeps/444', gratis: true },

  /* ─── Spring, APIs e persistência ─── */
  'spring-in-action': { titulo: 'Spring in Action (6ª ed.)', autor: 'Craig Walls', ano: 2022, area: 'spring', biblioteca: 5 },
  'spring-boot-up': { titulo: 'Spring Boot: Up and Running', autor: 'Mark Heckler', ano: 2021, area: 'spring', biblioteca: 6 },
  'spring-start-here': { titulo: 'Spring Start Here', autor: 'Laurențiu Spilcă', ano: 2021, area: 'spring' },
  'spring-boot-docs': { titulo: 'Spring Boot — documentação de referência', autor: 'Spring', ano: 'atual', area: 'spring', url: 'https://docs.spring.io/spring-boot/', gratis: true },
  'spring-data-jpa-docs': { titulo: 'Spring Data JPA — documentação de referência', autor: 'Spring', ano: 'atual', area: 'spring', url: 'https://docs.spring.io/spring-data/jpa/reference/', gratis: true },
  'spring-kafka-docs': { titulo: 'Spring for Apache Kafka — documentação de referência', autor: 'Spring', ano: 'atual', area: 'spring', url: 'https://docs.spring.io/spring-kafka/reference/', gratis: true },
  'jpa-tudose': { titulo: 'Java Persistence with Spring Data and Hibernate', autor: 'Cătălin Tudose', ano: 2023, area: 'spring', biblioteca: 10 },
  'hpjp': { titulo: 'High-Performance Java Persistence', autor: 'Vlad Mihalcea', ano: 2016, area: 'spring', biblioteca: 15 },
  'vlad-blog': { titulo: 'Blog de Vlad Mihalcea (JPA e Hibernate)', autor: 'Vlad Mihalcea', ano: 'atual', area: 'spring', url: 'https://vladmihalcea.com/tutorials/hibernate/', gratis: true },
  'design-web-apis': { titulo: 'The Design of Web APIs', autor: 'Arnaud Lauret', ano: 2019, area: 'spring' },
  'rfc9110': { titulo: 'RFC 9110 — HTTP Semantics', autor: 'IETF', ano: 2022, area: 'spring', url: 'https://www.rfc-editor.org/rfc/rfc9110', gratis: true },
  'rfc9457': { titulo: 'RFC 9457 — Problem Details for HTTP APIs', autor: 'IETF', ano: 2023, area: 'spring', url: 'https://www.rfc-editor.org/rfc/rfc9457', gratis: true },
  'resilience4j-docs': { titulo: 'Resilience4j — documentação', autor: 'Resilience4j', ano: 'atual', area: 'spring', url: 'https://resilience4j.readme.io/docs', gratis: true },

  /* ─── Banco de dados e performance ─── */
  'learning-sql': { titulo: 'Learning SQL (3ª ed.)', autor: 'Alan Beaulieu', ano: 2020, area: 'dados' },
  'use-the-index': { titulo: 'Use The Index, Luke', autor: 'Markus Winand', ano: 'atual', area: 'dados', url: 'https://use-the-index-luke.com/', gratis: true },
  'sql-perf': { titulo: 'SQL Performance Explained', autor: 'Markus Winand', ano: 2012, area: 'dados', biblioteca: 48 },
  'sql-antipatterns': { titulo: 'SQL Antipatterns', autor: 'Bill Karwin', ano: 2010, area: 'dados', biblioteca: 50 },
  'art-postgres': { titulo: 'The Art of PostgreSQL (2ª ed.)', autor: 'Dimitri Fontaine', ano: 2019, area: 'dados', biblioteca: 49 },
  'pg-docs': { titulo: 'PostgreSQL — documentação oficial', autor: 'PostgreSQL Global Development Group', ano: 'atual', area: 'dados', url: 'https://www.postgresql.org/docs/current/', gratis: true },
  'redis-docs': { titulo: 'Redis — documentação', autor: 'Redis', ano: 'atual', area: 'dados', url: 'https://redis.io/docs/latest/', gratis: true },
  'ddia': { titulo: 'Designing Data-Intensive Applications (2ª ed.)', autor: 'Martin Kleppmann, Chris Riccomini', ano: 2026, area: 'dados', biblioteca: 115 },
  'pgvector': { titulo: 'pgvector — README oficial', autor: 'pgvector', ano: 'atual', area: 'dados', url: 'https://github.com/pgvector/pgvector', gratis: true },

  /* ─── Testes ─── */
  'khorikov': { titulo: 'Unit Testing Principles, Practices, and Patterns', autor: 'Vladimir Khorikov', ano: 2020, area: 'testes' },
  'effective-testing': { titulo: 'Effective Software Testing', autor: 'Maurício Aniche', ano: 2022, area: 'testes', biblioteca: 11 },
  'tdd-beck': { titulo: 'Test-Driven Development: By Example', autor: 'Kent Beck', ano: 2002, area: 'testes' },
  'junit-guide': { titulo: 'JUnit — User Guide', autor: 'JUnit Team', ano: 'atual', area: 'testes', url: 'https://junit.org/', gratis: true },
  'testcontainers-docs': { titulo: 'Testcontainers — guias', autor: 'Testcontainers', ano: 'atual', area: 'testes', url: 'https://testcontainers.com/guides/', gratis: true },
  'testing-library-docs': { titulo: 'Testing Library — documentação', autor: 'Testing Library', ano: 'atual', area: 'testes', url: 'https://testing-library.com/docs/', gratis: true },

  /* ─── Arquitetura e system design ─── */
  'clean-code': { titulo: 'Clean Code', autor: 'Robert C. Martin', ano: 2008, area: 'arquitetura', biblioteca: 7 },
  'refactoring': { titulo: 'Refactoring (2ª ed.)', autor: 'Martin Fowler', ano: 2018, area: 'arquitetura', biblioteca: 13 },
  'gof': { titulo: 'Design Patterns (Gang of Four)', autor: 'Gamma, Helm, Johnson, Vlissides', ano: 1994, area: 'arquitetura', biblioteca: 12 },
  'head-first-dp': { titulo: 'Head First Design Patterns (2ª ed.)', autor: 'Eric Freeman, Elisabeth Robson', ano: 2020, area: 'arquitetura' },
  'clean-arch': { titulo: 'Clean Architecture', autor: 'Robert C. Martin', ano: 2017, area: 'arquitetura' },
  'hombergs': { titulo: 'Get Your Hands Dirty on Clean Architecture (2ª ed.)', autor: 'Tom Hombergs', ano: 2023, area: 'arquitetura' },
  'fosa': { titulo: 'Fundamentals of Software Architecture (2ª ed.)', autor: 'Mark Richards, Neal Ford', ano: 2025, area: 'arquitetura', biblioteca: 116 },
  'building-microservices': { titulo: 'Building Microservices (2ª ed.)', autor: 'Sam Newman', ano: 2021, area: 'arquitetura', biblioteca: 22 },
  'microservices-patterns': { titulo: 'Microservices Patterns', autor: 'Chris Richardson', ano: 2018, area: 'arquitetura' },
  'release-it': { titulo: 'Release It! (2ª ed.)', autor: 'Michael T. Nygard', ano: 2018, area: 'arquitetura', biblioteca: 25 },
  'eip': { titulo: 'Enterprise Integration Patterns', autor: 'Gregor Hohpe, Bobby Woolf', ano: 2003, area: 'arquitetura', biblioteca: 24 },
  'kafka-tdg': { titulo: 'Kafka: The Definitive Guide (2ª ed.)', autor: 'Shapira, Palino, Sivaram, Petty', ano: 2021, area: 'arquitetura' },
  'sdi1': { titulo: 'System Design Interview — Volume 1', autor: 'Alex Xu', ano: 2020, area: 'arquitetura', biblioteca: 26 },
  'sdi2': { titulo: 'System Design Interview — Volume 2', autor: 'Alex Xu, Sahn Lam', ano: 2022, area: 'arquitetura', biblioteca: 27 },

  /* ─── Docker, CI/CD, nuvem e operação ─── */
  'docker-deep-dive': { titulo: 'Docker Deep Dive (edição atual)', autor: 'Nigel Poulton', ano: 'atual', area: 'entrega' },
  'docker-docs': { titulo: 'Docker — documentação', autor: 'Docker', ano: 'atual', area: 'entrega', url: 'https://docs.docker.com/', gratis: true },
  'gha-docs': { titulo: 'GitHub Actions — documentação', autor: 'GitHub', ano: 'atual', area: 'entrega', url: 'https://docs.github.com/actions', gratis: true },
  'continuous-delivery': { titulo: 'Continuous Delivery', autor: 'Jez Humble, David Farley', ano: 2010, area: 'entrega', biblioteca: 58 },
  'accelerate': { titulo: 'Accelerate', autor: 'Forsgren, Humble, Kim', ano: 2018, area: 'entrega', biblioteca: 56 },
  'aws-in-action': { titulo: 'Amazon Web Services in Action (3ª ed.)', autor: 'Andreas Wittig, Michael Wittig', ano: 2023, area: 'entrega', biblioteca: 65 },
  'good-parts-aws': { titulo: 'The Good Parts of AWS', autor: 'Daniel Vassallo, Josh Pschorr', ano: 2020, area: 'entrega', biblioteca: 67 },
  'saa-guide': { titulo: 'AWS Certified Solutions Architect Study Guide (SAA-C03)', autor: 'Ben Piper, David Clinton', ano: 2023, area: 'entrega', biblioteca: 117 },
  'cloud-finops': { titulo: 'Cloud FinOps (2ª ed.)', autor: 'J.R. Storment, Mike Fuller', ano: 2023, area: 'entrega', biblioteca: 70 },
  'ms-learn': { titulo: 'Microsoft Learn — trilhas AZ-900 e Azure Container Apps', autor: 'Microsoft', ano: 'atual', area: 'entrega', url: 'https://learn.microsoft.com/training/', gratis: true },
  'terraform-ur': { titulo: 'Terraform: Up & Running (3ª ed.)', autor: 'Yevgeniy Brikman', ano: 2022, area: 'entrega', biblioteca: 59 },
  'k8s-ur': { titulo: 'Kubernetes: Up and Running (3ª ed.)', autor: 'Burns, Beda, Hightower, Evenson', ano: 2022, area: 'entrega', biblioteca: 60 },
  'k8s-docs': { titulo: 'Kubernetes — documentação', autor: 'CNCF', ano: 'atual', area: 'entrega', url: 'https://kubernetes.io/docs/', gratis: true },
  'sre': { titulo: 'Site Reliability Engineering', autor: 'Beyer, Jones, Petoff, Murphy (Google)', ano: 2016, area: 'entrega', biblioteca: 54, gratis: true },
  'sre-workbook': { titulo: 'The Site Reliability Workbook', autor: 'Beyer, Murphy, Rensin, Kawahara, Thorne (Google)', ano: 2018, area: 'entrega', biblioteca: 57, gratis: true },
  'obs-eng': { titulo: 'Observability Engineering', autor: 'Majors, Fong-Jones, Miranda', ano: 2022, area: 'entrega', biblioteca: 61 },
  'learning-otel': { titulo: 'Learning OpenTelemetry', autor: 'Ted Young, Austin Parker', ano: 2024, area: 'entrega' },
  'otel-docs': { titulo: 'OpenTelemetry — documentação', autor: 'CNCF', ano: 'atual', area: 'entrega', url: 'https://opentelemetry.io/docs/', gratis: true },
  'prometheus-docs': { titulo: 'Prometheus — documentação', autor: 'Prometheus', ano: 'atual', area: 'entrega', url: 'https://prometheus.io/docs/', gratis: true },

  /* ─── Segurança ─── */
  'spring-security-ia': { titulo: 'Spring Security in Action (2ª ed.)', autor: 'Laurențiu Spilcă', ano: 2024, area: 'seguranca', biblioteca: 9 },
  'spring-security-docs': { titulo: 'Spring Security — documentação de referência', autor: 'Spring', ano: 'atual', area: 'seguranca', url: 'https://docs.spring.io/spring-security/reference/', gratis: true },
  'oauth2-in-action': { titulo: 'OAuth 2 in Action', autor: 'Justin Richer, Antonio Sanso', ano: 2017, area: 'seguranca' },
  'api-security-ia': { titulo: 'API Security in Action', autor: 'Neil Madden', ano: 2020, area: 'seguranca' },
  'owasp-top10': { titulo: 'OWASP Top 10', autor: 'OWASP Foundation', ano: 'atual', area: 'seguranca', url: 'https://owasp.org/Top10/', gratis: true },
  'owasp-api': { titulo: 'OWASP API Security Top 10', autor: 'OWASP Foundation', ano: 2023, area: 'seguranca', url: 'https://owasp.org/API-Security/', gratis: true },
  'owasp-cheatsheets': { titulo: 'OWASP Cheat Sheet Series', autor: 'OWASP Foundation', ano: 'atual', area: 'seguranca', url: 'https://cheatsheetseries.owasp.org/', gratis: true },
  'owasp-llm': { titulo: 'OWASP Top 10 for LLM Applications', autor: 'OWASP Foundation', ano: 'atual', area: 'seguranca', url: 'https://genai.owasp.org/llm-top-10/', gratis: true },
  'asvs': { titulo: 'OWASP ASVS 5.0.0', autor: 'OWASP Foundation', ano: 2025, area: 'seguranca', biblioteca: 81, gratis: true },
  'alice-bob': { titulo: 'Alice and Bob Learn Application Security', autor: 'Tanya Janca', ano: 2020, area: 'seguranca', biblioteca: 83 },
  'web-security-devs': { titulo: 'Web Security for Developers', autor: 'Malcolm McDonald', ano: 2020, area: 'seguranca', biblioteca: 84 },
  'zap-docs': { titulo: 'ZAP — documentação', autor: 'ZAP', ano: 'atual', area: 'seguranca', url: 'https://www.zaproxy.org/docs/', gratis: true },
  'portswigger': { titulo: 'Web Security Academy (laboratórios gratuitos)', autor: 'PortSwigger', ano: 'atual', area: 'seguranca', url: 'https://portswigger.net/web-security', gratis: true },

  /* ─── Frontend e TypeScript ─── */
  'react-dev': { titulo: 'React — documentação oficial (react.dev)', autor: 'Meta e comunidade React', ano: 'atual', area: 'frontend', biblioteca: 119, gratis: true },
  'learning-react': { titulo: 'Learning React (2ª ed.)', autor: 'Eve Porcello, Alex Banks', ano: 2020, area: 'frontend', biblioteca: 77 },
  'effective-ts': { titulo: 'Effective TypeScript (2ª ed.)', autor: 'Dan Vanderkam', ano: 2024, area: 'frontend', biblioteca: 118 },
  'ts-handbook': { titulo: 'TypeScript Handbook', autor: 'Microsoft', ano: 'atual', area: 'frontend', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', gratis: true },
  'tanstack-docs': { titulo: 'TanStack Query — documentação', autor: 'TanStack', ano: 'atual', area: 'frontend', url: 'https://tanstack.com/query/latest', gratis: true },
  'eloquent-js': { titulo: 'Eloquent JavaScript (3ª ed.)', autor: 'Marijn Haverbeke', ano: 2018, area: 'frontend', biblioteca: 71, gratis: true },
  'js-definitive': { titulo: 'JavaScript: The Definitive Guide (7ª ed.)', autor: 'David Flanagan', ano: 2020, area: 'frontend', biblioteca: 73 },
  'inclusive-components': { titulo: 'Inclusive Components', autor: 'Heydon Pickering', ano: 2018, area: 'frontend', biblioteca: 79 },
  'node-docs': { titulo: 'Node.js — guias oficiais', autor: 'OpenJS Foundation', ano: 'atual', area: 'frontend', url: 'https://nodejs.org/en/learn', gratis: true },
  'nest-docs': { titulo: 'NestJS — documentação', autor: 'NestJS', ano: 'atual', area: 'frontend', url: 'https://docs.nestjs.com/', gratis: true },
  'prisma-docs': { titulo: 'Prisma — documentação', autor: 'Prisma', ano: 'atual', area: 'frontend', url: 'https://www.prisma.io/docs', gratis: true },

  /* ─── IA aplicada ─── */
  'ai-engineering': { titulo: 'AI Engineering', autor: 'Chip Huyen', ano: 2025, area: 'ia', biblioteca: 31 },
  'prompt-eng-llms': { titulo: 'Prompt Engineering for LLMs', autor: 'John Berryman, Albert Ziegler', ano: 2024, area: 'ia' },
  'spring-ai-docs': { titulo: 'Spring AI — documentação de referência', autor: 'Spring', ano: 'atual', area: 'ia', url: 'https://docs.spring.io/spring-ai/reference/', gratis: true },
  'aieng-trilha': { titulo: 'Trilha Engenharia Assistida por IA (este plano)', autor: 'Plano Integrado de Estudos', ano: 'atual', area: 'ia', interno: 'trilhas/aieng.html' },
  'ia-trilha': { titulo: 'Trilha IA Engineering (este plano)', autor: 'Plano Integrado de Estudos', ano: 'atual', area: 'ia', interno: 'trilhas/ia.html' },

  /* ─── Algoritmos e entrevistas ─── */
  'grokking': { titulo: 'Grokking Algorithms (2ª ed.)', autor: 'Aditya Bhargava', ano: 2024, area: 'dsa' },
  'sedgewick': { titulo: 'Algorithms (4ª ed.) — exemplos em Java', autor: 'Robert Sedgewick, Kevin Wayne', ano: 2011, area: 'dsa', url: 'https://algs4.cs.princeton.edu/home/' },
  'bctci': { titulo: 'Beyond Cracking the Coding Interview', autor: 'McDowell, Lerner, Mroczka, Mamano', ano: 2025, area: 'dsa' },
  'ctci': { titulo: 'Cracking the Coding Interview (6ª ed.)', autor: 'Gayle Laakmann McDowell', ano: 2015, area: 'dsa' },
  'neetcode': { titulo: 'NeetCode — roadmap de padrões', autor: 'NeetCode', ano: 'atual', area: 'dsa', url: 'https://neetcode.io/roadmap', gratis: true },

  /* ─── Carreira, escrita e negociação ─── */
  'docs-for-devs': { titulo: 'Docs for Developers', autor: 'Bhatti, Corleissen, Lambourne, Nunez, Waterhouse', ano: 2021, area: 'carreira', biblioteca: 105 },
  'google-tech-writing': { titulo: 'Google Technical Writing Courses', autor: 'Google', ano: 'atual', area: 'carreira', biblioteca: 106, gratis: true },
  'pro-git': { titulo: 'Pro Git (2ª ed.)', autor: 'Scott Chacon, Ben Straub', ano: 2014, area: 'carreira', biblioteca: 99, gratis: true },
  'se-guidebook': { titulo: "The Software Engineer's Guidebook", autor: 'Gergely Orosz', ano: 2023, area: 'carreira' },
  'tech-resume': { titulo: 'The Tech Resume Inside Out', autor: 'Gergely Orosz', ano: 2020, area: 'carreira' },
  'never-split': { titulo: 'Never Split the Difference', autor: 'Chris Voss', ano: 2016, area: 'carreira' }
};
