/* ═══════════════════════════════════════════════
   CONTEÚDO SEMANAL — o que cada dia estuda em cada fase do Backend

   Os dias são slots de intenção fixa: segunda constrói, terça testa e refatora,
   quarta cuida dos dados, quinta integra e protege, sexta opera e decide.
   A grade de horários não muda entre as fases; muda o que cada bloco estuda.

   Cada bloco é [trilha, itens, tema, método?]:
     trilha  chave da trilha em phases.js
     itens   índices de conteudoDaFase(fase, trilha) que o horário estuda
     tema    título do bloco
     método  opcional; substitui o método do slot quando ele não se aplica
   `extra` são os índices do bloco transversal, que segue a trilha da grade base
   (DSA em segunda, quarta e sexta; inglês em terça e quinta).
   Nas fases de flex, `intencao` e `papel` trocam os do slot quando o tema muda.

   scripts/verificar-grade.mjs confere índices, cobertura e as regras de flex.
═══════════════════════════════════════════════ */

export const SLOTS_SEMANA = {
  segunda: {
    intencao: "Construir",
    papel: "A segunda abre a semana construindo a entrega principal, no tema que a fase define.",
    practice: "Implementar a entrega principal da semana no tema indicado, até chegar a um resultado verificável.",
    review: "Validar contrato, separação de responsabilidades, tratamento de erro e o teste do comportamento central.",
    strategy: "Dois blocos profundos no mesmo tema, sem troca de contexto. O complemento apoia a entrega.",
    metodo: {
      deep1: "Bloco mais profundo da semana. Estudar o tema e aplicá-lo na entrega, sem troca de contexto.",
      deep2: "Continuar a mesma entrega: aplicar o tema à regra de negócio, separar responsabilidades e deixar o código legível.",
      complement: "Estudar o complemento natural da entrega e entender o custo do que foi escrito."
    }
  },
  terca: {
    intencao: "Testar e refatorar",
    papel: "A terça verifica o que a segunda construiu, no mesmo domínio e sem alternar assunto.",
    practice: "Cobrir com testes o que foi construído na segunda e refatorar o que ficou confuso.",
    review: "Checar se o teste falha quando deve, se cobre regra de negócio e não implementação, e se a refatoração manteve o comportamento.",
    strategy: "Construir e testar em dias consecutivos consolida mais que alternar assuntos. O complemento é aplicado ao próprio código.",
    metodo: {
      deep1: "Verificar o que foi construído na segunda. O teste precisa falhar quando deve e cobrir a regra, não a implementação.",
      deep2: "Melhorar o que ficou confuso, com os testes como rede de segurança. Refatorar sem teste é apostar.",
      complement: "Estudar o tema e aplicá-lo ao código da semana, anotando o que mudaria."
    }
  },
  quarta: {
    intencao: "Dados",
    papel: "A quarta cuida da base física do sistema: o que a semana constrói precisa de dados confiáveis.",
    practice: "Dois blocos profundos em dados: estudar o tema e comprovar com consulta, medição ou restauração reais.",
    review: "Validar schema, migrations, rollback e decisões justificadas por medição.",
    strategy: "STUDY-019: no máximo dois domínios no dia. Um dia com três assuntos não é um dia temático.",
    metodo: {
      deep1: "Bloco profundo em dados. Estudar o tema e comprová-lo com consulta, medição ou restauração reais.",
      deep2: "Continuar em dados, sem troca de contexto: aplicar o tema na aplicação e medir o resultado.",
      complement: "Estudar o tema e registrar em que ponto ele toca a entrega da semana."
    }
  },
  quinta: {
    intencao: "Integrar e proteger",
    papel: "A quinta junta as partes da semana em um fluxo e aplica segurança ao que foi entregue.",
    practice: "Integrar o que foi construído na semana e aplicar o checklist de segurança ao fluxo entregue.",
    review: "Checar autenticação, autorização, validação de entrada, segredos e ausência de vazamento em log e erro.",
    strategy: "Segurança aplicada ao próprio código toda semana retém muito mais que uma fase isolada.",
    metodo: {
      deep1: "Integrar as partes da semana em um fluxo que funciona ponta a ponta, com contrato estável e erro tratado.",
      deep2: "Aplicar o tema ao fluxo da semana e comprovar com uma tentativa que precisa falhar.",
      complement: "Fechar pendências do fluxo integrado e documentar o que foi decidido."
    }
  },
  sexta: {
    intencao: "Operar e decidir",
    papel: "A sexta coloca para rodar, observa e registra a principal decisão da semana.",
    practice: "Rodar, observar e diagnosticar. A decisão técnica da semana vira registro escrito.",
    review: "Checar execução limpa, configuração, logs úteis, rollback e a decisão registrada.",
    strategy: "A sexta fecha o ciclo técnico: o que foi construído precisa rodar e ser observável.",
    metodo: {
      deep1: "Colocar para rodar de forma reproduzível e observar o comportamento.",
      deep2: "Investigar um problema real ou simulado: ler o sinal, formular hipótese, validar e corrigir.",
      complement: "Transformar a principal decisão da semana em registro: contexto, alternativas, escolha, trade-offs e critério de reversão."
    }
  }
};

