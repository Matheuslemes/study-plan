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
│   ├── tracks.js               trilhas, cores (CK), badges e cards de navegação
│   ├── phases.js               as 12 fases (P), inglês por fase e helpers de fase ativa
│   ├── routine.js              dias da semana, foco diário e grades (seg–dom)
│   ├── pdfs.js                 PDFs próprios + bibliografia (21 livros, só referência)
│   └── milestones.js           regras, certificações AWS e sincronização
│
├── assets/
│   ├── css/
│   │   ├── tokens.css          ⭐ fonte única de cores e design tokens (:root)
│   │   ├── base.css            reset, tipografia, fundo da página
│   │   └── components.css      componentes do dashboard (extraído do inline)
│   └── js/
│       ├── core/               render · search · nav · storage · pwa
│       ├── features/           routine · tracks · phases · sync · active-phase · track-roadmap ·
│       │                       progress · review · history · charts · backup ·
│       │                       certifications · checklist · today · global-search
│       ├── pages/              dashboard.js (index) · trilha.js (páginas de trilha)
│       └── data.js, index.js, trilha.js   ⚠️ legado — ver abaixo
│   └── vendor/                 Bootstrap e fontes autohospedados (STUDY-067)
│
├── trilhas/                    14 páginas de consulta por área
└── pdfs/                       12 PDFs próprios + BIBLIOGRAFIA.md
```

### Sobre a contagem de trilhas

São **14 páginas de trilha**, não 15. A página `blog.html` (DevCore Platform) foi removida quando o projeto foi descontinuado — o plano não tem mais um projeto integrador contínuo, e cada fase se prova por exercícios e labs independentes.

Em `data/phases.js` existem 15 chaves de conteúdo por fase (`java`, `dsa`, `db`, `git`, `arquitetura`, `devops`, `sec`, `pratica`, `frontend`, `py`, `ia`, `math`, `fin`, `ingles`, `aws`). Nem toda chave tem página própria: `dsa` e `pratica` aparecem apenas no dashboard e na rotina.

## Como rodar localmente

**É obrigatório servir por HTTP.** O dashboard usa ES Modules, e abrir `index.html` direto pelo `file://` falha por política de CORS do navegador.

```bash
cd public
npx http-server -p 5599 -c-1
# ou: python -m http.server 5599
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

### Roadmap das páginas de trilha

Cada página declara sua identidade em `<body data-track="...">`. O módulo `pages/trilha.js` lê essa chave e injeta em `#phaseRoadmap` o roadmap das 12 fases daquela trilha, vindo de `data/phases.js`.

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

Tudo salvo em `localStorage`, só neste navegador. Chaves: `topicosConcluidos`, `filaRevisao`, `certificacoes`, `faseAtual`, `checklist:financeiro`.

- **Progresso** (`features/progress.js`) — cada item de conteúdo de fase é um tópico com id `trilha:fase:índice`. Marcar um tópico no roadmap de uma trilha persiste o id e alimenta as barras por trilha e o anel de progresso global. São 286 tópicos contáveis no plano.
- **Revisão D0/D1/D7/D30** (`features/review.js`) — concluir um tópico registra o D0 e agenda D1; a view "Revisões de hoje" lista o que vence hoje ou está atrasado; marcar como revisado avança D1→D7→D30 e, depois do D30, consolida (sai da fila). Quatro datas fixas, sem SM-2.
- **Certificações** (`features/certifications.js`) — só CLF-C02 e SAA-C03, com status, data-alvo e passos de preparo persistidos.
- **Checklist** (`features/checklist.js`) — os 28 checkboxes de autoavaliação de `financeiro.html` agora persistem por posição.
- **Fase atual** — o card da fase corrente ganha o selo "▸ FASE ATUAL" no dashboard, e trocar de fase no seletor (aba Rotina) move o destaque e atualiza o progresso global.

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

### Busca global e navegação

- **Busca global** (`features/global-search.js`) — o campo do topo indexa trilhas, PDFs e os 286 tópicos de conteúdo, agrupando os resultados. A tecla <kbd>/</kbd> foca o campo de qualquer lugar.
- **Trilhas relacionadas** — cada página de trilha termina com links para as trilhas vizinhas no plano (Java → Banco → Arquitetura → Segurança), definidas em `trilhasRelacionadas` (`data/tracks.js`).
- **Ordem das abas** — "Hoje" é a aba inicial e "Sincronização" subiu da 8ª para a 3ª posição.

