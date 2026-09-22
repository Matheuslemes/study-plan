/*
 * Módulo 9 (Git) — Pull request e code review: o gate de merge.
 * Rode com:  node pull-request-gate.mjs
 *
 * Um PR só deve poder ser mesclado quando as condições de qualidade são satisfeitas:
 * aprovações suficientes, CI verde, sem threads pendentes e (se exigido) code owner.
 * Aqui modelamos a avaliação do gate — a mesma lógica de "branch protection" real.
 */
function podeMergear(pr, regra) {
  const motivos = [];
  if (pr.aprovacoes < regra.minAprovacoes) motivos.push(`faltam aprovações (${pr.aprovacoes}/${regra.minAprovacoes})`);
  if (regra.exigeCiVerde && !pr.ciVerde) motivos.push('CI vermelho');
  if (regra.exigeThreadsResolvidas && pr.threadsAbertas > 0) motivos.push(`${pr.threadsAbertas} threads abertas`);
  if (regra.exigeCodeOwner && !pr.aprovadoPorOwner) motivos.push('sem aprovação de code owner');
  if (regra.tamanhoMax && pr.linhas > regra.tamanhoMax) motivos.push(`PR grande demais (${pr.linhas} > ${regra.tamanhoMax})`);
  return { pode: motivos.length === 0, motivos };
}

function run() {
  const checks = [];
  const regra = { minAprovacoes: 2, exigeCiVerde: true, exigeThreadsResolvidas: true, exigeCodeOwner: true, tamanhoMax: 400 };

  const bom = { aprovacoes: 2, ciVerde: true, threadsAbertas: 0, aprovadoPorOwner: true, linhas: 120 };
  checks.push(['PR que satisfaz todas as regras pode mergear', podeMergear(bom, regra).pode === true]);

  checks.push(['CI vermelho bloqueia o merge', podeMergear({ ...bom, ciVerde: false }, regra).motivos.includes('CI vermelho')]);
  checks.push(['aprovações insuficientes bloqueiam', podeMergear({ ...bom, aprovacoes: 1 }, regra).pode === false]);
  checks.push(['threads abertas bloqueiam', podeMergear({ ...bom, threadsAbertas: 2 }, regra).pode === false]);
  checks.push(['sem code owner bloqueia', podeMergear({ ...bom, aprovadoPorOwner: false }, regra).pode === false]);
  checks.push(['PR gigante é sinalizado (revisão fica inviável)', podeMergear({ ...bom, linhas: 1200 }, regra).motivos.some((m) => m.includes('grande'))]);

  // Múltiplos problemas são reportados juntos (feedback completo, não um por vez).
  const ruim = podeMergear({ aprovacoes: 0, ciVerde: false, threadsAbertas: 3, aprovadoPorOwner: false, linhas: 900 }, regra);
  checks.push(['todos os motivos de bloqueio são reportados de uma vez', ruim.motivos.length === 5]);

  console.log('=== Módulo 9 — gate de pull request ===\n');
  console.log('PR bom:', podeMergear(bom, regra));
  console.log('PR ruim:', ruim, '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: o PR é uma porta de qualidade — aprovações, CI verde, threads resolvidas e code owner são gates automatizáveis; PR pequeno é o que torna a revisão real.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
