# Relatório de redesign — Plano Integrado de Estudos

> Objetivo: guiar a reformulação do **design do projeto como um todo**, assumindo que **todas as trilhas** adotarão a
> estrutura completa de Academia (como Java, IA e Arquitetura). Foco em arquitetura de design, escala e consistência —
> não em uma trilha isolada.
>
> Complementa o `PADRAO-TRILHAS-ACADEMIA.md` (que descreve **como** construir uma trilha). Este relatório descreve
> **como o sistema deve ser estruturado** para que construir 14 trilhas não vire dívida impagável.

Data da análise: 2026-07-29 · Base: estado real do repositório (números medidos abaixo).

---

## 0. Registro de implementação

Início da execução: 2026-07-29. Documento normativo lido integralmente:
`Redesign do projeto com três vistas.pdf` (20 páginas).

### 0.1 Inventário imediatamente anterior à migração

O repositório avançou desde o diagnóstico que originou este relatório. Segurança já recebeu uma Academia própria,
mas ela foi construída no modelo clonado. A dívida real antes desta implementação é:

| Item | Quantidade | Linhas | Observação |
|---|---:|---:|---|
| `*-hub.css` | 9 | 6.260 | Inclui o novo `security-hub.css` |
| `*-academy.css` | 9 | 4.055 | Inclui o novo `security-academy.css` |
| `*-module.js` | 9 | 3.065 | Nove renderers ativos |
| `*-hub.js` | 5 | 196 | Segunda geração parcial |
| `*-advanced.js` | 9 | 9.128 | Conteúdo didático a preservar |
| Shells de Academia existentes | 48 | — | Nove Academias |
| Hubs HTML | 14 | — | Uma página por trilha |
| CSS compartilhado legado | 2 | 7.231 | `components.css` + `trilha-components.css` |

Identidades divergentes confirmadas:

- `python.html` e suas shells usam `data-track="py"`;
- `bancos.html` e suas shells usam `data-track="db"`;
- `matematica.html` usa `data-track="math"`;
- `financeiro.html` usa `data-track="fin"`;
- Segurança usa `sec`, que permanece como identificador canônico.

Marcação legada confirmada em atributos `class`: Matemática, 13 ocorrências; Financeiro, 11; Treino, 14.
Também foram localizados contadores escritos manualmente em hubs e renderers, 107 referências a PDFs nos dados e
duas gerações de renderer. O piloto visual de Arquitetura foi capturado em 1440 × 900 e 390 × 844 antes da migração;
em ambos os casos a página não apresentava overflow horizontal.

### 0.2 Decisões de implementação

- Identificadores canônicos: `java`, `ia`, `arquitetura`, `python`, `aws`, `devops`, `frontend`, `bancos`, `git`,
  `ingles`, `matematica`, `sec`, `financeiro` e `treino`.
- Aliases temporários centralizados: `py → python`, `db → bancos`, `math → matematica`, `fin → financeiro`.
- As chaves curtas preexistentes em fases, rotina e progresso foram preservadas como **chaves internas de currículo
  e armazenamento**, não como identidade pública. Essa divergência deliberada evita invalidar progresso salvo no
  navegador; a fronteira pública é normalizada pelo registro central e pelos adaptadores de conteúdo.
- `sec` é definitivo e documentado; não será convertido isoladamente para `seguranca`.
- Treino permanece uma vista de registro, sem renderer modular de Academia.
- A migração preservará os arquivos `*-advanced.js` existentes e normalizará suas diferenças no adaptador
  compartilhado, evitando reescrever conteúdo didático apenas para adequação técnica.
- A direção visual segue o protótipo: tema escuro, Syne, IBM Plex Mono, título em gradiente e mapa “Rota de
  domínio”. A identidade de cada trilha será definida somente por `tracks-palette.css`.

### 0.3 Progresso por fase

