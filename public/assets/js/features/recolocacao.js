/* ═══════════════════════════════════════════════
   FEATURES / RECOLOCAÇÃO — rotina alternativa de troca de emprego

   Renderiza a aba "Recolocação" do dashboard: duração (90 a
   180 dias), data de início, perfil de horário, linha do tempo,
   semana com grade de horários por dia, entregáveis com
   evidência, livros, evidência de mercado e regras.

   Estado próprio no storage (prefixo studyplan:recolocacao:*);
   não toca em fase, sequência nem progresso das 12 fases.
═══════════════════════════════════════════════ */

import {
  DURACAO, OPCOES_MESES, semanasValidas, diasDoSprint, diasDaUltimaSemana,
  semanasDoSprint, semanaDasCandidaturas, ORDEM_DE_ENTRADA, ROTULO_TIPO,
  gradeDaSemana, LIVROS, AREAS_LIVRO, EVIDENCIA_MERCADO, REGRAS_RECOLOCACAO,
  TODAS_AS_SEMANAS
} from '../../../data/recolocacao.js';
import { weekDays } from '../../../data/routine.js';
import { biblioteca } from '../../../data/biblioteca.js';
import { CK } from '../../../data/tracks.js';
import { PERFIS_ROTINA, perfilRotina, setPerfilRotina } from '../core/study-context.js';
import { ler, gravar, flushProgress } from '../core/storage.js';
import { escapeHtml } from '../core/render.js';
import { resolvePublicUrl } from '../core/public-url.js';

const CHAVE = {
  semanas: 'recolocacao:semanas',
  unidade: 'recolocacao:unidade',
  inicio: 'recolocacao:inicio',
  entregas: 'recolocacao:entregas',
  dias: 'recolocacao:dias'
};

const DIA_MS = 86400000;
const cor = (k) => (CK[k] || CK.n);

/* ─── datas (sempre em data local, sem hora) ───── */

const isoLocal = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

function dataDeIso(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ''));
  return m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) : null;
}

const hojeLocal = () => { const d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate()); };
const somarDias = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const diferencaEmDias = (a, b) => Math.round((Date.UTC(b.getFullYear(), b.getMonth(), b.getDate()) - Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())) / DIA_MS);

/** Segunda-feira da semana da data (o sprint sempre começa numa segunda). */
const segundaDe = (d) => somarDias(d, -((d.getDay() + 6) % 7));

/** Próxima segunda (ou hoje, se hoje for segunda). */
const proximaSegunda = () => { const h = hojeLocal(); return somarDias(h, (8 - h.getDay()) % 7); };

const fmtCurta = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit' });
const fmtLonga = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' });

/* ─── estado ───────────────────────────────────── */

const estado = { semanaVista: null, diaVisto: null };

const semanasEscolhidas = () => semanasValidas(ler(CHAVE.semanas, DURACAO.padraoSemanas));
const unidadeEscolhida = () => (ler(CHAVE.unidade, 'semanas') === 'meses' ? 'meses' : 'semanas');

function inicioDoSprint() {
  const salvo = dataDeIso(ler(CHAVE.inicio, null));
  return { data: salvo ? segundaDe(salvo) : proximaSegunda(), definido: Boolean(salvo) };
}

const entregas = () => { const v = ler(CHAVE.entregas, {}); return v && typeof v === 'object' && !Array.isArray(v) ? v : {}; };
const diasFeitos = () => { const v = ler(CHAVE.dias, {}); return v && typeof v === 'object' && !Array.isArray(v) ? v : {}; };

/** Onde hoje cai no sprint. */
function posicaoDeHoje(inicio, totalDias) {
  const desde = diferencaEmDias(inicio, hojeLocal());
  if (desde < 0) return { fase: 'antes', faltam: -desde };
  if (desde >= totalDias) return { fase: 'depois' };
  return { fase: 'durante', semana: Math.floor(desde / 7) + 1, diaIndice: desde % 7, diaDoSprint: desde + 1 };
}

const urlValida = (texto) => { try { const u = new URL(String(texto).trim()); return u.protocol === 'https:' || u.protocol === 'http:'; } catch { return false; } };

