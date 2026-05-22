const PC=["#185FA5","#0F6E56","#3B6D11","#854F0B","#533AB7","#8B3A62","#306998","#99353A"];
const PBG=["#0d1525","#0d2e24","#162210","#2e2210","#1a1735","#2e1525","#152535","#2e1218"];
const CK={java:{t:"#0F6E56",b:"#0d2e24"},blog:{t:"#7C6AE8",b:"#1e1a3a"},aws:{t:"#EF9F27",b:"#2e2210"},py:{t:"#4B8BBE",b:"#152535"},devops:{t:"#D47FAC",b:"#2e1525"},math:{t:"#52B788",b:"#132e20"},ia:{t:"#7F77DD",b:"#1a1735"},fin:{t:"#F0997B",b:"#2e1a12"},n:{t:"#9a9890",b:"#1c1c20"}};

const tracks=[
  {key:"java",label:"Java + SW Eng",h:"2,5h+1h"},
  {key:"blog",label:"Blog Pessoal",h:"2h+1h"},
  {key:"py",label:"Python",h:"1h"},
  {key:"devops",label:"DevOps",h:"1,5h"},
  {key:"aws",label:"AWS Certs",h:"1,5h"},
  {key:"math",label:"Matemática",h:"1h"},
  {key:"ia",label:"Trilha IA",h:"1,5h"},
  {key:"fin",label:"Financeiro",h:"1h"}
];

const metrics=[
  {v:"16h",l:"Horas/dia"},{v:"112h",l:"Horas/semana"},{v:"64",l:"Semanas"},
  {v:"7.168h",l:"Total horas"},{v:"8",l:"Fases"},{v:"8",l:"Trilhas"},
  {v:"3+",l:"Certs AWS"},{v:"9",l:"Livros IA"}
];

const daily=[
  {time:"05:30–06:00",dur:"30min",block:"Revisão + Obsidian SR + planejamento",k:"n",d:"Spaced repetition no Obsidian (plugin SR, 15min): flashcards de erros, vocab inglês, APIs. Meta do dia. Revisar commit de ontem."},
  {time:"06:00–06:30",dur:"30min",block:"Inglês técnico diário",k:"n",d:"Commits em inglês, docs oficiais, 5 termos novos como flashcards no Obsidian. 1x/sem: mock talk 5-7min gravado."},
  {time:"06:30–09:00",dur:"2,5h",block:"Estudo core — Java + SW Engineering",k:"java",d:"Novos conceitos da fase. Debug-first: 20-30min sozinho. Método Feynman ao final."},
  {time:"09:00–11:00",dur:"2h",block:"Blog pessoal — implementação",k:"blog",d:"Feature do blog da fase. 1 commit útil mínimo. Pair programming com IA."},
  {time:"11:00–12:00",dur:"1h",block:"Python — estudo dedicado",k:"py",d:"Progressão: básico → dados → FastAPI → ML → PyTorch → agentes."},
  {time:"12:00–13:00",dur:"1h ⏸",block:"Almoço — pausa obrigatória",k:"n",d:"Descanso real. Sem telas. Caminhada. Não negociável."},
  {time:"13:00–14:00",dur:"1h",block:"Matemática para programação",k:"math",d:"Progressão: lógica → álgebra linear → probabilidade → cálculo → otimização."},
  {time:"14:00–15:30",dur:"1,5h",block:"DevOps — estudo dedicado",k:"devops",d:"Progressão: Linux → Docker → CI/CD → K8s → Terraform → observabilidade."},
  {time:"15:30–17:00",dur:"1,5h",block:"AWS Certification",k:"aws",d:"CLF-C02 → SAA-C03 → DVA-C02. Labs no Free Tier. Simulados antes da prova."},
  {time:"17:00–18:00",dur:"1h",block:"Blog — testes + docs + ADRs",k:"blog",d:"Testes unit/integração. README. ADR. Swagger. Push no GitHub."},
  {time:"18:00–19:00",dur:"1h",block:"Projeto da fase",k:"java",d:"Projeto obrigatório separado do blog. Artefato para entrevistas."},
  {time:"19:00–21:00",dur:"2h ⏸",block:"Treino + refeição — pausa",k:"n",d:"Treino físico (musculação, corrida, funcional) + jantar. Recuperação para o bloco noturno."},
  {time:"21:00–22:30",dur:"1,5h",block:"Trilha IA — livros sequenciais",k:"ia",d:"9 livros na ordem. 1 artefato por livro. Build LLM com código."},
  {time:"22:30–23:30",dur:"1h",block:"Trilha Financeira",k:"fin",d:"31 módulos. 70% prática / 20% teoria / 10% revisão."},
  {time:"23:30–00:00",dur:"30min",block:"IA no workflow + revisão do dia",k:"ia",d:"Copilot/Cursor/Claude como par. Registrar: o que fiz, o que travou, amanhã..."}
];

const weekly=[
  {day:"Segunda",focus:"Novos conceitos + feature nova",d:"Bloco técnico pesado. Doc oficial. Iniciar feature do blog."},
  {day:"Terça",focus:"Implementação profunda",d:"Continuar feature. Zero distrações. Código funcional."},
  {day:"Quarta",focus:"Testes + code review",d:"Testes unit/integration. Code review reverso em PRs open source."},
  {day:"Quinta",focus:"Integração + novos tópicos",d:"Conectar módulos. Avançar projeto da fase. Labs AWS."},
  {day:"Sexta",focus:"Portfólio + ADRs + post",d:"Commits, README, ADR. Rascunho de post técnico."},
  {day:"Sábado",focus:"Build in public + labs",d:"Publicar progresso. Labs AWS. Simulado parcial."},
  {day:"Domingo",focus:"Revisão + Obsidian + plan.",d:"Spaced repetition no Obsidian. Revisar travamentos. Planejar semana."}
];