- [x] PDF lido e renderizado integralmente.
- [x] Inventário real registrado.
- [x] Fundação de tokens e paletas.
- [x] Arquitetura piloto em `hub.css`, `academy.css` e `academy.js`.
- [x] Migração das Academias existentes.
- [x] Novas Academias e marcação legada.
- [x] Limpeza de clones e seletores órfãos.
- [x] Validação profunda das 14 trilhas.

### 0.4 Resultado implementado e evidências

Implementação concluída em 2026-07-29, sem criação de branch, commit, tag ou pull request.

#### Arquitetura consolidada

| Camada | Resultado |
|---|---|
| Tokens globais | `assets/css/tokens.css` · 136 linhas |
| Paletas das 14 trilhas | `assets/css/tracks-palette.css` · 110 linhas |
| Hubs | `assets/css/hub.css` · 1.085 linhas + `assets/js/pages/hub.js` · 180 linhas |
| Academias | `assets/css/academy.css` · 807 linhas + `assets/js/pages/academy.js` · 501 linhas |
| Vista “O Sistema” | `assets/css/system.css` · 2.769 linhas; o antigo `components.css` foi renomeado e desacoplado das trilhas |
| Navegação das três vistas | `assets/js/core/system-header.js` · 73 linhas; Hub → Academia → O Sistema |
| Registro canônico | `data/tracks.js`, com 14 IDs e quatro aliases temporários centralizados |
| Dados novos | `git-advanced.js`, `ingles-advanced.js`, `matematica-advanced.js`, `financeiro-advanced.js` |
| Schema das novas Academias | `data/academy-data-factory.js`, sem renderer ou CSS por trilha |
| Padrão para futuras trilhas | `PADRAO-TRILHAS-ACADEMIA.md` reescrito para a arquitetura unificada |

Arquivos canônicos de dados também foram normalizados:

- `db-advanced.js` → `bancos-advanced.js`;
- `security-advanced.js` → `sec-advanced.js`;
- exports `py*` → `python*`;
- exports `arq*` → `arquitetura*`;
- `slug = data-track = diretório` em todas as shells novas e migradas.

#### Migração por trilha

| Trilha | Hub | Academia | Identificador | Situação |
|---|---|---|---|---|
| Java | compartilhado | 4 partes migradas | `java` | concluída |
| IA | compartilhado | 6 partes migradas | `ia` | concluída; `ia-hero-map` eliminado após a transição |
| Arquitetura | piloto compartilhado | 5 partes migradas | `arquitetura` | concluída e comparada em 390/1440 px |
| Python | compartilhado | 5 partes migradas | `python` | `py` removido da marcação |
| AWS | compartilhado | 5 partes migradas | `aws` | geração recente absorvida |
| DevOps | compartilhado | 5 partes migradas | `devops` | segundo caso de validação |
| Frontend | compartilhado | 5 partes migradas | `frontend` | classes `fe-*` de componentes eliminadas |
| Bancos | compartilhado | 5 partes migradas | `bancos` | `db` restrito ao mapa de compatibilidade |
| Git | compartilhado | 5 partes novas | `git` | criada diretamente no sistema novo |
| Inglês | compartilhado | 5 partes novas | `ingles` | títulos bilíngues validados em 390 px |
| Matemática | compartilhado | 5 partes novas | `matematica` | marcação legada convertida |
| Segurança | compartilhado | 5 partes migradas | `sec` | `sec` mantido como canônico |
| Financeiro | compartilhado | 5 partes novas | `financeiro` | marcação legada convertida |
| Treino | compartilhado | não se aplica | `treino` | permanece registro de treino, sono e revisão |

#### Limpeza comprovada

Antes da migração havia 9 `*-hub.css`, 9 `*-academy.css`, 9 `*-module.js`, 5 `*-hub.js` e
`trilha-components.css`. Depois:

- `0` CSS `*-hub.css`;
- `0` CSS `*-academy.css`;
- `0` renderers `*-module.js`;
- `0` auxiliares `*-hub.js`;
- `0` consumidores de `components.css` ou `trilha-components.css`;
- `0` classes exatas `.section`, `.hero` ou `.grid2` nas trilhas;
- `0` aliases de componentes `ia-*`, `aws-*`, `fe-*`, `sec-*` ou `db-*` no Hub compartilhado;
- `0` cores primárias de identidade repetidas nos CSS de componentes.

Arquivos de redesign substituídos e removidos:

- CSS de Hub: `java-hub.css`, `ia-hub.css`, `arquitetura-hub.css`, `python-hub.css`, `aws-hub.css`,
  `devops-hub.css`, `frontend-hub.css`, `db-hub.css` e `security-hub.css`;
- CSS de Academia: `java-academy.css`, `ia-academy.css`, `arquitetura-academy.css`, `python-academy.css`,
  `aws-academy.css`, `devops-academy.css`, `frontend-academy.css`, `db-academy.css` e `security-academy.css`;
- renderers: `java-module.js`, `ia-module.js`, `arquitetura-module.js`, `python-module.js`, `aws-module.js`,
  `devops-module.js`, `frontend-module.js`, `db-module.js`, `security-module.js`, `aws-hub.js`, `db-hub.js`,
  `devops-hub.js`, `frontend-hub.js` e `security-hub.js`;
- folhas legadas: `trilha-components.css`; `components.css` foi absorvido e renomeado para `system.css`,
  que atende exclusivamente à vista compartilhada “O Sistema”.

Os quatro aliases públicos mantidos são `py → python`, `db → bancos`, `math → matematica` e `fin → financeiro`.
Sua resolução existe somente em `TRACK_ALIASES`; HTML, CSS, shells, arquivos avançados e URLs emitem os IDs
canônicos. As mesmas formas curtas ainda aparecem nos dados históricos do plano global como chaves internas de
currículo/localStorage, preservadas deliberadamente para não apagar progresso já registrado.

#### Validações executadas

| Validação | Evidência |
|---|---|
| Conteúdo e arquitetura | `node scripts/validate-content.mjs` passou |
| Recursos HTTP | `node scripts/validate-http.mjs` passou: 260 recursos e 113 PDFs com HTTP 200 |
| Sintaxe | 60 arquivos `.js`/`.mjs` passaram em `node --check` |
| Hubs | 14/14 em 390, 768, 1024 e 1440 px; 56 combinações, zero overflow e console limpo |
| Academias | 65/65 partes em 390, 768, 1024 e 1440 px; 260 combinações, zero overflow, colisão, erro de dados ou erro de console |
| Vista “O Sistema” | 390, 768, 1024 e 1440 px; cabeçalho, 14 trilhas, estado ativo, zero overflow e console limpo |
| Navegação entre vistas | 14 Hubs + 13 Academias regressados em 390 e 1440 px; ordem Hub → Academia → O Sistema e `aria-current` corretos |
| Coerência de cache | Service worker `v79-sequential-design-audit`; HTML, JS, CSS e dados usam network-first com fallback offline |
| Didática | 298/324 tópicos observáveis; 12 labs encadeados; 271 módulos nas 13 Academias |
| Progresso | `Validado` rejeita ausência de URL HTTP(S); `Dominado` rejeita ausência de D30 |
| Acessibilidade estrutural | skip links, landmarks, `aria-current`, foco visível e reduced motion verificados nos 14 Hubs e nas 13 Academias; contraste mínimo do acento 6,80:1 |

Não existe `package.json`, configuração de lint ou etapa de build no repositório. Por isso, as validações aplicáveis são
os validadores locais acima, a checagem de sintaxe e os testes reais no navegador.

#### Métricas finais

