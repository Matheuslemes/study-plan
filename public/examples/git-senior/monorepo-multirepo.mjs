/*
 * Módulo 15 (Git) — Monorepo × multirepo: a decisão por trade-offs.
 * Rode com:  node monorepo-multirepo.mjs
 *
 * Monorepo dá mudança atômica entre projetos e refatoração global fáceis, ao custo de
 * tooling de escala (build afetado, CODEOWNERS, checkout parcial). Multirepo isola e
 * escala o versionamento, ao custo de coordenar mudanças que cruzam repositórios.
 */
// Uma mudança que cruza N projetos: no monorepo é 1 PR atômico; no multirepo, N PRs coordenados.
function custoMudancaCruzada(projetosAfetados, modelo) {
  if (modelo === 'monorepo') return { prs: 1, atomico: true, coordenacao: 'nenhuma' };
  return { prs: projetosAfetados, atomico: false, coordenacao: `versionar e sincronizar ${projetosAfetados} repos` };
}
// Build afetado: monorepo precisa de grafo de dependências p/ não rebuildar tudo.
function buildAfetado(modelo, totalProjetos, afetadosPeloDiff, temGrafo) {
  if (modelo === 'multirepo') return afetadosPeloDiff;              // cada repo builda o seu
  return temGrafo ? afetadosPeloDiff : totalProjetos;              // monorepo sem grafo builda tudo
}

function run() {
  const checks = [];

  // Mudança que cruza 3 projetos.
  const mono = custoMudancaCruzada(3, 'monorepo');
  const multi = custoMudancaCruzada(3, 'multirepo');
  checks.push(['monorepo: mudança cruzada é 1 PR atômico', mono.prs === 1 && mono.atomico]);
  checks.push(['multirepo: mesma mudança vira 3 PRs coordenados (não atômico)', multi.prs === 3 && !multi.atomico]);

  // Build afetado: monorepo COM grafo builda só o afetado; SEM grafo builda tudo.
  checks.push(['monorepo sem grafo de dependências builda tudo (custo de escala)', buildAfetado('monorepo', 50, 2, false) === 50]);
  checks.push(['monorepo com grafo builda só o afetado', buildAfetado('monorepo', 50, 2, true) === 2]);
  checks.push(['multirepo builda só o repo alterado', buildAfetado('multirepo', 50, 2, false) === 2]);

  // A decisão é trade-off: nenhum vence sempre.
  const recomendar = (ctx) => (ctx.mudancasCruzadasFrequentes && ctx.temToolingDeEscala ? 'monorepo' : ctx.timesIndependentes ? 'multirepo' : 'depende');
  checks.push(['contexto com mudanças cruzadas + tooling -> monorepo', recomendar({ mudancasCruzadasFrequentes: true, temToolingDeEscala: true }) === 'monorepo']);
  checks.push(['times muito independentes -> multirepo', recomendar({ timesIndependentes: true }) === 'multirepo']);

  console.log('=== Módulo 15 — monorepo × multirepo ===\n');
  console.log('mudança cruzada (3 projetos): mono=', mono, '\n                              multi=', multi, '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: monorepo troca atomicidade de mudança por tooling de escala; multirepo troca isolamento por coordenação. Decida pelo padrão de mudança do time.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
