/*
 * Módulo 23 (Git) — Git em escala: partial clone, sparse checkout e shallow.
 * Rode com:  node git-em-escala.mjs
 *
 * Em repositórios gigantes, clonar tudo é inviável. shallow (--depth) corta o
 * histórico; partial clone (--filter=blob:none) adia baixar blobs; sparse-checkout
 * materializa só parte da árvore. Aqui modelamos a economia de cada técnica.
 */
// Um repo "grande" (unidades arbitrárias de tamanho).
const REPO = { historicoBlobs: 8000, blobsHead: 1500, trees: 300, commits: 1200 };

function tamanhoClone(opcoes = {}) {
  const { depth = Infinity, filterBlobNone = false, sparseFracao = 1 } = opcoes;
  const commits = depth === Infinity ? REPO.commits : Math.min(REPO.commits, depth);
  const historico = depth === Infinity ? REPO.historicoBlobs : Math.round(REPO.historicoBlobs * (commits / REPO.commits));
  const blobs = filterBlobNone ? Math.round(REPO.blobsHead * sparseFracao) : historico + Math.round(REPO.blobsHead * sparseFracao);
  return commits + REPO.trees + blobs;
}

function run() {
  const checks = [];
  const cheio = tamanhoClone();
  const shallow = tamanhoClone({ depth: 1 });
  const parcial = tamanhoClone({ filterBlobNone: true });
  const sparse = tamanhoClone({ filterBlobNone: true, sparseFracao: 0.1 });

  checks.push(['clone cheio é o maior', cheio > shallow && cheio > parcial]);
  checks.push(['shallow (--depth 1) reduz muito ao cortar o histórico', shallow < cheio * 0.6]);
  checks.push(['partial clone (blob:none) evita baixar o histórico de blobs', parcial < cheio]);
  checks.push(['partial + sparse (10% da árvore) é o menor', sparse < parcial && sparse < shallow]);

  // Economia relativa do menor caso.
  const economia = 1 - sparse / cheio;
  checks.push(['partial + sparse economiza > 80% vs clone cheio', economia > 0.8]);

  // Trade-off: técnicas trocam completude local por tamanho (operações offline podem exigir buscar objetos).
  const completoLocalmente = (op) => op === 'cheio';
  checks.push(['clone cheio é 100% offline; os enxutos podem precisar buscar objetos sob demanda', completoLocalmente('cheio') && !completoLocalmente('parcial')]);

  console.log('=== Módulo 23 — Git em escala ===\n');
  console.log(`cheio=${cheio}  shallow=${shallow}  parcial=${parcial}  parcial+sparse=${sparse}`);
  console.log('economia do parcial+sparse:', (economia * 100).toFixed(0) + '%\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: em monorepos gigantes, shallow/partial clone/sparse-checkout trocam completude local por tamanho — clona-se só o necessário e busca-se o resto sob demanda.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
