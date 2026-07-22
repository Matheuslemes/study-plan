/* ═══════════════════════════════════════════════
   PHASES — as 12 fases do plano (STUDY-001)

   A FASE é a fonte de verdade: ela define o conteúdo ativo,
   e o conteúdo ativo define a rotina. Nunca o contrário.

   Fonte única de verdade — não duplicar estes dados
   em nenhuma página. Importe deste módulo.
═══════════════════════════════════════════════ */

export const INATIVA = (faseAlvo) => [`Trilha inativa nesta fase — entra na Fase ${faseAlvo}. Não ocupa espaço na rotina diária.`];

export const P = [
  {
    "id": 1,
    "l": "Fase 1",
    "w": "Sem 1–13 · Meses 1–3",
    "h": 500,
    "t": "Fundamentos, Java Core e SQL",
    "cand": false,
    "cn": "",
    "java": [
      "Java 21 core: tipos, OO, herança, polimorfismo, interfaces, collections, exceptions, generics, records e streams",
      "Clean Code e SOLID: nomes, funções pequenas, separação de responsabilidades e refatoração guiada",
      "Prática diária: exercícios aplicados, leitura de código e reescrita de soluções próprias",
      "Entregável: 1 aplicação Java de console com regra de negócio real e 50 exercícios resolvidos"
    ],
    "dsa": [
      "Base: arrays, listas, strings, hashing, pilhas, filas e complexidade Big O",
      "Rotina fixa 3×/semana, 40min — do mês 1 ao mês 36, sem interrupção",
      "Método: resolver, explicar em voz alta, reimplementar sem consultar",
      "Meta da fase: 60 problemas fáceis resolvidos e explicados"
    ],
    "db": [
      "SQL relacional: SELECT, WHERE, JOIN, GROUP BY, HAVING, CTE, subquery e constraints",
      "Modelagem: entidades, PK/FK, cardinalidade, normalização até 3FN e DER",
      "PostgreSQL local: criação de schema, tipos, transações e seed controlado"
    ],
    "git": [
      "Git fundamental: working tree, staging, commit, branch, merge, remote, clone, fetch, pull e push",
      "GitHub: README, issues, Pull Request simples, Conventional Commits e histórico limpo",
      "Transversal: todo exercício e projeto vive em repositório desde o primeiro dia"
    ],
    "arquitetura": [
      "Noções iniciais: requisitos, restrições, responsabilidade única e acoplamento",
      "Ainda sem diagramas formais — o foco é escrever código organizado, não desenhar sistemas"
    ],
    "devops": [
      "Linux e terminal: shell, permissões, processos, variáveis de ambiente, logs, curl e troubleshooting básico",
      "Docker entra apenas na Fase 3 — aqui a base é operar o próprio ambiente com competência"
    ],
    "sec": [
      "Segurança como hábito desde o dia 1: secrets fora do repositório, .env ignorado, senhas com hash",
      "Princípios: CIA, autenticação × autorização, validação de entrada e princípio do menor privilégio"
    ],
    "pratica": [
      "Exercícios de Java: 50 problemas resolvidos cobrindo OO, collections, streams e exceptions",
      "Lab de SQL: modelar do zero um domínio pequeno, criar o schema e escrever 30 consultas",
      "Entregável da fase: uma aplicação de console com regra de negócio real, versionada no Git"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11. IA pode ser usada como ferramenta de apoio ao estudo, mas não é objeto de estudo ainda."],
    "aws": {
      "cert": "Sem AWS nesta fase",
      "exam": "",
      "topics": [
        "Cloud entra na Fase 3 (CLF-C02), depois da base de Java, SQL, Docker e CI/CD",
        "Estudar cloud antes de saber operar uma aplicação local gera conhecimento decorativo"
      ]
    },
    "math": [
      "Acoplada a DSA: lógica proposicional, conjuntos, relações e análise de complexidade",
      "Sem estudo matemático abstrato desconectado do código"
    ],
    "fin": [
      "Revisão financeira mensal de 1h — fora do cronograma técnico semanal",
      "Orçamento, reserva de emergência e controle de gastos"
    ]
  },
  {
    "id": 2,
    "l": "Fase 2",
    "w": "Sem 14–26 · Meses 4–6",
    "h": 500,
    "t": "Java avançado, Spring Boot, REST e JPA",
    "cand": false,
    "cn": "",
    "java": [
      "Java avançado: streams complexos, Optional, generics avançados, imutabilidade, enums ricos e tratamento de exceções por camada",
      "Spring Boot 3: REST APIs, controllers, services, DTOs, Bean Validation, exception handling global e OpenAPI",
      "Spring Data JPA: entidades, repositories, relacionamentos, paginação, specifications e transações",
      "Concorrência básica: threads, ExecutorService, CompletableFuture e noção de virtual threads"
    ],
    "dsa": [
      "Estruturas lineares avançadas: deque, listas ligadas, two pointers e sliding window",
      "Recursão e backtracking introdutório",
      "Meta da fase: 60 problemas médios-fáceis, com análise de complexidade escrita"
    ],
    "db": [
      "PostgreSQL aplicado: constraints, índices, migrations versionadas com Flyway e consultas JPQL/SQL",
      "JPA prático: N+1, fetch join, lazy/eager, cascade e pitfalls comuns de mapeamento"
    ],
    "git": [
      "Pull Requests: descrição estruturada, revisão, squash/rebase, resolução de conflitos e branch naming",
      "Proteção de branch e CODEOWNERS no repositório principal"
    ],
    "arquitetura": [
      "Arquitetura em camadas: controller, application/service, domain e infrastructure",
      "Primeiros ADRs: escolha de banco, estratégia de autenticação e padrão de erro da API"
    ],
    "devops": [
      "Introdução ao Docker no mês 6: Dockerfile da aplicação e container do PostgreSQL",
      "Preparação para CI/CD — o pipeline completo é o núcleo da Fase 3"
    ],
    "sec": [
      "Spring Security: autenticação JWT, filtros, roles, BCrypt e refresh token",
      "API segura por padrão: validação robusta, tratamento de erro sem vazamento e proteção contra injection"
    ],
    "pratica": [
      "Lab de Spring Boot: construir uma API REST completa do zero, com validação e tratamento de erro",
      "Exercícios de JPA: mapear relacionamentos, paginar, e reproduzir e corrigir um N+1 de propósito",
      "Entregável da fase: API REST autenticada com JWT, documentada em OpenAPI"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11."],
    "aws": {
      "cert": "Sem AWS nesta fase",
      "exam": "",
      "topics": [
        "Foco integral em Spring, REST e JPA — a base que sustenta qualquer arquitetura cloud posterior"
      ]
    },
    "math": [
      "Acoplada a DSA: indução, contagem, probabilidade básica e análise amortizada"
    ],
    "fin": [
      "Revisão financeira mensal de 1h — orçamento e acompanhamento de metas"
    ]
  },
  {
    "id": 3,
    "l": "Fase 3",
    "w": "Sem 27–39 · Meses 7–9",
    "h": 500,
    "t": "Testes, Docker e CI/CD",
    "cand": false,
    "cn": "",
    "java": [
      "Testes profissionais: JUnit 5, Mockito, AssertJ, testes de comportamento e não de implementação",
      "Testes de integração com Testcontainers: banco real em container, isolamento e dados de teste",
      "Cobertura por regra de negócio crítica — cobertura decorativa não conta"
    ],
    "dsa": [
      "Árvores: binária, BST, travessias, altura, balanceamento e recursão sobre árvores",
      "Meta da fase: 60 problemas médios, com foco em árvores e recursão"
    ],
    "db": [
      "Migrations em pipeline: versionamento, rollback, backfill e compatibilidade",
      "Dados de teste: fixtures, seeds determinísticos e limpeza entre testes"
    ],
    "git": [
      "Git no fluxo de CI: trunk-based ou GitFlow simplificado, tags, releases e changelog",
      "Proteção contra secrets no histórico e hooks de pré-commit"
    ],
    "arquitetura": [
      "Testabilidade como decisão arquitetural: injeção de dependência, fronteiras e inversão",
      "ADR sobre estratégia de testes e pirâmide adotada"
    ],
    "devops": [
      "Docker: Dockerfile multi-stage, imagem enxuta, .dockerignore e boas práticas de camada",
      "Docker Compose real: app + banco + cache, healthchecks, logs e variáveis por ambiente",
      "CI/CD (ANTECIPADO — antes era mês 22): GitHub Actions com build, testes, lint e validação de PR",
      "Pipeline verde obrigatório antes de qualquer merge — a partir daqui isso é regra permanente"
    ],
    "sec": [
      "Segurança no pipeline (início do módulo forte, mês 8): SAST, SCA e verificação de dependências",
      "Gestão de secrets em CI: variáveis protegidas, nunca em código ou log"
    ],
    "pratica": [
      "Exercícios de teste: escrever a suíte de uma classe de serviço já pronta, cobrindo os casos de borda",
      "Lab de Docker: containerizar uma aplicação, subir Compose com banco e reduzir a imagem final",
      "Lab de CI: montar um pipeline do zero com build, teste, lint e gate de qualidade",
      "Entregável da fase: repositório que qualquer pessoa sobe com um comando e cujo pipeline fecha verde"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11."],
    "aws": {
      "cert": "CLF-C02 — AWS Cloud Practitioner",
      "exam": "Prova no mês 8",
      "topics": [
        "Cloud concepts, regiões, AZs, modelos IaaS/PaaS/SaaS e responsabilidade compartilhada",
        "IAM, S3, EC2, RDS, VPC e CloudWatch em visão geral",
        "Billing, budgets, Free Tier e noção de custo",
        "Preparação enxuta: ~30h dentro da fase, sem deslocar o foco de testes e CI/CD"
      ]
    },
    "math": [
      "Acoplada a DSA: complexidade de algoritmos recursivos e teorema mestre em nível prático"
    ],
    "fin": [
      "Revisão financeira mensal de 1h — provisionar custo de certificação e ferramentas"
    ]
  },
  {
    "id": 4,
    "l": "Fase 4",
    "w": "Sem 40–52 · Meses 10–12",
    "h": 500,
    "t": "Segurança aplicada e qualidade de código",
    "cand": false,
    "cn": "",
    "java": [
      "Refino de API: versionamento, idempotência, paginação, filtros, tratamento de erro consistente e contratos estáveis",
      "Qualidade: code smells, refatoração sistemática, complexidade ciclomática e revisão de código própria"
    ],
    "dsa": [
      "Grafos: representação, BFS, DFS, caminhos e detecção de ciclo",
      "Meta da fase: 60 problemas, com foco em grafos e busca"
    ],
    "db": [
      "Segurança de dados: least privilege, roles, criptografia em repouso e em trânsito, mascaramento e LGPD aplicada",
      "Auditoria: histórico de alterações e rastreabilidade"
    ],
    "git": [
      "Governança: CODEOWNERS, revisão obrigatória, assinatura de commits e política de branch",
      "Varredura de segredos no histórico e rotação de credenciais expostas"
    ],
    "arquitetura": [
      "Segurança desde o design: threat modeling leve (STRIDE), superfícies de ataque e fronteiras de confiança",
      "ADR de autenticação, autorização e gestão de segredos"
    ],
    "devops": [
      "Pipeline endurecido: SAST, SCA, verificação de imagem, política de falha e gate de qualidade",
      "Ambientes separados com configuração por ambiente e nenhum segredo no repositório"
    ],
    "sec": [
      "MÓDULO FORTE (ANTECIPADO — antes era mês 25): OWASP Top 10 aplicado endpoint a endpoint",
      "OAuth2 e OpenID Connect: fluxos, escopos, tokens, expiração e revogação",
      "Proteções: rate limiting, CORS correto, headers de segurança, CSRF e validação em profundidade",
      "Checklist de segurança obrigatório por release — a partir daqui, permanente e transversal"
    ],
    "pratica": [
      "Lab de segurança: encontrar e corrigir vulnerabilidades plantadas em uma aplicação de treino",
      "Exercícios de OWASP: reproduzir e mitigar injection, XSS, broken auth e exposição de dados",
      "Entregável da fase: checklist OWASP aplicado a uma API própria, com correções documentadas"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11."],
    "aws": {
      "cert": "Sem prova nesta fase",
      "exam": "",
      "topics": [
        "Aplicação prática de IAM e gestão de segredos aprendida na CLF-C02",
        "Sem nova certificação — a próxima é a SAA-C03 na Fase 9"
      ]
    },
    "math": [
      "Acoplada a DSA: teoria dos grafos aplicada e noções de criptografia (hash, chave pública)"
    ],
    "fin": [
      "Revisão financeira mensal de 1h"
    ]
  },
  {
    "id": 5,
    "l": "Fase 5",
    "w": "Sem 53–65 · Meses 13–15",
    "h": 500,
    "t": "Performance, banco avançado e Redis",
    "cand": false,
    "cn": "",
    "java": [
      "Performance de aplicação: profiling, alocação, garbage collection e leitura de métricas da JVM",
      "Otimização orientada a medição — nunca por intuição"
    ],
    "dsa": [
      "Heaps, filas de prioridade, ordenação e busca binária aplicada",
      "Meta da fase: 60 problemas, com foco em otimização de solução"
    ],
    "db": [
      "PostgreSQL profundo: EXPLAIN ANALYZE, planos de execução, índices compostos, parciais e cobertura",
      "Transações: níveis de isolamento, deadlock, lock contention e MVCC",
      "Modelagem para leitura: desnormalização controlada, views materializadas e particionamento"
    ],
    "git": [
      "Bisect para caça de regressão de performance e histórico como ferramenta de diagnóstico"
    ],
    "arquitetura": [
      "Estratégias de cache: cache-aside, write-through, invalidação e consistência eventual",
      "ADR de cache com trade-off explícito entre frescor do dado e latência"
    ],
    "devops": [
      "Testes de carga: k6 ou JMeter, definição de baseline e detecção de regressão no pipeline"
    ],
    "sec": [
      "Transversal: rate limiting sob carga, proteção contra abuso e negação de serviço por consulta cara"
    ],
    "pratica": [
      "Lab de performance: partir de uma query lenta, ler o EXPLAIN, criar o índice e medir o ganho",
      "Exercícios de cache: implementar cache-aside com Redis e provocar um problema de invalidação",
      "Entregável da fase: relatório antes/depois com números reais de latência e throughput"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11."],
    "aws": {
      "cert": "Sem prova nesta fase",
      "exam": "",
      "topics": [
        "Noções de ElastiCache e RDS aplicadas ao que se estuda de cache e banco",
        "Estudo cloud permanece leve até a Fase 9"
      ]
    },
    "math": [
      "Acoplada a banco e performance: estatística descritiva, percentis (p50/p95/p99) e leitura de distribuição de latência"
    ],
    "fin": [
      "Revisão financeira mensal de 1h"
    ]
  },
  {
    "id": 6,
    "l": "Fase 6",
    "w": "Sem 66–78 · Meses 16–18",
    "h": 500,
    "t": "Observabilidade e operação em produção",
    "cand": false,
    "cn": "",
    "java": [
      "Instrumentação da aplicação: logs estruturados, correlação por trace id, métricas de negócio e de sistema",
      "Troubleshooting de produção: leitura de heap dump, thread dump e análise de incidente"
    ],
    "dsa": [
      "Programação dinâmica introdutória e otimização de subproblemas",
      "Meta da fase: 60 problemas, com foco em DP"
    ],
    "db": [
      "Observabilidade de banco: slow query log, métricas de conexão, pool e saturação"
    ],
    "git": [
      "Runbook e postmortem versionados junto ao código"
    ],
    "arquitetura": [
      "Resiliência: timeout, retry com backoff, circuit breaker, bulkhead e degradação graciosa",
      "Health check, readiness, liveness e ADR de política de falha"
    ],
    "devops": [
      "Stack de observabilidade: OpenTelemetry, Prometheus, Grafana e tracing distribuído",
      "SLO, SLI e error budget aplicados ao lab de observabilidade da fase",
      "Alertas úteis: baseados em sintoma do usuário, não em métrica de máquina"
    ],
    "sec": [
      "Transversal: logs sem dados sensíveis, auditoria de acesso e detecção de anomalia"
    ],
    "pratica": [
      "Lab de observabilidade: instrumentar uma aplicação com logs estruturados, métricas e tracing",
      "Exercício de incidente: simular uma falha, diagnosticar pelos sinais e escrever o postmortem",
      "Entregável da fase: dashboard funcional, alerta útil e runbook de um cenário de falha"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11."],
    "aws": {
      "cert": "Sem prova nesta fase",
      "exam": "",
      "topics": [
        "CloudWatch, métricas e logs aplicados aos conceitos de observabilidade estudados",
        "Base conceitual que a SAA-C03 (Fase 9) vai cobrar"
      ]
    },
    "math": [
      "Estatística aplicada a operação: média × mediana, cauda longa, taxa de erro e amostragem de tracing"
    ],
    "fin": [
      "Revisão financeira mensal de 1h"
    ]
  },
  {
    "id": 7,
    "l": "Fase 7",
    "w": "Sem 79–91 · Meses 19–21",
    "h": 500,
    "t": "Arquitetura de software e DDD",
    "cand": false,
    "cn": "",
    "java": [
      "Refatoração para arquitetura hexagonal: ports, adapters, domínio isolado de framework",
      "Modelagem rica: entidades, value objects, agregados, invariantes e serviços de domínio"
    ],
    "dsa": [
      "Revisão consolidada de todas as estruturas + problemas combinados",
      "Meta da fase: 60 problemas mistos em formato de entrevista cronometrada"
    ],
    "db": [
      "Persistência orientada ao domínio: mapeamento de agregado, repositório como contrato e evitar vazamento de ORM"
    ],
    "git": [
      "Organização de repositório por bounded context e estratégia de módulos"
    ],
    "arquitetura": [
      "C4 Model: contexto, containers, componentes e código",
      "DDD estratégico: bounded context, linguagem ubíqua, context map e anticorruption layer",
      "ADRs e RFCs completos: contexto, alternativas, trade-offs, riscos, custo e critério de reversão",
      "Padrões: CQRS, Saga e quando NÃO usá-los"
    ],
    "devops": [
      "Pipeline por módulo e estratégia de build para projeto modular"
    ],
    "sec": [
      "Transversal: fronteiras de confiança entre contextos e autorização no domínio"
    ],
    "pratica": [
      "Exercício de refatoração: converter uma aplicação em camadas para arquitetura hexagonal",
      "Lab de DDD: modelar um domínio com agregados, invariantes e linguagem ubíqua",
      "Entregável da fase: 5 ADRs completos e um diagrama C4 de um sistema real"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11."],
    "aws": {
      "cert": "Sem prova nesta fase",
      "exam": "",
      "topics": [
        "Padrões arquiteturais que a SAA-C03 cobra começam a fazer sentido aqui",
        "Leitura de apoio: Fundamentals of Software Architecture e DDD (ver BIBLIOGRAFIA.md)"
      ]
    },
    "math": [
      "Modelagem formal leve: invariantes, pré e pós-condições, e lógica aplicada a regra de negócio"
    ],
    "fin": [
      "Revisão financeira mensal de 1h"
    ]
  },
  {
    "id": 8,
    "l": "Fase 8",
    "w": "Sem 92–104 · Meses 22–24",
    "h": 500,
    "t": "Sistemas distribuídos, mensageria e Kafka",
    "cand": false,
    "cn": "",
    "java": [
      "Spring com Kafka: producer, consumer, serialização, tratamento de erro e DLQ",
      "Idempotência e deduplicação em consumidores"
    ],
    "dsa": [
      "Algoritmos distribuídos em nível conceitual: hashing consistente, quorum e particionamento",
      "Meta da fase: 60 problemas mistos mantendo o ritmo"
    ],
    "db": [
      "Consistência em sistemas distribuídos: transações distribuídas, outbox e read models",
      "NoSQL pragmático: quando MongoDB ou DynamoDB resolvem melhor que relacional"
    ],
    "git": [
      "Versionamento de contratos: schema registry, AsyncAPI e compatibilidade de evento"
    ],
    "arquitetura": [
      "STUDY-008: mensageria integrada à arquitetura distribuída — Kafka é meio, não fim",
      "Arquitetura orientada a eventos: event notification, event-carried state transfer e event sourcing",
      "Padrões: Outbox, Inbox, Saga coreografada × orquestrada, CQRS aplicado",
      "Teorema CAP na prática, consistência eventual e trade-offs reais de microsserviços",
      "Quando NÃO usar microsserviços — critério explícito de decisão"
    ],
    "devops": [
      "Kafka local em Compose, tópicos, partições, consumer groups e observabilidade de lag"
    ],
    "sec": [
      "Transversal: autenticação entre serviços, mTLS e proteção de tópicos"
    ],
    "pratica": [
      "Lab de Kafka: producer, consumer, consumer group e reprocessamento a partir de uma DLQ",
      "Exercício de idempotência: provocar entrega duplicada e garantir efeito único",
      "Entregável da fase: fluxo assíncrono com outbox implementado e documentado em AsyncAPI"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11."],
    "aws": {
      "cert": "Preparação SAA-C03 inicia",
      "exam": "Estudo dirigido a partir do mês 24",
      "topics": [
        "SQS, SNS, EventBridge e Kinesis comparados ao Kafka estudado",
        "Início da preparação estruturada para a prova da Fase 9"
      ]
    },
    "math": [
      "Probabilidade aplicada: falha independente, disponibilidade composta e cálculo de SLA"
    ],
    "fin": [
      "Revisão financeira mensal de 1h"
    ]
  },
  {
    "id": 9,
    "l": "Fase 9",
    "w": "Sem 105–117 · Meses 25–27",
    "h": 500,
    "t": "Cloud AWS, IaC e Kubernetes",
    "cand": false,
    "cn": "",
    "java": [
      "Aplicação cloud-native: configuração externalizada, 12-factor, graceful shutdown e readiness"
    ],
    "dsa": [
      "Manutenção do ritmo: 3×/semana, problemas mistos cronometrados",
      "Meta da fase: 60 problemas em formato de entrevista"
    ],
    "db": [
      "Banco gerenciado: RDS, backup, restore, réplica de leitura, failover e custo por operação"
    ],
    "git": [
      "GitOps: infraestrutura versionada, PR como mecanismo de mudança de ambiente"
    ],
    "arquitetura": [
      "Arquitetura cloud: multi-AZ, escalabilidade horizontal, stateless e desenho para falha",
      "Well-Architected Framework: os cinco pilares aplicados ao lab de cloud da fase"
    ],
    "devops": [
      "AWS prático: VPC, EC2, ECS/EKS, ALB, S3, RDS, IAM e CloudWatch",
      "Terraform: providers, state, módulos, plan/apply e infraestrutura reproduzível",
      "Kubernetes de uso: pod, deployment, service, ingress, configmap, secret e HPA",
      "Deploy real de uma aplicação em ambiente cloud com pipeline completo"
    ],
    "sec": [
      "Segurança em cloud: IAM com menor privilégio, security groups, KMS e rotação de segredos"
    ],
    "pratica": [
      "Lab de AWS: provisionar VPC, banco e aplicação manualmente, depois refazer tudo em Terraform",
      "Lab de Kubernetes: deployment, service, ingress, configmap e rollout com rollback",
      "Entregável da fase: ambiente reproduzível por IaC, com custo mensal medido e documentado"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11."],
    "aws": {
      "cert": "SAA-C03 — Solutions Architect Associate",
      "exam": "Prova no mês 26",
      "topics": [
        "Desenho de arquiteturas resilientes, performáticas, seguras e com custo otimizado",
        "Compute, storage, rede, banco, identidade e monitoramento em profundidade",
        "Segunda e última certificação obrigatória do plano (STUDY-010)",
        "SOA-C03, DOP-C02 e DVA-C02 foram removidas — só entram com demanda profissional concreta"
      ]
    },
    "math": [
      "Modelagem de custo e capacidade: projeção de carga, dimensionamento e ponto de saturação"
    ],
    "fin": [
      "Revisão financeira mensal de 1h — controlar custo real de ambiente cloud pessoal"
    ]
  },
  {
    "id": 10,
    "l": "Fase 10",
    "w": "Sem 118–130 · Meses 28–30",
    "h": 500,
    "t": "System Design e escalabilidade",
    "cand": false,
    "cn": "",
    "java": [
      "Aplicação dos padrões em escala: sharding lógico, particionamento e limites de throughput"
    ],
    "dsa": [
      "Problemas difíceis e otimização sob restrição de tempo e memória",
      "Meta da fase: 60 problemas médios/difíceis + explicação verbal da solução"
    ],
    "db": [
      "Escala de dados: réplica, sharding, CDC, data pipeline e escolha entre OLTP e OLAP"
    ],
    "git": [
      "Documentação de design versionada: RFC como artefato de discussão técnica"
    ],
    "arquitetura": [
      "System Design praticado: 1 desenho completo por semana, cronometrado em 45 minutos",
      "Casos clássicos: encurtador de URL, feed, chat, rate limiter, sistema de notificação e busca",
      "Método: requisitos → estimativa de capacidade → API → modelo de dados → desenho → gargalos → trade-offs",
      "Referência: System Design Interview vol. 1 e 2 (ver BIBLIOGRAFIA.md)"
    ],
    "devops": [
      "Estratégias de deploy em escala: blue-green, canary, feature flag e rollback automatizado"
    ],
    "sec": [
      "Transversal: segurança em escala — WAF, DDoS, isolamento de tenant e limites por cliente"
    ],
    "pratica": [
      "System Design: 12 desenhos completos na fase, um por semana, cronometrados em 45 minutos",
      "Exercício de gargalo: receber um sistema saturado, identificar o limite e propor a correção",
      "Entregável da fase: 12 documentos de design com estimativa de capacidade e trade-offs"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11."],
    "aws": {
      "cert": "Sem prova nesta fase",
      "exam": "",
      "topics": [
        "Serviços AWS usados como vocabulário de system design, não como nova certificação"
      ]
    },
    "math": [
      "Estimativa de capacidade: back-of-the-envelope, QPS, storage, banda e crescimento composto"
    ],
    "fin": [
      "Revisão financeira mensal de 1h"
    ]
  },
  {
    "id": 11,
    "l": "Fase 11",
    "w": "Sem 131–143 · Meses 31–33",
    "h": 500,
    "t": "Frontend, Python e IA aplicada",
    "cand": false,
    "cn": "",
    "java": [
      "Manutenção: o backend continua sendo evoluído, mas cede espaço de rotina para as trilhas complementares desta fase"
    ],
    "dsa": [
      "Manutenção do ritmo: 3×/semana, sem interrupção",
      "Meta da fase: 60 problemas com foco em padrões de entrevista"
    ],
    "db": [
      "Banco vetorial aplicado a RAG: embeddings, similaridade e índice vetorial (pgvector)"
    ],
    "git": [
      "Monorepo ou repositórios separados para front e back — decisão documentada em ADR"
    ],
    "arquitetura": [
      "Arquitetura de aplicação com IA: quando LLM resolve e quando regra determinística resolve melhor",
      "Custo, latência e falha de modelo como restrições arquiteturais"
    ],
    "devops": [
      "Pipeline para múltiplos artefatos: API Java, app frontend e serviço Python"
    ],
    "sec": [
      "Segurança de aplicação com IA: prompt injection, vazamento de dado em contexto e sanitização de saída",
      "Segurança frontend: XSS, CSP, armazenamento de token e CORS"
    ],
    "pratica": [
      "Lab de frontend: uma interface React/TypeScript consumindo uma API própria, com estados de erro",
      "Lab de Python: uma API FastAPI tipada com pytest e um script de automação de dados",
      "Lab de IA: um RAG pequeno com avaliação objetiva, custo por requisição e análise de erro",
      "Entregável da fase: três labs independentes, cada um com README e critério de sucesso"
    ],
    "frontend": [
      "TRILHA ATIVADA (STUDY-007 — antes ocupava 18% desde o dia 1)",
      "React e TypeScript: componentes, estado, tipagem de contrato, formulários e validação",
      "Consumo de API: loading, empty, error states, cache de requisição e otimismo de UI",
      "Next.js: rotas, renderização e build; acessibilidade e responsividade mínimas",
      "Testes de frontend e deploy do app"
    ],
    "py": [
      "TRILHA ATIVADA (STUDY-007 — antes ocupava 18% desde o dia 1)",
      "Python moderno: tipagem, estrutura de projeto, venv/pyproject e pytest",
      "FastAPI: rotas, Pydantic, injeção de dependência e contrato HTTP",
      "Automação e integração de dados aplicada ao próprio projeto"
    ],
    "ia": [
      "TRILHA ATIVADA (STUDY-007 — antes aparecia todo dia desde o dia 1)",
      "LLMs aplicados: prompt estruturado, function calling, limites e alucinação",
      "RAG completo: chunking, embeddings, recuperação, reranking e citação de fonte",
      "Avaliação obrigatória: métrica objetiva, conjunto de teste, custo por requisição e análise de erro",
      "Regra mantida: prompt isolado não é entrega"
    ],
    "aws": {
      "cert": "Sem prova nesta fase",
      "exam": "",
      "topics": [
        "Bedrock e serviços gerenciados de IA em nível de conhecimento, sem certificação adicional"
      ]
    },
    "math": [
      "ATIVADA de forma aplicada: álgebra linear (vetores, produto interno, similaridade de cosseno)",
      "Probabilidade e métricas de avaliação: precisão, recall, F1 e matriz de confusão",
      "Sem matemática abstrata desconectada — sempre a serviço de um modelo em uso"
    ],
    "fin": [
      "Revisão financeira mensal de 1h"
    ]
  },
  {
    "id": 12,
    "l": "Fase 12",
    "w": "Sem 144–156 · Meses 34–36",
    "h": 500,
    "t": "Portfólio, entrevistas e senioridade",
    "cand": true,
    "cn": "Checkpoint final: portfólio sênior, entrevistas e prontidão profissional",
    "java": [
      "Revisão profunda de Java e Spring em formato de entrevista técnica",
      "Explicação oral de decisões, trade-offs e incidentes com estrutura clara"
    ],
    "dsa": [
      "Reta final: simulados cronometrados, problemas em voz alta e comunicação do raciocínio",
      "Fecho do ciclo: ~720 problemas resolvidos ao longo dos 36 meses"
    ],
    "db": [
      "Revisão de modelagem, performance e decisões de dados para entrevista"
    ],
    "git": [
      "Histórico do portfólio auditado: commits limpos, PRs revisáveis, releases e documentação"
    ],
    "arquitetura": [
      "Defesa de arquitetura: apresentar os labs do portfólio ponta a ponta, justificando cada decisão",
      "Liderança técnica: code review, mentoria, escrita de RFC e condução de discussão técnica"
    ],
    "devops": [
      "Revisão de operação: pipeline, deploy, rollback, incidente e postmortem"
    ],
    "sec": [
      "Revisão de segurança para entrevista: OWASP, autenticação, autorização e gestão de segredos"
    ],
    "pratica": [
      "Simulados: entrevistas técnicas cronometradas de Java, SQL, arquitetura e system design",
      "Revisão dirigida: refazer, sem consultar, os exercícios que mais custaram ao longo das 11 fases",
      "Entregável da fase: portfólio com os melhores labs publicados, cada um com README em inglês"
    ],
    "frontend": [
      "Manutenção do app e apresentação da integração full stack no portfólio"
    ],
    "py": [
      "Manutenção do serviço Python e da feature de IA no portfólio"
    ],
    "ia": [
      "Case study de IA aplicada com problema, métrica, custo e limitação documentados"
    ],
    "aws": {
      "cert": "Well-Architected Review do próprio projeto",
      "exam": "Sem nova prova",
      "topics": [
        "Revisão do lab de cloud contra os cinco pilares do Well-Architected",
        "Certificações adicionais (DVA, SOA, DOP) apenas se houver exigência concreta de vaga"
      ]
    },
    "math": [
      "Revisão de estimativa de capacidade e complexidade para entrevistas de system design"
    ],
    "fin": [
      "Revisão financeira mensal de 1h — planejamento de transição e negociação salarial"
    ]
  }
];

/* ─── Inglês por fase — transversal aos 36 meses ─── */

export const englishByPhase = {
  1: ["Leitura técnica diária: documentação oficial de Java, PostgreSQL e Git sem tradução automática", "Vocabulário de debugging: error, failure, stack trace, root cause, edge case", "Commits em inglês no imperativo desde o primeiro repositório", "Meta: compreender documentação básica e mensagens de erro"],
  2: ["Escrita técnica: README, issues e descrição de endpoints", "Conventional Commits e descrição estruturada de Pull Request", "Vocabulário de API: endpoint, payload, request, response, validation, authentication", "Meta: documentar o próprio projeto em inglês sem tradutor"],
  3: ["Vocabulário de testes e CI/CD: assertion, mock, fixture, coverage, pipeline, build, artifact", "Leitura da documentação do Docker e do GitHub Actions no original", "Meta: seguir tutoriais e docs de ferramentas inteiramente em inglês"],
  4: ["Vocabulário de segurança: vulnerability, threat, exploit, mitigation, least privilege, hardening", "Leitura do OWASP Top 10 no original", "Meta: entender relatório de segurança e advisory de dependência"],
  5: ["Vocabulário de performance: latency, throughput, bottleneck, profiling, cache hit ratio, contention", "Leitura de documentação de tuning do PostgreSQL e da JVM", "Meta: interpretar benchmark e relatório de performance em inglês"],
  6: ["Vocabulário de operação: incident, outage, mitigation, rollback, postmortem, on-call, SLO", "Escrita do primeiro postmortem em inglês", "Speaking: explicar um incidente em 3 minutos", "Meta: comunicar problema de produção em inglês"],
  7: ["Escrita de ADRs e RFCs em inglês: context, decision, alternatives, consequences, trade-offs", "Vocabulário de arquitetura: coupling, cohesion, boundary, aggregate, adapter, port", "Speaking: explicar uma decisão arquitetural em 5 minutos", "Meta: produzir documentação de decisão em nível profissional"],
  8: ["Vocabulário de sistemas distribuídos: eventual consistency, idempotency, partition, replication, backpressure", "Leitura de documentação do Kafka no original", "Meta: acompanhar discussão técnica sobre sistemas distribuídos"],
  9: ["Inglês para certificação: leitura de questões da SAA-C03, whitepapers e documentação AWS", "Vocabulário de cloud: provisioning, scaling, failover, availability zone, cost optimization", "Meta: fazer a prova em inglês com conforto"],
  10: ["Inglês para system design: conduzir a explicação de um desenho completo em inglês", "Estrutura: requirements → capacity → API → data model → design → bottlenecks → trade-offs", "Meta: apresentar system design de 45 minutos em inglês"],
  11: ["Vocabulário de IA e frontend: embedding, retrieval, inference, hallucination, component, state, hydration", "Leitura de papers introdutórios e documentação de modelos", "Meta: acompanhar material técnico de IA no original"],
  12: ["Mock interviews completas em inglês: apresentação, projeto, system design, debugging e comportamental", "Respostas comportamentais com STAR aplicadas a entregas e incidentes reais", "Project pitch de 10 minutos sobre o lab mais complexo do portfólio", "Meta final: inglês técnico funcional B2 para trabalho remoto e internacional"]
};
P.forEach(p => { p.ingles = englishByPhase[p.id] || []; });

/* ═══════════════════════════════════════════════
   HELPERS — consulta da fase ativa (STUDY-020)

   A rotina não sabe o que estudar: ela pergunta à fase.
   Estes helpers são a única forma de descobrir quais
   trilhas estão ativas e qual o conteúdo de cada uma.
═══════════════════════════════════════════════ */

/** Chaves de trilha usadas nas páginas → chaves usadas nos dados das fases. */
export const ALIAS_TRILHA = {
  architecture: 'arquitetura',
  database: 'db',
  english: 'ingles',
  seguranca: 'sec',
  financeiro: 'fin',
  matematica: 'math',
  python: 'py'
};

/** Normaliza uma chave de trilha para a chave usada em P. */
export const chaveTrilha = (k) => ALIAS_TRILHA[k] || k;

/** Retorna a fase pelo id (1–12), ou undefined. */
export const faseporId = (id) => P.find((p) => p.id === Number(id));

/** Conteúdo de uma trilha dentro de uma fase. AWS tem formato próprio. */
export function conteudoDaFase(fase, trilha) {
  if (!fase) return [];
  const k = chaveTrilha(trilha);
  if (k === 'aws') return fase.aws?.topics || [];
  return Array.isArray(fase[k]) ? fase[k] : [];
}

/**
 * Uma trilha está ativa na fase quando seu conteúdo não é
 * o marcador de inatividade gerado por INATIVA().
 */
export function trilhaAtiva(fase, trilha) {
  if (!fase) return false;
  const k = chaveTrilha(trilha);

  // AWS não usa o marcador INATIVA: o sinal é o texto do campo `cert`,
  // que diz explicitamente quando não há cloud na fase.
  if (k === 'aws') return !/^Sem AWS|^Sem prova/.test(fase.aws?.cert || '');

  const itens = conteudoDaFase(fase, k);
  if (!itens.length) return false;
  return !/^Trilha inativa nesta fase/.test(itens[0]);
}

/** Lista das chaves de trilha ativas em uma fase. */
export function trilhasAtivas(fase) {
  if (!fase) return [];
  return ['java', 'dsa', 'db', 'git', 'arquitetura', 'devops', 'sec', 'pratica',
    'frontend', 'py', 'ia', 'math', 'fin', 'ingles', 'aws']
    .filter((k) => trilhaAtiva(fase, k));
}

/** Em que fase uma trilha é ativada pela primeira vez. */
export function faseDeEntrada(trilha) {
  const f = P.find((p) => trilhaAtiva(p, trilha));
  return f ? f.id : null;
}
