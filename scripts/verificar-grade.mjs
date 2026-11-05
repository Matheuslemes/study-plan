/*
 * Invariante das grades de rotina, compartilhada pelos gates: a semana cobre 168h,
 * sem buraco nem sobreposição, e cada bloco declara a duração do seu intervalo.
 */
const paraMinutos = (hora) => {
  const [h, m] = hora.split(':').map(Number);
  return h * 60 + m;
};

const duracaoDeclarada = (dur) => {
  const partes = dur.match(/^(?:(\d+)h)?(?:(\d+)(?:min)?)?$/);
  return partes ? Number(partes[1] || 0) * 60 + Number(partes[2] || 0) : NaN;
};

export function verificarGradeDaSemana(plano, weekDays, rotuloDaGrade, check) {
  let fimAnterior = null;
  let minutosDaSemana = 0;
  weekDays.forEach(({ key }) => {
    (plano[key] || []).forEach((bloco) => {
      const rotulo = `${rotuloDaGrade}/${key} ${bloco.time}`;
      const [inicio, fim] = bloco.time.split(' – ').map(paraMinutos);
      const minutos = (fim - inicio + 1440) % 1440;
      minutosDaSemana += minutos;
      check(minutos === duracaoDeclarada(bloco.dur), `${rotulo}: duração declarada "${bloco.dur}" não bate com o intervalo.`);
      check(fimAnterior === null || fimAnterior === inicio, `${rotulo}: não começa onde o bloco anterior termina.`);
      fimAnterior = fim;
    });
  });
  check(minutosDaSemana === 7 * 1440, `${rotuloDaGrade}: a semana soma ${minutosDaSemana / 60}h em vez de 168h.`);
}

/*
 * Invariantes da semana de cada fase do Backend (conteudo-semanal.js): cada horário
 * aponta para um item real, nenhum item fica sem horário e as regras de flex valem.
 */
const DIAS_UTEIS = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];
const SLOTS_DO_DIA = ['deep1', 'deep2', 'complement'];
const TRANSVERSAL_DO_DIA = { segunda: 'dsa', terca: 'ingles', quarta: 'dsa', quinta: 'ingles', sexta: 'dsa' };
// Sem bloco diário: a prática fica no sábado, Git no registro do dia, e matemática e financeiro nas fases.
const FORA_DA_COBERTURA = ['pratica', 'git', 'math', 'fin'];
// Não contam no limite de dois domínios por dia (STUDY-019).
const NAO_E_DOMINIO = ['dsa', 'ingles', 'pratica'];
const PICOS_ESPERADOS = { 3: ['terca'], 4: ['quinta'], 5: ['quarta'], 6: ['sexta'], 7: ['segunda', 'terca', 'sexta'], 8: ['quinta'], 9: ['sexta'], 10: ['sexta'] };
const FASES_COM_AWS = [3, 8, 9, 12];
const ESCADA_ESPERADA = '1,3,6,9';

