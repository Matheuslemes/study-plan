/* ═══════════════════════════════════════════════
   FEATURES / BACKUP — exportar e importar progresso (STUDY-054)

   Todo o estado vive em localStorage, que é por navegador e some
   se o cache for limpo. Um plano de 36 meses precisa de saída:
   baixar um JSON e restaurá-lo em outra máquina.

   Usa exportarTudo/importarTudo de core/storage.js.
═══════════════════════════════════════════════ */

import { exportarTudo, importarTudo, chaves } from '../core/storage.js';
import { escapeHtml } from '../core/render.js';

const NOME_ARQUIVO = () => `plano-estudos-${new Date().toISOString().slice(0, 10)}.json`;

/** Gera o arquivo e dispara o download. */
export function exportar() {
  const dados = { exportadoEm: new Date().toISOString(), dados: exportarTudo() };
  const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = NOME_ARQUIVO();
  a.click();
  URL.revokeObjectURL(url);
  return Object.keys(dados.dados).length;
}

/** Lê um File e restaura. Retorna Promise<{ok, msg}>. */
export function importarArquivo(file) {
  return new Promise((resolve) => {
    const leitor = new FileReader();
    leitor.onload = () => {
      try {
        const parsed = JSON.parse(leitor.result);
        const payload = parsed?.dados ?? parsed;
        if (!payload || typeof payload !== 'object') {
          resolve({ ok: false, msg: 'Arquivo sem dados reconhecíveis.' });
          return;
        }
        const n = importarTudo(payload);
        resolve({ ok: true, msg: `${n} item(ns) restaurado(s). Recarregue para ver o progresso.` });
      } catch {
        resolve({ ok: false, msg: 'Arquivo inválido: não é um JSON legível.' });
      }
    };
    leitor.onerror = () => resolve({ ok: false, msg: 'Não foi possível ler o arquivo.' });
    leitor.readAsText(file);
  });
}

export function renderBackup(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = `
    <div class="backup-box">
      <div class="backup-info">
        <strong>Backup do seu progresso</strong>
        <p>Tudo é salvo só neste navegador. Limpar o cache apaga. Exporte um JSON de tempos em tempos
        — e use o mesmo arquivo para levar o progresso a outra máquina.
        <span class="backup-count">${chaves().length} chave(s) salvas agora.</span></p>
      </div>
      <div class="backup-actions">
        <button type="button" class="backup-btn" id="btnExportar">⬇ Exportar JSON</button>
        <label class="backup-btn backup-btn-alt" for="inputImportar">⬆ Importar JSON</label>
        <input type="file" id="inputImportar" accept="application/json,.json" hidden>
      </div>
      <div class="backup-msg" id="backupMsg" role="status" aria-live="polite"></div>
    </div>`;

  const msg = (texto, ok) => {
    const box = document.getElementById('backupMsg');
    if (!box) return;
    box.textContent = texto;
    box.className = 'backup-msg ' + (ok ? 'is-ok' : 'is-err');
  };

  document.getElementById('btnExportar')?.addEventListener('click', () => {
    const n = exportar();
    msg(`Arquivo gerado com ${n} chave(s).`, true);
  });

  document.getElementById('inputImportar')?.addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const r = await importarArquivo(file);
    msg(r.msg, r.ok);
    e.target.value = '';
    if (r.ok) document.dispatchEvent(new CustomEvent('progress:change'));
  });
}