const P=[
{id:1,l:"Fase 1",w:"Sem 1–8",h:896,t:"Base técnica + fundamentos",cand:false,cn:"",
java:["Java 21 Core: tipos, OOP, herança, polimorfismo, interfaces, generics, records, sealed classes","Clean Code, SOLID, Git convencional em inglês desde o dia 1","Estruturas de dados: Big O, arrays, listas, hashing, árvores BST, heaps","SQL e PostgreSQL: modelagem relacional, JOINs, CTEs, índices B-tree, transações ACID","Spring Boot 3: primeiros endpoints REST, JPA/Hibernate, Flyway migrations","Testes unitários: JUnit 5, Mockito (mocks, stubs, spies), cobertura >80%","MongoDB básico: CRUD com Spring Data MongoDB","Fundamentos: CPU, memória, SO (processos, threads), redes TCP/IP, HTTP, TLS"],
blog:["Repositório público: README inglês, Conventional Commits, estrutura modular","Modelagem banco: users, posts, categories, tags, comments (Flyway)","Auth: JWT + refresh token rotation + Spring Security 6 + BCrypt","Posts CRUD: criar, editar, publicar, rascunho, markdown, slug, SEO fields","Categorias + tags: CRUD, relação N:N, slugs únicos","Testes unitários services, mappers, validators (>80%)","Swagger/OpenAPI com exemplos e schemas"],
py:["Sintaxe: tipos, variáveis, operadores, controle de fluxo","Funções: *args/**kwargs, lambda, closures, decorators básicos","Estruturas: listas, dicts, sets, tuples, comprehensions","OOP: classes, herança, dunder methods, @property","Módulos: import, venv, pip/uv, Jupyter notebooks","Arquivos: pathlib, json, csv, logging","Strings e regex: formatação, parsing, re"],
devops:["Linux: terminal, comandos essenciais, permissões chmod/chown","Processos: ps, top, systemctl, journalctl, cron","Shell scripting: bash, variáveis, condicionais, loops, funções","Git profundo: branching, merge vs rebase, hooks, .gitignore","Redes Linux: ip addr, netstat, curl, dig, iptables básico","SSH: keys, agent forwarding, SCP, tunneling","Filesystem: mount, df, du, links simbólicos"],
aws:{cert:"CLF-C02 — Cloud Practitioner",exam:"Prova semana 8-9",topics:["Cloud Concepts (24%): IaaS/PaaS/SaaS, regiões, AZs, edge","Security (30%): IAM, shared responsibility, MFA, encryption","Technology (34%): EC2, Lambda, S3, EBS, RDS, DynamoDB, VPC","Billing (12%): pricing models, Cost Explorer, Budgets"]},
math:["Lógica proposicional: conectivos, tabelas-verdade, equivalências","Teoria de conjuntos: operações, Venn, cardinalidade","Álgebra básica: equações, funções lineares e quadráticas","Sistemas numéricos: binário, octal, hexadecimal, conversões","Combinatória: permutações, combinações, princípio da contagem","Notação Big O: análise assintótica, comparação de complexidades","Indução matemática: provas para algoritmos recursivos"],
ia:["Co-Intelligence (Sem 1–2): fluência prática com IA","Prediction Machines (Sem 3–4): IA como decisão e ROI","The AI Advantage (Sem 5–6): IA em empresas","Human + Machine (Sem 7–8): redesenho de processos"],
fin:["Mód 1: Mentalidade financeira","Mód 2–3: Orçamento pessoal e métodos","Mód 4–5: Diagnóstico financeiro e fluxo de caixa","Mód 6–7: Dívidas, juros e estratégias de quitação"]},
{id:2,l:"Fase 2",w:"Sem 9–16",h:896,t:"Desenvolvimento profissional",cand:false,cn:"",
java:["Spring Boot 3 avançado: REST, validação, DTOs, mappers MapStruct","Spring Security: JWT, OAuth2, OpenID Connect, roles, scopes","Integrações: Feign, WebClient, timeout, retry Resilience4j, circuit breaker","Redis: cache, TTL, invalidação, idempotência, rate limiting","Testes integração: Testcontainers, MockMvc, RestAssured","SonarQube, JaCoCo, quality gates","Paradigmas: funcional Streams, Optional, concorrência básica"],
blog:["Comentários: threaded com reply, moderação","Newsletter: double opt-in, confirmação, preferências","Busca full-text: PostgreSQL tsvector + tsquery","Admin panel API: gestão de usuários, posts, moderação","Redis: cache posts populares, rate limiting por IP","Testes integração: Testcontainers, MockMvc + security","Swagger atualizado com todos os endpoints + erros"],
py:["Requests e APIs: consumo REST, headers, auth, pagination","Pandas: DataFrames, seleção, filtros, groupby, merge","Manipulação de dados: limpeza, missing values, export","Testes pytest: fixtures, parametrize, mocking, coverage","Async Python: asyncio, async/await, aiohttp","Type hints: Union, Optional, TypedDict, Protocol","Ambiente: pyproject.toml, ruff, mypy, pre-commit"],
devops:["Docker: images, containers, Dockerfile, build, layers, cache","Docker multi-stage: otimização imagem Java (JRE slim)","Docker Compose: serviços, networks, volumes, health checks","Container registry: Docker Hub, GHCR, tagging, scan","Dockerfile best practices: least privilege, .dockerignore","Docker networking: bridge, host, overlay, DNS interno","Docker volumes: bind mounts vs named, backup"],
aws:{cert:"SAA-C03 — Solutions Architect (início)",exam:null,topics:["VPC: peering, Transit Gateway, PrivateLink, NAT Gateway","EC2: placement groups, spot/reserved, Savings Plans","ELB: ALB vs NLB, target groups, health checks, SSL","Auto Scaling: launch templates, policies, lifecycle hooks","S3: versioning, replication, lifecycle, encryption, presigned","RDS: Multi-AZ, read replicas, snapshots, RDS Proxy","Aurora: clusters, serverless v2, global databases"]},
math:["Funções: domínio, imagem, composição, inversas","Grafos: representação, grau, conectividade, BFS/DFS","Relações: equivalência, ordem parcial, fecho transitivo","Lógica de predicados: quantificadores, provas","Aritmética modular: congruência, hashing, criptografia","Teoria dos números: MDC, MMC, Euclides","Complexidade: amortizada, recorrências, teorema mestre"],
ia:["All-In on AI (Sem 9–10): organizações AI-fueled","Competing in the Age of AI (Sem 11–12): AI Factory","Untangling AI (Sem 13–14): roadmap e execução"],
fin:["Mód 8–9: Reserva emergência, Tesouro Selic, CDB DI","Mód 10–11: Matemática financeira e sistema financeiro","Mód 12–13: Renda fixa básica e avançada","Mód 14–15: Aumento de renda e precificação"]},
{id:3,l:"Fase 3",w:"Sem 17–24",h:896,t:"Engenharia de software real",cand:false,cn:"",
java:["Kafka: produtores, consumidores, DLQ, retry, schemas","Arquitetura hexagonal: ports, adapters, domínio isolado","DDD: entidades, Value Objects, Aggregates, Domain Events","Microsserviços: decomposição, contratos, trade-offs","Segurança: OWASP Top 10, DevSecOps, LGPD","Performance: profiling, N+1, EntityGraph, batch insert","Engenharia de requisitos: user stories, critérios aceite"],
blog:["Refatoração hexagonal: domain / ports / adapters","DDD: Post com comportamento, Slug Value Object, Domain Events","Kafka: PostPublished → email + notification + analytics","OAuth2 social login: GitHub + Google","OWASP hardening: XSS, CSRF, CORS, security headers","ADRs: hexagonal vs layered, Kafka vs RabbitMQ","Moderação assíncrona via Kafka"],
py:["FastAPI: rotas, Pydantic models, validação, middleware","Pydantic v2: BaseModel, Field, validators, serialização","SQLAlchemy + Alembic: ORM, migrations, async sessions","pytest avançado: fixtures banco, factory_boy, httpx","NLP básico: spaCy, tokenização, lematização","Scripts automação: click/typer CLI, ETL com pandas","Manipulação de texto: regex avançado, parsing"],
devops:["CI/CD: GitHub Actions (build → test → Sonar → deploy)","GitHub Actions avançado: matrix, secrets, reusable workflows","Jenkins: Jenkinsfile declarativo, pipelines, plugins","CI/CD patterns: trunk-based, feature flags, canary","Artifact management: Maven/Gradle cache, Docker cache","Security scanning: Trivy, Dependabot, CodeQL","GitOps basics: ArgoCD conceitos, declarative delivery"],
aws:{cert:"SAA-C03 (continuação)",exam:null,topics:["ElastiCache: Redis vs Memcached, cluster mode","DynamoDB: single-table, GSI/LSI, streams, DAX, TTL","Lambda: triggers, layers, concurrency, Lambda@Edge","API Gateway: REST vs HTTP, authorizers, caching","SQS + SNS: FIFO, DLQ, fan-out, filter policies","CloudFront: distributions, OAC, cache policies","Route 53: routing policies, health checks, failover"]},
math:["Álgebra linear I: vetores, operações, norma, produto interno","Matrizes: tipos, determinante, inversa, sistemas lineares","Transformações lineares: rotação, escala, matrizes","Vetores em embeddings, matrizes em transformers","Probabilidade I: axiomas, condicional, Bayes","Variáveis aleatórias: esperança, variância, desvio","Distribuições: binomial, Poisson, normal"],
ia:["Build a Large Language Model — Raschka (Sem 15–28)","Tokenização BPE, positional encoding, multi-head attention","Transformer block, pré-treinamento, loss e perplexidade"],
fin:["Mód 16: Fundos de investimento","Mód 17–18: Ações (P/L, ROE, DY), FIIs","Mód 19–20: ETFs, BDRs, exterior, criptoativos","Mód 21–22: Gestão de risco e alocação"]},
{id:4,l:"Fase 4",w:"Sem 25–32",h:896,t:"Arquitetura + candidaturas",cand:true,cn:"Candidaturas iniciam semana 25 — portfólio com Spring Boot + testes + Docker + K8s + 2 certs AWS",
java:["Spring Boot avançado: profiles, starters customizados, Actuator","Padrões distribuídos: Saga, Outbox, CQRS, idempotência","Resilience4j: circuit breaker, retry, rate limiter, bulkhead","Caching: cache aside, write-through, invalidação Kafka","OpenAPI Generator: client/server a partir de contratos","Concorrência: CompletableFuture, virtual threads Java 21","Refatoração: módulos, bounded contexts em monólito modular"],
blog:["Rate limiting granular: IP, usuário, endpoint com Redis","Email assíncrono: Thymeleaf + Kafka → email-worker","Paginação cursor-based para feeds de posts","Versionamento de API: v1/v2 com strategy pattern","OpenAPI Generator: SDK client em Python","Métricas: SonarQube integrado, dashboard cobertura","Moderação inteligente: filtro spam + fila aprovação"],
py:["Numpy: arrays, broadcasting, slicing, operações vetorizadas","Matplotlib + Seaborn: gráficos, subplots, heatmaps","Scikit-learn I: preprocessing, train/test, cross-validation","Scikit-learn II: regressão, decision trees, random forests","Métricas ML: accuracy, precision, recall, F1, ROC-AUC","Pipeline ML: load → clean → feature eng → train → evaluate","Jupyter avançado: widgets, nbconvert, papermill"],
devops:["Kubernetes: pods, deployments, services, namespaces, kubectl","K8s config: configmaps, secrets, resource requests/limits","K8s networking: ClusterIP/NodePort/LoadBalancer, ingress NGINX","K8s storage: PV, PVC, StorageClasses, dynamic provisioning","K8s probes: liveness, readiness, startup + Actuator","K8s strategies: rolling update, blue/green, canary","Minikube/k3d: cluster local, deploy blog, debug pods"],
aws:{cert:"SAA-C03 (prova) + DVA-C02 (início)",exam:"Prova SAA-C03 semana 30-31",topics:["DR: backup/restore, pilot light, warm standby, active-active","Decoupled architectures: event-driven, saga, CQRS na AWS","Well-Architected Framework: 6 pillars","DVA-C02: Lambda + DynamoDB + API Gateway + SDK","Cognito: user pools, identity pools, JWT, hosted UI","CodePipeline + CodeBuild + CodeDeploy","X-Ray: tracing, sampling, service map"]},
math:["Álgebra linear II: autovalores, autovetores, decomposição espectral","PCA: redução de dimensionalidade na prática","SVD: recomendação e compressão","Cálculo I: limites, derivadas, derivada parcial","Gradiente: vetor gradiente, gradiente descendente","Cálculo II: integrais, regra da cadeia","Otimização: pontos críticos, convexidade, Lagrange"],
ia:["Build LLM (cont.): GPT small, fine-tuning com LoRA","Avaliação: loss, perplexidade, BLEU, ROUGE, BERTScore"],
fin:["Mód 23: Impostos sobre investimentos","Mód 24: Planejamento financeiro de vida","Mód 25–26: Contabilidade e economia aplicada","Mód 27–28: Empreendedorismo e produtos digitais"]},
{id:5,l:"Fase 5",w:"Sem 33–40",h:896,t:"Cloud + sistemas distribuídos",cand:true,cn:"Candidaturas ativas — processos seletivos geram feedback real",
java:["AWS aplicado: EKS, RDS, ElastiCache, S3, CloudFront, SQS/SNS","Sistemas distribuídos: CAP, consistência eventual, relógios lógicos","Mensageria: Kafka Streams, particionamento, exactly-once","Redis avançado: Lua scripts, pub/sub, Streams, geospatial","gRPC: Protocol Buffers, streaming, interceptors, deadline","Event Sourcing: append-only, projeções, snapshots","SRE: SLI/SLO/SLA, error budget, postmortem"],
blog:["Deploy AWS: EKS + RDS Multi-AZ + ElastiCache + S3 + CloudFront","OpenTelemetry: trace ponta a ponta com correlation ID","Analytics: page views, tempo leitura, trending, funil","RSS + Atom + sitemap.xml + meta og/twitter + JSON-LD","Terraform: VPC, EKS, RDS, S3, CloudFront, Route 53 como código","SRE: health checks, alertas CloudWatch, SLO 99.9%","Feature flags: deploy sem risco, A/B testing"],
py:["PyTorch: tensores, autograd, nn.Module, optimizers, training loop","Datasets/DataLoaders: custom, batching, transformações","Redes neurais: MLP, ativação, loss functions","Embeddings: Word2Vec, sentence embeddings, modelos pré-treinados","Transformers HuggingFace: tokenizers, pipeline, inference","Fine-tuning: LoRA, PEFT, classificação com pré-treinado","Treinamento: forward/backward, epochs, learning rate"],
devops:["K8s avançado: Helm charts, values.yaml, chart repos","K8s autoscaling: HPA, VPA, cluster autoscaler","K8s security: RBAC, NetworkPolicies, secrets encryption","Terraform: providers, resources, variables, state, modules","Terraform intermediário: workspaces, remote state S3+DynamoDB","Prometheus + Grafana: metrics, PromQL, dashboards, alerting","Observabilidade: OpenTelemetry, Jaeger, logs, correlation IDs"],
aws:{cert:"DVA-C02 — Developer Associate (cont.)",exam:null,topics:["DynamoDB: transactions, conditional writes, TTL, PartiQL","Lambda: SnapStart Java, provisioned concurrency, extensions","CloudFormation: templates, intrinsic functions, change sets","Secrets Manager vs Parameter Store: rotation, referência","EventBridge: rules, schedules, pipes, schema registry","Step Functions: standard vs express, error handling","ECS vs EKS: Fargate, task definitions, service discovery"]},
math:["Estatística I: estimadores, intervalo confiança, teste hipótese","Estatística II: correlação, regressão, ANOVA","Bayes aplicado: inferência bayesiana, prior/posterior","Entropia, entropia cruzada, divergência KL","Otimização: SGD, Adam, momentum, learning rate","Regularização: L1/L2, dropout, early stopping","Distribuições contínuas: normal, exponencial, gama"],
ia:["Agentic AI — Bornet et al. (Sem 33–44)","5 níveis autonomia, tool use, raciocínio, memória","Implementação agentes, modelos negócio, governança"],
fin:["Mód 29: IA aplicada a ganhos financeiros","Mód 30: Finanças avançadas (DCF, WACC, CAPM)","Mód 31: Proteção patrimonial e segurança","Checklist domínio financeiro completo"]},
{id:6,l:"Fase 6",w:"Sem 41–48",h:896,t:"IA aplicada + RAG + agentes",cand:true,cn:"Entrevistas técnicas ativas — feedback vira priorização",
java:["Embeddings e pgvector: indexação HNSW, cosine similarity","RAG: chunking, retrieval, reranking, citação, controle acesso","Avaliação LLM: suite testes, detecção alucinação, métricas","Agentes IA: tool use, ReAct, memória, fallback humano","LLMOps: custo, latência p95, versionamento prompts, A/B","Integração Java-Python: Spring Boot ↔ FastAPI via REST/gRPC","API Gateway patterns: BFF, composition, rate limiting"],
blog:["pgvector: embeddings posts para busca semântica","Posts relacionados via RAG: similaridade semântica","Auto-tagging: LLM sugere tags com confidence score","Agente blog: chat RAG com citação de fontes","Sugestão SEO: LLM gera títulos, meta description","LLMOps: painel custo IA, latência, avaliação","Cache inteligente: embeddings pré-computados"],
py:["LangChain/LlamaIndex: chains, agents, retrievers, memory","Embeddings: modelos OpenAI/Cohere/local, chunking strategies","Vector stores: pgvector, Chroma, Pinecone, Weaviate","RAG pipeline: ingest → chunk → embed → retrieve → generate","Avaliação RAG: RAGAS, faithfulness, context relevance","Agentes Python: tool use, ReAct, CrewAI/AutoGen","API: OpenAI SDK, Anthropic SDK, streaming, function calling"],
devops:["Terraform avançado: import, lifecycle, data sources, for_each","AWS CDK: constructs, stacks, L1/L2/L3, synth, deploy","IaC testing: terratest, checkov, tfsec, sentinel","Kubernetes operators: custom resources, controller pattern","Service mesh: Istio basics — traffic, mTLS, observability","Monitoring: SLO-based alerting, error budgets, golden signals","Chaos engineering: Litmus, game days, blast radius"],
aws:{cert:"DVA-C02 (prova) + revisão",exam:"Prova DVA-C02 semana 46-47",topics:["Elastic Beanstalk: deployment policies, .ebextensions","Kinesis: Data Streams vs Firehose vs Analytics","CloudWatch: custom metrics, composite alarms, Evidently","IAM: permission boundaries, SCP, resource-based, ABAC","Revisão DVA-C02: simulados Tutorials Dojo","Well-Architected Tool: review do blog","Cost optimization: Compute Optimizer, rightsizing"]},
math:["Álgebra linear deep learning: batch matrix multiplication","Attention: Q·K^T/√d → softmax → ·V","Backpropagation: regra cadeia, computational graph","Loss functions: MSE, cross-entropy, focal loss","Ativações: ReLU, GELU, SiLU — propriedades gradiente","Normalização: batch/layer/RMSNorm — estabilização","Similaridade: cosine, dot product, euclidiana, Jaccard"],
ia:["Agentic AI (cont.): scaling, governança, casos de uso","Projeto: agente RAG com ferramentas, memória, logs"],
fin:["Revisão geral checklist financeiro","Aplicação: planilha, carteira simulada, oferta serviço","Planejamento com projeção de nova renda"]},
{id:7,l:"Fase 7",w:"Sem 49–56",h:896,t:"Produto + frontend + escala",cand:true,cn:"Candidaturas maduras — portfólio completo",
java:["Produto completo: arquitetura end-to-end, diagramas C4","Multi-tenancy: schema per tenant, row-level security","Webhooks: retry, idempotência, signature verification","Job scheduling: Quartz, Spring Batch, processamento batch","API versioning: header vs URL, deprecation, migration","Testes de carga: Gatling/k6, profiling, tuning","Documentação: ADRs, RFCs, runbooks"],
blog:["Frontend Next.js 15: App Router, SSG, ISR, server components","Design system: shadcn/ui + Tailwind, dark mode, tokens","Acessibilidade: WCAG 2.1 AA, aria-labels, keyboard nav","Performance: Lighthouse > 90, WebP, code splitting, lazy load","PWA: service worker, manifest.json, offline reading","Analytics frontend: scroll depth, click events, conversão","i18n: suporte pt-BR e en-US com next-intl"],
py:["MLOps: MLflow tracking, model registry, serving","Data pipelines: Airflow basics, DAGs, operators","Web scraping ético: BeautifulSoup, Scrapy, robots.txt","Python performance: cProfile, async vs threading","Packaging: setuptools, pyproject.toml, PyPI","Microsserviço completo: FastAPI + SQLAlchemy + Docker","Integração Java: REST contracts, gRPC, Kafka"],
devops:["GitOps: ArgoCD, sync policies, auto-sync, rollback","K8s production: PDB, topology spread, affinity","Logging: Fluentd → Elasticsearch → Kibana (EFK)","APM: Elastic APM ou Datadog, distributed tracing","Infrastructure monitoring: node exporter, kube-state-metrics","CI/CD avançado: multi-env, approval gates, rollback","Container security: distroless, non-root, readonly fs"],
aws:{cert:"SOA-C02 ou revisão avançada",exam:"Planejamento próxima cert",topics:["Systems Manager: Run Command, Patch Manager","CloudWatch: Logs Insights, anomaly detection","Organizations: SCPs, consolidated billing, OUs","Config + GuardDuty + Security Hub","Backup: lifecycle, cross-region, cross-account","Migration: DMS, SCT, strategies","Cost management: Explorer, Savings Plans, Spot fleet"]},
math:["Teoria informação: entropia Shannon, informação mútua","Probabilistic ML: Naive Bayes, Gaussian mixture","Kernels: RBF, polynomial, SVM","Séries temporais: autocorrelação, ARIMA","Grafos e redes: PageRank, community detection","Otimização convexa: dualidade, KKT, programação linear","Numerical methods: floating point, estabilidade numérica"],
ia:["Revisão 9 livros: consolidação frameworks","Projeto integrado: plataforma agentes ou microSaaS"],
fin:["Empreendedorismo: microSaaS, automações como produto","Negociação salarial: CLT vs PJ vs remoto"]},
{id:8,l:"Fase 8",w:"Sem 57–64",h:896,t:"Portfólio final + negociação",cand:true,cn:"Entrevistas finais + negociação de oferta",
java:["System design: sharding, replication, caching, CDN, queues","Coding interviews: HashMap, BFS/DFS, DP, sliding window","Behavioral: STAR method, trade-offs, conflict resolution","Mock interviews: system design + coding + behavioral semanais","Revisão: Kafka, Redis, Spring Security, K8s, AWS, testes","Negociação: contratos, equity, RSU, stock options","Career planning: arquitetura? IA? plataforma? liderança?"],
blog:["Launch: pentest OWASP ZAP, performance audit, SEO, a11y","Domínio próprio + SSL ACM + CloudFront + Route 53","10+ posts técnicos: ADRs públicos, comparações, tutoriais","Vídeo apresentação (15-20min): arquitetura, decisões","Case study: MVP ao produto com IA em produção","Blog como portfólio vivo: posts = competências"],
py:["Python system design: Python vs Java, hybrid","Contribuição open source: PR em FastAPI ou LangChain","Python avançado: metaprogramação, descriptors, context managers","CLI tools: typer, rich, distribuição pipx","Automação: deploy scripts, análise logs, relatórios","Review: FastAPI, pandas, PyTorch, LangChain, pytest","Portfólio: 3+ projetos documentados no GitHub"],
devops:["Infrastructure review: audit completo infra blog","Disaster recovery: backup, RTO/RPO, runbook, drill","DevOps culture: blameless postmortems, toil reduction","Platform engineering: DX, self-service, golden paths","Documentação: diagrama C4 deploy, runbooks, escalation","Performance: load testing final, capacity planning","Portfolio DevOps: infra como código documentada"],
aws:{cert:"Revisão + planejamento avançado",exam:"SOA-C02 ou DOP-C02 se aplicável",topics:["Revisão 3 certs: CLF + SAA + DVA","Well-Architected review completo do blog","Cost optimization final: rightsizing, Savings Plans","Security posture: IAM, GuardDuty, Security Hub","SOA-C02 ou DOP-C02 conforme carreira","AWS Community: artigos, perguntas, networking"]},
math:["Revisão integral: álgebra linear, cálculo, prob, stat","Problemas entrevista: puzzles, estimativas Fermi","Matemática de LLMs: attention, softmax, temperature","Matemática de embeddings: projeções, subspace clustering","Métricas: intervalos confiança, significância estatística","Portfolio: caderno referência rápida matemática","Aplicação: conectar cada conceito a uso real em IA"],
ia:["Consolidação: revisão frameworks e entregáveis","Monetização: diagnósticos IA, agentes verticais"],
fin:["Planejamento 12 meses com nova renda","Produtos digitais: lançamento com programação + IA","Independência financeira: projeção longo prazo"]}
];

