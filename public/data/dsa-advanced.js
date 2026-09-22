/*
 * Fonte única da Academia de Algoritmos e Estruturas de Dados (DSA).
 *
 * Preenche o "buraco estrutural" do §6.1 do diagnóstico: a trilha que o
 * cronograma executa 3×/semana durante 36 meses não tinha academia. Aqui ela
 * cobre a curva inteira — da análise de complexidade (faixa 1) à fronteira
 * (randomizados, streaming, NP-completude, aproximação, geometria).
 *
 * Padrão de 23 campos, 100% autoral (sem preenchimento de fábrica). Os livros
 * canônicos de DSA não estão no acervo local; as referências são fontes
 * abertas e canônicas, citadas em `complements`.
 */

const refs = Object.freeze({
  erickson: { title: 'Jeff Erickson — Algorithms (livre)', url: 'https://jeffe.cs.illinois.edu/teaching/algorithms/' },
  cph: { title: 'Competitive Programmer’s Handbook — Laaksonen (livre)', url: 'https://cses.fi/book/book.pdf' },
  algs4: { title: 'Sedgewick & Wayne — Algorithms, 4ª ed (booksite)', url: 'https://algs4.cs.princeton.edu/home/' },
  skiena: { title: 'Skiena — The Algorithm Design Manual (site)', url: 'https://www.algorist.com/' },
  cpalgo: { title: 'CP-Algorithms', url: 'https://cp-algorithms.com/' },
  opendsa: { title: 'OpenDSA — livro interativo', url: 'https://opendsa-server.cs.vt.edu/' },
  mit6006: { title: 'MIT 6.006 — Introduction to Algorithms (OCW)', url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/' },
  approx: { title: 'Williamson & Shmoys — The Design of Approximation Algorithms (livre)', url: 'https://www.designofapproxalgs.com/' },
  cses: { title: 'CSES Problem Set', url: 'https://cses.fi/problemset/' }
});

export const dsaBooks = Object.freeze({});

export const dsaAcademy = Object.freeze({
  title: 'Academia de Algoritmos e Estruturas de Dados',
  baseline: 'Uma linguagem (Python/Java) · lógica e recursão básica · disposição para provar corretude e custo, não só passar no teste.',
  book: null,
  parts: {
    base: {
      index: '0/6', range: 'Módulos 0.1–0.4', page: 'base.html', navLabel: 'Módulo 0',
      title: 'Módulo 0 — da Faixa 0 aos algoritmos',
      subtitle: 'Ponte da lógica (Faixa 0) para a análise: por que a eficiência importa, contar operações, recursão do zero e escolher a estrutura.',
      prerequisites: [
        'Ter passado pela Faixa 0 e saber escrever laços e funções em uma linguagem.',
        'Rastrear a execução de um trecho na mão.',
        'Nenhuma teoria de complexidade prévia.'
      ],
      objectives: [
        'Ganhar a intuição de crescimento (por que O(n²) trava) antes do formalismo.',
        'Contar os passos de um algoritmo (laço = n, aninhado = n², dividir = log n).',
        'Escrever e rastrear recursão (caso-base + passo, a pilha de chamadas).',
        'Escolher a estrutura básica (lista vs dicionário) pelo custo do acesso.'
      ]
    },
    fundamentos: {
      index: '1/6', range: 'Módulos 1–5', page: 'fundamentos.html', navLabel: 'Fundamentos',
      title: 'Análise e estruturas lineares',
      subtitle: 'Complexidade, arrays e ponteiros, hashing, pilhas/filas/listas e a dupla ordenação + busca binária.',
      prerequisites: ['Escrever e depurar código em uma linguagem', 'Recursão e laços', 'Nenhuma teoria formal prévia'],
      objectives: ['Analisar tempo e espaço com Big O, Θ, Ω e análise amortizada', 'Escolher a estrutura linear certa pelo custo de cada operação', 'Aplicar dois ponteiros, janela deslizante, hashing e busca binária']
    },
    hierarquicas: {
      index: '2/6', range: 'Módulos 6–10', page: 'hierarquicas.html', navLabel: 'Estruturas',
      title: 'Estruturas hierárquicas e de prioridade',
      subtitle: 'Árvores e travessias, BST balanceadas, heaps, tries e strings, e union-find.',
      prerequisites: ['Módulos 1–5', 'Recursão sobre estruturas', 'Invariantes'],
      objectives: ['Percorrer e manipular árvores por DFS/BFS', 'Manter balanceamento e prioridade com custo garantido', 'Resolver problemas de conjuntos e de strings com a estrutura certa']
    },
    grafos: {
      index: '3/6', range: 'Módulos 11–15', page: 'grafos.html', navLabel: 'Grafos',
      title: 'Grafos',
      subtitle: 'Travessia, ordenação topológica, caminhos mínimos, árvore geradora mínima e fluxo/corte.',
      prerequisites: ['Módulos 1–10', 'Filas, heaps e union-find', 'Modelar problema como grafo'],
      objectives: ['Modelar um problema como grafo e escolher a travessia', 'Aplicar Dijkstra, Bellman-Ford, Kruskal/Prim pelo caso', 'Reconhecer quando o problema é de fluxo, corte ou matching']
    },
    paradigmas: {
      index: '4/6', range: 'Módulos 16–20', page: 'paradigmas.html', navLabel: 'Paradigmas',
      title: 'Paradigmas de projeto de algoritmos',
      subtitle: 'Backtracking, dividir e conquistar, guloso e programação dinâmica (I e II).',
      prerequisites: ['Módulos 1–15', 'Recorrências e prova por indução', 'Reconhecer subestrutura'],
      objectives: ['Escolher o paradigma pela estrutura do problema, não por hábito', 'Provar corretude de guloso por troca de argumento', 'Formular DP por estado, transição e ordem de avaliação']
    },
    fronteira: {
      index: '5/6', range: 'Módulos 21–25', page: 'fronteira.html', navLabel: 'Fronteira',
      title: 'Fronteira: além do avançado',
      subtitle: 'Algoritmos randomizados, streaming e sketching, estruturas persistentes, NP-completude e aproximação/geometria.',
      prerequisites: [
        'Dominar os módulos 1–20: análise, estruturas, grafos e paradigmas.',
        'Aceitar respostas probabilísticas e aproximadas com garantia declarada.',
        'Saber quando o ótimo exato é inviável — e o que fazer então.'
      ],
      objectives: [
        'Usar aleatoriedade para simplicidade e desempenho esperado com garantia.',
        'Responder a fluxos de dados que não cabem na memória com sketches.',
        'Provar que um problema é NP-difícil por redução e decidir a saída.',
        'Trocar exatidão por uma razão de aproximação demonstrável.',
        'Resolver problemas geométricos com varredura e envoltória convexa.'
      ]
    },
    avaliacao: {
      index: '6/6', range: 'Evidência', page: 'avaliacao.html', navLabel: 'Avaliação e projetos',
      title: 'Avaliação, projetos e biblioteca',
      subtitle: 'Defender escolha de algoritmo por custo, corretude e evidência reproduzível.',
      prerequisites: ['Concluir os 25 módulos ou comprovar equivalência', 'Manter um repositório de soluções com testes', 'Medir tempo/memória, não só aceitação'],
      objectives: ['Demonstrar domínio por decisão justificada de complexidade', 'Resolver sob restrição de tempo e de recurso', 'Evoluir um caderno de padrões e um resolvedor próprio', 'Validar corretude com testes e casos de borda']
    }
  }
});

function moduleOf(config) {
  return Object.freeze({
    ...config,
    interview: config.interview.map(([level, question, expected]) => ({ level, question, expected })),
    exercises: config.exercises.map(([level, task, evidence]) => ({ level, task, evidence }))
  });
}

export const dsaModules = Object.freeze([
  moduleOf({
    number: '0.1', part: 'base', id: 'por-que-eficiencia', title: 'Por que a eficiência importa: a intuição do crescimento', level: 'Introdução',
    objective: 'Ganhar a intuição de que o tempo de um algoritmo cresce com a entrada — e que O(n²) trava onde O(n) passa — antes de formalizar com Big O.',
    prerequisites: ['Faixa 0: pensar em passos e rastrear execução', 'Escrever um laço em uma linguagem'],
    problem: 'Código "rápido no teste" com entrada pequena derruba produção quando a entrada cresce; sem a intuição de crescimento, a escolha entre soluções é no escuro.',
    concepts: ['Entrada (n) e tempo', 'Crescimento linear vs quadrático', 'Rápido no exemplo ≠ rápido em escala', 'A pergunta "e se n dobrar?"', 'Intuição antes da notação'],
    internals: ['O que importa não é o tempo num n pequeno, é como o tempo CRESCE quando n aumenta.', 'Dobrar n num algoritmo linear ~dobra o tempo; num quadrático, ~quadruplica.', 'Para n=1000, um O(n²) faz um milhão de passos — mil vezes mais que um O(n).'],
    useWhen: ['Antes de escolher entre duas soluções.', 'Ao explicar por que algo "funciona no teste e trava em produção".'],
    avoidWhen: ['Não julgue a eficiência por um único n pequeno.', 'Não otimize antes de entender como o custo cresce.'],
    contrast: { bad: 'Dizer "é rápido" porque rodou num exemplo de 10 itens.', good: 'Perguntar "e se n for 1 milhão?" e estimar o crescimento.' },
    tradeoffs: ['Pensar em crescimento custa um minuto e evita horas de retrabalho.', 'A intuição não substitui a medição, mas guia a escolha.'],
    production: 'Uma verificação de duplicatas comparando todos com todos (O(n²)) passou de milissegundos a minutos quando o lote foi de mil para um milhão — e estourou o timeout.',
    risks: ['Concluir eficiência de um n pequeno.', 'Ignorar a pergunta "e se n dobrar?".', 'Confundir "funcionou" com "escala".'],
    checklist: ['Sei estimar o tempo se n dobrar?', 'Reconheço um laço aninhado como crescimento quadrático?', 'Penso no maior n plausível, não só no exemplo?', 'Entendo por que O(n²) trava em escala?'],
    interview: [
      ['Introdução', 'Por que um código "rápido no teste" pode travar em produção?', 'O teste usa n pequeno; o custo cresce com n, e um algoritmo quadrático explode quando a entrada real é grande.'],
      ['Introdução', 'O que acontece com o tempo de um algoritmo quadrático se n dobra?', 'Aproximadamente quadruplica (o custo cresce com n²).']
    ],
    exercises: [
      ['Básico', 'Medir o tempo de um laço aninhado para n=100, 200 e 400 e observar que ~quadruplica ao dobrar.', 'Tabela n × tempo mostrando o crescimento quadrático.'],
      ['Aplicado', 'Estimar quantos passos um O(n²) faz para n=1.000.000 e comparar com um O(n).', 'Cálculo com a diferença de ordem de grandeza.']
    ],
    quiz: [
      { question: 'Se n dobra, o tempo de um algoritmo O(n²) aproximadamente:', options: ['dobra', 'quadruplica', 'fica igual', 'cai pela metade'], answer: 1, why: 'O custo cresce com n²; dobrar n multiplica por ~4.' },
      { question: 'O que mais importa ao comparar dois algoritmos?', options: ['o tempo num n pequeno', 'como o tempo cresce quando n aumenta', 'o número de linhas', 'a linguagem'], answer: 1, why: 'A eficiência é sobre crescimento com a entrada.' },
      { question: 'Para n = 1000, um O(n²) faz cerca de:', options: ['1.000 passos', '1.000.000 de passos', '10.000 passos', '100 passos'], answer: 1, why: '1000 × 1000 = 1.000.000.' }
    ],
    challenge: 'Explicar para um iniciante, sem usar "Big O", por que somar dois laços aninhados é perigoso em escala.',
    book: 'Erickson, introdução; MIT 6.006, aula 1 (recomendado).',
    complements: [refs.erickson, refs.mit6006], exampleFile: null
  }),
  moduleOf({
    number: '0.2', part: 'base', id: 'contar-operacoes', title: 'Contar operações: a intuição por trás do Big O', level: 'Introdução',
    objective: 'Contar os passos de um algoritmo simples — laço = n, aninhado = n², dividir por 2 = log n — preparando o formalismo do módulo 1.',
    prerequisites: ['Módulo 0.1', 'Saber ler um laço e um laço aninhado'],
    problem: 'Big O parece abstrato quando cai de paraquedas; contar passos concretamente é a ponte que torna a notação óbvia depois.',
    concepts: ['Contar passos de um laço', 'Laços aninhados = n×n', 'Dividir por 2 = ~log₂ n', 'Passo dominante', 'Da contagem à notação'],
    internals: ['Um laço de 1 a n faz n passos; dois aninhados fazem n×n; reduzir n pela metade a cada passo leva ~log₂ n passos.', 'O Big O do módulo 1 é só a forma de nomear esse crescimento, ignorando constantes.', 'Identificar o "passo dominante" (o mais executado) já dá a classe do algoritmo.'],
    useWhen: ['Ao estimar o custo de um trecho antes de rodar.', 'Como base para entender O, Θ e Ω no módulo 1.'],
    avoidWhen: ['Não decore fórmulas; conte os passos e veja o padrão.', 'Não ignore o laço mais interno (é ele que domina).'],
    contrast: { bad: 'Chutar a complexidade olhando o código.', good: 'Contar os passos do laço dominante e nomear o crescimento.' },
    tradeoffs: ['Contar à mão é lento, mas constrói a intuição que o Big O depois resume.', 'Constantes somem no assintótico, mas contam em n pequeno.'],
    production: 'Um filtro com um laço dentro de outro parecia inofensivo; contar os passos revelou o n² que só apareceu quando a lista cresceu.',
    risks: ['Contar só o laço externo.', 'Confundir n+n (dois laços em sequência) com n×n (aninhados).', 'Esquecer o passo dominante.'],
    checklist: ['Sei contar os passos de um laço simples?', 'Reconheço n×n em laços aninhados?', 'Reconheço log n quando divido por 2?', 'Identifico o passo dominante?'],
    interview: [
      ['Introdução', 'Quantos passos faz um laço de 1 a n dentro de outro de 1 a n?', 'n×n = n² passos.'],
      ['Introdução', 'Por que dividir o problema pela metade a cada passo dá ~log n?', 'Porque o número de divisões até chegar a 1 é log₂ n.']
    ],
    exercises: [
      ['Básico', 'Rodar o exemplo dsa-zero e conferir a contagem de passos do laço, do aninhado e do "dividindo".', 'Notas ligando cada contagem a n, n² e log n.'],
      ['Aplicado', 'Contar à mão os passos de três trechos e prever a classe (linear, quadrático, log) antes de rodar.', 'Tabela trecho × contagem × classe prevista.']
    ],
    quiz: [
      { question: 'Dois laços aninhados de 1 a n fazem:', options: ['n passos', 'n + n passos', 'n × n passos', 'log n passos'], answer: 2, why: 'Cada passo do externo roda o interno inteiro: n×n.' },
      { question: 'Reduzir n pela metade a cada passo até 1 leva cerca de:', options: ['n passos', 'log₂ n passos', 'n² passos', '1 passo'], answer: 1, why: 'O número de divisões por 2 até 1 é log₂ n.' },
      { question: 'Dois laços em SEQUÊNCIA (um após o outro), cada um de 1 a n, fazem:', options: ['n × n', 'n + n', 'log n', 'n!'], answer: 1, why: 'Em sequência somam-se: n + n = 2n (linear), não n².' }
    ],
    challenge: 'Pegar um trecho seu, contar os passos do laço dominante e prever a classe — depois confirmar no módulo 1 com Big O.',
    book: 'Erickson, cap. de análise; CP-Handbook, cap. 2 (recomendado).',
    complements: [refs.erickson, refs.cph], exampleFile: '../../examples/dsa-senior/dsa-zero.py'
  }),
  moduleOf({
    number: '0.3', part: 'base', id: 'recursao-do-zero', title: 'Recursão do zero: caso-base, passo e a pilha', level: 'Introdução',
    objective: 'Escrever e rastrear uma recursão — caso-base + passo recursivo — entendendo que cada chamada vive na pilha.',
    prerequisites: ['Módulo 0.2', 'Faixa 0: rastrear execução e a pilha de chamadas', 'Saber escrever uma função'],
    problem: 'Recursão trava iniciantes porque parece circular; sem caso-base e sem o modelo da pilha, vira loop infinito ou stack overflow.',
    concepts: ['Caso-base (para a recursão)', 'Passo recursivo (reduz o problema)', 'A pilha de chamadas', 'Rastrear uma recursão', 'Recursão vs iteração'],
    internals: ['Toda recursão precisa de um caso-base (a condição de parada) e um passo que se aproxime dele.', 'Cada chamada empilha um quadro na pilha (como na Faixa 0); ao retornar, desempilha — recursão sem caso-base estoura a pilha.', 'Muita recursão tem uma versão iterativa equivalente; a recursiva costuma ser mais legível quando o problema é auto-similar.'],
    useWhen: ['Quando o problema se define em termos de si mesmo (árvores, divisão e conquista).', 'Ao rastrear uma função que chama a si mesma.'],
    avoidWhen: ['Não escreva recursão sem um caso-base claro.', 'Não recorra a profundidades enormes sem pensar na pilha (risco de stack overflow).'],
    contrast: { bad: 'def f(n): return f(n-1)  # nunca para → estoura a pilha.', good: 'def f(n): return 1 if n<=1 else n*f(n-1)  # caso-base + passo.' },
    tradeoffs: ['Recursão é elegante para problemas auto-similares, ao custo de pilha e overhead.', 'Iteração é mais econômica em pilha; recursão é mais legível em árvores.'],
    production: 'Uma função recursiva sobre uma estrutura muito profunda estourou a pilha (stack overflow) em produção; rastrear a profundidade revelou a falta de um limite.',
    risks: ['Esquecer o caso-base (loop infinito / stack overflow).', 'Passo que não se aproxima do caso-base.', 'Recursão profunda demais.'],
    checklist: ['Minha recursão tem um caso-base?', 'O passo se aproxima do caso-base?', 'Sei rastrear as chamadas na pilha?', 'A profundidade é segura?'],
    interview: [
      ['Introdução', 'Quais as duas partes de toda recursão?', 'O caso-base (condição de parada) e o passo recursivo (que reduz o problema em direção ao caso-base).'],
      ['Introdução', 'Por que uma recursão sem caso-base estoura a pilha?', 'Cada chamada empilha um quadro e nunca retorna; a pilha esgota (stack overflow).']
    ],
    exercises: [
      ['Básico', 'Escrever fatorial recursivo com caso-base e testar fatorial(5)=120 (como em dsa-zero).', 'A função e a saída conferida.'],
      ['Aplicado', 'Rastrear na mão a pilha de chamadas de uma soma recursiva de 1..4 e conferir com a execução.', 'Diagrama da pilha empilhando e desempilhando.']
    ],
    quiz: [
      { question: 'Toda recursão precisa de:', options: ['um laço', 'um caso-base', 'uma lista', 'duas funções'], answer: 1, why: 'Sem caso-base, ela não para.' },
      { question: 'Cada chamada recursiva:', options: ['libera memória', 'empilha um quadro na pilha', 'roda em outra thread', 'é ignorada'], answer: 1, why: 'As chamadas se acumulam na pilha até retornarem.' },
      { question: 'Uma recursão sem caso-base causa:', options: ['resultado errado', 'stack overflow', 'lentidão só', 'nada'], answer: 1, why: 'A pilha esgota por chamadas infinitas.' }
    ],
    challenge: 'Escrever a mesma soma de 1..n de forma recursiva e iterativa e explicar quando cada uma é preferível.',
    book: 'Erickson, cap. de recursão; OpenDSA (recursão) (recomendado).',
    complements: [refs.erickson, refs.opendsa], exampleFile: null
  }),
  moduleOf({
    number: '0.4', part: 'base', id: 'estruturas-basicas', title: 'Estruturas básicas: lista e dicionário (acesso e busca)', level: 'Introdução',
    objective: 'Escolher entre lista e dicionário pelo padrão de acesso, entendendo que buscar numa lista custa até n e num dicionário ~1.',
    prerequisites: ['Módulo 0.2', 'Coleções básicas da sua linguagem (lista, dict/map)'],
    problem: 'A estrutura errada transforma um problema simples em lento: buscar sempre percorrendo uma lista vira O(n²) dentro de um laço.',
    concepts: ['Lista/array: índice e acesso O(1)', 'Busca linear O(n)', 'Dicionário/hash: acesso por chave ~O(1)', 'Escolher pela operação dominante', 'Índice pré-construído'],
    internals: ['Acessar lista[i] por índice é O(1); mas PROCURAR um valor percorrendo é O(n).', 'Um dicionário mapeia chave→valor com acesso ~O(1) (hashing) — o que o módulo de hashing formaliza depois.', 'Se você busca a mesma coleção muitas vezes, construir um índice (dict) uma vez troca N buscas O(n) por N acessos O(1).'],
    useWhen: ['Ao decidir onde guardar dados que serão buscados.', 'Ao trocar busca repetida em lista por um dicionário de índice.'],
    avoidWhen: ['Não busque por valor numa lista dentro de um laço quente.', 'Não use dicionário quando a ordem/sequência é o que importa.'],
    contrast: { bad: 'Para cada pedido, procurar o cliente percorrendo a lista de clientes (O(n) por pedido).', good: 'Indexar clientes por id num dict uma vez; cada consulta vira O(1).' },
    tradeoffs: ['Dicionário dá acesso rápido por chave ao custo de memória; lista é simples e ordenada.', 'Construir o índice custa O(n) uma vez, mas paga em muitas buscas.'],
    production: 'Um relatório fazia busca linear numa lista dentro de um laço (O(n²)) e demorava minutos; indexar por dict derrubou para segundos.',
    risks: ['Busca linear repetida onde um dict resolveria.', 'Usar lista para associação chave→valor.', 'Ignorar o custo de construir o índice.'],
    checklist: ['Sei a diferença entre acesso por índice e busca por valor?', 'Sei que dict acha por chave em ~1 acesso?', 'Escolho a estrutura pela operação dominante?', 'Considero pré-construir um índice?'],
    interview: [
      ['Introdução', 'Qual a diferença entre acessar lista[i] e procurar um valor na lista?', 'lista[i] por índice é O(1); procurar um valor percorre a lista e é O(n).'],
      ['Introdução', 'Quando trocar uma lista por um dicionário?', 'Quando o acesso é por chave/busca repetida: o dict dá ~O(1) em vez de O(n).']
    ],
    exercises: [
      ['Básico', 'Rodar o exemplo dsa-zero e comparar as comparações da busca linear com o acesso por dict.', 'Nota com os números (n comparações vs ~1 acesso).'],
      ['Aplicado', 'Trocar uma busca linear repetida por um dict de índice e medir a diferença.', 'Antes/depois com a mudança de custo.']
    ],
    quiz: [
      { question: 'Procurar um valor percorrendo uma lista de n itens custa, no pior caso:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'], answer: 2, why: 'Pode ser preciso comparar com todos os n itens.' },
      { question: 'Um dicionário (hash) acha por chave em cerca de:', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'], answer: 0, why: 'O acesso por chave é ~O(1) via hashing.' },
      { question: 'Buscar repetidamente numa lista dentro de um laço tende a virar:', options: ['O(n)', 'O(n²)', 'O(1)', 'O(log n)'], answer: 1, why: 'N buscas O(n) → O(n²); indexar por dict evita.' }
    ],
    challenge: 'Pegar um trecho com busca linear repetida e reescrevê-lo com um índice (dict), explicando a mudança de custo.',
    book: 'Erickson (hashing intro); Sedgewick & Wayne, symbol tables (recomendado).',
    complements: [refs.erickson, refs.algs4], exampleFile: null
  }),
  moduleOf({
    number: 1, part: 'fundamentos', id: 'complexidade', title: 'Análise de complexidade', level: 'Fundação',
    objective: 'Analisar tempo e espaço de um algoritmo com Big O, Θ e Ω, incluindo análise amortizada e recorrências, e prever escala antes de rodar.',
    prerequisites: ['Laços e recursão', 'Noção de função', 'Aritmética de logaritmos'],
    problem: 'Código "rápido no teste" derruba produção quando a entrada cresce; sem análise, a escolha entre O(n) e O(n²) é adivinhação.',
    concepts: ['Big O, Θ e Ω', 'Custo de tempo e de espaço', 'Análise amortizada', 'Recorrências e teorema mestre', 'Melhor/médio/pior caso'],
    internals: ['Big O é limite superior assintótico; Θ é limite justo; Ω é inferior — dizer "O(n)" para pior caso e média confunde.', 'Análise amortizada (ex.: array dinâmico) dá o custo médio por operação numa sequência, não o custo de uma operação isolada.', 'Constantes e termos de baixa ordem somem no assintótico, mas mandam em n pequeno — meça quando importa.'],
    useWhen: ['Comparar duas soluções antes de implementar.', 'Justificar por que uma abordagem não escala.'],
    avoidWhen: ['Não otimize constante antes de acertar a classe assintótica.', 'Não confunda O do pior caso com o comportamento típico sem dizer qual é qual.'],
    contrast: { bad: 'Afirmar "é rápido" porque passou no exemplo pequeno.', good: 'Derivar a recorrência, resolver a classe e validar o expoente medindo tempos em tamanhos que dobram.' },
    tradeoffs: ['Assintótico ignora constantes que dominam em n pequeno.', 'Melhor caso engana; o pior caso é o contrato.', 'Espaço extra frequentemente compra tempo.'],
    production: 'Uma verificação O(n²) de duplicatas num lote que cresceu de mil para um milhão de itens passou de milissegundos a minutos e estourou o timeout.',
    risks: ['Reportar O do melhor caso como se fosse geral.', 'Ignorar o custo de espaço.', 'Esquecer o custo escondido de operações de biblioteca.', 'Otimizar constante e não a classe.'],
    checklist: ['Qual é o pior caso em tempo e espaço?', 'A recorrência foi resolvida?', 'O custo escondido das chamadas de biblioteca entrou na conta?', 'A classe foi confirmada medindo tamanhos que dobram?', 'A constante importa para o n real?'],
    interview: [['Pleno', 'Qual a diferença entre O, Θ e Ω?', 'O é limite superior, Ω inferior, Θ justo; usar cada um para o que ele afirma.'], ['Sênior', 'O que é análise amortizada e onde ela muda a resposta?', 'Custo médio por operação numa sequência; ex.: push em array dinâmico é O(1) amortizado apesar do resize O(n).']],
    exercises: [['Básico', 'Classificar a complexidade de 8 trechos e justificar.', 'Tabela com a classe e a justificativa de cada um.'], ['Aplicado', 'Provar o custo amortizado O(1) do array dinâmico.', 'Demonstração do custo agregado da sequência de inserções.'], ['Sênior', 'Resolver três recorrências pelo teorema mestre e conferir empiricamente.', 'As três classes com os tempos medidos em tamanhos que dobram.']],
    challenge: 'Mostrar um caso em que o algoritmo de pior O vence na prática por causa da constante e da localidade de cache — e explicar por quê.',
    book: 'CLRS 4ª ed, cap. 2–4 (recomendado); Erickson, cap. sobre recorrências.',
    complements: [refs.erickson, refs.mit6006], exampleFile: null
  }),
  moduleOf({
    number: 2, part: 'fundamentos', id: 'arrays-ponteiros', title: 'Arrays, dois ponteiros e janela deslizante', level: 'Fundação',
    objective: 'Resolver problemas de subarray e de pares com dois ponteiros, janela deslizante e somas de prefixo, trocando O(n²) por O(n).',
    prerequisites: ['Módulo 1', 'Arrays e índices', 'Invariantes de laço'],
    problem: 'Laços aninhados sobre o mesmo array dão O(n²) onde uma passada com ponteiros dá O(n) — a diferença entre passar e estourar o tempo.',
    concepts: ['Dois ponteiros (convergente e paralelo)', 'Janela deslizante de tamanho fixo e variável', 'Soma de prefixo e diferença', 'Invariante da janela'],
    internals: ['A janela deslizante mantém um invariante (soma, contagem, distintos) ao mover as bordas, amortizando cada elemento a O(1).', 'Soma de prefixo pré-computa em O(n) para responder somas de intervalo em O(1); a versão 2D usa inclusão-exclusão.', 'Dois ponteiros convergentes exigem uma propriedade monotônica (ex.: array ordenado) para descartar metades com segurança.'],
    useWhen: ['Subarray/substring contíguos com uma propriedade.', 'Pares/tripletos em array ordenado.'],
    avoidWhen: ['Não use janela quando a resposta não é contígua.', 'Não aplique dois ponteiros sem a monotonicidade que os justifica.'],
    contrast: { bad: 'Dois laços aninhados testando todo par.', good: 'Uma passada mantendo o invariante e movendo a borda que viola a condição.' },
    tradeoffs: ['Prefix sum gasta O(n) de espaço para acelerar consultas.', 'A janela exige provar que mover a borda preserva o invariante.', 'Ordenar primeiro custa O(n log n) mas habilita dois ponteiros.'],
    production: 'Um cálculo de "maior pico de uso em 5 minutos" sobre a série temporal era O(n·k); com soma de prefixo virou O(n) e passou a rodar em tempo real.',
    risks: ['Off-by-one na borda da janela.', 'Recalcular a soma inteira a cada passo.', 'Aplicar dois ponteiros sem ordenar.', 'Estourar índice ao encolher a janela.'],
    checklist: ['A resposta é contígua?', 'O invariante da janela está explícito?', 'As bordas cobrem casos vazios?', 'A soma é atualizada em O(1), não recomputada?', 'A monotonicidade dos dois ponteiros vale?'],
    interview: [['Pleno', 'Quando a janela deslizante é aplicável?', 'Quando a resposta é um segmento contíguo e há um invariante que se mantém ao mover as bordas.'], ['Sênior', 'Por que dois ponteiros exigem ordenação em "two sum"?', 'A monotonicidade permite decidir qual ponteiro mover; sem ordem, mover é arbitrário.']],
    exercises: [['Básico', 'Achar o subarray de soma máxima (Kadane) e explicar o invariante.', 'Código O(n) com o invariante comentado.'], ['Aplicado', 'Menor substring com todos os caracteres de um conjunto.', 'Janela variável com teste em casos de borda.'], ['Sênior', 'Somas de intervalo 2D por prefix sum com inclusão-exclusão.', 'Estrutura O(mn) e consultas O(1) verificadas.']],
    challenge: 'Resolver "subarrays com soma exatamente k" em O(n) usando prefix sum + hash e explicar por que a janela não serve aqui.',
    book: 'CP-Algorithms (two pointers); Competitive Programmer’s Handbook, cap. 8.',
    complements: [refs.cph, refs.cpalgo], exampleFile: null
  }),
  moduleOf({
    number: 3, part: 'fundamentos', id: 'hashing', title: 'Hashing e tabelas hash', level: 'Fundação',
    objective: 'Usar tabelas hash com consciência de colisão, load factor e custo amortizado, e reconhecer quando o pior caso O(n) aparece.',
    prerequisites: ['Módulo 1', 'Funções e igualdade', 'Arrays'],
    problem: 'A tabela hash parece "O(1) mágico" até uma função ruim ou entrada adversária degradar tudo para O(n) por operação.',
    concepts: ['Função de hash e distribuição', 'Colisão: encadeamento vs endereçamento aberto', 'Load factor e rehash', 'Igualdade e hashCode consistentes'],
    internals: ['O custo O(1) é amortizado e esperado, não garantido: com muitas colisões, uma operação vira O(n).', 'Load factor alto aumenta colisões; o rehash dobra a capacidade e recopia — O(n) amortizado por inserção.', 'Chave mutável cujo hash muda depois de inserida fica inalcançável — a entrada "some" sem erro.'],
    useWhen: ['Lookup, contagem e deduplicação em tempo esperado O(1).', 'Memoization e cache por chave.'],
    avoidWhen: ['Não use hash quando precisa de ordem (use árvore).', 'Não use objeto mutável como chave.'],
    contrast: { bad: 'Confiar em O(1) e usar chave mutável ou função de hash fraca.', good: 'Escolher hash com boa distribuição, monitorar load factor e manter chave imutável e igualdade consistente.' },
    tradeoffs: ['Hash dá O(1) esperado mas perde a ordem.', 'Endereçamento aberto é cache-friendly mas sofre com load alto.', 'Segurança contra colisão adversária custa hash aleatorizado.'],
    production: 'Um serviço multi-tenant sofreu ataque de colisão de hash (chaves escolhidas para colidir), degradando um endpoint para O(n) e derrubando a latência.',
    risks: ['Chave mutável.', 'hashCode inconsistente com equals.', 'Load factor alto sem rehash.', 'Hash previsível sob entrada adversária.'],
    checklist: ['A chave é imutável?', 'equals e hashCode são consistentes?', 'O load factor é monitorado?', 'O pior caso adversário foi considerado?', 'Precisa de ordem? (então não é hash)'],
    interview: [['Pleno', 'Por que a tabela hash é O(1) "esperado" e não garantido?', 'Colisões podem levar uma operação a O(n); a garantia é sobre a média com boa função e load controlado.'], ['Sênior', 'O que quebra ao usar um objeto mutável como chave?', 'Se um campo do hash muda após a inserção, o bucket calculado muda e a entrada fica inalcançável.']],
    exercises: [['Básico', 'Implementar contagem de frequência e detectar duplicatas com hash.', 'Solução O(n) com casos de borda.'], ['Aplicado', 'Implementar uma tabela hash com encadeamento e rehash.', 'Estrutura com load factor e teste de colisão.'], ['Sênior', 'Demonstrar a degradação para O(n) com entrada adversária e mitigar.', 'Medição antes/depois com hash aleatorizado.']],
    challenge: 'Comparar encadeamento e endereçamento aberto medindo throughput sob load factor crescente e explicar o ponto de virada.',
    book: 'CLRS, cap. 11 (recomendado); Sedgewick, seção de hash tables.',
    complements: [refs.algs4, refs.mit6006], exampleFile: null
  }),
  moduleOf({
    number: 4, part: 'fundamentos', id: 'listas-pilhas-filas', title: 'Pilhas, filas, deque e listas ligadas', level: 'Fundação',
    objective: 'Escolher entre pilha, fila, deque e lista ligada pelo padrão de acesso e implementar as operações com custo garantido.',
    prerequisites: ['Módulo 1', 'Ponteiros/referências', 'Arrays'],
    problem: 'Usar a estrutura errada (lista onde precisa de índice, array onde precisa de inserção no meio) transforma O(1) em O(n) sem ninguém perceber.',
    concepts: ['Pilha (LIFO) e fila (FIFO)', 'Deque e fila monotônica', 'Lista ligada simples e dupla', 'Array vs lista: custo por operação'],
    internals: ['Lista ligada dá inserção/remoção O(1) com o nó em mãos, mas acesso por índice O(n) e péssima localidade de cache.', 'A fila monotônica mantém a ordem para responder mínimo/máximo de janela em O(1) amortizado.', 'Pilha explícita converte recursão em iteração e evita estouro de pilha em entradas profundas.'],
    useWhen: ['Pilha: reversão, casamento de parênteses, DFS iterativo.', 'Fila/deque: BFS, janela, produtor-consumidor.'],
    avoidWhen: ['Não use lista ligada quando precisa de acesso aleatório.', 'Não use array quando há muita inserção no meio.'],
    contrast: { bad: 'Percorrer uma lista ligada por índice num laço.', good: 'Escolher a estrutura pelo padrão de acesso dominante e provar o custo de cada operação.' },
    tradeoffs: ['Lista: inserção O(1), acesso O(n), cache ruim.', 'Array: acesso O(1), inserção no meio O(n), cache bom.', 'Deque paga um pouco mais por flexibilidade das duas pontas.'],
    production: 'Um pipeline usava lista ligada e acessava por índice num laço; trocar por array derrubou o tempo de um relatório de minutos para segundos, só pela localidade de cache.',
    risks: ['Acesso por índice em lista ligada.', 'Vazamento de referência ao remover nó.', 'Estouro de pilha por recursão profunda.', 'Fila implementada sobre array sem circularidade.'],
    checklist: ['Qual o acesso dominante: índice ou ponteiro?', 'O custo de cada operação está correto?', 'Recursão profunda foi convertida em pilha?', 'A fila é circular/amortizada?', 'A localidade de cache foi considerada?'],
    interview: [['Pleno', 'Quando lista ligada perde para array mesmo com inserção frequente?', 'Quando há acesso por índice ou o ganho de inserção é anulado pela péssima localidade de cache.'], ['Sênior', 'Para que serve uma fila monotônica?', 'Responder mínimo/máximo de janela deslizante em O(1) amortizado mantendo a ordem na deque.']],
    exercises: [['Básico', 'Validar parênteses balanceados com pilha.', 'Solução O(n) cobrindo casos de borda.'], ['Aplicado', 'Máximo de cada janela deslizante com fila monotônica.', 'Código O(n) com o invariante da deque.'], ['Sênior', 'Implementar deque e LRU cache O(1) com lista dupla + hash.', 'Estrutura com get/put O(1) testada.']],
    challenge: 'Implementar uma fila usando duas pilhas com custo amortizado O(1) e provar o amortizado.',
    book: 'Sedgewick, cap. 1.3 (bags, queues, stacks); Erickson.',
    complements: [refs.algs4, refs.opendsa], exampleFile: null
  }),
  moduleOf({
    number: 5, part: 'fundamentos', id: 'ordenacao-busca', title: 'Ordenação e busca binária', level: 'Intermediário',
    objective: 'Dominar ordenação por comparação e linear, o limite Ω(n log n), e busca binária — inclusive "na resposta", não só em array.',
    prerequisites: ['Módulo 1', 'Recorrências', 'Invariantes'],
    problem: 'Busca binária é o algoritmo mais errado do mundo (off-by-one, laço infinito) e o mais subutilizado (só em array, quando serve para qualquer resposta monotônica).',
    concepts: ['Merge/quick/heap sort e estabilidade', 'Limite inferior Ω(n log n) por comparação', 'Ordenação linear (counting/radix)', 'Busca binária no índice e na resposta'],
    internals: ['Qualquer ordenação por comparação faz Ω(n log n) no pior caso — a árvore de decisão tem n! folhas.', 'Counting/radix quebram o limite porque não comparam: exploram a estrutura da chave (inteiros limitados).', 'Busca binária "na resposta" funciona quando existe um limiar monotônico: verdadeiro/falso muda uma vez ao longo do domínio.'],
    useWhen: ['Ordenar para habilitar dois ponteiros/busca.', 'Achar o menor/maior valor viável (busca na resposta).'],
    avoidWhen: ['Não use counting sort com domínio enorme.', 'Não aplique busca binária sem provar monotonicidade.'],
    contrast: { bad: 'Copiar um binary search e torcer para os índices baterem.', good: 'Definir o invariante [lo, hi), a condição de parada e provar a monotonicidade da resposta.' },
    tradeoffs: ['Quicksort é rápido na média mas O(n²) no pior caso sem pivô aleatório.', 'Merge sort é estável mas usa O(n) de espaço.', 'Counting sort é O(n+k) mas custa espaço proporcional ao domínio.'],
    production: 'Um sistema de alocação escolhia a "menor capacidade que atende" por varredura O(n·max); busca binária na resposta baixou para O(n log max).',
    risks: ['Off-by-one em lo/hi/mid.', 'Laço infinito por atualização errada.', 'Overflow em (lo+hi).', 'Assumir monotonicidade inexistente.'],
    checklist: ['O invariante do intervalo está definido?', 'A condição de parada termina?', 'mid evita overflow?', 'A resposta é monotônica?', 'A estabilidade importa para o caso?'],
    interview: [['Pleno', 'Por que ordenação por comparação não bate Ω(n log n)?', 'A árvore de decisão precisa distinguir n! ordens; a altura mínima é log(n!) = Θ(n log n).'], ['Sênior', 'O que é "busca binária na resposta"?', 'Buscar o limiar num domínio de respostas monotônico, verificando viabilidade em cada ponto médio.']],
    exercises: [['Básico', 'Implementar busca binária correta e provar o invariante.', 'Código com [lo, hi) e teste de bordas.'], ['Aplicado', 'Resolver "capacidade mínima para enviar em D dias" por busca na resposta.', 'Solução O(n log max) com a função de viabilidade.'], ['Sênior', 'Comparar quicksort com pivô aleatório vs mediana-das-medianas em pior caso.', 'Medição e explicação do pior caso.']],
    challenge: 'Implementar radix sort para inteiros de 32 bits e mostrar onde ele vence e onde perde para o quicksort.',
    book: 'Erickson (sorting, binary search); Competitive Programmer’s Handbook, cap. 3.',
    complements: [refs.erickson, refs.cph], exampleFile: null
  }),
  moduleOf({
    number: 6, part: 'hierarquicas', id: 'arvores-travessias', title: 'Árvores e travessias', level: 'Intermediário',
    objective: 'Percorrer e transformar árvores por DFS (pré/in/pós-ordem) e BFS, recursiva e iterativamente, escolhendo a ordem pela necessidade.',
    prerequisites: ['Módulos 1, 4', 'Recursão', 'Pilha e fila'],
    problem: 'Muitos problemas de árvore são "só uma travessia" mal reconhecida; escolher a ordem errada complica ou torna a solução impossível.',
    concepts: ['DFS: pré, in e pós-ordem', 'BFS por níveis', 'Travessia iterativa com pilha', 'Recursão sobre subárvores'],
    internals: ['A pós-ordem calcula do filho para o pai (ideal para agregar subárvores); a pré-ordem, do pai para o filho.', 'In-ordem numa BST devolve os valores em ordem crescente — a base de muitos truques.', 'BFS por níveis usa fila e o tamanho do nível para separar camadas.'],
    useWhen: ['Agregações de subárvore (pós-ordem).', 'Menor profundidade / por níveis (BFS).'],
    avoidWhen: ['Não recurse em árvores muito profundas sem converter para pilha.', 'Não use BFS quando a resposta depende de subárvore inteira.'],
    contrast: { bad: 'Escolher a ordem de travessia por tentativa e erro.', good: 'Derivar a ordem da dependência: precisa dos filhos antes? pós-ordem. Do pai antes? pré-ordem.' },
    tradeoffs: ['Recursão é limpa mas arrisca estouro de pilha.', 'BFS usa mais memória (largura); DFS usa menos (profundidade).', 'Iterativo é mais verboso mas seguro em profundidade.'],
    production: 'Um cálculo de tamanho agregado por diretório usava pré-ordem e recomputava filhos; trocar para pós-ordem eliminou o retrabalho quadrático.',
    risks: ['Estouro de pilha em árvore degenerada.', 'Confundir a ordem de travessia.', 'Esquecer o nó nulo.', 'Misturar nível na BFS.'],
    checklist: ['A dependência exige filhos ou pai primeiro?', 'A profundidade cabe na pilha de recursão?', 'Os nós nulos são tratados?', 'A BFS separa níveis corretamente?', 'A travessia é O(n)?'],
    interview: [['Pleno', 'Qual travessia devolve uma BST em ordem crescente?', 'In-ordem (esquerda, raiz, direita).'], ['Sênior', 'Quando você converte a travessia recursiva em iterativa?', 'Quando a profundidade pode estourar a pilha de recursão; usa-se pilha explícita.']],
    exercises: [['Básico', 'Implementar as três DFS e a BFS por níveis.', 'Código testado nas quatro ordens.'], ['Aplicado', 'Calcular diâmetro e altura da árvore em uma passada.', 'Solução O(n) por pós-ordem.'], ['Sênior', 'Serializar e desserializar uma árvore binária.', 'Round-trip verificado, inclusive com nulos.']],
    challenge: 'Encontrar o menor ancestral comum (LCA) de dois nós em O(n) sem ponteiros de pai e explicar a lógica de pós-ordem.',
    book: 'Sedgewick (trees); OpenDSA (tree traversals).',
    complements: [refs.opendsa, refs.algs4], exampleFile: null
  }),
  moduleOf({
    number: 7, part: 'hierarquicas', id: 'bst-balanceadas', title: 'BST e árvores balanceadas', level: 'Avançado',
    objective: 'Explicar por que BSTs degeneram e como AVL/rubro-negras mantêm altura O(log n) por rotações, e quando usar árvore em vez de hash.',
    prerequisites: ['Módulo 6', 'Invariantes', 'Rotações'],
    problem: 'Uma BST sem balanceamento vira lista ligada sob inserção ordenada — O(n) por operação, o pior caso mais comum do mundo real.',
    concepts: ['Propriedade da BST', 'Degeneração para lista', 'Rotações e rebalanceamento', 'AVL vs rubro-negra', 'Ordem vs hash'],
    internals: ['Inserir dados já ordenados numa BST simples produz uma cadeia de altura n — o pior caso.', 'AVL mantém fator de balanceamento ±1 (mais rígida, buscas mais rápidas); rubro-negra relaxa (menos rotações, inserção mais rápida).', 'Árvore balanceada dá O(log n) garantido e mantém a ordem — o que a hash não faz.'],
    useWhen: ['Precisa de ordem + buscas rápidas (ranges, sucessor).', 'Garantia de pior caso O(log n).'],
    avoidWhen: ['Não use BST simples com entrada potencialmente ordenada.', 'Não use árvore quando não precisa de ordem (hash é mais rápido).'],
    contrast: { bad: 'Usar BST simples e assumir O(log n).', good: 'Escolher uma árvore balanceada (ou skip list) para garantir a altura, ou hash se ordem não importa.' },
    tradeoffs: ['AVL: busca mais rápida, mais rotações na escrita.', 'Rubro-negra: escrita mais rápida, altura um pouco maior.', 'Árvore perde para hash em lookup puro, ganha em consultas de ordem.'],
    production: 'Um índice em memória usava BST simples; como os dados chegavam ordenados por timestamp, virou lista e as buscas degradaram para O(n).',
    risks: ['Assumir balanceamento inexistente.', 'Rotação que quebra a invariante.', 'Usar árvore onde hash bastava.', 'Ignorar o custo das rotações na escrita.'],
    checklist: ['A entrada pode chegar ordenada?', 'A altura é garantida O(log n)?', 'As rotações preservam a invariante?', 'Precisa de ordem, ou hash basta?', 'O custo de escrita foi considerado?'],
    interview: [['Pleno', 'Por que uma BST pode virar O(n)?', 'Inserção em ordem cria uma cadeia; sem rebalanceamento a altura vira n.'], ['Sênior', 'AVL ou rubro-negra — como escolher?', 'AVL para leituras dominantes (mais rígida); rubro-negra para escritas frequentes (menos rotações).']],
    exercises: [['Básico', 'Implementar inserção/busca em BST e demonstrar a degeneração.', 'Medição da altura com entrada ordenada.'], ['Aplicado', 'Implementar rotações e balanceamento AVL.', 'Árvore com altura O(log n) verificada.'], ['Sênior', 'Suportar consultas de rank/select com árvore aumentada.', 'Operações O(log n) testadas.']],
    challenge: 'Comparar árvore balanceada e skip list para o mesmo conjunto de operações e discutir por que bancos usam B-trees em disco.',
    book: 'CLRS, cap. 13 (rubro-negra); Sedgewick (balanced search trees).',
    complements: [refs.algs4, refs.mit6006], exampleFile: null
  }),
  moduleOf({
    number: 8, part: 'hierarquicas', id: 'heaps', title: 'Heaps e filas de prioridade', level: 'Intermediário',
    objective: 'Usar heaps binários para prioridade dinâmica com push/pop O(log n) e top O(1), e reconhecer os problemas que são "um heap disfarçado".',
    prerequisites: ['Módulos 1, 5', 'Arrays', 'Árvores completas'],
    problem: 'Reordenar uma coleção a cada inserção para pegar o mínimo é O(n log n) repetido; o heap dá a mesma resposta em O(log n) por operação.',
    concepts: ['Heap binário (min/max)', 'sift-up e sift-down', 'heapify O(n)', 'Top-k e k-way merge', 'heapsort'],
    internals: ['O heap é um array que simula uma árvore completa: filhos de i em 2i+1 e 2i+2.', 'heapify constrói o heap em O(n) (não O(n log n)) porque a maioria dos nós está perto das folhas.', 'Top-k com heap de tamanho k custa O(n log k), melhor que ordenar tudo quando k ≪ n.'],
    useWhen: ['Prioridade dinâmica (Dijkstra, scheduler).', 'Top-k, mediana em streaming, k-way merge.'],
    avoidWhen: ['Não use heap quando precisa de busca arbitrária (não é ordenado).', 'Não ordene tudo quando só precisa dos k maiores.'],
    contrast: { bad: 'Ordenar a coleção inteira para pegar os k maiores.', good: 'Manter um heap de tamanho k e trocar o topo — O(n log k) e O(k) de espaço.' },
    tradeoffs: ['Heap dá top O(1) mas busca arbitrária O(n).', 'heapsort é in-place mas não estável e com constante alta.', 'Dois heaps dão mediana em streaming a custo de complexidade extra.'],
    production: 'Um scheduler reordenava a lista de tarefas a cada evento (O(n log n)); um heap de prioridade baixou cada operação para O(log n) e destravou a latência.',
    risks: ['Confundir índice de filho/pai.', 'sift errado quebrando a invariante.', 'Ordenar tudo para top-k.', 'Usar heap para busca arbitrária.'],
    checklist: ['A invariante de heap se mantém após cada operação?', 'heapify foi usado para construção O(n)?', 'Top-k usa heap de tamanho k?', 'O caso k ≪ n foi explorado?', 'Precisa de busca? (então não é heap)'],
    interview: [['Pleno', 'Por que heapify é O(n) e não O(n log n)?', 'A soma dos custos de sift-down por nível é dominada pelos muitos nós rasos: converge para O(n).'], ['Sênior', 'Como achar a mediana de um stream em O(log n) por elemento?', 'Dois heaps balanceados (max-heap dos menores, min-heap dos maiores); a mediana está nos topos.']],
    exercises: [['Básico', 'Implementar um min-heap com push/pop e demonstrar a invariante.', 'Estrutura testada com sift-up/down.'], ['Aplicado', 'Resolver top-k elementos frequentes com heap.', 'Solução O(n log k) verificada.'], ['Sênior', 'Mediana de um stream com dois heaps.', 'Estrutura O(log n) por inserção testada.']],
    challenge: 'Implementar um k-way merge de k listas ordenadas com heap e analisar por que é melhor que concatenar e ordenar.',
    book: 'CLRS, cap. 6 (heaps); Sedgewick (priority queues).',
    complements: [refs.algs4, refs.cph], exampleFile: null
  }),
  moduleOf({
    number: 9, part: 'hierarquicas', id: 'tries-strings', title: 'Tries e processamento de strings', level: 'Avançado',
    objective: 'Aplicar tries para prefixos e casamento de padrões com KMP/Rabin-Karp, trocando busca ingênua O(nm) por linear.',
    prerequisites: ['Módulos 3, 6', 'Strings', 'Hashing'],
    problem: 'Busca de padrão ingênua é O(nm) e a autocompletar por varredura é O(n·L); trie e KMP/Rabin-Karp dão tempo linear.',
    concepts: ['Trie (árvore de prefixos)', 'KMP e função de falha', 'Rabin-Karp e hash rolante', 'Autocompletar e contagem por prefixo'],
    internals: ['A trie compartilha prefixos: busca/inserção em O(L), independente do número de palavras.', 'KMP pré-computa a função de falha para nunca reexaminar caracteres — O(n+m) no total.', 'Rabin-Karp usa hash rolante para comparar janelas em O(1); confirma o casamento para evitar falso positivo.'],
    useWhen: ['Autocompletar, dicionário, contagem por prefixo.', 'Casar um ou vários padrões em texto grande.'],
    avoidWhen: ['Não use trie quando o alfabeto é enorme e as chaves esparsas (memória).', 'Não confie em Rabin-Karp sem confirmar o casamento.'],
    contrast: { bad: 'Comparar o padrão em cada posição do texto (O(nm)).', good: 'Pré-computar a função de falha (KMP) ou usar hash rolante (Rabin-Karp) para tempo linear.' },
    tradeoffs: ['Trie é rápida mas consome memória por nó.', 'KMP é linear garantido mas exige a função de falha.', 'Rabin-Karp é simples mas probabilístico sem confirmação.'],
    production: 'Um autocompletar de busca fazia varredura O(n·L) por tecla; uma trie levou a resposta a O(L) por prefixo e destravou a digitação em tempo real.',
    risks: ['Estouro de memória da trie com alfabeto grande.', 'Função de falha do KMP incorreta.', 'Colisão não confirmada no Rabin-Karp.', 'Não tratar Unicode/normalização.'],
    checklist: ['O alfabeto justifica a trie?', 'A função de falha está correta?', 'O casamento do Rabin-Karp é confirmado?', 'A memória da trie é aceitável?', 'Unicode/normalização foi tratado?'],
    interview: [['Pleno', 'Qual a vantagem da trie sobre um hash de palavras?', 'Consulta por prefixo e ordenação lexicográfica em O(L), que o hash não oferece.'], ['Sênior', 'O que a função de falha do KMP evita?', 'Reexaminar caracteres já casados; ao falhar, salta para o maior prefixo-sufixo, mantendo o total O(n+m).']],
    exercises: [['Básico', 'Implementar uma trie com inserção, busca e contagem por prefixo.', 'Estrutura O(L) testada.'], ['Aplicado', 'Implementar KMP e localizar todas as ocorrências.', 'Solução O(n+m) com a função de falha.'], ['Sênior', 'Casar múltiplos padrões com Aho-Corasick ou Rabin-Karp em lote.', 'Solução linear no texto verificada.']],
    challenge: 'Implementar autocompletar com trie que retorna as k sugestões mais frequentes por prefixo em tempo eficiente.',
    book: 'Sedgewick, cap. 5 (strings); CP-Algorithms (string processing).',
    complements: [refs.algs4, refs.cpalgo], exampleFile: null
  }),
  moduleOf({
    number: 10, part: 'hierarquicas', id: 'union-find', title: 'Union-Find (DSU)', level: 'Avançado',
    objective: 'Usar union-find com union by rank e path compression para conectividade dinâmica em tempo quase constante (α inverso de Ackermann).',
    prerequisites: ['Módulos 1, 6', 'Árvores', 'Amortização'],
    problem: 'Testar conectividade dinâmica (mesma componente?) por BFS a cada consulta é O(V+E) por vez; union-find responde em quase O(1) amortizado.',
    concepts: ['Conjuntos disjuntos', 'find com path compression', 'union by rank/size', 'Complexidade α(n)'],
    internals: ['find achata o caminho até a raiz (path compression); union liga a árvore menor sob a maior (by rank).', 'Com as duas otimizações, cada operação custa O(α(n)) amortizado — α cresce mais devagar que log*, praticamente constante.', 'DSU é a espinha dorsal do Kruskal, de detecção de ciclo e de agrupamento incremental.'],
    useWhen: ['Conectividade dinâmica, componentes, Kruskal.', 'Agrupamento incremental (percolação, união de contas).'],
    avoidWhen: ['Não use DSU quando precisa remover arestas (não suporta split).', 'Não implemente sem as duas otimizações (fica O(n)).'],
    contrast: { bad: 'Rodar BFS a cada consulta de "mesma componente?".', good: 'Manter union-find com compression + rank e responder em O(α(n)) amortizado.' },
    tradeoffs: ['DSU é quase O(1) mas não suporta desunião.', 'Path compression acelera find mas altera a estrutura.', 'Rank/size adiciona um vetor extra de estado.'],
    production: 'Um detector de fraude agrupava contas ligadas por transações; recomputar componentes por BFS a cada evento não escalava — union-find incremental resolveu em tempo real.',
    risks: ['Esquecer uma das duas otimizações.', 'union sem achar a raiz primeiro.', 'Tentar remover aresta.', 'Não inicializar os pais.'],
    checklist: ['find usa path compression?', 'union usa rank/size?', 'A complexidade é α(n) amortizada?', 'O problema é só de união (sem split)?', 'Os pais estão inicializados?'],
    interview: [['Pleno', 'Por que union-find é quase O(1)?', 'Path compression + union by rank dão O(α(n)) amortizado, com α praticamente constante para qualquer n real.'], ['Sênior', 'Onde DSU falha e você precisa de outra estrutura?', 'Quando é preciso remover arestas/desunir; DSU não suporta split — usa-se link-cut tree ou outra abordagem.']],
    exercises: [['Básico', 'Implementar union-find com as duas otimizações.', 'Estrutura com α(n) e teste de conectividade.'], ['Aplicado', 'Detectar ciclo em grafo não dirigido com DSU.', 'Solução O(E·α) verificada.'], ['Sênior', 'Contar componentes conexas ao longo de uniões incrementais.', 'Contador correto após cada operação.']],
    challenge: 'Resolver "número de ilhas dinâmico" (adição incremental de terra) usando union-find e explicar por que BFS não escala aqui.',
    book: 'Sedgewick (union-find); CLRS, cap. 19 (disjoint sets).',
    complements: [refs.algs4, refs.cpalgo], exampleFile: null
  }),
  moduleOf({
    number: 11, part: 'grafos', id: 'grafos-travessia', title: 'Representação e travessia de grafos', level: 'Intermediário',
    objective: 'Modelar um problema como grafo, escolher a representação (lista/matriz) e percorrer com BFS/DFS para componentes, distância e bipartição.',
    prerequisites: ['Módulos 4, 6', 'Filas e pilhas', 'Recursão'],
    problem: 'Metade dos problemas "difíceis" é um grafo não reconhecido; escolher a representação e a travessia erradas custa memória ou a resposta.',
    concepts: ['Lista vs matriz de adjacência', 'BFS (distância em não ponderado)', 'DFS (componentes, ciclos)', 'Bipartição por coloração'],
    internals: ['Lista de adjacência é O(V+E) em espaço (esparso); matriz é O(V²) mas responde adjacência em O(1).', 'BFS dá o caminho mais curto em número de arestas (grafo não ponderado); DFS não.', 'Bipartição = 2-coloração; um ciclo ímpar é o certificado de não bipartido.'],
    useWhen: ['Modelar dependências, redes, estados como grafo.', 'Menor número de passos (BFS) ou explorar tudo (DFS).'],
    avoidWhen: ['Não use matriz para grafo esparso grande (memória).', 'Não use DFS para caminho mínimo não ponderado.'],
    contrast: { bad: 'Usar matriz de adjacência para um grafo esparso de milhões de nós.', good: 'Escolher lista de adjacência e a travessia pela pergunta: distância → BFS; explorar → DFS.' },
    tradeoffs: ['Lista: espaço O(V+E), adjacência O(grau).', 'Matriz: adjacência O(1), espaço O(V²).', 'BFS usa mais memória (fronteira) que DFS.'],
    production: 'Um mapa de dependências de build era representado como matriz e estourava memória; a lista de adjacência tornou o grafo tratável e a análise viável.',
    risks: ['Matriz para grafo esparso.', 'DFS recursiva estourando a pilha.', 'Não marcar visitados (laço infinito).', 'BFS/DFS confundidas para a pergunta.'],
    checklist: ['O grafo é esparso ou denso?', 'A pergunta é distância (BFS) ou exploração (DFS)?', 'Visitados são marcados?', 'A profundidade cabe na pilha?', 'Direção das arestas está correta?'],
    interview: [['Pleno', 'Quando usar lista vs matriz de adjacência?', 'Lista para grafos esparsos (economia de espaço); matriz quando V é pequeno e adjacência O(1) importa.'], ['Sênior', 'Por que BFS dá o caminho mínimo e DFS não (em grafo não ponderado)?', 'BFS expande por camadas de distância; a primeira vez que alcança um nó é pelo menor número de arestas.']],
    exercises: [['Básico', 'Implementar BFS e DFS e listar componentes conexas.', 'Código O(V+E) testado.'], ['Aplicado', 'Verificar se um grafo é bipartido por coloração.', 'Solução com o certificado de ciclo ímpar.'], ['Sênior', 'Achar pontes e pontos de articulação com DFS (Tarjan).', 'Solução O(V+E) verificada.']],
    challenge: 'Modelar um quebra-cabeça de estados (ex.: jarros de água) como grafo e resolver com BFS, justificando a modelagem.',
    book: 'Sedgewick, cap. 4 (graphs); Erickson (graph traversal).',
    complements: [refs.algs4, refs.erickson], exampleFile: null
  }),
  moduleOf({
    number: 12, part: 'grafos', id: 'topologica', title: 'Ordenação topológica e ciclos', level: 'Avançado',
    objective: 'Ordenar dependências em um DAG por Kahn ou DFS, detectar ciclos e reconhecer quando o escalonamento é impossível.',
    prerequisites: ['Módulo 11', 'Filas', 'DFS'],
    problem: 'Escalonar tarefas com dependências sem detectar ciclo produz deadlock ou ordem inválida — um bug caro em build systems e pipelines.',
    concepts: ['DAG e ordem topológica', 'Kahn (grau de entrada)', 'DFS com pós-ordem', 'Detecção de ciclo'],
    internals: ['Kahn remove repetidamente nós de grau de entrada zero; se sobrar nó, há ciclo.', 'A ordem topológica por DFS é a pós-ordem invertida.', 'Ciclo em grafo dirigido = aresta de volta na DFS (nó cinza reencontrado).'],
    useWhen: ['Escalonar dependências (build, tarefas, cursos).', 'Ordem de avaliação em DP sobre DAG.'],
    avoidWhen: ['Não aplique ordenação topológica em grafo com ciclo (não existe).', 'Não ignore a detecção de ciclo antes de ordenar.'],
    contrast: { bad: 'Assumir que as dependências formam um DAG e escalonar direto.', good: 'Detectar ciclo primeiro; só então produzir a ordem topológica (Kahn ou DFS).' },
    tradeoffs: ['Kahn é intuitivo e detecta ciclo naturalmente.', 'DFS é compacto mas exige cuidado com a pilha.', 'Múltiplas ordens válidas podem existir.'],
    production: 'Um build detectava dependência circular só em runtime, com erro obscuro; a ordenação topológica com detecção de ciclo passou a falhar cedo, com a lista do ciclo.',
    risks: ['Ordenar grafo com ciclo.', 'Não reportar o ciclo detectado.', 'DFS estourando pilha.', 'Assumir ordem única.'],
    checklist: ['Há detecção de ciclo antes de ordenar?', 'O grafo é realmente um DAG?', 'A ordem respeita todas as arestas?', 'O ciclo, se houver, é reportado?', 'A complexidade é O(V+E)?'],
    interview: [['Pleno', 'Como o algoritmo de Kahn detecta um ciclo?', 'Se, ao terminar, nem todos os nós foram removidos, os restantes formam um ciclo (nunca chegam a grau de entrada zero).'], ['Sênior', 'Qual a relação entre ordem topológica e a pós-ordem da DFS?', 'A ordem topológica é a pós-ordem invertida da DFS.']],
    exercises: [['Básico', 'Implementar Kahn e produzir uma ordem topológica.', 'Solução O(V+E) com detecção de ciclo.'], ['Aplicado', 'Resolver "course schedule" (é possível concluir?).', 'Detecção de ciclo verificada.'], ['Sênior', 'Reportar o ciclo específico quando o escalonamento falha.', 'Lista do ciclo correta.']],
    challenge: 'Escalonar tarefas com dependências e tempos, minimizando o makespan em paralelo, usando a ordem topológica como base.',
    book: 'Erickson (topological sort); CP-Algorithms.',
    complements: [refs.erickson, refs.cpalgo], exampleFile: null
  }),
  moduleOf({
    number: 13, part: 'grafos', id: 'caminhos-minimos', title: 'Caminhos mínimos', level: 'Avançado',
    objective: 'Escolher entre BFS/0-1 BFS, Dijkstra, Bellman-Ford e Floyd-Warshall pelo tipo de peso e reconhecer o efeito de arestas negativas.',
    prerequisites: ['Módulos 8, 11', 'Heaps', 'Relaxamento'],
    problem: 'Aplicar Dijkstra num grafo com peso negativo dá resposta errada silenciosamente; escolher o algoritmo pelo tipo de peso é a decisão que importa.',
    concepts: ['Relaxamento de aresta', 'Dijkstra (pesos não negativos)', 'Bellman-Ford (negativos, detecta ciclo)', '0-1 BFS e Floyd-Warshall'],
    internals: ['Dijkstra assume que, ao remover o menor da fila, sua distância é final — o que quebra com peso negativo.', 'Bellman-Ford relaxa todas as arestas V−1 vezes; uma relaxação extra que ainda melhora denuncia ciclo negativo.', 'Floyd-Warshall dá todos-para-todos em O(V³) por programação dinâmica sobre nós intermediários.'],
    useWhen: ['Dijkstra: um-para-todos, pesos ≥ 0.', 'Bellman-Ford: pode haver negativo; Floyd: todos-para-todos em V pequeno.'],
    avoidWhen: ['Não use Dijkstra com peso negativo.', 'Não use Floyd-Warshall em grafo grande (O(V³)).'],
    contrast: { bad: 'Usar Dijkstra sempre, inclusive com pesos negativos.', good: 'Classificar os pesos (não negativos → Dijkstra; negativos → Bellman-Ford; 0/1 → 0-1 BFS) e escolher.' },
    tradeoffs: ['Dijkstra é rápido mas só com pesos ≥ 0.', 'Bellman-Ford trata negativos mas é O(VE).', 'Floyd é simples para todos-para-todos mas O(V³).'],
    production: 'Um roteador de custos com descontos (arestas negativas) usava Dijkstra e escolhia rotas erradas; trocar para Bellman-Ford corrigiu e passou a detectar ciclos de arbitragem.',
    risks: ['Dijkstra com peso negativo.', 'Não detectar ciclo negativo.', 'Fila de prioridade sem lazy deletion.', 'Floyd em grafo grande.'],
    checklist: ['Os pesos são não negativos?', 'Há possibilidade de ciclo negativo?', 'É um-para-todos ou todos-para-todos?', 'A fila de Dijkstra trata entradas obsoletas?', 'A complexidade cabe no tamanho do grafo?'],
    interview: [['Pleno', 'Por que Dijkstra falha com pesos negativos?', 'Ele finaliza a distância de um nó ao removê-lo da fila; uma aresta negativa posterior poderia reduzi-la, violando a suposição.'], ['Sênior', 'Como Bellman-Ford detecta um ciclo negativo?', 'Após V−1 relaxações, se uma relaxação ainda melhora alguma distância, existe um ciclo negativo alcançável.']],
    exercises: [['Básico', 'Implementar Dijkstra com heap.', 'Solução O(E log V) testada.'], ['Aplicado', 'Implementar Bellman-Ford e detectar ciclo negativo.', 'Detecção verificada com o certificado.'], ['Sênior', 'Resolver todos-para-todos com Floyd-Warshall e reconstruir caminhos.', 'Matriz de distâncias e caminhos corretos.']],
    challenge: 'Modelar câmbio entre moedas como grafo e detectar arbitragem (ciclo de produto > 1) via Bellman-Ford em logaritmos.',
    book: 'Erickson (shortest paths); CLRS, cap. 22–23.',
    complements: [refs.erickson, refs.cpalgo], exampleFile: null
  }),
  moduleOf({
    number: 14, part: 'grafos', id: 'mst', title: 'Árvore geradora mínima', level: 'Avançado',
    objective: 'Conectar todos os nós com custo mínimo por Kruskal (union-find) ou Prim (heap) e reconhecer a propriedade de corte que os justifica.',
    prerequisites: ['Módulos 8, 10, 13', 'Union-find', 'Heaps'],
    problem: 'Conectar uma rede com o menor custo total (cabos, estradas, clusters) é um problema recorrente que a força bruta não resolve.',
    concepts: ['MST e propriedade de corte', 'Kruskal (ordena arestas + DSU)', 'Prim (cresce a partir de um nó)', 'Aresta segura'],
    internals: ['Propriedade do corte: a aresta mínima que cruza qualquer corte pertence a alguma MST — a base gulosa dos dois algoritmos.', 'Kruskal ordena arestas e usa union-find para evitar ciclo: O(E log E).', 'Prim cresce a árvore escolhendo a menor aresta que sai dela, com heap: O(E log V).'],
    useWhen: ['Rede de custo mínimo, clustering (cortar as k−1 maiores arestas da MST).', 'Aproximações que usam MST como base.'],
    avoidWhen: ['Não use MST quando precisa de caminho mínimo entre dois nós (é outro problema).', 'Não use Kruskal sem union-find eficiente.'],
    contrast: { bad: 'Confundir MST com caminho mínimo.', good: 'Aplicar a propriedade do corte: escolher gulosamente a aresta segura (Kruskal por peso global, Prim por fronteira).' },
    tradeoffs: ['Kruskal é simples com arestas ordenadas; Prim é melhor em grafos densos.', 'MST minimiza o total, não distâncias par a par.', 'Ordenar arestas domina o custo de Kruskal.'],
    production: 'Um projeto de rede minimizava cabeamento entre pontos; a MST (Kruskal) deu a topologia de menor custo total e serviu de base para o clustering dos sites.',
    risks: ['Confundir MST com shortest path.', 'Kruskal sem DSU (ciclo).', 'Prim sem heap (lento).', 'Assumir MST única com pesos repetidos.'],
    checklist: ['O objetivo é conectar tudo com custo mínimo?', 'Kruskal usa union-find?', 'Prim usa heap?', 'A propriedade do corte foi aplicada?', 'Pesos repetidos foram considerados?'],
    interview: [['Pleno', 'Qual a diferença entre MST e caminho mínimo?', 'MST minimiza o custo total para conectar todos; caminho mínimo minimiza a distância entre dois nós — objetivos diferentes.'], ['Sênior', 'Por que a escolha gulosa da MST é correta?', 'Pela propriedade do corte: a menor aresta que cruza qualquer corte é segura (está em alguma MST).']],
    exercises: [['Básico', 'Implementar Kruskal com union-find.', 'Solução O(E log E) testada.'], ['Aplicado', 'Implementar Prim com heap.', 'MST verificada em grafo denso.'], ['Sênior', 'Fazer clustering cortando as k−1 maiores arestas da MST.', 'k clusters coerentes com justificativa.']],
    challenge: 'Provar (ou refutar) que a MST contém sempre a aresta de menor peso do grafo e discutir o caso de empates.',
    book: 'Sedgewick, cap. 4.3 (MST); Erickson.',
    complements: [refs.algs4, refs.erickson], exampleFile: null
  }),
  moduleOf({
    number: 15, part: 'grafos', id: 'fluxo-matching', title: 'Fluxo máximo, corte mínimo e matching', level: 'Fronteira',
    objective: 'Reconhecer problemas que são fluxo/corte/matching disfarçados e resolvê-los com Ford-Fulkerson/Dinic e o teorema max-flow min-cut.',
    prerequisites: ['Módulos 11, 13', 'BFS/DFS', 'Grafo residual'],
    problem: 'Muitos problemas de alocação, escalonamento e segmentação são, secretamente, fluxo máximo — e ficam intratáveis quando resolvidos como outra coisa.',
    concepts: ['Rede de fluxo e capacidade', 'Caminho aumentante e grafo residual', 'Max-flow min-cut', 'Matching bipartido (Hopcroft-Karp)'],
    internals: ['Ford-Fulkerson aumenta o fluxo por caminhos no grafo residual até não haver mais; Edmonds-Karp usa BFS para garantir polinomial.', 'O teorema max-flow min-cut: o fluxo máximo é igual à capacidade do corte mínimo — a mesma resposta por dois ângulos.', 'Matching bipartido máximo reduz a fluxo (fonte→esquerda→direita→sumidouro com capacidade 1).'],
    useWhen: ['Alocação/atribuição, segmentação de imagem, escalonamento com restrições.', 'Emparelhamento máximo (tarefas↔pessoas).'],
    avoidWhen: ['Não modele como fluxo o que é caminho mínimo puro.', 'Não use Ford-Fulkerson com capacidades irracionais (pode não terminar).'],
    contrast: { bad: 'Resolver alocação por backtracking exponencial.', good: 'Reduzir a fluxo/matching e resolver em tempo polinomial com Dinic/Hopcroft-Karp.' },
    tradeoffs: ['Edmonds-Karp é O(VE²); Dinic é mais rápido em grafos unitários.', 'Modelar como fluxo exige engenhosidade na redução.', 'O corte mínimo dá o "porquê" da limitação.'],
    production: 'Um sistema de atribuição de plantões era resolvido por heurística instável; modelado como matching bipartido máximo, passou a dar a alocação ótima de forma determinística.',
    risks: ['Redução incorreta para fluxo.', 'Não usar BFS (Edmonds-Karp) e cair em caso lento.', 'Capacidades não inteiras.', 'Confundir fluxo com caminho mínimo.'],
    checklist: ['O problema é de alocação/corte/matching?', 'A redução para fluxo está correta?', 'As capacidades são inteiras?', 'O corte mínimo explica o gargalo?', 'A complexidade é polinomial?'],
    interview: [['Sênior', 'Enuncie o teorema max-flow min-cut e por que é útil.', 'O fluxo máximo iguala a capacidade do corte mínimo; o corte revela o gargalo e certifica a otimalidade.'], ['Staff', 'Como reduzir matching bipartido a fluxo máximo?', 'Fonte→esquerda (cap 1), arestas do matching (cap 1), direita→sumidouro (cap 1); o fluxo máximo é o matching máximo.']],
    exercises: [['Aplicado', 'Implementar Edmonds-Karp e computar o fluxo máximo.', 'Solução com grafo residual testada.'], ['Sênior', 'Extrair o corte mínimo a partir do fluxo máximo.', 'Corte correto identificado.'], ['Staff', 'Resolver matching bipartido máximo por redução a fluxo.', 'Emparelhamento máximo verificado.']],
    challenge: 'Modelar segmentação de imagem (foreground/background) como corte mínimo e explicar a energia que ele minimiza.',
    book: 'Erickson (max-flow); CLRS, cap. 24 (maximum flow).',
    complements: [refs.erickson, refs.cpalgo], exampleFile: null
  }),
  moduleOf({
    number: 16, part: 'paradigmas', id: 'backtracking', title: 'Recursão e backtracking', level: 'Intermediário',
    objective: 'Gerar e buscar em espaços combinatórios com backtracking, podando cedo para evitar a explosão exponencial sempre que possível.',
    prerequisites: ['Módulos 1, 6', 'Recursão', 'Espaço de estados'],
    problem: 'Enumerar todas as combinações sem poda explode exponencialmente; o backtracking eficiente está na poda, não na geração.',
    concepts: ['Árvore de decisão', 'Poda por viabilidade (constraint propagation)', 'Permutações, combinações, subconjuntos', 'Estado e desfazer (undo)'],
    internals: ['Backtracking constrói a solução incrementalmente e volta ao detectar que o ramo não pode levar a solução.', 'A poda cedo (verificar restrições antes de descer) é o que separa o viável do intratável.', 'Desfazer o estado ao retornar (undo) evita recriar estruturas e mantém o custo por nó baixo.'],
    useWhen: ['Espaço combinatório com restrições que permitem poda.', 'Quando não há estrutura para DP/guloso.'],
    avoidWhen: ['Não use backtracking quando há subestrutura ótima (use DP).', 'Não gere tudo sem poda em espaço grande.'],
    contrast: { bad: 'Gerar todas as permutações e filtrar as válidas no fim.', good: 'Podar cada ramo assim que uma restrição é violada, cortando subárvores inteiras.' },
    tradeoffs: ['Backtracking é geral mas exponencial no pior caso.', 'Poda forte acelera muito mas complica o código.', 'Undo é rápido mas exige cuidado com o estado compartilhado.'],
    production: 'Um configurador de produto validava combinações gerando todas e filtrando (horas); poda por restrição derrubou para segundos ao cortar ramos inviáveis cedo.',
    risks: ['Não podar (explosão).', 'Estado não desfeito corretamente.', 'Duplicatas em permutações com repetição.', 'Recursão profunda sem limite.'],
    checklist: ['Há poda por viabilidade cedo?', 'O estado é desfeito ao retornar?', 'Duplicatas são evitadas?', 'Existe subestrutura que pediria DP?', 'A profundidade é controlada?'],
    interview: [['Pleno', 'O que torna um backtracking eficiente?', 'A poda: cortar ramos inviáveis cedo, antes de explorar subárvores que não levam a solução.'], ['Sênior', 'Quando trocar backtracking por DP?', 'Quando os subproblemas se repetem e há subestrutura ótima — a memoization elimina a recomputação exponencial.']],
    exercises: [['Básico', 'Gerar todos os subconjuntos e permutações com backtracking.', 'Geração correta, inclusive com repetição.'], ['Aplicado', 'Resolver N-rainhas com poda por coluna/diagonal.', 'Solução com poda medida vs sem poda.'], ['Sênior', 'Resolver Sudoku com propagação de restrições.', 'Solução eficiente com a poda documentada.']],
    challenge: 'Resolver o "word search II" (várias palavras num tabuleiro) combinando backtracking com uma trie e explicar o ganho da poda por prefixo.',
    book: 'Erickson (backtracking); Skiena (combinatorial search).',
    complements: [refs.erickson, refs.skiena], exampleFile: null
  }),
  moduleOf({
    number: 17, part: 'paradigmas', id: 'dividir-conquistar', title: 'Dividir e conquistar', level: 'Avançado',
    objective: 'Projetar algoritmos que dividem o problema, resolvem recursivamente e combinam, analisando o custo pelo teorema mestre.',
    prerequisites: ['Módulos 1, 5', 'Recorrências', 'Recursão'],
    problem: 'Muitos O(n²) escondem um O(n log n) por dividir e conquistar; não reconhecer a estrutura deixa desempenho na mesa.',
    concepts: ['Dividir, conquistar, combinar', 'Teorema mestre', 'Recorrências não triviais', 'Exemplos: merge sort, quickselect, closest pair'],
    internals: ['O custo é T(n) = a·T(n/b) + f(n); o teorema mestre compara f(n) com n^(log_b a) para dar a classe.', 'O passo de combinação costuma ser onde mora a engenhosidade (ex.: contar inversões durante o merge).', 'Nem toda recursão é dividir-e-conquistar: precisa dividir em subproblemas do mesmo tipo e combinar.'],
    useWhen: ['O problema se parte em subproblemas independentes do mesmo tipo.', 'Há um passo de combinação eficiente.'],
    avoidWhen: ['Não use quando os subproblemas se sobrepõem (isso é DP).', 'Não divida se a combinação for mais cara que a força bruta.'],
    contrast: { bad: 'Resolver por força bruta O(n²) sem ver a estrutura recursiva.', good: 'Dividir em subproblemas do mesmo tipo, resolver recursivamente e combinar em tempo sublinear ao total.' },
    tradeoffs: ['D&C é elegante mas usa pilha de recursão.', 'O ganho depende de um passo de combinação barato.', 'Constantes de recursão podem pesar em n pequeno.'],
    production: 'Uma contagem de inversões (medida de "quão fora de ordem") era O(n²); embutir a contagem no merge sort levou a O(n log n) e viabilizou o relatório em escala.',
    risks: ['Subproblemas sobrepostos (deveria ser DP).', 'Combinação cara demais.', 'Recorrência mal resolvida.', 'Caso-base incorreto.'],
    checklist: ['Os subproblemas são do mesmo tipo e independentes?', 'A combinação é eficiente?', 'A recorrência foi resolvida (teorema mestre)?', 'Não há sobreposição (senão é DP)?', 'O caso-base está correto?'],
    interview: [['Pleno', 'Enuncie o teorema mestre em uma frase.', 'Para T(n)=a·T(n/b)+f(n), a classe sai de comparar f(n) com n^(log_b a): domina o maior.'], ['Sênior', 'Quando dividir e conquistar vira programação dinâmica?', 'Quando os subproblemas se sobrepõem; aí memoization/tabulação elimina a recomputação.']],
    exercises: [['Básico', 'Implementar merge sort e analisar a recorrência.', 'Solução O(n log n) com a análise.'], ['Aplicado', 'Contar inversões durante o merge.', 'Contagem O(n log n) verificada.'], ['Sênior', 'Resolver o par de pontos mais próximo em O(n log n).', 'Solução com a combinação da faixa central explicada.']],
    challenge: 'Implementar multiplicação de inteiros grandes por Karatsuba e comparar o expoente empírico com o teórico.',
    book: 'Erickson (divide and conquer); CLRS, cap. 4.',
    complements: [refs.erickson, refs.mit6006], exampleFile: null
  }),
  moduleOf({
    number: 18, part: 'paradigmas', id: 'guloso', title: 'Algoritmos gulosos', level: 'Avançado',
    objective: 'Reconhecer quando a escolha localmente ótima leva ao ótimo global e provar a corretude por troca de argumento (exchange argument).',
    prerequisites: ['Módulos 5, 8', 'Ordenação', 'Prova'],
    problem: 'Guloso é o paradigma que mais engana: parece certo, passa nos exemplos e falha num caso — sem prova, é chute que às vezes acerta.',
    concepts: ['Escolha gulosa e ótimo local', 'Exchange argument', 'Propriedade da escolha gulosa e subestrutura ótima', 'Matroides (quando guloso é garantido)'],
    internals: ['Guloso é correto quando a escolha gulosa é sempre parte de alguma solução ótima (provável por troca de argumento).', 'Interval scheduling: escolher sempre o de término mais cedo é ótimo — a troca mostra que qualquer solução pode ser convertida sem piorar.', 'Matroides caracterizam a classe onde o guloso é sempre ótimo; fora dela, precisa de prova caso a caso.'],
    useWhen: ['A escolha local ótima é provadamente parte do ótimo global.', 'Scheduling, Huffman, MST, troco em sistemas canônicos.'],
    avoidWhen: ['Não use guloso sem prova (ou contraexemplo).', 'Não use guloso quando a escolha ótima depende do futuro (use DP).'],
    contrast: { bad: 'Assumir que "pegar o maior/menor a cada passo" é ótimo porque passou nos testes.', good: 'Provar por troca de argumento que a escolha gulosa não impede a otimalidade — ou achar o contraexemplo.' },
    tradeoffs: ['Guloso é O(n log n) e simples quando correto.', 'A prova é a parte difícil, não o código.', 'Um guloso errado é rápido e errado.'],
    production: 'Um sistema de troco usava guloso (maior moeda primeiro) com um conjunto não canônico de moedas e dava troco subótimo; DP corrigiu para o mínimo real de moedas.',
    risks: ['Guloso sem prova.', 'Ignorar contraexemplo.', 'Assumir moeda canônica.', 'Escolha que depende do futuro.'],
    checklist: ['A escolha gulosa foi provada (troca de argumento)?', 'Existe contraexemplo?', 'Há subestrutura ótima?', 'O problema é matroide?', 'A ordenação certa habilita o guloso?'],
    interview: [['Pleno', 'O que é um exchange argument?', 'Mostrar que qualquer solução ótima pode ser transformada na gulosa sem piorar, provando que a escolha gulosa é segura.'], ['Sênior', 'Por que o guloso de troco falha às vezes?', 'Com um conjunto de moedas não canônico, a maior moeda primeiro pode impedir a combinação mínima; aí é DP.']],
    exercises: [['Básico', 'Resolver interval scheduling e provar a escolha gulosa.', 'Solução O(n log n) com a prova por troca.'], ['Aplicado', 'Implementar codificação de Huffman.', 'Árvore ótima verificada.'], ['Sênior', 'Mostrar um guloso plausível que falha e corrigir com DP.', 'Contraexemplo + solução DP correta.']],
    challenge: 'Provar ou refutar, por troca de argumento, um guloso para "número mínimo de plataformas" (intervalos sobrepostos).',
    book: 'Erickson (greedy); CLRS, cap. 15 (greedy algorithms).',
    complements: [refs.erickson, refs.skiena], exampleFile: null
  }),
  moduleOf({
    number: 19, part: 'paradigmas', id: 'dp-1', title: 'Programação dinâmica I: estados e transições', level: 'Avançado',
    objective: 'Formular DP identificando estado, transição e ordem de avaliação, e converter entre memoization (top-down) e tabulação (bottom-up).',
    prerequisites: ['Módulos 16, 17', 'Recursão', 'Subestrutura ótima'],
    problem: 'DP é o assunto que mais reprova em entrevista: quem decora soluções trava; quem sabe formular estado e transição resolve qualquer variante.',
    concepts: ['Subestrutura ótima e sobreposição', 'Estado, transição e caso-base', 'Memoization vs tabulação', 'Otimização de espaço (rolling array)'],
    internals: ['DP se aplica quando há subestrutura ótima E subproblemas sobrepostos — sem sobreposição é dividir-e-conquistar.', 'Memoization é a recursão com cache (top-down); tabulação preenche a tabela na ordem das dependências (bottom-up).', 'Muitas DPs 2D reduzem a O(n) de espaço mantendo só a(s) linha(s) anterior(es).'],
    useWhen: ['Contagem, otimização ou viabilidade com subproblemas repetidos.', 'Sequências, mochila, edição de strings.'],
    avoidWhen: ['Não use DP sem sobreposição (é D&C).', 'Não memoize estado com dimensão explosiva sem necessidade.'],
    contrast: { bad: 'Decorar a fórmula de um problema específico de DP.', good: 'Definir estado (o que descreve um subproblema), transição (como se combina) e ordem — e o código sai.' },
    tradeoffs: ['Top-down é intuitivo mas arrisca estouro de pilha; bottom-up controla a ordem.', 'Cache custa memória proporcional ao número de estados.', 'Otimizar espaço complica a reconstrução da solução.'],
    production: 'Um cálculo de distância de edição entre versões de documento era exponencial por recursão ingênua; a DP O(nm) tornou o diff viável em tempo real.',
    risks: ['Estado mal definido (dimensão faltando).', 'Ordem de avaliação errada na tabulação.', 'Explosão de estados.', 'Não reconstruir a solução quando pedida.'],
    checklist: ['O estado descreve um subproblema por completo?', 'A transição cobre todos os casos?', 'A ordem respeita as dependências?', 'O espaço pode ser reduzido?', 'Há subestrutura ótima e sobreposição?'],
    interview: [['Pleno', 'Qual a diferença entre memoization e tabulação?', 'Ambas eliminam recomputação; memoization é top-down com cache, tabulação é bottom-up na ordem das dependências.'], ['Sênior', 'Como você "descobre" o estado de uma DP?', 'Perguntando o mínimo que descreve um subproblema de forma que a resposta dele componha a do problema maior.']],
    exercises: [['Básico', 'Resolver Fibonacci e subir de escada com DP e reduzir o espaço.', 'Solução O(n) tempo, O(1) espaço.'], ['Aplicado', 'Resolver a mochila 0/1 e reconstruir os itens.', 'Solução O(nW) com a reconstrução.'], ['Sênior', 'Resolver distância de edição (Levenshtein) e a maior subsequência comum.', 'Soluções O(nm) verificadas.']],
    challenge: 'Formular a maior subsequência crescente em O(n log n) e explicar por que a versão O(n²) é DP e a O(n log n) é DP + busca binária.',
    book: 'Erickson (dynamic programming — capítulo extenso); CLRS, cap. 14.',
    complements: [refs.erickson, refs.cph], exampleFile: null
  }),
  moduleOf({
    number: 20, part: 'paradigmas', id: 'dp-2', title: 'Programação dinâmica II: intervalos, bitmask e grafos', level: 'Fronteira',
    objective: 'Aplicar DP avançada — em intervalos, com bitmask sobre subconjuntos e sobre DAG/árvore — e reconhecer o padrão de estado de cada uma.',
    prerequisites: ['Módulo 19', 'Grafos e DAG', 'Bits'],
    problem: 'As DPs "difíceis" de entrevista e competição são variações de padrões: intervalo, subconjunto (bitmask) e sobre estrutura — reconhecer o padrão é a chave.',
    concepts: ['DP em intervalos', 'DP com bitmask (subconjuntos)', 'DP em árvore e em DAG', 'Reconhecimento de padrão de estado'],
    internals: ['DP em intervalo tem estado [i, j] e transição por ponto de divisão k — ex.: multiplicação de matrizes em cadeia.', 'DP com bitmask usa um inteiro como conjunto de "já usados" — estados O(2ⁿ·n), viável só para n pequeno (~20).', 'DP sobre DAG usa a ordem topológica como ordem de avaliação; sobre árvore, a pós-ordem.'],
    useWhen: ['Particionar sequência (intervalos), permutar/cobrir conjunto pequeno (bitmask).', 'Otimizar sobre árvore/DAG.'],
    avoidWhen: ['Não use bitmask com n grande (2ⁿ explode).', 'Não force DP onde guloso provado resolve.'],
    contrast: { bad: 'Tentar uma fórmula única para toda DP difícil.', good: 'Classificar o padrão (intervalo / bitmask / estrutura) e derivar estado e ordem daquele padrão.' },
    tradeoffs: ['Bitmask resolve exatamente, mas só até ~20 elementos.', 'DP em intervalo costuma ser O(n³).', 'DP em árvore é elegante mas exige cuidado com a ordem.'],
    production: 'Um roteamento de entregas (TSP pequeno, ~15 pontos) usava heurística instável; a DP com bitmask (Held-Karp) deu a rota ótima em O(2ⁿ·n²), viável nessa escala.',
    risks: ['Bitmask com n grande.', 'Ordem errada em DP de intervalo.', 'Estado incompleto em DP de árvore.', 'Estouro de memória em 2ⁿ.'],
    checklist: ['O padrão é intervalo, bitmask ou estrutura?', 'n é pequeno o bastante para bitmask?', 'A ordem de avaliação está correta?', 'O estado captura tudo?', 'A memória de 2ⁿ cabe?'],
    interview: [['Sênior', 'Quando DP com bitmask é viável?', 'Só com conjuntos pequenos (~n ≤ 20), pois os estados são O(2ⁿ) — acima disso explode.'], ['Staff', 'Como resolver TSP exato para poucos pontos?', 'Held-Karp: DP com bitmask do conjunto visitado + último nó, em O(2ⁿ·n²).']],
    exercises: [['Aplicado', 'Resolver multiplicação de matrizes em cadeia (DP de intervalo).', 'Solução O(n³) com a parentização ótima.'], ['Sênior', 'Resolver TSP exato com bitmask (Held-Karp).', 'Rota ótima para n ~15 verificada.'], ['Staff', 'Resolver uma DP em árvore (ex.: conjunto independente máximo ponderado).', 'Solução O(n) com pós-ordem.']],
    challenge: 'Modelar "particionar um array em k grupos minimizando o custo máximo" e decidir entre DP e busca binária na resposta.',
    book: 'Competitive Programmer’s Handbook, cap. 10 (bit manipulation), cap. 7 (DP); Erickson.',
    complements: [refs.cph, refs.erickson], exampleFile: null
  }),
  moduleOf({
    number: 21, part: 'fronteira', id: 'randomizados', title: 'Algoritmos randomizados', level: 'Fronteira',
    objective: 'Usar aleatoriedade para desempenho esperado e simplicidade com garantia — quickselect, hashing universal e testes Monte Carlo — sabendo a diferença entre Las Vegas e Monte Carlo.',
    prerequisites: ['Módulos 3, 5', 'Probabilidade básica', 'Esperança'],
    problem: 'O determinismo tem pior caso adversário (quicksort O(n²), hash O(n)); a aleatoriedade compra garantia esperada e derrota o adversário — mas exige entender o que ela garante.',
    concepts: ['Las Vegas vs Monte Carlo', 'Quickselect esperado O(n)', 'Hashing universal', 'Teste de primalidade (Miller-Rabin)'],
    internals: ['Las Vegas sempre acerta, com tempo aleatório (quicksort/quickselect); Monte Carlo tem tempo fixo e erro com probabilidade limitada (Miller-Rabin).', 'O pivô aleatório do quickselect dá O(n) esperado e evita o pior caso adversário do pivô fixo.', 'Hashing universal escolhe a função aleatoriamente de uma família, tirando do adversário o poder de forçar colisões.'],
    useWhen: ['O pior caso determinístico é adversário ou raro demais para importar.', 'Simplicidade e desempenho esperado valem a incerteza controlada.'],
    avoidWhen: ['Não use Monte Carlo onde erro é inaceitável sem repetição suficiente.', 'Não confie em aleatoriedade previsível (PRNG fraco) contra adversário.'],
    contrast: { bad: 'Usar pivô fixo no quickselect e sofrer O(n²) com entrada ordenada.', good: 'Sortear o pivô: O(n) esperado, robusto a qualquer entrada, com a análise de esperança.' },
    tradeoffs: ['Monte Carlo troca certeza por tempo fixo; repetir reduz o erro exponencialmente.', 'Aleatoriedade quebra o pior caso adversário mas depende de um bom gerador.', 'A análise passa a ser de esperança, não de pior caso.'],
    production: 'Um serviço sofria colisão de hash adversária degradando para O(n); hashing universal (função sorteada por instância) restaurou o O(1) esperado e neutralizou o ataque.',
    risks: ['PRNG previsível contra adversário.', 'Confundir Las Vegas com Monte Carlo.', 'Erro Monte Carlo não reduzido por repetição.', 'Assumir pior caso onde a garantia é esperada.'],
    checklist: ['O algoritmo é Las Vegas ou Monte Carlo?', 'A garantia é sobre tempo ou sobre erro?', 'O gerador resiste a adversário?', 'A repetição reduz o erro o suficiente?', 'A análise é de esperança?'],
    interview: [['Sênior', 'Qual a diferença entre Las Vegas e Monte Carlo?', 'Las Vegas sempre acerta com tempo aleatório; Monte Carlo tem tempo fixo e erro com probabilidade limitada.'], ['Staff', 'Como a aleatoriedade derrota o pior caso adversário do quicksort?', 'Pivô aleatório torna a entrada irrelevante; o pior caso passa a depender do sorteio, com O(n log n) esperado.']],
    exercises: [['Aplicado', 'Implementar quickselect com pivô aleatório e argumentar o O(n) esperado.', 'Código verificado contra a mediana por ordenação.'], ['Sênior', 'Implementar hashing universal e medir colisões vs hash fixo sob entrada adversária.', 'Medição comparativa.'], ['Staff', 'Implementar Miller-Rabin e discutir a probabilidade de erro por rodada.', 'Teste correto em primos/compostos conhecidos.']],
    challenge: 'Demonstrar empiricamente que o quickselect com pivô aleatório tem tempo linear esperado, medindo em entradas adversárias ao pivô fixo.',
    book: 'Motwani & Raghavan — Randomized Algorithms (recomendado); Erickson (randomization).',
    complements: [refs.erickson, refs.mit6006], exampleFile: '../../examples/dsa-senior/fronteira/randomizados.py'
  }),
  moduleOf({
    number: 22, part: 'fronteira', id: 'streaming-sketching', title: 'Streaming e sketching', level: 'Fronteira',
    objective: 'Responder a fluxos de dados que não cabem na memória com estruturas probabilísticas: Bloom filter, Count-Min, HyperLogLog e reservoir sampling.',
    prerequisites: ['Módulos 3, 21', 'Hashing', 'Probabilidade'],
    problem: 'Contar distintos, testar pertinência ou amostrar sobre bilhões de itens com memória exata é inviável; sketches trocam exatidão por espaço sublinear com erro limitado.',
    concepts: ['Bloom filter (sem falso negativo)', 'Count-Min sketch (frequência)', 'HyperLogLog (cardinalidade)', 'Reservoir sampling'],
    internals: ['Bloom filter nunca dá falso negativo, mas dá falso positivo com taxa que depende do tamanho e do número de hashes.', 'HyperLogLog estima distintos em ~kB contando o maior número de zeros à esquerda dos hashes.', 'Reservoir sampling mantém uma amostra uniforme de tamanho k de um stream de tamanho desconhecido, em uma passada.'],
    useWhen: ['O dado não cabe na memória e o erro limitado é aceitável.', 'Deduplicação aproximada, contagem de únicos, amostragem de stream.'],
    avoidWhen: ['Não use Bloom quando falso positivo é inaceitável sem verificação.', 'Não use sketch quando a resposta exata cabe e é barata.'],
    contrast: { bad: 'Manter um set exato de bilhões de itens para contar distintos.', good: 'Usar HyperLogLog (~kB) para a cardinalidade com erro de poucos por cento, se a exatidão não for obrigatória.' },
    tradeoffs: ['Sketch troca exatidão por espaço sublinear.', 'Menos memória = mais erro (relação explícita).', 'Bloom não permite remoção (sem variante contável).'],
    production: 'Um antifraude checava "já vimos este ID?" contra um banco a cada evento; um Bloom filter em memória filtrou 99% das consultas negativas antes de tocar o banco.',
    risks: ['Falso positivo do Bloom tratado como certeza.', 'Subdimensionar o sketch (erro alto).', 'Reservoir com viés por implementação errada.', 'Remover de um Bloom simples.'],
    checklist: ['O erro do sketch é aceitável e está dimensionado?', 'Falso positivo é verificado quando importa?', 'O reservoir é uniforme?', 'O sketch cabe na memória alvo?', 'A alternativa exata foi descartada com motivo?'],
    interview: [['Sênior', 'Por que um Bloom filter nunca dá falso negativo?', 'Ele só liga bits; se algum bit do item estiver zero, o item nunca foi inserido — negativo é sempre confiável.'], ['Staff', 'Como o HyperLogLog estima cardinalidade em poucos kB?', 'Pelo maior número de zeros à esquerda entre os hashes: quanto mais zeros, mais elementos distintos, corrigido por buckets e média harmônica.']],
    exercises: [['Aplicado', 'Implementar um Bloom filter e medir a taxa de falso positivo vs a teórica.', 'Zero falso negativo e FP próximo do previsto.'], ['Sênior', 'Implementar reservoir sampling e provar a uniformidade empiricamente.', 'Distribuição uniforme verificada.'], ['Staff', 'Estimar cardinalidade com HyperLogLog e medir o erro relativo.', 'Erro dentro da margem esperada.']],
    challenge: 'Dimensionar um Bloom filter para uma taxa de falso positivo alvo dado o número de itens e explicar a fórmula de bits e hashes.',
    book: 'CP-Algorithms (probabilistic structures); artigos de HLL e Count-Min (recomendados).',
    complements: [refs.cpalgo, refs.mit6006], exampleFile: '../../examples/dsa-senior/fronteira/streaming.py'
  }),
  moduleOf({
    number: 23, part: 'fronteira', id: 'persistentes-segment', title: 'Estruturas persistentes e segment tree', level: 'Fronteira',
    objective: 'Responder a consultas de intervalo com atualização usando segment tree (com lazy propagation) e entender persistência por compartilhamento estrutural.',
    prerequisites: ['Módulos 6, 8', 'Árvores', 'Recursão'],
    problem: 'Consultas de intervalo com atualização (soma/mín de [l,r], "adicione x em [l,r]") são O(n) por operação ingênua; a segment tree dá O(log n).',
    concepts: ['Segment tree (consulta + update em O(log n))', 'Lazy propagation (update em intervalo)', 'Persistência por compartilhamento', 'Fenwick tree (BIT)'],
    internals: ['A segment tree divide o array em intervalos; consulta e update pontual custam O(log n) subindo/descendo a árvore.', 'Lazy propagation adia updates de intervalo, aplicando-os só quando o nó é visitado — mantém O(log n) para update de faixa.', 'Persistência cria uma nova versão criando só os O(log n) nós do caminho alterado e reusando o resto (compartilhamento estrutural).'],
    useWhen: ['Muitas consultas + atualizações de intervalo.', 'Versões históricas imutáveis (persistência).'],
    avoidWhen: ['Não use segment tree quando não há atualização (prefix sum basta).', 'Não persista quando o histórico não é necessário (custa memória).'],
    contrast: { bad: 'Recalcular a soma do intervalo a cada consulta em O(n).', good: 'Manter uma segment tree com lazy propagation: consulta e update de faixa em O(log n).' },
    tradeoffs: ['Segment tree custa O(n) de espaço e mais constante que prefix sum.', 'Lazy propagation complica o código mas habilita update de faixa.', 'Persistência multiplica a memória pelo número de versões (×O(log n) cada).'],
    production: 'Um dashboard consultava somas de faixas de tempo com updates frequentes; a segment tree com lazy propagation levou cada operação de O(n) para O(log n).',
    risks: ['Esquecer de propagar o lazy antes de descer.', 'Off-by-one nos intervalos.', 'Confundir update pontual com de faixa.', 'Persistência sem necessidade (memória).'],
    checklist: ['Há atualização (senão prefix sum basta)?', 'O lazy é propagado antes de descer?', 'Os intervalos [l,r] estão corretos?', 'Update é pontual ou de faixa?', 'A persistência é necessária?'],
    interview: [['Sênior', 'O que a lazy propagation resolve?', 'Update de intervalo em O(log n): adia a aplicação, propagando o "pendente" só quando o nó filho é visitado.'], ['Staff', 'Como uma estrutura persistente cria uma nova versão barata?', 'Compartilhamento estrutural: cria só os O(log n) nós no caminho alterado e reaproveita o restante da versão anterior.']],
    exercises: [['Aplicado', 'Implementar segment tree de soma com update pontual e consulta de faixa.', 'Verificada contra força bruta em ops aleatórias.'], ['Sênior', 'Adicionar lazy propagation para update de faixa.', 'Update de faixa O(log n) verificado.'], ['Staff', 'Implementar Fenwick tree e comparar com a segment tree.', 'Ambas corretas; trade-offs discutidos.']],
    challenge: 'Implementar uma segment tree persistente para consultar a soma de um intervalo em qualquer versão passada e explicar o custo de memória.',
    book: 'CP-Algorithms (segment tree, Fenwick, persistence); Competitive Programmer’s Handbook, cap. 9.',
    complements: [refs.cpalgo, refs.cph], exampleFile: '../../examples/dsa-senior/fronteira/segment_tree.py'
  }),
  moduleOf({
    number: 24, part: 'fronteira', id: 'np-completude', title: 'NP-completude e reduções', level: 'Fronteira',
    objective: 'Reconhecer problemas provavelmente intratáveis, prová-lo por redução a partir de um NP-completo conhecido, e decidir a saída de engenharia.',
    prerequisites: ['Módulos 15, 16', 'Verificação de certificado', 'Grafos'],
    problem: 'Gastar semanas buscando um algoritmo polinomial para um problema NP-difícil é desperdício; reconhecer a intratabilidade cedo muda a estratégia de engenharia.',
    concepts: ['P, NP e verificação em tempo polinomial', 'NP-completo e NP-difícil', 'Redução polinomial', 'O que fazer quando é NP-difícil'],
    internals: ['NP é a classe dos problemas cuja solução se verifica em tempo polinomial; NP-completo são os mais difíceis de NP.', 'Reduzir A (conhecido NP-completo) a B em tempo polinomial prova que B é pelo menos tão difícil quanto A.', 'Provar NP-difícil não encerra a engenharia: abre as saídas — aproximação, heurística, parâmetro fixo, casos especiais.'],
    useWhen: ['Suspeita de intratabilidade antes de investir em algoritmo exato.', 'Justificar por que a solução é aproximada/heurística.'],
    avoidWhen: ['Não declare NP-difícil sem a redução (é uma afirmação forte).', 'Não desista do exato quando a instância é pequena ou tem estrutura.'],
    contrast: { bad: 'Buscar indefinidamente um algoritmo polinomial exato para um problema NP-difícil.', good: 'Provar a dificuldade por redução e então escolher aproximação, heurística, FPT ou caso especial.' },
    tradeoffs: ['Redução prova dificuldade mas não dá solução.', 'Exato é possível em instâncias pequenas/estruturadas.', 'Aproximação troca otimalidade por polinômio.'],
    production: 'Uma equipe tentava otimizar rotas (TSP) exatamente e não escalava; reconhecer a NP-dificuldade redirecionou para uma 2-aproximação com garantia, entregue em prazo.',
    risks: ['Afirmar NP-difícil sem redução.', 'Reduzir na direção errada.', 'Desistir do exato em instância tratável.', 'Confundir NP com "impossível".'],
    checklist: ['Há uma redução a partir de um NP-completo conhecido?', 'A redução é polinomial e na direção certa?', 'A instância real é pequena/estruturada?', 'Qual a saída: aproximação, heurística, FPT?', 'A solução verifica em tempo polinomial?'],
    interview: [['Sênior', 'O que significa reduzir A a B?', 'Transformar instâncias de A em instâncias de B em tempo polinomial preservando a resposta; se A é NP-completo, B é NP-difícil.'], ['Staff', 'Provou-se NP-difícil. Quais são as saídas de engenharia?', 'Aproximação com garantia, heurística/metaheurística, algoritmo FPT (parâmetro pequeno), ou explorar estrutura da instância.']],
    exercises: [['Aplicado', 'Verificar um certificado de SAT/clique em tempo polinomial.', 'Verificador correto implementado.'], ['Sênior', 'Reduzir conjunto independente a clique (no grafo complementar) e validar.', 'Redução correta com exemplos.'], ['Staff', 'Argumentar a NP-dificuldade de um problema de produto por redução.', 'Redução escrita e defensável.']],
    challenge: 'Escolher um problema do seu domínio, provar (ou argumentar) que é NP-difícil por redução e propor a saída de engenharia mais adequada.',
    book: 'Erickson (NP-hardness — capítulo dedicado); Garey & Johnson (referência clássica).',
    complements: [refs.erickson, refs.skiena], exampleFile: '../../examples/dsa-senior/fronteira/reducao.py'
  }),
  moduleOf({
    number: 25, part: 'fronteira', id: 'aproximacao-geometria', title: 'Aproximação e geometria computacional', level: 'Fronteira',
    objective: 'Trocar exatidão por uma razão de aproximação demonstrável em problemas NP-difíceis, e resolver problemas geométricos com envoltória convexa e varredura.',
    prerequisites: ['Módulos 18, 24', 'Prova de razão', 'Geometria básica'],
    problem: 'Quando o ótimo exato é inviável, "uma resposta qualquer" não basta: uma aproximação com garantia (ex.: nunca pior que 2× o ótimo) é o que se pode defender.',
    concepts: ['Razão de aproximação', '2-aproximação (vertex cover, TSP métrico)', 'Envoltória convexa (Graham/Andrew)', 'Linha de varredura (sweep line)'],
    internals: ['Uma α-aproximação garante custo ≤ α·ótimo (minimização) para toda instância, provado, não medido.', 'Vertex cover tem 2-aproximação: pegar as duas pontas de arestas não cobertas dá cobertura ≤ 2× o ótimo.', 'A envoltória convexa (Andrew’s monotone chain) ordena os pontos e mantém a cadeia por produto vetorial, em O(n log n).'],
    useWhen: ['O exato é NP-difícil e uma garantia de qualidade é exigida.', 'Problemas geométricos: colisão, cobertura, proximidade.'],
    avoidWhen: ['Não use aproximação quando o exato é viável na escala real.', 'Não confunda heurística sem garantia com aproximação (que tem prova).'],
    contrast: { bad: 'Entregar uma heurística "que costuma ser boa" sem garantia.', good: 'Entregar uma α-aproximação com a prova de que nunca fica pior que α× o ótimo.' },
    tradeoffs: ['Aproximação garante qualidade mas não otimalidade.', 'Razão melhor costuma custar mais tempo.', 'Geometria exige cuidado com precisão de ponto flutuante.'],
    production: 'Um posicionamento de sensores (cobertura, NP-difícil) usava heurística sem garantia; uma aproximação com razão provada passou a dar um limite defensável de qualidade ao cliente.',
    risks: ['Chamar heurística de aproximação (sem prova).', 'Erro de ponto flutuante em orientação geométrica.', 'Razão não demonstrada.', 'Usar aproximação onde o exato cabia.'],
    checklist: ['A razão de aproximação está provada?', 'É aproximação (com garantia) ou heurística?', 'A geometria trata precisão de ponto flutuante?', 'O exato era mesmo inviável?', 'A garantia é defensável ao cliente?'],
    interview: [['Sênior', 'O que é uma 2-aproximação?', 'Um algoritmo polinomial cuja solução é provadamente ≤ 2× o ótimo (minimização) em toda instância.'], ['Staff', 'Descreva a 2-aproximação de vertex cover.', 'Enquanto houver aresta não coberta, inclua as duas pontas; o ótimo precisa cobrir ao menos uma por aresta, logo o resultado é ≤ 2× o ótimo.']],
    exercises: [['Aplicado', 'Implementar a 2-aproximação de vertex cover e verificar a razão ≤ 2.', 'Razão medida ≤ 2 em instâncias aleatórias.'], ['Sênior', 'Implementar a envoltória convexa (Andrew) e validar contra força bruta.', 'Envoltória O(n log n) correta.'], ['Staff', 'Resolver o par de pontos mais próximo por sweep line ou D&C.', 'Solução O(n log n) verificada.']],
    challenge: 'Implementar a 2-aproximação do TSP métrico (via MST + travessia) e comprovar empiricamente que o custo fica dentro de 2× o ótimo em instâncias pequenas.',
    book: 'Williamson & Shmoys — The Design of Approximation Algorithms (livre); Erickson (geometry).',
    complements: [refs.approx, refs.erickson], exampleFile: '../../examples/dsa-senior/fronteira/geometria.py'
  })
]);

export const dsaAssessment = Object.freeze({
  levels: [
    { level: 'Fundação', expected: 'Analisa custo e escolhe a estrutura linear certa.', evidence: 'Solução com complexidade justificada e testes de borda.', redFlags: 'Diz "é rápido" sem análise; confunde O do melhor caso com o geral.' },
    { level: 'Pleno', expected: 'Resolve problemas de árvore, grafo e ordenação com a estrutura adequada.', evidence: 'Código correto com complexidade e casos de borda cobertos.', redFlags: 'Escolhe estrutura por hábito; ignora o pior caso.' },
    { level: 'Sênior', expected: 'Escolhe o paradigma (D&C, guloso, DP) e prova a corretude.', evidence: 'Prova (troca de argumento/indução) e medição de tempo.', redFlags: 'Guloso sem prova; DP decorada sem formular estado.' },
    { level: 'Staff', expected: 'Modela problemas como fluxo/redução e decide entre exato, aproximado e probabilístico.', evidence: 'Redução ou modelagem defensável com garantia declarada.', redFlags: 'Persegue exato em NP-difícil; heurística sem garantia vendida como aproximação.' },
    { level: 'Principal', expected: 'Escolhe a técnica pela restrição real (memória, tempo, adversário) e comunica o trade-off.', evidence: 'Decisão sustentada por análise, medição e limite conhecido.', redFlags: 'Otimiza o que não é gargalo; ignora o custo de espaço ou o adversário.' }
  ],
  caseStudies: [
    {
      id: 'caso-oom', title: 'Contagem de distintos estoura a memória',
      scenario: 'Um pipeline conta usuários únicos por dia mantendo um set exato; em escala, estoura a memória do worker.',
      constraints: ['Bilhões de eventos', 'Memória do worker limitada', 'Erro de poucos % é aceitável'],
      decisions: ['Trocar o set exato por HyperLogLog', 'Dimensionar o erro alvo', 'Validar a estimativa contra amostra'],
      deliverables: ['Sketch dimensionado', 'Erro medido vs teórico', 'Decisão registrada']
    },
    {
      id: 'caso-timeout', title: 'Verificação O(n²) estoura o timeout',
      scenario: 'Uma checagem de pares que era rápida com mil itens estoura o timeout com um milhão.',
      constraints: ['Latência sob SLA', 'Entrada cresceu 1000×', 'Resposta exata exigida'],
      decisions: ['Identificar a classe assintótica', 'Trocar por hashing/ordenação + dois ponteiros', 'Medir em tamanhos que dobram'],
      deliverables: ['Análise antes/depois', 'Solução O(n) ou O(n log n)', 'Medição da escala']
    },
    {
      id: 'caso-negativo', title: 'Roteador escolhe rota errada com descontos',
      scenario: 'Um roteador de custos usa Dijkstra, mas há arestas de custo negativo (descontos), e as rotas saem erradas.',
      constraints: ['Pode haver ciclo negativo', 'Precisa detectar arbitragem', 'Grafo de tamanho médio'],
      decisions: ['Trocar Dijkstra por Bellman-Ford', 'Detectar ciclo negativo', 'Comunicar o caso de arbitragem'],
      deliverables: ['Algoritmo correto', 'Detecção de ciclo', 'Teste com o caso negativo']
    },
    {
      id: 'caso-npdificil', title: 'Otimização de rotas não escala',
      scenario: 'Uma equipe tenta resolver roteamento (TSP) de forma exata e não escala além de poucos pontos.',
      constraints: ['Prazo de entrega', 'Instâncias de dezenas a milhares de pontos', 'Qualidade precisa ser defensável'],
      decisions: ['Reconhecer a NP-dificuldade', 'Escolher exato (bitmask) para n pequeno e aproximação para n grande', 'Declarar a garantia'],
      deliverables: ['Justificativa da intratabilidade', 'Solução híbrida por escala', 'Razão de aproximação provada']
    },
    {
      id: 'caso-adversario', title: 'Colisão de hash adversária degrada a latência',
      scenario: 'Um endpoint multi-tenant recebe chaves escolhidas para colidir, degradando a tabela hash para O(n).',
      constraints: ['Entrada controlada pelo atacante', 'Latência sob SLA', 'Não pode trocar a estrutura base'],
      decisions: ['Adotar hashing universal/aleatorizado', 'Monitorar o comprimento de bucket', 'Medir sob ataque'],
      deliverables: ['Hash por instância', 'Medição antes/depois', 'Runbook de mitigação']
    }
  ],
  projects: [
    {
      id: 'caderno-padroes', title: 'Caderno de padrões de algoritmos',
      objective: 'Construir um caderno versionado com um padrão por técnica (janela, DP, grafo, guloso…), cada um com template, complexidade e um problema resolvido.',
      evolves: null,
      stages: ['Mapear os padrões das 5 partes', 'Resolver um problema por padrão com testes', 'Registrar complexidade e armadilha de cada um'],
      acceptance: ['Um padrão por técnica com template', 'Cada solução tem complexidade e testes', 'As armadilhas estão documentadas'],
      seniorSignal: 'Reconhece o padrão a partir do enunciado, não da lista.'
    },
    {
      id: 'resolvedor', title: 'Resolvedor com medição',
      objective: 'Evoluir o caderno num pequeno resolvedor: dado um problema, escolhe a técnica, resolve e mede tempo/memória contra a força bruta.',
      evolves: 'caderno-padroes',
      stages: ['Implementar solução + baseline força bruta', 'Medir em tamanhos que dobram', 'Validar corretude por teste aleatório contra o baseline'],
      acceptance: ['Corretude verificada contra força bruta', 'Curva de tempo medida', 'Complexidade empírica bate com a teórica'],
      seniorSignal: 'Valida corretude por teste diferencial, não por casos escolhidos a dedo.'
    },
    {
      id: 'projeto-fronteira', title: 'Projeto de fronteira aplicado',
      objective: 'Escolher um problema real e resolvê-lo com uma técnica de fronteira (sketch, aproximação, randomizado) com garantia declarada.',
      evolves: 'resolvedor',
      stages: ['Modelar o problema', 'Escolher a técnica e a garantia', 'Medir qualidade e custo vs a alternativa exata'],
      acceptance: ['Garantia (erro/razão) declarada e verificada', 'Comparação com a alternativa exata', 'Decisão de escopo documentada'],
      seniorSignal: 'Sabe quando parar de buscar o ótimo e defende a aproximação com número.'
    }
  ],
  completion: [
    'Concluir os 25 módulos com ao menos um exercício aplicado e uma URL de evidência (repositório/solução) por módulo.',
    'Explicar complexidade, estrutura, grafo, paradigma e fronteira sem depender de notas.',
    'Resolver problemas com corretude verificada por teste diferencial contra força bruta.',
    'Provar a corretude de ao menos um guloso e formular ao menos três DPs por estado e transição.',
    'Modelar um problema como grafo/fluxo e um como redução de NP-dificuldade.',
    'Entregar o caderno de padrões, o resolvedor com medição e um projeto de fronteira com garantia.',
    'Manter evidência reproduzível e concluir revisão D30 antes de marcar qualquer tópico como Dominado.'
  ]
});

export const dsaAnswerKey = dsaModules.map((module) => ({
  module: module.number,
  title: module.title,
  objetivoAtingido: module.objective,
  respostaEsperadaNaEntrevista: (module.interview || []).map((item) => `${item.level}: ${item.expected}`),
  erroMaisComum: module.contrast?.bad || module.risks?.[0] || 'Escolher a estrutura ou o algoritmo por hábito, sem análise de custo.',
  criterioDeAceite: (module.exercises || []).map((item) => `${item.level} — evidência: ${item.evidence}`),
  sinalDeQueNaoDominou: module.risks || []
}));