### Histórico, evolução e backup

- **Histórico diário** (`features/history.js`) — registra tópicos concluídos e revisões por dia. Alimenta o gráfico e a contagem de dias seguidos.
- **Evolução** (`features/charts.js`) — SVG gerado à mão, sem biblioteca: barras de tópicos por semana (8 semanas) e heatmap de atividade (30 dias). Aparece só quando há dados reais — não há valores de exemplo.
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

`sitemap.xml` (15 URLs), `robots.txt`, mais Open Graph e `canonical` em todas as páginas. A URL base (`https://study-plan.vercel.app`) está no topo de `sitemap.xml` e no `robots.txt` — **troque nos dois se o domínio publicado for outro**.

Se preferir manter o plano fora dos buscadores (é um documento de carreira pessoal), o `robots.txt` traz a linha alternativa comentada.

### Acessibilidade

- `<main id="conteudo">` e skip-link ("Pular para o conteúdo") nas 15 páginas.
- Foco visível consistente via `:focus-visible`, sem penalizar quem usa mouse.
- `--text3` corrigido de `#64748b` (3.98:1, falhava WCAG AA) para `#8592a6` (6.0:1).
- `@media (prefers-reduced-motion: reduce)` desliga animações e o scroll suave.
- Tabs com `role="tab"`/`role="tabpanel"`, `aria-controls` e `aria-selected` mantido em sincronia.
- Favicon SVG próprio (`favicon.svg`).

### Sobre os arquivos legados em `assets/js/`

`data.js`, `index.js` e `trilha.js` (1.413 linhas) **não são carregados por nenhuma página**. São uma tentativa anterior de chegar a esta mesma arquitetura modular, e foram usados como referência:

- o padrão de separar dados de render veio deles;
- o helper `escapeHtml` em `core/render.js` é uma adaptação do `htmlEscape` de `trilha.js` — o código anterior montava HTML sem nenhum escaping.

O **conteúdo** deles está obsoleto: descrevem o modelo antigo de 8 fases, o projeto DevCore Platform (descontinuado) e uma paleta de cores que não é mais usada. Não devem ser reaproveitados como dados — apenas como registro histórico. Podem ser removidos com segurança.

## Publicação na Vercel

`vercel.json` já define `cleanUrls`. Framework Preset `Other`, Build Command vazio, Output Directory `public`.

## Dívida técnica conhecida

| Item | Situação |
|---|---|
| `!important` nas trilhas | As páginas de trilha ainda têm ~45 `!important` cada, concentrados nos blocos de patch (`-responsive-refactor`, `-theme-overrides`). Vários eram para vencer o antigo `styles.css` (já removido) e hoje são redundantes, mas removê-los em massa sem validar cada breakpoint das 14 páginas quebraria layout silenciosamente. A redução depende de consolidar esses blocos de patch — dívida P2. O dashboard já está em 5 (todos justificados: Bootstrap e utilitários). |
| CSS de componentes das trilhas | Cada página de trilha ainda tem ~1.200–1.800 linhas de CSS inline, ~60% comum entre elas (`.doc-section`, `.track-hero-page`, `.reference-card`…). Extrair um `trilha-components.css` compartilhado é o próximo passo — hoje só as cores (`tokens.css`) e o reset (`base.css`) são compartilhados. |

## Validação rápida

- [ ] O site é servido por HTTP (não `file://`).
- [ ] Console do navegador sem erros ao carregar `index.html`.
- [ ] As 8 abas renderizam: Visão Geral, Consulta rápida, Rotina diária, Fases, Trilhas, PDFs, Sincronização, Regras.
- [ ] Os 7 dias da rotina abrem, e todo dia começa com o bloco de sono.
- [ ] Nenhum dia útil tem mais de 2 domínios técnicos.
- [ ] O seletor de fase muda o conteúdo dos blocos da rotina.
- [ ] As 14 páginas de trilha mostram o roadmap de 12 fases em `#phaseRoadmap`.
- [ ] Buscas de trilha e de PDF filtram e mostram o aviso de lista vazia.
- [ ] A bibliografia lista 21 livros sem link para PDF.
- [ ] Nenhum link interno retorna 404.
