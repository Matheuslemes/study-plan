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
import { registrarD30Concluida, temD30Concluida } from './progress.js';
import { escapeHtml } from '../core/render.js';

const CHAVE = 'filaRevisao';
const MARCOS = [
  { nome: 'D1', dias: 1 },
  { nome: 'D7', dias: 7 },
  { nome: 'D30', dias: 30 }
];

export const TIPOS_REVISAO = Object.freeze({
  conceito: {
    nome: 'Conceito',
    instrucoes: {
      D1: 'Recupere a definição e explique-a sem consultar.',
      D7: 'Resolva um exemplo novo e compare com um contraexemplo.',
      D30: 'Conecte o conceito a outro tema e ensine-o sem notas.'
    }
  },
  codigo: {
    nome: 'Código',
    instrucoes: {
      D1: 'Reimplemente o núcleo em um exemplo mínimo sem copiar.',
      D7: 'Resolva uma variação e acrescente um teste de falha.',
      D30: 'Reconstrua do zero, meça e justifique as escolhas.'
    }
  },
  arquitetura: {
    nome: 'Arquitetura',
    instrucoes: {
      D1: 'Liste a decisão, a restrição e o principal trade-off.',
      D7: 'Redesenhe a solução e critique um cenário de falha.',
      D30: 'Defenda uma alternativa e declare quando reverter a decisão.'
    }
  }
});

const TRILHAS_DE_ARQUITETURA = new Set(['arquitetura', 'aws']);
const TRILHAS_DE_CONCEITO = new Set(['math', 'ingles', 'fin']);

/** Classifica o exercício de revisão pela natureza predominante da trilha. */
export function tipoDeRevisao(idOuTrilha) {
  const trilha = String(idOuTrilha || '').split(':')[0];
  if (TRILHAS_DE_ARQUITETURA.has(trilha)) return 'arquitetura';
  if (TRILHAS_DE_CONCEITO.has(trilha)) return 'conceito';
  return 'codigo';
}

export function instrucaoDaRevisao(tipo, marco) {
  const configuracao = TIPOS_REVISAO[tipo] || TIPOS_REVISAO.conceito;
  return configuracao.instrucoes[marco] || configuracao.instrucoes.D1;
}

const hoje = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
const emDias = (base, n) => { const d = new Date(base); d.setDate(d.getDate() + n); return d; };
const iso = (d) => d.toISOString().slice(0, 10);
const doIso = (s) => { const d = new Date(s + 'T00:00:00'); d.setHours(0, 0, 0, 0); return d; };

function fila() { return ler(CHAVE, {}); }
function salvar(f) { gravar(CHAVE, f); document.dispatchEvent(new CustomEvent('review:change')); }

/** Registra o D0 de um tópico e agenda D1. Idempotente. */
export function registrarEstudo(id) {
  const f = fila();
  if (f[id] || temD30Concluida(id)) return;
  f[id] = {
    d0: iso(hoje()),
    etapa: 0,
    proxima: iso(emDias(hoje(), MARCOS[0].dias)),
    tipo: tipoDeRevisao(id)
  };
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
  const marcoConcluido = MARCOS[item.etapa]?.nome;
  if (!marcoConcluido) return;
  registrarRevisao();
  item.etapa += 1;
  if (item.etapa >= MARCOS.length) {
    delete f[id];
    // DIDATIC-002: D30 deixa uma prova persistente; sem ela o estado
    // Dominado nunca pode ser alcançado.
    registrarD30Concluida(id);
  } else {
    item.proxima = iso(emDias(hoje(), MARCOS[item.etapa].dias));
  }
  salvar(f);
}

/** Situação da revisão de um tópico para orientar a interface de domínio. */
export function situacaoRevisao(id) {
  if (temD30Concluida(id)) return { d30Concluida: true, marco: 'D30', proxima: null };
  const item = fila()[id];
  if (!item) return { d30Concluida: false, marco: null, proxima: null };
  return {
    d30Concluida: false,
    marco: MARCOS[item.etapa]?.nome || null,
    proxima: item.proxima || null
  };
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
    .map(([id, v]) => {
      const marco = MARCOS[v.etapa].nome;
      const tipo = v.tipo || tipoDeRevisao(id);
      return {
        id,
        marco,
        tipo,
        tipoNome: TIPOS_REVISAO[tipo].nome,
        instrucao: instrucaoDaRevisao(tipo, marco),
        venceu: v.proxima,
        atrasada: doIso(v.proxima) < limite,
        ...descreverTopico(id)
      };
    })
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
      <p>Ao chegar a Praticado, o objetivo entra na fila D1/D7/D30. ${totalNaFila()} objetivo(s) na fila de revisão.</p>
    </div>`;
    return;
  }

  el.innerHTML = `
    <div class="review-count">${itens.length} revisão(ões) para hoje${itens.some((i) => i.atrasada) ? ' · algumas atrasadas' : ''}</div>
    ${itens.map((i) => {
      const cor = corDe ? corDe(i.trilha) : 'var(--accent)';
      return `<div class="review-item${i.atrasada ? ' is-late' : ''}">
        <button type="button" class="review-check" data-review-done="${escapeHtml(i.id)}" title="Marcar revisão como feita" aria-label="Concluir revisão de ${i.tipoNome.toLowerCase()}">✓</button>
        <div class="review-body">
          <div class="review-labels">
            <span class="review-marco" style="color:${cor}">${i.marco}</span>
            <span class="review-type review-type--${i.tipo}">${i.tipoNome}</span>
          </div>
          <span class="review-text">${escapeHtml(i.texto)}</span>
          <span class="review-action">${escapeHtml(i.instrucao)}</span>
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
