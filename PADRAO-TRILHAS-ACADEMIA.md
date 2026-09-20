# Padrão unificado das trilhas Academia

Versão: 4.1 · Atualizado em 30 de julho de 2026.

Este documento é o anexo normativo para criar, reformular ou revisar uma trilha do Plano Integrado de Estudos.
Ele descreve a arquitetura vigente depois do redesign de três vistas. O conteúdo de uma trilha varia; sua
implementação visual não.

## 0. Como usar este arquivo

Ao anexar este padrão a uma solicitação:

1. informe a trilha, o objetivo e a bibliografia disponível;
2. peça a leitura integral deste arquivo e dos dados existentes antes de qualquer alteração;
3. exija preservação de conteúdo, links, PDFs, âncoras, progresso e evidências;
4. valide Hub, Academia e O Sistema nas larguras definidas aqui;
5. não aceite CSS, renderer, paleta ou contador duplicado.

Antes de editar, faça inventário de:

- `public/trilhas/<track>.html` e suas âncoras;
- `public/trilhas/<track>/*.html`, quando houver Academia;
- `public/data/<track>-advanced.js`;
- livros em `public/pdfs/`;
- registro em `public/data/tracks.js`;
- referências à trilha em `phases.js`, guias, exercícios, sitemap e service worker.

## 1. Resultado obrigatório

Cada trilha participa de três vistas coerentes:

1. **Hub da trilha** — tese, rota de domínio, contrato, visão curricular, referências e roadmap;
2. **Academia** — partes e módulos renderizados a partir de dados, quando a natureza da trilha for curricular;
3. **O Sistema** — dashboard integrado em `public/index.html`.

Treino é a exceção deliberada: permanece registro de treino, sono e revisão. Ele usa os mesmos tokens, paleta,
componentes e navegação, mas não recebe artificialmente um renderer de módulos.

### 1.1 Invariantes

- tema escuro, títulos em Syne e metadados em IBM Plex Mono;
- título principal com gradiente derivado de `--accent` e `--accent-2`;
- identidade visual definida somente em `tracks-palette.css`;
- Hub implementado somente por `hub.css` e `hub.js`;
- Academia implementada somente por `academy.css` e `academy.js`;
- componentes com prefixo `ac-*`;
- seções editoriais com `doc-section`;
- primeira seção editorial canônica: `id="resumo"`, título **Resumo Executivo** e badge **Visão geral**, com o mesmo rótulo no nav e na sidebar;
- cabeçalho global (`renderSystemHeader`) exibe o **nome curto da trilha** como título; em O Sistema, exibe **Dashboard Principal** e não mostra os botões de vista;
- retorno ao dashboard pelo componente `.nav-back` com rótulo **← Dashboard**, definido uma única vez em `base.css`;
- `slug = data-track = diretório = identificador canônico`;
- contadores derivados de dados;
- links públicos e PDFs preservados;
- nenhuma regra de design por trilha fora da paleta;
- nenhuma classe de componente prefixada pela trilha;
- zero overflow horizontal no documento em 390 px;
- tabela ou código largo com rolagem própria;
- foco visível, teclado, contraste AA e `prefers-reduced-motion`.

## 2. Identidades canônicas

| Identificador | Cor principal | Academia |
|---|---|---|
| `java` | `#34d399` | sim |
| `ia` | `#a78bfa` | sim |
| `arquitetura` | `#f472b6` | sim |
| `python` | `#60a5fa` | sim |
| `aws` | `#f59e0b` | sim |
| `devops` | `#fb7185` | sim |
| `frontend` | `#06b6d4` | sim |
| `bancos` | `#2dd4bf` | sim |
| `git` | `#fb923c` | sim |
| `ingles` | `#818cf8` | sim |
| `matematica` | `#e879f9` | sim |
| `sec` | `#f87171` | sim |
| `financeiro` | `#a3e635` | sim |
| `treino` | `#facc15` | não; registro |

Aliases legados ficam exclusivamente em `TRACK_ALIASES`, dentro de `public/data/tracks.js`:

```js
{ py: 'python', db: 'bancos', math: 'matematica', fin: 'financeiro' }
```

