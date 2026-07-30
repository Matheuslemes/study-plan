/*
 * PYTHON ADVANCED — fonte única do aprofundamento sênior/expert da trilha de
 * Python (backend, automação e IA aplicada).
 *
 * Conteúdo original, ancorado nos 8 livros locais (public/pdfs/livros-python)
 * e em fontes primárias oficiais registradas abaixo. Não contém transcrições.
 */

export const PY_RESEARCH_DATE = '2026-07-27';

const official = {
  datamodel: { label: 'Python — Data Model', url: 'https://docs.python.org/3/reference/datamodel.html' },
  stdtypes: { label: 'Python — Built-in Types', url: 'https://docs.python.org/3/library/stdtypes.html' },
  pep8: { label: 'PEP 8 — Style Guide', url: 'https://peps.python.org/pep-0008/' },
  pep20: { label: 'PEP 20 — The Zen of Python', url: 'https://peps.python.org/pep-0020/' },
  typing: { label: 'Python — typing', url: 'https://docs.python.org/3/library/typing.html' },
  mypy: { label: 'mypy — Static typing', url: 'https://mypy.readthedocs.io/' },
  asyncio: { label: 'Python — asyncio', url: 'https://docs.python.org/3/library/asyncio.html' },
  concurrent: { label: 'concurrent.futures', url: 'https://docs.python.org/3/library/concurrent.futures.html' },
  multiprocessing: { label: 'multiprocessing', url: 'https://docs.python.org/3/library/multiprocessing.html' },
  itertools: { label: 'itertools', url: 'https://docs.python.org/3/library/itertools.html' },
  contextlib: { label: 'contextlib', url: 'https://docs.python.org/3/library/contextlib.html' },
  pytest: { label: 'pytest', url: 'https://docs.pytest.org/' },
  packaging: { label: 'Python Packaging User Guide', url: 'https://packaging.python.org/' },
  venv: { label: 'venv — Virtual Environments', url: 'https://docs.python.org/3/library/venv.html' },
  cosmic: { label: 'cosmicpython.com (livro online)', url: 'https://www.cosmicpython.com/' },
  numpy: { label: 'NumPy Documentation', url: 'https://numpy.org/doc/stable/' },
  pandas: { label: 'pandas Documentation', url: 'https://pandas.pydata.org/docs/' },
  profiling: { label: 'Python — Profilers', url: 'https://docs.python.org/3/library/profile.html' },
  logging: { label: 'Python — logging', url: 'https://docs.python.org/3/library/logging.html' },
  httpx: { label: 'HTTPX', url: 'https://www.python-httpx.org/' },
  fastapi: { label: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
  dataclasses: { label: 'dataclasses', url: 'https://docs.python.org/3/library/dataclasses.html' }
};

export const pythonBooks = Object.freeze({
  fluent: {
    title: 'Fluent Python (2ª ed)',
    authors: 'Luciano Ramalho',
    edition: '2ª edição',
    year: '2022',
    language: 'Inglês',
    pages: 1012,
    path: '/pdfs/livros-python/Fluent Python - clear, concise, and effective programming -- Luciano Ramalho -- ( WeLib.org ).epub.pdf',
    depth: 'Intermediário → expert',
    prerequisites: 'Python básico e orientação a objetos',
    structure: 'Data model, estruturas, funções, OO idiomática, controle de fluxo, metaprogramação',
    limitations: 'Foco na linguagem e no idioma; não cobre frameworks web nem ML.'
  },
  effective: {
    title: 'Effective Python (2ª ed)',
    authors: 'Brett Slatkin',
    edition: '2ª edição',
    year: '2019',
    language: 'Inglês',
    pages: 480,
    path: '/pdfs/livros-python/Effective Python- 90 Specific Ways to Write Better Python, -- Brett Slatkin [Brett Slatkin] -- ( WeLib.org ).pdf',
    depth: 'Intermediário',
    prerequisites: 'Python em uso diário',
    structure: '90 itens práticos: pythonismo, funções, classes, concorrência, robustez e testes',
    limitations: 'Formato de itens; não é referência linear de um tema único.'
  },
  robust: {
    title: 'Robust Python',
    authors: 'Patrick Viafore',
    edition: '1ª edição',
    year: '2021',
    language: 'Inglês',
    pages: 380,
    path: '/pdfs/livros-python/Robust Python Write Clean and Maintainable Code (Patrick Viafore) (Z-Library).pdf',
    depth: 'Intermediário → sênior',
    prerequisites: 'Python e noções de manutenção de código',
    structure: 'Type hints, tipos próprios, enums, dataclasses, protocols, plugins e testes',
    limitations: 'Ênfase em robustez e tipagem; não aborda performance nem dados.'
  },
  cookbook: {
    title: 'Python Cookbook (3ª ed)',
    authors: 'David Beazley e Brian K. Jones',
    edition: '3ª edição',
    year: '2013',
    language: 'Inglês',
    pages: 706,
    path: '/pdfs/livros-python/D. Beazley, B.K. Jones - Python Cookbook, 3rd Edition. 2013.pdf',
    depth: 'Intermediário → avançado',
    prerequisites: 'Python intermediário',
    structure: 'Receitas por tema: dados, iteradores, funções, classes, metaprogramação e concorrência',
    limitations: 'Edição anterior a async/await moderno; receitas conceituais permanecem válidas.'
  },
  highperf: {
    title: 'High Performance Python (2ª ed)',
    authors: 'Micha Gorelick e Ian Ozsvald',
    edition: '2ª edição',
    year: '2020',
    language: 'Inglês',
    pages: 468,
    path: '/pdfs/livros-python/High Performance Python, 2nd Edition -- Gorelick, Micha & Ozsvald, Ian -- ( WeLib.org ).epub.pdf',
    depth: 'Avançado',
    prerequisites: 'Python e noções de estruturas de dados',
    structure: 'Profiling, listas/arrays, dicts, memória, numpy, compiladores, concorrência e clusters',
    limitations: 'Foco em performance; assume que a corretude e o design já estão resolvidos.'
  },
  asyncio: {
    title: 'Using Asyncio in Python',
    authors: 'Caleb Hattingh',
    edition: '1ª edição',
    year: '2020',
    language: 'Inglês',
    pages: 166,
    path: '/pdfs/livros-python/Using Asyncio in Python -- Caleb Hattingh -- ( WeLib.org ).epub.pdf',
    depth: 'Intermediário → avançado',
    prerequisites: 'Python e conceito de I/O concorrente',
    structure: 'Modelo mental do asyncio, event loop, corrotinas, APIs e armadilhas comuns',
    limitations: 'Escopo restrito ao asyncio; não cobre paralelismo de CPU.'
  },
  cosmic: {
    title: 'Architecture Patterns with Python (Cosmic Python)',
    authors: 'Harry Percival e Bob Gregory',
    edition: '1ª edição',
    year: '2020',
    language: 'Inglês',
    pages: 304,
    path: '/pdfs/livros-python/Architecture Patterns with Python -- Bob Gregory & Harry Percival [Gregory, Bob & Percival, -- ( WeLib.org ).epub.pdf',
    depth: 'Intermediário → sênior',
    prerequisites: 'Python, OO e testes',
    structure: 'DDD, repository, unit of work, service layer, eventos, CQRS e injeção de dependência',
    limitations: 'Ensina padrões de backend; não é introdução à linguagem.'
  },
  automate: {
    title: 'Automate the Boring Stuff with Python (Automatize Tarefas Maçantes)',
    authors: 'Al Sweigart',
    edition: '2ª edição',
    year: '2019',
    language: 'Português (tradução)',
    pages: 592,
    path: '/pdfs/livros-python/Automatize tarefas maçantes com Python- Programação prática -- by Al Sweigart -- ( WeLib.org ).mobi.pdf',
    depth: 'Base → intermediário',
    prerequisites: 'Lógica de programação',
    structure: 'Automação prática: arquivos, regex, planilhas, PDFs, web scraping, e-mail e GUI',
    limitations: 'Foco em automação prática; não aprofunda arquitetura nem performance.'
  }
});

export const pythonAcademy = Object.freeze({
  title: 'Academia de Python',
  baseline: 'Python 3.12+, código idiomático, tipado, testado e mensurável',
  book: 'Fluent Python (Ramalho) como espinha dorsal da linguagem; obras específicas por tema',
  parts: {
    fundamentos: {
      index: '1/5',
      range: 'Módulos 1–5',
      title: 'Linguagem e modelo de dados',
      subtitle: 'Data model, estruturas built-in, funções de primeira classe, OO idiomática e tipagem robusta.',
      prerequisites: [
        'Escrever e executar scripts Python e ler tracebacks.',
        'Conhecer sintaxe de funções, classes, condicionais e loops.',
        'Ter usado listas, dicionários e imports.'
      ],
      objectives: [
        'Explicar o comportamento de objetos Python pelos protocolos do data model.',
        'Escolher a estrutura de dados built-in certa por semântica e custo.',
        'Usar funções de primeira classe, closures e decorators com intenção.',
        'Modelar com OO idiomática e tornar contratos explícitos com type hints.'
      ]
    },
    qualidade: {
      index: '2/5',
      range: 'Módulos 6–10',
      title: 'Idiomas, testes e arquitetura',
      subtitle: 'Iteração preguiçosa, código pythônico, ambientes, testes com pytest e arquitetura de aplicações.',
      prerequisites: [
        'Dominar os módulos 1–5 ou demonstrar equivalência no diagnóstico.',
        'Ter estruturado um projeto Python com vários módulos.',
        'Saber usar Git em um fluxo básico.'
      ],
      objectives: [
        'Construir pipelines preguiçosos com iteradores, geradores e context managers.',
        'Escrever código pythônico legível e evitar as armadilhas clássicas.',
        'Isolar ambientes, versionar dependências e empacotar projetos.',
        'Testar com pytest e desenhar aplicações com fronteiras testáveis.'
      ]
    },
    performance: {
      index: '3/5',
      range: 'Módulos 11–15',
      title: 'Concorrência, assíncrono e performance',
      subtitle: 'GIL, asyncio, paralelismo, otimização orientada a medida e computação numérica com NumPy.',
      prerequisites: [
        'Dominar iteração, funções e testes das partes anteriores.',
        'Entender o conceito de I/O bloqueante versus CPU-bound.',
        'Saber medir tempo e ler um profile simples.'
      ],
      objectives: [
        'Escolher threads, processos ou asyncio conforme o perfil da carga.',
        'Escrever I/O concorrente correto com asyncio, sem bloquear o event loop.',
        'Paralelizar trabalho de CPU com processos e medir o ganho real.',
        'Otimizar por evidência e vetorizar com NumPy em vez de laços Python.'
      ]
    },
    producao: {
      index: '4/5',
      range: 'Módulos 16–20',
      title: 'Automação, dados, IA e produção',
      subtitle: 'Automação prática, pandas, integração com APIs, IA aplicada e operação de serviços Python.',
      prerequisites: [
        'Dominar concorrência e performance da parte anterior.',
        'Conhecer HTTP, JSON e o básico de bancos de dados.',
        'Ter construído ao menos um serviço ou script útil de ponta a ponta.'
      ],
      objectives: [
        'Automatizar tarefas repetitivas de forma confiável e reprodutível.',
        'Transformar dados com pandas em pipelines documentados.',
        'Integrar sistemas com clientes HTTP resilientes e contratos claros.',
        'Levar um modelo do notebook à API observável, segura e em produção.'
      ]
    },
    avaliacao: {
      index: '5/5',
      range: 'Evidência',
      title: 'Avaliação, casos e capstones',
      subtitle: 'Rubricas por senioridade, estudos de caso, projetos e biblioteca técnica rastreável.',
      prerequisites: [
        'Concluir os exercícios aplicados dos módulos relacionados ao caso escolhido.',
        'Manter código tipado, testado e versionado no repositório.',
        'Aceitar revisão técnica baseada em evidência, não apenas em execução.'
      ],
      objectives: [
        'Resolver casos ambíguos justificando trade-offs sob restrições reais.',
        'Produzir um portfólio auditável com testes, tipos, medições e documentação.',
        'Demonstrar diagnóstico de bug, contenção ou lentidão com evidência.',
        'Responder entrevistas de Python com critérios de correção transparentes.'
      ]
    }
  }
});

export const pythonModules = [
  {
    number: 1,
    part: 'fundamentos',
    id: 'modelo-de-dados',
    title: 'O modelo de dados do Python: objetos, protocolos e métodos especiais',
    level: 'Base sênior',
    objective: 'Explicar e implementar o comportamento de objetos Python usando os métodos especiais (dunder) do data model, em vez de tratar a linguagem como caixa preta.',
    prerequisites: ['Python básico', 'Classes e objetos', 'Leitura de tracebacks'],
    problem: 'Sem entender o data model, o desenvolvedor luta contra a linguagem: reimplementa o que os protocolos já dão, escreve APIs não-pythônicas e se surpreende com o comportamento de `len`, `in`, `==`, iteração e formatação.',
    concepts: ['Métodos especiais (dunder) e protocolos', '__repr__ vs __str__', '__eq__, __hash__ e igualdade', '__len__, __getitem__, __iter__ e __contains__', 'Modelo de objeto: identidade, tipo e valor'],
    internals: ['Operadores e funções built-in delegam para dunder methods: `len(x)` chama `x.__len__()`.', 'Implementar `__getitem__` e `__len__` já torna o objeto indexável e iterável por fallback.', 'Se você define `__eq__`, precisa cuidar de `__hash__` para o objeto continuar utilizável em set e dict.'],
    useWhen: ['Implemente dunder methods para integrar seu objeto aos protocolos da linguagem.', 'Forneça `__repr__` útil e inequívoco para todo objeto de domínio.', 'Use o data model para tornar a API pythônica em vez de inventar métodos próprios.'],
    avoidWhen: ['Não reimplemente comportamento que um protocolo já oferece.', 'Não defina `__eq__` sem revisar `__hash__`.', 'Não use `__del__` para gerenciar recursos: prefira context managers.'],
    contrast: {
      bad: 'Uma classe Vetor com métodos `somar()`, `igual()` e `tamanho()`, incompatível com `+`, `==` e `len`.',
      good: 'Vetor com `__add__`, `__eq__`, `__hash__`, `__len__` e `__repr__`: integra-se aos operadores e às built-ins.'
    },
    tradeoffs: ['Dunder methods integram à linguagem e exigem respeitar contratos (ex.: __eq__/__hash__).', 'repr detalhado ajuda o debug e adiciona código a manter.', 'Objetos ricos são expressivos e podem esconder custo em operadores sobrecarregados.'],
    production: 'Um objeto de valor entra em um set e some silenciosamente porque `__eq__` foi definido sem `__hash__`. O exercício reproduz o bug e corrige respeitando o contrato de hashing.',
    risks: ['Objeto sem __repr__ útil', '__eq__ sem __hash__', 'Mutável usado como chave de dict', 'API não-pythônica'],
    checklist: ['Meu objeto tem __repr__ inequívoco?', 'A igualdade e o hash são consistentes?', 'Uso o protocolo certo em vez de método próprio?', 'O objeto é imutável se for chave?', 'Aproveito as built-ins via dunder?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual a diferença entre __repr__ e __str__?', expected: '__repr__ é a representação inequívoca para desenvolvedores (idealmente reconstruível); __str__ é a legível para o usuário. Sem __str__, o print recai no __repr__.' },
      { level: 'Sênior/Expert', question: 'Por que definir __eq__ exige cuidar de __hash__?', expected: 'Objetos iguais devem ter o mesmo hash para funcionar em set/dict; definir __eq__ sem __hash__ torna o objeto não-hasheável (ou inconsistente), quebrando coleções baseadas em hash.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Implementar uma classe Money com __repr__, __eq__ e __hash__.', evidence: 'Testes de igualdade e uso em set.' },
      { level: 'Aplicado', task: 'Tornar uma classe iterável e indexável só com __getitem__ e __len__.', evidence: 'Teste de iteração, slicing e `in`.' },
      { level: 'Expert', task: 'Reproduzir e corrigir um bug de objeto mutável usado como chave de dict.', evidence: 'Antes/depois com explicação do contrato de hash.' }
    ],
    challenge: 'Implementar um tipo de domínio (ex.: Vetor N-dimensional) totalmente integrado ao data model: operadores, igualdade, hash, repr, iteração e formatação.',
    book: 'Fluent Python, cap. 1 (data model) e cap. 6 (referências, mutabilidade, igualdade).',
    complements: [official.datamodel, official.pep20],
    exampleFile: '../../examples/python-senior/README.md'
  },
  {
    number: 2,
    part: 'fundamentos',
    id: 'estruturas-dados',
    title: 'Estruturas de dados built-in: escolha idiomática e custo',
    level: 'Base sênior',
    objective: 'Escolher entre list, tuple, dict, set e suas variantes por semântica e complexidade, e usar compreensões e desempacotamento de forma idiomática.',
    prerequisites: ['Módulo 1', 'Coleções básicas', 'Noção de complexidade'],
    problem: 'Usar a estrutura errada custa performance e clareza: busca linear em list onde um set resolveria em O(1), dict manual onde um defaultdict/Counter existe, ou tuplas gigantes onde um dataclass comunicaria melhor.',
    concepts: ['list, tuple, dict, set e frozenset', 'Compreensões de list, dict e set; expressões geradoras', 'Desempacotamento, star e pattern matching (match)', 'collections: deque, defaultdict, Counter, namedtuple', 'Complexidade das operações e escolha por acesso'],
    internals: ['dict e set usam tabela hash: pertencimento e acesso por chave são O(1) amortizado.', 'list dá índice O(1) e busca/insert no início O(n); deque dá O(1) nas duas pontas.', 'Compreensões são mais rápidas e claras que loops com append para construir coleções.'],
    useWhen: ['Use set para pertencimento e deduplicação; dict para mapeamento por chave.', 'Use compreensões para transformar/filtrar coleções de forma declarativa.', 'Use collections (Counter, defaultdict, deque) em vez de reinventar.'],
    avoidWhen: ['Não faça busca de pertencimento repetida em list (O(n)); converta para set.', 'Não abuse de compreensões aninhadas ilegíveis; prefira um loop nomeado.', 'Não use lista como fila (pop(0) é O(n)); use deque.'],
    contrast: {
      bad: 'Verificar `if item in lista` milhares de vezes dentro de um loop sobre uma lista grande.',
      good: 'Converter para `conjunto = set(lista)` uma vez e testar `if item in conjunto` em O(1).'
    },
    tradeoffs: ['set/dict dão O(1) e cobram memória e exigem chaves hasheáveis.', 'Compreensões são concisas e podem ficar ilegíveis quando aninhadas.', 'namedtuple/dataclass comunicam intenção e adicionam tipos ao projeto.'],
    production: 'Um endpoint fica lento porque valida pertencimento em uma lista de milhares de itens a cada requisição. O exercício troca por set e mede a queda de latência.',
    risks: ['Busca linear desnecessária', 'pop(0) em list', 'Chave mutável em dict', 'Compreensão ilegível'],
    checklist: ['A estrutura combina com o padrão de acesso?', 'Preciso de O(1) para pertencimento?', 'Uma compreensão fica mais clara aqui?', 'Existe um tipo em collections que já resolve?', 'As chaves são hasheáveis e imutáveis?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Quando usar set em vez de list?', expected: 'Quando importa pertencimento rápido (O(1)) ou unicidade; list mantém ordem e permite duplicatas, mas busca é O(n).' },
      { level: 'Sênior/Expert', question: 'Por que `lista.pop(0)` é problemático em laços?', expected: 'Remover do início de uma list é O(n) porque desloca todos os elementos; em laço vira O(n²). Uma deque oferece pop nas duas pontas em O(1).' }
    ],
    exercises: [
      { level: 'Básico', task: 'Reescrever três loops com append como compreensões equivalentes.', evidence: 'Código antes/depois com testes.' },
      { level: 'Aplicado', task: 'Substituir estruturas manuais por Counter, defaultdict e deque.', evidence: 'Diff com simplificação e testes.' },
      { level: 'Expert', task: 'Medir e corrigir um gargalo O(n²) causado por estrutura inadequada.', evidence: 'Benchmark antes/depois.' }
    ],
    challenge: 'Implementar um agregador de logs que conte, agrupe e ordene eventos usando apenas estruturas idiomáticas e provando a complexidade escolhida.',
    book: 'Fluent Python, cap. 2–3 (sequências, dicts e sets); Python Cookbook, cap. 1.',
    complements: [official.stdtypes, official.itertools],
    exampleFile: '../../examples/python-senior/README.md'
  },
  {
    number: 3,
    part: 'fundamentos',
    id: 'funcoes-decorators',
    title: 'Funções de primeira classe, closures e decorators',
    level: 'Base sênior → sênior',
    objective: 'Usar funções como valores, entender closures e escrever decorators corretos que preservam metadados e adicionam comportamento transversal sem acoplar.',
    prerequisites: ['Módulos 1–2', 'Funções e escopo', 'Argumentos e *args/**kwargs'],
    problem: 'Sem domínio de funções de primeira classe e closures, o desenvolvedor duplica lógica transversal (log, cache, retry, timing) espalhada pelo código, e escreve decorators que quebram assinatura, docstring e introspecção.',
    concepts: ['Funções como objetos de primeira classe', 'Escopo, LEGB e a palavra-chave nonlocal', 'Closures e estado capturado', 'Decorators e functools.wraps', 'functools: partial, lru_cache, reduce'],
    internals: ['Uma closure captura variáveis por referência ao ambiente, não por cópia do valor.', 'Um decorator é apenas uma função que recebe e devolve uma função; @deco é açúcar para f = deco(f).', 'Sem functools.wraps, o decorator apaga nome, docstring e assinatura da função original.'],
    useWhen: ['Use decorator para comportamento transversal reutilizável (log, cache, retry, autorização).', 'Use closures para configurar comportamento sem criar uma classe inteira.', 'Use functools.lru_cache para memoização de funções puras.'],
    avoidWhen: ['Não escreva decorator sem functools.wraps.', 'Não capture variável de loop em closure esperando o valor da iteração.', 'Não esconda efeito colateral pesado dentro de um decorator silencioso.'],
    contrast: {
      bad: 'Colar o mesmo bloco de try/log/timing no início de vinte funções diferentes.',
      good: 'Um decorator @timed com functools.wraps aplicado às funções que precisam de medição.'
    },
    tradeoffs: ['Decorators removem duplicação e adicionam indireção ao rastrear o fluxo.', 'lru_cache acelera e cobra memória e exige função pura.', 'Closures são leves e podem esconder estado difícil de inspecionar.'],
    production: 'Um decorator de cache aplicado a uma função com efeito colateral serve resultado velho e mascara um bug. O exercício separa pureza de efeito e corrige o uso do cache.',
    risks: ['Decorator sem wraps', 'Late binding em closure de loop', 'Cache em função impura', 'Decorator com efeito oculto'],
    checklist: ['O decorator usa functools.wraps?', 'A closure captura o valor esperado?', 'A função memoizada é pura?', 'A ordem dos decorators está correta?', 'O comportamento transversal está desacoplado?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que é um decorator em Python?', expected: 'Uma função (ou classe) que recebe uma função e devolve outra que a envolve, adicionando comportamento; @deco equivale a f = deco(f).' },
      { level: 'Sênior/Expert', question: 'Por que usar functools.wraps ao escrever um decorator?', expected: 'Para preservar nome, docstring, assinatura e __wrapped__ da função original, mantendo a introspecção e ferramentas (help, debuggers, frameworks) funcionando.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Escrever um decorator @timed que preserve metadados com functools.wraps.', evidence: 'Teste verificando __name__ e __doc__.' },
      { level: 'Aplicado', task: 'Implementar retry com backoff como decorator parametrizado.', evidence: 'Teste que simula falhas transitórias.' },
      { level: 'Expert', task: 'Reproduzir e corrigir o bug clássico de late binding em closure de loop.', evidence: 'Antes/depois com explicação.' }
    ],
    challenge: 'Construir uma pequena biblioteca de decorators (timing, retry, cache, rate limit) correta, tipada e testada, com preservação de metadados.',
    book: 'Fluent Python, cap. 7–9 (funções, closures, decorators); Python Cookbook, cap. 9.',
    complements: [official.datamodel, official.pep8],
    exampleFile: '../../examples/python-senior/README.md'
  },
  {
    number: 4,
    part: 'fundamentos',
    id: 'oo-idiomatico',
    title: 'OO idiomática: properties, ABCs, protocols e composição',
    level: 'Sênior',
    objective: 'Modelar objetos de forma pythônica escolhendo entre herança, composição, classes abstratas (ABC) e protocols (duck typing estático), com dataclasses para dados.',
    prerequisites: ['Módulos 1–3', 'OO básica', 'Encapsulamento'],
    problem: 'Trazer padrões de Java para Python gera getters/setters desnecessários, hierarquias de herança rígidas e interfaces cerimoniais, ignorando duck typing, properties, dataclasses e protocols.',
    concepts: ['property e atributos computados', 'Duck typing e o protocolo informal', 'ABCs (abstract base classes) vs Protocols (PEP 544)', 'dataclasses e objetos de valor', 'Herança vs composição e mixins'],
    internals: ['Em Python não se criam getters/setters por padrão: expõe-se o atributo e migra-se para property se necessário, sem quebrar a API.', 'Protocols permitem tipagem estrutural: qualquer objeto com os métodos certos satisfaz o tipo, sem herança.', 'dataclass gera __init__, __repr__ e __eq__ a partir dos campos declarados.'],
    useWhen: ['Use property quando um atributo precisa de validação ou cálculo, mantendo a interface de atributo.', 'Use Protocol para depender de comportamento sem impor hierarquia.', 'Use dataclass para agrupar dados com pouca cerimônia.'],
    avoidWhen: ['Não crie getters/setters triviais em vez de atributos.', 'Não use herança para reutilizar código quando composição serve.', 'Não abuse de herança múltipla criando MRO difícil de entender.'],
    contrast: {
      bad: 'Uma classe com `get_nome()`/`set_nome()` para cada campo e uma árvore de herança de cinco níveis.',
      good: 'dataclass para os dados, property onde há validação e um Protocol para o contrato consumido.'
    },
    tradeoffs: ['property mantém a interface e adiciona lógica escondida em acesso.', 'Protocols desacoplam e não são verificados em runtime por padrão.', 'Herança reutiliza e acopla; composição desacopla e adiciona delegação.'],
    production: 'Uma hierarquia de herança rígida impede adicionar um novo tipo sem tocar na base. O exercício refatora para composição e um Protocol, reduzindo o acoplamento.',
    risks: ['Getters/setters à la Java', 'Herança para reúso', 'MRO complexo', 'Interface cerimonial sem duck typing'],
    checklist: ['Preciso mesmo de uma classe aqui?', 'Property comunica melhor que método?', 'O contrato pode ser um Protocol?', 'Composição resolveria melhor que herança?', 'dataclass simplificaria estes dados?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que Python raramente usa getters e setters?', expected: 'Porque o acesso a atributo é uniforme e pode virar property depois sem quebrar a API; cria-se getter/setter só quando há validação ou cálculo, via @property.' },
      { level: 'Sênior/Expert', question: 'Qual a diferença entre ABC e Protocol?', expected: 'ABC usa herança nominal e pode exigir registro/subclasse; Protocol usa tipagem estrutural (duck typing estático): qualquer objeto com os métodos certos satisfaz o tipo, sem herdar.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Converter uma classe cheia de getters/setters em atributos e properties.', evidence: 'Diff mantendo a interface pública.' },
      { level: 'Aplicado', task: 'Definir um Protocol e programar contra ele em vez de uma classe concreta.', evidence: 'Teste com implementações independentes.' },
      { level: 'Expert', task: 'Refatorar uma hierarquia de herança para composição com injeção.', evidence: 'Antes/depois com acoplamento reduzido.' }
    ],
    challenge: 'Modelar um subsistema com dataclasses para dados, Protocols para contratos e composição para comportamento, provando a extensibilidade com um novo tipo.',
    book: 'Fluent Python, cap. 11–14 (interfaces, protocols, herança); Robust Python, cap. 10–12.',
    complements: [official.dataclasses, official.typing],
    exampleFile: '../../examples/python-senior/README.md'
  },
  {
    number: 5,
    part: 'fundamentos',
    id: 'tipos-robustez',
    title: 'Type hints, mypy e Python robusto',
    level: 'Sênior',
    objective: 'Usar anotações de tipo e verificação estática (mypy) para tornar contratos explícitos, capturar erros antes da execução e comunicar intenção em código de manutenção longa.',
    prerequisites: ['Módulos 1–4', 'Funções e classes', 'Módulos e imports'],
    problem: 'Código Python não tipado esconde contratos: parâmetros aceitam qualquer coisa, refatorações quebram silenciosamente e o significado de estruturas complexas só vive na cabeça de quem escreveu.',
    concepts: ['Anotações de tipo e o módulo typing', 'Optional, Union (X | Y), Any e tipos genéricos', 'mypy e verificação estática gradual', 'TypedDict, NewType, Literal e Enum', 'Tipos próprios para evitar primitive obsession'],
    internals: ['Anotações não são checadas em runtime pelo interpretador; servem a ferramentas como mypy e IDEs.', 'Tipagem gradual permite adotar tipos módulo a módulo, sem tudo de uma vez.', 'Trocar tipos primitivos por tipos de domínio elimina classes inteiras de bugs de argumento trocado.'],
    useWhen: ['Anote fronteiras públicas: assinaturas de funções, atributos e retornos.', 'Rode mypy no CI para transformar contratos em verificação executável.', 'Crie tipos próprios (NewType, Enum, dataclass) para conceitos de domínio.'],
    avoidWhen: ['Não use Any para silenciar o mypy sem entender o tipo real.', 'Não confie em anotações como validação em runtime.', 'Não superenganeje tipos genéricos onde um tipo simples basta.'],
    contrast: {
      bad: 'def cobrar(valor, moeda, usuario): ... sem tipos, aceitando qualquer combinação inválida.',
      good: 'def cobrar(valor: Money, usuario: UserId) -> Cobranca: com mypy travando usos incorretos.'
    },
    tradeoffs: ['Tipos capturam erros cedo e adicionam esforço de anotação.', 'mypy no CI dá garantia e exige manter as anotações corretas.', 'Tipos de domínio reduzem bugs e aumentam o número de tipos no projeto.'],
    production: 'Um argumento de moeda trocado com o de valor passa despercebido e gera cobrança errada. O exercício introduz tipos de domínio e mypy que travam o erro no CI.',
    risks: ['Any generalizado', 'Anotação como falsa validação', 'Primitive obsession', 'Tipos ignorados no CI'],
    checklist: ['As fronteiras públicas estão anotadas?', 'O mypy roda no CI sem erros suprimidos?', 'Optional está explícito onde há None?', 'Um tipo de domínio evitaria este bug?', 'Evitei Any onde há tipo conhecido?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'As anotações de tipo são verificadas quando o programa roda?', expected: 'Não; o interpretador as ignora em runtime. Elas servem a verificadores estáticos (mypy), IDEs e documentação; a validação em runtime exige código explícito ou libs como pydantic.' },
      { level: 'Sênior/Expert', question: 'Como a tipagem ajuda a evitar primitive obsession?', expected: 'Trocando str/float genéricos por tipos de domínio (NewType, Enum, dataclass) que impedem combinações inválidas e argumentos trocados, deixando o compilador estático pegar o erro.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Anotar um módulo existente e fazer o mypy passar sem Any.', evidence: 'Relatório do mypy limpo.' },
      { level: 'Aplicado', task: 'Introduzir NewType/Enum para eliminar argumentos primitivos trocáveis.', evidence: 'Teste de tipos com caso inválido rejeitado pelo mypy.' },
      { level: 'Expert', task: 'Adicionar mypy ao CI e corrigir os contratos que ele revelar.', evidence: 'Pipeline travando em erro de tipo.' }
    ],
    challenge: 'Tipar um módulo de regras de negócio com tipos de domínio, TypedDict/Protocol onde couber, e mypy em modo estrito verde no CI.',
    book: 'Robust Python, cap. 1–9 (tipagem, tipos próprios, enums, dataclasses, protocols).',
    complements: [official.typing, official.mypy],
    exampleFile: '../../examples/python-senior/adr/0001-typing-strategy.md'
  },
  {
    number: 6,
    part: 'qualidade',
    id: 'iteradores-geradores',
    title: 'Iteradores, geradores e context managers',
    level: 'Sênior',
    objective: 'Processar dados de forma preguiçosa com iteradores e geradores para controlar memória, e gerenciar recursos com segurança usando context managers.',
    prerequisites: ['Módulos 1–3', 'Loops e funções', 'Exceptions'],
    problem: 'Carregar tudo na memória (ler um arquivo gigante em uma lista) estoura recursos; abrir arquivos, conexões e locks sem garantir fechamento vaza recursos e causa erros intermitentes em produção.',
    concepts: ['Protocolo de iteração: __iter__ e __next__', 'Geradores com yield e expressões geradoras', 'Avaliação preguiçosa e itertools', 'Context managers: with, __enter__/__exit__ e contextlib', 'yield from e composição de geradores'],
    internals: ['Um gerador produz itens sob demanda e mantém o estado entre chamadas, usando memória constante.', 'O with garante __exit__ mesmo em caso de exceção, fechando o recurso de forma determinística.', 'itertools compõe pipelines preguiçosos sem materializar coleções intermediárias.'],
    useWhen: ['Use geradores para processar streams ou dados grandes sem carregar tudo.', 'Use context manager para todo recurso que precisa ser liberado (arquivo, conexão, lock).', 'Use itertools para compor transformações preguiçosas.'],
    avoidWhen: ['Não materialize em list o que pode ser consumido preguiçosamente.', 'Não gerencie recursos com try/finally manual quando um with resolve.', 'Não itere um gerador duas vezes esperando reprocessar (ele se esgota).'],
    contrast: {
      bad: 'linhas = arquivo.read().split(chr(10)); processar(linhas) carregando 5 GB na memória.',
      good: 'for linha in arquivo: processar(linha), lendo sob demanda dentro de um with.'
    },
    tradeoffs: ['Geradores economizam memória e só permitem uma passada e sem índice.', 'Context managers garantem liberação e adicionam uma estrutura a escrever.', 'Pipelines preguiçosos escalam e dificultam a depuração passo a passo.'],
    production: 'Um job de ETL consome toda a memória do container ao carregar um CSV enorme em lista. O exercício converte o pipeline para geradores e mede o uso constante de memória.',
    risks: ['Materialização desnecessária', 'Recurso não liberado', 'Gerador reiterado', 'try/finally manual frágil'],
    checklist: ['Este dado precisa estar todo em memória?', 'O recurso é liberado por um context manager?', 'Um gerador simplificaria o pipeline?', 'O gerador é consumido só uma vez?', 'itertools evitaria coleções intermediárias?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual a vantagem de um gerador sobre uma lista?', expected: 'Produz itens sob demanda com memória constante, ideal para streams e dados grandes; a lista materializa tudo de uma vez.' },
      { level: 'Sênior/Expert', question: 'Por que usar with em vez de try/finally para recursos?', expected: 'O context manager encapsula a aquisição e liberação, garante __exit__ mesmo com exceção, reduz repetição e evita esquecer o fechamento; é o idioma pythônico para recursos.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Reescrever um processamento de arquivo carregado em lista como pipeline de geradores.', evidence: 'Comparação de uso de memória.' },
      { level: 'Aplicado', task: 'Escrever um context manager com contextlib para medir e liberar um recurso.', evidence: 'Teste com exceção garantindo liberação.' },
      { level: 'Expert', task: 'Compor um pipeline de ETL preguiçoso com itertools e geradores encadeados.', evidence: 'Memória constante sob volume crescente.' }
    ],
    challenge: 'Construir um pipeline de ETL que leia um arquivo grande, transforme e agregue com geradores e itertools, mantendo memória constante e recursos liberados.',
    book: 'Fluent Python, cap. 17 (iteradores/geradores) e cap. 18 (context managers); Cookbook cap. 4.',
    complements: [official.itertools, official.contextlib],
    exampleFile: '../../examples/python-senior/README.md'
  },
  {
    number: 7,
    part: 'qualidade',
    id: 'pythonic-efetivo',
    title: 'Código pythônico e efetivo: idiomas, armadilhas e legibilidade',
    level: 'Sênior',
    objective: 'Escrever código que respeita a cultura da linguagem (o Zen do Python), evitando as armadilhas clássicas que geram bugs sutis e código difícil de manter.',
    prerequisites: ['Módulos 1–6', 'Uso diário de Python', 'PEP 8'],
    problem: 'Código funcional mas não-pythônico é difícil de ler e revisar, e algumas construções aparentemente inofensivas (argumento default mutável, comparação com is, EAFP vs LBYL) geram bugs recorrentes.',
    concepts: ['O Zen do Python (PEP 20) na prática', 'Argumento default mutável e outras armadilhas', 'EAFP vs LBYL e o uso de exceções', 'Verdade/falsidade, is vs ==, None', 'Empacotamento, enumerate, zip e desempacotamento'],
    internals: ['Um argumento default mutável é criado uma vez na definição da função e compartilhado entre chamadas.', 'is compara identidade (mesmo objeto); == compara valor; para None usa-se is None.', 'EAFP (tentar e tratar exceção) costuma ser mais pythônico e correto sob concorrência que checar antes (LBYL).'],
    useWhen: ['Use None como default e crie o objeto mutável dentro da função.', 'Use enumerate e zip em vez de índices manuais.', 'Prefira EAFP para operações sujeitas a corrida (arquivo, dict).'],
    avoidWhen: ['Não use lista/dict como valor default de parâmetro.', 'Não compare com is para valores (use == ; is só para None/singletons).', 'Não escreva código clever ilegível em nome de concisão.'],
    contrast: {
      bad: 'def add(item, alvo=[]): alvo.append(item); return alvo  — a lista persiste entre chamadas.',
      good: 'def add(item, alvo=None): alvo = alvo or []; alvo.append(item); return alvo.'
    },
    tradeoffs: ['Idiomas pythônicos melhoram legibilidade e exigem conhecer a cultura da linguagem.', 'EAFP simplifica e pode mascarar exceção se o except for amplo demais.', 'Concisão ajuda até virar código clever que ninguém entende.'],
    production: 'Uma função acumula estado entre requisições por causa de um default mutável, gerando dados vazando entre usuários. O exercício reproduz e corrige a armadilha.',
    risks: ['Default mutável', 'is para comparar valores', 'except genérico demais', 'Código clever ilegível'],
    checklist: ['Algum parâmetro tem default mutável?', 'Uso is apenas para None/singleton?', 'O except é específico o suficiente?', 'enumerate/zip tornariam mais claro?', 'O código respeita o Zen do Python?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que não usar uma lista como valor default de um parâmetro?', expected: 'O default é avaliado uma vez na definição e compartilhado entre chamadas, acumulando estado; usa-se None e cria-se a lista dentro da função.' },
      { level: 'Sênior/Expert', question: 'O que significa EAFP e quando preferi-lo a LBYL?', expected: 'EAFP (Easier to Ask Forgiveness than Permission) tenta a operação e trata a exceção; é preferível quando checar antes tem condição de corrida (arquivo, dict compartilhado) ou quando o caminho feliz é o comum.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Encontrar e corrigir três armadilhas (default mutável, is/==, except amplo) em um código dado.', evidence: 'Diff com testes.' },
      { level: 'Aplicado', task: 'Refatorar um trecho para o estilo pythônico com enumerate, zip e desempacotamento.', evidence: 'Antes/depois revisável.' },
      { level: 'Expert', task: 'Reproduzir um bug de estado compartilhado por default mutável em um serviço.', evidence: 'Teste que expõe o vazamento e a correção.' }
    ],
    challenge: 'Fazer uma revisão de código de um módulo real aplicando o Zen do Python, corrigindo armadilhas e justificando cada mudança de legibilidade.',
    book: 'Effective Python (2ª ed), itens de pythonismo, funções e robustez; PEP 8 e PEP 20.',
    complements: [official.pep8, official.pep20],
    exampleFile: '../../examples/python-senior/README.md'
  },
  {
    number: 8,
    part: 'qualidade',
    id: 'ambientes-empacotamento',
    title: 'Ambientes, dependências e empacotamento',
    level: 'Sênior',
    objective: 'Isolar ambientes, versionar dependências de forma reprodutível e empacotar projetos Python com as ferramentas modernas, evitando o inferno de dependências.',
    prerequisites: ['Módulos 1–2', 'Linha de comando', 'Git'],
    problem: 'Instalar pacotes global e sem travar versões torna o projeto irreprodutível: "funciona na minha máquina", conflitos de dependência e builds que quebram meses depois sem nenhuma mudança de código.',
    concepts: ['Ambientes virtuais (venv) e isolamento', 'pip, requirements e resolução de dependências', 'pyproject.toml e ferramentas modernas (uv, Poetry, pip-tools)', 'Versionamento semântico e lock files', 'Estrutura de pacote e distribuição (wheel)'],
    internals: ['Um ambiente virtual isola as dependências de um projeto do Python do sistema e de outros projetos.', 'Um lock file fixa versões exatas (inclusive transitivas) para builds reprodutíveis.', 'pyproject.toml é o padrão moderno para metadados, dependências e configuração de ferramentas.'],
    useWhen: ['Crie um ambiente virtual por projeto, sempre.', 'Trave dependências com lock file para reprodutibilidade.', 'Declare metadados e dependências no pyproject.toml.'],
    avoidWhen: ['Não instale pacotes no Python global do sistema.', 'Não deixe versões soltas em produção sem lock.', 'Não misture gestores de dependência no mesmo projeto sem critério.'],
    contrast: {
      bad: 'pip install direto no sistema, sem venv nem versões fixadas, e "deu certo aqui".',
      good: 'venv por projeto, pyproject.toml com dependências e lock file versionado para builds idênticos.'
    },
    tradeoffs: ['Lock files dão reprodutibilidade e exigem disciplina de atualização.', 'Ferramentas modernas (uv/Poetry) simplificam e adicionam uma camada a aprender.', 'Isolar por projeto consome disco e evita conflitos globais.'],
    production: 'Um deploy quebra porque uma dependência transitiva subiu de versão sem lock. O exercício introduz lock file e torna o build reprodutível.',
    risks: ['Instalação global', 'Versões soltas sem lock', 'Dependência transitiva não fixada', 'Ambiente irreprodutível'],
    checklist: ['Existe um ambiente virtual isolado?', 'As dependências estão travadas por lock?', 'O pyproject.toml declara metadados e deps?', 'O build é reprodutível em outra máquina?', 'As versões transitivas estão fixadas?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que usar um ambiente virtual?', expected: 'Para isolar as dependências de cada projeto, evitando conflitos entre projetos e com o Python do sistema, e tornando o ambiente reprodutível.' },
      { level: 'Sênior/Expert', question: 'Qual a diferença entre um requirements solto e um lock file?', expected: 'Um requirements com faixas permite versões diferentes a cada instalação; um lock file fixa versões exatas, inclusive transitivas, garantindo builds idênticos e reprodutíveis.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Configurar um projeto com venv e pyproject.toml e instalar dependências isoladas.', evidence: 'Projeto reproduzível do zero.' },
      { level: 'Aplicado', task: 'Adotar um lock file e provar o build idêntico em outra máquina/CI.', evidence: 'Build reproduzível no CI.' },
      { level: 'Expert', task: 'Empacotar e publicar (em índice interno) um pacote instalável com wheel.', evidence: 'Pacote instalável por pip.' }
    ],
    challenge: 'Estruturar um projeto Python publicável com pyproject.toml, lock file, extras opcionais e um build reprodutível no CI.',
    book: 'Complemento: empacotamento é coberto pela Python Packaging User Guide (fonte primária).',
    complements: [official.packaging, official.venv],
    exampleFile: '../../examples/python-senior/README.md'
  },
  {
    number: 9,
    part: 'qualidade',
    id: 'testes-pytest',
    title: 'Testes com pytest: fixtures, mocks, parametrização e TDD',
    level: 'Sênior',
    objective: 'Escrever testes claros e proporcionais ao risco com pytest, usando fixtures, parametrização e dublês, e usar os testes para guiar o design (TDD) quando fizer sentido.',
    prerequisites: ['Módulos 1–8', 'Funções e classes', 'Exceptions'],
    problem: 'Sem testes, refatorar é apostar; com testes ruins (frágeis, lentos, acoplados ao detalhe), a suíte vira peso morto que ninguém confia e que trava a evolução em vez de habilitá-la.',
    concepts: ['pytest: asserts, organização e descoberta', 'Fixtures, escopo e injeção de dependência de teste', 'Parametrização e cobertura de casos', 'Dublês: mock, patch e quando (não) usar', 'Pirâmide de testes e TDD'],
    internals: ['Fixtures fornecem dependências de teste de forma composável e com ciclo de vida controlado por escopo.', 'Mockar demais acopla o teste à implementação e esconde bugs de integração reais.', 'TDD guia o design escrevendo o teste antes, o que expõe acoplamentos e melhora a interface.'],
    useWhen: ['Use fixtures para preparar estado de teste reutilizável e limpo.', 'Use parametrização para cobrir muitos casos sem duplicar código.', 'Prefira testar comportamento observável a detalhes de implementação.'],
    avoidWhen: ['Não mocke tudo: mockar o próprio código sob teste esconde bugs.', 'Não escreva testes acoplados a detalhes internos frágeis.', 'Não deixe a suíte lenta a ponto de ninguém rodar.'],
    contrast: {
      bad: 'Um teste que mocka o repositório, o serviço e o mapper, verificando apenas se métodos foram chamados.',
      good: 'Teste do comportamento com um repositório fake em memória, verificando o resultado real da regra.'
    },
    tradeoffs: ['Mais testes dão segurança e cobram tempo de escrita e manutenção.', 'Mocks isolam e podem esconder integração; fakes são mais fiéis e custam mais.', 'TDD melhora design e exige disciplina e prática.'],
    production: 'Uma refatoração passa em todos os testes mockados mas quebra em produção porque nada exercitava a integração real. O exercício substitui mocks excessivos por testes de comportamento.',
    risks: ['Over-mocking', 'Teste frágil acoplado ao interno', 'Suíte lenta', 'Cobertura alta sem asserção significativa'],
    checklist: ['O teste verifica comportamento ou implementação?', 'As fixtures deixam o teste limpo e isolado?', 'A parametrização cobre os casos de borda?', 'Os mocks são necessários e mínimos?', 'A suíte roda rápido o suficiente para ser usada?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Para que servem as fixtures do pytest?', expected: 'Fornecem dependências e estado de teste de forma reutilizável e com ciclo de vida controlado (escopo), reduzindo duplicação de setup e mantendo os testes isolados.' },
      { level: 'Sênior/Expert', question: 'Qual o risco de mockar demais?', expected: 'Acoplar o teste à implementação atual e esconder bugs de integração; o teste passa mas o comportamento real quebra. Prefere-se testar comportamento observável, com fakes quando preciso.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Escrever testes parametrizados para uma função com vários casos de borda.', evidence: 'Suíte pytest cobrindo os casos.' },
      { level: 'Aplicado', task: 'Substituir mocks excessivos por um fake em memória e testar comportamento.', evidence: 'Teste mais fiel e menos frágil.' },
      { level: 'Expert', task: 'Desenvolver uma pequena feature por TDD, do teste ao design.', evidence: 'Histórico de commits vermelho-verde-refatora.' }
    ],
    challenge: 'Construir a suíte de testes de um módulo com pirâmide equilibrada (unidade, integração), fixtures limpas, parametrização e um caso desenvolvido por TDD.',
    book: 'Effective Python, itens de testes; Architecture Patterns with Python, cap. sobre testes.',
    complements: [official.pytest, official.cosmic],
    exampleFile: '../../examples/python-senior/README.md'
  },
  {
    number: 10,
    part: 'qualidade',
    id: 'arquitetura-aplicacoes',
    title: 'Arquitetura de aplicações Python: camadas, repository e unit of work',
    level: 'Sênior → Expert',
    objective: 'Estruturar aplicações Python com fronteiras claras (domínio, serviço, adaptadores) usando repository, unit of work e injeção de dependência, para manter o código testável e evolutivo.',
    prerequisites: ['Módulos 4, 5 e 9', 'OO e testes', 'Noção de banco de dados'],
    problem: 'Aplicações Python crescem como scripts: regra de negócio misturada com SQL, HTTP e I/O; testar exige banco real; e cada mudança arrisca quebrar tudo porque nada tem fronteira.',
    concepts: ['Separação domínio / serviço / adaptadores', 'Repository pattern e abstração de persistência', 'Unit of Work e limites de transação', 'Service layer e casos de uso', 'Injeção de dependência e inversão de controle'],
    internals: ['O repository esconde os detalhes de persistência atrás de uma interface de coleção, permitindo trocar/faker o banco.', 'O unit of work agrupa mudanças em uma transação e controla commit/rollback.', 'Depender de abstrações (não de detalhes) permite testar o domínio sem framework, banco ou rede.'],
    useWhen: ['Use repository quando quiser testar o domínio sem banco real.', 'Use unit of work para controlar a fronteira transacional de um caso de uso.', 'Injete dependências para inverter o controle e habilitar testes com fakes.'],
    avoidWhen: ['Não aplique todas as camadas a um script CRUD trivial.', 'Não vaze objetos do ORM para dentro do domínio.', 'Não crie abstração sem um eixo real de troca ou teste.'],
    contrast: {
      bad: 'Uma função de view que faz query SQL, aplica regra de negócio e monta o JSON, tudo junto.',
      good: 'View chama um caso de uso; o serviço usa repository e unit of work; o domínio não conhece SQL nem HTTP.'
    },
    tradeoffs: ['Camadas isolam e testam melhor e adicionam indireção e código.', 'Repository desacopla do banco e cobra manutenção da abstração.', 'DI habilita fakes e aumenta a configuração de composição.'],
    production: 'Testar a regra de preço exige subir um Postgres porque a lógica está colada ao ORM. O exercício extrai um repository e testa o domínio em memória.',
    risks: ['Regra colada ao ORM/HTTP', 'Domínio dependente de framework', 'Over-engineering em CRUD', 'Abstração sem propósito'],
    checklist: ['O domínio depende de banco/HTTP?', 'Consigo testar a regra sem infraestrutura?', 'A fronteira transacional está explícita?', 'As dependências são injetadas?', 'A complexidade se justifica pelo problema?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que o padrão repository resolve?', expected: 'Abstrai a persistência atrás de uma interface parecida com coleção, desacoplando o domínio do banco e permitindo testar com um repositório fake em memória.' },
      { level: 'Sênior/Expert', question: 'O que é unit of work e por que usar?', expected: 'É um objeto que agrupa mudanças de um caso de uso em uma transação, controlando commit e rollback de forma atômica e centralizando a fronteira transacional, em vez de espalhar commits.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Extrair um repository de uma função que mistura SQL e regra.', evidence: 'Teste do domínio com fake em memória.' },
      { level: 'Aplicado', task: 'Implementar unit of work controlando commit/rollback de um caso de uso.', evidence: 'Teste de rollback em falha.' },
      { level: 'Expert', task: 'Refatorar um módulo em camadas com DI, provando testabilidade sem infraestrutura.', evidence: 'Suíte rápida sem banco real.' }
    ],
    challenge: 'Reestruturar um serviço Python em domínio, serviço e adaptadores com repository, unit of work e injeção de dependência, com o domínio testável sem framework.',
    book: 'Architecture Patterns with Python (Cosmic Python), cap. 1–7 (domínio, repository, UoW, serviço).',
    complements: [official.cosmic, official.fastapi],
    exampleFile: '../../examples/python-senior/adr/0002-layers-and-repository.md'
  },
  {
    number: 11,
    part: 'performance',
    id: 'gil-concorrencia',
    title: 'Modelo de execução e o GIL: threads, processos e quando usar cada um',
    level: 'Sênior → Expert',
    objective: 'Entender o GIL e escolher o modelo de concorrência correto — threads para I/O, processos para CPU — sem esperar paralelismo de CPU de threads em CPython.',
    prerequisites: ['Módulos 1–3', 'Funções e I/O', 'Noção de latência'],
    problem: 'Muitos esperam que threads acelerem trabalho de CPU em Python e se frustram: por causa do GIL, threads não executam bytecode Python em paralelo, e a escolha errada de modelo não traz ganho ou até piora.',
    concepts: ['O Global Interpreter Lock (GIL) e suas implicações', 'I/O-bound vs CPU-bound', 'threading para concorrência de I/O', 'multiprocessing para paralelismo de CPU', 'Custo de criação e de comunicação entre processos'],
    internals: ['O GIL permite que apenas uma thread execute bytecode Python por vez; threads ajudam quando o trabalho espera por I/O e libera o GIL.', 'Para paralelizar CPU em CPython, usam-se processos, que têm memória própria e não compartilham o GIL.', 'Processos custam mais para criar e comunicam por serialização; isso pode anular o ganho em tarefas pequenas.'],
    useWhen: ['Use threads (ou asyncio) para cargas I/O-bound com muita espera.', 'Use processos para trabalho CPU-bound que precisa de núcleos reais.', 'Dimensione o pool pelo tipo de carga, não por um número mágico.'],
    avoidWhen: ['Não espere que threads acelerem cálculo puro de CPU em CPython.', 'Não use processos para tarefas minúsculas onde a serialização domina.', 'Não crie threads/processos sem limite nem pool.'],
    contrast: {
      bad: 'Paralelizar um cálculo numérico pesado com threading e concluir que "Python é lento".',
      good: 'Usar multiprocessing (ou NumPy vetorizado) para CPU e threads/asyncio para I/O.'
    },
    tradeoffs: ['Threads são leves e não paralelizam CPU sob o GIL.', 'Processos paralelizam CPU e custam memória e comunicação.', 'asyncio escala I/O com baixo overhead e exige código não-bloqueante.'],
    production: 'Um serviço de processamento de imagens não escala porque usa threads para trabalho de CPU. O exercício migra para processos e mede o ganho em núcleos.',
    risks: ['Threads para CPU-bound', 'Processos para tarefas triviais', 'Pool sem limite', 'Ignorar custo de serialização'],
    checklist: ['A carga é I/O-bound ou CPU-bound?', 'O GIL é liberado durante a espera?', 'Processos se justificam pelo tamanho da tarefa?', 'O pool está dimensionado ao tipo de carga?', 'Medi o ganho real antes de concluir?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que é o GIL e por que ele importa?', expected: 'O Global Interpreter Lock permite que só uma thread execute bytecode Python por vez em CPython; por isso threads não paralelizam CPU, embora ajudem em I/O, que libera o GIL durante a espera.' },
      { level: 'Sênior/Expert', question: 'Como escolher entre threading, multiprocessing e asyncio?', expected: 'I/O-bound com muita espera: asyncio ou threads; CPU-bound: multiprocessing (ou libs que liberam o GIL, como NumPy); a decisão depende do perfil da carga e do custo de comunicação.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Medir uma tarefa I/O-bound com serial vs threads e comparar.', evidence: 'Benchmark com ganho de I/O.' },
      { level: 'Aplicado', task: 'Paralelizar uma tarefa CPU-bound com multiprocessing e medir o speedup.', evidence: 'Gráfico de tempo por número de processos.' },
      { level: 'Expert', task: 'Diagnosticar um caso onde threads não trouxeram ganho e explicar via GIL.', evidence: 'Relatório com evidência e correção.' }
    ],
    challenge: 'Comparar, sob a mesma carga, serial, threads, processos e asyncio, e recomendar o modelo por tipo de tarefa com base em medição.',
    book: 'High Performance Python, cap. sobre concorrência e multiprocessing; Effective Python (concorrência).',
    complements: [official.multiprocessing, official.concurrent],
    exampleFile: '../../examples/python-senior/README.md'
  },
  {
    number: 12,
    part: 'performance',
    id: 'asyncio',
    title: 'Programação assíncrona com asyncio',
    level: 'Sênior → Expert',
    objective: 'Escrever I/O concorrente correto com async/await, entendendo o event loop, sem bloqueá-lo e sem misturar código síncrono bloqueante no caminho assíncrono.',
    prerequisites: ['Módulos 6 e 11', 'Funções e I/O', 'Conceito de concorrência'],
    problem: 'asyncio adotado sem modelo mental gera código que bloqueia o event loop (chamada síncrona no meio), corrotinas nunca aguardadas e ganho zero, além de erros difíceis de depurar.',
    concepts: ['Corrotinas, async/await e o event loop', 'awaitables, Tasks e gather', 'Bloqueio do event loop e run_in_executor', 'Cancelamento, timeouts e tratamento de erro', 'Bibliotecas async (httpx, drivers) vs bloqueantes'],
    internals: ['O event loop executa uma corrotina por vez e troca de tarefa nos pontos de await, dando concorrência sem threads.', 'Uma chamada bloqueante (I/O síncrono, sleep síncrono, CPU pesada) trava o loop inteiro e mata a concorrência.', 'Uma corrotina só executa quando aguardada ou agendada como Task; chamá-la sem await não faz nada.'],
    useWhen: ['Use asyncio para muitas operações de I/O concorrentes (APIs, sockets, DB async).', 'Use gather para disparar chamadas independentes em paralelo lógico.', 'Descarregue trabalho bloqueante/CPU para um executor com run_in_executor.'],
    avoidWhen: ['Não chame código bloqueante direto dentro de uma corrotina.', 'Não use asyncio para trabalho puramente CPU-bound.', 'Não esqueça de aguardar as corrotinas/Tasks criadas.'],
    contrast: {
      bad: 'Dentro de uma corrotina, usar requests.get (bloqueante) e time.sleep, travando o event loop.',
      good: 'Usar httpx async e asyncio.sleep, e run_in_executor para qualquer trabalho bloqueante inevitável.'
    },
    tradeoffs: ['asyncio escala I/O com baixo overhead e exige stack async de ponta a ponta.', 'gather paraleliza logicamente e propaga a primeira exceção se não tratada.', 'Cancelamento e timeout dão controle e adicionam complexidade de fluxo.'],
    production: 'Um coletor de dados assíncrono fica lento porque uma chamada bloqueante no meio trava o loop. O exercício identifica o bloqueio e o move para um executor.',
    risks: ['Bloquear o event loop', 'Corrotina não aguardada', 'asyncio para CPU-bound', 'Misturar libs bloqueantes'],
    checklist: ['Alguma chamada bloqueia o event loop?', 'Todas as corrotinas são aguardadas?', 'A carga é realmente I/O-bound?', 'Uso bibliotecas async de ponta a ponta?', 'Há timeout e cancelamento onde preciso?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que acontece se você chamar uma corrotina sem await?', expected: 'Ela não executa; retorna um objeto corrotina e normalmente emite um aviso de "coroutine was never awaited". É preciso await ou agendá-la como Task.' },
      { level: 'Sênior/Expert', question: 'Por que uma chamada bloqueante quebra o asyncio?', expected: 'O event loop é single-thread e coopera nos awaits; uma operação bloqueante (I/O síncrono, CPU pesada) não cede o controle e trava todas as tarefas, eliminando a concorrência. Descarrega-se para um executor.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Buscar várias URLs concorrentemente com httpx async e gather.', evidence: 'Medição de ganho vs sequencial.' },
      { level: 'Aplicado', task: 'Adicionar timeout, cancelamento e tratamento de erro a um fluxo async.', evidence: 'Teste de timeout e cancelamento.' },
      { level: 'Expert', task: 'Diagnosticar e corrigir um bloqueio do event loop com run_in_executor.', evidence: 'Antes/depois com concorrência restaurada.' }
    ],
    challenge: 'Construir um coletor assíncrono que consulte dezenas de endpoints com limite de concorrência, timeout, retry e sem bloquear o event loop.',
    book: 'Using Asyncio in Python (Hattingh) — modelo mental, event loop, Tasks e armadilhas.',
    complements: [official.asyncio, official.httpx],
    exampleFile: '../../examples/python-senior/README.md'
  },
  {
    number: 13,
    part: 'performance',
    id: 'paralelismo',
    title: 'Paralelismo: futures, executors e multiprocessing',
    level: 'Sênior',
    objective: 'Paralelizar trabalho com concurrent.futures e multiprocessing, escolhendo pool de threads ou de processos conforme a carga e controlando erros e resultados.',
    prerequisites: ['Módulos 11–12', 'Funções', 'I/O e CPU-bound'],
    problem: 'Paralelismo mal feito gera resultados fora de ordem, exceções engolidas em workers, pools mal dimensionados e serialização cara que anula o ganho.',
    concepts: ['concurrent.futures: ThreadPoolExecutor e ProcessPoolExecutor', 'Futures, map e as_completed', 'Compartilhamento de estado e serialização (pickle)', 'Dimensionamento de pool por tipo de carga', 'Tratamento de erro em workers'],
    internals: ['ThreadPoolExecutor serve I/O; ProcessPoolExecutor serve CPU, pagando serialização de argumentos e resultados.', 'as_completed entrega resultados na ordem de conclusão; map preserva a ordem de entrada.', 'Exceções em workers são propagadas quando o resultado do future é lido, não antes.'],
    useWhen: ['Use ThreadPoolExecutor para paralelizar chamadas de I/O.', 'Use ProcessPoolExecutor para dividir cálculo pesado entre núcleos.', 'Leia os futures para capturar exceções e resultados.'],
    avoidWhen: ['Não paralelize tarefas triviais onde o overhead domina.', 'Não compartilhe estado mutável entre processos sem mecanismo próprio.', 'Não ignore exceções lançadas dentro de workers.'],
    contrast: {
      bad: 'Submeter tarefas e nunca ler os futures, perdendo silenciosamente as exceções dos workers.',
      good: 'Iterar as_completed lendo cada resultado, tratando exceções e agregando com segurança.'
    },
    tradeoffs: ['Pool de threads é leve para I/O e não paraleliza CPU.', 'Pool de processos usa núcleos e paga criação e serialização.', 'as_completed dá responsividade e perde a ordem original.'],
    production: 'Um lote de processamento parece concluir, mas metade dos itens falhou silenciosamente porque os futures nunca foram lidos. O exercício corrige a coleta de resultados e erros.',
    risks: ['Exceção engolida em worker', 'Pool mal dimensionado', 'Estado compartilhado inseguro', 'Serialização cara'],
    checklist: ['O tipo de pool combina com a carga?', 'Leio os futures para capturar erros?', 'O estado entre processos é seguro?', 'O overhead se justifica pelo tamanho da tarefa?', 'A ordem de resultado importa (map vs as_completed)?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual a diferença entre ThreadPoolExecutor e ProcessPoolExecutor?', expected: 'O de threads serve cargas de I/O (compartilha memória, sob o GIL); o de processos serve CPU-bound (paraleliza em núcleos), custando serialização de argumentos e resultados.' },
      { level: 'Sênior/Expert', question: 'O que acontece com uma exceção lançada dentro de um worker?', expected: 'Ela é capturada e re-lançada quando o resultado do future é lido (result()); se ninguém ler o future, a exceção passa despercebida. Por isso é preciso consumir os resultados.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Paralelizar chamadas de I/O com ThreadPoolExecutor e as_completed.', evidence: 'Resultados agregados com erros tratados.' },
      { level: 'Aplicado', task: 'Dividir um cálculo pesado com ProcessPoolExecutor e medir o speedup.', evidence: 'Benchmark por número de processos.' },
      { level: 'Expert', task: 'Corrigir um pipeline que engolia exceções de workers.', evidence: 'Teste que expõe e trata as falhas.' }
    ],
    challenge: 'Construir um processador de lote paralelo com pool adequado, coleta segura de resultados e erros, limite de concorrência e medição de speedup.',
    book: 'High Performance Python, cap. de concorrência/multiprocessing; Effective Python (concorrência).',
    complements: [official.concurrent, official.multiprocessing],
    exampleFile: '../../examples/python-senior/README.md'
  },
  {
    number: 14,
    part: 'performance',
    id: 'performance-medida',
    title: 'Performance orientada a medida: profiling e complexidade',
    level: 'Sênior → Expert',
    objective: 'Otimizar Python por evidência: medir com profilers para achar o gargalo real, entender complexidade e memória, e mudar só o que os dados justificam.',
    prerequisites: ['Módulos 2 e 11', 'Complexidade básica', 'Estruturas de dados'],
    problem: 'Otimização por intuição desperdiça tempo e piora a legibilidade: mexe-se no lugar errado, faz-se micro-otimização irrelevante e ignora-se o verdadeiro gargalo, que só a medição revela.',
    concepts: ['Profilers: cProfile, line_profiler e memory_profiler', 'Complexidade algorítmica e o custo real das estruturas', 'Micro-benchmark com timeit e suas armadilhas', 'Uso de memória, cópias e geradores', 'Quando aceitar o Python e quando descer para NumPy/C'],
    internals: ['O gargalo real quase nunca está onde a intuição aponta; o profiler mostra onde o tempo é gasto de verdade.', 'Trocar um algoritmo O(n²) por O(n log n) supera qualquer micro-otimização de constante.', 'Muitas cópias e materializações inflam memória; geradores e views reduzem o custo.'],
    useWhen: ['Meça com profiler antes de otimizar qualquer coisa.', 'Ataque primeiro a complexidade algorítmica e as estruturas.', 'Use timeit para comparar alternativas de forma controlada.'],
    avoidWhen: ['Não otimize sem baseline nem profiler.', 'Não faça micro-otimização que prejudica a legibilidade sem ganho medido.', 'Não confie em benchmark mal isolado (aquecimento, ruído, ambiente).'],
    contrast: {
      bad: 'Reescrever loops com truques obscuros para ganhar microssegundos enquanto uma query O(n²) domina o tempo.',
      good: 'Rodar cProfile, achar o hotspot, corrigir a complexidade e provar o ganho com medição.'
    },
    tradeoffs: ['Otimizar melhora tempo/custo e pode reduzir clareza.', 'Descer para NumPy/C acelera e aumenta a complexidade do build.', 'Medir custa tempo e evita otimização inútil.'],
    production: 'Um relatório demora minutos porque a intuição levou a otimizar o lugar errado. O profiler revela um gargalo O(n²) em outro ponto, corrigido com uma estrutura melhor.',
    risks: ['Otimizar sem medir', 'Micro-otimização inútil', 'Benchmark enganoso', 'Ignorar complexidade'],
    checklist: ['Tenho um baseline medido?', 'O profiler apontou o gargalo real?', 'A complexidade é a melhor possível?', 'O benchmark está isolado e é reprodutível?', 'O ganho justifica a perda de clareza?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Qual o primeiro passo para otimizar código lento?', expected: 'Medir com um profiler para localizar o gargalo real, em vez de adivinhar; só então otimizar o ponto que domina o tempo, com baseline para comparar.' },
      { level: 'Sênior/Expert', question: 'Por que melhorar a complexidade vence a micro-otimização?', expected: 'Porque a complexidade domina o crescimento: trocar O(n²) por O(n log n) reduz ordens de magnitude em dados grandes, enquanto micro-otimizações de constante têm efeito marginal e custam legibilidade.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Perfilar um script com cProfile e identificar o hotspot.', evidence: 'Relatório de profile com o ponto quente.' },
      { level: 'Aplicado', task: 'Corrigir um gargalo algorítmico e comprovar o ganho com timeit.', evidence: 'Benchmark antes/depois.' },
      { level: 'Expert', task: 'Reduzir o uso de memória de um pipeline com geradores e medir.', evidence: 'memory_profiler antes/depois.' }
    ],
    challenge: 'Pegar um programa lento, perfilar, corrigir o gargalo real (complexidade ou memória) e apresentar um relatório de performance com baseline e ganho medido.',
    book: 'High Performance Python, cap. 1–5 (profiling, listas/arrays, dicts, memória) e cap. 11.',
    complements: [official.profiling, official.numpy],
    exampleFile: '../../examples/python-senior/README.md'
  },
  {
    number: 15,
    part: 'performance',
    id: 'numerico-vetorizacao',
    title: 'Computação numérica eficiente: NumPy e vetorização',
    level: 'Sênior',
    objective: 'Substituir laços Python por operações vetorizadas com NumPy para ganhar ordens de magnitude em dados numéricos, entendendo arrays, broadcasting e custo de memória.',
    prerequisites: ['Módulos 2 e 14', 'Estruturas de dados', 'Noção de álgebra vetorial'],
    problem: 'Fazer cálculo numérico com laços Python puros sobre listas é lento por ordens de magnitude; sem NumPy, tarefas de dados e IA ficam inviáveis em volume real.',
    concepts: ['ndarray: memória contígua, dtype e shape', 'Vetorização vs laços Python', 'Broadcasting e operações elemento a elemento', 'Views vs cópias e uso de memória', 'Fatiamento, máscaras booleanas e agregações'],
    internals: ['O ndarray armazena números em memória contígua e tipada, permitindo operações em lote em código C.', 'Vetorizar substitui o laço interpretado por uma operação única sobre o array inteiro, muito mais rápida.', 'Slicing gera views (compartilham memória); algumas operações copiam, com impacto de memória.'],
    useWhen: ['Use NumPy para qualquer cálculo numérico em volume.', 'Vetorize operações elemento a elemento em vez de iterar.', 'Use máscaras booleanas para filtrar e agregar sem laços.'],
    avoidWhen: ['Não itere um ndarray elemento a elemento em Python.', 'Não ignore o dtype (int vs float) e o custo de memória de arrays grandes.', 'Não confunda view com cópia ao modificar dados.'],
    contrast: {
      bad: 'Somar dois vetores com um for elemento a elemento sobre listas Python.',
      good: 'a + b com arrays NumPy: uma operação vetorizada, ordens de magnitude mais rápida.'
    },
    tradeoffs: ['Vetorização acelera muito e exige pensar em arrays, não em elementos.', 'Views economizam memória e podem causar mutação inesperada.', 'Arrays grandes são rápidos e consomem memória contígua significativa.'],
    production: 'Um cálculo de features para ML leva minutos em laços Python. O exercício vetoriza com NumPy e reduz o tempo a segundos.',
    risks: ['Laço sobre ndarray', 'dtype inadequado', 'Cópia acidental de arrays grandes', 'Mutação via view'],
    checklist: ['Posso vetorizar em vez de iterar?', 'O dtype é o adequado?', 'Estou lidando com view ou cópia?', 'A memória do array é aceitável?', 'Usei máscaras/broadcasting em vez de laços?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que NumPy é mais rápido que laços Python para cálculo numérico?', expected: 'Porque armazena dados em memória contígua e tipada e executa operações vetorizadas em C sobre o array inteiro, evitando o overhead do interpretador por elemento.' },
      { level: 'Sênior/Expert', question: 'Qual a diferença entre view e cópia em NumPy e por que importa?', expected: 'Uma view compartilha a memória do array original (barata, mas modificá-la altera o original); uma cópia é independente (custa memória). Confundir os dois causa mutações inesperadas ou consumo excessivo.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Reescrever um cálculo em laço como operação vetorizada NumPy.', evidence: 'Benchmark de ganho.' },
      { level: 'Aplicado', task: 'Filtrar e agregar um dataset com máscaras booleanas e broadcasting.', evidence: 'Resultado correto sem laços.' },
      { level: 'Expert', task: 'Otimizar memória de um pipeline numérico controlando dtype e cópias.', evidence: 'Medição de tempo e memória.' }
    ],
    challenge: 'Vetorizar um cálculo de features numéricas de ponta a ponta, provando ganho de tempo e controle de memória contra a versão em laços.',
    book: 'High Performance Python, cap. sobre NumPy e matrizes; complemento NumPy docs.',
    complements: [official.numpy, official.pandas],
    exampleFile: '../../examples/python-senior/README.md'
  },
  {
    number: 16,
    part: 'producao',
    id: 'automacao',
    title: 'Automação prática de tarefas: arquivos, web, planilhas e sistema',
    level: 'Base sênior → sênior',
    objective: 'Automatizar tarefas repetitivas de forma confiável e reprodutível — arquivos, texto, planilhas, PDFs, web e sistema — com tratamento de erro e idempotência.',
    prerequisites: ['Módulos 1–3 e 6', 'I/O e strings', 'Linha de comando'],
    problem: 'Scripts de automação frágeis quebram no primeiro caso fora do padrão, sobrescrevem dados sem querer e não podem ser re-executados com segurança, gerando mais trabalho manual do que economizam.',
    concepts: ['pathlib e manipulação de arquivos e diretórios', 'Expressões regulares e processamento de texto', 'Planilhas, CSV, PDFs e formatos comuns', 'Web scraping e automação de requisições', 'Idempotência, dry-run e tratamento de erro em scripts'],
    internals: ['Um script robusto valida entradas, é idempotente e trata o caso fora do padrão em vez de assumir o caminho feliz.', 'pathlib torna a manipulação de caminhos portável e legível frente a strings cruas.', 'Um modo dry-run permite prever o efeito antes de aplicar mudanças irreversíveis.'],
    useWhen: ['Automatize tarefas repetitivas, propensas a erro humano e bem definidas.', 'Torne o script idempotente e ofereça dry-run em operações destrutivas.', 'Valide entradas e trate os casos fora do padrão explicitamente.'],
    avoidWhen: ['Não automatize um processo mal entendido ou instável.', 'Não sobrescreva dados sem backup ou confirmação.', 'Não assuma que a entrada sempre segue o formato esperado.'],
    contrast: {
      bad: 'Um script que renomeia arquivos assumindo o padrão e apaga o que não bate, sem log nem dry-run.',
      good: 'Script idempotente com pathlib, validação, dry-run, log e tratamento do caso fora do padrão.'
    },
    tradeoffs: ['Automatizar economiza tempo e cobra robustez e manutenção do script.', 'Dry-run adiciona segurança e um passo a mais.', 'Scraping resolve integração ausente e é frágil a mudanças da fonte.'],
    production: 'Um script de importação sobrescreve arquivos válidos ao encontrar um nome inesperado. O exercício adiciona validação, dry-run e idempotência.',
    risks: ['Script frágil ao caso fora do padrão', 'Sobrescrita destrutiva', 'Falta de idempotência', 'Scraping quebradiço'],
    checklist: ['O script é idempotente?', 'Existe dry-run para operação destrutiva?', 'As entradas são validadas?', 'O caso fora do padrão é tratado?', 'Há log do que foi feito?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que torna um script de automação confiável?', expected: 'Validação de entradas, idempotência (poder rodar de novo com segurança), tratamento do caso fora do padrão, log e, para operações destrutivas, um dry-run ou backup.' },
      { level: 'Sênior/Expert', question: 'Por que idempotência importa em automação?', expected: 'Porque scripts falham e são re-executados; se rodar duas vezes produzir efeito duplicado ou destrutivo, a automação vira risco. Idempotência garante o mesmo estado final independentemente de repetições.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Escrever um organizador de arquivos com pathlib, validação e log.', evidence: 'Script idempotente com testes.' },
      { level: 'Aplicado', task: 'Extrair e consolidar dados de planilhas/PDFs com tratamento de erro.', evidence: 'Saída consistente e dry-run.' },
      { level: 'Expert', task: 'Automatizar uma coleta web resiliente a mudanças e falhas.', evidence: 'Retries, log e tratamento do formato inesperado.' }
    ],
    challenge: 'Construir uma automação de ponta a ponta (coleta, transformação e saída) idempotente, com dry-run, validação, log e tratamento dos casos fora do padrão.',
    book: 'Automate the Boring Stuff (Sweigart) — arquivos, regex, planilhas, PDFs, web e e-mail.',
    complements: [official.stdtypes, official.logging],
    exampleFile: '../../examples/python-senior/README.md'
  },
  {
    number: 17,
    part: 'producao',
    id: 'dados-pandas',
    title: 'Manipulação de dados com pandas e pipelines reprodutíveis',
    level: 'Sênior',
    objective: 'Transformar, limpar e agregar dados tabulares com pandas de forma vetorizada e reprodutível, evitando as armadilhas de performance e de mutação silenciosa.',
    prerequisites: ['Módulos 15 e 6', 'NumPy básico', 'Estruturas de dados'],
    problem: 'pandas usado como se fosse Excel com laços gera pipelines lentos, com mutação acidental (SettingWithCopy), tipos inconsistentes e resultados irreprodutíveis que não sobrevivem à revisão.',
    concepts: ['Series e DataFrame; index e dtypes', 'Operações vetorizadas vs iterrows', 'Seleção: loc/iloc e o aviso SettingWithCopy', 'groupby, merge, join e agregações', 'Pipelines reprodutíveis e memória'],
    internals: ['pandas é vetorizado sobre NumPy; iterar linha a linha (iterrows) descarta essa vantagem e fica lento.', 'Encadear indexação pode criar uma cópia e gerar o SettingWithCopyWarning, com mutação que não persiste.', 'Definir dtypes corretos reduz memória e evita conversões silenciosas.'],
    useWhen: ['Use operações vetorizadas e groupby em vez de laços.', 'Use loc/iloc de forma explícita para selecionar e atribuir.', 'Fixe dtypes e torne o pipeline reprodutível e testável.'],
    avoidWhen: ['Não itere DataFrame com iterrows para transformar em volume.', 'Não encadeie indexação para atribuir (gera SettingWithCopy).', 'Não deixe tipos e categorias implícitos em dados grandes.'],
    contrast: {
      bad: 'for i, row in df.iterrows(): df.at[i, "x"] = calcula(row) — lento e propenso a erro.',
      good: 'df["x"] = df["a"] * df["b"] — operação vetorizada, rápida e clara.'
    },
    tradeoffs: ['Vetorização acelera muito e exige pensar em colunas, não em linhas.', 'Categorias e dtypes reduzem memória e adicionam cuidado de conversão.', 'Pipelines reprodutíveis custam estruturação e evitam resultados irreprodutíveis.'],
    production: 'Um relatório diário fica lento e às vezes muda de resultado por causa de iterrows e SettingWithCopy. O exercício vetoriza e corrige a atribuição.',
    risks: ['iterrows em volume', 'SettingWithCopy', 'dtypes implícitos', 'Pipeline irreprodutível'],
    checklist: ['A transformação está vetorizada?', 'Uso loc/iloc explicitamente ao atribuir?', 'Os dtypes estão corretos e econômicos?', 'O pipeline é reprodutível e testável?', 'Evitei materializar cópias grandes desnecessárias?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que evitar iterrows para transformar um DataFrame?', expected: 'Porque itera em Python linha a linha, descartando a vetorização do pandas/NumPy; é lento e verboso. Operações de coluna vetorizadas são muito mais rápidas e claras.' },
      { level: 'Sênior/Expert', question: 'O que causa o SettingWithCopyWarning?', expected: 'Atribuir a um resultado de indexação encadeada que pode ser uma cópia, não uma view; a mutação pode não persistir no DataFrame original. A correção é usar .loc de forma única e explícita.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Substituir um loop iterrows por operações vetorizadas.', evidence: 'Benchmark e resultado idêntico.' },
      { level: 'Aplicado', task: 'Construir um pipeline de limpeza e agregação com groupby e merge.', evidence: 'Pipeline reprodutível com testes.' },
      { level: 'Expert', task: 'Reduzir memória e tempo de um relatório com dtypes e categorias.', evidence: 'Medição antes/depois.' }
    ],
    challenge: 'Construir um pipeline de dados reprodutível (ingestão, limpeza, agregação, saída) vetorizado, tipado e testado, com controle de memória.',
    book: 'Complemento: pandas é coberto pela documentação oficial; base numérica em High Performance Python.',
    complements: [official.pandas, official.numpy],
    exampleFile: '../../examples/python-senior/README.md'
  },
  {
    number: 18,
    part: 'producao',
    id: 'integracao-apis',
    title: 'Integração e APIs: clientes HTTP, resiliência e contratos',
    level: 'Sênior',
    objective: 'Integrar sistemas em Python consumindo e expondo APIs com clientes HTTP resilientes (timeout, retry, circuit breaker), contratos claros e serialização segura.',
    prerequisites: ['Módulos 5, 10 e 12', 'HTTP e JSON', 'Type hints'],
    problem: 'Integrações Python ingênuas não têm timeout (travam sob dependência lenta), não tratam erro, confiam cegamente no payload externo e quebram consumidores ao mudar o contrato.',
    concepts: ['Clientes HTTP: requests e httpx (sync/async)', 'Timeout, retry com backoff e circuit breaker', 'Validação de payload (pydantic) e contratos', 'Serialização, versionamento e compatibilidade', 'Idempotência e tratamento de erro de integração'],
    internals: ['Sem timeout explícito, um cliente HTTP pode esperar indefinidamente por uma dependência lenta e esgotar recursos.', 'Validar o payload de entrada com um schema (pydantic) transforma dados externos não confiáveis em tipos seguros.', 'Um contrato versionado com compatibilidade evita quebrar consumidores a cada mudança.'],
    useWhen: ['Defina timeout em toda chamada HTTP e retry com backoff em erro transitório.', 'Valide entradas externas com um schema antes de usar.', 'Versione contratos e mantenha compatibilidade retroativa.'],
    avoidWhen: ['Não faça chamada HTTP sem timeout.', 'Não confie em payload externo sem validação.', 'Não quebre o contrato sem versionamento e convivência.'],
    contrast: {
      bad: 'requests.get(url) sem timeout, usando response.json() direto e confiando nos campos.',
      good: 'httpx com timeout e retry, validando o corpo com um modelo pydantic antes de prosseguir.'
    },
    tradeoffs: ['Resiliência (timeout/retry/breaker) protege e adiciona configuração e lógica.', 'Validação de schema dá segurança e custa definição de modelos.', 'Contrato versionado dá estabilidade e reduz flexibilidade de mudança imediata.'],
    production: 'Uma dependência externa lenta trava o serviço porque as chamadas não tinham timeout. O exercício adiciona timeout, retry e circuit breaker e mede a estabilidade.',
    risks: ['Chamada sem timeout', 'Payload externo confiado', 'Retry sem backoff', 'Quebra de contrato sem versão'],
    checklist: ['Toda chamada HTTP tem timeout?', 'Erros transitórios têm retry com backoff?', 'O payload externo é validado por schema?', 'O contrato é versionado e compatível?', 'A operação é idempotente onde precisa?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que definir timeout em chamadas HTTP?', expected: 'Sem timeout, uma dependência lenta pode travar a thread/loop indefinidamente e esgotar recursos, propagando a falha; o timeout garante que a chamada falhe rápido e seja tratada.' },
      { level: 'Sênior/Expert', question: 'Como você trata um payload de API externa com segurança?', expected: 'Validando com um schema (ex.: pydantic) antes de usar, convertendo dados não confiáveis em tipos seguros, tratando campos ausentes/errados explicitamente e versionando o contrato para evoluir sem quebrar.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Criar um cliente HTTP com timeout e validação de resposta por pydantic.', evidence: 'Teste com resposta inválida rejeitada.' },
      { level: 'Aplicado', task: 'Adicionar retry com backoff e circuit breaker a uma integração.', evidence: 'Teste simulando lentidão e falha.' },
      { level: 'Expert', task: 'Evoluir um contrato de API mantendo compatibilidade com clientes antigos.', evidence: 'Testes de compatibilidade das duas versões.' }
    ],
    challenge: 'Construir um cliente e um endpoint que integrem dois sistemas com timeout, retry, circuit breaker, validação de schema e contrato versionado.',
    book: 'Architecture Patterns with Python (adaptadores e serviço externo); Robust Python (validação/tipos).',
    complements: [official.httpx, official.fastapi],
    exampleFile: '../../examples/python-senior/adr/0003-http-resilience.md'
  },
  {
    number: 19,
    part: 'producao',
    id: 'ia-aplicada',
    title: 'Python para IA aplicada: do notebook à API de inferência',
    level: 'Sênior → Expert',
    objective: 'Levar um modelo do experimento em notebook a um serviço de inferência real em Python, com contrato, validação, versionamento, custo controlado e testes.',
    prerequisites: ['Módulos 10, 17 e 18', 'ML/IA básico', 'APIs'],
    problem: 'Modelos ficam presos no notebook: sem API, sem contrato, sem reprodutibilidade nem monitoramento. O que funciona no experimento não vira produto operável e confiável.',
    concepts: ['Do notebook ao pacote: reprodutibilidade e versionamento', 'Serviço de inferência com FastAPI', 'Validação de entrada/saída e contrato do modelo', 'Batch vs online, latência e custo por chamada', 'Avaliação, guardrails e observabilidade de IA'],
    internals: ['Um serviço de inferência é uma aplicação como outra: precisa de contrato, validação, testes, logs e limites de recurso.', 'Versionar modelo, dados e código é o que torna um resultado de IA reprodutível e auditável.', 'Custo e latência por chamada (especialmente com LLMs/APIs externas) são requisitos de primeira classe, não detalhes.'],
    useWhen: ['Exponha o modelo por uma API com contrato e validação claros.', 'Versione modelo, dados e código para reprodutibilidade.', 'Meça latência, custo e qualidade da inferência em produção.'],
    avoidWhen: ['Não coloque um notebook direto em produção.', 'Não sirva um modelo sem validação de entrada nem guardrails de saída.', 'Não ignore custo e latência por chamada em serviços com IA.'],
    contrast: {
      bad: 'Copiar o código do notebook para um endpoint sem testes, contrato, versionamento nem limites.',
      good: 'Serviço FastAPI com schema de entrada/saída, modelo versionado, testes, logs e limites de custo.'
    },
    tradeoffs: ['API de inferência operável cobra estruturação e testes além do modelo.', 'Batch reduz custo e aumenta latência; online é responsivo e mais caro.', 'Guardrails aumentam confiabilidade e adicionam checagens.'],
    production: 'Um modelo aprovado no notebook falha em produção por entrada inesperada e sem monitoramento. O exercício empacota o modelo em uma API validada, versionada e observável.',
    risks: ['Notebook em produção', 'Inferência sem validação/guardrails', 'Modelo/dados não versionados', 'Custo/latência ignorados'],
    checklist: ['O modelo é servido por uma API com contrato?', 'Entrada e saída são validadas?', 'Modelo, dados e código estão versionados?', 'Latência e custo por chamada são medidos?', 'Há testes e observabilidade da inferência?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'O que falta para um modelo de notebook virar um serviço?', expected: 'Contrato/API, validação de entrada e saída, versionamento de modelo/dados/código, testes, tratamento de erro, logs e limites de recurso — tratá-lo como uma aplicação de produção.' },
      { level: 'Sênior/Expert', question: 'Por que versionar dados e modelo, além do código?', expected: 'Porque a saída de IA depende dos três; sem versionar dados e modelo, o resultado não é reprodutível nem auditável, e não dá para diagnosticar regressões de qualidade nem fazer rollback.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Expor um modelo simples por um endpoint FastAPI com schema de entrada/saída.', evidence: 'API testada com validação.' },
      { level: 'Aplicado', task: 'Adicionar versionamento de modelo, logs e medição de latência/custo.', evidence: 'Serviço observável e reprodutível.' },
      { level: 'Expert', task: 'Incluir avaliação e guardrails à saída do modelo em produção.', evidence: 'Teste de caso adversarial e métrica de qualidade.' }
    ],
    challenge: 'Transformar um experimento em um serviço de inferência de produção: API com contrato, validação, versionamento, testes, guardrails, logs e controle de custo/latência.',
    book: 'Architecture Patterns with Python (serviço/adaptadores) aplicado à inferência; complemento FastAPI.',
    complements: [official.fastapi, official.cosmic],
    exampleFile: '../../examples/python-senior/adr/0004-inference-service.md'
  },
  {
    number: 20,
    part: 'producao',
    id: 'producao-observabilidade',
    title: 'Produção: logging, configuração, observabilidade e segurança',
    level: 'Sênior → Expert',
    objective: 'Operar serviços Python com logging estruturado, configuração por ambiente, observabilidade e práticas de segurança, para que o serviço seja diagnosticável e defensável em produção.',
    prerequisites: ['Módulos 8, 10 e 18', 'Serviços e I/O', 'Noção de deploy'],
    problem: 'Serviços Python vão para produção com print no lugar de log, segredos no código, configuração hardcoded e nenhuma métrica; quando algo falha, ninguém consegue diagnosticar nem responder com segurança.',
    concepts: ['logging estruturado vs print; níveis e handlers', 'Configuração por ambiente e gestão de segredos', 'Métricas, tracing e correlação de requisições', 'Segurança: entradas, dependências e dados sensíveis', 'Empacotamento para deploy e 12-factor'],
    internals: ['logging estruturado (com contexto e correlação) permite investigar produção; print não escala nem se filtra.', 'Segredos pertencem ao ambiente/secret manager, nunca ao código versionado.', 'Configuração por ambiente (12-factor) separa código de ambiente e evita hardcode frágil.'],
    useWhen: ['Use logging estruturado com níveis e contexto em todo serviço.', 'Carregue configuração e segredos do ambiente, não do código.', 'Instrumente métricas e correlação para diagnosticar produção.'],
    avoidWhen: ['Não use print como log de produção.', 'Não coloque segredo no código nem no repositório.', 'Não registre dados sensíveis (PII, tokens) em log.'],
    contrast: {
      bad: 'print de debug espalhado, senha no código e configuração fixa, sem métrica nem correlação.',
      good: 'logging estruturado com correlação, segredos no ambiente, config 12-factor e métricas expostas.'
    },
    tradeoffs: ['Observabilidade acelera diagnóstico e cobra instrumentação e custo de telemetria.', 'Configuração por ambiente dá flexibilidade e exige disciplina de gestão.', 'Segurança adiciona controles e reduz superfície de risco.'],
    production: 'Um incidente demora horas para ser diagnosticado porque o serviço só tinha prints e nenhuma correlação. O exercício introduz logging estruturado, métricas e correlação.',
    risks: ['print como log', 'Segredo no código', 'PII em log', 'Config hardcoded', 'Dependência vulnerável'],
    checklist: ['Uso logging estruturado com níveis e contexto?', 'Segredos e config vêm do ambiente?', 'Há métricas e correlação de requisição?', 'Nenhum dado sensível é logado?', 'As dependências são verificadas quanto a vulnerabilidade?'],
    interview: [
      { level: 'Júnior/Pleno', question: 'Por que usar logging em vez de print em produção?', expected: 'logging tem níveis, handlers, formatação e destino configuráveis, permite filtrar e correlacionar, integra com observabilidade e não polui a saída; print não escala nem se controla.' },
      { level: 'Sênior/Expert', question: 'Como você gerencia configuração e segredos de um serviço Python?', expected: 'Config por ambiente (12-factor), separada do código; segredos em variáveis de ambiente ou secret manager, nunca no repositório; validação da config no start e nada sensível em log.' }
    ],
    exercises: [
      { level: 'Básico', task: 'Substituir prints por logging estruturado com níveis e contexto.', evidence: 'Logs consultáveis e correlacionáveis.' },
      { level: 'Aplicado', task: 'Externalizar configuração e segredos por ambiente com validação no start.', evidence: 'Serviço 12-factor sem segredo no código.' },
      { level: 'Expert', task: 'Instrumentar métricas e correlação e escrever um runbook de incidente.', evidence: 'Dashboard/trace e runbook testado.' }
    ],
    challenge: 'Levar um serviço Python à prontidão de produção: logging estruturado, config e segredos por ambiente, métricas, correlação, verificação de dependências e runbook.',
    book: 'Effective Python (robustez e produção); Architecture Patterns with Python (fronteiras e testes).',
    complements: [official.logging, official.pytest],
    exampleFile: '../../examples/python-senior/README.md'
  }
];

