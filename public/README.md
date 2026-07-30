# Plano Integrado de Estudos — site estático

Plano sequencial de 36 meses para Desenvolvedor Backend Java sênior: **12 fases · 156 semanas · ~6.000h**.

O princípio que organiza tudo: **a fase define o conteúdo ativo, e o conteúdo ativo define a rotina** — nunca o contrário. Uma trilha marcada como inativa na fase corrente não ocupa nenhum bloco da rotina diária.

## Estrutura

```txt
public/
├── index.html                  dashboard (markup apenas — o JS vive em módulos)
├── README.md
│
├── data/                       ⭐ FONTE ÚNICA DE VERDADE
│   ├── config.js               CONFIG global, paleta de fases, ciclos, ciclo mensal
│   ├── tracks.js               registro canônico, aliases temporários e cards de navegação
│   ├── phases.js               as 12 fases (P), inglês por fase e helpers de fase ativa
│   ├── routine.js              dias da semana, foco diário e grades (seg–dom)
│   ├── pdfs.js                 PDFs próprios + bibliografia (21 livros, só referência)
│   ├── milestones.js           regras, certificações AWS e sincronização
│   ├── track-guides.js         pré-requisitos, objetivos e critérios das trilhas
│   ├── track-exercises.js      exercícios e evidências esperadas por trilha
│   ├── learning-path.js        mapa explícito de dependências
│   ├── interviews.js           12 simulados progressivos
│   ├── academy-data-factory.js schema compartilhado das Academias novas
│   └── *-advanced.js           conteúdo, módulos, casos, rubricas, projetos e livros
│
├── assets/
│   ├── css/
│   │   ├── tokens.css          ⭐ tokens neutros e semânticos
│   │   ├── tracks-palette.css  ⭐ identidade cromática das 14 trilhas
│   │   ├── base.css            reset, tipografia e progresso
│   │   ├── system.css          componentes da vista “O Sistema”
│   │   ├── hub.css             Hub compartilhado das 14 trilhas
│   │   └── academy.css         Academia compartilhada
│   └── js/
│       ├── core/               render · search · nav · storage · pwa
│       ├── features/           routine · tracks · phases · sync · active-phase · track-roadmap · track-guide · track-exercises ·
│       │                       progress · review · history · charts · backup ·
│       │                       certifications · checklist · today · global-search · recovery ·
│       │                       dependency-map · interviews
│       └── pages/              dashboard.js · trilha.js · hub.js · academy.js
│   └── vendor/                 Bootstrap e fontes autohospedados (STUDY-067)
│
├── trilhas/                    14 Hubs + 65 shells de Academia; Treino permanece registro
├── examples/java21-senior/     exemplos Java 21 compiláveis e smoke test
└── pdfs/                       12 PDFs próprios + BIBLIOGRAFIA.md

scripts/
├── serve.mjs                   servidor estático local sem dependências
└── validate-content.mjs        valida os critérios DIDATIC P0–P3
```

### Sobre a contagem de trilhas

São **14 páginas de trilha**, não 15. A página `blog.html` foi removida; o produto integrador agora é o **DevCore**, evoluído diretamente pelos 12 labs descritos em `data/phases.js`, sem duplicar uma página de conteúdo.

`ia.html` é a visão geral da trilha. A Academia de IA usa uma fonte única (`data/ia-advanced.js`) e seis partes em `trilhas/ia/`: fundamentos matemáticos/Python, dados/ML, deep learning/visão/NLP, LLMs/generativa, produção/governança e prática expert/avaliação. São 30 módulos, 7 projetos encadeados e um único cronograma integrado ao plano.

`java.html` continua como visão geral e ganhou a Academia Java 21+: 20 módulos renderizados a partir de
`data/java-advanced.js` em quatro páginas (`fundamentos`, `runtime`, `producao` e `avaliacao`). O percurso inclui
60 exercícios, 40 perguntas, cinco casos e dois capstones encadeados.

Em `data/phases.js` existem 15 chaves de conteúdo por fase (`java`, `dsa`, `db`, `git`, `arquitetura`, `devops`, `sec`, `pratica`, `frontend`, `py`, `ia`, `math`, `fin`, `ingles`, `aws`). Nem toda chave tem página própria: `dsa` e `pratica` aparecem apenas no dashboard e na rotina.

## Como rodar localmente

**É obrigatório servir por HTTP.** O dashboard usa ES Modules, e abrir `index.html` direto pelo `file://` falha por política de CORS do navegador.