Não emita aliases em HTML, URLs, CSS ou dados novos. Segurança mantém `sec` como identificador definitivo.

O plano global anterior ao redesign ainda usa algumas formas curtas como chaves internas em fases e progresso
persistido. Elas não são identidades públicas e só podem ser mantidas quando a alteração apagaria estado já salvo;
a conversão na fronteira continua pertencendo ao registro/adaptador central.

## 3. Arquitetura de arquivos

```text
public/
├── index.html
├── assets/
│   ├── css/
│   │   ├── tokens.css
│   │   ├── tracks-palette.css
│   │   ├── base.css
│   │   ├── system.css
│   │   ├── hub.css
│   │   └── academy.css
│   └── js/
│       ├── core/
│       │   ├── nav.js
│       │   ├── public-url.js
│       │   ├── render.js
│       │   ├── system-header.js
│       │   └── pwa.js
│       └── pages/
│           ├── dashboard.js
│           ├── trilha.js
│           ├── hub.js
│           └── academy.js
├── data/
│   ├── tracks.js
│   ├── academy-data-factory.js
│   └── <track>-advanced.js
└── trilhas/
    ├── <track>.html
    └── <track>/
        ├── <parte-1>.html
        └── ...
```

É proibido criar:

- CSS exclusivo de Hub ou Academia;
- renderer de Hub ou módulo por trilha;
- nova folha de componentes paralela;
- bloco crescente de `body[data-track]` fora da tabela de paletas;
- cópia de `academy.js`, `hub.js`, `academy.css` ou `hub.css`.

## 4. Camadas visuais

### 4.1 `tokens.css`

Centraliza apenas valores globais e semânticos:

- escala tipográfica fluida;
- espaçamento, ritmo e largura de conteúdo;
- raios;
- superfícies e painéis;
- texto principal e secundário;
- bordas e sombras;
- estados de sucesso, aviso, perigo e informação;
- transições, foco e redução de movimento.

Cores neutras e de estado pertencem aos tokens. Não use fallback literal para um token já existente. Tokens de estado
cujo valor coincide com uma cor de trilha (ex.: `--state-validated`, `--review-architecture`) referenciam
`var(--track-*)` em vez de repetir o hexadecimal.

### 4.2 `tracks-palette.css`

É a única fonte de identidade cromática. Cada trilha fornece:

```css
[data-track="<track>"] {
  --accent: var(--track-<track>);
  --accent-2: <cor de apoio>;
  --accent-ink: <cor de texto sobre o destaque>;
}
```

Componentes consomem `--accent`, `--accent-2`, `--accent-ink` e `--accent-line`. Bordas, glows e fundos sutis usam
`color-mix()`. Não repita hexadecimais ou `rgba()` de identidade em HTML, JavaScript ou CSS de componentes.

Este arquivo também concentra, declarada **uma única vez**, a paleta auxiliar de UI usada fora da identidade de
trilha: cores de apoio (`--ui-blue`, `--ui-teal`, `--ui-amber`, `--ui-sky`, `--ui-violet`), a escala de maestria
(`--mastery-studying`, `--mastery-practiced`, `--mastery-mastered`) e a escala das 12 fases (`--phase-1` … `--phase-12`,
que reutilizam `var(--track-*)` onde a cor coincide). **Regra de ouro estendida:** nenhum hexadecimal ou `rgba()` de
marca pode existir fora deste arquivo — inclusive em dados. `config.js`, `milestones.js` e estilos inline em JavaScript
referenciam essas variáveis por `var(...)`, nunca literais; para alfa, use `color-mix()` em vez de sufixo hex.

### 4.3 `hub.css` e `academy.css`

Esses arquivos definem todo o layout das trilhas. Seletores aceitos:

- `.track-page`, `.is-hub`, `.is-academy`;
- `[data-track]`, `[data-part]`;
- `.doc-section` e utilitários editoriais compartilhados;
- componentes `ac-*`.

Uma diferença estrutural deve ser expressa por dados ou por um estado genérico, nunca por um seletor permanente
como `.java-*`, `.ia-*`, `.fe-*` ou equivalente.

### 4.4 `system.css`

Atende somente à vista integrada O Sistema. Ele consome os mesmos tokens e as variáveis `--track-*` da paleta.
Não redefine identidades.

