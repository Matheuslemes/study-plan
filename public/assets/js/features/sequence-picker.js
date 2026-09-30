import { sequence, SEQUENCES, P, isArchitecture, setSequence, weeklyHours } from '../core/study-context.js';
import { resolvePublicUrl } from '../core/public-url.js';
import { ler, gravar, flushProgress } from '../core/storage.js';
import { escapeHtml as esc } from '../core/render.js';
import { getFaseAtual, setFaseAtual } from './active-phase.js';
import { arquiteturaModules } from '../../../data/arquitetura-advanced.js';
import { renderTrackRoadmap } from './track-roadmap.js';
import { idTopico, estadoDoTopico } from './progress.js';

export async function changeSequence(id) {
  if (id === sequence.id) return;
  if (!setSequence(id)) return false;
  await flushProgress();
  location.reload();
  return true;
}

export function renderSequencePanel() {
  const main = document.getElementById('conteudo');
  if (!main) return;
  const panel = document.createElement('section');
  panel.className = 'sequence-panel';
  panel.setAttribute('aria-label', 'Sequência de estudos');
  panel.innerHTML = `<div class="sequence-heading"><span class="hero-eyebrow">Sequência de estudos</span><span class="text-muted small">Cada percurso mantém sua etapa e seu progresso.</span></div>
    <div class="sequence-options">${Object.values(SEQUENCES).map(s => `<button type="button" class="sequence-option${s.id === sequence.id ? ' is-active' : ''}" data-sequence="${s.id}" aria-pressed="${s.id === sequence.id}"><strong>${esc(s.name)}</strong><span>${s.id === 'backend' ? '12 fases · 36 meses · formação completa' : '6 etapas · 480h estimadas · aprofundamento'}</span></button>`).join('')}</div>
    <p class="sequence-description">${esc(sequence.description)}</p>
    ${isArchitecture() ? `<form id="sequenceHoursForm" class="sequence-settings"><label for="sequenceHours">Carga técnica semanal</label><input id="sequenceHours" name="hours" type="number" min="5" max="40" step="1" value="${weeklyHours()}" required><span>h/semana · ~${Math.ceil(480 / weeklyHours())} semanas</span><button type="submit">Atualizar</button><small>24 semanas a 20h/semana. Estimativa ajustável; o avanço depende de evidência.</small></form>` : ''}
    <div class="sequence-settings"><label for="sequenceStage">${isArchitecture() ? 'Etapa' : 'Fase'} atual</label><select id="sequenceStage">${P.map(p => `<option value="${p.id}"${getFaseAtual() === p.id ? ' selected' : ''}>${p.l} · ${esc(p.t)}</option>`).join('')}</select></div>
    <p id="sequenceFeedback" role="status" class="small" aria-live="polite"></p>`;
  main.prepend(panel);
  panel.querySelectorAll('[data-sequence]').forEach(button => button.addEventListener('click', async () => {
    if (await changeSequence(button.dataset.sequence) === false) panel.querySelector('#sequenceFeedback').textContent = 'Não foi possível salvar a seleção neste navegador.';
  }));
  panel.querySelector('#sequenceStage').addEventListener('change', async e => { setFaseAtual(e.target.value); await flushProgress(); location.reload(); });
  panel.querySelector('form')?.addEventListener('submit', async e => {
    e.preventDefault();
    const value = Number(new FormData(e.target).get('hours'));
    if (!Number.isInteger(value) || value < 5 || value > 40) return;
    if (!gravar('cargaSemanal:arquitetura', value)) { panel.querySelector('#sequenceFeedback').textContent = 'Não foi possível salvar a carga.'; return; }
    await flushProgress(); location.reload();
  });
}