```bash
node scripts/serve.mjs 5599
```

Depois acesse `http://localhost:5599`.

## Arquitetura

Regra central: **conteúdo em `data/`, comportamento em `assets/js/`, estrutura no HTML.** Nenhum dado do plano deve viver dentro de uma função de render.

| Camada | Responsabilidade |
|---|---|
| `data/` | Os fatos do plano. Alterar o número de fases aqui reflete em todas as páginas. |
| `core/` | Utilitários sem conhecimento do domínio: escaping, busca, storage. |
| `features/` | Render de cada área do dashboard. Importa de `data/` e `core/`. |
| `pages/` | Um arquivo por página. Só orquestra: chama os renders na ordem certa. |

Sem build, sem bundler, sem `node_modules`. ES Modules nativos funcionam na Vercel e em qualquer servidor estático.

### A fase ativa comanda a rotina

O ponto central do plano, implementado em `features/active-phase.js`:

```txt
fase atual (persistida em localStorage)
   ↓
phases.js informa quais trilhas estão ativas e o conteúdo de cada uma
   ↓
a grade da rotina é anotada: cada bloco mostra o que aquele slot
significa NA FASE CORRENTE
```

O seletor de fase fica no topo da aba **Rotina diária**. Trocar de fase muda o conteúdo dos blocos sem mudar a grade: o mesmo bloco de segunda-feira é "endpoint com Spring" na Fase 2 e "refatoração hexagonal" na Fase 7. Blocos de trilha inativa aparecem marcados, com a fase em que a trilha entra.

Helpers disponíveis em `data/phases.js`: `faseporId`, `conteudoDaFase`, `trilhaAtiva`, `trilhasAtivas`, `faseDeEntrada` e `chaveTrilha`.

### Contrato e roadmap das páginas de trilha

Cada página declara sua identidade em `<body data-track="...">`. O módulo `pages/trilha.js` lê essa chave e injeta no topo o contrato da trilha — pré-requisitos, objetivos e critérios observáveis de conclusão — vindo de `data/track-guides.js`. Em `#phaseRoadmap`, injeta também o roadmap das 12 fases vindo de `data/phases.js`.

Antes disso, o roadmap era escrito à mão em cada página, no modelo antigo de 8 fases — e por isso nenhuma delas jamais foi atualizada. Agora não há como dessincronizar: mudar uma fase muda as 14 páginas.

As chaves usadas em `data-track` são normalizadas por `ALIAS_TRILHA` (`architecture` → `arquitetura`, `database` → `db`, `english` → `ingles`, `seguranca` → `sec`, `financeiro` → `fin`, `matematica` → `math`, `python` → `py`).

### Navegação compartilhada (`core/nav.js`)

Busca por seção, scrollspy, back-to-top, rolagem suave e a barra horizontal de seções viviam numa IIFE copiada nas 14 páginas de trilha — que já haviam divergido entre si (`backToTop` vs `btt`, `is-visible` vs `show`, limiares de 400/420/500px, e matematica sem scrollspy). Tudo isso agora está em `core/nav.js`, chamado uma vez por `pages/trilha.js`.

O módulo é tolerante a essas diferenças por detecção de recurso: cada comportamento só liga se seus elementos existirem, o botão de topo aceita ambos os ids e classes, e o seletor de seções cai de `[data-search-section]` para `.section[id]` quando o primeiro não existe (o caso de matematica.html).

### Interação sem globais (`event delegation`)

Os filtros de fase e trilha do dashboard não usam mais `window.filterPhase`/`window.filterTrack` nem `onclick` inline. Os botões declaram a intenção em `data-phase` e `data-track-filter`, e um único listener por container resolve o clique. O estado ativo é marcado por `aria-pressed`, não por comparação do texto visível.

### Persistência (`core/storage.js`)

Wrapper obrigatório sobre `localStorage` — nunca acesse a API direto, pois em modo anônimo ou com cota cheia ela lança e derruba o render. Toda operação é `try/catch` com fallback; o dado é gravado com `schemaVersion` e recusado na leitura se a versão não bater. `serializar`/`desserializar` centralizam o formato; `exportarTudo`/`importarTudo` cobrem backup em JSON.

### Progresso, revisão e certificações (aba "Progresso")

Tudo salvo em `localStorage`, só neste navegador. Além de progresso, revisão, certificações e fase atual, o backup inclui o modo da rotina, o histórico semanal desse modo e os resultados dos simulados.

