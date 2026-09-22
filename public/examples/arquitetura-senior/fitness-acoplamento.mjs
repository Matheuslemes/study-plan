/*
 * Módulo 4 (Arquitetura) — Modularidade: acoplamento, coesão e fitness function.
 * Rode com:  node fitness-acoplamento.mjs
 *
 * Uma fitness function é um teste automático que protege uma regra de arquitetura.
 * Aqui medimos acoplamento (fan-out) e reprovamos, como no ArchUnit, uma dependência
 * proibida: o domínio não pode depender da infraestrutura.
 */

// Grafo de dependências entre camadas (quem importa quem).
const deps = {
  ui: ['aplicacao'],
  aplicacao: ['dominio'],
  dominio: [],                 // núcleo: não depende de ninguém
  infra: ['dominio'],
};

const fanOut = (g, m) => g[m].length;

// Fitness function: nenhuma camada em `origem` pode depender de `proibida`.
function violacoesDeDependencia(g, origem, proibida) {
  return origem.filter((m) => (g[m] || []).includes(proibida));
}

function run() {
  const checks = [];

  // Regra 1: o domínio não depende de ninguém (fan-out 0).
  checks.push(['o domínio é estável: fan-out 0', fanOut(deps, 'dominio') === 0]);

  // Regra 2 (fitness): domínio e aplicação NÃO podem depender de infra.
  const violacoesOk = violacoesDeDependencia(deps, ['dominio', 'aplicacao'], 'infra');
  checks.push(['fitness passa: nem domínio nem aplicação dependem de infra', violacoesOk.length === 0]);

  // Introduz uma violação (regressão de arquitetura) e a fitness deve pegá-la.
  const depsRuim = { ...deps, dominio: ['infra'] };  // domínio passou a depender de infra
  const violacoes = violacoesDeDependencia(depsRuim, ['dominio', 'aplicacao'], 'infra');
  checks.push(['fitness REPROVA quando o domínio passa a depender de infra', violacoes.length === 1 && violacoes[0] === 'dominio']);

  // Coesão/acoplamento: a UI acoplada a tudo tem fan-out alto.
  const depsAcoplado = { ...deps, ui: ['aplicacao', 'dominio', 'infra'] };
  checks.push(['acoplamento medível: UI acoplada tem fan-out 3', fanOut(depsAcoplado, 'ui') === 3]);
  checks.push(['a UI bem modular depende só da aplicação (fan-out 1)', fanOut(deps, 'ui') === 1]);

  console.log('=== Módulo 4 — modularidade e fitness function ===\n');
  console.log('deps:', JSON.stringify(deps));
  console.log('violações (bom design):', violacoesOk.length, '| violações (design ruim):', violacoes.join(','), '\n');
  let ok = 0;
  for (const [n, cond] of checks) { console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${n}`); if (cond) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: acoplamento se mede e fronteiras se protegem com fitness functions automáticas — como um teste de regressão de arquitetura.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
