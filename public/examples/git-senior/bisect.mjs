/*
 * Módulo 13 (Git) — Diagnóstico: git bisect (busca binária no histórico).
 * Rode com:  node bisect.mjs
 *
 * bisect acha o primeiro commit "ruim" numa sequência testando o commit do MEIO e
 * descartando metade a cada passo — O(log n) testes em vez de O(n). Aqui implementamos
 * o algoritmo e provamos que ele acha o culpado com poucas verificações.
 */
function bisect(commits, ehRuim) {
  let bom = -1, ruim = commits.length - 1, testes = 0; // assume: bom antes do início, ruim no fim
  while (ruim - bom > 1) {
    const meio = Math.floor((bom + ruim) / 2);
    testes++;
    if (ehRuim(commits[meio])) ruim = meio; else bom = meio;
  }
  return { primeiroRuim: commits[ruim], indice: ruim, testes };
}

function run() {
  const checks = [];
  const commits = Array.from({ length: 100 }, (_, i) => ({ id: 'c' + i, indice: i }));
  const introducao = 63; // o bug entrou no commit 63

  const r = bisect(commits, (c) => c.indice >= introducao);
  checks.push(['bisect acha o primeiro commit ruim (índice 63)', r.indice === introducao && r.primeiroRuim.id === 'c63']);
  checks.push(['usa ~log2(100) ≈ 7 testes, não 100', r.testes <= 7]);
  checks.push(['muito melhor que busca linear (100 testes)', r.testes < commits.length]);

  // Funciona para o bug no primeiro commit testável e no último.
  checks.push(['detecta bug já no índice 1', bisect(commits, (c) => c.indice >= 1).indice === 1]);
  checks.push(['detecta bug só no último commit', bisect(commits, (c) => c.indice >= 99).indice === 99]);

  // Escala logarítmica: 1024 commits -> ~10 testes.
  const grande = Array.from({ length: 1024 }, (_, i) => ({ id: 'c' + i, indice: i }));
  checks.push(['1024 commits: ~10 testes (log2)', bisect(grande, (c) => c.indice >= 500).testes <= 10]);

  console.log('=== Módulo 13 — git bisect (busca binária) ===\n');
  console.log(`100 commits, bug no 63 -> achou ${r.primeiroRuim.id} em ${r.testes} testes (linear seria 100)\n`);
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: bisect transforma "achar o commit que quebrou" em busca binária — O(log n) testes; com um teste automatizado, é `git bisect run`.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