| Métrica | Antes | Depois |
|---|---:|---:|
| CSS específico de Hub/Academia | 18 arquivos · 10.315 linhas | 0 arquivos · 0 linhas |
| Renderers específicos | 14 arquivos · 3.261 linhas | 0 arquivos · 0 linhas |
| Camada visual compartilhada das trilhas | fragmentada em clones | 4 arquivos · 2.138 linhas (`tokens`, paleta, Hub e Academia) |
| Shells de Academia | 48 | 65 |
| Academias | 9 | 13, mais Treino como registro |
| Arquivos/caminhos antigos eliminados | — | 34 (33 clones/legados + `components.css` absorvido) |
| Duplicações ativas de CSS/renderer | múltiplas | 0 |
| Aliases CSS indefinidos | presentes na vista “O Sistema” | 0 |
| Aliases públicos de identidade | distribuídos | 4, resolvidos somente em `TRACK_ALIASES` |

Pendências reais no escopo do redesign: nenhuma. As chaves internas curtas de currículo/localStorage são uma
compatibilidade deliberada, não uma pendência de identidade pública. A limitação do repositório é operacional: não
há `package.json`, pipeline de build, linter ou suíte visual persistente para executar; por isso foram mantidos
validadores Node leves e a matriz de navegação real registrada acima, sem introduzir dependências.

### 0.5 Auditoria visual sequencial pós-implementação

Em 2026-07-29 foi executada uma segunda auditoria, desta vez sem amostragem entre páginas: uma rota só foi liberada
depois de passar por 390, 768, 1024 e 1440 px, inspeção de caixas, tipografia, colisões, overflow, tabelas e console.

| Grupo | Rotas verificadas individualmente | Combinações de viewport | Resultado |
|---|---:|---:|---|
| Hubs | 14 | 56 | 14/14 aprovados |
| Academias | 65 | 260 | 65/65 aprovadas |
| O Sistema | 1 | 4 | 1/1 aprovada |
| Total | 80 | 320 | zero overflow global, colisão, título cortado ou erro de console |

Partes de Academia verificadas:

| Trilha | Partes |
|---|---|
| Java | `fundamentos`, `runtime`, `producao`, `avaliacao` |
| IA | `fundamentos`, `dados-ml`, `deep-learning`, `generativa`, `engenharia`, `pratica` |
| Arquitetura | `fundamentos`, `distribuidos`, `evolucao`, `estrategico`, `avaliacao` |
| Python | `fundamentos`, `qualidade`, `performance`, `producao`, `avaliacao` |
| AWS | `fundamentos`, `plataforma`, `confiabilidade`, `arquitetura`, `avaliacao` |
| DevOps | `fundamentos`, `plataforma`, `confiabilidade`, `operacao`, `avaliacao` |
| Frontend | `fundamentos`, `aplicacoes`, `sistemas`, `producao`, `avaliacao` |
| Bancos | `fundamentos`, `postgresql`, `integracao`, `distribuidos`, `avaliacao` |
| Git | `fundamentos`, `colaboracao`, `plataformas`, `governanca`, `avaliacao` |
| Inglês | `fundamentos`, `escrita`, `fala`, `producao`, `avaliacao` |
| Matemática | `discreta`, `linear`, `probabilidade`, `otimizacao`, `avaliacao` |
| Segurança | `modelagem`, `controles`, `verificacao`, `operacao`, `avaliacao` |
| Financeiro | `controle`, `investimentos`, `carreira`, `planejamento`, `avaliacao` |

Correções encontradas durante essa passagem:

- escala móvel dos títulos de Academia ajustada para evitar viúvas e corte em títulos longos;
- URLs e referências extensas passaram a quebrar dentro do painel sem criar overflow global;
- grade e largura útil dos Hubs foram recalibradas para manter o mapa “Rota de domínio” dentro do enquadramento;
- o dashboard `index.html` passou a renderizar o cabeçalho das três vistas;
- a ordem da navegação foi alinhada ao PDF: Hub da trilha → Academia → O Sistema;
- a vista “O Sistema” passou a expor as 14 trilhas, Java como âncora e `aria-current` correto;
- a consulta malformada `?v=redesign-33?v=2` de IA foi normalizada;
- o validador de conteúdo passou a resolver `db`, `py`, `math` e `fin` pelo mapa canônico, em vez de procurar dados
  duplicados sob aliases legados;
