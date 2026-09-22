/*
 * Módulo 12 (Git) — Proteger segredos e a cadeia de fornecimento.
 * Rode com:  node scan-segredos.mjs
 *
 * Segredo commitado vaza mesmo que removido depois (fica no histórico). Um scanner de
 * pre-commit barra o commit antes; e a defesa não é só remover — é ROTACIONAR o segredo
 * exposto. Aqui detectamos padrões de segredo e validamos a resposta correta.
 */
const PADROES = [
  { nome: 'AWS access key', re: /AKIA[0-9A-Z]{16}/ },
  { nome: 'token genérico', re: /(secret|token|api[_-]?key)\s*[:=]\s*['"][^'"]{12,}['"]/i },
  { nome: 'chave privada', re: /-----BEGIN (RSA |EC )?PRIVATE KEY-----/ },
];
function escanear(diff) {
  return PADROES.filter((p) => p.re.test(diff)).map((p) => p.nome);
}
function commitPermitido(diff) {
  const achados = escanear(diff);
  return { permitido: achados.length === 0, achados };
}

function run() {
  const checks = [];

  const limpo = 'const porta = 3000;\nconst url = process.env.API_URL;';
  checks.push(['diff sem segredo é permitido', commitPermitido(limpo).permitido === true]);

  const comAws = 'aws_key = "AKIAIOSFODNN7EXAMPLE"';
  checks.push(['chave AWS é detectada e bloqueada', commitPermitido(comAws).achados.includes('AWS access key') && !commitPermitido(comAws).permitido]);

  const comToken = 'const config = { api_key: "sk_live_5fa3bc99f0d1e2" }';
  checks.push(['token hardcoded é detectado', commitPermitido(comToken).achados.includes('token genérico')]);

  const comChave = '-----BEGIN RSA PRIVATE KEY-----\nMIIE...';
  checks.push(['chave privada é detectada', commitPermitido(comChave).achados.includes('chave privada')]);

  // A boa prática é usar variável de ambiente — não dispara o scanner.
  checks.push(['uso de env var (sem valor no código) não dispara alarme', commitPermitido('token = process.env.TOKEN').permitido === true]);

  // Se vazou, remover do próximo commit NÃO basta (fica no histórico) -> rotacionar.
  const respostaAdequada = (acao) => acao === 'rotacionar';
  checks.push(['resposta correta a segredo exposto é ROTACIONAR (não só remover)', respostaAdequada('rotacionar') && !respostaAdequada('remover-do-proximo-commit')]);

  console.log('=== Módulo 12 — scanner de segredos (pre-commit) ===\n');
  console.log('AWS:', commitPermitido(comAws), '\ntoken:', commitPermitido(comToken), '\n');
  let ok = 0; for (const [n, c] of checks) { console.log(`  ${c ? 'ok  ' : 'FALHOU'} ${n}`); if (c) ok++; }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: barre o segredo no pre-commit; se já vazou, ele vive no histórico — a resposta é rotacionar a credencial, não só apagá-la.');
  return ok === checks.length;
}
process.exit(run() ? 0 : 1);
