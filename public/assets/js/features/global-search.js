/* ═══════════════════════════════════════════════
   FEATURES / GLOBAL-SEARCH — busca global (STUDY-060/061)

   O campo de busca do topo pesquisa ao mesmo tempo:
     · trilhas (por nome)
     · PDFs (título e tags)
     · objetivos observáveis (todos os itens de phases.js)

   Resultados agrupados num dropdown; clicar navega para o
   destino. A tecla "/" foca o campo de qualquer lugar.
═══════════════════════════════════════════════ */

import { P, trilhaAtiva, conteudoDaFase } from '../../../data/phases.js';
import { biblioteca } from '../../../data/biblioteca.js';
import { ARQUIVO_TRILHA, NOME_TRILHA, CK } from '../../../data/tracks.js';
import { normalizar, escapeHtml } from '../core/render.js';
import { resolvePublicUrl } from '../core/public-url.js';

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

  // livros da biblioteca — abrem o PDF hospedado (ou o recurso online)
  for (const l of biblioteca) {
    itens.push({
      tipo: 'livro', label: l.titulo,
      busca: normalizar(`${l.titulo} ${l.autor} ${l.tema} ${l.prioridade}`),
      href: l.path ? resolvePublicUrl(l.path) : (l.url || null),
      cor: cor('n'), meta: `${l.tema} · ${l.fase}`
    });
  }

  // objetivos observáveis (de cada fase ativa de cada trilha)
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

const GRUPOS = { trilha: 'Trilhas', livro: 'Biblioteca', topico: 'Objetivos' };
const LIMITE = { trilha: 6, livro: 6, topico: 8 };

export function setupBuscaGlobal(inputId = 'trackSearchInput', resultadosId = 'globalSearchResults') {
  const input = document.getElementById(inputId);
  const painel = document.getElementById(resultadosId);
  if (!input || !painel) return;

  let indice = null;
  const garantirIndice = () => (indice ||= construirIndice());

  const fechar = () => {
    painel.hidden = true;
    painel.innerHTML = '';
    input.setAttribute('aria-expanded', 'false');
  };

  const buscar = (termo) => {
    const q = normalizar(termo);
    if (q.length < 2) { fechar(); return; }

    const achados = garantirIndice().filter((x) => x.busca.includes(q));
    if (!achados.length) {
      painel.hidden = false;
      painel.innerHTML = `<div class="gs-empty">Nada encontrado para "<strong>${escapeHtml(termo)}</strong>".</div>`;
      input.setAttribute('aria-expanded', 'true');
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
        ${lista.map((x, indice) => x.href ? `<a class="gs-item" id="gs-option-${tipo}-${indice}"
          role="option" aria-selected="false" href="${x.href}" style="--gs-color:${x.cor}">
          <span class="gs-item-label">${escapeHtml(x.label)}</span>
          ${x.meta ? `<span class="gs-item-meta">${escapeHtml(x.meta)}</span>` : ''}
        </a>` : '').join('')}
      </div>`;
    }).join('') || `<div class="gs-empty">Nada encontrado.</div>`;
    input.setAttribute('aria-expanded', 'true');
  };

  input.setAttribute('role', 'combobox');
  input.setAttribute('aria-expanded', 'false');
  input.setAttribute('aria-controls', resultadosId);
  input.setAttribute('placeholder', 'Buscar trilhas, PDFs e objetivos…  ( / )');

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