/* Regra 1: a operação de sexta sobe um degrau por vez e nunca desce. */
export const ESCADA_DA_SEXTA = [
  { desde: 1, degrau: "Ambiente local" },
  { desde: 3, degrau: "Docker e CI/CD" },
  { desde: 6, degrau: "Observabilidade" },
  { desde: 9, degrau: "Cloud, IaC e Kubernetes" }
];

export const degrauDaSexta = (faseId) => ESCADA_DA_SEXTA.filter((d) => d.desde <= faseId).at(-1).degrau;

/* Regras 3 e 4: nestas fases a intenção do dia se mantém, mas o tema muda de trilha. */
export const REGRAS_DE_FLEX = {
  11: "Regra de flex: segunda, quarta e quinta passam para frontend, Python e IA, e Java fica em manutenção. Os horários não mudam.",
  12: "Regra de flex: a semana vira portfólio e entrevista. Os horários não mudam."
};

/* As metas de DSA de phases.js passam a ser em formato de entrevista a partir daqui. */
export const DSA_CRONOMETRADO_DESDE = 7;

const COMPROVAR = "Estudar o tema e comprovar com o critério observável do item.";
const ENTREVISTA = "Treinar como em entrevista: responder sem consultar, em voz alta, e revisar o que travou.";
const VITRINE = "Preparar para quem vê de fora: rodar do zero, demonstrar e explicar sem ajuda.";