## 5. Vocabulário de componentes

Use nomes por responsabilidade:

| Classe | Responsabilidade |
|---|---|
| `ac-hub-hero` | hero do Hub |
| `ac-hero-layout` / `ac-hero-copy` | composição do hero |
| `ac-eyebrow` | rótulo mono |
| `ac-route-map` | mapa Rota de domínio |
| `ac-route-map__header` / `__flow` | cabeçalho e etapas da rota |
| `ac-part-grid` / `ac-part-card` | grade e card de partes |
| `ac-module-grid` / `ac-module-card` | grade e card de módulos |
| `ac-stat` / `ac-progress` | métricas derivadas |
| `ac-library` / `ac-book-reference` | biblioteca |
| `ac-callout` | informação contextual |
| `ac-navigation` / `ac-view-nav` | navegação estrutural |
| `ac-system-header` / `ac-system-brand` | cabeçalho global e marca (nome curto da trilha / "Dashboard Principal") |
| `ac-track-switcher` | seletor de trilhas na vista O Sistema |
| `nav-back` | retorno ao dashboard (definido em `base.css`, rótulo "← Dashboard") |
| `nav-group-label` | rótulo de grupo do nav (eyebrow de categoria, com divisor entre grupos) |
| `nav-ver` | subtítulo discreto do topo do nav |
| `ac-source-link` | ação ou fonte técnica |

Use `doc-section`, `doc-section-heading`, `doc-grid-2`, `doc-table` e `table-wrap` para conteúdo editorial.
Não use `.section`, `.hero` ou `.grid2` nas trilhas.

## 6. Hub da trilha

### 6.1 Cabeçalho mínimo

```html
<link href="../assets/vendor/bootstrap.min.css" rel="stylesheet">
<link href="../assets/css/tokens.css" rel="stylesheet">
<link href="../assets/css/tracks-palette.css" rel="stylesheet">
<link href="../assets/css/base.css" rel="stylesheet">
<link href="../assets/css/hub.css?v=<versao>" rel="stylesheet">
```

```html
<body class="track-page is-hub" data-track="<track>">
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <header class="track-hero-page ac-hub-hero">...</header>
  <nav aria-label="Navegação da trilha">...</nav>
  <main id="conteudo">...</main>
  <footer>...</footer>
  <script type="module" src="../assets/js/pages/hub.js?v=<versao>"></script>
</body>
```

### 6.2 Ordem editorial recomendada

1. **Resumo Executivo** — tese e resultado (`id="resumo"`, título "Resumo Executivo", badge "Visão geral"; mesmo rótulo no nav e na sidebar);
2. rota de domínio;
3. contrato: pré-requisitos, objetivos e conclusão;
4. prática verificável;
5. mapa das partes;
6. decisões, internals e trade-offs;
7. produção, operação e falhas;
8. projetos encadeados;
9. biblioteca e referências;
10. gate final e roadmap.

Cada seção precisa de `id` estável quando existir link interno para ela.

### 6.3 Contadores

Marque **todos** os pontos de exibição com `data-ac-count`, inclusive hero, badges de seção e o nome no nav — nenhum
número de contagem pode ficar escrito à mão na shell:

```html
<strong data-ac-count="modules">—</strong>
<strong data-ac-count="parts">—</strong>
<strong data-ac-count="books">—</strong>
<strong data-ac-count="projects">—</strong>
<strong data-ac-count="questions">—</strong>
```

`hub.js` (`setDerivedCounters`) resolve os dados e preenche os contadores derivados: `modules`, `parts`, `books`,
`projects`, `questions`, `cases` e `exercises`. Não escreva quantidades em JavaScript ou HTML quando elas puderem
ser derivadas.

## 7. Shell da Academia

Cada parte tem uma shell fina. Ela não contém módulos escritos no HTML.

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Parte · Academia</title>
  <link href="../../assets/vendor/bootstrap.min.css" rel="stylesheet">
  <link href="../../assets/css/tokens.css" rel="stylesheet">
  <link href="../../assets/css/tracks-palette.css" rel="stylesheet">
  <link href="../../assets/css/base.css" rel="stylesheet">
  <link href="../../assets/css/academy.css?v=<versao>" rel="stylesheet">
