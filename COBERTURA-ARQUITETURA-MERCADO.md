# Cobertura da trilha de Arquitetura × demanda do mercado

> **Revisão de 2026-10-06 (2ª passada: arquitetura de dados e cadeia de suprimentos).** Compara o conteúdo atual de arquitetura do study-plan
> (**32 módulos de competência + 4 de ponte** na Academia de Arquitetura, mais a
> sequência de Arquitetura e o baseline tecnológico) com o que as vagas de arquiteto
> de software/solução/cloud pedem **na maioria** — no Brasil e fora. Esta revisão já
> reflete os módulos adicionados nesta rodada (19–24) e corrige as referências de
> número de módulo que as renumerações haviam deixado defasadas.

## Metodologia (e seus limites)

Triangulação de descrições de vaga, listas de skills, roadmaps e surveys —
Interview Kickstart, Indeed (US e BR), Glassdoor, Zippia, LeanIX, roadmap.sh, The
Open Group/TOGAF, Axial Search (AI architecture postings), Gartner/DORA (platform
engineering) e relatos de vagas BR. **Não** é um scrape estatístico de milhares de
anúncios; a demanda é expressa em **faixas** (Tiers), não em percentuais exatos.
Fontes no fim do documento.

Legenda: ✅ coberto forte · 🟡 parcial / na trilha vizinha · ❌ lacuna.

## Tier 1 — pedido em quase toda vaga (BR + fora)

| Tema | Demanda | Cobertura study-plan |
|---|---|---|
| Cloud (AWS/Azure/GCP) | Skill nº 1 global e BR | ✅ **mód. 19 "Arquitetura em nuvem"** (agnóstico: responsabilidade compartilhada, multi-AZ/região, gerenciado vs self-managed, Well-Architected, custo/FinOps, lock-in) + cross-link **trilha AWS** + etapa *cloud* da sequência |
| Microsserviços & decomposição | Altíssima | ✅ mód. 3, 8 |
| Contêineres + Kubernetes/Docker | "Requisito padrão, não diferencial" | ✅ **mód. 20 "Contêineres e orquestração"** (unidade de deploy imutável, estado desejado/self-healing, liveness/readiness, isolamento→bulkhead, sidecar/service mesh) + cross-link **trilha DevOps** |
| Padrões + princípios (SOLID, Clean, Hexagonal) | Explícito, sobretudo BR | ✅ padrões/modularidade/DDD (mód. 3/4/7) + **SOLID/Clean/Hexagonal nomeados** |
| APIs & integração (REST, Kafka/RabbitMQ, contratos) | Altíssima | ✅ mód. 9 (EIP, OpenAPI/AsyncAPI/CloudEvents) |
| Bancos SQL & NoSQL | Alta | ✅ mód. 11 + trilha Bancos |
| Escalabilidade & performance | Alta | ✅ mód. 14 |
| Segurança arquitetural | Alta | ✅ mód. 17 (STRIDE, zero trust) |
| Comunicação / liderança / stakeholders | Universal (soft skill nº 1) | ✅ **mód. 22 "Comunicação, influência e defesa de arquitetura"** + defesa na sequência |
| CI/CD + IaC (Terraform) | Alta e subindo | ✅ **mód. 21 "Entrega contínua, IaC e o pipeline como enforcement"** + cross-link DevOps |
| System design | Núcleo de entrevista sênior | ✅ transversal (mód. 10–14) + trilha/livros System Design Interview |

## Tier 2 — muito comuns

| Tema | Demanda | Cobertura |
|---|---|---|
| DDD | Muito pedido (forte no BR) | ✅ mód. 6, 7 — **diferencial** |
| Event-driven / mensageria assíncrona | Comum | ✅ mód. 9 (integração) + mód. 24 (event sourcing) |
| Observabilidade (logs/métricas/traces, SLO) | Subindo a prioridade | ✅ mód. 16 |
| Distribuídos & consistência (CAP, saga, idempotência) | Sênior | ✅ mód. 10, 12 |
| Resiliência (circuit breaker, bulkhead, backpressure) | Comum | ✅ mód. 13 |
| Decisão/trade-off/ADR/C4/documentação | Núcleo do papel | ✅ mód. 0.4, 1, 5 — **diferencial forte** |
| FinOps / custo de cloud | Subindo (custos de IA) | ✅ reforçado no **mód. 19** (unit economics, ciclo informar→otimizar→operar, custo de IA) + etapa cloud + trilha AWS |
| TOGAF / Enterprise Architecture / "níveis de arquitetura" | Forte no topo sênior/enterprise/gov | ✅ **mód. 23 "Níveis de arquitetura e panorama de EA (TOGAF e além)"** |
| Governança técnica | Sênior/staff | ✅ mód. 18 (governança evolutiva) + mód. 23 |