/* ─── livros ───────────────────────────────────── */

function linkDoLivro(livro) {
  if (livro.biblioteca) {
    const item = biblioteca.find((b) => b.n === livro.biblioteca);
    if (item?.path) return { href: resolvePublicUrl(item.path), rotulo: 'PDF na Biblioteca', classe: 'is-presente' };
    if (item?.url) return { href: item.url, rotulo: 'Online', classe: 'is-online' };
  }
  if (livro.interno) return { href: resolvePublicUrl(livro.interno), rotulo: 'Trilha do plano', classe: 'is-online' };
  if (livro.url) return { href: livro.url, rotulo: livro.gratis ? 'Gratuito online' : 'Site oficial', classe: 'is-online' };
  return { href: '', rotulo: 'Fora do acervo', classe: 'is-ausente' };
}

function itemDeLivro([ref, trecho]) {
  const livro = LIVROS[ref];
  if (!livro) return '';
  const link = linkDoLivro(livro);
  const titulo = link.href
    ? `<a href="${escapeHtml(link.href)}" target="_blank" rel="noopener">${escapeHtml(livro.titulo)}</a>`
    : escapeHtml(livro.titulo);
  return `<li class="rc-livro">
    <div class="rc-livro-head"><span class="rc-livro-titulo">${titulo}</span><span class="biblio-status ${link.classe}">${link.rotulo}</span></div>
    <span class="rc-livro-autor">${escapeHtml(livro.autor)} · ${escapeHtml(String(livro.ano))}</span>
    <span class="rc-livro-trecho">${escapeHtml(trecho)}</span>
  </li>`;
}

/* ─── blocos de configuração ───────────────────── */

function painelDeConfiguracao(semanas, inicio, unidade) {
  const perfil = perfilRotina();
  const opcoesSemanas = Array.from({ length: DURACAO.maxSemanas - DURACAO.minSemanas + 1 }, (_, i) => DURACAO.minSemanas + i)
    .map((n) => `<option value="${n}"${n === semanas ? ' selected' : ''}>${n} semanas · ${diasDoSprint(n)} dias</option>`).join('');
  const mesAtual = OPCOES_MESES.find((m) => m.semanas === semanas);
  const opcoesMeses = OPCOES_MESES
    .map((m) => `<option value="${m.semanas}"${m.semanas === semanas ? ' selected' : ''}>${m.meses} meses · ${m.semanas} semanas · ${diasDoSprint(m.semanas)} dias</option>`).join('')
    + (mesAtual ? '' : `<option value="${semanas}" selected>${semanas} semanas (escolhido em semanas)</option>`);
  const fim = somarDias(inicio.data, diasDoSprint(semanas) - 1);
  return `
  <section class="rc-config" aria-label="Configuração do sprint">
    <div class="rc-config-campo">
      <label class="rc-config-rotulo" for="rcUnidade">Contar o prazo em</label>
      <select id="rcUnidade">
        <option value="semanas"${unidade === 'semanas' ? ' selected' : ''}>Semanas</option>
        <option value="meses"${unidade === 'meses' ? ' selected' : ''}>Meses</option>
      </select>
    </div>
    <div class="rc-config-campo">
      <label class="rc-config-rotulo" for="rcDuracao">Duração</label>
      <select id="rcDuracao">${unidade === 'meses' ? opcoesMeses : opcoesSemanas}</select>
      <span class="rc-config-hint">Entre ${DURACAO.minDias} e ${DURACAO.maxDias} dias.</span>
    </div>
    <div class="rc-config-campo">
      <label class="rc-config-rotulo" for="rcInicio">Início</label>
      <input type="date" id="rcInicio" class="rc-campo" value="${isoLocal(inicio.data)}">
      <span class="rc-config-hint">${inicio.definido ? '' : 'Sugerido: próxima segunda. '}Começa na segunda ${fmtCurta.format(inicio.data)} e termina ${fmtLonga.format(fim)}.</span>
    </div>
    <div class="rc-config-campo">
      <label class="rc-config-rotulo" for="rcPerfil">Horário</label>
      <select id="rcPerfil">
        ${Object.entries(PERFIS_ROTINA).map(([id, p]) => `<option value="${id}"${id === perfil ? ' selected' : ''}>${escapeHtml(p.nome)}</option>`).join('')}
      </select>
      <span class="rc-config-hint">O mesmo perfil da Rotina diária. Mudar aqui muda lá também.</span>
    </div>
  </section>`;
}

