/*
 * Módulo 18 (Arquitetura) — Team Topologies, lei de Conway e governança.
 * Rode com:  node conway-fitness.mjs
 *
 * A lei de Conway: a estrutura do sistema espelha a estrutura de comunicação da
 * organização. Se os times não conversam mas os serviços deles dependem um do outro,
 * há atrito. Aqui detectamos dependências de serviço que cruzam times sem comunicação.
 */

// Times, os serviços que cada um possui, e quais times conversam.
const times = { A: ['pedidos'], B: ['pagamento'], C: ['relatorios'] };
const comunicam = new Set(['A-B']); // A e B conversam; C está isolado
const par = (x, y) => [x, y].sort().join('-');
const donoDoServico = (svc) => Object.keys(times).find((t) => times[t].includes(svc));

// Dependências entre serviços.
const depsServico = [
  ['pedidos', 'pagamento'],   // A depende de B — e A-B conversam: ok
  ['relatorios', 'pedidos'],  // C depende de A — mas C-A NÃO conversam: atrito de Conway
];

// Fitness organizacional: dependência entre serviços de times que não se comunicam = risco.
function atritosDeConway() {
  return depsServico
    .map(([de, para]) => ({ de, para, td: donoDoServico(de), tp: donoDoServico(para) }))
    .filter((d) => d.td !== d.tp && !comunicam.has(par(d.td, d.tp)));
}

function run() {
  const checks = [];
  const atritos = atritosDeConway();

  checks.push(['dependência pedidos→pagamento é saudável (A e B conversam)',
    !atritos.some((a) => a.de === 'pedidos')]);
  checks.push(['dependência relatorios→pedidos é atrito de Conway (C e A não conversam)',
    atritos.some((a) => a.de === 'relatorios' && a.para === 'pedidos')]);
  checks.push(['exatamente 1 atrito organizacional detectado', atritos.length === 1]);

  // Governança: cada serviço tem um time dono (sem "órfãos").
  const orfaos = depsServico.flat().filter((s) => !donoDoServico(s));
  checks.push(['governança: todo serviço tem um time dono (sem órfãos)', orfaos.length === 0]);

  // Corrigir: fazer C e A se comunicarem (ou realinhar a fronteira) elimina o atrito.
  const comunicamCorrigido = new Set([...comunicam, 'A-C']);
  const aindaAtrito = depsServico
    .map(([de, para]) => ({ td: donoDoServico(de), tp: donoDoServico(para) }))
    .some((d) => d.td !== d.tp && !comunicamCorrigido.has(par(d.td, d.tp)));
  checks.push(['abrir comunicação A–C (ou realinhar times) elimina o atrito', aindaAtrito === false]);

  console.log('=== Módulo 18 — lei de Conway e fitness organizacional ===\n');
  console.log('atritos de Conway:', JSON.stringify(atritos), '\n');
  let ok = 0;
  for (const [n, cond] of checks) { console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${n}`); if (cond) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: pela lei de Conway, dependências entre serviços de times que não conversam viram atrito — alinhe fronteiras de time e de sistema.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
