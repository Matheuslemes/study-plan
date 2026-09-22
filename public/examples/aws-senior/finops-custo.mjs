/*
 * Módulo 18 (AWS) — FinOps: on-demand × reserved × spot e custo unitário.
 * Rode com:  node finops-custo.mjs
 *
 * Custo na nuvem é decisão de engenharia. Aqui comparamos os modelos de compra
 * (on-demand, reserved 1 ano, spot), calculamos o custo unitário (por requisição) e
 * o ponto de equilíbrio do reserved — quando o compromisso vale a pena. Centavos/hora.
 */

const ON_DEMAND = 10;                       // 10 centavos/hora
const RESERVED_HORA = 6;                    // reserved: 6 c/h, mas paga-se 24h/dia o ano todo
const SPOT = 3;                             // spot: 3 c/h, porém interruptível
const HORAS_MES = 730;

// Custo mensal de N instâncias usadas `horasUsoMes` horas por mês, por modelo.
function custoMensal(modelo, n, horasUsoMes) {
  if (modelo === 'on-demand') return n * horasUsoMes * ON_DEMAND;
  if (modelo === 'reserved') return n * HORAS_MES * RESERVED_HORA; // paga a capacidade cheia
  if (modelo === 'spot') return n * horasUsoMes * SPOT;
  throw new Error('modelo?');
}

function run() {
  const checks = [];

  // Uso 24/7 (730h): reserved bate on-demand.
  const odCheio = custoMensal('on-demand', 1, 730);
  const rvCheio = custoMensal('reserved', 1, 730);
  checks.push(['uso 24/7: reserved (6c/h) < on-demand (10c/h)', rvCheio < odCheio]);

  // Uso baixo (100h/mês): on-demand ganha do reserved (que paga 730h mesmo sem usar).
  const odBaixo = custoMensal('on-demand', 1, 100);
  const rvBaixo = custoMensal('reserved', 1, 100);
  checks.push(['uso baixo (100h): on-demand < reserved (reserved paga ociosidade)', odBaixo < rvBaixo]);

  // Ponto de equilíbrio: horas/mês em que on-demand == reserved.
  const breakEven = (HORAS_MES * RESERVED_HORA) / ON_DEMAND; // 730*6/10 = 438h
  checks.push(['break-even do reserved ≈ 438h/mês (60% de utilização)', Math.round(breakEven) === 438]);
  checks.push(['acima do break-even o reserved compensa; abaixo, não',
    custoMensal('reserved', 1, 730) < custoMensal('on-demand', 1, 500) &&
    custoMensal('reserved', 1, 730) > custoMensal('on-demand', 1, 400)]);

  // Spot é o mais barato por hora — para carga tolerante a interrupção.
  checks.push(['spot é o menor custo/hora (para workload interruptível)', SPOT < RESERVED_HORA && SPOT < ON_DEMAND]);

  // Custo unitário: custo total / requisições servidas.
  const reqsMes = 1_000_000;
  const custoUnit = odCheio / reqsMes; // centavos por requisição
  checks.push(['custo unitário = custo / requisições (0.0073 c/req)', Math.abs(custoUnit - 0.0073) < 1e-9]);

  console.log('=== Módulo 18 — FinOps: modelos de compra e custo unitário ===\n');
  console.log('24/7  -> on-demand:', odCheio, '| reserved:', rvCheio, 'centavos/mês');
  console.log('100h  -> on-demand:', odBaixo, '| reserved:', rvBaixo);
  console.log('break-even do reserved:', Math.round(breakEven), 'h/mês | custo unitário 24/7:', custoUnit.toFixed(4), 'c/req\n');
  let ok = 0;
  for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: escolha o modelo pela UTILIZAÇÃO — reserved acima do break-even, on-demand para uso baixo/variável, spot para carga interruptível; e acompanhe o custo unitário.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