function metricas(semanas, inicio, sprint) {
  const dias = diasDoSprint(semanas);
  const nucleo = sprint.filter((s) => s.tipo === 'nucleo').length;
  const extras = sprint.length - nucleo;
  const cand = semanaDasCandidaturas(semanas);
  const dataCand = somarDias(inicio.data, (cand - 1) * 7);
  const feitos = entregas();
  const todos = sprint.flatMap((s) => s.entregaveis);
  const prontos = todos.filter((e) => feitos[e.id]?.feito).length;
  const ultima = diasDaUltimaSemana(semanas);
  const card = (val, lbl, texto) => `<div class="col-12 col-sm-6 col-xl-3"><div class="metric-card h-100"><span class="val">${val}</span><span class="lbl">${lbl}</span><p class="text-muted small mt-2 mb-0">${texto}</p></div></div>`;
  return `<div class="row g-3 mb-3">
    ${card(`${semanas} sem`, `${dias} dias de sprint`, ultima < 7 ? `A última semana termina na sexta para respeitar o teto de ${DURACAO.maxDias} dias.` : `Prazo entre ${DURACAO.minDias} e ${DURACAO.maxDias} dias.`)}
    ${card(`${nucleo} + ${extras}`, 'núcleo + aprofundamento', extras ? `${extras} semana${extras > 1 ? 's' : ''} de aprofundamento além do núcleo de ${nucleo}.` : 'Só o núcleo: o mínimo que as vagas pedem.')}
    ${card(`S${String(cand).padStart(2, '0')}`, 'início das candidaturas', `Semana de Docker e CI/CD, a partir de ${fmtCurta.format(dataCand)}: 10 por semana.`)}
    ${card(`${prontos}/${todos.length}`, 'entregáveis com evidência', 'Cada entregável só conta com a URL registrada.')}
  </div>`;
}

function faixaDeHoje(posicao, semanas) {
  if (posicao.fase === 'antes') return `<div class="rc-hoje">O sprint começa em ${posicao.faltam} dia${posicao.faltam > 1 ? 's' : ''}. Use esses dias para ler o objetivo da semana 1 e separar o material.</div>`;
  if (posicao.fase === 'depois') return '<div class="rc-hoje">O prazo do sprint terminou. Ajuste a data de início ou a duração para recomeçar, ou siga para o plano de continuidade da semana final.</div>';
  return `<div class="rc-hoje">Hoje: <strong>semana ${posicao.semana} de ${semanas}</strong> · ${escapeHtml(weekDays[posicao.diaIndice].label)} · dia ${posicao.diaDoSprint} do sprint
    <button type="button" class="rc-link-btn" data-rc-hoje>Ir para hoje</button></div>`;
}

function linhaDoTempo(sprint, inicio, semanaVista, posicao) {
  const feitos = entregas();
  return `<section class="mb-4" aria-labelledby="rcLinhaTitulo">
    <h5 class="mb-2" id="rcLinhaTitulo">Linha do tempo</h5>
    <div class="rc-timeline" role="list">
      ${sprint.map((s, i) => {
        const n = i + 1;
        const ini = somarDias(inicio.data, i * 7);
        const prontos = s.entregaveis.filter((e) => feitos[e.id]?.feito).length;
        const atual = posicao.fase === 'durante' && posicao.semana === n;
        const c = cor(s.k);
        return `<div role="listitem"><button type="button" class="rc-semana-btn${n === semanaVista ? ' is-active' : ''}${atual ? ' is-hoje' : ''}" data-rc-semana="${n}" aria-pressed="${n === semanaVista}" style="--rc-cor:${c.t}">
          <span class="rc-semana-num">S${String(n).padStart(2, '0')} · ${fmtCurta.format(ini)}</span>
          <span class="rc-semana-titulo">${escapeHtml(s.titulo)}</span>
          <span class="rc-semana-meta"><span class="rc-tipo rc-tipo-${s.tipo}">${ROTULO_TIPO[s.tipo]}</span>${s.marco === 'candidaturas' ? '<span class="rc-tipo rc-tipo-marco">Candidaturas</span>' : ''}<span class="rc-semana-prog">${prontos}/${s.entregaveis.length}</span></span>
        </button></div>`;
      }).join('')}
    </div>
  </section>`;
}

