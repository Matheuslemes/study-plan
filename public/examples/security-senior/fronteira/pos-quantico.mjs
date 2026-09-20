/*
 * Migração para criptografia pós-quântica — artefato do módulo 25.
 *
 * Rode com:  node pos-quantico.mjs   (requer Node 24+, OpenSSL 3.5+)
 *
 * Este arquivo NÃO ensina a inventar criptografia. Ele usa as primitivas
 * padronizadas pelo NIST — ML-KEM (FIPS 203) e ML-DSA (FIPS 204) — pela
 * biblioteca do sistema, e mede o que de fato muda na migração:
 *
 *   1. O tamanho dos artefatos. É aqui que a migração dói, não na CPU.
 *   2. O padrão HÍBRIDO: clássico + pós-quântico juntos, seguro se um cair.
 *   3. A ameaça "harvest now, decrypt later" — por que o prazo é AGORA para
 *      dado com validade longa, mesmo sem computador quântico existir hoje.
 *
 * Se a sua build do Node não tiver ML-KEM/ML-DSA, o arquivo diz isso com
 * clareza e explica como conferir, em vez de fingir um resultado.
 */

import crypto from 'node:crypto';
import { performance } from 'node:perf_hooks';

function suportaPQC() {
  try {
    crypto.generateKeyPairSync('ml-kem-768');
    crypto.generateKeyPairSync('ml-dsa-65');
    return true;
  } catch {
    return false;
  }
}

if (!suportaPQC()) {
  console.log('=== Migração pós-quântica ===\n');
  console.log('Esta build não expõe ML-KEM/ML-DSA.');
  console.log(`Node: ${process.version} · OpenSSL: ${process.versions.openssl}`);
  console.log('São necessários Node 24+ e OpenSSL 3.5+.');
  console.log('\nConfira com:  node -e "require(\'crypto\').generateKeyPairSync(\'ml-kem-768\')"');
  console.log('A LIÇÃO permanece válida: veja a seção "Por que agora" no fim deste arquivo.');
  process.exitCode = 0;
} else {
  principal();
}

function tamanhoDer(chave, tipo) {
  return chave.export({ type: tipo === 'privada' ? 'pkcs8' : 'spki', format: 'der' }).length;
}

function medir(fn, repeticoes) {
  const t0 = performance.now();
  for (let i = 0; i < repeticoes; i += 1) fn();
  return (performance.now() - t0) / repeticoes;
}

