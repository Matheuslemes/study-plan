/*
 * Fonte única da Academia Frontend.
 * O currículo parte da plataforma Web e termina em experiência operável.
 */

export const FRONTEND_RESEARCH_DATE = '2026-07-29';

const official = Object.freeze({
  html: { label: 'MDN — HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  css: { label: 'MDN — CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  javascript: { label: 'MDN — JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  eventLoop: { label: 'MDN — modelo de concorrência e event loop', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model' },
  dom: { label: 'MDN — DOM', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model' },
  http: { label: 'MDN — HTTP', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP' },
  performance: { label: 'MDN — Web Performance', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance' },
  typescript: { label: 'TypeScript — Handbook', url: 'https://www.typescriptlang.org/docs/handbook/intro.html' },
  react: { label: 'React — Learn', url: 'https://react.dev/learn' },
  reactState: { label: 'React — gerenciamento de estado', url: 'https://react.dev/learn/managing-state' },
  next: { label: 'Next.js — documentação', url: 'https://nextjs.org/docs' },
  wcag: { label: 'W3C — WCAG 2.2', url: 'https://www.w3.org/TR/WCAG22/' },
  apg: { label: 'W3C WAI — ARIA Authoring Practices Guide', url: 'https://www.w3.org/WAI/ARIA/apg/' },
  webVitals: { label: 'web.dev — Core Web Vitals', url: 'https://web.dev/articles/vitals' },
  playwright: { label: 'Playwright — documentação', url: 'https://playwright.dev/docs/intro' },
  testingLibrary: { label: 'Testing Library — princípios', url: 'https://testing-library.com/docs/guiding-principles/' },
  csp: { label: 'OWASP — Content Security Policy', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html' },
  security: { label: 'OWASP — Web Security Testing Guide', url: 'https://owasp.org/www-project-web-security-testing-guide/' },
  observability: { label: 'OpenTelemetry JS — browser', url: 'https://opentelemetry.io/docs/languages/js/getting-started/browser/' },
  renderingPath: { label: 'web.dev — como o navegador renderiza uma página', url: 'https://web.dev/articles/howbrowserswork' },
  renderingNG: { label: 'Chromium — arquitetura RenderingNG', url: 'https://developer.chrome.com/docs/chromium/renderingng' },
  containment: { label: 'MDN — CSS containment', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment' },
  devtoolsPerf: { label: 'Chrome DevTools — painel de performance', url: 'https://developer.chrome.com/docs/devtools/performance' },
  reactFiber: { label: 'React — arquitetura Fiber (notas de implementação)', url: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/README.md' },
  reactConcurrent: { label: 'React — renderização concorrente e transitions', url: 'https://react.dev/reference/react/useTransition' },
  reactCompiler: { label: 'React Compiler 1.0', url: 'https://react.dev/learn/react-compiler' },
  reactProfiler: { label: 'React — Profiler e DevTools', url: 'https://react.dev/reference/react/Profiler' },
  viewTransitions: { label: 'React — ViewTransition (estável no 19.3)', url: 'https://react.dev/reference/react/ViewTransition' },
  signals: { label: 'TC39 — proposta de Signals', url: 'https://github.com/tc39/proposal-signals' },
  astExplorer: { label: 'AST Explorer — inspecionar árvores sintáticas', url: 'https://astexplorer.net/' },
  babelPlugin: { label: 'Babel — escrever um plugin', url: 'https://github.com/jamiebuilds/babel-handbook' },
  wasm: { label: 'MDN — WebAssembly', url: 'https://developer.mozilla.org/en-US/docs/WebAssembly' },
  wasmBindgen: { label: 'wasm-bindgen — Rust e WebAssembly', url: 'https://rustwasm.github.io/docs/wasm-bindgen/' },
  webgpu: { label: 'MDN — WebGPU API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API' },
  workers: { label: 'MDN — Web Workers', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API' },
  http3: { label: 'MDN — HTTP/3 e QUIC', url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTTP_3' },
  serviceWorker: { label: 'MDN — Service Worker API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API' },
  indexedDb: { label: 'MDN — IndexedDB', url: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API' },
  localFirst: { label: 'Local-first software (Ink & Switch)', url: 'https://www.inkandswitch.com/local-first/' },
  moduleFederation: { label: 'Module Federation — documentação', url: 'https://module-federation.io/' },
  baseline: { label: 'web.dev — Baseline: o que é seguro usar', url: 'https://web.dev/baseline' },
  chromiumSource: { label: 'Chromium — código-fonte do Blink', url: 'https://chromium.googlesource.com/chromium/src/+/main/third_party/blink/' }
});

/*
 * Baseline tecnológico. O conteúdo da trilha é ancorado em documentação viva
 * (MDN, react.dev, nextjs.org) e por isso envelhece devagar. Os LIVROS do acervo
 * são o ponto fraco: os quatro principais são de 2018–2020 e antecedem Server
 * Components, o compilador e boa parte do que os módulos 7–10 ensinam. Isso está
 * declarado aqui em vez de escondido.
 */
export const frontendTechnologyBaseline = [
  { technology: 'React', baseline: '19.3 (set/2026)', status: 'Corrente', note: 'ViewTransition e Fragment Refs estáveis; suporte a Trusted Types; Context em Server Components.' },
  { technology: 'React Compiler', baseline: '1.0 (out/2025)', status: 'Estável — premissa padrão', note: 'Memoização automática. Muda o que se ensina sobre useMemo e useCallback: otimizar à mão virou exceção justificada. Módulo 24.' },
  { technology: 'Next.js', baseline: '16.x', status: 'Corrente', note: 'App Router e Server Components como padrão. Módulo 10.' },
  { technology: 'Core Web Vitals', baseline: 'LCP · INP · CLS', status: 'Estável', note: 'INP substituiu o FID em 2024. Módulo 16.' },
  { technology: 'WCAG', baseline: '2.2 AA', status: 'Corrente', note: 'WCAG 3 segue em rascunho; não é alvo de conformidade. Módulos 11 e 12.' },
  { technology: 'Baseline (web.dev)', baseline: 'newly / widely available', status: 'Critério de adoção', note: 'Substitui a consulta caso a caso de suporte: use "widely available" como régua padrão.' },
  { technology: 'WebGPU', baseline: 'Baseline desde jan/2026', status: 'Disponível em todos os principais', note: 'Chrome, Edge, Firefox e Safari, incluindo mobile. Deixou de ser experimento. Módulo 25.' },
  { technology: 'WebAssembly', baseline: 'estável, com threads e SIMD', status: 'Maduro', note: 'Para computação pesada no cliente. Não é substituto de JavaScript para UI. Módulo 25.' },
  { technology: 'Signals', baseline: 'proposta TC39 estágio inicial', status: 'Observar', note: 'Reatividade granular já é padrão em vários frameworks. Estudar o mecanismo vale; depender da proposta, não. Módulo 23.' },
  { technology: 'HTTP/3 e QUIC', baseline: 'amplamente disponível', status: 'Estável', note: 'Muda o custo de conexão e o comportamento sob perda de pacote. Módulo 21.' },
  { technology: 'Livros do acervo', baseline: '2018–2020', status: 'Defasados quanto a React', note: 'Learning React 2ª ed (React 16/17), JS Definitive Guide 7ª, Eloquent JS 3ª, Effective TypeScript 1ª. Nenhum cobre Server Components, Actions, use() ou o compilador. Use-os para plataforma e linguagem; para React, a doc oficial.' }
];

export const frontendBooks = Object.freeze({
  cssDepth: {
    title: 'CSS in Depth',
    authors: 'Keith J. Grant',
    edition: '2ª edição',
    year: 2024,
    language: 'Inglês',
    pages: 545,
    path: '/pdfs/livros-frontend/CSS in Depth, Second Edition -- Keith J. Grant -- ( WeLib.org ).pdf',
    depth: 'Base contemporânea de engenharia visual',
    prerequisites: 'HTML e CSS básicos',
    structure: 'Cascata, unidades, box model, layout, responsividade, componentes e CSS sustentável',
    limitations: 'Compatibilidade e suporte de recursos CSS devem ser confirmados no MDN e na matriz real de navegadores.'
  },
  effectiveTs: {
    title: 'Effective TypeScript',
    authors: 'Dan Vanderkam',
    edition: '2ª edição',
    year: 2024,
    language: 'Inglês',
    pages: 400,
    path: '/pdfs/livros-frontend/effective-typescript-2e.pdf',
    depth: 'Tipos, inferência e desenho de APIs',
    prerequisites: 'JavaScript e TypeScript básicos',
    structure: 'Modelo estrutural, strictness, any, inferência, desenho de tipos e declarações',
    limitations: 'Opções do compilador e recursos da linguagem evoluem; valide tudo no Handbook da versão usada.'
  },
  eloquentJs: {
    title: 'Eloquent JavaScript',
    authors: 'Marijn Haverbeke',
    edition: '3ª edição',
    year: 2018,
    language: 'Inglês',
    pages: 555,
    path: '/pdfs/livros-frontend/Eloquent JavaScript, 3rd Edition • A Modern Introduction to -- Marijn Haverbeke -- ( WeLib.org ).epub.pdf',
    depth: 'Fundamentos, linguagem e programação no navegador',
    prerequisites: 'Lógica de programação',
    structure: 'Valores, funções, objetos, abstração, módulos, assíncrono, DOM e rede',
    limitations: 'A edição declara usar JavaScript de 2017; APIs e práticas modernas precisam de complemento atual.'
  },
  hpbn: {
    title: 'High Performance Browser Networking',
    authors: 'Ilya Grigorik',
    edition: '1ª edição',
    year: 2013,
    language: 'Inglês',
    pages: 401,
    path: '/pdfs/livros-frontend/High Performance Browser Networking- What every web -- Grigorik, Ilya -- ( WeLib.org ).pdf',
    depth: 'Rede, transporte e desempenho percebido',
    prerequisites: 'HTTP, navegador e latência',
    structure: 'TCP, TLS, redes móveis, HTTP e padrões de entrega no navegador',
    limitations: 'Protocolos, transporte e ferramentas refletem 2013; use o livro para modelos mentais e o MDN/web.dev para o estado atual.'
  },
  inclusiveComponents: {
    title: 'Inclusive Components',
    authors: 'Heydon Pickering',
    edition: 'Edição digital',
    year: 2018,
    language: 'Inglês',
    pages: 338,
    path: '/pdfs/livros-frontend/Inclusive Components -- Heydon Pickering -- ( WeLib.org ).epub.pdf',
    depth: 'Componentes interativos acessíveis',
    prerequisites: 'HTML, CSS, JavaScript e acessibilidade básica',
    structure: 'Botões, menus, tooltips, abas, sliders, notificações, tabelas, modais e cards',
    limitations: 'Padrões ARIA e suporte de tecnologia assistiva devem ser confirmados no APG e testados com usuários.'
  },
  inclusivePatterns: {
    title: 'Inclusive Design Patterns',
    authors: 'Heydon Pickering',
    edition: '1ª edição',
    year: 2016,
    language: 'Inglês',
    pages: 298,
    path: '/pdfs/livros-frontend/Inclusive design patterns - coding accessibility into web -- Heydon Pickering, Smashing Magazine -- ( WeLib.org ).epub.pdf',
    depth: 'Semântica e inclusão como arquitetura',
    prerequisites: 'HTML e CSS',
    structure: 'Documento semântico, landmarks, navegação, conteúdo, produtos, filtros e formulários',
    limitations: 'Critérios normativos e padrões interativos devem ser atualizados para WCAG 2.2 e APG vigente.'
  },
  definitiveJs: {
    title: 'JavaScript: The Definitive Guide',
    authors: 'David Flanagan',
    edition: '7ª edição',
    year: 2020,
    language: 'Inglês',
    pages: 707,
    path: '/pdfs/livros-frontend/JavaScript - the definitive guide - master the worlds -- David Flanagan -- ( WeLib.org ).pdf',
    depth: 'Referência ampla de linguagem e plataforma',
    prerequisites: 'Lógica e sintaxe JavaScript',
    structure: 'Linguagem, objetos, classes, módulos, assíncrono, navegador, Node.js e ferramentas',
    limitations: 'Novas APIs e sintaxe posteriores a 2020 precisam ser verificadas na especificação e no MDN.'
  },
  learningReact: {
    title: 'Learning React',
    authors: 'Eve Porcello e Alex Banks',
    edition: '2ª edição',
    year: 2020,
    language: 'Inglês',
    pages: 502,
    path: '/pdfs/livros-frontend/Learning React, 2nd Edition -- Porcello, Eve & Banks, Alex -- ( WeLib.org ).epub.pdf',
    depth: 'Modelo funcional de componentes e estado',
    prerequisites: 'JavaScript moderno e DOM',
    structure: 'JavaScript para React, programação funcional, JSX, componentes, dados, hooks e testes',
    limitations: 'Tooling e APIs de React mudaram; prefira react.dev para recursos, padrões e setup atuais.'
  },
  refactoringUi: {
    title: 'Refactoring UI',
    authors: 'Adam Wathan e Steve Schoger',
    edition: '1ª edição',
    year: 2018,
    language: 'Inglês',
    pages: 218,
    path: '/pdfs/livros-frontend/Refactoring UI -- Adam Wathan, Steve Schoger -- ( WeLib.org ).pdf',
    depth: 'Hierarquia, composição e acabamento visual',
    prerequisites: 'CSS básico e leitura de interfaces',
    structure: 'Hierarquia, espaçamento, tipografia, cor, profundidade, imagens e acabamento',
    limitations: 'É uma referência de heurísticas visuais, não uma especificação de acessibilidade nem substituto para pesquisa com usuários.'
  },
  ydkjs: {
    title: "You Don't Know JS Yet: Scope & Closures",
    authors: 'Kyle Simpson',
    edition: '2ª edição',
    year: 2020,
    language: 'Inglês',
    pages: 187,
    path: '/pdfs/livros-frontend/You Dont Know JS Yet- Scope & Closures - 2nd Edition -- Kyle Simpson -- ( WeLib.org ).pdf',
    depth: 'Escopo léxico e closures',
    prerequisites: 'Sintaxe JavaScript e funções',
    structure: 'Compilação, escopo, cadeia léxica, função, bloco, closures e ciclo de vida de variáveis',
    limitations: 'Aprofunda um recorte da linguagem; complemente com módulos, assíncrono, DOM e APIs do navegador.'
  }
});

export const frontendAcademy = Object.freeze({
  title: 'Academia Frontend — da plataforma à experiência',
  baseline: `Pesquisa técnica: ${FRONTEND_RESEARCH_DATE} · semântica, acesso, desempenho e evidência`,
  book: 'cssDepth',
  parts: {
    base: {
      index: '0/6', range: 'Módulos 0.1–0.4', page: 'base.html', navLabel: 'Módulo 0',
      title: 'Módulo 0 — da Faixa 0 ao Frontend',
      subtitle: 'Ponte dos fundamentos para a Web: como o navegador monta a página, JavaScript essencial, o DOM e as DevTools.',
      prerequisites: ['Ter passado pela Faixa 0 (Fundamentos de Computação) ou equivalente', 'Saber usar o terminal e abrir um arquivo no navegador', 'Nenhum conhecimento prévio de HTML/CSS/JS'],
      objectives: ['Explicar o que HTML, CSS e JS fazem e como o navegador carrega e renderiza a página', 'Escrever JavaScript essencial e entender coerção (== vs ===) e valores falsy', 'Selecionar e alterar o DOM e reagir a eventos', 'Usar as DevTools (console, elements, network) e o debugger do navegador']
    },
    fundamentos: {
      index: '1/6', range: 'Módulos 1–5', page: 'fundamentos.html', navLabel: 'Plataforma Web',
      title: 'Documento, estilo e runtime do navegador',
      subtitle: 'Domine a plataforma antes de adicionar abstrações.',
      prerequisites: ['Programar estruturas simples e usar Git', 'Executar uma página por servidor local', 'Reconhecer request, response, DOM e DevTools'],
      objectives: ['Construir documentos semânticos e navegáveis', 'Compor layouts responsivos sem overflow', 'Explicar escopo, event loop e mutação do DOM', 'Relacionar rede e renderização à experiência']
    },
    aplicacoes: {
      index: '2/6', range: 'Módulos 6–10', page: 'aplicacoes.html', navLabel: 'Aplicações tipadas',
      title: 'Tipos, componentes, estado e entrega',
      subtitle: 'Transforme requisitos e falhas em estados explícitos.',
      prerequisites: ['HTML semântico, CSS responsivo e JavaScript assíncrono', 'API HTTP documentada', 'Testes e build executáveis localmente'],
      objectives: ['Modelar contratos TypeScript sem any silencioso', 'Construir componentes previsíveis em React', 'Tratar loading, vazio, erro e sucesso', 'Escolher renderização e estado pelo requisito']
    },
    sistemas: {
      index: '3/6', range: 'Módulos 11–15', page: 'sistemas.html', navLabel: 'Sistemas de interface',
      title: 'Acessibilidade, design system e qualidade',
      subtitle: 'Faça componentes coerentes sobreviverem a conteúdo, escala e diversidade.',
      prerequisites: ['Aplicação tipada com fluxo real', 'Navegação por teclado e DevTools', 'Testes unitários e de integração básicos'],
      objectives: ['Auditar WCAG 2.2 com teste humano', 'Implementar padrões interativos acessíveis', 'Governar tokens e componentes reutilizáveis', 'Validar comportamento, aparência e contrato']
    },
    producao: {
      index: '4/6', range: 'Módulos 16–20', page: 'producao.html', navLabel: 'Produção',
      title: 'Performance, segurança e arquitetura operável',
      subtitle: 'Meça usuários reais, limite risco e evolua sem reescrever por reflexo.',
      prerequisites: ['Aplicação acessível e testada', 'Pipeline reproduzível', 'Acesso a métricas, logs e traces de um ambiente'],
      objectives: ['Medir Core Web Vitals e orçamento de recursos', 'Projetar cache, segurança e privacidade no cliente', 'Correlacionar erro e experiência reais', 'Conduzir evolução arquitetural com métricas']
    },
    fronteira: {
      index: '5/6', range: 'Módulos 21–27', page: 'fronteira.html', navLabel: 'Fronteira',
      title: 'Fronteira: a plataforma por dentro',
      subtitle: 'Motor de renderização, React interno, reatividade do zero, compiladores, Wasm e GPU, colaboração local e arquitetura em escala.',
      prerequisites: [
        'Dominar os módulos 5–10: rede, caminho crítico, TypeScript, React, estado e fronteira cliente-servidor.',
        'Saber ler um perfil de performance do navegador sem adivinhar.',
        'Aceitar que aqui a resposta vem do mecanismo, não da configuração.'
      ],
      objectives: [
        'Explicar um jank pelo estágio do pipeline de renderização em que ele nasce.',
        'Descrever o que o React faz por dentro ao atualizar, e por que ele pode interromper.',
        'Implementar reatividade granular do zero e entender o que um framework compra.',
        'Ler a árvore sintática do próprio código e escrever uma transformação.',
        'Decidir quando sair do JavaScript para WebAssembly ou GPU — e quando não.',
        'Projetar colaboração e trabalho offline sem perder escrita.',
        'Conduzir arquitetura de front em escala com fronteiras e migração incremental.'
      ]
    },
    avaliacao: {
      index: '6/6', range: 'Evidência', page: 'avaliacao.html', navLabel: 'Avaliação e biblioteca',
      title: 'Avaliação, projeto e biblioteca técnica',
      subtitle: 'Defenda decisões de interface com código, teste e impacto observável.',
      prerequisites: ['Concluir os 20 módulos ou comprovar equivalência', 'Manter repositório e deploy revisáveis', 'Possuir evidências HTTP(S) por entrega'],
      objectives: ['Demonstrar senioridade por experiência entregue', 'Resolver casos sob restrições reais', 'Evoluir um produto em quatro entregas', 'Validar domínio com evidência e revisão D30']
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

export const frontendModules = Object.freeze([
  moduleOf({
    number: '0.1', part: 'base', id: 'url-ate-pagina-front', title: 'Da URL à página, por dentro: HTML, CSS e JavaScript', level: 'Introdução',
    objective: 'Explicar o papel de HTML, CSS e JavaScript e como o navegador carrega e renderiza uma página, partindo do que a Faixa 0 viu ("da URL à página").',
    prerequisites: ['Faixa 0: da URL à página (DNS, HTTP, render)', 'Abrir um arquivo .html no navegador'],
    problem: 'Quem vem da Faixa 0 sabe que o navegador "baixa e mostra a página", mas não separa estrutura (HTML), estilo (CSS) e comportamento (JS) — nem como eles viram pixels.',
    concepts: ['HTML = estrutura', 'CSS = estilo', 'JavaScript = comportamento', 'DOM e CSSOM → render tree', 'Carregamento e renderização'],
    internals: ['O navegador faz o parse do HTML no DOM (uma árvore) e do CSS no CSSOM; combina os dois na render tree e pinta.', 'HTML dá significado e estrutura; CSS decide a aparência; JS altera a página em resposta a eventos — três responsabilidades separadas.', 'Sem CSS a página ainda funciona (só feia); sem JS o conteúdo básico ainda aparece — o HTML é a base.'],
    useWhen: ['Ao começar qualquer página: primeiro a estrutura, depois estilo e comportamento.', 'Ao diagnosticar "não aparece": é HTML, CSS ou JS?'],
    avoidWhen: ['Não misture as três responsabilidades num só lugar sem necessidade.', 'Não dependa de JS para mostrar o conteúdo essencial.'],
    contrast: { bad: 'Montar tudo com <div> e JavaScript, ignorando HTML e CSS.', good: 'HTML para estrutura, CSS para estilo, JS só para comportamento.' },
    tradeoffs: ['Separar as três camadas dá clareza, ao custo de mais arquivos.', 'Mais JS = mais poder e mais peso/fragilidade.'],
    production: 'Uma página "em branco" era só um erro de JS que impedia a renderização — mas o conteúdo em HTML já deveria aparecer sem depender do script.',
    risks: ['Confundir o papel de HTML, CSS e JS.', 'Depender de JS para o conteúdo básico.', 'Não saber onde a página falhou (estrutura, estilo ou script).'],
    checklist: ['Sei o que cada um (HTML/CSS/JS) faz?', 'Sei o que é o DOM?', 'Sei como o navegador vai do HTML aos pixels?', 'A página mostra o essencial sem JS?'],
    interview: [
      ['Introdução', 'Qual o papel de HTML, CSS e JavaScript?', 'HTML é estrutura/significado; CSS é estilo/aparência; JavaScript é comportamento (altera a página e reage a eventos).'],
      ['Introdução', 'O que é o DOM?', 'A árvore de objetos que o navegador cria a partir do HTML; é o que o JavaScript manipula.']
    ],
    exercises: [
      ['Básico', 'Criar um .html simples, estilizar com um pouco de CSS e abrir no navegador.', 'A página no navegador e a explicação do papel de cada camada.'],
      ['Aplicado', 'Desativar o CSS e depois o JS e observar o que a página ainda faz.', 'Nota sobre o que cada camada acrescenta.']
    ],
    quiz: [
      { question: 'Qual linguagem cuida da ESTRUTURA da página?', options: ['CSS', 'HTML', 'JavaScript', 'SQL'], answer: 1, why: 'HTML define a estrutura e o significado; CSS estiliza; JS dá comportamento.' },
      { question: 'O DOM é:', options: ['um servidor', 'a árvore de objetos criada a partir do HTML', 'uma linguagem', 'um arquivo CSS'], answer: 1, why: 'É a representação em árvore da página que o JS manipula.' },
      { question: 'Sem CSS e sem JS, uma página bem feita:', options: ['fica em branco', 'ainda mostra o conteúdo (HTML)', 'dá erro', 'não carrega'], answer: 1, why: 'O HTML é a base; o conteúdo essencial deve aparecer sem depender de CSS/JS.' }
    ],
    challenge: 'Explicar, para quem só viu a Faixa 0, o caminho do HTML baixado até os pixels na tela.',
    book: 'Eloquent JavaScript, cap. 13–14; MDN — How the web works.',
    complements: [official.html, official.renderingPath], exampleFile: null
  }),
  moduleOf({
    number: '0.2', part: 'base', id: 'js-essencial', title: 'JavaScript essencial: tipos, coerção e ===', level: 'Introdução',
    objective: 'Escrever JavaScript básico entendendo que todo número é um double, que == faz coerção (use ===) e o que são valores falsy.',
    prerequisites: ['Módulo 0.1', 'Faixa 0: tipos e ponto flutuante'],
    problem: 'JS tem tipagem dinâmica e coerção implícita; sem entender == vs ===, falsy e NaN, o iniciante cria bugs sutis que "às vezes" acontecem.',
    concepts: ['Tipos dinâmicos e typeof', 'number é double (IEEE 754)', '== (coerção) vs === (sem coerção)', 'Valores truthy/falsy', 'NaN e Number.isNaN', 'const vs let'],
    internals: ['Não há int separado: todo number é um double, então 0.1 + 0.2 ≠ 0.3, como na Faixa 0.', '== converte tipos antes de comparar (0 == "" é true); === compara sem coerção — por isso se usa ===.', 'Seis valores são falsy (0, "", null, undefined, NaN, false); o resto é truthy. NaN não é igual a nada.'],
    useWhen: ['Ao comparar valores (sempre ===).', 'Ao checar se algo "existe" (cuidado com 0 e "" que são falsy).'],
    avoidWhen: ['Não use == (coerção surpreende).', 'Não compare com NaN usando ===; use Number.isNaN.'],
    contrast: { bad: 'if (valor == 0) para checar "vazio" e pegar "" e null por engano.', good: 'if (valor === 0) para o número; checagens explícitas para vazio/nulo.' },
    tradeoffs: ['Tipagem dinâmica é flexível, ao custo de erros de tipo só em runtime (TypeScript resolve depois).', '=== é previsível; == é conciso mas traiçoeiro.'],
    production: 'Um formulário aceitou 0 como "campo vazio" porque usou == e 0 é falsy; a validação deixou passar dado inválido.',
    risks: ['Usar == e sofrer coerção.', 'Tratar 0 ou "" como "ausente" sem querer.', 'Comparar NaN com ===.', 'Reatribuir const.'],
    checklist: ['Uso === em vez de ==?', 'Sei que number é double (float da Faixa 0)?', 'Conheço os seis valores falsy?', 'Trato NaN com Number.isNaN?'],
    interview: [
      ['Introdução', 'Qual a diferença entre == e === em JavaScript?', '== faz coerção de tipo antes de comparar; === compara valor e tipo sem coerção. Prefira ===.'],
      ['Introdução', 'Por que 0.1 + 0.2 não é 0.3 em JavaScript?', 'Porque number é um double IEEE 754 (aproximado), exatamente como na Faixa 0.']
    ],
    exercises: [
      ['Básico', 'Rodar o exemplo frontend-zero e explicar cada resultado de coerção e falsy.', 'Notas ligando cada saída ao conceito (coerção, falsy, NaN, float).'],
      ['Aplicado', 'Achar um bug causado por == e corrigi-lo com === e checagem explícita.', 'Antes/depois com a explicação.']
    ],
    quiz: [
      { question: 'Para comparar valores em JS, prefira:', options: ['==', '===', 'is', 'equals()'], answer: 1, why: '=== compara sem coerção; == pode surpreender.' },
      { question: 'Em JavaScript, typeof 5 e typeof 5.5 são:', options: ['"int" e "float"', 'ambos "number"', '"number" e "double"', 'erro'], answer: 1, why: 'Só existe number (double); não há int separado.' },
      { question: 'Qual destes NÃO é falsy?', options: ['0', '""', '"0"', 'null'], answer: 2, why: 'A string "0" é truthy; 0, "" e null são falsy.' }
    ],
    challenge: 'Listar os seis valores falsy de cor e mostrar um bug real que cada categoria (0, "", null) pode causar.',
    book: 'Eloquent JavaScript, cap. 1–2; You Don’t Know JS Yet.',
    complements: [official.javascript], exampleFile: '../../examples/frontend-senior/frontend-zero.mjs'
  }),
  moduleOf({
    number: '0.3', part: 'base', id: 'dom-eventos', title: 'O DOM: a página é uma árvore — selecionar, mudar e eventos', level: 'Introdução',
    objective: 'Selecionar elementos, alterar a página e reagir a eventos pelo DOM, entendendo que a página é uma árvore (o pré-requisito do módulo 1).',
    prerequisites: ['Módulo 0.2', 'Faixa 0: uma coisa é uma árvore de elementos'],
    problem: 'Sem o modelo do DOM como árvore, "mudar a página com JS" vira decoreba de comandos; e o módulo 1 já assume "árvore de elementos".',
    concepts: ['DOM como árvore de nós', 'Selecionar (querySelector)', 'Alterar (textContent, classList)', 'Eventos e addEventListener', 'Elemento vs nó de texto'],
    internals: ['O HTML vira uma árvore de nós (o DOM); cada elemento é um nó com pais e filhos, como qualquer árvore da Faixa 0.', 'O JS seleciona nós (querySelector), lê/altera conteúdo e classes, e escuta eventos (click, input) com addEventListener.', 'Mudar o DOM muda o que aparece; é o mecanismo por trás de toda interatividade.'],
    useWhen: ['Ao tornar a página interativa (reagir a clique, digitar).', 'Ao atualizar o conteúdo sem recarregar.'],
    avoidWhen: ['Não manipule o DOM em excesso à mão em apps grandes (é onde frameworks entram, depois).', 'Não confunda o elemento com seu texto.'],
    contrast: { bad: 'Buscar elementos por índice frágil e reescrever innerHTML inteiro a cada mudança.', good: 'Selecionar por seletor claro, alterar só o necessário e escutar eventos.' },
    tradeoffs: ['Manipular o DOM direto é simples para pouca coisa; vira caótico em escala (motivo dos frameworks).', 'innerHTML é conveniente, mas arriscado (segurança/perf).'],
    production: 'Um botão "não fazia nada" porque o addEventListener rodou antes de o elemento existir no DOM — ordem de carregamento importa.',
    risks: ['Selecionar antes do elemento existir.', 'Reescrever innerHTML e perder estado/listeners.', 'Confundir elemento e nó de texto.'],
    checklist: ['Sei que o DOM é uma árvore?', 'Sei selecionar um elemento por seletor?', 'Sei alterar conteúdo e classe?', 'Sei reagir a um evento?'],
    interview: [
      ['Introdução', 'O que significa dizer que "a página é uma árvore"?', 'O HTML é representado como o DOM, uma árvore de nós com pais e filhos; o JS navega e altera essa árvore.'],
      ['Introdução', 'Como fazer algo acontecer ao clicar num botão?', 'Selecionar o botão e registrar um ouvinte com addEventListener("click", ...).']
    ],
    exercises: [
      ['Básico', 'Selecionar um elemento, trocar seu texto e reagir a um clique que muda uma classe.', 'A página com o comportamento e o trecho de JS.'],
      ['Aplicado', 'Desenhar a árvore DOM de uma pequena página e apontar pais/filhos.', 'Diagrama da árvore com os nós identificados.']
    ],
    quiz: [
      { question: 'O DOM é melhor descrito como:', options: ['uma lista', 'uma árvore de nós', 'um banco de dados', 'um arquivo CSS'], answer: 1, why: 'Elementos têm pais e filhos: é uma árvore.' },
      { question: 'Para reagir a um clique, você usa:', options: ['querySelector', 'addEventListener', 'textContent', 'classList'], answer: 1, why: 'addEventListener registra o ouvinte do evento.' },
      { question: 'Um botão sem efeito pode ser porque:', options: ['o CSS falhou', 'o listener rodou antes de o elemento existir', 'faltou HTML', 'o navegador é antigo'], answer: 1, why: 'Ordem de carregamento: selecionar antes de existir não encontra o elemento.' }
    ],
    challenge: 'Construir um contador que incrementa ao clicar, explicando como o DOM muda a cada clique.',
    book: 'Eloquent JavaScript, cap. 14–15 (DOM e eventos).',
    complements: [official.dom], exampleFile: null
  }),
  moduleOf({
    number: '0.4', part: 'base', id: 'devtools-debug-front', title: 'Ferramental do front: DevTools, console e o debugger', level: 'Introdução',
    objective: 'Usar as DevTools do navegador — console, elements, network e o debugger com breakpoints — para inspecionar e depurar, em vez de adivinhar.',
    prerequisites: ['Módulo 0.3', 'Faixa 0: ler mensagens de erro e usar o debugger'],
    problem: 'O iniciante depura front com alert/console.log espalhados; as DevTools fazem o que a Faixa 0 ensinou (inspecionar estado, ler erros, breakpoint) direto no navegador.',
    concepts: ['Console (erros e logs)', 'Elements (inspecionar o DOM/CSS)', 'Network (requests e status)', 'Sources e breakpoints', 'Ler o erro no console'],
    internals: ['O console mostra erros de JS com a mensagem e o arquivo:linha — leia isso primeiro, como na Faixa 0.', 'Elements deixa inspecionar e editar o DOM/CSS ao vivo; Network mostra cada request, seu status e tempo.', 'Em Sources você põe breakpoints e inspeciona variáveis passo a passo — o debugger da Faixa 0, no navegador.'],
    useWhen: ['Sempre que algo não funciona: abra o console primeiro.', 'Ao investigar layout (Elements), rede (Network) ou lógica (Sources).'],
    avoidWhen: ['Não depure só com alert/console.log quando o breakpoint resolve.', 'Não ignore os erros/avisos do console.'],
    contrast: { bad: 'Encher o código de alert() e adivinhar o que aconteceu.', good: 'Ler o erro no console, inspecionar no Elements/Network e pôr um breakpoint no Sources.' },
    tradeoffs: ['DevTools são poderosas; exigem aprender as abas.', 'console.log é rápido para casos triviais; some no ruído em casos grandes.'],
    production: 'Uma imagem "não carregava" — a aba Network mostrou um 404 no caminho; o problema não era código, era a URL do recurso.',
    risks: ['Ignorar o console.', 'Não saber ver o status de um request.', 'Depender só de console.log.', 'Não usar breakpoints.'],
    checklist: ['Sei abrir o console e ler um erro?', 'Sei inspecionar o DOM/CSS no Elements?', 'Sei ver requests e status no Network?', 'Sei pôr um breakpoint no Sources?'],
    interview: [
      ['Introdução', 'Qual a primeira coisa a fazer quando algo não funciona no front?', 'Abrir o console das DevTools e ler o erro (mensagem + arquivo:linha).'],
      ['Introdução', 'Como saber se uma requisição falhou?', 'Na aba Network das DevTools: ela mostra cada request, seu status (ex.: 404/500) e o tempo.']
    ],
    exercises: [
      ['Básico', 'Provocar um erro de JS e lê-lo no console; inspecionar um elemento no Elements.', 'Captura do erro e do elemento inspecionado.'],
      ['Aplicado', 'Pôr um breakpoint no Sources e inspecionar variáveis de uma função ao clicar.', 'Relato do breakpoint e dos valores observados.']
    ],
    quiz: [
      { question: 'Onde ver o erro de JavaScript de uma página?', options: ['na aba Network', 'no Console das DevTools', 'no Elements', 'no CSS'], answer: 1, why: 'O Console mostra erros e logs de JS.' },
      { question: 'Para ver se um request retornou 404, use:', options: ['Console', 'Elements', 'Network', 'Sources'], answer: 2, why: 'A aba Network lista requests e seus status.' },
      { question: 'Para pausar o JS e inspecionar variáveis, use:', options: ['alert()', 'um breakpoint no Sources', 'o Elements', 'recarregar'], answer: 1, why: 'Breakpoints no Sources são o debugger do navegador.' }
    ],
    challenge: 'Ligar o que a Faixa 0 ensinou (ler erros + debugger) às DevTools: achar um bug real usando Console, Network e um breakpoint.',
    book: 'Eloquent JavaScript (depuração); MDN — DevTools; depois siga para o módulo 1.',
    complements: [official.devtoolsPerf, official.javascript], exampleFile: null
  }),
  moduleOf({
    number: 1, part: 'fundamentos', id: 'html-semantica', title: 'HTML semântico e contrato do documento', level: 'Fundação',
    objective: 'Construir um documento cuja estrutura, navegação e formulário funcionem antes do CSS e do JavaScript.',
    prerequisites: ['Sintaxe HTML', 'Árvore de elementos', 'Servidor local'],
    problem: 'Divs clicáveis e headings escolhidos pelo tamanho removem significado, teclado e previsibilidade.',
    concepts: ['Outline e headings', 'Landmarks', 'Conteúdo e ações', 'Formulários nativos', 'Progressive enhancement'],
    internals: ['O parser produz o DOM na ordem do documento.', 'Semântica alimenta acessibilidade, busca e automação.', 'Controles nativos já possuem comportamento e estados.'],
    useWhen: ['Começar qualquer fluxo pela capacidade nativa da Web.', 'Definir contratos antes da camada visual.'],
    avoidWhen: ['Não simule botão com div.', 'Não use ARIA para corrigir elemento nativo mal escolhido.'],
    contrast: { bad: 'Montar a página por aparência e reconstruir semântica depois.', good: 'Modelar documento, ordem, nomes e ações antes do acabamento.' },
    tradeoffs: ['Semântica restringe marcação arbitrária.', 'Progressive enhancement exige pensar no baseline.', 'Elementos nativos variam visualmente.'],
    production: 'Um checkout parece correto, mas não pode ser concluído por teclado e os erros não têm associação com os campos.',
    risks: ['Ordem visual diverge da ordem do DOM.', 'Nome acessível ausente.', 'Formulário depende do clique.'],
    checklist: ['Há um h1 único?', 'Landmarks possuem propósito?', 'A ordem do DOM faz sentido?', 'Labels e erros estão associados?', 'O fluxo básico funciona sem JavaScript?'],
    interview: [['Júnior/Pleno', 'Quando usar button e quando usar a?', 'Distinguir ação local de navegação e seus comportamentos nativos.'], ['Sênior/Staff', 'Como semântica reduz custo de produto?', 'Relacionar acesso, busca, testes, automação e manutenção.']],
    exercises: [['Básico', 'Marcar uma página de conteúdo sem divs genéricas desnecessárias.', 'HTML validado e outline explicado.'], ['Aplicado', 'Construir formulário com erro associado e foco previsível.', 'Teste por teclado e leitor de tela.'], ['Sênior', 'Remover JavaScript de uma interação coberta pela plataforma.', 'Comparação de bytes, acesso e falhas.']],
    challenge: 'Entregar o fluxo crítico legível e operável com CSS e JavaScript desativados.',
    book: 'Inclusive Design Patterns, documento semântico; Eloquent JavaScript, cap. 13.',
    complements: [official.html, official.wcag], exampleFile: '../../examples/frontend-senior/fundamentos-plataforma.md'
  }),
  moduleOf({
    number: 2, part: 'fundamentos', id: 'css-cascata-layout', title: 'Cascata, layout e responsividade', level: 'Fundação',
    objective: 'Compor uma interface fluida entre 320 e 1920 px sem sobreposição, corte ou escala tipográfica desproporcional.',
    prerequisites: ['Seletores e box model', 'HTML semântico', 'DevTools'],
    problem: 'Valores fixos, especificidade crescente e breakpoints por dispositivo tornam o layout frágil.',
    concepts: ['Cascata e camadas', 'Intrinsic sizing', 'Flexbox e Grid', 'Container queries', 'Tipografia fluida'],
    internals: ['A cascata resolve origem, camada, especificidade e ordem.', 'Min-content e max-content participam do tamanho.', 'Overflow revela uma restrição não modelada.'],
    useWhen: ['Deixar conteúdo e container conduzirem a adaptação.', 'Isolar componentes por camada e escopo.'],
    avoidWhen: ['Não esconda overflow para mascarar corte.', 'Não aumente z-index sem entender stacking context.'],
    contrast: { bad: 'Copiar pixels do mockup e remendar cada viewport.', good: 'Definir limites, ritmo, minmax, clamp e testes de conteúdo extremo.' },
    tradeoffs: ['Layout fluido exige limites claros.', 'Container query adiciona contexto.', 'Abstração utilitária pode esconder a cascata.'],
    production: 'Um título longo empurra ações para fora do card e uma sidebar fixa deixa o conteúdo ilegível em 820 px.',
    risks: ['100vw cria scroll horizontal.', 'Min-width implícito impede encolhimento.', 'Zoom de texto quebra altura fixa.'],
    checklist: ['Sem overflow horizontal?', 'Conteúdo longo reflowa?', 'Zoom 200% continua utilizável?', 'Foco não fica coberto?', 'Breakpoints respondem ao conteúdo?'],
    interview: [['Júnior/Pleno', 'Por que min-width: 0 resolve alguns overflows?', 'Explicar mínimo automático de itens flex/grid.'], ['Sênior/Staff', 'Como evitar uma guerra de especificidade?', 'Propor camadas, escopo, baixa especificidade e contrato de componentes.']],
    exercises: [['Básico', 'Recriar um card com Grid e sem largura fixa.', 'Capturas em quatro viewports.'], ['Aplicado', 'Corrigir uma página com overflow e texto sobreposto.', 'Teste automatizado de scrollWidth.'], ['Sênior', 'Definir uma política de layout responsivo.', 'Tokens, limites e matriz de conteúdo extremo.']],
    challenge: 'Suportar 320 px, 200% de zoom e tradução 40% maior sem media query específica por dispositivo.',
    book: 'CSS in Depth, 2ª ed., cascata, unidades e layout; Refactoring UI, espaçamento.',
    complements: [official.css, official.wcag], exampleFile: '../../examples/frontend-senior/fundamentos-plataforma.md'
  }),
  moduleOf({
    number: 3, part: 'fundamentos', id: 'javascript-escopo', title: 'JavaScript, escopo e closures', level: 'Fundação',
    objective: 'Explicar resolução de identificadores, closures e ciclo de vida de estado em código executável.',
    prerequisites: ['Funções e objetos', 'Módulos ES', 'Console do navegador'],
    problem: 'Estado capturado e mutação compartilhada geram handlers obsoletos, vazamentos e bugs intermitentes.',
    concepts: ['Escopo léxico', 'Closure', 'Hoisting e TDZ', 'Módulos', 'Imutabilidade por fronteira'],
    internals: ['O escopo é determinado lexicalmente.', 'Closure preserva acesso, não uma cópia congelada.', 'Módulos criam bindings vivos e singleton por carregamento.'],
    useWhen: ['Encapsular estado com contrato pequeno.', 'Construir funções e módulos testáveis.'],
    avoidWhen: ['Não use closure para esconder estado global.', 'Não dependa de coerção implícita em fronteiras.'],
    contrast: { bad: 'Compartilhar objetos mutáveis entre handlers e timers.', good: 'Delimitar posse, expor operações e observar transições.' },
    tradeoffs: ['Closure simplifica encapsulamento, mas retém memória.', 'Imutabilidade facilita raciocínio, mas aloca.', 'Módulo único pode acoplar testes.'],
    production: 'Um listener mantém uma árvore desconectada e exibe dados antigos após a troca de usuário.',
    risks: ['Stale closure.', 'Coerção silenciosa.', 'Dependência circular.'],
    checklist: ['Cada estado tem dono?', 'Closures retêm apenas o necessário?', 'Fronteiras validam dados?', 'Módulos evitam ciclos?', 'Timers e listeners são limpos?'],
    interview: [['Júnior/Pleno', 'O que uma closure captura?', 'Explicar ambiente léxico e bindings.'], ['Sênior/Staff', 'Como investigar uma retenção causada por closure?', 'Usar heap snapshot, retainers e ciclo de vida.']],
    exercises: [['Básico', 'Prever e comprovar cinco resoluções de escopo.', 'Teste e explicação.'], ['Aplicado', 'Corrigir um handler com estado obsoleto.', 'Regressão automatizada.'], ['Sênior', 'Diagnosticar retenção de listener.', 'Heap antes/depois e correção.']],
    challenge: 'Projetar um módulo de estado que não exponha mutação nem retenha consumidores descartados.',
    book: "You Don't Know JS Yet: Scope & Closures, 2ª ed.; JavaScript: The Definitive Guide, funções e módulos.",
    complements: [official.javascript], exampleFile: '../../examples/frontend-senior/fundamentos-plataforma.md'
  }),
  moduleOf({
    number: 4, part: 'fundamentos', id: 'asssincrono-dom', title: 'Event loop, assíncrono e DOM', level: 'Fundação',
    objective: 'Diagnosticar ordem de execução, long tasks e concorrência aparente em uma interação real.',
    prerequisites: ['Promises e callbacks', 'DOM', 'Network e Performance panels'],
    problem: 'Promises, timers e renderização são tratados como threads equivalentes, bloqueando interação ou criando corrida.',
    concepts: ['Task e microtask', 'Rendering opportunity', 'AbortController', 'Event delegation', 'Long task'],
    internals: ['Microtasks drenam antes da próxima task.', 'O main thread compartilha script, estilo, layout e input.', 'Abortar a espera não desfaz efeito já aplicado no servidor.'],
    useWhen: ['Cancelar trabalho obsoleto e serializar efeitos.', 'Medir bloqueio antes de paralelizar.'],
    avoidWhen: ['Não encadeie microtasks sem limite.', 'Não atualize DOM item a item em loops grandes.'],
    contrast: { bad: 'Adicionar debounce e setTimeout até a interface parecer estável.', good: 'Modelar identidade da requisição, cancelamento, lote e ordem de commit.' },
    tradeoffs: ['Batch reduz renders, mas atrasa feedback.', 'Worker isola CPU, mas cobra serialização.', 'Cancelamento exige semântica de estado.'],
    production: 'Uma busca lenta sobrescreve o resultado recente e o teclado congela durante a montagem de centenas de linhas.',
    risks: ['Resposta fora de ordem.', 'Fila de microtasks infinita.', 'Layout thrashing.'],
    checklist: ['Requisições obsoletas são ignoradas?', 'Long tasks são medidas?', 'DOM é atualizado em lote?', 'CPU-bound sai do main thread?', 'Loading preserva interação?'],
    interview: [['Júnior/Pleno', 'Qual a diferença entre task e microtask?', 'Explicar ordem e oportunidade de renderização.'], ['Sênior/Staff', 'Como corrigir respostas fora de ordem?', 'Usar identidade, cancelamento e commit condicionado.']],
    exercises: [['Básico', 'Ordenar logs com Promise e timer.', 'Resultado previsto e executado.'], ['Aplicado', 'Implementar busca cancelável.', 'Teste de corrida.'], ['Sênior', 'Quebrar uma long task.', 'Trace antes/depois e INP de laboratório.']],
    challenge: 'Manter feedback contínuo sob CPU lenta, rede variável e digitação rápida.',
    book: 'JavaScript: The Definitive Guide, programação assíncrona; Eloquent JavaScript, cap. 11 e 15.',
    complements: [official.eventLoop, official.dom], exampleFile: '../../examples/frontend-senior/fundamentos-plataforma.md'
  }),
  moduleOf({
    number: 5, part: 'fundamentos', id: 'rede-renderizacao', title: 'Rede e caminho crítico de renderização', level: 'Aplicado',
    objective: 'Relacionar waterfall, cache, prioridade e etapas de renderização a uma hipótese mensurável de experiência.',
    prerequisites: ['HTTP e TLS básicos', 'HTML, CSS e JavaScript', 'DevTools Network'],
    problem: 'A equipe otimiza arquivos isolados sem entender dependências críticas, latência e trabalho do navegador.',
    concepts: ['DNS, TCP/QUIC e TLS', 'HTTP cache', 'Critical rendering path', 'Preload e prioridade', 'Layout, paint e composite'],
    internals: ['Descoberta tardia atrasa recursos críticos.', 'JavaScript pode bloquear parser e main thread.', 'Cache correto depende de identidade, validade e variação.'],
    useWhen: ['Ler waterfall antes de escolher otimização.', 'Separar tempo de rede de CPU e renderização.'],
    avoidWhen: ['Não faça preload de tudo.', 'Não trate HTTP/2 ou CDN como correção universal.'],
    contrast: { bad: 'Minificar depois que a página já baixa e executa trabalho desnecessário.', good: 'Remover, priorizar e medir recursos no caminho da experiência principal.' },
    tradeoffs: ['Mais cache reduz rede, mas aumenta invalidação.', 'Mais chunks podem aumentar descoberta.', 'Pré-carregar compete por banda.'],
    production: 'O LCP chega cedo pela rede, mas espera CSS e JavaScript; uma fonte bloqueia texto e o bundle mantém CPU ocupada.',
    risks: ['Cache de conteúdo privado.', 'Preload sem uso.', 'Terceiros dominam o main thread.'],
    checklist: ['O recurso LCP é descoberto cedo?', 'Cache varia corretamente?', 'JS não crítico é adiado?', 'Fontes têm fallback?', 'Waterfall comprova a hipótese?'],
    interview: [['Júnior/Pleno', 'O que bloqueia a renderização inicial?', 'Relacionar parser, CSS, scripts e recursos.'], ['Sênior/Staff', 'Como separar gargalo de rede e CPU?', 'Comparar waterfall, coverage, trace e dispositivo.']],
    exercises: [['Básico', 'Anotar o waterfall de uma página.', 'Mapa de dependências.'], ['Aplicado', 'Remover um recurso bloqueante.', 'Lighthouse e trace antes/depois.'], ['Sênior', 'Desenhar política de cache e invalidação.', 'Headers, riscos e teste.']],
    challenge: 'Reduzir tempo de experiência sem aumentar bytes prioritários nem esconder conteúdo.',
    book: 'High Performance Browser Networking, rede e HTTP; CSS in Depth, carregamento e renderização.',
    complements: [official.http, official.performance], exampleFile: '../../examples/frontend-senior/fundamentos-plataforma.md'
  }),
  moduleOf({
    number: 6, part: 'aplicacoes', id: 'typescript-contratos', title: 'TypeScript e contratos de domínio', level: 'Aplicado',
    objective: 'Modelar estados válidos e validar fronteiras externas sem recorrer a any ou as como fuga.',
    prerequisites: ['JavaScript moderno', 'Módulos', 'Contrato de API'],
    problem: 'Tipos espelham JSON otimista e fazem dados não validados parecerem seguros dentro da aplicação.',
    concepts: ['Strictness', 'Narrowing', 'Discriminated unions', 'Generics', 'unknown e validação'],
    internals: ['Tipos são apagados em runtime.', 'Compatibilidade é estrutural.', 'Inferência depende do contexto e pode ampliar literais.'],
    useWhen: ['Codificar invariantes e contratos internos.', 'Forçar tratamento exaustivo de estados.'],
    avoidWhen: ['Não use assertion para silenciar dado externo.', 'Não crie generics sem relação entre tipos.'],
    contrast: { bad: 'Converter response.json() para o DTO desejado com as.', good: 'Receber unknown, validar e transformar para o modelo interno.' },
    tradeoffs: ['Tipos precisos aumentam manutenção inicial.', 'Validação duplica parte do contrato.', 'Geração automática pode vazar o modelo do backend.'],
    production: 'Uma API passa a omitir um campo e a interface quebra apesar de o build TypeScript continuar verde.',
    risks: ['any contagioso.', 'Enum incompatível.', 'Optional encobre ausência inválida.'],
    checklist: ['strict está ativo?', 'Dados externos entram como unknown?', 'Estados são discriminados?', 'Exaustividade é verificada?', 'Assertions têm justificativa?'],
    interview: [['Júnior/Pleno', 'Qual a diferença entre unknown e any?', 'Explicar segurança e narrowing.'], ['Sênior/Staff', 'Como desenhar tipos para uma máquina de estados?', 'Usar unions discriminadas e transições válidas.']],
    exercises: [['Básico', 'Substituir any por unknown e guards.', 'Build e testes.'], ['Aplicado', 'Modelar quatro estados de uma chamada.', 'Render exaustivo.'], ['Sênior', 'Criar anticorruption layer para API.', 'Validação e contrato interno estável.']],
    challenge: 'Provar em compile time que um estado impossível não chega à camada visual.',
    book: 'Effective TypeScript, itens sobre any, inferência e desenho de tipos; JavaScript: The Definitive Guide, TypeScript.',
    complements: [official.typescript], exampleFile: '../../examples/frontend-senior/aplicacao-tipificada.md'
  }),
  moduleOf({
    number: 7, part: 'aplicacoes', id: 'react-modelo', title: 'React: render, identidade e composição', level: 'Aplicado',
    objective: 'Construir componentes puros cuja identidade, props e composição expliquem cada atualização.',
    prerequisites: ['Funções e closures', 'DOM', 'JSX'],
    problem: 'Componentes acumulam efeito, estado duplicado e abstrações antes de possuir responsabilidade clara.',
    concepts: ['Render puro', 'Árvore e reconciliação', 'Props', 'Keys e identidade', 'Composição'],
    internals: ['Render calcula uma descrição da UI.', 'Key participa da identidade entre renders.', 'Estado pertence a uma posição na árvore.'],
    useWhen: ['Compor comportamentos e visual com fronteiras explícitas.', 'Derivar valores durante render.'],
    avoidWhen: ['Não copie props para state.', 'Não use effect para derivar dado síncrono.'],
    contrast: { bad: 'Sincronizar vários estados por efeitos.', good: 'Manter fonte única e derivar a apresentação no render.' },
    tradeoffs: ['Componentes pequenos aumentam fronteiras.', 'Composição repete configuração.', 'Memoização adiciona custo cognitivo.'],
    production: 'Um formulário troca itens, mas preserva estado no registro errado porque keys usam o índice.',
    risks: ['Key instável.', 'Mutação de props.', 'Componente genérico sem contrato.'],
    checklist: ['Render é puro?', 'Keys representam identidade?', 'Estado é mínimo?', 'Props expressam contrato?', 'Composição evita flags conflitantes?'],
    interview: [['Júnior/Pleno', 'Por que key não é apenas otimização?', 'Explicar identidade e preservação de estado.'], ['Sênior/Staff', 'Quando uma abstração de componente piora o sistema?', 'Analisar coesão, variantes e acoplamento.']],
    exercises: [['Básico', 'Corrigir uma lista com identidade instável.', 'Teste de preservação.'], ['Aplicado', 'Refatorar estado derivado.', 'Menos transições e testes verdes.'], ['Sênior', 'Projetar API composta para um widget.', 'Matriz de variantes válidas.']],
    challenge: 'Reduzir pela metade estados e efeitos de uma tela sem perder comportamento.',
    book: 'Learning React, componentes, dados e hooks; Eloquent JavaScript, abstração.',
    complements: [official.react], exampleFile: '../../examples/frontend-senior/aplicacao-tipificada.md'
  }),
  moduleOf({
    number: 8, part: 'aplicacoes', id: 'estado-efeitos', title: 'Estado, efeitos e concorrência de interface', level: 'Aplicado',
    objective: 'Modelar estado local e compartilhado com transições explícitas, cancelamento e recuperação.',
    prerequisites: ['React e hooks', 'Promises', 'TypeScript unions'],
    problem: 'Estado global precoce e efeitos acoplados tornam ordem, rollback e falhas impossíveis de prever.',
    concepts: ['State colocation', 'Reducer', 'Effect lifecycle', 'Optimistic update', 'Server state'],
    internals: ['Effect sincroniza sistema externo após commit.', 'Cleanup ocorre antes da próxima sincronização relevante.', 'Estado remoto possui validade e concorrência próprias.'],
    useWhen: ['Colocar estado perto do consumidor.', 'Representar transições complexas por reducer.'],
    avoidWhen: ['Não globalize conveniência local.', 'Não esconda fluxo crítico em cadeia de effects.'],
    contrast: { bad: 'Um store armazena formulário, cache remoto e estado visual juntos.', good: 'Separar estado local, URL, servidor e workflow por responsabilidade.' },
    tradeoffs: ['Colocation repete estado.', 'Store central facilita inspeção, mas acopla.', 'Otimismo melhora resposta e exige compensação.'],
    production: 'Duas mutações otimistas falham fora de ordem e o rollback restaura uma versão já superada.',
    risks: ['Effect loop.', 'Cache duplicado.', 'Rollback incorreto.'],
    checklist: ['A fonte de verdade está clara?', 'Effects sincronizam algo externo?', 'Concorrência possui identidade?', 'Rollback é testado?', 'URL preserva estado compartilhável?'],
    interview: [['Júnior/Pleno', 'Quando usar reducer?', 'Relacionar transições, eventos e estado composto.'], ['Sênior/Staff', 'Como separar server state de client state?', 'Discutir validade, cache, URL e ownership.']],
    exercises: [['Básico', 'Mover estado para o dono mínimo.', 'Diagrama antes/depois.'], ['Aplicado', 'Tratar mutação otimista com falha.', 'Teste de rollback.'], ['Sênior', 'Modelar checkout como state machine.', 'Transições e invariantes testadas.']],
    challenge: 'Reproduzir e corrigir uma corrida entre navegação, refetch e mutação otimista.',
    book: 'Learning React, hooks e dados; Effective TypeScript, unions discriminadas.',
    complements: [official.reactState], exampleFile: '../../examples/frontend-senior/aplicacao-tipificada.md'
  }),
  moduleOf({
    number: 9, part: 'aplicacoes', id: 'dados-formularios', title: 'Dados, formulários e estados de falha', level: 'Aplicado',
    objective: 'Implementar um fluxo de dados autenticado com loading, vazio, erro, sucesso e recuperação observáveis.',
    prerequisites: ['Fetch e HTTP', 'React state', 'Validação TypeScript'],
    problem: 'O caminho feliz recebe design; timeout, validação, conflito e sessão expirada surgem apenas em produção.',
    concepts: ['Four-state UI', 'Validação por fronteira', 'Idempotência', 'Retry e backoff', 'Error boundary'],
    internals: ['Erro HTTP não rejeita fetch automaticamente.', 'Validação cliente melhora feedback, mas não autoriza.', 'Retry pode duplicar efeito sem idempotência.'],
    useWhen: ['Modelar cada estado como parte do contrato.', 'Oferecer recuperação acionável.'],
    avoidWhen: ['Não faça retry cego em mutação.', 'Não use mensagem genérica para esconder perda de dados.'],
    contrast: { bad: 'Spinner global e catch que apenas registra no console.', good: 'Estado localizado, timeout, mensagem contextual e ação de recuperação.' },
    tradeoffs: ['Feedback detalhado exige taxonomia de erro.', 'Persistir rascunho aumenta privacidade e migração.', 'Retry eleva carga.'],
    production: 'Uma sessão expira no envio; o app perde o formulário e o usuário não sabe se o pedido foi criado.',
    risks: ['Duplo submit.', 'PII em storage.', 'Erro sem foco ou anúncio.'],
    checklist: ['Quatro estados estão implementados?', 'Erro preserva trabalho seguro?', 'Submit é idempotente?', 'Mensagem recebe foco/anúncio?', 'Dados externos são validados?'],
    interview: [['Júnior/Pleno', 'Por que fetch não rejeita em 500?', 'Distinguir transporte e status HTTP.'], ['Sênior/Staff', 'Como evitar perda e duplicação no submit?', 'Idempotência, estado de confirmação e reconciliação.']],
    exercises: [['Básico', 'Criar stories dos quatro estados.', 'Catálogo visual.'], ['Aplicado', 'Simular timeout e sessão expirada.', 'Teste de recuperação.'], ['Sênior', 'Projetar submit idempotente ponta a ponta.', 'Contrato, UI e teste de repetição.']],
    challenge: 'Garantir que recarregar, voltar e reenviar não percam nem dupliquem a intenção.',
    book: 'Learning React, dados; JavaScript: The Definitive Guide, fetch e promises.',
    complements: [official.http, official.react], exampleFile: '../../examples/frontend-senior/aplicacao-tipificada.md'
  }),
  moduleOf({
    number: 10, part: 'aplicacoes', id: 'renderizacao-rotas', title: 'Rotas, renderização e fronteiras cliente-servidor', level: 'Pleno',
    objective: 'Escolher CSR, SSR, geração estática, streaming e cache por conteúdo, interação e operação.',
    prerequisites: ['React e HTTP', 'Cache', 'Build e deploy'],
    problem: 'Framework vira arquitetura padrão e move código, dados ou segredos para a fronteira errada.',
    concepts: ['CSR, SSR e SSG', 'Server e Client Components', 'Streaming', 'Route boundaries', 'Revalidation'],
    internals: ['HTML inicial e hidratação têm custos distintos.', 'Código importado pelo cliente pode expor dependências.', 'Cache de rota depende de identidade e invalidação.'],
    useWhen: ['Decidir renderização por conteúdo e interação.', 'Isolar fronteiras de dados e falha.'],
    avoidWhen: ['Não marque tudo como cliente.', 'Não adote SSR para corrigir bundle sem remover trabalho.'],
    contrast: { bad: 'Escolher modo de renderização por moda.', good: 'Medir aquisição, atualização, personalização, latência e custo operacional.' },
    tradeoffs: ['SSR melhora entrega inicial e aumenta servidor.', 'Streaming entrega cedo e complica estados.', 'Cache reduz latência e cria invalidação.'],
    production: 'Conteúdo personalizado é armazenado em cache compartilhado e um segredo entra no bundle do navegador.',
    risks: ['Hydration mismatch.', 'Cache privado compartilhado.', 'Waterfall cliente-servidor.'],
    checklist: ['A fronteira cliente está mínima?', 'Cache varia por identidade?', 'Loading e erro são locais?', 'Segredos ficam no servidor?', 'A escolha tem métrica?'],
    interview: [['Júnior/Pleno', 'Qual a diferença entre SSR e hidratação?', 'Separar geração de HTML e ativação no cliente.'], ['Sênior/Staff', 'Como escolher estratégia por rota?', 'Relacionar conteúdo, interação, cache, SEO, custo e falha.']],
    exercises: [['Básico', 'Classificar cinco rotas por estratégia.', 'Matriz de decisão.'], ['Aplicado', 'Mover fetch para a fronteira adequada.', 'Waterfall antes/depois.'], ['Sênior', 'Plantar e corrigir vazamento de cache.', 'Teste multiusuário.']],
    challenge: 'Reduzir JavaScript do cliente sem piorar interatividade, privacidade ou operação.',
    book: 'Learning React, arquitetura React; JavaScript: The Definitive Guide, módulos e Web.',
    complements: [official.next, official.react], exampleFile: '../../examples/frontend-senior/aplicacao-tipificada.md'
  }),
  moduleOf({
    number: 11, part: 'sistemas', id: 'acessibilidade-wcag', title: 'Acessibilidade e auditoria WCAG 2.2', level: 'Pleno',
    objective: 'Auditar um fluxo pelos princípios WCAG 2.2 e corrigir barreiras com teste automatizado e humano.',
    prerequisites: ['HTML semântico', 'Teclado', 'Leitor de tela básico'],
    problem: 'Score automatizado é confundido com conformidade e usuários reais continuam bloqueados.',
    concepts: ['POUR', 'A, AA e AAA', 'Nome, função e valor', 'Reflow e foco', 'Teste com tecnologia assistiva'],
    internals: ['Automação encontra apenas parte das barreiras.', 'Árvore de acessibilidade deriva da plataforma e do DOM.', 'Conformidade se aplica a páginas e processos completos.'],
    useWhen: ['Incluir acesso desde requisito e componente.', 'Combinar norma, heurística e teste humano.'],
    avoidWhen: ['Não declare acessível por score.', 'Não force ordem de foco positiva.'],
    contrast: { bad: 'Rodar auditoria no fim e adicionar aria-label indiscriminadamente.', good: 'Usar semântica, testar o processo completo e corrigir a causa.' },
    tradeoffs: ['Conformidade não cobre toda necessidade.', 'Custom widget exige mais testes.', 'Correção estrutural pode mudar design.'],
    production: 'Modal prende foco, mas o botão que o abriu some e o usuário retorna ao início da página.',
    risks: ['Foco invisível.', 'Contraste não textual insuficiente.', 'Status não anunciado.'],
    checklist: ['Fluxo funciona só por teclado?', 'Foco nunca fica encoberto?', 'Zoom e reflow preservam conteúdo?', 'Erros são identificados?', 'Teste humano complementa automação?'],
    interview: [['Júnior/Pleno', 'O que um teste automático não comprova?', 'Citar ordem, qualidade de nomes, compreensão e uso real.'], ['Sênior/Staff', 'Como priorizar dívida de acessibilidade?', 'Impacto, frequência, severidade, processo e prevenção.']],
    exercises: [['Básico', 'Auditar um fluxo por teclado.', 'Roteiro e achados.'], ['Aplicado', 'Corrigir cinco critérios AA.', 'Regressões e evidências.'], ['Sênior', 'Definir gate de acessibilidade no delivery.', 'Política com exceção e prazo.']],
    challenge: 'Demonstrar conformidade do processo crítico, não apenas de componentes isolados.',
    book: 'Inclusive Design Patterns, padrões semânticos; Inclusive Components, componentes acessíveis.',
    complements: [official.wcag, official.apg], exampleFile: '../../examples/frontend-senior/sistema-interface.md'
  }),
  moduleOf({
    number: 12, part: 'sistemas', id: 'componentes-inclusivos', title: 'Padrões interativos inclusivos', level: 'Pleno',
    objective: 'Implementar modal, menu, abas e notificações com teclado, foco e anúncio coerentes.',
    prerequisites: ['WCAG 2.2', 'DOM events', 'CSS de estados'],
    problem: 'Componentes visuais semelhantes escondem semânticas e modelos de teclado diferentes.',
    concepts: ['Dialog modal', 'Menu versus navegação', 'Tabs', 'Disclosure', 'Live region'],
    internals: ['ARIA descreve estado, mas não implementa comportamento.', 'O padrão define movimento e restauração de foco.', 'Notificações assertivas podem interromper conteúdo.'],
    useWhen: ['Adotar padrão conhecido após avaliar elemento nativo.', 'Documentar teclado e retorno de foco.'],
    avoidWhen: ['Não use menu role em navegação comum.', 'Não anuncie toda mudança como alert.'],
    contrast: { bad: 'Copiar atributos ARIA sem o modelo de interação.', good: 'Escolher o padrão, implementar teclado e testar em combinações reais.' },
    tradeoffs: ['Customização amplia superfície de teste.', 'Focus trap protege contexto e pode aprisionar.', 'Live region informa e pode gerar ruído.'],
    production: 'Um menu fecha ao tabular, mas o foco vai para elemento oculto e o leitor anuncia itens sem contexto.',
    risks: ['Keyboard trap.', 'Role incompatível.', 'Foco perdido.'],
    checklist: ['O padrão APG adequado foi escolhido?', 'Teclas esperadas funcionam?', 'Foco entra e retorna?', 'Estado visual e semântico coincidem?', 'Leitor de tela foi testado?'],
    interview: [['Júnior/Pleno', 'Quando navegação não é menu ARIA?', 'Distinguir links de aplicação e menu composto.'], ['Sênior/Staff', 'Como validar componente acessível em escala?', 'Contrato, testes, matriz AT/browser e telemetria.']],
    exercises: [['Básico', 'Implementar disclosure nativo.', 'Teste de teclado.'], ['Aplicado', 'Construir dialog com retorno de foco.', 'Teste E2E acessível.'], ['Sênior', 'Auditar biblioteca de widgets.', 'Matriz de risco e migração.']],
    challenge: 'Criar um padrão interativo que continue correto com conteúdo dinâmico e navegação concorrente.',
    book: 'Inclusive Components, menus, tabs, modais e notificações.',
    complements: [official.apg, official.wcag], exampleFile: '../../examples/frontend-senior/sistema-interface.md'
  }),
  moduleOf({
    number: 13, part: 'sistemas', id: 'hierarquia-visual', title: 'Hierarquia visual, conteúdo e responsividade', level: 'Pleno',
    objective: 'Projetar hierarquia e densidade que preservem leitura, ação e enquadramento sob conteúdo real.',
    prerequisites: ['CSS de layout', 'Tipografia', 'Noções de produto'],
    problem: 'Telas decoradas antes de ter conteúdo usam escala excessiva, contraste fraco e espaçamento inconsistente.',
    concepts: ['Hierarquia', 'Ritmo espacial', 'Escala tipográfica', 'Cor semântica', 'Densidade responsiva'],
    internals: ['Tamanho, peso, contraste e espaço competem por atenção.', 'Linhas longas reduzem varredura.', 'Conteúdo extremo revela a regra real do layout.'],
    useWhen: ['Começar pela tarefa e pelo conteúdo.', 'Usar tokens para decisões repetidas.'],
    avoidWhen: ['Não use tamanho para resolver toda hierarquia.', 'Não sacrifique contraste por “sofisticação”.'],
    contrast: { bad: 'Ampliar títulos e cards até parecer premium.', good: 'Criar uma escala limitada, ritmo consistente e prioridade ligada à tarefa.' },
    tradeoffs: ['Densidade favorece especialistas e pesa iniciantes.', 'Marca forte pode competir com conteúdo.', 'Escala rígida simplifica e limita exceções.'],
    production: 'Título de dashboard ocupa metade do viewport, corta filtros e provoca sobreposição em notebook.',
    risks: ['Fonte desproporcional.', 'Texto fora do card.', 'Cor como único sinal.'],
    checklist: ['A ação principal aparece sem competir?', 'Linhas têm medida legível?', 'Conteúdo longo permanece contido?', 'Escala usa poucos níveis?', 'Cor não é o único indicador?'],
    interview: [['Júnior/Pleno', 'Como criar hierarquia sem aumentar tudo?', 'Peso, contraste, espaço, agrupamento e conteúdo.'], ['Sênior/Staff', 'Como provar que uma mudança visual melhorou?', 'Tarefa, pesquisa, experimento e métricas guardrail.']],
    exercises: [['Básico', 'Reduzir uma tela para três níveis tipográficos.', 'Antes/depois justificado.'], ['Aplicado', 'Testar conteúdo extremo e localização.', 'Matriz visual.'], ['Sênior', 'Definir regras de densidade.', 'Tokens e decisão por contexto.']],
    challenge: 'Reformular uma tela densa sem esconder informação nem depender de tooltip.',
    book: 'Refactoring UI, hierarquia, espaçamento, tipografia e cor; CSS in Depth, responsividade.',
    complements: [official.css, official.wcag], exampleFile: '../../examples/frontend-senior/sistema-interface.md'
  }),
  moduleOf({
    number: 14, part: 'sistemas', id: 'design-system', title: 'Tokens, componentes e governança de design system', level: 'Pleno',
    objective: 'Construir tokens e componentes com variantes finitas, documentação e caminho de migração.',
    prerequisites: ['CSS sustentável', 'Componentes React', 'Acessibilidade'],
    problem: 'Biblioteca de componentes vira depósito de exceções e não reduz divergência entre produto e código.',
    concepts: ['Design tokens', 'Primitive e semantic tokens', 'Variant model', 'Composition', 'Versionamento e adoção'],
    internals: ['Token semântico desacopla intenção de valor.', 'API de componente define estados válidos.', 'Mudança visual pode ser breaking mesmo sem erro de tipo.'],
    useWhen: ['Há repetição e custo de coordenação entre produtos.', 'Governança e adoção têm donos.'],
    avoidWhen: ['Não crie design system para um único mockup.', 'Não exponha prop booleana para cada exceção.'],
    contrast: { bad: 'Centralizar CSS e chamar de sistema.', good: 'Alinhar linguagem, tokens, componentes, documentação, métricas e migração.' },
    tradeoffs: ['Padronização reduz liberdade local.', 'Compatibilidade desacelera mudanças.', 'Tokens demais perdem semântica.'],
    production: 'Seis flags booleanas geram combinações impossíveis e cada produto sobrescreve o CSS do botão.',
    risks: ['API combinatória.', 'Breaking change visual.', 'Adoção sem medição.'],
    checklist: ['Tokens expressam intenção?', 'Variantes inválidas são impossíveis?', 'A11y é baseline?', 'Mudanças têm changelog?', 'Adoção e exceções são medidas?'],
    interview: [['Júnior/Pleno', 'Qual a diferença entre token primitivo e semântico?', 'Valor bruto versus intenção contextual.'], ['Sênior/Staff', 'Quando não criar um design system?', 'Analisar escala, repetição, custo e governança.']],
    exercises: [['Básico', 'Extrair tokens de três telas.', 'Mapa primitivo/semântico.'], ['Aplicado', 'Projetar API de Button sem flags conflitantes.', 'Types e stories.'], ['Sênior', 'Planejar migração sem big bang.', 'Codemod, versão e métricas.']],
    challenge: 'Evoluir tema e densidade sem alterar o contrato semântico dos consumidores.',
    book: 'CSS in Depth, componentes e arquitetura; Refactoring UI, sistemas visuais.',
    complements: [official.css, official.apg], exampleFile: '../../examples/frontend-senior/sistema-interface.md'
  }),
  moduleOf({
    number: 15, part: 'sistemas', id: 'estrategia-testes', title: 'Estratégia de testes e regressão visual', level: 'Pleno',
    objective: 'Validar comportamento, acessibilidade, contrato e aparência com o menor acoplamento possível.',
    prerequisites: ['Testes JavaScript', 'Componentes React', 'CI'],
    problem: 'Snapshots amplos e mocks internos deixam suite lenta, frágil e indiferente a falhas do usuário.',
    concepts: ['Unit, integration e E2E', 'User-centric queries', 'Contract testing', 'Visual regression', 'Test isolation'],
    internals: ['Mock altera o sistema que está sendo provado.', 'E2E atravessa fronteiras e aumenta variância.', 'Snapshot visual precisa de ambiente determinístico.'],
    useWhen: ['Testar por risco e comportamento observável.', 'Manter poucos fluxos E2E críticos.'],
    avoidWhen: ['Não teste detalhes de implementação.', 'Não atualize snapshot sem explicar a mudança.'],
    contrast: { bad: 'Buscar coverage máximo com mocks de tudo.', good: 'Cobrir invariantes perto do código e jornadas críticas no navegador real.' },
    tradeoffs: ['Mais realismo custa tempo.', 'Mock rápido perde integração.', 'Visual regression gera revisão humana.'],
    production: 'Suite unitária passa, mas login falha apenas em WebKit e o botão invisível continua clicável.',
    risks: ['Teste flaky.', 'Seletor por classe.', 'Snapshot aceito no automático.'],
    checklist: ['Teste observa o que usuário observa?', 'Fluxos críticos rodam em browsers-alvo?', 'A11y automática está integrada?', 'Flakiness é tratada?', 'Falha produz trace útil?'],
    interview: [['Júnior/Pleno', 'O que deve ser testado E2E?', 'Jornadas críticas e fronteiras de alto risco.'], ['Sênior/Staff', 'Como reduzir flakiness?', 'Determinismo, locators, auto-wait, isolamento e observabilidade.']],
    exercises: [['Básico', 'Reescrever teste por papel e nome.', 'Teste resistente a refactor.'], ['Aplicado', 'Cobrir quatro estados e teclado.', 'Suite de integração.'], ['Sênior', 'Criar E2E cross-browser com trace.', 'Falha reproduzível em CI.']],
    challenge: 'Detectar uma regressão funcional, visual e acessível sem triplicar o tempo do pipeline.',
    book: 'Learning React, testes; Inclusive Components, comportamento verificável.',
    complements: [official.testingLibrary, official.playwright], exampleFile: '../../examples/frontend-senior/sistema-interface.md'
  }),
  moduleOf({
    number: 16, part: 'producao', id: 'core-web-vitals', title: 'Core Web Vitals e orçamento de experiência', level: 'Sênior',
    objective: 'Medir LCP, INP e CLS em laboratório e campo e priorizar a causa que afeta usuários reais.',
    prerequisites: ['Rendering pipeline', 'RUM', 'Estatística descritiva'],
    problem: 'Um score de laboratório vira meta enquanto distribuição, dispositivo e jornada real ficam invisíveis.',
    concepts: ['LCP', 'INP', 'CLS', 'Lab versus field', 'Performance budget'],
    internals: ['Métricas de campo agregam experiências heterogêneas.', 'INP observa interações ao longo da visita.', 'CLS depende de mudanças sem expectativa do usuário.'],
    useWhen: ['Combinar diagnóstico de laboratório com impacto de campo.', 'Definir orçamento por jornada e dispositivo.'],
    avoidWhen: ['Não use um número agregado sem segmentação.', 'Não otimize score sacrificando acesso ou produto.'],
    contrast: { bad: 'Perseguir 100 no Lighthouse.', good: 'Segmentar p75, reproduzir a jornada e atacar a causa dominante com guardrails.' },
    tradeoffs: ['Instrumentação adiciona bytes.', 'Amostragem reduz custo e detalhe.', 'Otimização local pode deslocar problema.'],
    production: 'A mediana é boa, mas usuários em Android de entrada sofrem INP alto após abrir um filtro complexo.',
    risks: ['Métrica sem contexto.', 'Terceiro fora do orçamento.', 'Regressão escondida na média.'],
    checklist: ['Campo e laboratório são separados?', 'p75 está segmentado?', 'Jornada crítica tem orçamento?', 'Causa aparece no trace?', 'Guardrails evitam regressão?'],
    interview: [['Júnior/Pleno', 'Qual a diferença entre LCP, INP e CLS?', 'Conteúdo, resposta à interação e estabilidade.'], ['Sênior/Staff', 'Como priorizar regressão que afeta 10%?', 'Segmento, valor, severidade, confiança e custo.']],
    exercises: [['Básico', 'Medir as três métricas.', 'Relatório reproduzível.'], ['Aplicado', 'Corrigir uma long task que degrada INP.', 'Trace antes/depois.'], ['Sênior', 'Definir budget com alertas.', 'SLO de experiência e rollback.']],
    challenge: 'Melhorar p75 do pior segmento sem degradar conversão, acessibilidade ou estabilidade.',
    book: 'High Performance Browser Networking, latência e entrega; CSS in Depth, renderização.',
    complements: [official.webVitals, official.performance], exampleFile: '../../examples/frontend-senior/producao-web.md'
  }),
  moduleOf({
    number: 17, part: 'producao', id: 'assets-cache-offline', title: 'Assets, cache e resiliência de rede', level: 'Sênior',
    objective: 'Projetar carregamento e cache que reduzam bytes sem servir estado privado, obsoleto ou irrecuperável.',
    prerequisites: ['HTTP cache', 'Build', 'Service Worker básico'],
    problem: 'Cache agressivo melhora benchmark e depois prende versão quebrada ou mistura dados entre usuários.',
    concepts: ['Content hashing', 'Cache-Control', 'Stale-while-revalidate', 'Service Worker', 'Offline fallback'],
    internals: ['Asset imutável depende de URL versionada.', 'Service Worker é proxy programável e persiste entre versões.', 'Navegação e asset pedem estratégias diferentes.'],
    useWhen: ['Versionar recursos estáticos e definir fallback.', 'Testar instalação, atualização e rollback.'],
    avoidWhen: ['Não cacheie resposta autenticada por padrão.', 'Não use cache-first para HTML mutável sem estratégia de versão.'],
    contrast: { bad: 'Adicionar PWA e cachear tudo.', good: 'Classificar recursos, declarar validade e provar atualização e recuperação.' },
    tradeoffs: ['Offline aumenta estados e testes.', 'Long cache exige hashing confiável.', 'Prefetch consome dados e bateria.'],
    production: 'Um service worker antigo serve shell incompatível com chunks novos e a aplicação entra em loop de erro.',
    risks: ['Cache poisoning.', 'Versão presa.', 'Prefetch desperdiçado.'],
    checklist: ['Assets imutáveis têm hash?', 'HTML recebe estratégia distinta?', 'Dados privados ficam fora?', 'Atualização foi testada?', 'Fallback informa limitações?'],
    interview: [['Júnior/Pleno', 'Por que index.html não deve usar o mesmo cache de um chunk?', 'Mutabilidade, descoberta e versionamento.'], ['Sênior/Staff', 'Como recuperar um service worker defeituoso?', 'Versão, skipWaiting com cuidado, purge e fallback.']],
    exercises: [['Básico', 'Configurar cache para asset versionado.', 'Headers verificados.'], ['Aplicado', 'Criar fallback offline seguro.', 'Teste navegador desconectado.'], ['Sênior', 'Simular atualização incompatível.', 'Runbook e correção.']],
    challenge: 'Garantir atualização atômica do shell sem impedir rollback nem expor dados.',
    book: 'High Performance Browser Networking, cache e transporte; JavaScript: The Definitive Guide, APIs Web.',
    complements: [official.http, official.performance], exampleFile: '../../examples/frontend-senior/producao-web.md'
  }),
  moduleOf({
    number: 18, part: 'producao', id: 'seguranca-cliente', title: 'Segurança e privacidade no cliente', level: 'Sênior',
    objective: 'Reduzir XSS, exposição de segredo, abuso de sessão e vazamento de dados com controles testáveis.',
    prerequisites: ['HTTP e browser security model', 'Autenticação', 'Build e deploy'],
    problem: 'O cliente é tratado como fronteira confiável e dados sensíveis entram em DOM, storage, logs ou bundle.',
    concepts: ['Same-origin policy', 'XSS e sinks', 'CSP', 'Cookies e storage', 'Supply chain'],
    internals: ['Tudo enviado ao navegador é observável pelo usuário.', 'CSP reduz impacto, mas não corrige origem da injeção.', 'Autorização precisa ocorrer no servidor.'],
    useWhen: ['Codificar saída pelo contexto e reduzir sinks.', 'Limitar terceiros, dados e dependências.'],
    avoidWhen: ['Não armazene segredo no bundle.', 'Não use hidden UI como autorização.'],
    contrast: { bad: 'Sanitizar genericamente e confiar no frontend.', good: 'Eliminar sink, validar no servidor, aplicar CSP e testar abuso.' },
    tradeoffs: ['CSP estrita exige inventário e nonce/hash.', 'Terceiros agregam valor e risco.', 'Menos persistência reduz conveniência.'],
    production: 'Um parâmetro de busca chega a innerHTML e um script de analytics lê token persistido no localStorage.',
    risks: ['DOM XSS.', 'Source map público sensível.', 'Dependência comprometida.'],
    checklist: ['Nenhum segredo está no cliente?', 'Sinks perigosos foram inventariados?', 'CSP é testada?', 'Autorização existe no servidor?', 'PII não entra em log ou storage indevido?'],
    interview: [['Júnior/Pleno', 'Por que esconder botão não autoriza?', 'Cliente é controlado pelo usuário; servidor decide acesso.'], ['Sênior/Staff', 'Como implantar CSP sem parar o produto?', 'Report-only, inventário, nonce/hash, rollout e métricas.']],
    exercises: [['Básico', 'Explorar e corrigir DOM XSS.', 'Teste negativo.'], ['Aplicado', 'Criar CSP em report-only.', 'Relatório e plano de bloqueio.'], ['Sênior', 'Threat model de dados no navegador.', 'Fluxos, limites e mitigações.']],
    challenge: 'Remover um terceiro privilegiado sem perder a métrica de produto que o justificava.',
    book: 'JavaScript: The Definitive Guide, segurança e plataforma; Eloquent JavaScript, browser e HTTP.',
    complements: [official.csp, official.security], exampleFile: '../../examples/frontend-senior/producao-web.md'
  }),
  moduleOf({
    number: 19, part: 'producao', id: 'observabilidade-rum', title: 'Observabilidade frontend e RUM', level: 'Sênior',
    objective: 'Correlacionar erro, interação, versão e request sem coletar conteúdo sensível.',
    prerequisites: ['Logs, métricas e traces', 'Core Web Vitals', 'Privacidade'],
    problem: 'Stack trace sem contexto e replay indiscriminado não explicam impacto e podem criar vazamento.',
    concepts: ['RUM', 'Error boundary', 'Source map', 'Correlation ID', 'Sampling e privacy'],
    internals: ['Stack minificado exige source map compatível com a versão.', 'Trace precisa propagar contexto entre navegador e API.', 'Cardinalidade e replay podem carregar PII.'],
    useWhen: ['Medir jornada, versão e segmento.', 'Correlacionar sintomas do cliente ao backend.'],
    avoidWhen: ['Não registre payload por conveniência.', 'Não trate ausência de erro como sucesso da jornada.'],
    contrast: { bad: 'Enviar console inteiro e session replay de todos.', good: 'Definir eventos mínimos, redaction, amostragem e correlação por hipótese.' },
    tradeoffs: ['Mais contexto melhora diagnóstico e aumenta risco.', 'Amostragem controla custo e perde raridade.', 'Source map ajuda suporte e expõe estrutura.'],
    production: 'Erro cresce após deploy, mas o dashboard mistura versões e o trace não carrega o ID da navegação.',
    risks: ['PII em breadcrumb.', 'Cardinalidade alta.', 'Source map errado.'],
    checklist: ['Eventos têm versão?', 'PII é removida antes do envio?', 'Jornada e request correlacionam?', 'Sampling é documentado?', 'Alerta aponta ação e owner?'],
    interview: [['Júnior/Pleno', 'O que um error boundary não captura?', 'Eventos assíncronos, servidor e falhas fora da árvore.'], ['Sênior/Staff', 'Como observar sem violar privacidade?', 'Minimização, redaction, consentimento, retenção e acesso.']],
    exercises: [['Básico', 'Adicionar versão e contexto a um erro.', 'Evento inspecionado.'], ['Aplicado', 'Correlacionar interação e API.', 'Trace ponta a ponta.'], ['Sênior', 'Definir esquema RUM com privacy budget.', 'Contrato e teste de redaction.']],
    challenge: 'Diagnosticar regressão por segmento usando menos dados pessoais, não mais.',
    book: 'JavaScript: The Definitive Guide, APIs do navegador; Effective TypeScript, contratos de eventos.',
    complements: [official.observability, official.webVitals], exampleFile: '../../examples/frontend-senior/producao-web.md'
  }),
  moduleOf({
    number: 20, part: 'producao', id: 'arquitetura-evolucao', title: 'Arquitetura frontend, migração e liderança', level: 'Staff',
    objective: 'Conduzir evolução modular com limites, métricas e rollback antes de escolher monorepo ou microfrontends.',
    prerequisites: ['Produto operável', 'ADRs e métricas', 'Design system e pipeline'],
    problem: 'Estrutura organizacional vira framework técnico e migrações grandes consomem entrega sem resultado.',
    concepts: ['Modular monolith', 'Package boundaries', 'Monorepo', 'Microfrontends', 'Strangler migration'],
    internals: ['Boundary útil limita dependência e mudança.', 'Microfrontend distribui deploy e também runtime, UX e governança.', 'Monorepo centraliza grafo, não garante modularidade.'],
    useWhen: ['Começar por ownership e fluxo de mudança.', 'Migrar por fatia reversível com métrica.'],
    avoidWhen: ['Não adote microfrontend por número de times.', 'Não reescreva sem baseline e caminho de rollback.'],
    contrast: { bad: 'Escolher arquitetura pela escala imaginada.', good: 'Medir acoplamento, lead time, falhas e autonomia; aplicar a menor fronteira eficaz.' },
    tradeoffs: ['Autonomia aumenta divergência.', 'Compartilhamento reduz duplicação e amplia coordenação.', 'Isolamento runtime cobra performance e consistência.'],
    production: 'Três times publicam runtimes duplicados, navegação inconsistente e incidentes sem owner após dividir a aplicação.',
    risks: ['Distributed monolith.', 'Big-bang rewrite.', 'Governança sem feedback.'],
    checklist: ['Limites seguem capacidade de negócio?', 'Dependências são verificadas?', 'Migração é reversível?', 'Métricas de fluxo existem?', 'UX e operação têm owner?'],
    interview: [['Júnior/Pleno', 'O que torna um módulo realmente isolado?', 'Contrato, dependência permitida, dados e ownership.'], ['Sênior/Staff', 'Quando microfrontends se justificam?', 'Autonomia de deploy real, fronteiras estáveis e custo total aceitável.']],
    exercises: [['Básico', 'Mapear dependências de uma feature.', 'Grafo e ciclos.'], ['Aplicado', 'Extrair módulo com regra de import.', 'Build bloqueia violação.'], ['Sênior', 'Planejar migração strangler.', 'Fases, métricas e rollback.']],
    challenge: 'Reduzir acoplamento e lead time sem duplicar runtime, experiência e plataforma.',
    book: 'Effective TypeScript, desenho de APIs; Learning React, composição; Refactoring UI, consistência do sistema.',
    complements: [official.react, official.next], exampleFile: '../../examples/frontend-senior/producao-web.md'
  }),
  moduleOf({
    number: 21, part: 'fronteira', id: 'navegador-por-dentro', title: 'O navegador por dentro: parsing, estilo, layout, paint e composição', level: 'Expert',
    objective: 'Explicar um travamento de interface pelo estágio do pipeline de renderização em que ele nasce, e escolher a correção pelo mecanismo em vez de por tentativa.',
    prerequisites: ['Módulo 4 (event loop e DOM)', 'Módulo 5 (caminho crítico)', 'Leitura de perfil no DevTools'],
    problem: '"A página está travando" é onde a maioria das investigações começa e termina. Sem saber que existem cinco estágios distintos, e que cada um é disparado por coisas diferentes, a correção vira sorteio: mexe no CSS, adiciona `will-change`, e às vezes funciona.',
    concepts: ['Parsing: HTML em DOM, CSS em CSSOM, e por que script bloqueia', 'Style: casar seletor com elemento e calcular valores', 'Layout (reflow): calcular geometria', 'Paint: gerar as listas de desenho', 'Composite: montar camadas na GPU', 'Quais propriedades disparam quais estágios', 'Layout thrashing: ler depois de escrever', 'CSS containment e isolamento de custo', 'Main thread versus compositor thread'],
    internals: [
      'O pipeline é em cascata: mudar geometria refaz layout, paint e composição; mudar cor pula o layout; mudar apenas transform e opacity pode ficar só na composição, fora da main thread.',
      'Layout thrashing acontece quando se lê uma propriedade geométrica depois de escrever: o navegador é obrigado a recalcular o layout na hora para responder. Num laço, isso vira um reflow por iteração.',
      'A composição roda em outra thread: por isso uma animação de transform continua fluida mesmo com a main thread ocupada — e por isso animar `left` e animar `transform` têm custos de ordens de grandeza diferentes.',
      '`content-visibility` e `contain` dizem ao navegador que o custo de um subárvore pode ser pulado; é dos poucos casos em que uma linha de CSS muda o comportamento do motor.'
    ],
    useWhen: ['Use transform e opacity para animar.', 'Use containment para isolar o custo de listas longas.', 'Use o perfil de performance antes de qualquer hipótese.'],
    avoidWhen: ['Não anime propriedades que disparam layout.', 'Não espalhe `will-change`: cada camada custa memória de GPU.', 'Não conclua por impressão — o pipeline é observável.'],
    contrast: {
      bad: 'Animar `left` num laço e, ao notar o travamento, adicionar `will-change: left` em tudo — criando camadas demais e trocando um problema por outro.',
      good: 'Trocar por `transform: translateX()`, confirmar no perfil que a animação saiu da main thread e medir o ganho.'
    },
    tradeoffs: ['Promover a camada tira da main thread e consome memória de GPU.', 'Containment isola custo e restringe o que pode transbordar.', 'Menos camadas é mais barato em memória e pode significar mais trabalho na main thread.'],
    production: 'Uma lista longa trava ao rolar. O perfil mostra layout dominando cada quadro: o componente lê `offsetHeight` de cada item logo depois de aplicar estilo, forçando reflow por item. A correção separa leituras e escritas em duas fases e acrescenta `content-visibility: auto` — o custo por quadro cai sem alterar uma linha de lógica.',
    risks: ['Layout thrashing em laço', 'Camadas demais esgotando memória de GPU', 'Animar propriedade que dispara layout', 'Otimizar sem perfil'],
    checklist: ['Qual estágio domina o quadro no perfil?', 'A animação usa transform e opacity?', 'Há leitura geométrica depois de escrita?', 'Quantas camadas foram promovidas?', 'A correção foi medida?'],
    interview: [
      ['Pleno/Sênior', 'Por que animar `transform` é mais barato que animar `left`?', '`left` altera a geometria e dispara layout, paint e composição a cada quadro, na main thread. `transform` pode ser resolvido só na etapa de composição, em outra thread, sem recalcular geometria.'],
      ['Sênior/Expert', 'Uma lista trava ao rolar e o JavaScript aparece leve no perfil. Como investiga?', 'Verifico qual estágio domina o quadro. Se é layout, procuro leitura geométrica após escrita (thrashing) e separo as fases; se é paint, procuro sombras, filtros e áreas grandes repintadas; se é composição, conto camadas. Só então mexo no código.']
    ],
    exercises: [
      ['Aplicado', 'Provocar layout thrashing de propósito e corrigi-lo separando leituras e escritas.', 'Perfil antes e depois, com o tempo de layout por quadro.'],
      ['Aplicado', 'Comparar a mesma animação feita com `left` e com `transform`.', 'Quadros por segundo e o estágio dominante em cada versão.'],
      ['Sênior', 'Aplicar containment a uma lista longa e medir o efeito por quadro.', 'Medição com e sem `content-visibility`, e o limite encontrado.']
    ],
    challenge: 'Pegar o travamento mais conhecido da sua aplicação e nomear o estágio exato do pipeline em que ele nasce, com o perfil como prova.',
    book: 'High Performance Browser Networking (o caminho até o primeiro byte); CSS in Depth (layout, cascata e o custo de cada propriedade).',
    complements: [official.renderingPath, official.renderingNG, official.containment, official.devtoolsPerf], exampleFile: '../../examples/frontend-senior/fronteira/pipeline-renderizacao.md'
  }),
  moduleOf({
    number: 22, part: 'fronteira', id: 'react-por-dentro', title: 'React por dentro: fiber, lanes e o scheduler', level: 'Expert',
    objective: 'Explicar o que o React faz entre o `setState` e o pixel, e usar isso para diagnosticar re-render e travamento em vez de espalhar memoização.',
    prerequisites: ['Módulo 7 (render e identidade)', 'Módulo 8 (estado e concorrência)', 'Módulo 21'],
    problem: 'Quando a interface trava, a reação padrão é envolver tudo em memoização até melhorar. Isso adiciona código, esconde a causa e frequentemente não resolve — porque o problema não era o número de re-renders, era o trabalho de cada um, ou a prioridade errada.',
    concepts: ['Fiber como unidade de trabalho interrompível', 'Fase de render (pura, descartável) versus commit (efeitos, síncrona)', 'Lanes: prioridade por tipo de atualização', 'Por que a fase de render pode ser abandonada e refeita', 'Transitions e o que `useTransition` realmente faz', 'Reconciliação e o papel da key', 'Batching automático', 'Profiler: interpretar o que ele mostra'],
    internals: [
      'A árvore de fibers é uma lista encadeada percorrida de forma interrompível: é isso que permite ao React parar no meio, atender um evento de entrada e retomar depois — algo impossível com recursão pura.',
      'A fase de render pode ser jogada fora e refeita; por isso ela precisa ser pura. Efeito colateral ali é a origem dos bugs mais difíceis de reproduzir.',
      'Lanes classificam a urgência: digitar é urgente, resultado de busca não é. `useTransition` marca a atualização como interrompível, e não a torna mais rápida — torna a interface responsiva enquanto ela acontece.',
      'Com o React Compiler estável, a memoização manual passou a ser exceção: ela ainda importa onde o compilador não alcança, e espalhar `useMemo` por reflexo virou custo sem retorno.'
    ],
    useWhen: ['Use transition para atualização derivada e cara.', 'Use o Profiler para descobrir o que custa, antes de memoizar.', 'Use key para comunicar identidade, não para forçar remontagem por acidente.'],
    avoidWhen: ['Não memoize por reflexo — meça primeiro, e considere o compilador.', 'Não faça efeito colateral na fase de render.', 'Não use índice como key em lista que reordena.'],
    contrast: {
      bad: 'Envolver trinta componentes em memoização porque "estava lento", sem nunca abrir o Profiler.',
      good: 'Abrir o Profiler, achar o componente que custa 40 ms por render, descobrir que ele recalcula uma lista inteira e corrigir o cálculo — sem nenhuma memoização nova.'
    },
    tradeoffs: ['Memoização evita trabalho e custa comparação e memória.', 'Transition mantém a interface responsiva e adia o resultado.', 'Dividir componente melhora granularidade e aumenta o número de peças.'],
    production: 'Um campo de busca trava ao digitar: cada tecla refiltra dez mil itens de forma síncrona. A correção não é memoizar — é marcar a filtragem como transition, para que a digitação continue prioritária, e reduzir o custo do filtro. O Profiler mostra a diferença antes e depois.',
    risks: ['Memoização espalhada escondendo a causa', 'Efeito colateral na fase de render', 'Key instável remontando subárvore inteira', 'Conclusão tirada sem Profiler'],
    checklist: ['O Profiler foi aberto antes de otimizar?', 'O custo está no número de renders ou no trabalho de cada um?', 'A atualização cara é urgente ou pode ser transition?', 'Há efeito colateral na fase de render?', 'As keys são estáveis?'],
    interview: [
      ['Pleno/Sênior', 'Por que a fase de render do React precisa ser pura?', 'Porque ela pode ser interrompida, descartada e refeita. Efeito colateral ali executa mais de uma vez, ou executa e é descartado, gerando comportamento não reproduzível.'],
      ['Sênior/Expert', '`useTransition` deixa a atualização mais rápida?', 'Não. Ele a marca como interrompível e de baixa prioridade: o trabalho leva o mesmo tempo, mas a interface continua respondendo a entradas urgentes enquanto ele acontece. Ganha-se responsividade percebida, não throughput.']
    ],
    exercises: [
      ['Aplicado', 'Usar o Profiler para identificar o componente mais caro de uma tela e a causa do custo.', 'Captura do Profiler com a causa identificada e a correção aplicada.'],
      ['Aplicado', 'Converter uma atualização cara em transition e medir o efeito na responsividade da entrada.', 'INP ou latência de digitação antes e depois.'],
      ['Sênior', 'Remover memoizações desnecessárias de um componente e provar, com medição, que nada piorou.', 'Medição antes e depois, com o número de linhas removidas.']
    ],
    challenge: 'Encontrar na sua base o `useMemo` mais antigo, descobrir se ele ainda serve para alguma coisa e remover se não servir.',
    book: 'Learning React (modelo mental de componente e render) — com a ressalva de que a edição do acervo antecede a renderização concorrente; a referência corrente é a documentação oficial.',
    complements: [official.reactFiber, official.reactConcurrent, official.reactProfiler, official.viewTransitions], exampleFile: '../../examples/frontend-senior/fronteira/react-render-lab.md'
  }),
  moduleOf({
    number: 23, part: 'fronteira', id: 'reatividade-do-zero', title: 'Escrever reatividade do zero: signals, grafo de dependências e agendamento', level: 'Expert',
    objective: 'Implementar um sistema reativo granular em menos de cem linhas e usar isso para entender o que cada framework escolheu — e o que cobrou por isso.',
    prerequisites: ['Módulo 3 (closures)', 'Módulo 22', 'Noção de grafo e de fila'],
    problem: 'Framework reativo parece mágica enquanto não se escreve um. Depois de escrever, as decisões de React, Vue, Solid e Svelte deixam de ser preferência e viram trade-offs comparáveis — e a escolha de ferramenta passa a ter argumento.',
    concepts: ['Sinal: valor com lista de dependentes', 'Rastreamento automático de dependências em tempo de leitura', 'Computado: derivado com cache e invalidação', 'Efeito: folha do grafo que produz efeito colateral', 'Propagação push versus pull', 'Agendamento: lote, microtask e o problema do glitch', 'Descarte e vazamento de assinatura', 'Reatividade granular versus reconciliação de árvore'],
    internals: [
      'O truque central é simples: ao ler um sinal dentro de um efeito, o efeito em execução se registra como dependente. Não é preciso declarar dependência — ela é observada em tempo de execução.',
      'Glitch é o estado inconsistente intermediário: um computado que depende de dois sinais pode ser recalculado duas vezes se a propagação for ingênua, e chegar a ver um valor novo com outro velho. Resolver isso é agendamento, não reatividade.',
      'Reatividade granular atualiza exatamente o nó que mudou; reconciliação de árvore recalcula e compara. A primeira é mais eficiente por atualização e distribui o custo pelo grafo; a segunda é mais simples de raciocinar.',
      'Efeito que não é descartado mantém referência ao sinal para sempre — é a fonte clássica de vazamento em sistemas reativos.'
    ],
    useWhen: ['Implemente para entender, não para usar em produção.', 'Use o conhecimento ao escolher framework com argumento técnico.', 'Use ao depurar comportamento reativo inesperado em qualquer biblioteca.'],
    avoidWhen: ['Não substitua um framework maduro pelo seu experimento.', 'Não conclua que granular é sempre melhor: depende do padrão de atualização.', 'Não ignore descarte — vazamento aparece só em produção.'],
    contrast: {
      bad: 'Escolher framework por preferência de sintaxe e defender a escolha com adjetivos.',
      good: 'Explicar que um atualiza o nó exato e o outro reconcilia a árvore, e qual dos dois combina com o padrão de atualização da sua aplicação.'
    },
    tradeoffs: ['Granular é eficiente por atualização e espalha complexidade pelo grafo.', 'Reconciliação é simples de raciocinar e recalcula mais.', 'Rastreamento automático é ergonômico e torna a dependência implícita, logo menos visível.'],
    production: 'Um painel com trezentos indicadores atualizados por websocket trava com reconciliação de árvore a cada mensagem. A troca por atualização granular nos nós afetados elimina o travamento — mas só depois de medir, porque a causa poderia igualmente ser a frequência das mensagens, e aí nenhum framework resolveria.',
    risks: ['Efeito sem descarte vazando', 'Glitch por propagação sem agendamento', 'Dependência implícita dificultando o rastreio', 'Reescrever framework em produção'],
    checklist: ['O efeito se registra como dependente ao ler?', 'Há descarte, e ele é chamado?', 'Atualizações são agrupadas antes de propagar?', 'Um computado pode ver estado inconsistente?', 'Entendi o trade-off do framework que uso?'],
    interview: [
      ['Pleno/Sênior', 'Como um sistema de signals sabe quais efeitos reexecutar?', 'Ao ler um sinal dentro de um efeito em execução, o sinal registra esse efeito como dependente. A dependência é observada em tempo de leitura, não declarada.'],
      ['Sênior/Expert', 'Qual a diferença de fundo entre reatividade granular e reconciliação de árvore?', 'Granular sabe exatamente qual nó mudou e atualiza só ele; reconciliação recalcula a árvore e compara para descobrir. A primeira ganha em atualizações pontuais frequentes; a segunda é mais simples de raciocinar e lida melhor com mudanças amplas.']
    ],
    exercises: [
      ['Aplicado', 'Implementar signal, computed e effect com rastreamento automático de dependências.', 'Código com testes de propagação, incluindo dependência condicional.'],
      ['Aplicado', 'Acrescentar agrupamento de atualizações e demonstrar a eliminação do glitch.', 'Teste que falha sem o agendamento e passa com ele.'],
      ['Sênior', 'Comparar o seu sistema com o framework que você usa, num caso de atualização frequente.', 'Medição comparada e a explicação da diferença pelo mecanismo.']
    ],
    challenge: 'Escrever o sistema reativo em menos de cem linhas e explicar, a partir dele, uma decisão de projeto do framework que você usa todo dia.',
    book: 'Eloquent JavaScript (closures e estruturas de dados); You Don’t Know JS Yet: Scope & Closures (o mecanismo que sustenta o rastreamento).',
    complements: [official.signals, official.javascript, official.reactConcurrent], exampleFile: '../../examples/frontend-senior/fronteira/signals.mjs'
  }),
  moduleOf({
    number: 24, part: 'fronteira', id: 'compiladores-front', title: 'Compiladores de front: AST, transformações e o React Compiler', level: 'Expert',
    objective: 'Ler a árvore sintática do próprio código, escrever uma transformação que resolva um problema real e entender o que o React Compiler faz por você.',
    prerequisites: ['Módulo 6 (TypeScript)', 'Módulo 22', 'Noção de árvore e de percurso'],
    problem: 'Todo projeto de front passa por meia dúzia de compiladores — TypeScript, bundler, minificador, agora o React Compiler — e a maioria dos desenvolvedores os trata como caixa-preta. Quando um deles gera algo inesperado, não há por onde começar.',
    concepts: ['Código-fonte, tokens, AST e geração', 'Visitor: percorrer e transformar nós', 'Escopo e binding na análise estática', 'Source map e por que o stack trace aponta para o lugar certo', 'O que o React Compiler analisa e por que precisa das regras dos hooks', 'Memoização automática e o fim do useMemo por reflexo', 'Codemod: migração em escala por transformação', 'Limites da análise estática'],
    internals: [
      'Toda ferramenta do ecossistema faz a mesma sequência: parse para AST, transforma a árvore, gera código. Entender essa sequência torna todas elas inspecionáveis.',
      'O React Compiler consegue memoizar automaticamente porque assume as regras dos hooks: componentes puros, sem chamada condicional. As regras deixaram de ser convenção e viraram a premissa que habilita a otimização.',
      'Source map mapeia posição gerada para posição original; sem ele, o stack trace de produção aponta para código minificado e o diagnóstico morre ali.',
      'Análise estática não resolve tudo: indireção dinâmica, acesso por string computada e efeito colateral escondido são os limites onde o compilador desiste — e é por isso que ele às vezes não otimiza.'
    ],
    useWhen: ['Use codemod para migração que tocaria dezenas de arquivos.', 'Use regra de lint personalizada para travar um padrão específico do time.', 'Use o compilador e remova memoização manual onde ele já cobre.'],
    avoidWhen: ['Não escreva plugin para o que uma função resolve.', 'Não gere código que ninguém consegue depurar.', 'Não desligue as regras dos hooks: elas são a premissa do compilador.'],
    contrast: {
      bad: 'Migrar duzentos arquivos na mão com busca e substituição, introduzindo três erros sutis no caminho.',
      good: 'Escrever um codemod, rodar em um arquivo, revisar, rodar em todos, e revisar o diff completo num único commit.'
    },
    tradeoffs: ['Codemod é rápido e exige entender a AST.', 'Compilador remove trabalho manual e reduz o controle sobre o resultado.', 'Regra de lint automatiza revisão e adiciona atrito quando é rígida demais.'],
    production: 'Uma renomeação de API interna afeta 180 arquivos. Feita na mão, quebra três casos com invocação indireta. Feita por codemod sobre a AST, respeita escopo e binding, e o diff é revisável de uma vez — a diferença entre as duas abordagens é justamente entender que texto e árvore não são a mesma coisa.',
    risks: ['Transformação que ignora escopo e renomeia o símbolo errado', 'Código gerado sem source map', 'Regras dos hooks desligadas quebrando a premissa do compilador', 'Plugin mantido por uma pessoa só'],
    checklist: ['A transformação respeita escopo e binding?', 'Foi testada num arquivo antes de todos?', 'O diff é revisável?', 'Há source map no build?', 'O compilador está habilitado e as regras dos hooks valem?'],
    interview: [
      ['Pleno/Sênior', 'Por que o React Compiler depende das regras dos hooks?', 'Porque ele precisa provar que o componente é puro e que os hooks são chamados sempre na mesma ordem. Sem essa garantia, memoizar automaticamente mudaria o comportamento.'],
      ['Sênior/Expert', 'Quando um codemod é melhor que uma busca e substituição?', 'Sempre que o padrão depender de contexto sintático — escopo, tipo, posição na árvore. Texto não distingue um identificador de uma string que por acaso tem o mesmo conteúdo; a AST sim.']
    ],
    exercises: [
      ['Aplicado', 'Inspecionar a AST de um trecho próprio e identificar os nós de uma construção que você usa todo dia.', 'Captura da árvore com os nós anotados.'],
      ['Aplicado', 'Escrever um codemod que faça uma renomeação respeitando escopo.', 'Transformação testada, com um caso que a busca e substituição erraria.'],
      ['Sênior', 'Habilitar o React Compiler num projeto, remover memoização manual redundante e medir.', 'Medição antes e depois, com as linhas removidas e o que o compilador não cobriu.']
    ],
    challenge: 'Encontrar uma regra de código que seu time repete em revisão e transformá-la numa regra de lint que a verifica sozinha.',
    book: 'Effective TypeScript (o que o compilador de tipos consegue e não consegue provar) — a edição do acervo é a 1ª, anterior às versões recentes do TypeScript.',
    complements: [official.reactCompiler, official.astExplorer, official.babelPlugin, official.typescript], exampleFile: '../../examples/frontend-senior/fronteira/codemod.mjs'
  }),
  moduleOf({
    number: 25, part: 'fronteira', id: 'wasm-gpu', title: 'Sair do JavaScript: WebAssembly, workers e GPU no navegador', level: 'Expert',
    objective: 'Decidir quando o trabalho pesado deve sair da main thread — e do JavaScript — escolhendo entre worker, WebAssembly e GPU por medição.',
    prerequisites: ['Módulo 4 (event loop)', 'Módulo 21', 'Módulo 16 (Core Web Vitals)'],
    problem: 'Computação pesada no cliente trava a interface porque o JavaScript da página roda numa thread só. A reação comum é otimizar o algoritmo até onde der e desistir — pulando três degraus que existem entre isso e "não dá para fazer no navegador".',
    concepts: ['Os degraus: algoritmo → worker → WebAssembly → GPU', 'Worker: outra thread, sem acesso ao DOM', 'Custo de transferência e objetos transferíveis', 'WebAssembly: quando compilar vale a pena', 'O custo de atravessar a fronteira JS↔Wasm', 'SharedArrayBuffer e os requisitos de isolamento', 'WebGPU: computação paralela, não só gráficos', 'Quando a resposta é fazer no servidor'],
    internals: [
      'Worker roda em outra thread e não vê o DOM: a comunicação é por mensagem, e o custo de copiar o dado pode anular o ganho — a menos que se use objeto transferível, que passa a posse em vez de copiar.',
      'WebAssembly ganha em computação numérica densa e previsível; para lógica com muitos objetos e strings, a travessia da fronteira costuma comer o ganho. A regra é a mesma do módulo 24 da trilha de Python: API em lote, não por item.',
      'WebGPU expõe computação paralela de propósito geral, não apenas gráficos — e desde o início de 2026 está disponível nos principais navegadores. O ganho aparece em problemas massivamente paralelos, e some em trabalho sequencial.',
      'Cada degrau adiciona build, depuração mais difícil e um caminho de fallback: o custo não é só de execução.'
    ],
    useWhen: ['Use worker quando o trabalho é pesado e não toca o DOM.', 'Use Wasm quando o cálculo é numérico, denso e já existe biblioteca madura.', 'Considere GPU quando o problema é massivamente paralelo.'],
    avoidWhen: ['Não suba degrau antes de medir o anterior.', 'Não use Wasm para lógica de interface.', 'Não esqueça o fallback: nem todo ambiente suporta tudo.'],
    contrast: {
      bad: 'Reescrever o módulo em Rust porque "JavaScript é lento", sem ter verificado que o laço percorria uma lista onde cabia um índice.',
      good: 'Subir um degrau por vez, medindo cada um, e parar quando o requisito for atendido — registrando onde parou e por quê.'
    },
    tradeoffs: ['Worker libera a main thread e custa serialização e complexidade.', 'Wasm dá desempenho numérico e adiciona toolchain e travessia.', 'GPU dá paralelismo e exige o problema certo e um caminho alternativo.'],
    production: 'Um editor de imagens no navegador trava ao aplicar filtro em imagens grandes. Mover o processamento para um worker com buffer transferível resolve o travamento da interface sem tocar no algoritmo; o Wasm, avaliado depois, traz ganho adicional apenas nos filtros com aritmética densa — e não nos demais.',
    risks: ['Custo de transferência anulando o ganho do worker', 'Travessia JS↔Wasm por item', 'Ausência de fallback', 'Toolchain que só uma pessoa sabe manter'],
    checklist: ['O degrau anterior foi medido?', 'O trabalho realmente precisa acontecer no cliente?', 'A transferência usa objeto transferível?', 'A API cruza a fronteira em lote?', 'Existe fallback quando o recurso não está disponível?'],
    interview: [
      ['Pleno/Sênior', 'Por que mover um cálculo para um worker nem sempre acelera?', 'Porque a comunicação copia o dado por padrão. Se o volume transferido for grande em relação ao cálculo, a cópia domina. Objetos transferíveis passam a posse sem copiar, e mudam a conta.'],
      ['Sênior/Expert', 'Quando você recusaria WebAssembly numa proposta?', 'Quando o degrau anterior não foi medido, quando o trabalho é lógica de interface com muitos objetos e strings (a travessia come o ganho), ou quando o time não tem como manter o toolchain — e também quando a resposta certa é fazer no servidor.']
    ],
    exercises: [
      ['Aplicado', 'Mover um cálculo pesado para um worker e medir o efeito na responsividade da interface.', 'INP ou latência de interação antes e depois, com o custo de transferência isolado.'],
      ['Aplicado', 'Comparar transferência por cópia e por objeto transferível num buffer grande.', 'Medição das duas formas e o ponto em que a diferença passa a importar.'],
      ['Sênior', 'Levar um problema real pelos degraus e registrar o ganho de cada um até atingir o requisito.', 'Tabela ganho × degrau e a justificativa de onde parou.']
    ],
    challenge: 'Escolher o trecho mais pesado do seu cliente e descobrir, com medição, se o degrau certo é worker, Wasm, GPU — ou o servidor.',
    book: 'High Performance Browser Networking (o custo de mover dado); JavaScript: The Definitive Guide (workers e APIs da plataforma).',
    complements: [official.workers, official.wasm, official.wasmBindgen, official.webgpu], exampleFile: '../../examples/frontend-senior/fronteira/degraus-computacao.md'
  }),
  moduleOf({
    number: 26, part: 'fronteira', id: 'offline-first', title: 'Offline-first: service worker, sincronização e colaboração sem perder escrita', level: 'Expert',
    objective: 'Projetar uma aplicação que funciona sem rede e sincroniza sem descartar trabalho do usuário em silêncio.',
    prerequisites: ['Módulo 9 (dados e estados de falha)', 'Módulo 17 (cache e resiliência)', 'Banco de Dados módulo 25 para a convergência'],
    problem: 'Offline costuma ser tratado como estado de erro: mostra-se um aviso e bloqueia-se a interface. Quando alguém tenta fazer melhor, aparece o problema real — duas edições simultâneas, e uma desaparece sem ninguém saber.',
    concepts: ['Service worker como proxy programável', 'Estratégias de cache e qual serve a qual recurso', 'Fila de escrita com persistência local', 'Idempotência e chave de operação', 'Atualização otimista e reconciliação', 'Conflito de dado versus conflito de negócio', 'Convergência sem coordenação, aplicada ao cliente', 'Sinalizar ao usuário o estado real da sincronização'],
    internals: [
      'O service worker intercepta requisições e responde do cache ou da rede: é um proxy que roda no cliente, e um erro nele pode servir conteúdo velho por tempo indeterminado — daí a necessidade de estratégia de atualização deliberada.',
      'Escrita offline precisa de fila persistente: se ela vive em memória, um fechamento de aba perde o trabalho. E cada item precisa de chave de idempotência, porque a sincronização pode reenviar.',
      'Convergência automática resolve conflito de DADO. Conflito de NEGÓCIO — duas pessoas reservando o mesmo recurso — não se resolve por merge, e precisa de decisão explícita. É a mesma distinção do módulo 25 da trilha de Banco de Dados.',
      'A interface precisa dizer a verdade sobre o estado: "salvo localmente" e "salvo no servidor" são estados diferentes, e esconder isso é o que gera perda de confiança quando algo dá errado.'
    ],
    useWhen: ['Use offline-first quando o usuário trabalha em campo ou com rede instável.', 'Use fila persistente sempre que aceitar escrita sem rede.', 'Use convergência automática apenas onde o dado é acumulativo.'],
    avoidWhen: ['Não aceite escrita offline sem fila persistente e chave de idempotência.', 'Não resolva conflito de negócio por merge automático.', 'Não esconda do usuário que algo ainda não foi sincronizado.'],
    contrast: {
      bad: 'Atualização otimista sem fila: a tela mostra salvo, o usuário fecha a aba, e o dado nunca existiu.',
      good: 'Escrita na fila persistente, interface mostrando "aguardando sincronização", e confirmação só depois do servidor responder.'
    },
    tradeoffs: ['Offline-first dá autonomia e adiciona sincronização e conflito.', 'Convergência automática evita fricção e pode violar invariante de negócio.', 'Atualização otimista melhora a percepção e exige reconciliação e reversão.'],
    production: 'Um aplicativo de vistoria em campo perde observações quando dois técnicos editam o mesmo formulário: a sincronização usa "o último que escreve vence". A correção preserva as duas contribuições nos campos acumulativos e passa a exigir resolução explícita nos campos em que só um valor pode valer — o problema era de modelagem, não de rede.',
    risks: ['Escrita perdida em silêncio', 'Service worker servindo conteúdo velho indefinidamente', 'Fila em memória perdida ao fechar a aba', 'Invariante de negócio violada por merge automático', 'Usuário sem visibilidade do estado de sincronização'],
    checklist: ['A fila de escrita é persistente?', 'Toda operação tem chave de idempotência?', 'O usuário vê a diferença entre salvo local e salvo no servidor?', 'Qual campo pode convergir e qual precisa de decisão?', 'Existe caminho para atualizar um service worker preso?'],
    interview: [
      ['Pleno/Sênior', 'Qual o risco de atualização otimista sem fila persistente?', 'A interface confirma o que ainda não aconteceu. Se a aba fechar ou a sincronização falhar em definitivo, o usuário acredita ter salvo algo que não existe.'],
      ['Sênior/Expert', 'Duas pessoas editam o mesmo registro offline. Como você resolve?', 'Separo conflito de dado de conflito de negócio: campos acumulativos podem convergir automaticamente; campos em que só um valor pode valer exigem decisão explícita, com as duas versões mostradas. "Último que escreve vence" descarta trabalho em silêncio e raramente é aceitável.']
    ],
    exercises: [
      ['Aplicado', 'Implementar fila de escrita persistente com chave de idempotência e reenvio.', 'Demonstração de recuperação após fechar e reabrir a aba sem rede.'],
      ['Aplicado', 'Classificar os campos de um formulário entre os que podem convergir e os que exigem decisão.', 'Tabela campo × invariante × estratégia, com a justificativa.'],
      ['Sênior', 'Projetar a sinalização de estado de sincronização e testá-la com usuários ou pares.', 'Protótipo dos estados e o registro do que foi compreendido.']
    ],
    challenge: 'Encontrar no seu produto um lugar em que a interface confirma antes do servidor e medir quanto trabalho isso pode custar ao usuário.',
    book: 'High Performance Browser Networking (comportamento de rede real); Inclusive Components (comunicar estado de forma acessível).',
    complements: [official.serviceWorker, official.indexedDb, official.localFirst], exampleFile: '../../examples/frontend-senior/fronteira/offline-first.md'
  }),
  moduleOf({
    number: 27, part: 'fronteira', id: 'front-em-escala', title: 'Front em escala: micro-frontends, federação e migração incremental', level: 'Staff',
    objective: 'Decidir fronteiras de front por autonomia real de deploy e conduzir migração incremental sem parar a entrega — inclusive decidindo não fragmentar.',
    prerequisites: ['Módulo 20 (arquitetura frontend e migração)', 'Módulo 14 (design system)', 'Arquitetura módulo 15 para a estratégia de migração'],
    problem: 'Micro-frontends são adotados pelo motivo errado — "o repositório está grande" — e pagam-se os custos sem colher o benefício: runtime duplicado, experiência inconsistente e uma plataforma a mais para operar. O benefício real é autonomia de deploy, e ele só existe se as fronteiras acompanharem as equipes.',
    concepts: ['Monólito modular no front como padrão razoável', 'Autonomia de deploy como o único benefício que justifica', 'Composição em build, em servidor e em runtime', 'Federação de módulos e dependências compartilhadas', 'Versão compartilhada: o problema que mais aparece', 'Design system como contrato entre fragmentos', 'Strangler fig aplicado a interface', 'Orçamento de recursos por fragmento'],
    internals: [
      'Cada fragmento carregado em runtime traz seu grafo de dependências: sem compartilhamento cuidadoso, a mesma biblioteca é baixada várias vezes, e o orçamento de recursos estoura sem ninguém perceber.',
      'Compartilhar dependência em runtime resolve o peso e cria acoplamento de versão: atualizar a biblioteca compartilhada passa a exigir coordenação entre times — exatamente o que se queria evitar.',
      'Sem design system compartilhado, a autonomia produz inconsistência visível ao usuário, que é o custo mais caro e o menos mensurado.',
      'Strangler fig no front funciona rota a rota: as duas implementações convivem atrás do roteador, com métrica comparando as duas — a mesma estratégia do módulo 15 da trilha de Arquitetura.'
    ],
    useWhen: ['Fragmente quando times diferentes precisam de fato liberar em ritmos diferentes.', 'Use monólito modular com fronteiras verificadas por build como padrão.', 'Migre rota a rota, com as duas versões convivendo e medidas.'],
    avoidWhen: ['Não fragmente por tamanho de repositório.', 'Não adote runtime distinto por fragmento — o usuário paga.', 'Não migre sem métrica comparando antes e depois.'],
    contrast: {
      bad: 'Seis micro-frontends, três versões da mesma biblioteca de componentes, quatro megabytes de JavaScript e um time de plataforma coordenando cada atualização.',
      good: 'Monólito modular com regras de importação verificadas no build, fragmentado apenas na fronteira em que dois times realmente liberam em ritmos diferentes.'
    },
    tradeoffs: ['Fragmentar dá autonomia de deploy e custa peso, consistência e plataforma.', 'Compartilhar dependência reduz peso e reintroduz acoplamento de versão.', 'Monólito modular é mais simples e limita a autonomia de liberação.'],
    production: 'Uma migração de framework é planejada como reescrita de seis meses. Depois de quatro, nada foi para produção e a versão antiga acumulou mudanças. O replanejamento migra rota a rota atrás do roteador, com as duas convivendo e métricas comparando ambas — a primeira rota vai a produção em duas semanas, e a reescrita deixa de ser aposta.',
    risks: ['Dependência duplicada estourando o orçamento de recursos', 'Inconsistência visual entre fragmentos', 'Acoplamento de versão na biblioteca compartilhada', 'Reescrita grande sem entrega intermediária', 'Plataforma de front sem dono'],
    checklist: ['Que times precisam liberar em ritmos diferentes, nominalmente?', 'Qual o peso total com todos os fragmentos carregados?', 'A biblioteca de componentes é compartilhada e versionada?', 'A migração entrega valor a cada rota?', 'Existe métrica comparando a rota antiga e a nova?'],
    interview: [
      ['Sênior', 'Qual o único benefício que justifica micro-frontends?', 'Autonomia real de deploy entre times que precisam liberar em ritmos diferentes. Tamanho de repositório, preferência de framework e organização de código se resolvem com módulos e regras de importação.'],
      ['Staff', 'Como conduzir a migração de framework de uma aplicação grande sem parar a entrega?', 'Strangler fig por rota: roteador na frente, as duas implementações convivendo, migração de uma rota por vez com métrica comparando desempenho e erro, e critério explícito de parada ou reversão. Reescrita completa só quando a aplicação é pequena o bastante para caber numa entrega.']
    ],
    exercises: [
      ['Aplicado', 'Mapear as fronteiras de deploy reais da sua aplicação e compará-las com a estrutura de código.', 'Mapa times × fronteiras × ritmo de liberação, com as divergências.'],
      ['Aplicado', 'Medir o peso total de JavaScript com todos os fragmentos carregados, incluindo duplicação.', 'Relatório de bundle com as dependências duplicadas identificadas.'],
      ['Sênior', 'Planejar a migração de uma rota com as duas versões convivendo e métrica comparativa.', 'Plano com a rota escolhida, a métrica, o critério de avanço e o de reversão.']
    ],
    challenge: 'Escrever a justificativa de NÃO fragmentar uma aplicação em que isso foi proposto — com o custo de cada opção medido.',
    book: 'Refactoring UI (consistência como propriedade do sistema); Effective TypeScript (contratos entre módulos). A estratégia de migração está na trilha de Arquitetura, módulo 15.',
    complements: [official.moduleFederation, official.baseline, official.next], exampleFile: '../../examples/frontend-senior/fronteira/front-em-escala.md'
  })
]);

export const frontendAssessment = Object.freeze({
  levels: [
    { level: 'Nível 1 · Fundação', expected: 'Entrega documento semântico, estilo responsivo e JavaScript legível.', evidence: 'Página funcional, DevTools e testes básicos.', redFlags: 'Depende de div clicável, altura fixa ou cópia cega.' },
    { level: 'Nível 2 · Aplicado', expected: 'Constrói fluxo tipado com estados de rede e recuperação.', evidence: 'Contrato validado, stories e testes de integração.', redFlags: 'Caminho feliz único, any ou efeito como cola.' },
    { level: 'Nível 3 · Pleno', expected: 'Entrega componentes acessíveis e um sistema visual coerente.', evidence: 'Auditoria WCAG, API de componente e regressão visual.', redFlags: 'Score automático vira prova de acesso.' },
    { level: 'Nível 4 · Sênior', expected: 'Opera desempenho, segurança e observabilidade por impacto.', evidence: 'RUM, threat model, trace e métricas antes/depois.', redFlags: 'Otimiza Lighthouse e ignora usuários reais.' },
    { level: 'Nível 5 · Staff/Principal', expected: 'Evolui arquitetura e organização por fluxo e resultado.', evidence: 'ADRs, migração reversível e métricas de adoção.', redFlags: 'Impõe framework, rewrite ou microfrontend sem problema comprovado.' }
  ],
  caseStudies: [
    {
      id: 'caso-checkout', title: 'Checkout inacessível e ambíguo',
      scenario: 'Conversão cai após novo modal; teclado perde foco e reenvio pode duplicar o pedido.',
      constraints: ['Sem interromper vendas', 'Pedido precisa ser idempotente', 'WCAG 2.2 AA no processo'],
      decisions: ['Restaurar semântica e foco', 'Modelar confirmação e repetição', 'Criar teste E2E com falha'],
      deliverables: ['Fluxo corrigido', 'Teste cross-browser', 'Evidência de teclado', 'Métrica de conversão']
    },
    {
      id: 'caso-inp', title: 'INP alto em dispositivos de entrada',
      scenario: 'Filtros são rápidos em desktop da equipe, mas bloqueiam interação para parte relevante dos usuários.',
      constraints: ['Mesmo resultado de busca', 'Bundle não pode crescer', 'Segmentação por dispositivo'],
      decisions: ['Isolar long task', 'Reduzir trabalho e render', 'Definir budget e guardrail'],
      deliverables: ['Trace', 'RUM segmentado', 'Patch', 'Relatório antes/depois']
    },
    {
      id: 'caso-design-system', title: 'Design system sem adoção',
      scenario: 'Produtos sobrescrevem componentes e seis variantes de botão divergem em acesso e telemetria.',
      constraints: ['Migração incremental', 'Times continuam entregando', 'Compatibilidade documentada'],
      decisions: ['Redesenhar API e tokens', 'Criar caminho de migração', 'Medir adoção e exceções'],
      deliverables: ['Contrato tipado', 'Codemod', 'Changelog', 'Dashboard de adoção']
    },
    {
      id: 'caso-xss', title: 'XSS em conteúdo personalizado',
      scenario: 'Editor permite HTML e um terceiro possui acesso ao token persistido no navegador.',
      constraints: ['Conteúdo rico permanece', 'Sessões ativas precisam de contenção', 'Evidências preservadas'],
      decisions: ['Eliminar ou sanitizar sinks por contexto', 'Conter sessão e terceiro', 'Implantar CSP progressiva'],
      deliverables: ['Threat model', 'Teste negativo', 'CSP', 'Postmortem']
    },
    {
      id: 'caso-migracao', title: 'Rewrite vendido como arquitetura',
      scenario: 'A aplicação entrega lentamente, e a proposta é dividir tudo em microfrontends em seis meses.',
      constraints: ['Entrega não pode parar', 'Dois times independentes', 'Resultado precisa ser mensurável'],
      decisions: ['Medir acoplamento e fluxo', 'Extrair fronteira canário', 'Definir rollback e critério de parada'],
      deliverables: ['Grafo', 'ADR', 'Fatia migrada', 'Métricas de lead time e falha']
    }
  ],
  projects: [
    {
      id: 'entrega-plataforma', evolves: null, title: 'Shell semântico e responsivo',
      objective: 'Criar a fundação Web de um produto com conteúdo e formulário reais.',
      stages: ['Documento e landmarks', 'Layout fluido e conteúdo extremo', 'Interação progressiva', 'Baseline de rede e renderização'],
      acceptance: ['Funciona sem JavaScript no fluxo básico', 'Sem overflow entre 320 e 1920 px', 'Teclado e zoom 200% aprovados', 'Evidência HTTP(S) revisável'],
      seniorSignal: 'Explica como o navegador transforma documento, estilo e script em experiência.'
    },
    {
      id: 'entrega-aplicacao', evolves: 'entrega-plataforma', title: 'Produto React tipado',
      objective: 'Evoluir o shell com autenticação, dados e estados de falha explícitos.',
      stages: ['Contrato unknown → domínio', 'Componentes e estado localizado', 'Quatro estados por fluxo', 'Renderização e cache por rota'],
      acceptance: ['strict sem any silencioso', 'Timeout e sessão expirada são recuperáveis', 'Mutação repetida não duplica efeito', 'Teste de integração cobre estados'],
      seniorSignal: 'Reduz estado e efeitos ao mínimo e prova cada fronteira.'
    },
    {
      id: 'entrega-sistema', evolves: 'entrega-aplicacao', title: 'Sistema de interface inclusivo',
      objective: 'Evoluir o produto com tokens, componentes acessíveis e estratégia de qualidade.',
      stages: ['Auditoria WCAG 2.2', 'Tokens e variantes', 'Widgets com teclado e foco', 'Testes visual, acessível e E2E'],
      acceptance: ['Processo crítico atende AA', 'Variantes inválidas são bloqueadas', 'Regressão visual tem revisão', 'Browsers-alvo executam o fluxo'],
      seniorSignal: 'Equilibra consistência, autonomia, acesso e custo de adoção.'
    },
    {
      id: 'entrega-producao', evolves: 'entrega-sistema', title: 'Experiência operável em produção',
      objective: 'Evoluir o mesmo produto com performance, segurança, RUM e plano arquitetural.',
      stages: ['Budgets de LCP, INP e CLS', 'Cache e CSP', 'RUM com privacidade', 'Migração reversível e game day'],
      acceptance: ['p75 é segmentado e monitorado', 'XSS plantado possui regressão', 'Erro cliente correlaciona com API', 'Revisão D30 confirma retenção e correções'],
      seniorSignal: 'Conecta qualidade técnica, experiência real e fluxo de entrega sem esconder trade-offs.'
    }
  ],
  completion: [
    'Conclui os 20 módulos com ao menos um exercício aplicado e evidência por módulo.',
    'Entrega as quatro fases encadeadas no mesmo repositório e deploy revisável.',
    'Mantém o fluxo crítico sem overflow, com zoom 200%, teclado e WCAG 2.2 AA.',
    'Valida contratos externos, estados de falha, idempotência e browsers-alvo.',
    'Demonstra budgets de LCP, INP e CLS com laboratório e campo segmentado.',
    'Reproduz e corrige uma falha de segurança e uma regressão de produção.',
    'Não marca Dominado antes de evidência validada e revisão D30.',
    'Fronteira (módulos 21–27) é opcional para o gate sênior e obrigatória para reivindicar nível expert.',
    'Fronteira concluída exige: um travamento nomeado pelo estágio do pipeline com o perfil como prova, um diagnóstico de render feito pelo Profiler antes de qualquer memoização, um sistema reativo próprio em menos de cem linhas, um codemod que respeita escopo, um gargalo levado pelos degraus de computação com o ponto de parada justificado, uma fila de escrita offline que não perde trabalho, e uma decisão de fragmentar (ou não) com o peso medido.'
  ]
});

/*
 * Gabarito de autoavaliação. Não substitui a evidência exigida pela rubrica:
 * serve para o estudo solo verificar a resposta antes de concluir o módulo.
 */
export const frontendAnswerKey = frontendModules.map((module) => ({
  module: module.number,
  title: module.title,
  objetivoAtingido: module.objective,
  respostaEsperadaNaEntrevista: (module.interview || []).map((item) => `${item.level}: ${item.expected}`),
  erroMaisComum: module.contrast?.bad || module.risks?.[0] || 'Otimizar sem medir.',
  criterioDeAceite: (module.exercises || []).map((item) => `${item.level} — evidência: ${item.evidence}`),
  sinalDeQueNaoDominou: module.risks || []
}));
