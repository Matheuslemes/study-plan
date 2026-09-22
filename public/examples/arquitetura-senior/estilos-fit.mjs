/*
 * Módulo 3 (Arquitetura) — Escolher o estilo pelas forças, não pela moda.
 * Rode com:  node estilos-fit.mjs
 *
 * Não existe "melhor estilo": cada um privilegia forças e sacrifica outras.
 * Aqui pontuamos estilos contra as forças priorizadas de um contexto e escolhemos
 * o de maior aderência — tornando explícito o trade-off, em vez de seguir hype.
 */

// Cada estilo dá uma nota (0..5) para cada força que ele favorece.
const ESTILOS = {
  'monólito modular': { simplicidade: 5, escalaIndependente: 1, isolamentoFalha: 2, velocidadeInicial: 5 },
  'microsserviços': { simplicidade: 1, escalaIndependente: 5, isolamentoFalha: 5, velocidadeInicial: 2 },
  'orientado a eventos': { simplicidade: 2, escalaIndependente: 4, isolamentoFalha: 4, velocidadeInicial: 2 },
};

// Aderência = soma das notas do estilo nas forças priorizadas (peso por prioridade).
function aderencia(estilo, prioridades) {
  return prioridades.reduce((s, f, i) => s + (ESTILOS[estilo][f] || 0) * (prioridades.length - i), 0);
}
function escolher(prioridades) {
  return Object.keys(ESTILOS)
    .map((e) => ({ estilo: e, score: aderencia(e, prioridades) }))
    .sort((a, b) => b.score - a.score);
}

function run() {
  const checks = [];

  // Contexto A: time pequeno, produto novo -> prioriza simplicidade e velocidade.
  const a = escolher(['simplicidade', 'velocidadeInicial', 'isolamentoFalha']);
  checks.push(['startup (simplicidade/velocidade) -> monólito modular vence', a[0].estilo === 'monólito modular']);

  // Contexto B: escala por domínio e isolamento de falha -> microsserviços.
  const b = escolher(['escalaIndependente', 'isolamentoFalha', 'simplicidade']);
  checks.push(['escala+isolamento -> microsserviços vence', b[0].estilo === 'microsserviços']);

  checks.push(['a escolha muda com as forças (não há "melhor" absoluto)', a[0].estilo !== b[0].estilo]);
  checks.push(['todo estilo tem um sacrifício (monólito perde em escala independente)', ESTILOS['monólito modular'].escalaIndependente < 3]);
  checks.push(['microsserviços cobram simplicidade', ESTILOS['microsserviços'].simplicidade < 3]);

  console.log('=== Módulo 3 — estilos arquiteturais e aderência às forças ===\n');
  console.log('startup  :', a.map((x) => `${x.estilo}=${x.score}`).join('  '));
  console.log('escala   :', b.map((x) => `${x.estilo}=${x.score}`).join('  '), '\n');
  let ok = 0;
  for (const [n, cond] of checks) { console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${n}`); if (cond) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: escolha o estilo pelas forças priorizadas e explicite o que ele sacrifica — estilo é trade-off, não moda.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