export function verificarConteudoSemanal({ conteudo, escada, fases, conteudoDaFase, trilhaAtiva, trilhasAtivas }, check) {
  check(escada.map((d) => d.desde).join() === ESCADA_ESPERADA, `Escada da sexta: degraus em ${escada.map((d) => d.desde).join()}, esperado ${ESCADA_ESPERADA}.`);

  fases.forEach((fase) => {
    const semana = conteudo[fase.id];
    if (!semana) {
      check(false, `Conteúdo semanal: ${fase.l} sem mapa.`);
      return;
    }
    const estudados = new Map();
    const estudar = (k, itens, rotulo) => {
      check(trilhaAtiva(fase, k), `${rotulo}: a trilha ${k} não está ativa na fase.`);
      const total = conteudoDaFase(fase, k).length;
      check(itens.length > 0, `${rotulo}: nenhum item indicado.`);
      itens.forEach((i) => check(Number.isInteger(i) && i >= 0 && i < total, `${rotulo}: item ${k}[${i}] não existe (a trilha tem ${total}).`));
      estudados.set(k, new Set([...(estudados.get(k) || []), ...itens]));
    };

    DIAS_UTEIS.forEach((dia) => {
      const doDia = semana[dia];
      const rotulo = `${fase.l}/${dia}`;
      check(Boolean(doDia.foco), `${rotulo}: sem foco.`);
      SLOTS_DO_DIA.forEach((slot) => {
        const [k, itens, tema, metodo] = doDia[slot];
        estudar(k, itens, `${rotulo}/${slot}`);
        check(Boolean(tema), `${rotulo}/${slot}: sem tema.`);
        check(![tema, metodo, doDia.foco].join(' ').match(/[<&]/), `${rotulo}/${slot}: texto com < ou &, que vai para o HTML sem escape.`);
      });
      estudar(TRANSVERSAL_DO_DIA[dia], doDia.extra, `${rotulo}/extra`);
      const dominios = new Set(SLOTS_DO_DIA.map((slot) => doDia[slot][0]).filter((k) => !NAO_E_DOMINIO.includes(k)));
      check(dominios.size <= 2, `${rotulo}: ${dominios.size} domínios no dia (${[...dominios].join(', ')}); o limite é 2.`);
    });

    trilhasAtivas(fase).filter((k) => !FORA_DA_COBERTURA.includes(k)).forEach((k) => {
      const faltando = conteudoDaFase(fase, k).map((_, i) => i).filter((i) => !estudados.get(k)?.has(i));
      check(faltando.length === 0, `${fase.l}: ${k}[${faltando.join(', ')}] sem horário na semana.`);
    });

    // Regra 2: picos nos dias combinados.
    const picos = DIAS_UTEIS.filter((dia) => semana[dia]?.pico);
    check(picos.join() === (PICOS_ESPERADOS[fase.id] || []).join(), `${fase.l}: picos em [${picos}], esperado [${PICOS_ESPERADOS[fase.id] || []}].`);

    // AWS só onde o plano a coloca.
    const temAws = DIAS_UTEIS.some((dia) => SLOTS_DO_DIA.some((slot) => semana[dia]?.[slot][0] === 'aws'));
    check(temAws === FASES_COM_AWS.includes(fase.id), `${fase.l}: AWS ${temAws ? 'aparece' : 'não aparece'} na semana.`);

    // Até a Fase 10 os slots mantêm o domínio: quarta em dados e sexta com a decisão registrada.
    if (fase.id <= 10) {
      check(semana.quarta.deep1[0] === 'db' && semana.quarta.deep2[0] === 'db', `${fase.l}: quarta fora de dados.`);
      check(semana.sexta.complement[0] === 'arquitetura', `${fase.l}: sexta sem a decisão registrada.`);
    }
  });

  // Regra 1: nas viradas da escada, a sexta inteira é operação.
  [3, 6, 9].forEach((id) => check(
    conteudo[id]?.sexta.deep1[0] === 'devops' && conteudo[id]?.sexta.deep2[0] === 'devops',
    `Fase ${id}: a sexta precisa operar o novo degrau da escada.`
  ));

  // Regra 3: Fase 11 repurpõe segunda, quarta e quinta, com Java só em manutenção.
  const f11 = conteudo[11];
  if (f11) {
    check(f11.segunda.deep1[0] === 'frontend' && f11.quarta.deep1[0] === 'py' && f11.quinta.deep1[0] === 'ia', 'Fase 11: segunda, quarta e quinta precisam ser frontend, Python e IA.');
    const java = DIAS_UTEIS.flatMap((dia) => SLOTS_DO_DIA.filter((slot) => f11[dia][slot][0] === 'java').map((slot) => `${dia}/${slot}`));
    check(java.join() === 'segunda/complement', `Fase 11: Java deve ficar só na manutenção de segunda; está em [${java}].`);
  }

  // Regra 4: Fase 12 vira portfólio e entrevista.
  const f12 = conteudo[12];
  if (f12) {
    check(f12.segunda.deep1[0] === 'pratica' && f12.terca.deep1[0] === 'dsa' && f12.sexta.deep1[0] === 'ingles', 'Fase 12: segunda, terça e sexta precisam ser release, DSA e defesa em inglês.');
  }
}

