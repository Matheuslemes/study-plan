/*
 * Academia de Banco de Dados — fonte única de conteúdo.
 *
 * Perfil: Academia padrão de engenharia.
 * Baseline pesquisado em fontes primárias na data exportada abaixo.
 */

export const DB_RESEARCH_DATE = '2026-07-28';

export const bancosBooks = Object.freeze({
  'database-internals': Object.freeze({
    title: 'Database Internals: A Deep Dive into How Distributed Data Systems Work',
    authors: 'Alex Petrov',
    edition: '1ª edição',
    year: 2019,
    language: 'Inglês',
    pages: 371,
    path: "/pdfs/livros-db/Alex Petrov - Database Internals_ A Deep Dive into How Distributed Data Systems Work-O'Reilly Media (2019).pdf",
    depth: 'Avançado',
    prerequisites: 'Estruturas de dados, sistemas operacionais e SQL prático.',
    structure: 'Armazenamento, B-trees, LSM trees e mecanismos de sistemas distribuídos.',
    limitations: 'Explica mecanismos gerais; não substitui o manual operacional de um produto específico.'
  }),
  ddia: Object.freeze({
    title: 'Designing Data-Intensive Applications',
    authors: 'Martin Kleppmann',
    edition: '1ª edição',
    year: 2017,
    language: 'Inglês',
    pages: 898,
    path: '/pdfs/livros-db/designing-data-intensive-applications.pdf',
    depth: 'Avançado',
    prerequisites: 'Bancos relacionais, redes e noções de sistemas distribuídos.',
    structure: 'Fundamentos, dados distribuídos e sistemas derivados.',
    limitations: 'Os princípios permanecem úteis, mas versões e recursos de produtos devem ser conferidos na documentação atual.'
  }),
  'sql-performance': Object.freeze({
    title: 'SQL Performance Explained',
    authors: 'Markus Winand',
    edition: '1ª edição',
    year: 2012,
    language: 'Inglês',
    pages: 207,
    path: '/pdfs/livros-db/SQL performance explained - everything developers need to -- Markus Winand -- ( WeLib.org ).pdf',
    depth: 'Intermediário a avançado',
    prerequisites: 'SQL, joins e leitura básica de planos.',
    structure: 'Índices, cláusulas SQL, joins, ordenação, DML e escalabilidade.',
    limitations: 'É multiplataforma e não cobre toda a instrumentação específica do PostgreSQL moderno.'
  }),
  'art-postgresql': Object.freeze({
    title: 'The Art of PostgreSQL',
    authors: 'Dimitri Fontaine',
    edition: '2ª edição',
    year: 2019,
    language: 'Inglês',
    pages: 457,
    path: '/pdfs/livros-db/The Art of PostgreSQL -- Dimitri Fontaine -- ( WeLib.org ).pdf',
    depth: 'Intermediário a avançado',
    prerequisites: 'SQL relacional e um ambiente PostgreSQL executável.',
    structure: 'Consultas, tipos, modelagem, concorrência e técnicas específicas do PostgreSQL.',
    limitations: 'A edição antecede recursos recentes; confirme sintaxe e operação no PostgreSQL 18.'
  }),
  'sql-antipatterns': Object.freeze({
    title: 'SQL Antipatterns: Avoiding the Pitfalls of Database Programming',
    authors: 'Bill Karwin',
    edition: '1ª edição',
    year: 2010,
    language: 'Inglês',
    pages: 381,
    path: '/pdfs/livros-db/SQL Antipatterns- Avoiding the Pitfalls of Database -- Bill Karwin; Jacquelyn Carter -- ( WeLib.org ).mobi.pdf',
    depth: 'Intermediário',
    prerequisites: 'Modelagem relacional e desenvolvimento de aplicações.',
    structure: 'Antipadrões de modelagem, consultas, desenvolvimento e aplicação.',
    limitations: 'Os exemplos são anteriores a recursos modernos; use os princípios e valide a solução no banco-alvo.'
  }),
  'seven-databases': Object.freeze({
    title: 'Seven Databases in Seven Weeks',
    authors: 'Luc Perkins, Eric Redmond e Jim R. Wilson',
    edition: '2ª edição',
    year: 2018,
    language: 'Inglês',
    pages: 354,
    path: '/pdfs/livros-db/seven-databases-in-seven-weeks_compress.pdf',
    depth: 'Intermediário',
    prerequisites: 'SQL, terminal e familiaridade com aplicações distribuídas.',
    structure: 'Laboratórios comparativos com modelos relacionais, documentos, grafos e chave-valor.',
    limitations: 'Não representa as versões atuais dos produtos; serve para comparar modelos e trade-offs.'
  }),
  mongodb: Object.freeze({
    title: 'MongoDB: The Definitive Guide',
    authors: 'Shannon Bradshaw, Eoin Brazil e Kristina Chodorow',
    edition: '3ª edição',
    year: 2019,
    language: 'Inglês',
    pages: 577,
    path: '/pdfs/livros-db/MongoDB- The Definitive Guide, 3rd Edition -- Kristina Chodorow; Eoin Brazil; Shannon Bradshaw -- ( WeLib.org ).pdf',
    depth: 'Intermediário a avançado',
    prerequisites: 'Modelagem de dados, JSON e operação básica de bancos.',
    structure: 'CRUD, índices, agregação, replicação, sharding e administração.',
    limitations: 'Use a documentação do MongoDB 8.x para comportamento e limites atuais.'
  }),
  'postgresql-internals': Object.freeze({
    title: 'PostgreSQL 14 Internals',
    authors: 'Egor Rogov',
    edition: 'Edição PostgreSQL 14',
    year: 2023,
    language: 'Inglês',
    pages: 548,
    path: '/pdfs/livros-db/postgresql_internals-14_en.pdf',
    depth: 'Avançado',
    prerequisites: 'PostgreSQL operacional, transações e fundamentos de sistemas.',
    structure: 'Isolamento, buffer cache, WAL, locks, planner, índices e manutenção.',
    limitations: 'O acervo cobre a versão 14; diferenças de recursos e operação devem ser verificadas no manual do PostgreSQL 18.'
  })
});

export const bancosAcademy = Object.freeze({
  title: 'Academia de Banco de Dados',
  baseline: 'PostgreSQL 18 · MongoDB 8.x · Redis 8.x · DynamoDB · Hibernate ORM 7.x',
  book: 'database-internals',
  parts: Object.freeze({
    fundamentos: Object.freeze({
      index: '1/5',
      page: 'fundamentos.html',
      range: 'Módulos 1–5',
      title: 'Modelo relacional e consistência',
      subtitle: 'Transforme regras de negócio em invariantes, consultas e transações verificáveis.',
      prerequisites: [
        'Executar SQL em um PostgreSQL local ou container.',
        'Distinguir entidade de negócio, identificador e relacionamento.',
        'Versionar scripts, dados de teste e resultados esperados com Git.'
      ],
      objectives: [
        'Modelar um domínio relacional normalizado e justificar cada desnormalização.',
        'Escrever consultas corretas com joins, agregações, CTEs e funções de janela.',
        'Implementar invariantes com tipos, constraints e chaves no banco.',
        'Reproduzir anomalias de concorrência e selecionar o isolamento adequado.',
        'Projetar índices a partir de padrões de acesso e custo de manutenção.'
      ]
    }),
    postgresql: Object.freeze({
      index: '2/5',
      page: 'postgresql.html',
      range: 'Módulos 6–10',
      title: 'PostgreSQL por dentro',
      subtitle: 'Leia armazenamento, WAL, planos, locks e recuperação como mecanismos conectados.',
      prerequisites: [
        'Concluir os módulos 1–5 e preservar o schema versionado.',
        'Usar psql, EXPLAIN e transações em sessões concorrentes.',
        'Interpretar latência, throughput, cardinalidade e seletividade.'
      ],
      objectives: [
        'Explicar o caminho de uma escrita entre heap, buffer, WAL e checkpoint.',
        'Diagnosticar planos com estimativas, linhas reais, buffers e tempo.',
        'Otimizar consultas sem depender de hints ou índices por intuição.',
        'Investigar bloqueios, deadlocks, bloat e pressão de autovacuum.',
        'Executar backup, restore e promoção com RTO e RPO medidos.'
      ]
    }),
    integracao: Object.freeze({
      index: '3/5',
      page: 'integracao.html',
      range: 'Módulos 11–15',
      title: 'Aplicação, migração e eventos',
      subtitle: 'Integre banco e aplicação sem esconder transações, capacidade ou evolução de schema.',
      prerequisites: [
        'Concluir os módulos 1–10 e manter um banco reproduzível.',
        'Conhecer HTTP, testes de integração e uma linguagem backend.',
        'Distinguir transação local, mensagem e efeito externo.'
      ],
      objectives: [
        'Entregar migrations compatíveis, observáveis e reversíveis.',
        'Dimensionar pool e fronteira transacional pela capacidade do banco.',
        'Detectar e corrigir N+1, fetch excessivo e lost update no ORM.',
        'Implementar cache com política explícita de validade e invalidação.',
        'Publicar eventos com outbox/CDC e consumo idempotente.'
      ]
    }),
    distribuidos: Object.freeze({
      index: '4/5',
      page: 'distribuidos.html',
      range: 'Módulos 16–20',
      title: 'Dados distribuídos e operação',
      subtitle: 'Escolha modelos por acesso, assuma falhas parciais e opere o ciclo completo do dado.',
      prerequisites: [
        'Concluir os módulos 1–15 e o projeto relacional executável.',
        'Conhecer cache, mensageria, replicação e consistência eventual.',
        'Medir carga, erro, saturação e recuperação em ambiente controlado.'
      ],
      objectives: [
        'Modelar documentos MongoDB por atomicidade e padrão de leitura.',
        'Projetar chaves e índices DynamoDB sem varredura como caminho normal.',
        'Comparar replicação, particionamento e consistência sob falha.',
        'Aplicar menor privilégio, auditoria, retenção e proteção de dados.',
        'Operar SLOs, capacidade, incidentes, backup e restauração.'
      ]
    }),
    avaliacao: Object.freeze({
      index: '5/5',
      page: 'avaliacao.html',
      range: 'Evidência',
      title: 'Avaliação, projetos e biblioteca',
      subtitle: 'Defenda decisões, diagnostique falhas e prove recuperação do mesmo produto evolutivo.',
      prerequisites: [
        'Concluir os 20 módulos e os exercícios aplicados.',
        'Manter scripts, testes, planos e runbooks em repositório acessível.',
        'Disponibilizar um ambiente descartável para carga e recuperação.'
      ],
      objectives: [
        'Defender decisões de modelagem, consistência e tecnologia sob restrições.',
        'Diagnosticar cinco cenários sem começar pela ferramenta ou pelo palpite.',
        'Evoluir um único artefato em três entregas com critérios mensuráveis.',
        'Demonstrar restore, rollback, observabilidade e resposta a incidente.',
        'Validar evidências e concluir a revisão D30 antes de declarar domínio.'
      ]
    })
  })
});

const pgDocs = (label, page) => ({ label, url: `https://www.postgresql.org/docs/current/${page}` });
const defineModule = (module) => Object.freeze(module);

