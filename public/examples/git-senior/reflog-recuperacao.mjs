/*
 * Módulo 4 (Git) — Recuperar trabalho: reset, restore, reflog.
 * Rode com:  node reflog-recuperacao.mjs
 *
 * "Perdi meus commits com reset --hard!" — quase nunca. reset só move um ponteiro; os
 * commits continuam no repositório, alcançáveis pelo reflog (o diário do HEAD) até o
 * garbage collector removê-los. Aqui modelamos reset e a recuperação via reflog.
 */
function repo() {
  const commits = new Map(); let n = 0;
  let head = null; const reflog = [];
  const novo = (msg) => { const id = 'c' + (++n); commits.set(id, { id, msg, parent: head }); mover(id, 'commit: ' + msg); return id; };
  const mover = (id, motivo) => { reflog.unshift({ head: id, motivo }); head = id; };
  return {
    commit: novo,
    reset: (id) => mover(id, 'reset: move HEAD'),   // só move o ponteiro
    get head() { return head; },
    alcancaveis() { const out = []; let c = head; while (c) { out.push(c); c = commits.get(c).parent; } return out; },
    existeNoRepo: (id) => commits.has(id),
    reflog: () => reflog,
  };
}

function run() {
  const checks = [];
  const r = repo();
  const c1 = r.commit('base'), c2 = r.commit('feature A'), c3 = r.commit('feature B');
  checks.push(['HEAD está no último commit', r.head === c3 && r.alcancaveis().length === 3]);

  // reset --hard para c1: HEAD volta, c2/c3 saem do caminho alcançável...
  r.reset(c1);
  checks.push(['após reset, só c1 é alcançável pelo HEAD', r.alcancaveis().join() === c1]);
  checks.push(['mas c2 e c3 CONTINUAM no repositório (não foram apagados)', r.existeNoRepo(c2) && r.existeNoRepo(c3)]);

  // reflog guarda o histórico de posições do HEAD -> dá para achar c3.
  const doReflog = r.reflog().map((e) => e.head);
  checks.push(['o reflog registra as posições anteriores do HEAD (inclui c3)', doReflog.includes(c3)]);

  // Recuperação: reset de volta para c3 pelo id encontrado no reflog.
  r.reset(c3);
  checks.push(['recuperação: reset para c3 (achado no reflog) restaura o trabalho', r.head === c3 && r.alcancaveis().length === 3]);

  console.log('=== Módulo 4 — reset e recuperação via reflog ===\n');
  console.log('reflog (mais recente primeiro):');
  for (const e of r.reflog().slice(0, 6)) console.log(`  ${e.head}  ${e.motivo}`);
  console.log('');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: reset move um ponteiro, não apaga commits; o reflog é a rede de segurança para recuperar quase tudo antes do gc.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
