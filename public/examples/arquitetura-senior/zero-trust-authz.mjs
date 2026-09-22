/*
 * Módulo 17 (Arquitetura) — Segurança arquitetural: zero trust e multi-tenancy.
 * Rode com:  node zero-trust-authz.mjs
 *
 * Zero trust: nunca confie na rede — autorize CADA requisição por identidade,
 * contexto e menor privilégio, mesmo "interna". Em multi-tenancy, o isolamento de
 * tenant é uma invariante: um tenant nunca acessa o dado de outro. Provamos aqui.
 */

// Autorização por requisição: exige identidade válida, escopo e mesmo tenant do recurso.
function autorizar(req, recurso) {
  if (!req.identidade) return { permitido: false, motivo: 'sem identidade (zero trust nega por padrão)' };
  if (req.tenant !== recurso.tenant) return { permitido: false, motivo: 'cross-tenant: isolamento violado' };
  if (!req.escopos.includes(recurso.escopoNecessario)) return { permitido: false, motivo: 'menor privilégio: escopo ausente' };
  return { permitido: true };
}

function run() {
  const checks = [];
  const recurso = { tenant: 'acme', escopoNecessario: 'faturas:ler' };

  // Requisição sem identidade é negada, mesmo vinda da rede interna.
  checks.push(['zero trust: sem identidade, nega por padrão (mesmo interno)',
    autorizar({ identidade: null, tenant: 'acme', escopos: ['faturas:ler'], interno: true }, recurso).permitido === false]);

  // Requisição de outro tenant é bloqueada (isolamento multi-tenant).
  const cross = autorizar({ identidade: 'u1', tenant: 'globex', escopos: ['faturas:ler'] }, recurso);
  checks.push(['multi-tenancy: acesso cross-tenant é bloqueado', cross.permitido === false && cross.motivo.includes('cross-tenant')]);

  // Identidade certa, tenant certo, mas sem o escopo -> menor privilégio nega.
  checks.push(['menor privilégio: sem o escopo necessário, nega',
    autorizar({ identidade: 'u1', tenant: 'acme', escopos: ['pedidos:ler'] }, recurso).permitido === false]);

  // Tudo correto -> permite.
  checks.push(['identidade + mesmo tenant + escopo correto -> permite',
    autorizar({ identidade: 'u1', tenant: 'acme', escopos: ['faturas:ler'] }, recurso).permitido === true]);

  // A autorização é por requisição: a mesma identidade é negada em outro tenant.
  const u = { identidade: 'u1', tenant: 'acme', escopos: ['faturas:ler'] };
  checks.push(['autorização é por requisição/recurso, não "logou, pode tudo"',
    autorizar(u, recurso).permitido === true && autorizar(u, { tenant: 'globex', escopoNecessario: 'faturas:ler' }).permitido === false]);

  console.log('=== Módulo 17 — zero trust e isolamento de tenant ===\n');
  console.log('cross-tenant:', cross, '\n');
  let ok = 0;
  for (const [n, cond] of checks) { console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${n}`); if (cond) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: zero trust autoriza cada requisição por identidade/escopo/menor privilégio; em multi-tenancy, o isolamento de tenant é invariante.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
