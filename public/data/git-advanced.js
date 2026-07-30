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
      books: ['gitForTeams'],
      exercises: [{ level: 'Produção', title: 'Promoção auditável por PR', task: 'Modelar a promoção de um ambiente a outro via PR no repositório de estado e demonstrar rollback por revert.', acceptance: 'Promoção e rollback ficam registrados como commits revisáveis.', evidence: 'PRs de promoção e de rollback.' }],
      interview: [{ level: 'Produção', question: 'Como o GitOps torna um rollback trivial e auditável?', expected: 'O estado vive no Git; reverter o commit restaura o estado anterior com histórico completo.' }]
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

export const gitAcademy = data.academy;
export const gitModules = data.modules;
export const gitBooks = data.books;
export const gitAssessment = data.assessment;
