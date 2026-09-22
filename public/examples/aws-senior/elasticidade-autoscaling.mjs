/*
 * Módulo 4 (AWS) — Elasticidade: autoscaling por utilização-alvo.
 * Rode com:  node elasticidade-autoscaling.mjs
 *
 * Target tracking: o grupo de autoscaling adiciona/remove instâncias para manter a
 * utilização perto de um alvo. Aqui calculamos o número desejado de instâncias sob
 * carga variável, respeitando min/max — sobe no pico, desce no vale, paga o uso.
 */

// Desejado = ceil(atual × util_atual / util_alvo), limitado a [min, max].
function desejado({ instancias, utilAtual }, alvo, min, max) {
  const bruto = Math.ceil((instancias * utilAtual) / alvo - 1e-9); // epsilon evita ruído de float no ceil
  return Math.min(max, Math.max(min, bruto));
}

function run() {
  const checks = [];
  const alvo = 0.60, min = 2, max = 10;

  // Utilização acima do alvo -> escala para fora (mais instâncias).
  const pico = desejado({ instancias: 4, utilAtual: 0.90 }, alvo, min, max);
  checks.push(['pico (90% em 4 inst., alvo 60%) escala para 6 instâncias', pico === 6]);

  // Utilização abaixo do alvo -> escala para dentro (menos instâncias).
  const vale = desejado({ instancias: 6, utilAtual: 0.20 }, alvo, min, max);
  checks.push(['vale (20% em 6 inst.) escala para baixo (2 instâncias)', vale === 2]);

  // Respeita o mínimo (nunca abaixo de min) e o máximo (nunca acima de max).
  checks.push(['nunca abaixo do mínimo', desejado({ instancias: 2, utilAtual: 0.01 }, alvo, min, max) === min]);
  checks.push(['nunca acima do máximo (satura em max sob carga extrema)', desejado({ instancias: 10, utilAtual: 1.0 }, alvo, min, max) === max]);

  // No alvo exato, mantém o número de instâncias (estável, sem flapping).
  checks.push(['no alvo exato, mantém as instâncias', desejado({ instancias: 5, utilAtual: 0.60 }, alvo, min, max) === 5]);

  // Elasticidade economiza: capacidade acompanha a demanda ao longo do dia.
  const dia = [0.2, 0.3, 0.9, 0.95, 0.5, 0.2].map((u) => desejado({ instancias: 4, utilAtual: u }, alvo, min, max));
  const semElastico = dia.map(() => max); // dimensionar sempre para o pico
  const custoElastico = dia.reduce((s, n) => s + n, 0);
  const custoFixo = semElastico.reduce((s, n) => s + n, 0);
  checks.push(['autoscaling custa menos que provisionar sempre para o pico', custoElastico < custoFixo]);

  console.log('=== Módulo 4 — elasticidade e autoscaling ===\n');
  console.log('desejado ao longo do dia:', dia, '| soma:', custoElastico, 'vs pico-fixo:', custoFixo, '\n');
  let ok = 0;
  for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: o autoscaling por alvo acompanha a demanda dentro de [min,max] — paga-se o uso, não o pico o tempo todo.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