</head>
<body class="track-page is-academy" data-track="<track>" data-part="<parte>">
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <header class="track-hero-page">...</header>
  <nav aria-label="Navegação da Academia">
    <a class="sitenav-brand" id="academyBrand" href="../<track>.html">
      <span id="moduleTotal"></span>
    </a>
    <nav class="ac-view-nav" id="viewNav" aria-label="Vistas do projeto"></nav>
  </nav>
  <main id="conteudo"></main>
  <footer>...</footer>
  <script type="module" src="../../assets/js/pages/academy.js?v=<versao>"></script>
</body>
</html>
```

Requisitos:

- `data-track` canônico;
- `data-part` igual à chave declarada em `academy.parts`;
- `#conteudo`, `#academyBrand`, `#moduleTotal` e `#viewNav`;
- nenhum `<style>` inline;
- nenhum módulo ou contador duplicado na shell.

### 7.1 Páginas de referência estáticas

Uma trilha pode ter páginas de referência não curriculares — fora das três vistas — como
`public/trilhas/aws/certificacoes.html`. Elas seguem o mesmo sistema visual, sem duplicá-lo:

- reutilizam `tokens.css`, `tracks-palette.css`, `base.css` e `academy.css`;
- usam `body.track-page.is-academy` com `data-track` canônico, `doc-section` e componentes `ac-*`;
- **não** recebem `data-part` nem o renderer de módulos; o conteúdo é estático e revisável;
- inicializam com um módulo mínimo que reutiliza os núcleos compartilhados
  (`renderSystemHeader` + `initNav` + `registrarServiceWorker`), sem CSS ou renderer próprio;
- links externos são HTTPS e oficiais; a página entra em `public/sitemap.xml`.

Não crie CSS, script de página ou componente específico para uma página de referência.

## 8. Registro e dados

### 8.1 `TRACK_REGISTRY`

Toda Academia deve possuir:

```js
<track>: {
  label: 'Nome completo',
  shortLabel: 'Nome curto',
  brand: 'Nome de marca',
  dataFile: '<track>-advanced.js',
  exports: {
    academy: '<track>Academy',
    modules: '<track>Modules',
    books: '<track>Books',
    assessment: '<track>Assessment'
  },
  academy: true
}
```

Metadados realmente necessários à resolução ficam no registro. Layout e cor não.

### 8.2 Exports mínimos

```js
export const trackAcademy = {
  title: '...',
  subtitle: '...',
  parts: {
    fundamentos: {
      page: 'fundamentos.html',
      label: 'Fundamentos',
      description: '...',
      prerequisites: ['...'],
      objectives: ['...']
    },
    avaliacao: { ... }
  }
};

export const trackModules = [];
export const trackBooks = {};
export const trackAssessment = {
  levels: [],
  cases: [],
  projects: [],
  completion: []
};
```

Use `academy-data-factory.js` para Academias compatíveis com o schema padrão. Uma trilha rica pode estender o
schema, desde que `academy.js` trate a extensão de modo genérico.

### 8.3 Schema mínimo de módulo

```js
{
  number: 1,
  part: 'fundamentos',
  id: 'identificador-estavel',
  level: 'Base',
  title: 'Título',
  objective: 'Implementar ... com critério observável ...',
  problem: 'Problema real que o módulo resolve.',
  prerequisites: ['...'],
  concepts: ['...'],
  internals: ['...'],
  contrasts: ['...'],
  production: ['...'],
  exercises: [{ title: '...', task: '...', evidence: '...' }],
  interview: ['...'],
  references: ['chave-do-livro']
}
```

Integridade:

- `number` sequencial;
- `id` único;
- `part` existente;
- objetivo iniciado por verbo de ação;
- ao menos uma prática verificável;
- pergunta de defesa;
- referência rastreável;
- conteúdo especial representado por campo, não por um renderer clonado.

## 9. Renderer compartilhado

`academy.js`:

1. lê `body.dataset.track` e `body.dataset.part`;
2. resolve a identidade em `tracks.js`;
3. importa dinamicamente o arquivo de dados;
4. reutiliza `core/render.js` e `core/public-url.js`;
5. valida exports, parte e módulos;
6. deriva módulos, exercícios, perguntas, casos, projetos, partes e livros;
7. renderiza apenas classes `ac-*`;
8. constrói navegação das três vistas e aplica `aria-current`;
9. mostra erro claro de dados sem gerar warning desnecessário.

`hub.js` faz a mesma resolução para o Hub, atualiza contadores e navegação e respeita `academy:false`.

Não introduza números de currículo, nomes de arquivos de dados ou exceções de layout por trilha nesses renderers.

## 10. Conteúdo didático

### 10.1 Objetivos observáveis

Pelo menos 80% dos objetivos começam com verbo mensurável: analisar, aplicar, avaliar, construir, diagnosticar,
explicar, implementar, medir, modelar, operar, projetar, resolver, validar ou verificar.

Evite objetivos como “entender”, “conhecer” ou “aprender” sem uma saída observável.

### 10.2 Contrato de cada parte

Toda parte declara:

- pré-requisitos;
- capacidades ao concluir;
- prática;
- evidência esperada;
- ligação com a parte anterior e seguinte.

### 10.3 Avaliação

Toda Academia inclui:

- rubrica Júnior, Pleno, Sênior e Expert;
- ao menos cinco critérios de conclusão;
- casos sob restrições;
- no mínimo dois projetos evolutivos;
- gate que proíbe “Dominado” sem evidência validada e revisão D30.

Estados:

```text
Não iniciado → Em estudo → Praticado → Validado → Dominado
```

`Validado` exige URL HTTP(S). `Dominado` exige revisão D30. Revisões distinguem conceito, código e arquitetura.

### 10.4 Projetos e labs

Os 12 labs do plano global evoluem o mesmo artefato por fase. Projetos da Academia também registram a relação
`evolves` com o projeto anterior. Não crie entregas isoladas que descartem decisões, testes ou evidências anteriores.

## 11. Livros e recursos

Cada livro local:

- existe fisicamente sob `public/pdfs/`;
- possui caminho público relativo à raiz, sem `file://`;
- consta no objeto `books`;
- aparece na biblioteca da trilha;
- preserva título, edição e relação com módulos;
- responde HTTP 200.

Links são resolvidos por `public-url.js`. Não monte caminhos com profundidade fixa dentro dos dados.

Atualize `public/pdfs/BIBLIOGRAFIA.md` ao adicionar, mover ou remover PDFs. Fontes oficiais externas devem ser HTTPS.

## 12. Responsividade e acessibilidade

Valide 390, 768, 1024 e 1440 px.

Critérios:

- `document.documentElement.scrollWidth === clientWidth`;
- títulos não cortam nem colidem;
- cards não se sobrepõem;
- navegação longa possui scroll próprio e controles;
- tabelas ficam em `.table-wrap` com `overflow-x:auto`;
- `pre` e código largo rolam internamente;
- textos bilíngues quebram sem destruir a grade;
- skip link funcional;
- landmarks `header`, `nav`, `main` e `footer`;
- foco `:focus-visible`;
- ordem de foco coerente;
- links e botões distinguíveis;
- `aria-current="page"` na vista ativa;
- contraste WCAG AA;
- estados não dependem somente de cor;
- movimento reduzido respeitado.

## 13. SEO, cache e URLs

- preserve URLs públicas e âncoras existentes;
- inclua as shells em `public/sitemap.xml`;
- inclua Hub, partes, CSS, JS e dados no service worker;
- incremente a versão do cache ao alterar assets compartilhados;
- durante a validação use query de cache busting ou resposta `no-store`;
- nunca considere resultado em cache como evidência final.

## 14. Validação obrigatória

Execute:

```bash
node scripts/validate-content.mjs
node scripts/validate-http.mjs
node --check public/assets/js/pages/hub.js
node --check public/assets/js/pages/academy.js
git diff --check
```

O validador deve comprovar:

- 14 IDs canônicos;
- aliases somente no mapa central;
- 13 Academias e Treino como registro;
- shells e referências locais existentes;
- nenhum CSS ou renderer específico;
- nenhuma classe legada;
- paletas corretas;
- contadores e gates;
- PDFs presentes;
- 80% de objetivos observáveis;
- 12 labs encadeados.

