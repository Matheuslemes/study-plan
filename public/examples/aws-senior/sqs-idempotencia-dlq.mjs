/*
 * Módulo 9 (AWS) — SQS/SNS/EventBridge: at-least-once, idempotência e DLQ.
 * Rode com:  node sqs-idempotencia-dlq.mjs
 *
 * Filas entregam "pelo menos uma vez": duplicatas acontecem. O consumidor precisa
 * ser idempotente (dedup por id), e uma mensagem "veneno" (que sempre falha) deve
 * ir para a Dead Letter Queue após maxReceiveCount tentativas — sem travar a fila.
 */

function criarConsumidor({ maxReceiveCount = 3 } = {}) {
  const processados = new Set();
  const dlq = [];
  let aplicados = 0;
  const recebidos = {};           // conta entregas por id (visibility timeout expira e reentrega)
  return {
    dlq,
    get aplicados() { return aplicados; },
    entregar(msg, falhaSempre = false) {
      recebidos[msg.id] = (recebidos[msg.id] || 0) + 1;
      if (processados.has(msg.id)) return 'duplicata-ignorada';
      if (falhaSempre) {
        if (recebidos[msg.id] >= maxReceiveCount) { dlq.push(msg); return 'para-dlq'; }
        return 'falhou-reentrega';
      }
      processados.add(msg.id); aplicados++; return 'ok';
    },
  };
}

function run() {
  const checks = [];
  const c = criarConsumidor({ maxReceiveCount: 3 });

  // Idempotência: a mesma mensagem entregue 2x é aplicada só 1x.
  c.entregar({ id: 'a' });
  const dup = c.entregar({ id: 'a' });
  checks.push(['duplicata é ignorada (idempotência por id)', dup === 'duplicata-ignorada' && c.aplicados === 1]);

  // Mensagem boa distinta é aplicada normalmente.
  c.entregar({ id: 'b' });
  checks.push(['mensagens distintas são aplicadas', c.aplicados === 2]);

  // Mensagem veneno: falha, reentrega e vai para a DLQ na 3ª tentativa.
  const r1 = c.entregar({ id: 'x' }, true);
  const r2 = c.entregar({ id: 'x' }, true);
  const r3 = c.entregar({ id: 'x' }, true);
  checks.push(['veneno é reentregue nas 2 primeiras tentativas', r1 === 'falhou-reentrega' && r2 === 'falhou-reentrega']);
  checks.push(['veneno vai para a DLQ na 3ª tentativa (maxReceiveCount)', r3 === 'para-dlq' && c.dlq.length === 1]);

  // A DLQ isola o veneno: a fila principal segue processando o resto.
  c.entregar({ id: 'd' });
  checks.push(['após a DLQ, a fila principal continua (mensagem d aplicada)', c.aplicados === 3]);
  checks.push(['veneno não foi aplicado (nunca teve sucesso)', !c.dlq.some((m) => m.id === 'a') && c.dlq[0].id === 'x']);

  console.log('=== Módulo 9 — SQS: idempotência e DLQ ===\n');
  console.log('aplicados:', c.aplicados, '| DLQ:', JSON.stringify(c.dlq), '\n');
  let ok = 0;
  for (const [n, ch] of checks) { console.log(`  ${ch ? 'ok  ' : 'FALHOU'} ${n}`); if (ch) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: fila é at-least-once — o consumidor idempotente evita efeito duplicado, e a DLQ isola o "veneno" após N tentativas sem travar a fila.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