/* ─── semana selecionada ───────────────────────── */

function blocoDaGrade(b) {
  const c = cor(b.k);
  const type = b.type || 'study';
  return `<article class="daily-block daily-block-${escapeHtml(type)}" style="--daily-kind-color:${c.t};--daily-kind-bg:${c.b};${type === 'break' ? 'opacity:.88' : ''}">
    <div class="daily-time" style="background:${c.b}">
      <span class="mono small" style="color:${c.t};font-weight:600;font-size:.72rem">${escapeHtml(b.time)}</span>
      <span style="font-family:'IBM Plex Mono',monospace;font-size:.65rem;color:${c.t};opacity:.75">${escapeHtml(b.dur || '')}</span>
    </div>
    <div class="daily-content">
      <span class="daily-kind">${escapeHtml(b.kind || type)}</span>${b.priority ? `<span class="daily-priority">${escapeHtml(b.priority)}</span>` : ''}
      <h6 style="color:${c.t}">${escapeHtml(b.block)}</h6>
      <p>${escapeHtml(b.d)}</p>
    </div>
  </article>`;
}

function focoDoDiaVisto(semana, diaIndice) {
  if (diaIndice < 5) return semana.dias[diaIndice].foco;
  return diaIndice === 5 ? 'Exercícios, lab do entregável e o bloco da noite' : 'Descanso real e revisão leve';
}

function gradeDoDia(semana, numero, semanas, diaIndice, inicio) {
  const dia = weekDays[diaIndice];
  const data = somarDias(inicio.data, (numero - 1) * 7 + diaIndice);
  const foraDoPrazo = numero === semanas && diaIndice >= diasDaUltimaSemana(semanas);
  const chaveDia = `${semana.id}:${dia.key}`;
  const feito = Boolean(diasFeitos()[chaveDia]);
  const tabs = weekDays.map((d, i) => `<li class="nav-item" role="presentation"><button type="button" class="nav-link daily-day-btn${i === diaIndice ? ' active' : ''}" data-rc-dia="${i}" role="tab" aria-selected="${i === diaIndice}" aria-controls="rcGrade"><span class="d-none d-sm-inline">${d.label}</span><span class="d-sm-none">${d.short}</span></button></li>`).join('');
  const conteudo = foraDoPrazo
    ? `<p class="rc-fora">Este dia fica fora do prazo de ${DURACAO.maxDias} dias: o sprint termina na sexta, ${fmtCurta.format(somarDias(inicio.data, diasDoSprint(semanas) - 1))}.</p>`
    : gradeDaSemana(semana, perfilRotina())[dia.key].map(blocoDaGrade).join('');
  return `<div class="daily-day-tabs-wrap mb-2" aria-label="Dias da semana ${numero}">
      <div class="daily-day-tabs-scroll"><ul class="nav nav-pills flex-nowrap gap-1" role="tablist" aria-label="Dias da semana do sprint">${tabs}</ul></div>
    </div>
    <div class="rc-dia-head">
      <div><span class="phase-slot-tag">${escapeHtml(dia.label)} · ${fmtCurta.format(data)}</span>
      <p class="rc-dia-foco">${escapeHtml(focoDoDiaVisto(semana, diaIndice))}</p></div>
      ${foraDoPrazo ? '' : `<label class="topic-check"><input type="checkbox" data-rc-dia-feito="${escapeHtml(chaveDia)}"${feito ? ' checked' : ''}><span>Dia cumprido</span></label>`}
    </div>
    <div class="rc-grade" id="rcGrade" role="tabpanel">${conteudo}</div>`;
}

