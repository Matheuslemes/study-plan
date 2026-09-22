/*
 * Módulo 0 (Segurança) — Da Faixa 0 à defesa: injeção, codificação e allowlist.
 *
 * Rode com:  node seguranca-zero.mjs        (Node 18+; só a biblioteca padrão)
 *
 * Material 100% DEFENSIVO: nada aqui ataca sistema nenhum. Mostramos, com strings,
 * por que MISTURAR entrada do usuário com código (SQL, HTML) é a raiz da vulnerabilidade
 * nº 1 da web — e as defesas que a neutralizam: tratar entrada como DADO (parametrizar),
 * codificar a saída e validar por allowlist (negar por padrão).
 *
 * Liga os fundamentos da Faixa 0 à trilha de Segurança:
 *   1. toda entrada é não confiável até prova em contrário;
 *   2. injeção acontece quando a entrada vira ESTRUTURA do comando (não valor);
 *   3. parametrizar mantém a entrada como dado inerte — a query não muda;
 *   4. codificar a saída impede que texto do usuário vire <script> executável (XSS);
 *   5. allowlist (negar por padrão) aceita só o previsto.
 */

// INSEGURO (apenas para ilustrar): concatenar entrada muda a ESTRUTURA do comando.
function queryIngenua(nome) {
  return `SELECT * FROM users WHERE name = '${nome}'`;
}

// SEGURO: a entrada é um PARÂMETRO (dado), nunca vira parte do texto SQL.
function queryParametrizada(nome) {
  return { sql: 'SELECT * FROM users WHERE name = ?', params: [nome] };
}

// Codificação de saída: transforma caracteres perigosos em texto inofensivo (anti-XSS).
function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Validação por allowlist: aceita só o previsto; nega o resto por padrão.
const PAPEIS_PERMITIDOS = ['admin', 'editor', 'leitor'];
function papelValido(papel) {
  return PAPEIS_PERMITIDOS.includes(papel);
}

function runChecks() {
  const checks = [];
  const payloadSql = "x' OR '1'='1";                 // tenta "sair" da string e virar lógica
  const payloadXss = "<script>alert(1)</script>";    // tenta virar script no navegador

  // 1. concatenar deixa o payload virar ESTRUTURA (a aspa fecha a string e injeta OR).
  const ingenua = queryIngenua(payloadSql);
  checks.push(["concatenar entrada injeta lógica na query (\" OR '1'='1\")", ingenua.includes("OR '1'='1'")]);

  // 2. parametrizar: o texto SQL é fixo e o payload fica como VALOR inerte.
  const seg = queryParametrizada(payloadSql);
  checks.push(['parametrizar mantém o SQL fixo (com ?), sem misturar a entrada', seg.sql === 'SELECT * FROM users WHERE name = ?']);
  checks.push(['o payload vira apenas um valor (dado), não código', seg.params[0] === payloadSql && !seg.sql.includes(payloadSql)]);

  // 3. codificação de saída neutraliza o XSS: <script> deixa de ser uma tag.
  const seguro = escapeHtml(payloadXss);
  checks.push(['codificar a saída remove a tag <script> executável', !seguro.includes('<script>')]);
  checks.push(['...transformando-a em texto visível (&lt;script&gt;)', seguro.includes('&lt;script&gt;')]);

  // 4. allowlist: aceita o previsto, nega o inesperado (inclui tentativa de injeção).
  checks.push(['allowlist aceita um papel válido', papelValido('admin') === true]);
  checks.push(['allowlist nega valor inesperado por padrão', papelValido("admin'; DROP TABLE users;--") === false]);

  console.log('=== Módulo 0 (Segurança) — injeção, codificação e allowlist ===\n');
  console.log('entrada maliciosa (SQL):', JSON.stringify(payloadSql));
  console.log('  ingênua  ->', ingenua);
  console.log('  segura   ->', `${seg.sql}  params=${JSON.stringify(seg.params)}`);
  console.log('entrada maliciosa (XSS):', JSON.stringify(payloadXss));
  console.log('  codificada ->', seguro, '\n');

  let ok = 0;
  for (const [nome, cond] of checks) {
    console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${nome}`);
    if (cond) ok++;
  }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: trate toda entrada como não confiável. Parametrize (dado, não código), codifique a saída');
  console.log('e valide por allowlist (negue por padrão) — as defesas se somam: é defesa em profundidade.');
  return ok === checks.length;
}

const ok = runChecks();
if (typeof process !== 'undefined' && process.exit) process.exit(ok ? 0 : 1);