/* Todo dia termina à 01:00, sem cardio fora do horário de academia; no fim de semana, o estudo só começa às 13:00. */
export function verificarLimitesDaSemana(plano, weekDays, rotuloDaGrade, check) {
  const inicioDe = (bloco) => paraMinutos(bloco.time.split(' – ')[0]);
  weekDays.forEach(({ key }) => {
    const fim = (plano[key] || []).at(-1)?.time.split(' – ')[1];
    check(fim === '01:00', `${rotuloDaGrade}/${key}: termina às ${fim}, não à 01:00.`);
    check(!(plano[key] || []).some((b) => b.type === 'cardio'), `${rotuloDaGrade}/${key}: cardio fora do horário de academia.`);
  });
  ['sabado', 'domingo'].forEach((dia) => {
    const blocos = plano[dia] || [];
    check(blocos.some((b) => b.time.startsWith('13:00 – ')), `${rotuloDaGrade}/${dia}: nenhum bloco começa às 13:00.`);
    blocos.filter((b) => inicioDe(b) >= paraMinutos('01:00') && inicioDe(b) < paraMinutos('13:00')).forEach((b) => check(
      ['sleep', 'break', 'strength'].includes(b.type),
      `${rotuloDaGrade}/${dia} ${b.time}: bloco de estudo antes das 13:00.`
    ));
  });
}

/* As rotinas acordam, começam a estudar e terminam o dia nos mesmos horários; o fim de semana é igual. */
const FORA_DO_ESTUDO = ['sleep', 'break', 'cardio', 'strength', 'dinner', 'buffer', 'closing', 'work'];

export function verificarMesmoInicioEFim(plano, planoBase, weekDays, rotuloDaGrade, check) {
  const inicio = (blocos) => blocos[0]?.time;
  const primeiroEstudo = (blocos) => blocos.find((b) => !FORA_DO_ESTUDO.includes(b.type))?.time.split(' – ')[0];
  const fim = (blocos) => blocos.at(-1)?.time.split(' – ')[1];
  weekDays.forEach(({ key }) => {
    const [dia, base] = [plano[key] || [], planoBase[key] || []];
    check(inicio(dia) === inicio(base), `${rotuloDaGrade}/${key}: sono em ${inicio(dia)}, diferente de ${inicio(base)}.`);
    check(primeiroEstudo(dia) === primeiroEstudo(base), `${rotuloDaGrade}/${key}: estudo começa às ${primeiroEstudo(dia)}, não às ${primeiroEstudo(base)}.`);
    check(fim(dia) === fim(base), `${rotuloDaGrade}/${key}: termina às ${fim(dia)}, não às ${fim(base)}.`);
  });
  ['sabado', 'domingo'].forEach((dia) => check(
    (plano[dia] || []).map((b) => b.time).join() === (planoBase[dia] || []).map((b) => b.time).join(),
    `${rotuloDaGrade}/${dia}: horários diferentes entre as rotinas.`
  ));
}

/* A fase só troca o conteúdo: a sequência de horários é a mesma da grade base. */
export function verificarHorariosDaFase(plano, planoBase, weekDays, rotulo, check) {
  const assinatura = (grade, dia) => (grade[dia] || []).map((b) => `${b.time}|${b.dur}|${b.kind}|${Boolean(b.condicional)}`).join('\n');
  weekDays.forEach(({ key }) => check(assinatura(plano, key) === assinatura(planoBase, key), `${rotulo}/${key}: horários diferentes da grade base.`));
}