- o cache foi renovado para `v79-sequential-design-audit`.

A regressão de acessibilidade percorreu os 14 Hubs e uma entrada de cada uma das 13 Academias. Skip link,
navegação de vistas, seletor de trilhas, busca e navegação de partes exibiram foco visível. As 14 cores de acento
obtiveram contraste entre 6,80:1 e 13,44:1 contra o fundo estrutural; o texto principal obteve 18,16:1. As folhas
carregadas expõem regras de `prefers-reduced-motion`, e todas as rotas mantêm landmark `main` e destino de salto.

---

## 1. Sumário executivo

O padrão editorial e didático das Academias está **excelente** e deve ser preservado. O problema é o **modo de
implementação**: cada trilha é hoje uma **cópia inteira do mesmo design com uma paleta diferente**. Isso já produziu:

- **19.528 linhas de CSS** em 20 arquivos, com **8 arquivos `-hub.css` quase idênticos** (107–184 regras cada) e
  **8 `-academy.css`** também clonados;
- um `trilha-components.css` de **4.993 linhas** com **14 blocos `body[data-track=...]`** de 288 a 546 regras cada —
  cada bloco reescreve o mesmo layout só trocando a cor;
- **8 renderers `-module.js`** (346–435 linhas) clonados, e já **duas gerações incompatíveis** de renderer.

Projeção: concluir as 14 trilhas nesse modelo leva o CSS a **~30.000+ linhas** e multiplica os pontos de falha
(o bug do `.track-title`, o truncamento do hub, a divergência de contadores). 

**Tese do redesign:** trocar *N cópias do design* por **um sistema de design único dirigido por tokens** — um
`academy.css`, um `hub.css` e um renderer genérico, escritos **uma vez**, onde cada trilha contribui apenas com
**uma paleta (~10 variáveis), um arquivo de dados e shells de HTML**. Redução estimada de **~85–90% do CSS/JS
específico de trilha**, com a identidade visual de cada uma preservada.

---

## 2. Diagnóstico do estado atual (medido)

### 2.1 Cobertura das trilhas

14 trilhas. **8 já têm dados de Academia** (`*-advanced.js`): java, ia, arquitetura, python, aws, devops, frontend,
db(bancos). Faltam academia: **git, ingles, matematica, sec, financeiro** (e **treino**, que é registro de treino, não
Academia). 55 páginas HTML no total; subpáginas por trilha variam de **4 a 6 partes**.

### 2.2 A duplicação, em números

| Camada | Arquivos | Linhas | Natureza |
|---|---:|---:|---|
| `-hub.css` (por trilha) | 8 | ~6.880 | Clones do mesmo hub, só muda a paleta |
| `-academy.css` (por trilha) | 8 | ~4.230 | Clones dos componentes de módulo |
| `trilha-components.css` | 1 | 4.993 | 14 blocos `data-track` (288–546 regras) — variações de paleta |
| `components.css` | 1 | 2.766 | Camada compartilhada legada |
| `-module.js` (renderers) | 8 | ~2.900 | Clones do renderer |
| `-hub.js` (gen 2) | 4 | ~170 | Segundo padrão de renderer (aws/db/devops/frontend) |
| **CSS total** | **20** | **19.528** | — |
| **JS total** | **40** | **6.497** | — |

> A camada `tokens.css` (65 linhas) **já centraliza** a paleta por trilha (`--java`, `--py`, `--ia`, `--aws`, `--db`…
> com variantes `-bg`) e diz explicitamente *"as páginas de trilha só sobrescrevem `--accent`"*. **A intenção correta
> existe — mas o modelo de clones não a segue**: cada hub/academy/bloco redefine a paleta e ainda coda `rgba(...)`
> literais em vez de consumir os tokens.

### 2.3 Duas gerações de Academia convivendo

