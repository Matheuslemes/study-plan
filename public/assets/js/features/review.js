/* ═══════════════════════════════════════════════
   FEATURES / REVIEW — revisão espaçada D0/D1/D7/D30 (STUDY-022/049)

   Quando um tópico é concluído (D0), ele entra numa fila de
   revisão: D1 no dia seguinte, D7 em sete dias, D30 em trinta.
   A view "Revisões de hoje" lista o que vence hoje ou está
   atrasado. Marcar uma revisão como feita avança para o próximo
   marco; depois do D30, o tópico sai da fila (consolidado).

   Deliberadamente simples: quatro datas fixas, sem algoritmo
   SM-2. Consistência importa mais que sofisticação.
═══════════════════════════════════════════════ */

import { P, conteudoDaFase } from '../../../data/phases.js';
import { ler, gravar } from '../core/storage.js';
import { registrarRevisao } from './history.js';

const CHAVE = 'filaRevisao';
const MARCOS = [
  { nome: 'D1', dias: 1 },
  { nome: 'D7', dias: 7 },
  { nome: 'D30', dias: 30 }
];

const hoje = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
const emDias = (base, n) => { const d = new Date(base); d.setDate(d.getDate() + n); return d; };
const iso = (d) => d.toISOString().slice(0, 10);
const doIso = (s) => { const d = new Date(s + 'T00:00:00'); d.setHours(0, 0, 0, 0); return d; };

function fila() { return ler(CHAVE, {}); }
function salvar(f) { gravar(CHAVE, f); document.dispatchEvent(new CustomEvent('review:change')); }

/** Registra o D0 de um tópico e agenda D1. Idempotente. */
export function registrarEstudo(id) {
  const f = fila();
  if (f[id]) return;
  f[id] = { d0: iso(hoje()), etapa: 0, proxima: iso(emDias(hoje(), MARCOS[0].dias)) };
  salvar(f);
}

/** Remove um tópico da fila (ex.: ao desmarcar a conclusão). */
export function removerDaFila(id) {
  const f = fila();
  if (!f[id]) return;
  delete f[id];
  salvar(f);
}

/** Marca a revisão atual como feita e agenda a próxima; após D30, consolida. */
export function concluirRevisao(id) {
  const f = fila();
  const item = f[id];
  if (!item) return;
  registrarRevisao();
  item.etapa += 1;
  if (item.etapa >= MARCOS.length) {
    delete f[id]; // consolidado
  } else {
    item.proxima = iso(emDias(hoje(), MARCOS[item.etapa].dias));
  }
  salvar(f);
}

/** Texto legível de um tópico a partir do id `trilha:fase:indice`. */
function descreverTopico(id) {
  const [trilha, faseStr, idxStr] = id.split(':');
  const fase = P.find((p) => p.id === Number(faseStr));
  const itens = fase ? conteudoDaFase(fase, trilha) : [];
  const texto = itens[Number(idxStr)] || id;
  return { trilha, faseId: Number(faseStr), texto };
}

/** Revisões que vencem hoje ou estão atrasadas, mais antigas primeiro. */
export function revisoesDeHoje() {
  const f = fila();
  const limite = hoje();
  return Object.entries(f)
    .filter(([, v]) => doIso(v.proxima) <= limite)
    .map(([id, v]) => ({
      id,
      marco: MARCOS[v.etapa].nome,
      venceu: v.proxima,
      atrasada: doIso(v.proxima) < limite,
      ...descreverTopico(id)
    }))
    .sort((a, b) => a.venceu.localeCompare(b.venceu));
}

/** Contagem total de itens pendentes de revisão (hoje + futuros). */
export function totalNaFila() {
  return Object.keys(fila()).length;
}

/* ─── render ─────────────────────────────────── */

export function renderRevisoesDeHoje(containerId, corDe) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const itens = revisoesDeHoje();

  if (!itens.length) {
    el.innerHTML = `<div class="review-empty">
      <strong>Nenhuma revisão vencendo hoje.</strong>
      <p>Ao concluir um tópico, ele entra na fila D1/D7/D30. ${totalNaFila()} tópico(s) na fila de revisão.</p>
    </div>`;
    return;
  }

  el.innerHTML = `
    <div class="review-count">${itens.length} revisão(ões) para hoje${itens.some((i) => i.atrasada) ? ' · algumas atrasadas' : ''}</div>
    ${itens.map((i) => {
      const cor = corDe ? corDe(i.trilha) : 'var(--accent)';
      return `<div class="review-item${i.atrasada ? ' is-late' : ''}">
        <button type="button" class="review-check" data-review-done="${i.id}" title="Marcar revisão como feita" aria-label="Concluir revisão">✓</button>
        <div class="review-body">
          <span class="review-marco" style="color:${cor}">${i.marco}</span>
          <span class="review-text">${i.texto}</span>
          <span class="review-meta">Fase ${i.faseId} · ${i.atrasada ? 'atrasada desde ' : 'vence '}${i.venceu}</span>
        </div>
      </div>`;
    }).join('')}`;

  // delegação: concluir revisão
  el.querySelectorAll('[data-review-done]').forEach((btn) => {
    btn.addEventListener('click', () => {
      concluirRevisao(btn.dataset.reviewDone);
      renderRevisoesDeHoje(containerId, corDe);
    });
  });
}
