/*
 * TRACK EXERCISES — prática visível nas páginas (DIDATIC-016)
 *
 * Cada exercício termina em um artefato verificável. Não há tarefa baseada
 * apenas em leitura, vídeo ou marcação de checklist.
 */

import { resolveTrackId } from './tracks.js';

export const EXERCICIOS_TRILHA = {
  java: [
    { tipo: 'Linguagem', titulo: 'Contratos Java 21', tarefa: 'Modele um fluxo com record, sealed hierarchy, pattern switch, igualdade, ordenação e generics sem warnings.', evidencia: 'PR compilado com --release 21 -Xlint:all e testes de contratos.' },
    { tipo: 'Código', titulo: 'API evolutiva sem tutorial', tarefa: 'Implemente um fluxo REST idempotente com validação, regra de negócio, Problem Details e compatibilidade documentada.', evidencia: 'PR com testes unitários, integração e contrato verdes.' },
    { tipo: 'Concorrência', titulo: 'JMM e Virtual Threads', tarefa: 'Provoque race condition, prove a correção por happens-before e limite uma carga de I/O em Virtual Threads pela capacidade do downstream.', evidencia: 'Teste de estresse, decisão do modelo e medição antes/depois.' },
    { tipo: 'Diagnóstico', titulo: 'JVM sob falha', tarefa: 'Investigue class loading, deadlock ou retenção usando javap, JFR, jcmd e dumps proporcionais à hipótese.', evidencia: 'Árvore de hipóteses, artefatos anotados, causa e runbook.' },
    { tipo: 'Performance', titulo: 'Otimização medida', tarefa: 'Separe microbenchmark JMH de load test e aplique uma única mudança por vez sobre um SLO definido.', evidencia: 'Baseline, protocolo, percentis, profiler, resultado e guardrail.' },
    { tipo: 'Arquitetura', titulo: 'Capstone evolutivo', tarefa: 'Evolua o ledger modular até outbox, idempotência, observabilidade, segurança e game day; só extraia serviço mediante gatilho medido.', evidencia: 'Release com ADRs, C4, testes, SLO, dashboard, rollback e postmortem.' }
  ],
  bancos: [
    { tipo: 'SQL', titulo: 'Consulta e plano', tarefa: 'Resolva uma consulta com CTE e window function em dataset versionado; interprete EXPLAIN ANALYZE.', evidencia: 'Script, plano antes/depois e índice justificado.' },
    { tipo: 'ORM', titulo: 'N+1 reproduzível', tarefa: 'Crie um N+1 proposital, prove pelo log SQL e corrija sem trocar o contrato da API.', evidencia: 'Teste de regressão e contagem de queries.' },
    { tipo: 'Operação', titulo: 'Restore e réplica', tarefa: 'Restaure um backup em ambiente limpo e simule promoção de réplica.', evidencia: 'Runbook executado, RTO/RPO e validação de consistência.' }
  ],
  dsa: [
    { tipo: 'Padrão', titulo: 'Do enunciado ao padrão', tarefa: 'Classifique 5 problemas por padrão (dois ponteiros, janela deslizante, BFS/DFS, programação dinâmica, guloso) antes de codificar e justifique a estrutura de dados escolhida.', evidencia: 'Tabela problema → padrão → estrutura, com o custo esperado.' },
    { tipo: 'Implementação', titulo: 'Resolver sob tempo', tarefa: 'Resolva um problema de dificuldade média em até 40 min, declarando as complexidades de tempo e espaço antes de rodar.', evidencia: 'Solução testada e análise Big O confirmada por medição.' },
    { tipo: 'Trade-off', titulo: 'Contraexemplo do guloso', tarefa: 'Mostre um caso em que uma solução gulosa falha e corrija com programação dinâmica ou outra abordagem.', evidencia: 'Contraexemplo, solução correta e comparação de custo.' }
  ],
  git: [
    { tipo: 'Fluxo', titulo: 'Histórico revisável', tarefa: 'Transforme uma mudança grande em commits pequenos, convencionais e independentes.', evidencia: 'Pull Request com histórico que pode ser revisado por commit.' },
    { tipo: 'Recuperação', titulo: 'Regressão com bisect', tarefa: 'Plante uma regressão entre dez commits e encontre o primeiro commit ruim com bisect.', evidencia: 'Transcrição dos comandos e commit corretivo.' },
    { tipo: 'Colaboração', titulo: 'Conflito sem perda', tarefa: 'Resolva conflito entre duas branches preservando a intenção de ambas.', evidencia: 'Merge ou rebase documentado com teste verde.' }
  ],
  arquitetura: [
    { tipo: 'Decisão', titulo: 'ADR reversível', tarefa: 'Compare três alternativas para uma restrição real e declare o gatilho de reversão.', evidencia: 'ADR com contexto, decisão, consequências e critério de saída.' },
    { tipo: 'Modelo', titulo: 'C4 verificável', tarefa: 'Desenhe contexto e containers do DevCore e confronte cada fronteira com o repositório.', evidencia: 'Diagramas C4 e links para módulos correspondentes.' },
    { tipo: 'Trade-off', titulo: 'Monólito antes de serviços', tarefa: 'Defenda um monólito modular e identifique a métrica que justificaria extrair um serviço.', evidencia: 'RFC com custo operacional das duas alternativas.' }
  ],
  devops: [
    { tipo: 'Pipeline', titulo: 'Build quebrado', tarefa: 'Receba um pipeline com falha, encontre a causa pelo log e corrija sem desabilitar o gate.', evidencia: 'Execução vermelha, diagnóstico e execução verde.' },
    { tipo: 'Entrega', titulo: 'Rollback praticado', tarefa: 'Publique uma versão com defeito controlado e execute rollback dentro do limite definido.', evidencia: 'Log do deploy, tempo de recuperação e runbook atualizado.' },
    { tipo: 'Operação', titulo: 'Incidente simulado', tarefa: 'Investigue latência crescente usando logs, métricas e tracing.', evidencia: 'Timeline, hipótese descartada, causa raiz e postmortem.' }
  ],
  sec: [
    { tipo: 'Design', titulo: 'Fronteira sem premissa', tarefa: 'Mapeie atores, ativos, fluxos e trust boundaries de uma operação crítica e execute STRIDE.', evidencia: 'DFD versionado, riscos priorizados, requisitos ASVS e residual.' },
    { tipo: 'Ataque', titulo: 'Autorização quebrada', tarefa: 'Explore e corrija acesso indevido por objeto e tenant com dois usuários em laboratório isolado.', evidencia: 'PoC mínima, causa raiz e teste negativo que falha antes e passa depois.' },
    { tipo: 'Supply chain', titulo: 'Artefato verificável', tarefa: 'Gere SBOM e proveniência, assine por digest e rejeite identidade ou artefato divergente no deployment.', evidencia: 'Pipeline, attestations e execução bloqueada de forma reproduzível.' },
    { tipo: 'Resposta', titulo: 'Segredo comprometido', tarefa: 'Execute um game day de segredo publicado, contenha, rotacione, investigue e recupere.', evidencia: 'Timeline, MTTD/MTTC/MTTR, revogação comprovada e guardrail preventivo.' }
  ],
  frontend: [
    { tipo: 'Interface', titulo: 'Quatro estados', tarefa: 'Implemente loading, vazio, erro e sucesso para uma chamada autenticada.', evidencia: 'Story ou teste visual dos quatro estados.' },
    { tipo: 'Acessibilidade', titulo: 'Fluxo sem mouse', tarefa: 'Conclua o fluxo crítico só com teclado e leitor de tela.', evidencia: 'Checklist de foco, nomes acessíveis e contraste AA.' },
    { tipo: 'Teste', titulo: 'Falha real', tarefa: 'Simule timeout e resposta inválida sem deixar a interface travada.', evidencia: 'Teste automatizado e mensagem de recuperação.' }
  ],
  python: [
    { tipo: 'Packaging', titulo: 'Projeto reproduzível', tarefa: 'Crie pacote tipado com pyproject, lint, type-check e testes.', evidencia: 'Pipeline verde a partir de clone limpo.' },
    { tipo: 'API', titulo: 'FastAPI assíncrona', tarefa: 'Implemente endpoint com persistência, validação e cancelamento sem bloquear o event loop.', evidencia: 'Teste pytest, contrato OpenAPI e medição concorrente.' },
    { tipo: 'Operação', titulo: 'Serviço observável', tarefa: 'Adicione logs estruturados, métricas e tracing ao serviço Python.', evidencia: 'Trace ponta a ponta ligado à requisição Java.' }
  ],
  ia: [
    { tipo: 'Baseline', titulo: 'IA precisa existir?', tarefa: 'Compare regra determinística, busca lexical e LLM no mesmo conjunto de casos.', evidencia: 'Tabela de qualidade, latência, custo e decisão.' },
    { tipo: 'RAG', titulo: 'Recuperação avaliada', tarefa: 'Versione corpus e perguntas; meça recuperação, citação e resposta final.', evidencia: 'Dataset, métricas e análise dos cinco piores erros.' },
    { tipo: 'Red team', titulo: 'Ataque ao contexto', tarefa: 'Tente injetar instruções, cruzar tenant e acionar ferramenta não autorizada.', evidencia: 'Casos adversariais automatizados e controles aplicados.' }
  ],
  aieng: [
    { tipo: 'Verificação', titulo: 'Saída sob spec', tarefa: 'Gere uma função com IA, escreva você mesmo a spec/testes (o oráculo) e prove que uma versão plausível-porém-errada é reprovada.', evidencia: 'Testes que falham na versão errada e passam na correta.' },
    { tipo: 'Supply chain', titulo: 'Dependência alucinada', tarefa: 'Verifique os imports sugeridos pela IA contra o registro real e bloqueie os inexistentes (slopsquatting).', evidencia: 'Checagem que flagra o pacote alucinado antes de instalar.' },
    { tipo: 'Eval', titulo: 'Regressão de prompt', tarefa: 'Monte um golden dataset e um juiz automatizado; versione o prompt e detecte uma regressão por slice.', evidencia: 'Dataset, métrica por slice e diff que reprova a regressão.' }
  ],
  matematica: [
    { tipo: 'Complexidade', titulo: 'Recorrência aplicada', tarefa: 'Resolva três recorrências e confronte a previsão com medições do algoritmo.', evidencia: 'Cálculo, gráfico e explicação da divergência.' },
    { tipo: 'Capacidade', titulo: 'Estimativa de sistema', tarefa: 'Estime QPS, armazenamento, banda e pico de um caso de System Design.', evidencia: 'Planilha ou notebook com premissas explícitas.' },
    { tipo: 'Métrica', titulo: 'Erro de classificação', tarefa: 'Construa matriz de confusão e explique precisão, recall e F1 para duas políticas de corte.', evidencia: 'Notebook e decisão ligada ao custo do erro.' }
  ],
  ingles: [
    { tipo: 'Escrita', titulo: 'PR profissional', tarefa: 'Escreva contexto, mudança, testes, risco e rollback de uma entrega real em inglês.', evidencia: 'Pull Request revisado com checklist.' },
    { tipo: 'Fala', titulo: 'Incidente em três minutos', tarefa: 'Explique impacto, causa, mitigação e prevenção sem ler roteiro.', evidencia: 'Gravação e autoavaliação de clareza.' },
    { tipo: 'Entrevista', titulo: 'System Design em inglês', tarefa: 'Conduza requirements, capacity, design e trade-offs durante 45 minutos.', evidencia: 'Gravação, diagrama e feedback estruturado.' }
  ],
  aws: [
    { tipo: 'Infra', titulo: 'Ambiente reproduzível', tarefa: 'Provisione rede, compute e banco com Terraform a partir de uma conta limpa.', evidencia: 'Plan/apply, diagrama e custo mensal estimado.' },
    { tipo: 'Resiliência', titulo: 'Falha e restore', tarefa: 'Interrompa um componente, execute failover e restaure dados.', evidencia: 'RTO/RPO medidos e runbook corrigido.' },
    { tipo: 'FinOps', titulo: 'Custo defendido', tarefa: 'Compare duas arquiteturas por custo normal, pico e ocioso.', evidencia: 'Estimativa com premissas e ação de otimização.' }
  ],
  financeiro: [
    { tipo: 'Fluxo', titulo: 'Fechamento mensal', tarefa: 'Classifique todas as entradas e saídas sem categoria desconhecida.', evidencia: 'Resumo mensal conciliado com extratos.' },
    { tipo: 'Risco', titulo: 'Reserva com cenário', tarefa: 'Simule perda de renda e defina reserva, liquidez e prazo de recomposição.', evidencia: 'Plano com três cenários e gatilhos de ação.' },
    { tipo: 'Transição', titulo: 'Decisão profissional', tarefa: 'Calcule runway para mudança de trabalho ou contratação própria.', evidencia: 'Orçamento, margem de segurança e data de revisão.' }
  ],
  fundamentos: [
    { tipo: 'A máquina', titulo: 'Bit, byte e float', tarefa: 'Converta números entre decimal, binário e hex e mostre por que 0.1 + 0.2 não dá 0.3.', evidencia: 'Tabela de conversões + saída do exemplo executável comentada.' },
    { tipo: 'Lógica', titulo: 'Rastreio na mão', tarefa: 'Decomponha um problema em passos e rastreie a execução de um laço numa mesa de execução.', evidencia: 'Pseudocódigo + tabela iteração→variável→valor.' },
    { tipo: 'Ferramental', titulo: 'Debug e versão', tarefa: 'Ache um bug com o debugger (breakpoint, não print) e versione a correção em Git.', evidencia: 'Sessão de debug descrita + commit com boa mensagem.' }
  ],
  treino: [
    { tipo: 'Técnica', titulo: 'Série filmada', tarefa: 'Registre uma série de exercício composto e avalie amplitude, estabilidade e esforço.', evidencia: 'Vídeo privado ou anotação técnica comparativa.' },
    { tipo: 'Progressão', titulo: 'Oito semanas', tarefa: 'Aplique progressão de carga ou repetições preservando execução e recuperação.', evidencia: 'Registro de carga, repetições e RPE.' },
    { tipo: 'Recuperação', titulo: 'Decisão de deload', tarefa: 'Use sono, dor, performance e fadiga para decidir manter, reduzir ou interromper carga.', evidencia: 'Registro da decisão e resposta na semana seguinte.' }
  ]
};

export const exerciciosDaTrilha = (trilha) => EXERCICIOS_TRILHA[resolveTrackId(trilha)] || [];
