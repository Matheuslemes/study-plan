# Git em escala e a próxima geração — artefato do módulo 23

> O modelo de objetos do Git (módulos 18–22) é o mesmo do laptop ao monorepo de
> 300 GB. O que muda em escala é **o que você baixa e materializa** — e, na
> fronteira de 2026, **a interface** por cima do mesmo `.git`.

## 1. O problema: o clone completo não escala

Um `git clone` tradicional baixa **todo** objeto de **toda** a história e
materializa **todos** os arquivos. Num monorepo grande isso é inviável:

| Custo | Clone completo | O que dói |
| --- | --- | --- |
| Rede/disco | história inteira + todos os blobs | GBs, minutos a horas |
| Working tree | todos os arquivos | você usa 2%, paga por 100% |
| Operações | varrem tudo | `status`, `log`, `checkout` lentos |

## 2. As três alavancas (todas nativas do Git)

```
  partial clone   -> não baixe blobs que você não vai abrir
  sparse checkout -> não materialize arquivos que você não vai editar
  commit-graph    -> não recompute o que dá para pré-calcular
```

### Partial clone — baixar menos objetos

```bash
git clone --filter=blob:none <url>     # "blobless": todo commit e tree, zero blobs
```

`blob:none` mantém **todo commit e toda tree**, omitindo o conteúdo dos arquivos.
Comandos que andam pela história de forma estrutural — `git log`, `git diff
--stat`, `git merge-base` — continuam rápidos porque só precisam de trees. Os
blobs são baixados **sob demanda**, quando você de fato abre o arquivo.

### Sparse checkout — materializar menos arquivos

```bash
git sparse-checkout init --cone
git sparse-checkout set apps/web libs/ui   # só estes diretórios no working tree
```

Você mantém acesso à história inteira, mas o working tree só contém o subconjunto
que interessa. O modo *cone* mantém a operação O(diretórios selecionados), não
O(repositório).

### Commit-graph — pré-computar a topologia

O arquivo `commit-graph` (Git 2.18+) pré-computa metadados dos commits (pais,
datas, *generation numbers*) num só arquivo. Operações que andam pela história
(`log`, `merge-base`, `--contains`) ficam ordens de grandeza mais rápidas porque
não precisam abrir cada objeto de commit.

## 3. Scalar — as alavancas ligadas de fábrica

`scalar` acompanha o Git (2.47+) e é um wrapper que **liga tudo isso por padrão**:

- partial clone (`blob:none`)
- sparse checkout (cone)
- `commit-graph` e `multi-pack-index`
- monitor de sistema de arquivos (`fsmonitor`)
- manutenção em segundo plano (`git maintenance`)

```bash
scalar clone <url>     # clone pronto para escala, sem configurar cada flag à mão
```

> A regra de escala: **não baixe, não materialize e não recompute o que você não
> vai usar.** As três alavancas atacam exatamente essas três palavras.

## 4. Quando monorepo, quando não

| Sinal | Recomendação |
| --- | --- |
| Time < ~20 pessoas, serviços independentes | polyrepo simples |
| 3+ serviços acoplados, mudança cross-service frequente | considere monorepo |
| Time de plataforma dono de libs compartilhadas | monorepo com tooling de escala |
| Sem tooling de build/checkout em escala | **não** faça monorepo ainda |

Monorepo dá **mudança atômica cross-projeto** e uma visão única; cobra **tooling
de build e de checkout** (as alavancas do item 2, mais um build graph como Bazel/
Buck). Sem esse tooling, o monorepo vira o gargalo que ele deveria evitar.

## 5. A fronteira: a próxima geração de VCS

O `.git` venceu como **formato**; a disputa de 2025–2026 é na **interface** por
cima dele.

### Jujutsu (jj)

- VCS Git-compatível que **lê e escreve o mesmo `.git`**: seu time segue no git,
  no GitHub e no CI enquanto você usa `jj` no mesmo repositório.
- Modelo mental diferente: **não há staging area** (a working copy é um commit
  que se reescreve sozinho), operações são reversíveis por um *oplog*, e conflitos
  podem ser **gravados** em vez de bloquearem o fluxo.
- Linguagem de *revsets* (herdada do Mercurial) para selecionar commits.
- Vem de um engenheiro do Google e está a caminho de substituir o VCS interno.

### Sapling

- VCS da Meta (fork do Mercurial), focado em **usabilidade e escala** para
  monorepos gigantes, com backend próprio de armazenamento virtualizado.

> A leitura estratégica: aprenda o **modelo de objetos** (é o que persiste). A
> interface pode mudar — jj e Sapling provam que dá para ter uma UX melhor sobre
> o mesmo grafo de Merkle. Quem entende os módulos 18–22 troca de interface sem
> reaprender o essencial.

## 6. Exercício

1. Faça `git clone --filter=blob:none` de um repositório grande e compare tempo e
   tamanho com um clone completo.
2. Configure `sparse-checkout --cone` para um único diretório e meça o working tree.
3. Rode `git commit-graph write` e compare o tempo de `git log --graph` antes e
   depois num repositório com história longa.
4. Instale o `jj`, rode `jj git init --colocate` num repositório git existente e
   descreva **uma** operação que ficou mais simples que no git — e uma que ficou
   mais estranha.

**Critério de aceite:** números medidos (tempo/tamanho) para as três alavancas do
Git, e uma avaliação honesta de `jj` que separe ganho real de novidade.

## 7. Para a entrevista

- *"Como tornar um monorepo de 50 GB usável no Git?"* — partial clone
  (`blob:none`), sparse checkout (cone) e commit-graph; ou `scalar clone`, que liga
  os três. Não baixar, não materializar, não recomputar o que não se usa.
- *"O que o partial clone `blob:none` mantém e o que omite?"* — mantém todo commit
  e tree (história estrutural rápida); omite blobs, baixados sob demanda.
- *"jj substitui o Git?"* — substitui a **interface**, não o formato: usa o mesmo
  `.git`. O valor é o modelo (sem staging, oplog reversível, conflitos gravados);
  o `.git` e o ecossistema continuam.
