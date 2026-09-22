/*
 * Fonte única da Academia de Engenharia Assistida por IA.
 *
 * Fecha a segunda ausência do §6.2 do diagnóstico: o currículo ensinava a fazer
 * engenharia sênior, mas não a fazê-la NO AMBIENTE de 2026, onde agentes de IA
 * fazem parte do fluxo. Não é sobre construir IA (isso é a trilha de IA) — é
 * sobre TRABALHAR COM IA como ferramenta de engenharia, sem dependência cega.
 *
 * Padrão de 23 campos, 100% autoral. Sem livros no acervo local; as referências
 * são fontes abertas e canônicas de 2025–2026 (DORA, GitHub Spec Kit, Snyk,
 * OWASP), citadas em `complements`.
 */

const refs = Object.freeze({
  dora: { title: 'DORA — AI Capabilities Model (2025)', url: 'https://dora.dev/research/2025/ai-capabilities-model/' },
  doraReport: { title: 'DORA — State of AI-assisted Software Development 2025', url: 'https://dora.dev/dora-report-2025/' },
  speckit: { title: 'GitHub Spec Kit — spec-driven development', url: 'https://github.github.com/spec-kit/' },
  speckitBlog: { title: 'Spec-driven development with AI (GitHub Blog)', url: 'https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/' },
  slopsquat: { title: 'Snyk — Slopsquatting: AI hallucination threats & mitigation', url: 'https://snyk.io/articles/slopsquatting-mitigation-strategies/' },
  judgeBias: { title: 'Position Bias in LLM-as-a-Judge (ACL 2025)', url: 'https://aclanthology.org/2025.ijcnlp-long.18/' },
  owaspLlm: { title: 'OWASP Top 10 for LLM Applications 2025', url: 'https://genai.owasp.org/llm-top-10/' },
  mcp: { title: 'Model Context Protocol', url: 'https://modelcontextprotocol.io/' }
});

export const aiengBooks = Object.freeze({});

export const aiengAcademy = Object.freeze({
  title: 'Academia de Engenharia Assistida por IA',
  baseline: 'Já saber fazer engenharia (código, testes, revisão, Git) · disposição para tratar a IA como ferramenta que amplifica, não como oráculo.',
  book: null,
  parts: {
    base: {
      index: '0/5', range: 'Módulos 0.1–0.4', page: 'base.html', navLabel: 'Módulo 0',
      title: 'Módulo 0 — da base à engenharia assistida por IA',
      subtitle: 'Ponte para quem programa mas nunca usou IA no fluxo: o que muda com a IA, prompt e contexto, verificar a saída e responsabilidade/segurança.',
      prerequisites: ['Já saber programar, testar e usar Git', 'Nunca ter usado IA no fluxo de desenvolvimento', 'Disposição para verificar, não confiar'],
      objectives: ['Entender a IA como amplificador que erra — verificar sempre', 'Dar contexto e restrições num bom prompt e saber por que a IA alucina', 'Verificar a saída com spec/testes e contra dependências alucinadas', 'Assumir responsabilidade, licença e segurança do código aceito']
    },
    pratica: {
      index: '1/5', range: 'Módulos 1–3', page: 'pratica.html', navLabel: 'A prática',
      title: 'A prática assistida por IA',
      subtitle: 'IA como amplificador, prompting de engenharia e o fluxo com agentes sem dependência cega.',
      prerequisites: ['Escrever, testar e revisar código', 'Usar Git e uma IDE', 'Aceitar que a IA amplifica — para o bem e para o mal'],
      objectives: ['Enxergar a IA como amplificador da capacidade existente', 'Dar contexto e restrições em vez de pedir e aceitar', 'Dirigir o agente pelo loop dirigir → gerar → verificar']
    },
    especificacao: {
      index: '2/5', range: 'Módulos 4–7', page: 'especificacao.html', navLabel: 'Spec e revisão',
      title: 'Especificação, revisão e testes',
      subtitle: 'A spec como contrato, a revisão como gargalo assumido e o teste como oráculo que a IA não escreve.',
      prerequisites: ['Módulos 1–3', 'Revisão de código e TDD', 'Saber ler uma spec e um diff'],
      objectives: ['Escrever especificação executável antes do código', 'Revisar código gerado por intenção e risco', 'Manter o oráculo (teste) fora do que a IA gera sozinha']
    },
    evals: {
      index: '3/5', range: 'Módulos 8–10', page: 'evals.html', navLabel: 'IA como feature',
      title: 'IA como feature: evals e produção',
      subtitle: 'Tratar uma feature de IA como software: golden datasets, regressão de prompt e juiz automatizado.',
      prerequisites: ['Módulos 1–7', 'Testes de regressão e métricas', 'Uma feature que usa LLM'],
      objectives: ['Medir uma feature de IA com golden dataset e métrica ligada à tarefa', 'Versionar prompt/modelo e detectar regressão por slice', 'Usar LLM-as-a-judge conhecendo e mitigando seus vieses']
    },
    fronteira: {
      index: '4/5', range: 'Módulos 11–14', page: 'fronteira.html', navLabel: 'Fronteira',
      title: 'Fronteira: segurança, governança e escala',
      subtitle: 'Dependências alucinadas, agência em ferramentas de dev, o modelo de capacidades da DORA e liderança de adoção.',
      prerequisites: [
        'Dominar os módulos 1–10: prática, spec, revisão e evals.',
        'Conhecer supply chain e segurança de aplicações (trilha Segurança ajuda).',
        'Pensar no time e na organização, não só no próprio fluxo.'
      ],
      objectives: [
        'Verificar o código gerado contra dependências alucinadas e slopsquatting.',
        'Conter o dano de prompt injection e de agência em ferramentas de dev.',
        'Ligar o benefício da IA às capacidades organizacionais que o amplificam.',
        'Conduzir adoção que aumente capacidade sem criar dependência cega.'
      ]
    },
    avaliacao: {
      index: '5/5', range: 'Evidência', page: 'avaliacao.html', navLabel: 'Avaliação e projetos',
      title: 'Avaliação, projetos e referências',
      subtitle: 'Defender decisões sobre uso de IA com spec, revisão, eval e medição de impacto real.',
      prerequisites: ['Concluir os 14 módulos ou comprovar equivalência', 'Manter um repositório com spec, evals e decisões', 'Medir impacto, não percepção'],
      objectives: ['Demonstrar fluxo assistido por IA verificável', 'Entregar uma feature de IA com eval e regressão', 'Defender uma política de uso e a medição de impacto']
    }
  }
});

function moduleOf(config) {
  return Object.freeze({
    ...config,
    interview: config.interview.map(([level, question, expected]) => ({ level, question, expected })),
    exercises: config.exercises.map(([level, task, evidence]) => ({ level, task, evidence }))
  });
}

