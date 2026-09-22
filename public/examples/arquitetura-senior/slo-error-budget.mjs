/*
 * Módulo 16 (Arquitetura) — Observabilidade e operação: SLO e error budget.
 * Rode com:  node slo-error-budget.mjs
 *
 * Prontidão operacional não é "achar que está no ar": é medir. Um SLO define o alvo
 * (ex.: 99,9% de sucesso); o error budget é a folga de falha permitida. Quando o
 * budget acaba, freia-se o lançamento. Também checamos os quatro golden signals.
 */

// Error budget a partir do SLO, num total de requisições.
function orcamentoDeErro(sloPct, totalReq) {
  const permitido = Math.round((1 - sloPct / 100) * totalReq); // arredonda o ruído de float
  return { permitido, consumo: (falhas) => falhas / permitido };
}

// Golden signals presentes? (latência, tráfego, erros, saturação)
function golden(m) {
  return ['latencia', 'trafego', 'erros', 'saturacao'].every((s) => s in m);
}

function run() {
  const checks = [];

  // SLO 99,9% em 1.000.000 req => orçamento de 1000 falhas.
  const eb = orcamentoDeErro(99.9, 1_000_000);
  checks.push(['SLO 99,9% em 1M req permite 1000 falhas de orçamento', eb.permitido === 1000]);

  // Com 400 falhas, consumiu 40% do budget: pode continuar lançando.
  const consumo400 = eb.consumo(400);
  checks.push(['400 falhas = 40% do budget consumido (ainda há folga)', Math.abs(consumo400 - 0.4) < 1e-9 && consumo400 < 1]);

  // Com 1200 falhas, estourou o budget: congelar releases e estabilizar.
  const decisao = (c) => (c >= 1 ? 'congelar releases' : 'pode lançar');
  checks.push(['1200 falhas estouram o budget -> congelar releases', decisao(eb.consumo(1200)) === 'congelar releases']);
  checks.push(['dentro do budget -> pode lançar', decisao(consumo400) === 'pode lançar']);

  // Golden signals: um dashboard sem "saturação" está incompleto.
  checks.push(['dashboard completo cobre os 4 golden signals', golden({ latencia: 1, trafego: 1, erros: 1, saturacao: 1 })]);
  checks.push(['faltando saturação, a observabilidade está incompleta', !golden({ latencia: 1, trafego: 1, erros: 1 })]);

  console.log('=== Módulo 16 — SLO e error budget ===\n');
  console.log('orçamento (SLO 99,9% / 1M req):', eb.permitido, 'falhas');
  console.log('consumo com 400 falhas:', (consumo400 * 100).toFixed(0) + '%  ->', decisao(consumo400), '\n');
  let ok = 0;
  for (const [n, cond] of checks) { console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${n}`); if (cond) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: o SLO vira número e o error budget vira decisão (lançar × estabilizar); os golden signals dizem onde olhar.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
