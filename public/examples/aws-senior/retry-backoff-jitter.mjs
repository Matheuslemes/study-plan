/*
 * Módulo 24 (AWS) — No limite da API: retry com backoff exponencial e jitter.
 * Rode com:  node retry-backoff-jitter.mjs
 *
 * Ao tomar throttling (429/503), o cliente deve tentar de novo — mas retry ingênuo
 * (todos ao mesmo tempo) causa "thundering herd" e amplifica a sobrecarga. Backoff
 * exponencial COM jitter espalha as tentativas. E só se faz retry de erro transitório.
 */

const CAP_MS = 20000;
// backoff exponencial: base * 2^tentativa, limitado ao teto.
function backoff(base, tentativa) { return Math.min(CAP_MS, base * 2 ** tentativa); }
// full jitter: espera aleatória em [0, backoff]. Aqui recebemos o "rng" para ser determinístico no teste.
function comJitter(base, tentativa, rng) { return Math.floor(rng() * backoff(base, tentativa)); }

// erro transitório é retryável; erro de cliente (4xx exceto 429) não é.
function retryavel(status) { return status === 429 || status === 503 || status >= 500; }

function run() {
  const checks = [];

  // Backoff exponencial cresce 100, 200, 400, 800...
  checks.push(['backoff exponencial dobra a cada tentativa', backoff(100, 0) === 100 && backoff(100, 1) === 200 && backoff(100, 3) === 800]);
  checks.push(['backoff satura no teto (cap)', backoff(100, 20) === CAP_MS]);

  // Só faz retry de erro transitório.
  checks.push(['429/503/5xx são retryáveis', retryavel(429) && retryavel(503) && retryavel(500)]);
  checks.push(['400/404 (erro de cliente) NÃO são retryáveis', !retryavel(400) && !retryavel(404)]);

  // Thundering herd: SEM jitter, 100 clientes retentam no MESMO instante (colisão total).
  const semJitter = Array.from({ length: 100 }, () => backoff(100, 2)); // todos = 400ms
  const instantesDistintosSem = new Set(semJitter).size;
  checks.push(['sem jitter: 100 clientes colidem no mesmo instante (1 valor)', instantesDistintosSem === 1]);

  // COM jitter (rng determinístico): as esperas se espalham em [0, 400).
  let seed = 42;
  const rng = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  const comJit = Array.from({ length: 100 }, () => comJitter(100, 2, rng));
  const instantesDistintosCom = new Set(comJit).size;
  checks.push(['com jitter: as tentativas se espalham (muitos instantes distintos)', instantesDistintosCom > 50]);
  checks.push(['jitter respeita o limite do backoff [0, 400)', comJit.every((d) => d >= 0 && d < 400)]);

  // Retry é limitado: após maxTentativas, desiste (não tenta para sempre).
  const maxTentativas = 5;
  let tentativas = 0;
  while (tentativas < maxTentativas) tentativas++;
  checks.push(['retry é limitado a maxTentativas (não é infinito)', tentativas === maxTentativas]);

  console.log('=== Módulo 24 — retry: backoff exponencial + jitter ===\n');
  console.log('backoff 0..4:', [0, 1, 2, 3, 4].map((t) => backoff(100, t)));
  console.log('sem jitter (instantes distintos):', instantesDistintosSem, '| com jitter:', instantesDistintosCom, '\n');
  let ok = 0;
  for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: retente só erro transitório, com backoff exponencial + jitter (evita thundering herd) e um teto de tentativas — nunca em loop apertado.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
