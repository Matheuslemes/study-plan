/* ═══════════════════════════════════════════════
   PHASES — as 12 fases do plano (STUDY-001)

   A FASE é a fonte de verdade: ela define o conteúdo ativo,
   e o conteúdo ativo define a rotina. Nunca o contrário.

   Fonte única de verdade — não duplicar estes dados
   em nenhuma página. Importe deste módulo.
═══════════════════════════════════════════════ */

/* NOTA DE FORMATO: itens que já trazem "critério observável:" (minúsculo) são
   exibidos como escritos — converterTopicoEmObjetivo os retorna intactos, sem o
   prefixo "Implementar em código:". Use sempre minúsculo ao aprofundar. */
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
      "Java 21 a fundo: tipos e autoboxing, igualdade (== × equals), OO com herança e composição, polimorfismo e interfaces com default methods, Collections, exceptions checked × unchecked, generics, records e Streams. critério observável: reimplementar uma coleção pequena e justificar cada escolha de tipo",
      "Clean Code e SOLID no próprio código: nomes que revelam intenção, funções pequenas e coesas, separação de responsabilidades e refatoração guiada por testes. critério observável: reduzir uma classe confusa a funções coesas sem alterar o comportamento",
      "Prática diária deliberada: exercícios aplicados, leitura de código maduro (JDK e bibliotecas) e reescrita das próprias soluções buscando clareza. critério observável: explicar em voz alta, sem consultar, por que cada solução funciona",
      "Entregável: uma aplicação Java de console com regra de negócio real (validação, estados e casos de erro) e 50 exercícios versionados. critério observável: roda do zero em outra máquina e rejeita entrada inválida sem quebrar"
    ],
    "dsa": [
      "Base com análise de custo: arrays, listas, strings, hashing, pilhas e filas — sempre com a complexidade Big O de cada operação. critério observável: dizer o custo de inserir e buscar em cada estrutura antes de codar",
      "Collections Framework em Java: escolher entre List, Set, Map, Queue e Deque pela complexidade e pela semântica, não por hábito. critério observável: justificar por Big O a estrutura escolhida em um problema real",
      "Contrato de equals em entidades e value objects: reflexividade, simetria, transitividade, consistência e comparação com null. critério observável: escrever um equals correto e um teste que quebre se o contrato for violado",
      "Contrato de hashCode: coerência com equals, boa distribuição e efeito prático em HashMap e HashSet. critério observável: demonstrar o bug de usar um objeto mutável mal implementado como chave de HashMap",
      "Rotina fixa 3×/semana, 40min, do mês 1 ao 36 sem interrupção — consistência vence volume. critério observável: manter a sequência de sessões registrada",
      "Método: resolver, explicar em voz alta e reimplementar sem consultar a solução. critério observável: reimplementar de memória o problema do dia anterior",
      "Meta da fase: 60 problemas fáceis resolvidos E explicados. critério observável: cada solução tem a análise de complexidade escrita"
    ],
    "db": [
      "SQL relacional com intenção: SELECT, WHERE, JOIN (inner e left), GROUP BY, HAVING, CTE, subquery e constraints — sabendo o que cada cláusula custa. critério observável: prever quais linhas a consulta retorna antes de rodá-la",
      "Modelagem: entidades, PK/FK, cardinalidade, normalização até a 3FN e DER. critério observável: modelar um domínio pequeno sem anomalias de atualização e justificar cada chave",
      "PostgreSQL local: criar schema, escolher tipos, usar transações e um seed controlado e reproduzível. critério observável: recriar o banco do zero com um script e dados de teste"
    ],
    "git": [
      "Git por dentro: working tree, staging, commit, branch, merge, remote e clone/fetch/pull/push — entendendo que um commit é um snapshot endereçado por hash. critério observável: explicar o que muda em cada área ao dar add e commit",
      "GitHub na prática: README útil, issues, Pull Request simples, Conventional Commits e histórico limpo. critério observável: abrir um PR com descrição estruturada e histórico legível",
      "Transversal: todo exercício e projeto vive em repositório desde o primeiro dia. critério observável: nenhum código fora de controle de versão"
    ],
    "arquitetura": [
      "Noções iniciais aplicadas ao código: requisitos e restrições, responsabilidade única, coesão e acoplamento — decididos ao nomear pacotes e classes. critério observável: apontar no próprio código onde o acoplamento está alto e por quê",
      "Ainda sem diagramas formais: o foco é escrever código organizado, não desenhar sistemas. critério observável: organizar o projeto em pacotes por responsabilidade, sem dependências circulares"
    ],
    "devops": [
      "Linux e terminal com fluência: shell, permissões, processos, variáveis de ambiente, leitura de logs, curl e troubleshooting básico. critério observável: diagnosticar por que um processo não sobe usando só o terminal",
      "Docker entra apenas na Fase 3 — aqui a base é operar o próprio ambiente com competência (JDK, PATH, portas). critério observável: subir e parar a aplicação e o banco localmente sem depender da IDE"
    ],
    "sec": [
      "Segurança como hábito desde o dia 1: secrets fora do repositório, .env no .gitignore e senhas sempre com hash, nunca em texto puro. critério observável: nenhum segredo no histórico do Git",
      "Princípios que guiam decisões: CIA (confidencialidade, integridade, disponibilidade), autenticação × autorização, validação de toda entrada e menor privilégio. critério observável: classificar um endpoint por esses princípios antes de implementá-lo"
    ],
    "pratica": [
      "Exercícios de Java: 50 problemas cobrindo OO, collections, streams e exceptions, resolvidos sem colar solução pronta. critério observável: reresolver 5 deles de memória no fim da fase",
      "Lab de SQL: modelar do zero um domínio pequeno, criar o schema e escrever 30 consultas de dificuldade crescente. critério observável: o lab roda do zero em outra máquina",
      "DevCore F1 — Fundação: iniciar um único produto com domínio de negócio, aplicação Java de console, schema PostgreSQL e histórico Git. critério observável: o produto tem README que permite rodá-lo do zero"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11. IA pode ser usada como ferramenta de apoio ao estudo, mas não é objeto de estudo ainda."],
    "aws": {
      "cert": "Sem AWS nesta fase",
      "exam": "",
      "topics": [
        "Cloud entra na Fase 3 (CLF-C02), depois da base de Java, SQL, Docker e CI/CD — ordem deliberada para não estudar nuvem no vácuo",
        "Estudar cloud antes de saber operar uma aplicação local gera conhecimento decorativo: aqui o foco é dominar o ambiente local primeiro"
      ]
    },
    "math": [
      "Acoplada a DSA: lógica proposicional, conjuntos, relações e análise de complexidade — a base para raciocinar sobre código. critério observável: provar a complexidade de um trecho e expressar uma condição como lógica proposicional",
      "Sem estudo matemático abstrato desconectado do código: cada conceito entra a serviço de um algoritmo ou estrutura. critério observável: para cada tópico, apontar onde ele aparece no código da fase"
    ],
    "fin": [
      "Revisão financeira mensal de 1h, fora do cronograma técnico semanal — cria o hábito sem competir com o estudo. critério observável: 12 revisões mensais registradas ao longo do ano",
      "Orçamento, reserva de emergência e controle de gastos: montar o básico que sustenta 36 meses de estudo. critério observável: um orçamento escrito e uma reserva-alvo definida"
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
      "Java avançado com intenção: Streams complexos (collectors, agrupamento, reduções), Optional sem abuso, generics com wildcards e bounds, imutabilidade real, enums ricos com comportamento e tratamento de exceções por camada. critério observável: refatorar um trecho imperativo para stream legível e explicar quando o stream piora a leitura",
      "Spring Boot 3: REST APIs com controllers finos, services com a regra de negócio, DTOs (nunca expor a entidade), Bean Validation, exception handler global e contrato OpenAPI. critério observável: um endpoint documentado no OpenAPI que valida a entrada e responde erro padronizado",
      "Spring Data JPA: entidades e relacionamentos, repositories, paginação, specifications e limite de transação (@Transactional no service). critério observável: consultar com paginação e demonstrar a transação abrangendo a operação inteira",
      "Concorrência básica: threads, ExecutorService, CompletableFuture e Virtual Threads — incluindo quando NÃO usar em carga CPU-bound, o problema de pinning e o gargalo do pool de conexão. critério observável: medir o throughput com e sem Virtual Threads e explicar o resultado"
    ],
    "dsa": [
      "Estruturas lineares avançadas e padrões de varredura: deque, listas ligadas, two pointers e sliding window. critério observável: resolver um problema de janela deslizante em O(n) e provar o custo",
      "Comparator e Comparable: ordenar objetos por múltiplos critérios sem violar o contrato de equals. critério observável: ordenar por dois campos e explicar por que a ordenação é estável",
      "Prefix sum: responder consultas de intervalo em O(1) após pré-computação e reconhecer quando isso reduz a complexidade. critério observável: transformar um cálculo O(n) por consulta em O(1) com prefix sum",
      "Binary search: buscar valor e limites (lower/upper bound) em dados ordenados, inclusive binary search on answer. critério observável: aplicar binary search on answer a um problema de minimização e justificar os limites",
      "Recursão e backtracking introdutório: modelar o espaço de estados, podar ramos inviáveis e medir o custo. critério observável: resolver um problema de backtracking e estimar o número de estados visitados",
      "Meta da fase: 60 problemas médios-fáceis, cada um com a análise de complexidade escrita. critério observável: manter o registro com a Big O de cada solução"
    ],
    "db": [
      "PostgreSQL aplicado: constraints, índices justificados por medição, migrations versionadas com Flyway e consultas JPQL/SQL. critério observável: criar um índice e comprovar o ganho lendo o EXPLAIN antes e depois",
      "JPA prático e suas armadilhas: N+1, fetch join, lazy × eager, cascade e pitfalls comuns de mapeamento. critério observável: reproduzir um N+1 de propósito e corrigi-lo com fetch join, mostrando as queries emitidas"
    ],
    "git": [
      "Pull Requests de verdade: descrição estruturada, revisão, squash × rebase, resolução de conflitos e branch naming consistente. critério observável: abrir um PR revisável com histórico limpo e um conflito resolvido de forma rastreável",
      "Proteção de branch e CODEOWNERS no repositório principal. critério observável: exigir revisão e checks verdes antes do merge na branch principal"
    ],
    "arquitetura": [
      "Arquitetura em camadas com dependências na direção certa: controller, application/service, domain e infrastructure. critério observável: um teste ou verificação que falhe se uma camada interna depender de uma externa",
      "Primeiros ADRs formais: escolha de banco, estratégia de autenticação e padrão de erro da API. critério observável: um ADR versionado com contexto, alternativas, decisão e trade-off"
    ],
    "devops": [
      "Introdução ao Docker (mês 6): Dockerfile da aplicação e container do PostgreSQL, entendendo camadas e cache de build. critério observável: subir app + banco com um comando e explicar cada camada do Dockerfile",
      "Preparação para CI/CD — o pipeline completo é o núcleo da Fase 3; aqui, automatizar build e testes localmente. critério observável: um script que builda e testa do zero, sem passos manuais"
    ],
    "sec": [
      "Spring Security: autenticação JWT, cadeia de filtros, roles/authorities, BCrypt e refresh token. critério observável: proteger um endpoint por role e demonstrar acesso negado sem o token correto",
      "API segura por padrão: validação robusta de entrada, tratamento de erro sem vazamento de stack ou detalhes e proteção contra injection. critério observável: um teste que prove que entrada maliciosa é rejeitada e o erro não vaza dados"
    ],
    "pratica": [
      "Lab de Spring Boot: construir uma API REST completa do zero, com validação e tratamento de erro padronizado. critério observável: a API roda do zero em outra máquina e responde erros consistentes",
      "Exercícios de JPA: mapear relacionamentos, paginar e reproduzir e corrigir um N+1 de propósito. critério observável: mostrar as queries emitidas antes e depois da correção",
      "DevCore F2 — Backend HTTP: evoluir o domínio da F1 para API Spring Boot com JPA, JWT, validação e contrato OpenAPI. critério observável: o contrato OpenAPI publicado e o fluxo autenticado funcionando ponta a ponta"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11."],
    "aws": {
      "cert": "Sem AWS nesta fase",
      "exam": "",
      "topics": [
        "Foco integral em Spring, REST e JPA — a base que sustenta qualquer arquitetura cloud posterior; nuvem só faz sentido sobre uma aplicação que já roda"
      ]
    },
    "math": [
      "Acoplada a DSA: indução, contagem, probabilidade básica e análise amortizada. critério observável: provar por indução a correção de um laço e calcular o custo amortizado de uma operação"
    ],
    "fin": [
      "Revisão financeira mensal de 1h — orçamento e acompanhamento de metas do mês. critério observável: comparar previsto × realizado do mês e ajustar a meta"
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
      "Testes profissionais: JUnit 5, Mockito e AssertJ, testando comportamento e não implementação. critério observável: um teste que quebra ao mudar a regra de negócio, mas não ao refatorar o código",
      "Testes de integração com Testcontainers: banco real em container, isolamento entre testes e dados controlados. critério observável: a suíte roda contra um PostgreSQL efêmero e passa em outra máquina sem setup manual",
      "Testes de contrato: validar a compatibilidade de APIs HTTP e eventos entre consumidor e provedor dentro do pipeline. critério observável: o pipeline falha quando uma mudança incompatível de contrato é introduzida",
      "Mutation testing: executar o PIT, analisar mutantes sobreviventes e reforçar as assertions que não detectam defeitos. critério observável: elevar o mutation score corrigindo assertions fracas, não inflando cobertura",
      "Cobertura guiada por regra de negócio crítica — cobertura decorativa não conta. critério observável: justificar cada caminho coberto por um risco real, não por métrica"
    ],
    "dsa": [
      "Árvores: binária e BST, travessias (pré, em e pós-ordem e por nível), altura, balanceamento e recursão sobre árvores. critério observável: implementar as travessias e provar a complexidade de busca na BST",
      "Divide and conquer: decompor, resolver as partes, combinar e justificar a recorrência (e o custo via teorema mestre). critério observável: escrever a recorrência de uma solução e derivar sua Big O",
      "Meta da fase: 60 problemas médios com foco em árvores e recursão, cada um com análise de complexidade. critério observável: manter o registro com a recorrência ou Big O de cada solução"
    ],
    "db": [
      "Migrations em pipeline: versionamento, rollback seguro, backfill de dados e compatibilidade com a versão anterior da aplicação. critério observável: aplicar e reverter uma migration no pipeline sem perder dados",
      "Dados de teste confiáveis: fixtures, seeds determinísticos e limpeza entre testes para evitar flakiness. critério observável: rodar a suíte duas vezes seguidas com o mesmo resultado"
    ],
    "git": [
      "Git no fluxo de CI: trunk-based ou GitFlow simplificado, tags, releases e changelog gerado a partir dos commits. critério observável: cortar uma release com tag e changelog rastreável até os PRs",
      "Higiene de segredos: bloquear secrets no histórico e usar hooks de pré-commit (lint, formatação e detecção de segredo). critério observável: um hook que barra o commit ao detectar um segredo"
    ],
    "arquitetura": [
      "Testabilidade como decisão arquitetural: injeção de dependência, fronteiras claras e inversão de dependência para isolar o que se testa. critério observável: substituir uma dependência externa por um dublê em teste sem alterar a regra de negócio",
      "ADR sobre a estratégia de testes e a pirâmide adotada (unidade × integração × e2e). critério observável: um ADR que justifica a proporção de testes escolhida e seu custo"
    ],
    "devops": [
      "Docker de produção: Dockerfile multi-stage, imagem enxuta, .dockerignore e ordem de camadas para aproveitar o cache. critério observável: reduzir o tamanho da imagem final e explicar o ganho de cada etapa",
      "Docker Compose real: app + banco + cache, healthchecks, logs e variáveis por ambiente. critério observável: subir a stack inteira com um comando, com healthcheck verde antes de aceitar tráfego",
      "CI/CD (antecipado — antes era mês 22): GitHub Actions com build, testes, lint e validação de PR. critério observável: um pipeline que roda em cada PR e bloqueia o merge se algo falha",
      "Pipeline verde obrigatório antes de qualquer merge — a partir daqui é regra permanente. critério observável: a branch principal só recebe merge com todos os checks verdes"
    ],
    "sec": [
      "Segurança no pipeline (início do módulo forte, mês 8): SAST, SCA e verificação de dependências vulneráveis no CI. critério observável: o pipeline sinaliza uma dependência vulnerável e barra o merge",
      "Gestão de secrets em CI: variáveis protegidas, mascaradas no log e nunca em código. critério observável: demonstrar que um secret usado no pipeline não aparece no log nem no repositório"
    ],
    "pratica": [
      "Exercícios de teste: escrever a suíte de uma classe de serviço já pronta, cobrindo os casos de borda. critério observável: a suíte encontra um bug plantado de propósito nos limites",
      "Lab de qualidade: publicar o contrato de uma API, quebrá-lo de propósito e usar mutation testing para achar assertions fracas. critério observável: o mutation testing aponta a assertion que não pegava a quebra",
      "Lab de Docker: containerizar uma aplicação, subir o Compose com banco e reduzir a imagem final. critério observável: a imagem final é significativamente menor e a stack sobe do zero",
      "Lab de CI: montar um pipeline do zero com build, teste, lint e gate de qualidade. critério observável: o pipeline reprova um PR que fura o gate",
      "DevCore F3 — Fábrica de entrega: adicionar ao artefato da F2 testes, Testcontainers, Docker Compose e pipeline com gate verde. critério observável: um PR novo passa por todo o pipeline automaticamente até o gate"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11."],
    "aws": {
      "cert": "CLF-C02 — AWS Cloud Practitioner",
      "exam": "Prova no mês 8",
      "topics": [
        "Cloud concepts: regiões, AZs, modelos IaaS/PaaS/SaaS e o modelo de responsabilidade compartilhada. critério observável: explicar o que é responsabilidade do provedor e o que é sua num cenário dado",
        "IAM, S3, EC2, RDS, VPC e CloudWatch em visão geral — o que cada serviço resolve. critério observável: mapear um serviço a um problema real da sua aplicação",
        "Billing, budgets, Free Tier e noção de custo. critério observável: configurar um budget com alerta e estimar o custo de um workload pequeno",
        "Preparação enxuta: ~30h dentro da fase, sem deslocar o foco de testes e CI/CD. critério observável: passar na CLF-C02 sem comprometer a entrega da fase"
      ]
    },
    "math": [
      "Acoplada a DSA: complexidade de algoritmos recursivos e teorema mestre em nível prático. critério observável: aplicar o teorema mestre à recorrência de um algoritmo dividir-para-conquistar"
    ],
    "fin": [
      "Revisão financeira mensal de 1h — provisionar o custo de certificação e ferramentas. critério observável: uma reserva específica para a prova e as assinaturas do trimestre"
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
      "Refino de API: versionamento, idempotência, paginação e filtros, tratamento de erro consistente e contratos estáveis (evoluir sem quebrar cliente). critério observável: evoluir um endpoint mantendo a compatibilidade e provar com teste de contrato",
      "Qualidade contínua: identificar code smells, refatorar de forma sistemática, controlar a complexidade ciclomática e revisar o próprio código antes do PR. critério observável: baixar a complexidade de um método crítico sem alterar o comportamento, com teste de rede"
    ],
    "dsa": [
      "Grafos: representação (lista/matriz de adjacência), BFS, DFS, caminhos e detecção de ciclo. critério observável: implementar BFS e DFS e detectar um ciclo, provando o custo O(V+E)",
      "Greedy: formular a escolha local, provar a correção por argumento de troca e reconhecer contraexemplos onde falha. critério observável: provar ou refutar uma estratégia gulosa em um problema concreto",
      "Meta da fase: 60 problemas com foco em grafos e busca, cada um com análise de complexidade. critério observável: manter o registro com a Big O de cada solução"
    ],
    "db": [
      "Segurança de dados: least privilege, roles, criptografia em repouso e em trânsito, mascaramento e LGPD aplicada ao schema. critério observável: um usuário de aplicação sem privilégio além do necessário e dados sensíveis mascarados ou criptografados",
      "Auditoria e rastreabilidade: histórico de alterações (quem, quando e o quê) nas entidades sensíveis. critério observável: reconstruir o histórico de mudanças de um registro pela trilha de auditoria"
    ],
    "git": [
      "Governança do repositório: CODEOWNERS, revisão obrigatória, assinatura de commits e política de branch. critério observável: um merge que só ocorre com revisão aprovada e commits assinados",
      "Higiene de credenciais: varredura de segredos no histórico e rotação imediata das credenciais expostas. critério observável: detectar um segredo vazado no histórico e documentar a rotação"
    ],
    "arquitetura": [
      "Segurança desde o design: threat modeling leve (STRIDE), mapa de superfícies de ataque e fronteiras de confiança. critério observável: um threat model que lista ameaças por categoria e a mitigação de cada uma",
      "ADR de autenticação, autorização e gestão de segredos. critério observável: um ADR que compara alternativas (ex.: sessão × JWT) com trade-offs e decisão"
    ],
    "devops": [
      "Pipeline endurecido: SAST, SCA, verificação da imagem, política de falha e gate de qualidade que barra o inseguro. critério observável: o pipeline reprova um PR com vulnerabilidade conhecida",
      "Ambientes separados com configuração por ambiente e nenhum segredo no repositório. critério observável: promover a mesma imagem entre ambientes trocando só a configuração, sem rebuild"
    ],
    "sec": [
      "MÓDULO FORTE (antecipado — antes era mês 25): OWASP Top 10 aplicado endpoint a endpoint, com teste que prova a mitigação. critério observável: para cada risco relevante, um teste que falha antes e passa depois da correção",
      "OAuth2 e OpenID Connect: fluxos (authorization code, client credentials), escopos, tokens, expiração e revogação. critério observável: proteger a API com OAuth2 e demonstrar acesso negado com token expirado ou sem escopo",
      "Proteções de borda: rate limiting, CORS correto, headers de segurança, CSRF e validação em profundidade. critério observável: comprovar cada proteção com uma requisição que deveria ser bloqueada e é",
      "Checklist de segurança obrigatório por release — a partir daqui, permanente e transversal. critério observável: nenhuma release sem o checklist preenchido e revisável"
    ],
    "pratica": [
      "Lab de segurança: encontrar e corrigir vulnerabilidades plantadas em uma aplicação de treino. critério observável: relatório com a vulnerabilidade, a exploração e a correção verificada",
      "Exercícios de OWASP: reproduzir e mitigar injection, XSS, broken auth e exposição de dados. critério observável: cada mitigação comprovada por um teste que antes reproduzia o ataque",
      "DevCore F4 — Baseline de segurança: atacar e corrigir a API da F3, aplicando OWASP, OAuth2/OIDC e checklist por release. critério observável: a API passa a barrar os ataques do lab e mantém o fluxo autenticado"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11."],
    "aws": {
      "cert": "Sem prova nesta fase",
      "exam": "",
      "topics": [
        "Aplicação prática de IAM e gestão de segredos aprendida na CLF-C02, ao proteger a própria aplicação. critério observável: uma policy IAM de menor privilégio aplicada e comprovada negando acesso extra",
        "Sem nova certificação nesta fase — a próxima é a SAA-C03 na Fase 9; aqui a cloud é aplicada, não estudada para prova"
      ]
    },
    "math": [
      "Acoplada a DSA: teoria dos grafos aplicada e noções de criptografia (hash, chave pública/privada). critério observável: explicar por que uma função de hash serve para senha e por que a chave pública protege um canal"
    ],
    "fin": [
      "Revisão financeira mensal de 1h — manter orçamento e reserva em dia. critério observável: reserva e orçamento revisados sem surpresa no mês"
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
      "Performance de aplicação medida: profiling (CPU e alocação), comportamento do garbage collector e leitura das métricas da JVM (heap, pausas, threads). critério observável: identificar um gargalo pelo profiler e comprovar o ganho após a correção",
      "Otimização orientada a medição — nunca por intuição: baseline, hipótese, mudança e nova medição. critério observável: um relatório antes/depois que prova ou refuta a otimização com números"
    ],
    "dsa": [
      "Heaps e filas de prioridade, ordenação e busca binária aplicada a problemas de otimização. critério observável: usar um heap para resolver top-k e provar por que é mais barato que ordenar tudo",
      "Trie: implementar inserção, busca e consulta por prefixo, comparando custo e memória com HashMap. critério observável: justificar quando a trie vence o HashMap e quando perde em memória",
      "Meta da fase: 60 problemas com foco em otimização da solução (tempo e memória). critério observável: para cada problema, registrar a Big O e a decisão de estrutura"
    ],
    "db": [
      "PostgreSQL profundo: EXPLAIN ANALYZE, planos de execução, índices compostos, parciais e de cobertura. critério observável: transformar um Seq Scan caro em Index Scan e comprovar pelo plano",
      "Transações a fundo: níveis de isolamento, deadlock, lock contention e MVCC. critério observável: reproduzir um deadlock de propósito e explicar como o isolamento escolhido o evita",
      "Modelagem para leitura: desnormalização controlada, views materializadas e particionamento. critério observável: acelerar uma consulta pesada com view materializada e medir o custo de atualizá-la"
    ],
    "git": [
      "Bisect para caçar regressão de performance e o histórico como ferramenta de diagnóstico. critério observável: localizar por git bisect o commit que introduziu uma regressão"
    ],
    "arquitetura": [
      "Estratégias de cache: cache-aside, write-through, invalidação e consistência eventual. critério observável: escolher a estratégia para um caso e justificar o risco de dado velho",
      "ADR de cache com trade-off explícito entre frescor do dado e latência. critério observável: um ADR que declara o TTL, a política de invalidação e o impacto aceito"
    ],
    "devops": [
      "Testes de carga: k6 ou JMeter, definição de baseline e detecção de regressão de performance no pipeline. critério observável: um teste de carga que reprova o PR quando a latência p95 piora além do limite"
    ],
    "sec": [
      "Transversal: rate limiting sob carga, proteção contra abuso e negação de serviço por consulta cara. critério observável: demonstrar que uma consulta cara repetida é limitada antes de derrubar o serviço"
    ],
    "pratica": [
      "Lab de performance: partir de uma query lenta, ler o EXPLAIN, criar o índice certo e medir o ganho. critério observável: relatório com o plano antes/depois e o tempo medido",
      "Exercícios de cache: implementar cache-aside com Redis e provocar (e resolver) um problema de invalidação. critério observável: demonstrar o dado velho aparecendo e a correção da invalidação",
      "DevCore F5 — Baseline de performance: otimizar banco e aplicação da F4, incorporar Redis e publicar relatório antes/depois. critério observável: o relatório mostra a melhoria de latência com método reproduzível"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11."],
    "aws": {
      "cert": "Sem prova nesta fase",
      "exam": "",
      "topics": [
        "Noções de ElastiCache e RDS aplicadas ao que se estuda de cache e banco. critério observável: relacionar a decisão de cache local ao serviço gerenciado equivalente na AWS",
        "Estudo cloud permanece leve até a Fase 9 — profundidade só quando houver base de arquitetura e operação"
      ]
    },
    "math": [
      "Acoplada a banco e performance: estatística descritiva e percentis (p50/p95/p99), lendo a distribuição de latência em vez da média. critério observável: interpretar um histograma de latência e explicar por que a média engana"
    ],
    "fin": [
      "Revisão financeira mensal de 1h — acompanhar patrimônio e gastos. critério observável: evolução do mês registrada com uma decisão de ajuste"
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
      "Instrumentação da aplicação: logs estruturados (JSON com contexto), correlação por trace id, métricas de negócio e de sistema. critério observável: seguir uma requisição pelo trace id, do log à métrica, ponta a ponta",
      "Troubleshooting de produção: leitura de heap dump e thread dump e análise de incidente com evidência. critério observável: diagnosticar um vazamento ou deadlock a partir de um dump real e propor a correção"
    ],
    "dsa": [
      "Programação dinâmica introdutória: identificar subestrutura ótima e sobreposição de subproblemas, memoização e tabulação. critério observável: transformar uma recursão exponencial em DP e provar a nova complexidade",
      "Meta da fase: 60 problemas com foco em DP, cada um com a relação de recorrência escrita. critério observável: registrar a recorrência e a Big O de cada solução"
    ],
    "db": [
      "Observabilidade de banco: slow query log, métricas de conexão, saturação do pool e locks. critério observável: identificar pela telemetria uma query lenta ou um pool saturado antes do impacto no usuário"
    ],
    "git": [
      "Runbook e postmortem versionados junto ao código, evoluindo a cada incidente. critério observável: um postmortem no repositório com causa raiz, impacto e ações de follow-up rastreáveis"
    ],
    "arquitetura": [
      "Resiliência: timeout, retry com backoff (e jitter), circuit breaker, bulkhead e degradação graciosa. critério observável: um experimento de falha que mostra o circuit breaker abrindo e o sistema degradando sem cair",
      "Health check, readiness × liveness e ADR de política de falha. critério observável: um readiness que remove a instância do balanceador antes de ela receber tráfego quebrado"
    ],
    "devops": [
      "Stack de observabilidade: OpenTelemetry, Prometheus, Grafana e tracing distribuído. critério observável: um trace distribuído que cruza serviços e um dashboard com as métricas-chave",
      "SLO, SLI e error budget aplicados ao lab de observabilidade da fase. critério observável: definir um SLO e mostrar o consumo do error budget em um período",
      "Alertas úteis: baseados em sintoma do usuário, não em métrica de máquina. critério observável: um alerta que dispara por degradação percebida (p99 ou taxa de erro) e não por CPU alta inócua"
    ],
    "sec": [
      "Transversal: logs sem dados sensíveis, auditoria de acesso e detecção de anomalia. critério observável: comprovar que nenhum dado sensível vaza no log e que um acesso anômalo gera trilha"
    ],
    "pratica": [
      "Lab de observabilidade: instrumentar uma aplicação com logs estruturados, métricas e tracing. critério observável: um dashboard e um trace que permitem diagnosticar um problema plantado",
      "Exercício de incidente: simular uma falha, diagnosticar pelos sinais e escrever o postmortem. critério observável: o postmortem chega à causa raiz usando só a telemetria coletada",
      "DevCore F6 — Operação observável: instrumentar o sistema da F5 com logs, métricas, tracing, SLO, alerta, runbook e postmortem. critério observável: um incidente simulado é detectado por alerta e resolvido seguindo o runbook"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11."],
    "aws": {
      "cert": "Sem prova nesta fase",
      "exam": "",
      "topics": [
        "CloudWatch, métricas e logs aplicados aos conceitos de observabilidade estudados. critério observável: relacionar uma métrica ou alarme do CloudWatch ao SLO definido na fase",
        "Base conceitual que a SAA-C03 (Fase 9) vai cobrar — observabilidade em nuvem começa a fazer sentido aqui"
      ]
    },
    "math": [
      "Estatística aplicada a operação: média × mediana, cauda longa, taxa de erro e amostragem de tracing. critério observável: escolher a métrica certa (mediana ou p99) para descrever a saúde de um serviço"
    ],
    "fin": [
      "Revisão financeira mensal de 1h — orçamento e reserva sob controle. critério observável: previsto × realizado revisado e reserva mantida"
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
      "Refatoração para arquitetura hexagonal: ports e adapters, domínio isolado do framework, dependências apontando para dentro. critério observável: trocar um adapter (ex.: REST por CLI) sem tocar no domínio",
      "Modelagem rica: entidades, value objects, agregados com invariantes protegidas e serviços de domínio. critério observável: um agregado que rejeita estado inválido no próprio construtor ou método, não em validação externa"
    ],
    "dsa": [
      "Revisão consolidada de todas as estruturas e problemas combinados (grafo + DP, heap + busca). critério observável: resolver um problema que exige compor duas estruturas e justificar a escolha",
      "Meta da fase: 60 problemas mistos em formato de entrevista cronometrada. critério observável: resolver e explicar em voz alta dentro do tempo, como em entrevista"
    ],
    "db": [
      "Persistência orientada ao domínio: mapear o agregado, tratar o repositório como contrato e evitar o vazamento do ORM para o domínio. critério observável: o domínio não importa nada de JPA/Hibernate e ainda persiste corretamente"
    ],
    "git": [
      "Organização do repositório por bounded context e estratégia de módulos. critério observável: a estrutura de pastas/módulos reflete os contextos e impede dependência indevida entre eles"
    ],
    "arquitetura": [
      "C4 Model: diagramar contexto, containers, componentes e código no nível certo para cada audiência. critério observável: um diagrama de contexto e um de container versionados e legíveis por um não-especialista",
      "DDD estratégico: bounded context, linguagem ubíqua, context map e anticorruption layer entre contextos. critério observável: um context map que nomeia as relações (parceria, cliente-fornecedor, ACL) entre os contextos",
      "Monólito modular antes de microsserviços: consolidar fronteiras testáveis antes de considerar distribuição. critério observável: justificar por que manter o monólito modular e qual evidência autorizaria extrair um serviço",
      "ADRs e RFCs completos: contexto, alternativas, trade-offs, riscos, custo e critério de reversão. critério observável: um ADR que um colega consegue contestar pelos trade-offs registrados",
      "Padrões CQRS e Saga — e quando NÃO usá-los. critério observável: apontar um caso em que CQRS ou Saga adicionaria complexidade sem retorno"
    ],
    "devops": [
      "Pipeline por módulo e estratégia de build para projeto modular. critério observável: build e teste isolados por módulo, sem reconstruir o projeto inteiro a cada mudança"
    ],
    "sec": [
      "Transversal: fronteiras de confiança entre contextos e autorização decidida no domínio, não só na borda. critério observável: um teste que prova que um contexto não acessa dado de outro sem autorização"
    ],
    "pratica": [
      "Exercício de refatoração: converter uma aplicação em camadas para arquitetura hexagonal. critério observável: a suíte de testes continua verde após isolar o domínio do framework",
      "Lab de DDD: modelar um domínio com agregados, invariantes e linguagem ubíqua. critério observável: os nomes do código batem com a linguagem do negócio e as invariantes são impostas pelo modelo",
      "DevCore F7 — Monólito modular: refatorar o sistema observado da F6 para arquitetura hexagonal e DDD, com C4 e cinco ADRs. critério observável: C4 versionado, cinco ADRs e fronteiras de módulo verificadas por teste"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11."],
    "aws": {
      "cert": "Sem prova nesta fase",
      "exam": "",
      "topics": [
        "Padrões arquiteturais que a SAA-C03 cobra começam a fazer sentido aqui, sobre a base de DDD e arquitetura da fase",
        "Leitura de apoio: Fundamentals of Software Architecture e DDD (ver BIBLIOGRAFIA.md)"
      ]
    },
    "math": [
      "Modelagem formal leve: invariantes, pré e pós-condições e lógica aplicada à regra de negócio. critério observável: expressar a invariante de um agregado como pré/pós-condição verificável"
    ],
    "fin": [
      "Revisão financeira mensal de 1h — manter o hábito e a reserva. critério observável: 1h registrada com uma ação concreta do mês"
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
      "Spring com Kafka: producer, consumer, serialização, tratamento de erro e DLQ (dead-letter queue). critério observável: um consumer que, ao falhar, envia a mensagem para a DLQ e permite reprocessá-la",
      "Idempotência e deduplicação em consumidores: chave de idempotência e controle de mensagens já processadas. critério observável: reprocessar a mesma mensagem e comprovar efeito único"
    ],
    "dsa": [
      "Algoritmos distribuídos em nível conceitual: hashing consistente, quorum e particionamento. critério observável: explicar como o hashing consistente minimiza o remapeamento ao adicionar ou remover nós",
      "Meta da fase: 60 problemas mistos mantendo o ritmo. critério observável: manter a cadência semanal com a análise de complexidade registrada"
    ],
    "db": [
      "Consistência em sistemas distribuídos: transações distribuídas, padrão outbox e read models. critério observável: garantir que a mudança de estado e o evento saem atomicamente via outbox",
      "NoSQL pragmático: reconhecer quando MongoDB ou DynamoDB resolvem melhor que o relacional. critério observável: justificar, pelo padrão de acesso, a escolha entre relacional e NoSQL num caso"
    ],
    "git": [
      "Versionamento de contratos: schema registry, AsyncAPI e compatibilidade de evento (backward/forward). critério observável: evoluir um schema de evento sem quebrar consumidores existentes e provar a compatibilidade"
    ],
    "arquitetura": [
      "Pré-condição de distribuição: extrair serviços só depois de medir limites reais no monólito modular da Fase 7. critério observável: um dado que justifique (ou não) a extração de um serviço",
      "STUDY-008: mensageria integrada à arquitetura distribuída — Kafka é meio, não fim. critério observável: justificar o uso de mensageria por um requisito, não por moda",
      "Arquitetura orientada a eventos: event notification, event-carried state transfer e event sourcing. critério observável: escolher o estilo de evento adequado a um caso e apontar seu custo",
      "Padrões: Outbox, Inbox, Saga coreografada × orquestrada e CQRS aplicado. critério observável: desenhar uma Saga com compensação e explicar coreografia × orquestração no caso",
      "Teorema CAP na prática, consistência eventual e os trade-offs reais de microsserviços. critério observável: posicionar um serviço no trade-off CAP e declarar a consistência que ele oferece",
      "Quando NÃO usar microsserviços — critério explícito de decisão. critério observável: um checklist que reprova a distribuição quando o custo supera o ganho"
    ],
    "devops": [
      "Kafka local em Compose: tópicos, partições, consumer groups e observabilidade de lag. critério observável: medir o consumer lag e mostrar o efeito de adicionar um consumer no grupo"
    ],
    "sec": [
      "Transversal: autenticação entre serviços, mTLS e proteção de tópicos. critério observável: um serviço só consome um tópico com identidade autenticada, e o acesso não autorizado é negado"
    ],
    "pratica": [
      "Lab de Kafka: producer, consumer, consumer group e reprocessamento a partir de uma DLQ. critério observável: reprocessar mensagens da DLQ sem duplicar efeito",
      "Exercício de idempotência: provocar entrega duplicada e garantir efeito único. critério observável: a duplicata é detectada e ignorada, comprovado por teste",
      "DevCore F8 — Fluxos assíncronos: acrescentar Kafka, outbox, idempotência, DLQ e contrato AsyncAPI ao sistema modular da F7. critério observável: um fluxo assíncrono que sobrevive a duplicação e reprocessamento sem violar invariante"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11."],
    "aws": {
      "cert": "Preparação SAA-C03 inicia",
      "exam": "Estudo dirigido a partir do mês 24",
      "topics": [
        "SQS, SNS, EventBridge e Kinesis comparados ao Kafka estudado — quando o gerenciado vence o auto-hospedado. critério observável: escolher entre Kafka e um serviço AWS para um caso, justificando por custo e operação",
        "Início da preparação estruturada para a prova SAA-C03 da Fase 9. critério observável: um plano de estudo da SAA-C03 com marcos até a data da prova"
      ]
    },
    "math": [
      "Probabilidade aplicada: falha independente, disponibilidade composta e cálculo de SLA. critério observável: calcular a disponibilidade de um sistema em série e em paralelo a partir dos componentes"
    ],
    "fin": [
      "Revisão financeira mensal de 1h — orçamento e metas. critério observável: previsto × realizado revisado e meta ajustada"
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
      "Aplicação cloud-native: configuração externalizada (12-factor), graceful shutdown, readiness e resiliência a reinícios. critério observável: a aplicação recebe SIGTERM, drena requisições e encerra sem perder trabalho em andamento"
    ],
    "dsa": [
      "Manutenção do ritmo: 3×/semana, problemas mistos cronometrados, sem perder a cadência na fase mais operacional. critério observável: manter as sessões cronometradas registradas",
      "Meta da fase: 60 problemas em formato de entrevista. critério observável: resolver e explicar em voz alta dentro do tempo"
    ],
    "db": [
      "Banco gerenciado: RDS, backup, restore, réplica de leitura, failover e custo por operação. critério observável: direcionar a leitura para a réplica e comprovar o alívio na instância primária",
      "Recuperação de desastre: executar restore em ambiente limpo, medir RTO/RPO e validar a consistência após failover. critério observável: números de RTO/RPO medidos, dentro (ou não) da meta declarada"
    ],
    "git": [
      "GitOps: infraestrutura versionada, PR como mecanismo de mudança de ambiente (nada aplicado à mão). critério observável: um ambiente muda só via merge, com histórico rastreável da alteração"
    ],
    "arquitetura": [
      "Arquitetura cloud: multi-AZ, escalabilidade horizontal, serviços stateless e desenho para falha. critério observável: derrubar uma AZ (ou instância) e o sistema seguir servindo",
      "Well-Architected Framework: os seis pilares atuais aplicados ao lab de cloud da fase. critério observável: uma revisão do lab apontando um risco por pilar e a correção"
    ],
    "devops": [
      "AWS prático: VPC, EC2, ECS/EKS, ALB, S3, RDS, IAM e CloudWatch integrados num ambiente real. critério observável: uma app atrás de ALB, em rede privada, com métricas no CloudWatch",
      "Terraform: providers, state (remoto e com lock), módulos, plan/apply e infraestrutura reproduzível. critério observável: recriar o ambiente inteiro do zero com terraform apply e destruí-lo com destroy",
      "Kubernetes de uso: pod, deployment, service, ingress, configmap, secret e HPA. critério observável: um HPA que escala o deployment sob carga e volta ao baseline depois",
      "Deploy real de uma aplicação em ambiente cloud com pipeline completo. critério observável: um merge dispara build, deploy e rollback automático em caso de falha"
    ],
    "sec": [
      "Segurança em cloud: IAM com menor privilégio, security groups restritos, KMS e rotação de segredos. critério observável: uma policy que concede só o necessário, comprovada negando um acesso além do escopo"
    ],
    "pratica": [
      "Lab de AWS: provisionar VPC, banco e aplicação manualmente e depois refazer tudo em Terraform. critério observável: o Terraform recria o ambiente idêntico ao feito à mão",
      "DR drill de dados: restaurar backup, promover réplica, medir RTO/RPO e executar o runbook sem passo oculto. critério observável: o runbook leva do desastre à recuperação sem conhecimento tácito",
      "Lab de Kubernetes: deployment, service, ingress, configmap e rollout com rollback. critério observável: um rollout ruim é revertido automaticamente, sem downtime perceptível",
      "DevCore F9 — Ambiente cloud: publicar o sistema da F8 com Terraform, AWS, Kubernetes, pipeline, rollback e custo mensal medido. critério observável: o custo mensal do ambiente é medido e cabe no orçamento definido"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11."],
    "aws": {
      "cert": "SAA-C03 — Solutions Architect Associate",
      "exam": "Prova no mês 26",
      "topics": [
        "Desenho de arquiteturas resilientes, performáticas, seguras e com custo otimizado (os pilares da SAA-C03). critério observável: resolver uma questão de desenho justificando a escolha pelos quatro eixos",
        "Compute, storage, rede, banco, identidade e monitoramento em profundidade. critério observável: escolher o serviço certo por categoria para um requisito e defender a decisão",
        "Segunda e última certificação obrigatória do plano (STUDY-010). critério observável: aprovação na SAA-C03 registrada",
        "SOA-C03, DOP-C02 e DVA-C02 foram removidas do plano — só entram com demanda profissional concreta. critério observável: não iniciar nova certificação sem uma vaga que a exija"
      ]
    },
    "math": [
      "Modelagem de custo e capacidade: projeção de carga, dimensionamento e ponto de saturação. critério observável: estimar o custo mensal de um workload a partir da carga projetada"
    ],
    "fin": [
      "Revisão financeira mensal de 1h — controlar o custo real do ambiente cloud pessoal. critério observável: comparar o custo cloud do mês com o orçamento e cortar o desnecessário"
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
      "Aplicação dos padrões em escala: sharding lógico, particionamento e limites de throughput na aplicação. critério observável: particionar uma carga por chave e mostrar o ganho de throughput sem hot partition"
    ],
    "dsa": [
      "Problemas difíceis e otimização sob restrição de tempo e memória. critério observável: reduzir a complexidade de uma solução aceita e justificar o novo custo",
      "Meta da fase: 60 problemas médios/difíceis com explicação verbal da solução. critério observável: explicar a abordagem antes de codar, como em entrevista"
    ],
    "db": [
      "Escala de dados: réplica, sharding, CDC, data pipeline e escolha entre OLTP e OLAP. critério observável: separar carga transacional da analítica e justificar a escolha pelo padrão de acesso"
    ],
    "git": [
      "Documentação de design versionada: RFC como artefato de discussão técnica revisável. critério observável: uma RFC que recebe comentários e evolui por revisão, com histórico"
    ],
    "arquitetura": [
      "System Design praticado: 1 desenho completo por semana, cronometrado em 45 minutos. critério observável: um desenho por semana entregue dentro do tempo",
      "Nível 1 — componentes isolados: encurtador de URL e rate limiter. critério observável: desenhar o encurtador com estimativa de capacidade e escolha de armazenamento",
      "Nível 2 — comunicação e fan-out: notificações e chat. critério observável: resolver o fan-out de mensagens com trade-off entre push e pull",
      "Nível 3 — leitura em escala: feed e busca. critério observável: desenhar um feed com cache e justificar o custo de consistência",
      "Nível 4 — consistência crítica: pagamentos, ledger e reconciliação. critério observável: garantir exatidão financeira com idempotência e trilha de auditoria",
      "Método: requisitos → estimativa de capacidade → API → modelo de dados → desenho → gargalos → trade-offs. critério observável: seguir o método na ordem em cada desenho, sem pular etapa",
      "Referência: System Design Interview vol. 1 e 2 (ver BIBLIOGRAFIA.md). critério observável: aplicar um padrão do livro a um desenho próprio e citar a fonte"
    ],
    "devops": [
      "Estratégias de deploy em escala: blue-green, canary, feature flag e rollback automatizado. critério observável: um canary que promove ou reverte automaticamente conforme a métrica"
    ],
    "sec": [
      "Transversal: segurança em escala — WAF, mitigação de DDoS, isolamento de tenant e limites por cliente. critério observável: um limite por cliente que protege o serviço de um tenant abusivo"
    ],
    "pratica": [
      "System Design: 12 desenhos completos na fase, um por semana, cronometrados em 45 minutos. critério observável: portfólio com 12 desenhos, cada um com estimativa e trade-offs",
      "Exercício de gargalo: receber um sistema saturado, identificar o limite e propor a correção. critério observável: apontar o gargalo com número e propor a mudança que o alivia",
      "DevCore F10 — Escala defendida: submeter o ambiente da F9 a carga, modelar capacidade e registrar decisões de escala e deploy. critério observável: um relatório de carga com o ponto de saturação e a decisão tomada"
    ],
    "frontend": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "py": ["Trilha inativa nesta fase — entra na Fase 11. Não ocupa espaço na rotina diária."],
    "ia": ["Trilha inativa nesta fase — entra na Fase 11."],
    "aws": {
      "cert": "Sem prova nesta fase",
      "exam": "",
      "topics": [
        "Serviços AWS usados como vocabulário de system design, não como nova certificação. critério observável: citar o serviço AWS adequado a cada componente de um desenho"
      ]
    },
    "math": [
      "Estimativa de capacidade: back-of-the-envelope, QPS, storage, banda e crescimento composto. critério observável: estimar QPS e storage de um sistema em ~45s, com premissas explícitas"
    ],
    "fin": [
      "Revisão financeira mensal de 1h — orçamento e reserva. critério observável: previsto × realizado revisado no mês"
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
      "Manutenção: o backend segue evoluindo, mas cede espaço da rotina para as trilhas complementares desta fase (frontend, Python e IA). critério observável: manter a suíte do backend verde enquanto as novas trilhas avançam"
    ],
    "dsa": [
      "Manutenção do ritmo: 3×/semana, sem interrupção, mesmo na fase mais cheia de novidades. critério observável: manter a cadência semanal registrada",
      "Meta da fase: 60 problemas com foco em padrões de entrevista. critério observável: reconhecer o padrão (dois ponteiros, DP, grafo) antes de codar"
    ],
    "db": [
      "Banco vetorial aplicado a RAG: embeddings, similaridade e índice vetorial (pgvector). critério observável: uma busca por similaridade que recupera os documentos certos e mede a relevância"
    ],
    "git": [
      "Monorepo × repositórios separados para front e back — decisão documentada em ADR. critério observável: um ADR com o trade-off (build, versionamento, deploy) e a decisão"
    ],
    "arquitetura": [
      "Arquitetura de aplicação com IA: decidir quando um LLM resolve e quando a regra determinística resolve melhor. critério observável: um caso em que a regra determinística vence o LLM em custo e previsibilidade",
      "Custo, latência e falha de modelo como restrições arquiteturais de primeira classe. critério observável: um desenho que declara limite de custo, timeout e fallback do modelo"
    ],
    "devops": [
      "Pipeline para múltiplos artefatos: API Java, app frontend e serviço Python no mesmo fluxo. critério observável: um pipeline que builda, testa e publica os três artefatos com versões coerentes"
    ],
    "sec": [
      "Segurança de aplicação com IA: prompt injection, vazamento de dado em contexto e sanitização de saída. critério observável: um teste que prova que uma injeção de prompt não executa ação indevida",
      "Autorização em RAG: filtrar documentos por tenant e permissão ANTES da recuperação, não depois da resposta. critério observável: um usuário não recupera documento de outro tenant nem via similaridade",
      "Red teaming de IA: versionar ataques de prompt injection, exfiltração e abuso de ferramentas como testes de regressão. critério observável: uma suíte de ataques que roda no pipeline e barra regressões",
      "Segurança frontend: XSS, CSP, armazenamento de token e CORS. critério observável: comprovar que um payload de XSS é neutralizado e o token não fica acessível a script"
    ],
    "pratica": [
      "Lab de frontend: uma interface React/TypeScript consumindo uma API própria, com estados de erro. critério observável: a UI trata loading, vazio e erro sem quebrar",
      "Lab de Python: uma API FastAPI tipada com pytest e um script de automação de dados. critério observável: a API roda com testes verdes e o script é reexecutável",
      "Lab de IA: um RAG pequeno com avaliação objetiva, custo por requisição e análise de erro. critério observável: um número de qualidade e de custo por resposta, com erros analisados",
      "DevCore F11 — Produto integrado: adicionar ao sistema da F10 uma interface React, um serviço FastAPI e uma feature RAG avaliada. critério observável: o produto integra os três e a feature de IA tem métrica e custo medidos"
    ],
    "frontend": [
      "TRILHA ATIVADA (STUDY-007 — antes ocupava 18% desde o dia 1): entra agora, sobre base backend consolidada. critério observável: as demais trilhas cederam espaço da rotina para o frontend nesta fase",
      "React e TypeScript: componentes, estado, tipagem do contrato da API, formulários e validação. critério observável: um formulário tipado que rejeita dado inválido antes de enviar",
      "Consumo de API: estados de loading, vazio e erro, cache de requisição e UI otimista. critério observável: a tela reflete corretamente cada estado da requisição, inclusive falha",
      "Next.js: rotas, renderização e build, com acessibilidade e responsividade mínimas. critério observável: a página passa numa checagem básica de acessibilidade e funciona no mobile",
      "Testes de frontend e deploy do app. critério observável: um teste de componente verde e o app publicado por pipeline"
    ],
    "py": [
      "TRILHA ATIVADA (STUDY-007 — antes ocupava 18% desde o dia 1): Python entra como segundo backend e base de IA. critério observável: a rotina passa a incluir blocos de Python nesta fase",
      "Python moderno: tipagem, estrutura de projeto, venv/pyproject e pytest. critério observável: um projeto tipado com testes que roda em ambiente limpo via pyproject",
      "FastAPI: rotas, Pydantic, injeção de dependência e contrato HTTP. critério observável: um endpoint validado por Pydantic com contrato documentado",
      "Concorrência em Python: async/await, event loop, cancelamento e limites para trabalho CPU-bound. critério observável: explicar por que CPU-bound não escala no event loop e medir o efeito",
      "Persistência: SQLAlchemy 2, Alembic, transações e testes com banco real. critério observável: uma migration aplicada e revertida e um teste contra banco real",
      "Qualidade: ruff, mypy, cobertura útil e empacotamento reproduzível. critério observável: ruff e mypy verdes no CI e o pacote instalável do zero",
      "Operação: logging estruturado, métricas, tracing e graceful shutdown. critério observável: seguir uma requisição pelo trace id do serviço Python",
      "Automação e integração de dados aplicada ao próprio projeto. critério observável: um script que ingere e transforma dados do projeto de forma reexecutável"
    ],
    "ia": [
      "TRILHA ATIVADA (STUDY-007 — antes aparecia todo dia desde o dia 1): IA passa de ferramenta de apoio a objeto de estudo. critério observável: a feature de IA vira parte do produto, não só assistente",
      "LLMs aplicados: prompt estruturado, function calling, limites e alucinação. critério observável: um prompt versionado com function calling que degrada de forma segura ao falhar",
      "RAG completo: chunking, embeddings, recuperação, reranking e citação de fonte. critério observável: respostas com citação verificável da fonte recuperada",
      "Baseline: comparar a feature de IA com regra determinística e busca lexical antes de escolher LLM. critério observável: um número que justifica (ou não) o uso de LLM contra o baseline",
      "Segurança de IA: testar prompt injection, vazamento entre tenants e acesso indevido a ferramentas. critério observável: uma suíte de ataques que a feature precisa resistir",
      "Observabilidade de IA: registrar versão de prompt/modelo, tokens, latência, custo e qualidade sem armazenar dado sensível. critério observável: um painel com custo e qualidade por versão de prompt",
      "Operação: definir fallback, limite de custo, timeout e rollback de prompt ou modelo. critério observável: um limite de custo que corta a chamada e um rollback de prompt testado",
      "Avaliação obrigatória: métrica objetiva, conjunto de teste, custo por requisição e análise de erro. critério observável: um relatório de avaliação com métrica, custo e erros categorizados",
      "Regra mantida: prompt isolado não é entrega. critério observável: toda feature de IA vem com avaliação e integração, não só o prompt"
    ],
    "aws": {
      "cert": "Sem prova nesta fase",
      "exam": "",
      "topics": [
        "Bedrock e serviços gerenciados de IA em nível de conhecimento, sem certificação adicional. critério observável: comparar rodar um modelo próprio × usar um serviço gerenciado por custo e operação"
      ]
    },
    "math": [
      "ATIVADA de forma aplicada: álgebra linear (vetores, produto interno e similaridade de cosseno) a serviço de embeddings. critério observável: calcular a similaridade de cosseno entre dois vetores e interpretar o resultado num RAG",
      "Probabilidade e métricas de avaliação: precisão, recall, F1 e matriz de confusão. critério observável: montar a matriz de confusão de um classificador e calcular precisão, recall e F1",
      "Sem matemática abstrata desconectada — sempre a serviço de um modelo em uso. critério observável: cada conceito ligado a uma decisão do modelo da fase"
    ],
    "fin": [
      "Revisão financeira mensal de 1h — orçamento e metas. critério observável: previsto × realizado revisado no mês"
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
      "Revisão profunda de Java e Spring em formato de entrevista técnica: concorrência, JPA, transações e pitfalls. critério observável: responder de improviso, sem consultar, às perguntas mais frequentes com exemplo de código",
      "Explicação oral de decisões, trade-offs e incidentes com estrutura clara. critério observável: narrar uma decisão real em contexto → alternativas → escolha → resultado, sem enrolar"
    ],
    "dsa": [
      "Reta final: simulados cronometrados, problemas resolvidos em voz alta e comunicação do raciocínio. critério observável: verbalizar a abordagem e a complexidade antes de codar, dentro do tempo",
      "Fecho do ciclo: ~720 problemas resolvidos ao longo dos 36 meses. critério observável: revisitar sem consulta os padrões-chave e reconhecê-los em problemas novos"
    ],
    "db": [
      "Revisão de modelagem, performance e decisões de dados para entrevista. critério observável: justificar índice, normalização e escolha SQL/NoSQL em um caso apresentado na hora"
    ],
    "git": [
      "Histórico do portfólio auditado: commits limpos, PRs revisáveis, releases e documentação. critério observável: um recrutador consegue ler a evolução do produto só pelo histórico"
    ],
    "arquitetura": [
      "Defesa de arquitetura: apresentar os labs do portfólio ponta a ponta, justificando cada decisão. critério observável: sustentar a arquitetura sob perguntas, ligando decisão a requisito e trade-off",
      "Liderança técnica: code review, mentoria, escrita de RFC e condução de discussão técnica. critério observável: conduzir uma revisão que melhora o código sem desmotivar o autor"
    ],
    "devops": [
      "Revisão de operação: pipeline, deploy, rollback, incidente e postmortem. critério observável: explicar um incidente real do portfólio com causa raiz e correção"
    ],
    "sec": [
      "Revisão de segurança para entrevista: OWASP, autenticação, autorização e gestão de segredos. critério observável: apontar e corrigir uma vulnerabilidade em código mostrado na hora"
    ],
    "pratica": [
      "Simulados: entrevistas técnicas cronometradas de Java, SQL, arquitetura e system design. critério observável: um simulado completo gravado e revisado por checklist",
      "Revisão dirigida: refazer, sem consultar, os exercícios que mais custaram ao longo das 11 fases. critério observável: resolver de novo o que antes travou, agora sem ajuda",
      "DevCore F12 — Release de portfólio: consolidar o produto das 11 fases em uma release pública com demo, runbooks, ADRs e case study em inglês. critério observável: uma URL pública que qualquer avaliador consegue rodar e entender"
    ],
    "frontend": [
      "Manutenção do app e apresentação da integração full stack no portfólio. critério observável: demonstrar o fluxo do frontend ao backend numa demo pública"
    ],
    "py": [
      "Manutenção do serviço Python e da feature de IA no portfólio. critério observável: o serviço FastAPI e a feature de IA seguem executáveis e testados na release final"
    ],
    "ia": [
      "Case study de IA aplicada com problema, métrica, custo e limitação documentados. critério observável: um case que mostra o ganho da IA com número e admite onde ela falha"
    ],
    "aws": {
      "cert": "Well-Architected Review do próprio projeto",
      "exam": "Sem nova prova",
      "topics": [
        "Revisão do lab de cloud contra os seis pilares atuais do Well-Architected. critério observável: um relatório apontando um risco por pilar e a correção",
        "Certificações adicionais (DVA, SOA, DOP) apenas se houver exigência concreta de vaga. critério observável: decidir por nova certificação só com uma exigência de vaga documentada"
      ]
    },
    "math": [
      "Revisão de estimativa de capacidade e complexidade para entrevistas de system design. critério observável: estimar capacidade e complexidade de improviso, como em entrevista"
    ],
    "fin": [
      "Revisão financeira mensal de 1h — planejamento de transição e negociação salarial. critério observável: uma faixa salarial-alvo pesquisada e argumentos de negociação escritos"
    ]
  }
];

/*
 * DIDATIC-007 — cadeia única de projeto.
 *
 * Cada fase recebe uma etapa do DevCore e declara explicitamente sua
 * dependência. O campo `lab` permite que dashboard e futuras visualizações
 * mostrem a continuidade sem inferir a partir do texto dos exercícios.
 */
export const LABS_ENCADEADOS = [
  { id: 'devcore-f1', fase: 1, titulo: 'Fundação do produto', dependeDe: null, entrega: 'Domínio Java, console, schema PostgreSQL e repositório Git.' },
  { id: 'devcore-f2', fase: 2, titulo: 'Backend HTTP', dependeDe: 'devcore-f1', entrega: 'API Spring Boot com JPA, JWT, validação e OpenAPI.' },
  { id: 'devcore-f3', fase: 3, titulo: 'Fábrica de entrega', dependeDe: 'devcore-f2', entrega: 'Testes, Testcontainers, Docker Compose e pipeline com gate.' },
  { id: 'devcore-f4', fase: 4, titulo: 'Baseline de segurança', dependeDe: 'devcore-f3', entrega: 'OAuth2/OIDC, correções OWASP e checklist por release.' },
  { id: 'devcore-f5', fase: 5, titulo: 'Baseline de performance', dependeDe: 'devcore-f4', entrega: 'Query tuning, cache Redis, carga e relatório comparativo.' },
  { id: 'devcore-f6', fase: 6, titulo: 'Operação observável', dependeDe: 'devcore-f5', entrega: 'Logs, métricas, tracing, SLO, alerta, runbook e postmortem.' },
  { id: 'devcore-f7', fase: 7, titulo: 'Monólito modular', dependeDe: 'devcore-f6', entrega: 'Arquitetura hexagonal, DDD, C4 e cinco ADRs.' },
  { id: 'devcore-f8', fase: 8, titulo: 'Fluxos assíncronos', dependeDe: 'devcore-f7', entrega: 'Kafka, outbox, idempotência, DLQ e AsyncAPI.' },
  { id: 'devcore-f9', fase: 9, titulo: 'Ambiente cloud', dependeDe: 'devcore-f8', entrega: 'Terraform, AWS, Kubernetes, pipeline, rollback e custo.' },
  { id: 'devcore-f10', fase: 10, titulo: 'Escala defendida', dependeDe: 'devcore-f9', entrega: 'Modelo de capacidade, teste de carga e decisões de deploy.' },
  { id: 'devcore-f11', fase: 11, titulo: 'Produto integrado', dependeDe: 'devcore-f10', entrega: 'React, FastAPI e RAG avaliado integrados ao mesmo sistema.' },
  { id: 'devcore-f12', fase: 12, titulo: 'Release de portfólio', dependeDe: 'devcore-f11', entrega: 'Demo pública, runbooks, ADRs e case study em inglês.' }
];

P.forEach((fase, indice) => { fase.lab = LABS_ENCADEADOS[indice]; });

/* ─── Inglês por fase — transversal aos 36 meses ─── */

export const englishByPhase = {
  1: ["Ler documentação oficial de Java, PostgreSQL e Git sem tradução automática e resumir cinco decisões", "Escrever commits no imperativo e explicar um erro usando root cause e edge case"],
  2: ["Escrever, em inglês e sem tradutor, o README e o contrato de um endpoint — request, response, erros e exemplos. critério observável: um leitor não-lusófono entende como consumir a API só pelo texto", "Apresentar em três minutos, sem ler, o fluxo request → validation → authentication → response. critério observável: gravar a fala e revisar clareza, termos técnicos e tempo"],
  3: ["Ler a documentação oficial de Docker e CI/CD em inglês e reproduzir o procedimento sem tradução. critério observável: executar o passo a passo e registrar o resultado em inglês", "Descrever em inglês, num Pull Request, uma falha de teste: a assertion, a causa e a correção. critério observável: a descrição usa test failure, assertion, root cause e fix de forma correta"],
  4: ["Ler um security advisory em inglês e explicar threat, exploit, mitigation e residual risk. critério observável: resumir o advisory usando os quatro termos corretamente", "Apresentar em inglês o threat model e as correções OWASP da release. critério observável: gravar a apresentação e revisar clareza e vocabulário de segurança"],
  5: ["Interpretar um benchmark em inglês usando latency, throughput, bottleneck e contention. critério observável: explicar o resultado do benchmark com os quatro termos corretos", "Escrever, em inglês, um relatório curto de tuning com hypothesis, measurement e result. critério observável: o relatório conecta hipótese, medição e resultado sem ambiguidade"],
  6: ["Escrever, em inglês, um postmortem com incident, impact, root cause, mitigation e follow-up. critério observável: o texto cobre os cinco elementos de forma clara e acionável", "Explicar em inglês um incidente de produção em três minutos, sem notas. critério observável: gravar a explicação e revisar clareza, sequência e termos técnicos"],
  7: ["Escrever, em inglês, um ADR com context, alternatives, decision, consequences e reversal criteria. critério observável: o ADR cobre os cinco elementos e é compreensível sem contexto verbal", "Defender em inglês uma decisão arquitetural em cinco minutos e responder a objeções. critério observável: sustentar a decisão pelos trade-offs sob perguntas, sem trocar para português"],
  8: ["Explicar em inglês eventual consistency, idempotency, partition e backpressure com exemplos. critério observável: usar os quatro termos corretamente em um cenário distribuído", "Resumir em inglês a documentação do Kafka e propor um teste de falha. critério observável: o resumo leva a um plano de teste de falha coerente com a doc"],
  9: ["Resolver questões da SAA-C03 e justificar cada alternativa em inglês. critério observável: explicar por que a opção correta vence as distratoras, em inglês", "Apresentar em inglês uma arquitetura cloud usando scaling, failover e cost optimization. critério observável: a apresentação conecta a decisão de arquitetura a cada um dos três eixos"],
  10: ["Conduzir em inglês um System Design de 45 minutos, de requirements a trade-offs. critério observável: cobrir o método completo em inglês dentro do tempo", "Responder em inglês perguntas de gargalo e capacidade sem trocar para português. critério observável: sustentar a discussão técnica em inglês sob perguntas de acompanhamento"],
  11: ["Apresentar em inglês a feature de IA usando retrieval, inference, evaluation e limitation. critério observável: a apresentação cobre os quatro termos com exemplos do próprio projeto", "Escrever, em inglês, o case study de React, FastAPI e RAG com resultados medidos. critério observável: o case liga cada decisão a um resultado numérico"],
  12: ["Concluir uma mock interview técnica e comportamental integralmente em inglês. critério observável: sustentar toda a entrevista em inglês, sem trocar de idioma sob pressão", "Apresentar o DevCore em dez minutos e responder com STAR sobre uma decisão real. critério observável: uma resposta STAR (situação, tarefa, ação, resultado) clara sobre uma decisão do projeto"]
};
/*
 * DIDATIC-001 — todo tópico contável é exposto como objetivo observável.
 *
 * O texto original continua sendo a descrição do escopo; esta camada acrescenta
 * a ação esperada e um critério de aceite próprio de cada disciplina. A
 * transformação acontece na fonte de dados, portanto dashboard, busca, rotina,
 * revisão e roadmaps usam exatamente o mesmo objetivo.
 */
const OBJETIVACAO = {
  java: {
    abertura: 'Implementar em código',
    criterio: 'entregar código compilável e ao menos um teste automatizado verde'
  },
  db: {
    abertura: 'Aplicar em banco executável',
    criterio: 'versionar o script e registrar o resultado esperado de sua execução'
  },
  dsa: {
    abertura: 'Resolver e explicar',
    criterio: 'registrar a solução, a análise Big O e uma explicação sem consulta'
  },
  git: {
    abertura: 'Executar em repositório',
    criterio: 'demonstrar o fluxo em histórico, branch ou Pull Request verificável'
  },
  arquitetura: {
    abertura: 'Projetar e justificar',
    criterio: 'versionar um diagrama ou ADR com decisão, alternativa e trade-off'
  },
  devops: {
    abertura: 'Configurar e operar',
    criterio: 'executar o ambiente ou pipeline e registrar log de sucesso ou rollback'
  },
  sec: {
    abertura: 'Verificar e proteger',
    criterio: 'documentar ameaça, teste reproduzível e respectiva mitigação'
  },
  frontend: {
    abertura: 'Construir em interface executável',
    criterio: 'publicar o fluxo funcional com seus estados e ao menos um teste verificável'
  },
  py: {
    abertura: 'Implementar em Python',
    criterio: 'entregar módulo executável e teste pytest verde'
  },
  ia: {
    abertura: 'Construir e avaliar',
    criterio: 'registrar conjunto de teste, métrica, custo e análise de erro'
  },
  math: {
    abertura: 'Calcular e aplicar',
    criterio: 'resolver três exemplos e explicar o resultado no contexto técnico'
  },
  ingles: {
    abertura: 'Produzir em inglês',
    criterio: 'entregar um artefato oral ou escrito e revisá-lo com checklist'
  },
  aws: {
    abertura: 'Demonstrar em AWS',
    criterio: 'executar um lab e registrar configuração, resultado e custo'
  },
  pratica: {
    abertura: 'Concluir na prática',
    criterio: 'versionar o artefato e comprovar o critério de sucesso no README'
  }
};

export function converterTopicoEmObjetivo(texto, trilha) {
  const original = String(texto || '').trim().replace(/[.;]\s*$/, '');
  const modelo = OBJETIVACAO[trilha];
  if (!modelo || !original || /^Trilha inativa nesta fase/.test(original)) return original;
  if (original.includes('critério observável:')) return original;
  return `${modelo.abertura}: ${original} — critério observável: ${modelo.criterio}.`;
}

const TRILHAS_OBJETIVAS = [
  'java', 'db', 'dsa', 'git', 'arquitetura', 'devops', 'sec',
  'frontend', 'py', 'ia', 'math', 'ingles', 'aws', 'pratica'
];

P.forEach((p) => {
  p.ingles = englishByPhase[p.id] || [];
  TRILHAS_OBJETIVAS.forEach((trilha) => {
    if (trilha === 'aws') {
      if (!/^Sem AWS|^Sem prova/.test(p.aws?.cert || '')) {
        p.aws.topics = (p.aws?.topics || []).map((t) => converterTopicoEmObjetivo(t, trilha));
      }
      return;
    }
    if (!Array.isArray(p[trilha]) || /^Trilha inativa nesta fase/.test(p[trilha][0] || '')) return;
    p[trilha] = p[trilha].map((t) => converterTopicoEmObjetivo(t, trilha));
    if (trilha === 'ingles') englishByPhase[p.id] = p[trilha];
  });
});

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