export const bancosModules = Object.freeze([
  defineModule({
    number: 1,
    part: 'fundamentos',
    id: 'modelagem-relacional',
    title: 'Modelagem relacional guiada por invariantes',
    level: 'Base avançada',
    objective: 'Modelar um domínio relacional e comprovar que chaves, cardinalidades e constraints preservam as regras.',
    prerequisites: ['Entidades e relacionamentos', 'SQL DDL básico', 'Regras de negócio escritas'],
    problem: 'Schemas desenhados como espelho de telas aceitam estados impossíveis, duplicam fatos e transferem integridade para código concorrente.',
    concepts: ['Identidade e chave candidata', 'Dependências funcionais', '1FN, 2FN, 3FN e BCNF', 'Cardinalidade e opcionalidade', 'Agregado e fronteira transacional'],
    internals: ['Normalização separa fatos que possuem determinantes diferentes.', 'Chaves estrangeiras preservam referências sob concorrência que uma validação prévia na aplicação não controla.', 'Desnormalização é uma duplicação deliberada que exige mecanismo explícito de sincronização.'],
    useWhen: ['Use normalização como baseline transacional.', 'Use surrogate key sem abandonar unicidade natural.', 'Desnormalize somente após medir uma leitura crítica.'],
    avoidWhen: ['Não crie tabela por tela ou DTO.', 'Não armazene lista delimitada em coluna textual.', 'Não aceite duplicidade para “resolver depois” na aplicação.'],
    contrast: {
      bad: 'Pedido guarda nome, e-mail e endereço do cliente sem regra de snapshot nem chave estrangeira.',
      good: 'Modelo distingue identidade atual de snapshot fiscal, documenta a invariância e testa constraints.'
    },
    tradeoffs: ['Normalização reduz anomalias e aumenta joins.', 'Surrogate keys estabilizam referências e podem esconder duplicidade natural.', 'Constraints aumentam segurança e cobram ordem correta de carga/migração.'],
    production: 'Dois requests simultâneos tentam cadastrar o mesmo identificador fiscal; a constraint única decide atomicamente e a API traduz a violação.',
    risks: ['Modelo anêmico de tabelas', 'Chave natural mutável', 'Cascade delete irrestrito', 'Desnormalização sem reconciliação'],
    checklist: ['Cada tabela representa um fato?', 'Toda unicidade está no banco?', 'Cardinalidades refletem o negócio?', 'Null tem significado definido?', 'A desnormalização possui owner e reconciliação?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que uma validação SELECT antes do INSERT não garante unicidade?', expected: 'Porque outra transação pode inserir entre as operações; a constraint única arbitra de forma atômica.' },
      { level: 'Sênior/Expert', question: 'Quando você aceita desnormalização?', expected: 'Após padrão de acesso e métrica justificarem, com fonte de verdade, atualização, reconciliação e custo de inconsistência explícitos.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Modelar clientes, pedidos, itens e pagamentos até 3FN.', evidence: 'DDL com PK, FK, UNIQUE, CHECK e dados que provam rejeições.' },
      { level: 'Aplicado', task: 'Adicionar snapshot fiscal sem duplicar identidade operacional.', evidence: 'ADR curto e testes de invariantes concorrentes.' },
      { level: 'Sênior/Expert', task: 'Comparar modelo normalizado e uma projeção de leitura.', evidence: 'Consulta, medição e estratégia de reconciliação.' }
    ],
    challenge: 'Migrar dados duplicados para o novo modelo sem indisponibilidade e com relatório de exceções.',
    book: 'SQL Antipatterns, capítulos de modelagem; The Art of PostgreSQL, modelagem de dados.',
    complements: [pgDocs('PostgreSQL 18 — Data Definition', 'ddl.html')],
    exampleFile: '../../examples/database-senior/01-core-schema.sql'
  }),
  defineModule({
    number: 2,
    part: 'fundamentos',
    id: 'sql-relacional',
    title: 'SQL como linguagem relacional',
    level: 'Fundamento',
    objective: 'Escrever consultas declarativas corretas e explicar a cardinalidade intermediária de cada operação.',
    prerequisites: ['Módulo 1', 'SELECT, JOIN e GROUP BY', 'Conjuntos e lógica booleana'],
    problem: 'Consultas que “funcionam no exemplo” duplicam linhas, perdem ausências em joins e confundem NULL com falso.',
    concepts: ['Álgebra relacional', 'Semântica de joins', 'Lógica ternária e NULL', 'Agregação e HAVING', 'Semijoin e antijoin'],
    internals: ['SQL descreve o resultado; o otimizador escolhe a execução.', 'Um join combina cardinalidades antes dos filtros e pode multiplicar fatos.', 'NOT IN com NULL pode produzir UNKNOWN; NOT EXISTS expressa antijoin de forma segura.'],
    useWhen: ['Use EXISTS para testar existência.', 'Use agregação na granularidade correta.', 'Explicite ordenação quando a ordem fizer parte do contrato.'],
    avoidWhen: ['Não dependa da ordem física.', 'Não use DISTINCT para esconder join incorreto.', 'Não transforme LEFT JOIN em INNER JOIN pelo filtro no WHERE sem intenção.'],
    contrast: {
      bad: 'Consulta usa DISTINCT para apagar duplicatas causadas por dois relacionamentos 1:N.',
      good: 'Consulta pré-agrega cada fato, documenta a granularidade e testa ausência, duplicidade e NULL.'
    },
    tradeoffs: ['Uma consulta única reduz round trips e pode ampliar resultados intermediários.', 'CTEs melhoram expressão e podem alterar otimização conforme o banco.', 'SQL expressivo centraliza lógica e aumenta a exigência de testes de dados.'],
    production: 'Relatório financeiro dobra receita porque junta pagamentos e itens antes de agregar; a correção começa pela granularidade.',
    risks: ['Cartesian product acidental', 'DISTINCT corretivo', 'NULL ignorado', 'Paginação sem ordem determinística'],
    checklist: ['Qual é a granularidade de entrada e saída?', 'O join pode multiplicar linhas?', 'NULL foi testado?', 'A ordem é determinística?', 'O resultado fecha com uma consulta de controle?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual a diferença entre WHERE e HAVING?', expected: 'WHERE filtra linhas antes da agregação; HAVING filtra grupos depois de agregados.' },
      { level: 'Sênior/Expert', question: 'Como diagnosticar um total duplicado após vários joins?', expected: 'Declarar a granularidade de cada relação, medir cardinalidades intermediárias e pré-agregar os lados 1:N antes de combiná-los.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Resolver semijoin, antijoin e agregação com ausências.', evidence: 'SQL e casos de teste com NULL e zero relacionamentos.' },
      { level: 'Aplicado', task: 'Produzir relatório mensal com granularidade documentada.', evidence: 'Consulta, dataset e consulta de reconciliação.' },
      { level: 'Sênior/Expert', task: 'Reescrever uma consulta que usa DISTINCT como correção.', evidence: 'Explicação da causa e prova de equivalência.' }
    ],
    challenge: 'Construir uma suíte de testes metamórficos para uma consulta financeira.',
    book: 'The Art of PostgreSQL, capítulos de SQL; SQL Antipatterns, Query Antipatterns.',
    complements: [pgDocs('PostgreSQL 18 — Queries', 'queries.html')],
    exampleFile: '../../examples/database-senior/01-core-schema.sql'
  }),
  defineModule({
    number: 3,
    part: 'fundamentos',
    id: 'tipos-constraints',
    title: 'Tipos, constraints e contratos de dados',
    level: 'Fundamento',
    objective: 'Implementar invariantes com tipos e constraints e verificar sua evolução sem perder compatibilidade.',
    prerequisites: ['Módulos 1–2', 'DDL e DML', 'Noções de datas, moeda e identificadores'],
    problem: 'Strings universais, timestamps ambíguos e validações apenas na API permitem dados inválidos por jobs, consoles e integrações.',
    concepts: ['Domínios de tipo', 'CHECK e UNIQUE', 'Temporalidade e fuso', 'Numeric vs ponto flutuante', 'JSONB sob contrato'],
    internals: ['Tipos definem representação, operadores e possibilidades de indexação.', 'Constraints são avaliadas dentro da transação e protegem todas as rotas de escrita.', 'JSONB flexibiliza forma, mas não elimina a necessidade de versionar e validar o documento.'],
    useWhen: ['Use timestamptz para instantes globais.', 'Use numeric para valores monetários quando precisão decimal for requisito.', 'Use JSONB para atributos realmente variáveis com consultas conhecidas.'],
    avoidWhen: ['Não use varchar para tudo.', 'Não grave moeda em float.', 'Não converta colunas relacionais estáveis em um blob JSON.'],
    contrast: {
      bad: 'Status, dinheiro e data chegam como texto livre e cada serviço interpreta de um jeito.',
      good: 'Tipos, checks e convenções temporais formam contrato testado por produtores e consumidores.'
    },
    tradeoffs: ['Tipo restrito melhora integridade e aumenta custo de evolução.', 'JSONB acelera mudança de forma e reduz garantias estruturais.', 'Enum nativo é explícito e pode exigir migração cuidadosa.'],
    production: 'Uma integração escreve data local sem offset durante horário de verão; o contrato temporal impede a ambiguidade antes da persistência.',
    risks: ['Dinheiro em float', 'Fuso implícito', 'Status textual aberto', 'JSON sem schema'],
    checklist: ['O tipo representa o domínio?', 'A unidade está no nome ou contrato?', 'Datas têm semântica de instante ou calendário?', 'Constraints cobrem todas as escritas?', 'JSON possui versão e validação?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Quando usar timestamptz?', expected: 'Para representar um instante absoluto; a exibição converte para o fuso da sessão ou do usuário.' },
      { level: 'Sênior/Expert', question: 'Qual é o limite de usar JSONB como solução de evolução?', expected: 'Ele facilita forma variável, mas desloca integridade, migração, estatísticas e compatibilidade para contratos adicionais.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Trocar campos textuais por tipos e constraints adequados.', evidence: 'Migration e casos inválidos rejeitados.' },
      { level: 'Aplicado', task: 'Versionar payload JSONB e criar índice para um acesso real.', evidence: 'Schema, consulta e plano medido.' },
      { level: 'Sênior/Expert', task: 'Planejar mudança incompatível de status sem parar escritores antigos.', evidence: 'Sequência expand-contract e testes de compatibilidade.' }
    ],
    challenge: 'Definir contrato temporal para agendamento global com regras locais e auditoria.',
    book: 'The Art of PostgreSQL, tipos e dados; PostgreSQL 14 Internals, catálogo e tuplas.',
    complements: [pgDocs('PostgreSQL 18 — Data Types', 'datatype.html'), pgDocs('PostgreSQL 18 — Constraints', 'ddl-constraints.html')],
    exampleFile: '../../examples/database-senior/01-core-schema.sql'
  }),
  defineModule({
    number: 4,
    part: 'fundamentos',
    id: 'transacoes-isolamento',
    title: 'Transações, MVCC e isolamento',
    level: 'Intermediário',
    objective: 'Reproduzir anomalias concorrentes e selecionar isolamento, retry e lock pela invariância exigida.',
    prerequisites: ['Módulos 1–3', 'Duas sessões SQL', 'Atomicidade e concorrência básica'],
    problem: 'Código correto em execução serial perde atualização, excede limite ou lê estados incompatíveis quando requests concorrem.',
    concepts: ['ACID como propriedade observável', 'Snapshot e versões de linha', 'Read committed e repeatable read', 'Serializable e serialization failure', 'Optimistic e pessimistic locking'],
    internals: ['MVCC mantém versões para que leitores e escritores reduzam bloqueio entre si.', 'Read committed cria novo snapshot por comando no PostgreSQL.', 'Serializable detecta estruturas de dependência perigosas e exige retry da transação inteira.'],
    useWhen: ['Use constraint para invariantes locais.', 'Use optimistic lock quando conflito é raro.', 'Use serializable com retry para invariantes multi-linha difíceis de bloquear.'],
    avoidWhen: ['Não mantenha transação aberta durante HTTP.', 'Não faça retry apenas do último statement.', 'Não suponha que repeatable read significa serialização em todo produto.'],
    contrast: {
      bad: 'Aplicação lê saldo, chama um serviço externo e depois atualiza sem versão ou lock.',
      good: 'Transação curta protege a invariância, efeito externo usa outbox e conflito tem retry limitado e observável.'
    },
    tradeoffs: ['Isolamento forte simplifica raciocínio e aumenta aborts/espera.', 'Lock pessimista garante ordem e reduz concorrência.', 'Optimistic lock preserva throughput e exige tratar conflito no produto.'],
    production: 'Duas reservas consomem a última unidade; o laboratório compara lost update, SELECT FOR UPDATE, versão e serializable.',
    risks: ['Transação longa', 'Retry infinito', 'Lock em ordem variável', 'Efeito externo dentro da transação'],
    checklist: ['Qual invariância está protegida?', 'Qual anomalia o isolamento permite?', 'O retry engloba toda a unidade?', 'Locks seguem ordem estável?', 'Tempo de transação é medido?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que MVCC não elimina locks?', expected: 'Versões permitem leitura concorrente, mas escrita conflitante, DDL e invariantes ainda exigem coordenação e locks.' },
      { level: 'Sênior/Expert', question: 'Como escolher entre optimistic lock e serializable?', expected: 'Pela forma da invariância, frequência de conflito, custo de retry e capacidade de representar a disputa numa versão única.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Reproduzir lost update em duas sessões.', evidence: 'Transcrição com estado inicial, interleaving e resultado incorreto.' },
      { level: 'Aplicado', task: 'Corrigir a reserva com duas estratégias.', evidence: 'Scripts concorrentes e comparação de bloqueio/abort.' },
      { level: 'Sênior/Expert', task: 'Aplicar serializable com retry limitado.', evidence: 'Teste de carga, taxa de abort e invariância preservada.' }
    ],
    challenge: 'Projetar concorrência de uma carteira sem dupla despesa e sem serializar toda a tabela.',
    book: 'Designing Data-Intensive Applications, transações; PostgreSQL 14 Internals, isolamento.',
    complements: [pgDocs('PostgreSQL 18 — Concurrency Control', 'mvcc.html')],
    exampleFile: '../../examples/database-senior/02-transactions-and-locks.sql'
  }),
  defineModule({
    number: 5,
    part: 'fundamentos',
    id: 'indices-acesso',
    title: 'Índices e caminhos de acesso',
    level: 'Intermediário',
    objective: 'Projetar um índice a partir de filtro, ordenação e seletividade e medir custos de leitura e escrita.',
    prerequisites: ['Módulos 1–4', 'EXPLAIN básico', 'Árvores e ordenação'],
    problem: 'Índices criados por coluna aceleram uma consulta isolada, degradam escrita e não atendem filtros compostos ou ordenação.',
    concepts: ['B-tree e páginas', 'Índice composto e prefixo', 'Seletividade e correlação', 'Index-only scan e visibility map', 'Índices parciais e por expressão'],
    internals: ['B-tree mantém chaves ordenadas em páginas e percorre raiz, internos e folhas.', 'A ordem das colunas deve refletir igualdade, faixa e ordenação do acesso.', 'Index-only scan ainda depende de visibilidade; páginas não marcadas exigem heap fetch.'],
    useWhen: ['Indexe consultas críticas observadas.', 'Use parcial quando um subconjunto estável concentra o acesso.', 'Use composto para cobrir filtro e ordem do mesmo contrato.'],
    avoidWhen: ['Não indexe toda coluna.', 'Não espere ganho em baixa seletividade sem medir.', 'Não mantenha índice redundante por medo.'],
    contrast: {
      bad: 'Equipe adiciona índices individuais para cada coluna de um filtro composto.',
      good: 'Padrão de acesso define ordem, include/parcialidade e baseline de write amplification.'
    },
    tradeoffs: ['Índice reduz leitura e aumenta escrita, WAL e armazenamento.', 'Cobertura evita heap e amplia o índice.', 'Parcial é compacto e só serve quando o predicado é reconhecido.'],
    production: 'Endpoint de timeline precisa filtrar tenant/status e ordenar por data; o plano comprova por que o índice composto elimina sort e heap excessivo.',
    risks: ['Índice redundante', 'Ordem inadequada', 'Bloat', 'Benchmark sem dados representativos'],
    checklist: ['Qual query sustenta o índice?', 'A ordem atende igualdade/faixa/sort?', 'Rows estimadas e reais convergem?', 'Writes foram medidos?', 'Existe índice equivalente ou redundante?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que um índice em (a,b) não equivale a dois índices separados?', expected: 'Ele ordena primeiro por a e depois por b, podendo atender filtro e ordem combinados em um único acesso.' },
      { level: 'Sênior/Expert', question: 'Quando um index-only scan ainda busca o heap?', expected: 'Quando a visibility map não confirma que todos os tuples da página são visíveis ao snapshot.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Comparar seq scan e index scan com seletividades diferentes.', evidence: 'Planos, buffers e tempos.' },
      { level: 'Aplicado', task: 'Criar índice composto para timeline paginada.', evidence: 'Plano antes/depois e teste de ordenação.' },
      { level: 'Sênior/Expert', task: 'Medir custo de três índices concorrentes na escrita.', evidence: 'TPS, WAL gerado, tamanho e recomendação.' }
    ],
    challenge: 'Reduzir p99 de leitura sem exceder o orçamento de escrita e armazenamento.',
    book: 'SQL Performance Explained, índices; Database Internals, B-trees.',
    complements: [pgDocs('PostgreSQL 18 — Indexes', 'indexes.html')],
    exampleFile: '../../examples/database-senior/03-explain-and-indexes.sql'
  }),
  defineModule({
    number: 6,
    part: 'postgresql',
    id: 'storage-buffer-wal',
    title: 'Heap, buffer, WAL e checkpoint',
    level: 'Avançado',
    objective: 'Explicar e medir o caminho de leitura e escrita entre páginas, buffer cache, WAL e armazenamento.',
    prerequisites: ['Módulos 1–5', 'Páginas e cache', 'Durabilidade e fsync'],
    problem: 'Incidentes de I/O e WAL são tratados como “banco lento” sem separar working set, dirty pages, checkpoints e amplificação.',
    concepts: ['Heap e tuple versions', 'Shared buffers e page cache', 'WAL e LSN', 'Checkpoint e background writer', 'Full-page writes'],
    internals: ['A alteração suja a página em memória e registra WAL antes da página de dados poder chegar ao disco.', 'Commit durável depende de WAL persistido, não da heap page já escrita.', 'Checkpoint limita recuperação e pode concentrar I/O quando mal distribuído.'],
    useWhen: ['Relacione latência de escrita a WAL e checkpoint.', 'Dimensione cache pelo working set medido.', 'Monitore bytes de WAL em mudanças intensivas.'],
    avoidWhen: ['Não trate shared_buffers como todo o cache.', 'Não desative fsync para produção.', 'Não ajuste checkpoint sem observar recuperação e I/O.'],
    contrast: {
      bad: 'Aumentar memória até a máquina trocar páginas e chamar isso de tuning.',
      good: 'Separar hit ratio, leituras físicas, dirty buffers, WAL e latência do storage com hipótese.'
    },
    tradeoffs: ['Mais cache reduz leitura e consome memória do sistema.', 'Checkpoint espaçado suaviza I/O e aumenta WAL/recovery window.', 'Durabilidade síncrona reduz risco e adiciona latência.'],
    production: 'Picos periódicos de p99 coincidem com checkpoint e storage saturado; o diagnóstico cruza métricas de banco e host.',
    risks: ['Swap', 'Checkpoint storm', 'WAL sem retenção limitada', 'Storage sem IOPS previsível'],
    checklist: ['Working set cabe em memória?', 'Picos coincidem com checkpoint?', 'WAL por transação mudou?', 'fsync e sync_commit são deliberados?', 'RTO inclui replay real?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que o commit pode terminar antes da página de dados ser escrita?', expected: 'Porque o WAL durável permite refazer a alteração após falha; a página é escrita depois.' },
      { level: 'Sênior/Expert', question: 'Como um checkpoint afeta latência e recuperação?', expected: 'Mais frequente reduz WAL a repetir, mas aumenta escrita; concentrado gera rajadas de I/O, então o ajuste equilibra suavidade e RTO.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Relacionar LSN e volume de WAL a uma carga.', evidence: 'Script e bytes de WAL por operação.' },
      { level: 'Aplicado', task: 'Observar buffers antes e depois do warm-up.', evidence: 'EXPLAIN BUFFERS e métricas do host.' },
      { level: 'Sênior/Expert', task: 'Simular checkpoint sob carga.', evidence: 'Série temporal com p95/p99 e hipótese confirmada.' }
    ],
    challenge: 'Definir guardrails de WAL e checkpoint para uma carga de ingestão variável.',
    book: 'PostgreSQL 14 Internals, buffer cache e WAL; Database Internals, storage.',
    complements: [pgDocs('PostgreSQL 18 — WAL', 'wal-intro.html'), pgDocs('PostgreSQL 18 — Resource Consumption', 'runtime-config-resource.html')],
    exampleFile: '../../examples/database-senior/06-operations-runbook.md'
  }),
  defineModule({
    number: 7,
    part: 'postgresql',
    id: 'planner-explain',
    title: 'Planner, estatísticas e EXPLAIN',
    level: 'Avançado',
    objective: 'Diagnosticar uma regressão pelo plano e corrigir estimativas, acesso ou SQL com experimento controlado.',
    prerequisites: ['Módulos 1–6', 'Índices e joins', 'Métricas de latência'],
    problem: 'Otimização por tempo total ignora estimativas ruins, buffers, loops e spill; uma mudança casual melhora hoje e piora outro volume.',
    concepts: ['Árvore de plano', 'Cost model', 'Cardinality estimation', 'Nested loop, hash e merge join', 'ANALYZE e extended statistics'],
    internals: ['O planner compara custos estimados, não mede todas as alternativas.', 'Erro de cardinalidade se multiplica através da árvore e pode selecionar join inadequado.', 'EXPLAIN ANALYZE executa a consulta; em escrita precisa de transação/rollback e cautela.'],
    useWhen: ['Compare rows estimadas e reais.', 'Use BUFFERS e WAL quando a hipótese envolver I/O.', 'Corrija estatística ou SQL antes de desligar um nó globalmente.'],
    avoidWhen: ['Não compare apenas custo entre servidores.', 'Não rode ANALYZE destrutivo em produção sem proteção.', 'Não force planner global para uma query.'],
    contrast: {
      bad: 'Criar índice porque existe seq scan em uma tabela pequena.',
      good: 'Ler a árvore, cardinalidade, loops, buffers e tempo por nó antes de testar uma mudança isolada.'
    },
    tradeoffs: ['Estatística mais rica melhora estimativa e custa coleta/armazenamento.', 'Prepared statement reduz parse e pode usar plano genérico inadequado.', 'Reescrita torna intenção clara e pode acoplar ao otimizador atual.'],
    production: 'Após crescimento por tenant, plano genérico escolhe nested loop para um cliente gigante; a análise separa skew, parâmetros e estatística.',
    risks: ['ANALYZE em DML real', 'Tempo agregado confundido com nó', 'Cache quente não declarado', 'Hint informal por configuração global'],
    checklist: ['Há baseline reproduzível?', 'Rows estimadas e reais divergem onde?', 'Loops amplificam custo?', 'Buffers ou spill explicam latência?', 'A correção preserva outros perfis de parâmetro?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que significa rows no EXPLAIN?', expected: 'Estimativa de linhas emitidas pelo nó; com ANALYZE aparece também o valor real para comparação.' },
      { level: 'Sênior/Expert', question: 'Como skew por tenant quebra um plano preparado?', expected: 'Um plano genérico usa seletividade média; tenants extremos podem exigir acesso diferente, demandando estatísticas, query ou estratégia de plano consciente.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Anotar árvore de um plano com scan, join e aggregate.', evidence: 'Plano comentado nó a nó.' },
      { level: 'Aplicado', task: 'Criar erro de cardinalidade com colunas correlacionadas.', evidence: 'Estimado/real antes e depois de estatística estendida.' },
      { level: 'Sênior/Expert', task: 'Diagnosticar regressão por parâmetro enviesado.', evidence: 'Hipótese, planos, carga e guardrail.' }
    ],
    challenge: 'Criar um protocolo de revisão de plano que evite otimização pelo print de uma única execução.',
    book: 'SQL Performance Explained; PostgreSQL 14 Internals, planner.',
    complements: [pgDocs('PostgreSQL 18 — Using EXPLAIN', 'using-explain.html'), pgDocs('PostgreSQL 18 — Planner Statistics', 'planner-stats.html')],
    exampleFile: '../../examples/database-senior/03-explain-and-indexes.sql'
  }),
  defineModule({
    number: 8,
    part: 'postgresql',
    id: 'sql-analitico',
    title: 'CTEs, janelas e SQL analítico',
    level: 'Intermediário',
    objective: 'Implementar transformações analíticas corretas e comparar plano, memória e legibilidade.',
    prerequisites: ['Módulos 1–7', 'Agregações e subqueries', 'Ordenação determinística'],
    problem: 'Loops na aplicação e consultas por linha transferem trabalho, multiplicam round trips e perdem consistência de snapshot.',
    concepts: ['CTE e subquery', 'Window functions', 'LATERAL', 'Recursive query', 'Grouping sets'],
    internals: ['Window function calcula sobre partição sem colapsar linhas.', 'Ordenação pode consumir work_mem por nó e derramar em disco.', 'CTE pode ser inline ou materializada conforme semântica e escolha do planner.'],
    useWhen: ['Use janela para ranking, acumulado e comparação entre linhas.', 'Use LATERAL para subconsulta dependente explícita.', 'Use recursão para hierarquia com limite e detecção de ciclo.'],
    avoidWhen: ['Não use SQL gigante sem testes intermediários.', 'Não aumente work_mem global por um relatório.', 'Não substitua pipeline distribuído por uma transação analítica longa no primário.'],
    contrast: {
      bad: 'API busca pedidos e executa uma consulta de ranking por cliente.',
      good: 'Uma consulta com janela declara partição e ordem, possui dataset de borda e orçamento de recursos.'
    },
    tradeoffs: ['SQL centraliza execução e pode ficar difícil de manter.', 'Materialização reutiliza resultado e consome memória/disco.', 'Consulta analítica no primário é consistente e compete com OLTP.'],
    production: 'Leaderboard precisa desempate estável e p99 baixo; a consulta usa rank apropriado, índice e teste de spill.',
    risks: ['Ordem não determinística', 'work_mem multiplicada', 'Recursão sem ciclo', 'OLAP sobrecarregando OLTP'],
    checklist: ['Partição e ordem estão explícitas?', 'Empates têm regra?', 'Plano derrama em disco?', 'Resultados intermediários têm testes?', 'A carga pertence ao primário?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual a diferença entre GROUP BY e window function?', expected: 'GROUP BY reduz linhas por grupo; janela mantém as linhas e acrescenta cálculo sobre a partição.' },
      { level: 'Sênior/Expert', question: 'Por que aumentar work_mem globalmente é perigoso?', expected: 'O limite pode ser usado por vários nós e sessões ao mesmo tempo, multiplicando consumo além do esperado.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Calcular ranking e acumulado com janela.', evidence: 'SQL com testes de empate e ordem.' },
      { level: 'Aplicado', task: 'Substituir N consultas por uma consulta LATERAL ou janela.', evidence: 'Contagem de round trips e plano.' },
      { level: 'Sênior/Expert', task: 'Medir spill de uma agregação grande.', evidence: 'EXPLAIN, configuração local e recomendação.' }
    ],
    challenge: 'Projetar isolamento entre workload analítico e transacional mantendo frescor mensurável.',
    book: 'The Art of PostgreSQL, SQL avançado; SQL Performance Explained.',
    complements: [pgDocs('PostgreSQL 18 — Window Functions', 'tutorial-window.html'), pgDocs('PostgreSQL 18 — WITH Queries', 'queries-with.html')],
    exampleFile: '../../examples/database-senior/03-explain-and-indexes.sql'
  }),
  defineModule({
    number: 9,
    part: 'postgresql',
    id: 'locks-deadlocks-vacuum',
    title: 'Locks, deadlocks e manutenção MVCC',
    level: 'Avançado',
    objective: 'Investigar bloqueio e bloat, corrigir causa e definir prevenção observável.',
    prerequisites: ['Módulos 4, 6 e 7', 'pg_stat_activity', 'Transações concorrentes'],
    problem: 'Timeouts são tratados aumentando pool ou matando sessão sem descobrir transação longa, ordem de lock ou tuplas mortas.',
    concepts: ['Lock graph', 'Deadlock detection', 'xmin e horizonte de vacuum', 'Autovacuum', 'Bloat e freeze'],
    internals: ['Deadlock é ciclo no grafo de espera; o banco aborta uma vítima.', 'Versões antigas só podem ser removidas quando nenhum snapshot relevante precisa delas.', 'Transação idle in transaction pode segurar locks e horizonte de vacuum.'],
    useWhen: ['Ordene locks por chave estável.', 'Monitore idade de transação e bloqueadores.', 'Ajuste autovacuum por tabela com churn medido.'],
    avoidWhen: ['Não use lock de tabela como primeira correção.', 'Não desative autovacuum.', 'Não mate o bloqueado ignorando o bloqueador.'],
    contrast: {
      bad: 'Aumentar timeout e pool durante fila de locks.',
      good: 'Construir grafo blocker/waiter, reduzir transação, ordenar locks e criar alerta preventivo.'
    },
    tradeoffs: ['Lock pessimista protege fluxo e cria fila.', 'Vacuum agressivo recupera espaço e consome I/O/CPU.', 'Timeout curto limita dano e pode abortar trabalho válido.'],
    production: 'Job atualiza contas em ordem oposta à API e cria deadlocks; a correção unifica ordenação e mede taxa de retry.',
    risks: ['Idle in transaction', 'Autovacuum atrasado', 'Long snapshot', 'Pool mascarando fila'],
    checklist: ['Quem bloqueia quem?', 'A transação inclui I/O externo?', 'Locks seguem a mesma ordem?', 'Dead tuples e freeze estão saudáveis?', 'Retry é limitado e idempotente?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual a diferença entre bloqueio e deadlock?', expected: 'Bloqueio é espera que pode terminar; deadlock é ciclo de dependências que exige abortar uma transação.' },
      { level: 'Sênior/Expert', question: 'Como uma transação longa causa bloat?', expected: 'Ela mantém um snapshot antigo e impede vacuum de remover versões mortas ainda potencialmente visíveis.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Produzir e observar um bloqueio entre duas sessões.', evidence: 'Consultas em pg_locks e pg_stat_activity.' },
      { level: 'Aplicado', task: 'Reproduzir deadlock com ordem inversa.', evidence: 'Log, ciclo explicado e correção.' },
      { level: 'Sênior/Expert', task: 'Criar runbook de bloat/autovacuum.', evidence: 'Thresholds, diagnóstico e validação pós-ação.' }
    ],
    challenge: 'Resolver incidente com fila de locks sem reiniciar o banco e provar que o mecanismo preventivo funciona.',
    book: 'PostgreSQL 14 Internals, locks e vacuum; The Art of PostgreSQL, concorrência.',
    complements: [pgDocs('PostgreSQL 18 — Explicit Locking', 'explicit-locking.html'), pgDocs('PostgreSQL 18 — Viewing Locks', 'monitoring-locks.html')],
    exampleFile: '../../examples/database-senior/02-transactions-and-locks.sql'
  }),
  defineModule({
    number: 10,
    part: 'postgresql',
    id: 'particionamento-replicacao-backup',
    title: 'Particionamento, replicação e recuperação',
    level: 'Avançado',
    objective: 'Projetar crescimento e recuperação com particionamento, réplica e backup restaurado sob metas explícitas.',
    prerequisites: ['Módulos 6–9', 'Armazenamento e WAL', 'RTO, RPO e SLO'],
    problem: 'Equipe adiciona partições e réplicas para “escalar” sem pruning, roteamento, lag, failover ou restore testado.',
    concepts: ['Partition pruning', 'Streaming e logical replication', 'Replication lag', 'Backup lógico e físico', 'PITR, RTO e RPO'],
    internals: ['Particionamento divide armazenamento e manutenção; não torna toda consulta rápida.', 'Streaming replica WAL e leituras na réplica podem estar defasadas.', 'PITR combina base backup e sequência contínua de WAL até o ponto desejado.'],
    useWhen: ['Particione por manutenção, retenção ou pruning comprovado.', 'Use réplica para disponibilidade/leitura tolerante a lag.', 'Teste restore em ambiente limpo e cronometre.'],
    avoidWhen: ['Não particione tabela pequena.', 'Não leia da réplica quando read-your-writes for obrigatório sem estratégia.', 'Não considere backup concluído sem restore.'],
    contrast: {
      bad: 'Snapshot diário guardado no mesmo cluster e RTO assumido.',
      good: 'Backups isolados, WAL arquivado, restore automatizado, checks de consistência e tempo medido.'
    },
    tradeoffs: ['Partições facilitam retenção e aumentam objetos/planejamento.', 'Réplica amplia leitura e introduz lag/custo operacional.', 'RPO menor exige WAL contínuo e mais armazenamento/rede.'],
    production: 'Uma migration apaga dados; a equipe restaura base e WAL até segundos antes, valida invariantes e mede o RTO real.',
    risks: ['Partições sem default', 'Lag ignorado', 'Failover manual não ensaiado', 'Backup não restaurável'],
    checklist: ['A chave permite pruning?', 'Qual leitura tolera lag?', 'RPO e RTO foram aprovados?', 'Restore é automatizado?', 'Failback e split brain foram considerados?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Réplica substitui backup?', expected: 'Não; ela replica corrupção e exclusão. Backup preserva pontos recuperáveis independentes.' },
      { level: 'Sênior/Expert', question: 'Quando particionamento piora uma tabela?', expected: 'Quando não há pruning/manutenção útil e o aumento de objetos, planejamento, índices e constraints supera o benefício.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Particionar eventos por tempo e provar pruning.', evidence: 'DDL e planos com partições acessadas.' },
      { level: 'Aplicado', task: 'Medir lag durante carga e ler da réplica.', evidence: 'Série temporal e regra de roteamento.' },
      { level: 'Sênior/Expert', task: 'Executar restore completo ou PITR.', evidence: 'Runbook, RTO/RPO e checks de consistência.' }
    ],
    challenge: 'Desenhar continuidade para perda de região declarando promoção, DNS, perda aceitável e reconciliação.',
    book: 'PostgreSQL 14 Internals, WAL e replicação; Designing Data-Intensive Applications, replication.',
    complements: [pgDocs('PostgreSQL 18 — Table Partitioning', 'ddl-partitioning.html'), pgDocs('PostgreSQL 18 — Backup and Restore', 'backup.html')],
    exampleFile: '../../examples/database-senior/06-operations-runbook.md'
  }),
  defineModule({
    number: 11,
    part: 'integracao',
    id: 'migrations-zero-downtime',
    title: 'Migrations compatíveis e reversíveis',
    level: 'Intermediário',
    objective: 'Entregar mudança expand-contract com compatibilidade, backfill, observabilidade e rollback testados.',
    prerequisites: ['Módulos 1–10', 'Deploy e CI', 'Flyway ou ferramenta equivalente'],
    problem: 'DDL bloqueante ou alteração incompatível quebra instâncias antigas, filas de escrita e rollback da aplicação.',
    concepts: ['Schema history e checksum', 'Expand-contract', 'Backfill em lotes', 'Compatibilidade entre versões', 'Rollback lógico e roll-forward'],
    internals: ['Deploy gradual cria período com versões antigas e novas acessando o mesmo schema.', 'DDL pode adquirir locks fortes e reescrever tabela.', 'Backfill precisa checkpoint, throttling, idempotência e validação.'],
    useWhen: ['Separe adicionar, popular, trocar leitores e remover.', 'Valide migrations no CI e banco real.', 'Meça lock e duração em volume representativo.'],
    avoidWhen: ['Não renomeie/remova coluna no mesmo deploy do código.', 'Não edite migration aplicada.', 'Não execute backfill ilimitado na transação do deploy.'],
    contrast: {
      bad: 'ALTER troca tipo e aplicação passa a exigir a coluna na mesma release.',
      good: 'Sequência expand-contract preserva leitores antigos, backfill reiniciável e gate de observação.'
    },
    tradeoffs: ['Compatibilidade prolonga schema duplicado.', 'Roll-forward evita reversão destrutiva e exige correção rápida.', 'Migration online reduz indisponibilidade e aumenta etapas.'],
    production: 'Coluna obrigatória em tabela grande é adicionada sem bloquear: nullable, escrita dupla, backfill, validação e constraint posterior.',
    risks: ['Lock inesperado', 'Checksum divergente', 'Backfill sem throttle', 'Rollback que perde dado novo'],
    checklist: ['Versão N-1 continua funcionando?', 'Lock e reescrita foram medidos?', 'Backfill pode retomar?', 'Existe gate antes do contract?', 'Rollback preserva dados novos?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que não editar uma migration aplicada?', expected: 'Porque ambientes já registraram checksum e estado; mudar o arquivo destrói reprodutibilidade e gera divergência.' },
      { level: 'Sênior/Expert', question: 'Como tornar NOT NULL seguro em tabela grande?', expected: 'Adicionar compatibilidade, preencher em lotes, validar ausência de null e aplicar constraint em etapa controlada conforme recursos do banco.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Versionar duas migrations e validar checksum.', evidence: 'Pipeline executado em banco limpo.' },
      { level: 'Aplicado', task: 'Aplicar expand-contract numa coluna renomeada.', evidence: 'Três releases compatíveis e testes.' },
      { level: 'Sênior/Expert', task: 'Executar backfill reiniciável sob carga.', evidence: 'Checkpoint, throttle, métricas e rollback.' }
    ],
    challenge: 'Migrar chave primária de um domínio com zero downtime e consumidores assíncronos.',
    book: 'SQL Antipatterns, desenvolvimento; Designing Data-Intensive Applications, evolução e dados derivados.',
    complements: [{ label: 'Flyway — Validate', url: 'https://documentation.red-gate.com/flyway/reference/commands/validate' }],
    exampleFile: '../../examples/database-senior/04-zero-downtime-migrations.sql'
  }),
  defineModule({
    number: 12,
    part: 'integracao',
    id: 'jdbc-pool-transacoes',
    title: 'JDBC, pools e fronteiras transacionais',
    level: 'Intermediário',
    objective: 'Dimensionar conexões e transações pela capacidade do banco e comprovar comportamento sob saturação.',
    prerequisites: ['Módulos 4, 7 e 11', 'Backend Java ou equivalente', 'Latência e Little’s Law'],
    problem: 'Mais threads e conexões amplificam contenção, memória e fila até o banco falhar por sobrecarga.',
    concepts: ['Connection lifecycle', 'Pool como bulkhead', 'Autocommit e transaction scope', 'Timeouts em camadas', 'Prepared statements e batching'],
    internals: ['Conexão consome recursos no cliente e servidor mesmo ociosa.', 'Pool limita concorrência e transforma excesso em espera controlada.', 'Timeout da requisição não cancela automaticamente query e transação.'],
    useWhen: ['Dimensione pool por throughput, latência e capacidade.', 'Defina statement/lock/transaction timeout.', 'Propague cancelamento e feche recursos deterministamente.'],
    avoidWhen: ['Não iguale pool ao número de threads.', 'Não abra transação no controller inteiro.', 'Não aumente pool para corrigir query lenta.'],
    contrast: {
      bad: 'Pool de 200 conexões em cada réplica para um banco que sustenta 80 concorrentes.',
      good: 'Orçamento global de conexões, fila limitada, timeouts coerentes e load test até saturação.'
    },
    tradeoffs: ['Pool pequeno cria espera e protege banco.', 'Pool grande reduz espera inicial e amplia colapso.', 'Batching reduz round trips e aumenta tamanho/tempo da transação.'],
    production: 'Autoscaling da API multiplica pools e esgota max_connections; o desenho impõe orçamento por instância e admission control.',
    risks: ['Connection leak', 'Timeout desalinhado', 'Pool multiplicado por pods', 'Transação órfã após cancelamento'],
    checklist: ['Qual é o orçamento global?', 'Timeouts formam uma hierarquia?', 'Query é cancelada?', 'Leaks são detectados?', 'Carga mede espera do pool e saturação do banco?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que pool maior pode piorar throughput?', expected: 'Mais concorrência aumenta contenção, troca de contexto, memória e I/O; após saturar, a fila apenas muda de lugar.' },
      { level: 'Sênior/Expert', question: 'Como dimensionar conexões em autoscaling?', expected: 'Partir da capacidade do banco e reservar orçamento total, dividindo por réplicas com margem e admission control.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Medir aquisição e uso de conexão.', evidence: 'Métricas de active, idle, pending e tempo.' },
      { level: 'Aplicado', task: 'Saturar pool com query lenta.', evidence: 'Curva de throughput, p99 e fila.' },
      { level: 'Sênior/Expert', task: 'Definir orçamento para múltiplas réplicas.', evidence: 'Modelo de capacidade e teste de escala.' }
    ],
    challenge: 'Manter SLO da API durante degradação do banco sem criar retry storm.',
    book: 'Designing Data-Intensive Applications, reliability; SQL Performance Explained.',
    complements: [{ label: 'HikariCP — About Pool Sizing', url: 'https://github.com/brettwooldridge/HikariCP/wiki/About-Pool-Sizing' }, pgDocs('PostgreSQL 18 — Client Connection Defaults', 'runtime-config-client.html')],
    exampleFile: '../../examples/database-senior/06-operations-runbook.md'
  }),
  defineModule({
    number: 13,
    part: 'integracao',
    id: 'orm-jpa',
    title: 'ORM sem SQL invisível',
    level: 'Intermediário',
    objective: 'Detectar N+1, fetch excessivo e conflito de escrita no ORM mantendo contrato e teste de regressão.',
    prerequisites: ['Módulos 1–12', 'JPA/Hibernate básico', 'Testes de integração'],
    problem: 'Abstração de objetos esconde SQL, cardinalidade e flush; a API passa teste unitário e colapsa com dados reais.',
    concepts: ['Persistence context e identity map', 'Dirty checking e flush', 'Lazy/eager fetching', 'N+1 e fetch plans', 'Optimistic locking'],
    internals: ['A unidade de persistência sincroniza mudanças no flush, que pode ocorrer antes do commit.', 'Acesso lazy dispara I/O quando a associação é tocada dentro do contexto.', 'Join fetch de várias coleções pode criar produto cartesiano e duplicação em memória.'],
    useWhen: ['Use ORM para unidade de trabalho e agregados transacionais.', 'Escolha fetch plan por caso de uso.', 'Conte queries em testes críticos.'],
    avoidWhen: ['Não exponha entidade como DTO.', 'Não use EAGER global para corrigir lazy.', 'Não pagine join fetch de coleção sem entender o SQL.'],
    contrast: {
      bad: 'Open Session in View deixa serialização disparar consultas imprevisíveis.',
      good: 'Caso de uso define projeção/fetch, fecha transação e testa número de queries e cardinalidade.'
    },
    tradeoffs: ['ORM acelera CRUD e esconde custo.', 'Projeção otimiza leitura e duplica mapeamento.', 'Batch fetch reduz round trips e ainda carrega mais dados.'],
    production: 'Lista de 100 pedidos dispara 201 consultas; a correção compara projection, entity graph e batch sem alterar resposta.',
    risks: ['N+1', 'Cartesian explosion', 'Flush inesperado', 'Lost update sem @Version'],
    checklist: ['O SQL foi observado?', 'Número de queries tem teste?', 'Fetch atende o caso de uso?', 'Transação termina antes da serialização?', 'Conflito de versão é tratado?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que causa N+1?', expected: 'Uma consulta carrega N entidades e o acesso a uma associação executa uma consulta adicional para cada uma.' },
      { level: 'Sênior/Expert', question: 'Por que join fetch não é correção universal?', expected: 'Pode multiplicar linhas, impedir paginação correta, carregar grafos demais e combinar mal várias coleções.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Reproduzir N+1 e contar SQL.', evidence: 'Log e teste que falha acima do limite.' },
      { level: 'Aplicado', task: 'Comparar três fetch plans.', evidence: 'Queries, bytes, memória e latência.' },
      { level: 'Sênior/Expert', task: 'Reproduzir conflito com @Version.', evidence: 'Teste concorrente e resposta de produto.' }
    ],
    challenge: 'Projetar leitura paginada de agregado sem N+1 nem produto cartesiano.',
    book: 'SQL Performance Explained; Database Internals.',
    complements: [{ label: 'Hibernate ORM — User Guide', url: 'https://docs.jboss.org/hibernate/orm/current/userguide/html_single/Hibernate_User_Guide.html' }],
    exampleFile: '../../examples/database-senior/03-explain-and-indexes.sql'
  }),
  defineModule({
    number: 14,
    part: 'integracao',
    id: 'cache-redis',
    title: 'Cache e estruturas Redis',
    level: 'Intermediário',
    objective: 'Implementar cache com validade, invalidação, proteção contra stampede e limite de memória medidos.',
    prerequisites: ['Módulos 5, 10 e 12', 'Consistência eventual', 'Redis básico'],
    problem: 'Cache é adicionado para esconder query lenta e cria dado obsoleto, avalanche, hot key e falha maior que a origem.',
    concepts: ['Cache-aside e write-through', 'TTL, freshness e staleness', 'Eviction LRU/LFU', 'Stampede e single-flight', 'Hashes, sets, sorted sets e streams'],
    internals: ['TTL expira validade; eviction remove por pressão de memória e são mecanismos diferentes.', 'Hot key concentra CPU/rede numa única partição ou nó.', 'RDB e AOF oferecem perfis distintos de persistência; cache pode deliberadamente não persistir.'],
    useWhen: ['Cacheie leitura cara e repetida com staleness aceitável.', 'Escolha tipo Redis pelo acesso.', 'Defina maxmemory e política de eviction.'],
    avoidWhen: ['Não use cache como fonte de verdade por acidente.', 'Não cacheie antes de otimizar acesso primário.', 'Não use lock distribuído sem modelo de falha.'],
    contrast: {
      bad: 'TTL aleatório, memória ilimitada e fallback simultâneo de milhares de requests.',
      good: 'Freshness budget, jitter, single-flight, negative caching e métricas de hit/stale/eviction.'
    },
    tradeoffs: ['Cache reduz latência e adiciona estado e invalidação.', 'TTL curto melhora frescor e aumenta carga na origem.', 'Persistência reduz perda e aumenta I/O/recuperação.'],
    production: 'Expiração simultânea de catálogo cria stampede; jitter e coalescência limitam recarga e o banco permanece abaixo do teto.',
    risks: ['Cache stampede', 'Hot key', 'Eviction inesperada', 'Keyspace sem limite'],
    checklist: ['Qual staleness é aceitável?', 'Como invalida?', 'Há proteção contra stampede?', 'maxmemory e eviction estão definidos?', 'Falha do Redis degrada com segurança?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'TTL e eviction são a mesma coisa?', expected: 'Não; TTL expira por tempo, eviction remove chaves por pressão de memória segundo uma política.' },
      { level: 'Sênior/Expert', question: 'Como evitar stampede?', expected: 'Coalescer recargas, usar jitter, stale-while-revalidate, limites e proteger a origem com fila/bulkhead.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Implementar cache-aside com TTL.', evidence: 'Teste de hit, miss e expiração.' },
      { level: 'Aplicado', task: 'Simular stampede e aplicar single-flight.', evidence: 'Carga na origem antes/depois.' },
      { level: 'Sênior/Expert', task: 'Escolher eviction sob limite real.', evidence: 'Memória, hit ratio, evictions e ADR.' }
    ],
    challenge: 'Projetar cache multi-tenant que impeça noisy neighbor e preserve frescor.',
    book: 'Designing Data-Intensive Applications, caches e dados derivados; Seven Databases in Seven Weeks, Redis.',
    complements: [{ label: 'Redis — Data types', url: 'https://redis.io/docs/latest/develop/data-types/' }, { label: 'Redis — Key eviction', url: 'https://redis.io/docs/latest/develop/reference/eviction/' }],
    exampleFile: '../../examples/database-senior/05-polyglot-patterns.md'
  }),
  defineModule({
    number: 15,
    part: 'integracao',
    id: 'outbox-cdc',
    title: 'Outbox, CDC e consistência entre serviços',
    level: 'Avançado',
    objective: 'Publicar mudanças sem dual-write e comprovar ordenação, idempotência, lag e recuperação do consumidor.',
    prerequisites: ['Módulos 4, 10–14', 'Mensageria', 'Transações locais'],
    problem: 'Gravar no banco e publicar mensagem em duas operações deixa dado sem evento ou evento sem dado durante falha parcial.',
    concepts: ['Transactional outbox', 'Logical decoding e CDC', 'At-least-once delivery', 'Idempotência e deduplicação', 'Ordenação por chave'],
    internals: ['Outbox grava estado e evento na mesma transação local.', 'CDC lê mudanças confirmadas no log e mantém offset/LSN.', 'Entrega pode repetir; efeito único depende de consumidor idempotente e chave estável.'],
    useWhen: ['Use outbox para efeito assíncrono confiável.', 'Particione por identidade que exige ordem.', 'Monitore lag e retenção do log.'],
    avoidWhen: ['Não faça dual-write ingênuo.', 'Não prometa exactly-once ponta a ponta.', 'Não use CDC sem ownership de schema/evento.'],
    contrast: {
      bad: 'Commit no banco e publish Kafka em sequência com retry independente.',
      good: 'Transação grava outbox; relay publica; consumidor deduplica e reconcilia por identidade.'
    },
    tradeoffs: ['Outbox evita lacuna e adiciona relay/limpeza.', 'CDC desacopla aplicação e acopla ao log/schema.', 'Deduplicação aumenta estado e simplifica efeito repetido.'],
    production: 'Conector para horas, WAL cresce e eventos retomam duplicados; runbook protege disco, offset e reconciliação.',
    risks: ['Replication slot acumulando WAL', 'Evento sem versão', 'Consumidor não idempotente', 'Ordem global desnecessária'],
    checklist: ['Estado e outbox são atômicos?', 'Evento tem id e versão?', 'Consumidor deduplica?', 'Lag e WAL têm alerta?', 'Existe replay e reconciliação?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Que falha o outbox resolve?', expected: 'A inconsistência entre commit do dado e publicação do evento em recursos diferentes.' },
      { level: 'Sênior/Expert', question: 'Por que CDC não dá exactly-once ao negócio?', expected: 'Conector e broker podem repetir; o efeito final depende de idempotência, deduplicação e transação do consumidor.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Criar tabela outbox na mesma transação do agregado.', evidence: 'DDL e teste de rollback atômico.' },
      { level: 'Aplicado', task: 'Consumir evento com deduplicação.', evidence: 'Teste com duplicatas e reordenação.' },
      { level: 'Sênior/Expert', task: 'Simular parada do conector e retomada.', evidence: 'Lag, WAL, replay e runbook.' }
    ],
    challenge: 'Migrar dual-write existente para outbox sem perder eventos durante a transição.',
    book: 'Designing Data-Intensive Applications, stream processing; Database Internals, replication.',
    complements: [{ label: 'Debezium — Outbox Event Router', url: 'https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html' }, { label: 'Debezium — PostgreSQL connector', url: 'https://debezium.io/documentation/reference/stable/connectors/postgresql.html' }],
    exampleFile: '../../examples/database-senior/05-polyglot-patterns.md'
  }),
  defineModule({
    number: 16,
    part: 'distribuidos',
    id: 'mongodb-modelagem',
    title: 'MongoDB e modelagem por atomicidade',
    level: 'Intermediário',
    objective: 'Modelar documentos por padrões de acesso e atomicidade e medir índices, tamanho e atualização.',
    prerequisites: ['Módulos 1–5 e 15', 'JSON e agregação', 'Consistência eventual'],
    problem: 'Modelo relacional é copiado para coleções ou tudo é embutido, causando joins na aplicação, documentos ilimitados e updates custosos.',
    concepts: ['Embedding vs referencing', 'Atomicidade por documento', 'Schema validation', 'Aggregation pipeline', 'Shard key e índices'],
    internals: ['Operação em um documento é atômica; bom modelo agrupa dados alterados juntos.', 'Documento possui limite e arrays sem limite comprometem tamanho e atualização.', 'Shard key determina distribuição e roteamento; baixa cardinalidade ou monotonicidade cria hotspot.'],
    useWhen: ['Embuta dados lidos e alterados juntos com limite.', 'Referencie entidades independentes ou de crescimento ilimitado.', 'Valide schema mesmo em modelo flexível.'],
    avoidWhen: ['Não replique tabelas 1:1.', 'Não use array ilimitado.', 'Não escolha Mongo apenas para evitar migrations.'],
    contrast: {
      bad: 'Pedido referencia cada item em coleção separada e a API faz joins em memória.',
      good: 'Documento contém snapshot limitado do pedido, referências só para entidades independentes e índice segue acesso.'
    },
    tradeoffs: ['Embedding reduz reads e duplica dados.', 'Referência reduz duplicação e aumenta round trips/lookup.', 'Transação multidocumento preserva atomicidade e custa mais que bom modelo local.'],
    production: 'Histórico ilimitado faz documento crescer; o redesenho separa buckets e mantém resumo atômico.',
    risks: ['Documento ilimitado', 'Shard key hotspot', 'Índice multikey explosivo', 'Transação como substituto de modelagem'],
    checklist: ['Qual é a unidade atômica?', 'Documento tem limite de crescimento?', 'Acesso cabe nos índices?', 'Duplicação tem sincronização?', 'Shard key distribui e roteia?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Quando embutir em vez de referenciar?', expected: 'Quando dados são lidos/alterados juntos, pertencem à mesma unidade e possuem crescimento limitado.' },
      { level: 'Sênior/Expert', question: 'Por que transação multidocumento não corrige modelo ruim?', expected: 'Ela adiciona coordenação e custo; modelagem que alinha atomicidade ao documento evita a transação em muitos casos.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Modelar pedido com snapshots e validação.', evidence: 'JSON Schema e casos inválidos.' },
      { level: 'Aplicado', task: 'Comparar embedding e referência numa consulta.', evidence: 'Pipeline, índices e latência.' },
      { level: 'Sênior/Expert', task: 'Escolher shard key para workload multi-tenant.', evidence: 'Distribuição, roteamento e análise de hotspot.' }
    ],
    challenge: 'Evoluir um array ilimitado em buckets sem interromper leituras antigas.',
    book: 'MongoDB: The Definitive Guide, modelagem e sharding; Seven Databases in Seven Weeks.',
    complements: [{ label: 'MongoDB — Data Modeling', url: 'https://www.mongodb.com/docs/manual/data-modeling/' }, { label: 'MongoDB — Sharding', url: 'https://www.mongodb.com/docs/manual/sharding/' }],
    exampleFile: '../../examples/database-senior/05-polyglot-patterns.md'
  }),
  defineModule({
    number: 17,
    part: 'distribuidos',
    id: 'dynamodb-acesso',
    title: 'DynamoDB e modelagem por access pattern',
    level: 'Intermediário',
    objective: 'Projetar chaves e índices para access patterns explícitos e comprovar capacidade, consistência e distribuição.',
    prerequisites: ['Módulos 5, 10 e 16', 'Hashing e particionamento', 'AWS básico'],
    problem: 'Tabela é criada como relacional, depois Scan e GSIs são adicionados para descobrir acessos em produção.',
    concepts: ['Partition e sort key', 'Single-table design', 'GSI e LSI', 'RCU/WCU e on-demand', 'Consistent vs eventually consistent reads'],
    internals: ['Partition key distribui itens e capacidade; chave quente concentra throughput.', 'Sort key ordena itens da mesma partição e habilita range/prefix queries.', 'GSI mantém projeção assíncrona e possui capacidade/custo próprios.'],
    useWhen: ['Liste access patterns antes do schema.', 'Use composite keys para agrupar e ordenar.', 'Distribua escrita de alta cardinalidade.'],
    avoidWhen: ['Não use Scan no fluxo normal.', 'Não crie GSI sem consumidor e projeção.', 'Não force ad hoc analytics no caminho transacional.'],
    contrast: {
      bad: 'Uma tabela por entidade e Scan filtrado para cada endpoint.',
      good: 'Tabela deriva PK/SK e GSIs de consultas enumeradas, com distribuição e custo testados.'
    },
    tradeoffs: ['Single-table reduz round trips e aumenta complexidade de design.', 'GSI habilita novo acesso e duplica armazenamento/escrita.', 'Strong consistency simplifica leitura e custa capacidade/limita opções.'],
    production: 'Tenant gigante cria hot partition; salting controlado e agregação preservam consultas sem espalhar tudo.',
    risks: ['Scan', 'Hot partition', 'GSI superprojetado', 'Item grande'],
    checklist: ['Todos os access patterns estão enumerados?', 'PK distribui carga?', 'SK atende range e ordem?', 'Consistência requerida está explícita?', 'Custo foi estimado e medido?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual o papel da partition key?', expected: 'Ela participa da identidade e determina distribuição física/capacidade dos itens.' },
      { level: 'Sênior/Expert', question: 'Como corrigir hot key sem destruir o acesso?', expected: 'Introduzir sharding/salting consciente, distribuir escrita e manter índice/agregação que reconstrói a consulta necessária.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Enumerar acessos e desenhar PK/SK.', evidence: 'Tabela de access patterns e exemplos de itens.' },
      { level: 'Aplicado', task: 'Adicionar GSI para consulta inversa.', evidence: 'Projeção mínima e teste sem Scan.' },
      { level: 'Sênior/Expert', task: 'Simular chave quente e redistribuir.', evidence: 'Métricas de throttling e custo antes/depois.' }
    ],
    challenge: 'Projetar histórico temporal multi-tenant com retenção, idempotência e custo previsível.',
    book: 'Designing Data-Intensive Applications, partitioning; Seven Databases in Seven Weeks, modelos chave-valor.',
    complements: [{ label: 'Amazon DynamoDB — Developer Guide', url: 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html' }],
    exampleFile: '../../examples/database-senior/05-polyglot-patterns.md'
  }),
  defineModule({
    number: 18,
    part: 'distribuidos',
    id: 'consistencia-distribuida',
    title: 'Replicação, particionamento e consistência',
    level: 'Avançado',
    objective: 'Comparar modelos distribuídos sob falha e selecionar garantias pelo impacto observável no negócio.',
    prerequisites: ['Módulos 4, 10, 15–17', 'Redes e falha parcial', 'Mensageria'],
    problem: 'CAP é usado como slogan e sistemas prometem consistência, disponibilidade e baixa latência sem definir operação ou falha.',
    concepts: ['Linearizability', 'Causal e eventual consistency', 'Quorum e read repair', 'Leader, multi-leader e leaderless', 'CAP e PACELC'],
    internals: ['Partição de rede força decisão sobre respostas que não podem confirmar o estado remoto.', 'Quorum sobreposto ajuda a ler versões recentes, mas relógios, sloppy quorum e conflitos exigem detalhes.', 'Replicação assíncrona introduz lag e possíveis leituras obsoletas após escrita.'],
    useWhen: ['Defina garantia por operação.', 'Use idempotência e version vector/versão quando conflito existe.', 'Projete reconciliação como fluxo de produto.'],
    avoidWhen: ['Não descreva banco inteiro como CP ou AP.', 'Não assuma relógio de parede como ordem total.', 'Não esconda staleness do usuário quando afeta decisão.'],
    contrast: {
      bad: 'Arquitetura promete “eventual consistency” sem janela, conflito ou reconciliação.',
      good: 'Cada comando e consulta declara garantia, falha tolerada, staleness, compensação e SLO.'
    },
    tradeoffs: ['Síncrono reduz perda e aumenta latência/indisponibilidade.', 'Assíncrono melhora disponibilidade e admite lag/perda no failover.', 'Conflito automático escala e pode violar semântica do negócio.'],
    production: 'Após failover, usuário não vê a própria escrita; sessão usa token de versão e roteamento compatível com read-your-writes.',
    risks: ['CAP como escolha de produto', 'Last-write-wins com relógio', 'Conflito silencioso', 'Failover sem RPO'],
    checklist: ['Qual operação exige linearização?', 'Qual staleness é tolerável?', 'Como detectar conflito?', 'Quem reconcilia?', 'Falha de rede foi testada?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que CAP afirma durante partição?', expected: 'Que não é possível garantir simultaneamente consistência linearizável e disponibilidade de todas as requisições.' },
      { level: 'Sênior/Expert', question: 'Por que quorum R+W>N não encerra o desenho?', expected: 'Implementação, membros efetivos, relógios, reparo, conflitos e falhas podem impedir a garantia simplificada.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Classificar garantias de cinco operações.', evidence: 'Matriz operação, falha e impacto.' },
      { level: 'Aplicado', task: 'Simular lag e leitura obsoleta.', evidence: 'Timeline e estratégia read-your-writes.' },
      { level: 'Sênior/Expert', task: 'Projetar reconciliação de conflito.', evidence: 'Algoritmo, casos e decisão de produto.' }
    ],
    challenge: 'Defender o modelo de consistência de um ledger global durante perda de região.',
    book: 'Designing Data-Intensive Applications, replication, partitioning e consistency; Database Internals, distributed systems.',
    complements: [{ label: 'Jepsen — Consistency Models', url: 'https://jepsen.io/consistency' }],
    exampleFile: '../../examples/database-senior/05-polyglot-patterns.md'
  }),
  defineModule({
    number: 19,
    part: 'distribuidos',
    id: 'seguranca-governanca',
    title: 'Segurança, privacidade e governança',
    level: 'Avançado',
    objective: 'Aplicar menor privilégio, proteção, auditoria, retenção e descarte com testes verificáveis.',
    prerequisites: ['Módulos 1–18', 'Autenticação e autorização', 'Classificação de dados'],
    problem: 'Credencial compartilhada e privilégios amplos tornam vazamento, fraude e auditoria impossíveis de conter.',
    concepts: ['Least privilege e roles', 'Row-level security', 'Criptografia em trânsito e repouso', 'Mascaramento e tokenização', 'Retenção, lineage e auditoria'],
    internals: ['Permissão deve separar migração, aplicação, leitura e operação.', 'RLS adiciona predicado de política por usuário/role e precisa teste contra bypass.', 'Criptografia de storage não protege consulta autorizada indevidamente.'],
    useWhen: ['Separe identidades por workload.', 'Classifique dado e aplique retenção por propósito.', 'Audite operações privilegiadas e acesso sensível.'],
    avoidWhen: ['Não compartilhe superuser com aplicação.', 'Não registre segredo ou dado pessoal em log.', 'Não trate anonimização reversível como anonimização real.'],
    contrast: {
      bad: 'Todos os serviços usam owner do schema e dump de produção circula em desenvolvimento.',
      good: 'Roles mínimas, dados sintéticos/mascarados, rotação, auditoria e restauração com controles.'
    },
    tradeoffs: ['RLS centraliza proteção e aumenta complexidade de política/plano.', 'Tokenização reduz exposição e adiciona serviço/chaves.', 'Auditoria amplia rastreabilidade e custo/volume.'],
    production: 'Vulnerabilidade de IDOR alcança outro tenant; RLS atua como defesa adicional e o teste confirma isolamento.',
    risks: ['Owner na aplicação', 'Backup sem criptografia', 'PII em log', 'Política sem teste de bypass'],
    checklist: ['Quem pode ler/escrever cada classe?', 'Aplicação é owner?', 'Backups e réplicas têm proteção?', 'Retenção e descarte são executáveis?', 'Auditoria detecta acesso anômalo?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Criptografia em repouso impede vazamento por SQL injection?', expected: 'Não; o banco descriptografa para uma sessão autorizada. É preciso autorização, parametrização e menor privilégio.' },
      { level: 'Sênior/Expert', question: 'Qual o risco de RLS em multi-tenancy?', expected: 'Políticas incompletas, bypass por owner/role privilegiada e efeitos em plano; exige identidades, testes e observabilidade.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Criar roles separadas para app, migration e leitura.', evidence: 'Matriz e testes de permissão negada.' },
      { level: 'Aplicado', task: 'Implementar RLS por tenant.', evidence: 'Testes de isolamento e bypass.' },
      { level: 'Sênior/Expert', task: 'Executar política de retenção e deleção.', evidence: 'Job, auditoria, backup e prova de descarte.' }
    ],
    challenge: 'Desenhar resposta a vazamento de credencial com rotação sem indisponibilidade.',
    book: 'SQL Antipatterns, application development; Designing Data-Intensive Applications, integrity.',
    complements: [pgDocs('PostgreSQL 18 — Row Security Policies', 'ddl-rowsecurity.html'), { label: 'OWASP — Database Security Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Database_Security_Cheat_Sheet.html' }],
    exampleFile: '../../examples/database-senior/06-operations-runbook.md'
  }),
  defineModule({
    number: 20,
    part: 'distribuidos',
    id: 'observabilidade-capacidade-incidentes',
    title: 'Observabilidade, capacidade e incidentes',
    level: 'Sênior/Expert',
    objective: 'Operar SLOs de dados, detectar saturação, responder a incidente e validar recuperação sem perda silenciosa.',
    prerequisites: ['Módulos 1–19', 'Métricas, logs e tracing', 'Load test e resposta a incidente'],
    problem: 'Dashboard observa CPU média, mas não mostra fila de conexão, locks, lag, WAL, cache, p99 por query ou recuperação.',
    concepts: ['Golden signals do banco', 'Wait events e query fingerprint', 'Capacity envelope', 'SLO, error budget e burn rate', 'Runbook, game day e postmortem'],
    internals: ['Latência emerge de filas em pool, locks, I/O, CPU e rede; média esconde cauda.', 'Fingerprint agrega consultas equivalentes e separa regressão de volume.', 'Capacidade é um limite multidimensional e deve ser testada antes do pico.'],
    useWhen: ['Monitore p95/p99 por operação e fingerprint.', 'Correlacione app, pool, banco e host.', 'Teste restore e failover em game day.'],
    avoidWhen: ['Não alerte em CPU isolada.', 'Não use dashboard sem ação/runbook.', 'Não faça tuning durante incidente sem hipótese e rollback.'],
    contrast: {
      bad: 'Alerta “database slow” abre war room sem query, wait ou impacto.',
      good: 'SLO queimando aponta fingerprint, fila, wait dominante, mudança recente e primeira ação reversível.'
    },
    tradeoffs: ['Mais telemetria acelera diagnóstico e consome recursos/dados sensíveis.', 'Threshold sensível reduz tempo de detecção e aumenta ruído.', 'Headroom custa capacidade ociosa e compra resiliência.'],
    production: 'Campanha dobra carga; filas crescem antes de CPU. Admission control e degradação protegem write path e SLO crítico.',
    risks: ['Média sem percentil', 'Alta cardinalidade', 'Query text com PII', 'Runbook nunca ensaiado'],
    checklist: ['SLO mede experiência?', 'Há métricas de pool, locks, WAL e lag?', 'Queries são agregadas com segurança?', 'Envelope de capacidade é conhecido?', 'Game day e restore foram cronometrados?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Quais sinais observar numa query lenta?', expected: 'Latência/percentis, frequência, plano, rows, buffers, waits, locks e impacto no pool/host.' },
      { level: 'Sênior/Expert', question: 'Como separar falta de capacidade de regressão?', expected: 'Comparar carga e perfil por fingerprint, planos, waits e curva throughput-latência contra baseline conhecido.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Montar painel mínimo de banco e pool.', evidence: 'Dashboard com significado e runbook por alerta.' },
      { level: 'Aplicado', task: 'Produzir regressão de p99 e localizar fingerprint.', evidence: 'Trace, plano, causa e correção.' },
      { level: 'Sênior/Expert', task: 'Executar game day de saturação e restore.', evidence: 'Timeline, SLO, RTO/RPO e postmortem.' }
    ],
    challenge: 'Defender o limite operacional e o plano de crescimento para 10× de carga com custo e riscos.',
    book: 'Database Internals; Designing Data-Intensive Applications, reliability e operability.',
    complements: [pgDocs('PostgreSQL 18 — Monitoring Database Activity', 'monitoring-stats.html'), pgDocs('PostgreSQL 18 — Statistics Collector', 'monitoring-stats.html')],
    exampleFile: '../../examples/database-senior/06-operations-runbook.md'
  })
]);