## Tier emergente — 2026, subindo rápido

| Tema | Demanda | Cobertura |
|---|---|---|
| **GenAI/LLM e arquitetura agentic** (RAG, multi-agente, MCP, guardrails, custo/latência) | Crescimento explosivo; surge o papel de "orchestration architect" | ✅ **mód. 32 "Agentes de IA como componente"** (não determinismo, fronteira de permissão, custo/latência, fallback, evals, prompt injection, MCP) + trilha IA p/ RAG/vector/LLMOps. **Aprofundamento possível:** orquestração multi-agente e camadas de memória |
| **Platform Engineering / Internal Developer Platform (IDP)** | Gartner: ~80% das grandes orgs com time de plataforma em 2026; paga ~27% a mais que DevOps | ✅ **mód. 24 "Platform Engineering e IDP como arquitetura"** (plataforma como produto, golden paths, self-service com guardrails, DX/DORA, platform/enabling team) + mód. 18 (carga cognitiva) + cross-link DevOps — adicionado em 2026-10-06 |
| **Arquitetura de dados: data mesh, data products, data contracts, streaming** | Papéis dedicados (Data/Streaming Architect); data mesh ~US$165k; data contracts emergindo | ✅ **mód. 25 "Arquitetura de dados: data mesh, data products e data contracts"** (OLTP vs OLAP, lakehouse, ownership por domínio, data-as-product, data contract que falha no pipeline, streaming/schema registry/CDC) + cross-link **trilha Bancos** — adicionado em 2026-10-07 |
| **Segurança de cadeia de suprimentos (SBOM, SLSA, proveniência)** | "Desafio de segurança que define 2026"; virou padrão DevSecOps | ✅ **reforçado nos mód. 17 (ameaça) e 21 (enforcement no pipeline)**: SBOM, SLSA/proveniência, assinatura e admission control nomeados; fonte SLSA — reforçado em 2026-10-07 |

> **Watch list (ainda nicho, mas subindo):** Edge + IA (processar perto do dado), **WebAssembly/Wasm** (runtimes server-side/edge), **Green/Sustainable software** (eficiência energética como requisito). Forward-looking — monitorar antes de investir conteúdo.

## Tier 3 — valorizados, nem sempre obrigatórios

| Tema | Cobertura |
|---|---|
| Migração / arquitetura evolutiva (strangler fig) | ✅ mód. 15 |
| Multi-tenancy / zero trust | ✅ mód. 17 |
| Team Topologies / Lei de Conway | ✅ mód. 18 (cobre **mais** do que a maioria pede) |
| Dados intensivos (storage engines, replicação/particionamento) | ✅ mód. 11 |

## Tier 4 — raramente explícitos nas vagas (fronteira / elite)

Todos **cobertos**, mas **pouco cobrados** na maioria das vagas (números atualizados):

| Tema | Módulo | Onde é pedido |
|---|---|---|
| Event sourcing / CQRS | mód. 26 | Nicho (fintech, event-driven pesado) |
| Métodos formais (TLA+/Alloy) | mód. 27 | Raríssimo (AWS, bancos de dados) |
| Simulação determinística / testar o distribuído | mód. 28 | Raríssimo (FoundationDB/TigerBeetle-style) |
| Chaos engineering | mód. 29 | Às vezes em big tech / SRE |
| Isolamento por células / shuffle sharding | mód. 30 | Hyperscaler |
| Ler papers fundadores | mód. 31 | Método de estudo, não requisito de vaga |

## Veredito (revisão 2026-10-06)

- **Cobertura:** o study-plan cobre **todo o Tier 1 e o Tier 2** do mercado e vai
  **muito além** na fronteira (Tier 4). As lacunas da análise original (SOLID/Clean/
  Hexagonal por nome; TOGAF/EA; cloud/contêineres/CI-CD conceituais; comunicação;
  FinOps; Platform Engineering; arquitetura de dados; segurança de cadeia de suprimentos)
  foram **fechadas** — a trilha foi de 25 para **32 módulos**.
- **Ponto forte raro:** decisão/trade-off/ADR/C4, DDD, distribuídos e a fronteira —
  é o que separa sênior de pleno e quase nenhuma formação cobre.
- **Lacuna emergente — agora coberta:** **Platform Engineering / IDP** foi endereçada
  com o **mód. 24** (plataforma como produto, golden paths, DX); o concreto segue no DevOps.
- **Emergentes — agora cobertos:** **arquitetura de dados** (mód. 25) e **segurança de
  cadeia de suprimentos** (SBOM/SLSA/proveniência, reforçada nos mód. 17/21). Resta apenas
  a **watch list** (Edge+IA, Wasm, green software), ainda nicho e forward-looking.
