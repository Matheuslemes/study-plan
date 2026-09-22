/*
 * Módulo 13 (AWS) — Backup, restore e DR: escolher por RTO, RPO e custo.
 * Rode com:  node dr-rto-rpo.mjs
 *
 * Disaster recovery não é "ter backup": é escolher a estratégia pelo RTO (tempo até
 * voltar), RPO (dados que se pode perder) e custo. Aqui modelamos as quatro
 * estratégias canônicas e escolhemos a MAIS BARATA que atende ao requisito.
 */

// RTO/RPO em minutos; custo relativo (1 = mais barato).
const ESTRATEGIAS = [
  { nome: 'backup-restore', rtoMin: 480, rpoMin: 240, custo: 1 },
  { nome: 'pilot-light', rtoMin: 60, rpoMin: 30, custo: 2 },
  { nome: 'warm-standby', rtoMin: 15, rpoMin: 5, custo: 4 },
  { nome: 'active-active', rtoMin: 1, rpoMin: 0, custo: 8 },
];

// A mais barata que satisfaz RTO e RPO exigidos.
function escolher(rtoAlvo, rpoAlvo) {
  return ESTRATEGIAS
    .filter((e) => e.rtoMin <= rtoAlvo && e.rpoMin <= rpoAlvo)
    .sort((a, b) => a.custo - b.custo)[0] || null;
}

function run() {
  const checks = [];

  // Requisito frouxo (RTO 8h, RPO 4h) -> backup-restore (mais barato) basta.
  checks.push(['RTO 8h / RPO 4h -> backup-restore (mais barato)', escolher(480, 240).nome === 'backup-restore']);

  // Requisito de minutos (RTO 20min, RPO 10min) -> warm-standby.
  checks.push(['RTO 20min / RPO 10min -> warm-standby', escolher(20, 10).nome === 'warm-standby']);

  // RPO zero (não pode perder dado) -> só active-active.
  checks.push(['RPO 0 exige active-active', escolher(5, 0).nome === 'active-active']);

  // Requisito impossível de atender (RTO menor que qualquer estratégia)... aqui 0.5min < 1.
  checks.push(['requisito abaixo do mínimo viável retorna nulo', escolher(0.5, 0) === null]);

  // Trade-off monotônico: RTO/RPO menores custam mais.
  // ordenado por RTO crescente, o custo deve DECRESCER (RTO menor custa mais).
  const ordenadoPorRto = [...ESTRATEGIAS].sort((a, b) => a.rtoMin - b.rtoMin);
  const custoCaiQuandoRtoSobe = ordenadoPorRto.every((e, i, arr) => i === 0 || e.custo <= arr[i - 1].custo);
  checks.push(['quanto menor o RTO, maior o custo (trade-off explícito)', custoCaiQuandoRtoSobe]);

  // Nunca pagar a mais: a escolha é sempre a de menor custo que atende.
  const esc = escolher(60, 30);
  const maisBaratasQueAtendem = ESTRATEGIAS.filter((e) => e.rtoMin <= 60 && e.rpoMin <= 30);
  checks.push(['escolhe o mínimo custo entre as que atendem', esc.custo === Math.min(...maisBaratasQueAtendem.map((e) => e.custo))]);

  console.log('=== Módulo 13 — DR por RTO/RPO/custo ===\n');
  for (const e of ESTRATEGIAS) console.log(`  ${e.nome.padEnd(16)} RTO=${e.rtoMin}min RPO=${e.rpoMin}min custo=${e.custo}x`);
  console.log('\nescolha p/ RTO 20 / RPO 10:', escolher(20, 10).nome, '\n');
  let ok = 0;
  for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: DR se escolhe por RTO, RPO e custo — não existe "melhor", existe a mais barata que atende ao requisito de negócio.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