const rules=[
  {k:"java",r:"Todo commit em inglês desde o Dia 1. READMEs, Javadocs, comentários e ADRs também. Sem exceção."},
  {k:"blog",r:"Nunca terminar o bloco do blog sem pelo menos 1 commit útil. Push no final de cada bloco."},
  {k:"aws",r:"Labs práticos no AWS Free Tier em paralelo ao teórico. Cada questão errada no simulado vira flashcard no Obsidian (plugin Spaced Repetition)."},
  {k:"py",r:"Python é diário desde a fase 1. Mesmo que 1h, manter consistência. Notebooks no GitHub desde o início."},
  {k:"devops",r:"Toda feature do blog deve ser deployada via pipeline. Nada manual em staging/prod."},
  {k:"math",r:"Cada conceito matemático deve ser conectado a uma aplicação real: embeddings, loss, gradiente, attention."},
  {k:"n",r:"Debug-first learning: 20-30 min tentando resolver sozinho antes de consultar IA ou documentação."},
  {k:"n",r:"A cada 2 semanas: post técnico público sobre problema resolvido (LinkedIn, dev.to ou blog próprio)."},
  {k:"n",r:"1x por semana: mock talk gravado de 5-7 min explicando o conceito principal em inglês."},
  {k:"n",r:"Candidaturas começam na semana 25. Nunca esperar 'ficar pronto'. Entrevistas são diagnóstico."},
  {k:"n",r:"Treino físico diário (19:00–21:00) é não negociável. Performance mental depende de saúde física."},
  {k:"n",r:"Domingo à tarde: descanso real. 64 semanas exigem sustentabilidade, não apenas intensidade."}
];