- **Limite de escopo (por design, não defeito):** o **concreto de fornecedor e stack**
  (AWS/Azure, Kubernetes, Terraform, Java/Spring, .NET) mora nas trilhas vizinhas
  (AWS, DevOps, Java). A trilha de Arquitetura é **agnóstica e conceitual**; sozinha
  não fecha um checklist "AWS/K8s/Spring" — por decisão deliberada.
- **Sobre-investimento vs. a maioria:** Tier 4 (formais, simulação, células, papers)
  é excelente para fintech/infra/FAANG, mas **não** é o que a maioria pede — coerente
  com o perfil teórico escolhido; só vale ter consciência do peso.

## Ações

Aplicadas (todas com validadores verdes e numeração contígua 1..32):

- [x] **SOLID/Clean/Hexagonal nomeados** nos módulos de design 3/4/7 (2026-10-05).
- [x] **Mód. 19 — Arquitetura em nuvem** (agnóstico) + cross-link AWS (2026-10-06).
- [x] **Mód. 20 — Contêineres e orquestração** (agnóstico) + cross-link DevOps (2026-10-06).
- [x] **Mód. 21 — Entrega contínua, IaC e pipeline como enforcement** + cross-link DevOps (2026-10-06).
- [x] **Mód. 22 — Comunicação, influência e defesa de arquitetura** (2026-10-06).
- [x] **Mód. 23 — Níveis de arquitetura e panorama de EA (TOGAF)** (2026-10-06).
- [x] **FinOps reforçado no mód. 19** (unit economics, ciclo FinOps, custo de IA) (2026-10-06).
- [x] **Mód. 24 — Platform Engineering / IDP** (plataforma como produto, golden paths, self-service com guardrails, DX/DORA) + cross-link DevOps (2026-10-06).
- [x] **Mód. 25 — Arquitetura de dados** (data mesh, data products, data contracts, streaming/CDC) + cross-link Bancos (2026-10-07).
- [x] **Segurança de cadeia de suprimentos reforçada** nos mód. 17 (ameaça: SBOM, proveniência) e 21 (enforcement: SLSA, assinatura, admission control) + fonte SLSA (2026-10-07).

Em aberto:

- [ ] **Aprofundar o mód. 32** com orquestração multi-agente e camadas de memória (opcional).
- [ ] **Tornar explícito o combo de trilhas** (cloud/K8s/stack vivem em AWS/DevOps/Java)
  para quem mira "cloud/solution architect".
- [ ] Revisão editorial de tom nos módulos novos (19–24) e geração dos `exampleFile` deles.

## Fontes

- Interview Kickstart — Software Architect skills (2026): https://interviewkickstart.com/skills/software-architect
- Interview Kickstart — Solutions Architect skills: https://interviewkickstart.com/skills/solutions-architect
- Interview Kickstart — Cloud Architect skills: https://interviewkickstart.com/skills/cloud-architect
- Interview Kickstart — AI Architect skills (2026): https://interviewkickstart.com/skills/ai-architect
- Axial Search — AI Architecture Jobs (análise de ~16.900 vagas): https://axialsearch.com/insights/ai-architecture-jobs
- Glassdoor — vagas Software Architect (US, out/2026): https://www.glassdoor.com/Job/us-software-architect-jobs-SRCH_IL.0,2_IN1_KO3,21.htm
- Growin — Platform Engineering em 2026: https://www.growin.com/blog/platform-engineering-2026/
- roadmap.sh — Software Architect: https://roadmap.sh/pdfs/roadmaps/software-architect.pdf
- The Open Group — TOGAF Standard: https://www.opengroup.org/togaf
- Indeed BR — vagas Arquiteto de Software (SP): https://br.indeed.com/q-arquiteto-de-software-l-s%C3%A3o-paulo,-sp-vagas.html
- Experian — Arquiteto de Aplicação (SP): https://jobs.experian.com/job/arquiteto-de-aplicacao-in-sao-paulo-brazil-jid-1807
- ZipRecruiter — Data Mesh jobs (2026): https://www.ziprecruiter.com/Jobs/Data-Mesh
- dataforest — State of Modern Data Architecture 2026: https://dataforest.ai/blog/state-of-modern-data-architecture-benchmark-report
- Cloudsmith — 2026 Guide to Software Supply Chain Security: https://cloudsmith.com/blog/the-2026-guide-to-software-supply-chain-security-from-static-sboms-to-agentic-governance
- SLSA — Supply-chain Levels for Software Artifacts: https://slsa.dev/
