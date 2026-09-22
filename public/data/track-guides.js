/*
 * TRACK GUIDES — contrato didático de entrada e saída (DIDATIC-005/006)
 *
 * Cada página de trilha abre com o mesmo contrato:
 * pré-requisitos → objetivos → critérios observáveis de conclusão.
 * Os critérios evitam verbos passivos como "ler", "assistir" ou "marcar".
 */

import { resolveTrackId } from './tracks.js';

export const GUIAS_TRILHA = {
  java: {
    nome: 'Java 21+ Sênior e Expert',
    prerequisitos: ['Lógica, orientação a objetos e Java básico compilável', 'Git para versionar exercícios, ADRs e evidências', 'SQL, HTTP e testes em nível introdutório'],
    objetivos: ['Modelar APIs e domínios com contratos Java 21 explícitos', 'Provar correção concorrente e diagnosticar JVM, GC e performance', 'Projetar persistência e sistemas distribuídos resilientes', 'Conduzir decisões de segurança, observabilidade e arquitetura'],
    criterios: ['Conclui os 20 módulos com ao menos um exercício aplicado por módulo', 'Compila os exemplos com Java 21 e zero warning em -Xlint:all', 'Explica generics, collections, streams, JMM, class loading, JIT e GC', 'Diagnostica deadlock, retenção e regressão de p99 com evidência', 'Entrega um capstone com ADRs, testes, SLO, runbook e game day', 'Não marca Dominado antes de evidência validada e revisão D30']
  },
  bancos: {
    nome: 'Banco de Dados Sênior',
    prerequisitos: ['Executar uma aplicação backend e um PostgreSQL local ou em container', 'Escrever SQL básico e versionar scripts, testes e evidências com Git', 'Conhecer HTTP, transações e métricas de latência em nível introdutório'],
    objetivos: ['Modelar invariantes relacionais e documentos por atomicidade e padrão de acesso', 'Diagnosticar consultas, locks, WAL, pool e capacidade com planos e métricas', 'Evoluir schema, cache e eventos sem dual-write ou incompatibilidade', 'Operar segurança, observabilidade, backup, restore e resposta a incidente'],
    criterios: ['Conclui os 20 módulos com ao menos um exercício aplicado e evidência por módulo', 'Executa schema, migrations e testes em banco descartável por uma única instrução', 'Interpreta EXPLAIN ANALYZE e comprova uma otimização com baseline antes/depois', 'Reproduz e corrige anomalia concorrente, N+1 e migration incompatível', 'Evolui o ledger relacional até outbox, projeção e cache preservando dados e testes', 'Demonstra restore e game day dentro de RTO, RPO e SLO declarados', 'Não marca Dominado antes de URL de evidência validada e revisão D30']
  },
  dsa: {
    nome: 'Algoritmos e Estruturas de Dados',
    prerequisitos: ['Sintaxe Java, funções, loops e recursão básica', 'Collections básicas de Java', 'Notação Big O introdutória'],
    objetivos: ['Reconhecer padrões antes de codificar', 'Escolher estruturas por custo e semântica', 'Explicar solução e trade-offs sob limite de tempo'],
    criterios: ['Resolve problema médio em até 40 minutos', 'Explica tempo e espaço sem consultar', 'Implementa trie, prefix sum e binary search', 'Usa equals, hashCode e Comparator corretamente', 'Apresenta contraexemplo quando greedy não funciona']
  },
  aieng: {
    nome: 'Engenharia Assistida por IA',
    prerequisitos: ['Fazer engenharia sem IA (código, testes, revisão, Git)', 'Ler um diff e escrever spec/teste', 'Métricas de entrega (DORA) em nível prático'],
    objetivos: ['Usar a IA como amplificador que se verifica, não como oráculo', 'Dirigir por spec e contexto e revisar por intenção e risco', 'Tratar feature de IA como software: eval, regressão e governança'],
    criterios: ['Escreve spec executável e mantém o teste (oráculo) fora do que a IA gera sozinha', 'Verifica a saída com testes e checa dependências alucinadas antes de aceitar', 'Mede uma feature de IA com golden dataset e detecta regressão de prompt', 'Mede impacto real (throughput e estabilidade), não velocidade percebida', 'Contém prompt injection e agência de ferramentas e não vaza segredos em prompts']
  },
  git: {
    nome: 'Git & Versionamento',
    prerequisitos: ['Terminal e sistema de arquivos', 'Editor de código configurado', 'Um projeto pequeno para versionar'],
    objetivos: ['Criar histórico legível e revisável', 'Colaborar sem perder trabalho', 'Recuperar falhas e governar mudanças'],
    criterios: ['Resolve conflito sem apagar trabalho alheio', 'Reescreve histórico com rebase interativo', 'Encontra regressão com bisect', 'Entrega PR pequeno com commits convencionais', 'Configura proteção de branch e CODEOWNERS']
  },
  arquitetura: {
    nome: 'Arquitetura',
    prerequisitos: ['Uma API backend já entregue', 'HTTP, banco e mensageria em nível prático', 'Experiência mínima com deploy e incidentes'],
    objetivos: ['Projetar fronteiras e contratos claros', 'Comparar alternativas por trade-offs', 'Comunicar decisões com C4, ADR e RFC'],
    criterios: ['Produz ADR com alternativas e critério de reversão', 'Desenha C4 nos níveis 1 e 2', 'Defende quando não usar microsserviços', 'Define limites de um monólito modular', 'Explica impacto de consistência, custo e operação']
  },
  devops: {
    nome: 'DevOps, Cloud e SRE',
    prerequisitos: ['Linux, Git, HTTP, DNS e terminal básicos', 'Aplicação com testes automatizados e build reproduzível', 'Noções de rede, containers e operação de processos'],
    objetivos: ['Mapear fluxo e automatizar entrega com feedback rápido', 'Construir plataforma reproduzível com IaC e Kubernetes', 'Operar confiabilidade por telemetria, SLO, incidentes e melhoria contínua'],
    criterios: ['Produz artefato imutável e pipeline a partir de clone limpo', 'Recria infraestrutura por IaC sem passo manual oculto', 'Opera workload Kubernetes com recursos, probes, política de rede e rollback', 'Define SLI/SLO e diagnostica incidente correlacionando logs, métricas e traces', 'Executa restore e game day dentro de RTO/RPO e preserva evidência para revisão D30']
  },
  sec: {
    nome: 'Segurança — confiança verificável',
    prerequisitos: ['Aplicação web, API e banco executáveis localmente', 'HTTP, autenticação, Git, testes e pipeline de CI', 'Laboratório isolado e autorização explícita para prática ofensiva'],
    objetivos: ['Modelar ameaças e requisitos verificáveis', 'Implementar controles em identidade, acesso, interpretação e supply chain', 'Reproduzir falhas e comprovar correções com testes negativos', 'Operar detecção, resposta e melhoria sistêmica'],
    criterios: ['Explora e corrige cinco classes de falha em laboratório autorizado', 'Implementa autorização por objeto e tenant com teste negativo', 'Produz DFD, STRIDE e matriz ASVS 5.0.0 rastreáveis', 'Verifica SBOM, proveniência, assinatura e identidade no deployment', 'Executa game day com contenção, recovery e melhoria preventiva', 'Mantém URLs HTTP(S) de evidência e conclui revisão D30']
  },
  frontend: {
    nome: 'Frontend Engineering',
    prerequisitos: ['HTML, CSS e JavaScript básicos', 'API HTTP com contrato documentado', 'Git e terminal'],
    objetivos: ['Construir interfaces tipadas e acessíveis', 'Tratar loading, vazio, erro e sucesso', 'Testar e observar experiência real'],
    criterios: ['Consome API autenticada com contrato tipado', 'Passa navegação por teclado e contraste AA', 'Testa fluxo crítico e estado de erro', 'Mantém layout sem overflow em 390 px', 'Publica build reproduzível']
  },
  python: {
    nome: 'Python',
    prerequisitos: ['Lógica e orientação a objetos', 'HTTP e APIs REST', 'Terminal, Git e ambiente virtual'],
    objetivos: ['Escrever Python tipado e testável', 'Construir APIs e automações', 'Integrar serviços Python ao produto Java'],
    criterios: ['Empacota projeto com pyproject', 'Entrega API FastAPI tipada', 'Mantém suíte pytest verde', 'Implementa fluxo async sem bloquear o event loop', 'Integra serviço com contrato e observabilidade']
  },
  ia: {
    nome: 'IA Engineering',
    prerequisitos: ['Python e manipulação de dados', 'Probabilidade e álgebra linear aplicadas', 'API, banco e observabilidade básicos'],
    objetivos: ['Construir features com LLM e RAG', 'Avaliar qualidade, custo e latência', 'Proteger e operar sistemas de IA'],
    criterios: ['Compara baseline determinístico com LLM', 'Avalia RAG em conjunto de teste versionado', 'Mede custo e latência por requisição', 'Testa prompt injection e vazamento de contexto', 'Publica análise de erros e limitações']
  },
  matematica: {
    nome: 'Matemática Aplicada',
    prerequisitos: ['Álgebra escolar e porcentagem', 'Lógica de programação', 'Planilha ou Python para experimentar'],
    objetivos: ['Aplicar matemática a algoritmos, dados e IA', 'Estimar capacidade e risco', 'Interpretar métricas sem confundir sinais'],
    criterios: ['Resolve recorrência e justifica Big O', 'Calcula percentis e interpreta cauda', 'Estima QPS, armazenamento e banda', 'Explica precisão, recall e F1 com matriz', 'Relaciona similaridade de cosseno a embeddings']
  },
  ingles: {
    nome: 'Inglês Técnico',
    prerequisitos: ['Inglês geral A2/B1', 'Rotina técnica ativa para gerar contexto', 'Disponibilidade para falar e escrever toda semana'],
    objetivos: ['Ler documentação sem tradução automática', 'Escrever artefatos profissionais', 'Defender decisões e incidentes oralmente'],
    criterios: ['Produz README e PR claros em inglês', 'Explica incidente em três minutos', 'Apresenta arquitetura em cinco minutos', 'Conduz system design de 45 minutos', 'Conclui mock interview técnica em nível B2 funcional']
  },
  aws: {
    nome: 'AWS',
    prerequisitos: ['Linux, redes e Docker', 'Aplicação com banco e pipeline', 'Noções de disponibilidade e custo'],
    objetivos: ['Projetar workloads seguros e resilientes', 'Provisionar infraestrutura reproduzível', 'Tomar decisões orientadas a custo'],
    criterios: ['Publica aplicação em ambiente isolado', 'Aplica menor privilégio em IAM', 'Executa backup, restore e failover', 'Recria ambiente com Terraform', 'Apresenta Well-Architected Review com custo mensal']
  },
  pratica: {
    nome: 'Prática e Labs',
    prerequisitos: ['Objetivo técnico definido para a fase', 'Repositório DevCore operacional', 'Critério de sucesso antes de começar'],
    objetivos: ['Evoluir um único produto por 12 fases', 'Transformar estudo em evidência versionada', 'Praticar falha, diagnóstico e recuperação'],
    criterios: ['Cada fase parte da release anterior', 'Todo lab possui teste ou medição', 'README registra decisão e resultado', 'Pipeline reproduz o ambiente', 'F12 entrega uma única release demonstrável']
  },
  financeiro: {
    nome: 'Financeiro',
    prerequisitos: ['Extratos e gastos dos últimos três meses', 'Renda líquida conhecida', 'Uma hora mensal reservada para revisão'],
    objetivos: ['Controlar fluxo de caixa e risco', 'Construir reserva e investir com critério', 'Planejar transição profissional com segurança'],
    criterios: ['Fecha orçamento mensal sem valor desconhecido', 'Mantém reserva com meta e prazo', 'Compara investimento por risco, liquidez e custo', 'Calcula preço e margem de serviço', 'Documenta plano financeiro de transição']
  },
  fundamentos: {
    nome: 'Fundamentos de Computação (Faixa 0)',
    prerequisitos: ['Saber usar um computador (abrir programas e arquivos)', 'Aritmética escolar', 'Nenhuma programação prévia'],
    objetivos: ['Explicar como a máquina conta, guarda dados e roda programas', 'Pensar um problema em passos e depurar com método', 'Operar terminal, IDE, debugger e Git básico'],
    criterios: ['Acerta o quiz objetivo de cada módulo', 'Explica bit/byte, encoding, float e memória sem jargão', 'Narra o caminho da URL à página e isola onde falha', 'Rastreia a execução de um trecho na mão', 'Depura com breakpoint (não só com print) e versiona no primeiro repositório']
  },
  treino: {
    nome: 'Treino Híbrido',
    prerequisitos: ['Liberação profissional quando necessária', 'Carga e técnica compatíveis com o nível atual', 'Sono e agenda semanal minimamente estáveis'],
    objetivos: ['Desenvolver força e capacidade cardiovascular', 'Progredir sem comprometer recuperação', 'Adaptar carga em semanas difíceis'],
    criterios: ['Registra carga, repetições e percepção de esforço', 'Mantém técnica sob fadiga controlada', 'Completa cardio na zona prescrita', 'Aplica deload diante de sinais de sobrecarga', 'Sustenta o plano por oito semanas sem dor incapacitante']
  }
};

export const guiaDaTrilha = (trilha) => GUIAS_TRILHA[resolveTrackId(trilha)] || null;
