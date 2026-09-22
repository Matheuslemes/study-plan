/*
 * Módulo 5 (Git) — Internals: refs, HEAD anexado e HEAD destacado.
 * Rode com:  node refs-e-head.mjs
 *
 * Um branch é só uma ref: um arquivo em .git/refs/heads com um oid. HEAD normalmente
 * é uma ref simbólica que aponta para um branch ("anexado"); commitar move o branch.
 * Em HEAD "destacado" (aponta direto para um commit), commitar NÃO move branch algum.
 */
function repo() {
  const refs = { 'refs/heads/main': 'c1' };
  let HEAD = { tipo: 'symbolic', alvo: 'refs/heads/main' }; // anexado a main
  let n = 1;
  const resolve = () => HEAD.tipo === 'symbolic' ? refs[HEAD.alvo] : HEAD.oid;
  return {
    refs, get HEAD() { return HEAD; },
    commit() { const id = 'c' + (++n); if (HEAD.tipo === 'symbolic') refs[HEAD.alvo] = id; else HEAD = { tipo: 'detached', oid: id }; return id; },
    checkoutBranch(name) { const atual = resolve(); const alvo = 'refs/heads/' + name; if (!(alvo in refs)) refs[alvo] = atual; HEAD = { tipo: 'symbolic', alvo }; },
    checkoutCommit(oid) { HEAD = { tipo: 'detached', oid }; },
    resolve,
  };
}

function run() {
  const checks = [];
  const r = repo();
  checks.push(['HEAD anexado é uma ref simbólica para um branch', r.HEAD.tipo === 'symbolic' && r.HEAD.alvo === 'refs/heads/main']);
  checks.push(['branch é apenas uma ref (main -> c1)', r.refs['refs/heads/main'] === 'c1']);

  // Commit com HEAD anexado move o branch.
  const c2 = r.commit();
  checks.push(['commit anexado move o branch main', r.refs['refs/heads/main'] === c2 && r.resolve() === c2]);

  // Criar/checar novo branch: nova ref apontando para o mesmo commit.
  r.checkoutBranch('feature');
  checks.push(['novo branch é uma nova ref para o mesmo commit', r.refs['refs/heads/feature'] === c2]);
  const c3 = r.commit();
  checks.push(['commit em feature move feature, não main', r.refs['refs/heads/feature'] === c3 && r.refs['refs/heads/main'] === c2]);

  // HEAD destacado: commitar não move branch nenhum.
  r.checkoutCommit(c2);
  const c4 = r.commit();
  checks.push(['HEAD destacado: commit NÃO move nenhum branch', r.HEAD.tipo === 'detached' && r.HEAD.oid === c4 && r.refs['refs/heads/main'] === c2 && r.refs['refs/heads/feature'] === c3]);

  console.log('=== Módulo 5 — refs e HEAD ===\n');
  console.log('refs:', r.refs, '\nHEAD:', r.HEAD, '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: branch = ref (ponteiro); HEAD anexado move o branch ao commitar; HEAD destacado cria commits órfãos — daí o aviso do Git.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
