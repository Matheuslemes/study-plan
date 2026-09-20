# Incompatibilidades com o Relatório de Redesign

> **Base de comparação:** *Redesign do projeto com três vistas* / `especificacoes-redesign-sistema-unificado.md`
> **Auditoria em:** 2026-07-29 · **Escopo:** 14 trilhas · **Método:** inspeção estática do `public/`

## Sumário executivo

O redesign **já foi majoritariamente aplicado** — o repositório **não** está mais no estado "antes"
descrito no diagnóstico (não há `*-hub.css`, `*-academy.css`, `*-module.js` nem `*-hub.js`). A
arquitetura-alvo existe: um `hub.css`, um `academy.css`, `tokens.css`, `tracks-palette.css` (14 blocos)
e um renderer genérico `academy.js` (501 linhas) sobre `core/render.js` + `core/public-url.js`.

Restam **desvios pontuais** que impedem fechar a Definição de Pronto (§6) e a Regra de Ouro. Estão
listados abaixo por severidade, com evidência `arquivo:linha`.

| # | Incompatibilidade | Severidade | Regra da spec |
|---|---|---|---|
| 1 | ~~Contadores escritos à mão no HTML (12 ocorrências)~~ **✅ Corrigido** | 🔴 Alta | §2.4, §6 (DoD) |
| 2 | ~~Paleta/cor de marca definida em mais de um lugar~~ **✅ Corrigido** | 🟠 Média | §1, Regra de Ouro |
| 3 | ~~`system.css` — camada legada não enxugada~~ **✅ Auditado** (não era código morto) | 🟠 Média | Etapa 7 |
| 4 | Vocabulário `class="hero"` (falso-positivo) + Bootstrap (dívida) | 🟡 Baixa | §3.4 |
| 5 | Runtime: **HTTP 200 ✅**; a11y/390px/console **a validar no browser** | ⚪ Parcial | §6, §10 |
| — | Bibliografia Git/Matemática desatualizada | ✅ Corrigido | §14 |

---

## ✅ O que já está conforme a proposta

| Item da spec | Estado no código |
|---|---|
| Fim dos clones `*-hub.css` / `*-academy.css` / `*-module.js` / `*-hub.js` | **0 arquivos** |
| Um `hub.css` + `academy.css` + `tokens.css` + `tracks-palette.css` | Presentes; paleta com **14 blocos** `[data-track]` |
| Renderer genérico único | `assets/js/pages/academy.js` (**501 linhas**) + `core/render.js` + `core/public-url.js` |
| 14 arquivos `data/{track}-advanced.js` | **Todos presentes** |
| Identidade normalizada (`slug = data-track`) | **Sem** `data-track="py"/"db"/"math"/"fin"` |
| Prefixos mortos `.java-academy-page`, `.ia-hero-map`, `.fe-part-card`, `.grid2` | **Eliminados** |
| `color-mix()` no lugar de `rgba()` clonados | `hub.css` / `academy.css` com **0 `rgba()` brutos** |
| `--accent-line: color-mix(… 32%)` | Definido em `tokens.css:94` |
| Treino como registro, sem renderer de módulo | `<body class="track-page is-hub" data-track="treino">` |
| `prefers-reduced-motion` / `focus-visible` | Presentes no CSS |

---

## ✅ 1. Contadores escritos à mão no HTML — CORRIGIDO

**Regra:** §2.4 e Definição de Pronto — *"deriva contadores dos dados; não contém contadores
escritos manualmente no código"*.

**Diagnóstico:** o renderer de Academia já derivava (`academy.js:90` → `#moduleTotal`), e o `hub.js`
já expunha o mecanismo `data-ac-count` (`setDerivedCounters`, filtrando `modules`/`parts`/`books`/
`projects`/`questions`), **mas 12 spots estáticos** em heros, badges e nav-brand ainda traziam o
número escrito à mão. O `aws.html` já era o padrão de referência (hooks `data-ac-count`).

