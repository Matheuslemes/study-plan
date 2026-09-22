/*
 * Módulo 23 (AWS) — Multi-região: failover ativo-passivo e RPO.
 * Rode com:  node multi-regiao-failover.mjs
 *
 * Multi-região protege contra a falha de uma região inteira. No ativo-passivo, o
 * roteamento (health check) manda o tráfego à região saudável; se a primária cai,
 * faz failover para a secundária. O RPO vem do atraso de replicação (o que se perde).
 */

// Roteia para a primária se saudável; senão, para a secundária saudável; senão, indisponível.
function rotear(regioes) {
  const prim = regioes.find((r) => r.papel === 'primaria');
  if (prim.saudavel) return { destino: prim.nome, failover: false };
  const sec = regioes.find((r) => r.papel === 'secundaria' && r.saudavel);
  if (sec) return { destino: sec.nome, failover: true };
  return { destino: null, failover: false, indisponivel: true };
}

// Dados potencialmente perdidos no failover = atraso de replicação × taxa de escrita.
function dadosPerdidos(replicacaoLagSeg, escritasPorSeg) {
  return replicacaoLagSeg * escritasPorSeg;
}

function run() {
  const checks = [];
  const saudavel = () => [
    { nome: 'us-east-1', papel: 'primaria', saudavel: true },
    { nome: 'sa-east-1', papel: 'secundaria', saudavel: true },
  ];

  // Tudo saudável -> tráfego na primária, sem failover.
  const normal = rotear(saudavel());
  checks.push(['operação normal roteia para a primária', normal.destino === 'us-east-1' && !normal.failover]);

  // Primária cai -> failover para a secundária.
  const caiPrim = saudavel(); caiPrim[0].saudavel = false;
  const fo = rotear(caiPrim);
  checks.push(['primária indisponível -> failover para a secundária', fo.destino === 'sa-east-1' && fo.failover === true]);

  // Primária volta -> failback para a primária (roteia de novo à saudável primária).
  checks.push(['primária saudável de novo -> volta a rotear para ela', rotear(saudavel()).destino === 'us-east-1']);

  // Ambas caem -> indisponível (nenhuma região saudável).
  const ambas = saudavel().map((r) => ({ ...r, saudavel: false }));
  checks.push(['as duas regiões fora -> indisponível', rotear(ambas).indisponivel === true]);

  // RPO: com replicação assíncrona (lag 2s) e 50 escritas/s, o failover pode perder ~100 registros.
  checks.push(['RPO async: lag 2s × 50 escritas/s ≈ 100 registros em risco', dadosPerdidos(2, 50) === 100]);
  // Replicação síncrona (lag 0) -> RPO zero, mas custa latência de escrita.
  checks.push(['replicação síncrona (lag 0) -> RPO zero', dadosPerdidos(0, 50) === 0]);

  console.log('=== Módulo 23 — multi-região: failover e RPO ===\n');
  console.log('normal:', normal, '| primária caiu:', fo, '| ambas caíram:', rotear(ambas));
  console.log('RPO async (lag 2s, 50w/s):', dadosPerdidos(2, 50), 'registros\n');
  let ok = 0;
  for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: multi-região com health check roteia para a saudável e faz failover quando a primária cai; o RPO é o atraso de replicação — síncrono zera o RPO ao custo de latência.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
