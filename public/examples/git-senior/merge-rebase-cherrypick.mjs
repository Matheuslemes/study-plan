/*
 * Módulo 7 (Git) — merge × rebase × cherry-pick: o que cada um faz ao grafo.
 * Rode com:  node merge-rebase-cherrypick.mjs
 *
 * merge cria um commit de merge com DOIS pais (preserva a história real). rebase
 * REESCREVE: replica os commits sobre outra base, gerando novos hashes (história
 * linear). cherry-pick copia UM commit para outro branch. Modelamos os três.
 */
let seq = 0;
const novo = (msg, pais) => ({ id: 'x' + (++seq), msg, pais });

function merge(base, topo) { return novo('merge', [base.id, topo.id]); } // 2 pais
function rebase(commits, novaBase) {                                     // replica -> novos ids
  let base = novaBase;
  return commits.map((c) => (base = novo(c.msg + "'", [base.id])));
}
function cherryPick(commit, destino) { return novo(commit.msg + ' (cp)', [destino.id]); }

function run() {
  const checks = [];
  const c1 = novo('base', []);
  const f1 = novo('feat 1', [c1.id]), f2 = novo('feat 2', [f1.id]); // branch feature
  const m1 = novo('main move', [c1.id]);                            // main andou

  // merge: commit com 2 pais.
  const mc = merge(m1, f2);
  checks.push(['merge cria um commit com DOIS pais', mc.pais.length === 2 && mc.pais.includes(m1.id) && mc.pais.includes(f2.id)]);

  // rebase: novos commits (ids diferentes), história linear (1 pai cada).
  const rebased = rebase([f1, f2], m1);
  checks.push(['rebase gera NOVOS commits (hashes diferentes)', rebased[0].id !== f1.id && rebased[1].id !== f2.id]);
  checks.push(['rebase produz história linear (1 pai por commit)', rebased.every((c) => c.pais.length === 1)]);
  checks.push(['o primeiro commit rebased assenta sobre a nova base (m1)', rebased[0].pais[0] === m1.id]);

  // cherry-pick: copia UM commit para outro branch.
  const cp = cherryPick(f1, m1);
  checks.push(['cherry-pick copia um único commit para o destino', cp.pais.length === 1 && cp.pais[0] === m1.id && cp.msg.includes(f1.msg)]);

  // Regra de ouro: rebase reescreve história -> não rebasear o que já é compartilhado.
  const reescreveHistoria = (op) => op === 'rebase';
  checks.push(['rebase reescreve história (evitar em branch compartilhado); merge não', reescreveHistoria('rebase') && !reescreveHistoria('merge')]);

  console.log('=== Módulo 7 — merge / rebase / cherry-pick ===\n');
  console.log('merge:', mc, '\nrebased:', rebased.map((c) => c.id + '<-' + c.pais[0]).join('  '), '\ncherry-pick:', cp, '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: merge preserva história (2 pais); rebase reescreve para linearizar (novos hashes — não use em história compartilhada); cherry-pick copia um commit.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