const aiengModulesRaw = Object.freeze([
  moduleOf({
    number: '0.1', part: 'base', id: 'base-o-que-muda', title: 'O que muda quando a IA entra no fluxo', level: 'Ponte (base)',
    objective: 'Entender a IA como um amplificador (um par júnior rápido que erra), não um oráculo: onde ela ajuda, onde ela atrapalha e por que a verificação humana continua obrigatória.',
    prerequisites: ['Já programar, testar e revisar código', 'Nunca ter usado IA no fluxo de desenvolvimento', 'Noção de débito técnico'],
    problem: 'Quem nunca usou IA no fluxo oscila entre dois extremos: rejeitar por completo ou aceitar tudo cegamente. Sem o modelo mental certo, a IA vira gerador de débito com sensação de velocidade.',
    concepts: ['IA como amplificador (não oráculo)', 'Par júnior rápido que erra', 'Onde a IA ajuda × atrapalha', 'Produtividade percebida × real', 'Verificação obrigatória'],
    internals: ['Um LLM prevê o texto mais provável dado o contexto — é ótimo em rascunho e padrões, e não tem garantia de correção nem de verdade.', 'A IA amplifica a capacidade existente: melhora quem já é bom e piora quem não tem base (testes, revisão) para conter os erros.', 'Ela acelera a escrita, não a compreensão; o gargalo passa a ser revisar e verificar.'],
    useWhen: ['Use a IA para rascunho, boilerplate, exploração e explicação.', 'Trate cada saída como proposta de um júnior: útil, mas a revisar.', 'Meça o ganho por resultado verificado, não por velocidade sentida.'],
    avoidWhen: ['Não aceite código que você não entende.', 'Não use a IA como fonte de verdade sem checar.', 'Não meça produtividade por linhas ou rapidez percebida.'],
    contrast: { bad: 'Tratar a IA como oráculo: pedir, colar e seguir em frente.', good: 'Tratar a IA como par júnior: pedir com contexto, revisar e verificar antes de aceitar.' },
    tradeoffs: ['A IA acelera a escrita e desloca o esforço para a revisão.', 'Mais velocidade sem base sólida vira mais instabilidade.', 'Autonomia da IA cresce o risco na mesma medida que a conveniência.'],
    production: 'Um time cola respostas de IA sem entender e a taxa de bugs sobe; a IA só amplificou a ausência de testes que já existia.',
    risks: ['Aceitar código não compreendido', 'Confiar na IA como fonte de verdade', 'Medir só velocidade', 'Débito silencioso'],
    checklist: ['Entendo o que a IA produziu?', 'Tratei a saída como rascunho a revisar?', 'Sei onde a IA ajuda e onde atrapalha aqui?', 'Meço resultado verificado, não velocidade sentida?', 'Tenho base (testes) para conter os erros dela?'],
    interview: [
      ['Júnior/Pleno', 'A IA torna qualquer pessoa mais produtiva?', 'Não: ela amplifica a capacidade existente — ajuda quem já tem base e piora quem não tem como conter os erros; acelera a escrita, não a compreensão.'],
      ['Sênior', 'Qual o modelo mental correto para usar IA no desenvolvimento?', 'Tratá-la como um par júnior rápido que erra: dar contexto, revisar e verificar a saída antes de aceitar, medindo resultado verificado e não velocidade percebida.']
    ],
    exercises: [
      ['Básico', 'Listar 5 tarefas em que a IA ajuda e 5 em que ela atrapalha no seu contexto, justificando.', 'Tabela tarefa → ajuda/atrapalha com o porquê.'],
      ['Aplicado', 'Pegar uma resposta de IA e apontar o que você precisaria verificar antes de aceitá-la.', 'Lista de pontos de verificação.'],
      ['Sênior', 'Explicar, com um exemplo, como a IA amplifica a fraqueza de um time sem testes.', 'Meia página ligando ausência de base a instabilidade.']
    ],
    challenge: 'Defender por que "a IA escreveu, então está pronto" é a frase mais perigosa do desenvolvimento assistido.',
    book: 'DORA — State of AI-assisted Software Development 2025 (relatório).',
    complements: [refs.dora, refs.doraReport],
    quiz: [
      { question: 'Qual é o melhor modelo mental para a IA no desenvolvimento?', options: ['Um amplificador / par júnior rápido que erra e precisa de revisão', 'Um oráculo que dá sempre a resposta certa', 'Um substituto do engenheiro', 'Um compilador'], answer: 0, why: 'A IA gera rascunho plausível sem garantia de correção; amplifica a capacidade existente.' },
      { question: 'A IA acelera principalmente:', options: ['A escrita — não a compreensão nem a garantia de correção', 'A compreensão do problema', 'A correção automática de bugs', 'A revisão de código'], answer: 0, why: 'O gargalo se desloca para revisar e verificar o que foi gerado.' },
      { question: 'Por que não medir o ganho da IA por velocidade percebida?', options: ['Ela pode esconder retrabalho e débito; mede-se resultado verificado (throughput E estabilidade)', 'Velocidade é sempre ruim', 'Porque a IA é lenta', 'Porque linhas de código são o certo'], answer: 0, why: 'Produtividade percebida ≠ real; o DORA mede throughput e estabilidade juntos.' }
    ],
    exampleFile: null
  }),
  moduleOf({
    number: '0.2', part: 'base', id: 'base-prompt-contexto', title: 'Prompt e contexto: como pedir bem', level: 'Ponte (base)',
    objective: 'Escrever um bom pedido à IA — com contexto, exemplos e restrições — e entender por que ela "alucina" e o que é a janela de contexto.',
    prerequisites: ['Módulo 0.1', 'Saber descrever um problema por escrito', 'Ter uma tarefa real de código'],
    problem: 'Pedidos vagos ("faça funcionar") geram respostas vagas ou erradas. Quem não sabe dar contexto culpa a IA por um resultado que o próprio pedido não permitia acertar.',
    concepts: ['Contexto e restrições no prompt', 'Exemplos (few-shot)', 'Janela de contexto', 'Alucinação (por que ocorre)', 'Iterar o pedido'],
    internals: ['A IA responde ao que está no contexto: quanto mais claro o objetivo, as restrições e um exemplo do formato desejado, melhor a resposta.', 'A "alucinação" é a IA completando com o texto mais provável quando não sabe — soa confiante mesmo quando está errada.', 'A janela de contexto é finita: o que não cabe nela a IA simplesmente não considera.'],
    useWhen: ['Dê objetivo, restrições e um exemplo do formato esperado.', 'Inclua o contexto relevante (código, erro, versões) no pedido.', 'Itere: refine o prompt em vez de aceitar a primeira resposta.'],
    avoidWhen: ['Não peça de forma vaga e espere adivinhação.', 'Não assuma que a IA conhece o seu código sem você mostrá-lo.', 'Não confie num número/fato citado sem fonte.'],
    contrast: { bad: '"Conserta esse código" colado sem contexto, erro nem objetivo.', good: '"Este teste falha com <erro>; o objetivo é X; restrição Y; aqui está a função — proponha uma correção."' },
    tradeoffs: ['Mais contexto melhora a resposta e consome janela.', 'Exemplos guiam o formato e podem enviesar demais.', 'Prompts longos ajudam a acertar e custam mais tempo/tokens.'],
    production: 'Um pedido sem contexto gera uma correção que quebra outra parte; ao incluir o teste que falha e a restrição, a IA acerta na segunda tentativa.',
    risks: ['Prompt vago', 'Não fornecer o contexto necessário', 'Aceitar fato alucinado sem checar', 'Estourar/ignorar a janela de contexto'],
    checklist: ['O objetivo está explícito?', 'As restrições estão no pedido?', 'Incluí o contexto (código, erro, versões)?', 'Dei um exemplo do formato esperado?', 'Vou verificar fatos/citações antes de confiar?'],
    interview: [
      ['Júnior/Pleno', 'O que faz um bom prompt de engenharia?', 'Objetivo claro, contexto relevante (código, erro, versões), restrições e um exemplo do formato esperado — e iteração em vez de aceitar a primeira resposta.'],
      ['Sênior', 'Por que a IA "alucina" e como reduzir isso?', 'Ela completa com o texto mais provável quando não sabe; reduz-se dando contexto/fontes, pedindo que cite a base e verificando fatos, além de respeitar a janela de contexto.']
    ],
    exercises: [
      ['Básico', 'Reescrever um prompt vago em um pedido com objetivo, contexto, restrição e exemplo.', 'Antes/depois do prompt.'],
      ['Aplicado', 'Provocar uma alucinação com um pedido sem contexto e depois corrigir dando contexto.', 'Os dois resultados e a explicação.'],
      ['Sênior', 'Explicar como a janela de contexto afeta uma tarefa grande e como contorná-la.', 'Estratégia de fatiamento do contexto.']
    ],
    challenge: 'Transformar uma tarefa real num prompt que outra pessoa (ou a IA) consiga executar sem perguntar mais nada.',
    book: 'Spec-driven development — documentação e artigos do Spec Kit.',
    complements: [refs.speckit, refs.speckitBlog],
    quiz: [
      { question: 'O que caracteriza um bom prompt de engenharia?', options: ['Objetivo, contexto (código/erro), restrições e um exemplo do formato', 'Ser o mais curto possível', 'Pedir "faça funcionar"', 'Não dar contexto para não enviesar'], answer: 0, why: 'A IA responde ao contexto; objetivo, restrições e exemplo elevam a qualidade.' },
      { question: 'Por que a IA "alucina"?', options: ['Completa com o texto mais provável quando não sabe, soando confiante', 'Porque tem bugs de rede', 'Porque a janela é grande demais', 'Porque foi mal instalada'], answer: 0, why: 'Sem saber, ela gera o mais provável; por isso é preciso checar fatos e dar contexto.' },
      { question: 'O que é a janela de contexto?', options: ['O limite finito do que a IA considera de cada vez', 'O tamanho da tela', 'A velocidade da resposta', 'O número de usuários'], answer: 0, why: 'O que não cabe na janela a IA não considera — daí fatiar tarefas grandes.' }
    ],
    exampleFile: null
  }),
  moduleOf({
    number: '0.3', part: 'base', id: 'base-verificar-saida', title: 'Verificar a saída: nunca confie, teste', level: 'Ponte (base)',
    objective: 'Adotar a disciplina central: tratar a saída da IA como rascunho e verificá-la com um oráculo objetivo (spec/testes) e contra o mundo real (dependências existem?), em vez de aceitar "no olho".',
    prerequisites: ['Módulo 0.2', 'Saber escrever um teste', 'Ideia de dependência/pacote'],
    problem: 'Código gerado por IA "parece certo" e passa num olhar rápido, mas pode falhar em casos de borda, inventar dependências (slopsquatting) ou citar fatos falsos. Aceitar por aparência é a principal fonte de incidentes.',
    concepts: ['Saída = rascunho', 'Oráculo objetivo (spec/teste)', '"Parece certo" ≠ correto', 'Dependências alucinadas (slopsquatting)', 'Grounding (checar contra a fonte)'],
    internals: ['A IA não garante correção; só um oráculo objetivo (teste/spec) separa "parece certo" de "está certo".', 'Uma implementação plausível pode passar num caso feliz e falhar numa invariante — o teste completo revela.', 'A IA pode sugerir pacotes que não existem (typosquat/alucinação); instalar às cegas é um vetor de ataque de supply chain.'],
    useWhen: ['Rode a saída contra testes/spec antes de aceitar.', 'Confirme que cada dependência sugerida existe e é a correta.', 'Cheque fatos e citações contra a fonte (grounding).'],
    avoidWhen: ['Não aceite código só porque compila ou "parece certo".', 'Não instale dependência sugerida sem verificar que existe.', 'Não confie em número/API citado sem checar a documentação.'],
    contrast: { bad: 'Ler o diff da IA, achar razoável e dar merge.', good: 'Rodar a spec/testes, checar as dependências e as citações — e só então aceitar.' },
    tradeoffs: ['Verificar custa tempo agora e evita incidente depois.', 'Escrever a spec/teste é esforço que vira o oráculo reutilizável.', 'Checar dependências adiciona um passo e fecha um vetor de supply chain.'],
    production: 'Uma correção da IA passa no olhar do revisor mas quebra um caso de borda; o teste que faltava a teria barrado. O exercício mostra a spec reprovando a versão "plausível" e flagrando um import alucinado.',
    risks: ['Aceitar por aparência', 'Faltar o oráculo (teste/spec)', 'Instalar dependência alucinada', 'Confiar em fato não verificado'],
    checklist: ['Existe um oráculo (spec/teste) que valida a saída?', 'A saída passou nos casos de borda, não só no feliz?', 'Cada dependência sugerida existe e é a correta?', 'Fatos/citações foram checados contra a fonte?', 'Entendi o código antes de aceitar?'],
    interview: [
      ['Júnior/Pleno', 'Por que revisar "no olho" o código da IA não basta?', 'Porque "parece certo" não é evidência: casos de borda, dependências inexistentes e fatos falsos passam pelo olhar; só um oráculo objetivo (teste/spec) e a checagem contra a fonte garantem.'],
      ['Sênior', 'O que é slopsquatting e como se defender?', 'É a IA sugerir um pacote inexistente/typosquat que um atacante pode registrar; defende-se verificando que cada dependência existe e é a oficial antes de instalar.']
    ],
    exercises: [
      ['Básico', 'Rodar o exemplo e explicar por que a versão "plausível" falha na spec e quais deps foram flagradas.', 'Saída do script + explicação.'],
      ['Aplicado', 'Escrever a spec/teste que reprova uma saída de IA sutilmente errada.', 'Teste que falha na versão errada e passa na correta.'],
      ['Sênior', 'Montar um passo de verificação de dependências para código gerado por IA.', 'Checagem que flagra pacotes inexistentes.']
    ],
    challenge: 'Defender por que o teste (oráculo) é justamente a parte que a IA não deve escrever sozinha para o próprio código.',
    book: 'Slopsquatting e viés de juiz-LLM — artigos de referência (ver complementos).',
    complements: [refs.slopsquat, refs.judgeBias],
    exampleFile: '../../examples/aieng-senior/aieng-zero.mjs',
    quiz: [
      { question: 'Por que "revisar no olho" a saída da IA não basta?', options: ['"Parece certo" não é evidência; só um oráculo objetivo (teste/spec) garante', 'Porque a IA é sempre correta', 'Porque revisar é proibido', 'Porque o olho humano é lento'], answer: 0, why: 'Casos de borda, deps inexistentes e fatos falsos passam pelo olhar; teste/spec e grounding barram.' },
      { question: 'O que é slopsquatting?', options: ['A IA sugerir um pacote inexistente que um atacante pode registrar', 'Um erro de digitação no prompt', 'Um tipo de teste', 'Uma técnica de compressão'], answer: 0, why: 'Instalar dependência alucinada às cegas é um vetor de ataque de supply chain.' },
      { question: 'Qual é a disciplina central da engenharia assistida por IA?', options: ['Tratar a saída como rascunho e verificá-la com um oráculo objetivo', 'Confiar e acelerar', 'Nunca usar IA', 'Aceitar se compilar'], answer: 0, why: 'Verificar (spec/testes) e checar contra a fonte é o que separa velocidade de incidente.' }
    ]
  }),
  moduleOf({
    number: '0.4', part: 'base', id: 'base-responsabilidade', title: 'Responsabilidade, licença e segurança do código gerado', level: 'Ponte (base)',
    objective: 'Assumir que você é responsável pelo código que aceita da IA: entender licença/propriedade, não vazar dados sensíveis em prompts e não introduzir segredos ou vulnerabilidades.',
    prerequisites: ['Módulo 0.3', 'Noção de licença de software', 'Ideia de dado sensível e segredo'],
    problem: 'Quem terceiriza a responsabilidade para a IA ("foi ela que escreveu") cola segredos em prompts, aceita código com licença incompatível e introduz vulnerabilidades — e a conta é sempre do humano que deu merge.',
    concepts: ['Você é dono do que aceita', 'Licença e proveniência', 'Dados sensíveis em prompts', 'Segredos e vulnerabilidades no código gerado', 'Política de uso'],
    internals: ['A responsabilidade legal e técnica pelo código é de quem o aceita e publica, não da ferramenta que o gerou.', 'O que você cola no prompt pode sair do seu controle; segredos e dados sensíveis não entram em prompts de ferramentas não aprovadas.', 'Código gerado pode conter vulnerabilidades ou padrões inseguros plausíveis — passa pela mesma revisão de segurança de qualquer código.'],
    useWhen: ['Trate o código gerado como seu: revise licença, segurança e qualidade.', 'Remova dados sensíveis e segredos antes de enviar um prompt.', 'Siga a política de uso de IA da organização.'],
    avoidWhen: ['Não cole segredos, credenciais ou dados de clientes em prompts.', 'Não aceite código sem checar licença/proveniência quando relevante.', 'Não use "a IA escreveu" como desculpa por um incidente.'],
    contrast: { bad: 'Colar o log de produção (com dados de clientes) no chat para "a IA analisar".', good: 'Anonimizar/remover o sensível, e tratar a saída como código próprio a revisar e proteger.' },
    tradeoffs: ['Revisar licença/segurança custa tempo e evita passivo legal e incidente.', 'Restringir o que vai ao prompt reduz conveniência e protege dados.', 'Uma política de uso adiciona processo e dá clareza ao time.'],
    production: 'Uma chave de API colada num prompt para "debugar" vaza; e um trecho aceito da IA trazia uma injeção plausível. Ambos eram responsabilidade de quem aceitou.',
    risks: ['Vazar dados sensíveis/segredos em prompts', 'Licença incompatível no código aceito', 'Vulnerabilidade introduzida por código gerado', 'Terceirizar a responsabilidade'],
    checklist: ['Assumo a responsabilidade pelo código que aceito?', 'Removi dados sensíveis e segredos do prompt?', 'Verifiquei licença/proveniência quando relevante?', 'Passei o código gerado pela revisão de segurança?', 'Sigo a política de uso de IA?'],
    interview: [
      ['Júnior/Pleno', 'De quem é a responsabilidade pelo código gerado por IA?', 'De quem o aceita e publica: a ferramenta gera, mas a responsabilidade técnica e legal é do engenheiro/time que faz o merge.'],
      ['Sênior', 'Que cuidados de dados e segurança o uso de IA exige?', 'Não enviar dados sensíveis/segredos em prompts, verificar licença/proveniência, submeter o código gerado à revisão de segurança e seguir uma política de uso da organização.']
    ],
    exercises: [
      ['Básico', 'Listar o que nunca deve entrar num prompt de IA e por quê.', 'Lista com a justificativa de cada item.'],
      ['Aplicado', 'Revisar um trecho gerado por IA sob a ótica de segurança e licença.', 'Achados de segurança/licença e a decisão.'],
      ['Sênior', 'Esboçar uma política mínima de uso de IA para um time.', 'Documento com o permitido, o proibido e o porquê.']
    ],
    challenge: 'Defender por que "a IA escreveu" nunca é uma defesa aceitável para um vazamento ou uma vulnerabilidade.',
    book: 'OWASP Top 10 for LLM Applications; boas práticas de governança e MCP (ver complementos).',
    complements: [refs.owaspLlm, refs.mcp],
    quiz: [
      { question: 'De quem é a responsabilidade pelo código gerado por IA que vai para produção?', options: ['De quem o aceita e publica (o engenheiro/time)', 'Da empresa que fez o modelo', 'De ninguém', 'Do usuário final'], answer: 0, why: 'A ferramenta gera; a responsabilidade técnica e legal é de quem dá merge.' },
      { question: 'O que NÃO deve entrar num prompt de IA?', options: ['Segredos, credenciais e dados sensíveis de clientes', 'A descrição do objetivo', 'Um exemplo do formato desejado', 'A mensagem de erro (anonimizada)'], answer: 0, why: 'O que você cola pode sair do seu controle; sensível e segredos ficam fora.' },
      { question: '"A IA escreveu" é uma defesa aceitável para uma vulnerabilidade?', options: ['Não — o código aceito é responsabilidade de quem o publicou', 'Sim, sempre', 'Sim, se compilou', 'Depende do modelo usado'], answer: 0, why: 'Código gerado passa pela mesma revisão e responsabilidade de qualquer código.' }
    ],
    exampleFile: null
  }),
  moduleOf({
    number: 1, part: 'pratica', id: 'ia-amplificador', title: 'IA como amplificador, não substituto', level: 'Fundação',
    objective: 'Enxergar a IA como amplificador da capacidade existente e distinguir produtividade percebida de produtividade real, evitando acumular débito.',
    prerequisites: ['Fazer engenharia sem IA', 'Noção de débito técnico', 'Métricas de entrega (DORA)'],
    problem: 'A IA dá a sensação de velocidade que esconde retrabalho, revisão inflada e débito — a equipe "entrega mais" e estabiliza menos.',
    concepts: ['IA como amplificador (DORA 2025)', 'Produtividade percebida × real', 'Débito do código gerado', 'Throughput × estabilidade'],
    internals: ['A tese central do DORA 2025: a IA amplifica a capacidade existente — melhora times bons e piora os frágeis.', 'A IA sobe o throughput, mas frequentemente à custa de estabilidade quando a base é fraca.', 'Aceitar código sem entender troca velocidade agora por manutenção depois — débito, não ganho.'],
    useWhen: ['Justificar por que "mais rápido" não é "melhor" sem medir estabilidade.', 'Decidir onde a IA rende e onde ela amplifica o caos.'],
    avoidWhen: ['Não meça o ganho só por linhas ou velocidade percebida.', 'Não adote IA para "consertar" um time sem versionamento nem testes.'],
    contrast: { bad: 'Medir sucesso da IA por "quanto código a mais foi gerado".', good: 'Medir throughput E estabilidade (DORA) e o retrabalho antes/depois da adoção.' },
    tradeoffs: ['IA acelera a escrita, não a compreensão.', 'Velocidade sem base sólida vira instabilidade.', 'O ganho real depende da capacidade que a IA amplifica.'],
    production: 'Uma equipe dobra os PRs por semana com IA, mas o tempo de recuperação de falha piora: a IA amplificou a ausência de testes que já existia.',
    risks: ['Confundir output com valor.', 'Débito silencioso do código aceito.', 'Ignorar estabilidade.', 'Adotar IA sobre base frágil.'],
    checklist: ['O ganho foi medido por throughput E estabilidade?', 'O retrabalho entrou na conta?', 'A base (testes, versionamento) sustenta a velocidade?', 'A percepção foi separada do dado?', 'O débito do código gerado é monitorado?'],
    interview: [['Pleno', 'A IA torna qualquer time mais produtivo?', 'Não; ela amplifica a capacidade existente — melhora times bons e piora os frágeis (DORA 2025).'], ['Sênior', 'Como medir se a IA ajudou de fato?', 'Comparar throughput e estabilidade (DORA) e o retrabalho antes/depois, não a velocidade percebida.']],
    exercises: [['Básico', 'Listar onde a IA amplifica força e onde amplifica fraqueza no seu time.', 'Tabela com evidência de cada caso.'], ['Aplicado', 'Medir throughput e estabilidade antes/depois de uma semana com IA.', 'Comparação com as métricas DORA.'], ['Sênior', 'Diagnosticar um caso de "mais rápido, menos estável" e propor a correção de base.', 'Causa raiz e plano de capacidade.']],
    challenge: 'Defender, com dados, quando NÃO acelerar com IA porque a base do time transformaria velocidade em incidente.',
    book: 'DORA — State of AI-assisted Software Development 2025 (relatório).',
    complements: [refs.doraReport, refs.dora], exampleFile: null
  }),
  moduleOf({
    number: 2, part: 'pratica', id: 'prompting-contexto', title: 'Prompting de engenharia e context engineering', level: 'Fundação',
    objective: 'Obter saída útil de um modelo dando contexto, restrições e exemplos, e entender os limites de contexto que degradam o resultado.',
    prerequisites: ['Módulo 1', 'Ler documentação e convenções do repo', 'Noção de tokens/contexto'],
    problem: 'Pedir "faça X" sem contexto produz código plausível e errado; o resultado ruim quase sempre é falta de contexto, não falta do modelo.',
    concepts: ['Contexto, restrições e exemplos', 'Context engineering (o que o agente precisa saber)', 'Janela de contexto e degradação', 'Convenções do repositório como contexto'],
    internals: ['A qualidade da saída depende do contexto fornecido: convenções, tipos, exemplos e restrições reduzem a alucinação.', 'A janela de contexto tem limite; encher com ruído degrada — curadoria vence volume.', 'O modelo não conhece o seu repo: convenções, ADRs e specs precisam entrar no contexto.'],
    useWhen: ['Delegar uma tarefa bem-definida a um agente.', 'Reduzir idas e voltas com o modelo.'],
    avoidWhen: ['Não despeje o repo inteiro no contexto por reflexo.', 'Não peça sem dizer as restrições que importam.'],
    contrast: { bad: 'Pedir "escreva a função" e aceitar o primeiro resultado.', good: 'Dar a assinatura, as restrições, um exemplo de teste e a convenção do repo — e revisar.' },
    tradeoffs: ['Mais contexto ajuda até saturar a janela.', 'Curadoria de contexto custa tempo, mas evita retrabalho.', 'Exemplos guiam, mas podem enviesar.'],
    production: 'Um agente gerou código que ignorava o padrão de erro do projeto; incluir o ADR de tratamento de erro no contexto resolveu na primeira tentativa.',
    risks: ['Contexto de menos (alucinação).', 'Contexto de mais (ruído/saturação).', 'Convenções ausentes.', 'Exemplo enviesado.'],
    checklist: ['As restrições que importam estão no prompt?', 'As convenções do repo entraram no contexto?', 'Há um exemplo/teste guiando?', 'A janela não está saturada de ruído?', 'A saída foi revisada, não aceita?'],
    interview: [['Pleno', 'Por que a saída da IA veio errada?', 'Quase sempre por falta de contexto/restrição, não por incapacidade do modelo; contexto é engenharia.'], ['Sênior', 'O que é context engineering?', 'Selecionar e estruturar o que o agente precisa saber (convenções, tipos, specs) dentro do limite da janela.']],
    exercises: [['Básico', 'Reescrever um prompt ruim adicionando contexto, restrições e um exemplo.', 'Antes/depois com a diferença de saída.'], ['Aplicado', 'Montar um "contexto padrão" do repo (convenções, ADRs) para agentes.', 'Documento de contexto reutilizável.'], ['Sênior', 'Demonstrar a degradação por saturação de contexto e a curadoria que a corrige.', 'Medição com contexto enxuto vs inflado.']],
    challenge: 'Transformar uma tarefa vaga em um prompt que um agente executa corretamente na primeira tentativa — e explicar cada peça de contexto.',
    book: 'Documentação de agentes de código (Copilot/Claude Code/Cursor); GitHub Spec Kit para contexto estruturado.',
    complements: [refs.speckitBlog, refs.dora], exampleFile: null
  }),
  moduleOf({
    number: 3, part: 'pratica', id: 'fluxo-agentes', title: 'Fluxo com agentes de código', level: 'Intermediário',
    objective: 'Trabalhar com agentes de código decidindo quando delegar e quando dirigir, mantendo o loop dirigir → gerar → verificar sem dependência cega.',
    prerequisites: ['Módulos 1–2', 'Um agente de código instalado', 'Revisão de diffs'],
    problem: 'Dependência cega no agente: aceitar diffs grandes sem entender, perder o controle do design e não conseguir depurar o que a IA escreveu.',
    concepts: ['Delegar × dirigir', 'Loop dirigir → gerar → verificar', 'Tamanho do passo (small batches)', 'Dependência cega vs supervisão'],
    internals: ['O agente é rápido a gerar e péssimo a decidir o que importa; a direção continua sendo humana.', 'Passos pequenos e verificáveis batem grandes gerações que ninguém consegue revisar.', 'Verificar cada passo (teste, execução, leitura) é o que impede a dependência cega.'],
    useWhen: ['Tarefas bem-definidas e verificáveis (boilerplate, refactor mecânico, testes de exemplo).', 'Explorar uma API desconhecida com verificação.'],
    avoidWhen: ['Não delegue decisões de design sem dirigir.', 'Não aceite um diff que você não consegue explicar.'],
    contrast: { bad: 'Pedir uma feature inteira e mesclar o diff enorme que voltou.', good: 'Quebrar em passos pequenos, dirigir cada um e verificar antes de seguir.' },
    tradeoffs: ['Delegar acelera o mecânico, mas exige verificação.', 'Passos pequenos são mais lentos por passo e mais seguros no todo.', 'Autonomia do agente troca controle por velocidade.'],
    production: 'Um dev mesclou um refactor gerado de 800 linhas sem entender; uma mudança sutil de comportamento passou e quebrou um caso de borda em produção.',
    risks: ['Diff grande demais para revisar.', 'Perda do controle de design.', 'Não conseguir depurar o gerado.', 'Aceitar sem verificar.'],
    checklist: ['O passo é pequeno e verificável?', 'Você consegue explicar o diff?', 'A decisão de design foi sua?', 'Houve verificação (teste/execução) antes de seguir?', 'A dependência é supervisionada, não cega?'],
    interview: [['Pleno', 'Quando delegar a um agente e quando dirigir?', 'Delegar o mecânico e verificável; dirigir as decisões de design e o que exige julgamento.'], ['Sênior', 'Como evitar dependência cega em agentes?', 'Passos pequenos, verificação a cada passo e a regra de nunca mesclar um diff que não se consegue explicar.']],
    exercises: [['Básico', 'Executar uma tarefa em passos pequenos com um agente, verificando cada um.', 'Registro do loop dirigir→gerar→verificar.'], ['Aplicado', 'Comparar uma geração grande vs a mesma tarefa em passos pequenos.', 'Diferença de revisibilidade e defeitos.'], ['Sênior', 'Definir uma política pessoal de "o que delego, o que dirijo".', 'Critérios explícitos com exemplos.']],
    challenge: 'Executar uma feature real inteiramente por agente mantendo cada diff explicável e testado — e mostrar onde você teve que dirigir, não delegar.',
    book: 'Documentação do seu agente de código; DORA 2025 (small batches como capacidade).',
    complements: [refs.dora, refs.speckit], exampleFile: null
  }),
  moduleOf({
    number: 4, part: 'especificacao', id: 'spec-executavel', title: 'Especificação executável (spec-driven development)', level: 'Intermediário',
    objective: 'Escrever uma especificação que serve de contrato e fonte da verdade para o agente gerar, testar e validar código — antes de qualquer linha.',
    prerequisites: ['Módulo 3', 'Escrever critérios de aceite', 'Ler uma spec'],
    problem: 'Prompt ad-hoc gera código que diverge da intenção e exige regenerar do zero; sem uma spec, não há contrato que o agente e o time compartilhem.',
    concepts: ['Spec-driven development (SDD)', 'Spec como contrato e fonte da verdade', 'Fases com checkpoint humano (specify → plan → task → implement)', 'Critérios de aceite verificáveis'],
    internals: ['Na SDD a spec vem antes do código e é o contrato que o agente usa para gerar, testar e validar.', 'O GitHub Spec Kit organiza em quatro fases com checkpoint humano; a spec é refinada antes de o agente tocar em código.', 'Times com SDD relatam ordens de grandeza menos ciclos de "regenerar do zero" que o prompting ad-hoc.'],
    useWhen: ['Features não triviais delegadas a agentes.', 'Quando a intenção precisa sobreviver ao autor e ao modelo.'],
    avoidWhen: ['Não escreva spec-cerimônia para um one-liner.', 'Não trate a spec como documento morto após o código.'],
    contrast: { bad: 'Prompt ad-hoc e regenerar do zero quando não bate.', good: 'Escrever a spec (objetivo, jornadas, aceite), revisar, e só então deixar o agente implementar contra ela.' },
    tradeoffs: ['A spec custa tempo antes; economiza regeneração depois.', 'Spec detalhada demais engessa; de menos, não guia.', 'Manter a spec viva exige disciplina.'],
    production: 'Uma feature era regenerada a cada rodada porque o prompt mudava; escrever a spec como contrato estabilizou a geração e virou o teste de aceite.',
    risks: ['Spec ambígua ou incompleta.', 'Spec que não é verificável.', 'Spec desatualizada do código.', 'Pular o checkpoint humano.'],
    checklist: ['A spec tem objetivo, jornadas e critérios de aceite?', 'Os critérios são verificáveis?', 'Houve checkpoint humano antes do código?', 'A spec é a fonte da verdade do teste?', 'A spec é mantida junto do código?'],
    interview: [['Pleno', 'O que é spec-driven development?', 'Escrever a especificação como contrato antes do código; ela é a fonte da verdade que o agente usa para gerar, testar e validar.'], ['Sênior', 'Por que a spec reduz retrabalho com agentes?', 'Estabiliza a intenção: o agente implementa contra um contrato fixo, em vez de reinterpretar prompts variáveis a cada rodada.']],
    exercises: [['Aplicado', 'Escrever a spec de uma feature (objetivo, jornadas, aceite) e implementar contra ela com um agente.', 'Spec + implementação que passa nos critérios.'], ['Sênior', 'Transformar critérios de aceite em checagens executáveis (spec executável).', 'Checker que valida a implementação contra a spec.'], ['Sênior', 'Comparar prompting ad-hoc vs SDD na mesma feature.', 'Número de ciclos de regeneração nos dois.']],
    challenge: 'Escrever uma spec executável cujos critérios de aceite rodem como testes e falhem quando a implementação viola a intenção.',
    book: 'GitHub Spec Kit e o blog de spec-driven development do GitHub.',
    complements: [refs.speckit, refs.speckitBlog], exampleFile: '../../examples/aieng-senior/spec_executavel.py'
  }),
  moduleOf({
    number: 5, part: 'especificacao', id: 'revisao-codigo-gerado', title: 'Revisão de código gerado por IA', level: 'Avançado',
    objective: 'Revisar código gerado por IA por intenção e risco, sabendo o que o modelo erra sistematicamente, com a revisão assumida como o novo gargalo.',
    prerequisites: ['Módulos 3–4', 'Code review', 'Diffs e contexto'],
    problem: 'A IA move o gargalo da escrita para a revisão; código plausível esconde erros sutis (borda, segurança, comportamento) que passam em revisão apressada.',
    concepts: ['Revisão como gargalo assumido', 'Erros sistemáticos da IA', 'Revisar por intenção, não por sintaxe', 'Propriedade do código mesclado'],
    internals: ['A IA gera código sintaticamente perfeito e semanticamente sutilmente errado — a revisão precisa focar comportamento e borda.', 'Erros sistemáticos: casos de borda, segurança, suposições implícitas, dependências inexistentes, e "plausível mas errado".', 'Quem mescla é dono: aprovar código gerado é assumir responsabilidade por ele.'],
    useWhen: ['Todo PR com código gerado por IA.', 'Quando a velocidade de geração pressiona a revisão.'],
    avoidWhen: ['Não aprove por "parece certo".', 'Não delegue a revisão do código gerado a outra IA sem verificação humana no que importa.'],
    contrast: { bad: 'Aprovar o diff porque compila e "parece razoável".', good: 'Revisar por intenção: casos de borda, segurança, suposições, e rodar o teste que a IA não deveria ter escrito.' },
    tradeoffs: ['A IA acelera a escrita e pressiona a revisão.', 'Revisar bem é lento; é o custo assumido.', 'Uma segunda IA ajuda a triar, não a decidir.'],
    production: 'Um trecho gerado tratava a lista vazia como erro em vez de caso válido; compilava, passava no teste feliz e quebrou o relatório de um cliente sem dados.',
    risks: ['Revisão apressada de código plausível.', 'Erro de borda/segurança sutil.', 'Aprovar sem entender.', 'Terceirizar a revisão à IA.'],
    checklist: ['A revisão focou comportamento e borda, não sintaxe?', 'Segurança e suposições implícitas foram checadas?', 'As dependências existem e são confiáveis?', 'Você entende e assume o diff?', 'O teste que valida foi escrito/revisado por humano?'],
    interview: [['Sênior', 'Por que a IA torna a revisão mais importante, não menos?', 'Ela move o gargalo para a revisão: gera muito código plausível cujos erros sutis só a revisão pega.'], ['Staff', 'O que a IA erra sistematicamente?', 'Casos de borda, segurança, suposições implícitas e dependências inexistentes — "plausível mas errado".']],
    exercises: [['Aplicado', 'Revisar um PR gerado por IA e achar os erros de borda/segurança plantados.', 'Lista de defeitos com o tipo de cada um.'], ['Sênior', 'Escrever um checklist de revisão específico para código gerado.', 'Checklist aplicado em um PR real.'], ['Staff', 'Medir a taxa de defeitos em código gerado vs escrito à mão no seu time.', 'Dados e a política de revisão que decorre.']],
    challenge: 'Pegar um diff gerado por IA que passa no CI e mesmo assim está errado, e mostrar por que só a revisão por intenção o pegaria.',
    book: 'DORA 2025 (revisão e small batches); prática de code review do time.',
    complements: [refs.doraReport, refs.owaspLlm], exampleFile: null
  }),
  moduleOf({
    number: 6, part: 'especificacao', id: 'teste-oraculo', title: 'Testes como oráculo', level: 'Avançado',
    objective: 'Usar testes como o oráculo que valida o código gerado, entendendo por que a IA não deve escrever sozinha o teste que verifica o próprio código.',
    prerequisites: ['Módulos 4–5', 'TDD', 'Cobertura e casos de borda'],
    problem: 'Deixar a IA escrever código E o teste do próprio código cria um oráculo circular: o teste confirma o que o código faz, não o que deveria fazer.',
    concepts: ['O oráculo do teste', 'Circularidade IA-código + IA-teste', 'TDD com IA (teste primeiro, humano)', 'Testes de propriedade e de borda'],
    internals: ['O teste é o oráculo: define o comportamento correto independentemente da implementação.', 'Se a mesma IA escreve código e teste, ambos herdam a mesma suposição errada — o teste vira espelho, não juiz.', 'Escrever o teste (ou os critérios) primeiro, por humano, transforma a IA em executora de um contrato verificável.'],
    useWhen: ['Toda feature gerada precisa de um oráculo humano.', 'TDD com o teste/critério definido antes da geração.'],
    avoidWhen: ['Não aceite teste e código gerados juntos como verificação suficiente.', 'Não meça qualidade só por cobertura (a IA infla cobertura).'],
    contrast: { bad: 'Pedir à IA o código e depois "gere os testes" e confiar que passou.', good: 'Definir o oráculo (teste/critério) por humano antes, e deixar a IA implementar até passar.' },
    tradeoffs: ['O oráculo humano custa esforço; é o que dá confiança.', 'A IA acelera testes triviais, não o oráculo.', 'Cobertura alta não é corretude.'],
    production: 'A IA escreveu uma função e seu teste juntos; ambos assumiam fuso local, e o teste passou — o bug de timezone só apareceu quando um humano escreveu o caso de borda.',
    risks: ['Oráculo circular (IA testa IA).', 'Cobertura como falso sinal.', 'Casos de borda ausentes.', 'Teste que espelha o bug.'],
    checklist: ['O oráculo (teste/critério) foi definido por humano?', 'O teste é independente da implementação?', 'Os casos de borda foram escritos por quem entende o domínio?', 'A cobertura não está sendo usada como prova de corretude?', 'O teste falharia se a intenção fosse violada?'],
    interview: [['Sênior', 'Por que a IA não deve escrever sozinha o teste do próprio código?', 'Oráculo circular: código e teste herdam a mesma suposição; o teste confirma o que o código faz, não o que deveria.'], ['Staff', 'Como manter o oráculo confiável com IA no fluxo?', 'Definir o teste/critério por humano antes (TDD), deixando a IA implementar contra um oráculo independente.']],
    exercises: [['Aplicado', 'Escrever o teste primeiro (humano) e deixar a IA implementar até passar.', 'Teste independente + implementação.'], ['Sênior', 'Mostrar um caso em que IA-código + IA-teste concordam e ambos estão errados.', 'Demonstração da circularidade e o teste humano que a quebra.'], ['Staff', 'Definir a política de "o que a IA pode testar e o que exige oráculo humano".', 'Política com exemplos.']],
    challenge: 'Construir um caso onde o teste gerado pela IA passa e o teste de borda escrito por humano reprova o mesmo código — e explicar a diferença de oráculo.',
    book: 'Prática de TDD do time; DORA 2025 (qualidade e testes automatizados).',
    complements: [refs.doraReport, refs.speckit], exampleFile: null
  }),
  moduleOf({
    number: 7, part: 'especificacao', id: 'debito-propriedade', title: 'Débito e propriedade do código gerado', level: 'Avançado',
    objective: 'Manter legibilidade, consistência e propriedade do código gerado, tratando "aceitar tudo" como acúmulo de débito que o time paga depois.',
    prerequisites: ['Módulos 5–6', 'Manutenção de código', 'Convenções do projeto'],
    problem: 'Código gerado que funciona mas destoa do projeto (estilo, padrões, duplicação) acumula débito invisível até a manutenção travar.',
    concepts: ['Débito do código gerado', 'Consistência e legibilidade', 'Propriedade (você é dono do que mescla)', 'Duplicação e inconsistência introduzidas'],
    internals: ['A IA otimiza "resolver a tarefa", não "encaixar no sistema" — daí duplicação, estilos díspares e abstrações repetidas.', 'Código que ninguém entende é dívida mesmo que passe nos testes.', 'Propriedade é inegociável: quem aprova o merge responde pelo código, gerado ou não.'],
    useWhen: ['Ao integrar qualquer código gerado ao codebase.', 'Em revisões que zelam pela consistência arquitetural.'],
    avoidWhen: ['Não aceite estilo/abstração destoante "porque funciona".', 'Não deixe o gerado duplicar o que já existe.'],
    contrast: { bad: 'Mesclar tudo que passa no CI, sem olhar consistência.', good: 'Refatorar o gerado para o padrão do projeto e recusar duplicação — como faria com código humano.' },
    tradeoffs: ['Adequar ao padrão custa tempo; ignorar custa manutenção.', 'IA gera rápido, mas nem sempre consistente.', 'Legibilidade vs velocidade de merge.'],
    production: 'Meses de código gerado sem revisão de consistência deixaram cinco jeitos diferentes de fazer a mesma chamada de API — refatorar depois custou uma sprint.',
    risks: ['Débito invisível.', 'Estilos e abstrações díspares.', 'Duplicação.', 'Ninguém dono do gerado.'],
    checklist: ['O gerado segue o padrão do projeto?', 'Não há duplicação do que já existe?', 'O código é legível por quem vai manter?', 'Há um dono humano do merge?', 'O débito foi evitado, não adiado?'],
    interview: [['Sênior', 'Por que "passou no CI" não basta para código gerado?', 'CI verifica comportamento, não consistência nem legibilidade; débito de manutenção passa despercebido.'], ['Staff', 'Quem é dono do código que a IA escreveu?', 'Quem aprova o merge; a autoria da IA não transfere a responsabilidade.']],
    exercises: [['Aplicado', 'Refatorar um trecho gerado para o padrão do projeto.', 'Antes/depois com a consistência restaurada.'], ['Sênior', 'Achar duplicação/inconsistência introduzida por gerações sucessivas.', 'Mapa da duplicação e o plano de consolidação.'], ['Staff', 'Definir gates de consistência para código gerado (lint, arquitetura).', 'Regras aplicadas no CI.']],
    challenge: 'Mostrar como três features geradas isoladamente criaram três padrões conflitantes e propor o guardrail que teria evitado.',
    book: 'Convenções e ADRs do projeto; DORA 2025 (plataforma interna de qualidade).',
    complements: [refs.dora, refs.speckit], exampleFile: null
  }),
  moduleOf({
    number: 8, part: 'evals', id: 'evals-golden', title: 'Evals e golden datasets', level: 'Avançado',
    objective: 'Tratar uma feature de IA como software: medir com um golden dataset e uma métrica ligada à tarefa, com pass rate e limiar de aceite.',
    prerequisites: ['Módulos 5–7', 'Testes de regressão', 'Métricas de avaliação'],
    problem: 'Feature de LLM avaliada "no olho" degrada em silêncio; sem golden dataset e métrica, não há como saber se uma mudança melhorou ou piorou.',
    concepts: ['Golden dataset (entrada → esperado)', 'Métrica ligada à tarefa', 'Pass rate e limiar de aceite', 'Eval como teste de regressão'],
    internals: ['O golden dataset fixa casos representativos com a resposta esperada — é o teste de regressão da feature de IA.', 'A métrica precisa refletir a tarefa (exact match, contém, F1, custo, latência), não uma genérica.', 'O eval roda no CI: uma mudança de prompt/modelo que baixa o pass rate abaixo do limiar barra o merge.'],
    useWhen: ['Qualquer feature que usa LLM em produção.', 'Antes de trocar prompt, modelo ou versão.'],
    avoidWhen: ['Não avalie feature de IA por impressão.', 'Não use uma métrica genérica que não reflete a tarefa.'],
    contrast: { bad: 'Testar a feature "no olho" em alguns exemplos e enviar.', good: 'Rodar um golden dataset com métrica da tarefa e gate por pass rate no CI.' },
    tradeoffs: ['Montar o golden dataset custa esforço inicial.', 'Métrica automática é barata mas imperfeita.', 'Cobrir mais casos aumenta confiança e custo.'],
    production: 'Um resumidor foi "melhorado" com um prompt novo; sem eval, ninguém viu que ele passou a cortar números — o golden dataset teria pego no CI.',
    risks: ['Sem golden dataset.', 'Métrica desalinhada da tarefa.', 'Dataset não representativo.', 'Sem gate no CI.'],
    checklist: ['Existe um golden dataset representativo?', 'A métrica reflete a tarefa?', 'Há limiar de aceite (pass rate)?', 'O eval roda no CI?', 'Uma mudança que piora é barrada?'],
    interview: [['Sênior', 'Como você evita que uma feature de LLM regrida em silêncio?', 'Golden dataset + métrica da tarefa rodando como regressão no CI, com gate por pass rate.'], ['Staff', 'O que faz uma métrica de eval ser boa?', 'Refletir a tarefa e o custo do erro; uma métrica genérica passa mudanças que quebram o caso real.']],
    exercises: [['Aplicado', 'Construir um golden dataset e um scorer com pass rate para uma feature de IA.', 'Harness que mede o pass rate.'], ['Sênior', 'Detectar uma regressão trocando o prompt e medindo a queda.', 'Comparação de pass rate entre versões.'], ['Staff', 'Integrar o eval no CI com gate por limiar.', 'Pipeline que barra a regressão.']],
    challenge: 'Montar um eval cujo pass rate global sobe enquanto um slice crítico regride — e mostrar por que só a análise por slice pega.',
    book: 'Prática de evals de LLM; DORA 2025 (qualidade e regressão).',
    complements: [refs.doraReport, refs.owaspLlm], exampleFile: '../../examples/aieng-senior/eval_harness.py'
  }),
  moduleOf({
    number: 9, part: 'evals', id: 'regressao-prompt', title: 'Regressão de prompt e versionamento', level: 'Avançado',
    objective: 'Tratar prompt e modelo como dependências versionadas, detectar regressão por slice e testar a migração antes de trocar em produção.',
    prerequisites: ['Módulo 8', 'Versionamento', 'Análise por slice'],
    problem: 'Trocar o modelo ou "melhorar" o prompt sem versionar nem testar por slice quebra casos específicos que a média esconde.',
    concepts: ['Prompt/modelo como dependência versionada', 'Pin e teste de migração', 'Regressão por slice', 'A média que esconde a regressão'],
    internals: ['Prompt e modelo são dependências: mudá-los sem pin nem teste é como atualizar uma lib em produção sem CI.', 'A métrica global pode subir enquanto um slice (idioma, formato, caso raro) regride — a análise por slice revela.', 'Migrar de modelo exige rodar o eval nas duas versões e comparar por slice antes de trocar.'],
    useWhen: ['Ao trocar de modelo ou revisar um prompt.', 'Quando um provedor atualiza o modelo por baixo.'],
    avoidWhen: ['Não troque prompt/modelo sem eval comparativo.', 'Não confie só na métrica agregada.'],
    contrast: { bad: 'Trocar o modelo porque "o novo é melhor" e enviar.', good: 'Fixar a versão, rodar o eval nas duas por slice e migrar só se nenhum slice crítico regride.' },
    tradeoffs: ['Versionar prompt/modelo adiciona processo.', 'Análise por slice custa mais que a média.', 'Pin protege, mas atrasa upgrades.'],
    production: 'Um upgrade automático de modelo do provedor manteve o score médio e derrubou o desempenho em português; sem eval por slice, foi para produção.',
    risks: ['Prompt/modelo não versionado.', 'Regressão escondida na média.', 'Upgrade silencioso do provedor.', 'Migração sem teste.'],
    checklist: ['Prompt e modelo estão versionados/pinados?', 'O eval roda nas duas versões?', 'A análise é por slice, não só média?', 'A migração foi testada antes de trocar?', 'Upgrades do provedor são detectados?'],
    interview: [['Sênior', 'Por que tratar o prompt como dependência versionada?', 'Porque mudá-lo altera o comportamento como uma lib; sem pin e teste de migração, regride em silêncio.'], ['Staff', 'Como uma feature pode melhorar na média e piorar de fato?', 'A média sobe enquanto um slice crítico regride; só a análise por slice mostra a quebra.']],
    exercises: [['Aplicado', 'Versionar dois prompts e comparar o pass rate por slice.', 'Tabela por slice das duas versões.'], ['Sênior', 'Simular um upgrade de modelo e detectar a regressão de slice.', 'Regressão localizada e a decisão de não migrar.'], ['Staff', 'Definir a política de migração de modelo/prompt com gate por slice.', 'Política e o pipeline que a aplica.']],
    challenge: 'Demonstrar uma troca de modelo que passa no gate global e falha no gate por slice — e defender a decisão de não migrar.',
    book: 'Prática de versionamento de prompt; DORA 2025 (version control como capacidade).',
    complements: [refs.dora, refs.doraReport], exampleFile: '../../examples/aieng-senior/regressao_prompt.py'
  }),
  moduleOf({
    number: 10, part: 'evals', id: 'juiz-llm', title: 'LLM-as-a-judge e suas armadilhas', level: 'Fronteira',
    objective: 'Usar um LLM como avaliador conhecendo seus vieses (posição, verbosidade, auto-preferência) e mitigando-os por swap e média.',
    prerequisites: ['Módulos 8–9', 'Probabilidade', 'Métricas de avaliação'],
    problem: 'LLM-as-a-judge escala a avaliação, mas seus vieses (ordem, verbosidade, preferir a própria resposta) produzem rankings que não refletem qualidade.',
    concepts: ['LLM-as-a-judge', 'Viés de posição (agrava com mais candidatos)', 'Viés de verbosidade e de auto-preferência', 'Mitigação: swap e média, múltiplos juízes'],
    internals: ['O juiz prefere respostas por POSIÇÃO independentemente do conteúdo; o viés se agrava quando há mais candidatos.', 'Auto-preferência: o juiz favorece a própria família de modelo; verbosidade: favorece respostas mais longas.', 'Mitigação padrão: trocar a ordem (swap), calcular nas duas e tirar a média; ou usar múltiplos juízes em deliberação.'],
    useWhen: ['Avaliar saídas abertas onde exact match não serve.', 'Escalar comparação de qualidade além do humano.'],
    avoidWhen: ['Não confie em um único juiz sem correção de posição.', 'Não use o mesmo modelo como juiz e como gerador sem controle de auto-preferência.'],
    contrast: { bad: 'Pedir ao juiz "qual é melhor, A ou B?" uma vez e confiar.', good: 'Avaliar A/B e B/A, tirar a média, e checar verbosidade e auto-preferência.' },
    tradeoffs: ['Juiz LLM escala, mas herda vieses.', 'Swap+média dobra o custo e reduz o viés.', 'Múltiplos juízes custam mais e calibram melhor.'],
    production: 'Um ranking de respostas por LLM-judge sempre elegia a primeira opção; ao trocar a ordem, a "vencedora" invertia — o viés de posição decidia, não a qualidade.',
    risks: ['Confiar em juiz único.', 'Viés de posição não corrigido.', 'Auto-preferência.', 'Verbosidade premiada.'],
    checklist: ['A ordem foi trocada (swap) e a média calculada?', 'O viés de verbosidade foi controlado?', 'Juiz e gerador são famílias diferentes (ou há controle)?', 'O juiz foi calibrado contra rótulos humanos?', 'O custo do juiz é aceitável?'],
    interview: [['Sênior', 'Quais vieses um LLM-judge tem e como mitigá-los?', 'Posição, verbosidade e auto-preferência; mitiga-se com swap+média, controle de tamanho e múltiplos juízes.'], ['Staff', 'Como o viés de posição se comporta com mais candidatos?', 'Ele se intensifica; quanto mais opções, mais a posição decide — a randomização/ swap fica essencial.']],
    exercises: [['Aplicado', 'Simular um juiz com viés de posição e medir o viés.', 'Métrica de viés antes da mitigação.'], ['Sênior', 'Aplicar swap+média e mostrar a queda do viés.', 'Métrica antes/depois.'], ['Staff', 'Calibrar um LLM-judge contra rótulos humanos.', 'Concordância medida e limite de uso.']],
    challenge: 'Construir um caso em que o LLM-judge inverte a decisão só pela ordem, e mostrar que swap+média a estabiliza.',
    book: 'Position Bias in LLM-as-a-Judge (ACL 2025); trilha de IA (LLM-as-a-judge).',
    complements: [refs.judgeBias, refs.owaspLlm], exampleFile: '../../examples/aieng-senior/juiz_llm.py'
  }),
  moduleOf({
    number: 11, part: 'fronteira', id: 'deps-alucinadas', title: 'Segurança do código gerado: dependências alucinadas', level: 'Fronteira',
    objective: 'Verificar o código gerado contra dependências inexistentes (slopsquatting) e riscos de supply chain e licença antes de instalar qualquer coisa.',
    prerequisites: ['Módulos 5, 8', 'Gestão de dependências', 'Noção de supply chain'],
    problem: 'LLMs alucinam nomes de pacotes (~20% dos casos); atacantes registram esses nomes (slopsquatting) e quem copia código gerado instala malware.',
    concepts: ['Alucinação de dependência', 'Slopsquatting', 'Verificação contra o registro', 'Licença e proveniência do que a IA sugere'],
    internals: ['Modelos sugerem pacotes inexistentes de forma repetível; o atacante registra o nome que a IA "ensinou" o dev a digitar.', 'Exemplo real: um pacote alucinado (huggingface-cli) subiu vazio e teve dezenas de milhares de downloads.', 'A defesa é verificar toda dependência sugerida contra o registro e a política antes de instalar — nunca confiar no nome.'],
    useWhen: ['Ao aceitar qualquer import/dependência sugerido por IA.', 'Em revisão de código gerado que adiciona pacotes.'],
    avoidWhen: ['Não instale um pacote só porque a IA o citou.', 'Não confie no nome sem checar existência, downloads e proveniência.'],
    contrast: { bad: 'Copiar o código gerado e rodar `pip install` no pacote que ele importou.', good: 'Verificar cada dependência contra o registro, a idade, os downloads e a licença antes de instalar.' },
    tradeoffs: ['Verificar deps adiciona um passo; evita comprometer o supply chain.', 'Allowlist é seguro mas restringe.', 'Confiar no nome é rápido e perigoso.'],
    production: 'Um dev colou código gerado que importava um pacote inexistente; o nome havia sido registrado por um atacante dias antes — o `install` trouxe um payload malicioso.',
    risks: ['Instalar pacote alucinado/slopsquat.', 'Ignorar licença.', 'Sem verificação de proveniência.', 'Confiar no nome.'],
    checklist: ['Toda dependência sugerida existe no registro oficial?', 'A idade e os downloads são plausíveis?', 'A licença é compatível?', 'A proveniência foi checada?', 'Há allowlist/verificação no CI?'],
    interview: [['Sênior', 'O que é slopsquatting?', 'Registrar pacotes com nomes que os LLMs alucinam, para que devs que copiam código gerado instalem malware.'], ['Staff', 'Como proteger o supply chain de dependências sugeridas por IA?', 'Verificar cada dep contra o registro (existência, idade, downloads, licença) e barrar no CI; nunca confiar no nome.']],
    exercises: [['Aplicado', 'Implementar um verificador de dependências contra uma allowlist do registro.', 'Detector que sinaliza pacotes inexistentes/suspeitos.'], ['Sênior', 'Adicionar heurística de distância de edição para pegar typos/slopsquat.', 'Flag de nomes próximos a pacotes reais.'], ['Staff', 'Integrar a verificação de deps no CI para código gerado.', 'Gate que barra dependência não verificada.']],
    challenge: 'Demonstrar um pacote alucinado por um modelo e o controle (verificação contra registro) que impede sua instalação automática.',
    book: 'Snyk — Slopsquatting: mitigation strategies; OWASP LLM Top 10 (supply chain).',
    complements: [refs.slopsquat, refs.owaspLlm], exampleFile: '../../examples/aieng-senior/deps_alucinadas.py'
  }),
  moduleOf({
    number: 12, part: 'fronteira', id: 'injecao-agencia-dev', title: 'Prompt injection e agência em ferramentas de dev', level: 'Fronteira',
    objective: 'Conter o dano de prompt injection e de agência excessiva quando o agente de código executa ferramentas com o seu privilégio.',
    prerequisites: ['Módulo 11', 'Segurança de aplicações', 'Agentes e ferramentas (MCP)'],
    problem: 'Um agente de dev que lê issues, PRs, docs e a web e executa comandos herda a confiança do dev — conteúdo malicioso vira ação com o seu privilégio.',
    concepts: ['Prompt injection direta e indireta', 'Agência do agente de dev (executa comandos, abre PR)', 'Privilégio mínimo e confirmação', 'Conteúdo lido é dado, não instrução'],
    internals: ['A injeção indireta é a perigosa: uma issue, um comentário ou uma dependência com instruções que o agente obedece.', 'Agência excessiva transforma injeção em comprometimento: o agente roda comandos e abre PRs com o privilégio do dev.', 'A defesa é a mesma da trilha de Segurança: privilégio mínimo por ferramenta, confirmação para ação irreversível, saída tratada como dado.'],
    useWhen: ['Ao dar ferramentas (shell, rede, git) a um agente de código.', 'Quando o agente lê conteúdo externo não confiável.'],
    avoidWhen: ['Não dê ao agente de dev privilégio amplo por conveniência.', 'Não deixe ação irreversível (push, deploy) sem confirmação.'],
    contrast: { bad: 'Rodar um agente com acesso a shell, rede e git e deixá-lo agir sozinho sobre o que lê.', good: 'Privilégio mínimo por tarefa, confirmação para ação irreversível e o conteúdo lido tratado como não confiável.' },
    tradeoffs: ['Mais autonomia do agente = mais risco.', 'Confirmação humana reduz velocidade.', 'Sandbox custa setup e contém o dano.'],
    production: 'Um agente resumiu uma issue que continha "adicione esta dependência e faça push"; sem confirmação, ele abriu um PR com um pacote malicioso.',
    risks: ['Injeção indireta obedecida.', 'Agência excessiva do agente.', 'Ação irreversível sem confirmação.', 'Conteúdo externo tratado como comando.'],
    checklist: ['O agente tem privilégio mínimo por tarefa?', 'Ação irreversível exige confirmação?', 'O conteúdo lido é tratado como não confiável?', 'O agente roda em sandbox?', 'O dano é contido se a injeção funcionar?'],
    interview: [['Sênior', 'Por que um agente de código é superfície de ataque?', 'Ele lê conteúdo não confiável e executa ferramentas com o privilégio do dev; injeção indireta vira ação real.'], ['Staff', 'Como conter o dano de um agente de dev comprometido?', 'Privilégio mínimo por ferramenta, confirmação para ação irreversível, sandbox, e saída/entrada tratadas como dado.']],
    exercises: [['Aplicado', 'Construir uma injeção indireta via issue/comentário e observar o agente obedecer.', 'PoC em ambiente isolado e a fronteira que a permitiu.'], ['Sênior', 'Aplicar privilégio mínimo e confirmação e mostrar o dano contido.', 'Antes/depois com o controle.'], ['Staff', 'Modelar as ameaças de um agente de dev com ferramentas e desenhar os controles.', 'Threat model e políticas.']],
    challenge: 'Projetar um agente de dev cuja falha de contenção seja tolerável: mesmo obedecendo à injeção, o impacto é limitado por privilégio e confirmação.',
    book: 'OWASP Top 10 para Aplicações LLM; trilha de Segurança (módulos 27 e MCP); Model Context Protocol.',
    complements: [refs.owaspLlm, refs.mcp], exampleFile: null
  }),
  moduleOf({
    number: 13, part: 'fronteira', id: 'dora-ai-model', title: 'DORA AI Capabilities Model', level: 'Fronteira',
    objective: 'Ligar o benefício da IA às capacidades organizacionais que o amplificam, usando o modelo de 2025 da DORA para diagnosticar onde investir.',
    prerequisites: ['Módulo 1', 'Métricas DORA', 'Visão de time/organização'],
    problem: 'Adotar ferramentas de IA sem as capacidades que as amplificam entrega pouco — ou amplifica a disfunção; o gargalo é organizacional, não a ferramenta.',
    concepts: ['DORA AI Capabilities Model (2025)', 'As sete capacidades que amplificam a IA', 'IA como espelho da capacidade existente', 'Diagnóstico e priorização'],
    internals: ['O modelo lista sete capacidades que amplificam o benefício da IA: política de IA clara, ecossistema de dados saudável, dados internos acessíveis à IA, versionamento forte, trabalho em lotes pequenos, foco no usuário e uma plataforma interna de qualidade.', 'A IA é um espelho: revela e amplifica a capacidade (ou a disfunção) que já existe.', 'Investir na capacidade que falta rende mais que trocar de ferramenta de IA.'],
    useWhen: ['Ao planejar adoção de IA em um time/organização.', 'Ao diagnosticar por que a IA "não está rendendo".'],
    avoidWhen: ['Não trate adoção de IA como compra de ferramenta.', 'Não escale IA sobre uma base sem versionamento nem plataforma.'],
    contrast: { bad: 'Comprar licenças de IA e esperar ganho de produtividade.', good: 'Diagnosticar as sete capacidades, investir na que falta, e então a IA amplifica.' },
    tradeoffs: ['Construir capacidade é lento; é o que faz a IA render.', 'Ferramenta é rápida de comprar e insuficiente sozinha.', 'Cada capacidade tem custo próprio de implementação.'],
    production: 'Duas equipes adotam o mesmo assistente de IA; a que tinha versionamento forte e plataforma interna ganha, a outra amplifica o próprio caos e piora a estabilidade.',
    risks: ['Comprar ferramenta, ignorar capacidade.', 'Escalar sobre base frágil.', 'Sem política de IA.', 'Dados internos inacessíveis.'],
    checklist: ['Existe uma política de IA clara?', 'O versionamento e os testes são fortes?', 'O trabalho é em lotes pequenos?', 'Há uma plataforma interna de qualidade?', 'Os dados internos são acessíveis e saudáveis?'],
    interview: [['Sênior', 'Por que a mesma ferramenta de IA ajuda um time e piora outro?', 'A IA amplifica a capacidade existente; sem as capacidades da DORA (versionamento, plataforma, small batches) ela amplifica a disfunção.'], ['Staff', 'Onde investir para a IA render mais?', 'Na capacidade organizacional que falta (das sete do modelo DORA), não em trocar de ferramenta.']],
    exercises: [['Aplicado', 'Diagnosticar o time nas sete capacidades do modelo DORA.', 'Mapa de maturidade com evidência.'], ['Sênior', 'Priorizar a capacidade de maior alavancagem e justificar.', 'Plano com a capacidade escolhida e o impacto esperado.'], ['Staff', 'Ligar uma melhoria de capacidade a uma métrica DORA medida.', 'Antes/depois de throughput e estabilidade.']],
    challenge: 'Defender, para a liderança, investir numa capacidade organizacional em vez de comprar mais ferramentas de IA — com o modelo DORA como base.',
    book: 'DORA — AI Capabilities Model (2025); DORA — State of AI-assisted Software Development 2025.',
    complements: [refs.dora, refs.doraReport], exampleFile: null
  }),
  moduleOf({
    number: 14, part: 'fronteira', id: 'lideranca-adocao', title: 'Liderança e adoção sem dependência cega', level: 'Fronteira',
    objective: 'Conduzir a adoção de IA que aumente a capacidade do time sem criar dependência cega, medindo impacto real e definindo política de uso.',
    prerequisites: ['Módulos 1–13', 'Liderança técnica', 'Métricas e política'],
    problem: 'Adoção sem política vira dependência cega ou proibição por medo; e o sênior que revisa tudo vira o novo gargalo — a IA muda a forma do trabalho, não só a velocidade.',
    concepts: ['Política de uso de IA', 'Medir impacto real (não percepção)', 'A armadilha do sênior-revisor-de-tudo', 'Quando a IA piora o time'],
    internals: ['Política clara (o que é permitido, o que exige revisão, dados sensíveis) é a primeira das capacidades DORA — sem ela, cada um improvisa.', 'A IA desloca o trabalho do sênior para revisão e especificação; sem redesenhar o fluxo, o sênior vira gargalo.', 'Medir impacto por throughput E estabilidade E capacidade — não por percepção nem por volume de código.'],
    useWhen: ['Ao introduzir IA num time ou organização.', 'Ao redesenhar o papel do sênior no fluxo com agentes.'],
    avoidWhen: ['Não adote sem política nem proíba por medo.', 'Não meça sucesso por percepção ou por linhas geradas.'],
    contrast: { bad: 'Liberar IA sem regra ou proibir por medo, e medir por "sensação de produtividade".', good: 'Definir política, redesenhar o fluxo (spec + revisão), e medir throughput, estabilidade e capacidade.' },
    tradeoffs: ['Política dá clareza e adiciona processo.', 'Redesenhar o fluxo custa, mas evita o gargalo do sênior.', 'Medir bem é mais difícil que medir volume.'],
    production: 'Um time liberou IA sem política; juniores passaram a mesclar código que não entendiam e os seniores viraram revisores em tempo integral — a entrega caiu.',
    risks: ['Dependência cega.', 'Proibição por medo.', 'Sênior vira gargalo.', 'Medir por percepção.'],
    checklist: ['Há política de uso (permitido, revisão, dados sensíveis)?', 'O fluxo foi redesenhado (spec + revisão)?', 'O impacto é medido por throughput E estabilidade?', 'A dependência é supervisionada, não cega?', 'O papel do sênior foi repensado?'],
    interview: [['Staff', 'Como adotar IA sem criar dependência cega?', 'Política clara, fluxo redesenhado em torno de spec e revisão, e medição de impacto real (throughput + estabilidade).'], ['Liderança técnica', 'Por que o sênior pode virar o gargalo com IA?', 'A IA desloca o trabalho para revisão e spec; sem redesenhar o fluxo, o sênior revisa tudo e trava a entrega.']],
    exercises: [['Aplicado', 'Escrever uma política de uso de IA para um time.', 'Política com permitido, revisão obrigatória e dados sensíveis.'], ['Sênior', 'Redesenhar o fluxo do time em torno de spec + revisão + eval.', 'Fluxo documentado e o papel de cada um.'], ['Liderança técnica', 'Definir as métricas de impacto real da adoção e medir por um mês.', 'Painel com throughput, estabilidade e capacidade.']],
    challenge: 'Apresentar um plano de adoção de IA que aumente a capacidade do time e, com dados, mostre onde a IA seria desligada por piorar o resultado.',
    book: 'DORA — AI Capabilities Model (política de IA como capacidade); DORA 2025.',
    complements: [refs.dora, refs.doraReport], exampleFile: null
  })
]);