function cartaoEntregaveis(semana) {
  const feitos = entregas();
  return `<div class="rc-card"><h6>Entregáveis da semana</h6><ul class="rc-entregas">
    ${semana.entregaveis.map((e) => {
      const reg = feitos[e.id] || {};
      return `<li class="rc-entrega${reg.feito ? ' is-feito' : ''}">
        <label class="topic-check"><input type="checkbox" data-rc-entrega="${escapeHtml(e.id)}"${reg.feito ? ' checked' : ''}><span>${escapeHtml(e.titulo)}</span></label>
        <span class="rc-criterio">Pronto quando: ${escapeHtml(e.criterio)}</span>
        <label class="visually-hidden" for="rcUrl-${escapeHtml(e.id)}">URL de evidência de ${escapeHtml(e.titulo)}</label>
        <input type="url" inputmode="url" id="rcUrl-${escapeHtml(e.id)}" class="rc-evidencia" placeholder="https://… (repositório, PR, deploy ou gravação)" value="${escapeHtml(reg.url || '')}" data-rc-url="${escapeHtml(e.id)}">
        <span class="rc-aviso" data-rc-aviso="${escapeHtml(e.id)}" role="status" aria-live="polite">${reg.feito && reg.em ? `Entregue em ${escapeHtml(fmtCurta.format(dataDeIso(reg.em) || new Date()))}` : ''}</span>
      </li>`;
    }).join('')}
  </ul></div>`;
}

function detalheDaSemana(sprint, numero, semanas, inicio) {
  const semana = sprint[numero - 1];
  const ini = somarDias(inicio.data, (numero - 1) * 7);
  const fim = somarDias(ini, numero === semanas ? diasDaUltimaSemana(semanas) - 1 : 6);
  const c = cor(semana.k);
  const diaIndice = estado.diaVisto ?? 0;
  return `<section class="rc-semana" style="--rc-cor:${c.t}" aria-labelledby="rcSemanaTitulo">
    <div class="rc-semana-head">
      <span class="rc-semana-num">Semana ${numero} de ${semanas} · ${fmtCurta.format(ini)} a ${fmtCurta.format(fim)}</span>
      <span class="rc-tipo rc-tipo-${semana.tipo}">${ROTULO_TIPO[semana.tipo]}</span>
      ${semana.marco === 'candidaturas' ? '<span class="rc-tipo rc-tipo-marco">Início das candidaturas</span>' : ''}
    </div>
    <h5 id="rcSemanaTitulo" class="rc-semana-h">${escapeHtml(semana.titulo)}</h5>
    <p class="rc-objetivo">${escapeHtml(semana.objetivo)}</p>
    <p class="rc-porque"><strong>Por que agora:</strong> ${escapeHtml(semana.porque)}</p>
    <div class="rc-chips" aria-label="Tópicos da semana">${semana.topicos.map((t) => `<span class="rc-chip">${escapeHtml(t)}</span>`).join('')}</div>

    <h6 class="rc-sub">Grade do dia</h6>
    <div id="rcDia">${gradeDoDia(semana, numero, semanas, diaIndice, inicio)}</div>

    <div class="rc-cards">
      ${cartaoEntregaveis(semana)}
      <div class="rc-card"><h6>Livros e leituras da semana</h6><ul class="rc-livros">${semana.livros.map(itemDeLivro).join('')}</ul></div>
      <div class="rc-card"><h6>DSA · ${escapeHtml(semana.dsa.padrao)}</h6><ol class="rc-lista">${semana.dsa.problemas.map((p, i) => `<li><span class="mono">${weekDays[i].short}</span> ${escapeHtml(p)}</li>`).join('')}</ol>
        <p class="rc-nota">Um por dia útil, no bloco garantido de DSA. Travou? Refazer no dia seguinte antes do problema novo.</p></div>
      <div class="rc-card"><h6>Perguntas de entrevista</h6><ol class="rc-lista">${semana.perguntas.map((p) => `<li>${escapeHtml(p)}</li>`).join('')}</ol>
        <p class="rc-nota">Uma por noite no bloco de revisão ativa; no domingo, responder todas sem consulta.</p></div>
      <div class="rc-card"><h6>Sábado e domingo</h6>
        <p><strong>Exercícios:</strong> ${escapeHtml(semana.sabado.exercicios)}</p>
        <p><strong>Lab:</strong> ${escapeHtml(semana.sabado.lab)}</p>
        <p><strong>${escapeHtml(semana.sabado.noite[1])}:</strong> ${escapeHtml(semana.sabado.noite[2])}</p>
        <p class="mb-0"><strong>Domingo:</strong> ${escapeHtml(semana.domingo)}</p></div>
      <div class="rc-card"><h6>Mercado da semana</h6><ul class="rc-lista">${semana.mercado.map((m) => `<li>${escapeHtml(m)}</li>`).join('')}</ul></div>
    </div>
  </section>`;
}

