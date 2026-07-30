/*
 * FEATURES / RECOVERY — modos Ideal, Mínima e Recuperação (DIDATIC-022)
 */

import { MODOS_ROTINA } from '../../../data/routine.js';
import { ler, gravar } from '../core/storage.js';

const CHAVE_MODO = 'modoRotina';
const CHAVE_HISTORICO = 'historicoModoRotina';

function inicioDaSemana(data = new Date()) {
  const d = new Date(data);
  d.setHours(0, 0, 0, 0);
  const deslocamento = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - deslocamento);
  return d;
}

const semanaAtual = () => inicioDaSemana().toISOString().slice(0, 10);

export function modoRotinaAtual() {
  const modo = ler(CHAVE_MODO, 'ideal');
  return MODOS_ROTINA[modo] ? modo : 'ideal';
}

function historico() {
  const valor = ler(CHAVE_HISTORICO, []);
  return Array.isArray(valor) ? valor : [];
}

function registrarModo(modo) {
  if (!MODOS_ROTINA[modo]) return false;
  const semana = semanaAtual();
  const atualizado = historico().filter((item) => item.semana !== semana);
  atualizado.push({ semana, modo, registradoEm: new Date().toISOString() });
  gravar(CHAVE_MODO, modo);
  gravar(CHAVE_HISTORICO, atualizado.slice(-52));
  document.dispatchEvent(new CustomEvent('routine-mode:change', { detail: { modo } }));
  return true;
}

function semanasMinimasConsecutivas() {
  const registros = [...historico()]
    .filter((item) => item?.semana && MODOS_ROTINA[item.modo])
    .sort((a, b) => b.semana.localeCompare(a.semana));
  let esperada = inicioDaSemana();
  let total = 0;
  for (const item of registros) {
    if (item.semana !== esperada.toISOString().slice(0, 10) || item.modo !== 'minima') break;
    total += 1;
    esperada.setDate(esperada.getDate() - 7);
  }
  return total;
}

export function renderRecoveryProtocol(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const atual = modoRotinaAtual();
  const sequenciaMinima = semanasMinimasConsecutivas();

  el.innerHTML = `
    <section class="recovery-protocol" aria-labelledby="recovery-title">
      <header class="recovery-protocol__header">
        <div>
          <span class="recovery-protocol__eyebrow">Protocolo de continuidade</span>
          <h5 id="recovery-title">Escolha a carga da semana real</h5>
        </div>
        <p>Reduzir o plano é uma decisão operacional. Não acumule horas para “pagar” depois.</p>
      </header>
      <div class="recovery-modes" role="group" aria-label="Carga desta semana">
        ${Object.entries(MODOS_ROTINA).map(([chave, modo]) => `
          <button type="button" class="recovery-mode${chave === atual ? ' is-active' : ''}"
            data-routine-mode="${chave}" aria-pressed="${chave === atual}">
            <span class="recovery-mode__top">
              <strong>${modo.nome}</strong><b>${modo.carga}</b>
            </span>
            <span class="recovery-mode__when">${modo.quando}</span>
            <span class="recovery-mode__rule">${modo.regra}</span>
            <span class="recovery-mode__blocks">${modo.blocos.join(' · ')}</span>
          </button>`).join('')}
      </div>
      ${sequenciaMinima >= 2 ? `<div class="recovery-alert" role="alert">
        <strong>Revisão da fase obrigatória.</strong>
        Você registrou ${sequenciaMinima} semanas mínimas seguidas. Reduza o escopo ou estenda a fase; o problema agora é do plano, não de disciplina.
      </div>` : `<p class="recovery-protocol__foot">
        Duas semanas mínimas consecutivas disparam revisão obrigatória do escopo da fase.
      </p>`}
    </section>`;

  el.querySelectorAll('[data-routine-mode]').forEach((botao) => {
    botao.addEventListener('click', () => {
      registrarModo(botao.dataset.routineMode);
      renderRecoveryProtocol(containerId);
    });
  });
}