No navegador, valide Hub, cada parte, avaliação, biblioteca e O Sistema; meça overflow real, confira o console,
navegue por teclado e teste os links de vista, âncoras, PDFs, hover, foco e reduced motion.

## 15. Sequência de criação ou reformulação

1. inventariar conteúdo, dados, páginas, livros, links e integrações;
2. escolher o identificador canônico;
3. cadastrar paleta;
4. cadastrar `TRACK_REGISTRY`;
5. criar ou adaptar `<track>-advanced.js`;
6. manter o Hub e converter sua marcação para `doc-section` e `ac-*`;
7. criar somente as shells necessárias;
8. ligar Hub e shells aos renderers compartilhados;
9. atualizar bibliografia, sitemap e service worker;
10. remover imports, classes, aliases e arquivos comprovadamente substituídos;
11. executar validação estática, HTTP, sintaxe e matriz visual;
12. registrar divergências e evidências no relatório.

Não deixe o arquivo antigo “por segurança” depois de comprovar que não há consumidores.

## 16. Checklist de aceite

### Arquitetura

- [ ] `slug`, `data-track`, diretório e registro são iguais.
- [ ] A cor existe somente em `tracks-palette.css`.
- [ ] Hub usa `hub.css` e `hub.js`.
- [ ] Academia usa `academy.css` e `academy.js`.
- [ ] Não existe CSS, renderer ou classe de componente por trilha.
- [ ] Seções usam `doc-section`; componentes usam `ac-*`.
- [ ] Primeira seção canônica: `id="resumo"`, título "Resumo Executivo", badge "Visão geral" (igual no nav e na sidebar).
- [ ] Cabeçalho global mostra o nome da trilha; sem marca "Sistema unificado" nem subtítulo "um academy.css…".
- [ ] Contadores marcados com `data-ac-count` em todos os pontos; nenhum número escrito à mão.
- [ ] Cor de marca só em `tracks-palette.css`, inclusive nos dados (`config.js`, `milestones.js`).

### Conteúdo

- [ ] Pré-requisitos, objetivos e conclusão estão explícitos.
- [ ] Pelo menos 80% dos objetivos são observáveis.
- [ ] Módulos incluem problema, internals, trade-offs, produção e prática.
- [ ] Projetos evoluem o artefato anterior.
- [ ] Rubricas e gates de evidência/D30 estão presentes.

### Navegação e recursos

- [ ] As três vistas aparecem e têm estado ativo correto.
- [ ] Botão de retorno "← Dashboard" (`.nav-back`) presente e com estilo padronizado.
- [ ] Âncoras e links internos funcionam.
- [ ] PDFs e recursos respondem HTTP 200.
- [ ] Sitemap e service worker estão atualizados.
- [ ] Console não contém erros nem warnings evitáveis.

### Layout e acessibilidade

- [ ] 390, 768, 1024 e 1440 px foram testados.
- [ ] Documento sem overflow horizontal.
- [ ] Tabelas e código largo têm scroll próprio.
- [ ] Títulos, cards e textos bilíngues não se sobrepõem.
- [ ] Skip link, foco, teclado, landmarks e `aria-current` funcionam.
- [ ] Contraste AA e reduced motion foram verificados.

## 17. Referências vivas do repositório

- arquitetura e aliases: `public/data/tracks.js`;
- tokens: `public/assets/css/tokens.css`;
- paletas: `public/assets/css/tracks-palette.css`;
- Hub: `public/assets/css/hub.css` e `public/assets/js/pages/hub.js`;
- Academia: `public/assets/css/academy.css` e `public/assets/js/pages/academy.js`;
- helpers: `public/assets/js/core/render.js` e `public/assets/js/core/public-url.js`;
- validação: `scripts/validate-content.mjs` e `scripts/validate-http.mjs`;
- evidência da migração: `RELATORIO-REDESIGN.md`.

## 18. Definição de pronto

Uma trilha está pronta quando integra as três vistas sem criar uma nova cópia do sistema visual, preserva conteúdo e
recursos, deriva suas métricas dos dados, usa identidade canônica, atende os gates didáticos, não produz overflow nem
erro de console e passa integralmente pelas validações deste padrão.
