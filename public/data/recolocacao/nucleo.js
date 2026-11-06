/* ═══════════════════════════════════════════════
   RECOLOCAÇÃO / NÚCLEO — as 13 semanas obrigatórias

   O núcleo cabe no prazo mínimo (90 dias) e cobre o que
   as vagas júnior/pleno pedem com mais frequência, na
   ordem em que um assunto sustenta o seguinte.

   Cada semana define o conteúdo dos slots da grade do
   perfil de horário (06:00 estudo, 07:45 prática, 13:00
   complemento, 14:15 transversal, 23:15 DSA, 00:10
   revisão) e do sábado e domingo.
═══════════════════════════════════════════════ */

import { dia, tr, comCandidaturas, ent } from './util.js';

export const SEMANAS_NUCLEO = [
  /* ─────────────────────────── C01 ─────────────────────────── */
  {
    id: 'c01', tipo: 'nucleo', ordem: 1, k: 'java',
    titulo: 'Java core I — linguagem, coleções e contratos',
    objetivo: 'Responder sem consulta as perguntas de linguagem que abrem toda entrevista Java júnior/pleno e montar a infraestrutura da busca: vitrine, CV e mapa de lacunas.',
    porque: 'Java aparece em 29% das vagas não sênior da Gupy e é a âncora do seu plano. Perguntas de linguagem (igualdade, coleções, exceções, streams) são a primeira triagem técnica.',
    topicos: ['Primitivos, wrappers e autoboxing', '== × equals e String pool', 'Contrato equals/hashCode', 'Comparable e Comparator', 'Collections com Big O', 'HashMap por dentro', 'Checked × unchecked', 'Generics e PECS', 'Streams, collectors e Optional', 'Records'],
    dias: [
      dia('Tipos, igualdade e Strings',
        ['Semântica da linguagem que cai em triagem', 'Primitivos × wrappers e autoboxing (cache de Integer entre -128 e 127), == × equals, String imutável, String pool e StringBuilder, passagem por valor (inclusive de referências), static × instância, final em variável, método e classe, sobrecarga × sobrescrita e regras de visibilidade.'],
        ['Diagnóstico cronometrado', 'Responder por escrito 20 perguntas de linguagem em 40 minutos, sem consulta. Conferir no Core Java, marcar cada erro como lacuna e escrever 5 testes JUnit que provam o comportamento que você errou (por exemplo, Integer 127 == 127 e 128 != 128).']),
      dia('Contrato equals/hashCode e ordenação',
        ['equals, hashCode, Comparable e Comparator', 'As cinco propriedades de equals (reflexiva, simétrica, transitiva, consistente e null → false), por que hashCode acompanha equals, efeito em HashMap e HashSet, Comparable × Comparator (comparing, thenComparing, nullsFirst), coerência entre compareTo e equals, e o que um record gera sozinho.'],
        ['Bug proposital de HashMap', 'Usar uma classe mutável como chave de HashMap, alterar o campo depois do put e provar com teste que o get falha. Corrigir com um value object imutável (record) e ordenar uma lista por dois critérios com Comparator.']),
      dia('Coleções e o custo de cada operação',
        ['Collections Framework com Big O', 'ArrayList (array dinâmico que cresce cerca de 1,5×) × LinkedList; HashMap por dentro: hash, buckets, colisão, treeify a partir de 8 entradas no bucket, fator de carga 0,75 e resize; LinkedHashMap (ordem de inserção ou de acesso), TreeMap (O(log n)), ArrayDeque como pilha e fila, PriorityQueue, List.of imutável e ConcurrentModificationException.'],
        ['Tabela de custos medida', 'Montar a tabela inserir/buscar/remover de List, Set, Map, Deque e PriorityQueue e justificar 5 escolhas em código real. Medir, com aquecimento e várias execuções (ou JMH), contains em ArrayList × HashSet com 1 milhão de itens.']),
      dia('Exceções e generics',
        ['Tratamento de erro e tipos genéricos', 'Hierarquia Throwable → Error / Exception → RuntimeException, checked × unchecked e quando usar cada uma, try-with-resources e AutoCloseable, exceção de domínio com mensagem útil, não engolir exceção nem usá-la para fluxo; generics com bound (<T extends Comparable<T>>), wildcards, PECS (? extends para ler, ? super para escrever) e type erasure.'],
        ['Repositório genérico com erro de domínio', 'Implementar um Repositorio<T, ID> em memória cuja busca lança RecursoNaoEncontradoException (unchecked) e um utilitário max(Collection<? extends T>) com bound. Testes para sucesso, ausência e entrada nula.']),
      dia('Streams, lambdas, Optional e records',
        ['Java funcional sem armadilhas', 'Function, Predicate, Supplier e Consumer, method reference, streams preguiçosos (map, filter, flatMap, sorted, distinct, reduce), collectors (groupingBy, partitioningBy, toMap com função de merge, joining), Optional como retorno e nunca como campo, efeitos colaterais em lambda, stream que não pode ser reutilizado e por que evitar parallel stream por padrão.'],
        ['Relatório com streams', 'A partir de 1.000 transações geradas, produzir com streams o total por categoria, os 3 maiores clientes, a média por mês e a partição aprovadas/recusadas. Comparar com a versão em laço e explicar em voz alta qual é mais legível.'])
    ],
    complemento: { k: 'mercado', titulo: 'Vitrine e infraestrutura da busca', itens: [
      'Escolher o projeto vitrine (sugestão: o ecofy, que já tem Spring Boot, OAuth2, Kafka, Redis e testes) e registrar no README o estado real: o que roda, o que falta e como subir.',
      'Criar o mapa de lacunas: uma linha por requisito das vagas (API REST, SQL, testes, Git, CI/CD, Docker, mensageria, nuvem, React, IA) com nota de 0 a 3.',
      'Reescrever o CV técnico em 1 página: stack no topo, 3 projetos com resultado mensurável e links para GitHub e deploy.',
      'LinkedIn: título com o cargo-alvo e a stack, seção Sobre em 4 linhas e as 15 palavras-chave que mais aparecem nas vagas.',
      'GitHub: fixar a vitrine e os katas, README de perfil curto e tirar do topo os repositórios sem README.'
    ] },
    dsa: { padrao: 'Arrays e hashing I', problemas: ['Two Sum (LC 1)', 'Contains Duplicate (LC 217)', 'Valid Anagram (LC 242)', 'Group Anagrams (LC 49)', 'Top K Frequent Elements (LC 347)'] },
    transversal: [
      tr('mercado', 'Ler 10 vagas-alvo e copiar os requisitos para o mapa de lacunas.'),
      tr('ingles', 'Ler no original o Javadoc de Object.equals e Object.hashCode e resumir o contrato em 5 frases.'),
      tr('mercado', 'Montar a planilha de pipeline: empresa, vaga, link, data, etapa, contato e próximo passo.'),
      tr('ingles', 'Gravar 2 minutos explicando em inglês como o HashMap resolve colisões.'),
      tr('mercado', 'Pedir revisão do CV a 1 pessoa da área e anotar o retorno.')
    ],
    sabado: {
      exercicios: 'Katas de linguagem com teste: LRU simples com LinkedHashMap (accessOrder e removeEldestEntry), contador de palavras com streams, validador de CPF com exceções de domínio, ordenação por múltiplos critérios e um Money imutável com BigDecimal (escala 2, RoundingMode.HALF_EVEN).',
      lab: 'Repositório java-interview-katas: Maven ou Gradle, JUnit e AssertJ, os 15 exercícios da semana com teste e README dizendo o que cada um prova e como rodar.',
      noite: ['mercado', 'CV, LinkedIn e GitHub prontos para triagem', 'Fechar a versão 1 do CV em português e inglês, publicar o LinkedIn revisado e fixar os repositórios. Ainda sem candidaturas: a vitrine precisa de algumas semanas de base.']
    },
    domingo: 'Revisão D7 leve: refazer de memória o contrato equals/hashCode e a tabela de custos das coleções.',
    entregaveis: [
      ent('c01-katas', 'Repositório de katas com 15 exercícios e testes', 'O build roda do zero em outra máquina e cada exercício tem um teste que falha se a regra for quebrada.'),
      ent('c01-cv', 'CV técnico de 1 página (PT e EN) e LinkedIn revisado', 'Stack-alvo no topo, 3 projetos com resultado e link, e as 15 palavras-chave das vagas presentes.'),
      ent('c01-lacunas', 'Mapa de lacunas versus vagas', 'Cada requisito das vagas-alvo com nota de 0 a 3 e a semana do sprint que o cobre.')
    ],
    livros: [
      ['effective-java', 'Itens 10 a 14 (equals, hashCode, toString, Comparable), 42 a 48 (lambdas e streams) e 69 a 77 (exceções)'],
      ['core-java-1', 'Capítulos de herança, interfaces e lambdas, exceções, generics e coleções'],
      ['modern-java', 'Capítulos de streams e collectors e o capítulo de Optional'],
      ['dev-java', 'Trilhas Collections Framework e Generics']
    ],
    perguntas: [
      'Por que é obrigatório sobrescrever hashCode quando se sobrescreve equals?',
      'Qual a complexidade de get em HashMap no melhor e no pior caso, e o que mudou no Java 8?',
      'Exceção checked ou unchecked para uma regra de negócio violada? Justifique.',
      'O que é PECS e onde ele aparece na API de coleções?',
      'Quando um Optional não deve ser usado?'
    ],
    mercado: ['Definir o cargo-alvo: Backend Java pleno (ou júnior forte) com React.', 'Listar 30 empresas-alvo (produto, consultoria, banco) e as plataformas: Gupy, LinkedIn, Programathor e backend-br/vagas.']
  },

  /* ─────────────────────────── C02 ─────────────────────────── */
  {
    id: 'c02', tipo: 'nucleo', ordem: 3, k: 'db',
    titulo: 'SQL e PostgreSQL de entrevista',
    objetivo: 'Resolver consultas de entrevista e explicar índices, planos de execução e transações com números do seu próprio banco.',
    porque: 'Banco relacional aparece em 78% das vagas Java júnior/pleno e em 75% das Node/TS. Window functions, índices e isolamento são as perguntas que mais derrubam candidatos.',
    topicos: ['Modelagem e normalização', 'Constraints e tipos do PostgreSQL', 'JOINs, anti-join e NULL', 'Ordem lógica de execução', 'Window functions e CTE', 'Índices B-tree, compostos e parciais', 'EXPLAIN ANALYZE', 'ACID e níveis de isolamento', 'Locks e lost update', 'Migrations com Flyway'],
    dias: [
      dia('Modelagem e restrições',
        ['Modelo relacional que aguenta produção', 'Relacionamentos 1:1, 1:N e N:N com tabela associativa; normalização até a 3FN e quando desnormalizar; chave natural × substituta (bigint identity × UUID v7); NOT NULL, UNIQUE, CHECK e FK com ON DELETE; tipos certos no PostgreSQL: numeric para dinheiro, timestamptz, text × varchar e jsonb com parcimônia.'],
        ['Modelar o domínio da vitrine', 'Desenhar o DER do projeto vitrine (ou de um sistema de pedidos) com pelo menos 6 tabelas, escrever o DDL com todas as constraints e justificar cada chave em comentário.']),
      dia('JOINs, subconsultas e NULL',
        ['Consultas que o entrevistador pede no quadro', 'INNER, LEFT, RIGHT, FULL e CROSS JOIN, self join, anti-join com NOT EXISTS (e por que NOT IN falha quando há NULL), subconsulta correlacionada, EXISTS × IN, lógica de três valores do NULL, COALESCE, e a ordem lógica: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT.'],
        ['10 consultas de entrevista', 'Resolver no PostgreSQL local Employees Earning More Than Their Managers (LC 181), Duplicate Emails (LC 182), Customers Who Never Order (LC 183), Department Highest Salary (LC 184), Rising Temperature (LC 197) e 5 consultas sobre o schema da vitrine, prevendo o resultado antes de rodar.']),
      dia('Window functions e CTE',
        ['Funções de janela e CTE', 'OVER (PARTITION BY … ORDER BY …), ROW_NUMBER × RANK × DENSE_RANK, LAG e LEAD, somas e médias acumuladas com frame (ROWS BETWEEN), NTILE; CTE com WITH para legibilidade, CTE recursiva para hierarquia e top-N por grupo com ROW_NUMBER.'],
        ['Ranking e séries temporais', 'Resolver Rank Scores (LC 178), Department Top Three Salaries (LC 185), Consecutive Numbers (LC 180), Game Play Analysis IV (LC 550) e Restaurant Growth (LC 1321). Escrever uma CTE recursiva que monta uma árvore de categorias.']),
      dia('Índices e plano de execução',
        ['Como o PostgreSQL decide usar um índice', 'B-tree e o que ele acelera (igualdade, intervalo, ORDER BY), índice composto e a ordem das colunas, índice parcial, de expressão e com INCLUDE (index-only scan), quando o índice é ignorado (função na coluna, LIKE com curinga no início, baixa seletividade, estatística velha); EXPLAIN × EXPLAIN (ANALYZE, BUFFERS) e os nós Seq Scan, Index Scan, Bitmap Heap Scan, Nested Loop, Hash Join e Merge Join.'],
        ['Antes e depois medido', 'Gerar 1 milhão de linhas com generate_series, rodar 3 consultas lentas, ler o plano, criar o índice certo para cada uma e registrar tempo e plano antes e depois. Mostrar também um caso em que o índice não ajuda.']),
      dia('Transações, isolamento e locks',
        ['Concorrência no banco', 'ACID; níveis de isolamento do PostgreSQL (Read Committed é o padrão, Repeatable Read, Serializable) e as anomalias que cada um evita: dirty read, non-repeatable read, phantom, lost update e write skew; MVCC em uma frase; SELECT … FOR UPDATE e SKIP LOCKED; deadlock e lock_timeout; quando preferir lock otimista na aplicação.'],
        ['Reproduzir um lost update', 'Em duas sessões psql, reproduzir lost update num saldo. Corrigir com UPDATE atômico (saldo = saldo - x WHERE saldo >= x), depois com FOR UPDATE e por fim com coluna de versão, anotando o custo de cada abordagem.'])
    ],
    complemento: { k: 'db', titulo: 'Migrations e dados de teste', itens: [
      'Subir PostgreSQL em Docker com volume nomeado e porta fixa.',
      'Versionar o DDL de segunda como migration Flyway V1.',
      'Criar seed reproduzível (V2) com dados realistas.',
      'Adicionar a migration V3 com o índice validado na quinta.',
      'Documentar no README como recriar o banco do zero.'
    ] },
    dsa: { padrao: 'Dois ponteiros', problemas: ['Valid Palindrome (LC 125)', 'Two Sum II (LC 167)', '3Sum (LC 15)', 'Container With Most Water (LC 11)', 'Move Zeroes (LC 283)'] },
    transversal: [
      tr('mercado', 'Separar nas vagas-alvo os bancos citados (PostgreSQL, Oracle, SQL Server) e anotar no pipeline.'),
      tr('ingles', 'Ler no original a introdução e os tipos do capítulo Indexes da documentação do PostgreSQL.'),
      tr('mercado', 'Escrever: qual a consulta mais difícil que você já fez num projeto real? Vira uma história STAR.'),
      tr('ingles', 'Explicar em inglês, em 2 minutos, o plano de execução de uma das consultas lentas.'),
      tr('mercado', 'Atualizar a nota de SQL no mapa de lacunas.')
    ],
    sabado: {
      exercicios: 'Mais 10 consultas: Second Highest Salary (LC 176), Nth Highest Salary (LC 177), Delete Duplicate Emails (LC 196), Last Person to Fit in the Bus (LC 1204), Movie Rating (LC 1341), Managers with at Least 5 Direct Reports (LC 570) e 4 relatórios com window function sobre o schema da vitrine.',
      lab: 'Pasta sql/ na vitrine com migrations Flyway, seed, as 30 consultas com resultado esperado e o relatório EXPLAIN antes/depois em Markdown.',
      noite: ['arquitetura', 'Modelagem sob pressão', 'Em 45 minutos, modelar o banco de um sistema de reservas (quarto, hóspede, reserva, pagamento) com uma constraint que impeça reservas sobrepostas (pesquisar EXCLUDE com tstzrange). Revisar em 15 minutos.']
    },
    domingo: 'Revisão D7: refazer de memória um top-N por grupo e explicar Read Committed × Repeatable Read.',
    entregaveis: [
      ent('c02-consultas', '30 consultas SQL com resultado esperado', 'Cada consulta com enunciado, SQL e saída; 10 delas com window function ou CTE.'),
      ent('c02-explain', 'Relatório EXPLAIN antes/depois de 3 índices', 'Plano e tempo antes e depois, e um caso documentado em que o índice não ajudou.'),
      ent('c02-flyway', 'Schema da vitrine versionado com Flyway', 'O banco é recriado do zero só por migrations e seed, sem passo manual.')
    ],
    livros: [
      ['learning-sql', 'Capítulos de consultas, joins, agrupamento, subconsultas e funções analíticas'],
      ['use-the-index', 'Capítulos sobre a cláusula WHERE, índices compostos e ORDER BY'],
      ['sql-perf', 'Versão em livro do mesmo conteúdo, para leitura contínua'],
      ['pg-docs', 'Capítulos Indexes, Performance Tips (EXPLAIN) e Concurrency Control'],
      ['sql-antipatterns', 'Antipadrões de chaves, de NULL e de EAV']
    ],
    perguntas: [
      'Qual a diferença entre WHERE e HAVING?',
      'Por que NOT IN com subconsulta pode não retornar nenhuma linha?',
      'Em que ordem você colocaria as colunas de um índice composto para WHERE a = ? AND b > ?',
      'Qual o nível de isolamento padrão do PostgreSQL e que anomalia ele permite?',
      'Como você investigaria uma consulta que ficou lenta em produção?'
    ],
    mercado: ['Ler 5 vagas de bancos e fintechs e anotar como descrevem SQL (relatórios, performance, PL/SQL).']
  },

  /* ─────────────────────────── C03 ─────────────────────────── */
  {
    id: 'c03', tipo: 'nucleo', ordem: 4, k: 'java',
    titulo: 'Spring Boot e API REST bem desenhada',
    objetivo: 'Construir e defender uma API REST com contrato claro, validação, erros padronizados e documentação.',
    porque: 'API REST aparece em 76% das vagas júnior/pleno (82% das Node/TS) e Spring em 48% das vagas Java. É o centro do teste técnico para fazer em casa.',
    topicos: ['IoC e injeção por construtor', 'Beans, escopos e perfis', '@ConfigurationProperties', 'Semântica HTTP e idempotência', 'Códigos de status', 'DTOs com records', 'Bean Validation', 'ProblemDetail (RFC 9457)', 'OpenAPI', 'Actuator'],
    dias: [
      dia('IoC, beans e configuração',
        ['Como o Spring monta a aplicação', 'Inversão de controle e injeção por construtor, @Component × @Bean em @Configuration, escopos (singleton, prototype, request), ciclo de vida, @Profile, @ConfigurationProperties com validação, precedência de propriedades (application.yml, variáveis de ambiente), auto-configuration e starters, e como ler o relatório de condições com --debug.'],
        ['Configuração tipada', 'Criar a aplicação Spring Boot da vitrine (ou um módulo novo) com @ConfigurationProperties validado, perfis dev e test e um bean condicional. Provar com teste que a aplicação não sobe com configuração inválida.']),
      dia('Semântica HTTP e desenho de recursos',
        ['HTTP e REST de verdade', 'Recursos e URIs, métodos seguros e idempotentes (GET, PUT e DELETE são idempotentes; POST não), 200, 201 com Location, 204, 400, 401 × 403, 404, 409, 412, 422, 429, 500 e 503, cabeçalhos (Content-Type, Accept, ETag, If-Match, Cache-Control), paginação por página × cursor, filtros, ordenação, versionamento por URI × cabeçalho e idempotency key em POST.'],
        ['Contrato antes do código', 'Escrever o contrato OpenAPI de um recurso da vitrine (listar paginado, buscar, criar, atualizar, remover) com exemplos e erros, e revisá-lo contra a tabela de idempotência e de status antes de implementar.']),
      dia('Controllers, DTOs e validação',
        ['Camada web no Spring MVC', '@RestController, @RequestMapping, @PathVariable, @RequestParam, @RequestBody e ResponseEntity; DTOs de entrada e saída separados da entidade (records), mapeamento manual × MapStruct, Bean Validation (@NotBlank, @Size, @Email, @Positive, grupos e validador customizado) com @Valid e @Validated.'],
        ['CRUD com DTOs', 'Implementar o contrato de terça com records de entrada e saída, validação completa e paginação com Pageable. Testar à mão com um arquivo .http ou coleção do Postman versionada no repositório.']),
      dia('Erros padronizados e documentação',
        ['Tratamento de erro como parte do contrato', '@RestControllerAdvice e @ExceptionHandler, ProblemDetail (RFC 9457) com type, title, status, detail e instance, MethodArgumentNotValidException → 400 com a lista de campos, exceções de domínio → 404 e 409, nunca vazar stack trace; springdoc-openapi gerando /v3/api-docs e o Swagger UI.'],
        ['ProblemDetail em toda a API', 'Criar o handler global, mapear 5 tipos de erro e garantir com testes MockMvc que cada um devolve o status e o corpo esperados. Publicar o Swagger UI local.']),
      dia('Actuator, logs e o ciclo da requisição',
        ['O que acontece entre o socket e o seu método', 'DispatcherServlet, filtros × interceptors, conversão de mensagens com Jackson (datas ISO-8601, BigDecimal), Actuator (health, info, metrics) e o que não expor, logs com SLF4J e níveis, CORS e onde configurá-lo.'],
        ['API apresentável', 'Adicionar Actuator com health de liveness e readiness, um filtro que registra método, rota, status e tempo, e o README do contrato com exemplos de requisição e resposta.'])
    ],
    complemento: { k: 'git', titulo: 'Fluxo de PR profissional', itens: [
      'Branch por funcionalidade com nome padronizado (feat/…).',
      'Commits pequenos em Conventional Commits.',
      'Template de PR com contexto, mudança e como testar.',
      'Abrir o PR do CRUD e revisar o próprio diff antes do merge.',
      'Tag v0.1.0 com notas de release.'
    ] },
    dsa: { padrao: 'Janela deslizante', problemas: ['Best Time to Buy and Sell Stock (LC 121)', 'Longest Substring Without Repeating Characters (LC 3)', 'Longest Repeating Character Replacement (LC 424)', 'Permutation in String (LC 567)', 'Minimum Size Subarray Sum (LC 209)'] },
    transversal: [
      tr('ingles', 'Ler a RFC 9457 até a seção 3 e resumir em inglês.'),
      tr('mercado', 'Reunir 3 enunciados reais de teste técnico (TabNews, Glassdoor, repositórios públicos de desafios) para treinar nos sábados.'),
      tr('ingles', 'Escrever em inglês a descrição do PR do CRUD.'),
      tr('mercado', 'Anotar quais vagas pedem OpenAPI/Swagger e quais citam API Gateway.'),
      tr('ingles', 'Gravar 3 minutos explicando em inglês o fluxo request → validation → response.')
    ],
    sabado: {
      exercicios: 'Teste técnico de aquecimento: com cronômetro de 2 horas, implementar uma API de tarefas com validação, erros e paginação a partir de um enunciado real; depois comparar com a vitrine e listar o que faltou.',
      lab: 'Vitrine v0.1: recurso principal com contrato OpenAPI, validação, ProblemDetail, paginação, Actuator e README do contrato; PR revisado e mergeado.',
      noite: ['arquitetura', 'Revisão de contrato de API', 'Analisar em 45 minutos uma API pública (por exemplo, a do GitHub): paginação, erros, versionamento e idempotência. Anotar 3 decisões para copiar.']
    },
    domingo: 'Revisão D7: tabela de status HTTP e de idempotência sem consulta.',
    entregaveis: [
      ent('c03-api', 'Vitrine v0.1 com API REST documentada', 'OpenAPI publicado, validação em todos os campos, ProblemDetail em 5 erros, paginação e testes MockMvc dos erros.'),
      ent('c03-takehome', 'Teste técnico de 2 horas resolvido e comparado', 'Código no GitHub com README e a lista de melhorias identificadas.')
    ],
    livros: [
      ['spring-in-action', 'Capítulos iniciais (Spring Boot e web) e o de serviços REST'],
      ['spring-start-here', 'Partes de contexto, beans e injeção, e de serviços REST'],
      ['spring-boot-up', 'Capítulos de configuração e de APIs'],
      ['design-web-apis', 'Partes sobre desenho de recursos, erros e evolução de contrato'],
      ['rfc9110', 'Seções de métodos (9) e de códigos de status (15)'],
      ['rfc9457', 'Texto completo, que é curto'],
      ['spring-boot-docs', 'Seções Servlet Web Applications, Validation e Actuator']
    ],
    perguntas: [
      'Qual a diferença entre PUT e PATCH, e qual deles é idempotente?',
      '401 ou 403: quando usar cada um?',
      'Por que não expor a entidade JPA no controller?',
      'Como o Spring decide qual bean injetar quando há dois candidatos?',
      'Como você versionaria uma API sem quebrar clientes?'
    ],
    mercado: ['Separar 3 desafios técnicos públicos de empresas brasileiras para os sábados seguintes.']
  },

  /* ─────────────────────────── C04 ─────────────────────────── */
  {
    id: 'c04', tipo: 'nucleo', ordem: 5, k: 'java',
    titulo: 'JPA, Hibernate e transações',
    objetivo: 'Persistir com JPA sem N+1, sem LazyInitializationException e com transações que você consegue explicar.',
    porque: 'As vagas Java citam JPA/Hibernate e banco relacional (78%). N+1 e @Transactional são as perguntas mais comuns de entrevista Spring pleno.',
    topicos: ['Mapeamento e relacionamentos', 'LAZY × EAGER', 'Contexto de persistência e dirty checking', 'open-in-view', 'N+1, JOIN FETCH e @EntityGraph', 'Projeções em DTO', '@Transactional e proxy', 'Propagação e rollback', '@Version e locking', 'Spring Data'],
    dias: [
      dia('Mapeamento de entidades',
        ['Entidades e relacionamentos', '@Entity e @Id, geração IDENTITY × SEQUENCE (e por que SEQUENCE permite batch), @ManyToOne é EAGER por padrão e deve virar LAZY, @OneToMany é LAZY, lado dono e mappedBy, cascade e orphanRemoval, @Embeddable para value objects, e equals/hashCode de entidade com id ainda nulo.'],
        ['Mapear o schema da semana passada', 'Mapear as tabelas da semana de SQL em entidades com relacionamentos LAZY, um value object embutido e equals baseado em id estável. Validar com ddl-auto=validate contra as migrations Flyway.']),
      dia('Contexto de persistência',
        ['O que o Hibernate faz por trás', 'EntityManager e contexto de persistência, estados transient, managed, detached e removed, dirty checking e flush, cache de primeiro nível, merge × persist, LazyInitializationException e por que o open-in-view (ligado por padrão, com aviso no log) esconde o problema.'],
        ['Ver o SQL de verdade', 'Ligar o log de SQL com parâmetros (ou datasource-proxy), escrever 5 testes @DataJpaTest que mostram dirty checking, flush e LazyInitializationException, e desligar spring.jpa.open-in-view.']),
      dia('N+1 e estratégias de busca',
        ['O problema N+1 e como resolvê-lo', 'Como o N+1 nasce (listar pais e acessar filhos LAZY), como detectá-lo contando queries (Hibernate statistics ou datasource-proxy), JOIN FETCH, @EntityGraph, @BatchSize e default_batch_fetch_size, projeções em DTO (interface e record), e por que paginar com JOIN FETCH de coleção é perigoso (o Hibernate avisa que pagina em memória).'],
        ['Relatório N+1', 'Criar a listagem com N+1, contar as queries num teste, corrigir com JOIN FETCH, @EntityGraph e projeção DTO, e registrar a contagem e o tempo de cada abordagem.']),
      dia('@Transactional sem mistério',
        ['Transações no Spring', 'Proxy e por que a auto-invocação ignora @Transactional, propagação REQUIRED × REQUIRES_NEW × NESTED, readOnly, rollback padrão só para unchecked (e rollbackFor), transação no service e não no controller, isolamento pela anotação, e o antipadrão da chamada HTTP dentro de uma transação longa.'],
        ['Provar o proxy', 'Escrever testes que mostram: rollback em RuntimeException, commit em checked sem rollbackFor, auto-invocação sem transação e REQUIRES_NEW gravando auditoria mesmo quando a transação externa faz rollback.']),
      dia('Concorrência e Spring Data',
        ['Locking e consultas no Spring Data', '@Version e OptimisticLockException (mapeada para 409), lock pessimista com @Lock(PESSIMISTIC_WRITE), métodos derivados, @Query em JPQL e nativa, Specification para filtros dinâmicos, e paginação com Page × Slice (e o custo da consulta de count).'],
        ['Edição concorrente segura', 'Implementar a atualização com @Version, devolver 409 com ProblemDetail quando houver conflito e provar com teste que duas atualizações simultâneas não se sobrescrevem.'])
    ],
    complemento: { k: 'db', titulo: 'O SQL que o JPA gera', itens: [
      'Comparar o SQL gerado com o que você escreveria à mão.',
      'Rodar EXPLAIN na consulta da listagem.',
      'Criar índice para a FK mais consultada.',
      'Medir a consulta de count da paginação.',
      'Registrar no README as decisões de fetch.'
    ] },
    dsa: { padrao: 'Pilha', problemas: ['Valid Parentheses (LC 20)', 'Min Stack (LC 155)', 'Evaluate Reverse Polish Notation (LC 150)', 'Daily Temperatures (LC 739)', 'Generate Parentheses (LC 22)'] },
    transversal: [
      tr('ingles', 'Ler no original um artigo de Vlad Mihalcea sobre N+1 e anotar 5 termos técnicos.'),
      tr('mercado', 'Escrever a história STAR de um bug de persistência que você resolveu.'),
      tr('ingles', 'Explicar em inglês, em 2 minutos, o que é N+1 e as três correções.'),
      tr('mercado', 'Revisar o CV: incluir o resultado medido do N+1 como evidência.'),
      tr('ingles', 'Escrever em inglês o ADR curto: LAZY por padrão e open-in-view desligado.')
    ],
    sabado: {
      exercicios: 'Quiz de 20 perguntas de JPA e @Transactional respondidas por escrito; refazer sem consulta os testes de proxy de quinta.',
      lab: 'Vitrine v0.2: persistência com Flyway e JPA, listagem sem N+1 (teste que conta queries), atualização com @Version e 409, e testes @DataJpaTest contra PostgreSQL real.',
      noite: ['arquitetura', 'Desenho de agregados', 'Em 45 minutos, desenhar os agregados do domínio da vitrine e decidir onde fica cada transação; anotar onde haveria disputa por lock.']
    },
    domingo: 'Revisão D7: as três correções do N+1 e as regras de rollback, de memória.',
    entregaveis: [
      ent('c04-n1', 'Relatório N+1 com contagem de queries', 'Um teste falha se o número de queries subir; três abordagens comparadas com números.'),
      ent('c04-lock', 'Atualização concorrente com @Version devolvendo 409', 'Teste com duas transações concorrentes e ProblemDetail de conflito.'),
      ent('c04-tx', 'Suíte de testes de @Transactional', 'Rollback, rollbackFor, auto-invocação e REQUIRES_NEW demonstrados.')
    ],
    livros: [
      ['hpjp', 'Capítulos de mapeamento de relacionamentos, fetching e controle de concorrência'],
      ['jpa-tudose', 'Capítulos de mapeamento, Spring Data e transações'],
      ['spring-data-jpa-docs', 'Seções de repositórios, projeções e locking'],
      ['vlad-blog', 'Artigos sobre N+1, open-in-view e paginação com JOIN FETCH']
    ],
    perguntas: [
      'O que é o problema N+1 e como você o detecta?',
      'Por que @Transactional não funciona quando o método chama outro da mesma classe?',
      'Quando uma exceção checked faz rollback?',
      'Lock otimista ou pessimista para um estoque com muita disputa?',
      'O que é open-in-view e por que desligá-lo?'
    ],
    mercado: ['Encontrar 2 vagas que citam Hibernate e anotar se pedem performance de banco.']
  },

  /* ─────────────────────────── C05 ─────────────────────────── */
  {
    id: 'c05', tipo: 'nucleo', ordem: 7, k: 'testing',
    titulo: 'Testes automatizados profissionais',
    objetivo: 'Escrever a suíte que o avaliador do teste técnico procura: unidade do domínio, fatia web e integração com banco real.',
    porque: 'Testes aparecem em 66% das vagas júnior/pleno (68% das Java e 74% das Node/TS). Teste técnico entregue sem teste costuma ser eliminado.',
    topicos: ['Pirâmide de testes', 'JUnit Jupiter e AssertJ', 'Testes parametrizados', 'Mock, stub, spy e fake', 'Clock injetado', '@WebMvcTest e MockMvc', '@DataJpaTest', 'Testcontainers', 'JaCoCo e PIT', 'TDD'],
    dias: [
      dia('Pirâmide e testes de unidade',
        ['O que testar e em que nível', 'Pirâmide × troféu de testes, teste de comportamento × de implementação, Arrange-Act-Assert, nomes que descrevem a regra, JUnit Jupiter (5 ou 6): @Test, @BeforeEach, @Nested, @DisplayName, @ParameterizedTest com @CsvSource e @MethodSource, assertThrows; asserções fluentes com AssertJ.'],
        ['Domínio coberto', 'Testar as regras de negócio da vitrine sem Spring, com casos-limite parametrizados (zero, negativo, nulo, máximo) e um teste por regra.']),
      dia('Dublês de teste com Mockito',
        ['Mock, stub, spy e fake', 'Diferença entre os dublês, quando mockar (fronteiras: HTTP, relógio, fila) e quando não (domínio, value objects), when/thenReturn, verify com parcimônia, ArgumentCaptor, BDDMockito, Clock injetado para testar tempo e por que mock demais quebra a refatoração.'],
        ['Service com dependências externas', 'Testar um service que chama um gateway de pagamento e usa Clock: stub do gateway, captor da requisição enviada, teste de timeout e de data-limite com Clock.fixed.']),
      dia('Testes de fatia no Spring',
        ['@WebMvcTest, @DataJpaTest e @SpringBootTest', 'O que cada anotação sobe, MockMvc (perform, andExpect, jsonPath), @MockitoBean (substitui o @MockBean, descontinuado no Spring Boot 3.4), teste de validação e de ProblemDetail, @DataJpaTest com banco real, custo de contexto e o cache de contexto entre testes.'],
        ['Controller e repositório testados', 'Cobrir todos os endpoints com @WebMvcTest (sucesso, 400, 404, 409) e os repositórios customizados com @DataJpaTest. Medir o tempo da suíte e evitar contextos diferentes sem necessidade.']),
      dia('Testcontainers e integração',
        ['Integração com dependências reais', 'Testcontainers com PostgreSQL (depois Kafka e Redis), @ServiceConnection (Spring Boot 3.1 em diante), containers reutilizáveis, dados de teste com builders ou Object Mother, isolamento entre testes (transação × limpeza) e teste de contrato da API contra o OpenAPI.'],
        ['Fluxo ponta a ponta', 'Escrever 3 testes @SpringBootTest com Testcontainers que percorrem criar → buscar → atualizar → conflito pela API real (MockMvc ou RestClient).']),
      dia('Cobertura, mutação e TDD',
        ['Qualidade da suíte', 'JaCoCo (linha × branch) e por que 100% não é meta, teste de mutação com PIT para saber se a suíte pega bugs, ciclo red-green-refactor, testes lentos e frágeis (sleep, ordem, data atual) e como corrigi-los.'],
        ['Relatório e kata TDD', 'Gerar JaCoCo e PIT no domínio, matar 5 mutantes sobreviventes e fazer um kata em TDD (Bowling Game ou calculadora de frete) com um commit por etapa do ciclo.'])
    ],
    complemento: { k: 'java', titulo: 'Refatoração guiada por teste', itens: [
      'Escolher a classe mais confusa da vitrine.',
      'Cobrir o comportamento atual antes de mexer.',
      'Extrair métodos e dar nomes que revelam intenção.',
      'Remover duplicação com a suíte verde.',
      'Registrar o antes e o depois no PR.'
    ] },
    dsa: { padrao: 'Busca binária', problemas: ['Binary Search (LC 704)', 'Search a 2D Matrix (LC 74)', 'Koko Eating Bananas (LC 875)', 'Find Minimum in Rotated Sorted Array (LC 153)', 'Search in Rotated Sorted Array (LC 33)'] },
    transversal: [
      tr('ingles', 'Ler no original a seção Writing Tests do guia do JUnit.'),
      tr('mercado', 'Anotar nas vagas quais citam TDD, testes de integração ou cobertura mínima.'),
      tr('ingles', 'Descrever em inglês, num PR, uma falha de teste: assertion, causa e correção.'),
      tr('mercado', 'Preparar a resposta de 2 minutos: como você decide o que testar? Com exemplo da vitrine.'),
      tr('ingles', 'Gravar em inglês a explicação do teste de mutação.')
    ],
    sabado: {
      exercicios: 'Kata TDD cronometrado de 45 minutos (Roman Numerals ou String Calculator) e testes de caracterização para o Gilded Rose Refactoring Kata antes de refatorá-lo.',
      lab: 'Vitrine v0.3: suíte com unidade, fatia web, repositório e integração com Testcontainers; relatório JaCoCo publicado como artefato e PIT rodando no domínio.',
      noite: ['arquitetura', 'Testabilidade como critério de desenho', 'Em 45 minutos, apontar no código da vitrine 3 lugares difíceis de testar e o que no desenho causa isso (estático, new no meio da regra, relógio do sistema); planejar a correção.']
    },
    domingo: 'Revisão D7: quando usar mock e os quatro tipos de dublê.',
    entregaveis: [
      ent('c05-suite', 'Suíte de testes em quatro níveis', 'Unidade, @WebMvcTest, @DataJpaTest e integração com Testcontainers, todos verdes do zero.'),
      ent('c05-cobertura', 'Relatório JaCoCo e PIT do domínio', 'Cobertura de branch do domínio acima de 70% e mutantes sobreviventes analisados.'),
      ent('c05-tdd', 'Kata TDD com histórico red/green/refactor', 'Um commit por etapa do ciclo, visível no histórico.')
    ],
    livros: [
      ['khorikov', 'Partes 1 e 2: o que é um bom teste, mocks e testes de integração'],
      ['effective-testing', 'Capítulos de testes por especificação, de fronteira e de dublês'],
      ['tdd-beck', 'Parte 1 (o exemplo do dinheiro)'],
      ['junit-guide', 'Seções de testes parametrizados e aninhados'],
      ['testcontainers-docs', 'Guia Testing Spring Boot applications with Testcontainers']
    ],
    perguntas: [
      'Qual a diferença entre mock e stub?',
      'O que o @WebMvcTest sobe e o que ele não sobe?',
      'Por que testar com banco real em vez de H2?',
      'Cobertura alta garante qualidade? Como você mede a qualidade da suíte?',
      'Como você testa um código que depende da data atual?'
    ],
    mercado: ['Começar a separar 5 vagas por semana em que você teria 60% ou mais de aderência.']
  },

  /* ─────────────────────────── C06 ─────────────────────────── */
  {
    id: 'c06', tipo: 'nucleo', ordem: 9, k: 'devops', marco: 'candidaturas',
    titulo: 'Docker e CI/CD — e início das candidaturas',
    objetivo: 'Fazer qualquer pessoa rodar a vitrine com um comando e impedir merge sem pipeline verde. A partir desta semana, 10 candidaturas qualificadas por semana.',
    porque: 'CI/CD aparece em 42% das vagas júnior/pleno (54% das Java) e Docker em 30% (45% das Java). Projeto que só roda na sua máquina perde pontos no teste técnico.',
    topicos: ['Imagem × container e camadas', 'Dockerfile multi-stage', 'Usuário não root e .dockerignore', 'docker compose com healthcheck', 'GitHub Actions', 'Cache de dependências', 'Branch protection', 'Imagem no GHCR', 'Trivy e Dependabot', 'Azure Pipelines e Jenkinsfile'],
    dias: [
      dia('Docker por dentro',
        ['Imagens, camadas e containers', 'Imagem × container, camadas e cache de build, namespaces e cgroups em uma frase cada, registry e tags (latest não é versão), portas, volumes × bind mounts, redes do Docker, variáveis de ambiente e log no stdout.'],
        ['Dockerfile multi-stage', 'Escrever um Dockerfile multi-stage para a vitrine (build com Maven ou Gradle, runtime só com JRE), usuário não root, .dockerignore e extração em camadas do Spring Boot (java -Djarmode=tools extract --layers, no Boot 3.3 em diante). Comparar tamanho e tempo de rebuild.']),
      dia('Compose e ambiente local',
        ['docker compose para desenvolvimento', 'Serviços, depends_on com condition: service_healthy, healthcheck, volumes nomeados, redes, profiles, arquivo .env com segredos fora do repositório, e os comandos logs, exec e down -v.'],
        ['Um comando para subir tudo', 'Compose com a aplicação, PostgreSQL (e Redis ou Kafka, se houver), healthchecks e seed automático. Testar numa pasta limpa que docker compose up sobe tudo do zero.']),
      dia('GitHub Actions',
        ['Pipeline de integração contínua', 'Workflow, eventos push e pull_request, jobs, steps e runners, actions/checkout e setup-java com cache, matrix, artefatos (relatório de testes e JaCoCo), secrets e variáveis, permissões mínimas do GITHUB_TOKEN e concurrency para cancelar execuções antigas.'],
        ['CI com gates', 'Criar o workflow com build, testes (Testcontainers roda no runner), JaCoCo como artefato e falha abaixo do limite. Ligar branch protection exigindo o check no PR.']),
      dia('Entrega contínua e imagem publicada',
        ['Do commit à imagem', 'Build e push para o GitHub Container Registry com tag do SHA e semver, scan da imagem com Trivy e das dependências com Dependabot, trunk-based × GitFlow, versionamento semântico e changelog, rollback por tag.'],
        ['Pipeline de release', 'Workflow que, numa tag v*, gera a imagem, publica no GHCR com as tags vX.Y.Z e sha, roda o Trivy e cria a release com notas.']),
      dia('Ler pipelines de outras ferramentas',
        ['Azure DevOps, Jenkins e GitLab CI', 'Equivalência entre GitHub Actions, Azure Pipelines em YAML (stages, jobs, steps), Jenkinsfile declarativo (pipeline, agent, stages) e .gitlab-ci.yml; as métricas DORA (frequência de deploy, lead time, taxa de falha e tempo de recuperação).'],
        ['Tradução de pipeline', 'Reescrever o seu workflow como azure-pipelines.yml e como Jenkinsfile, sem precisar executar, registrando as diferenças; colocar o badge do CI no README.'])
    ],
    complemento: { k: 'git', titulo: 'Repositório profissional', itens: [
      'Proteger a branch principal.',
      'Criar CODEOWNERS e template de issue.',
      'Ligar o Dependabot para Maven e GitHub Actions.',
      'Ligar secret scanning e push protection.',
      'Criar a tag v0.4.0 com changelog.'
    ] },
    dsa: { padrao: 'Listas ligadas', problemas: ['Reverse Linked List (LC 206)', 'Merge Two Sorted Lists (LC 21)', 'Linked List Cycle (LC 141)', 'Remove Nth Node From End of List (LC 19)', 'Reorder List (LC 143)'] },
    transversal: comCandidaturas(
      'Ler no original a referência Workflow syntax do GitHub Actions (jobs e steps).',
      'Escrever em inglês a seção do README sobre como rodar a vitrine com um comando.'
    ),
    sabado: {
      exercicios: 'Diagnóstico de container: resolver 5 problemas propostos (porta errada, healthcheck falhando, permissão em volume, variável ausente, imagem gigante) usando só docker logs, inspect e exec.',
      lab: 'Vitrine v0.4: Dockerfile multi-stage, compose completo, CI com gates, release com imagem no GHCR e badge no README.',
      noite: ['mercado', 'Primeira leva de candidaturas', 'Revisar as 10 candidaturas da semana, registrar no pipeline e ensaiar a apresentação de 60 segundos para a triagem do RH.']
    },
    domingo: 'Revisão D7: diferença entre imagem e container e o caminho do commit até a imagem.',
    entregaveis: [
      ent('c06-docker', 'Vitrine sobe com docker compose up do zero', 'Testado em pasta limpa, com healthchecks e seed automáticos e nenhum segredo no repositório.'),
      ent('c06-ci', 'Pipeline de CI com gates e branch protection', 'O PR não pode ser mergeado com teste vermelho ou cobertura abaixo do limite.'),
      ent('c06-release', 'Release com imagem publicada e escaneada', 'A tag gera a imagem no GHCR com versão e SHA e o relatório do Trivy.')
    ],
    livros: [
      ['docker-deep-dive', 'Capítulos de imagens, containers, compose e segurança'],
      ['docker-docs', 'Guias Building best practices e Compose'],
      ['gha-docs', 'Workflow syntax, Caching dependencies e permissões do GITHUB_TOKEN'],
      ['continuous-delivery', 'Capítulos 1 a 5 (o pipeline de implantação)'],
      ['accelerate', 'Capítulos 1 e 2 (métricas DORA)']
    ],
    perguntas: [
      'Qual a diferença entre imagem e container?',
      'Por que usar build multi-stage?',
      'Como você impede que um segredo vaze no pipeline?',
      'O que acontece quando um teste falha no PR?',
      'Trunk-based ou GitFlow? Em que contexto?'
    ],
    mercado: ['Início das candidaturas: 10 por semana em vagas com 60% ou mais de aderência.', 'Registrar cada candidatura no pipeline com data e próximo passo.']
  },

  /* ─────────────────────────── C07 ─────────────────────────── */
  {
    id: 'c07', tipo: 'nucleo', ordem: 11, k: 'sec',
    titulo: 'Segurança de API e deploy público',
    objetivo: 'Proteger a API com autenticação e autorização que você sabe explicar e publicá-la numa URL pública.',
    porque: 'Segurança (OWASP, OAuth, JWT) aparece em 13% das vagas e é pergunta certa em entrevista. Um link que funciona vale mais que qualquer linha do CV.',
    topicos: ['SecurityFilterChain', 'BCrypt e Argon2', 'Stateful × stateless e CSRF', 'JWT: estrutura e assinatura', 'OAuth 2.0, OIDC e PKCE', 'Resource server', 'Roles, authorities e scopes', 'BOLA/IDOR', 'OWASP Top 10', 'Deploy em PaaS'],
    dias: [
      dia('Spring Security por dentro',
        ['Cadeia de filtros e autenticação', 'SecurityFilterChain como bean, ordem dos filtros, Authentication e SecurityContext, UserDetailsService, PasswordEncoder (BCrypt ou Argon2, nunca hash simples), sessão stateful × stateless, e CSRF: necessário com cookie de sessão, dispensável em API stateless com token no cabeçalho.'],
        ['Login com senha segura', 'Implementar cadastro e login com BCrypt, usuário de teste nas sementes e testes de 401 para rota protegida sem credencial.']),
      dia('JWT e OAuth2',
        ['Tokens sem mistério', 'Estrutura do JWT (header, payload, assinatura), HS256 × RS256, claims sub, exp, iat, aud e iss, expiração curta com refresh token, revogação, onde guardar no front (cookie httpOnly × memória); OAuth 2.0 e OIDC: papéis, Authorization Code com PKCE, client credentials e resource server validando JWT pela JWKS.'],
        ['Resource server', 'Configurar a vitrine como OAuth2 resource server validando JWT, emitir tokens localmente (Keycloak no compose ou um emissor de teste) e testar token expirado, assinatura inválida e audiência errada.']),
      dia('Autorização',
        ['Quem pode fazer o quê', 'Roles × authorities × scopes, @PreAuthorize com SpEL, autorização por dono do recurso (BOLA/IDOR, o item 1 do OWASP API Security Top 10), checar autorização no service e não só na URL, e o princípio do menor privilégio.'],
        ['Prova de BOLA', 'Escrever um teste que tenta ler o recurso de outro usuário pelo id, vê-lo passar (vulnerável), corrigir com verificação de dono e manter o teste como regressão.']),
      dia('OWASP Top 10 aplicado',
        ['As falhas que mais aparecem', 'Controle de acesso quebrado, falhas criptográficas, injeção (SQL concatenado, JPQL, comando), configuração insegura (CORS aberto, Actuator exposto, stack trace), componentes vulneráveis, falhas de autenticação e SSRF; validação de entrada, codificação de saída, cabeçalhos de segurança e rate limiting.'],
        ['Checklist na vitrine', 'Aplicar o OWASP Top 10 à vitrine: provar com teste que a busca não sofre SQL injection, fechar o CORS para a origem do front, restringir o Actuator e versionar o checklist no repositório.']),
      dia('Deploy público',
        ['Colocar no ar com o básico de segurança', 'PaaS com container (Render, Railway ou Fly.io) × nuvem, banco gerenciado, variáveis e segredos no provedor, HTTPS, health check do provedor, custo zero ou baixo e logs do provedor.'],
        ['URL pública', 'Publicar a API e o banco, configurar os segredos fora do repositório, apontar o health check para o Actuator e colocar o link e o Swagger no README e no CV.'])
    ],
    complemento: { k: 'sec', titulo: 'Segredos e dependências', itens: [
      'Rodar o gitleaks no histórico do repositório.',
      'Mover qualquer segredo para variável de ambiente.',
      'Ligar os alertas do Dependabot.',
      'Rodar o OWASP Dependency-Check ou o scan do GitHub.',
      'Registrar o checklist de segurança por release.'
    ] },
    dsa: { padrao: 'Árvores I', problemas: ['Invert Binary Tree (LC 226)', 'Maximum Depth of Binary Tree (LC 104)', 'Same Tree (LC 100)', 'Diameter of Binary Tree (LC 543)', 'Balanced Binary Tree (LC 110)'] },
    transversal: comCandidaturas(
      'Ler no original o item API1 (Broken Object Level Authorization) do OWASP API Security Top 10.',
      'Explicar em inglês a diferença entre autenticação e autorização com um exemplo da vitrine.'
    ),
    sabado: {
      exercicios: 'Resolver 5 laboratórios gratuitos de controle de acesso e de injeção de SQL da Web Security Academy da PortSwigger.',
      lab: 'Vitrine v0.5: autenticação, resource server, autorização por dono com teste de regressão, checklist OWASP e deploy público com URL no README.',
      noite: ['mercado', 'Preparação para a triagem', 'Ensaiar a apresentação de 60 segundos e as respostas sobre pretensão salarial e disponibilidade; revisar o pipeline.']
    },
    domingo: 'Revisão D7: desenhar de memória o fluxo Authorization Code com PKCE.',
    entregaveis: [
      ent('c07-auth', 'Autenticação e autorização testadas', 'Testes de 401, 403, token expirado e BOLA mantidos como regressão.'),
      ent('c07-owasp', 'Checklist OWASP Top 10 aplicado', 'Cada item com evidência: teste, configuração ou justificativa.'),
      ent('c07-deploy', 'API publicada em URL pública', 'Link e Swagger no README, segredos fora do repositório e health check ativo.')
    ],
    livros: [
      ['spring-security-ia', 'Capítulos de arquitetura, autenticação, autorização e resource server'],
      ['oauth2-in-action', 'Capítulos de Authorization Code, tokens e PKCE'],
      ['api-security-ia', 'Capítulos de autenticação por token e de controle de acesso'],
      ['owasp-top10', 'Lista atual e a página de cada item'],
      ['owasp-api', 'Itens API1 a API5'],
      ['owasp-cheatsheets', 'Authentication, Password Storage e JSON Web Token for Java'],
      ['spring-security-docs', 'Servlet Applications → OAuth2 Resource Server'],
      ['portswigger', 'Trilhas Access control e SQL injection']
    ],
    perguntas: [
      'Onde você guardaria o JWT no front e por quê?',
      'Por que dá para desligar o CSRF numa API stateless?',
      'O que é BOLA/IDOR e como você evita?',
      'Como você revoga um JWT antes de expirar?',
      'Explique o fluxo Authorization Code com PKCE.'
    ],
    mercado: ['10 candidaturas.', 'Colocar o link do deploy no CV e no LinkedIn.']
  },

  /* ─────────────────────────── C08 ─────────────────────────── */
  {
    id: 'c08', tipo: 'nucleo', ordem: 13, k: 'arquitetura',
    titulo: 'Mensageria, microsserviços e resiliência',
    objetivo: 'Integrar serviços de forma assíncrona e resiliente e saber explicar entrega, idempotência e falha.',
    porque: 'Mensageria aparece em 49% das vagas Java júnior/pleno, microsserviços em 40% e Kafka em 23%. É o maior salto entre júnior e pleno.',
    topicos: ['Monólito modular × microsserviços', 'Síncrono × assíncrono', 'Kafka: partição, offset e consumer group', 'Garantias de entrega', 'Consumidor idempotente', 'Retry e DLT', 'Outbox', 'Saga', 'RabbitMQ', 'Timeout, retry e circuit breaker'],
    dias: [
      dia('Síncrono × assíncrono e microsserviços',
        ['Quando distribuir', 'Monólito modular × microsserviços e o custo de cada um, comunicação síncrona (REST, gRPC) × assíncrona (eventos, filas), acoplamento temporal, API gateway, service discovery, configuração centralizada, banco por serviço e consistência eventual.'],
        ['Desenhar a divisão', 'Desenhar no C4 nível 2 a vitrine com 2 serviços e um broker, decidir o que é chamada síncrona e o que é evento, e registrar num ADR.']),
      dia('Kafka essencial',
        ['Como o Kafka funciona', 'Broker, tópico, partição, offset, réplica e líder, producer com acks=all e idempotência, chave e ordenação por partição, consumer group e rebalanceamento, commit de offset, retenção, e at-most-once × at-least-once × exactly-once (transações) com o custo de cada um.'],
        ['Produzir e consumir', 'Subir o Kafka no compose em modo KRaft, publicar um evento de domínio com Spring Kafka (chave = id do agregado) e consumi-lo em outro serviço; observar partições e offsets pela linha de comando.']),
      dia('Falha e idempotência',
        ['Entrega pelo menos uma vez', 'Consumidor idempotente (tabela de mensagens processadas, chave natural, upsert), retry com backoff, dead letter topic com DefaultErrorHandler ou @RetryableTopic, mensagem venenosa, ordem × paralelismo.'],
        ['Falha controlada', 'Fazer o consumidor falhar em 1 de cada 5 mensagens, configurar retry com backoff e DLT, reprocessar a DLT e provar com teste que não houve efeito duplicado.']),
      dia('Outbox e sagas',
        ['Consistência entre banco e broker', 'O problema da escrita dupla, transactional outbox e relay (polling ou CDC com Debezium), inbox, saga orquestrada × coreografada e compensação; RabbitMQ para comparar: exchange direct, topic e fanout, fila, ack e DLX.'],
        ['Outbox na vitrine', 'Gravar o evento na tabela outbox na mesma transação do agregado e publicá-lo por um job de polling; um teste derruba o broker e prova que nada se perde.']),
      dia('Resiliência entre serviços',
        ['Padrões de estabilidade', 'Timeout em toda chamada remota, retry só para erro transitório com backoff e jitter, circuit breaker (fechado, aberto, meio-aberto), bulkhead, fallback e rate limiter com Resilience4j, e idempotency key em POST para o cliente poder repetir.'],
        ['Circuit breaker medido', 'Proteger a chamada HTTP entre os serviços com timeout, retry e circuit breaker; derrubar o serviço chamado e mostrar nas métricas o circuito abrindo e fechando.'])
    ],
    complemento: { k: 'testing', titulo: 'Testes de integração assíncrona', itens: [
      'Testcontainers com Kafka.',
      'Awaitility para esperar o efeito do consumidor.',
      'Teste de mensagem duplicada.',
      'Teste de mensagem inválida indo para a DLT.',
      'Teste do outbox com o broker parado.'
    ] },
    dsa: { padrao: 'Árvores II e BST', problemas: ['Binary Tree Level Order Traversal (LC 102)', 'Validate Binary Search Tree (LC 98)', 'Lowest Common Ancestor of a BST (LC 235)', 'Kth Smallest Element in a BST (LC 230)', 'Binary Tree Right Side View (LC 199)'] },
    transversal: comCandidaturas(
      'Ler no original as seções de design e de garantias de entrega da documentação do Kafka.',
      'Explicar em inglês, em 3 minutos, outbox e idempotência.'
    ),
    sabado: {
      exercicios: 'Responder por escrito 10 cenários de falha (broker fora, consumidor lento, mensagem duplicada, fora de ordem, rebalanceamento no meio do processamento) com o comportamento esperado e a correção.',
      lab: 'Vitrine v0.6: fluxo assíncrono com Kafka, outbox, consumidor idempotente, DLT, circuit breaker e demo gravada de falha e recuperação.',
      noite: ['arquitetura', 'System design: notificações', 'Desenhar em 45 minutos um serviço de notificações (e-mail e push) com fila, retry, DLQ e limite por usuário.']
    },
    domingo: 'Revisão D7: garantias de entrega e o problema da escrita dupla.',
    entregaveis: [
      ent('c08-kafka', 'Fluxo assíncrono com outbox e consumidor idempotente', 'Testes provam que mensagem duplicada não duplica efeito e que nada se perde com o broker parado.'),
      ent('c08-resiliencia', 'Circuit breaker e timeouts com métricas', 'Demo gravada do circuito abrindo e fechando.'),
      ent('c08-adr', 'ADR síncrono × assíncrono', 'Alternativas, consequências e critério de reversão.')
    ],
    livros: [
      ['kafka-tdg', 'Capítulos de producers, consumers, confiabilidade e exactly-once'],
      ['microservices-patterns', 'Capítulos de comunicação, de sagas e o padrão transactional outbox'],
      ['building-microservices', 'Capítulos de comunicação e de resiliência'],
      ['release-it', 'Parte de padrões de estabilidade'],
      ['eip', 'Message Channel, Dead Letter Channel e Idempotent Receiver'],
      ['spring-kafka-docs', 'Error handling, Non-Blocking Retries e Transactions'],
      ['resilience4j-docs', 'CircuitBreaker, Retry e TimeLimiter']
    ],
    perguntas: [
      'Como o Kafka garante ordem?',
      'O que acontece se o consumidor cair depois de processar e antes de commitar o offset?',
      'Explique o padrão outbox.',
      'Quando você usaria RabbitMQ em vez de Kafka?',
      'Como um circuit breaker decide abrir?'
    ],
    mercado: ['10 candidaturas.', 'Destacar mensageria no CV com o link da demo.']
  },

  /* ─────────────────────────── C09 ─────────────────────────── */
  {
    id: 'c09', tipo: 'nucleo', ordem: 14, k: 'aws',
    titulo: 'Nuvem (AWS × Azure), Kubernetes e observabilidade básica',
    objetivo: 'Rodar a vitrine em nuvem e em Kubernetes e enxergar o que acontece com logs, métricas e health checks.',
    porque: 'Nuvem aparece em 33% das vagas júnior/pleno (Azure 27%, AWS 21%), Kubernetes em 40% das Java e observabilidade em 23%.',
    topicos: ['Responsabilidade compartilhada', 'IAM × Entra ID', 'VPC/VNet e sub-redes', 'ECS Fargate × Azure Container Apps', 'Banco gerenciado', 'Pod, Deployment e Service', 'Probes', 'Requests e limits', 'Logs JSON e Micrometer', 'Sinais de ouro'],
    dias: [
      dia('Fundamentos de nuvem com equivalência',
        ['AWS e Azure lado a lado', 'Regiões e zonas, modelo de responsabilidade compartilhada, IAM (usuário, role, policy) e Entra ID com RBAC no Azure, rede (VPC/VNet, sub-rede pública × privada, security group/NSG), compute (EC2/VM, ECS Fargate × Azure Container Apps), banco gerenciado (RDS × Azure Database for PostgreSQL), objetos (S3 × Blob), filas (SQS × Service Bus), custo e free tier.'],
        ['Tabela de equivalência e conta segura', 'Montar a tabela AWS × Azure dos serviços acima e criar a conta com MFA, alerta de orçamento e um usuário sem privilégio de root.']),
      dia('Container na nuvem',
        ['Deploy gerenciado', 'Registry (ECR × ACR), serviço de container gerenciado, variáveis e segredos (Secrets Manager × Key Vault), health check, escala por CPU, logs (CloudWatch × Log Analytics) e o pipeline publicando na nuvem com OIDC, sem chave estática.'],
        ['Vitrine na nuvem', 'Publicar a imagem no registry e rodar a vitrine em ECS Fargate ou Azure Container Apps com banco gerenciado no menor tamanho. Destruir no fim do dia se o custo pedir, guardando evidência.']),
      dia('Kubernetes de uso',
        ['Objetos que caem na entrevista', 'Pod, ReplicaSet, Deployment (rolling update e rollback), Service (ClusterIP, NodePort, LoadBalancer), Ingress, ConfigMap e Secret, requests e limits, liveness × readiness × startup probes, namespace e kubectl get, describe, logs, exec e port-forward.'],
        ['Vitrine no kind', 'Criar um cluster kind local, escrever Deployment, Service, ConfigMap, Secret e probes apontando para o Actuator, fazer um rolling update de versão e um rollback.']),
      dia('Kubernetes: operação mínima',
        ['Escala e falhas', 'HPA por CPU, recursos e OOMKilled, CrashLoopBackOff e como investigar, Helm em uma frase (chart e values), EKS/AKS × kind, e por que o banco fica fora do cluster numa produção pequena.'],
        ['Diagnóstico no cluster', 'Provocar 3 falhas (imagem errada, probe falhando, limite de memória baixo), investigar com describe e logs e registrar sintoma → causa → correção.']),
      dia('Observabilidade básica',
        ['Os três sinais', 'Logs estruturados em JSON com correlação (traceId), métricas com Micrometer e Prometheus (contador, gauge, histograma), traces distribuídos com OpenTelemetry em uma frase, e os quatro sinais de ouro: latência, tráfego, erros e saturação.'],
        ['Painel mínimo', 'Ligar log JSON e Micrometer na vitrine, subir Prometheus e Grafana no compose e montar um painel com taxa de requisições, erros, p95 e conexões do pool.'])
    ],
    complemento: { k: 'devops', titulo: 'Linux e rede para diagnosticar', itens: [
      'curl -v e leitura de cabeçalhos.',
      'DNS com dig ou nslookup.',
      'Portas abertas com ss.',
      'Processos e variáveis de ambiente com ps, top e env.',
      'Leitura de log com grep e jq.'
    ] },
    dsa: { padrao: 'Grafos I (BFS e DFS)', problemas: ['Number of Islands (LC 200)', 'Flood Fill (LC 733)', 'Max Area of Island (LC 695)', 'Clone Graph (LC 133)', 'Course Schedule (LC 207)'] },
    transversal: comCandidaturas(
      'Ler no original a página Pods da documentação do Kubernetes.',
      'Explicar em inglês a diferença entre liveness e readiness probe.'
    ),
    sabado: {
      exercicios: 'Simulado de 30 questões no estilo AZ-900 ou CLF-C02 (Microsoft Learn ou AWS Skill Builder) para fixar o vocabulário de nuvem.',
      lab: 'Vitrine v0.7: rodando em nuvem (ou com evidência gravada, se destruída por custo), manifests de Kubernetes versionados e painel com os quatro sinais de ouro.',
      noite: ['arquitetura', 'System design: de 100 para 10 mil usuários', 'Desenhar em 45 minutos a evolução da vitrine: balanceador, réplicas, cache, banco gerenciado, fila e o que monitorar.']
    },
    domingo: 'Revisão D7: tabela AWS × Azure e os objetos do Kubernetes.',
    entregaveis: [
      ent('c09-cloud', 'Vitrine rodando em nuvem gerenciada', 'Imagem no registry, segredos no cofre, health check e alerta de orçamento; evidência gravada se o ambiente for destruído.'),
      ent('c09-k8s', 'Manifests Kubernetes com probes e rollback', 'Rolling update e rollback demonstrados no kind e 3 falhas diagnosticadas.'),
      ent('c09-obs', 'Painel com os quatro sinais de ouro', 'Latência p95, tráfego, erros e saturação do pool visíveis.')
    ],
    livros: [
      ['aws-in-action', 'Capítulos de IAM, rede (VPC), containers e banco gerenciado'],
      ['good-parts-aws', 'Leitura rápida sobre escolhas pragmáticas de serviço'],
      ['ms-learn', 'Trilha AZ-900 e módulos de Azure Container Apps'],
      ['k8s-ur', 'Capítulos de Pods, Deployments, Services, ConfigMaps e Secrets'],
      ['k8s-docs', 'Concepts → Workloads e Configure Liveness, Readiness and Startup Probes'],
      ['sre', 'Capítulo Monitoring Distributed Systems (sinais de ouro)'],
      ['obs-eng', 'Capítulos 1 a 3']
    ],
    perguntas: [
      'Qual a diferença entre liveness e readiness probe?',
      'O pod está em CrashLoopBackOff. Como você investiga?',
      'Sub-rede pública ou privada para o banco? Por quê?',
      'O que é o modelo de responsabilidade compartilhada?',
      'Quais são os quatro sinais de ouro?'
    ],
    mercado: ['10 candidaturas.', 'Adicionar ao CV a nuvem usada e o que foi publicado nela.']
  },

  /* ─────────────────────────── C10 ─────────────────────────── */
  {
    id: 'c10', tipo: 'nucleo', ordem: 17, k: 'frontend',
    titulo: 'React + TypeScript I — o front da vitrine',
    objetivo: 'Construir o front da vitrine em React com TypeScript, consumindo a API com autenticação.',
    porque: '48% das vagas Java júnior/pleno pedem React ou Angular, e 67% das Node/TS. Full stack é o formato mais comum de vaga pleno.',
    topicos: ['Tipagem estrutural', 'Union types e narrowing', 'Generics e utilitários', 'Componentes, props e estado', 'Keys e reconciliação', 'useEffect com critério', 'TanStack Query', 'React Hook Form e Zod', 'Rotas protegidas', 'Token, CORS e build'],
    dias: [
      dia('TypeScript para quem vem do Java',
        ['Tipos estruturais', 'Tipagem estrutural × nominal, type × interface, union e literal types, narrowing (typeof, in, discriminated union), generics, utilitários (Partial, Pick, Omit, Record), unknown × any, modo strict e tipos para respostas de API.'],
        ['Tipar o contrato', 'Gerar os tipos a partir do OpenAPI da vitrine (openapi-typescript) ou escrevê-los à mão e criar um cliente HTTP tipado que entende ProblemDetail.']),
      dia('Componentes, props e estado',
        ['Modelo mental do React', 'Componentes como funções, JSX, props e composição, useState, renderização e reconciliação, listas com key estável, estado derivado × duplicado, levantar estado e eventos.'],
        ['Projeto Vite', 'Criar o front com Vite, React e TypeScript, com telas de listagem e de detalhe feitas de componentes pequenos e estados de carregando, vazio e erro.']),
      dia('Efeitos e busca de dados',
        ['useEffect e TanStack Query', 'Quando não usar useEffect, dependências, função de limpeza e condição de corrida; TanStack Query: useQuery, useMutation, cache, invalidação, retry, paginação e cancelamento de requisição.'],
        ['Listagem paginada', 'Implementar a listagem paginada e a criação com TanStack Query, invalidando a lista depois de criar e exibindo os erros de validação vindos do ProblemDetail.']),
      dia('Formulários e rotas',
        ['Formulários e navegação', 'Formulário controlado × não controlado, React Hook Form com validação por schema (Zod), acessibilidade básica (label, foco, mensagem de erro), e React Router: rotas, parâmetros, rotas protegidas e redirecionamento.'],
        ['Cadastro e edição', 'Formulário de cadastro e edição com React Hook Form e Zod, rotas protegidas que redirecionam para o login e mensagens de erro acessíveis.']),
      dia('Autenticação no front e publicação',
        ['Token, CORS e build', 'Onde guardar o token (memória × cookie httpOnly), tratar 401 de forma centralizada, CORS do lado do back, variáveis de ambiente do Vite, build de produção e deploy estático (Vercel, Netlify ou o mesmo provedor da API).'],
        ['Front publicado', 'Ligar o login à API, tratar 401 com redirecionamento, publicar o front e restringir o CORS da API a essa origem.'])
    ],
    complemento: { k: 'frontend', titulo: 'JavaScript que o React pressupõe', itens: [
      'Closures e escopo.',
      'Promises e async/await.',
      'Desestruturação e spread.',
      'map, filter e reduce em arrays.',
      'Módulos ES e import dinâmico.'
    ] },
    dsa: { padrao: 'Heap e prioridade', problemas: ['Kth Largest Element in an Array (LC 215)', 'Last Stone Weight (LC 1046)', 'K Closest Points to Origin (LC 973)', 'Task Scheduler (LC 621)', 'Merge k Sorted Lists (LC 23)'] },
    transversal: comCandidaturas(
      'Ler no original o artigo You Might Not Need an Effect, do react.dev.',
      'Explicar em inglês a diferença entre estado e props.'
    ),
    sabado: {
      exercicios: '5 desafios fáceis do type-challenges e 3 componentes sem biblioteca: abas, modal acessível e paginação.',
      lab: 'Vitrine v0.8: front React com TypeScript publicado, com login, listagem paginada, cadastro e edição consumindo a API.',
      noite: ['mercado', 'Candidaturas full stack', 'Aplicar a 5 vagas full stack Java + React com os links do front e do back no CV.']
    },
    domingo: 'Revisão D7: regras de dependência do useEffect e narrowing em TypeScript.',
    entregaveis: [
      ent('c10-front', 'Front React + TypeScript publicado', 'Login, listagem paginada, cadastro e edição funcionando contra a API pública.'),
      ent('c10-tipos', 'Cliente HTTP tipado a partir do OpenAPI', 'Erros de ProblemDetail exibidos por campo no formulário.')
    ],
    livros: [
      ['react-dev', 'Learn: Describing the UI, Adding Interactivity, Managing State e Escape Hatches'],
      ['learning-react', 'Capítulos de hooks, formulários e dados'],
      ['effective-ts', 'Capítulos sobre o sistema de tipos e inferência'],
      ['ts-handbook', 'Everyday Types, Narrowing e Generics'],
      ['tanstack-docs', 'Queries, Mutations e Query Invalidation'],
      ['eloquent-js', 'Capítulos de funções, objetos e programação assíncrona, para as lacunas de JavaScript']
    ],
    perguntas: [
      'Qual a diferença entre props e estado?',
      'Por que a key de uma lista precisa ser estável?',
      'Quando você não usaria useEffect?',
      'Onde você guardaria o token de autenticação no front?',
      'type ou interface em TypeScript?'
    ],
    mercado: ['10 candidaturas, priorizando vagas full stack.']
  },

  /* ─────────────────────────── C11 ─────────────────────────── */
  {
    id: 'c11', tipo: 'nucleo', ordem: 20, k: 'aieng',
    titulo: 'IA aplicada ao desenvolvimento e ao produto',
    objetivo: 'Usar assistentes de código com disciplina de engenharia e entregar uma funcionalidade com LLM avaliada, segura e com custo controlado.',
    porque: '40% das vagas júnior/pleno citam IA (51% das Java e das Node/TS). Com 73% dos devs usando assistentes todo dia (Stack Overflow 2026), o diferencial é usar com critério e provar o resultado.',
    topicos: ['Context engineering', 'Especificação antes do código', 'Revisão de código gerado', 'Tokens, contexto e temperatura', 'Saída estruturada', 'Tool calling', 'Golden dataset e avaliação', 'Prompt injection', 'LGPD e mascaramento', 'Custo, cache e fallback'],
    dias: [
      dia('Assistente de código com disciplina',
        ['Engenharia assistida por IA', 'Context engineering (o que o modelo precisa ver: arquivos, padrões e testes), especificação antes do código, revisão do diff linha a linha, testes como oráculo, e os riscos: código plausível e errado, dependência inventada (slopsquatting), licença e segredo colado no prompt.'],
        ['Funcionalidade com agente e revisão', 'Implementar uma funcionalidade pequena da vitrine com um assistente (Claude Code, Copilot ou Cursor) a partir de uma especificação escrita por você. Revisar o diff, rejeitar o que não entender e registrar no PR o que foi gerado e o que foi corrigido.']),
      dia('LLM como componente',
        ['Como chamar um modelo', 'Tokens, janela de contexto, temperatura, system prompt, saída estruturada com JSON Schema, tool calling, streaming, limites de taxa e custo por token; no Spring AI: ChatClient, prompt templates e conversão da resposta para record.'],
        ['Classificação com saída estruturada', 'Com o Spring AI, criar um endpoint que classifica um texto do domínio (por exemplo, a categoria de uma transação) e devolve um record validado; tratar timeout e resposta inválida.']),
      dia('Avaliação',
        ['Medir antes de confiar', 'Golden dataset, métricas simples (acurácia e precisão por classe), regressão de prompt, LLM-as-a-judge e seus vieses, e avaliar custo e latência junto com a qualidade.'],
        ['Conjunto de avaliação', 'Montar 50 exemplos rotulados, rodar a classificação, medir a acurácia e comparar 2 versões de prompt; versionar o dataset e o resultado.']),
      dia('Segurança e privacidade',
        ['Riscos de LLM em produção', 'OWASP Top 10 for LLM Applications (prompt injection, vazamento de informação sensível, tratamento inseguro da saída, consumo sem limite), LGPD: dado pessoal no prompt, minimização e mascaramento; guardrails e validação da saída.'],
        ['Ataque e defesa', 'Tentar 5 prompt injections contra o endpoint, validar a saída por schema, mascarar dados pessoais antes do envio e limitar tokens por requisição.']),
      dia('Custo, cache e fallback',
        ['IA operável', 'Custo por requisição, cache de respostas, modelo menor para tarefa simples, fallback quando o provedor cai, observabilidade (tokens, latência, erro) e feature flag.'],
        ['Funcionalidade operável', 'Adicionar cache, métrica de tokens e custo, fallback por regra simples quando o modelo falhar, e documentar no README a avaliação, os riscos e o custo.'])
    ],
    complemento: { k: 'ia', titulo: 'Fundamentos para conversar sobre IA', itens: [
      'Embeddings em uma frase.',
      'RAG em uma frase.',
      'Fine-tuning × prompt × RAG: quando usar cada um.',
      'Alucinação e por que acontece.',
      'Modelos abertos × fechados.'
    ] },
    dsa: { padrao: 'Programação dinâmica I', problemas: ['Climbing Stairs (LC 70)', 'Min Cost Climbing Stairs (LC 746)', 'House Robber (LC 198)', 'Coin Change (LC 322)', 'Longest Increasing Subsequence (LC 300)'] },
    transversal: comCandidaturas(
      'Ler no original o item Prompt Injection do OWASP Top 10 for LLM Applications.',
      'Explicar em inglês como você avaliou a funcionalidade de IA.'
    ),
    sabado: {
      exercicios: 'Resolver 2 problemas de DSA com o assistente desligado e depois comparar com a solução sugerida por ele, anotando onde ele erra.',
      lab: 'Vitrine v0.9: funcionalidade com LLM avaliada (dataset, métrica e comparação de prompts), com validação, mascaramento, cache, métricas e README de riscos e custo.',
      noite: ['mercado', 'A pergunta sobre IA', 'Preparar a resposta de 2 minutos: como você usa IA no dia a dia e como garante a qualidade do que ela gera?']
    },
    domingo: 'Revisão D7: os riscos do OWASP Top 10 for LLM e como você avaliou a funcionalidade.',
    entregaveis: [
      ent('c11-feature', 'Funcionalidade com LLM avaliada', '50 exemplos rotulados, acurácia medida e 2 prompts comparados; saída validada por schema.'),
      ent('c11-riscos', 'README de riscos, privacidade e custo', 'Prompt injection testada, dados mascarados e custo por requisição estimado.'),
      ent('c11-pr', 'PR feito com assistente e revisado', 'Registro do que foi gerado, do que foi rejeitado e por quê.')
    ],
    livros: [
      ['ai-engineering', 'Capítulos de avaliação, prompt engineering e arquitetura de aplicações'],
      ['prompt-eng-llms', 'Capítulos de construção de prompt e de avaliação'],
      ['spring-ai-docs', 'ChatClient API, Structured Output e Advisors'],
      ['owasp-llm', 'Lista completa'],
      ['aieng-trilha', 'Módulos de revisão de código gerado, evals e adoção governada']
    ],
    perguntas: [
      'Como você garante a qualidade do código gerado por IA?',
      'O que é prompt injection e como você mitiga?',
      'Como você avaliou se a funcionalidade de IA funciona?',
      'Quando você não usaria um LLM?',
      'Como você controla o custo de uma funcionalidade com LLM?'
    ],
    mercado: ['10 candidaturas.', 'Incluir no CV a funcionalidade de IA com a métrica de avaliação.']
  },

  /* ─────────────────────────── C12 ─────────────────────────── */
  {
    id: 'c12', tipo: 'nucleo', ordem: 23, k: 'arquitetura',
    titulo: 'System design lite e simulado completo',
    objetivo: 'Conduzir um system design de 45 minutos em nível pleno e passar por um simulado completo de processo seletivo.',
    porque: 'Entrevistas pleno incluem desenho de sistema simples e discussão do projeto; o teste técnico e o live coding fecham o processo.',
    topicos: ['Roteiro de 45 minutos', 'Estimativa de capacidade', 'API e modelo de dados', 'Réplicas e cache', 'Filas para picos', 'Particionamento', 'CAP em uma frase', 'Live coding falado', 'STAR', 'Negociação'],
    dias: [
      dia('Método de system design',
        ['Roteiro de 45 minutos', 'Requisitos funcionais e não funcionais, estimativa (usuários, QPS, armazenamento), API, modelo de dados, desenho de alto nível, gargalos, escala (réplicas, cache, fila, particionamento) e trade-offs; CAP e consistência eventual em uma frase cada.'],
        ['Encurtador de URL', 'Desenhar um encurtador de URL seguindo o roteiro, cronometrado, e comparar com o capítulo correspondente do System Design Interview.']),
      dia('Escala de leitura e escrita',
        ['As peças de escala', 'Balanceador, serviços stateless, réplicas de leitura, cache (onde fica e o que invalidar), filas para absorver picos, particionamento e escolha da chave, idempotência e limites de taxa.'],
        ['Sistema de pedidos', 'Desenhar o fluxo de pedidos de um e-commerce com pagamento externo: consistência, idempotência, fila e o que acontece se o pagamento cair.']),
      dia('Live coding como entrevista',
        ['Como se comportar no live coding', 'Esclarecer o problema, fazer exemplos, propor a solução ingênua com complexidade, otimizar, escrever código limpo falando em voz alta, testar com casos-limite e pedir dica sem travar.'],
        ['3 problemas cronometrados', 'Resolver 3 problemas médios em 30 minutos cada, falando em voz alta e gravando.']),
      dia('Comportamental e projeto',
        ['Método STAR', 'Situação, tarefa, ação e resultado com números; 6 histórias (conflito, erro, prazo apertado, decisão técnica, aprendizado rápido, ajudar alguém) e as perguntas para fazer à empresa.'],
        ['Banco de histórias', 'Escrever as 6 histórias STAR e ensaiá-las em voz alta em até 2 minutos cada.']),
      dia('Simulado completo',
        ['Processo seletivo de ponta a ponta', 'Triagem (60 segundos de apresentação, pretensão e disponibilidade), técnica (perguntas e live coding), system design e comportamental.'],
        ['Simulado de 90 minutos', 'Fazer com alguém experiente ou numa plataforma de mock interview; registrar nota por etapa e o plano de correção.'])
    ],
    complemento: { k: 'mercado', titulo: 'Negociação e oferta', itens: [
      'Pesquisar a faixa salarial do cargo-alvo (Glassdoor, guias de recrutamento, conversas com pares).',
      'Definir o mínimo aceitável e o alvo, em CLT e em PJ.',
      'Calcular o líquido de cada modelo de contratação.',
      'Preparar a resposta sobre pretensão salarial.',
      'Listar perguntas sobre o time, a stack e o plano de carreira.'
    ] },
    dsa: { padrao: 'Misto cronometrado', problemas: ['Top K Frequent Words (LC 692)', 'Find Peak Element (LC 162)', 'Copy List with Random Pointer (LC 138)', 'Construct Binary Tree from Preorder and Inorder Traversal (LC 105)', 'Subarray Product Less Than K (LC 713)'] },
    transversal: comCandidaturas(
      'Responder em inglês: tell me about yourself, em 2 minutos.',
      'Contar em inglês 2 das histórias STAR.'
    ),
    sabado: {
      exercicios: 'Mais 2 system designs cronometrados: feed de notícias simples e sistema de reservas.',
      lab: 'Pasta interview/ com os system designs, as histórias STAR e os links privados das gravações.',
      noite: ['mercado', 'Pipeline e follow-up', 'Revisar todas as etapas em aberto e fazer follow-up nas que passaram de 7 dias sem resposta.']
    },
    domingo: 'Revisão D7: o roteiro de system design e as 6 histórias.',
    entregaveis: [
      ent('c12-sd', '3 system designs cronometrados documentados', 'Cada um com requisitos, estimativa, API, dados, diagrama e trade-offs.'),
      ent('c12-star', '6 histórias STAR ensaiadas', 'Cada uma em até 2 minutos e com resultado mensurável.'),
      ent('c12-simulado', 'Simulado completo de 90 minutos', 'Nota por etapa e plano de correção registrados.')
    ],
    livros: [
      ['sdi1', 'Capítulos de escala, estimativa, método e o do encurtador de URL'],
      ['ddia', 'Capítulos de replicação e particionamento, como aprofundamento'],
      ['bctci', 'Partes sobre o processo de entrevista e como comunicar a solução'],
      ['tech-resume', 'Revisão do CV e do LinkedIn antes da reta final'],
      ['never-split', 'Capítulos sobre ancoragem e perguntas calibradas, para a negociação']
    ],
    perguntas: [
      'Como você desenharia um encurtador de URL?',
      'Onde você colocaria cache num sistema de pedidos?',
      'Me conte sobre um erro que você cometeu.',
      'Por que você quer sair do emprego atual?',
      'Qual a sua pretensão salarial?'
    ],
    mercado: ['10 candidaturas.', 'Follow-up em todas as etapas abertas.']
  },

  /* ─────────────────────────── C13 ─────────────────────────── */
  {
    id: 'c13', tipo: 'nucleo', ordem: 26, k: 'mercado',
    titulo: 'Semana final — entrevistas, oferta e continuidade',
    objetivo: 'Concentrar a energia nas etapas em andamento, negociar com dados e decidir como o plano de 12 fases continua.',
    porque: 'Fechar um processo exige foco nas etapas abertas, e o plano principal continua depois da contratação.',
    topicos: ['Dossiê por empresa', 'Revisão relâmpago', 'Negociação', 'CLT × PJ', 'Plano de 30/60/90 dias', 'Retomada das 12 fases'],
    dias: [
      dia('Etapas em aberto',
        ['Preparação por empresa', 'Para cada processo aberto: stack da empresa, produto, perguntas prováveis e 3 perguntas para fazer ao time.'],
        ['Dossiê por processo', 'Uma página por empresa com o que revisar e as histórias STAR mais aderentes.']),
      dia('Revisão técnica final',
        ['Os assuntos que mais caem', 'Coleções e equals/hashCode, SQL com window function, N+1 e @Transactional, testes, Docker, JWT, outbox e probes do Kubernetes.'],
        ['Rodada relâmpago', 'Responder 40 perguntas em voz alta, 1 minuto cada, usando o banco de perguntas das semanas anteriores.']),
      dia('Negociação',
        ['Oferta com dados', 'Faixa pesquisada, remuneração total (salário, benefícios, CLT × PJ, bônus), contraproposta educada, prazo para responder e não aceitar no calor do momento.'],
        ['Simular a negociação', 'Ensaiar com alguém a conversa de oferta e de contraproposta.']),
      dia('Continuidade do plano',
        ['O que fica para depois', 'Mapear o que este sprint cobriu das 12 fases e escolher onde retomar: a primeira fase cujos critérios de 80% ainda não foram cumpridos com evidência.'],
        ['Plano dos próximos 90 dias', 'Escrever o plano de 30/60/90 dias para o novo emprego e a fase em que o plano principal será retomado.']),
      dia('Encerramento',
        ['Retrospectiva do sprint', 'Entregáveis validados, taxa de resposta das candidaturas, etapas alcançadas e o que funcionou.'],
        ['Registro final', 'Atualizar CV, LinkedIn e README com tudo o que foi entregue e arquivar o pipeline.'])
    ],
    complemento: { k: 'mercado', titulo: 'Pipeline final', itens: [
      'Follow-up em todas as etapas abertas.',
      'Responder recrutadores pendentes.',
      'Agradecer a quem indicou.',
      'Pedir retorno dos processos encerrados.',
      'Se nenhum processo estiver avançado, manter 5 candidaturas novas por semana.'
    ] },
    dsa: { padrao: 'Manutenção', problemas: ['Refazer o problema mais difícil do seu registro de erros', 'Refazer um problema de árvores', 'Refazer um problema de grafos', 'Refazer um problema de DP', 'Refazer um problema misto cronometrado'] },
    transversal: comCandidaturas(
      'Revisar em inglês a apresentação de 2 minutos.',
      'Ensaiar em inglês as perguntas para fazer à empresa.'
    ),
    sabado: {
      exercicios: 'Se houver entrevista na semana seguinte: simulado focado na stack daquela empresa.',
      lab: 'Vitrine final com tag v1.0.0, changelog e README atualizado.',
      noite: ['mercado', 'Decisão', 'Comparar as ofertas (se houver) com critérios escritos: salário líquido, stack, time, aprendizado e estabilidade.']
    },
    domingo: 'Descanso real.',
    entregaveis: [
      ent('c13-dossies', 'Dossiê por processo em andamento', 'Uma página por empresa com stack, perguntas prováveis e histórias STAR escolhidas.'),
      ent('c13-v1', 'Vitrine v1.0.0 com changelog', 'Tag, release e README com todos os entregáveis do sprint.'),
      ent('c13-continuidade', 'Plano de continuidade', 'Fase do plano principal a retomar e plano de 30/60/90 dias no novo emprego.')
    ],
    livros: [
      ['se-guidebook', 'Capítulos sobre os primeiros meses num emprego novo'],
      ['never-split', 'Revisão dos capítulos de negociação']
    ],
    perguntas: [
      'Por que você quer trabalhar aqui?',
      'Onde você se vê em 2 anos?',
      'O que você espera do time?',
      'Qual o seu maior ponto de melhoria técnica?',
      'Que perguntas você tem para nós?'
    ],
    mercado: ['Foco nas etapas abertas.', 'Negociar com a faixa pesquisada.']
  }
];