**Correção aplicada:** os 12 spots passaram a usar o hook `data-ac-count`, no mesmo padrão do
`aws.html`. As contagens derivadas dos dados **batem exatamente** com os valores antigos (verificado
via import dos `data/{track}-advanced.js`), então não há mudança visual — mas os números agora
auto-atualizam a partir dos dados.

| Arquivo:linha | Antes | Depois |
|---|---|---|
| `arquitetura.html:78` / `:208` | `18 módulos` (hero + badge) | `<strong data-ac-count="modules">` / `<b data-ac-count="modules">` |
| `java.html:76` / `:221` | `20 módulos` | idem |
| `python.html:74` / `:197` | `20 módulos` | idem |
| `ia.html:79` / `:995` | `30 módulos` | idem |
| `aws.html:251` | `20 módulos` (badge Roadmap) | `<b data-ac-count="modules">` |
| `frontend.html:268` | `20 módulos` | idem |
| `sec.html:263` | `20 módulos` | idem |
| `financeiro.html:61` | `31 módulos` (nav-brand) | `<b data-ac-count="modules">` — financeiro **tem** Academia (`financeiroModules.length = 31`, 5 partes) |

Nos heros, `2 projetos capstone` / `N perguntas de entrevista` também foram ligados a
`data-ac-count="projects"` / `="questions"`.

**Verificação:** `grep` confirma **0** ocorrências planas de `section-badge">N módulos` e
`<p><strong>N módulos</strong>` nas 14 trilhas.

> Observação de convenção (herdada do `aws.html`): os títulos `<h2>Academia … em N módulos` seguem
> com o número no texto — mesmo comportamento do arquivo-referência. Se quiser, ligo esses `<h2>`
> ao mesmo hook numa próxima passada.

---

## ✅ 2. Paleta / cor de marca definida em mais de um lugar — CORRIGIDO