/* Regra 2: `pico` marca o dia em que a fase concentra o seu tema principal. */
export const CONTEUDO_SEMANAL = {
  1: {
    segunda: {
      foco: "Java 21 e o primeiro caso de uso com regra de negócio",
      deep1: ["java", [0], "Java 21: tipos, igualdade, OO e Collections"],
      deep2: ["java", [3], "Primeiro caso de uso: console com regra de negócio"],
      complement: ["db", [2], "PostgreSQL local: schema e seed do caso de uso"],
      extra: [0, 1]
    },
    terca: {
      foco: "Refatoração guiada por testes, coesão e acoplamento",
      deep1: ["java", [1], "Clean Code e SOLID: refatorar guiado por testes"],
      deep2: ["java", [2], "Prática deliberada: reescrever buscando clareza"],
      complement: ["arquitetura", [0], "Coesão, acoplamento e responsabilidade única"],
      extra: [0]
    },
    quarta: {
      foco: "SQL do zero e modelagem relacional",
      deep1: ["db", [0], "SQL com intenção: JOIN, GROUP BY, CTE e o custo de cada cláusula"],
      deep2: ["db", [1], "Modelagem: entidades, cardinalidade e 3FN"],
      complement: ["devops", [1], "Ambiente local: subir a aplicação e o banco"],
      extra: [2, 3]
    },
    quinta: {
      foco: "Juntar as camadas e validar toda entrada",
      deep1: ["java", [3], "Fluxo completo: validação, estados e casos de erro"],
      deep2: ["sec", [0, 1], "Segredos fora do repositório e validação de entrada"],
      complement: ["java", [2], "Exercícios da semana e leitura de código maduro"],
      extra: [1]
    },
    sexta: {
      foco: "Operar o ambiente local e registrar como o código está organizado",
      deep1: ["devops", [0], "Linux e terminal: shell, processos, logs e curl"],
      deep2: ["devops", [1], "Diagnosticar o ambiente: JDK, PATH e portas"],
      complement: ["arquitetura", [1], "Pacotes por responsabilidade, ainda sem diagrama nem ADR", "Registrar em uma nota curta por que o projeto está organizado assim. O ADR formal entra na Fase 2."],
      extra: [4, 5, 6]
    }
  },
  2: {
    segunda: {
      foco: "Endpoint REST completo com Spring Boot e JPA",
      deep1: ["java", [1], "Spring Boot: controller fino, service, DTO e contrato OpenAPI"],
      deep2: ["java", [2], "Spring Data JPA: entidades, paginação e limite de transação"],
      complement: ["db", [0], "Constraints, índice justificado e migration do endpoint"],
      extra: [0, 1]
    },
    terca: {
      foco: "Testar o serviço e refatorar com Java avançado",
      deep1: ["java", [1], "Testes de serviço: validação e erro padronizado"],
      deep2: ["java", [0], "Refatorar com Streams, Optional e imutabilidade"],
      complement: ["arquitetura", [0], "Camadas com dependências na direção certa"],
      extra: [0]
    },
    quarta: {
      foco: "JPA na prática: migrations, N+1 e índices medidos",
      deep1: ["db", [0], "PostgreSQL aplicado: índices por medição e Flyway"],
      deep2: ["db", [1], "Armadilhas de JPA: N+1, fetch join e lazy × eager"],
      complement: ["devops", [0], "PostgreSQL em container para o ambiente da API"],
      extra: [2, 3]
    },
    quinta: {
      foco: "REST ponta a ponta com autenticação e API segura",
      deep1: ["java", [1], "Do request à resposta: validação e contrato ponta a ponta"],
      deep2: ["sec", [0, 1], "Spring Security: JWT, roles e API segura por padrão"],
      complement: ["java", [3], "Concorrência básica: threads, futures e Virtual Threads", COMPROVAR],
      extra: [1]
    },
    sexta: {
      foco: "Rodar a API em container local e escrever os primeiros ADRs",
      deep1: ["devops", [0], "Dockerfile da aplicação: camadas e cache de build"],
      deep2: ["devops", [1], "Script que builda e testa do zero, sem passos manuais"],
      complement: ["arquitetura", [1], "Primeiros ADRs: banco, autenticação e padrão de erro"],
      extra: [4, 5]
    }
  },
  3: {
    segunda: {
      foco: "Feature testável, guiada pela regra de negócio crítica",
      deep1: ["java", [4], "Escolher a regra crítica e os caminhos que importam"],
      deep2: ["java", [0], "Construir a feature com testes de comportamento"],
      complement: ["aws", [0, 1], "Conceitos de nuvem: regiões, IAM, S3, EC2, RDS e VPC", COMPROVAR],
      extra: [0]
    },
    terca: {
      foco: "Pico de testes: unidade, integração, contrato e mutação",
      pico: true,
      deep1: ["java", [0, 1], "JUnit, Mockito e Testcontainers com banco real"],
      deep2: ["java", [2, 3], "Testes de contrato e mutation testing com PIT", COMPROVAR],
      complement: ["arquitetura", [0], "Testabilidade: injeção e inversão de dependência"],
      extra: [1]
    },
    quarta: {
      foco: "Migrations no pipeline e dados de teste confiáveis",
      deep1: ["db", [0], "Migrations em pipeline: rollback seguro e backfill"],
      deep2: ["db", [1], "Fixtures, seeds determinísticos e limpeza entre testes"],
      complement: ["aws", [2, 3], "Billing, budgets e preparação enxuta para a CLF-C02", COMPROVAR],
      extra: [1]
    },
    quinta: {
      foco: "Integrar com banco real e proteger o pipeline",
      deep1: ["java", [1], "Fluxo integrado com Testcontainers e dados controlados"],
      deep2: ["sec", [0, 1], "SAST, SCA e secrets protegidos no CI"],
      complement: ["java", [2], "Contrato entre consumidor e provedor no pipeline"],
      extra: [0]
    },
    sexta: {
      foco: "Docker de produção, CI/CD verde e ADR da estratégia de testes",
      deep1: ["devops", [0, 1], "Dockerfile multi-stage e Compose com healthcheck"],
      deep2: ["devops", [2, 3], "GitHub Actions: build, testes, lint e gate de merge"],
      complement: ["arquitetura", [1], "ADR da estratégia de testes e da pirâmide adotada"],
      extra: [2]
    }
  },
  4: {
    segunda: {
      foco: "Feature com API estável e código limpo",
      deep1: ["java", [0], "Refino de API: versionamento, idempotência e paginação"],
      deep2: ["java", [1], "Código limpo na feature: complexidade sob controle"],
      complement: ["db", [1], "Auditoria: quem, quando e o quê nas entidades sensíveis"],
      extra: [0]
    },
    terca: {
      foco: "Refatorar por code smells, com threat modeling leve",
      deep1: ["java", [0], "Testar a evolução do contrato sem quebrar o cliente"],
      deep2: ["java", [1], "Refatorar por code smells e revisar antes do PR"],
      complement: ["arquitetura", [0], "Threat modeling leve: STRIDE e fronteiras de confiança"],
      extra: [0]
    },
    quarta: {
      foco: "Dados sensíveis: privilégio mínimo, criptografia e LGPD",
      deep1: ["db", [0], "Least privilege, roles e criptografia"],
      deep2: ["db", [0, 1], "Mascaramento, LGPD no schema e rastreabilidade"],
      complement: ["devops", [1], "Configuração por ambiente, sem segredo no repositório"],
      extra: [1]
    },
    quinta: {
      foco: "Pico de segurança: OWASP, OAuth2 e proteções de borda",
      pico: true,
      deep1: ["sec", [0], "OWASP Top 10 endpoint a endpoint, com teste que prova", COMPROVAR],
      deep2: ["sec", [1, 2], "OAuth2, OIDC, rate limiting, CORS e CSRF"],
      complement: ["sec", [3], "Checklist de segurança obrigatório por release", COMPROVAR],
      extra: [1]
    },
    sexta: {
      foco: "Pipeline que barra o inseguro e ADR de segurança",
      deep1: ["devops", [0], "SAST, SCA e verificação da imagem no pipeline"],
      deep2: ["devops", [1], "Promover a mesma imagem entre ambientes"],
      complement: ["arquitetura", [1], "ADR de autenticação, autorização e segredos"],
      extra: [2]
    }
  },
  5: {
    segunda: {
      foco: "Feature com orçamento de performance",
      deep1: ["java", [0], "Profiling, garbage collector e métricas da JVM"],
      deep2: ["java", [1], "Baseline e hipótese antes de mudar o código"],
      complement: ["db", [2], "Modelagem para leitura: views e particionamento"],
      extra: [0]
    },
    terca: {
      foco: "Benchmark, carga e refatoração do hot path",
      deep1: ["devops", [0], "Teste de carga: baseline com k6 ou JMeter"],
      deep2: ["java", [1], "Refatorar o hot path e medir de novo"],
      complement: ["java", [0], "Ler a JVM sob carga: heap, pausas e threads", COMPROVAR],
      extra: [0]
    },
    quarta: {
      foco: "Pico de banco: EXPLAIN, índices, transações e modelagem para leitura",
      pico: true,
      deep1: ["db", [0], "EXPLAIN ANALYZE, planos de execução e índices"],
      deep2: ["db", [1], "Isolamento, deadlock, contenção e MVCC", COMPROVAR],
      complement: ["db", [2], "Desnormalização controlada e views materializadas", COMPROVAR],
      extra: [1]
    },
    quinta: {
      foco: "Cache integrado ao fluxo, consistência e proteção sob carga",
      deep1: ["arquitetura", [0], "Cache-aside e write-through no fluxo da semana"],
      deep2: ["sec", [0], "Rate limiting sob carga e abuso por consulta cara"],
      complement: ["arquitetura", [0], "Invalidação e consistência eventual do cache", COMPROVAR],
      extra: [1]
    },
    sexta: {
      foco: "Medir latência e throughput no pipeline e escrever o ADR de cache",
      deep1: ["devops", [0], "Carga no pipeline: baseline e regressão"],
      deep2: ["devops", [0], "Diagnosticar uma regressão de latência ou throughput"],
      complement: ["arquitetura", [1], "ADR de cache: frescor do dado × latência"],
      extra: [2]
    }
  },
  6: {
    segunda: {
      foco: "Feature instrumentada: logs, métricas e trace id",
      deep1: ["java", [0], "Logs estruturados e correlação por trace id"],
      deep2: ["java", [0], "Métricas de negócio e de sistema na feature"],
      complement: ["db", [0], "Slow query log e métricas de conexão da feature"],
      extra: [0]
    },
    terca: {
      foco: "Provocar falhas, diagnosticar e refatorar com resiliência",
      deep1: ["java", [1], "Heap dump, thread dump e análise com evidência", COMPROVAR],
      deep2: ["java", [0], "Refatorar o que a telemetria não deixou diagnosticar"],
      complement: ["arquitetura", [0], "Resiliência: timeout, retry, circuit breaker e bulkhead"],
      extra: [0]
    },
    quarta: {
      foco: "Telemetria do banco: slow queries, pool e locks",
      deep1: ["db", [0], "Slow query log e locks"],
      deep2: ["db", [0], "Saturação do pool e métricas de conexão"],
      complement: ["devops", [0], "Expor as métricas do banco na stack de observabilidade"],
      extra: [0]
    },
    quinta: {
      foco: "Tracing entre serviços e logs sem dado sensível",
      deep1: ["java", [0], "Seguir uma requisição pelo trace id, ponta a ponta"],
      deep2: ["sec", [0], "Logs sem dados sensíveis e auditoria de acesso"],
      complement: ["java", [1], "Análise de incidente com a evidência coletada"],
      extra: [1]
    },
    sexta: {
      foco: "Pico de operação: stack de observabilidade, SLO e alertas",
      pico: true,
      deep1: ["devops", [0, 1], "OpenTelemetry, Prometheus, Grafana e SLO"],
      deep2: ["devops", [2], "Alertas por sintoma do usuário e diagnóstico pelos sinais"],
      complement: ["arquitetura", [1], "Readiness × liveness e ADR de política de falha"],
      extra: [0, 1]
    }
  },
  7: {
    segunda: {
      foco: "Arquitetura vira o principal: DDD e agregados",
      pico: true,
      deep1: ["arquitetura", [1], "DDD estratégico: bounded context e linguagem ubíqua"],
      deep2: ["java", [1], "Modelagem rica: agregados, value objects e invariantes"],
      complement: ["java", [1], "Serviços de domínio e invariantes no próprio agregado", COMPROVAR],
      extra: [0]
    },
    terca: {
      foco: "Refatoração hexagonal com as dependências apontando para dentro",
      pico: true,
      deep1: ["java", [0], "Ports e adapters: isolar o domínio do framework", "Refatorar com os testes como rede de segurança: o comportamento não muda, as dependências sim."],
      deep2: ["java", [0], "Trocar um adapter sem tocar no domínio"],
      complement: ["arquitetura", [2], "Monólito modular: fronteiras testáveis antes de distribuir"],
      extra: [0]
    },
    quarta: {
      foco: "Dados com dono: persistência orientada ao domínio",
      deep1: ["db", [0], "Mapear o agregado e evitar o vazamento do ORM"],
      deep2: ["db", [0], "Repositório como contrato e dados por contexto"],
      complement: ["devops", [0], "Pipeline por módulo e build isolado"],
      extra: [0]
    },
    quinta: {
      foco: "Integrar contextos com anticorruption layer",
      deep1: ["arquitetura", [1], "Context map e anticorruption layer entre contextos"],
      deep2: ["sec", [0], "Fronteiras de confiança e autorização no domínio"],
      complement: ["arquitetura", [4], "CQRS e Saga, e quando não usar", COMPROVAR],
      extra: [1]
    },
    sexta: {
      foco: "C4 e ADRs formais sobre o sistema refatorado",
      pico: true,
      deep1: ["arquitetura", [0], "C4: contexto, containers e componentes", COMPROVAR],
      deep2: ["devops", [0], "Operar o build modular e diagnosticar o pipeline"],
      complement: ["arquitetura", [3], "ADRs e RFCs completos: trade-offs e reversão"],
      extra: [0, 1]
    }
  },
  8: {
    segunda: {
      foco: "Produtor e consumidor com Spring e Kafka",
      deep1: ["java", [0], "Spring com Kafka: producer, consumer e serialização"],
      deep2: ["java", [0], "Tratamento de erro e dead-letter queue"],
      complement: ["aws", [0], "SQS, SNS, EventBridge e Kinesis comparados ao Kafka"],
      extra: [0]
    },
    terca: {
      foco: "Testar idempotência e reprocessamento, e decidir se vale distribuir",
      deep1: ["java", [1], "Provocar entrega duplicada e comprovar efeito único"],
      deep2: ["java", [1], "Chave de idempotência e mensagens já processadas"],
      complement: ["arquitetura", [0, 5], "Medir antes de extrair e quando não usar microsserviços"],
      extra: [0]
    },
    quarta: {
      foco: "Outbox, dual-write e consistência entre serviços",
      deep1: ["db", [0], "Transações distribuídas, outbox e read models"],
      deep2: ["db", [1], "NoSQL pragmático: quando o relacional não é a melhor escolha"],
      complement: ["aws", [1], "Plano de estudo da SAA-C03, com marcos até a prova", COMPROVAR],
      extra: [0]
    },
    quinta: {
      foco: "Pico de integração: eventos, Outbox, Inbox e Saga",
      pico: true,
      deep1: ["arquitetura", [2], "Arquitetura orientada a eventos: estilos de evento", COMPROVAR],
      deep2: ["sec", [0], "Autenticação entre serviços, mTLS e proteção de tópicos"],
      complement: ["arquitetura", [3], "Outbox, Inbox e Saga coreografada × orquestrada", COMPROVAR],
      extra: [1]
    },
    sexta: {
      foco: "Operar fila, lag e DLQ e escrever o ADR de mensageria",
      deep1: ["devops", [0], "Kafka em Compose: partições, consumer groups e lag"],
      deep2: ["devops", [0], "Diagnosticar lag e reprocessar pela DLQ"],
      complement: ["arquitetura", [1, 4], "ADR de mensageria: requisito, CAP e consistência"],
      extra: [0, 1]
    }
  },
  9: {
    segunda: {
      foco: "Feature cloud-native: 12-factor e encerramento gracioso",
      deep1: ["java", [0], "12-factor: configuração externalizada"],
      deep2: ["java", [0], "Graceful shutdown e readiness"],
      complement: ["devops", [0], "AWS prático: VPC, ALB, ECS/EKS e RDS integrados", COMPROVAR],
      extra: [0]
    },
    terca: {
      foco: "Testar reinícios e degradação, desenhando para a falha",
      deep1: ["java", [0], "Testar SIGTERM, reinício e perda de instância"],
      deep2: ["java", [0], "Refatorar para serviço stateless e resiliente a reinício"],
      complement: ["arquitetura", [0], "Multi-AZ, escala horizontal e desenho para falha"],
      extra: [1]
    },
    quarta: {
      foco: "Banco gerenciado, backup e RTO/RPO medidos",
      deep1: ["db", [0], "RDS: backup, réplica de leitura, failover e custo"],
      deep2: ["db", [1], "Recuperação de desastre: restore e RTO/RPO medidos"],
      complement: ["aws", [2, 3], "SAA-C03: a última certificação obrigatória do plano", COMPROVAR],
      extra: [0]
    },
    quinta: {
      foco: "Integrar com serviços da AWS e proteger com IAM e segredos",
      deep1: ["aws", [1], "Compute, storage, rede, banco e identidade em profundidade"],
      deep2: ["sec", [0], "IAM com menor privilégio, security groups, KMS e rotação"],
      complement: ["aws", [0], "Desenho resiliente, performático, seguro e com custo otimizado", COMPROVAR],
      extra: [0]
    },
    sexta: {
      foco: "Pico de cloud: Terraform, Kubernetes, deploy e rollback",
      pico: true,
      deep1: ["devops", [1, 2], "Terraform: state e módulos. Kubernetes: deployment e HPA"],
      deep2: ["devops", [3], "Deploy real com pipeline completo e rollback automático"],
      complement: ["arquitetura", [1], "Revisão Well-Architected e decisão do risco a corrigir"],
      extra: [0, 1]
    }
  },
  10: {
    segunda: {
      foco: "Componente pensado para escala",
      deep1: ["java", [0], "Particionar a carga por chave na aplicação"],
      deep2: ["java", [0], "Limites de throughput e sharding lógico"],
      complement: ["arquitetura", [1], "System Design nível 1: encurtador de URL e rate limiter", COMPROVAR],
      extra: [0]
    },
    terca: {
      foco: "Testar o limite e refatorar para escala",
      deep1: ["java", [0], "Medir o ganho do particionamento e achar o limite"],
      deep2: ["java", [0], "Refatorar o gargalo encontrado"],
      complement: ["arquitetura", [5], "Método de System Design: requisitos, estimativa, API, dados e gargalos"],
      extra: [1]
    },
    quarta: {
      foco: "Escala de dados: réplica, sharding, CDC e OLTP × OLAP",
      deep1: ["db", [0], "Réplica, sharding e separação entre OLTP e OLAP"],
      deep2: ["db", [0], "CDC e data pipeline"],
      complement: ["arquitetura", [3], "System Design nível 3: feed e busca", COMPROVAR],
      extra: [0]
    },
    quinta: {
      foco: "Integração assíncrona em escala e isolamento de tenant",
      deep1: ["arquitetura", [2], "System Design nível 2: fan-out, notificações e chat", COMPROVAR],
      deep2: ["sec", [0], "WAF, DDoS, isolamento de tenant e limites por cliente"],
      complement: ["arquitetura", [4], "System Design nível 4: pagamentos e ledger", COMPROVAR],
      extra: [0]
    },
    sexta: {
      foco: "System Design ganha peso: desenho semanal e deploy em escala",
      pico: true,
      deep1: ["arquitetura", [0, 6], "Desenho completo cronometrado em 45 minutos", COMPROVAR],
      deep2: ["devops", [0], "Blue-green, canary, feature flag e rollback automatizado"],
      complement: ["arquitetura", [5], "ADR de escala: o gargalo, a decisão e o trade-off"],
      extra: [0, 1]
    }
  },
  11: {
    segunda: {
      foco: "Frontend: React e TypeScript consumindo a API do DevCore",
      deep1: ["frontend", [0, 1], "React e TypeScript: componentes, estado e contrato tipado"],
      deep2: ["frontend", [2, 3], "Consumo de API e Next.js: estados, rotas e acessibilidade"],
      complement: ["java", [0], "Java em manutenção: manter a suíte do backend verde", "Manter a suíte verde e corrigir o que quebrar. Sem conteúdo novo de Java nesta fase."],
      extra: [0]
    },
    terca: {
      foco: "Testes de frontend, segurança no navegador e refatoração",
      deep1: ["frontend", [4], "Testes de componente e deploy do app"],
      deep2: ["frontend", [2], "Refatorar os estados de loading, vazio e erro"],
      complement: ["sec", [3], "Segurança frontend: XSS, CSP, token e CORS"],
      extra: [1]
    },
    quarta: {
      foco: "Python: FastAPI e automação sobre o domínio",
      intencao: "Python e automação",
      papel: "Nesta fase, a quarta sai do banco relacional e constrói o serviço Python sobre os dados do domínio.",
      practice: "Construir um serviço FastAPI tipado e um script de automação sobre os dados do próprio domínio.",
      review: "Checar contrato HTTP, testes contra banco real, ruff e mypy verdes e reexecução limpa do script.",
      noite: "Revisar o serviço Python e os erros encontrados.",
      deep1: ["py", [0, 1, 2], "Python moderno e FastAPI: tipagem, pytest e contrato HTTP", COMPROVAR],
      deep2: ["py", [3, 4, 5, 6, 7], "Async, SQLAlchemy, qualidade, operação e automação de dados", COMPROVAR],
      complement: ["db", [0], "Banco vetorial: embeddings, similaridade e pgvector"],
      extra: [0]
    },
    quinta: {
      foco: "IA aplicada: LLM, RAG avaliado e defesa contra prompt injection",
      deep1: ["ia", [0, 1, 2, 3], "LLMs e RAG: prompt, recuperação, citação e baseline", COMPROVAR],
      deep2: ["sec", [0, 1, 2], "Prompt injection, autorização em RAG e red teaming"],
      complement: ["ia", [4, 5, 6, 7, 8], "Segurança, observabilidade, operação e avaliação de IA", COMPROVAR],
      extra: [0]
    },
    sexta: {
      foco: "Integrar frontend, backend e IA no mesmo pipeline",
      deep1: ["devops", [0], "Pipeline único: API Java, app frontend e serviço Python"],
      deep2: ["devops", [0], "Diagnosticar a integração dos três artefatos"],
      complement: ["arquitetura", [0, 1], "ADR de IA: LLM × regra, custo, latência e fallback"],
      extra: [0, 1]
    }
  },
  12: {
    segunda: {
      foco: "Polir o DevCore para a release: README, demo e integração",
      intencao: "Preparar a release",
      papel: "Na reta final, a segunda prepara o que quem avalia o portfólio vai abrir.",
      practice: "Preparar a release: README que permite rodar do zero, demo pública e runbooks atualizados.",
      review: "Alguém de fora consegue rodar a demo sem ajuda? O fluxo do frontend ao backend funciona?",
      deep1: ["pratica", [2], "Release do DevCore: README, demo e runbooks", VITRINE],
      deep2: ["frontend", [0], "Demo pública do fluxo do frontend ao backend", VITRINE],
      complement: ["py", [0], "Serviço Python e feature de IA executáveis e testados", VITRINE],
      extra: [0]
    },
    terca: {
      foco: "DSA cronometrado e mock de coding",
      intencao: "Treinar coding",
      papel: "A terça deixa de testar o produto e passa a treinar a resolução de problemas sob tempo.",
      practice: "Simulado cronometrado de coding: explicar a abordagem e a complexidade antes de codar.",
      review: "Refazer sem consulta o problema que travou e revisar a comunicação do raciocínio.",
      deep1: ["dsa", [0], "Simulado cronometrado, resolvido em voz alta", ENTREVISTA],
      deep2: ["dsa", [1], "Padrões-chave revisitados sem consulta", ENTREVISTA],
      complement: ["java", [0, 1], "Java e Spring em formato de entrevista técnica", ENTREVISTA],
      extra: [1]
    },
    quarta: {
      foco: "Revisar dados e decisões do portfólio",
      intencao: "Revisar dados",
      papel: "A quarta revisita as decisões de dados para sustentá-las em entrevista.",
      practice: "Revisar as decisões de dados do portfólio como se estivesse em entrevista.",
      review: "Justificar índice, normalização e escolha SQL ou NoSQL em um caso apresentado na hora.",
      deep1: ["db", [0], "Modelagem, performance e decisões de dados para entrevista", ENTREVISTA],
      deep2: ["db", [0], "Justificar índice, normalização e escolha SQL ou NoSQL", ENTREVISTA],
      complement: ["ia", [0], "Case study de IA: problema, métrica, custo e limitação", VITRINE],
      extra: [1]
    },
    quinta: {
      foco: "System Design, defesa de arquitetura e behavioral em simulado",
      intencao: "Simular entrevista",
      papel: "A quinta simula a entrevista de System Design e a comportamental.",
      practice: "Simular System Design e perguntas comportamentais, defendendo decisões reais do portfólio.",
      review: "A decisão se sustentou pelos trade-offs sob pergunta? A resposta STAR ficou clara?",
      deep1: ["arquitetura", [0], "Defesa de arquitetura dos labs do portfólio", ENTREVISTA],
      deep2: ["sec", [0], "Segurança para entrevista: OWASP, autorização e segredos", ENTREVISTA],
      complement: ["arquitetura", [1], "Liderança técnica: code review, mentoria e RFC", ENTREVISTA],
      extra: [0]
    },
    sexta: {
      foco: "Defesa em inglês, operação revisada e cloud contra o Well-Architected",
      intencao: "Defender em inglês",
      papel: "A sexta fecha a semana defendendo o trabalho em inglês e revisando a operação.",
      practice: "Defender o DevCore em inglês e revisar a operação e a nuvem do portfólio.",
      review: "A fala em inglês se sustentou? O incidente do portfólio tem causa raiz e correção claras?",
      deep1: ["ingles", [1], "Apresentar o DevCore em inglês em dez minutos", "Apresentar sem ler, gravar e revisar clareza, termos e a resposta STAR."],
      deep2: ["devops", [0], "Operação para entrevista: pipeline, rollback e postmortem", ENTREVISTA],
      complement: ["aws", [0, 1], "Revisão Well-Architected. Nova certificação só com exigência de vaga", COMPROVAR],
      extra: [0]
    }
  }
};