/* ─── seções fixas ─────────────────────────────── */

function comoOPrazoMuda(semanas) {
  return `<section class="mb-4" aria-labelledby="rcPrazoTitulo">
    <h5 class="mb-1" id="rcPrazoTitulo">Como o prazo muda o plano</h5>
    <p class="text-muted small mb-2">Com ${DURACAO.minSemanas} semanas, só o núcleo. Cada semana a mais inclui o próximo aprofundamento desta lista, no lugar certo da sequência.</p>
    <div class="table-responsive"><table class="table table-dark table-hover sync-table rc-tabela rc-tabela-prazo">
      <thead><tr><th scope="col">Com</th><th scope="col">Entra</th><th scope="col">Tipo</th></tr></thead>
      <tbody>${ORDEM_DE_ENTRADA.map((o) => `<tr class="${o.entraCom <= semanas ? 'is-incluida' : ''}"><td class="mono">${o.entraCom} sem</td><td>${escapeHtml(o.titulo)}</td><td>${ROTULO_TIPO[o.tipo]}${o.entraCom <= semanas ? ' · incluída' : ''}</td></tr>`).join('')}</tbody>
    </table></div>
  </section>`;
}

function evidenciaDeMercado() {
  const nomeSemana = (id) => TODAS_AS_SEMANAS.find((s) => s.id === id)?.titulo || id;
  return `<section class="mb-4" aria-labelledby="rcMercadoTitulo">
    <h5 class="mb-1" id="rcMercadoTitulo">Por que esta ordem: o que as vagas pedem</h5>
    <p class="text-muted small mb-2">Coleta de ${fmtCurta.format(dataDeIso(EVIDENCIA_MERCADO.coletaEm))}/${EVIDENCIA_MERCADO.coletaEm.slice(0, 4)}: ${escapeHtml(EVIDENCIA_MERCADO.amostra)}. Contagem por palavra-chave, aproximada.</p>
    <div class="table-responsive"><table class="table table-dark table-hover sync-table rc-tabela">
      <thead><tr><th scope="col">Requisito</th><th scope="col">Jr/Pl</th><th scope="col">Java</th><th scope="col">Node/TS</th><th scope="col">Onde entra</th></tr></thead>
      <tbody>${EVIDENCIA_MERCADO.requisitos.map((r) => `<tr><td>${escapeHtml(r.requisito)}</td><td class="mono">${r.geral}%</td><td class="mono">${r.java}%</td><td class="mono">${r.node}%</td><td>${escapeHtml(nomeSemana(r.semana))}</td></tr>`).join('')}</tbody>
    </table></div>
    <ul class="rc-lista mt-2">${EVIDENCIA_MERCADO.leituras.map((l) => `<li>${escapeHtml(l)}</li>`).join('')}</ul>
    <p class="rc-nota">Fontes: ${EVIDENCIA_MERCADO.fontes.map((f) => `<a href="${escapeHtml(f.url)}" target="_blank" rel="noopener">${escapeHtml(f.nome)}</a>`).join(' · ')}</p>
  </section>`;
}