export function renderSequenceStage() {
  if (!isArchitecture()) return;
  let el = document.getElementById('architectureStage');
  if (!el) { el = document.createElement('section'); el.id = 'architectureStage'; el.className = 'sequence-stage'; document.getElementById('todayView')?.after(el); }
  const p = P.find(p => p.id === getFaseAtual());
  const diagnostic = ler('diagnostico:arquitetura', {});
  const deliveryId = idTopico('pratica', p.id, 0);
  const validated = ['validado', 'dominado'].includes(estadoDoTopico(deliveryId));
  el.innerHTML = `<details class="sequence-diagnostic"${Object.values(diagnostic).filter(Boolean).length < sequence.diagnostic.length ? ' open' : ''}><summary>Diagnóstico de entrada · ${sequence.diagnostic.filter(d => diagnostic[d.id]).length}/${sequence.diagnostic.length} verificados</summary><p>Autoavaliação de pré-requisitos. Se houver lacuna, abra o conteúdo de apoio; marcar aqui não atribui domínio.</p>${sequence.diagnostic.map(d => `<div class="sequence-diagnostic-row"><label><input type="checkbox" data-diagnostic="${d.id}"${diagnostic[d.id] ? ' checked' : ''}> ${esc(d.text)}</label><a href="${resolvePublicUrl(d.href)}">Revisar →</a></div>`).join('')}</details>
    <div class="sequence-heading"><div><span class="hero-eyebrow">Próxima entrega · ${p.l}</span><h3>${esc(p.t)}</h3></div><span class="htag htag-g">${validated ? 'Entrega validada' : 'Evidência pendente'}</span></div>
    <p>${esc(p.lab.entrega)}</p><p><strong>Critério:</strong> ${esc(p.proof)}</p>
    <div class="sequence-module-links">${p.modules.map(id => { const m = arquiteturaModules.find(m => m.id === id); return m ? `<a href="${resolvePublicUrl(`trilhas/arquitetura/${m.part}.html`)}#${esc(m.id)}">${esc(m.title)} <span class="ml-arrow" aria-hidden="true">↗</span></a>` : ''; }).join('')}</div>
    <p class="small text-muted sequence-support">Apoio: <a href="${resolvePublicUrl('trilhas/java.html')}#phaseRoadmap">Java</a> · <a href="${resolvePublicUrl('trilhas/bancos.html')}#phaseRoadmap">Bancos</a> · <a href="${resolvePublicUrl('trilhas/sec.html')}#phaseRoadmap">Segurança</a> · <a href="${resolvePublicUrl('trilhas/devops.html')}#phaseRoadmap">DevOps</a> · <a href="${resolvePublicUrl('trilhas/aws.html')}#phaseRoadmap">AWS</a></p>
    <details><summary>Registrar evidências das seis entregas</summary><div id="architectureDeliveries"></div></details>
    <p class="small text-muted">Aprofundamentos opcionais, fora do percentual deste ciclo: ${sequence.optional.map(esc).join(' · ')}.</p>`;
  el.querySelectorAll('[data-diagnostic]').forEach(input => input.addEventListener('change', () => {
    const state = ler('diagnostico:arquitetura', {}); state[input.dataset.diagnostic] = input.checked; gravar('diagnostico:arquitetura', state);
    el.querySelector('summary').textContent = `Diagnóstico de entrada · ${sequence.diagnostic.filter(d => state[d.id]).length}/${sequence.diagnostic.length} verificados`;
  }));
  renderTrackRoadmap('architectureDeliveries', 'pratica');
}

