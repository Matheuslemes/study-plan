/*
 * PROJETOS DE PORTFÓLIO — um projeto independente por trilha curricular na sua
 * fase de foco. São mini-produtos AUTOCONTIDOS (não evoluem entre si): cada um é
 * um repositório separado, com evidência própria (código + testes + doc).
 *
 * Fonte única — importe deste módulo. `track` usa o slug canônico da trilha
 * (a cor vem de var(--track-<track>) via tracks-palette.css).
 */

export const projetos = [
  // ── Fase 1 · Fundamentos, Java Core e SQL ──
  {
    track: 'java', trackLabel: 'Java', fase: 1, faseLabel: 'Fundamentos, Java Core e SQL',
    titulo: 'Gerenciador de biblioteca (CLI)',
    resumo: 'Aplicação de console em Java puro, com persistência SQL, para gerenciar livros, sócios e empréstimos.',
    descricao: 'Sem framework: exercita o núcleo da linguagem (tipos, OO, records, collections, streams, exceptions) e a base de SQL relacional. O domínio tem regras reais — não emprestar livro indisponível, não permitir sócio com pendência — que viram invariantes testáveis.',
    entregaveis: ['Modelo de domínio com invariantes (ex.: empréstimo só se houver exemplar disponível)', 'Camada de persistência SQL (SELECT/INSERT/UPDATE) versionada', 'Ao menos 1 teste automatizado verde por regra de negócio', 'README com como rodar e 50 exercícios de Java resolvidos'],
    evidencia: 'Repositório Git com código compilável, testes verdes e README.',
    competencias: ['OO e records', 'collections e streams', 'SQL relacional', 'testes']
  },
  {
    track: 'bancos', trackLabel: 'Bancos', fase: 1, faseLabel: 'Fundamentos, Java Core e SQL',
    titulo: 'Modelagem de uma locadora de filmes',
    resumo: 'Banco relacional normalizado (3FN) de uma locadora, com consultas analíticas.',
    descricao: 'Modela clientes, filmes, cópias e locações com PK/FK, cardinalidade e constraints. As consultas exigem SQL de verdade: filmes mais alugados, clientes inadimplentes e faturamento por mês usando JOIN, GROUP BY, CTE e window functions.',
    entregaveis: ['DER e schema em 3FN com constraints', 'Seed controlado de dados de teste', '5+ consultas analíticas (CTE/window) com resultado esperado documentado', 'Script versionado e reprodutível em PostgreSQL local'],
    evidencia: 'Script SQL versionado + documento com o resultado esperado de cada consulta.',
    competencias: ['modelagem e normalização', 'JOIN/GROUP BY/HAVING', 'CTE e window functions', 'PostgreSQL']
  },

  // ── Fase 2 · Java avançado, Spring Boot, REST e JPA ──
  {
    track: 'java', trackLabel: 'Java', fase: 2, faseLabel: 'Java avançado, Spring Boot, REST e JPA',
    titulo: 'API de encurtador de URL',
    resumo: 'Serviço REST com Spring Boot + JPA que encurta URLs, redireciona e conta acessos.',
    descricao: 'Sobe um degrau para o backend profissional: API REST com Spring Boot, persistência via JPA/Hibernate em PostgreSQL, geração de código curto, redirecionamento HTTP e contagem de cliques. Inclui tratamento de erros, validação de entrada e testes de integração.',
    entregaveis: ['Endpoints REST (criar link, redirecionar, estatísticas) com códigos HTTP corretos', 'Entidades JPA e repositórios com migração de schema', 'Validação de URL e tratamento de erros consistente', 'Testes de integração com Testcontainers (banco real)'],
    evidencia: 'Repositório + coleção de requests (Postman/HTTP file) + testes de integração verdes.',
    competencias: ['Spring Boot', 'JPA/Hibernate', 'REST', 'Testcontainers']
  },

  // ── Fase 3 · Testes, Docker e CI/CD ──
  {
    track: 'devops', trackLabel: 'DevOps', fase: 3, faseLabel: 'Testes, Docker e CI/CD',
    titulo: 'Pipeline CI/CD de uma aplicação demo',
    resumo: 'Fábrica de entrega completa: contêiner, testes automatizados e deploy contínuo com gate de qualidade.',
    descricao: 'Pega uma app simples (pode ser a API da F2 ou uma app de exemplo) e monta a esteira: Dockerfile enxuto, pipeline de CI (lint, testes, build, scan de segurança), publicação da imagem em um registry e um status check obrigatório que bloqueia merge sem pipeline verde.',
    entregaveis: ['Dockerfile multi-stage e imagem publicada em registry', 'Pipeline de CI com testes + scan de dependências', 'Branch protegido com status check obrigatório', 'Demonstração de um PR barrado por teste falho e liberado após correção'],
    evidencia: 'Link do PR bloqueado pelo check + execução verde do pipeline.',
    competencias: ['Docker', 'GitHub Actions/CI', 'quality gate', 'segurança de dependências']
  },

  // ── Fase 4 · Segurança aplicada e qualidade de código ──
  {
    track: 'sec', trackLabel: 'Segurança', fase: 4, faseLabel: 'Segurança aplicada e qualidade de código',
    titulo: 'Auditar e endurecer uma aplicação vulnerável',
    resumo: 'Encontrar, explorar e corrigir vulnerabilidades OWASP Top 10 em uma app deliberadamente insegura.',
    descricao: 'Usa uma aplicação-alvo propositalmente vulnerável (ex.: OWASP Juice Shop ou DVWA), em laboratório autorizado. Identifica falhas do OWASP Top 10 (injeção, quebra de autenticação, XSS, exposição de dados), demonstra o impacto, corrige com prática segura (prepared statements, AuthN/Z, validação, headers) e prova a correção.',
    entregaveis: ['Relatório de auditoria com OWASP Top 10 encontrados e evidência', 'Correção de ao menos 3 vulnerabilidades com o antes/depois', 'Teste que reproduz a falha e confirma a correção', 'Checklist de hardening (headers, segredos, dependências)'],
    evidencia: 'Relatório + PRs das correções + testes de regressão de segurança.',
    competencias: ['OWASP Top 10', 'AppSec', 'AuthN/AuthZ', 'correção de vulnerabilidade']
  },

  // ── Fase 5 · Performance, banco avançado e Redis ──
  {
    track: 'bancos', trackLabel: 'Bancos', fase: 5, faseLabel: 'Performance, banco avançado e Redis',
    titulo: 'Otimização de um catálogo de e-commerce',
    resumo: 'Diagnosticar e acelerar consultas lentas em um catálogo grande, com índices e cache Redis.',
    descricao: 'Parte de um dataset grande de produtos com buscas e filtros lentos. Usa EXPLAIN/ANALYZE para achar gargalos, cria índices adequados, elimina o problema de N+1 e adiciona cache Redis para os resultados mais quentes, com estratégia de invalidação. Mede e comprova o ganho.',
    entregaveis: ['Diagnóstico com EXPLAIN antes/depois', 'Índices e reescrita das consultas críticas', 'Cache Redis com política de invalidação', 'Relatório de latência (p95) antes vs depois'],
    evidencia: 'Relatório de performance com números antes/depois e o script versionado.',
    competencias: ['tuning de query', 'EXPLAIN/índices', 'N+1', 'cache com Redis']
  },

  // ── Fase 6 · Observabilidade e operação em produção ──
  {
    track: 'devops', trackLabel: 'DevOps', fase: 6, faseLabel: 'Observabilidade e operação em produção',
    titulo: 'Stack de observabilidade para um serviço demo',
    resumo: 'Instrumentar um serviço com métricas, logs e tracing, com dashboard, SLO e runbook.',
    descricao: 'Escolhe um serviço demo (ex.: uma API pública de clima) e o torna operável: logs estruturados com correlação, métricas no Prometheus (latência, throughput, erros), tracing distribuído com OpenTelemetry, dashboards no Grafana, alertas por SLO e um runbook para um incidente típico.',
    entregaveis: ['Logs estruturados com traceId e correlação', 'Métricas RED/USE no Prometheus + dashboard Grafana', 'Tracing OTel ponta a ponta de uma requisição', 'SLO definido + alerta + runbook de um incidente'],
    evidencia: 'Dashboard exportado + runbook versionado.',
    competencias: ['métricas (Prometheus)', 'logs', 'tracing (OTel)', 'SLO e runbook']
  },

  // ── Fase 7 · Arquitetura de software e DDD ──
  {
    track: 'arquitetura', trackLabel: 'Arquitetura', fase: 7, faseLabel: 'Arquitetura de software e DDD',
    titulo: 'Sistema de reservas de restaurante (hexagonal + DDD)',
    resumo: 'Modelar um domínio de reservas com arquitetura hexagonal, bounded contexts e decisões registradas.',
    descricao: 'Aplica DDD tático e arquitetura hexagonal (ports & adapters) a um domínio de reservas: contextos de Reservas, Mesas e Clientes, com regras de negócio isoladas do framework e da persistência. Documenta as decisões (ADRs) e a estrutura (diagrama C4 de contexto e contêiner).',
    entregaveis: ['Bounded contexts com linguagem ubíqua', 'Núcleo de domínio isolado por ports/adapters', 'ADRs justificando as decisões (ex.: por que hexagonal)', 'Diagrama C4 (contexto + contêiner)'],
    evidencia: 'Repositório com o domínio isolado, ADRs e diagramas C4.',
    competencias: ['DDD tático', 'hexagonal/ports&adapters', 'ADR', 'C4']
  },

  // ── Fase 8 · Sistemas distribuídos, mensageria e Kafka ──
  {
    track: 'arquitetura', trackLabel: 'Arquitetura', fase: 8, faseLabel: 'Sistemas distribuídos, mensageria e Kafka',
    titulo: 'Sistema de pedidos orientado a eventos',
    resumo: 'Serviços de pedido, estoque e pagamento comunicando por Kafka, com consistência via saga.',
    descricao: 'Constrói um fluxo distribuído: um pedido dispara eventos em Kafka consumidos por estoque e pagamento. Trata os problemas reais de sistemas distribuídos — entrega ao menos uma vez com idempotência, padrão Outbox para não perder eventos, saga de compensação para estorno e DLQ para falhas.',
    entregaveis: ['Produção e consumo de eventos via Kafka', 'Padrão Outbox garantindo publicação atômica', 'Consumidores idempotentes (chave de deduplicação)', 'Saga de compensação + DLQ para mensagens com falha'],
    evidencia: 'Lab com o fluxo de eventos + teste que prova idempotência e compensação.',
    competencias: ['Kafka', 'Outbox', 'idempotência', 'saga e DLQ']
  },

  // ── Fase 9 · Cloud AWS, IaC e Kubernetes ──
  {
    track: 'devops', trackLabel: 'DevOps', fase: 9, faseLabel: 'Cloud AWS, IaC e Kubernetes',
    titulo: 'Deploy de um app open-source em Kubernetes por IaC',
    resumo: 'Provisionar infraestrutura com Terraform e implantar uma aplicação real em Kubernetes.',
    descricao: 'Provisiona um cluster gerenciado e recursos (rede, banco, secrets) totalmente por Terraform, e implanta um app open-source (ex.: Ghost/WordPress) em Kubernetes com Deployment, Service, Ingress, HPA e Secrets. Foca em reprodutibilidade: destruir e recriar tudo pelo código.',
    entregaveis: ['Infra provisionada 100% por Terraform (sem clique manual)', 'Manifests Kubernetes (Deployment/Service/Ingress/HPA)', 'Segredos e configuração fora do código', 'Ambiente destruível e recriável pelo IaC'],
    evidencia: 'Repositório de IaC + manifests + evidência do app rodando no cluster.',
    competencias: ['Terraform (IaC)', 'Kubernetes', 'autoescala (HPA)', 'reprodutibilidade']
  },
  {
    track: 'aws', trackLabel: 'AWS', fase: 9, faseLabel: 'Cloud AWS, IaC e Kubernetes',
    titulo: 'API serverless de tarefas na AWS',
    resumo: 'API serverless (API Gateway + Lambda + DynamoDB) provisionada por IaC, segura e com custo medido.',
    descricao: 'Constrói uma API de tarefas sem servidor: API Gateway → Lambda → DynamoDB, tudo por IaC (Terraform ou SAM/CDK). Aplica IAM de menor privilégio, autenticação, observabilidade (CloudWatch/X-Ray) e revisa a solução contra os pilares do Well-Architected, medindo o custo por mil requisições (FinOps).',
    entregaveis: ['API Gateway + Lambda + DynamoDB por IaC', 'IAM de menor privilégio e autenticação', 'Observabilidade (CloudWatch/X-Ray)', 'Revisão Well-Architected + custo por 1k requisições'],
    evidencia: 'IaC versionada + relatório dos pilares Well-Architected e do custo.',
    competencias: ['serverless', 'IaC na AWS', 'IAM/segurança', 'Well-Architected e FinOps']
  },

  // ── Fase 10 · System Design e escalabilidade ──
  {
    track: 'arquitetura', trackLabel: 'Arquitetura', fase: 10, faseLabel: 'System Design e escalabilidade',
    titulo: 'System Design de um feed de rede social em escala',
    resumo: 'Documento de projeto de um feed (timeline) para milhões de usuários, com trade-offs e capacidade.',
    descricao: 'Um clássico de entrevista sênior, entregue como documento. Projeta um feed de rede social para grande escala: fan-out on write vs on read, particionamento, cache, filas, replicação e CDN. Estima capacidade (usuários, QPS, armazenamento) e explicita os trade-offs de cada decisão.',
    entregaveis: ['Requisitos funcionais e não-funcionais + estimativa de capacidade', 'Arquitetura com particionamento, cache e filas', 'Trade-offs (ex.: fan-out on write vs on read; consistência forte vs eventual)', 'Diagramas e pontos de falha/mitigação'],
    evidencia: 'Documento de System Design com diagramas e números de capacidade.',
    competencias: ['System Design', 'escalabilidade', 'trade-offs', 'estimativa de capacidade']
  },

  // ── Fase 11 · Frontend, Python e IA aplicada ──
  {
    track: 'frontend', trackLabel: 'Frontend', fase: 11, faseLabel: 'Frontend, Python e IA aplicada',
    titulo: 'Dashboard de finanças pessoais em React/TypeScript',
    resumo: 'SPA React tipada que consome uma API pública, com estados, acessibilidade e responsividade.',
    descricao: 'Um frontend real e contido: aplicação React com TypeScript que consome uma API (pública ou própria), exibe dados em gráficos/tabelas, com tratamento explícito de loading, erro e vazio. Acessível (navegação por teclado, ARIA, contraste) e responsiva até 390px.',
    entregaveis: ['SPA React + TypeScript consumindo uma API', 'Estados de loading, erro e vazio tratados', 'Acessibilidade (teclado, ARIA, contraste AA)', 'Responsivo a 390px e app publicado'],
    evidencia: 'App publicado + relatório Lighthouse (performance/acessibilidade).',
    competencias: ['React + TypeScript', 'estados e consumo de API', 'acessibilidade', 'responsividade']
  },
  {
    track: 'python', trackLabel: 'Python', fase: 11, faseLabel: 'Frontend, Python e IA aplicada',
    titulo: 'Serviço de análise de dados abertos',
    resumo: 'API FastAPI que ingere um dataset público real e expõe agregações e insights.',
    descricao: 'Python idiomático aplicado a dados: um serviço FastAPI que carrega um dataset público real (ex.: dados abertos do IBGE/gov.br), limpa e agrega com pandas, e expõe endpoints de consulta. Com tipagem, testes pytest e documentação automática da API.',
    entregaveis: ['Pipeline de ingestão e limpeza do dataset (pandas)', 'Endpoints FastAPI de agregação com validação (pydantic)', 'Testes pytest cobrindo as regras de agregação', 'Documentação automática (OpenAPI) da API'],
    evidencia: 'Serviço publicado/rodável + notebook de análise + testes verdes.',
    competencias: ['FastAPI', 'pandas/pipeline de dados', 'pytest', 'tipagem']
  },
  {
    track: 'ia', trackLabel: 'IA', fase: 11, faseLabel: 'Frontend, Python e IA aplicada',
    titulo: 'Chatbot RAG sobre uma base de documentos',
    resumo: 'Assistente com RAG sobre documentos próprios, com avaliação de qualidade, guardrails e custo.',
    descricao: 'IA aplicada de verdade: um chatbot que responde perguntas sobre uma base de documentos (ex.: FAQ de um produto, manuais ou papers) usando RAG — embeddings, busca semântica e um LLM (ex.: via Amazon Bedrock). O diferencial sênior é a avaliação: um conjunto de perguntas-gabarito mede a qualidade e o retrieval, com guardrails contra alucinação e controle de custo por consulta.',
    entregaveis: ['Ingestão e indexação dos documentos (embeddings + vetor)', 'Pipeline RAG (recuperação + geração) com fontes citadas', 'Avaliação com conjunto de perguntas-gabarito (precisão/recall de retrieval)', 'Guardrails anti-alucinação e custo medido por consulta'],
    evidencia: 'Demo funcional + notebook de avaliação com as métricas.',
    competencias: ['RAG e embeddings', 'LLM/Bedrock', 'avaliação de LLM', 'guardrails e custo']
  }
];
