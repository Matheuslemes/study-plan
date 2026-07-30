/*
 * FEATURES / INTERVIEWS — simulados com resultado verificável (DIDATIC-024)
 */

import { SIMULADOS_ENTREVISTA } from '../../../data/interviews.js';
import { ler, gravar } from '../core/storage.js';
import { escapeHtml } from '../core/render.js';

const CHAVE = 'simuladosEntrevista';

function registros() {
  const valor = ler(CHAVE, {});
  return valor && typeof valor === 'object' && !Array.isArray(valor) ? valor : {};
}

function urlValida(valor) {
  try {
    const url = new URL(String(valor || '').trim());
    return ['http:', 'https:'].includes(url.protocol) && Boolean(url.hostname);
  } catch {
    return false;
  }
}

function resumo(registrosAtuais) {
  const realizados = Object.values(registrosAtuais).filter((item) => item.status === 'realizado');
  const soma = realizados.reduce((total, item) => total + Number(item.nota || 0), 0);
  return {
    realizados: realizados.length,
    media: realizados.length ? (soma / realizados.length).toFixed(1) : '—'
  };
}

export function renderInterviewSimulations(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const estado = registros();
  const totais = resumo(estado);

  el.innerHTML = `
    <section class="interview-panel" aria-labelledby="interview-title">
      <header class="interview-panel__header">
        <div>
          <span class="interview-panel__eyebrow">DIDATIC-024 · 12 checkpoints</span>
          <h5 id="interview-title">Simulados progressivos de entrevista</h5>
          <p>Um formato por fase: fundamentos, debugging, arquitetura, operação e defesa do DevCore.</p>
        </div>
        <div class="interview-panel__score">
          <strong>${totais.realizados}/12</strong>
          <span>realizados · média ${totais.media}/4</span>
        </div>
      </header>
      <div class="interview-list">
        ${SIMULADOS_ENTREVISTA.map((simulado) => {
          const salvo = estado[simulado.id] || {};
          const realizado = salvo.status === 'realizado';
          return `<details class="interview-card${realizado ? ' is-done' : ''}">
            <summary>
              <span class="interview-card__phase">F${simulado.fase}</span>
              <span><b>${escapeHtml(simulado.titulo)}</b><small>${escapeHtml(simulado.tipo)} · ${simulado.duracao} min</small></span>
              <em>${realizado ? `${salvo.nota}/4` : 'Pendente'}</em>
            </summary>
            <div class="interview-card__content">
              <ol>${simulado.roteiro.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ol>
              <p><strong>Critério:</strong> ${escapeHtml(simulado.criterio)}</p>
              <form data-interview-form="${simulado.id}" novalidate>
                <label>Status
                  <select name="status">
                    <option value="pendente"${!realizado ? ' selected' : ''}>Pendente</option>
                    <option value="realizado"${realizado ? ' selected' : ''}>Realizado</option>
                  </select>
                </label>
                <label>Nota
                  <select name="nota">
                    <option value="">—</option>
                    ${[1, 2, 3, 4].map((nota) => `<option value="${nota}"${Number(salvo.nota) === nota ? ' selected' : ''}>${nota}/4</option>`).join('')}
                  </select>
                </label>
                <label class="interview-card__evidence">Evidência
                  <input name="evidencia" type="url" inputmode="url" value="${escapeHtml(salvo.evidencia || '')}"
                    placeholder="https://.../gravação-ou-feedback">
                </label>
                <button type="submit">Salvar resultado</button>
                <span class="interview-card__error" data-interview-error role="alert"></span>
              </form>
            </div>
          </details>`;
        }).join('')}
      </div>
    </section>`;

  el.querySelectorAll('[data-interview-form]').forEach((form) => {
    form.addEventListener('submit', (evento) => {
      evento.preventDefault();
      const id = form.dataset.interviewForm;
      const status = form.elements.status.value;
      const nota = Number(form.elements.nota.value || 0);
      const evidencia = form.elements.evidencia.value.trim();
      const erro = form.querySelector('[data-interview-error]');
      if (status === 'realizado' && (!nota || !urlValida(evidencia))) {
        erro.textContent = 'Realizado exige nota de 1–4 e URL de gravação, feedback ou relatório.';
        return;
      }
      const atual = registros();
      atual[id] = {
        status,
        nota: status === 'realizado' ? nota : null,
        evidencia: status === 'realizado' ? evidencia : '',
        atualizadoEm: new Date().toISOString()
      };
      gravar(CHAVE, atual);
      renderInterviewSimulations(containerId);
    });
  });
}
