/* ═══════════════════════════════════════════════
   FEATURES / HISTORY — histórico diário (STUDY-056)

   Registra o que aconteceu em cada dia: tópicos concluídos,
   revisões feitas e horas estimadas. É a base do gráfico de
   evolução (STUDY-055) e a única forma de responder
   "eu estudei de verdade nas últimas semanas?".

   Guarda um mapa data → contadores. Nada de evento individual:
   o objetivo é tendência, não auditoria.
═══════════════════════════════════════════════ */

import { ler, gravar } from '../core/storage.js';

const CHAVE = 'historicoDiario';

/** Data local no formato YYYY-MM-DD (não usa UTC, para não trocar o dia). */
export function hojeIso(d = new Date()) {
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off * 60000).toISOString().slice(0, 10);
}

export const historico = () => ler(CHAVE, {});

function registrar(campo, delta, trilha) {
  const h = historico();
  const dia = hojeIso();
  const reg = h[dia] || { topicos: 0, revisoes: 0, trilhas: {} };
  reg[campo] = Math.max(0, (reg[campo] || 0) + delta);
  if (trilha) {
    reg.trilhas[trilha] = Math.max(0, (reg.trilhas[trilha] || 0) + delta);
  }
  h[dia] = reg;
  gravar(CHAVE, h);
  document.dispatchEvent(new CustomEvent('history:change'));
}

/** Um tópico foi concluído (+1) ou desmarcado (-1). */
export const registrarTopico = (delta, trilha) => registrar('topicos', delta, trilha);

/** Uma revisão foi concluída. */
export const registrarRevisao = () => registrar('revisoes', 1);

/**
 * Série dos últimos `n` dias, em ordem cronológica.
 * Preenche com zero os dias sem atividade — o gráfico precisa da lacuna.
 */
export function ultimosDias(n = 30) {
  const h = historico();
  const saida = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const iso = hojeIso(d);
    const reg = h[iso] || {};
    saida.push({ dia: iso, topicos: reg.topicos || 0, revisoes: reg.revisoes || 0 });
  }
  return saida;
}

/** Agrupa os últimos `semanas` em blocos de 7 dias. */
export function porSemana(semanas = 8) {
  const dias = ultimosDias(semanas * 7);
  const blocos = [];
  for (let i = 0; i < dias.length; i += 7) {
    const fatia = dias.slice(i, i + 7);
    blocos.push({
      inicio: fatia[0].dia,
      fim: fatia[fatia.length - 1].dia,
      topicos: fatia.reduce((a, d) => a + d.topicos, 0),
      revisoes: fatia.reduce((a, d) => a + d.revisoes, 0)
    });
  }
  return blocos;
}

/** Sequência atual de dias consecutivos com alguma atividade. */
export function sequenciaAtual() {
  const h = historico();
  let n = 0;
  for (let i = 0; i < 400; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const reg = h[hojeIso(d)];
    const ativo = reg && ((reg.topicos || 0) > 0 || (reg.revisoes || 0) > 0);
    if (ativo) { n++; continue; }
    // o dia de hoje ainda pode não ter atividade sem quebrar a sequência
    if (i === 0) continue;
    break;
  }
  return n;
}

/** Totais gerais do histórico. */
export function totais() {
  const h = historico();
  const dias = Object.values(h);
  return {
    diasAtivos: dias.filter((d) => (d.topicos || 0) + (d.revisoes || 0) > 0).length,
    topicos: dias.reduce((a, d) => a + (d.topicos || 0), 0),
    revisoes: dias.reduce((a, d) => a + (d.revisoes || 0), 0)
  };
}
