/*
 * Módulo 11 (Arquitetura) — Dados intensivos: particionamento por hash consistente.
 * Rode com:  node particionamento-hash.mjs
 *
 * Para escalar dados, particiona-se por chave entre nós. Com módulo simples
 * (hash % N), mudar N remapeia QUASE TUDO. O hash consistente (anel) remapeia só
 * uma fração ao adicionar/remover um nó — a base de sistemas de dados particionados.
 */

import { createHash } from 'node:crypto';
const h = (s) => parseInt(createHash('sha1').update(String(s)).digest('hex').slice(0, 8), 16);

// Estratégia ingênua: nó = hash % N.
const moduloSimples = (chave, nos) => nos[h(chave) % nos.length];

// Hash consistente: cada nó ocupa pontos no anel; a chave vai ao próximo nó horário.
function anel(nos, vnodes = 40) {
  const pontos = [];
  for (const no of nos) for (let v = 0; v < vnodes; v++) pontos.push({ pos: h(no + '#' + v), no });
  pontos.sort((a, b) => a.pos - b.pos);
  return (chave) => (pontos.find((p) => p.pos >= h(chave)) || pontos[0]).no;
}

const CHAVES = Array.from({ length: 1000 }, (_, i) => 'user:' + i);
function remapeados(mapA, mapB) {
  return CHAVES.filter((k) => mapA(k) !== mapB(k)).length / CHAVES.length;
}

function run() {
  const checks = [];

  // Módulo simples: de 4 para 5 nós remapeia a maioria das chaves.
  const mod4 = (k) => moduloSimples(k, ['n0', 'n1', 'n2', 'n3']);
  const mod5 = (k) => moduloSimples(k, ['n0', 'n1', 'n2', 'n3', 'n4']);
  const fracModulo = remapeados(mod4, mod5);
  checks.push(['módulo simples remapeia a maioria ao ir de 4→5 nós (>60%)', fracModulo > 0.6]);

  // Hash consistente: de 4 para 5 nós remapeia uma fração pequena.
  const anel4 = anel(['n0', 'n1', 'n2', 'n3']);
  const anel5 = anel(['n0', 'n1', 'n2', 'n3', 'n4']);
  const fracAnel = remapeados(anel4, anel5);
  checks.push(['hash consistente remapeia pouco ao ir de 4→5 nós (<35%)', fracAnel < 0.35]);
  checks.push(['hash consistente é muito melhor que módulo na reconfiguração', fracAnel < fracModulo]);

  // Determinismo: a mesma chave vai sempre ao mesmo nó.
  checks.push(['particionamento é determinístico (mesma chave, mesmo nó)', anel4('user:42') === anel4('user:42')]);

  // Distribuição razoável entre os nós (nenhum nó fica com >45% das chaves).
  const dist = {};
  for (const k of CHAVES) dist[anel4(k)] = (dist[anel4(k)] || 0) + 1;
  const maxFrac = Math.max(...Object.values(dist)) / CHAVES.length;
  checks.push(['distribuição equilibrada (nenhum nó com >45% das chaves)', maxFrac < 0.45]);

  console.log('=== Módulo 11 — particionamento e hash consistente ===\n');
  console.log('remapeadas 4→5:  módulo=' + (fracModulo * 100).toFixed(0) + '%   anel=' + (fracAnel * 100).toFixed(0) + '%');
  console.log('distribuição no anel:', JSON.stringify(dist), '\n');
  let ok = 0;
  for (const [n, cond] of checks) { console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${n}`); if (cond) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: o hash consistente troca "remapear tudo" por "remapear uma fração" quando o cluster muda — a base para escalar dados.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