// Os textos originais continuam no HTML para a sequência Backend.
// A segunda sequência substitui somente a apresentação dependente do percurso.
export function adaptSequenceCopy() {
  if (!isArchitecture()) return;
  const text = (selector, value) => { const el = document.querySelector(selector); if (el) el.textContent = value; };
  const weeks = Math.ceil(480 / weeklyHours());
  document.title = 'Plano Integrado de Estudos — Arquitetura de Soluções e Integração';
  document.body.dataset.track = 'arquitetura';
  // Metadados: o percurso é um toggle client-side (crawlers ainda veem o HTML
  // estático do Backend), mas atualizamos o DOM para extensões, leitores de tela
  // e quem inspeciona a página — a descrição deixa de dizer "Backend · 36 meses".
  const setMeta = (selector, content) => { const el = document.querySelector(selector); if (el) el.setAttribute('content', content); };
  const metaDesc = `${sequence.name}: 6 etapas, ~${weeks} semanas, 480h estimadas. ${sequence.description}`;
  setMeta('meta[name="description"]', metaDesc);
  setMeta('meta[property="og:title"]', document.title);
  setMeta('meta[property="og:description"]', metaDesc);
  setMeta('meta[name="twitter:title"]', document.title);
  setMeta('meta[name="twitter:description"]', metaDesc);
  text('.cc-hero .hero-eyebrow', `6 etapas · ~${weeks} semanas · 480h estimadas`);
  text('.hero-sub', sequence.description + ' A sequência define a etapa; a etapa define o conteúdo e a rotina. O diagnóstico direciona revisões de base. Certificações são opcionais.');
  const overview = document.querySelector('#tabFases');
  // Retirar somente a explicação estática do percurso Backend, preservando os alvos dinâmicos.
  for (const child of [...overview.children]) { if (child.id === 'phaseCards') break; child.hidden = true; }
  const intro = document.createElement('div'); intro.className = 'hours-margin-note mb-3'; intro.textContent = `Arquitetura · seis etapas encadeadas · 80h estimadas por etapa · ~${weeks} semanas na carga escolhida. Avance com entregável validado e mantenha D30 na fila. As trilhas complementares são estudadas conforme a necessidade do projeto.`; overview.prepend(intro);
  text('#tabDaily > p', 'Orçamento técnico flexível: distribua os blocos ao redor do trabalho e das pausas. O conteúdo vem da etapa ativa; preserve sono, treino e domingo livre.');
  const notes = document.querySelectorAll('#tabDaily > .hours-margin-note');
  if (notes[0]) notes[0].textContent = 'Distribuição orientativa, incluindo prática: 35% arquitetura e decisões · 25% integração e dados · 20% cloud, segurança e operação · 10% Java específico · 10% comunicação. Ajuste pelo experimento da etapa.';
  if (notes[1]) notes[1].textContent = 'Segunda: requisitos → terça: domínio e contratos → quarta: experimento → quinta: falhas e operação → sexta: decisão e apresentação → sábado: consolidação → domingo: descanso.';
  text('#tabDetail > h4', 'Detalhamento das seis etapas'); text('#tabDetail > p', 'Conteúdo obrigatório e entregáveis da sequência de arquitetura. A biblioteca completa permanece disponível.');
  text('#tabTracks > h4', 'Trilhas — progressão na sequência de Arquitetura'); text('#tabTracks > p', 'Selecione uma trilha para consultar os objetivos exigidos nas seis etapas.');
  text('#tabProjetos > p', 'Seis entregas encadeadas no mesmo DevCore de pedidos, pagamentos e conciliação.');
  text('#tabPdfs .d-flex p', 'Biblioteca compartilhada dos dois percursos. As fases indicadas no catálogo são referências da formação Backend; use os módulos da etapa atual para orientar a leitura em Arquitetura.');
  text('#tabSync .pdf-counter', `6 etapas · ~${weeks} semanas`);
  text('#tabSync .d-flex p', 'Dependências, decisões e entregas do percurso selecionado.');
  text('#tabSync > .hours-margin-note', 'Cada etapa utiliza a evidência da anterior. Git, inglês, segurança e revisões acompanham a evolução do mesmo produto.');
  text('#tabSync > p', 'Cada ciclo corresponde a uma etapa com objetivo, experimento e defesa.');
  const cert = document.getElementById('certPanel'); if (cert?.previousElementSibling) cert.previousElementSibling.textContent = 'Certificações são opcionais neste percurso; priorize aplicação, evidência e revisão arquitetural.';
  const interview = document.getElementById('interviewPanel'); if (interview?.previousElementSibling) interview.previousElementSibling.textContent = 'Uma defesa arquitetural por etapa, com nota e URL da apresentação ou relatório.';
  text('footer p', 'Duas sequências · uma biblioteca compartilhada · progresso preservado por percurso.');
  text('footer .htag-b', 'Arquitetura de Soluções e Integração');
}