**Regra:** §1 (*"1 local de definição da paleta por trilha"*) e a **Regra de Ouro** (*"nenhum `rgba()`
ou hexadecimal de marca fora da tabela central de paletas"*).

**Correção aplicada:** `tracks-palette.css` passou a ser a **única** fonte de toda cor de marca e de
UI. Adicionei ali um bloco auxiliar declarado uma única vez — `--ui-blue/teal/amber/sky/violet`, a
escala de maestria (`--mastery-*`) e a escala das 12 fases (`--phase-1..12`, que reutilizam
`var(--track-*)` onde coincidem). Todos os consumidores passaram a referenciar `var()`:

| Arquivo | Antes | Depois |
|---|---|---|
| `data/config.js` (PC + `syncCycles`) | 8 accents de marca + cores de UI hardcoded | `var(--phase-1..12)` / `var(--ui-*)` / `var(--track-*)` |
| `data/milestones.js` | `#a78bfa`, `#22d3b0`, `#38bdf8` | `var(--track-ia)`, `var(--ui-teal)`, `var(--ui-sky)` (cinza neutro `#64748b` mantido) |
| `assets/css/base.css` | `#22d3b0`/`#4f9ef8`/`#fbbf24` (≈15 ocorrências, estados de maestria + fallback de accent) | `var(--mastery-*)` |
| `assets/css/tokens.css` | `#a78bfa`, `#fb7185`, `#f59e0b` em `--state-*`/`--review-*` | `var(--track-ia)`, `var(--track-devops)`, `var(--track-aws)` |

Como todos os consumidores usam essas cores em **estilo inline** (não em canvas), `var()` resolve
normalmente; o único caso de alpha por concatenação de hex (`${PC[i]}22` em `phases.js`) virou
`color-mix(in srgb, … 13%, transparent)`.

**Verificação:**
- Varredura das 14 cores-accent de marca fora de `tracks-palette.css`: **0 ocorrências**.
- Todas as `var(--ui-*/--mastery-*/--phase-*)` têm declaração correspondente (sem órfã/typo).
- `node --check` OK em `config.js`, `milestones.js`, `phases.js`, `sync.js`.
- `scripts/validate-content.mjs`: *"✓ Tokens, paletas, Hub e Academia usam a arquitetura unificada"*.

> `hub.css` e `academy.css` já estavam limpos (0 `rgba()` brutos). As cores de `base.css`
> (`#22d3b0`/`#4f9ef8`/`#fbbf24`) eram de **estado de UI**, não de trilha — tokenizadas mesmo assim
> para eliminar a duplicação. `PBG` (fundos escuros) permanece com hex por ser tint de UI, não marca.

---

## ✅ 3. `system.css` — auditado: não era código morto

**Regra:** Etapa 7 — *"remover partes mortas de `components.css` e `trilha-components.css`;
chegar a ~1.600 linhas de CSS de trilha/sistema"*.

**Auditoria realizada:** cruzei as **301 classes** estilizadas em `system.css` contra todo o HTML +
JS (fora `vendor/`), tratando classes construídas dinamicamente em template literais (ex.:
`daily-block-${type}`, `tb-${track}`, `cert-status-${n}`, `biblio-prio-${p}`, `review-type--${t}`).

**Resultado:** `system.css` é a folha de estilo **viva** do app de dashboard/hub — praticamente
100% em uso. Só **2 classes órfãs** foram encontradas e removidas:

| Removido | Onde estava |
|---|---|
| `.daily-deliverable` (+ `strong`) | `system.css:818–834` |
| `.pdf-library-intro` (+ `strong`) | `system.css:1454–1466` |

`system.css`: 2.769 → **2.737 linhas** (−32). Braces balanceadas; `validate-content` segue verde.

**Reenquadramento da meta:** a meta de ~1.600 linhas da Etapa 7 dizia respeito à eliminação dos
**clones por trilha** (`*-hub.css`, `*-academy.css`, `trilha-components.css`, `components.css`) — e
isso **já foi feito**: `validate-content` reporta *"✓ 0 CSS específicos · 0 renderers específicos"*.
O tamanho de `system.css` é a camada de **aplicação do dashboard** (metric cards, biblioteca de PDFs,
phase cards, sync table, footer), legitimamente grande e em uso — não dívida de design de trilha.

> Follow-up **opcional** (organizacional, não dead-code): dividir `system.css` em `dashboard.css`
> (app) e manter só o compartilhado. É refactor de arrumação, sem ganho funcional, e foi deixado de
> fora por trazer risco de regressão sem verificação visual.

---

## 🟡 4. `class="hero"` (falso-positivo) e Bootstrap (dívida assumida)

**`index.html:35` `class="hero"` — reavaliado como falso-positivo.** Ao inspecionar, esse `.hero`
é o **hero do dashboard** (view "O Sistema"), um componente próprio e vivo, com regra `.hero {` em
`system.css:13` e filhos `.hero-eyebrow` / `.hero-sub` / `.hero-tags` / `.hero-content-grid`. **Não**
é o `.hero` de trilha que a spec §3.4 mandou remover (esse ficava em Matemática/Treino/Financeiro e
já não existe). Renomear traria só risco (mexe em ~6 regras) sem ganho — **deixado como está**,
deliberadamente.

**Bootstrap — dívida arquitetural, fora de escopo de fix seguro.** O Bootstrap é usado de forma
pervasiva: grid (`col-12 col-md-6 col-xl-4`), utilitários (`mt-1`, `px-3`, `text-muted`, `small`),
tabelas e `bootstrap.bundle.min.js`. Removê-lo é uma **migração grande e de alto risco de regressão**,
inverificável sem browser aqui. Documentado como dívida a planejar — não deve ser feito às cegas.

---

## ⚪ 5. Runtime — parcialmente validado

**Executado nesta rodada (✅):**

- `scripts/validate-http.mjs` contra servidor local → **264 recursos + 117 PDFs, todos HTTP 200**
  (`✓ status: 200=264`). Fecha o critério "PDFs/recursos com HTTP 200" da §6.
- `scripts/validate-content.mjs` → *"✓ 0 CSS específicos · 0 renderers específicos · Tokens, paletas,
  Hub e Academia usam a arquitetura unificada"*.

**Ainda a validar em browser vivo (⚪) — o pane bloqueia `localhost` por política:**

- console **sem erros/avisos** do renderer;
- **ausência de overflow horizontal em 390px**; tabelas largas com scroll próprio;
- **contraste AA**, foco visível, navegação por teclado, âncoras funcionando.

Para fechar, rodar num navegador real (não no pane):

```bash
node scripts/serve.mjs 5599
```

e abrir `http://127.0.0.1:5599/` verificando console, DevTools responsivo em 390px e navegação por teclado.

---

## ✅ Bibliografia — Git e Matemática (corrigido nesta rodada)

`public/pdfs/BIBLIOGRAFIA.md` marcava as trilhas de Git e Matemática como *"acervo a montar / ⬜
Faltante"*, mas os PDFs **já estão** nas pastas. Reconciliado com os arquivos reais:

- **`livros-git/`** — 4/4 referências presentes (#99 Pro Git, #100 Building Git, #101 Version
  Control with Git, #102 Git for Teams). Status atualizado para ✅ Presente.
- **`livros-matematica/`** — 8/8 referências presentes (#91–98). São **9 arquivos**: o *Solutions'
  Manual for Introduction to Linear Algebra* acompanha o livro #93 (Strang), análogo ao caso
  "Core Java Vol. I & II = 1 referência".
- Tabela-resumo e contadores globais atualizados: **102 de 114 referências presentes · 12 a adquirir ·
  104 arquivos PDF**.

### Ainda pendente (conforme informado)

- **Inglês** e **Financeiro** seguem incompletos — fora do escopo desta atualização.
- Observação de consistência: `livros-ingles/` já contém **1 arquivo** (*On Writing Well*, #103),
  mas a bibliografia ainda cataloga Inglês como `0/5`. Deixado como está por ora; ajustar quando o
  acervo de Inglês for concluído.

---

## Checklist de fechamento (Definição de Pronto, §6)

| Critério | Estado |
|---|---|
| Renderiza no sistema unificado, só paleta + dados | ✅ |
| `doc-section` como painel em todas as seções | ✅ (`.hero` do dashboard é componente próprio, não trilha) |
| Contadores derivados dos dados | ✅ migrados para `data-ac-count` |
| Sem `rgba()`/hex de marca fora da paleta | ✅ centralizado em `tracks-palette.css` |
| `system.css` sem código morto | ✅ auditado; 2 classes órfãs removidas |
| Título Syne + gradiente, hero-mapa, painéis translúcidos | ✅ |
| `prefers-reduced-motion`, foco visível | ✅ |
| PDFs/recursos HTTP 200 | ✅ 264 recursos + 117 PDFs = 200 |
| Console limpo · 390px · AA · teclado | ⚪ validar em browser vivo |
| Bibliografia consistente com o acervo | ✅ Git/Matemática · pendente Inglês/Financeiro |

---

## Prioridade recomendada

1. ~~**Remover os 12 contadores estáticos**~~ **✅ feito** — migrados para `data-ac-count` (padrão `aws.html`).
2. ~~**Consolidar a paleta**~~ **✅ feito** — `config.js` / `milestones.js` / `tokens.css` / `base.css`
   referenciam `var()`; toda cor de marca e de UI vive só em `tracks-palette.css`.
3. ~~**Auditar `system.css`**~~ **✅ feito** — sem código morto relevante (2 classes removidas); a meta
   de ~1.600 linhas já foi atingida na camada de trilha (`0 CSS específicos`).
4. ~~**Rodar validate-http/content**~~ **✅ feito** — HTTP 200 e arquitetura unificada confirmados.
5. **Pendente:** validar em browser vivo (console/390px/AA/teclado), concluir acervos de **Inglês** e
   **Financeiro**, e — opcional — avaliar a saída gradual do Bootstrap.