const awsMilestones=[
  {w:"Sem 8-9",c:"CLF-C02 ✓ Cloud Practitioner",col:PC[0]},
  {w:"Sem 30-31",c:"SAA-C03 ✓ Solutions Architect Associate",col:PC[3]},
  {w:"Sem 46-47",c:"DVA-C02 ✓ Developer Associate",col:PC[5]},
  {w:"Sem 57+",c:"SOA-C02 ou DOP-C02 (planejamento)",col:PC[6]}
];

const trackDetails = {
  "java": {
    "title": "Java, Spring Boot e Engenharia de Software",
    "shortName": "Java + SW Eng",
    "badge": "Java",
    "description": "Base de consulta rápida para evoluir de Java backend para nível pleno com arquitetura, testes, cloud e system design.",
    "objective": "Dominar Java 21, Spring Boot, bancos de dados, mensageria, testes, arquitetura hexagonal, DDD, observabilidade e práticas reais de engenharia.",
    "summary": [
      "Use esta trilha como eixo central da formação backend.",
      "A progressão começa com fundamentos de linguagem e termina com system design, negociação e portfólio técnico.",
      "Cada fase deve gerar código, teste, documentação, commit em inglês e pelo menos uma decisão técnica registrada."
    ],
    "contentGroups": [
      {
        "title": "Java 21 e linguagem",
        "items": [
          "Tipos, OOP, herança, polimorfismo e interfaces",
          "Generics, collections, records, sealed classes e pattern matching",
          "Streams, Optional, imutabilidade e programação funcional",
          "Concorrência, CompletableFuture e virtual threads"
        ]
      },
      {
        "title": "Spring Boot e APIs",
        "items": [
          "Spring Boot 3, REST, validação, DTOs e mappers",
          "Spring Security, JWT, OAuth2, OpenID Connect, roles e scopes",
          "OpenAPI/Swagger, versionamento de API e ProblemDetail",
          "Feign, WebClient, timeout, retry, fallback e circuit breaker"
        ]
      },
      {
        "title": "Persistência e mensageria",
        "items": [
          "PostgreSQL, JPA/Hibernate, transações, N+1, EntityGraph e índices",
          "MongoDB com Spring Data, CRUD, índices e aggregation",
          "Redis para cache, TTL, invalidação, idempotência e rate limit",
          "Kafka: producer, consumer, DLQ, retry, schemas e eventos"
        ]
      },
      {
        "title": "Engenharia profissional",
        "items": [
          "Clean Code, SOLID, design patterns e refatoração",
          "Arquitetura Hexagonal, DDD, monólito modular e microsserviços",
          "JUnit, Mockito, Testcontainers, MockMvc, JaCoCo e SonarQube",
          "Observabilidade, logs, métricas, tracing, SLI/SLO e system design"
        ]
      }
    ],
    "checklist": [
      "Criar API REST completa com tratamento de erro padronizado",
      "Modelar PostgreSQL com JPA/Hibernate e migrations",
      "Criar DTOs, mappers, validações e exception handler com ProblemDetail",
      "Escrever testes de service, mapper, controller, exception e integração",
      "Consumir API externa com Feign/WebClient, timeout, retry e fallback",
      "Usar Redis para cache, TTL, invalidação e idempotência",
      "Publicar e consumir eventos Kafka com retry, DLQ e versionamento",
      "Proteger endpoints com Spring Security e JWT",
      "Organizar pelo menos um módulo em Clean/Hexagonal Architecture",
      "Documentar decisões com ADRs e README em inglês"
    ],
    "projects": [
      {
        "name": "API REST de domínio financeiro",
        "description": "CRUD completo com PostgreSQL, Flyway, JPA, validação, ProblemDetail e Swagger."
      },
      {
        "name": "Microsserviço de pedidos com Kafka",
        "description": "Producer, consumer, retry, DLQ, outbox e idempotência."
      },
      {
        "name": "Backend modular com arquitetura hexagonal",
        "description": "Ports/adapters, domínio isolado, testes de unidade e integração."
      },
      {
        "name": "Sistema observável em produção simulada",
        "description": "Actuator, OpenTelemetry, logs correlacionados, métricas e dashboard."
      }
    ],
    "concepts": [
      "Idempotência: operação repetida gera o mesmo efeito observável.",
      "Outbox Pattern: grava evento e estado no mesmo banco para publicar de forma confiável.",
      "Hexagonal Architecture: domínio não depende de frameworks; adapters dependem do domínio.",
      "DDD: modelagem orientada ao domínio com entidades, value objects, aggregates e bounded contexts.",
      "N+1: antipadrão de ORM resolvido com fetch join, EntityGraph ou batch fetching.",
      "Circuit breaker: evita cascata de falhas em integrações externas."
    ],
    "references": [
      "Documentação oficial Java 21 e Spring Boot",
      "Spring Security Reference",
      "Hibernate User Guide",
      "Kafka Documentation",
      "Martin Fowler — Patterns of Enterprise Application Architecture",
      "Release It! — Michael Nygard"
    ],
    "nextSteps": [
      "Escolher um domínio real para o projeto principal.",
      "Criar backlog com features pequenas e commits diários.",
      "Manter testes e documentação como parte da Definition of Done.",
      "Começar candidaturas quando houver Spring Boot, testes, Docker, CI/CD e README sólido."
    ],
    "page": "./trilhas/java.html",
    "sourceKey": "java"
  },
  "blog": {
    "title": "Blog Portfólio Técnico",
    "shortName": "Blog Pessoal",
    "badge": "Blog",
    "description": "Página de referência para transformar o blog em plataforma de portfólio, documentação, SEO, newsletter e monetização.",
    "objective": "Construir uma plataforma própria para publicar conteúdo técnico, registrar decisões arquiteturais, demonstrar engenharia real e abrir caminho para produtos digitais.",
    "summary": [
      "O blog deve ser tratado como produto técnico e como vitrine profissional.",
      "Comece com MVP enxuto e evolua para backend completo, painel administrativo, newsletter, busca, analytics, SEO e recursos de monetização.",
      "Cada decisão técnica do blog deve poder virar um post, um ADR ou uma demonstração de portfólio."
    ],
    "contentGroups": [
      {
        "title": "Arquitetura geral",
        "items": [
          "Monólito modular para MVP",
          "Backend Spring Boot em Docker",
          "Frontend em Next.js ou HTML/CSS/JS inicial",
          "PostgreSQL, Redis, storage S3-compatible e observabilidade"
        ]
      },
      {
        "title": "Funcionalidades core",
        "items": [
          "Posts com markdown, slug, SEO fields e status de publicação",
          "Categorias, tags, comentários, reações e bookmarks",
          "Painel administrativo, moderação e audit logs",
          "Newsletter com double opt-in e segmentação"
        ]
      },
      {
        "title": "Busca, IA e SEO",
        "items": [
          "Busca full-text com PostgreSQL tsvector/tsquery",
          "Busca semântica com embeddings e pgvector",
          "Sitemap, RSS, robots.txt, canonical, Open Graph e Schema.org",
          "Core Web Vitals, Lighthouse e conteúdo indexável"
        ]
      },
      {
        "title": "Produção",
        "items": [
          "JWT com refresh token rotation",
          "Cache Redis com prevenção de cache stampede",
          "Deploy com staging, migrations seguras e rollback",
          "Observabilidade com logs, métricas, tracing e alertas"
        ]
      }
    ],
    "architectureText": [
      "Leitor/Admin → Frontend Next.js ou HTML estático → Backend Spring Boot API → PostgreSQL/Redis/Object Storage.",
      "Eventos internos: PostPublishedEvent → indexação, newsletter e analytics.",
      "Integrações externas futuras: Resend/SendGrid, Stripe, Google OAuth, S3/R2 e ferramenta de analytics.",
      "Critério de evolução: só extrair microsserviços quando volume, times, deploys independentes ou custo operacional justificarem."
    ],
    "checklist": [
      "README com proposta do projeto, stack e guia de execução",
      "MVP com posts, categorias, tags, autenticação e painel admin",
      "PostgreSQL com migrations e dados seed para desenvolvimento",
      "JWT, refresh token rotation, rate limit e proteção OWASP",
      "Newsletter com double opt-in",
      "Busca full-text funcional",
      "SEO básico com sitemap, RSS, Open Graph e Schema.org",
      "Deploy com ambiente de staging e produção",
      "Observabilidade mínima com health check, logs e métricas",
      "Critérios de pronto para cada fase"
    ],
    "projects": [
      {
        "name": "MVP publicável",
        "description": "5 posts publicados, newsletter funcionando, Lighthouse ≥ 90 e zero erros críticos."
      },
      {
        "name": "Admin panel",
        "description": "CRUD de posts, categorias, tags, moderação de comentários e métricas básicas."
      },
      {
        "name": "Busca híbrida",
        "description": "PostgreSQL FTS inicialmente e evolução para busca semântica com pgvector."
      },
      {
        "name": "Monetização",
        "description": "Página de produto digital, checkout, webhook idempotente e revogação de acesso em reembolso."
      }
    ],
    "concepts": [
      "Monólito modular: uma aplicação com módulos bem isolados.",
      "ISR/SSG: estratégias de renderização para páginas de conteúdo.",
      "Cursor pagination: paginação mais estável para grandes volumes.",
      "Cache stampede: muitos requests tentando reconstruir o mesmo cache expirado.",
      "ADR: documento curto explicando contexto, decisão e consequência.",
      "Core Web Vitals: métricas de experiência e performance percebida."
    ],
    "references": [
      "Spring Boot + Spring Security + Spring Data JPA",
      "Next.js App Router e Metadata API",
      "PostgreSQL Full-Text Search",
      "Redis caching patterns",
      "OWASP Top 10",
      "Google Search Central e Schema.org"
    ],
    "nextSteps": [
      "Definir MVP e critérios de saída.",
      "Separar backlog em fases: conteúdo, auth, admin, busca, newsletter e deploy.",
      "Documentar decisões em /docs/adr.",
      "Publicar posts técnicos à medida que cada feature for implementada."
    ],
    "page": "./trilhas/blog.html",
    "sourceKey": "blog"
  },
  "aws": {
    "title": "Certificações AWS",
    "shortName": "AWS Certs",
    "badge": "AWS",
    "description": "Consulta rápida para CLF-C02, SAA-C03, DVA-C02 e planejamento SOA-C02/DOP-C02.",
    "objective": "Consolidar cloud computing com certificações, labs práticos e aplicação direta nos projetos Java, Blog, DevOps e IA.",
    "summary": [
      "A trilha começa com Cloud Practitioner para vocabulário e visão geral.",
      "Depois evolui para arquitetura com SAA-C03 e desenvolvimento cloud-native com DVA-C02.",
      "SOA-C02 ou DOP-C02 entram como planejamento futuro após prática com deploy, observabilidade e operação."
    ],
    "contentGroups": [
      {
        "title": "CLF-C02",
        "items": [
          "Cloud concepts, shared responsibility, IAM, billing, global infrastructure",
          "EC2, S3, RDS, Lambda, VPC, CloudWatch e suporte"
        ]
      },
      {
        "title": "SAA-C03",
        "items": [
          "VPC, subnets, route tables, NAT, ALB/NLB, Auto Scaling",
          "S3, RDS, Aurora, DynamoDB, ElastiCache, CloudFront e Route 53",
          "SQS, SNS, EventBridge, serverless e Well-Architected Framework"
        ]
      },
      {
        "title": "DVA-C02",
        "items": [
          "Lambda, DynamoDB, API Gateway, Cognito, SDK e IAM avançado",
          "CloudFormation, CodePipeline, CodeBuild, CodeDeploy",
          "X-Ray, CloudWatch, EventBridge, Step Functions e Secrets Manager"
        ]
      },
      {
        "title": "Prática obrigatória",
        "items": [
          "Deploy de API Spring Boot",
          "S3 + CloudFront para assets",
          "RDS PostgreSQL com backup",
          "SQS/SNS para desacoplamento",
          "CloudWatch logs, alarms e dashboard"
        ]
      }
    ],
    "checklist": [
      "Entender IAM users, groups, roles, policies e least privilege",
      "Criar EC2, security group e acesso SSH",
      "Criar bucket S3 com versionamento, lifecycle e política correta",
      "Configurar RDS PostgreSQL com backup e Multi-AZ conceitual",
      "Desenhar VPC com subnets públicas/privadas e NAT",
      "Criar Lambda acionada por API Gateway ou EventBridge",
      "Entender DynamoDB: partition key, sort key, GSI, TTL e streams",
      "Comparar SQS, SNS, EventBridge e Kafka",
      "Criar CloudWatch alarm e consultar logs",
      "Fazer simulados e transformar erros em flashcards"
    ],
    "projects": [
      {
        "name": "Static site deploy",
        "description": "Publicar assets estáticos com S3 + CloudFront + Route 53."
      },
      {
        "name": "API Java na AWS",
        "description": "Executar Spring Boot com banco gerenciado e logs no CloudWatch."
      },
      {
        "name": "Pipeline cloud",
        "description": "Build, test e deploy com CodeBuild/CodePipeline ou GitHub Actions."
      },
      {
        "name": "Arquitetura event-driven",
        "description": "API Gateway + Lambda + DynamoDB + EventBridge/SQS."
      }
    ],
    "concepts": [
      "Shared Responsibility Model: divisão de responsabilidades entre AWS e cliente.",
      "IAM Role: identidade assumida por serviço ou usuário, evitando credenciais fixas.",
      "Multi-AZ: alta disponibilidade dentro de uma região.",
      "CloudFront: CDN para latência baixa e proteção de origem.",
      "SQS FIFO: fila com ordenação e deduplicação.",
      "Well-Architected: operational excellence, security, reliability, performance, cost e sustainability."
    ],
    "references": [
      "AWS Skill Builder",
      "AWS Well-Architected Framework",
      "AWS Documentation",
      "Tutorials Dojo practice exams",
      "AWS Free Tier labs",
      "AWS Architecture Center"
    ],
    "nextSteps": [
      "Revisar CLF-C02 e agendar prova quando simulados estiverem consistentes.",
      "Mapear cada serviço AWS com uso real no blog/projeto Java.",
      "Fazer labs semanais e registrar prints, custos e decisões.",
      "Usar erros de simulados como flashcards."
    ],
    "page": "./trilhas/aws.html",
    "sourceKey": "aws"
  },
  "python": {
    "title": "Python e Aplicações Práticas",
    "shortName": "Python",
    "badge": "Python",
    "description": "Trilha para usar Python como segunda linguagem em automação, dados, APIs, IA, RAG e integração com Java.",
    "objective": "Desenvolver fluência em Python para scripts, análise de dados, FastAPI, testes, NLP, PyTorch, LangChain, LlamaIndex, RAG e agentes.",
    "summary": [
      "Python deve complementar Java, não competir com ele no início.",
      "A prioridade é produtividade: scripts, dados, APIs, IA aplicada e serviços auxiliares.",
      "A trilha fica mais forte quando integrada ao backend Java por REST, gRPC ou eventos."
    ],
    "contentGroups": [
      {
        "title": "Fundamentos",
        "items": [
          "Sintaxe, tipos, controle de fluxo, funções e módulos",
          "Listas, dicts, sets, tuples e comprehensions",
          "OOP, dunder methods, decorators e type hints",
          "venv, pip/uv, pyproject.toml, ruff e mypy"
        ]
      },
      {
        "title": "Automação e dados",
        "items": [
          "pathlib, json, csv, logging e regex",
          "Requests, consumo de APIs, headers, auth e pagination",
          "Pandas, limpeza de dados, groupby, merge e exportação",
          "Jupyter, notebooks e relatórios"
        ]
      },
      {
        "title": "APIs e backend",
        "items": [
          "FastAPI, Pydantic, middleware e validação",
          "SQLAlchemy, Alembic e sessões assíncronas",
          "Pytest, fixtures, parametrize, coverage e httpx",
          "Docker e integração com serviços Java"
        ]
      },
      {
        "title": "IA aplicada",
        "items": [
          "NLP básico, spaCy, tokenização e embeddings",
          "PyTorch, tensors, autograd, nn.Module e training loop",
          "LangChain, LlamaIndex, vector stores, RAG e agentes",
          "Avaliação RAG, LLMOps, custo, latência e logs"
        ]
      }
    ],
    "checklist": [
      "Criar scripts de automação com pathlib, requests e logging",
      "Manipular arquivos CSV/JSON com robustez",
      "Usar pandas para limpeza e análise",
      "Escrever testes com pytest",
      "Criar API FastAPI com validação Pydantic",
      "Persistir dados com SQLAlchemy e migrations",
      "Consumir API Java e expor endpoint para integração",
      "Criar pipeline RAG simples com embeddings",
      "Implementar agente com ferramentas e logs",
      "Documentar projetos em README claro"
    ],
    "projects": [
      {
        "name": "CLI de produtividade",
        "description": "Script Typer/Rich para organizar estudos, gerar relatórios e manipular arquivos."
      },
      {
        "name": "FastAPI auxiliar",
        "description": "Serviço Python chamado pelo backend Java para NLP, embeddings ou classificação."
      },
      {
        "name": "RAG com documentos",
        "description": "Ingestão, chunking, embeddings, busca vetorial e resposta com citação."
      },
      {
        "name": "Agente de automação",
        "description": "Agente com ferramentas controladas, memória simples, logs e fallback humano."
      }
    ],
    "concepts": [
      "Comprehension: forma concisa de transformar coleções.",
      "Fixture pytest: estado reutilizável para testes.",
      "Pydantic: validação e serialização de dados com tipos.",
      "Embedding: vetor que representa significado aproximado de texto.",
      "Vector store: banco otimizado para similaridade vetorial.",
      "RAG: recuperação de contexto externo antes da geração da resposta."
    ],
    "references": [
      "Python Documentation",
      "FastAPI Documentation",
      "Pandas User Guide",
      "Pytest Documentation",
      "PyTorch Tutorials",
      "LangChain e LlamaIndex docs"
    ],
    "nextSteps": [
      "Criar scripts pequenos antes de avançar para IA.",
      "Publicar notebooks e APIs no GitHub.",
      "Integrar pelo menos um serviço Python ao projeto Java.",
      "Usar Python para automatizar partes do estudo e do blog."
    ],
    "page": "./trilhas/python.html",
    "sourceKey": "py"
  },
  "devops": {
    "title": "DevOps, Cloud e Operação",
    "shortName": "DevOps",
    "badge": "DevOps",
    "description": "Trilha para sair de código local e operar software com Docker, CI/CD, Kubernetes, IaC, observabilidade e segurança.",
    "objective": "Construir autonomia para empacotar, publicar, monitorar, proteger e evoluir aplicações em ambientes próximos de produção.",
    "summary": [
      "DevOps entra como prática diária ligada ao projeto, não como teoria isolada.",
      "Toda feature importante deve passar por build, teste, container, pipeline e deploy.",
      "A meta é entender operação real: logs, rollback, métricas, incidentes e custo."
    ],
    "contentGroups": [
      {
        "title": "Base operacional",
        "items": [
          "Linux, terminal, permissões, processos, logs e systemctl",
          "Shell Script, cron, SSH, rede e diagnóstico",
          "Git avançado: rebase, squash, cherry-pick, bisect e hooks"
        ]
      },
      {
        "title": "Containers",
        "items": [
          "Docker, images, containers, volumes e networks",
          "Dockerfile multi-stage e otimização de imagem Java",
          "Docker Compose, healthchecks, networks e volumes",
          "Security scanning com Trivy e execução non-root"
        ]
      },
      {
        "title": "CI/CD e Kubernetes",
        "items": [
          "GitHub Actions, Jenkinsfile, secrets, cache e quality gates",
          "Kubernetes: pods, deployments, services, ingress e namespaces",
          "ConfigMaps, Secrets, probes, requests/limits e rolling updates",
          "Helm, ArgoCD, GitOps e ambientes multi-stage"
        ]
      },
      {
        "title": "IaC e observabilidade",
        "items": [
          "Terraform providers, state, variables, modules e remote state",
          "Prometheus, Grafana, PromQL e alertas",
          "OpenTelemetry, Jaeger, logs correlacionados e tracing",
          "SRE básico: SLI, SLO, error budget, incident response e postmortem"
        ]
      }
    ],
    "checklist": [
      "Operar Linux básico com segurança",
      "Criar Dockerfile multi-stage para app Java",
      "Subir app, banco, Redis e Kafka com Docker Compose",
      "Criar pipeline com build, testes, cobertura e Sonar",
      "Conhecer GitHub Actions e Jenkins básico",
      "Criar manifests Kubernetes para deployment e service",
      "Configurar liveness/readiness probes com Actuator",
      "Criar Helm chart básico",
      "Provisionar infraestrutura simples com Terraform",
      "Monitorar logs, métricas e traces"
    ],
    "projects": [
      {
        "name": "Ambiente local completo",
        "description": "Docker Compose com app, PostgreSQL, Redis, Kafka, PgAdmin e healthchecks."
      },
      {
        "name": "Pipeline CI/CD",
        "description": "Build, testes, JaCoCo, Sonar, Docker build e deploy simulado."
      },
      {
        "name": "Deploy Kubernetes local",
        "description": "Manifests, ConfigMaps, Secrets, probes e rolling update com k3d/minikube."
      },
      {
        "name": "Observabilidade",
        "description": "Prometheus, Grafana, logs correlacionados e tracing com OpenTelemetry."
      }
    ],
    "concepts": [
      "Imagem Docker: pacote imutável da aplicação.",
      "Healthcheck: verificação de saúde para automação de deploy e orquestração.",
      "Readiness probe: indica se o pod pode receber tráfego.",
      "Remote state Terraform: estado compartilhado e bloqueado para times.",
      "GitOps: estado desejado versionado no Git e aplicado automaticamente.",
      "Error budget: tolerância operacional para falhas dentro do SLO."
    ],
    "references": [
      "Docker Documentation",
      "Kubernetes Documentation",
      "GitHub Actions Docs",
      "Jenkins User Handbook",
      "Terraform Registry",
      "OpenTelemetry Documentation"
    ],
    "nextSteps": [
      "Containerizar o blog e o projeto Java.",
      "Criar pipeline antes de pensar em produção final.",
      "Treinar rollback e leitura de logs.",
      "Documentar infraestrutura como parte do portfólio."
    ],
    "page": "./trilhas/devops.html",
    "sourceKey": "devops"
  },
  "math": {
    "title": "Matemática Aplicada à Programação e IA",
    "shortName": "Matemática",
    "badge": "Math",
    "description": "Referência de matemática útil para algoritmos, bancos, sistemas distribuídos, machine learning, embeddings e transformers.",
    "objective": "Construir base prática em lógica, conjuntos, Big O, grafos, álgebra linear, probabilidade, estatística, cálculo, otimização e matemática de LLMs.",
    "summary": [
      "A matemática deve ser estudada sempre conectada a uso real.",
      "O foco não é formalismo excessivo; é entender custo, representação, similaridade, incerteza e otimização.",
      "Cada conceito deve virar exemplo em código, gráfico, notebook ou explicação curta."
    ],
    "contentGroups": [
      {
        "title": "Fundamentos",
        "items": [
          "Lógica proposicional, predicados e provas simples",
          "Conjuntos, relações, funções e combinatória",
          "Big O, análise assintótica, recorrências e complexidade",
          "Grafos: representação, BFS, DFS, caminhos e dependências"
        ]
      },
      {
        "title": "Álgebra linear",
        "items": [
          "Vetores, norma, produto interno e projeções",
          "Matrizes, determinante, inversa e sistemas lineares",
          "Autovalores, autovetores, PCA e SVD",
          "Similaridade de cosseno, embeddings e busca vetorial"
        ]
      },
      {
        "title": "Probabilidade e estatística",
        "items": [
          "Axiomas, probabilidade condicional e Bayes",
          "Esperança, variância, distribuições e correlação",
          "Intervalos de confiança, testes de hipótese e regressão",
          "Entropia, cross-entropy e divergência KL"
        ]
      },
      {
        "title": "Cálculo e otimização",
        "items": [
          "Limites, derivadas, derivadas parciais e gradiente",
          "Regra da cadeia e backpropagation",
          "Gradiente descendente, SGD, Adam e regularização",
          "Softmax, attention, temperatura e loss functions"
        ]
      }
    ],
    "checklist": [
      "Explicar Big O de soluções comuns",
      "Modelar problema simples como grafo",
      "Calcular produto interno e similaridade de cosseno",
      "Entender matriz como transformação linear",
      "Interpretar média, variância e distribuição",
      "Aplicar Bayes em problema simples",
      "Calcular derivada e interpretar gradiente",
      "Explicar cross-entropy em classificação",
      "Relacionar embeddings com vetores",
      "Explicar attention em alto nível matemático"
    ],
    "projects": [
      {
        "name": "Notebook de Big O",
        "description": "Comparar tempo de execução de busca linear, busca binária, hashing e sorting."
      },
      {
        "name": "Mini buscador vetorial",
        "description": "Representar textos como vetores e comparar por cosseno."
      },
      {
        "name": "Simulador de probabilidade",
        "description": "Experimentos com distribuições, variância e Bayes."
      },
      {
        "name": "Attention visual",
        "description": "Implementar atenção simplificada em Python para entender Q, K, V e softmax."
      }
    ],
    "concepts": [
      "Big O: crescimento do custo conforme o tamanho da entrada.",
      "Grafo: conjunto de nós e arestas usado para dependências, redes e caminhos.",
      "Produto interno: medida de alinhamento entre vetores.",
      "Similaridade de cosseno: compara direção dos vetores, não magnitude absoluta.",
      "Gradiente: direção de maior crescimento de uma função.",
      "Entropia: medida de incerteza de uma distribuição."
    ],
    "references": [
      "Matemática Discreta para Computação",
      "3Blue1Brown — Linear Algebra",
      "Khan Academy — Probability and Calculus",
      "The Elements of Statistical Learning",
      "Dive into Deep Learning",
      "The Illustrated Transformer"
    ],
    "nextSteps": [
      "Criar um notebook por tópico crítico.",
      "Conectar cada conceito a uma feature do projeto.",
      "Revisar matemática junto da trilha de IA.",
      "Transformar explicações difíceis em flashcards."
    ],
    "page": "./trilhas/matematica.html",
    "sourceKey": "math"
  },
  "ia": {
    "title": "Inteligência Artificial Aplicada",
    "shortName": "Trilha IA",
    "badge": "IA",
    "description": "Trilha para usar IA no trabalho, estudar LLMs, construir RAG, agentes, automações e produtos monetizáveis.",
    "objective": "Transformar leitura e prática em repertório técnico para backend com IA, RAG, agentes, avaliação, LLMOps e automação de processos.",
    "summary": [
      "A ordem começa por fluência de uso e decisão antes de entrar em LLMs técnicos.",
      "O objetivo final é construir sistemas produtivos com IA, não apenas consumir ferramentas.",
      "Cada livro deve gerar artefato: workflow, diagnóstico, arquitetura, roadmap, mini LLM ou agente RAG."
    ],
    "contentGroups": [
      {
        "title": "Uso e estratégia",
        "items": [
          "Co-Intelligence: IA como parceira de trabalho",
          "Prediction Machines: previsão, julgamento, ação e ROI",
          "The AI Advantage e Human + Machine: IA em processos e empresas",
          "All-In on AI e Competing in the Age of AI: AI Factory e vantagem competitiva"
        ]
      },
      {
        "title": "LLMs",
        "items": [
          "Tokenização, embeddings, positional encoding e attention",
          "Transformers, treinamento, loss, perplexidade e avaliação",
          "Fine-tuning, LoRA e modelos pequenos com PyTorch",
          "Custo, latência, contexto, segurança e versionamento"
        ]
      },
      {
        "title": "RAG e agentes",
        "items": [
          "Chunking, embeddings, retrieval, reranking e citação",
          "Vector stores: pgvector, Chroma, Pinecone ou Weaviate",
          "Tool use, ReAct, planning, memory e workflows",
          "Fallback humano, logs, limites e governança"
        ]
      },
      {
        "title": "Produto e monetização",
        "items": [
          "Automação de documentos, atendimento, vendas e suporte",
          "Diagnóstico de IA para negócios",
          "MicroSaaS vertical com RAG e agentes",
          "LLMOps, avaliação, monitoramento e rollback"
        ]
      }
    ],
    "checklist": [
      "Criar workflow pessoal de IA para estudo e programação",
      "Mapear decisões onde IA reduz custo de previsão",
      "Criar diagnóstico de IA para um pequeno negócio",
      "Desenhar AI Factory conceitual",
      "Implementar tokenizer/embeddings/attention em estudo",
      "Criar RAG com documentos e citação de fontes",
      "Avaliar respostas com testes e métricas",
      "Criar agente com ferramentas, memória e logs",
      "Monitorar custo, latência e qualidade",
      "Transformar projeto em produto ou oferta de serviço"
    ],
    "projects": [
      {
        "name": "Workflow pessoal de IA",
        "description": "Biblioteca de prompts, regras de validação e rotina de uso para estudo/código."
      },
      {
        "name": "Diagnóstico de IA",
        "description": "Análise de processos, oportunidades, riscos e ROI de automação."
      },
      {
        "name": "Mini LLM/classificador",
        "description": "Tokenização, embeddings, attention, treino pequeno e fine-tuning."
      },
      {
        "name": "Agente RAG com ferramentas",
        "description": "Busca vetorial, tool use, memória, logs, avaliação e fallback humano."
      }
    ],
    "concepts": [
      "Token: unidade textual processada por modelos de linguagem.",
      "Embedding: representação vetorial de significado.",
      "RAG: recuperação de contexto externo antes da resposta.",
      "Agent: sistema que usa modelo, ferramentas, memória e política de decisão.",
      "LLMOps: operação de soluções com modelo, prompt, custo, qualidade e rollback.",
      "Hallucination: resposta plausível, mas incorreta ou sem base no contexto."
    ],
    "references": [
      "Co-Intelligence — Ethan Mollick",
      "Prediction Machines — Ajay Agrawal, Joshua Gans e Avi Goldfarb",
      "The AI Advantage — Thomas H. Davenport",
      "Human + Machine — Paul R. Daugherty e H. James Wilson",
      "Build a Large Language Model — Sebastian Raschka",
      "Agentic Artificial Intelligence — Pascal Bornet et al."
    ],
    "nextSteps": [
      "Ler com entregáveis práticos, não apenas anotações.",
      "Estudar Python, SQL, APIs, Docker e ML básico em paralelo.",
      "Criar uma oferta simples de automação ou diagnóstico.",
      "Integrar IA ao blog como busca semântica ou chat com fontes."
    ],
    "page": "./trilhas/ia.html",
    "sourceKey": "ia"
  },
  "fin": {
    "title": "Educação Financeira e Monetização",
    "shortName": "Financeiro",
    "badge": "Finanças",
    "description": "Trilha para organizar vida financeira, quitar dívidas, construir reserva, investir com consciência e criar renda com programação e IA.",
    "objective": "Sair da desorganização financeira, criar estabilidade, aumentar renda, estudar investimentos e transformar competências técnicas em ativos vendáveis.",
    "summary": [
      "A ordem correta não começa por bolsa ou cripto; começa por controle, dívidas, reserva e aumento de renda.",
      "Investimentos entram depois de orçamento, matemática financeira e estabilidade mínima.",
      "Para desenvolvedor, a maior alavanca tende a ser renda: carreira, freelas, produtos digitais, automações e microSaaS."
    ],
    "contentGroups": [
      {
        "title": "Base e sobrevivência",
        "items": [
          "Mentalidade financeira, necessidade vs desejo vs status",
          "Orçamento pessoal, fluxo de caixa e diagnóstico financeiro",
          "Dívidas, juros, crédito, avalanche, bola de neve e renegociação",
          "Patrimônio líquido, contas futuras e gastos invisíveis"
        ]
      },
      {
        "title": "Estabilidade",
        "items": [
          "Reserva de emergência: 1, 3, 6 e 12 meses",
          "Tesouro Selic, CDB liquidez diária, fundos DI simples e contas remuneradas",
          "Porcentagem, juros compostos, valor presente/futuro, CDI, Selic e IPCA",
          "Sistema financeiro brasileiro: Banco Central, CVM, Tesouro, B3 e FGC"
        ]
      },
      {
        "title": "Crescimento e investimentos",
        "items": [
          "Renda fixa básica e avançada",
          "Ações, FIIs, ETFs, BDRs, exterior e criptoativos com cautela",
          "Gestão de risco, alocação, rebalanceamento, impostos e declaração",
          "Contabilidade básica, economia aplicada e finanças avançadas"
        ]
      },
      {
        "title": "Monetização",
        "items": [
          "Aumento de renda como desenvolvedor",
          "Precificação de serviços, contratos e manutenção mensal",
          "Produtos digitais, funil simples, página de vendas e suporte",
          "MicroSaaS, automações com IA, RAG, agentes e dashboards inteligentes"
        ]
      }
    ],
    "checklist": [
      "Sei exatamente quanto ganho líquido",
      "Sei quanto gasto por mês e para onde o dinheiro vai",
      "Tenho lista completa de dívidas, juros e vencimentos",
      "Conheço meu patrimônio líquido",
      "Sei quanto preciso para morar sozinho ou mudar de cidade",
      "Tenho meta de reserva de emergência",
      "Entendo juros simples, compostos, Selic, CDI e IPCA",
      "Sei comparar CDB, LCI, LCA e Tesouro",
      "Entendo risco, volatilidade, liquidez e prazo",
      "Sei precificar serviço, calcular margem e separar PF/PJ"
    ],
    "projects": [
      {
        "name": "Planilha de diagnóstico",
        "description": "Receitas, despesas, dívidas, bens, metas, fluxo projetado e patrimônio líquido."
      },
      {
        "name": "Plano de quitação",
        "description": "Comparar avalanche, bola de neve, renegociação e impacto no caixa."
      },
      {
        "name": "Simulador de reserva",
        "description": "Calcular reserva mínima, inicial e ideal com metas mensais."
      },
      {
        "name": "Oferta de serviço técnico",
        "description": "Pacote de landing page, automação, dashboard ou microSaaS com preço e escopo."
      }
    ],
    "concepts": [
      "Orçamento base zero: cada real recebe uma finalidade antes de ser gasto.",
      "Juros compostos: juros sobre juros, positivos ou negativos.",
      "Reserva de emergência: proteção de liquidez, não ferramenta de riqueza.",
      "Liquidez: facilidade de converter investimento em dinheiro.",
      "Alocação de ativos: distribuição do patrimônio por risco, prazo e objetivo.",
      "Margem de lucro: preço menos custos, considerando tempo e risco."
    ],
    "references": [
      "Tesouro Direto — material educacional",
      "Banco Central — Cidadania Financeira",
      "CVM — Portal do Investidor",
      "Livros de finanças pessoais e investimentos básicos",
      "Conteúdos sobre precificação de serviços",
      "Estudos de negócios digitais e microSaaS"
    ],
    "nextSteps": [
      "Criar diagnóstico financeiro com números reais.",
      "Resolver dívidas caras antes de investimentos complexos.",
      "Montar reserva inicial e plano de mudança.",
      "Aumentar renda com carreira, freelas, produtos digitais e IA."
    ],
    "page": "./trilhas/financeiro.html",
    "sourceKey": "fin"
  }
};

window.STUDY_PLAN_DATA = {
  PC,
  PBG,
  CK,
  tracks,
  metrics,
  daily,
  weekly,
  P,
  rules,
  awsMilestones,
  trackDetails
};
