/*
 * Módulo 2 (Git) — Os três estados: working directory, index (staging) e HEAD.
 * Rode com:  node tres-estados.mjs
 *
 * Uma mudança percorre três áreas: você edita no working directory, escolhe o que
 * entra no próximo commit com `add` (index) e grava com `commit` (HEAD). Aqui
 * modelamos essa máquina de estados e o staging parcial (add por arquivo).
 */
function repo() {
  const working = {}, index = {}, head = {};
  return {
    edit(f, v) { working[f] = v; },
    add(f) { index[f] = working[f]; },                 // working -> index
    commit() { Object.assign(head, index); return { ...head }; }, // index -> HEAD
    statusStaged: () => Object.keys(index).filter((f) => index[f] !== head[f]),
    statusUnstaged: () => Object.keys(working).filter((f) => working[f] !== index[f]),
    get working() { return { ...working }; }, get index() { return { ...index }; }, get head() { return { ...head }; },
  };
}

function run() {
  const checks = [];
  const r = repo();
  r.edit('a.js', 'v1'); r.edit('b.js', 'v1');
  checks.push(['edição fica só no working (nada staged ainda)', r.statusUnstaged().sort().join() === 'a.js,b.js' && r.statusStaged().length === 0]);

  r.add('a.js'); // staging parcial: só a.js
  checks.push(['add move só a.js para o index (staging parcial)', r.statusStaged().join() === 'a.js' && r.statusUnstaged().join() === 'b.js']);

  const c1 = r.commit();
  checks.push(['commit grava o index no HEAD (a.js entra, b.js não)', c1['a.js'] === 'v1' && c1['b.js'] === undefined]);
  checks.push(['após o commit, a.js não está mais staged', r.statusStaged().length === 0]);

  // Editar a.js de novo: fica unstaged até novo add.
  r.edit('a.js', 'v2');
  checks.push(['nova edição em a.js aparece como unstaged', r.statusUnstaged().includes('a.js')]);
  r.add('a.js'); r.add('b.js'); r.commit();
  checks.push(['após add+commit, working == index == HEAD (limpo)', r.statusStaged().length === 0 && r.statusUnstaged().length === 0]);

  console.log('=== Módulo 2 — working / index / HEAD ===\n');
  console.log('working:', r.working, '\nindex  :', r.index, '\nHEAD   :', r.head, '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: o index é a fotografia do próximo commit; dominar o staging parcial (add por arquivo/trecho) é o que permite commits limpos.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