export const pythonAssessment = Object.freeze({
  levels: [
    {
      level: 'Júnior',
      expected: 'Escreve scripts e funções corretas para o caminho feliz com orientação e usa as estruturas built-in.',
      evidence: 'Código executável, alguns testes e vocabulário correto.',
      redFlags: 'Copia trechos sem entender; não trata erro nem caso de borda.'
    },
    {
      level: 'Pleno',
      expected: 'Escreve código idiomático e testado, escolhe estruturas e trata falhas comuns em um serviço ou script real.',
      evidence: 'Código pythônico, testes, type hints e tratamento de erro.',
      redFlags: 'Ignora performance/robustez; não mede; abusa de mocks.'
    },
    {
      level: 'Sênior',
      expected: 'Conduz design testável, escolhe concorrência/performance por evidência e opera o serviço com segurança.',
      evidence: 'Arquitetura em camadas, mypy no CI, profiling, logging e observabilidade.',
      redFlags: 'Otimiza sem baseline; abstrai sem propósito; não versiona dependências.'
    },
    {
      level: 'Expert',
      expected: 'Cria bases reutilizáveis (tipos, padrões, ferramentas), reduz complexidade e melhora o trabalho de outras pessoas.',
      evidence: 'Bibliotecas internas, padrões validados, mecanismos de qualidade e impacto medido.',
      redFlags: 'Complexidade como status; decisões irreversíveis sem necessidade.'
    }
  ],
  caseStudies: [
    {
      id: 'servico-inferencia',
      title: 'Do notebook à API de inferência sob custo',
      scenario: 'Um modelo aprovado em notebook precisa virar serviço, com entrada não confiável, latência sensível e custo por chamada relevante.',
      constraints: ['p95 < 300 ms no caminho local', 'Custo por chamada monitorado', 'Entrada externa validada', 'Reprodutibilidade exigida'],
      decisions: ['API FastAPI com schema de entrada/saída', 'Versionamento de modelo/dados/código', 'Guardrails e avaliação de saída', 'Logging estruturado e métricas de custo/latência'],
      deliverables: ['Serviço tipado e testado', 'Contrato de API versionado', 'Runbook de inferência', 'Relatório de latência e custo']
    },
    {
      id: 'pipeline-lento',
      title: 'Pipeline de dados lento e irreprodutível',
      scenario: 'Um relatório diário demora minutos, às vezes muda de resultado e estoura memória em picos de volume.',
      constraints: ['Memória de container limitada', 'Resultado reprodutível', 'Janela de execução curta'],
      decisions: ['Profiling para achar o gargalo real', 'Vetorização com pandas/NumPy', 'Geradores para memória constante', 'Fixação de dtypes e teste de reprodutibilidade'],
      deliverables: ['Relatório de performance com baseline', 'Pipeline vetorizado e testado', 'Prova de memória constante', 'Resultado reprodutível']
    },
    {
      id: 'integracao-instavel',
      title: 'Integração instável com dependência externa',
      scenario: 'Um serviço trava quando uma API externa fica lenta, processa eventos duplicados e quebra ao mudar o payload.',
      constraints: ['Sem controle sobre a dependência', 'Não processar duas vezes', 'Contrato pode evoluir'],
      decisions: ['Timeout, retry com backoff e circuit breaker', 'Validação de payload com schema', 'Idempotência por chave', 'Versionamento de contrato'],
      deliverables: ['Cliente resiliente', 'Testes de lentidão e duplicação', 'Contrato versionado', 'Runbook de falha de integração']
    },
    {
      id: 'concorrencia-gil',
      title: 'Escalar processamento sob o GIL',
      scenario: 'Um processador mistura I/O e cálculo pesado, usa threads para tudo e não escala; o time quer "mais threads".',
      constraints: ['Núcleos limitados', 'Mistura de I/O e CPU', 'Prazo de processamento'],
      decisions: ['Separar I/O-bound de CPU-bound', 'asyncio/threads para I/O e processos para CPU', 'Dimensionar pools por carga', 'Medir speedup real'],
      deliverables: ['Diagnóstico por tipo de carga', 'Implementação por modelo adequado', 'Benchmark de speedup', 'Recomendação justificada']
    },
    {
      id: 'legado-sem-teste',
      title: 'Módulo legado sem tipos nem testes',
      scenario: 'Um módulo central não tem testes nem tipos, mistura regra com I/O e ninguém ousa mexer.',
      constraints: ['Não pode quebrar comportamento atual', 'Refatoração incremental', 'CI disponível'],
      decisions: ['Testes de caracterização primeiro', 'Introduzir type hints e mypy gradual', 'Extrair repository e camadas', 'Fitness/CI travando regressão'],
      deliverables: ['Suíte de caracterização', 'mypy no CI', 'Refatoração em camadas', 'ADRs das decisões']
    }
  ],
  projects: [
    {
      id: 'servico-python',
      title: 'Projeto Sênior — Serviço Python idiomático e observável',
      objective: 'Construir um serviço Python (API + workers) idiomático, tipado, testado, em camadas e observável, provando as decisões com evidência.',
      stages: [
        'Modelar o domínio com data model, dataclasses e type hints.',
        'Estruturar em domínio, serviço e adaptadores com repository e unit of work.',
        'Cobrir com pytest (unidade e integração) e mypy estrito no CI.',
        'Expor API resiliente (timeout, retry, validação de schema).',
        'Processar carga concorrente com o modelo adequado (asyncio/processos).',
        'Instrumentar logging estruturado, métricas, config por ambiente e runbook.'
      ],
      acceptance: ['mypy estrito verde no CI', 'Suíte de testes rápida e significativa', 'Domínio testável sem infraestrutura', 'API com timeout e validação', 'Serviço observável com runbook'],
      seniorSignal: 'Código idiomático, decisões defensáveis por medição e operação previsível sob falha.'
    },
    {
      id: 'plataforma-dados-ia',
      title: 'Projeto Expert — Plataforma de dados e IA em produção',
      objective: 'Evoluir o serviço para uma plataforma que ingere dados, treina/serve um modelo e opera sob custo, latência e reprodutibilidade controlados.',
      stages: [
        'Pipeline de dados reprodutível, vetorizado e testado.',
        'Serviço de inferência com contrato, versionamento e guardrails.',
        'Concorrência e performance otimizadas por profiling e medição.',
        'Resiliência de integração (timeout, retry, circuit breaker, idempotência).',
        'Observabilidade de custo, latência e qualidade da inferência.',
        'Empacotamento e deploy 12-factor com gestão de segredos.'
      ],
      acceptance: ['Reprodutibilidade de dados e modelo', 'Latência e custo medidos e dentro do alvo', 'Segurança e segredos por ambiente', 'Cobertura de testes e mypy no CI', 'Runbooks e avaliação de qualidade'],
      seniorSignal: 'Cria mecanismos reutilizáveis e leva IA a produção operável, segura e com custo controlado.'
    }
  ],
  completion: [
    'Todos os 20 objetivos foram demonstrados por evidência (código, testes, tipos, medição), não por leitura.',
    'O código roda em Python 3.12+, passa em mypy e tem testes significativos.',
    'Ao menos 36 exercícios foram concluídos, incluindo 20 aplicados e 5 de nível expert.',
    'Os cinco casos foram defendidos com trade-offs, riscos, medição e sinais de senioridade.',
    'Um capstone atende aos critérios; o projeto Expert exige também reprodutibilidade e custo controlado.',
    'Nenhum módulo é marcado como Dominado antes de evidência validada em revisão.'
  ]
});
