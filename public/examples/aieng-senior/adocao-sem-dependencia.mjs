/*
 * Módulo 14 (AIeng) — Liderança e adoção sem dependência cega.
 * Rode com:  node adocao-sem-dependencia.mjs
 *
 * Adotar IA bem é aumentar a capacidade do time, não criar dependência cega. Medimos
 * a "saúde" da adoção por sinais como taxa de verificação (nada aceito sem checar),
 * entendimento do código aceito e retenção de habilidade sem a IA.
 */
function saudeAdocao(m) {
  const sinais = [];
  if (m.taxaVerificacao >= 0.9) sinais.push('verifica quase tudo');
  if (m.taxaEntendimento >= 0.8) sinais.push('entende o que aceita');
  if (m.consegueSemIA) sinais.push('mantém habilidade sem IA');
  if (m.mediImpactoReal) sinais.push('mede impacto (DORA), não percepção');
  const dependenciaCega = m.taxaVerificacao < 0.5 || !m.consegueSemIA;
  return { pontos: sinais.length, sinais, dependenciaCega };
}

function run() {
  const checks = [];
  const saudavel = { taxaVerificacao: 0.95, taxaEntendimento: 0.9, consegueSemIA: true, mediImpactoReal: true };
  const cega = { taxaVerificacao: 0.3, taxaEntendimento: 0.4, consegueSemIA: false, mediImpactoReal: false };

  const s = saudeAdocao(saudavel), d = saudeAdocao(cega);
  checks.push(['adoção saudável marca os 4 sinais', s.pontos === 4 && !s.dependenciaCega]);
  checks.push(['adoção cega é sinalizada (baixa verificação e não consegue sem IA)', d.dependenciaCega === true && d.pontos <= 1]);

  // Guardrails de liderança: política de uso, verificação obrigatória e medição.
  const guardrails = { politicaDeUso: true, verificacaoObrigatoria: true, mede: true };
  const okGuardrails = Object.values(guardrails).every(Boolean);
  checks.push(['guardrails de liderança presentes (política + verificação + medição)', okGuardrails]);

  // Verificar é inegociável: taxa de verificação baixa => risco alto independentemente do resto.
  checks.push(['baixa taxa de verificação sempre indica dependência cega', saudeAdocao({ ...saudavel, taxaVerificacao: 0.2 }).dependenciaCega === true]);

  // Perder a habilidade sem a IA também é dependência cega.
  checks.push(['não conseguir trabalhar sem a IA é dependência cega', saudeAdocao({ ...saudavel, consegueSemIA: false }).dependenciaCega === true]);

  console.log('=== Módulo 14 — adoção sem dependência cega ===\n');
  console.log('saudável:', s, '\ncega:', d, '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: liderar a adoção é aumentar capacidade — verificar sempre, entender o que se aceita, manter a habilidade sem a IA e medir impacto real; o oposto é dependência cega.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