export const bancosAssessment = Object.freeze({
  levels: Object.freeze([
    Object.freeze({
      level: 'Fundamentos',
      expected: 'Modela fatos, escreve SQL correto e protege invariantes com tipos, constraints e transações.',
      evidence: 'Schema, dataset, consultas e testes de restrição reproduzíveis.',
      redFlags: 'Depende de validação manual ou da aplicação para integridade básica.'
    }),
    Object.freeze({
      level: 'Operacional',
      expected: 'Lê planos, investiga locks e executa migrations, backup e restore com procedimento.',
      evidence: 'Planos comentados, métricas, migration compatível e restore cronometrado.',
      redFlags: 'Cria índice por intuição ou considera arquivo de backup suficiente.'
    }),
    Object.freeze({
      level: 'Pleno forte',
      expected: 'Integra ORM, pool, cache e eventos sem ocultar custo, capacidade ou consistência.',
      evidence: 'Testes de query count, carga, outbox idempotente e política de cache.',
      redFlags: 'Aumenta pool, usa EAGER ou adiciona cache antes de diagnosticar.'
    }),
    Object.freeze({
      level: 'Sênior',
      expected: 'Escolhe modelo e garantias sob falha, conduz incidentes e evolui schema sem indisponibilidade.',
      evidence: 'ADRs, experimentos, game day, SLOs e reconciliação demonstrada.',
      redFlags: 'Usa CAP, NoSQL ou sharding como rótulos sem operação e métrica.'
    }),
    Object.freeze({
      level: 'Expert',
      expected: 'Explica internals, antecipa limites e defende evolução com segurança, custo e reversibilidade.',
      evidence: 'Review técnico, envelope de capacidade, estratégia de falha regional e mentoria registrada.',
      redFlags: 'Otimização local sem considerar sistema, pessoas, dados e recuperação.'
    })
  ]),
  caseStudies: Object.freeze([
    Object.freeze({
      id: 'caso-query-regrediu',
      title: 'Query regrediu após crescimento por tenant',
      scenario: 'O p99 passou de 80 ms para 4 s somente para três tenants. CPU média segue normal e o plano varia entre ambientes.',
      constraints: ['Sem indisponibilidade', 'Contrato da API preservado', 'Uma mudança por experimento'],
      decisions: ['Separar skew, estatística, plano genérico e cache', 'Comparar rows estimadas/reais e buffers', 'Criar guardrail para perfis extremos'],
      deliverables: ['Árvore de hipóteses', 'Planos e baseline', 'Correção reversível', 'Teste de regressão']
    }),
    Object.freeze({
      id: 'caso-migration-bloqueia',
      title: 'Migration bloqueia uma tabela crítica',
      scenario: 'Uma release precisa tornar obrigatória uma coluna em tabela com centenas de milhões de linhas e deploy gradual.',
      constraints: ['Versões N e N-1 coexistem', 'Backfill leva horas', 'Rollback não pode perder dado novo'],
      decisions: ['Expand-contract', 'Lotes com checkpoint e throttle', 'Gate observável antes de constraint/remoção'],
      deliverables: ['Plano por release', 'Queries de monitoramento', 'Teste de compatibilidade', 'Rollback/roll-forward']
    }),
    Object.freeze({
      id: 'caso-deadlock',
      title: 'Deadlocks após novo job financeiro',
      scenario: 'API e job atualizam as mesmas contas em ordens diferentes. Retry elevou carga e repetiu efeitos externos.',
      constraints: ['Integridade financeira', 'Efeito externo não pode duplicar', 'Janela do job limitada'],
      decisions: ['Reconstruir grafo de locks', 'Ordenar aquisição', 'Separar efeito via outbox', 'Limitar retry'],
      deliverables: ['Interleaving reproduzível', 'Correção', 'Métrica de deadlock', 'Runbook']
    }),
    Object.freeze({
      id: 'caso-cache-stampede',
      title: 'Cache stampede derruba o banco',
      scenario: 'Milhares de chaves expiram juntas; Redis permanece saudável, mas a origem excede conexões e SLO.',
      constraints: ['Freshness de dois minutos', 'Falha do cache deve degradar', 'Sem duplicar fonte de verdade'],
      decisions: ['Jitter e single-flight', 'Admission control na origem', 'Stale-while-revalidate e negative cache'],
      deliverables: ['Teste de carga', 'Política de validade', 'Métricas antes/depois', 'Plano de falha']
    }),
    Object.freeze({
      id: 'caso-perda-regiao',
      title: 'Perda regional e recuperação de dados',
      scenario: 'A região primária fica indisponível após minutos de lag. Escritas precisam retornar e divergências devem ser reconciliadas.',
      constraints: ['RPO aprovado de 30 s', 'RTO de 20 min', 'Operações financeiras exigem consistência forte'],
      decisions: ['Separar operações por garantia', 'Promover com ponto de corte conhecido', 'Reconciliar escritas e validar integridade'],
      deliverables: ['Timeline de decisão', 'Procedimento de promoção/failback', 'Relatório de perda', 'Postmortem']
    })
  ]),
  projects: Object.freeze([
    Object.freeze({
      id: 'db-ledger-core',
      title: 'Ledger relacional verificável',
      objective: 'Construir o núcleo transacional de contas, lançamentos e saldos com invariantes fortes.',
      evolves: null,
      stages: ['Modelar fatos e constraints', 'Criar dataset e consultas de reconciliação', 'Reproduzir concorrência', 'Adicionar testes de propriedades'],
      acceptance: ['Saldo deriva de lançamentos imutáveis', 'Dupla despesa é rejeitada sob concorrência', 'Schema nasce por migrations', 'Testes rodam em banco descartável'],
      seniorSignal: 'A implementação explica por que cada invariância está no banco, na aplicação ou em ambos.'
    }),
    Object.freeze({
      id: 'db-ledger-scale',
      title: 'Ledger sob carga e evolução',
      objective: 'Evoluir o ledger com API, pool dimensionado, planos estáveis, migration compatível e recuperação.',
      evolves: 'db-ledger-core',
      stages: ['Adicionar API e observabilidade', 'Definir SLO e baseline', 'Otimizar consultas por plano', 'Executar expand-contract', 'Automatizar backup e restore'],
      acceptance: ['p99 e throughput têm baseline reproduzível', 'Pool respeita orçamento global', 'Migration funciona com versões N/N-1', 'Restore cumpre RTO/RPO medidos'],
      seniorSignal: 'O relatório conecta aplicação, pool, planner, storage e operação sem tuning por palpite.'
    }),
    Object.freeze({
      id: 'db-ledger-polyglot',
      title: 'Ledger orientado a eventos e leitura poliglota',
      objective: 'Evoluir o mesmo produto com outbox/CDC, projeção MongoDB, cache Redis e operação sob falha.',
      evolves: 'db-ledger-scale',
      stages: ['Adicionar outbox transacional', 'Consumir com idempotência', 'Projetar read model documental', 'Aplicar cache com freshness', 'Executar game day e reconciliação'],
      acceptance: ['Nenhum dual-write', 'Replay não duplica efeito', 'Staleness e lag possuem SLO', 'Cache pode falhar sem corrupção', 'Game day produz postmortem e ação preventiva'],
      seniorSignal: 'A tecnologia adicional resolve acesso medido e cada cópia declara fonte, validade e reconciliação.'
    })
  ]),
  completion: Object.freeze([
    'Concluir os 20 módulos com ao menos um exercício aplicado e evidência por módulo.',
    'Executar o schema, as migrations e os testes em ambiente descartável a partir de uma única instrução.',
    'Explicar MVCC, WAL, planner, índices, locks, replicação e consistência sem depender de notas.',
    'Diagnosticar uma regressão de consulta e um incidente de concorrência com artefatos reproduzíveis.',
    'Evoluir o projeto db-ledger-core → db-ledger-scale → db-ledger-polyglot preservando dados, testes e decisões.',
    'Demonstrar backup/restore, rollback/roll-forward, observabilidade e resposta a game day dentro dos SLOs.',
    'Registrar uma URL HTTP(S) de evidência validada e concluir a revisão D30 antes de marcar Dominado.'
  ])
});
