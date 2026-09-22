/*
 * Módulo 7 (AWS) — DynamoDB: padrões de acesso e a partição quente.
 * Rode com:  node dynamo-particao.mjs
 *
 * A capacidade do DynamoDB é dividida entre partições. Uma CHAVE quente concentra
 * o tráfego numa partição e sofre throttling — mesmo com capacidade total sobrando.
 * A escolha da partition key (distribuir bem) é o que decide o desempenho.
 */

// Distribui N requisições pelas partições segundo a chave de cada uma.
function cargaPorParticao(requisicoes, chaveDe, nParticoes) {
  const carga = Array(nParticoes).fill(0);
  for (const r of requisicoes) carga[Math.abs(hash(chaveDe(r))) % nParticoes]++;
  return carga;
}
function hash(s) { let h = 0; for (const c of String(s)) h = (h * 31 + c.charCodeAt(0)) | 0; return h; }

function run() {
  const checks = [];
  const N = 4;                    // 4 partições
  const limitePorParticao = 300;  // capacidade por partição
  const reqs = Array.from({ length: 1000 }, (_, i) => ({ id: i, tenant: 't' + (i % 50), tipo: 'evento' }));

  // Chave BOA: distribui por tenant (50 valores) -> carga equilibrada.
  const boa = cargaPorParticao(reqs, (r) => r.tenant, N);
  const maxBoa = Math.max(...boa);
  checks.push(['chave distribuída (tenant): nenhuma partição estoura o limite', maxBoa <= limitePorParticao]);
  checks.push(['carga equilibrada entre as 4 partições', maxBoa - Math.min(...boa) < 100]);

  // Chave RUIM: todos com a mesma chave ("global") -> uma partição recebe tudo.
  const ruim = cargaPorParticao(reqs, () => 'global', N);
  const maxRuim = Math.max(...ruim);
  checks.push(['chave quente concentra 1000 req numa só partição', maxRuim === 1000]);
  checks.push(['a partição quente estoura o limite (throttling), mesmo com total sobrando', maxRuim > limitePorParticao]);

  // Capacidade total sobra nos dois casos — o problema é a DISTRIBUIÇÃO, não o total.
  const totalCapacidade = N * limitePorParticao; // 1200 >= 1000
  checks.push(['há capacidade total de sobra (1200 >= 1000): o gargalo é a chave', totalCapacidade >= reqs.length]);

  console.log('=== Módulo 7 — DynamoDB: partição quente ===\n');
  console.log('carga por partição (chave boa):', boa, '| max', maxBoa);
  console.log('carga por partição (chave quente):', ruim, '| max', maxRuim, '(limite ' + limitePorParticao + ')\n');
  let ok = 0;
  for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: no DynamoDB, a partition key decide tudo — uma chave quente sofre throttling com capacidade total sobrando; distribua o acesso.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
