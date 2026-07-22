/* ═══════════════════════════════════════════════
   FEATURES / GLOBAL-SEARCH — busca global (STUDY-060/061)

   O campo de busca do topo pesquisa ao mesmo tempo:
     · trilhas (por nome)
     · PDFs (título e tags)
     · tópicos de conteúdo (todos os itens de phases.js)

   Resultados agrupados num dropdown; clicar navega para o
   destino. A tecla "/" foca o campo de qualquer lugar.
═══════════════════════════════════════════════ */

import { P, trilhaAtiva, conteudoDaFase } from '../../../data/phases.js';
import { pdfDocuments } from '../../../data/pdfs.js';
import { ARQUIVO_TRILHA, NOME_TRILHA, CK } from '../../../data/tracks.js';
import { normalizar, escapeHtml } from '../core/render.js';

const cor = (k) => (CK[k] || CK.n).t;

/** Constrói o índice uma vez. */
function construirIndice() {
  const itens = [];

  // trilhas
  for (const [k, arq] of Object.entries(ARQUIVO_TRILHA)) {
    itens.push({
      tipo: 'trilha', label: NOME_TRILHA[k] || k, busca: normalizar(NOME_TRILHA[k] || k),
      href: `./trilhas/${arq}.html`, cor: cor(k)
    });
  }

  // pdfs
  for (const pdf of pdfDocuments) {
    itens.push({
      tipo: 'pdf', label: pdf.title,
      busca: normalizar(`${pdf.title} ${pdf.area} ${(pdf.tags || []).join(' ')}`),
      href: pdf.file, cor: cor(pdf.key), meta: pdf.area
    });
  }

  // tópicos de conteúdo (de cada fase ativa de cada trilha)
  const TRILHAS = ['java', 'db', 'dsa', 'git', 'arquitetura', 'devops', 'sec', 'frontend', 'py', 'ia', 'math', 'ingles', 'aws'];
  for (const p of P) {
    for (const k of TRILHAS) {
      if (!trilhaAtiva(p, k)) continue;
      for (const texto of conteudoDaFase(p, k)) {
        itens.push({
          tipo: 'topico', label: texto, busca: normalizar(texto),
          href: ARQUIVO_TRILHA[k] ? `./trilhas/${ARQUIVO_TRILHA[k]}.html#roadmap` : null,
          cor: cor(k), meta: `${NOME_TRILHA[k] || k} · Fase ${p.id}`
        });
      }
    }
  }

  return itens;
}

const GRUPOS = { trilha: 'Trilhas', pdf: 'PDFs', topico: 'Tópicos' };
const LIMITE = { trilha: 6, pdf: 5, topico: 8 };

export function setupBuscaGlobal(inputId = 'trackSearchInput', resultadosId = 'globalSearchResults') {
  const input = document.getElementById(inputId);
  const painel = document.getElementById(resultadosId);
  if (!input || !painel) return;

  let indice = null;
  const garantirIndice = () => (indice ||= construirIndice());

  const fechar = () => { painel.hidden = true; painel.innerHTML = ''; };

  const buscar = (termo) => {
    const q = normalizar(termo);
    if (q.length < 2) { fechar(); return; }

    const achados = garantirIndice().filter((x) => x.busca.includes(q));
    if (!achados.length) {
      painel.hidden = false;
      painel.innerHTML = `<div class="gs-empty">Nada encontrado para "<strong>${escapeHtml(termo)}</strong>".</div>`;
      return;
    }

    const porGrupo = {};
    for (const a of achados) (porGrupo[a.tipo] ||= []).push(a);

    painel.hidden = false;
    painel.innerHTML = Object.entries(GRUPOS).map(([tipo, titulo]) => {
      const lista = (porGrupo[tipo] || []).slice(0, LIMITE[tipo]);
      if (!lista.length) return '';
      const total = (porGrupo[tipo] || []).length;
      return `<div class="gs-group">
        <div class="gs-group-title">${titulo} <span>${total}</span></div>
        ${lista.map((x) => x.href ? `<a class="gs-item" href="${x.href}" style="--gs-color:${x.cor}">
          <span class="gs-item-label">${escapeHtml(x.label)}</span>
          ${x.meta ? `<span class="gs-item-meta">${escapeHtml(x.meta)}</span>` : ''}
        </a>` : '').join('')}
      </div>`;
    }).join('') || `<div class="gs-empty">Nada encontrado.</div>`;
  };

  input.setAttribute('role', 'combobox');
  input.setAttribute('aria-expanded', 'false');
  input.setAttribute('aria-controls', resultadosId);
  input.setAttribute('placeholder', 'Buscar trilhas, PDFs e tópicos…  ( / )');

  input.addEventListener('input', (e) => {
    buscar(e.target.value);
    input.setAttribute('aria-expanded', String(!painel.hidden));
  });
  input.addEventListener('focus', (e) => { if (e.target.value) buscar(e.target.value); });

  // fecha ao clicar fora ou Esc
  document.addEventListener('click', (e) => {
    if (!painel.contains(e.target) && e.target !== input) fechar();
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { fechar(); input.blur(); }
  });

  // STUDY-061: "/" foca a busca de qualquer lugar
  document.addEventListener('keydown', (e) => {
    if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
    const alvo = e.target;
    const digitando = alvo && (alvo.tagName === 'INPUT' || alvo.tagName === 'TEXTAREA' || alvo.tagName === 'SELECT' || alvo.isContentEditable);
    if (digitando) return;
    e.preventDefault();
    input.focus();
    input.select();
  });
}
