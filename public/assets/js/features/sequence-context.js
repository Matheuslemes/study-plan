/* ═══════════════════════════════════════════════
   FEATURES / SEQUENCE-CONTEXT — a sequência dentro da trilha

   A biblioteca de conteúdo é compartilhada pelas duas sequências. Aqui,
   no hub de cada trilha, mostramos COMO aquele conteúdo entra no percurso
   selecionado: em que etapas/fases é exigido e o status na etapa atual.
   Não altera a biblioteca — apenas orienta a leitura no contexto ativo.
═══════════════════════════════════════════════ */

import { sequence, isArchitecture, P, trilhaAtiva } from '../core/study-context.js';
import { getFaseAtual } from './active-phase.js';
import { escapeHtml as esc } from '../core/render.js';
import { resolvePublicUrl } from '../core/public-url.js';

// hub (data-track) → chave de trilha usada nas fases/objetivos das sequências.
// Trilhas fora deste mapa (treino, fundamentos, aieng) não fazem parte de
// nenhuma sequência: nesses hubs o aviso não aparece.
const HUB_TO_KEY = {
  java: 'java', ia: 'ia', arquitetura: 'arquitetura', python: 'py', aws: 'aws',
  devops: 'devops', frontend: 'frontend', bancos: 'db', git: 'git', dsa: 'dsa',
  ingles: 'ingles', matematica: 'math', sec: 'sec', financeiro: 'fin'
};

export function renderTrackSequenceNote(trackId) {
  const key = HUB_TO_KEY[trackId];
  if (!key) return;                                   // trilha fora das sequências
  if (document.querySelector('.sequence-track-note')) return;
  const conteudo = document.getElementById('conteudo');
  const grid = conteudo?.querySelector('.main');
  const anchor = conteudo || document.querySelector('main');
  if (!anchor) return;

  const arch = isArchitecture();
  // "entra" numa fase: no Backend, a trilha está ativa naquela fase; na
  // Arquitetura, a etapa tem objetivos declarados para a trilha.
  const inPhase = (p) => arch ? (p.objectives?.[key]?.length > 0) : trilhaAtiva(p, key);
  const phases = P.filter(inPhase);
  const current = getFaseAtual();
  const currentPhase = P.find((p) => p.id === current);
  const unit = arch ? 'etapa' : 'fase';

  const units = arch ? 'etapas' : 'fases';
  let body;
  if (!phases.length) {
    body = `Aprofundamento <strong>opcional</strong> nesta sequência — fora do ciclo obrigatório. A biblioteca completa continua disponível.`;
  } else if (currentPhase && inPhase(currentPhase)) {
    const extra = phases.length === P.length
      ? `Presente em <strong>todas as ${P.length} ${units}</strong>.`
      : `Também entra em: ${esc(phases.map((p) => p.l).join(', '))}.`;
    body = `Conteúdo <strong>obrigatório na ${unit} atual (${esc(currentPhase.l)} · ${esc(currentPhase.t)})</strong>. ${extra}`;
  } else {
    const next = phases.find((p) => p.id >= current) || phases[0];
    body = `Entra ${arch ? 'nas etapas' : 'nas fases'} <strong>${esc(phases.map((p) => p.l).join(', '))}</strong>. Próxima recomendada nesta sequência: <strong>${esc(next.l)} · ${esc(next.t)}</strong>.`;
  }

  const note = document.createElement('section');
  note.className = 'sequence-track-note';
  note.setAttribute('aria-label', 'Contexto na sequência de estudos');
  note.innerHTML = `<span class="stn-eyebrow">Sequência ativa · ${esc(sequence.name)}</span>
    <p class="stn-body">${body} <a class="stn-link" href="${resolvePublicUrl('index.html')}">Ver no dashboard →</a></p>`;

  if (conteudo && grid) conteudo.insertBefore(note, grid);
  else anchor.insertBefore(note, anchor.firstChild);
}
