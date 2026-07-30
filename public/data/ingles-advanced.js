/*
 * ACADEMIA DE INGLÊS TÉCNICO — leitura, escrita, fala e produção em contexto de engenharia.
 *
 * Objetivo da trilha: fluência funcional guiada por PRÁTICA DIÁRIA (input/output),
 * não por leitura passiva. Os livros do acervo local (public/pdfs/livros-ingles)
 * são referência; a evidência de cada módulo é sempre um artefato real em inglês
 * (commit, PR, README, gravação, doc), com URL HTTP(S).
 *
 * Estrutura conforme PADRAO-TRILHAS-ACADEMIA.md (§8): schema pela fábrica
 * compartilhada; conteúdo, referências e bibliografia específicos da trilha.
 */

import { createAcademyData } from './academy-data-factory.js';

const TECH_WRITING = { title: 'Google Technical Writing Courses (gratuito)', url: 'https://developers.google.com/tech-writing' };

const data = createAcademyData({
  title: 'Inglês Técnico para Engenharia de Software',
  baseline: 'Leitura B1+/B2 em evolução, hábito de prática diária curta e produção técnica ligada ao trabalho real.',
  projectNoun: 'portfólio técnico bilíngue',
  partSpecs: [
    {
      id: 'fundamentos',
      title: 'Compreensão e vocabulário',
      subtitle: 'Input técnico diário, mineração de frases, gramática de uso e vocabulário de domínio.',
      objectives: [
        'Sustentar um hábito diário de input técnico com registro de frases reutilizáveis.',
        'Aplicar os padrões gramaticais frequentes na documentação de engenharia.',
        'Comprovar compreensão de documentação e specs oficiais.'
      ]
    },
    {
      id: 'escrita',
      title: 'Escrita técnica',
      subtitle: 'Commits, pull requests, README e documentação claras, concisas e sem ambiguidade.',
      objectives: [
        'Produzir commits, PRs e READMEs claros e concisos em inglês.',
        'Aplicar economia, voz ativa e ordem lógica na revisão do próprio texto.',
        'Estruturar documentação orientada ao leitor.'
      ]
    },
    {
      id: 'fala',
      title: 'Comunicação oral',
      subtitle: 'Explicar decisões, conduzir entrevistas, comunicar hipóteses e apresentar arquitetura.',
      objectives: [
        'Explicar decisões técnicas em inglês com clareza e ritmo.',
        'Conduzir entrevista técnica e troubleshooting falado.',
        'Adaptar a mesma mensagem a públicos diferentes.'
      ]
    },
    {
      id: 'producao',
      title: 'Inglês em produção',
      subtitle: 'Code review bilíngue, comunicação de incidentes, documentação viva e portfólio global.',
      objectives: [
        'Colaborar em inglês em code review e incidentes reais.',
        'Manter documentação viva e consistente.',
        'Defender um portfólio técnico global.'
      ]
    }
  ],
  moduleSpecs: [
    // ── Parte 1 · Compreensão e vocabulário ──
    {
      part: 'fundamentos', level: 'Fundamentos',
      title: 'Sustentar input técnico diário',
      objective: 'Sustentar um hábito diário de leitura/escuta técnica em inglês e minerar frases reutilizáveis a partir dele.',
      problem: 'Estudo de inglês fracassa quando é esporádico e passivo; sem input diário e captura ativa, o vocabulário técnico não se fixa.',
      concepts: ['Input compreensível diário', 'Mineração de frases (sentence mining)', 'Revisão espaçada', 'Fontes técnicas reais'],
      internals: ['Aquisição vem de input um pouco acima do nível atual (i+1), repetido em contexto — não de listas isoladas.', 'Frases capturadas em contexto retêm colocação e gramática melhor que palavras soltas.'],
      books: ['grammarInUse'],
      complements: [TECH_WRITING],
      exercises: [{ level: 'Fundamentos', title: 'Diário de frases (2 semanas)', task: 'Ler/ouvir 15 min de conteúdo técnico por dia e registrar 3 frases úteis com contexto e tradução.', acceptance: 'Registro contínuo de 10 dias com frases contextualizadas e revisadas.', evidence: 'Repositório/doc versionado do diário de frases.' }],
      interview: [{ level: 'Fundamentos', question: 'How do you keep your technical English improving every day?', expected: 'Descrever um hábito concreto de input diário + captura ativa e revisão, não estudo esporádico.' }]
    },
    {
      part: 'fundamentos', level: 'Fundamentos',
      title: 'Consolidar padrões gramaticais de uso frequente',
      objective: 'Aplicar os padrões gramaticais mais frequentes na engenharia — tempos, condicionais, voz passiva e artigos — em frases próprias.',
      problem: 'Erros recorrentes de tempo verbal, artigo e voz passiva minam a credibilidade em docs, PRs e conversas técnicas.',
      concepts: ['Present simple vs present perfect', 'Condicionais em specs', 'Voz passiva em documentação', 'Artigos e contáveis'],
      internals: ['Present simple descreve comportamento (“the API returns…”); present perfect marca mudança com efeito atual (“I have fixed…”).', 'A voz passiva é aceitável em docs quando o agente é irrelevante, mas a ativa é mais clara na maioria dos casos.'],
      books: ['grammarInUse'],
      exercises: [{ level: 'Aplicação', title: 'Corrigir e explicar', task: 'Reescrever 10 frases técnicas suas com erros gramaticais e explicar cada correção com base no padrão.', acceptance: 'Cada correção cita o padrão gramatical aplicado.', evidence: 'Doc versionado com antes/depois e a regra.' }],
      interview: [{ level: 'Aplicação', question: 'When do you use present perfect instead of past simple in a changelog?', expected: 'Present perfect para mudança com efeito presente; past simple para evento concluído e datado.' }]
    },
    {
      part: 'fundamentos', level: 'Aplicação',
      title: 'Construir vocabulário de debugging, APIs e domínio',
      objective: 'Construir e usar ativamente o vocabulário e as colocações de debugging, APIs e do seu domínio.',
      problem: 'Traduzir do português palavra a palavra gera colocações erradas (“make a test”, “open a error”) que soam não nativas.',
      concepts: ['Colocações verbo+substantivo', 'Vocabulário de debugging e erros', 'Termos de API e HTTP', 'Phrasal verbs técnicos'],
      internals: ['Inglês técnico é dominado por colocações fixas (“run a test”, “throw an exception”, “roll back a change”); aprenda o par, não a palavra.', 'Phrasal verbs (“set up”, “roll out”, “spin up”) são onipresentes em operação e precisam de uso ativo.'],
      books: ['grammarInUse'],
      exercises: [{ level: 'Aplicação', title: 'Glossário de colocações', task: 'Montar um glossário de 40 colocações do seu domínio e usar 15 delas em frases reais de trabalho.', acceptance: 'Colocações corretas e aplicadas em contexto verificável.', evidence: 'Glossário versionado + links de uso real.' }],
      interview: [{ level: 'Aplicação', question: 'Explain what went wrong in your last bug, using precise technical vocabulary.', expected: 'Usar colocações corretas (throw/catch, roll back, root cause) sem tradução literal.' }]
    },
    {
      part: 'fundamentos', level: 'Aplicação',
      title: 'Comprovar compreensão de documentação e specs',
      objective: 'Comprovar compreensão de documentação, RFCs e specs oficiais resumindo-as com fidelidade em inglês.',
      problem: 'Ler docs “achando que entendeu” leva a implementações erradas; sem verificação, a compreensão é ilusória.',
      concepts: ['Skimming e scanning', 'Estrutura de docs e specs', 'Resumo fiel (não cópia)', 'Termos normativos (MUST/SHOULD)'],
      internals: ['RFCs usam MUST/SHOULD/MAY (RFC 2119) com significado normativo preciso — confundi-los muda o requisito.', 'Um bom resumo preserva fatos e incertezas e é substancialmente mais curto que a fonte.'],
      books: ['docsForDevelopers'],
      complements: [TECH_WRITING],
      exercises: [{ level: 'Produção', title: 'Resumo verificável de uma spec', task: 'Resumir em inglês uma seção de uma spec/RFC e validar o resumo com um par ou com testes de compreensão.', acceptance: 'Resumo fiel, mais curto, com termos normativos corretos.', evidence: 'Resumo versionado + fonte oficial linkada.' }],
      interview: [{ level: 'Produção', question: 'What is the difference between MUST and SHOULD in a spec?', expected: 'MUST é requisito absoluto; SHOULD é recomendação com exceções justificáveis.' }]
    },

    // ── Parte 2 · Escrita técnica ──
    {
      part: 'escrita', level: 'Fundamentos',
      title: 'Produzir commit messages objetivos',
      objective: 'Produzir mensagens de commit objetivas em inglês, com assunto no imperativo e corpo que explique o porquê.',
      problem: 'Commits vagos (“fix stuff”, “update”) tornam o histórico inútil e expõem inglês fraco no artefato mais lido do time.',
      concepts: ['Assunto no imperativo ≤ 50 caracteres', 'Corpo explicando o porquê', 'Conventional Commits', 'Voz ativa e concisão'],
      internals: ['A convenção é o imperativo presente (“Add retry”, não “Added/Adds”), completando “If applied, this commit will…”.', 'Omitir palavras desnecessárias (Strunk) deixa o assunto legível num relance.'],
      books: ['elementsOfStyle', 'onWritingWell'],
      exercises: [{ level: 'Aplicação', title: 'Dez commits limpos', task: 'Reescrever 10 commit messages suas seguindo a convenção e explicar cada melhoria.', acceptance: 'Assunto imperativo, conciso; corpo explica o porquê quando necessário.', evidence: 'Links dos commits antes/depois.' }],
      interview: [{ level: 'Aplicação', question: 'Why is the imperative mood the convention for commit subjects?', expected: 'Descreve o efeito do commit ao ser aplicado e mantém consistência com o Git.' }]
    },
    {
      part: 'escrita', level: 'Aplicação',
      title: 'Escrever descrições de pull request',
      objective: 'Escrever descrições de pull request que expliquem contexto, mudança, teste e risco para um revisor.',
      problem: 'PRs sem contexto forçam o revisor a adivinhar intenção, atrasam a revisão e escondem risco.',
      concepts: ['Contexto → mudança → teste → risco', 'What/Why/How to test', 'Escopo pequeno', 'Tom colaborativo'],
      internals: ['O revisor lê a descrição antes do diff; ela deve responder “por que” e “como validar” sem abrir o código.', 'Clareza vem de ordem lógica e frases curtas, não de mais texto (Zinsser).'],
      books: ['onWritingWell', 'elementsOfStyle'],
      complements: [TECH_WRITING],
      exercises: [{ level: 'Aplicação', title: 'Template + PR real', task: 'Criar um template de PR em inglês e aplicá-lo em um PR real com contexto, teste e risco.', acceptance: 'O revisor entende a mudança sem perguntas de contexto.', evidence: 'Link do PR revisado.' }],
      interview: [{ level: 'Aplicação', question: 'What does a reviewer need from your PR description before reading the diff?', expected: 'Contexto, o que mudou, como testar e qual o risco.' }]
    },
    {
      part: 'escrita', level: 'Aplicação',
      title: 'Documentar instalação e decisões em README',
      objective: 'Documentar instalação, uso e decisões em um README orientado ao leitor, testável passo a passo.',
      problem: 'READMEs escritos para o autor (não para o leitor) falham na primeira execução e afastam contribuidores.',
      concepts: ['Documentação orientada ao leitor', 'Quickstart testável', 'Pré-requisitos e comandos', 'Decisões e limitações'],
      internals: ['Docs for Developers: escreva para um leitor-alvo definido e valide os passos executando-os do zero.', 'Um quickstart que não roda em ambiente limpo é um bug de documentação.'],
      books: ['docsForDevelopers', 'onWritingWell'],
      exercises: [{ level: 'Produção', title: 'README testado do zero', task: 'Escrever um README em inglês e validá-lo executando os passos em ambiente limpo (ou com um revisor).', acceptance: 'Outra pessoa instala e roda seguindo só o README.', evidence: 'Link do README + confirmação de reprodução.' }],
      interview: [{ level: 'Produção', question: 'How do you know your README actually works?', expected: 'Executando os passos do zero em ambiente limpo ou por reprodução independente.' }]
    },
    {
      part: 'escrita', level: 'Produção',
      title: 'Revisar clareza, tom e ambiguidade',
      objective: 'Revisar o próprio texto técnico eliminando ambiguidade, palavras desnecessárias e tom inadequado.',
      problem: 'Primeiras versões são prolixas e ambíguas; sem uma revisão disciplinada, o texto custa tempo ao leitor.',
      concepts: ['Omitir palavras desnecessárias', 'Voz ativa e verbos fortes', 'Ambiguidade de referência', 'Tom colaborativo'],
      internals: ['“Omit needless words” (Strunk): corte hedges e redundâncias; frases curtas reduzem a carga do leitor.', 'Ambiguidade nasce de pronomes e ordem; nomear o sujeito remove a dúvida.'],
      books: ['elementsOfStyle', 'onWritingWell'],
      exercises: [{ level: 'Produção', title: 'Editar até a metade', task: 'Pegar um texto técnico seu e reduzi-lo ~30% sem perder informação, registrando cada corte.', acceptance: 'Texto mais curto, mais claro, sem perda de conteúdo.', evidence: 'Antes/depois versionado com as edições.' }],
      interview: [{ level: 'Produção', question: 'Show a sentence you cut in half. What made it clearer?', expected: 'Apontar remoção de redundância/hedge e ganho de clareza objetiva.' }]
    },

    // ── Parte 3 · Comunicação oral ──
    {
      part: 'fala', level: 'Aplicação',
      title: 'Explicar uma decisão técnica em inglês',
      objective: 'Explicar uma decisão técnica em inglês, com contexto, alternativa descartada e trade-off, em até dois minutos.',
      problem: 'Congelar ou divagar ao falar inglês esconde competência técnica real em reuniões e entrevistas.',
      concepts: ['Estrutura ponto → porquê → trade-off', 'Signposting (first, however, so)', 'Ritmo e pausas', 'Vocabulário de decisão'],
      internals: ['Uma estrutura fixa (afirmação, razão, trade-off, conclusão) libera atenção para a língua.', 'Signposting orienta o ouvinte e compra tempo de formulação sem travar.'],
      books: ['onWritingWell'],
      complements: [TECH_WRITING],
      exercises: [{ level: 'Aplicação', title: 'Gravação de 2 minutos', task: 'Gravar-se explicando uma decisão técnica em inglês e revisar a clareza e os erros recorrentes.', acceptance: 'Explicação estruturada, audível e com trade-off explícito.', evidence: 'URL da gravação + notas de autoavaliação.' }],
      interview: [{ level: 'Aplicação', question: 'Explain a recent technical decision and the trade-off you accepted.', expected: 'Estrutura clara: decisão, razão, alternativa descartada e trade-off.' }]
    },
    {
      part: 'fala', level: 'Aplicação',
      title: 'Conduzir uma entrevista técnica simulada',
      objective: 'Conduzir uma entrevista técnica simulada em inglês, respondendo a comportamento (STAR) e a perguntas de sistema.',
      problem: 'Boa técnica não passa em entrevista internacional quando a resposta falada é desorganizada ou insegura.',
      concepts: ['Método STAR', 'Pensar em voz alta (system design)', 'Perguntas de esclarecimento', 'Recuperação de erro na fala'],
      internals: ['STAR (Situation, Task, Action, Result) dá esqueleto às respostas comportamentais sob pressão.', 'Fazer perguntas de esclarecimento demonstra senioridade e ganha tempo de formulação.'],
      books: ['onWritingWell'],
      complements: [TECH_WRITING],
      exercises: [{ level: 'Produção', title: 'Mock interview gravado', task: 'Fazer uma entrevista simulada (com par ou gravação) cobrindo 1 comportamental e 1 técnica, e revisar.', acceptance: 'Respostas estruturadas (STAR / thinking aloud) e compreensíveis.', evidence: 'URL da gravação + plano de melhoria.' }],
      interview: [{ level: 'Produção', question: 'Tell me about a time you disagreed with a technical decision.', expected: 'Resposta em STAR, com resultado e aprendizado, em inglês claro.' }]
    },
    {
      part: 'fala', level: 'Aplicação',
      title: 'Comunicar hipótese durante troubleshooting',
      objective: 'Comunicar hipótese, evidência e próximo passo em inglês durante um troubleshooting ao vivo.',
      problem: 'Em incidentes, comunicação vaga em inglês atrasa a resolução e gera ruído entre os envolvidos.',
      concepts: ['Hipótese → evidência → próximo passo', 'Linguagem de incerteza calibrada', 'Atualizações curtas e frequentes', 'Confirmar entendimento'],
      internals: ['Separar fato de hipótese (“we know… / I suspect…”) evita decisões erradas sob pressão.', 'Atualizações curtas e periódicas mantêm todos alinhados melhor que um relato longo no fim.'],
      books: ['docsForDevelopers'],
      exercises: [{ level: 'Produção', title: 'Narração de troubleshooting', task: 'Narrar em inglês (falado ou em thread) a investigação de um problema real, separando fato de hipótese.', acceptance: 'Comunicação clara de hipótese, evidência e próximo passo.', evidence: 'URL da gravação ou thread.' }],
      interview: [{ level: 'Produção', question: 'Walk me through how you would debug a sudden latency spike.', expected: 'Hipótese, evidência e próximo passo, com incerteza calibrada.' }]
    },
    {
      part: 'fala', level: 'Produção',
      title: 'Apresentar arquitetura para públicos distintos',
      objective: 'Apresentar a mesma decisão de arquitetura em inglês para um público técnico e para um público de produto.',
      problem: 'Uma explicação única falha: técnicos querem trade-offs, produto quer impacto — a mensagem precisa se adaptar.',
      concepts: ['Adequação ao público', 'Nível de abstração', 'Impacto vs internals', 'Perguntas e follow-up'],
      internals: ['Zinsser: conheça seu leitor/ouvinte; o mesmo fato exige vocabulário e nível diferentes por público.', 'Para produto, lidere com impacto e risco; para engenharia, lidere com trade-off e mecanismo.'],
      books: ['onWritingWell'],
      exercises: [{ level: 'Produção', title: 'Duas versões da mesma apresentação', task: 'Preparar e gravar duas versões (técnica e de produto) de uma mesma decisão de arquitetura.', acceptance: 'Cada versão adapta vocabulário e foco ao público.', evidence: 'URLs das duas gravações.' }],
      interview: [{ level: 'Produção', question: 'Explain your architecture to a product manager, then to a senior engineer.', expected: 'Ajustar abstração e foco (impacto vs trade-off) preservando os fatos.' }]
    },

    // ── Parte 4 · Inglês em produção ──
    {
      part: 'producao', level: 'Aplicação',
      title: 'Participar de code review bilíngue',
      objective: 'Participar de code review em inglês, dando e recebendo feedback claro, específico e respeitoso.',
      problem: 'Feedback em inglês mal calibrado soa rude ou vago, prejudica a colaboração e trava o merge.',
      concepts: ['Feedback específico e acionável', 'Tom colaborativo (nitpick, suggestion)', 'Perguntar em vez de acusar', 'Aceitar crítica'],
      internals: ['Convenções de review (“nit:”, “suggestion:”, “blocking:”) calibram a força do comentário.', 'Perguntas (“what happens if…?”) convidam à correção sem confronto.'],
      books: ['docsForDevelopers', 'elementsOfStyle'],
      exercises: [{ level: 'Produção', title: 'Rodada de review em inglês', task: 'Dar e responder a comentários de review em inglês em um PR real, calibrando tom e especificidade.', acceptance: 'Comentários específicos, acionáveis e colaborativos.', evidence: 'Link do PR com a discussão.' }],
      interview: [{ level: 'Produção', question: 'How do you give critical code review feedback without sounding harsh?', expected: 'Ser específico, sugerir em vez de exigir, perguntar e reconhecer o contexto.' }]
    },
    {
      part: 'producao', level: 'Produção',
      title: 'Redigir atualização de incidente',
      objective: 'Redigir atualizações de incidente e um postmortem em inglês, claros sob pressão e sem culpar pessoas.',
      problem: 'Comunicação de incidente confusa ou defensiva amplia o dano e destrói a confiança dos stakeholders.',
      concepts: ['Atualização: status, impacto, ETA', 'Postmortem sem culpa (blameless)', 'Timeline factual', 'Ações e prevenção'],
      internals: ['Uma atualização de incidente responde impacto, o que se sabe e o próximo passo — nesta ordem.', 'Postmortem blameless foca em sistema e processo, não em pessoas, para extrair aprendizado real.'],
      books: ['docsForDevelopers', 'onWritingWell'],
      exercises: [{ level: 'Produção', title: 'Incidente simulado', task: 'Escrever, em inglês, duas atualizações de status e um postmortem blameless de um incidente (real ou simulado).', acceptance: 'Comunicação clara, factual e sem culpar pessoas.', evidence: 'Docs versionados das atualizações e do postmortem.' }],
      interview: [{ level: 'Produção', question: 'What goes into a good incident status update?', expected: 'Impacto atual, o que se sabe, próximo passo e ETA — de forma factual.' }]
    },
    {
      part: 'producao', level: 'Produção',
      title: 'Manter documentação viva em inglês',
      objective: 'Manter uma documentação viva em inglês, consistente em terminologia e atualizada junto com o código.',
      problem: 'Documentação que envelhece vira desinformação; sem processo, o inglês do time diverge e confunde.',
      concepts: ['Docs como parte do fluxo', 'Guia de estilo e glossário', 'Consistência terminológica', 'Docs versionadas com o código'],
      internals: ['Docs for Developers: documentação é mantida como código — revisada, versionada e com dono.', 'Um glossário e um guia de estilo mantêm a terminologia consistente entre autores.'],
      books: ['docsForDevelopers'],
      complements: [TECH_WRITING],
      exercises: [{ level: 'Produção', title: 'Ciclo de manutenção de docs', task: 'Atualizar uma documentação junto com uma mudança de código e registrar a decisão de terminologia.', acceptance: 'Doc e código consistentes; terminologia registrada.', evidence: 'PR que altera código e docs juntos.' }],
      interview: [{ level: 'Produção', question: 'How do you keep documentation from going stale?', expected: 'Tratar docs como código: revisão, versionamento, dono e atualização junto ao código.' }]
    },
    {
      part: 'producao', level: 'Produção',
      title: 'Defender um portfólio técnico global',
      objective: 'Defender um portfólio técnico bilíngue — README, docs e apresentação — pronto para recrutamento internacional.',
      problem: 'Um portfólio só em português ou com inglês fraco fecha portas em processos internacionais mesmo com boa técnica.',
      concepts: ['README e docs de projeto em inglês', 'Perfil e resumo profissional', 'Apresentação de projeto', 'Consistência e revisão final'],
      internals: ['O portfólio é lido primeiro em inglês por recrutadores globais; clareza e consistência decidem a triagem.', 'A defesa oral do portfólio reusa tudo: escrita clara, fala estruturada e vocabulário preciso.'],
      books: ['onWritingWell', 'docsForDevelopers'],
      complements: [TECH_WRITING],
      exercises: [{ level: 'Produção', title: 'Portfólio bilíngue defendido', task: 'Publicar o portfólio com README e docs em inglês e gravar uma apresentação de 3 minutos de um projeto.', acceptance: 'Portfólio claro em inglês e defesa oral estruturada.', evidence: 'URL do portfólio + URL da apresentação.' }],
      interview: [{ level: 'Produção', question: 'Give me a two-minute overview of your best project.', expected: 'Apresentação estruturada, clara e concisa, adaptada a um recrutador.' }]
    }
  ],
  books: {
    grammarInUse: {
      title: 'English Grammar in Use — Supplementary Exercises',
      authors: 'Louise Hashemi e Raymond Murphy',
      edition: 'Edição local',
      language: 'Inglês',
      depth: 'Gramática de uso — exercícios',
      path: 'pdfs/livros-ingles/English Grammar in Use Supplementary Exercises Book with -- Louise Hashemi, Raymond Murphy -- ( WeLib.org ).djvu.pdf'
    },
    elementsOfStyle: {
      title: 'The Elements of Style',
      authors: 'William Strunk Jr. e E. B. White',
      edition: '4ª edição',
      language: 'Inglês',
      depth: 'Estilo, concisão e clareza',
      path: 'pdfs/livros-ingles/The Elements of Style (4th Edition) -- Strunk, William, Jr; White, E B -- ( WeLib.org ).pdf'
    },
    onWritingWell: {
      title: 'On Writing Well',
      authors: 'William Zinsser',
      edition: '30th Anniversary Edition',
      language: 'Inglês',
      depth: 'Escrita não ficcional clara',
      path: 'pdfs/livros-ingles/On Writing Well, 30th Anniversary Edition - An Informal -- William Zinsser [Zinsser, William] -- ( WeLib.org ).mobi.pdf'
    },
    docsForDevelopers: {
      title: 'Docs for Developers',
      authors: 'Jared Bhatti, Zachary Sarah Corleissen, Jen Lambourne et al.',
      edition: 'Edição local',
      language: 'Inglês',
      depth: 'Documentação técnica orientada ao leitor',
      path: 'pdfs/livros-ingles/Docs for Developers - An Engineer’s Field Guide to Technical -- Jared Bhatti,Zachary Sarah Corleissen,Jen Lambourne,David -- ( WeLib.org ).lit.pdf'
    }
  }
});

export const inglesAcademy = data.academy;
export const inglesModules = data.modules;
export const inglesBooks = data.books;
export const inglesAssessment = data.assessment;
