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
    return true;
  } catch {
    return false;
  }
}

/** Remove uma chave. */
export function remover(chave) {
  try {
    localStorage.removeItem(PREFIXO + chave);
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
      if (k?.startsWith(PREFIXO)) saida.push(k.slice(PREFIXO.length));
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