function bibliotecaDoSprint(sprint) {
  const usos = new Map();
  sprint.forEach((s, i) => s.livros.forEach(([ref]) => {
    if (!LIVROS[ref]) return;
    if (!usos.has(ref)) usos.set(ref, []);
    usos.get(ref).push(i + 1);
  }));
  const porArea = Object.keys(AREAS_LIVRO).map((area) => [area, [...usos.keys()].filter((ref) => LIVROS[ref].area === area)]).filter(([, refs]) => refs.length);
  return `<section class="mb-4" aria-labelledby="rcLivrosTitulo">
    <h5 class="mb-1" id="rcLivrosTitulo">Livros e leituras do sprint</h5>
    <p class="text-muted small mb-2">${usos.size} leituras nas semanas escolhidas. Os PDFs vêm da sua Biblioteca; os demais são documentação oficial gratuita ou livros fora do acervo.</p>
    <div class="rc-cards">${porArea.map(([area, refs]) => `<div class="rc-card"><h6>${escapeHtml(AREAS_LIVRO[area])}</h6><ul class="rc-livros">
      ${refs.map((ref) => itemDeLivro([ref, `Semana${usos.get(ref).length > 1 ? 's' : ''} ${usos.get(ref).join(', ')}`])).join('')}
    </ul></div>`).join('')}</div>
  </section>`;
}

function regras() {
  return `<section class="mb-2" aria-labelledby="rcRegrasTitulo">
    <h5 class="mb-2" id="rcRegrasTitulo">Regras desta rotina</h5>
    <div>${REGRAS_RECOLOCACAO.map((r) => `<div class="rule-item"><div class="rule-bar" style="background:${cor('mercado').t}"></div><div class="rule-text">${escapeHtml(r)}</div></div>`).join('')}</div>
  </section>`;
}

/* ─── render e eventos ─────────────────────────── */

let raiz = null;

function render() {
  if (!raiz) return;
  const semanas = semanasEscolhidas();
  const inicio = inicioDoSprint();
  const sprint = semanasDoSprint(semanas);
  const posicao = posicaoDeHoje(inicio.data, diasDoSprint(semanas));
  if (estado.semanaVista === null) {
    estado.semanaVista = posicao.fase === 'durante' ? posicao.semana : 1;
    estado.diaVisto = posicao.fase === 'durante' ? posicao.diaIndice : 0;
  }
  estado.semanaVista = Math.min(Math.max(1, estado.semanaVista), sprint.length);
  raiz.innerHTML = `
    ${painelDeConfiguracao(semanas, inicio, unidadeEscolhida())}
    ${metricas(semanas, inicio, sprint)}
    ${faixaDeHoje(posicao, semanas)}
    ${linhaDoTempo(sprint, inicio, estado.semanaVista, posicao)}
    <div id="rcSemana">${detalheDaSemana(sprint, estado.semanaVista, semanas, inicio)}</div>
    ${comoOPrazoMuda(semanas)}
    ${evidenciaDeMercado()}
    ${bibliotecaDoSprint(sprint)}
    ${regras()}`;
}

/** Re-renderiza só a semana (troca de dia ou marcação), preservando a rolagem. */
function renderSemana() {
  const alvo = raiz?.querySelector('#rcSemana');
  if (!alvo) return render();
  const semanas = semanasEscolhidas();
  alvo.innerHTML = detalheDaSemana(semanasDoSprint(semanas), estado.semanaVista, semanas, inicioDoSprint());
}

function atualizarResumo() {
  // Métricas e linha do tempo mostram a contagem de entregáveis: re-renderiza tudo menos a semana.
  const scroll = window.scrollY;
  render();
  window.scrollTo({ top: scroll, behavior: 'instant' });
}

