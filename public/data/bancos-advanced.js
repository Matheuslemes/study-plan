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
    authors: 'Martin Kleppmann e Chris Riccomini',
    edition: '2ª edição',
    year: 2026,
    language: 'Inglês',
    pages: 898,
    path: '/pdfs/livros-db/designing-data-intensive-applications-2e.pdf',
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

/*
 * Baseline tecnológico. Duas mudanças de 2025–2026 alteram respostas que eram
 * verdadeiras antes: o fork do Redis (Valkey virou padrão nos serviços gerenciados)
 * e a busca vetorial passando a ser carga do banco operacional, não de um serviço
 * separado. Ambas são tratadas nos módulos, não escondidas aqui.
 */
export const bancosTechnologyBaseline = [
  { technology: 'PostgreSQL', baseline: '18.x', status: 'Corrente', note: 'Série 18 lançada em set/2025; a 19 entra em GA agora. O acervo tem o livro de internals da 14 — conferir diferenças no manual da 18.' },
  { technology: 'PostgreSQL — I/O assíncrono', baseline: 'novidade da 18', status: 'Ajustar com medição', note: 'O novo subsistema de I/O muda o comportamento de leitura sequencial. Refazer baselines de desempenho ao migrar.' },
  { technology: 'Redis', baseline: '8.x (RSALv2 / SSPLv1 / AGPLv3)', status: 'Licença mudou em 2024', note: 'Deixou de ser BSD. Em 2025 o Redis 8 acrescentou AGPLv3 como terceira opção — verifique com o jurídico antes de assumir uso livre.' },
  { technology: 'Valkey', baseline: '9.x (GA out/2025)', status: 'Padrão nos gerenciados', note: 'Fork BSD do Redis sob a Linux Foundation. Default em novas instâncias de AWS ElastiCache e Google Memorystore. Compatível com o protocolo; migração costuma ser troca de endpoint. Módulo 14.' },
  { technology: 'MongoDB', baseline: '8.x', status: 'Corrente', note: 'Licença SSPL desde 2018 — mesma verificação jurídica do Redis.' },
  { technology: 'DynamoDB', baseline: 'contínuo', status: 'Estável', note: 'Sem versionamento; modelagem por padrão de acesso continua sendo o contrato. Módulo 17.' },
  { technology: 'Hibernate ORM', baseline: '7.x', status: 'Corrente', note: 'Requer Jakarta Persistence 3.2. Spring Boot 4 já traz essa linha.' },
  { technology: 'pgvector', baseline: '0.8.x', status: 'Estável e onipresente', note: 'Busca vetorial dentro do Postgres, com HNSW e IVFFlat. Elimina um banco separado na maior parte dos casos. Módulo 26.' },
  { technology: 'DuckDB', baseline: '1.x', status: 'Estável', note: 'Motor colunar embutido. Virou o caminho padrão para análise local sobre Parquet. Módulo 23.' },
  { technology: 'Apache Iceberg', baseline: 'v3', status: 'Consolidando como padrão', note: 'Formato de tabela de lakehouse com suporte dos principais motores. Módulo 23.' },
  { technology: 'Apache Arrow', baseline: 'formato estável', status: 'Estável', note: 'Representação colunar em memória; base da interoperabilidade entre motores sem serialização.' }
];