- **Objetivos observáveis** (`data/phases.js`) — os 298 tópicos contáveis são convertidos na fonte única para verbo de ação + critério observável, de modo que roadmap, busca, rotina e revisão sempre exibam o mesmo objetivo. O conjunto inclui os nove padrões DSA antes ausentes.
- **Domínio** (`features/progress.js`) — cada objetivo tem id `trilha:fase:índice` e percorre `Não iniciado → Em estudo → Praticado → Validado → Dominado`. O progresso é ponderado pelos cinco níveis. `Validado` exige URL de evidência; `Dominado` exige evidência e D30. Cada troca de URL preserva o histórico das evidências anteriores.
- **Revisão D0/D1/D7/D30** (`features/review.js`) — praticar um objetivo registra o D0 e agenda D1; a view "Revisões de hoje" diferencia exercícios de **conceito**, **código** e **arquitetura**, com uma ação própria para cada marco. Marcar como revisado avança D1→D7→D30. A conclusão de D30 fica registrada no objetivo e, se ele já estiver validado, promove para `Dominado`.
- **Certificações** (`features/certifications.js`) — só CLF-C02 e SAA-C03, com status, data-alvo e passos de preparo persistidos.
- **Checklist** (`features/checklist.js`) — os 28 checkboxes de autoavaliação de `financeiro.html` agora persistem por posição.
- **Fase atual** — o card da fase corrente ganha o selo "▸ FASE ATUAL" no dashboard, e trocar de fase no seletor (aba Rotina) move o destaque e atualiza o progresso global.
- **Simulados** (`features/interviews.js`) — 12 entrevistas progressivas, uma por fase. “Realizado” exige nota e URL de gravação, feedback ou relatório.

O evento `progress:change`/`review:change` mantém dashboard e páginas de trilha em sincronia sem recarregar.

### A view "Hoje" (aba inicial)

`features/today.js` é a primeira coisa que a aplicação mostra. Cruza o dia da semana (relógio do navegador), a fase ativa e a fila de revisão para responder **o que estudar agora**:

```txt
Hoje · 21 de julho          Fase 1
Terça                       Fundamentos, Java Core e SQL

Backend Java/Spring — testes e refino

PRINCIPAL          COMPLEMENTAR        INGLÊS
Refatoração…       Arquitetura…        Inglês técnico…
(conteúdo real da fase corrente em cada card)

0 revisões · 0% progresso · ver rotina completa
```

Trocar a fase no seletor muda o conteúdo dos cards. No domingo, a view vira um aviso de descanso em vez de blocos de estudo.

### Continuidade e dependências

- **Três modos de rotina** (`features/recovery.js`) — Ideal (38h), Mínima (12h) e Recuperação (5h). O modo vale para a semana corrente; duas semanas mínimas consecutivas disparam revisão obrigatória do escopo da fase.
- **Mapa de dependências** (`features/dependency-map.js`) — mostra a cadeia Base → Backend → Entrega → Segurança → Operação → Arquitetura → Escala → Produto, além das cinco trilhas transversais.
- **Exercícios nas páginas** (`features/track-exercises.js`) — cada trilha apresenta três tarefas práticas e a evidência esperada logo após seu contrato didático.

### Busca global e navegação

- **Busca global** (`features/global-search.js`) — o campo do topo indexa trilhas, PDFs e objetivos observáveis, agrupando os resultados. A tecla <kbd>/</kbd> foca o campo de qualquer lugar.
- **Trilhas relacionadas** — cada página de trilha termina com links para as trilhas vizinhas no plano (Java → Banco → Arquitetura → Segurança), definidas em `trilhasRelacionadas` (`data/tracks.js`).
- **Ordem das abas** — "Hoje" é a aba inicial e "Sincronização" subiu da 8ª para a 3ª posição.

### Histórico, evolução e backup

- **Histórico diário** (`features/history.js`) — registra objetivos que chegaram a `Praticado` e revisões por dia. Alimenta o gráfico e a contagem de dias seguidos.
- **Evolução** (`features/charts.js`) — SVG gerado à mão, sem biblioteca: barras de objetivos praticados por semana (8 semanas) e heatmap de atividade (30 dias). Aparece só quando há dados reais — não há valores de exemplo.
- **Backup** (`features/backup.js`) — exporta todo o `localStorage` do plano em JSON e restaura em outra máquina. Como o estado vive só no navegador, esse é o único caminho de saída.

### Sem dependências externas

