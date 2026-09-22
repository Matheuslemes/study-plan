/*
 * Módulo 6 (Git) — Estratégia de branches: trunk-based × feature branches longas.
 * Rode com:  node estrategia-branches.mjs
 *
 * A vida útil de um branch prevê o custo de integração: quanto mais tempo divergindo,
 * mais commits acumulam no tronco e maior a chance de conflito. Aqui modelamos a
 * "distância de integração" e mostramos por que branches curtos reduzem conflito.
 */
// Commits que entraram no tronco enquanto o branch vivia = trabalho a reconciliar.
function distanciaDeIntegracao(diasDeVida, commitsPorDiaNoTronco) {
  return diasDeVida * commitsPorDiaNoTronco;
}
// Probabilidade (modelo) de conflito cresce com a distância e satura em 1.
function riscoConflito(distancia, arquivosTocados, arquivosDoRepo) {
  const sobreposicao = Math.min(1, (distancia * arquivosTocados) / (arquivosDoRepo * 10));
  return Math.min(1, sobreposicao);
}

function run() {
  const checks = [];
  const tronco = 5; // commits/dia no tronco

  const curto = distanciaDeIntegracao(1, tronco);   // 1 dia
  const longo = distanciaDeIntegracao(20, tronco);  // 20 dias
  checks.push(['branch curto (1 dia) acumula pouca distância', curto === 5]);
  checks.push(['branch longo (20 dias) acumula muito mais', longo === 100 && longo > curto]);

  const rCurto = riscoConflito(curto, 3, 50);
  const rLongo = riscoConflito(longo, 3, 50);
  checks.push(['risco de conflito é baixo no branch curto', rCurto < 0.5]);
  checks.push(['risco de conflito é muito maior no branch longo (>= 0.5)', rLongo >= 0.5 && rLongo > rCurto]);
  checks.push(['integrar cedo e frequente reduz o risco', rCurto < rLongo]);

  // Trunk-based: muitos merges pequenos < um merge gigante (soma de risco menor).
  const trunkBased = Array.from({ length: 20 }, () => riscoConflito(distanciaDeIntegracao(1, tronco), 3, 50));
  const featureLonga = riscoConflito(distanciaDeIntegracao(20, tronco), 3, 50);
  const riscoMaxTrunk = Math.max(...trunkBased);
  checks.push(['no trunk-based, cada integração tem risco baixo (< a feature longa)', riscoMaxTrunk < featureLonga]);

  console.log('=== Módulo 6 — estratégia de branches ===\n');
  console.log('distância: curto=' + curto + '  longo=' + longo);
  console.log('risco conflito: curto=' + rCurto.toFixed(2) + '  longo=' + rLongo.toFixed(2) + '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: branches curtos e integração frequente (trunk-based) mantêm a distância pequena e o risco de conflito baixo; branches longos acumulam dívida de merge.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
