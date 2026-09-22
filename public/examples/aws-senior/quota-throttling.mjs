/*
 * Módulo 12 (AWS) — Quotas e throttling: o token bucket.
 * Rode com:  node quota-throttling.mjs
 *
 * APIs da AWS (e as suas) limitam a taxa com um "token bucket": tokens repõem a uma
 * taxa fixa; cada requisição gasta um. Rajadas até a capacidade passam; acima disso,
 * a requisição é lançada (throttling / HTTP 429). Aqui simulamos o algoritmo real.
 */

function criarBucket({ capacidade, reposicaoPorSeg }) {
  let tokens = capacidade;
  let ultimo = 0;
  return {
    permitir(agoraSeg) {
      tokens = Math.min(capacidade, tokens + (agoraSeg - ultimo) * reposicaoPorSeg);
      ultimo = agoraSeg;
      if (tokens >= 1) { tokens -= 1; return true; }
      return false; // throttled (429)
    },
    get tokens() { return tokens; },
  };
}

function run() {
  const checks = [];
  const b = criarBucket({ capacidade: 5, reposicaoPorSeg: 1 });

  // Rajada inicial: 5 requisições no instante 0 passam (capacidade), a 6ª é barrada.
  const rajada = [];
  for (let i = 0; i < 6; i++) rajada.push(b.permitir(0));
  checks.push(['rajada de 5 passa (capacidade do bucket)', rajada.filter(Boolean).length === 5]);
  checks.push(['a 6ª requisição no mesmo instante é lançada (throttling)', rajada[5] === false]);

  // Após 1s, 1 token repôs -> 1 requisição passa, a próxima é barrada.
  checks.push(['após 1s repõe 1 token: 1 passa', b.permitir(1) === true]);
  checks.push(['sem mais tokens, a seguinte é barrada', b.permitir(1) === false]);

  // Taxa sustentada = reposição: 1 req/s por 10s passa todas.
  const b2 = criarBucket({ capacidade: 5, reposicaoPorSeg: 1 });
  let ok10 = 0;
  for (let t = 0; t < 10; t++) if (b2.permitir(t)) ok10++;
  checks.push(['na taxa de reposição (1/s), todas passam', ok10 === 10]);

  // Acima da reposição, uma fração é barrada (o cliente deve fazer backoff).
  const b3 = criarBucket({ capacidade: 5, reposicaoPorSeg: 1 });
  let passou = 0, barrou = 0;
  for (let i = 0; i < 20; i++) { if (b3.permitir(0.1 * i)) passou++; else barrou++; } // ~10 req/s
  checks.push(['acima da taxa sustentada, parte é barrada (429)', barrou > 0 && passou < 20]);

  console.log('=== Módulo 12 — quota e throttling (token bucket) ===\n');
  console.log('rajada (6 no t=0):', rajada, '| taxa sustentada 1/s por 10s ->', ok10, 'ok');
  console.log('10 req/s por 2s -> passou', passou, 'barrou', barrou, '\n');
  let okc = 0;
  for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) okc++; }
  console.log(`\n${okc}/${checks.length} checagens passaram.`);
  console.log('Lição: quota é um token bucket — rajadas cabem até a capacidade, o excesso é throttled (429), e a taxa sustentável é a de reposição. Trate 429 com backoff.');
  return okc === checks.length;
}
process.exit(run() ? 0 : 1);