// Exemplos executáveis por módulo sênior (níveis 1–4), atribuídos por número.
const EXEMPLOS_AIENG = {
  1: 'amplificador-dora.mjs', 2: 'prompt-contexto.mjs', 3: 'loop-agente.mjs',
  5: 'revisao-por-risco.mjs', 6: 'teste-oraculo.mjs', 7: 'debito-codigo-gerado.mjs',
  12: 'prompt-injection.mjs', 13: 'dora-capabilities.mjs', 14: 'adocao-sem-dependencia.mjs'
};
export const aiengModules = aiengModulesRaw.map((m) =>
  EXEMPLOS_AIENG[m.number] ? { ...m, exampleFile: `../../examples/aieng-senior/${EXEMPLOS_AIENG[m.number]}` } : m
);

export const aiengAssessment = Object.freeze({
  levels: [
    { level: 'Fundação', expected: 'Usa IA com contexto e verifica a saída em vez de aceitar.', evidence: 'Prompt com contexto/restrições e o diff revisado.', redFlags: 'Aceita o primeiro resultado; mede por velocidade percebida.' },
    { level: 'Pleno', expected: 'Fluxo com agentes sem dependência cega; passos pequenos e verificados.', evidence: 'Loop dirigir→gerar→verificar em uma tarefa real.', redFlags: 'Mescla diff que não consegue explicar.' },
    { level: 'Sênior', expected: 'Especifica antes, revisa por intenção e mede a feature de IA com eval.', evidence: 'Spec executável, revisão por risco e golden dataset.', redFlags: 'Deixa a IA escrever código e o próprio oráculo; avalia no olho.' },
    { level: 'Staff', expected: 'Trata prompt/modelo como dependência, mitiga viés de juiz e protege o supply chain.', evidence: 'Regressão por slice, swap+média no juiz e verificação de deps.', redFlags: 'Troca de modelo sem eval; instala pacote sugerido sem checar.' },
    { level: 'Liderança técnica', expected: 'Conduz adoção por capacidade (DORA) e mede impacto real.', evidence: 'Política de uso, fluxo redesenhado e métricas de throughput e estabilidade.', redFlags: 'Compra ferramenta e espera ganho; mede por percepção.' }
  ],
  caseStudies: [
    {
      id: 'caso-amplificador', title: 'Mais PRs, menos estabilidade',
      scenario: 'Uma equipe dobra os PRs com IA, mas o tempo de recuperação de falha piora.',
      constraints: ['Pressão por velocidade', 'Base sem testes fortes', 'Métricas DORA acompanhadas'],
      decisions: ['Medir throughput E estabilidade', 'Investir na capacidade que falta', 'Segurar a velocidade até a base sustentar'],
      deliverables: ['Diagnóstico DORA', 'Plano de capacidade', 'Métricas antes/depois']
    },
    {
      id: 'caso-regressao', title: 'Upgrade de modelo regride em português',
      scenario: 'O provedor atualiza o modelo; o score médio mantém, mas o desempenho em português cai.',
      constraints: ['Upgrade silencioso', 'Feature multi-idioma', 'Sem pin de versão'],
      decisions: ['Versionar/pinar o modelo', 'Rodar eval por slice', 'Barrar a migração no gate'],
      deliverables: ['Golden dataset por slice', 'Regressão localizada', 'Política de migração']
    },
    {
      id: 'caso-slopsquat', title: 'Pacote alucinado quase entra em produção',
      scenario: 'Código gerado importa um pacote inexistente; o nome foi registrado por um atacante dias antes.',
      constraints: ['Pressão para entregar', 'Dev confia no nome', 'Sem verificação de deps'],
      decisions: ['Verificar a dep contra o registro', 'Adicionar gate de deps no CI', 'Revisar a proveniência'],
      deliverables: ['Verificador de dependências', 'Gate no CI', 'Runbook de supply chain']
    },
    {
      id: 'caso-juiz', title: 'Ranking decidido pela ordem, não pela qualidade',
      scenario: 'Um LLM-judge sempre elege a primeira resposta; ao trocar a ordem, a vencedora inverte.',
      constraints: ['Avaliação de saída aberta', 'Muitos candidatos', 'Custo do juiz importa'],
      decisions: ['Aplicar swap e média', 'Controlar verbosidade e auto-preferência', 'Calibrar contra rótulo humano'],
      deliverables: ['Métrica de viés antes/depois', 'Pipeline de juiz calibrado', 'Limite de uso documentado']
    },
    {
      id: 'caso-gargalo', title: 'O sênior virou revisor em tempo integral',
      scenario: 'Um time libera IA sem política; juniores mesclam o que não entendem e os seniores revisam tudo.',
      constraints: ['Sem política de uso', 'Fluxo não redesenhado', 'Entrega caiu apesar de "mais código"'],
      decisions: ['Definir política de uso', 'Redesenhar o fluxo em torno de spec e revisão', 'Medir impacto real'],
      deliverables: ['Política de IA', 'Fluxo redesenhado', 'Métricas de throughput e estabilidade']
    }
  ],
  projects: [
    {
      id: 'fluxo-verificavel', title: 'Fluxo assistido por IA verificável',
      objective: 'Executar uma feature real por agente mantendo cada diff explicável e testado, do contexto à verificação.',
      evolves: null,
      stages: ['Montar o contexto do repo', 'Executar em passos pequenos com verificação', 'Registrar o loop dirigir→gerar→verificar'],
      acceptance: ['Cada diff é explicável', 'Cada passo foi verificado', 'Nenhuma decisão de design foi delegada às cegas'],
      seniorSignal: 'Sabe onde dirigir e onde delegar, e prova a verificação.'
    },
    {
      id: 'feature-ia-avaliada', title: 'Feature de IA com eval e regressão',
      objective: 'Evoluir para uma feature que usa LLM, com spec, golden dataset, gate por pass rate e regressão por slice.',
      evolves: 'fluxo-verificavel',
      stages: ['Escrever a spec e o golden dataset', 'Implementar contra a spec', 'Integrar eval e regressão no CI'],
      acceptance: ['Spec executável como contrato', 'Eval com gate por pass rate', 'Regressão por slice detectada'],
      seniorSignal: 'Trata a feature de IA como software: com testes, versão e regressão.'
    },
    {
      id: 'adocao-governada', title: 'Adoção governada e medida',
      objective: 'Definir política de uso, proteger o supply chain e medir o impacto real da IA no time.',
      evolves: 'feature-ia-avaliada',
      stages: ['Escrever a política de uso', 'Adicionar verificação de deps e controles de agente', 'Medir throughput e estabilidade por um período'],
      acceptance: ['Política clara e aplicada', 'Supply chain verificado no CI', 'Impacto medido por métrica, não percepção'],
      seniorSignal: 'Conduz a adoção por capacidade e mostra, com dados, quando desligar a IA.'
    }
  ],
  completion: [
    'Concluir os 14 módulos com ao menos um exercício aplicado e uma URL de evidência por módulo.',
    'Explicar amplificação, spec, revisão, eval, juiz, supply chain e adoção sem depender de notas.',
    'Executar uma feature por agente mantendo cada diff explicável e verificado.',
    'Entregar uma feature de IA com spec executável, golden dataset e regressão por slice no CI.',
    'Mitigar o viés de um LLM-judge e verificar dependências geradas contra o registro.',
    'Definir uma política de uso de IA e medir o impacto por throughput e estabilidade.',
    'Manter evidência reproduzível e concluir revisão D30 antes de marcar qualquer tópico como Dominado.'
  ]
});

export const aiengAnswerKey = aiengModules.map((module) => ({
  module: module.number,
  title: module.title,
  objetivoAtingido: module.objective,
  respostaEsperadaNaEntrevista: (module.interview || []).map((item) => `${item.level}: ${item.expected}`),
  erroMaisComum: module.contrast?.bad || module.risks?.[0] || 'Aceitar a saída da IA sem contexto, verificação nem medição.',
  criterioDeAceite: (module.exercises || []).map((item) => `${item.level} — evidência: ${item.evidence}`),
  sinalDeQueNaoDominou: module.risks || []
}));
