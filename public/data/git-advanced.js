/*
 * ACADEMIA DE GIT — versionamento, colaboração, plataformas e governança.
 *
 * Objetivo da trilha: levar do fluxo diário aos internals (a ponto de explicar
 * como implementar o próprio Git) e à governança sênior de repositórios. Cada
 * módulo é ancorado nos livros do acervo local (public/pdfs/livros-git) e exige
 * evidência reproduzível em repositório, nunca só leitura.
 *
 * Estrutura conforme PADRAO-TRILHAS-ACADEMIA.md (§8): schema pela fábrica
 * compartilhada; conteúdo, referências e bibliografia específicos da trilha.
 * Os campos auxiliares (useWhen, avoidWhen, tradeoffs, production, risks,
 * checklist, prerequisites, summary) são AUTORAIS por módulo — não caem no
 * texto genérico da fábrica.
 */

import { createAcademyData } from './academy-data-factory.js';

const data = createAcademyData({
  title: 'Git, Versionamento e Plataformas',
  baseline: 'Git instalado, repositório remoto, revisão por pull request e automação versionada.',
  projectNoun: 'repositório de produto',
  partSpecs: [
    {
      id: 'fundamentos',
      title: 'Fundamentos e histórico seguro',
      subtitle: 'Modelo de objetos, estados, commits atômicos, recuperação e internals.',
      objectives: [
        'Explicar o modelo de dados do Git e prever o efeito de cada comando.',
        'Produzir commits atômicos e recuperar trabalho sem perda.',
        'Inspecionar objetos, refs e packfiles com comandos plumbing.'
      ]
    },
    {
      id: 'colaboracao',
      title: 'Colaboração e revisão',
      subtitle: 'Estratégias de branch, merge, rebase, conflitos e pull requests revisáveis.',
      objectives: [
        'Escolher uma estratégia de branches pela cadência do time.',
        'Aplicar merge, rebase e cherry-pick pela intenção de histórico.',
        'Conduzir pull requests e code review que reduzam defeitos.'
      ]
    },
    {
      id: 'plataformas',
      title: 'Plataformas e automação',
      subtitle: 'GitHub, GitLab, Bitbucket, Azure Repos, CI/CD, segurança e diagnóstico.',
      objectives: [
        'Comparar plataformas por CI/CD, segurança e governança.',
        'Automatizar qualidade com hooks e pipelines que bloqueiem regressões.',
        'Proteger segredos e diagnosticar defeitos pelo histórico.'
      ]
    },
    {
      id: 'governanca',
      title: 'Governança e arquitetura',
      subtitle: 'Proteções, monorepo vs multirepo, contratos versionados e GitOps.',
      objectives: [
        'Definir governança que escale sem virar gargalo.',
        'Escolher a topologia de repositórios pelos trade-offs reais.',
        'Versionar contratos e operar GitOps auditável.'
      ]
    },
    {
      id: 'fronteira',
      title: 'Fronteira: implementar o Git e a próxima geração',
      subtitle: 'Object store, trees e commits, merge de três vias, packfiles e delta, integridade SHA-256 e Git em escala do zero.',
      objectives: [
        'Reconstruir o object store, trees e commits do zero, batendo os hashes do git real.',
        'Implementar o merge de três vias e a compressão delta que sustentam o dia a dia.',
        'Explicar integridade, a transição SHA-1→SHA-256 e escalar o Git a monorepos.'
      ]
    }
  ],
  moduleSpecs: [
    // ── Parte 1 · Fundamentos e histórico seguro ──
    {
      part: 'fundamentos', level: 'Fundamentos',
      title: 'Explicar o modelo de dados do Git (objetos e DAG)',
      objective: 'Explicar o modelo de dados do Git — blobs, trees, commits e refs formando um DAG imutável — e usá-lo para prever o efeito de qualquer comando.',
      problem: 'Comandos de Git viram decoreba e causam pânico quando o modelo de objetos e o grafo de commits não são entendidos.',
      concepts: ['Objetos: blob, tree, commit e tag', 'DAG de commits', 'Refs e HEAD', 'Conteúdo endereçável por hash'],
      internals: ['Cada objeto é endereçado pelo SHA do próprio conteúdo; um commit aponta para uma tree e para pais, formando um DAG imutável.', 'Branches e tags são apenas ponteiros (refs) para commits; mover um branch não altera o histórico.'],
      prerequisites: ['Git instalado e um repositório com histórico para inspecionar.', 'Noção de hash e de grafo.'],
      useWhen: ['Use sempre que um comando de Git parecer imprevisível — o modelo de objetos explica o efeito.', 'Priorize antes de operações que reescrevem histórico (rebase, reset).'],
      avoidWhen: ['Não decore comandos sem entender o DAG — a decoreba quebra no primeiro caso fora do script.', 'Não trate branch como cópia de arquivos.'],
      tradeoffs: { ganho: 'Prever o efeito de qualquer comando a partir do modelo, sem decoreba.', custo: 'Exige investir em entender objetos e refs antes de "só usar".' },
      production: 'A evidência é o DAG de um repositório real desenhado a partir de git log --graph, com o papel de cada ref explicado.',
      risks: ['Tratar branch como cópia e temer "perder arquivos" ao trocar de branch.', 'Confundir mover um ponteiro com alterar o histórico.'],
      checklist: ['Identificar blobs, trees e commits em um repositório real.', 'Mapear as refs (branches, tags, HEAD).', 'Explicar por que o DAG é imutável.', 'Prever o efeito de um comando antes de rodá-lo.'],
      summary: 'O Git é um DAG imutável de objetos endereçados por hash; branches e tags são só ponteiros.',
      books: ['proGit', 'buildingGit'],
      exercises: [{ level: 'Fundamentos', title: 'Mapear o grafo de um repositório', task: 'Desenhar o DAG de um repositório real a partir de git log --graph e explicar o papel de cada ref.', acceptance: 'O diagrama identifica commits, trees e refs corretamente.', evidence: 'Notebook/PDF versionado com o diagrama e a explicação.' }],
      interview: [{ level: 'Fundamentos', question: 'O que é um branch no Git, internamente?', expected: 'Apenas um ponteiro móvel (ref) para um commit, não uma cópia de arquivos.' }]
    },
    {
      part: 'fundamentos', level: 'Fundamentos',
      title: 'Operar os três estados e a área de staging',
      objective: 'Operar working directory, index e repositório, controlando com precisão o que entra em cada commit.',
      problem: 'Commits ficam ruidosos e difíceis de reverter quando a diferença entre working tree, index e HEAD não é dominada.',
      concepts: ['Working directory, index e HEAD', 'git add -p e staging parcial', 'diff staged vs unstaged', 'git stash'],
      internals: ['O index (staging) é um arquivo binário que fotografa o próximo commit; add -p permite montar commits por trecho.', 'git stash guarda working tree e index como commits temporários fora do branch.'],
      prerequisites: ['Entender o modelo de objetos (módulo anterior).', 'Um repositório com mudanças locais para praticar.'],
      useWhen: ['Use ao montar commits limpos a partir de um working tree bagunçado.', 'Priorize quando várias mudanças não relacionadas se misturam.'],
      avoidWhen: ['Não use git add . cegamente quando o working tree tem mudanças de assuntos diferentes.', 'Não commite sem revisar o que está staged.'],
      tradeoffs: { ganho: 'Controle preciso do que entra em cada commit, viabilizando histórico limpo.', custo: 'Staging parcial (add -p) exige atenção trecho a trecho.' },
      production: 'A evidência são dois commits coerentes separados de uma mudança misturada via git add -p, cada um passando em teste.',
      risks: ['Commits ruidosos que misturam assuntos e dificultam revert e bisect.', 'Perder mudanças por não entender o que o stash guarda.'],
      checklist: ['Distinguir working tree, index e HEAD.', 'Usar git add -p para stagear por trecho.', 'Conferir diff staged vs unstaged antes de commitar.', 'Usar git stash para guardar trabalho em progresso.'],
      summary: 'O index fotografa o próximo commit; dominar o staging parcial é o que permite commits atômicos.',
      books: ['proGit'],
      exercises: [{ level: 'Fundamentos', title: 'Montar commits por trecho', task: 'Usar git add -p para separar duas mudanças misturadas em dois commits coerentes.', acceptance: 'Cada commit contém só a mudança relacionada e passa em teste.', evidence: 'Links para os dois commits.' }],
      interview: [{ level: 'Fundamentos', question: 'Qual a diferença entre working tree, index e HEAD?', expected: 'Mudanças locais, o que será commitado e o último commit — respectivamente.' }]
    },
    {
      part: 'fundamentos', level: 'Aplicação',
      title: 'Produzir commits atômicos e mensagens legíveis',
      objective: 'Produzir commits atômicos com mensagens que expliquem a intenção, seguindo uma convenção revisável e assinada.',
      problem: 'O histórico vira lixo não navegável quando commits misturam mudanças e as mensagens não dizem o porquê.',
      concepts: ['Commit atômico', 'Mensagem: assunto, corpo e porquê', 'Conventional Commits', 'Commits assinados (GPG/SSH)'],
      internals: ['Um commit atômico permite revert e bisect precisos; a mensagem é a única documentação que sobrevive ao tempo.', 'Trailers e assinatura tornam autoria e rastreabilidade auditáveis.'],
      prerequisites: ['Dominar a área de staging (módulo anterior).', 'Configurar assinatura (GPG/SSH) se o time exigir.'],
      useWhen: ['Use em todo commit destinado a um histórico compartilhado e duradouro.', 'Priorize quando o histórico precisa ser navegável por bisect e revert.'],
      avoidWhen: ['Não misture mudanças de assuntos diferentes num só commit.', 'Não escreva mensagem que só repete o diff em vez do porquê.'],
      tradeoffs: { ganho: 'Histórico navegável com revert e bisect precisos e documentação que sobrevive.', custo: 'Exige disciplina de dividir o trabalho e articular a intenção.' },
      production: 'A evidência é um histórico ruidoso reorganizado em commits atômicos com boas mensagens via rebase interativo (antes/depois).',
      risks: ['Commit que mistura mudanças e impede revert/bisect limpos.', 'Mensagem que descreve o quê (já no diff) e não o porquê.'],
      checklist: ['Manter cada commit atômico (uma mudança coerente).', 'Escrever assunto e corpo explicando a intenção.', 'Seguir a convenção do time (ex.: Conventional Commits).', 'Assinar os commits quando exigido.'],
      summary: 'Um commit atômico com mensagem que explica o porquê é a única documentação que sobrevive ao tempo.',
      books: ['proGit', 'gitForTeams'],
      exercises: [{ level: 'Aplicação', title: 'Reescrever um histórico ruidoso', task: 'Reorganizar uma sequência de commits confusos em commits atômicos com boas mensagens via rebase interativo.', acceptance: 'Cada commit é atômico e a mensagem explica a intenção.', evidence: 'Antes/depois do histórico.' }],
      interview: [{ level: 'Aplicação', question: 'O que torna uma mensagem de commit útil seis meses depois?', expected: 'Explicar a intenção e o porquê, não só o quê, com contexto rastreável.' }]
    },
    {
      part: 'fundamentos', level: 'Aplicação',
      title: 'Recuperar trabalho com reset, restore, revert e reflog',
      objective: 'Recuperar trabalho e desfazer mudanças com reset, restore, revert e reflog, escolhendo o comando pelo efeito no histórico.',
      problem: 'Pânico e perda real de trabalho acontecem quando reset --hard e rebase são usados sem entender reflog e a diferença entre desfazer público e privado.',
      concepts: ['reset soft/mixed/hard', 'restore e checkout', 'revert (desfazer público)', 'reflog'],
      internals: ['O reflog registra todo movimento de HEAD por cerca de 90 dias; quase nada é realmente perdido enquanto o objeto existir.', 'revert cria um commit inverso (seguro em histórico público); reset reescreve refs (só em histórico privado).'],
      prerequisites: ['Entender working tree, index e HEAD.', 'Saber que existe o reflog.'],
      useWhen: ['Use ao desfazer mudanças ou resgatar trabalho aparentemente perdido.', 'Priorize antes de rodar reset --hard ou rebase em algo importante.'],
      avoidWhen: ['Não use reset em histórico já publicado — use revert.', 'Não entre em pânico após um reset destrutivo antes de checar o reflog.'],
      tradeoffs: { ganho: 'Desfaz com segurança escolhendo o comando pelo efeito no histórico.', custo: 'Exige entender a diferença entre desfazer público (revert) e privado (reset).' },
      production: 'A evidência é o resgate de um commit "perdido" após um reset --hard, recuperado via reflog e documentado.',
      risks: ['Perder trabalho por usar reset --hard sem conhecer o reflog.', 'Reescrever histórico público e quebrar o dos colegas.'],
      checklist: ['Escolher reset soft/mixed/hard pelo efeito desejado.', 'Usar revert para desfazer em histórico público.', 'Consultar o reflog para resgatar um HEAD anterior.', 'Documentar o procedimento de recuperação.'],
      summary: 'O reflog guarda quase tudo por ~90 dias; revert é para o público, reset para o privado.',
      books: ['proGit'],
      exercises: [{ level: 'Aplicação', title: 'Resgatar um commit "perdido"', task: 'Simular um reset --hard destrutivo e recuperar o commit via reflog.', acceptance: 'O trabalho é restaurado e o procedimento documentado.', evidence: 'Registro do reflog e do resgate.' }],
      interview: [{ level: 'Aplicação', question: 'Quando usar revert em vez de reset?', expected: 'revert em histórico já compartilhado; reset apenas em commits locais não publicados.' }]
    },
    {
      part: 'fundamentos', level: 'Produção',
      title: 'Explorar os internals: blobs, trees, refs e packfiles',
      objective: 'Explorar os internals do Git com comandos plumbing (cat-file, hash-object, update-ref) e explicar como packfiles e a compressão delta armazenam o histórico.',
      problem: 'Decisões sobre performance, corrupção e migração de repositório ficam impossíveis sem entender objetos, refs e packfiles.',
      concepts: ['Plumbing vs porcelain', 'Object store e loose objects', 'Packfiles e compressão delta', 'gc e manutenção'],
      internals: ['hash-object e cat-file expõem o armazenamento endereçável por conteúdo; update-ref manipula refs diretamente.', 'git gc empacota objetos soltos em packfiles com deltas, reduzindo tamanho e acelerando a rede — o mesmo mecanismo que Building Git reconstrói do zero.'],
      prerequisites: ['Dominar o modelo de objetos e o DAG.', 'Conforto com a linha de comando.'],
      useWhen: ['Use ao decidir sobre performance, corrupção ou migração de repositório.', 'Priorize ao diagnosticar tamanho de repositório ou objetos soltos demais.'],
      avoidWhen: ['Não recorra a plumbing para o fluxo diário — porcelain basta.', 'Não rode gc agressivo sem entender o efeito.'],
      tradeoffs: { ganho: 'Enxerga o armazenamento por dentro, habilitando decisões de manutenção e migração.', custo: 'Comandos plumbing são de baixo nível e fáceis de usar errado.' },
      production: 'A evidência é um commit reconstruído só com comandos plumbing (blob, tree, commit, ref) aparecendo em git log.',
      risks: ['Manipular refs com update-ref sem entender e corromper o estado.', 'Confundir plumbing com porcelain no dia a dia.'],
      checklist: ['Inspecionar objetos com cat-file e hash-object.', 'Distinguir loose objects de packfiles.', 'Explicar a compressão delta do packfile.', 'Rodar gc/manutenção com consciência do efeito.'],
      summary: 'Plumbing expõe o object store endereçável por conteúdo; packfiles empacotam com delta para caber e correr.',
      books: ['buildingGit', 'proGit'],
      exercises: [{ level: 'Produção', title: 'Reconstruir um commit com plumbing', task: 'Criar um blob, uma tree e um commit usando apenas comandos plumbing e apontar um ref para ele.', acceptance: 'git log mostra o commit criado manualmente.', evidence: 'Sequência de comandos versionada.' }],
      interview: [{ level: 'Produção', question: 'Como o Git armazena o histórico sem duplicar arquivos idênticos?', expected: 'Objetos endereçados por hash reusam o mesmo blob; packfiles aplicam compressão delta.' }]
    },

    // ── Parte 2 · Colaboração e revisão ──
    {
      part: 'colaboracao', level: 'Aplicação',
      title: 'Projetar uma estratégia de branches',
      objective: 'Projetar uma estratégia de branches adequada ao time e à cadência de release, comparando trunk-based, GitHub Flow e GitFlow.',
      problem: 'Times travam em merges longos e conflitos quando adotam um modelo de branch incompatível com sua frequência de deploy.',
      concepts: ['Trunk-based development', 'GitHub Flow / GitLab Flow', 'GitFlow', 'Feature flags e branches de curta vida'],
      internals: ['Branches longos aumentam a divergência e o custo de merge; trunk-based reduz risco com integração contínua.', 'Feature flags separam deploy de release, permitindo mesclar cedo sem expor código incompleto.'],
      prerequisites: ['Conhecer a cadência de release e o tamanho do time.', 'Entender merge e o custo de divergência.'],
      useWhen: ['Use ao definir o modelo de branches de um time ou produto.', 'Priorize quando merges longos e conflitos estão travando entregas.'],
      avoidWhen: ['Não adote GitFlow para um time que entrega várias vezes ao dia.', 'Não mantenha branches de feature vivos por semanas sem integrar.'],
      tradeoffs: { ganho: 'Fluxo de integração alinhado à cadência, reduzindo conflito e risco.', custo: 'Trunk-based exige CI forte e feature flags para funcionar.' },
      production: 'A evidência é um ADR que escolhe a estratégia de branches para um cenário, justificada pela cadência e pelo time.',
      risks: ['Adotar um modelo por moda, incompatível com a frequência de deploy.', 'Branches longos que acumulam divergência e conflito.'],
      checklist: ['Mapear a cadência de deploy do time.', 'Comparar trunk-based, GitHub Flow e GitFlow.', 'Definir a vida máxima de um branch.', 'Registrar a decisão e os trade-offs num ADR.'],
      summary: 'Branches curtos e integração contínua reduzem risco; o modelo certo segue a cadência de release do time.',
      books: ['proGit', 'gitForTeams'],
      exercises: [{ level: 'Aplicação', title: 'Escolher e documentar um modelo', task: 'Escolher uma estratégia de branches para um cenário dado e registrar os trade-offs em um ADR.', acceptance: 'A escolha é justificada pela cadência e pelo tamanho do time.', evidence: 'ADR versionado.' }],
      interview: [{ level: 'Aplicação', question: 'Por que branches de longa duração aumentam o risco de merge?', expected: 'Acumulam divergência; quanto maior a distância, maior o conflito e o retrabalho.' }]
    },
    {
      part: 'colaboracao', level: 'Aplicação',
      title: 'Comparar merge, rebase e cherry-pick',
      objective: 'Comparar merge, rebase e cherry-pick e escolher a operação pela intenção de histórico e pelo estado — público ou privado — do branch.',
      problem: 'O histórico fica ilegível ou corrompido para o time quando rebase é aplicado a branches compartilhados sem critério.',
      concepts: ['Merge (preserva topologia)', 'Rebase (lineariza)', 'Cherry-pick', 'Fast-forward vs merge commit'],
      internals: ['Rebase reescreve commits com novos SHAs; nunca em histórico já publicado sem combinar com o time.', 'Merge preserva o contexto do branch; a escolha é entre legibilidade e fidelidade topológica.'],
      prerequisites: ['Entender o DAG e o estado público/privado de um branch.', 'Ter praticado merge e rebase básicos.'],
      useWhen: ['Use ao escolher como integrar mudanças conforme a intenção de histórico.', 'Priorize antes de rebasear qualquer coisa que possa estar publicada.'],
      avoidWhen: ['Não rebaseie branch já compartilhado sem combinar com o time.', 'Não use cherry-pick como substituto de um merge quando quer todo o contexto.'],
      tradeoffs: { ganho: 'Histórico com a legibilidade ou a fidelidade topológica que você escolher.', custo: 'Rebase reescreve SHAs e pode corromper o histórico do time se mal usado.' },
      production: 'A evidência são três cenários resolvidos com merge, rebase e cherry-pick, cada escolha respeitando o estado do branch.',
      risks: ['Rebasear histórico publicado e quebrar o dos colegas.', 'Perder o contexto do branch ao linearizar sem necessidade.'],
      checklist: ['Identificar se o branch é público ou privado.', 'Escolher merge (preserva) ou rebase (lineariza) pela intenção.', 'Usar cherry-pick para trazer commits pontuais.', 'Nunca reescrever commits já publicados.'],
      summary: 'A regra de ouro: nunca reescreva (rebase) commits já publicados; escolha a operação pela intenção de histórico.',
      books: ['proGit', 'versionControl'],
      exercises: [{ level: 'Aplicação', title: 'Aplicar a operação certa', task: 'Dados três cenários, aplicar merge, rebase e cherry-pick e explicar por que cada um foi escolhido.', acceptance: 'Cada escolha respeita o estado público/privado do branch.', evidence: 'Histórico resultante dos três cenários.' }],
      interview: [{ level: 'Aplicação', question: 'Qual a regra de ouro do rebase?', expected: 'Nunca reescrever commits que já foram publicados e podem estar em uso por outros.' }]
    },
    {
      part: 'colaboracao', level: 'Aplicação',
      title: 'Resolver conflitos preservando intenção',
      objective: 'Resolver conflitos de merge preservando a intenção de ambos os lados e prevenir recorrência com ferramentas e configuração.',
      problem: 'Resoluções de conflito descartam trabalho ou introduzem bugs quando feitas às pressas, sem entender os dois lados.',
      concepts: ['Marcadores de conflito', 'Estratégias e drivers de merge', 'git rerere', 'Merge de três vias'],
      internals: ['O merge de três vias usa o ancestral comum (base) para distinguir mudança de conflito real.', 'git rerere memoriza resoluções e as reaplica automaticamente em conflitos repetidos.'],
      prerequisites: ['Entender o merge de três vias e a base comum.', 'Um cenário com conflito para praticar.'],
      useWhen: ['Use ao resolver conflitos não triviais preservando os dois lados.', 'Priorize quando o mesmo conflito se repete (ative rerere).'],
      avoidWhen: ['Não resolva conflito às pressas descartando um dos lados.', 'Não ignore a base ao decidir qual mudança manter.'],
      tradeoffs: { ganho: 'Resolução correta que preserva a intenção e não reintroduz bugs.', custo: 'Entender os dois lados e a base leva mais tempo que "aceitar tudo".' },
      production: 'A evidência é um conflito não trivial resolvido corretamente, com rerere reaplicando em um segundo conflito igual.',
      risks: ['Descartar trabalho ao resolver sem entender ambos os lados.', 'Reintroduzir um bug por resolução apressada.'],
      checklist: ['Ler os dois lados e a base antes de resolver.', 'Preservar a intenção de ambas as mudanças.', 'Ativar git rerere para conflitos repetidos.', 'Rodar os testes após resolver.'],
      summary: 'O merge de três vias usa a base para distinguir mudança de conflito; rerere memoriza e reaplica resoluções.',
      books: ['proGit'],
      exercises: [{ level: 'Aplicação', title: 'Resolver e prevenir', task: 'Resolver um conflito não trivial, ativar rerere e demonstrar a reaplicação automática.', acceptance: 'Resolução correta e rerere reaplicando em um segundo conflito igual.', evidence: 'Registro dos dois merges.' }],
      interview: [{ level: 'Aplicação', question: 'O que é a "base" em um merge de três vias e por que importa?', expected: 'O ancestral comum; permite distinguir qual lado realmente mudou cada trecho.' }]
    },
    {
      part: 'colaboracao', level: 'Produção',
      title: 'Conduzir pull requests e code review',
      objective: 'Conduzir pull requests e code review que reduzam defeitos e transfiram conhecimento, com escopo pequeno e critérios explícitos.',
      problem: 'PRs enormes e reviews sem critério viram carimbo, deixando passar defeitos e sobrecarregando o time.',
      concepts: ['PR de escopo pequeno', 'Critérios de aceite e checklist', 'Revisão assíncrona', 'CODEOWNERS e revisão obrigatória'],
      internals: ['PRs pequenos revisam-se mais rápido e com maior taxa de detecção de defeitos.', 'CODEOWNERS e proteções de branch tornam a revisão parte obrigatória do fluxo, não opcional.'],
      prerequisites: ['Fluxo de branch e commits limpos.', 'Acesso a um repositório com revisão por PR.'],
      useWhen: ['Use em todo fluxo de contribuição revisada.', 'Priorize quando reviews viram carimbo e defeitos passam.'],
      avoidWhen: ['Não abra PRs enormes que ninguém consegue revisar de verdade.', 'Não trate a revisão como formalidade sem critérios.'],
      tradeoffs: { ganho: 'Mais defeitos detectados e conhecimento transferido pela revisão.', custo: 'PRs pequenos exigem quebrar o trabalho e disciplina de escopo.' },
      production: 'A evidência é um PR real sob uma política de escopo pequeno, checklist e revisão obrigatória (CODEOWNERS).',
      risks: ['PR gigante que vira carimbo e deixa passar defeitos.', 'Revisão sem critério que não transfere conhecimento.'],
      checklist: ['Manter o PR de escopo pequeno.', 'Escrever critérios de aceite e um checklist.', 'Configurar CODEOWNERS e revisão obrigatória.', 'Revisar de forma assíncrona e específica.'],
      summary: 'PRs pequenos com critérios explícitos e revisão obrigatória detectam mais defeitos e espalham conhecimento.',
      books: ['gitForTeams'],
      exercises: [{ level: 'Produção', title: 'Definir um fluxo de PR', task: 'Escrever um template de PR e uma política de review para um repositório e aplicá-la em um PR real.', acceptance: 'O PR segue escopo pequeno, checklist e revisão obrigatória.', evidence: 'PR revisado sob a política.' }],
      interview: [{ level: 'Produção', question: 'Por que PRs menores melhoram a qualidade da revisão?', expected: 'Cabem na memória do revisor, reduzem fadiga e aumentam a detecção de defeitos.' }]
    },

    // ── Parte 3 · Plataformas e automação ──
    {
      part: 'plataformas', level: 'Aplicação',
      title: 'Comparar plataformas de hospedagem Git',
      objective: 'Comparar GitHub, GitLab, Bitbucket e Azure Repos por CI/CD, segurança, governança e integração, e justificar a escolha.',
      problem: 'A escolha de plataforma é feita por hábito, ignorando diferenças em CI/CD, controle de acesso e conformidade que custam caro depois.',
      concepts: ['GitHub, GitLab, Bitbucket, Azure Repos', 'CI/CD nativo', 'Controle de acesso e SSO/SAML', 'Portabilidade'],
      internals: ['O protocolo Git é o mesmo em toda plataforma; elas divergem em automação, políticas e integração — não no versionamento.', 'O lock-in vem de CI, permissões e automações proprietárias, não do repositório em si.'],
      prerequisites: ['Conhecer requisitos de CI/CD, segurança e conformidade do time.', 'Entender que o repositório Git é portável.'],
      useWhen: ['Use ao escolher ou migrar de plataforma de hospedagem Git.', 'Priorize quando conformidade e controle de acesso são exigências reais.'],
      avoidWhen: ['Não escolha por hábito ignorando CI/CD e controle de acesso.', 'Não confunda o versionamento (igual em todas) com as automações (onde divergem).'],
      tradeoffs: { ganho: 'Escolha alinhada a CI/CD, segurança e governança, não a preferência.', custo: 'Avaliar de verdade exige ponderar critérios e entender o lock-in.' },
      production: 'A evidência é uma matriz de decisão comparando duas plataformas para um requisito real, com recomendação ponderada.',
      risks: ['Escolher por hábito e pagar caro em CI/CD ou conformidade depois.', 'Subestimar o lock-in de automações proprietárias.'],
      checklist: ['Listar os requisitos (CI/CD, SSO/SAML, conformidade).', 'Comparar as plataformas por critérios ponderados.', 'Avaliar a portabilidade e o lock-in.', 'Registrar a recomendação justificada.'],
      summary: 'O protocolo Git é igual em toda plataforma; elas divergem em automação, políticas e integração — e é daí que vem o lock-in.',
      books: ['proGit', 'versionControl'],
      exercises: [{ level: 'Aplicação', title: 'Matriz de decisão de plataforma', task: 'Construir uma matriz comparando duas plataformas para um requisito real (ex.: conformidade) e recomendar uma.', acceptance: 'Recomendação baseada em critérios ponderados, não em preferência.', evidence: 'Matriz e recomendação versionadas.' }],
      interview: [{ level: 'Aplicação', question: 'De onde vem o lock-in de uma plataforma Git?', expected: 'De CI/CD, permissões e automações proprietárias — o repositório em si é portável.' }]
    },
    {
      part: 'plataformas', level: 'Produção',
      title: 'Automatizar qualidade com CI/CD e hooks',
      objective: 'Automatizar qualidade com hooks locais e pipelines de CI que bloqueiem merges que quebrem testes ou padrões.',
      problem: 'Regressões e código fora do padrão entram na main quando a qualidade depende de disciplina manual em vez de automação.',
      concepts: ['Git hooks (pre-commit, pre-push)', 'Pipelines de CI', 'Status checks obrigatórios', 'Merge gates'],
      internals: ['Hooks locais dão feedback rápido, mas só o CI server-side é confiável como gate.', 'Status checks obrigatórios em branch protegido impedem merge sem pipeline verde.'],
      prerequisites: ['Um repositório com testes automatizáveis.', 'Noção de branch protegido.'],
      useWhen: ['Use para transformar qualidade em gate automático em vez de disciplina manual.', 'Priorize quando regressões entram na main.'],
      avoidWhen: ['Não confie só em hooks locais como garantia — eles são ignoráveis.', 'Não deixe merge passar sem status check verde.'],
      tradeoffs: { ganho: 'Qualidade garantida por automação que bloqueia regressões.', custo: 'Configurar pipelines e gates tem custo inicial e manutenção.' },
      production: 'A evidência é um pipeline mínimo com status check obrigatório que impede o merge de um PR com teste falhando.',
      risks: ['Confiar em hooks locais que podem ser burlados.', 'Regressões entrando na main por falta de gate server-side.'],
      checklist: ['Adicionar hooks locais para feedback rápido.', 'Configurar um pipeline de CI.', 'Tornar o status check obrigatório no branch protegido.', 'Provar que um teste quebrado bloqueia o merge.'],
      summary: 'Hooks locais dão feedback rápido, mas só o CI server-side é gate confiável contra regressões.',
      books: ['proGit', 'versionControl'],
      exercises: [{ level: 'Produção', title: 'Gate de merge por CI', task: 'Configurar um pipeline mínimo e um status check obrigatório que bloqueie merge com teste falhando.', acceptance: 'Um PR com teste quebrado não consegue ser mesclado.', evidence: 'PR bloqueado pelo check.' }],
      interview: [{ level: 'Produção', question: 'Por que não confiar apenas em hooks locais para garantir qualidade?', expected: 'Podem ser ignorados; só o CI server-side é obrigatório e confiável.' }]
    },
    {
      part: 'plataformas', level: 'Produção',
      title: 'Proteger segredos e a cadeia de fornecimento',
      objective: 'Proteger o repositório contra vazamento de segredos e ataques de cadeia de fornecimento, com varredura, assinatura e remoção de histórico.',
      problem: 'Segredos vazam permanentemente e dependências maliciosas entram quando não há varredura, assinatura nem controle de proveniência.',
      concepts: ['Secret scanning e .gitignore', 'Remoção de histórico (git filter-repo)', 'Commits e tags assinados', 'Proveniência e dependências fixadas'],
      internals: ['Um segredo commitado permanece em todo clone e no reflog; é preciso rotacioná-lo além de reescrever o histórico.', 'Assinatura e proveniência (ex.: SLSA) ligam artefato a autor e origem, reduzindo risco de supply chain.'],
      prerequisites: ['Noção de segredos, .gitignore e reescrita de histórico.', 'Entender que um clone carrega todo o histórico.'],
      useWhen: ['Use ao proteger o repositório contra vazamento e dependências maliciosas.', 'Priorize imediatamente quando um segredo foi commitado.'],
      avoidWhen: ['Não ache que remover o segredo do último commit basta.', 'Não confie em dependência sem proveniência nem fixação de versão.'],
      tradeoffs: { ganho: 'Reduz risco de vazamento e de ataque de cadeia de fornecimento.', custo: 'Reescrever histórico e rotacionar credenciais é disruptivo.' },
      production: 'A evidência é um segredo removido do histórico com git filter-repo e a credencial rotacionada, documentados.',
      risks: ['Segredo que permanece em clones e no reflog após remoção parcial.', 'Dependência maliciosa entrando por falta de proveniência.'],
      checklist: ['Ativar secret scanning e manter .gitignore.', 'Remover o segredo de todo o histórico (filter-repo).', 'Rotacionar a credencial vazada.', 'Assinar commits/tags e fixar dependências com proveniência.'],
      summary: 'Um segredo commitado vive em todo clone e no reflog; é preciso reescrever o histórico E rotacionar a credencial.',
      books: ['versionControl'],
      exercises: [{ level: 'Produção', title: 'Remover e rotacionar um segredo', task: 'Remover um segredo do histórico com git filter-repo e documentar a rotação da credencial.', acceptance: 'O segredo some do histórico e a credencial é rotacionada.', evidence: 'Registro da limpeza e da rotação.' }],
      interview: [{ level: 'Produção', question: 'Por que remover um segredo apenas do último commit não basta?', expected: 'Ele permanece no histórico, em clones e no reflog; é preciso reescrever e rotacionar.' }]
    },
    {
      part: 'plataformas', level: 'Produção',
      title: 'Diagnosticar histórico com bisect, blame e log',
      objective: 'Diagnosticar a origem de um defeito no histórico com bisect, blame e consultas avançadas de log.',
      problem: 'Bugs regressivos levam horas para localizar quando o histórico não é usado como ferramenta de investigação.',
      concepts: ['git bisect (busca binária)', 'git blame e pickaxe (-S/-G)', 'log com filtros e ranges', 'Reproduzir por commit'],
      internals: ['bisect faz busca binária no DAG para achar o commit que introduziu a falha em O(log n) passos.', 'A pickaxe (-S) encontra quando uma string entrou ou saiu do código ao longo do histórico.'],
      prerequisites: ['Um histórico com commits para investigar.', 'Um teste ou critério que detecte a falha.'],
      useWhen: ['Use ao localizar a origem de um bug regressivo.', 'Priorize quando a busca manual pelo histórico levaria horas.'],
      avoidWhen: ['Não cace regressão commit a commit quando o bisect faz em O(log n).', 'Não use blame para culpar pessoas — use para entender contexto.'],
      tradeoffs: { ganho: 'Localiza o commit culpado em passos logarítmicos usando o histórico.', custo: 'Exige um critério automatizável de sucesso/falha para o bisect run.' },
      production: 'A evidência é uma regressão localizada automaticamente com git bisect run, com o log do bisect.',
      risks: ['Gastar horas procurando manualmente o que o bisect acha em minutos.', 'Usar blame como ferramenta de culpa em vez de contexto.'],
      checklist: ['Definir um teste que distingue bom de ruim.', 'Rodar git bisect (idealmente bisect run).', 'Usar blame e pickaxe (-S/-G) para contexto.', 'Reproduzir a falha no commit apontado.'],
      summary: 'bisect faz busca binária no DAG e acha o commit culpado em O(log n); blame e pickaxe dão o contexto.',
      books: ['proGit', 'buildingGit'],
      exercises: [{ level: 'Produção', title: 'Caçar uma regressão com bisect', task: 'Introduzir um bug em algum ponto do histórico e localizar o commit culpado com git bisect run.', acceptance: 'O commit culpado é identificado automaticamente.', evidence: 'Log do bisect.' }],
      interview: [{ level: 'Produção', question: 'Como o bisect encontra um commit ruim em tempo logarítmico?', expected: 'Busca binária no histórico, dividindo o intervalo de commits a cada teste.' }]
    },

    // ── Parte 4 · Governança e arquitetura ──
    {
      part: 'governanca', level: 'Aplicação',
      title: 'Definir governança de repositórios',
      objective: 'Definir governança de repositórios — proteções de branch, políticas de acesso e templates — que escale sem virar burocracia.',
      problem: 'Repositórios viram bagunça ou gargalo quando não há proteção de branch, dono claro nem política de contribuição.',
      concepts: ['Branch protection e revisão obrigatória', 'CODEOWNERS e níveis de acesso', 'Templates (PR, issue, CONTRIBUTING)', 'Automação de política'],
      internals: ['Proteções de branch e CODEOWNERS transformam boas práticas em regras aplicadas pela plataforma.', 'Governança leve automatiza o repetível e reserva a revisão humana para decisões que exigem julgamento.'],
      prerequisites: ['Acesso administrativo a um repositório.', 'Clareza sobre donos e política de contribuição.'],
      useWhen: ['Use ao definir proteções, acesso e templates que escalem.', 'Priorize quando o repositório vira bagunça ou gargalo.'],
      avoidWhen: ['Não deixe a main sem proteção nem dono claro.', 'Não crie burocracia que exija revisão humana no que dá para automatizar.'],
      tradeoffs: { ganho: 'Boas práticas viram regras aplicadas pela plataforma, sem depender de disciplina.', custo: 'Governança mal calibrada vira gargalo ou burocracia.' },
      production: 'A evidência é um repositório com proteção de branch, CODEOWNERS e templates, validado por um PR de teste.',
      risks: ['Repositório sem proteção que aceita merge sem revisão.', 'Governança pesada que trava o fluxo.'],
      checklist: ['Configurar branch protection e revisão obrigatória.', 'Definir CODEOWNERS e níveis de acesso.', 'Adicionar templates de PR, issue e CONTRIBUTING.', 'Automatizar o repetível, reservando a revisão humana ao julgamento.'],
      summary: 'Governança leve transforma boas práticas em regras aplicadas pela plataforma sem virar gargalo.',
      books: ['gitForTeams'],
      exercises: [{ level: 'Aplicação', title: 'Aplicar governança a um repositório', task: 'Configurar proteção de branch, CODEOWNERS e templates em um repositório e validar com um PR.', acceptance: 'PR sem review obrigatório é bloqueado e os templates aparecem.', evidence: 'Configuração e PR de teste.' }],
      interview: [{ level: 'Aplicação', question: 'Como evitar que governança de repositório vire gargalo?', expected: 'Automatizar o repetível e limitar revisão obrigatória ao que realmente exige julgamento.' }]
    },
    {
      part: 'governanca', level: 'Aplicação',
      title: 'Comparar monorepo e multirepo',
      objective: 'Comparar monorepo e multirepo e escolher a topologia pela coordenação de mudanças, escala e ferramentas disponíveis.',
      problem: 'A topologia de repositórios é escolhida por moda, gerando dependências infernais (multirepo) ou builds lentos (monorepo).',
      concepts: ['Monorepo vs multirepo', 'Mudanças atômicas cross-projeto', 'Submodules e subtrees', 'Tooling de monorepo (sparse-checkout, build graph)'],
      internals: ['Monorepo dá mudança atômica e visão única, ao custo de tooling de build e checkout em escala.', 'Multirepo isola times, mas espalha coordenação e versionamento entre repositórios.'],
      prerequisites: ['Entender dependências entre projetos e a escala do código.', 'Noção do tooling de build disponível.'],
      useWhen: ['Use ao decidir a topologia de repositórios de uma organização.', 'Priorize quando há muitas dependências cruzadas ou builds lentos.'],
      avoidWhen: ['Não escolha a topologia por moda.', 'Não adote monorepo em escala sem tooling de build e checkout.'],
      tradeoffs: { ganho: 'Topologia alinhada à coordenação de mudanças e à escala real.', custo: 'Monorepo exige tooling; multirepo espalha coordenação e versionamento.' },
      production: 'A evidência é uma recomendação de mono ou multirepo para um cenário com dependências cruzadas, com os trade-offs.',
      risks: ['Multirepo com dependências infernais entre repositórios.', 'Monorepo com builds e checkouts lentos por falta de tooling.'],
      checklist: ['Mapear as dependências entre projetos.', 'Avaliar a necessidade de mudança atômica cross-projeto.', 'Considerar o tooling de build e checkout em escala.', 'Recomendar a topologia com os trade-offs.'],
      summary: 'Monorepo dá mudança atômica ao custo de tooling; multirepo isola times ao custo de espalhar coordenação.',
      books: ['gitForTeams', 'versionControl'],
      exercises: [{ level: 'Aplicação', title: 'Recomendar uma topologia', task: 'Analisar um cenário com dependências cruzadas e recomendar mono ou multirepo com os trade-offs.', acceptance: 'Recomendação justificada por coordenação, escala e tooling.', evidence: 'Análise versionada.' }],
      interview: [{ level: 'Aplicação', question: 'Qual o maior custo de um monorepo em escala?', expected: 'Ferramentas de build e checkout precisam lidar com o tamanho; sem elas, tudo fica lento.' }]
    },
    {
      part: 'governanca', level: 'Produção',
      title: 'Versionar APIs, schemas e contratos',
      objective: 'Versionar APIs, schemas e contratos com compatibilidade controlada, evitando quebrar consumidores.',
      problem: 'Mudanças em contratos quebram integrações em produção quando compatibilidade e versionamento não são disciplinados.',
      concepts: ['Versionamento semântico (SemVer)', 'Compatibilidade retro e progressiva', 'Contract testing', 'Migração e deprecação'],
      internals: ['SemVer comunica a natureza da mudança (major = quebra); tags Git materializam releases imutáveis.', 'Contract tests detectam quebra antes do deploy, transformando o contrato em código verificável.'],
      prerequisites: ['Ter uma API/schema com consumidores.', 'Noção de compatibilidade e SemVer.'],
      useWhen: ['Use ao evoluir APIs, schemas e contratos sem quebrar consumidores.', 'Priorize antes de qualquer mudança que possa ser breaking.'],
      avoidWhen: ['Não faça mudança breaking sem major e sem deprecação.', 'Não confie que "não quebrou aqui" sem contract testing.'],
      tradeoffs: { ganho: 'Evolui contratos com compatibilidade controlada e verificável.', custo: 'Compatibilidade e contract testing exigem disciplina e infraestrutura.' },
      production: 'A evidência é uma mudança retrocompatível em um schema com a compatibilidade provada por contract testing e uma tag de release.',
      risks: ['Quebrar integrações em produção por mudança incompatível.', 'Confiar em testes locais sem verificar o contrato com o consumidor.'],
      checklist: ['Classificar a mudança (major/minor/patch) por SemVer.', 'Garantir compatibilidade retro/progressiva.', 'Provar com contract testing.', 'Materializar o release numa tag imutável.'],
      summary: 'SemVer comunica a natureza da mudança e contract tests transformam o contrato em código verificável antes do deploy.',
      books: ['versionControl'],
      exercises: [{ level: 'Produção', title: 'Evoluir um contrato sem quebrar', task: 'Aplicar uma mudança retrocompatível em um schema e provar a compatibilidade com contract testing.', acceptance: 'Consumidores existentes continuam passando.', evidence: 'Testes de contrato e a tag de release.' }],
      interview: [{ level: 'Produção', question: 'Como você faz uma mudança de API sem quebrar consumidores?', expected: 'Mudança retrocompatível, deprecação gradual e testes de contrato antes do deploy.' }]
    },
    {
      part: 'governanca', level: 'Produção',
      title: 'Operar GitOps com promoção auditável',
      objective: 'Operar GitOps usando o repositório como fonte da verdade, com promoção entre ambientes auditável e reversível.',
      problem: 'Deploys viram caixa-preta e irreversíveis quando o estado desejado não vive no Git com histórico e revisão.',
      concepts: ['GitOps e estado declarativo', 'Reconciliação contínua', 'Promoção por PR entre ambientes', 'Rollback por reverter commit'],
      internals: ['No GitOps o repositório é a fonte da verdade; um reconciliador aproxima o ambiente do estado declarado.', 'Rollback vira git revert; toda mudança de ambiente passa por PR revisável e auditável.'],
      prerequisites: ['Entender estado declarativo e reconciliação.', 'Um repositório de estado e um reconciliador.'],
      useWhen: ['Use quando o estado desejado deve viver no Git como fonte da verdade.', 'Priorize quando deploys precisam ser auditáveis e reversíveis.'],
      avoidWhen: ['Não faça mudanças de ambiente fora do Git (caixa-preta).', 'Não promova entre ambientes sem PR revisável.'],
      tradeoffs: { ganho: 'Deploys auditáveis, revisáveis e reversíveis por commit.', custo: 'Exige reconciliador e disciplina de manter tudo declarativo no Git.' },
      production: 'A evidência é a promoção de um ambiente a outro via PR no repositório de estado, com rollback demonstrado por git revert.',
      risks: ['Deploys viram caixa-preta e irreversíveis fora do Git.', 'Drift entre o estado real e o declarado sem reconciliação.'],
      checklist: ['Manter o estado desejado declarativo no repositório.', 'Configurar reconciliação contínua.', 'Promover entre ambientes por PR.', 'Reverter commit para fazer rollback auditável.'],
      summary: 'No GitOps o repositório é a fonte da verdade; rollback vira git revert e toda mudança é revisável.',
      books: ['gitForTeams'],
      exercises: [{ level: 'Produção', title: 'Promoção auditável por PR', task: 'Modelar a promoção de um ambiente a outro via PR no repositório de estado e demonstrar rollback por revert.', acceptance: 'Promoção e rollback ficam registrados como commits revisáveis.', evidence: 'PRs de promoção e de rollback.' }],
      interview: [{ level: 'Produção', question: 'Como o GitOps torna um rollback trivial e auditável?', expected: 'O estado vive no Git; reverter o commit restaura o estado anterior com histórico completo.' }]
    },

    // ── Parte 5 · Fronteira: implementar o Git e a próxima geração ──
    {
      part: 'fronteira', level: 'Fronteira',
      title: 'Object store do zero: hash-object e cat-file',
      objective: 'Reconstruir o armazenamento endereçável por conteúdo do Git — SHA-1 do cabeçalho + conteúdo, compressão zlib e fan-out de diretório — batendo os hashes do git real.',
      problem: 'Sem implementar o object store, "commit", "branch" e "gc" continuam sendo magia, e decisões sobre corrupção, tamanho e migração ficam no chute.',
      concepts: ['Conteúdo endereçável por hash', 'Formato do objeto: tipo, tamanho, NUL, conteúdo', 'Compressão zlib e loose objects', 'Fan-out .git/objects/ab/cdef', 'Dedupe por hash'],
      internals: ['O id é SHA-1("<tipo> <tamanho>\\0<conteúdo>"); o cabeçalho entra no hash, por isso o mesmo conteúdo com tipo diferente muda o id.', 'O objeto é gravado comprimido com zlib; conteúdo idêntico gera o mesmo hash e não duplica.'],
      prerequisites: ['Entender hash, zlib e o formato de objeto do Git.', 'Ambiente com Python (roda sob Pyodide).'],
      useWhen: ['Use como laboratório para tornar concreto o armazenamento do Git.', 'Priorize ao querer explicar corrupção, tamanho e migração com base real.'],
      avoidWhen: ['Não confunda este laboratório com uma implementação de produção.', 'Não pule a checagem contra o git real — ela é o que valida.'],
      tradeoffs: { ganho: 'Torna o object store concreto, batendo os hashes do git real.', custo: 'É esforço de implementação que não substitui o Git no dia a dia.' },
      production: 'A evidência é um hash-object/cat-file próprio cujo blob vazio dá e69de29… e "hello\\n" dá ce01362…, como o git real.',
      risks: ['Esquecer o cabeçalho no hash e não bater com o git.', 'Duplicar objetos por não deduplicar pelo hash.'],
      checklist: ['Montar o formato "<tipo> <tamanho>\\0<conteúdo>".', 'Calcular o SHA-1 e comparar com git hash-object.', 'Comprimir com zlib e gravar no fan-out.', 'Provar o round-trip store→read com dedupe.'],
      summary: 'O id é o SHA-1 do cabeçalho + conteúdo; conteúdo idêntico gera o mesmo hash e não duplica.',
      books: ['buildingGit', 'proGit'],
      exercises: [
        { level: 'Aplicação', title: 'Implementar hash-object', task: 'Escrever a função de hash de objeto e provar que o blob vazio dá e69de29… e "hello\\n" dá ce01362…, como o git real.', acceptance: 'Os dois hashes batem com o git hash-object.', evidence: 'Notebook com a função e os asserts.' },
        { level: 'Produção', title: 'cat-file e round-trip', task: 'Implementar leitura (descompressão + parse do cabeçalho) e provar o round-trip store→read com dedupe.', acceptance: 'Round-trip preserva tipo/conteúdo e conteúdo repetido não duplica.', evidence: 'Notebook com store e cat-file.' }
      ],
      interview: [
        { level: 'Aplicação', question: 'Como o Git deriva o id de um objeto?', expected: 'SHA-1 do cabeçalho "tipo tamanho\\0" concatenado ao conteúdo; o cabeçalho faz parte do hash.' },
        { level: 'Produção', question: 'Por que dois arquivos idênticos não ocupam espaço em dobro?', expected: 'Mesmo conteúdo → mesmo hash → mesmo objeto; o armazenamento é dedupe por endereço de conteúdo.' }
      ],
      exampleFile: '../../examples/git-senior/fronteira/hash_object.py'
    },
    {
      part: 'fronteira', level: 'Fronteira',
      title: 'Trees, commits e o Merkle DAG do zero',
      objective: 'Construir objetos tree e commit do zero, batendo os hashes de git write-tree e git commit-tree, e explicar por que o histórico é um DAG de Merkle imutável.',
      problem: 'Rebase gerar novos SHAs, o histórico ser "imutável" e a integridade do Git parecem arbitrários até você ver que cada nível hasheia o nível abaixo.',
      concepts: ['Objeto tree (modo, nome, sha)', 'Objeto commit (tree, pais, autor, mensagem)', 'DAG de Merkle', 'Propagação de hash', 'Ordenação de entradas'],
      internals: ['A tree grava "<modo> <nome>\\0" + sha(20 bytes) por entrada, ordenada por nome; a tree vazia é sempre 4b825dc….', 'O commit inclui o hash da tree e dos pais; mudar um blob muda a tree e propaga até o commit — a base da imutabilidade.'],
      prerequisites: ['Ter o object store do módulo anterior.', 'Entender a estrutura de tree e commit.'],
      useWhen: ['Use para provar por que rebase gera novos SHAs e o histórico é imutável.', 'Priorize ao explicar integridade e a propriedade de Merkle.'],
      avoidWhen: ['Não ignore a ordenação das entradas da tree — ela muda o hash.', 'Não trate como implementação de produção.'],
      tradeoffs: { ganho: 'Demonstra a imutabilidade e a integridade do histórico na prática.', custo: 'Reproduzir os hashes exige cuidado com formato e ordenação.' },
      production: 'A evidência é uma tree e um commit próprios que batem com aaa96ced… e 7531240… do git write-tree/commit-tree.',
      risks: ['Errar a ordenação/formato das entradas e não bater com o git.', 'Confundir o que muda a tree (blob) com o que não muda (mensagem).'],
      checklist: ['Gravar entradas de tree "<modo> <nome>\\0" + sha, ordenadas.', 'Montar o commit com tree, pais e autor fixo.', 'Comparar com git write-tree/commit-tree.', 'Provar a propagação de hash mudando um blob.'],
      summary: 'Cada nível hasheia o de baixo; mudar um blob propaga até o commit — a base da imutabilidade e do novo SHA no rebase.',
      books: ['buildingGit', 'proGit'],
      exercises: [
        { level: 'Aplicação', title: 'write-tree e commit-tree do zero', task: 'Montar uma tree com um arquivo e um commit com autor fixo e provar que batem com aaa96ced… e 7531240… do git real.', acceptance: 'Tree e commit coincidem com o git write-tree/commit-tree.', evidence: 'Notebook com os dois objetos e os asserts.' },
        { level: 'Produção', title: 'Provar a propriedade de Merkle', task: 'Mudar um blob e mostrar que a tree e o commit mudam; mudar só a mensagem e mostrar que a tree fica igual.', acceptance: 'A propagação de hash é demonstrada nos dois casos.', evidence: 'Notebook com os hashes antes/depois.' }
      ],
      interview: [
        { level: 'Aplicação', question: 'Por que o rebase gera novos SHAs de commit?', expected: 'O hash do commit depende de tree, pais e metadados; reescrever qualquer um muda o id e o de todos os descendentes.' },
        { level: 'Produção', question: 'O que significa o histórico ser um DAG de Merkle?', expected: 'Cada objeto inclui os hashes dos que referencia; adulterar o passado quebra os hashes de todos os descendentes.' }
      ],
      exampleFile: '../../examples/git-senior/fronteira/commit_tree.py'
    },
    {
      part: 'fronteira', level: 'Fronteira',
      title: 'Merge de três vias do zero',
      objective: 'Implementar o merge de três vias e mostrar por que o ancestral comum (base) é o que distingue conflito real de mudança de um lado só.',
      problem: 'Resolver conflitos vira adivinhação quando não se entende que o Git compara ours e theirs SEMPRE contra a base, não entre si.',
      concepts: ['Ancestral comum (base)', 'Aceitar um lado vs. conflito', 'Marcadores de conflito', 'Convergência de mudança idêntica', 'Merge por linha'],
      internals: ['Se um lado é igual à base e o outro mudou, aceita-se a mudança sem conflito; se ambos mudaram diferente, é conflito.', 'É por isso que o Git guarda o DAG inteiro: sem a base, (só ours mudou) e (ambos mudaram) seriam indistinguíveis.'],
      prerequisites: ['Ter noção de ancestral comum (base).', 'Ambiente com Python.'],
      useWhen: ['Use para entender por que o Git compara sempre contra a base.', 'Priorize ao querer resolver conflitos com clareza do mecanismo.'],
      avoidWhen: ['Não trate como algoritmo de merge de produção.', 'Não ignore o caso de convergência (mudança idêntica dos dois lados).'],
      tradeoffs: { ganho: 'Explica de dentro por que a base decide conflito vs mudança unilateral.', custo: 'Cobrir todos os casos por linha exige atenção.' },
      production: 'A evidência é um merge3 por linha que cobre os quatro casos (só ours, só theirs, idêntico, divergente) com marcadores no conflito.',
      risks: ['Comparar ours e theirs entre si em vez de contra a base.', 'Não tratar a convergência e gerar falso conflito.'],
      checklist: ['Implementar o merge de três vias por linha.', 'Cobrir os quatro casos de mudança.', 'Emitir marcadores no conflito real.', 'Variar a base e mostrar que o resultado muda.'],
      summary: 'O Git compara ours e theirs sempre contra a base; sem ela, "só ours mudou" e "ambos mudaram" seriam indistinguíveis.',
      books: ['buildingGit', 'versionControl'],
      exercises: [
        { level: 'Aplicação', title: 'Implementar merge3', task: 'Escrever o merge de três vias por linha e cobrir os quatro casos (só ours, só theirs, idêntico, divergente).', acceptance: 'Cada caso resolve como o esperado, com marcadores no conflito.', evidence: 'Notebook com os quatro casos.' },
        { level: 'Produção', title: 'O papel da base', task: 'Com os mesmos ours e theirs, variar a base e mostrar que o resultado muda.', acceptance: 'Fica provado que a base decide o merge.', evidence: 'Notebook com os dois resultados.' }
      ],
      interview: [
        { level: 'Aplicação', question: 'Para que serve a "base" num merge de três vias?', expected: 'É o ancestral comum; permite saber qual lado realmente mudou e distinguir conflito de mudança unilateral.' },
        { level: 'Produção', question: 'Por que o Git precisa do histórico inteiro para mesclar bem?', expected: 'Para achar o ancestral comum (merge-base); sem ele, não há como fazer o merge de três vias.' }
      ],
      exampleFile: '../../examples/git-senior/fronteira/three_way_merge.py'
    },
    {
      part: 'fronteira', level: 'Fronteira',
      title: 'Packfiles e compressão delta do zero',
      objective: 'Implementar um codec de delta (copy/insert) e explicar como o packfile guarda base + deltas em vez de cópias inteiras, tornando o clone viável.',
      problem: 'Não se entende por que clonar anos de histórico baixa poucos MB, nem por que "git gc" importa, sem ver a compressão delta por dentro.',
      concepts: ['Loose objects vs packfile', 'Delta: instruções copy e insert', 'Reaproveitamento do base', 'git gc e repack', 'Corretude vs compressão'],
      internals: ['O delta descreve o alvo como "copie N bytes do base" + "insira estes bytes"; aplicar o delta ao base reconstrói o alvo exatamente.', 'Para versões parecidas o delta é minúsculo; o packfile guarda uma base e deltas encadeados, não N cópias.'],
      prerequisites: ['Entender loose objects e a ideia de delta.', 'Ambiente com Python.'],
      useWhen: ['Use para entender por que clonar anos de histórico baixa poucos MB.', 'Priorize ao explicar o valor de git gc.'],
      avoidWhen: ['Não confunda este codec didático com o formato de packfile real completo.', 'Não priorize compressão sobre corretude do round-trip.'],
      tradeoffs: { ganho: 'Mostra a compressão delta por dentro, explicando o tamanho do clone e o gc.', custo: 'É um modelo simplificado, não o formato de packfile completo.' },
      production: 'A evidência é um codec de delta (copy/insert) provando que base+delta reconstrói o alvo byte a byte, com a compressão medida.',
      risks: ['Delta que não reconstrói o alvo exatamente (corretude antes de tamanho).', 'Não medir o ganho de compressão em edições pequenas.'],
      checklist: ['Implementar geração e aplicação de delta (copy/insert).', 'Provar o round-trip base+delta = alvo.', 'Encadear versões numa cadeia de deltas.', 'Medir o tamanho do delta vs o alvo inteiro.'],
      summary: 'O packfile guarda uma base e deltas encadeados em vez de N cópias; é o que torna o clone e o gc viáveis.',
      books: ['buildingGit', 'versionControl'],
      exercises: [
        { level: 'Aplicação', title: 'Codec de delta', task: 'Implementar geração e aplicação de delta e provar que base+delta reconstrói o alvo byte a byte.', acceptance: 'Round-trip correto, inclusive numa cadeia de versões.', evidence: 'Notebook com o codec e os asserts.' },
        { level: 'Produção', title: 'Medir a compressão', task: 'Mostrar que, para uma edição pequena, o delta é uma fração do tamanho do alvo inteiro.', acceptance: 'O delta fica bem abaixo do alvo e usa instruções de copy.', evidence: 'Notebook com os tamanhos.' }
      ],
      interview: [
        { level: 'Aplicação', question: 'Como o Git guarda mil versões de um arquivo sem mil cópias?', expected: 'Packfile com uma base e deltas (copy/insert); versões parecidas viram deltas pequenos.' },
        { level: 'Produção', question: 'O que o git gc faz e por que importa?', expected: 'Empacota loose objects num packfile com deltas, reduzindo tamanho e acelerando rede e operações.' }
      ],
      exampleFile: '../../examples/git-senior/fronteira/delta.py'
    },
    {
      part: 'fronteira', level: 'Fronteira',
      title: 'Integridade e a transição SHA-1 → SHA-256',
      objective: 'Demonstrar a integridade do histórico por hash encadeado, os ids de objeto em SHA-1 e SHA-256, e por que a migração é a fronteira de segurança do Git.',
      problem: 'A confiança no histórico do Git é tratada como dada, ignorando que SHA-1 sofreu uma colisão real (SHAttered, 2017) e que existe um formato SHA-256.',
      concepts: ['Hash encadeado e auditabilidade', 'Colisão SHAttered', 'Formato de objeto SHA-256', 'Efeito avalanche', 'Adulteração detectável'],
      internals: ['Adulterar um commit antigo muda o id dele e de todos os descendentes; os anteriores ficam intactos — é o que torna o histórico auditável.', 'O id em SHA-256 tem 64 hex (vs 40 do SHA-1); a migração é por repositório, com tabela de tradução entre formatos.'],
      prerequisites: ['Entender hash encadeado e o efeito avalanche.', 'Conhecer o caso SHAttered.'],
      useWhen: ['Use para provar a auditabilidade do histórico e discutir a migração de hash.', 'Priorize ao tratar de segurança e confiança do histórico.'],
      avoidWhen: ['Não trate a confiança no SHA-1 como dada — houve colisão real.', 'Não ache que a migração é global e instantânea.'],
      tradeoffs: { ganho: 'Demonstra a integridade por hash encadeado e a fronteira de segurança do Git.', custo: 'A migração SHA-256 é por repositório, com tabela de tradução.' },
      production: 'A evidência é uma mini-cadeia de commits em que trocar um do meio quebra a verificação dele e dos posteriores, além dos ids em SHA-1 e SHA-256.',
      risks: ['Confiar no SHA-1 ignorando o SHAttered.', 'Supor que adulterar o passado passa despercebido.'],
      checklist: ['Construir uma cadeia de commits com hash encadeado.', 'Adulterar um commit do meio e mostrar a propagação.', 'Computar o id em SHA-1 (40 hex) e SHA-256 (64 hex).', 'Explicar a migração por repositório.'],
      summary: 'Adulterar um commit muda o id dele e de todos os descendentes; SHA-256 é a raiz de confiança que sucede o SHA-1 colidido.',
      books: ['versionControl', 'proGit'],
      complements: [
        { title: 'SHAttered — a primeira colisão de SHA-1 (2017)', url: 'https://shattered.io/' },
        { title: 'Git — hash-function-transition (SHA-256)', url: 'https://git-scm.com/docs/hash-function-transition' }
      ],
      exercises: [
        { level: 'Aplicação', title: 'Detectar adulteração', task: 'Construir uma mini-cadeia de commits e mostrar que trocar um do meio quebra a verificação do commit e dos posteriores.', acceptance: 'O ponto de adulteração e a propagação são identificados.', evidence: 'Notebook com a cadeia íntegra e a adulterada.' },
        { level: 'Produção', title: 'SHA-1 vs SHA-256', task: 'Computar o id do mesmo conteúdo em SHA-1 e SHA-256 e comparar tamanho e sensibilidade.', acceptance: 'SHA-1 tem 40 hex e bate com o git; SHA-256 tem 64.', evidence: 'Notebook com os dois ids.' }
      ],
      interview: [
        { level: 'Aplicação', question: 'Por que o histórico do Git é considerado auditável?', expected: 'Cada commit hasheia o anterior; adulterar o passado quebra os hashes de todo o restante da cadeia.' },
        { level: 'Produção', question: 'Por que o Git está migrando para SHA-256?', expected: 'SHA-1 sofreu colisão prática (SHAttered); SHA-256 é a raiz de confiança definitiva, adotável por repositório.' }
      ],
      exampleFile: '../../examples/git-senior/fronteira/integridade.py'
    },
    {
      part: 'fronteira', level: 'Fronteira',
      title: 'Git em escala e a próxima geração (partial clone, jj)',
      objective: 'Escalar o Git a monorepos com partial clone, sparse checkout e commit-graph, e avaliar a próxima geração de interfaces (Jujutsu, Sapling) sobre o mesmo .git.',
      problem: 'O clone completo não escala a monorepos grandes, e times ignoram tanto as alavancas nativas do Git quanto as ferramentas que já superam sua interface.',
      concepts: ['Partial clone (blob:none)', 'Sparse checkout (cone)', 'commit-graph e multi-pack-index', 'Scalar', 'Jujutsu (jj) e Sapling'],
      internals: ['A regra de escala é não baixar, não materializar e não recomputar o que não se usa; partial clone, sparse checkout e commit-graph atacam cada uma.', 'jj lê e escreve o mesmo .git: muda a interface (sem staging, oplog reversível, conflitos gravados), não o formato — por isso o modelo de objetos continua valendo.'],
      prerequisites: ['Entender clone, checkout e o custo de baixar tudo.', 'Acesso a um repositório grande para medir.'],
      useWhen: ['Use ao tornar um monorepo grande usável no Git.', 'Priorize ao avaliar ferramentas que superam a interface do Git.'],
      avoidWhen: ['Não clone tudo quando só uma fração do repositório é usada.', 'Não adote uma ferramenta nova por novidade sem separar o ganho real.'],
      tradeoffs: { ganho: 'Escala o Git a monorepos e abre caminho para interfaces melhores sobre o mesmo .git.', custo: 'Partial clone e sparse checkout adicionam complexidade operacional.' },
      production: 'A evidência é um clone grande com --filter=blob:none e sparse-checkout cone medido contra o clone completo, e uma avaliação honesta do jj.',
      risks: ['Clone completo que não escala a monorepos grandes.', 'Adotar ferramenta nova por moda sem medir o ganho.'],
      checklist: ['Clonar com partial clone (blob:none) e sparse checkout cone.', 'Ligar commit-graph/multi-pack-index (ou usar Scalar).', 'Medir tempo e tamanho contra o clone completo.', 'Avaliar jj/Sapling separando ganho real de novidade.'],
      summary: 'Não baixar, não materializar e não recomputar o que não se usa; jj muda a interface sobre o mesmo .git, não o formato.',
      books: ['versionControl', 'proGit'],
      complements: [
        { title: 'Jujutsu (jj) — VCS Git-compatível', url: 'https://github.com/jj-vcs/jj' },
        { title: 'Git — Scalar (escala de monorepo)', url: 'https://git-scm.com/docs/scalar' },
        { title: 'Sapling — VCS escalável da Meta', url: 'https://sapling-scm.com/' }
      ],
      exercises: [
        { level: 'Aplicação', title: 'Clone que escala', task: 'Clonar um repositório grande com --filter=blob:none e sparse-checkout cone e comparar tempo e tamanho com um clone completo.', acceptance: 'Tempo e tamanho medidos para as duas formas.', evidence: 'Registro dos números.' },
        { level: 'Produção', title: 'Avaliar a próxima geração', task: 'Usar jj (git init --colocate) num repositório existente e descrever uma operação que ficou mais simples e uma mais estranha.', acceptance: 'Avaliação honesta separando ganho real de novidade.', evidence: 'Notas versionadas.' }
      ],
      interview: [
        { level: 'Aplicação', question: 'Como tornar um monorepo de dezenas de GB usável no Git?', expected: 'Partial clone (blob:none), sparse checkout (cone) e commit-graph — ou scalar clone, que liga os três.' },
        { level: 'Produção', question: 'O jj substitui o Git?', expected: 'Substitui a interface, não o formato: usa o mesmo .git; o valor é o modelo (sem staging, oplog, conflitos gravados).' }
      ],
      exampleFile: '../../examples/git-senior/fronteira/escala.md'
    }
  ],
  books: {
    proGit: {
      title: 'Pro Git',
      authors: 'Scott Chacon e Ben Straub',
      edition: '2ª edição (gratuito, oficial)',
      language: 'Inglês',
      depth: 'Fluxo diário e referência completa',
      path: 'pdfs/livros-git/Pro Git -- Scott Chacon, Ben Straub -- ( WeLib.org ).pdf'
    },
    buildingGit: {
      title: 'Building Git',
      authors: 'James Coglan',
      edition: 'Edição local',
      language: 'Inglês',
      depth: 'Internals — implementar o próprio Git',
      path: 'pdfs/livros-git/Buliding Git -- James Coglan -- ( WeLib.org ).pdf'
    },
    gitForTeams: {
      title: 'Git for Teams',
      authors: 'Emma Jane Hogbin Westby',
      edition: 'Edição local',
      language: 'Inglês',
      depth: 'Fluxos de time, revisão e governança',
      path: 'pdfs/livros-git/Git for Teams -- Emma Jane Hogbin Westby -- ( WeLib.org ).pdf'
    },
    versionControl: {
      title: 'Version Control with Git',
      authors: 'Prem Kumar Ponuthorai e Jon Loeliger',
      edition: '3ª edição',
      language: 'Inglês',
      depth: 'Ferramentas e técnicas avançadas',
      path: 'pdfs/livros-git/Version Control with Git- Powerful Tools and Techniques for -- Prem Kumar Ponuthorai and Jon Loeliger -- ( WeLib.org ).epub.pdf'
    }
  }
});

