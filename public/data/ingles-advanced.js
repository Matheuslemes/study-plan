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
 * Os campos auxiliares (useWhen, avoidWhen, tradeoffs, production, risks,
 * checklist, prerequisites, summary) são AUTORAIS por módulo — não caem no
 * texto genérico da fábrica.
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
    },
    {
      id: 'fronteira',
      title: 'Fronteira: inglês técnico de alto risco e alcance',
      subtitle: 'Design docs e RFCs, comunicação de crise para liderança, palestra técnica, influência em open source e liderança/negociação em inglês.',
      objectives: [
        'Escrever RFC/design doc em inglês com linguagem normativa precisa (RFC 2119).',
        'Comunicar incidente e risco para liderança com concisão sob pressão (BLUF).',
        'Apresentar e influenciar em fóruns globais — palestra, open source e revisão assíncrona intercultural.',
        'Liderar decisões técnicas em inglês: feedback, negociação e mentoria.'
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
      prerequisites: ['Leitura em nível B1+ para acompanhar conteúdo técnico real.', 'Um local versionado para registrar o diário de frases.'],
      useWhen: ['Use no dia a dia, como hábito permanente — 15–20 min de input técnico real com captura de frases.', 'Priorize quando o vocabulário técnico ativo estiver travado ou desatualizado.'],
      avoidWhen: ['Não troque input real por listas de vocabulário isoladas nem por apps gamificados sem contexto de engenharia.', 'Não acumule frases sem revisão espaçada — captura sem revisão não fixa.'],
      tradeoffs: { ganho: 'Vocabulário técnico ativo cresce em contexto, com colocação e gramática corretas.', custo: 'Exige constância diária e um sistema de revisão que compete com outras tarefas.' },
      production: 'A evidência é um diário de frases versionado, com 10+ dias contínuos, cada frase com fonte, contexto e uso reaplicado no trabalho.',
      risks: ['Ler passivamente e "achar que absorveu" sem capturar nem reusar.', 'Escolher input muito acima do nível (frustra) ou muito abaixo (não ensina nada novo).'],
      checklist: ['Definir a fonte técnica diária (docs, blog, talk) antes de começar.', 'Capturar 3 frases por dia com contexto e tradução.', 'Revisar as frases da semana em sessão espaçada.', 'Reusar ao menos uma frase em texto real (commit, PR, mensagem).'],
      summary: 'Fluência técnica vem de input diário i+1 com captura ativa e revisão espaçada — não de estudo esporádico.',
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
      prerequisites: ['Ter um corpus de textos técnicos próprios para revisar.', 'Concluir o hábito de input diário (módulo anterior).'],
      useWhen: ['Use ao revisar textos técnicos próprios antes de publicar (PR, doc, changelog).', 'Priorize quando os mesmos erros de tempo verbal, artigo ou voz passiva reaparecem no feedback.'],
      avoidWhen: ['Não pare o fluxo de escrita para caçar gramática — corrija na revisão, não no rascunho.', 'Não decore regras isoladas sem aplicá-las a frases do próprio trabalho.'],
      tradeoffs: { ganho: 'Reduz erros recorrentes que custam credibilidade e remove ambiguidade de requisito.', custo: 'Exige atenção deliberada a cada padrão até ele virar automático.' },
      production: 'A evidência é um antes/depois de 10 frases reais suas, cada correção citando o padrão gramatical aplicado.',
      risks: ['Hipercorrigir e soar artificial ou rebuscado.', 'Confundir os modais normativos (MUST/SHOULD) e alterar o significado de uma spec.'],
      checklist: ['Isolar os 3 erros que mais se repetem no seu texto.', 'Reescrever frases reais aplicando o padrão correto.', 'Justificar cada correção com a regra.', 'Conferir present perfect vs past simple em changelog e docs.'],
      summary: 'Dominar os poucos padrões gramaticais frequentes na engenharia elimina a maioria dos erros que custam credibilidade.',
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
      prerequisites: ['Vocabulário base e gramática de uso consolidados.', 'Clareza sobre o próprio domínio técnico e seus termos recorrentes.'],
      useWhen: ['Use ao descrever bugs, erros e comportamento de API em inglês, oralmente ou por escrito.', 'Priorize quando traduções literais do português estiverem gerando colocações estranhas.'],
      avoidWhen: ['Não traduza palavra a palavra do português — aprenda a colocação inteira.', 'Não infle o glossário com termos que você não usa no seu domínio real.'],
      tradeoffs: { ganho: 'A fala e a escrita soam nativas e precisas no vocabulário que você mais usa.', custo: 'Construir e manter um glossário ativo exige uso deliberado, não só coleta.' },
      production: 'A evidência é um glossário versionado de 40 colocações do seu domínio, com 15 aplicadas em frases reais de trabalho linkadas.',
      risks: ['Colecionar termos sem usá-los ativamente (vocabulário passivo que não sai na hora).', 'Usar o phrasal verb errado (“shut down” vs “close”) e mudar o sentido técnico.'],
      checklist: ['Extrair colocações de fontes reais do seu domínio, não de listas genéricas.', 'Registrar o par completo (verbo+substantivo), não a palavra solta.', 'Aplicar 15 colocações em contexto de trabalho verificável.', 'Revisar os phrasal verbs de operação (roll out, spin up, roll back).'],
      summary: 'Inglês técnico é feito de colocações fixas; aprender o par certo e usá-lo ativamente elimina o “tradutês”.',
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
      prerequisites: ['Vocabulário técnico e leitura em nível B2.', 'Noção da estrutura de docs e RFCs.'],
      useWhen: ['Use antes de implementar a partir de uma spec, RFC ou doc oficial em inglês.', 'Priorize quando o custo de entender errado for alto (protocolo, contrato de API, requisito normativo).'],
      avoidWhen: ['Não copie trechos como “resumo” — resumo é reformulação fiel e mais curta.', 'Não trate MAY como SHOULD nem SHOULD como MUST.'],
      tradeoffs: { ganho: 'Compreensão verificada evita implementação errada e retrabalho caro.', custo: 'Resumir e validar leva mais tempo que a leitura corrida.' },
      production: 'A evidência é um resumo fiel e mais curto de uma seção de spec/RFC, validado por par ou teste de compreensão, com a fonte oficial linkada.',
      risks: ['Ilusão de compreensão: “achar que entendeu” sem checar.', 'Perder termos normativos (RFC 2119) que mudam o requisito.'],
      checklist: ['Fazer skimming da estrutura antes da leitura detalhada.', 'Resumir com as próprias palavras, mais curto que a fonte.', 'Marcar MUST/SHOULD/MAY e seu efeito no requisito.', 'Validar o resumo com um par ou um teste de compreensão.'],
      summary: 'Compreensão de spec só conta quando verificada: um resumo fiel e mais curto, com termos normativos corretos.',
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
      prerequisites: ['Gramática de uso básica (imperativo, tempos).', 'Fluxo de trabalho com Git.'],
      useWhen: ['Use em todo commit destinado a um repositório compartilhado ou a um histórico duradouro.', 'Priorize quando o histórico é lido por outras pessoas ou por você no futuro.'],
      avoidWhen: ['Não escreva corpo para mudanças triviais — o assunto imperativo basta.', 'Não use o passado (“Added”, “Fixed”) contra a convenção do imperativo.'],
      tradeoffs: { ganho: 'Histórico legível e navegável; intenção clara sem abrir o diff.', custo: 'Exige parar para articular o porquê antes de commitar.' },
      production: 'A evidência são commits reais com assunto imperativo ≤ 50 caracteres e corpo que explica o porquê quando necessário, linkados antes/depois.',
      risks: ['Assunto vago (“fix stuff”) que torna o histórico inútil.', 'Explicar o “o quê” (já visível no diff) em vez do “porquê”.'],
      checklist: ['Escrever o assunto no imperativo presente, ≤ 50 caracteres.', 'Completar mentalmente “If applied, this commit will…”.', 'Adicionar corpo só quando o porquê não for óbvio.', 'Cortar palavras desnecessárias do assunto.'],
      summary: 'Um bom commit usa o imperativo, cabe num relance e explica o porquê — é o texto técnico mais lido do time.',
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
      prerequisites: ['Saber escrever commits claros (módulo anterior).', 'Um PR real para aplicar o template.'],
      useWhen: ['Use em todo PR que outra pessoa vai revisar.', 'Priorize quando a mudança tem contexto não óbvio ou risco relevante.'],
      avoidWhen: ['Não escreva uma descrição maior do que o revisor precisa para decidir.', 'Não abra PRs gigantes que nenhuma descrição consegue tornar revisáveis.'],
      tradeoffs: { ganho: 'Revisão mais rápida e informada; risco explícito antes do merge.', custo: 'Escrever contexto, teste e risco toma tempo antes de pedir review.' },
      production: 'A evidência é um PR real cujo revisor entende a mudança sem perguntar contexto, seguindo o fluxo contexto→mudança→teste→risco.',
      risks: ['Descrição que força o revisor a adivinhar a intenção.', 'Omitir como testar ou qual o risco, escondendo o custo da mudança.'],
      checklist: ['Responder por que a mudança existe (contexto).', 'Descrever o que mudou em alto nível.', 'Explicar como validar (passos ou testes).', 'Declarar o risco e o plano de reversão.'],
      summary: 'A descrição do PR responde por que, o quê, como testar e qual o risco — antes de o revisor abrir o diff.',
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
      prerequisites: ['Escrita técnica clara e concisa.', 'Um projeto real para documentar.'],
      useWhen: ['Use ao publicar um projeto ou biblioteca destinada a outras pessoas.', 'Priorize quando novos contribuidores ou usuários precisam começar sozinhos.'],
      avoidWhen: ['Não escreva o README para você mesmo — escreva para o leitor que chega do zero.', 'Não documente o que o código já deixa óbvio; documente o que ele não conta.'],
      tradeoffs: { ganho: 'Onboarding sem atrito; menos perguntas repetidas e mais contribuições.', custo: 'Manter o quickstart testado exige revalidá-lo a cada mudança relevante.' },
      production: 'A evidência é um README em inglês cujos passos outra pessoa executa do zero em ambiente limpo e chega ao resultado.',
      risks: ['Quickstart que não roda em ambiente limpo (bug de documentação).', 'Assumir conhecimento ou ferramentas que o leitor-alvo não tem.'],
      checklist: ['Definir o leitor-alvo antes de escrever.', 'Listar pré-requisitos e comandos exatos.', 'Executar o quickstart do zero para validar.', 'Registrar decisões e limitações conhecidas.'],
      summary: 'Um README serve ao leitor: quickstart testável, pré-requisitos claros e decisões registradas — validado executando-o do zero.',
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
      prerequisites: ['Um rascunho técnico próprio para editar.', 'Noções de estilo (concisão, voz ativa).'],
      useWhen: ['Use na segunda passada de qualquer texto técnico importante, depois do rascunho.', 'Priorize textos que muitas pessoas vão ler ou que carregam decisão e risco.'],
      avoidWhen: ['Não edite enquanto escreve o rascunho — separe geração de revisão.', 'Não corte a ponto de remover contexto necessário (“mais curto” não é “incompleto”).'],
      tradeoffs: { ganho: 'Texto mais claro e mais rápido de ler; menos idas e voltas.', custo: 'Uma passada de revisão dedicada custa tempo sobre o rascunho pronto.' },
      production: 'A evidência é um antes/depois em que o texto encolhe cerca de 30% sem perder informação, com cada corte registrado.',
      risks: ['Prolixidade e hedges que diluem a mensagem.', 'Ambiguidade de pronome/referência que gera interpretação errada.'],
      checklist: ['Cortar palavras desnecessárias e hedges.', 'Trocar voz passiva por ativa onde clareia.', 'Nomear sujeitos ambíguos (evitar “it/this” soltos).', 'Ler em voz alta para checar ritmo e tom.'],
      summary: 'Revisão disciplinada — cortar, ativar a voz e desambiguar — transforma um rascunho prolixo em texto que respeita o tempo do leitor.',
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
      prerequisites: ['Vocabulário de decisão e trade-off.', 'Disposição para gravar-se e revisar.'],
      useWhen: ['Use em reuniões, dailies e entrevistas ao justificar uma escolha técnica.', 'Priorize quando precisar alinhar ou convencer em até dois minutos.'],
      avoidWhen: ['Não improvise sem estrutura em temas de alto risco — ensaie a moldura.', 'Não mergulhe em detalhe de implementação quando o ouvinte quer a decisão e o trade-off.'],
      tradeoffs: { ganho: 'A competência técnica fica visível mesmo sob a pressão de falar em inglês.', custo: 'Ganhar fluência estruturada exige gravar-se e revisar repetidamente.' },
      production: 'A evidência é uma gravação de cerca de 2 min explicando uma decisão real, com trade-off explícito e autoavaliação de clareza e erros.',
      risks: ['Congelar ou divagar, escondendo a competência real.', 'Afirmar sem dar a razão nem a alternativa descartada.'],
      checklist: ['Abrir com a decisão (ponto primeiro).', 'Dar a razão e a alternativa descartada.', 'Nomear o trade-off aceito.', 'Usar signposting (first, however, so) para guiar o ouvinte.'],
      summary: 'Uma moldura fixa — decisão, razão, trade-off — libera atenção para a língua e faz a competência aparecer na fala.',
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
      prerequisites: ['Saber explicar decisões faladas (módulo anterior).', 'Um par ou meio de gravação para o mock.'],
      useWhen: ['Use ao preparar processos internacionais e entrevistas em inglês.', 'Priorize antes de entrevistas reais, para reduzir a insegurança falada.'],
      avoidWhen: ['Não decore respostas prontas — treine a estrutura, não o script.', 'Não pule as perguntas de esclarecimento por pressa.'],
      tradeoffs: { ganho: 'Respostas organizadas e audíveis sob pressão de entrevista.', custo: 'Mock interviews e revisão consomem tempo e expõem fraquezas — que é justamente o objetivo.' },
      production: 'A evidência é uma entrevista simulada gravada (1 comportamental + 1 técnica), com um plano de melhoria a partir da revisão.',
      risks: ['Resposta comportamental sem resultado nem aprendizado.', 'Travar ao não entender a pergunta, em vez de pedir esclarecimento.'],
      checklist: ['Responder comportamental em STAR (situação, tarefa, ação, resultado).', 'Pensar em voz alta em system design.', 'Fazer perguntas de esclarecimento antes de responder.', 'Revisar a gravação e listar 3 melhorias.'],
      summary: 'Entrevista internacional se ganha com estrutura falada (STAR, thinking aloud) e perguntas de esclarecimento — treinadas, não improvisadas.',
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
      prerequisites: ['Vocabulário de erro e depuração.', 'Experiência de troubleshooting técnico.'],
      useWhen: ['Use durante incidentes e depuração colaborativa em inglês.', 'Priorize quando várias pessoas dependem da sua narração para agir.'],
      avoidWhen: ['Não apresente hipótese como fato (“it is X” quando é “I suspect X”).', 'Não segure a informação para um relato longo no fim — atualize em passos curtos.'],
      tradeoffs: { ganho: 'Investigação alinhada e mais rápida; menos ruído entre os envolvidos.', custo: 'Narrar em tempo real divide a atenção com a própria depuração.' },
      production: 'A evidência é a narração (falada ou em thread) de um troubleshooting real, separando fato de hipótese a cada passo.',
      risks: ['Comunicação vaga que atrasa a resolução.', 'Misturar fato e suposição, levando a decisões erradas sob pressão.'],
      checklist: ['Declarar a hipótese atual e a evidência que a sustenta.', 'Marcar a incerteza de forma calibrada (“we know / I suspect”).', 'Anunciar o próximo passo.', 'Emitir atualizações curtas e frequentes.'],
      summary: 'Em incidente, comunicar hipótese → evidência → próximo passo, separando fato de suposição, acelera a resolução.',
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
      prerequisites: ['Saber explicar decisões faladas com estrutura.', 'Uma decisão de arquitetura real para apresentar.'],
      useWhen: ['Use ao comunicar a mesma decisão para engenharia e para produto/liderança.', 'Priorize quando o público mistura perfis técnicos e não técnicos.'],
      avoidWhen: ['Não use uma explicação única para todos os públicos.', 'Não despeje internals em quem precisa de impacto e risco.'],
      tradeoffs: { ganho: 'A mensagem chega a cada público sem perder os fatos.', custo: 'Preparar duas versões da mesma explicação custa esforço extra.' },
      production: 'A evidência são duas gravações da mesma decisão de arquitetura — uma técnica, uma de produto — adaptando vocabulário e foco.',
      risks: ['Perder o público de produto no jargão técnico.', 'Simplificar a ponto de distorcer os fatos para o público técnico.'],
      checklist: ['Identificar o que cada público precisa (trade-off vs impacto).', 'Ajustar o nível de abstração ao ouvinte.', 'Preservar fatos e incertezas nas duas versões.', 'Preparar respostas de follow-up por público.'],
      summary: 'A mesma decisão exige vocabulário e foco diferentes por público — impacto para produto, mecanismo e trade-off para engenharia.',
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
      prerequisites: ['Escrita técnica clara e concisa.', 'Participação em um fluxo de PR real.'],
      useWhen: ['Use ao dar e receber feedback de review em times internacionais.', 'Priorize quando o tom escrito pode ser lido como rude por falta de calibração.'],
      avoidWhen: ['Não dê feedback vago (“this is wrong”) sem uma alternativa acionável.', 'Não trate toda observação como bloqueante — calibre a força.'],
      tradeoffs: { ganho: 'Colaboração fluida; feedback que melhora o código sem atrito.', custo: 'Calibrar tom e especificidade em inglês exige atenção deliberada.' },
      production: 'A evidência é uma rodada de review real em inglês — comentários dados e respondidos — específicos, acionáveis e colaborativos.',
      risks: ['Feedback que soa rude e trava a colaboração.', 'Comentário vago que não diz o que mudar nem por quê.'],
      checklist: ['Marcar a força do comentário (nit / suggestion / blocking).', 'Ser específico e propor uma alternativa.', 'Perguntar em vez de acusar (“what happens if…?”).', 'Reconhecer contexto e aceitar a crítica ao receber.'],
      summary: 'Review bilíngue eficaz é específico, acionável e calibrado no tom — sugere e pergunta em vez de exigir e acusar.',
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
      prerequisites: ['Escrita clara sob restrição de tempo.', 'Vivência de incidente (real ou simulado).'],
      useWhen: ['Use ao comunicar status durante incidentes e ao escrever o postmortem.', 'Priorize quando stakeholders precisam de informação clara sob pressão.'],
      avoidWhen: ['Não seja defensivo nem culpe pessoas — foque em sistema e processo.', 'Não prometa ETA sem base nem esconda o impacto real.'],
      tradeoffs: { ganho: 'Confiança preservada; stakeholders alinhados durante a crise.', custo: 'Escrever com clareza sob pressão exige treino e uma estrutura pronta.' },
      production: 'A evidência são duas atualizações de status e um postmortem blameless em inglês, factuais e sem apontar culpados.',
      risks: ['Comunicação confusa ou defensiva que amplia o dano.', 'Postmortem que busca culpados em vez de causas sistêmicas.'],
      checklist: ['Abrir a atualização por impacto, o que se sabe e próximo passo.', 'Dar ETA só com base real (ou dizer que ainda não há).', 'Escrever a timeline de forma factual.', 'Focar o postmortem em sistema/processo e ações de prevenção.'],
      summary: 'Comunicação de incidente é factual e blameless: impacto, o que se sabe e próximo passo — a confiança depende disso.',
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
      prerequisites: ['Escrita técnica orientada ao leitor.', 'Fluxo de PR que inclua documentação.'],
      useWhen: ['Use quando a documentação precisa acompanhar o código ao longo do tempo.', 'Priorize em bases com múltiplos autores e terminologia divergente.'],
      avoidWhen: ['Não deixe docs fora do fluxo de mudança — doc órfã envelhece e vira desinformação.', 'Não permita terminologia inconsistente entre autores sem um glossário.'],
      tradeoffs: { ganho: 'Documentação confiável e consistente que reduz erro e retrabalho.', custo: 'Manter docs como código exige revisão e dono contínuos.' },
      production: 'A evidência é um PR que altera código e docs juntos, com uma decisão de terminologia registrada.',
      risks: ['Documentação que envelhece e passa a enganar.', 'Terminologia divergente entre autores confundindo o leitor.'],
      checklist: ['Atualizar a doc no mesmo PR da mudança de código.', 'Manter um glossário e um guia de estilo.', 'Definir dono e ciclo de revisão da doc.', 'Verificar a consistência terminológica antes do merge.'],
      summary: 'Documentação viva é tratada como código — versionada, revisada, com dono e terminologia consistente — para não virar desinformação.',
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
      prerequisites: ['Ter concluído as partes de escrita e fala.', 'Projetos reais para documentar e apresentar.'],
      useWhen: ['Use ao preparar-se para recrutamento internacional.', 'Priorize quando a triagem inicial será feita em inglês por recrutadores globais.'],
      avoidWhen: ['Não publique portfólio só em português para vagas internacionais.', 'Não deixe inglês fraco ou inconsistente na vitrine que decide a triagem.'],
      tradeoffs: { ganho: 'Acesso a processos internacionais; boa técnica finalmente visível lá fora.', custo: 'Produzir e revisar tudo em inglês de qualidade leva tempo dedicado.' },
      production: 'A evidência é um portfólio publicado com README e docs em inglês e uma apresentação gravada de 3 min de um projeto.',
      risks: ['Portfólio inconsistente ou com inglês fraco que fecha portas.', 'Apresentação oral desorganizada que não vende o projeto.'],
      checklist: ['Escrever README e docs de projeto em inglês claro.', 'Revisar perfil e resumo profissional.', 'Gravar uma apresentação estruturada de um projeto.', 'Fazer uma revisão final de consistência e clareza.'],
      summary: 'Um portfólio global reúne tudo da trilha — escrita clara, fala estruturada, vocabulário preciso — na vitrine que decide a triagem internacional.',
      books: ['onWritingWell', 'docsForDevelopers'],
      complements: [TECH_WRITING],
      exercises: [{ level: 'Produção', title: 'Portfólio bilíngue defendido', task: 'Publicar o portfólio com README e docs em inglês e gravar uma apresentação de 3 minutos de um projeto.', acceptance: 'Portfólio claro em inglês e defesa oral estruturada.', evidence: 'URL do portfólio + URL da apresentação.' }],
      interview: [{ level: 'Produção', question: 'Give me a two-minute overview of your best project.', expected: 'Apresentação estruturada, clara e concisa, adaptada a um recrutador.' }]
    },
    {
      part: 'fronteira', level: 'Fronteira',
      title: 'Escrever um design doc ou RFC em inglês',
      objective: 'Escrever um design doc/RFC em inglês técnico preciso, com linguagem normativa (RFC 2119: MUST/SHOULD/MAY) e estrutura que sobrevive a revisão assíncrona global.',
      problem: 'Um design doc ambíguo ou com inglês impreciso gera decisão errada e retrabalho; MUST e SHOULD trocados mudam o requisito.',
      concepts: ['Estrutura de design doc/RFC', 'Linguagem normativa (RFC 2119)', 'Precisão × ambiguidade', 'Alternativas e consequências por escrito'],
      internals: ['MUST/SHOULD/MAY (RFC 2119) têm significado normativo preciso — confundi-los muda o contrato.', 'Um bom RFC declara contexto, decisão, alternativas descartadas e consequências, de modo que o leitor assíncrono decida sem perguntar.'],
      prerequisites: ['Dominar a escrita técnica (parte 2).', 'Ter uma decisão técnica real para documentar.'],
      useWhen: ['Use ao propor mudança que cruza times e fusos.', 'Priorize quando a decisão precisa ser revisada por escrito, sem reunião.'],
      avoidWhen: ['Não use linguagem vaga onde o requisito é normativo.', 'Não confunda MUST com SHOULD.'],
      tradeoffs: { ganho: 'Decisão inequívoca e revisável globalmente, sem reunião.', custo: 'Escrever com precisão normativa exige disciplina e revisão.' },
      production: 'A evidência é um RFC/design doc em inglês com contexto, decisão, alternativas e requisitos normativos, revisado por um par.',
      risks: ['Ambiguidade que muda o requisito.', 'Trocar MUST/SHOULD/MAY.', 'Omitir a alternativa descartada.'],
      checklist: ['Estruturar contexto, decisão, alternativas e consequências.', 'Usar MUST/SHOULD/MAY corretamente.', 'Eliminar ambiguidade da redação.', 'Passar por revisão de um par.'],
      summary: 'Um RFC em inglês só cumpre seu papel quando a linguagem normativa é precisa e o leitor assíncrono decide sem precisar perguntar.',
      books: ['docsForDevelopers', 'onWritingWell'],
      complements: [TECH_WRITING],
      exercises: [{ level: 'Fronteira', title: 'RFC revisável em inglês', task: 'Escrever um RFC de uma decisão real em inglês, com linguagem RFC 2119 e a alternativa descartada.', acceptance: 'RFC sem ambiguidade, revisado por um par.', evidence: 'URL do RFC/design doc versionado.' }],
      interview: [{ level: 'Fronteira', question: 'What is the difference between MUST and SHOULD in a spec, and why does it matter?', expected: 'Reconhecer o sentido normativo (RFC 2119): MUST é requisito absoluto; SHOULD admite exceção justificada — trocar muda o contrato.' }]
    },
    {
      part: 'fronteira', level: 'Fronteira',
      title: 'Comunicar incidente e risco para liderança em inglês',
      objective: 'Comunicar status de incidente e risco para liderança executiva em inglês, com concisão sob pressão (BLUF — bottom line up front) e sem jargão desnecessário.',
      problem: 'Sob pressão, a comunicação vira jargão prolixo; a liderança precisa do impacto e da próxima ação primeiro, em inglês claro.',
      concepts: ['BLUF (bottom line up front)', 'Impacto de negócio × detalhe técnico', 'Concisão sob pressão', 'Atualização periódica de incidente'],
      internals: ['A liderança lê o impacto e a próxima ação primeiro; o detalhe técnico vem depois, se pedirem.', 'Uma atualização de incidente em inglês precisa de fato, impacto, ação e ETA — sem ambiguidade nem hedging.'],
      prerequisites: ['Comunicação escrita e oral (partes 2–3).', 'Ter vivido ou simulado um incidente.'],
      useWhen: ['Use em incidente ativo com stakeholders de negócio.', 'Priorize quando o público é executivo e o tempo é curto.'],
      avoidWhen: ['Não abra com cronologia técnica longa.', 'Não esconda o impacto atrás de jargão.'],
      tradeoffs: { ganho: 'Decisão rápida da liderança com base no impacto certo.', custo: 'Resumir sob pressão sem perder precisão é difícil.' },
      production: 'A evidência é uma sequência de 2–3 atualizações de incidente em inglês (BLUF), com fato, impacto, ação e ETA.',
      risks: ['Enterrar o impacto no meio do texto.', 'Jargão que a liderança não decodifica.', 'Prometer ETA sem base.'],
      checklist: ['Abrir com a conclusão (BLUF).', 'Declarar impacto de negócio antes do detalhe.', 'Dar ação atual e ETA.', 'Manter cada atualização curta e datada.'],
      summary: 'Comunicação de incidente para liderança é BLUF: impacto e ação primeiro, jargão fora — em inglês claro e sob pressão.',
      books: ['onWritingWell', 'elementsOfStyle'],
      complements: [TECH_WRITING],
      exercises: [{ level: 'Fronteira', title: 'Atualização de incidente (BLUF)', task: 'Redigir três atualizações de um incidente simulado em inglês, começando pela conclusão e com impacto/ação/ETA.', acceptance: 'Cada atualização abre com o impacto e cabe em poucas linhas.', evidence: 'Documento versionado com as três atualizações.' }],
      interview: [{ level: 'Fronteira', question: 'Give me a 30-second incident update for a VP.', expected: 'BLUF: impacto de negócio, ação atual e ETA — conciso, sem jargão, sem cronologia longa.' }]
    },
    {
      part: 'fronteira', level: 'Fronteira',
      title: 'Apresentar uma palestra técnica em inglês',
      objective: 'Estruturar e entregar uma palestra técnica em inglês (storytelling técnico, ritmo e Q&A ao vivo) para uma audiência internacional.',
      problem: 'Ótima técnica não vira impacto se a palestra em inglês é monótona, sem fio condutor e trava no Q&A.',
      concepts: ['Estrutura de talk (problema → ideia → prova)', 'Storytelling técnico', 'Ritmo e sinalização (signposting)', 'Q&A ao vivo'],
      internals: ['Uma talk memorável tem um fio condutor único e prova (demo/dados), não uma lista de fatos.', 'O Q&A ao vivo exige reformular a pergunta, responder direto e admitir o que não se sabe — em inglês espontâneo.'],
      prerequisites: ['Comunicação oral (parte 3).', 'Um tema técnico que você domina.'],
      useWhen: ['Use ao submeter a uma conferência ou meetup internacional.', 'Priorize quando o público é global e assíncrono nas perguntas.'],
      avoidWhen: ['Não leia slides cheios de texto.', 'Não improvise sem estrutura nem ensaio.'],
      tradeoffs: { ganho: 'Alcance e reputação internacionais; ideias circulam.', custo: 'Preparar e ensaiar uma talk em inglês leva tempo real.' },
      production: 'A evidência é uma palestra técnica de 5–10 min gravada em inglês, com estrutura clara e um bloco de Q&A simulado.',
      risks: ['Slides densos lidos em voz alta.', 'Sem fio condutor.', 'Travar no Q&A por falta de inglês espontâneo.'],
      checklist: ['Definir uma mensagem central e a prova.', 'Sinalizar as transições (signposting).', 'Ensaiar o ritmo e o tempo.', 'Praticar respostas de Q&A.'],
      summary: 'Uma boa talk em inglês tem um fio condutor com prova e um Q&A em que você reformula, responde direto e admite limites.',
      books: ['onWritingWell', 'elementsOfStyle'],
      complements: [TECH_WRITING],
      exercises: [{ level: 'Fronteira', title: 'Talk técnica gravada', task: 'Gravar uma palestra técnica de 5–10 min em inglês, com mensagem central, prova e um Q&A simulado de 3 perguntas.', acceptance: 'Estrutura clara, ritmo controlado e respostas diretas no Q&A.', evidence: 'URL da gravação + roteiro/slides.' }],
      interview: [{ level: 'Fronteira', question: 'Pitch your talk in one sentence: what will the audience be able to do afterwards?', expected: 'Uma frase com a mensagem central e o resultado para a audiência — foco, não lista de tópicos.' }]
    },
    {
      part: 'fronteira', level: 'Fronteira',
      title: 'Colaborar e influenciar em open source global',
      objective: 'Participar de projetos open source em inglês — abrir issues acionáveis, propor mudanças, discordar com respeito e conduzir revisão assíncrona intercultural.',
      problem: 'Contribuições em inglês fraco ou tom errado são ignoradas ou geram atrito; o problema raramente é técnico, é comunicação.',
      concepts: ['Issue acionável (repro + contexto)', 'Discordar com respeito (disagree and commit)', 'Revisão assíncrona intercultural', 'Tom e clareza em texto público'],
      internals: ['Uma issue boa dá reprodução, contexto e resultado esperado — o mantenedor age sem perguntar.', 'Em revisão assíncrona intercultural, o tom escrito importa: direto, específico e sem ambiguidade, mas cordial.'],
      prerequisites: ['Escrita técnica (parte 2) e code review (parte 4).', 'Uma conta em uma plataforma de código e um projeto para contribuir.'],
      useWhen: ['Use ao contribuir para projetos internacionais.', 'Priorize quando a colaboração é 100% assíncrona e em inglês.'],
      avoidWhen: ['Não abra issue sem reprodução nem contexto.', 'Não seja ríspido nem vago em texto público.'],
      tradeoffs: { ganho: 'Rede e influência globais; aprendizado com mantenedores fortes.', custo: 'Escrever contribuições claras e cordiais em inglês leva atenção extra.' },
      production: 'A evidência é uma contribuição real em inglês (issue acionável ou PR discutido) com histórico de revisão respeitosa.',
      risks: ['Issue sem repro ignorada.', 'Tom ríspido que gera atrito.', 'Ambiguidade que trava a revisão assíncrona.'],
      checklist: ['Escrever issue com reprodução, contexto e resultado esperado.', 'Propor a mudança com o porquê.', 'Discordar com respeito e dados.', 'Responder à revisão de forma clara e cordial.'],
      summary: 'No open source global o gargalo é comunicação: issue acionável, tom respeitoso e clareza assíncrona é o que faz a contribuição avançar.',
      books: ['docsForDevelopers', 'onWritingWell'],
      complements: [TECH_WRITING],
      exercises: [{ level: 'Fronteira', title: 'Contribuição em inglês', task: 'Abrir uma issue acionável (ou um PR) em um projeto internacional e conduzir a discussão em inglês claro e cordial.', acceptance: 'Issue/PR com reprodução, contexto e revisão respeitosa.', evidence: 'URL da issue/PR.' }],
      interview: [{ level: 'Fronteira', question: 'How do you disagree with a maintainer’s decision in a PR review?', expected: 'Discordar com respeito e dados, propor alternativa, e aceitar a decisão final (disagree and commit) — tom cordial e específico.' }]
    },
    {
      part: 'fronteira', level: 'Fronteira',
      title: 'Liderar decisões técnicas em inglês: feedback, negociação e mentoria',
      objective: 'Conduzir conversas técnicas de alto risco em inglês — dar e receber feedback, negociar escopo e prazo, e mentorar — mantendo clareza e respeito intercultural.',
      problem: 'Feedback vago, negociação truncada ou mentoria confusa em inglês corroem a confiança e as decisões do time.',
      concepts: ['Feedback específico e acionável (SBI)', 'Negociação de escopo/prazo', 'Mentoria e perguntas socráticas', 'Respeito intercultural e clareza'],
      internals: ['Feedback útil é específico e sobre comportamento/impacto (situação–comportamento–impacto), não sobre a pessoa.', 'Negociar em inglês exige nomear restrições e trade-offs com clareza e propor opções, não impor.'],
      prerequisites: ['Comunicação oral e escrita (partes 2–3).', 'Situações reais de liderança ou mentoria.'],
      useWhen: ['Use em 1:1s, design reviews difíceis e negociação de escopo.', 'Priorize quando o time é internacional e o tema é sensível.'],
      avoidWhen: ['Não dê feedback vago ou pessoal.', 'Não negocie impondo; não mentore dando só respostas prontas.'],
      tradeoffs: { ganho: 'Confiança do time e decisões melhores em contexto global.', custo: 'Conversas difíceis em inglês exigem preparo e sensibilidade cultural.' },
      production: 'A evidência é um roteiro/gravação de uma conversa técnica difícil em inglês (feedback, negociação ou mentoria) com resultado registrado.',
      risks: ['Feedback pessoal em vez de sobre impacto.', 'Impor em vez de negociar.', 'Insensibilidade cultural que gera ruído.'],
      checklist: ['Dar feedback por situação–comportamento–impacto.', 'Nomear restrições e propor opções na negociação.', 'Mentorar com perguntas, não só respostas.', 'Adaptar o tom ao contexto intercultural.'],
      summary: 'Liderar em inglês é feedback específico (SBI), negociação por trade-offs e mentoria por perguntas — com clareza e respeito intercultural.',
      books: ['onWritingWell', 'elementsOfStyle'],
      complements: [TECH_WRITING],
      exercises: [{ level: 'Fronteira', title: 'Conversa técnica difícil', task: 'Roteirizar (e, se possível, gravar) uma conversa de feedback, negociação ou mentoria em inglês, com desfecho registrado.', acceptance: 'Feedback por SBI, negociação por trade-offs ou mentoria por perguntas — clara e respeitosa.', evidence: 'Roteiro/gravação versionado.' }],
      interview: [{ level: 'Fronteira', question: 'Give a piece of constructive feedback about a missed deadline.', expected: 'Usar situação–comportamento–impacto: fato específico, efeito no time e próximo passo — sem atacar a pessoa.' }]
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

export const inglesAnswerKey = inglesModules.map((module) => ({
  module: module.number,
  title: module.title,
  objetivoAtingido: module.objective,
  respostaEsperadaNaEntrevista: (module.interview || []).map((item) => `${item.level}: ${item.expected}`),
  erroMaisComum: (module.risks && module.risks[0]) || 'Praticar de forma passiva, sem produzir nem revisar em voz alta.',
  criterioDeAceite: (module.exercises || []).map((item) => `${item.level} — evidência: ${item.evidence}`),
  sinalDeQueNaoDominou: module.risks || []
}));