function principal() {
  console.log('=== Migração pós-quântica: o que de fato muda ===\n');
  console.log(`Node ${process.version} · OpenSSL ${process.versions.openssl}\n`);

  // -------------------------------------------------------------------------
  // 1. Encapsulamento de chave: X25519 (clássico) vs ML-KEM-768 (pós-quântico)
  // -------------------------------------------------------------------------
  console.log('--- 1. Estabelecimento de chave: tamanho dos artefatos ---\n');

  const x = crypto.generateKeyPairSync('x25519');
  const mlkem = crypto.generateKeyPairSync('ml-kem-768');

  // ML-KEM: encapsula um segredo contra a chave pública do destinatário.
  const enc = crypto.encapsulate(mlkem.publicKey);        // { sharedKey, ciphertext }
  const dec = crypto.decapsulate(mlkem.privateKey, enc.ciphertext);
  const segredosBatem = Buffer.from(enc.sharedKey).equals(Buffer.from(dec));

  const linha = (rotulo, ...cols) => console.log(`  ${rotulo.padEnd(24)}${cols.map((c) => String(c).padStart(11)).join('')}`);
  linha('', 'chave púb.', 'ciphertext');
  linha('X25519 (clássico)', tamanhoDer(x.publicKey, 'publica'), 32);
  linha('ML-KEM-768 (PQC)', tamanhoDer(mlkem.publicKey, 'publica'), enc.ciphertext.length);
  console.log(`\n  segredo decapsulado confere: ${segredosBatem}`);
  console.log('  → a chave pública e o material trocado crescem ~30–40×.');
  console.log('    Em TLS isso entra em CADA handshake. É o custo real, e é de rede.');

  // -------------------------------------------------------------------------
  // 2. Assinatura: Ed25519 (clássico) vs ML-DSA-65 (pós-quântico)
  // -------------------------------------------------------------------------
  console.log('\n--- 2. Assinatura: tamanho da chave e da assinatura ---\n');

  const mensagem = Buffer.from('release v4.2.0 — digest sha384:9f2b...');
  const ed = crypto.generateKeyPairSync('ed25519');
  const mldsa = crypto.generateKeyPairSync('ml-dsa-65');

  const assinaEd = crypto.sign(null, mensagem, ed.privateKey);
  const assinaMl = crypto.sign(null, mensagem, mldsa.privateKey);
  const verEd = crypto.verify(null, mensagem, ed.publicKey, assinaEd);
  const verMl = crypto.verify(null, mensagem, mldsa.publicKey, assinaMl);

  linha('', 'chave púb.', 'assinatura');
  linha('Ed25519 (clássico)', tamanhoDer(ed.publicKey, 'publica'), assinaEd.length);
  linha('ML-DSA-65 (PQC)', tamanhoDer(mldsa.publicKey, 'publica'), assinaMl.length);
  console.log(`\n  verificação Ed25519: ${verEd} · ML-DSA-65: ${verMl}`);
  console.log('  → assinatura de ~64 B vira ~3300 B. Para proveniência (SLSA),');
  console.log('    firmware e certificados, é o que pesa na cadeia de confiança.');

  // -------------------------------------------------------------------------
  // 3. O padrão híbrido: por que ninguém troca clássico POR pós-quântico
  // -------------------------------------------------------------------------
  console.log('\n--- 3. Padrão híbrido (clássico + PQC no mesmo handshake) ---\n');

  // Deriva-se UM segredo dos DOIS. Se o ML-KEM tiver uma falha ainda
  // desconhecida, o X25519 segura; se o quântico quebrar o X25519, o
  // ML-KEM segura. A migração real é aditiva, não substitutiva.
  const hib = crypto.generateKeyPairSync('x25519');
  const hibPeer = crypto.generateKeyPairSync('x25519');
  const segredoClassico = crypto.diffieHellman({ privateKey: hib.privateKey, publicKey: hibPeer.publicKey });
  const encH = crypto.encapsulate(mlkem.publicKey);

  const segredoHibrido = Buffer.from(crypto.hkdfSync( // hkdfSync devolve ArrayBuffer; embrulha em Buffer
    'sha256',
    Buffer.concat([Buffer.from(segredoClassico), Buffer.from(encH.sharedKey)]), // IKM = concatenação
    Buffer.alloc(0),
    Buffer.from('hybrid x25519+ml-kem-768'),
    32
  ));

  console.log(`  segredo híbrido derivado: ${Buffer.from(segredoHibrido).toString('hex').slice(0, 32)}...`);
  console.log('  IKM = X25519 ‖ ML-KEM-768, combinados por HKDF.');
  console.log('  Seguro enquanto UM dos dois resistir. É o que o TLS 1.3 já faz');
  console.log('  em produção (X25519MLKEM768, o grupo padrão dos navegadores).');

  // -------------------------------------------------------------------------
  // 4. Custo de CPU — o que NÃO é o gargalo
  // -------------------------------------------------------------------------
  console.log('\n--- 4. Custo de CPU (contexto: não é aqui que dói) ---\n');
  const N = 200;
  const tX = medir(() => crypto.generateKeyPairSync('x25519'), N);
  const tK = medir(() => { const kp = crypto.generateKeyPairSync('ml-kem-768'); crypto.encapsulate(kp.publicKey); }, N);
  console.log(`  keygen X25519:            ${tX.toFixed(3)} ms`);
  console.log(`  keygen+encaps ML-KEM-768: ${tK.toFixed(3)} ms`);
  console.log('  → ML-KEM costuma ser rápido. O orçamento de MIGRAÇÃO é tamanho e');
  console.log('    compatibilidade, não relógio de CPU.');

  // -------------------------------------------------------------------------
  // 5. Por que agora — harvest now, decrypt later
  // -------------------------------------------------------------------------
  console.log('\n--- 5. Por que o prazo é agora, sem quântico existir ainda ---\n');
  const validade = [
    ['Prontuário médico', 50],
    ['Segredo industrial', 25],
    ['Dado pessoal (LGPD)', 20],
    ['Token de sessão', 0.01]
  ];
  const HORIZONTE_Q = 2032; // estimativa conservadora de "quântico relevante"; ajuste conforme sua fonte
  const ANO = new Date().getFullYear();
  console.log(`  Ano-base ${ANO} · horizonte quântico assumido: ${HORIZONTE_Q}\n`);
  console.log(`  ${'Dado'.padEnd(22)}${'validade'.padStart(9)}${'exposto?'.padStart(12)}`);
  for (const [nome, anos] of validade) {
    const exposto = ANO + anos >= HORIZONTE_Q;
    console.log(`  ${nome.padEnd(22)}${(anos + ' a').padStart(9)}${(exposto ? 'SIM' : 'não').padStart(12)}`);
  }
  console.log('\n  O atacante captura o ciphertext HOJE e decifra quando puder.');
  console.log('  Todo dado cuja validade cruza o horizonte quântico já está em risco.');
  console.log('  Assinatura protege o futuro; sigilo de longo prazo é retroativo.');

  // -------------------------------------------------------------------------
  // Verificação
  // -------------------------------------------------------------------------
  const checagens = [
    ['ML-KEM: segredo encapsulado == decapsulado', segredosBatem],
    ['ML-KEM ciphertext > 1000 bytes (custo de rede real)', enc.ciphertext.length > 1000],
    ['ML-DSA: assinatura verifica', verMl === true],
    ['ML-DSA assinatura >> Ed25519 (ordem de grandeza)', assinaMl.length > assinaEd.length * 10],
    ['híbrido deriva 32 bytes', segredoHibrido.length === 32],
    ['clássico continua verificando (migração é aditiva)', verEd === true]
  ];

  console.log('\n=== Verificação ===');
  let falhou = 0;
  for (const [nome, cond] of checagens) {
    console.log(`  ${cond ? 'ok  ' : 'FALHOU'} ${nome}`);
    if (!cond) falhou += 1;
  }
  console.log(falhou === 0 ? `\n${checagens.length}/${checagens.length} checagens passaram.` : `\n${falhou} falharam.`);
  process.exitCode = falhou === 0 ? 0 : 1;
}