// ── Módulo 0 (ponte da Faixa 0) — construído fora da fábrica para usar numeração
//    0.x, campo `quiz` objetivo e um exemplo executável verificado. ──
const gitBaseParte = {
  index: '0/6',
  range: '4 módulos',
  page: 'base.html',
  navLabel: 'Módulo 0',
  title: 'Módulo 0 — da Faixa 0 ao Git',
  subtitle: 'Ponte dos fundamentos: o que é controle de versão e o que o Git guarda, os três estados e o commit limpo, branch/merge e o histórico como grafo, e o fluxo com repositório remoto.',
  prerequisites: [
    'Concluir a Trilha 0 (Fundamentos) ou equivalente.',
    'Terminal básico e Git instalado.',
    'Ter um projeto simples para versionar.'
  ],
  objectives: [
    'Entender o que é controle de versão e que um commit é uma fotografia (snapshot).',
    'Operar os três estados (working, staging, repositório) e montar commits limpos.',
    'Ver branch como ponteiro e o histórico como um grafo (DAG) de objetos por hash.',
    'Usar o fluxo com remoto: clone, add/commit, push, pull e a ideia de conflito.'
  ]
};

const gitBaseModules = [
  {
    id: 'base-controle-versao', number: '0.1', part: 'base', level: 'Ponte (Faixa 0)',
    title: 'O que é controle de versão (e o que o Git guarda)',
    objective: 'Entender por que se versiona código, o que um commit realmente guarda (uma fotografia do projeto) e por que isso é melhor que "copiar a pasta com data no nome".',
    problem: 'Quem sai da Faixa 0 salva versões como "projeto_final_v2_agora_vai": sem histórico confiável, sem saber o que mudou, sem voltar atrás com segurança. Git resolve isso, mas vira decoreba de comandos sem o modelo mental.',
    prerequisites: ['Trilha 0 (terminal, arquivos, Git básico).', 'Ter um projeto com alguns arquivos.'],
    concepts: ['Controle de versão', 'Commit como fotografia (snapshot)', 'Histórico e voltar atrás', 'Repositório', 'Por que não "copiar a pasta"'],
    internals: ['Um commit guarda uma fotografia do projeto naquele instante, com autor, data e uma mensagem — e um link para o commit anterior.', 'O Git guarda snapshots (não apenas diffs), o que torna voltar a qualquer ponto do histórico rápido e confiável.'],
    useWhen: ['Versione qualquer projeto desde o primeiro dia.', 'Faça um commit a cada mudança coerente, com mensagem clara.'],
    avoidWhen: ['Não controle versão copiando pastas com data no nome.', 'Não deixe de commitar por semanas "para não sujar o histórico".'],
    tradeoffs: { ganho: 'Histórico confiável, com quem/quando/por que e possibilidade de voltar atrás.', custo: 'Exige aprender o modelo do Git em vez de só copiar arquivos.' },
    production: 'Uma pasta cheia de "v1, v2, final, final2" impede saber o que mudou e quando quebrou. O exercício recria o mesmo projeto com commits e mensagens claras.',
    risks: ['Confundir controle de versão com backup.', 'Mensagens de commit vagas ("ajustes").', 'Commitar tudo de uma vez, sem histórico útil.'],
    checklist: ['Sei explicar o que um commit guarda?', 'Cada commit tem uma mensagem clara?', 'Consigo ver o histórico e voltar a um ponto?', 'Parei de versionar copiando pastas?'],
    interview: [
      { level: 'Fundamentos', question: 'O que um commit guarda?', expected: 'Uma fotografia (snapshot) do projeto naquele instante, com autor, data, mensagem e ligação ao commit anterior.' },
      { level: 'Aplicação', question: 'Por que controle de versão é melhor que copiar a pasta com data no nome?', expected: 'Dá histórico confiável com quem/quando/por que, permite comparar mudanças e voltar a qualquer ponto com segurança, sem duplicação manual.' }
    ],
    exercises: [
      { level: 'Fundamentos', title: 'Do "v2" ao histórico', task: 'Pegar um projeto salvo em pastas versionadas na unha e recriá-lo com uma sequência de commits com mensagens claras.', acceptance: 'O histórico conta a evolução do projeto de forma legível.', evidence: 'Repositório com log de commits.' },
      { level: 'Aplicação', title: 'Escrever boas mensagens', task: 'Fazer três commits coerentes com mensagens que expliquem o porquê da mudança.', acceptance: 'Cada mensagem diz o que mudou e por quê.', evidence: 'git log dos três commits.' }
    ],
    challenge: 'Explicar, sem jargão, por que um commit é uma "fotografia" e não um "diff".',
    summary: 'Controle de versão dá histórico confiável; um commit é uma fotografia do projeto com autor, data e mensagem — muito além de copiar a pasta.',
    books: ['proGit'],
    quiz: [
      { question: 'O que um commit do Git guarda?', options: ['Uma fotografia (snapshot) do projeto naquele instante', 'Só as linhas que mudaram', 'Apenas o nome do autor', 'Uma cópia do sistema operacional'], answer: 0, why: 'O Git guarda snapshots com autor, data, mensagem e link ao commit anterior.' },
      { question: 'Por que versionar é melhor que copiar a pasta com data no nome?', options: ['Dá histórico confiável (quem/quando/por que) e permite voltar atrás com segurança', 'Ocupa mais espaço', 'É a única forma de fazer backup', 'Deixa o código mais rápido'], answer: 0, why: 'O histórico rastreável e a reversão segura são o que a cópia manual não oferece.' },
      { question: 'Controle de versão é o mesmo que backup?', options: ['Não — versiona a evolução com histórico e autoria, não só uma cópia', 'Sim, é idêntico', 'Sim, mas mais lento', 'Não, é um antivírus'], answer: 0, why: 'Backup guarda uma cópia; versão registra a evolução com histórico, autoria e reversão.' }
    ]
  },
  {
    id: 'base-tres-estados', number: '0.2', part: 'base', level: 'Ponte (Faixa 0)',
    title: 'Os três estados e o commit limpo',
    objective: 'Operar os três estados do Git — working directory, staging (index) e repositório — controlando exatamente o que entra em cada commit.',
    problem: 'O iniciante faz git add . e commita tudo junto, misturando assuntos. Sem entender staging, os commits ficam ruidosos, difíceis de revisar e de reverter.',
    prerequisites: ['Módulo 0.1', 'Um repositório com mudanças locais.'],
    concepts: ['Working directory, staging (index) e repositório', 'git add e git commit', 'Staging seletivo', 'Diff staged vs unstaged', 'Commit atômico'],
    internals: ['A mudança percorre três áreas: você edita no working directory, escolhe o que vai no próximo commit com git add (staging) e grava com git commit (repositório).', 'O staging existe justamente para você montar um commit coerente escolhendo o que entra — não é burocracia.'],
    useWhen: ['Use o staging para separar mudanças de assuntos diferentes em commits distintos.', 'Revise o diff staged antes de commitar.'],
    avoidWhen: ['Não use git add . cegamente quando há mudanças não relacionadas.', 'Não commite sem olhar o que está staged.'],
    tradeoffs: { ganho: 'Commits atômicos e coerentes, fáceis de revisar, reverter e usar em bisect.', custo: 'Escolher o que entra em cada commit exige um pouco mais de atenção.' },
    production: 'Uma mudança que mistura correção de bug e refatoração num commit só impede reverter o bug isoladamente. O exercício separa em dois commits atômicos.',
    risks: ['git add . cego misturando assuntos.', 'Commitar sem revisar o diff.', 'Commits gigantes impossíveis de revisar.'],
    checklist: ['Sei distinguir working, staging e repositório?', 'Escolho o que entra em cada commit?', 'Reviso o diff staged antes de commitar?', 'Cada commit trata de um assunto só?'],
    interview: [
      { level: 'Fundamentos', question: 'Quais são os três estados/áreas do Git e o que faz git add?', expected: 'Working directory (edição), staging/index (o que vai no próximo commit) e repositório (gravado). git add move mudanças do working para o staging.' },
      { level: 'Aplicação', question: 'Por que fazer commits atômicos importa?', expected: 'Um commit por assunto facilita revisão, revert isolado e bisect; commits que misturam assuntos são difíceis de entender e desfazer.' }
    ],
    exercises: [
      { level: 'Fundamentos', title: 'Separar em dois commits', task: 'A partir de um working tree com duas mudanças não relacionadas, criar dois commits atômicos usando staging seletivo.', acceptance: 'Cada commit trata de um único assunto.', evidence: 'git log e diffs dos dois commits.' },
      { level: 'Aplicação', title: 'Revisar antes de commitar', task: 'Mostrar o diff staged e o unstaged de uma mudança e explicar a diferença.', acceptance: 'A distinção entre as áreas fica evidente.', evidence: 'Saídas de git diff e git diff --staged.' }
    ],
    challenge: 'Explicar por que o staging (index) não é burocracia, mas a ferramenta que torna possível um commit limpo.',
    summary: 'A mudança passa por working → staging → repositório; dominar o staging é o que permite commits atômicos e revisáveis.',
    books: ['proGit'],
    quiz: [
      { question: 'Quais são as três áreas do Git?', options: ['Working directory, staging (index) e repositório', 'Local, nuvem e backup', 'Branch, tag e commit', 'Frontend, backend e banco'], answer: 0, why: 'Você edita no working, escolhe o que entra no staging e grava no repositório.' },
      { question: 'O que o comando git add faz?', options: ['Move mudanças do working directory para o staging (próximo commit)', 'Cria um novo branch', 'Envia para o servidor', 'Apaga arquivos'], answer: 0, why: 'git add seleciona o que vai no próximo commit; git commit então grava.' },
      { question: 'Por que preferir commits atômicos?', options: ['Facilitam revisão, revert isolado e bisect', 'Ocupam menos espaço', 'São obrigatórios no Git', 'Deixam o repositório mais rápido'], answer: 0, why: 'Um assunto por commit torna o histórico legível e reversível.' }
    ]
  },
  {
    id: 'base-branch-grafo', number: '0.3', part: 'base', level: 'Ponte (Faixa 0)',
    title: 'Branch, merge e o histórico como grafo',
    objective: 'Entender branch como um ponteiro para um commit, merge como junção de histórias e o histórico como um DAG de objetos endereçados por hash — o modelo que torna todo comando previsível.',
    problem: 'Comandos de Git viram pânico ("vou perder tudo?") quando branch é confundido com cópia de arquivos e o histórico não é visto como um grafo. Sem o modelo, cada rebase ou reset é um salto no escuro.',
    prerequisites: ['Módulo 0.2', 'Noção de hash e de grafo.'],
    concepts: ['Branch como ponteiro (ref)', 'HEAD', 'Merge de histórias', 'DAG de commits', 'Conteúdo endereçável por hash'],
    internals: ['Um branch é apenas um ponteiro móvel para um commit; criar/trocar branch não copia arquivos, só move o ponteiro (e o HEAD).', 'Cada commit aponta para o pai, formando um DAG imutável; como cada objeto é endereçado pelo hash do próprio conteúdo, alterar algo muda o id e é detectável.'],
    useWhen: ['Crie um branch para cada trabalho isolado.', 'Pense no efeito do comando pelo grafo antes de rodá-lo, sobretudo em rebase/reset.'],
    avoidWhen: ['Não trate branch como cópia de arquivos.', 'Não reescreva histórico compartilhado sem entender o DAG.'],
    tradeoffs: { ganho: 'Prever o efeito de qualquer comando a partir do modelo, sem decoreba nem pânico.', custo: 'Exige entender objetos, refs e o DAG antes de "só usar".' },
    production: 'Um reset assusta o time que acha que "perdeu commits", quando só o ponteiro se moveu. O exercício mostra, no exemplo executável, que os commits continuam íntegros com o mesmo id.',
    risks: ['Tratar branch como cópia e temer perder arquivos.', 'Confundir mover ponteiro com apagar histórico.', 'Reescrever histórico compartilhado sem cuidado.'],
    checklist: ['Sei que branch é um ponteiro para um commit?', 'Entendo o histórico como um grafo (DAG)?', 'Sei que o id vem do hash do conteúdo?', 'Prevejo o efeito de um comando pelo grafo?'],
    interview: [
      { level: 'Fundamentos', question: 'O que é um branch internamente?', expected: 'Apenas um ponteiro móvel (ref) para um commit — não uma cópia de arquivos; trocar de branch move o HEAD.' },
      { level: 'Aplicação', question: 'Por que o histórico do Git é confiável/íntegro?', expected: 'Porque cada objeto é endereçado pelo hash do seu conteúdo e cada commit referencia o pai; alterar qualquer coisa muda o hash e quebra a cadeia, tornando a adulteração detectável.' }
    ],
    exercises: [
      { level: 'Fundamentos', title: 'Ver o grafo e o hash', task: 'Rodar o exemplo e explicar por que o mesmo conteúdo dá o mesmo hash e por que mover um branch não altera os commits.', acceptance: 'A saída liga hash a conteúdo e branch a ponteiro.', evidence: 'Saída do script + explicação.' },
      { level: 'Aplicação', title: 'Desenhar o DAG', task: 'Criar dois branches, um merge, e desenhar o grafo resultante a partir de git log --graph.', acceptance: 'O diagrama mostra os ponteiros e o merge corretamente.', evidence: 'Diagrama do DAG + git log --graph.' }
    ],
    challenge: 'Explicar por que um git reset que "some com commits" na verdade só moveu um ponteiro — e como recuperá-los.',
    summary: 'Branch é um ponteiro; o histórico é um DAG de objetos endereçados por hash. Entender o grafo torna todo comando previsível e o histórico íntegro.',
    books: ['proGit', 'buildingGit'],
    exampleFile: '../../examples/git-senior/git-zero.mjs',
    quiz: [
      { question: 'O que é um branch no Git, internamente?', options: ['Um ponteiro móvel (ref) para um commit', 'Uma cópia dos arquivos', 'Uma pasta separada', 'Um backup do projeto'], answer: 0, why: 'Branch é só um ponteiro; trocar de branch move o HEAD, não copia arquivos.' },
      { question: 'Por que o id de um objeto do Git vem do hash do conteúdo?', options: ['Content-addressable: o mesmo conteúdo dá o mesmo id e adulteração é detectável', 'Para economizar espaço', 'Porque o Git escolhe ids aleatórios', 'Para ordenar por data'], answer: 0, why: 'O hash do conteúdo garante integridade: mudar algo muda o id e quebra a cadeia.' },
      { question: 'Um git reset que "some com commits" na verdade:', options: ['Só move um ponteiro; os commits continuam íntegros e recuperáveis', 'Apaga os commits do disco', 'Corrompe o repositório', 'Envia tudo para o remoto'], answer: 0, why: 'Mover o ponteiro não altera os commits (imutáveis por hash); eles podem ser recuperados.' }
    ]
  },
  {
    id: 'base-remoto-colaboracao', number: '0.4', part: 'base', level: 'Ponte (Faixa 0)',
    title: 'Remoto: clone, push, pull e colaboração',
    objective: 'Entender a diferença entre repositório local e remoto e o fluxo básico de colaboração: clone, add/commit, push, pull e a ideia de conflito e sua resolução.',
    problem: 'O iniciante trata o GitHub como "um pen drive na nuvem" e se perde entre local e remoto: esquece de dar pull, sobrescreve trabalho e entra em pânico com conflitos.',
    prerequisites: ['Módulo 0.3', 'Uma conta em uma plataforma (ex.: GitHub) e um repositório de teste.'],
    concepts: ['Repositório local × remoto', 'origin e clone', 'push e pull', 'Conflito e resolução', 'Fluxo básico de colaboração'],
    internals: ['O remoto (origin) é outra cópia do repositório; você trabalha local e sincroniza com push (enviar) e pull (receber).', 'Um conflito acontece quando duas pessoas mudam a mesma linha; o Git marca o trecho e pede que um humano decida — não é erro, é negociação.'],
    useWhen: ['Dê pull antes de começar e antes de dar push.', 'Faça commits pequenos e sincronize com frequência para reduzir conflitos.'],
    avoidWhen: ['Não force push sobre trabalho compartilhado sem entender o efeito.', 'Não trate o remoto como backup manual de arquivos soltos.'],
    tradeoffs: { ganho: 'Colaboração segura: cada um trabalha local e integra com histórico rastreável.', custo: 'Exige disciplina de pull/push e saber resolver conflitos.' },
    production: 'Duas pessoas editam o mesmo arquivo; sem pull, uma sobrescreve a outra. O exercício reproduz o conflito e o resolve conscientemente.',
    risks: ['Esquecer o pull e trabalhar em cima de versão velha.', 'Pânico com conflito e sobrescrever trabalho alheio.', 'Force push destrutivo em branch compartilhada.'],
    checklist: ['Sei a diferença entre local e remoto (origin)?', 'Dou pull antes de push?', 'Sei o que gera um conflito?', 'Sei resolver um conflito lendo os marcadores?'],
    interview: [
      { level: 'Fundamentos', question: 'Qual a diferença entre push e pull?', expected: 'push envia seus commits locais para o remoto; pull traz (e integra) os commits do remoto para o seu repositório local.' },
      { level: 'Aplicação', question: 'O que é um conflito de merge e como resolvê-lo?', expected: 'Ocorre quando duas mudanças alteram a mesma parte de um arquivo; o Git marca o trecho e um humano escolhe/combina o conteúdo correto e conclui o merge.' }
    ],
    exercises: [
      { level: 'Fundamentos', title: 'Ciclo local↔remoto', task: 'Clonar um repositório, fazer um commit e dar push; em outra cópia, dar pull e ver a mudança chegar.', acceptance: 'A mudança viaja de uma cópia à outra pelo remoto.', evidence: 'git log das duas cópias após push/pull.' },
      { level: 'Aplicação', title: 'Resolver um conflito', task: 'Provocar um conflito na mesma linha em duas cópias e resolvê-lo conscientemente.', acceptance: 'O conflito é resolvido e o merge concluído.', evidence: 'Histórico com o merge e a resolução.' }
    ],
    challenge: 'Explicar por que dar pull antes de push evita a maioria dos conflitos e sobrescritas.',
    summary: 'O remoto (origin) é outra cópia; push envia, pull recebe. Conflito não é erro: é o Git pedindo a um humano que decida quando duas mudanças colidem.',
    books: ['proGit', 'gitForTeams'],
    quiz: [
      { question: 'Qual a diferença entre push e pull?', options: ['push envia commits ao remoto; pull traz commits do remoto', 'push baixa; pull envia', 'são a mesma coisa', 'push cria branch; pull apaga'], answer: 0, why: 'push publica seu trabalho no remoto; pull integra o trabalho do remoto ao seu local.' },
      { question: 'O que é um conflito de merge?', options: ['Duas mudanças alteram a mesma parte de um arquivo e um humano precisa decidir', 'Um erro que corrompe o repositório', 'Falta de espaço em disco', 'Um vírus no commit'], answer: 0, why: 'Conflito é negociação: o Git marca o trecho e você escolhe/combina o conteúdo.' },
      { question: 'Boa prática para reduzir conflitos e sobrescritas:', options: ['Dar pull antes de começar e antes de push, com commits pequenos e frequentes', 'Nunca dar pull', 'Sempre usar force push', 'Trabalhar semanas sem sincronizar'], answer: 0, why: 'Sincronizar cedo e em lotes pequenos evita divergências grandes e sobrescritas.' }
    ]
  }
];