Bootstrap e as três famílias de fonte foram **autohospedados** em `assets/vendor/` (600 KB). O argumento clássico a favor de CDN — cache compartilhado entre sites — deixou de valer quando os navegadores passaram a particionar cache por origem. Hoje autohospedar é estritamente melhor: sem request a terceiros, sem tracking, e é o que torna o modo offline possível.

Só o Mermaid (diagramas em `sec.html`) segue em CDN: ~1 MB para uma única página não compensa, e a degradação é graciosa.

### Offline / PWA

`sw.js` + `manifest.webmanifest` fazem a aplicação funcionar sem rede — verificado com o servidor desligado: view "Hoje", progresso e navegação seguem funcionando.

Estratégia deliberadamente conservadora:

| Recurso | Estratégia | Motivo |
|---|---|---|
| HTML | network-first | online você **sempre** vê a versão nova; o cache é só o plano B |
| CSS/JS/fontes | cache-first | são estáveis e o ganho de velocidade é real |

**Ao publicar mudanças, suba a constante `VERSAO` em `sw.js`** — é o que dispara a limpeza do cache antigo. Todos os módulos ES precisam estar em `ESSENCIAIS`: um import que falha derruba o módulo inteiro, e offline não há rede para buscá-lo.

### SEO

`sitemap.xml` (22 URLs), `robots.txt`, mais Open Graph e `canonical` nas páginas. A URL base (`https://study-plan.vercel.app`) está no topo de `sitemap.xml` e no `robots.txt` — **troque nos dois se o domínio publicado for outro**.

Se preferir manter o plano fora dos buscadores (é um documento de carreira pessoal), o `robots.txt` traz a linha alternativa comentada.

### Acessibilidade

- `<main id="conteudo">` e skip-link ("Pular para o conteúdo") nas 22 páginas.
- Foco visível consistente via `:focus-visible`, sem penalizar quem usa mouse.
- `--text3` corrigido de `#64748b` (3.98:1, falhava WCAG AA) para `#8592a6` (6.0:1).
- `@media (prefers-reduced-motion: reduce)` desliga animações e o scroll suave.
- Tabs com `role="tab"`/`role="tabpanel"`, `aria-controls` e `aria-selected` mantido em sincronia.
- Modos de rotina usam grupo de botões com `aria-pressed`; formulários de entrevista e evidência expõem erros em regiões `role="alert"`.
- Favicon SVG próprio (`favicon.svg`).

## Publicação na Vercel

`vercel.json` já define `cleanUrls`. Framework Preset `Other`, Build Command vazio, Output Directory `public`.

## Decisão de armazenamento

Os PDFs comerciais continuam versionados por decisão consciente do proprietário. Essa escolha aumenta o repositório e exige atenção antes de publicar o site abertamente, mas não é tratada como dívida a remover automaticamente.

## Validação rápida

Execute primeiro a validação automatizada:

```bash
node scripts/validate-content.mjs
```

- [ ] O site é servido por HTTP (não `file://`).
- [ ] Console do navegador sem erros ao carregar `index.html`.
- [ ] As 10 abas renderizam: Hoje, Visão Geral, Sincronização, Rotina, Progresso, Consulta, Fases, Trilhas, PDFs e Regras.
- [ ] Os 7 dias da rotina abrem, e todo dia começa com o bloco de sono.
- [ ] Nenhum dia útil tem mais de 2 domínios técnicos.
- [ ] O seletor de fase muda o conteúdo dos blocos da rotina.
- [ ] As 13 trilhas curriculares mostram o roadmap de 12 fases em `#phaseRoadmap`; Treino mantém seu plano físico próprio.
- [ ] As 14 páginas começam com pré-requisitos, objetivos e critérios de conclusão.
- [ ] As 14 páginas mostram três exercícios com evidência esperada.
- [ ] `Validado` recusa tópico sem URL HTTP(S), `Dominado` recusa tópico sem D30 e trocas de URL aparecem no histórico.
- [ ] Modos Ideal/Mínima/Recuperação, mapa de oito dependências e 12 simulados aparecem no dashboard.
- [ ] Nenhuma página de trilha contém `<style>` inline; Hubs carregam `hub.css` e Academias carregam `academy.css`.
- [ ] Nenhum arquivo `*-hub.css`, `*-academy.css`, `*-hub.js` ou `*-module.js` específico voltou a ser criado.
- [ ] As seis partes de IA abrem, pesquisam e retornam ao Hub.
- [ ] Buscas de trilha e de PDF filtram e mostram o aviso de lista vazia.
- [ ] A bibliografia lista 21 livros sem link para PDF.
- [ ] Nenhum link interno retorna 404.
