/* ═══════════════════════════════════════════════
   CORE / STORAGE — wrapper sobre localStorage (STUDY-038)

   Nunca acessar localStorage diretamente. Em modo anônimo,
   com cota cheia ou sob política de terceiros, o acesso
   direto lança exceção e derruba o render inteiro da página.

   Contrato:
   · try/catch em toda operação — nunca propaga exceção
   · schemaVersion gravado junto do dado
   · fallback explícito quando ausente, corrompido ou de
     versão incompatível
   · serialização/desserialização centralizadas
═══════════════════════════════════════════════ */

const PREFIXO = 'studyplan:';

/** Versão do formato gravado. Suba ao mudar a forma dos dados. */
export const schemaVersion = 1;

/* ─── serialização ───────────────────────────── */

/** Empacota o dado com a versão do schema. */
export function serializar(dado) {
  return JSON.stringify({ schemaVersion, dado });
}

/**
 * Desempacota o valor gravado.
 * Retorna `{ ok: false }` para ausente, corrompido ou de versão incompatível.
 */
export function desserializar(cru) {
  if (cru === null || cru === undefined) return { ok: false, motivo: 'ausente' };
  try {
    const envelope = JSON.parse(cru);
    if (envelope?.schemaVersion !== schemaVersion) {
      return { ok: false, motivo: 'versao-incompativel', encontrada: envelope?.schemaVersion };
    }
    return { ok: true, dado: envelope.dado };
  } catch {
    return { ok: false, motivo: 'corrompido' };
  }
}

/* ─── operações ──────────────────────────────── */

/** Lê um valor. Devolve `padrao` em qualquer cenário de falha. */
export function ler(chave, padrao = null) {
  try {
    const resultado = desserializar(localStorage.getItem(PREFIXO + chave));
    return resultado.ok ? resultado.dado : padrao;
  } catch {
    return padrao;
  }
}

/** Grava um valor. Retorna false se o storage estiver indisponível ou cheio. */
export function gravar(chave, dado) {
  try {
    localStorage.setItem(PREFIXO + chave, serializar(dado));
    agendarSync();
    return true;
  } catch {
    return false;
  }
}

/** Remove uma chave. */
export function remover(chave) {
  try {
    localStorage.removeItem(PREFIXO + chave);
    agendarSync();
    return true;
  } catch {
    return false;
  }
}

/** Lista as chaves do plano presentes no storage. */
export function chaves() {
  const saida = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k?.startsWith(PREFIXO)) {
        const nome = k.slice(PREFIXO.length);
        if (!nome.startsWith('__')) saida.push(nome); // ignora chaves internas (__savedAt)
      }
    }
  } catch { /* storage indisponível: devolve o que houver */ }
  return saida;
}

/** Exporta tudo que pertence ao plano, para backup em JSON. */
export function exportarTudo() {
  return chaves().reduce((acc, k) => {
    acc[k] = ler(k);
    return acc;
  }, {});
}

/** Importa um backup gerado por `exportarTudo`. Retorna quantas chaves entraram. */
export function importarTudo(objeto) {
  if (!objeto || typeof objeto !== 'object') return 0;
  return Object.entries(objeto).reduce((n, [k, v]) => n + (gravar(k, v) ? 1 : 0), 0);
}

/** Restauração manual preserva objetivos exclusivos do outro percurso. */
export function restaurarBackup(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return 0;
  const dados = { ...payload };
  const mapa = (value) => value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  if (!dados.progressoTopicos && Array.isArray(dados.topicosConcluidos)) {
    dados.progressoTopicos = Object.fromEntries(dados.topicosConcluidos.map(id => [id, { estado: 'praticado' }]));
  }
  for (const key of ['progressoTopicos', 'filaRevisao']) {
    if (dados[key]) dados[key] = { ...mapa(ler(key, {})), ...mapa(dados[key]) };
  }
  if (!dados.sequenciaAtual) dados.sequenciaAtual = 'backend';
  return importarTudo(dados);
}

/** Indica se o storage está utilizável neste navegador. */
export function disponivel() {
  try {
    const t = PREFIXO + '__t';
    localStorage.setItem(t, '1');
    localStorage.removeItem(t);
    return true;
  } catch {
    return false;
  }
}

/* ─── sincronização com progresso.json (opção B) ───────────────
   O localStorage é o cache ao vivo; progresso.json (gravado pelo
   scripts/serve.mjs) é a fonte durável e versionável no Git.
   Tudo é best-effort: sem servidor (file:// ou host estático), o
   app segue funcionando só com o localStorage. */

const CHAVE_SAVED = PREFIXO + '__savedAt';
let syncTimer = null;

/** Persiste o snapshot antes de navegar; falha de rede mantém o cache local. */
export async function flushProgress() {
  clearTimeout(syncTimer);
  const savedAt = Date.now();
  try { localStorage.setItem(CHAVE_SAVED, String(savedAt)); } catch { /* indisponível */ }
  if (typeof fetch !== 'function') return false;
  try {
    const response = await fetch('/progress', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ savedAt, schemaVersion, dados: exportarTudo() }),
      signal: AbortSignal.timeout(3000)
    });
    return response.ok;
  } catch { return false; }
}

function lerSavedAtLocal() {
  try { return Number(localStorage.getItem(CHAVE_SAVED) || 0); } catch { return 0; }
}

/** Agenda (debounce) o envio do snapshot completo para progresso.json. */
function agendarSync() {
  if (typeof fetch !== 'function') return;
  clearTimeout(syncTimer);
  // Marca alterações locais imediatamente para não hidratar um snapshot antigo.
  try { localStorage.setItem(CHAVE_SAVED, String(Date.now())); } catch { /* indisponível */ }
  syncTimer = setTimeout(flushProgress, 800);
}

/**
 * Hidrata o localStorage a partir de progresso.json quando o arquivo for
 * mais novo que o cache local (ou o cache estiver vazio). Ideal chamar no
 * início do dashboard, antes de renderizar o progresso.
 * @returns {Promise<{importou:boolean, chaves:number}>}
 */
export async function sincronizarProgresso() {
  if (typeof fetch !== 'function') return { importou: false, chaves: 0 };
  try {
    const resp = await fetch('/progress', { cache: 'no-store' });
    if (!resp.ok) return { importou: false, chaves: 0 };
    const payload = await resp.json();
    if (!payload || typeof payload !== 'object' || !payload.dados) return { importou: false, chaves: 0 };
    const arquivoMaisNovo = Number(payload.savedAt || 0) > lerSavedAtLocal();
    const cacheVazio = chaves().length === 0;
    if (!arquivoMaisNovo && !cacheVazio) return { importou: false, chaves: 0 };
    const n = importarTudo(payload.dados);
    try { localStorage.setItem(CHAVE_SAVED, String(payload.savedAt || Date.now())); } catch { /* ignore */ }
    return { importou: true, chaves: n };
  } catch {
    return { importou: false, chaves: 0 };
  }
}