function ligarEventos() {
  raiz.addEventListener('click', (e) => {
    const semana = e.target.closest('[data-rc-semana]');
    if (semana) {
      estado.semanaVista = Number(semana.dataset.rcSemana);
      estado.diaVisto = 0;
      raiz.querySelectorAll('[data-rc-semana]').forEach((b) => {
        const ativo = b === semana;
        b.classList.toggle('is-active', ativo);
        b.setAttribute('aria-pressed', String(ativo));
      });
      renderSemana();
      raiz.querySelector('#rcSemana')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    const dia = e.target.closest('[data-rc-dia]');
    if (dia) {
      estado.diaVisto = Number(dia.dataset.rcDia);
      renderSemana();
      raiz.querySelector(`[data-rc-dia="${estado.diaVisto}"]`)?.focus();
      return;
    }
    if (e.target.closest('[data-rc-hoje]')) {
      estado.semanaVista = null;
      render();
      raiz.querySelector('#rcSemana')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  raiz.addEventListener('change', async (e) => {
    const alvo = e.target;
    if (alvo.id === 'rcUnidade') {
      const unidade = alvo.value === 'meses' ? 'meses' : 'semanas';
      gravar(CHAVE.unidade, unidade);
      if (unidade === 'meses' && !OPCOES_MESES.some((m) => m.semanas === semanasEscolhidas())) {
        // Ao trocar para meses, encaixa no mês mais próximo para a duração não ficar órfã.
        const atual = semanasEscolhidas();
        const maisPerto = OPCOES_MESES.reduce((a, b) => (Math.abs(b.semanas - atual) < Math.abs(a.semanas - atual) ? b : a));
        gravar(CHAVE.semanas, maisPerto.semanas);
      }
      render();
      raiz.querySelector('#rcUnidade')?.focus();
      return;
    }
    if (alvo.id === 'rcDuracao') {
      gravar(CHAVE.semanas, semanasValidas(alvo.value));
      render();
      raiz.querySelector('#rcDuracao')?.focus();
      return;
    }
    if (alvo.id === 'rcInicio') {
      const data = dataDeIso(alvo.value);
      if (!data) return;
      gravar(CHAVE.inicio, isoLocal(segundaDe(data)));
      estado.semanaVista = null;
      render();
      raiz.querySelector('#rcInicio')?.focus();
      return;
    }
    if (alvo.id === 'rcPerfil') {
      setPerfilRotina(alvo.value);
      // Carga e textos do dashboard dependem do perfil: recarrega voltando para esta aba.
      await flushProgress();
      location.hash = 'tabRecolocacao';
      location.reload();
      return;
    }
    if (alvo.dataset.rcDiaFeito) {
      const mapa = { ...diasFeitos() };
      if (alvo.checked) mapa[alvo.dataset.rcDiaFeito] = isoLocal(hojeLocal());
      else delete mapa[alvo.dataset.rcDiaFeito];
      gravar(CHAVE.dias, mapa);
      return;
    }
    if (alvo.dataset.rcUrl) {
      const id = alvo.dataset.rcUrl;
      const mapa = { ...entregas() };
      const url = alvo.value.trim();
      const aviso = raiz.querySelector(`[data-rc-aviso="${id}"]`);
      if (url && !urlValida(url)) {
        if (aviso) aviso.textContent = 'Use um endereço http ou https.';
        return;
      }
      mapa[id] = { ...(mapa[id] || {}), url };
      if (!url && mapa[id].feito) mapa[id] = { url: '', feito: false };
      gravar(CHAVE.entregas, mapa);
      if (aviso) aviso.textContent = url ? 'Evidência salva.' : '';
      if (!url) atualizarResumo();
      return;
    }
    if (alvo.dataset.rcEntrega) {
      const id = alvo.dataset.rcEntrega;
      const mapa = { ...entregas() };
      const campo = raiz.querySelector(`[data-rc-url="${id}"]`);
      const url = (campo?.value || '').trim();
      const aviso = raiz.querySelector(`[data-rc-aviso="${id}"]`);
      if (alvo.checked && !urlValida(url)) {
        alvo.checked = false;
        if (aviso) aviso.textContent = 'Registre a URL de evidência (http ou https) antes de marcar como entregue.';
        campo?.focus();
        return;
      }
      mapa[id] = alvo.checked ? { url, feito: true, em: isoLocal(hojeLocal()) } : { url, feito: false };
      gravar(CHAVE.entregas, mapa);
      atualizarResumo();
      raiz.querySelector(`[data-rc-entrega="${id}"]`)?.focus();
    }
  });
}

/** Ponto de entrada: monta a aba Recolocação no container indicado. */
export function renderRecolocacao(containerId) {
  raiz = document.getElementById(containerId);
  if (!raiz) return;
  render();
  if (!raiz.dataset.rcLigado) {
    ligarEventos();
    raiz.dataset.rcLigado = '1';
  }
}