export const bancosAcademy = Object.freeze({
  title: 'Academia de Banco de Dados',
  baseline: 'PostgreSQL 18 · MongoDB 8.x · Valkey/Redis 8+ · DynamoDB · Hibernate ORM 7.x',
  book: 'database-internals',
  parts: Object.freeze({
    base: Object.freeze({
      index: '0/6',
      page: 'base.html',
      range: 'Módulos 0.1–0.4',
      navLabel: 'Módulo 0',
      title: 'Módulo 0 — da Faixa 0 aos bancos',
      subtitle: 'Ponte dos fundamentos: por que um banco (vs arquivo), o modelo relacional, SQL essencial e integridade/transação.',
      prerequisites: [
        'Ter passado pela Faixa 0 (Fundamentos de Computação) ou equivalente.',
        'Saber usar o terminal; nenhum conhecimento prévio de SQL.',
        'Noção de que dados precisam ser guardados e consultados.'
      ],
      objectives: [
        'Explicar por que um banco de dados resolve o que arquivo/planilha não resolvem.',
        'Entender o modelo relacional: tabelas, linhas, colunas e chaves.',
        'Escrever SQL essencial: SELECT/WHERE, INSERT/UPDATE/DELETE e JOIN.',
        'Entender integridade (PK/UNIQUE/FK) e transação (tudo-ou-nada).'
      ]
    }),
    fundamentos: Object.freeze({
      index: '1/6',
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
      index: '2/6',
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
      index: '3/6',
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
      index: '4/6',
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
    fronteira: Object.freeze({
      index: '5/6',
      page: 'fronteira.html',
      range: 'Módulos 21–27',
      title: 'Fronteira: o banco por dentro',
      subtitle: 'Implementar storage engine, ler o otimizador, execução colunar, commit distribuído, CRDTs, busca vetorial e o código do PostgreSQL.',
      prerequisites: [
        'Concluir os módulos 6–10: heap, WAL, planner, locks e recuperação.',
        'Escrever e ler EXPLAIN com buffers, e saber distinguir estimativa de linha real.',
        'Aceitar que aqui a resposta certa costuma sair da leitura do código, não da documentação.'
      ],
      objectives: [
        'Implementar um storage engine com WAL e provar durabilidade sob crash.',
        'Explicar uma escolha do planner pela estatística e pelo modelo de custo que a produziu.',
        'Decidir entre linha e coluna por padrão de acesso, com medição em ambos.',
        'Comparar 2PC, consenso e determinismo pelo que cada um cobra em latência e disponibilidade.',
        'Reconhecer quando convergência sem coordenação resolve e quando esconde conflito de negócio.',
        'Dimensionar busca vetorial no banco operacional com recall e custo medidos.',
        'Responder uma dúvida de comportamento lendo o código-fonte do PostgreSQL.'
      ]
    }),
    avaliacao: Object.freeze({
      index: '6/6',
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
    number: '0.1', part: 'base', id: 'por-que-banco', title: 'Por que um banco de dados? (vs arquivo e planilha)', level: 'Introdução',
    objective: 'Explicar o que um banco de dados resolve que um arquivo ou planilha não resolvem: consulta, concorrência, integridade e durabilidade.',
    prerequisites: ['Faixa 0: arquivos e sistema de arquivos', 'Noção de que dados precisam ser guardados'],
    problem: 'Quem vem da Faixa 0 sabe guardar dados num arquivo; não sabe por que isso falha com muitos dados, muitos usuários e regras a proteger.',
    concepts: ['Persistência e durabilidade', 'Consulta declarativa (SQL)', 'Concorrência (muitos ao mesmo tempo)', 'Integridade (regras no dado)', 'SGBD como servidor de dados'],
    internals: ['Um arquivo/planilha vira caótico com volume, acesso simultâneo e regras; o banco resolve os três de uma vez.', 'Você diz O QUE quer (SQL declarativo) e o banco decide COMO buscar (com índices) — não é você que percorre.', 'O banco arbitra escritas concorrentes e garante regras (chaves, constraints) que a aplicação sozinha não garante sob concorrência.'],
    useWhen: ['Quando os dados precisam durar, ser consultados de formas variadas e acessados por muitos.', 'Quando há regras de integridade que não podem ser violadas.'],
    avoidWhen: ['Não guarde dados relacionais críticos num CSV compartilhado.', 'Não reimplemente na aplicação o que o banco já garante (transação, unicidade).'],
    contrast: { bad: 'Uma planilha compartilhada onde dois editam ao mesmo tempo e um sobrescreve o outro.', good: 'Um banco que arbitra as escritas, garante unicidade e permite consultar por qualquer critério.' },
    tradeoffs: ['Um banco acrescenta uma peça de infraestrutura, em troca de integridade, concorrência e consulta.', 'SQL exige aprender, mas evita percorrer dados na mão.'],
    production: 'Um controle em planilha compartilhada perdeu registros quando duas pessoas salvaram ao mesmo tempo — exatamente o que a concorrência do banco resolve.',
    risks: ['Usar arquivo/planilha onde há concorrência e regras.', 'Colocar integridade só na aplicação.', 'Achar que "guardar" é o problema (o difícil é consultar e proteger).'],
    checklist: ['Sei por que um arquivo falha com concorrência?', 'Sei o que é consulta declarativa?', 'Sei o que o banco garante que a aplicação não garante?', 'Sei o que significa durabilidade?'],
    interview: [
      { level: 'Introdução', question: 'Por que usar um banco de dados em vez de um arquivo?', expected: 'Consulta declarativa e rápida, acesso concorrente arbitrado, integridade garantida no dado e durabilidade — o que um arquivo/planilha não dá.' },
      { level: 'Introdução', question: 'O que é SQL declarativo?', expected: 'Você descreve O QUE quer; o banco decide COMO obter (usando índices), em vez de você percorrer os dados.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Listar três problemas de guardar dados de clientes numa planilha compartilhada e como o banco resolve cada um.', evidence: 'Tabela problema → solução do banco.' },
      { level: 'Aplicado', task: 'Instalar/abrir um banco (SQLite ou PostgreSQL) e criar sua primeira tabela.', evidence: 'O comando e a tabela criada.' }
    ],
    quiz: [
      { question: 'O que um banco garante que um arquivo compartilhado NÃO garante?', options: ['cores bonitas', 'integridade e acesso concorrente seguro', 'menos memória', 'nada'], answer: 1, why: 'Concorrência arbitrada e regras no dado são a diferença central.' },
      { question: 'SQL é uma linguagem:', options: ['imperativa (você percorre)', 'declarativa (você diz o quê)', 'de estilo', 'de marcação'], answer: 1, why: 'Você descreve o resultado; o banco decide como obtê-lo.' },
      { question: 'Durabilidade significa que os dados:', options: ['são bonitos', 'sobrevivem a falhas depois de confirmados', 'são temporários', 'ficam só na memória'], answer: 1, why: 'Uma vez confirmados (commit), persistem mesmo após queda.' }
    ],
    challenge: 'Explicar para um leigo por que um sistema com muitos usuários não pode guardar tudo num único arquivo.',
    book: 'SQL Antipatterns, introdução; The Art of PostgreSQL, por que um banco.',
    complements: [pgDocs('PostgreSQL — Tutorial: a linguagem SQL', 'tutorial-sql.html')],
    exampleFile: null
  }),
  defineModule({
    number: '0.2', part: 'base', id: 'modelo-relacional-zero', title: 'O modelo relacional: tabelas, linhas, colunas e chaves', level: 'Introdução',
    objective: 'Entender o modelo relacional — tabela (linhas × colunas), tipos, chave primária e chave estrangeira — o modelo mental antes da modelagem por invariantes.',
    prerequisites: ['Módulo 0.1', 'Faixa 0: tipos de dado'],
    problem: 'Sem o modelo relacional, "tabela", "chave" e "relacionamento" viram jargão, e o iniciante modela por tela em vez de por fato.',
    concepts: ['Tabela = linhas × colunas', 'Coluna tem tipo', 'Chave primária (identifica a linha)', 'Chave estrangeira (liga tabelas)', 'NULL (ausência de valor)'],
    internals: ['Uma tabela guarda um tipo de fato; cada linha é um registro, cada coluna um atributo com tipo.', 'A chave primária identifica unicamente cada linha; a chave estrangeira referencia a PK de outra tabela, ligando-as.', 'NULL significa "sem valor" — não é 0 nem "" — e exige cuidado nas comparações.'],
    useWhen: ['Ao desenhar onde cada dado mora (uma tabela por tipo de fato).', 'Ao ligar dados relacionados por chave.'],
    avoidWhen: ['Não crie uma tabela por tela do sistema.', 'Não guarde uma lista separada por vírgula numa coluna de texto.'],
    contrast: { bad: 'Uma tabela "cadastro" com clientes, pedidos e itens misturados em colunas repetidas.', good: 'Tabelas clientes, pedidos e itens, ligadas por chave estrangeira.' },
    tradeoffs: ['Separar em tabelas por fato reduz duplicação, ao custo de precisar juntar (JOIN) depois.', 'Chave estrangeira protege referências, mas exige ordem de carga.'],
    production: 'Uma coluna "produtos" com nomes separados por vírgula impossibilitou relatórios por produto; separar em uma tabela de itens resolveu.',
    risks: ['Modelar por tela, não por fato.', 'Lista dentro de uma coluna.', 'Confundir NULL com 0 ou "".', 'Chave primária mutável.'],
    checklist: ['Cada tabela representa um tipo de fato?', 'Toda tabela tem chave primária?', 'As ligações usam chave estrangeira?', 'Sei o que NULL significa?'],
    interview: [
      { level: 'Introdução', question: 'O que é uma chave primária?', expected: 'Uma coluna (ou conjunto) que identifica unicamente cada linha da tabela; não se repete e não é nula.' },
      { level: 'Introdução', question: 'Para que serve uma chave estrangeira?', expected: 'Referenciar a chave primária de outra tabela, ligando as duas e garantindo que a referência existe.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Modelar clientes e pedidos em duas tabelas, com PK em cada e FK ligando pedido→cliente.', evidence: 'O desenho das tabelas com PK/FK marcadas.' },
      { level: 'Aplicado', task: 'Pegar uma planilha "achatada" e separá-la em tabelas por fato.', evidence: 'Antes (planilha) e depois (tabelas ligadas).' }
    ],
    quiz: [
      { question: 'Numa tabela, uma linha representa:', options: ['uma coluna', 'um registro (uma ocorrência do fato)', 'um tipo', 'um banco'], answer: 1, why: 'Linha = registro; coluna = atributo.' },
      { question: 'A chave primária:', options: ['pode repetir', 'identifica unicamente cada linha', 'é sempre texto', 'é opcional'], answer: 1, why: 'Única e não nula por linha.' },
      { question: 'NULL significa:', options: ['zero', 'string vazia', 'ausência de valor', 'falso'], answer: 2, why: 'É "sem valor", diferente de 0 e de "".' }
    ],
    challenge: 'Transformar uma planilha de pedidos (com cliente repetido em cada linha) em tabelas relacionais ligadas por chave.',
    book: 'SQL Antipatterns (modelagem); The Art of PostgreSQL (modelo de dados).',
    complements: [pgDocs('PostgreSQL — Data Definition (tabelas e chaves)', 'ddl.html')],
    exampleFile: null
  }),
  defineModule({
    number: '0.3', part: 'base', id: 'sql-essencial', title: 'SQL essencial: SELECT, WHERE, CRUD e JOIN', level: 'Introdução',
    objective: 'Escrever as operações essenciais — SELECT/WHERE para consultar, INSERT/UPDATE/DELETE para alterar e JOIN para combinar tabelas.',
    prerequisites: ['Módulo 0.2', 'Um banco (SQLite ou PostgreSQL) para praticar'],
    problem: 'Sem o SQL básico, o iniciante não consegue nem ler nem gravar; e sem JOIN, dados em tabelas separadas parecem inacessíveis juntos.',
    concepts: ['SELECT e WHERE (consultar/filtrar)', 'INSERT, UPDATE, DELETE (CRUD)', 'JOIN (combinar tabelas por chave)', 'ORDER BY e agregação (COUNT/SUM)', 'GROUP BY'],
    internals: ['SELECT ... WHERE filtra linhas; INSERT/UPDATE/DELETE completam o CRUD (criar, alterar, remover).', 'JOIN combina linhas de duas tabelas onde a chave estrangeira bate com a primária — é como se lê dados relacionados juntos.', 'COUNT, SUM e GROUP BY resumem: quantos, quanto, por grupo — em uma consulta, não num laço na aplicação.'],
    useWhen: ['Sempre que ler ou gravar dados.', 'Ao juntar informações de tabelas relacionadas.'],
    avoidWhen: ['Não traga a tabela inteira para filtrar/contar na aplicação (deixe o WHERE/agregação no banco).', 'Não faça UPDATE/DELETE sem WHERE (afeta tudo).'],
    contrast: { bad: 'SELECT * e filtrar/contar no código da aplicação.', good: 'WHERE, JOIN e SUM/GROUP BY no banco, trazendo só o resultado.' },
    tradeoffs: ['Deixar o trabalho no banco é mais rápido e simples, e exige aprender SQL.', 'JOIN junta dados normalizados ao custo de escrever a consulta.'],
    production: 'Um relatório trazia todas as linhas e somava no código (lento e frágil); um SELECT com SUM/GROUP BY resolveu em uma consulta.',
    risks: ['UPDATE/DELETE sem WHERE.', 'Trazer dados demais para processar na aplicação.', 'Esquecer a condição do JOIN (produto cartesiano).'],
    checklist: ['Sei consultar com SELECT/WHERE?', 'Sei o CRUD completo?', 'Sei juntar tabelas com JOIN?', 'Sei resumir com COUNT/SUM/GROUP BY?'],
    interview: [
      { level: 'Introdução', question: 'Para que serve um JOIN?', expected: 'Combinar linhas de duas (ou mais) tabelas relacionadas, tipicamente ligando a chave estrangeira de uma à chave primária da outra.' },
      { level: 'Introdução', question: 'Por que é melhor filtrar com WHERE do que trazer tudo e filtrar na aplicação?', expected: 'O banco filtra com índices e traz só o necessário; trazer tudo desperdiça rede, memória e tempo.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Rodar o exemplo bancos-zero e explicar cada consulta (WHERE, JOIN, GROUP BY, UPDATE, DELETE).', evidence: 'Notas ligando cada comando ao resultado.' },
      { level: 'Aplicado', task: 'Escrever uma consulta que soma pedidos por cliente usando JOIN + GROUP BY.', evidence: 'A consulta e o resultado conferido.' }
    ],
    quiz: [
      { question: 'Para combinar duas tabelas relacionadas use:', options: ['UNION', 'JOIN', 'GROUP BY', 'WHERE'], answer: 1, why: 'JOIN liga tabelas por chave.' },
      { question: 'Um UPDATE sem WHERE:', options: ['não faz nada', 'altera TODAS as linhas', 'dá erro sempre', 'altera uma linha'], answer: 1, why: 'Sem filtro, afeta a tabela inteira — perigoso.' },
      { question: 'Para contar quantos pedidos cada cliente tem, use:', options: ['SELECT *', 'COUNT + GROUP BY', 'DELETE', 'ORDER BY só'], answer: 1, why: 'Agregação (COUNT) por grupo (GROUP BY).' }
    ],
    challenge: 'Escrever, sobre bancos-zero, uma consulta que traga o cliente com maior total gasto — só com SQL.',
    book: 'The Art of PostgreSQL (SQL); SQL Antipatterns (consultas).',
    complements: [pgDocs('PostgreSQL — Queries (SELECT e JOIN)', 'queries.html')],
    exampleFile: '../../examples/database-senior/bancos-zero.mjs'
  }),
  defineModule({
    number: '0.4', part: 'base', id: 'integridade-transacao', title: 'Integridade e transação: PK/UNIQUE/FK e o básico de ACID', level: 'Introdução',
    objective: 'Entender que constraints garantem regras no dado e que uma transação é tudo-ou-nada — a base para a modelagem por invariantes do módulo 1.',
    prerequisites: ['Módulo 0.3', 'Faixa 0: ler erros; noção de "ao mesmo tempo"'],
    problem: 'O módulo 1 já assume "regras de negócio como invariantes no banco" e concorrência; sem esta ponte, o iniciante confia na validação da aplicação e perde dados.',
    concepts: ['Constraints: PRIMARY KEY, UNIQUE, NOT NULL, FOREIGN KEY, CHECK', 'Transação (BEGIN/COMMIT/ROLLBACK)', 'Atomicidade (tudo-ou-nada)', 'Concorrência: validar-antes-de-inserir falha', 'ACID em uma frase'],
    internals: ['Constraints guardam a regra NO dado: UNIQUE impede duplicata mesmo com dois inserts simultâneos — algo que um SELECT-antes-do-INSERT na aplicação não garante.', 'Uma transação agrupa operações: ou todas confirmam (COMMIT) ou nenhuma vale (ROLLBACK) — a atomicidade que evita estados pela metade.', 'ACID = Atomicidade, Consistência, Isolamento e Durabilidade — as garantias que o banco dá e o arquivo não.'],
    useWhen: ['Ao proteger uma regra que não pode ser violada (unicidade, referência).', 'Ao agrupar operações que só fazem sentido juntas (débito + crédito).'],
    avoidWhen: ['Não confie só na validação da aplicação sob concorrência.', 'Não deixe operações relacionadas fora de uma transação.'],
    contrast: { bad: 'SELECT para ver se o e-mail existe e depois INSERT (outra transação insere no meio).', good: 'Constraint UNIQUE no e-mail: o banco arbitra atomicamente e a aplicação trata a violação.' },
    tradeoffs: ['Constraints e transações custam um pouco de desempenho e disciplina, em troca de integridade garantida.', 'Isolamento mais forte evita anomalias, mas reduz concorrência (assunto do módulo 1+).'],
    production: 'Dois cadastros simultâneos do mesmo CPF passaram pela validação da aplicação e duplicaram o cliente; uma constraint UNIQUE teria bloqueado atomicamente.',
    risks: ['Confiar em validação da aplicação sob concorrência.', 'Operações relacionadas sem transação.', 'Ignorar violação de constraint em vez de tratá-la.'],
    checklist: ['Sei o que cada constraint (PK/UNIQUE/FK/NOT NULL/CHECK) garante?', 'Sei o que é uma transação atômica?', 'Entendo por que validar-antes-de-inserir falha sob concorrência?', 'Sei o que ACID significa em uma frase?'],
    interview: [
      { level: 'Introdução', question: 'Por que uma validação SELECT antes do INSERT não garante unicidade?', expected: 'Outra transação pode inserir entre o SELECT e o INSERT; só uma constraint UNIQUE arbitra de forma atômica.' },
      { level: 'Introdução', question: 'O que é atomicidade numa transação?', expected: 'Ou todas as operações da transação são confirmadas (COMMIT) ou nenhuma vale (ROLLBACK) — nunca um meio-termo.' }
    ],
    exercises: [
      { level: 'Básico', task: 'No exemplo bancos-zero, observar a PK bloquear id duplicado e a transação reverter no erro.', evidence: 'Nota explicando a constraint e o ROLLBACK.' },
      { level: 'Aplicado', task: 'Adicionar uma constraint UNIQUE e provar que ela impede a duplicata que a aplicação deixaria passar.', evidence: 'DDL da constraint e o erro de violação capturado.' }
    ],
    quiz: [
      { question: 'Para impedir e-mail duplicado de forma confiável, use:', options: ['SELECT antes do INSERT', 'uma constraint UNIQUE', 'um comentário', 'ORDER BY'], answer: 1, why: 'A constraint arbitra atomicamente, mesmo sob concorrência.' },
      { question: 'Uma transação garante que:', options: ['tudo roda mais rápido', 'ou tudo é confirmado ou nada vale', 'os dados ficam bonitos', 'não há erros'], answer: 1, why: 'Atomicidade: COMMIT tudo ou ROLLBACK nada.' },
      { question: 'O "A" de ACID é:', options: ['Acesso', 'Atomicidade', 'Aprovação', 'Arquivo'], answer: 1, why: 'Atomicidade — tudo-ou-nada da transação.' }
    ],
    challenge: 'Ligar o que aprendeu ao módulo 1: modelar uma regra de negócio como invariante no banco (constraint), não como código na aplicação.',
    book: 'SQL Antipatterns (integridade); depois siga para o módulo 1 (modelagem por invariantes).',
    complements: [pgDocs('PostgreSQL — Constraints', 'ddl-constraints.html'), pgDocs('PostgreSQL — Transactions', 'tutorial-transactions.html')],
    exampleFile: null
  }),
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
    title: 'Cache e estruturas Redis/Valkey',
    level: 'Intermediário',
    objective: 'Implementar cache com validade, invalidação, proteção contra stampede e limite de memória medidos — e escolher a implementação sabendo que Redis e Valkey divergiram.',
    prerequisites: ['Módulos 5, 10 e 12', 'Consistência eventual', 'Redis ou Valkey básico'],
    problem: 'Cache é adicionado para esconder query lenta e cria dado obsoleto, avalanche, hot key e falha maior que a origem. Desde 2024 há um problema a mais: "usar Redis" deixou de ser uma decisão só técnica — a licença mudou e o ecossistema se dividiu.',
    concepts: ['Cache-aside e write-through', 'TTL, freshness e staleness', 'Eviction LRU/LFU', 'Stampede e single-flight', 'Hashes, sets, sorted sets e streams', 'Redis × Valkey: licença, governança e compatibilidade de protocolo'],
    internals: ['TTL expira validade; eviction remove por pressão de memória e são mecanismos diferentes.', 'Hot key concentra CPU/rede numa única partição ou nó.', 'RDB e AOF oferecem perfis distintos de persistência; cache pode deliberadamente não persistir.', 'Em 2024 o Redis deixou a licença BSD; a comunidade criou o Valkey sob a Linux Foundation, que hoje é o default de novas instâncias em AWS ElastiCache e Google Memorystore. O protocolo permanece compatível e a migração costuma ser troca de endpoint — mas a decisão passou a ter um eixo jurídico que precisa do time responsável, não só do time técnico.'],
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
  }),
  defineModule({
    number: 21,
    part: 'fronteira',
    id: 'storage-engine',
    title: 'Implementar um storage engine: B-tree, LSM e WAL',
    level: 'Expert',
    objective: 'Construir um motor de armazenamento com log de escrita antecipada e provar durabilidade sob crash, entendendo por escrita própria o que cada motor comercial escolheu e por quê.',
    prerequisites: ['Módulo 6 (heap, buffer, WAL, checkpoint)', 'Módulo 9 (locks e MVCC)', 'Estruturas de dados e noção de custo de I/O'],
    problem: 'Saber que "B-tree é bom para leitura e LSM para escrita" é repetir uma frase. Sem ter implementado nenhum dos dois, não dá para prever o comportamento de um banco sob uma carga nova, nem entender por que a mesma consulta fica lenta depois de uma janela de escrita intensa.',
    concepts: ['Log de escrita antecipada: escrever a intenção antes do dado', 'B-tree: páginas, fanout, split e escrita in-place', 'LSM: memtable, SSTable imutável e compactação', 'Amplificação de escrita, leitura e espaço', 'Filtro de Bloom e o custo de negar', 'fsync, durabilidade e o que o SO promete', 'Recuperação: redo, undo e ponto de consistência'],
    internals: [
      'A durabilidade vem do WAL, não da estrutura: o dado pode estar só em memória desde que a intenção já esteja em disco e sincronizada.',
      'B-tree troca escrita in-place (aleatória, cara) por leitura previsível; LSM troca leitura (que pode varrer vários níveis) por escrita sequencial barata.',
      'Os três tipos de amplificação estão em tensão: nenhum motor otimiza os três, e o ajuste de compactação é onde se escolhe qual sacrificar.',
      'Um `write()` bem-sucedido não significa dado em disco. Sem `fsync`, a promessa é do cache do SO, e um corte de energia a desfaz.'
    ],
    useWhen: ['Use B-tree quando leitura por faixa e latência previsível dominam.', 'Use LSM quando a carga é dominada por escrita e ingestão sequencial.', 'Implemente um motor de brinquedo quando precisar entender o comportamento do motor de verdade.'],
    avoidWhen: ['Não escreva um storage engine para produção: use um existente.', 'Não conclua sobre amplificação sem medir os três tipos.', 'Não confie em durabilidade que não foi testada com crash real.'],
    contrast: {
      bad: 'Explicar a lentidão de um banco LSM como "precisa de mais memória", sem olhar o estado da compactação.',
      good: 'Reconhecer o acúmulo de níveis, medir a amplificação de leitura e ajustar a política de compactação — ou mudar de motor com número na mão.'
    },
    tradeoffs: ['LSM dá ingestão alta e cobra em leitura e em picos de compactação.', 'B-tree dá leitura previsível e cobra em escrita aleatória e fragmentação.', 'fsync a cada commit dá durabilidade e limita o throughput ao disco.'],
    production: 'Uma fila persistente construída sobre um banco relacional degrada após semanas: a tabela sofre atualização constante no mesmo conjunto de linhas, o índice fragmenta e o autovacuum não acompanha. O diagnóstico só é possível conhecendo escrita in-place e o custo de versões mortas — e a solução é trocar o padrão de acesso, não o hardware.',
    risks: ['Confundir escrita bem-sucedida com dado durável', 'Concluir sobre motor sem medir os três tipos de amplificação', 'Teste de crash que não corta energia de verdade (nem simula)', 'Generalizar de um motor de brinquedo para um de produção'],
    checklist: ['O WAL é escrito e sincronizado antes do dado?', 'A recuperação reconstrói exatamente o estado confirmado?', 'As três amplificações foram medidas, não estimadas?', 'O teste de crash interrompe no pior momento possível?', 'A conclusão vale para a carga real ou só para o benchmark?'],
    interview: [
      { level: 'Pleno/Sênior', question: 'Por que um WAL torna a escrita mais rápida, se ele adiciona uma escrita a mais?', expected: 'Porque a escrita do log é sequencial e pequena, enquanto a do dado é aleatória e pode ser adiada e agrupada. Troca-se I/O aleatório por sequencial, e é isso que paga a escrita extra.' },
      { level: 'Sênior/Expert', question: 'Uma carga de ingestão alta com leituras por faixa: B-tree ou LSM?', expected: 'Depende da proporção e da tolerância a picos. LSM absorve melhor a ingestão mas a leitura por faixa pode tocar vários níveis e a compactação gera picos de latência; B-tree dá leitura previsível e sofre com escrita aleatória. Responder sem medir é chute — o caminho é benchmark com a carga real.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Implementar um armazenamento chave-valor com WAL e recuperação por replay.', evidence: 'Código que, morto no meio da escrita, reconstrói exatamente o estado confirmado.' },
      { level: 'Aplicado', task: 'Acrescentar memtable, flush para SSTable e compactação, medindo amplificação de escrita.', evidence: 'Bytes escritos no log versus bytes de dados lógicos, por cenário.' },
      { level: 'Expert', task: 'Comparar o seu motor com o PostgreSQL na mesma carga e explicar cada diferença.', evidence: 'Medição lado a lado e nota explicando o que o motor real faz a mais.' }
    ],
    challenge: 'Escrever o teste de crash que mata o processo no pior instante possível e provar que nenhum commit confirmado se perde.',
    book: 'Database Internals, parte I (armazenamento, B-trees e LSM); PostgreSQL 14 Internals (WAL, checkpoint e recuperação).',
    complements: [pgDocs('PostgreSQL 18 — Write-Ahead Logging', 'wal-intro.html'), pgDocs('PostgreSQL 18 — Reliability', 'wal-reliability.html')],
    exampleFile: '../../examples/database-senior/07-storage-engine/lsm_engine.py'
  }),
  defineModule({
    number: 22,
    part: 'fronteira',
    id: 'otimizador-internals',
    title: 'O otimizador por dentro: estatística, cardinalidade e ordem de junção',
    level: 'Expert',
    objective: 'Explicar a escolha do planner a partir da estatística e do modelo de custo que a produziram, e corrigir a causa em vez de forçar o plano.',
    prerequisites: ['Módulo 7 (planner, estatísticas e EXPLAIN)', 'Módulo 5 (índices)', 'Leitura de EXPLAIN com buffers'],
    problem: 'Quando o plano está errado, a reação comum é reescrever a consulta até "dar certo" ou desabilitar um tipo de junção. Isso conserta um caso e deixa a causa intacta. A causa quase sempre é estimativa de cardinalidade errada — e ela tem origem identificável.',
    concepts: ['`pg_statistic` e o que o ANALYZE coleta: MCV, histograma, correlação, n_distinct', 'Seletividade e propagação do erro de estimativa ao subir a árvore', 'Correlação entre colunas e estatística estendida', 'Modelo de custo: `seq_page_cost`, `random_page_cost` e por que os padrões são de outra época de hardware', 'Espaço de busca de junção, programação dinâmica e GEQO', 'Estimativa versus linhas reais: ler a razão, não o tempo', 'Por que forçar o plano é dívida'],
    internals: [
      'O planner escolhe pelo custo estimado, e o custo depende da cardinalidade estimada: errar a cardinalidade em 1000× no nó de baixo faz toda a árvore acima escolher errado.',
      'A estimativa supõe independência entre colunas por padrão; quando há correlação real (cidade e estado, por exemplo), a estimativa desaba — é para isso que existe estatística estendida.',
      '`random_page_cost = 4` presume disco rotacional. Em SSD o valor realista está mais perto de 1.1, e manter o padrão enviesa o planner contra índices.',
      'Acima de um número de tabelas, a busca exaustiva é trocada por heurística genética (GEQO), e o plano deixa de ser determinístico.'
    ],
    useWhen: ['Use `EXPLAIN (ANALYZE, BUFFERS)` e compare estimativa com linhas reais antes de qualquer mudança.', 'Use estatística estendida quando as colunas do filtro são correlacionadas.', 'Ajuste `random_page_cost` ao hardware real, com medição.'],
    avoidWhen: ['Não desabilite tipos de junção em produção para "resolver" um plano.', 'Não aumente `default_statistics_target` globalmente sem medir o custo do ANALYZE.', 'Não conclua por tempo de execução: em máquina ociosa, um plano ruim pode parecer bom.'],
    contrast: {
      bad: '`set enable_nestloop = off` no início da consulta, em produção, e um comentário dizendo "sem isso fica lento".',
      good: 'Identificar a subestimativa de 2000×, criar a estatística estendida sobre as colunas correlacionadas e ver o planner escolher sozinho o plano certo.'
    },
    tradeoffs: ['Mais estatística dá estimativa melhor e custa tempo de ANALYZE e memória de planejamento.', 'Forçar o plano resolve hoje e congela a decisão para dados que vão mudar.', 'Planejar mais dá plano melhor e adiciona latência a consultas curtas.'],
    production: 'Um relatório passa de 200 ms a 40 s após uma carga de dados. O EXPLAIN mostra estimativa de 12 linhas onde existem 180 mil: duas colunas do filtro são fortemente correlacionadas e o planner as tratou como independentes. A estatística estendida corrige a estimativa e o plano volta sozinho — sem tocar na consulta.',
    risks: ['Estatística desatualizada após carga grande', 'Correlação entre colunas ignorada', 'Parâmetro de custo herdado de hardware rotacional', 'Plano forçado escondendo a causa', 'Parameter sniffing em prepared statement'],
    checklist: ['Qual a razão entre linhas estimadas e reais em cada nó?', 'O erro nasce em qual nó, e por quê?', 'As colunas do filtro são correlacionadas?', 'O ANALYZE rodou depois da última carga?', 'Os parâmetros de custo correspondem ao disco real?'],
    interview: [
      { level: 'Pleno/Sênior', question: 'O que você olha primeiro num EXPLAIN ANALYZE lento?', expected: 'A razão entre linhas estimadas e reais, de baixo para cima, para achar onde a estimativa começou a errar — antes de olhar o tempo total, que é consequência.' },
      { level: 'Sênior/Expert', question: 'O planner insiste num nested loop ruim. Quais são as causas possíveis, em ordem?', expected: 'Estatística desatualizada; correlação entre colunas tratada como independência; n_distinct errado; parâmetros de custo inadequados ao hardware; parameter sniffing. Forçar o plano é a última opção e vem com prazo de revisão.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Provocar uma subestimativa criando colunas correlacionadas e medir o erro no EXPLAIN.', evidence: 'Razão estimado/real antes e depois de `CREATE STATISTICS`.' },
      { level: 'Aplicado', task: 'Medir o efeito de `random_page_cost` na escolha entre seq scan e index scan.', evidence: 'Planos com valores diferentes e a justificativa do valor escolhido.' },
      { level: 'Expert', task: 'Encontrar no seu sistema uma consulta com plano ruim e corrigir a causa sem alterar a consulta.', evidence: 'Diagnóstico da origem da estimativa errada, correção e plano resultante.' }
    ],
    challenge: 'Pegar uma consulta que alguém "resolveu" com hint ou com desabilitação de junção e eliminar a gambiarra corrigindo a estatística.',
    book: 'PostgreSQL 14 Internals (planner, estatísticas e custo); SQL Performance Explained (como o índice entra na conta do otimizador).',
    complements: [pgDocs('PostgreSQL 18 — Statistics Used by the Planner', 'planner-stats.html'), pgDocs('PostgreSQL 18 — Planner Cost Constants', 'runtime-config-query.html'), pgDocs('PostgreSQL 18 — Extended Statistics', 'sql-createstatistics.html')],
    exampleFile: '../../examples/database-senior/08-optimizer-internals.sql'
  }),
  defineModule({
    number: 23,
    part: 'fronteira',
    id: 'colunar-vetorizado',
    title: 'Colunar e vetorizado: Parquet, Arrow, DuckDB e lakehouse',
    level: 'Expert',
    objective: 'Escolher entre armazenamento por linha e por coluna a partir do padrão de acesso, e reconhecer quando o problema analítico saiu do banco transacional.',
    prerequisites: ['Módulo 6 (heap e páginas)', 'Módulo 8 (SQL analítico e janelas)', 'Noção de custo de I/O'],
    problem: 'Relatórios analíticos são executados no banco transacional até que deixem de caber: a varredura lê todas as colunas para agregar uma, concorre com a carga operacional e o índice não ajuda. A reação típica é comprar máquina maior, quando o problema é o formato de armazenamento.',
    concepts: ['Linha versus coluna: o que cada um otimiza', 'Compressão por coluna: valores semelhantes ficam juntos', 'Parquet: row groups, estatísticas por bloco e predicate pushdown', 'Arrow: representação em memória e interoperabilidade sem serialização', 'Execução vetorizada: processar lotes em vez de uma linha por vez', 'DuckDB como motor colunar embutido', 'Lakehouse e formatos de tabela (Iceberg): transação sobre arquivos', 'HTAP e o limite entre operacional e analítico'],
    internals: [
      'Agregar uma coluna em formato de linha lê a linha inteira do disco; em formato de coluna, lê só aquela coluna — a diferença é de ordem de grandeza, e não de percentual.',
      'Colunas guardam valores do mesmo tipo e domínio, o que torna a compressão muito mais eficaz: menos bytes lidos é menos I/O, antes de qualquer CPU.',
      'As estatísticas por row group do Parquet permitem pular blocos inteiros sem ler — é um índice implícito e barato.',
      'Vetorização processa lotes, o que amortiza o custo por linha do interpretador e usa melhor o cache da CPU. É a mesma ideia do módulo 22 da trilha de Java, em outro domínio.'
    ],
    useWhen: ['Use colunar quando a consulta agrega poucas colunas sobre muitas linhas.', 'Use DuckDB para análise local sobre Parquet, sem subir infraestrutura.', 'Considere lakehouse quando os dados analíticos crescem além do que o operacional comporta.'],
    avoidWhen: ['Não use colunar para carga transacional de linha inteira e escrita ponto a ponto.', 'Não monte lakehouse sem volume que o justifique — o custo operacional é real.', 'Não replique o operacional para o analítico sem definir latência aceitável de dado.'],
    contrast: {
      bad: 'Relatório de fechamento varrendo a tabela transacional em horário comercial, competindo com o checkout.',
      good: 'Extração incremental para Parquet, consulta com motor colunar e latência de dado declarada em contrato.'
    },
    tradeoffs: ['Colunar dá agregação rápida e escrita ponto a ponto ruim.', 'Lakehouse separa as cargas e adiciona pipeline, latência e um sistema a operar.', 'Manter tudo no operacional é simples até deixar de ser — e o momento da virada tem sinais mensuráveis.'],
    production: 'Um painel executivo agrega 18 meses de lançamentos e leva 90 s, travando conexões no horário de pico. A extração para Parquet particionado por mês e a consulta com motor colunar levam o mesmo relatório a menos de 2 s, sem tocar no banco operacional — ao custo de dado com até 15 minutos de atraso, acordado com a área de negócio.',
    risks: ['Pipeline analítico sem contrato de latência', 'Divergência entre número do painel e do operacional', 'Small files problem no lakehouse', 'Custo de varredura sem particionamento nem poda'],
    checklist: ['A consulta agrega poucas colunas sobre muitas linhas?', 'Qual a latência de dado aceitável, por escrito?', 'O particionamento permite podar a maior parte dos arquivos?', 'Há reconciliação entre o número analítico e o operacional?', 'O custo operacional do pipeline foi comparado ao de continuar no banco?'],
    interview: [
      { level: 'Pleno/Sênior', question: 'Por que um formato colunar acelera agregação?', expected: 'Lê apenas as colunas necessárias, comprime muito melhor porque os valores são homogêneos e permite pular blocos por estatística — é menos I/O antes de ser mais CPU.' },
      { level: 'Sênior/Expert', question: 'Quando você tiraria os relatórios do banco transacional?', expected: 'Quando a varredura analítica passa a competir por recursos com a carga operacional, o índice deixa de ajudar e o crescimento é previsível — com latência de dado negociada e reconciliação definida, não por moda de arquitetura.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Comparar o custo de agregar uma coluna sobre uma tabela larga em formato de linha e em Parquet.', evidence: 'Bytes lidos e tempo nos dois formatos, com a mesma consulta.' },
      { level: 'Aplicado', task: 'Particionar um conjunto Parquet e medir o efeito da poda de partições.', evidence: 'Arquivos lidos com e sem filtro de partição.' },
      { level: 'Expert', task: 'Definir o gatilho mensurável que moveria um relatório do operacional para o analítico.', evidence: 'ADR com a métrica, o limiar, o custo dos dois lados e a latência acordada.' }
    ],
    challenge: 'Pegar o relatório mais pesado do seu sistema, medi-lo nos dois formatos e escrever a recomendação — inclusive se for "continua no operacional".',
    book: 'Designing Data-Intensive Applications, cap. 3 (armazenamento e recuperação; seção de armazenamento colunar); Database Internals (organização de dados em disco).',
    complements: [pgDocs('PostgreSQL 18 — Table Partitioning', 'ddl-partitioning.html')],
    exampleFile: '../../examples/database-senior/09-columnar-and-lakehouse.md'
  }),
  defineModule({
    number: 24,
    part: 'fronteira',
    id: 'commit-distribuido',
    title: 'Commit distribuído e consenso: 2PC, Raft, determinismo e relógio',
    level: 'Expert',
    objective: 'Comparar as formas de obter acordo entre nós pelo que cada uma cobra em latência, disponibilidade e complexidade operacional.',
    prerequisites: ['Módulo 4 (transações e isolamento)', 'Módulo 18 (replicação e consistência)', 'Módulo 15 (outbox e CDC)'],
    problem: 'Toda discussão sobre banco distribuído termina em "ele garante consistência forte?" — e a resposta só significa alguma coisa quando se sabe o que foi pago por ela. Sem conhecer os mecanismos, a avaliação de um produto vira leitura de material de marketing.',
    concepts: ['2PC: o coordenador como ponto único e o bloqueio in-doubt', 'Consenso (Raft/Paxos): quórum, log replicado e eleição', 'Diferença entre replicar o log e coordenar a transação', 'Abordagem determinística (Calvin): ordenar antes de executar', 'Relógio como infraestrutura: TrueTime e incerteza limitada', 'Relógios lógicos, HLC e ordenação sem relógio físico', 'Consistência externa, linearizabilidade e snapshot isolation', 'O custo em latência de cada garantia'],
    internals: [
      '2PC bloqueia: se o coordenador cai entre prepare e commit, os participantes ficam com locks segurados e não podem decidir sozinhos. É por isso que raramente serve entre serviços.',
      'Consenso resolve acordo sobre uma sequência de valores com maioria, tolerando minoria de falhas — e cobra pelo menos um round-trip de quórum por decisão.',
      'A abordagem determinística inverte a ordem: decide a sequência de transações antes de executar, eliminando a negociação em troca de exigir o conjunto de acesso conhecido de antemão.',
      'Consistência externa em escala global precisa de uma noção de tempo confiável; TrueTime compra isso com hardware e paga esperando a incerteza passar.'
    ],
    useWhen: ['Use consenso quando precisa de uma decisão única e tolerante a falhas.', 'Use saga com compensação entre serviços — 2PC entre bancos independentes quase nunca é a resposta.', 'Aceite consistência eventual quando o domínio tolera e a disponibilidade vale mais.'],
    avoidWhen: ['Não use 2PC entre serviços independentes.', 'Não presuma que "consistência forte" do fornecedor significa linearizabilidade.', 'Não ignore o custo de latência do quórum multi-região.'],
    contrast: {
      bad: 'Escolher um banco distribuído pela frase "consistência forte e alta disponibilidade" na página do produto.',
      good: 'Perguntar: qual o comportamento sob partição, qual a suposição de relógio, o que acontece com escritas durante failover e que verificação independente existe.'
    },
    tradeoffs: ['Consenso dá acordo tolerante a falhas e custa latência de quórum.', '2PC dá atomicidade entre recursos e cria bloqueio e ponto único.', 'Consistência eventual dá disponibilidade e transfere a resolução de conflito para a aplicação.'],
    production: 'Um cluster multi-região com quórum é configurado com nós em três continentes. A escrita passa a levar 250 ms porque cada commit espera o quórum atravessar o oceano. Nenhum defeito: é o preço da garantia. O redesenho coloca o quórum em uma região e usa réplicas de leitura nas outras, com o trade-off explícito.',
    risks: ['Coordenador de 2PC como ponto único', 'Latência de quórum ignorada no desenho multi-região', 'Garantia anunciada diferente da garantia entregue', 'Split-brain por configuração de quórum incorreta'],
    checklist: ['Qual garantia exata, em linguagem precisa, o sistema oferece?', 'O que acontece sob partição?', 'Qual a latência de escrita imposta pelo quórum?', 'Existe verificação independente da garantia?', 'O domínio realmente precisa disso?'],
    interview: [
      { level: 'Pleno/Sênior', question: 'Por que 2PC é evitado entre microsserviços?', expected: 'Porque bloqueia: uma falha do coordenador entre prepare e commit deixa participantes com locks segurados, sem poder decidir. Acopla disponibilidade dos serviços e escala mal — saga com compensação é a alternativa usual.' },
      { level: 'Sênior/Expert', question: 'Um fornecedor afirma consistência forte sem custo de latência. O que você pergunta?', expected: 'Qual definição de "forte" (linearizável? snapshot?), comportamento sob partição, suposição de relógio, onde fica o quórum, o que acontece com escritas em failover e quais resultados de verificação independente existem.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Descrever o que acontece, passo a passo, quando o coordenador de um 2PC cai após o prepare.', evidence: 'Sequência com o estado de cada participante e o que os desbloqueia.' },
      { level: 'Aplicado', task: 'Medir a latência de escrita de um cluster com quórum em uma e em três regiões.', evidence: 'p50 e p99 nas duas topologias e a explicação da diferença.' },
      { level: 'Expert', task: 'Avaliar um banco distribuído real contra a lista de perguntas do módulo e emitir recomendação.', evidence: 'Documento com a garantia exata, o que foi pago por ela e a verificação independente encontrada.' }
    ],
    challenge: 'Escrever as perguntas que você faria a um fornecedor de banco distribuído, de modo que material de marketing não consiga respondê-las.',
    book: 'Database Internals, parte II (sistemas distribuídos, consenso e replicação); Designing Data-Intensive Applications, cap. 7–9 (transações, problemas distribuídos e consistência).',
    complements: [pgDocs('PostgreSQL 18 — Two-Phase Commit', 'sql-prepare-transaction.html'), pgDocs('PostgreSQL 18 — High Availability and Replication', 'high-availability.html')],
    exampleFile: '../../examples/database-senior/10-distributed-commit.md'
  }),
  defineModule({
    number: 25,
    part: 'fronteira',
    id: 'crdt-sem-coordenacao',
    title: 'Convergência sem coordenação: CRDTs e dados local-first',
    level: 'Expert',
    objective: 'Reconhecer quando réplicas podem convergir sem negociar e quando a convergência automática esconde um conflito que é do negócio, não do dado.',
    prerequisites: ['Módulo 18 (replicação e consistência)', 'Módulo 24', 'Noção de ordem parcial'],
    problem: 'Escrita em múltiplos pontos sem coordenação normalmente produz conflito, e a saída padrão — "o último que escreve vence" — descarta dados em silêncio. Existe uma classe de estruturas que converge por construção, e conhecê-la muda o que é possível oferecer em aplicações offline, colaborativas e multi-região.',
    concepts: ['Convergência forte eventual: mesmas atualizações, mesmo estado final', 'Operações comutativas, associativas e idempotentes', 'Estruturas baseadas em estado e em operação', 'Contador de incremento, conjunto com remoção, registro e sequência', 'Last-write-wins e a perda silenciosa que ele causa', 'Metadados que crescem: túmulos e o custo do esquecimento', 'Local-first: o dispositivo como réplica de primeira classe', 'Conflito de dado versus conflito de negócio'],
    internals: [
      'A propriedade que faz funcionar é a estrutura da operação, não o protocolo: se a junção é comutativa, associativa e idempotente, a ordem de chegada deixa de importar.',
      'Remover de um conjunto replicado exige registrar a remoção — é por isso que essas estruturas acumulam metadados e precisam de política de descarte.',
      'LWW converge e perde dados: duas escritas simultâneas, uma desaparece sem aviso. É uma escolha válida quando perder é aceitável, e uma armadilha quando não é.',
      'Convergir não é o mesmo que estar correto: duas reservas do mesmo assento podem convergir para um estado consistente e ainda assim serem inaceitáveis para o negócio.'
    ],
    useWhen: ['Use quando o dado é acumulativo ou colaborativo (contador, presença, texto editado a várias mãos).', 'Use em aplicação offline-first em que a escrita local não pode esperar rede.', 'Use replicação com coordenação quando a regra exige exclusividade.'],
    avoidWhen: ['Não use para invariante que exige unicidade ou saldo não negativo.', 'Não adote sem política de descarte de metadados.', 'Não trate convergência automática como resolução de conflito de negócio.'],
    contrast: {
      bad: 'Estoque replicado em três regiões com LWW: duas vendas simultâneas convergem, e uma some.',
      good: 'Reserva com coordenação onde a exclusividade é requisito; contador acumulativo sem coordenação onde só o total importa.'
    },
    tradeoffs: ['Convergência sem coordenação dá disponibilidade e latência local, e cobra em metadados e em expressividade.', 'LWW é barato e perde escrita.', 'Coordenação preserva invariante e exige rede disponível.'],
    production: 'Um aplicativo de campo permite edição offline. A sincronização com LWW faz observações de dois técnicos no mesmo formulário se sobrescreverem. A troca por uma estrutura que converge por união preserva as duas contribuições; os campos em que só um valor pode valer passam a exigir resolução explícita pelo supervisor.',
    risks: ['LWW descartando escrita em silêncio', 'Metadados crescendo sem limite', 'Invariante de negócio violada por convergência automática', 'Complexidade adotada sem necessidade real de offline'],
    checklist: ['A operação é comutativa, associativa e idempotente?', 'Qual invariante de negócio precisa de coordenação?', 'Existe política de descarte para os metadados?', 'O que acontece com duas escritas simultâneas — converge ou perde?', 'O modo offline é requisito ou conveniência?'],
    interview: [
      { level: 'Pleno/Sênior', question: 'Qual o problema de resolver conflito com "o último que escreve vence"?', expected: 'Converge, mas descarta uma das escritas em silêncio, e "último" depende de relógio, que em sistema distribuído não é confiável. Só é aceitável quando perder aquela escrita é irrelevante.' },
      { level: 'Sênior/Expert', question: 'Dá para implementar reserva de assento com CRDT?', expected: 'Não para a exclusividade: convergência garante mesmo estado final, não unicidade. Dá para modelar a intenção sem coordenação e resolver a exclusividade num ponto coordenado — separando conflito de dado de conflito de negócio.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Implementar um contador replicado que converge com atualizações fora de ordem e duplicadas.', evidence: 'Teste que aplica as mesmas operações em ordens diferentes e chega ao mesmo estado.' },
      { level: 'Aplicado', task: 'Implementar um conjunto com remoção e mostrar o crescimento dos metadados.', evidence: 'Medição do tamanho do estado ao longo de operações e proposta de descarte.' },
      { level: 'Expert', task: 'Classificar os dados de um sistema real entre os que podem convergir sem coordenação e os que não podem.', evidence: 'Tabela dado × invariante × estratégia, com a justificativa de cada linha.' }
    ],
    challenge: 'Encontrar no seu sistema um lugar onde "o último que escreve vence" está descartando dado em silêncio, e propor a alternativa.',
    book: 'Designing Data-Intensive Applications, cap. 5 (replicação, escrita concorrente e resolução de conflito); Database Internals (replicação sem líder).',
    complements: [],
    exampleFile: '../../examples/database-senior/11-crdt-replication.py'
  }),
  defineModule({
    number: 26,
    part: 'fronteira',
    id: 'busca-vetorial',
    title: 'Busca vetorial no banco operacional: pgvector, HNSW e o custo do recall',
    level: 'Expert',
    objective: 'Dimensionar busca por similaridade dentro do banco relacional, escolhendo o índice por recall medido e custo, e decidir com evidência se um banco vetorial dedicado se justifica.',
    prerequisites: ['Módulo 5 (índices e caminhos de acesso)', 'Módulo 7 (planner)', 'Noção de embedding — a geração é assunto da trilha de IA'],
    problem: 'A adoção de RAG colocou busca vetorial em quase todo produto, e a decisão default virou "subir um banco vetorial". Na maior parte dos casos o volume cabe no Postgres que já existe, e adicionar um sistema novo traz sincronização, consistência e operação que ninguém orçou. A decisão certa depende de números que quase nunca são medidos.',
    concepts: ['Vetor como tipo de coluna e as métricas de distância', 'Busca exata versus aproximada: recall como parâmetro, não como defeito', 'HNSW: grafo navegável, `m`, `ef_construction` e `ef_search`', 'IVFFlat: listas, `probes` e a dependência dos dados no momento da criação', 'Recall medido contra a busca exata como referência', 'Filtro combinado com similaridade e a armadilha do pós-filtro', 'Custo de memória do índice e tempo de construção', 'Quando o banco dedicado se justifica'],
    internals: [
      'Índice vetorial é aproximado por construção: ele troca recall por latência, e o parâmetro de busca é o botão dessa troca — em tempo de consulta, no HNSW.',
      'HNSW constrói devagar e consome memória, e entrega latência baixa com recall alto; IVFFlat constrói rápido e depende de os dados no momento da criação representarem o conjunto final.',
      'Filtrar por metadado e ordenar por similaridade é onde a maioria erra: se o filtro é aplicado depois da busca aproximada, o resultado pode vir vazio mesmo havendo candidatos.',
      'Recall não é observável sem referência: precisa ser medido contra a busca exata no mesmo conjunto, e não estimado.'
    ],
    useWhen: ['Use pgvector quando os vetores cabem no banco que você já opera — o que cobre a maior parte dos casos.', 'Use HNSW quando a latência importa e há memória disponível.', 'Considere banco dedicado quando volume, latência ou funcionalidades específicas o exigirem, com medição que mostre.'],
    avoidWhen: ['Não adote banco vetorial separado antes de medir no que você já tem.', 'Não aceite o recall padrão sem medir contra a busca exata.', 'Não aplique filtro depois da busca aproximada esperando resultado completo.'],
    contrast: {
      bad: 'Subir um banco vetorial dedicado para 200 mil documentos, criando um segundo sistema para sincronizar e manter consistente com o Postgres.',
      good: 'Uma coluna de vetor na tabela que já existe, índice HNSW com recall medido e a mesma transação garantindo que documento e vetor nunca divergem.'
    },
    tradeoffs: ['HNSW dá latência baixa e custa memória e tempo de construção.', 'Recall alto dá resultado melhor e custa latência.', 'Banco dedicado oferece recursos especializados e adiciona sincronização, consistência e operação.'],
    production: 'Um sistema de busca interna adota banco vetorial dedicado. Seis meses depois, 4% dos documentos estão dessincronizados entre os dois sistemas, ninguém sabe desde quando, e não há reconciliação. A migração para pgvector na mesma transação do documento elimina a classe inteira de defeito, com latência equivalente no volume real.',
    risks: ['Dois sistemas divergindo sem reconciliação', 'Recall nunca medido', 'Pós-filtro devolvendo resultado vazio indevidamente', 'Índice não cabendo em memória e degradando em silêncio', 'Reconstrução de índice necessária após mudança de modelo de embedding'],
    checklist: ['Quantos vetores, de que dimensão, com que crescimento?', 'O recall foi medido contra a busca exata?', 'O filtro é aplicado antes ou depois da aproximação?', 'O índice cabe em memória?', 'Documento e vetor são escritos na mesma transação?'],
    interview: [
      { level: 'Pleno/Sênior', question: 'Por que um índice vetorial é aproximado?', expected: 'Porque a busca exata em alta dimensão exige comparar com tudo; o índice troca garantia de encontrar os vizinhos mais próximos por latência muito menor, com recall controlável por parâmetro.' },
      { level: 'Sênior/Expert', question: 'Quando você recusaria um banco vetorial dedicado?', expected: 'Quando o volume cabe no banco operacional e a medição mostra latência aceitável — porque o sistema separado adiciona sincronização, consistência eventual entre documento e vetor e mais um componente a operar, sem ganho demonstrado.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Criar uma coluna vetorial, inserir dados e comparar busca exata com HNSW no mesmo conjunto.', evidence: 'Latência e resultados das duas buscas, lado a lado.' },
      { level: 'Aplicado', task: 'Medir o recall do índice aproximado contra a busca exata variando o parâmetro de busca.', evidence: 'Curva recall × latência e o ponto escolhido, com justificativa.' },
      { level: 'Expert', task: 'Comparar filtro antes e depois da busca aproximada e demonstrar a diferença de resultado.', evidence: 'Consultas nas duas formas, resultados e recomendação de modelagem.' }
    ],
    challenge: 'Dimensionar a busca vetorial de um caso real e escrever o ADR que decide entre pgvector e banco dedicado — com recall, latência e custo medidos, não estimados.',
    book: 'Database Internals (estruturas de índice e o custo do acesso aproximado) como base; a geração de embeddings e a avaliação de RAG são a trilha de IA, módulos 16 e 17.',
    complements: [pgDocs('PostgreSQL 18 — Index Types', 'indexes-types.html'), { label: 'pgvector — documentação', url: 'https://github.com/pgvector/pgvector' }],
    exampleFile: '../../examples/database-senior/12-vector-search.sql'
  }),
  defineModule({
    number: 27,
    part: 'fronteira',
    id: 'ler-postgresql',
    title: 'Ler o PostgreSQL: código-fonte, extensões e comunidade',
    level: 'Expert → fronteira',
    objective: 'Responder uma dúvida de comportamento lendo o código e as listas do PostgreSQL, e distinguir o que é garantido do que é detalhe daquela versão.',
    prerequisites: ['Módulos 21–22', 'Inglês técnico de leitura', 'Git e leitura de histórico'],
    problem: 'A documentação do PostgreSQL é excelente e mesmo assim não responde tudo: por que esta estimativa, por que este lock, por que este comportamento mudou entre versões. As respostas estão no código, nos comentários — que são dos melhores da indústria — e no arquivo das listas de discussão, onde a decisão foi debatida.',
    concepts: ['Estrutura do repositório: `src/backend`, `src/include`, `contrib`', 'Os arquivos README dentro do código-fonte como documentação de projeto', 'Ler `nodeHashjoin.c`, `selfuncs.c` e `heapam.c`', 'Catálogo do sistema como fonte de verdade em runtime', 'Extensões: o mecanismo que torna o Postgres extensível', 'pgsql-hackers e o arquivo de discussões', 'Commitfest e como uma mudança entra', 'Construir do fonte e usar as ferramentas de desenvolvimento'],
    internals: [
      'Os READMEs dentro de `src/backend` explicam decisões de projeto que não estão na documentação do usuário — é o material mais subestimado do projeto.',
      'O que a documentação garante é contrato; o que o código faz além disso pode mudar na próxima versão sem aviso, e é aí que nasce a dependência frágil.',
      'A extensibilidade é arquitetural: tipos, operadores, métodos de índice e hooks são pontos de extensão previstos — pgvector é uma extensão, não um fork.',
      'Quase toda decisão não óbvia foi discutida em pgsql-hackers, e o arquivo é público e pesquisável.'
    ],
    useWhen: ['Use quando o comportamento observado contraria a documentação.', 'Use o arquivo das listas quando quiser saber por que algo é assim.', 'Use o catálogo do sistema para descobrir o estado real em runtime.'],
    avoidWhen: ['Não dependa de comportamento que a documentação não promete.', 'Não generalize do PostgreSQL para outros bancos.', 'Não escreva extensão em C sem contar o custo de manutenção e de build.'],
    contrast: {
      bad: 'Afirmar em revisão que "o Postgres sempre usa índice quando ele existe", com base em experiência pessoal.',
      good: 'Mostrar o trecho do estimador que decide, explicar a variável que inverte a escolha e demonstrar com EXPLAIN nos dois cenários.'
    },
    tradeoffs: ['Ler a fonte dá certeza e custa tempo.', 'Conhecer internals melhora o diagnóstico e tenta a depender do que não é garantido.', 'Extensão em C dá poder e adiciona build, compatibilidade por versão e manutenção.'],
    production: 'Um comportamento de lock muda após atualização de versão e um job passa a travar. A busca no arquivo das listas encontra a discussão que motivou a mudança, com a justificativa e o caso que ela corrige. O time ajusta o job com entendimento, em vez de reverter a versão inteira.',
    risks: ['Ler versão diferente da que roda em produção', 'Depender de detalhe de implementação', 'Confundir comentário desatualizado com comportamento atual', 'Extensão que trava a atualização de versão'],
    checklist: ['Estou lendo a mesma versão que roda em produção?', 'Isso é documentado ou é implementação?', 'Existe discussão sobre isso no arquivo das listas?', 'Consigo reproduzir minimamente?', 'O achado virou nota, teste ou ADR?'],
    interview: [
      { level: 'Pleno/Sênior', question: 'Onde você procuraria a razão de uma mudança de comportamento entre duas versões do PostgreSQL?', expected: 'Nas notas de versão primeiro, depois no commit correspondente e na discussão em pgsql-hackers — que costuma trazer o caso que motivou a mudança.' },
      { level: 'Sênior/Expert', question: 'Quando escrever uma extensão em C se justifica?', expected: 'Quando o ponto de extensão previsto resolve algo que SQL e procedural não resolvem, o ganho é grande e há quem mantenha por versão. Na maioria dos casos uma extensão existente ou uma função em linguagem procedural já cobre.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Consultar o catálogo do sistema para descobrir estatísticas, índices e bloat de uma tabela sem usar ferramenta externa.', evidence: 'Consultas ao catálogo com a interpretação de cada número.' },
      { level: 'Aplicado', task: 'Escolher uma dúvida real e respondê-la pelo código-fonte ou pelo arquivo das listas.', evidence: 'Documento com a pergunta, o caminho até a fonte, a citação e a reprodução mínima.' },
      { level: 'Expert', task: 'Construir o PostgreSQL do fonte e executar uma parte da suíte de regressão.', evidence: 'Build concluído, testes executados e registro dos obstáculos.' }
    ],
    challenge: 'Encontrar uma crença sua sobre o PostgreSQL que nunca foi verificada, confrontá-la com a documentação e o código, e registrar o resultado.',
    book: 'PostgreSQL 14 Internals (Rogov) como mapa antes de entrar no código; The Art of PostgreSQL (o que a linguagem e o servidor oferecem que costuma ser ignorado).',
    complements: [pgDocs('PostgreSQL 18 — System Catalogs', 'catalogs.html'), pgDocs('PostgreSQL 18 — Extending SQL', 'extend.html'), { label: 'PostgreSQL — código-fonte no GitHub', url: 'https://github.com/postgres/postgres' }, { label: 'pgsql-hackers — arquivo da lista', url: 'https://www.postgresql.org/list/pgsql-hackers/' }],
    exampleFile: '../../examples/database-senior/13-reading-postgres.sql'
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
    'Registrar uma URL HTTP(S) de evidência validada e concluir a revisão D30 antes de marcar Dominado.',
    'Fronteira (módulos 21–27) é opcional para o gate sênior e obrigatória para reivindicar nível expert.',
    'Fronteira concluída exige: um storage engine próprio que sobrevive a crash no pior instante, uma estimativa de cardinalidade corrigida pela causa e não por hint, um relatório medido em linha e em coluna, uma avaliação de banco distribuído com a garantia em vocabulário formal, um caso de "último que escreve vence" que estava perdendo dado, uma busca vetorial dimensionada com recall medido, e uma crença sobre o PostgreSQL confrontada com o código-fonte.'
  ])
});

/*
 * Gabarito de autoavaliação. Não substitui a evidência exigida pela rubrica:
 * serve para o estudo solo saber se a resposta estava certa antes de concluir.
 */
export const bancosAnswerKey = bancosModules.map((module) => ({
  module: module.number,
  title: module.title,
  objetivoAtingido: module.objective,
  respostaEsperadaNaEntrevista: (module.interview || []).map((item) => `${item.level}: ${item.expected}`),
  erroMaisComum: module.contrast?.bad || module.risks?.[0] || 'Concluir sem medir.',
  criterioDeAceite: (module.exercises || []).map((item) => `${item.level} — evidência: ${item.evidence}`),
  sinalDeQueNaoDominou: module.risks || []
}));