data.modules = [...gitBaseModules, ...data.modules];
data.academy.parts = { base: gitBaseParte, ...data.academy.parts };

// Exemplos executáveis por módulo sênior (níveis 1–4 + escala), atribuídos por número.
const EXEMPLOS_GIT = {
  1: 'objetos-git.mjs', 2: 'tres-estados.mjs', 3: 'commits-atomicos.mjs', 4: 'reflog-recuperacao.mjs',
  5: 'refs-e-head.mjs', 6: 'estrategia-branches.mjs', 7: 'merge-rebase-cherrypick.mjs', 8: 'resolucao-conflito.mjs',
  9: 'pull-request-gate.mjs', 10: 'plataformas-comparacao.mjs', 11: 'hooks-ci-gate.mjs', 12: 'scan-segredos.mjs',
  13: 'bisect.mjs', 14: 'governanca-branch-protection.mjs', 15: 'monorepo-multirepo.mjs', 16: 'versionar-contratos.mjs',
  17: 'gitops-promocao.mjs', 23: 'git-em-escala.mjs'
};
for (const m of data.modules) {
  if (EXEMPLOS_GIT[m.number]) m.exampleFile = `../../examples/git-senior/${EXEMPLOS_GIT[m.number]}`;
}

export const gitAcademy = data.academy;
export const gitModules = data.modules;
export const gitBooks = data.books;
export const gitAssessment = data.assessment;

export const gitAnswerKey = gitModules.map((module) => ({
  module: module.number,
  title: module.title,
  objetivoAtingido: module.objective,
  respostaEsperadaNaEntrevista: (module.interview || []).map((item) => `${item.level}: ${item.expected}`),
  erroMaisComum: (module.risks && module.risks[0]) || 'Concluir a leitura sem reproduzir o resultado em repositório.',
  criterioDeAceite: (module.exercises || []).map((item) => `${item.level} — evidência: ${item.evidence}`),
  sinalDeQueNaoDominou: module.risks || []
}));
