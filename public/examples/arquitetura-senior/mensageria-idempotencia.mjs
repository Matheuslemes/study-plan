/*
 * Módulo 9 (Arquitetura) — Integração: síncrono × assíncrono e idempotência.
 * Rode com:  node mensageria-idempotencia.mjs
 *
 * Mensageria assíncrona desacopla, mas entrega "pelo menos uma vez": a mesma
 * mensagem pode chegar repetida. O consumidor precisa ser IDEMPOTENTE — processar
 * duas vezes tem o mesmo efeito de processar uma. Aqui provamos isso.
 */

// Consumidor idempotente: deduplica por id de mensagem já processado.
function criarConsumidorIdempotente() {
  const processados = new Set();
  let saldo = 0;
  return {
    processar(msg) {
      if (processados.has(msg.id)) return { aplicado: false, saldo }; // já visto: ignora
      processados.add(msg.id);
      saldo += msg.valor;
      return { aplicado: true, saldo };
    },
    get saldo() { return saldo; },
  };
}

// Consumidor ingênuo (não idempotente): aplica sempre, sofre com duplicatas.
function criarConsumidorIngenuo() {
  let saldo = 0;
  return { processar(msg) { saldo += msg.valor; return { saldo }; }, get saldo() { return saldo; } };
}

function run() {
  const checks = [];
  // A fila entrega a mesma mensagem (id=1) duas vezes — "at least once".
  const fila = [{ id: 1, valor: 100 }, { id: 2, valor: 50 }, { id: 1, valor: 100 }];

  const idem = criarConsumidorIdempotente();
  for (const m of fila) idem.processar(m);
  checks.push(['idempotente: duplicata ignorada, saldo correto = 150', idem.saldo === 150]);

  const ingenuo = criarConsumidorIngenuo();
  for (const m of fila) ingenuo.processar(m);
  checks.push(['ingênuo: a duplicata é aplicada duas vezes, saldo errado = 250', ingenuo.saldo === 250]);

  // Reprocessar tudo de novo (redelivery total) não muda o idempotente.
  for (const m of fila) idem.processar(m);
  checks.push(['reentrega total não altera o idempotente (ainda 150)', idem.saldo === 150]);

  // Síncrono acopla no tempo (o chamador espera); assíncrono desacopla.
  const sincrono = { acoplaNoTempo: true };
  const assincrono = { acoplaNoTempo: false, exigeIdempotencia: true };
  checks.push(['síncrono acopla no tempo; assíncrono desacopla mas exige idempotência',
    sincrono.acoplaNoTempo && !assincrono.acoplaNoTempo && assincrono.exigeIdempotencia]);

  console.log('=== Módulo 9 — integração assíncrona e idempotência ===\n');
  console.log('fila (com duplicata id=1):', JSON.stringify(fila));
  console.log('saldo idempotente:', idem.saldo, '| saldo ingênuo:', ingenuo.saldo, '\n');
  let ok = 0;
  for (const [n, cond] of checks) { console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${n}`); if (cond) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: mensageria entrega "pelo menos uma vez"; o consumidor idempotente (dedup por id) é o que torna o assíncrono seguro.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