- **Geração 1** (java, ia, arquitetura, python): `-module.js` autossuficiente + `-hub.css` clone + `-academy.css`
  clone + bloco em `trilha-components.css`. Classes prefixadas por trilha (`java-*`, `arq-*`, `py-*`).
- **Geração 2** (aws, db, devops, frontend, bancos): **`-hub.js` + `-module.js`** usando helpers compartilhados
  (`core/render.js`, `core/public-url.js`) e classes próprias (`fe-part-card`). Padrão melhor (helpers compartilhados),
  mas **incompatível** com a geração 1.

Resultado: manutenção precisa entender dois modelos, e nenhum é o "oficial".

### 2.4 Inconsistências que o redesign deve encerrar

1. **Vocabulário de marcação misto.** Já convertidas para `doc-section`: 11 trilhas. Ainda no vocabulário antigo
   (`.section`/`.hero`/`.grid2`): **matematica (24 ocorrências), treino (27), financeiro (1)**. Migração pela metade.
2. **Nomes divergentes em três eixos** — slug ≠ `data-track` ≠ prefixo: `bancos`/`db`, `matematica`/`math`,
   `financeiro`/`fin`, `python`/`py`. Fonte recorrente de bug (ex.: a regra `.track-title` que faltava para `py`).
3. **`academy` em dois lugares.** Java tem `java-academy.css` (570 linhas) **e** um bloco `body.java-academy-page`
   (100 regras) dentro de `trilha-components.css`. Risco de conflito e edição no lugar errado.
4. **Fragilidade estrutural conhecida.** O hub depende de clonagem manual (já truncou em 27/83 regras uma vez) e a
   regra `.track-title` (Syne + gradiente) precisa ser lembrada por trilha, senão o título quebra.
5. **Contadores acoplados ao renderer.** `/20`, `/18`, "16 livros", "40 perguntas" aparecem no código em vez de
   derivarem dos dados.

---

## 3. O problema central, em uma frase

> O design está implementado com **complexidade O(trilhas × tamanho-do-design)**. Deveria ser
> **O(tamanho-do-design + trilhas × paleta)**.

Cada nova trilha "completa" hoje **soma ~1.500–2.000 linhas** de CSS/JS que são 95% iguais às das outras. Isso é o que
torna a reformulação de todas as trilhas cara e arriscada. **É exatamente o momento de corrigir**, antes de clonar mais
6 trilhas.

---

## 4. Proposta de redesign — arquitetura-alvo

### 4.1 Uma camada de tokens completa (evoluir `tokens.css`)

Consolidar **todos** os valores de design em tokens semânticos, e cada trilha define **apenas sua paleta**:

```css
/* tokens.css — núcleo */
:root {
  /* escala tipográfica, espaçamento, raio, sombra, timing... (novos) */
  --step--1:.833rem; --step-0:1rem; --step-1:1.2rem; --step-2:1.44rem; --step-3:1.728rem; --step-4:2.07rem;
  --space-1:.25rem; --space-2:.5rem; --space-3:.75rem; --space-4:1rem; --space-6:1.5rem; --space-8:2rem;
  --radius:12px; --radius-lg:16px; --panel:rgba(15,22,35,.9); --panel-line:var(--border);
}
/* cada trilha: só isto, uma vez, em tokens.css (ou um arquivo tracks-palette.css) */
[data-track="frontend"]{ --accent:#06b6d4; --accent-2:#a78bfa; --accent-3:#22d3b0; --accent-ink:#092a33; }
```

Regra de ouro: **nenhum `rgba()`/hex literal de marca** fora da tabela de paletas. Todo o resto usa `var(--accent*)`.

### 4.2 UM `academy.css` e UM `hub.css` genéricos

Reescrever, **uma vez**, com seletores genéricos por atributo, não por trilha:

```css
/* hub.css — vale para TODA trilha, sem :not(.xxx-academy-page) por trilha */
.track-page:not(.is-academy) .track-hero-page { ... }
.track-page:not(.is-academy) .doc-section { background:var(--panel); border-radius:var(--radius); }
.track-page:not(.is-academy) .ia-hero-map__flow b { color:var(--accent); border-color:color-mix(in srgb,var(--accent) 42%, transparent); }
```

- Usar **`color-mix()`** e `var(--accent*)` para gerar glows/bordas a partir de UMA cor, eliminando os `rgba` clonados.
- Classe de corpo padronizada: `track-page` + `is-academy` (booleana), acabando com `xxx-academy-page` por trilha.
- Componentes de módulo (`academy.css`) com classes **genéricas** (`ac-module`, `ac-panel`, `ac-contrast`,
  `ac-book-grid`…) em vez de `java-*`/`arq-*`/`py-*`.

Efeito: os 8 `-hub.css` + 8 `-academy.css` + 14 blocos `data-track` colapsam em **~2 arquivos (~1.500 linhas)**.

### 4.3 UM renderer genérico

Unificar as duas gerações em **um** `academy.js` parametrizado por `data-track` e por um pequeno `config` (rótulos,
ordem das partes). Já existe base boa: os helpers `core/render.js` e `core/public-url.js` da geração 2. O renderer:

- lê `document.body.dataset.track` e a parte via `data-part` (nome único, sem prefixo por trilha);
- importa dinamicamente `../../data/${track}-advanced.js`;
- **deriva todos os contadores dos dados** (`modules.length`, `2×modules`, `books.length`);
- emite classes genéricas `ac-*`.

Substitui 8 `-module.js` + 4 `-hub.js` (~3.070 linhas) por **~1 arquivo (~400 linhas)**.

### 4.4 Um único vocabulário de marcação

Adotar `doc-section` em **todas** as páginas e concluir a conversão de **matematica, treino e financeiro**. As shells
de subpágina viram idênticas (só mudam `data-track`, `data-part` e os `<link>` de dados).

### 4.5 Normalizar identidade (slug = track = prefixo)

Escolher: ou **alinhar os três** (renomear `db→bancos`, `math→matematica`, `fin→financeiro`, `py→python` nos
`data-track`), ou manter um **mapa central único** (`tracks.js`) e proibir prefixos por trilha nas classes. Com CSS/JS
genéricos (4.2/4.3), o prefixo por trilha **deixa de existir** — o problema some por construção.

### 4.6 Linguagem visual (o "design" de fato)

Preservar a assinatura atual (tema escuro, título **Syne** com gradiente, eyebrows em **IBM Plex Mono**, painéis
`rgba(15,22,35,.9)`, hero-mapa "Rota de domínio" e grade de `module-card`) e **elevá-la** com:

- **Escala tipográfica e de espaçamento fluidas** (tokens `--step-*`, `--space-*`) aplicadas em todo lugar — hoje os
  tamanhos são repetidos com `clamp()` ad-hoc em cada hub.
- **Acessibilidade como padrão**: contraste WCAG AA (o `--text3` já foi corrigido para 6:1 — generalizar), foco
  visível, navegação por teclado, `prefers-reduced-motion` (já presente no hub, tornar global).
- **Densidade e ritmo consistentes**: um único sistema de cards/callouts/tabelas, sem variação por trilha.
- **Identidade por cor, não por layout**: a diferença entre trilhas deve ser **só a paleta** (accent + 2 apoios),
  aplicada por `color-mix()`; layout, tipografia e espaçamento idênticos.
- **Sem overflow horizontal em 390px** e tabelas com scroll próprio (invariante do padrão).

---

## 5. Plano de migração (incremental, baixo risco)

1. **Fundação de tokens** — completar `tokens.css` (tipografia/espaço/raio/painel) e a tabela de paletas por trilha.
   Sem mudança visual. *(1 PR)*
2. **`academy.css` unificado** — extrair o denominador comum dos 8 `-academy.css` para um arquivo genérico com classes
   `ac-*` e `var(--accent*)`. Migrar **uma** trilha-piloto (ex.: Arquitetura) e validar pixel a pixel. *(1 PR)*
