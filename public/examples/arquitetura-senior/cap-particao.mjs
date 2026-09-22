/*
 * Módulo 10 (Arquitetura) — Fundamentos distribuídos: CAP e falha parcial.
 * Rode com:  node cap-particao.mjs
 *
 * Sob uma partição de rede (P), um sistema distribuído escolhe: ou continua
 * respondendo arriscando dados divergentes (AP), ou recusa para não violar a
 * consistência (CP). Não dá para ter C e A juntos durante a partição — é o teorema CAP.
 */

// Dois nós replicados. Sob partição, eles não conseguem se sincronizar.
function sistema(modo) { // 'CP' (consistente) ou 'AP' (disponível)
  return {
    modo,
    escrever(no, valor, particionado) {
      if (particionado && modo === 'CP') return { ok: false, motivo: 'recusa: não pode garantir consistência' };
      no.valor = valor;
      return { ok: true };
    },
  };
}

function run() {
  const checks = [];

  // CP: sob partição, recusa a escrita para não divergir.
  const cp = sistema('CP');
  const noCp = { valor: 'v0' };
  const rCp = cp.escrever(noCp, 'v1', true);
  checks.push(['CP sob partição: recusa a escrita (preserva consistência)', rCp.ok === false && noCp.valor === 'v0']);

  // AP: sob partição, aceita a escrita (fica disponível) mas pode divergir.
  const ap = sistema('AP');
  const noA = { valor: 'v0' }, noB = { valor: 'v0' };
  ap.escrever(noA, 'vA', true);   // partição: só o nó A recebe
  checks.push(['AP sob partição: aceita a escrita (fica disponível)', noA.valor === 'vA']);
  checks.push(['AP sob partição: os nós divergem (A=vA, B=v0)', noA.valor !== noB.valor]);

  // Sem partição, ambos os modos escrevem normalmente.
  const semPart = sistema('CP').escrever({ valor: 'x' }, 'y', false);
  checks.push(['sem partição, CP escreve normalmente (C e A juntos)', semPart.ok === true]);

  // A escolha CAP só aparece DURANTE a partição.
  checks.push(['a tensão C×A só existe durante a partição (P é dado, não escolha)', rCp.ok !== ap.escrever({ valor: '0' }, '1', true).ok]);

  console.log('=== Módulo 10 — CAP e falha parcial ===\n');
  console.log('CP sob partição:', rCp, '| AP: nós divergem A=' + noA.valor + ' B=' + noB.valor, '\n');
  let ok = 0;
  for (const [n, cond] of checks) { console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${n}`); if (cond) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: a partição é um fato, não uma opção; durante ela você escolhe consistência (CP) OU disponibilidade (AP), nunca as duas.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
