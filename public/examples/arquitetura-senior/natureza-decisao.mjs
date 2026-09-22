/*
 * Módulo 1 (Arquitetura) — Decisão arquitetural × detalhe, por custo de reversão.
 * Rode com:  node natureza-decisao.mjs
 *
 * Arquitetura é o conjunto de decisões caras de reverter. Aqui classificamos
 * decisões por custo de reversão e alcance (cruza fronteiras?) e mostramos o
 * "último momento responsável": adiar enquanto o custo de decidir errado > o de esperar.
 */

// Uma decisão: custo de reverter (1..5) e se cruza fronteiras de equipe/serviço.
function classificar(d) {
  const arquitetural = d.custoReversao >= 4 || d.cruzaFronteiras;
  return { ...d, tipo: arquitetural ? 'arquitetural' : 'detalhe' };
}

// Último momento responsável: adiar até o custo de errar agora superar o de esperar.
function decidirAgora(custoErrarAgora, custoEsperar) {
  return custoErrarAgora >= custoEsperar;
}

const decisoes = [
  { nome: 'formato de dados persistido', custoReversao: 5, cruzaFronteiras: true },
  { nome: 'monólito vs microsserviços', custoReversao: 5, cruzaFronteiras: true },
  { nome: 'biblioteca de formatação de data', custoReversao: 1, cruzaFronteiras: false },
  { nome: 'nome de uma variável interna', custoReversao: 1, cruzaFronteiras: false },
  { nome: 'contrato de API pública', custoReversao: 4, cruzaFronteiras: true },
];

function run() {
  const checks = [];
  const c = decisoes.map(classificar);
  const arq = c.filter((x) => x.tipo === 'arquitetural').map((x) => x.nome);
  const det = c.filter((x) => x.tipo === 'detalhe').map((x) => x.nome);

  checks.push(['formato de dados persistido é arquitetural (caro de reverter)', c[0].tipo === 'arquitetural']);
  checks.push(['nome de variável é detalhe (barato e local)', c[3].tipo === 'detalhe']);
  checks.push(['contrato de API pública é arquitetural (cruza fronteiras)', c[4].tipo === 'arquitetural']);
  checks.push(['3 decisões arquiteturais e 2 detalhes', arq.length === 3 && det.length === 2]);
  checks.push(['último momento responsável: adiar quando esperar custa menos que errar', decidirAgora(2, 5) === false]);
  checks.push(['...e decidir quando errar agora custa mais que esperar', decidirAgora(8, 5) === true]);

  console.log('=== Módulo 1 — natureza da arquitetura: decisão × detalhe ===\n');
  console.log('arquiteturais:', arq.join(' | '));
  console.log('detalhes     :', det.join(' | '), '\n');
  let ok = 0;
  for (const [n, cond] of checks) { console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${n}`); if (cond) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: o que é caro de reverter ou cruza fronteiras é arquitetural — decida cedo e registre; o resto adie.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