3. **`hub.css` unificado** — idem para a página principal, com `color-mix()` no lugar dos `rgba` clonados. Piloto na
   mesma trilha. *(1 PR)*
4. **Renderer genérico `academy.js`** — unificar as duas gerações; contadores derivados dos dados; classes `ac-*`.
   Migrar a piloto. *(1 PR)*
5. **Migração em lote** — apontar as 7 trilhas restantes com Academia para o sistema unificado; remover os
   `-hub.css`/`-academy.css`/`-module.js` clonados e os blocos `data-track` redundantes de `trilha-components.css`. *(N PRs pequenos)*
6. **Converter as trilhas de vocabulário antigo** (matematica, treino, financeiro) e criar as Academias faltantes
   (git, ingles, matematica, sec, financeiro) **já no sistema novo**.
7. **Validação profunda** de cada trilha migrada (seção 5.1) + remover `components.css`/`trilha-components.css` mortos.

### 5.1 Definição de pronto por trilha

- Renderiza no sistema unificado, sem CSS/JS específico além da paleta e dos dados.
- Título em **Syne + gradiente**; hero-mapa e grade de módulos corretos; `doc-section` como painel.
- Subpáginas: partes, contadores (derivados dos dados), biblioteca com PDFs **HTTP 200**, console limpo.
- Sem overflow em 390px; foco/teclado/âncoras funcionando; `BIBLIOGRAFIA.md` com Status coerente.

---

## 6. Impacto estimado

| Métrica | Hoje (8 trilhas) | Projeção 14 trilhas (modelo atual) | Alvo unificado (14 trilhas) |
|---|---:|---:|---:|
| Arquivos CSS específicos de trilha | 16 (+2 shared) | ~28 | **~2 + 1 tabela de paletas** |
| Linhas de CSS de trilha (clones) | ~16.000 | ~30.000 | **~1.600** |
| Renderers JS | 12 | ~18 | **1 genérico** |
| Pontos onde a paleta é definida | 3–4 por trilha | 3–4 por trilha | **1 por trilha** |
| Custo de uma nova trilha | ~1.500–2.000 linhas | idem | **~1 bloco de paleta + dados + shells** |
| Bugs estruturais recorrentes | `.track-title`, truncamento, contadores | mais | **eliminados por construção** |

---

## 7. Riscos e mitigação

- **Regressão visual na unificação.** Mitigar com trilha-piloto e comparação lado a lado (a assinatura visual é
  preservada; muda a implementação, não o resultado).
- **`color-mix()`/suporte.** Amplamente suportado nos navegadores atuais; se necessário, fallback com tokens pré-calculados.
- **Migração longa.** Fazer incremental (seção 5): cada PR entrega valor e é reversível. As trilhas não migradas
  continuam funcionando com os clones até serem convertidas.
- **Cache de CSS ao validar.** Servir com `no-store`/`?nocache` (lição já registrada).

---

## 8. Recomendação

Congelar a criação de novas Academias no modelo de clones e executar os passos 1–4 (fundação + piloto) **antes** de
reformular as 6 trilhas restantes. Cada trilha nova entra direto no sistema unificado, custando **uma paleta + dados +
shells** — e o padrão editorial (que já é o ponto forte) passa a escalar sem dívida.

---

### Anexos de evidência (medições)
- CSS: 19.528 linhas / 20 arquivos · JS: 6.497 linhas / 40 arquivos · HTML: 55 páginas.
- Hubs por trilha: arquitetura 153, ia 153, java 143, python 143, aws 115, devops 107, frontend 108, bancos 184 regras.
- Blocos `data-track` em `trilha-components.css`: 14 (288–546 regras cada).
- Trilhas no vocabulário antigo: matematica, treino, financeiro.
- Duas gerações de renderer: `*-module.js` (gen 1) vs `*-hub.js`+`*-module.js` (gen 2).
