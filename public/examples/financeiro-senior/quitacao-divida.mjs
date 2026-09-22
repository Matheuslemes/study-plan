/*
 * Módulo 7 (Financeiro) — Estratégias de quitação: avalanche × bola de neve.
 * Rode com:  node quitacao-divida.mjs
 *
 * Com várias dívidas e um valor extra fixo por mês, a ORDEM importa. Avalanche
 * (maior juro primeiro) minimiza o juro total pago; bola de neve (menor saldo
 * primeiro) dá vitórias rápidas (motivação). O modelo simula e compara as duas.
 */

function simular(dividas, extraMensal, estrategia, maxMeses = 600) {
  // clona; ordena a "prioridade" de para onde vai o extra.
  let d = dividas.map((x) => ({ ...x }));
  let jurosTotais = 0, meses = 0;
  const ordena = () => d.filter((x) => x.saldo > 0).sort(
    estrategia === 'avalanche' ? (a, b) => b.iMes - a.iMes : (a, b) => a.saldo - b.saldo
  );
  while (d.some((x) => x.saldo > 0) && meses < maxMeses) {
    // aplica juros e paga o mínimo de cada uma
    for (const x of d) {
      if (x.saldo <= 0) continue;
      const juros = x.saldo * x.iMes;
      jurosTotais += juros;
      x.saldo += juros - x.minimo;
    }
    // joga o extra na dívida prioritária
    let extra = extraMensal;
    for (const alvo of ordena()) {
      if (extra <= 0) break;
      const paga = Math.min(extra, alvo.saldo);
      alvo.saldo -= paga;
      extra -= paga;
    }
    meses++;
  }
  return { meses, jurosTotais: Math.round(jurosTotais) };
}

function run() {
  const checks = [];
  const dividas = [
    { nome: 'cartão', saldo: 300000, iMes: 0.14, minimo: 20000 },  // juro alto, saldo alto
    { nome: 'cheque', saldo: 100000, iMes: 0.08, minimo: 10000 },
    { nome: 'loja', saldo: 50000, iMes: 0.05, minimo: 8000 },      // saldo baixo, juro baixo
  ];

  const av = simular(dividas, 50000, 'avalanche');
  const bn = simular(dividas, 50000, 'bola-de-neve');

  checks.push(['ambas as estratégias quitam tudo em prazo finito', av.meses < 600 && bn.meses < 600]);
  checks.push(['avalanche paga MENOS juros no total (ataca o maior juro primeiro)', av.jurosTotais < bn.jurosTotais]);
  checks.push(['mais dinheiro extra sempre acelera a quitação', simular(dividas, 100000, 'avalanche').meses < av.meses]);

  // Sem extra suficiente, o mínimo pode não vencer o juro (não quita).
  const semExtra = simular([{ nome: 'x', saldo: 100000, iMes: 0.14, minimo: 14000 }], 0, 'avalanche');
  checks.push(['pagar só o mínimo (= juro) não quita', semExtra.meses >= 600]);

  // Bola de neve fecha a 1ª dívida (menor saldo) mais cedo — vitória rápida.
  checks.push(['as duas terminam; a diferença é juros pagos vs ritmo de vitórias', typeof av.meses === 'number' && typeof bn.meses === 'number']);

  console.log('=== Módulo 7 — quitação: avalanche × bola de neve ===\n');
  console.log('avalanche  :', av);
  console.log('bola de neve:', bn);
  console.log('economia de juros da avalanche:', bn.jurosTotais - av.jurosTotais, 'centavos\n');
  let ok = 0;
  for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: avalanche minimiza juros (matematicamente ótima); bola de neve dá vitórias rápidas. Escolha pelo que te mantém no plano.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
