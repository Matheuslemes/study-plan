/* ═══════════════════════════════════════════════
   FEATURES / CERTIFICATIONS — painel de certificações (STUDY-052)

   Apenas as duas certificações obrigatórias do plano (STUDY-010):
   CLF-C02 na Fase 3 e SAA-C03 na Fase 9. Para cada uma: status,
   data-alvo (editável) e progresso de preparo (persistido).
═══════════════════════════════════════════════ */

import { ler, gravar } from '../core/storage.js';

const CHAVE = 'certificacoes';

/** Definição fixa das certificações do plano. */
const CERTS = [
  {
    id: 'clf', nome: 'CLF-C02', titulo: 'AWS Cloud Practitioner',
    fase: 3, mesAlvo: 8, cor: '#22d3b0',
    passos: ['Cloud concepts, regiões e AZs', 'IAM, S3, EC2, RDS, VPC', 'Billing, budgets e Free Tier', 'Simulado ≥ 80%']
  },
  {
    id: 'saa', nome: 'SAA-C03', titulo: 'AWS Solutions Architect Associate',
    fase: 9, mesAlvo: 26, cor: '#38bdf8',
    passos: ['Arquiteturas resilientes e multi-AZ', 'Compute, storage e rede', 'Segurança, IAM e KMS', 'Custo e Well-Architected', 'Simulados ≥ 80%']
  }
];

const STATUS = ['Não iniciada', 'Estudando', 'Pronto para prova', 'Aprovada'];

function estado() { return ler(CHAVE, {}); }
function salvar(e) { gravar(CHAVE, e); document.dispatchEvent(new CustomEvent('certs:change')); }

function dadosDe(id) {
  const e = estado()[id] || {};
  return { status: e.status ?? 0, passos: e.passos || {}, alvo: e.alvo || '' };
}

function atualizar(id, patch) {
  const e = estado();
  e[id] = { ...dadosDe(id), ...patch };
  salvar(e);
}

/** Progresso de preparo de uma cert: fração de passos marcados. */
function progressoCert(cert) {
  const { passos } = dadosDe(cert.id);
  const feitos = cert.passos.filter((_, i) => passos[i]).length;
  return { feitos, total: cert.passos.length, pct: Math.round((feitos / cert.passos.length) * 100) };
}

/* ─── render ─────────────────────────────────── */

export function renderCertificacoes(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = `<div class="cert-grid">${CERTS.map((c) => {
    const d = dadosDe(c.id);
    const p = progressoCert(c);
    return `<div class="cert-card" style="--cert-color:${c.cor}">
      <div class="cert-head">
        <div>
          <span class="cert-nome">${c.nome}</span>
          <span class="cert-titulo">${c.titulo}</span>
        </div>
        <span class="cert-status cert-status-${d.status}">${STATUS[d.status]}</span>
      </div>
      <div class="cert-meta">
        <span>Fase ${c.fase} · alvo mês ${c.mesAlvo}</span>
        <label class="cert-alvo">data-alvo
          <input type="date" data-cert-alvo="${c.id}" value="${d.alvo}">
        </label>
      </div>
      <div class="cert-prog">
        <div class="prog-track"><div class="prog-fill" style="width:${p.pct}%;background:${c.cor}"></div></div>
        <span class="cert-prog-num" style="color:${c.cor}">${p.pct}% · ${p.feitos}/${p.total} passos</span>
      </div>
      <ul class="cert-passos">
        ${c.passos.map((passo, i) => `<li>
          <label class="topic-check">
            <input type="checkbox" data-cert-passo="${c.id}:${i}"${d.passos[i] ? ' checked' : ''}>
            <span>${passo}</span>
          </label>
        </li>`).join('')}
      </ul>
      <label class="cert-status-sel">Status
        <select data-cert-status="${c.id}">
          ${STATUS.map((s, i) => `<option value="${i}"${d.status === i ? ' selected' : ''}>${s}</option>`).join('')}
        </select>
      </label>
    </div>`;
  }).join('')}</div>`;

  // interações
  el.querySelectorAll('[data-cert-passo]').forEach((cb) => {
    cb.addEventListener('change', () => {
      const [id, i] = cb.dataset.certPasso.split(':');
      const d = dadosDe(id);
      atualizar(id, { passos: { ...d.passos, [i]: cb.checked } });
      renderCertificacoes(containerId);
    });
  });
  el.querySelectorAll('[data-cert-status]').forEach((sel) => {
    sel.addEventListener('change', () => {
      atualizar(sel.dataset.certStatus, { status: Number(sel.value) });
      renderCertificacoes(containerId);
    });
  });
  el.querySelectorAll('[data-cert-alvo]').forEach((inp) => {
    inp.addEventListener('change', () => atualizar(inp.dataset.certAlvo, { alvo: inp.value }));
  });
}
