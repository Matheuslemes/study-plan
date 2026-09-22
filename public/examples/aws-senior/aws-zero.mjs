/*
 * Módulo 0 (AWS) — Da Faixa 0 à nuvem: autorização IAM sem uma conta AWS.
 *
 * Rode com:  node aws-zero.mjs        (Node 18+; só a biblioteca padrão)
 *
 * A nuvem é o computador de outra pessoa que você aluga por API — e a primeira
 * coisa que decide se você fica seguro (ou vaza tudo) é a IDENTIDADE: quem pode
 * fazer o quê, em quê. Aqui um avaliador de políticas no estilo IAM reproduz as
 * três regras que a AWS aplica de verdade, sem precisar de conta nem de rede:
 *   1. negação por padrão (default deny): sem permissão explícita, o acesso é negado;
 *   2. um Allow explícito concede;
 *   3. um Deny explícito SEMPRE vence — mesmo que exista um Allow.
 * E mostramos por que o menor privilégio (não usar "*:*") é a regra de ouro.
 */

// Uma "ação" combina se for igual, se a política usar '*' (tudo) ou 's3:*' (prefixo).
function acaoCombina(padrao, acao) {
  if (padrao === '*') return true;
  if (padrao.endsWith(':*')) return acao.startsWith(padrao.slice(0, -1)); // 's3:*' -> 's3:'
  return padrao === acao;
}

function recursoCombina(padrao, recurso) {
  if (padrao === '*') return true;
  if (padrao.endsWith('*')) return recurso.startsWith(padrao.slice(0, -1)); // 'bucket/*' -> 'bucket/'
  return padrao === recurso;
}

function statementCombina(stmt, req) {
  return acaoCombina(stmt.Action, req.action) && recursoCombina(stmt.Resource, req.resource);
}

// Avaliação IAM: Deny explícito vence; senão, um Allow concede; senão, nega por padrão.
function avaliar(politica, req) {
  const aplicaveis = politica.filter((s) => statementCombina(s, req));
  if (aplicaveis.some((s) => s.Effect === 'Deny')) return 'Deny';   // Deny explícito sempre vence
  if (aplicaveis.some((s) => s.Effect === 'Allow')) return 'Allow'; // há um Allow que casa
  return 'Deny';                                                     // default deny
}

// Menor privilégio: uma política que concede '*' em '*' é ampla demais.
function violaMenorPrivilegio(politica) {
  return politica.some((s) => s.Effect === 'Allow' && s.Action === '*' && s.Resource === '*');
}

function runChecks() {
  const checks = [];

  // Papel de leitura: só pode ler objetos do bucket de relatórios.
  const papelLeitura = [
    { Effect: 'Allow', Action: 's3:GetObject', Resource: 'arn:aws:s3:::relatorios/*' },
  ];
  // Papel com Deny explícito sobre um recurso sensível, mesmo tendo Allow amplo em s3.
  const papelComDeny = [
    { Effect: 'Allow', Action: 's3:*', Resource: '*' },
    { Effect: 'Deny', Action: 's3:*', Resource: 'arn:aws:s3:::segredos/*' },
  ];
  const admin = [{ Effect: 'Allow', Action: '*', Resource: '*' }];

  // 1. default deny: sem política nenhuma, tudo é negado.
  checks.push(['sem política, o acesso é negado por padrão (default deny)',
    avaliar([], { action: 's3:GetObject', resource: 'arn:aws:s3:::relatorios/a.csv' }) === 'Deny']);

  // 2. Allow explícito concede o que casa.
  checks.push(['um Allow explícito concede o acesso que casa',
    avaliar(papelLeitura, { action: 's3:GetObject', resource: 'arn:aws:s3:::relatorios/a.csv' }) === 'Allow']);

  // 3. menor privilégio: o papel de leitura NÃO pode apagar.
  checks.push(['menor privilégio: papel só de leitura não pode apagar (default deny)',
    avaliar(papelLeitura, { action: 's3:DeleteObject', resource: 'arn:aws:s3:::relatorios/a.csv' }) === 'Deny']);

  // 4. Deny explícito vence o Allow amplo.
  checks.push(['um Deny explícito vence qualquer Allow (recurso sensível bloqueado)',
    avaliar(papelComDeny, { action: 's3:GetObject', resource: 'arn:aws:s3:::segredos/chave.txt' }) === 'Deny']);
  checks.push(['...mas o mesmo papel ainda lê um bucket não-sensível',
    avaliar(papelComDeny, { action: 's3:GetObject', resource: 'arn:aws:s3:::relatorios/a.csv' }) === 'Allow']);

  // 5. curinga de prefixo funciona: s3:* cobre s3:PutObject.
  checks.push(['curinga de prefixo (s3:*) cobre s3:PutObject',
    avaliar(papelComDeny, { action: 's3:PutObject', resource: 'arn:aws:s3:::relatorios/b.csv' }) === 'Allow']);

  // 6. política de admin '*:*' viola o menor privilégio; a de leitura, não.
  checks.push(['política "*:*" é ampla demais (viola menor privilégio)', violaMenorPrivilegio(admin) === true]);
  checks.push(['política de leitura respeita o menor privilégio', violaMenorPrivilegio(papelLeitura) === false]);

  console.log('=== Módulo 0 (AWS) — identidade e menor privilégio (IAM) ===\n');
  console.log('leitura  GetObject relatorios ->', avaliar(papelLeitura, { action: 's3:GetObject', resource: 'arn:aws:s3:::relatorios/a.csv' }));
  console.log('leitura  DeleteObject         ->', avaliar(papelLeitura, { action: 's3:DeleteObject', resource: 'arn:aws:s3:::relatorios/a.csv' }));
  console.log('comDeny  GetObject segredos   ->', avaliar(papelComDeny, { action: 's3:GetObject', resource: 'arn:aws:s3:::segredos/chave.txt' }), '(Deny vence)\n');

  let ok = 0;
  for (const [nome, cond] of checks) {
    console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${nome}`);
    if (cond) ok++;
  }
  console.log(`\n${ok}/${checks.length} checagens passaram.`);
  console.log('Lição: na nuvem a identidade decide tudo. Negue por padrão, conceda o mínimo e lembre que');
  console.log('um Deny explícito sempre vence — evite "*:*" e nunca use a raiz/credenciais no código.');
  return ok === checks.length;
}

const ok = runChecks();
if (typeof process !== 'undefined' && process.exit) process.exit(ok ? 0 : 1);
