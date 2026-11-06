/* ═══════════════════════════════════════════════
   RECOLOCAÇÃO / APROFUNDAMENTO — as 13 semanas opcionais

   Entram uma a uma quando o prazo passa de 13 semanas,
   na ordem de `prioridade` (1 entra primeiro). `ordem`
   define onde cada uma se encaixa entre as semanas do
   núcleo. Com 26 semanas (180 dias), todas entram.

   Prioridade segue o retorno na contratação: simulados
   e React II antes de RAG e system design avançado.
═══════════════════════════════════════════════ */

import { dia, tr, comCandidaturas, ent } from './util.js';

export const SEMANAS_APROFUNDAMENTO = [
  /* ───────────────────────── Java II ───────────────────────── */
  {
    id: 'd-java2', tipo: 'aprofundamento', prioridade: 4, ordem: 2, k: 'java',
    titulo: 'Java core II — concorrência, JVM e Java moderno',
    objetivo: 'Sustentar as perguntas de pleno sobre threads, memória e Java 21/25, que separam quem usa a linguagem de quem a entende.',
    porque: 'Vagas pleno pedem experiência com concorrência e performance; virtual threads viraram pergunta frequente desde o Java 21.',
    topicos: ['Java Memory Model e happens-before', 'volatile × synchronized', 'Deadlock', 'ExecutorService', 'CompletableFuture', 'Virtual threads e pinning', 'Sealed e pattern matching', 'Heap, stack e GC', 'Diagnóstico de vazamento', 'Novidades do Java 25 LTS'],
    dias: [
      dia('Threads e condições de corrida',
        ['Modelo de threads', 'Thread e Runnable, ciclo de vida, condição de corrida, visibilidade e Java Memory Model (happens-before), volatile × synchronized, deadlock e as quatro condições, prevenção por ordem de aquisição de lock, AtomicInteger e compare-and-set.'],
        ['Provocar e corrigir uma corrida', 'Contador incrementado por 4 threads sem sincronização: mostrar o valor errado, corrigir com synchronized, AtomicInteger e LongAdder e comparar o tempo. Escrever um deadlock com dois locks e resolvê-lo pela ordem de aquisição.']),
      dia('Executores e CompletableFuture',
        ['java.util.concurrent no dia a dia', 'ExecutorService e tipos de pool (e por que não usar o pool comum para I/O), Future × CompletableFuture (supplyAsync, thenApply, thenCompose, thenCombine, allOf, exceptionally, orTimeout), ConcurrentHashMap (compute, merge), CountDownLatch e Semaphore.'],
        ['Agregador paralelo com timeout', 'Chamar 3 serviços simulados em paralelo com CompletableFuture, combinar os resultados, aplicar timeout de 500 ms com fallback e testar o caminho de erro.']),
      dia('Virtual threads',
        ['Virtual threads e concorrência estruturada', 'Platform × virtual threads, quando ganham (I/O bloqueante) e quando não (CPU-bound), pinning (com synchronized até o Java 23, resolvido no 24 pelo JEP 491; com código nativo ainda ocorre), ThreadLocal com milhões de threads, pool de conexões como limite real e backpressure; spring.threads.virtual.enabled no Spring Boot.'],
        ['Benchmark de I/O com dois executores', 'Simular 10.000 chamadas bloqueantes de 100 ms com um pool fixo de 200 threads e com newVirtualThreadPerTaskExecutor, medir tempo total e memória e registrar a conclusão.']),
      dia('JVM: memória e garbage collection',
        ['O que a JVM faz com o seu objeto', 'Heap × stack, metaspace, ciclo de vida de um objeto, coleta geracional, G1 como coletor padrão e ZGC para baixa latência, pausa × throughput, OutOfMemoryError × StackOverflowError, vazamentos típicos (cache sem limite, listener não removido) e por que limitar memória em container.'],
        ['Diagnosticar um vazamento', 'Criar um serviço que acumula objetos num Map estático, observar o heap com jcmd, JFR ou VisualVM, gerar um heap dump, achar o dominador e corrigir com um cache de tamanho máximo.']),
      dia('Java moderno do 17 ao 25',
        ['Recursos cobrados em vaga', 'Records com compact constructor, sealed interfaces, pattern matching em switch e record patterns, switch expressions, text blocks, var e seus limites, Stream.toList, SequencedCollection (21), scoped values e corpo flexível de construtor (finais no 25); string templates foram retirados.'],
        ['Refatorar para Java moderno', 'Pegar 3 trechos antigos dos katas (DTO com getters, switch longo de tipos, laços de agregação) e reescrevê-los com record, sealed interface com switch e streams, mantendo os testes verdes.'])
    ],
    complemento: { k: 'java', titulo: 'Leitura de código do JDK', itens: [
      'Ler HashMap.putVal e explicar o treeify.',
      'Ler ArrayList.grow e calcular o crescimento.',
      'Ler a documentação de ConcurrentHashMap.compute.',
      'Ler o JEP 444 (virtual threads).',
      'Ler o JEP 491 (sincronização sem pinning).'
    ] },
    dsa: { padrao: 'Arrays e hashing II', problemas: ['Product of Array Except Self (LC 238)', 'Longest Consecutive Sequence (LC 128)', 'Subarray Sum Equals K (LC 560)', 'Majority Element (LC 169)', 'Valid Sudoku (LC 36)'] },
    transversal: [
      tr('ingles', 'Ler o JEP 444 no original e resumir motivação e limites em 5 frases.'),
      tr('mercado', 'Anotar nas vagas-alvo quais citam concorrência, performance ou Java 21/25.'),
      tr('ingles', 'Explicar em voz alta, em inglês, a diferença entre platform e virtual threads.'),
      tr('mercado', 'Atualizar no mapa de lacunas a nota de concorrência e JVM.'),
      tr('ingles', 'Escrever em inglês o README do benchmark de virtual threads.')
    ],
    sabado: {
      exercicios: 'Produtor-consumidor com BlockingQueue, rate limiter com Semaphore, cache thread-safe com computeIfAbsent e contador de palavras paralelo comparando parallelStream e ExecutorService.',
      lab: 'Módulo de concorrência nos katas: benchmark de virtual threads documentado (método, números, conclusão), teste do agregador com timeout e relatório do heap dump.',
      noite: ['arquitetura', 'Pergunta de entrevista: pool e backpressure', 'Responder em 10 minutos, por escrito, como você limitaria 10.000 requisições simultâneas a um banco com 20 conexões; comparar com o capítulo de concorrência do Well-Grounded Java Developer.']
    },
    domingo: 'Revisão D7: JMM, happens-before e as quatro condições de deadlock, de memória.',
    entregaveis: [
      ent('d-java2-bench', 'Benchmark de virtual threads × pool fixo documentado', 'Método reproduzível, números de 3 execuções e conclusão sobre I/O × CPU.'),
      ent('d-java2-heap', 'Relatório de diagnóstico de vazamento com heap dump', 'Causa raiz identificada pelo dominador e correção com teste.')
    ],
    livros: [
      ['jcip', 'Capítulos 1 a 3 (thread safety e compartilhamento) e 6 a 8 (executores)'],
      ['well-grounded', 'Capítulos de concorrência e de virtual threads'],
      ['optimizing-java', 'Capítulos de garbage collection e de memória'],
      ['effective-java', 'Itens 78 a 84 (concorrência)'],
      ['jep-444', 'Texto completo']
    ],
    perguntas: [
      'Qual a diferença entre volatile e synchronized?',
      'Quando virtual threads não trazem ganho?',
      'Como você evita deadlock?',
      'O que acontece quando o heap enche e como você investiga?',
      'thenApply × thenCompose: quando usar cada um?'
    ],
    mercado: ['Registrar 3 empresas-alvo que usam Java 21 ou 25 (pela vaga ou pelo blog técnico).']
  },

  /* ───────────────────────── Performance ───────────────────────── */
  {
    id: 'd-perf', tipo: 'aprofundamento', prioridade: 6, ordem: 6, k: 'db',
    titulo: 'Performance de dados — tuning, cache Redis e pool',
    objetivo: 'Medir e melhorar a latência de leitura com índices, paginação por cursor, cache e pool de conexões dimensionado.',
    porque: 'Redis e performance aparecem em vagas pleno de fintech e e-commerce; cache (invalidação, TTL, stampede) é pergunta clássica.',
    topicos: ['p50, p95 e p99', 'Lei de Little', 'pg_stat_statements', 'Teste de carga com k6', 'Paginação keyset', 'JDBC batching', 'Cache-aside', 'Cache stampede', 'HikariCP', 'Timeouts em cascata'],
    dias: [
      dia('Medir antes de otimizar',
        ['Latência, throughput e percentis', 'p50 × p95 × p99 e por que a média engana, lei de Little (L = λ·W), gargalos típicos (banco, rede, serialização, GC) e as ferramentas: pg_stat_statements, auto_explain, k6 ou Gatling.'],
        ['Linha de base', 'Rodar uma carga com k6 contra a listagem e a busca da vitrine (30 segundos, 50 usuários virtuais), registrar p95 e erros e usar o pg_stat_statements para achar as 3 consultas mais caras.']),
      dia('Tuning de consulta e paginação',
        ['Consultas rápidas em tabelas grandes', 'Paginação OFFSET × keyset (seek method), índice para ORDER BY com LIMIT, contagem aproximada, N+1 escondido na serialização, batch insert e update com JDBC batching e ids por SEQUENCE.'],
        ['Keyset na listagem', 'Trocar a paginação OFFSET por keyset num endpoint, medir a página 1 e a página 10.000 nas duas versões e ligar hibernate.jdbc.batch_size numa importação de 50 mil linhas.']),
      dia('Cache com Redis',
        ['Cache-aside e suas armadilhas', 'Cache-aside, read-through, write-through e write-behind; TTL e invalidação, chave e serialização, cache stampede e como evitar (lock, TTL com jitter, renovação antecipada), consistência eventual; Redis: strings, hashes, sorted sets, expiração e persistência RDB/AOF em uma frase; Spring Cache (@Cacheable, @CacheEvict) com Redis.'],
        ['Cache na leitura mais cara', 'Aplicar @Cacheable com Redis no endpoint de detalhe, invalidar na atualização, medir o p95 antes e depois e provar com Testcontainers que a atualização invalida a chave.']),
      dia('Pool de conexões e timeouts',
        ['HikariCP e recursos limitados', 'Tamanho do pool (maior não é melhor), connectionTimeout, maxLifetime, detecção de vazamento (leakDetectionThreshold), timeouts em cascata (HTTP, pool e statement_timeout do banco) e a relação com threads e virtual threads.'],
        ['Pool sob carga', 'Rodar a carga com pool de 5, 10 e 50 conexões, registrar p95 e erros de timeout e escolher o tamanho com justificativa; configurar statement_timeout para consultas analíticas.']),
      dia('Relatório de performance',
        ['Como apresentar uma otimização', 'Hipótese, medição, mudança, resultado e custo; o que não otimizar; como contar a história numa entrevista com números.'],
        ['Relatório antes/depois', 'Consolidar em Markdown as três otimizações da semana com tabelas de p95 e throughput e o custo de cada uma (memória, complexidade, consistência).'])
    ],
    complemento: { k: 'devops', titulo: 'Redis e carga no ambiente', itens: [
      'Adicionar Redis ao docker compose com healthcheck.',
      'Versionar o script do k6 no repositório.',
      'Criar um perfil da aplicação para teste de carga.',
      'Expor as métricas do pool pelo Actuator.',
      'Documentar como reproduzir a carga.'
    ] },
    dsa: { padrao: 'Intervalos e ordenação', problemas: ['Merge Intervals (LC 56)', 'Insert Interval (LC 57)', 'Non-overlapping Intervals (LC 435)', 'Partition Labels (LC 763)', 'Sort Colors (LC 75)'] },
    transversal: [
      tr('ingles', 'Ler no original a página About Pool Sizing do HikariCP.'),
      tr('mercado', 'Anotar as vagas que citam Redis, cache ou alta performance.'),
      tr('ingles', 'Explicar em inglês cache-aside e cache stampede.'),
      tr('mercado', 'Transformar o relatório de performance num item do CV com números.'),
      tr('ingles', 'Escrever em inglês o resumo do relatório.')
    ],
    sabado: {
      exercicios: 'Implementar um cache LRU com TTL em memória e um rate limiter token bucket; resolver 3 estimativas (requisições por segundo, memória para 1 milhão de chaves, crescimento da tabela em 1 ano).',
      lab: 'Vitrine com Redis, keyset, pool dimensionado e relatório de performance versionado.',
      noite: ['arquitetura', 'System design: cache de catálogo', 'Desenhar em 45 minutos o cache de um catálogo com 10 mil leituras por segundo: onde fica, TTL, invalidação e o que acontece se o Redis cair.']
    },
    domingo: 'Revisão D7: lei de Little e os quatro padrões de cache.',
    entregaveis: [
      ent('d-perf-relatorio', 'Relatório de performance antes/depois', 'p95 e throughput medidos com k6 para 3 mudanças, com o custo de cada uma.'),
      ent('d-perf-cache', 'Cache Redis com invalidação testada', 'Teste com Testcontainers provando que a atualização invalida a chave.')
    ],
    livros: [
      ['sql-perf', 'Capítulos de resultados parciais (top-N e seek) e de joins'],
      ['use-the-index', 'Seção Partial Results (paginação)'],
      ['hpjp', 'Capítulos de batching e de pool de conexões'],
      ['ddia', 'Capítulo inicial sobre latência e percentis'],
      ['redis-docs', 'Data types e expiração de chaves']
    ],
    perguntas: [
      'Por que OFFSET fica lento em páginas altas?',
      'Como você invalida cache quando o dado muda?',
      'O que é cache stampede?',
      'Como você escolhe o tamanho do pool de conexões?',
      'p95 ou média para medir SLA? Por quê?'
    ],
    mercado: ['Incluir no LinkedIn o resultado numérico da otimização.']
  },

  /* ───────────────────────── Arquitetura ───────────────────────── */
  {
    id: 'd-arq', tipo: 'aprofundamento', prioridade: 5, ordem: 8, k: 'arquitetura',
    titulo: 'Arquitetura aplicada — SOLID, padrões, camadas e ADR',
    objetivo: 'Justificar a organização do código com SOLID, padrões e uma arquitetura em camadas ou hexagonal, e registrar as decisões.',
    porque: 'SOLID, Clean Code e padrões aparecem em 22% das vagas (29% das Java); entrevistas pleno pedem para defender decisões.',
    topicos: ['SRP, OCP, LSP, ISP e DIP', 'Coesão e acoplamento', 'Strategy, Factory, Builder, Adapter', 'Decorator, Observer, Template Method', 'Pacote por feature', 'Clean Architecture', 'Portas e adaptadores', 'Entidade × value object', 'Agregado e invariantes', 'ADR e C4'],
    dias: [
      dia('SOLID no código real',
        ['Os cinco princípios com exemplo e contraexemplo', 'SRP como motivo único para mudar, OCP com Strategy, LSP e o exemplo do quadrado e do retângulo, ISP contra interfaces gordas, DIP e injeção de dependência; coesão, acoplamento, Lei de Demeter e composição × herança.'],
        ['Auditoria SOLID', 'Revisar 5 classes da vitrine, apontar violações com o princípio e o custo concreto, e corrigir 2 delas com os testes verdes.']),
      dia('Padrões de projeto que caem em entrevista',
        ['GoF essencial', 'Strategy, Factory Method, Builder, Adapter, Decorator, Observer, Template Method, Chain of Responsibility e Singleton (e por que o contêiner do Spring o torna desnecessário); onde cada um aparece no próprio Spring: templates, proxies, estratégias em beans.'],
        ['Strategy no domínio', 'Substituir um switch de regras (frete, taxa ou desconto) por Strategy com beans do Spring escolhidos por tipo, com um teste para cada estratégia.']),
      dia('Camadas, Clean e hexagonal',
        ['Organização do código', 'Camadas tradicionais, pacote por feature × por camada, Clean Architecture e a regra de dependência, hexagonal (portas e adaptadores), onde ficam DTO, entidade JPA e modelo de domínio, e o custo de cada abstração.'],
        ['Um caso de uso hexagonal', 'Reestruturar um caso de uso da vitrine em porta de entrada, serviço de domínio e porta de saída com adaptador JPA, mantendo o resto em camadas; medir o que mudou nos testes.']),
      dia('DDD tático em um dia',
        ['Entidade, value object e agregado', 'Linguagem ubíqua, entidade × value object, agregado e raiz, invariantes dentro do agregado, eventos de domínio, repositório por agregado e quando DDD não compensa.'],
        ['Invariantes no agregado', 'Mover 3 regras de validação do service para o agregado (por exemplo, pedido não aceita item com quantidade zero nem alteração depois de pago) e testá-las sem Spring.']),
      dia('Decisões documentadas',
        ['ADR e C4', 'Formato de ADR (contexto, decisão, alternativas, consequências, critério de reversão), níveis 1 e 2 do C4, desenho com Mermaid ou Structurizr e quando escrever um ADR.'],
        ['3 ADRs e o C4', 'Escrever ADRs para LAZY e open-in-view, para camadas × hexagonal e para o formato de erro, e desenhar no README o C4 de contexto e de contêineres da vitrine.'])
    ],
    complemento: { k: 'java', titulo: 'Refatoração com catálogo', itens: [
      'Extract Function e Rename num método longo.',
      'Replace Conditional with Polymorphism.',
      'Introduce Parameter Object.',
      'Move Function para o agregado.',
      'Revisar o diff com os testes verdes.'
    ] },
    dsa: { padrao: 'Projeto de estruturas', problemas: ['LRU Cache (LC 146)', 'Implement Queue using Stacks (LC 232)', 'Time Based Key-Value Store (LC 981)', 'Design HashMap (LC 706)', 'Design Circular Queue (LC 622)'] },
    transversal: [
      tr('ingles', 'Ler no original um ADR público e copiar o formato.'),
      tr('mercado', 'Preparar a resposta: me explique SOLID com um exemplo seu.'),
      tr('ingles', 'Escrever em inglês o ADR de camadas × hexagonal.'),
      tr('mercado', 'Separar 2 vagas que citam DDD ou Clean Architecture e o que exatamente pedem.'),
      tr('ingles', 'Apresentar em inglês o C4 da vitrine em 3 minutos.')
    ],
    sabado: {
      exercicios: 'Tennis Refactoring Kata em Java com testes de caracterização e um pipeline de descontos com Chain of Responsibility.',
      lab: 'Vitrine com um caso de uso hexagonal, Strategy aplicado, 3 ADRs e o C4 no README.',
      noite: ['arquitetura', 'Defesa de arquitetura', 'Simular em 30 minutos a pergunta "por que você organizou assim?" e responder às objeções "isso não é complexidade demais?" e "como isso escala para um time?".']
    },
    domingo: 'Revisão D7: um exemplo seu para cada letra do SOLID.',
    entregaveis: [
      ent('d-arq-adr', '3 ADRs e C4 da vitrine', 'Cada ADR com alternativas e critério de reversão; C4 de contexto e de contêineres no README.'),
      ent('d-arq-refactor', 'Refatoração com Strategy e agregado', 'PR com antes e depois, testes verdes e o princípio aplicado explicado.')
    ],
    livros: [
      ['head-first-dp', 'Capítulos de Strategy, Observer, Decorator, Factory e Adapter'],
      ['gof', 'Catálogo dos padrões da semana, como referência'],
      ['refactoring', 'Capítulo 1 (exemplo completo) e o catálogo das refatorações usadas'],
      ['clean-arch', 'Partes sobre princípios e a regra de dependência'],
      ['hombergs', 'Capítulos de portas e adaptadores e de mapeamento entre camadas'],
      ['fosa', 'Capítulos de estilo em camadas e de decisões de arquitetura']
    ],
    perguntas: [
      'Explique o princípio de inversão de dependência com um exemplo seu.',
      'Quando você não usaria arquitetura hexagonal?',
      'Qual a diferença entre entidade e value object?',
      'Que padrão de projeto o @Transactional usa?',
      'O que vai num ADR?'
    ],
    mercado: ['Adicionar ao README da vitrine a seção Decisões com links para os ADRs.']
  },

  /* ───────────────────────── Consolidação 1 ───────────────────────── */
  {
    id: 'd-cons1', tipo: 'consolidacao', prioridade: 3, ordem: 10, k: 'review',
    titulo: 'Consolidação 1 — revisão D30 e vitrine apresentável',
    objetivo: 'Sem conteúdo novo: revisar, refatorar e deixar a vitrine pronta para quem abrir o seu GitHub hoje.',
    porque: 'O plano exige uma semana sem conteúdo novo a cada ciclo. É nela que o que foi visto vira resposta pronta de entrevista.',
    topicos: ['Revisão D30', 'Refatoração', 'README de portfólio', 'Simulado técnico', 'Checkpoint de 80%'],
    dias: [
      dia('Revisão D30 de Java e SQL',
        ['Recuperação ativa', 'Sem consultar, responder as perguntas de entrevista das semanas de Java e SQL, anotar o que não saiu e reler só esses trechos.'],
        ['Refazer do zero', 'Reimplementar sem consulta 3 katas de Java e 5 consultas SQL da lista; o que travar volta para a fila.']),
      dia('Revisão D30 de Spring e JPA',
        ['Recuperação ativa', 'Explicar em voz alta, gravando, o ciclo da requisição no Spring, o N+1, o proxy do @Transactional e o ProblemDetail.'],
        ['Corrigir o que ficou torto', 'Ler o código da vitrine como avaliador (nomes, duplicação, erros mal tratados, testes frágeis), abrir e resolver 5 issues.']),
      dia('README e documentação',
        ['O que o avaliador lê primeiro', 'README de portfólio: o que é, stack, arquitetura numa imagem, como rodar, como testar, decisões e próximos passos, com versão em inglês.'],
        ['README completo', 'Reescrever o README da vitrine nesse formato, com GIF ou capturas, link do Swagger e dos ADRs.']),
      dia('Simulado técnico 1',
        ['Entrevista técnica de 45 minutos', 'Simular com alguém (ou gravando sozinho): 15 minutos de perguntas de Java e Spring, 20 de live coding de um problema médio e 10 explicando a vitrine.'],
        ['Análise do simulado', 'Assistir à gravação e listar 5 melhorias de comunicação e 3 lacunas técnicas, colocando-as na fila de revisão.']),
      dia('Ajuste de rota',
        ['Checkpoint de 80%', 'Conferir os entregáveis das semanas anteriores: o que está validado com evidência, o que está pendente e o que vale cortar.'],
        ['Plano das próximas semanas', 'Atualizar o mapa de lacunas e o pipeline de candidaturas e escolher 1 lacuna para o buffer de sábado.'])
    ],
    complemento: { k: 'mercado', titulo: 'Presença profissional', itens: [
      'Atualizar o CV com os entregáveis validados.',
      'Publicar um post curto no LinkedIn sobre o relatório N+1 ou de performance.',
      'Revisar os repositórios fixados.',
      'Pedir 1 indicação a um ex-colega.',
      'Responder recrutadores pendentes.'
    ] },
    dsa: { padrao: 'Revisão espaçada cronometrada', problemas: ['Refazer Two Sum (LC 1) em 10 minutos', 'Refazer 3Sum (LC 15) em 25 minutos', 'Refazer Longest Substring Without Repeating Characters (LC 3) em 25 minutos', 'Refazer Valid Parentheses (LC 20) em 10 minutos', 'Refazer Search in Rotated Sorted Array (LC 33) em 25 minutos'] },
    transversal: comCandidaturas(
      'Revisar o vocabulário técnico em inglês anotado nas semanas anteriores.',
      'Revisar o README em inglês com o curso Technical Writing One do Google.'
    ),
    sabado: {
      exercicios: 'Teste técnico completo de 4 horas a partir de um desafio público, com README e testes, como se fosse para uma vaga real.',
      lab: 'Vitrine com README novo, issues resolvidas e tag de release.',
      noite: ['mercado', 'Retrospectiva', 'O que funcionou até aqui, o que não funcionou e o que muda no ritmo das próximas semanas.']
    },
    domingo: 'Descanso. Revisão só se houver vontade, no máximo 1 hora.',
    entregaveis: [
      ent('d-cons1-readme', 'README da vitrine reescrito (PT e EN)', 'Quem nunca viu o projeto consegue rodar e entender em 10 minutos.'),
      ent('d-cons1-simulado', 'Simulado técnico gravado e analisado', 'Gravação de 45 minutos e lista de melhorias registrada.')
    ],
    livros: [
      ['docs-for-devs', 'Capítulos sobre README e documentação para quem usa o projeto'],
      ['google-tech-writing', 'Technical Writing One']
    ],
    perguntas: [
      'Me fale sobre o seu projeto principal em 2 minutos.',
      'Qual foi a decisão técnica mais difícil nele?',
      'O que você faria diferente?',
      'Como alguém roda o seu projeto?',
      'Qual a cobertura de testes e por que esse número?'
    ],
    mercado: ['10 candidaturas.', 'Pedir 1 indicação.']
  },

  /* ───────────────────────── AppSec ───────────────────────── */
  {
    id: 'd-sec', tipo: 'aprofundamento', prioridade: 10, ordem: 12, k: 'sec',
    titulo: 'AppSec no pipeline — SCA, SAST, DAST e segredos',
    objetivo: 'Automatizar no CI as verificações de segurança que times maduros exigem.',
    porque: 'Vagas de bancos e as que citam DevSecOps pedem segurança no pipeline; é um sinal claro de maturidade de pleno.',
    topicos: ['CVE, CVSS e EPSS', 'SBOM (CycloneDX)', 'Dependabot', 'Slopsquatting', 'CodeQL e Semgrep', 'ZAP baseline', 'Secret scanning', 'OIDC no CI', 'Actions fixadas por SHA', 'STRIDE'],
    dias: [
      dia('SCA e cadeia de suprimentos',
        ['Dependências vulneráveis', 'CVE, CVSS e EPSS em uma frase cada, SBOM no formato CycloneDX, Dependabot × Renovate, OWASP Dependency-Check, dependências transitivas e slopsquatting (pacote inventado sugerido por IA).'],
        ['SBOM e alerta', 'Gerar o SBOM CycloneDX no build Maven, ligar o Dependabot e fazer o pipeline falhar com CVE crítica em dependência direta.']),
      dia('Análise estática',
        ['SAST', 'SpotBugs com FindSecBugs, Semgrep, CodeQL do GitHub, falsos positivos e como tratá-los, e quality gate.'],
        ['CodeQL no repositório', 'Ativar o CodeQL para Java no GitHub Actions, triar os achados e documentar os falsos positivos.']),
      dia('Teste dinâmico',
        ['DAST', 'ZAP baseline scan, o que ele encontra (cabeçalhos, cookies, exposição) e o que não encontra (lógica de autorização), e como rodá-lo contra o ambiente de teste no pipeline.'],
        ['ZAP no CI', 'Rodar o ZAP baseline contra a vitrine subida no próprio job e corrigir os cabeçalhos de segurança apontados.']),
      dia('Segredos e configuração',
        ['Gestão de segredos', 'Secret scanning e push protection, gitleaks no pre-commit, cofres (AWS Secrets Manager, Azure Key Vault, Vault) em uma frase cada, rotação e menor privilégio nos tokens do CI (OIDC do GitHub para a nuvem).'],
        ['Sem segredo estático no CI', 'Ligar o gitleaks como pre-commit e no CI e trocar qualquer chave estática do pipeline por OIDC ou secret de ambiente.']),
      dia('Modelagem de ameaças leve',
        ['STRIDE em uma hora', 'Diagrama de fluxo de dados, fronteiras de confiança, STRIDE por elemento, priorização e o que vira teste automatizado.'],
        ['Threat model da vitrine', 'Fazer o STRIDE do fluxo de login e do recurso principal, gerar 5 ameaças priorizadas e transformar 2 em testes.'])
    ],
    complemento: { k: 'devops', titulo: 'Pipeline seguro', itens: [
      'Permissões mínimas por job.',
      'Actions fixadas por SHA.',
      'Job de deploy num ambiente protegido.',
      'Assinatura da imagem com cosign (opcional).',
      'Documentar o pipeline no README.'
    ] },
    dsa: { padrao: 'Strings', problemas: ['Longest Common Prefix (LC 14)', 'Isomorphic Strings (LC 205)', 'Find All Anagrams in a String (LC 438)', 'Longest Palindromic Substring (LC 5)', 'Palindromic Substrings (LC 647)'] },
    transversal: comCandidaturas(
      'Ler no original o capítulo de requisitos de nível 1 do OWASP ASVS.',
      'Escrever em inglês o resumo do threat model.'
    ),
    sabado: {
      exercicios: 'Mais 5 laboratórios da Web Security Academy da PortSwigger, de autenticação e de JWT.',
      lab: 'Pipeline com SBOM, CodeQL, ZAP e gitleaks documentado, e threat model no repositório.',
      noite: ['sec', 'Revisão de código com olhar de segurança', 'Revisar em 45 minutos um PR antigo seu procurando entrada não validada, autorização ausente e log com dado sensível.']
    },
    domingo: 'Revisão D7: o que SAST, DAST e SCA encontram e o que não encontram.',
    entregaveis: [
      ent('d-sec-pipeline', 'Pipeline com SCA, SAST, DAST e segredos', 'O pipeline falha com CVE crítica e com segredo exposto; relatórios publicados como artefato.'),
      ent('d-sec-stride', 'Threat model STRIDE da vitrine', '5 ameaças priorizadas e 2 convertidas em testes.')
    ],
    livros: [
      ['alice-bob', 'Capítulos de testes de segurança e de pipeline'],
      ['asvs', 'Nível 1 como checklist'],
      ['owasp-cheatsheets', 'Secrets Management e Threat Modeling'],
      ['zap-docs', 'Baseline scan'],
      ['web-security-devs', 'Capítulos de injeção e de autenticação'],
      ['portswigger', 'Trilhas Authentication e JWT attacks']
    ],
    perguntas: [
      'Qual a diferença entre SAST e DAST?',
      'O que é um SBOM e para que serve?',
      'Como você impede que um segredo chegue ao repositório?',
      'O que é slopsquatting?',
      'Como você prioriza vulnerabilidades encontradas?'
    ],
    mercado: ['10 candidaturas.', 'Citar DevSecOps no LinkedIn só com a evidência do pipeline.']
  },

  /* ───────────────────────── Observabilidade ───────────────────────── */
  {
    id: 'd-obs', tipo: 'aprofundamento', prioridade: 7, ordem: 15, k: 'devops',
    titulo: 'Observabilidade de produção — logs, métricas, traces e SLO',
    objetivo: 'Investigar um problema em produção com traces, métricas e logs correlacionados, e definir SLO com alerta.',
    porque: 'Observabilidade (Datadog, Grafana, Prometheus, Dynatrace, Splunk) aparece em 23% a 32% das vagas; diagnóstico pesa no pleno.',
    topicos: ['Log estruturado e MDC', 'Dado pessoal fora do log', 'Contador, gauge, timer e histograma', 'Cardinalidade', 'PromQL', 'OpenTelemetry e traceparent', 'SLI, SLO e SLA', 'Orçamento de erro', 'Runbook', 'Postmortem sem culpa'],
    dias: [
      dia('Logs que ajudam',
        ['Log estruturado e correlação', 'Níveis e o que vai em cada um, campos padrão (timestamp, nível, serviço, traceId, usuário mascarado), MDC no SLF4J, nunca logar segredo nem dado pessoal (LGPD), amostragem e custo de log.'],
        ['Log com traceId', 'Padronizar o log JSON da vitrine com MDC, propagar o traceId entre os 2 serviços e seguir uma requisição de ponta a ponta só pelo log.']),
      dia('Métricas',
        ['Micrometer e Prometheus', 'Contador × gauge × timer × histograma, percentis por histograma, cardinalidade de labels (e por que id de usuário nunca vira label), métricas de negócio e PromQL básico (rate, histogram_quantile, sum by).'],
        ['Métrica de negócio', 'Criar métricas de pedidos criados e de falhas por tipo, escrever 3 consultas PromQL e colocá-las no painel.']),
      dia('Traces distribuídos',
        ['OpenTelemetry', 'Span, trace, contexto e propagação (W3C traceparent), instrumentação automática com o agente Java × manual, o Collector, Jaeger ou Tempo para visualizar e amostragem.'],
        ['Trace de ponta a ponta', 'Instrumentar os 2 serviços com o agente do OpenTelemetry, ver no Jaeger o trace HTTP → Kafka → consumidor e achar o span mais lento.']),
      dia('SLO e alertas',
        ['Confiabilidade mensurável', 'SLI, SLO e SLA, orçamento de erro, alerta por sintoma (taxa de erro, latência) × por causa (CPU), burn rate e runbook.'],
        ['SLO e alerta', 'Definir 2 SLOs da vitrine (disponibilidade e p95), criar a regra de alerta no Prometheus e escrever o runbook do alerta.']),
      dia('Incidente simulado',
        ['Postmortem sem culpa', 'Linha do tempo, impacto, causa raiz, o que ajudou, o que atrapalhou e ações; os 5 porquês e seus limites.'],
        ['Game day', 'Injetar uma falha (consulta lenta ou dependência fora), investigar só com painel, traces e logs e escrever o postmortem.'])
    ],
    complemento: { k: 'devops', titulo: 'Ferramentas que as vagas citam', itens: [
      'Ler a visão geral do Datadog APM.',
      'Ler a visão geral do New Relic ou do Dynatrace.',
      'Comparar com a stack Prometheus + Grafana + Tempo.',
      'Anotar o equivalente de cada conceito em cada ferramenta.',
      'Citar no CV só o que você usou de fato.'
    ] },
    dsa: { padrao: 'Backtracking', problemas: ['Subsets (LC 78)', 'Combination Sum (LC 39)', 'Permutations (LC 46)', 'Word Search (LC 79)', 'Palindrome Partitioning (LC 131)'] },
    transversal: comCandidaturas(
      'Ler no original o capítulo Service Level Objectives do livro de SRE do Google.',
      'Escrever o postmortem em inglês.'
    ),
    sabado: {
      exercicios: '5 exercícios de PromQL e 3 investigações de log com jq sobre arquivos de log gerados.',
      lab: 'Vitrine com logs correlacionados, métricas de negócio, traces, SLO, alerta, runbook e postmortem no repositório.',
      noite: ['arquitetura', 'História técnica de incidente', 'Preparar a história STAR de um incidente (real ou do game day) com situação, ação e resultado em números.']
    },
    domingo: 'Revisão D7: SLI × SLO × SLA e os três sinais.',
    entregaveis: [
      ent('d-obs-trace', 'Trace de ponta a ponta entre os serviços', 'Captura do trace HTTP → Kafka → consumidor com o span mais lento identificado.'),
      ent('d-obs-slo', 'SLO, alerta, runbook e postmortem', '2 SLOs definidos, regra de alerta versionada e postmortem do game day.')
    ],
    livros: [
      ['obs-eng', 'Capítulos sobre eventos estruturados, tracing e SLO'],
      ['sre', 'Capítulos Service Level Objectives e Monitoring Distributed Systems'],
      ['sre-workbook', 'Capítulos Implementing SLOs e Alerting on SLOs'],
      ['learning-otel', 'Capítulos de conceitos e de instrumentação'],
      ['otel-docs', 'Instrumentação Java sem código e o Collector'],
      ['prometheus-docs', 'Querying basics e Histograms and summaries']
    ],
    perguntas: [
      'Qual a diferença entre log, métrica e trace?',
      'Por que o id do usuário não deve ser label de métrica?',
      'O que é orçamento de erro?',
      'Como você investigaria uma latência alta só para alguns usuários?',
      'O que vai num postmortem?'
    ],
    mercado: ['10 candidaturas.']
  },

  /* ───────────────────────── Nuvem II ───────────────────────── */
  {
    id: 'd-cloud', tipo: 'aprofundamento', prioridade: 9, ordem: 16, k: 'aws',
    titulo: 'Nuvem II — segunda nuvem, filas gerenciadas e Terraform',
    objetivo: 'Trocar de nuvem sem travar na entrevista e provisionar o ambiente por código.',
    porque: 'Azure (27%) aparece mais que AWS (21%) nas vagas júnior/pleno da Gupy; ter as duas no vocabulário amplia as vagas aderentes.',
    topicos: ['Mesmo deploy em outra nuvem', 'SQS/SNS × Service Bus', 'Fila FIFO e visibilidade', 'Terraform: state e lock', 'Módulos e drift', 'FinOps básico', 'OIDC do GitHub', 'AZ-900 ou CLF-C02'],
    dias: [
      dia('A segunda nuvem',
        ['Fazer na outra nuvem o que já fez', 'Se usou AWS, repetir no Azure (Container Apps, Azure Database for PostgreSQL, Key Vault, Service Bus); se usou Azure, repetir na AWS (ECS Fargate, RDS, Secrets Manager, SQS/SNS); diferenças de identidade (IAM × Entra ID) e de rede.'],
        ['Mesmo deploy, outra nuvem', 'Publicar a vitrine na segunda nuvem com o mesmo pipeline, mudando só o job de deploy, e anotar o que foi igual e o que mudou.']),
      dia('Filas gerenciadas',
        ['SQS/SNS e Service Bus', 'Fila padrão × FIFO, tempo de visibilidade e reentrega, DLQ nativa, fan-out com SNS ou tópicos do Service Bus, e quando usar fila gerenciada em vez de Kafka.'],
        ['Trocar o broker de um fluxo', 'Implementar um fluxo secundário da vitrine com SQS ou Service Bus (Spring Cloud AWS ou Spring Cloud Azure) com DLQ configurada.']),
      dia('Terraform',
        ['Infraestrutura como código', 'Provider, resource, variable e output, state e por que ele vai para backend remoto com lock, plan × apply, módulos, drift e o que nunca deixar no state sem proteção.'],
        ['Ambiente por código', 'Descrever em Terraform o registry, o serviço de container e o banco da vitrine na nuvem principal; aplicar, destruir e aplicar de novo do zero.']),
      dia('Custo e segurança na nuvem',
        ['FinOps e menor privilégio', 'Calculadora de custos, tags, orçamento e alerta, desligar fora do horário, policies mínimas, OIDC do GitHub para a nuvem, criptografia em repouso e em trânsito.'],
        ['Custo medido', 'Estimar o custo mensal do ambiente, aplicar tags, configurar OIDC no pipeline e remover qualquer chave estática.']),
      dia('Certificação como vocabulário',
        ['AZ-900 ou CLF-C02', 'Escolher a prova da nuvem principal e revisar os domínios: conceitos de nuvem, segurança e conformidade, serviços e preços. Certificação é opcional e só vale se a vaga pedir.'],
        ['Simulado oficial', 'Fazer o simulado oficial gratuito da prova escolhida, revisar cada erro e decidir se vale marcar a prova.'])
    ],
    complemento: { k: 'devops', titulo: 'Pipeline de infraestrutura', itens: [
      'terraform fmt e validate no CI.',
      'terraform plan como comentário no PR.',
      'Backend remoto com lock.',
      'Variáveis sensíveis fora do repositório.',
      'README de como criar e destruir o ambiente.'
    ] },
    dsa: { padrao: 'Grafos II', problemas: ['Course Schedule II (LC 210)', 'Rotting Oranges (LC 994)', 'Pacific Atlantic Water Flow (LC 417)', 'Redundant Connection (LC 684)', 'Network Delay Time (LC 743)'] },
    transversal: comCandidaturas(
      'Ler no original a página Backend Configuration da documentação do Terraform.',
      'Explicar em inglês como o pipeline se autentica na nuvem sem chave estática.'
    ),
    sabado: {
      exercicios: 'Mais um simulado oficial cronometrado e 5 perguntas de entrevista sobre nuvem respondidas em voz alta.',
      lab: 'Terraform do ambiente versionado, deploy na segunda nuvem documentado e estimativa de custo no README.',
      noite: ['arquitetura', 'System design: upload de arquivos', 'Desenhar em 45 minutos o upload de comprovantes com URL pré-assinada, armazenamento de objetos, fila de processamento e antivírus.']
    },
    domingo: 'Revisão D7: equivalências AWS × Azure e o ciclo plan/apply.',
    entregaveis: [
      ent('d-cloud-iac', 'Ambiente provisionado por Terraform', 'Destruído e recriado do zero com um comando; state remoto com lock.'),
      ent('d-cloud-segunda', 'Deploy na segunda nuvem e fluxo com fila gerenciada', 'Mesmo pipeline com outro job de deploy e DLQ configurada.')
    ],
    livros: [
      ['terraform-ur', 'Capítulos iniciais (básico, state e módulos)'],
      ['aws-in-action', 'Capítulos de filas e de automação'],
      ['ms-learn', 'Módulos de Azure Container Apps, Service Bus e Key Vault'],
      ['cloud-finops', 'Capítulos iniciais sobre visibilidade de custo'],
      ['saa-guide', 'Capítulos de segurança e de desacoplamento, como consulta']
    ],
    perguntas: [
      'Qual o equivalente do SQS no Azure?',
      'Para que serve o state do Terraform e por que trancá-lo?',
      'Como o pipeline se autentica na nuvem sem chave?',
      'Fila gerenciada ou Kafka: como decidir?',
      'Como você reduz o custo de um ambiente de teste?'
    ],
    mercado: ['10 candidaturas.', 'Aplicar também a vagas que pedem a segunda nuvem.']
  },

  /* ───────────────────────── React II ───────────────────────── */
  {
    id: 'd-react', tipo: 'aprofundamento', prioridade: 2, ordem: 18, k: 'frontend',
    titulo: 'React + TypeScript II — estado, testes, performance e acessibilidade',
    objetivo: 'Ir além do CRUD: estado com critério, testes de componente e ponta a ponta, performance e acessibilidade.',
    porque: 'Vagas full stack pleno pedem teste no front, desempenho e boas práticas; é a lacuna mais comum de quem vem do backend.',
    topicos: ['Estado de servidor × de interface', 'Context e re-render', 'useReducer', 'Estado na URL', 'Testing Library e Vitest', 'MSW', 'Profiler, memo e code splitting', 'Web Vitals', 'WCAG 2.2 AA', 'Playwright'],
    dias: [
      dia('Estado: local, de servidor e global',
        ['Onde mora cada estado', 'Estado de servidor (TanStack Query) × estado de interface, Context e quando ele causa renderizações demais, useReducer, Zustand ou Redux Toolkit em uma frase cada, e estado na URL para filtros e página.'],
        ['Filtros na URL', 'Levar filtros e página da listagem para a URL, com voltar e avançar do navegador funcionando, e usar um reducer para uma seleção múltipla.']),
      dia('Testes de componente',
        ['Testing Library e Vitest', 'Testar como o usuário usa (getByRole, getByLabelText), userEvent, esperar efeitos assíncronos (findBy), MSW para simular a API e o que não testar (detalhe de implementação).'],
        ['Suíte do front', 'Testar a listagem (carregando, vazio, erro, sucesso) e o formulário (validação e envio) com MSW simulando a API.']),
      dia('Performance',
        ['Renderizar menos', 'React DevTools Profiler, memo, useMemo e useCallback com critério, virtualização de listas grandes, code splitting com lazy e Suspense, e Web Vitals (LCP, INP, CLS).'],
        ['Medir e melhorar', 'Medir com o Profiler e o Lighthouse, aplicar code splitting nas rotas e virtualizar uma lista de 5 mil itens; registrar antes e depois.']),
      dia('Acessibilidade e componentes',
        ['Interface utilizável por todos', 'HTML semântico primeiro, roles e aria só quando necessário, foco e teclado, contraste, mensagem de erro anunciada, WCAG 2.2 nível AA, e componentes reutilizáveis com Tailwind ou CSS Modules.'],
        ['Auditoria de acessibilidade', 'Rodar o axe ou o Lighthouse, navegar só pelo teclado, corrigir 5 problemas e extrair 3 componentes reutilizáveis (botão, campo, modal).']),
      dia('Ponta a ponta e Angular para leitura de vaga',
        ['Playwright e o mínimo de Angular', 'Testes E2E com Playwright (locators por papel, trace em falha); Angular em uma página: componentes, templates, serviços e injeção, RxJS (Observable, pipe, switchMap) e signals, e o que muda em relação ao React.'],
        ['E2E no CI', 'Escrever com Playwright os fluxos de login e de cadastro com erro de validação e rodá-los no CI. Se as vagas-alvo pedem Angular, reescrever também a tela de listagem em Angular.'])
    ],
    complemento: { k: 'frontend', titulo: 'Qualidade do código do front', itens: [
      'ESLint com regras de hooks.',
      'Prettier no CI.',
      'tsc --noEmit no pipeline.',
      'Tipos compartilhados com o back gerados do OpenAPI.',
      'Bundle analisado e dependências pesadas removidas.'
    ] },
    dsa: { padrao: 'Matrizes', problemas: ['Rotate Image (LC 48)', 'Spiral Matrix (LC 54)', 'Set Matrix Zeroes (LC 73)', 'Game of Life (LC 289)', 'Search a 2D Matrix II (LC 240)'] },
    transversal: comCandidaturas(
      'Ler no original o guia About Queries da Testing Library (prioridade das consultas).',
      'Explicar em inglês por que testar pelo papel acessível do elemento.'
    ),
    sabado: {
      exercicios: 'Kata de front: autocomplete acessível com debounce e cancelamento de requisição, com testes.',
      lab: 'Front com testes de componente, E2E no CI, code splitting e auditoria de acessibilidade registrada.',
      noite: ['mercado', 'Candidaturas full stack', 'Aplicar a 5 vagas full stack e atualizar o pipeline.']
    },
    domingo: 'Revisão D7: tipos de estado e a prioridade de consultas da Testing Library.',
    entregaveis: [
      ent('d-react-testes', 'Testes de componente e E2E do front', 'Listagem e formulário testados com MSW; login e cadastro com Playwright no CI.'),
      ent('d-react-a11y', 'Auditoria de performance e acessibilidade', 'Lighthouse antes e depois e 5 problemas de acessibilidade corrigidos.')
    ],
    livros: [
      ['react-dev', 'Managing State, Escape Hatches e a referência de hooks'],
      ['testing-library-docs', 'Guiding Principles e About Queries'],
      ['effective-ts', 'Capítulos de design de tipos'],
      ['inclusive-components', 'Componentes de menu, abas e notificações'],
      ['js-definitive', 'Consulta de JavaScript quando surgir lacuna']
    ],
    perguntas: [
      'Context ou biblioteca de estado global: como você decide?',
      'Como você testa um componente que busca dados?',
      'Quando useMemo vale a pena?',
      'O que é INP?',
      'Como você torna um modal acessível?'
    ],
    mercado: ['10 candidaturas.']
  },

  /* ───────────────────────── Consolidação 2 ───────────────────────── */
  {
    id: 'd-cons2', tipo: 'consolidacao', prioridade: 8, ordem: 19, k: 'review',
    titulo: 'Consolidação 2 — integração full stack e demo',
    objetivo: 'Sem conteúdo novo: integrar back e front, revisar D30 e deixar a vitrine pronta para ser apresentada em 10 minutos.',
    porque: 'A segunda consolidação fecha o ciclo de entrega; uma demo gravada substitui a explicação em cada processo.',
    topicos: ['Revisão D30', 'Integração ponta a ponta', 'Demo de 10 minutos', 'Simulado técnico 2', 'Taxa de resposta'],
    dias: [
      dia('Revisão D30: segurança, mensageria e nuvem',
        ['Recuperação ativa', 'Responder sem consulta as perguntas das semanas de segurança, mensageria e nuvem e anotar o que não saiu.'],
        ['Refazer do zero', 'Redesenhar de memória o fluxo do outbox e o do Authorization Code com PKCE e reescrever o Deployment do Kubernetes sem consulta.']),
      dia('Integração ponta a ponta',
        ['Fluxo completo', 'Percorrer a vitrine como usuário: login, criar, listar, editar, evento assíncrono e efeito visível no front.'],
        ['Corrigir as costuras', 'Corrigir os problemas de integração (CORS, erro não exibido, estado de carregamento) e adicionar 1 teste E2E do fluxo completo.']),
      dia('Demo de 10 minutos',
        ['Contar a história do projeto', 'Problema, solução, arquitetura numa imagem, decisões e trade-offs, números (testes, p95, cobertura) e o que faria diferente.'],
        ['Gravar a demo', 'Gravar a demo de 10 minutos em português e um resumo de 3 minutos em inglês, e publicar o link no README.']),
      dia('Simulado técnico 2',
        ['Entrevista de 60 minutos', 'Simular: 10 minutos de apresentação, 20 de perguntas técnicas, 25 de live coding e 5 de perguntas para a empresa.'],
        ['Análise do simulado', 'Listar melhorias e lacunas e comparar com o simulado 1.']),
      dia('Ajuste de rota',
        ['Checkpoint de 80%', 'Conferir os entregáveis com evidência e a taxa de resposta das candidaturas (respostas ÷ candidaturas); abaixo de 10%, revisar CV e aderência das vagas.'],
        ['Plano das semanas finais', 'Atualizar o mapa de lacunas e decidir a prioridade das semanas que faltam.'])
    ],
    complemento: { k: 'mercado', titulo: 'Pipeline e networking', itens: [
      'Revisar todas as candidaturas sem resposta.',
      'Fazer follow-up educado nas que passaram de 10 dias.',
      'Pedir 2 indicações.',
      'Publicar no LinkedIn um post com a demo.',
      'Atualizar o CV com o front e a demo.'
    ] },
    dsa: { padrao: 'Revisão espaçada cronometrada', problemas: ['Refazer Reorder List (LC 143) em 25 minutos', 'Refazer Validate Binary Search Tree (LC 98) em 20 minutos', 'Refazer Number of Islands (LC 200) em 20 minutos', 'Refazer Merge k Sorted Lists (LC 23) em 30 minutos', 'Refazer Course Schedule (LC 207) em 25 minutos'] },
    transversal: comCandidaturas(
      'Ensaiar em inglês o resumo de 3 minutos da demo.',
      'Revisar o README em inglês com um leitor de fora.'
    ),
    sabado: {
      exercicios: 'Teste técnico full stack de 4 horas (API e tela) a partir de um desafio público.',
      lab: 'Vitrine integrada com E2E do fluxo completo e demo publicada.',
      noite: ['mercado', 'Retrospectiva', 'Taxa de resposta, etapas alcançadas e o que muda nas próximas semanas.']
    },
    domingo: 'Descanso.',
    entregaveis: [
      ent('d-cons2-demo', 'Demo gravada de 10 minutos (e 3 em inglês)', 'Link no README cobrindo problema, arquitetura, decisões e números.'),
      ent('d-cons2-e2e', 'Teste E2E do fluxo completo', 'Login → criar → evento assíncrono → efeito no front, rodando no CI.')
    ],
    livros: [
      ['se-guidebook', 'Capítulos sobre carreira e entrevistas de engenharia'],
      ['docs-for-devs', 'Capítulo sobre documentação de projeto']
    ],
    perguntas: [
      'Apresente o seu projeto em 3 minutos.',
      'Qual o maior trade-off da sua arquitetura?',
      'O que quebraria primeiro com 100 vezes mais usuários?',
      'Como você garante que o evento chegou ao front?',
      'O que você aprendeu que não sabia antes?'
    ],
    mercado: ['10 candidaturas.', 'Follow-up nas candidaturas pendentes.']
  },

  /* ───────────────────────── RAG ───────────────────────── */
  {
    id: 'd-rag', tipo: 'aprofundamento', prioridade: 11, ordem: 21, k: 'ia',
    titulo: 'IA aplicada II — RAG com pgvector e avaliação',
    objetivo: 'Responder perguntas sobre documentos com RAG, citando as fontes, e medir a qualidade da recuperação.',
    porque: 'RAG e agentes aparecem nas vagas que citam IA generativa (20% das júnior/pleno); quem mede a recuperação se destaca.',
    topicos: ['Embeddings e similaridade', 'Chunking', 'pgvector: HNSW × IVFFlat', 'Busca híbrida', 'Recuperação e citação', 'Recall@k e MRR', 'Fidelidade', 'Tool calling com limites', 'MCP em uma frase', 'Custo e privacidade'],
    dias: [
      dia('Embeddings e busca vetorial',
        ['Similaridade semântica', 'Embedding, distância de cosseno, chunking (tamanho e sobreposição), pgvector (tipo vector, índices HNSW e IVFFlat) e busca híbrida com o texto completo do PostgreSQL.'],
        ['Ingestão', 'Ingerir 30 documentos (documentação e ADRs da vitrine, por exemplo) no PostgreSQL com pgvector, com metadados e chunking configurável.']),
      dia('Pipeline RAG',
        ['Recuperar e gerar', 'Consulta → recuperação top-k → montagem do contexto → geração com citação, reranking e quando a resposta deve ser não sei; no Spring AI, VectorStore e o QuestionAnswerAdvisor.'],
        ['Perguntas com fontes', 'Endpoint que responde perguntas sobre os documentos citando os trechos usados e recusando quando não houver evidência.']),
      dia('Avaliação de recuperação',
        ['Medir o RAG', 'Recall@k, MRR, fidelidade (a resposta está apoiada no contexto?), relevância e um dataset de perguntas com o trecho esperado.'],
        ['Métricas', 'Montar 30 perguntas com o trecho correto, medir recall@5 e MRR para 2 tamanhos de chunk e registrar.']),
      dia('Agentes e ferramentas',
        ['Tool calling com limites', 'Agente como laço de decisão com ferramentas, MCP em uma frase, riscos (ação indevida, custo em laço), limite de passos e confirmação humana para ações com efeito.'],
        ['Ferramenta segura', 'Expor ao modelo uma ferramenta só de leitura (consultar os pedidos do usuário autenticado), com autorização por usuário e limite de chamadas.']),
      dia('Operação',
        ['RAG em produção', 'Atualização do índice, custo de embeddings, cache, observabilidade de tokens e de recuperação e privacidade dos documentos.'],
        ['README técnico do RAG', 'Documentar arquitetura, métricas, limites e custo, com diagrama.'])
    ],
    complemento: { k: 'db', titulo: 'pgvector na prática', itens: [
      'Ativar a extensão no PostgreSQL do compose.',
      'Criar o índice HNSW.',
      'Comparar o tempo com e sem índice.',
      'Filtrar por metadado junto da busca vetorial.',
      'Criar a migration Flyway da tabela de embeddings.'
    ] },
    dsa: { padrao: 'Programação dinâmica II', problemas: ['Unique Paths (LC 62)', 'Longest Common Subsequence (LC 1143)', 'Word Break (LC 139)', 'Decode Ways (LC 91)', 'Partition Equal Subset Sum (LC 416)'] },
    transversal: comCandidaturas(
      'Ler no original o README do pgvector, seções de índices.',
      'Explicar em inglês recall@k e MRR com os seus números.'
    ),
    sabado: {
      exercicios: 'Responder por escrito 10 perguntas de entrevista de IA aplicada.',
      lab: 'RAG com pgvector, citações, métricas de recuperação e ferramenta segura, documentado.',
      noite: ['arquitetura', 'System design: assistente de suporte', 'Desenhar em 45 minutos um assistente de suporte com RAG: ingestão, índice, recuperação, geração, avaliação e custo.']
    },
    domingo: 'Revisão D7: recall@k, MRR e quando responder não sei.',
    entregaveis: [
      ent('d-rag-rag', 'RAG com citações e recusa sem evidência', 'As respostas citam os trechos e perguntas fora do escopo recebem recusa.'),
      ent('d-rag-metricas', 'Métricas de recuperação comparadas', 'recall@5 e MRR para 2 configurações de chunk.')
    ],
    livros: [
      ['ai-engineering', 'Capítulos de RAG e de agentes'],
      ['spring-ai-docs', 'Vector Databases (PGvector) e Retrieval Augmented Generation'],
      ['pgvector', 'Seções de índices HNSW e IVFFlat'],
      ['ia-trilha', 'Seções de RAG e de agentes']
    ],
    perguntas: [
      'O que é RAG e quando ele é melhor que fine-tuning?',
      'Como você escolhe o tamanho do chunk?',
      'Como você mede se a recuperação está boa?',
      'Quais os riscos de dar ferramentas a um agente?',
      'HNSW ou IVFFlat: como escolher?'
    ],
    mercado: ['10 candidaturas.', 'Aplicar também a vagas de IA aplicada júnior/pleno.']
  },

  /* ───────────────────────── Node ───────────────────────── */
  {
    id: 'd-node', tipo: 'aprofundamento', prioridade: 12, ordem: 22, k: 'frontend',
    titulo: 'Plano B — Node.js + NestJS com TypeScript',
    objetivo: 'Abrir a segunda família de vagas reaproveitando o TypeScript, com um serviço NestJS testado.',
    porque: 'Node/TypeScript tem o mesmo volume que Java nas vagas não sênior da Gupy (29%), e você já usa TypeScript.',
    topicos: ['Event loop', 'Microtasks × macrotasks', 'Worker threads', 'Módulos, providers e DI no NestJS', 'Pipes, guards e filtros', 'Prisma e migrations', 'Jest/Vitest e supertest', 'Dockerfile para Node', 'Spring × NestJS'],
    dias: [
      dia('Node.js por dentro',
        ['Event loop e I/O', 'Fases do event loop, microtasks × macrotasks, I/O não bloqueante, por que CPU pesada trava o servidor (worker threads), streams, ES modules × CommonJS, npm e lockfile.'],
        ['Provar o event loop', 'Script que mostra a ordem de setTimeout, setImmediate, Promise e process.nextTick, e um endpoint que trava com CPU pesada, corrigido com worker thread.']),
      dia('NestJS',
        ['Estrutura de uma API NestJS', 'Módulos, controllers, providers e injeção de dependência (com o paralelo no Spring), pipes de validação (class-validator ou Zod), filtros de exceção, guards, interceptors e configuração.'],
        ['Mesmo recurso em NestJS', 'Reimplementar o recurso principal da vitrine em NestJS com validação e erros no formato ProblemDetail.']),
      dia('Persistência',
        ['Prisma ou TypeORM', 'Schema, migrations, relações, transações, N+1 (também existe aqui) e conexão com PostgreSQL.'],
        ['Prisma com migrations', 'Persistir com Prisma no mesmo PostgreSQL, com migrations e uma transação com duas escritas.']),
      dia('Testes',
        ['Jest ou Vitest no back', 'Testes de unidade de providers, testes e2e com supertest, Testcontainers para Node e mocks com cuidado.'],
        ['Suíte do serviço', 'Cobrir o serviço com testes de unidade e e2e contra o banco real.']),
      dia('Docker e comparação',
        ['Node em produção', 'Dockerfile para Node (multi-stage, npm ci, usuário não root), variáveis de ambiente, PM2 × container e uma comparação honesta entre Spring e NestJS.'],
        ['Serviço no compose e no CI', 'Adicionar o serviço NestJS ao compose e ao CI e escrever o ADR Spring × NestJS para a vitrine.'])
    ],
    complemento: { k: 'frontend', titulo: 'TypeScript no servidor', itens: [
      'tsconfig em modo strict.',
      'Tipos compartilhados entre front e back.',
      'Validação na fronteira com Zod.',
      'Erros tipados.',
      'Lint e format no CI.'
    ] },
    dsa: { padrao: 'Guloso', problemas: ['Maximum Subarray (LC 53)', 'Jump Game (LC 55)', 'Gas Station (LC 134)', 'Hand of Straights (LC 846)', 'Valid Parenthesis String (LC 678)'] },
    transversal: comCandidaturas(
      'Ler no original o guia The Node.js Event Loop.',
      'Explicar em inglês o que trava um servidor Node.'
    ),
    sabado: {
      exercicios: 'Teste técnico de 2 horas em NestJS a partir de um desafio público.',
      lab: 'Serviço NestJS testado, no compose e no CI, com ADR.',
      noite: ['mercado', 'Candidaturas Node', 'Aplicar a 5 vagas Node/TypeScript com o serviço no CI como evidência.']
    },
    domingo: 'Revisão D7: event loop e as equivalências Spring × NestJS.',
    entregaveis: [
      ent('d-node-servico', 'Serviço NestJS testado no compose e no CI', 'Unidade e e2e contra banco real e o mesmo contrato de erro da vitrine.'),
      ent('d-node-adr', 'ADR Spring × NestJS', 'Critérios objetivos e quando cada um faz sentido.')
    ],
    livros: [
      ['node-docs', 'The Node.js Event Loop e Don\'t Block the Event Loop'],
      ['nest-docs', 'Overview, Providers, Pipes, Exception filters e Testing'],
      ['effective-ts', 'Capítulos sobre tipos na fronteira do sistema'],
      ['prisma-docs', 'Schema, Migrate e Transactions']
    ],
    perguntas: [
      'Como o event loop lida com I/O?',
      'O que trava um servidor Node?',
      'Qual o equivalente de um bean do Spring no NestJS?',
      'Como você valida a entrada no NestJS?',
      'Quando você escolheria Node em vez de Java?'
    ],
    mercado: ['Aplicar a vagas Node/TypeScript com 60% ou mais de aderência.']
  },

  /* ───────────────────────── System design II ───────────────────────── */
  {
    id: 'd-sd', tipo: 'aprofundamento', prioridade: 13, ordem: 24, k: 'arquitetura',
    titulo: 'System design II — consistência, particionamento e filas',
    objetivo: 'Ganhar repertório com mais 5 desenhos e aprofundar consistência, particionamento e processamento assíncrono.',
    porque: 'Empresas de produto levam system design também a vagas pleno; repertório reduz o tempo de reação na entrevista.',
    topicos: ['Replicação e leitura das próprias escritas', 'Quorum', 'Saga × transação distribuída', 'Consistent hashing', 'Hot spot', 'Fila de jobs', 'CDC para índice de busca', 'CQRS', 'Token bucket e sliding window'],
    dias: [
      dia('Consistência e replicação',
        ['Réplicas e o que pode dar errado', 'Líder-seguidor, atraso de replicação e leitura das próprias escritas, quorum em uma frase e transação distribuída × saga.'],
        ['Desenho: carteira digital', 'Saldo consistente, extrato, idempotência de transferência e auditoria.']),
      dia('Particionamento',
        ['Dividir os dados', 'Particionamento por chave × por intervalo, hot spot, consistent hashing, rebalanceamento e particionamento no Kafka.'],
        ['Desenho: contador de visualizações', 'Alta taxa de escrita, agregação, aproximação e leitura rápida.']),
      dia('Filas e processamento assíncrono',
        ['Trabalho em segundo plano', 'Fila de jobs, retry, DLQ, agendamento, exatamente uma vez na prática (idempotência) e backpressure.'],
        ['Desenho: geração de relatórios', 'Pedidos de relatório pesado com fila, armazenamento de objetos e notificação.']),
      dia('Busca e leitura',
        ['Índices de busca', 'Busca textual com Elasticsearch ou OpenSearch em uma frase, CDC para manter o índice e CQRS em uma frase.'],
        ['Desenho: busca de produtos', 'Busca com filtros, ordenação e atualização quase em tempo real.']),
      dia('Limites e abuso',
        ['Proteger o sistema', 'Rate limiting (token bucket, sliding window), API gateway, cotas por cliente e DDoS em uma frase.'],
        ['Desenho: rate limiter distribuído', 'Rate limiter com Redis para uma API pública, com regras por plano.'])
    ],
    complemento: { k: 'arquitetura', titulo: 'Revisão por pares', itens: [
      'Trocar desenhos com outra pessoa.',
      'Revisar um desenho alheio com o roteiro.',
      'Receber crítica de 1 desenho seu.',
      'Refazer o desenho mais fraco.',
      'Registrar os padrões que se repetiram.'
    ] },
    dsa: { padrao: 'Estruturas avançadas', problemas: ['Implement Trie (LC 208)', 'Design Add and Search Words Data Structure (LC 211)', 'Find Median from Data Stream (LC 295)', 'Insert Delete GetRandom O(1) (LC 380)', 'Design Browser History (LC 1472)'] },
    transversal: comCandidaturas(
      'Ler no original o capítulo de consistent hashing do System Design Interview.',
      'Conduzir em inglês 15 minutos de um dos desenhos da semana.'
    ),
    sabado: {
      exercicios: '2 system designs cronometrados escolhidos ao acaso nos dois volumes do System Design Interview.',
      lab: 'Pasta interview/system-design com os 5 desenhos novos.',
      noite: ['mercado', 'Candidaturas e follow-up', 'Atualizar o pipeline e fazer follow-up nas etapas abertas.']
    },
    domingo: 'Revisão D7: consistent hashing e token bucket.',
    entregaveis: [
      ent('d-sd-cinco', '5 system designs documentados', 'Mesmo roteiro, com trade-offs e o que muda com 10 vezes mais carga.')
    ],
    livros: [
      ['sdi1', 'Capítulos de consistent hashing, key-value store e rate limiter'],
      ['sdi2', 'Capítulos de carteira digital, pagamentos e agregação de eventos'],
      ['ddia', 'Capítulos de replicação, particionamento e processamento de fluxos']
    ],
    perguntas: [
      'O que é consistent hashing?',
      'Como você evitaria uma transferência duplicada?',
      'Como você implementaria um rate limiter distribuído?',
      'Quando usar CQRS?',
      'Como manter um índice de busca atualizado?'
    ],
    mercado: ['10 candidaturas.']
  },

  /* ───────────────────────── Simulados II ───────────────────────── */
  {
    id: 'd-sim', tipo: 'aprofundamento', prioridade: 1, ordem: 25, k: 'mercado',
    titulo: 'Simulados e live coding II',
    objetivo: 'Aumentar a taxa de aprovação nas etapas técnicas com repetição cronometrada e feedback.',
    porque: 'É a etapa em que mais candidatos preparados caem; repetir com feedback transforma conhecimento em desempenho.',
    topicos: ['Gatilhos dos padrões de DSA', 'Banco de perguntas', 'O que o avaliador olha no teste técnico', 'Mock com interrupções', 'Taxa de passagem por etapa'],
    dias: [
      dia('Live coding 1',
        ['Revisar os padrões', 'Revisar os padrões de DSA da lista (hashing, dois ponteiros, janela, pilha, busca binária, árvores, grafos, heap, DP) e o gatilho de cada um no enunciado.'],
        ['2 problemas cronometrados', '2 problemas médios em 30 minutos cada, em voz alta e gravados.']),
      dia('Perguntas técnicas de Java e Spring',
        ['Banco de perguntas', 'Revisar as perguntas de entrevista de todas as semanas e marcar as que não saem em 1 minuto.'],
        ['Rodada rápida', 'Responder 30 perguntas em voz alta, 1 minuto cada, gravando.']),
      dia('Teste técnico real',
        ['O que o avaliador olha', 'README, testes, commits, organização, tratamento de erro, decisões explicadas e escopo cortado com justificativa.'],
        ['Teste técnico de 4 horas', 'Resolver um desafio público completo e pedir revisão a alguém.']),
      dia('Mock com outra pessoa',
        ['Entrevista realista', 'Combinar um mock com um colega ou numa plataforma, pedindo que interrompa e pergunte o porquê das decisões.'],
        ['Mock de 60 minutos', 'Técnica, projeto e comportamental; anotar o feedback.']),
      dia('Correção',
        ['Fechar as lacunas', 'Revisar as falhas da semana e estudar só esses pontos.'],
        ['Segunda tentativa', 'Refazer os problemas e as perguntas que falharam.'])
    ],
    complemento: { k: 'mercado', titulo: 'Conversão dos processos', itens: [
      'Calcular a taxa de passagem por etapa.',
      'Identificar a etapa com mais reprovação.',
      'Pedir retorno às empresas que reprovaram.',
      'Ajustar o CV ou a preparação conforme a etapa.',
      'Fazer follow-up nas etapas abertas.'
    ] },
    dsa: { padrao: 'Simulado sorteado', problemas: ['Médio sorteado de hashing ou dois ponteiros', 'Médio sorteado de janela deslizante ou pilha', 'Médio sorteado de árvores', 'Médio sorteado de grafos', 'Médio sorteado de DP ou guloso'] },
    transversal: comCandidaturas(
      'Responder em inglês 5 perguntas técnicas do banco.',
      'Fazer em inglês 10 minutos do mock.'
    ),
    sabado: {
      exercicios: 'Simulado de 2 problemas em 60 minutos sem pausa, como numa entrevista de empresa de produto.',
      lab: 'Planilha de desempenho por etapa e plano de correção.',
      noite: ['mercado', 'Pipeline', 'Follow-up e novas candidaturas.']
    },
    domingo: 'Revisão leve das falhas da semana.',
    entregaveis: [
      ent('d-sim-mocks', '3 simulados gravados com feedback', 'Live coding, perguntas técnicas e mock completo, cada um com notas e plano de correção.'),
      ent('d-sim-takehome', 'Teste técnico de 4 horas revisado por terceiro', 'Retorno registrado e correções aplicadas.')
    ],
    livros: [
      ['bctci', 'Capítulos sobre como abordar problemas e sobre os padrões mais comuns'],
      ['ctci', 'Capítulos de entrevista comportamental e técnica'],
      ['neetcode', 'Roadmap de padrões, para sortear problemas']
    ],
    perguntas: [
      'Qual a complexidade da sua solução e dá para melhorar?',
      'Que casos-limite você testaria?',
      'Por que escolheu essa estrutura de dados?',
      'Como você refatoraria esse código?',
      'O que você faria com mais tempo?'
    ],
    mercado: ['10 candidaturas.', 'Pedir retorno dos processos encerrados.']
  }
];
