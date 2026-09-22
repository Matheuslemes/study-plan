/*
 * Módulo 10 (Git) — Escolher a plataforma de hospedagem por critérios, não por moda.
 * Rode com:  node plataformas-comparacao.mjs
 *
 * GitHub, GitLab e outras têm forças diferentes. A escolha deve sair de critérios
 * PONDERADOS pelo contexto, não de preferência. Aqui pontuamos as opções contra
 * critérios com pesos e escolhemos a de maior aderência (decisão explícita e auditável).
 */
// Notas 0..5 por critério (ilustrativas, para o modelo — não um ranking oficial).
const PLATAFORMAS = {
  github: { ecossistema: 5, actions: 5, selfHosted: 3, precoEquipePequena: 4 },
  gitlab: { ecossistema: 4, actions: 4, selfHosted: 5, precoEquipePequena: 4 },
  bitbucket: { ecossistema: 3, actions: 3, selfHosted: 4, precoEquipePequena: 5 },
};
function pontuar(plataforma, pesos) {
  return Object.entries(pesos).reduce((s, [criterio, peso]) => s + (PLATAFORMAS[plataforma][criterio] || 0) * peso, 0);
}
function escolher(pesos) {
  return Object.keys(PLATAFORMAS).map((p) => ({ p, score: pontuar(p, pesos) })).sort((a, b) => b.score - a.score);
}

function run() {
  const checks = [];

  // Contexto A: prioriza ecossistema e CI integrado (Actions).
  const a = escolher({ ecossistema: 3, actions: 3, selfHosted: 1, precoEquipePequena: 1 });
  checks.push(['contexto "ecossistema + CI" favorece GitHub', a[0].p === 'github']);

  // Contexto B: exige self-hosted forte (compliance on-prem).
  const b = escolher({ selfHosted: 3, ecossistema: 1, actions: 1, precoEquipePequena: 1 });
  checks.push(['contexto "self-hosted" favorece GitLab', b[0].p === 'gitlab']);

  checks.push(['a escolha muda com os pesos (não há melhor absoluto)', a[0].p !== b[0].p]);
  checks.push(['todas as plataformas são pontuadas', a.length === 3]);
  // Decisão auditável: a escolha vem com o score, registrável num ADR.
  checks.push(['a decisão é numérica e registrável (score do vencedor documentável)', typeof a[0].score === 'number' && a[0].score > 0]);

  console.log('=== Módulo 10 — comparação de plataformas Git ===\n');
  console.log('contexto A (ecossistema+CI):', a.map((x) => `${x.p}=${x.score}`).join('  '));
  console.log('contexto B (self-hosted)   :', b.map((x) => `${x.p}=${x.score}`).join('  '), '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: escolha a plataforma por critérios ponderados pelo seu contexto (ecossistema, CI, self-hosted, custo) e registre a decisão — não escolha por moda.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
