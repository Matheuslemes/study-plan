/* ═══════════════════════════════════════════════
   RECOLOCAÇÃO / UTIL — atalhos para escrever as semanas

   As semanas são dados puros. Estes atalhos só evitam
   repetir a mesma forma de objeto 26 vezes.
═══════════════════════════════════════════════ */

/** Um dia útil: foco do dia, bloco de estudo e bloco de prática. */
export const dia = (foco, estudo, pratica, k) => ({ foco, estudo, pratica, ...(k ? { k } : {}) });

/** Bloco transversal: [trilha, texto]. */
export const tr = (k, texto) => [k, texto];

/**
 * Transversais das semanas com candidaturas abertas:
 * segunda, quarta e sexta são de mercado; terça e quinta, de inglês.
 */
export const comCandidaturas = (inglesTerca, inglesQuinta) => [
  tr('mercado', 'Candidaturas: 3 vagas com 60% ou mais de aderência, CV ajustado às palavras-chave de cada uma.'),
  tr('ingles', inglesTerca),
  tr('mercado', 'Candidaturas: 3 vagas e 1 mensagem curta para alguém do time técnico de uma empresa-alvo.'),
  tr('ingles', inglesQuinta),
  tr('mercado', 'Candidaturas: 4 vagas e atualização do pipeline (etapa, data e próximo passo de cada processo).')
];

/** Entregável com critério de pronto observável. */
export const ent = (id, titulo, criterio) => ({ id, titulo, criterio });
