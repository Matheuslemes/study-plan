# Certificações de Desenvolvimento — Mercado BR + Exterior e Lacunas do Plano

> **Escopo:** principais certificações por área de desenvolvimento, no mercado **brasileiro** e
> **internacional**, e ao final uma análise das **lacunas** do Plano Integrado de Estudos — conteúdos e
> certificações de relevância **hoje e nos próximos ~5 anos**.
> **Verificado em:** 31/07/2026. **Ressalva:** nomes, códigos e disponibilidade de exames mudam com
> frequência (a AWS, por exemplo, reformulou toda a trilha de IA no início de 2026). Sempre confirme na
> fonte oficial do fornecedor antes de agendar.

---

## 1. Como ler este documento

- **Nível:** Fundamental → Associate → Professional/Expert → Specialty.
- **Mercado BR:** o Brasil valoriza fortemente **AWS**, **Azure** (enterprise/governo), **Oracle Java**,
  **Scrum (PSM/CSM)** e, crescentemente, **Kubernetes** e **segurança**. Certificações de fornecedor
  (AWS/Microsoft/Google/Oracle) dominam — não há "certificação nacional" equivalente.
- **Mercado exterior/remoto:** as mesmas cloud certs + **Kubernetes (CNCF)** + **segurança ofensiva
  (OSCP)** e **liderança (CISSP)** carregam peso. Inglês é pré-requisito de fato.
- **Regra de ouro:** certificação **complementa** portfólio e experiência; sozinha não contrata. O maior
  ROI vem de **cloud + IA** em 2026.

---

## 2. Certificações por área

### 2.1 Cloud (a base de quase tudo)

| Fornecedor | Certificações principais | Nível |
|---|---|---|
| **AWS** | Cloud Practitioner (CLF-C02) · Solutions Architect Assoc. (SAA-C03) · Developer Assoc. (DVA-C02) · CloudOps Engineer Assoc. (SOA-C03) · Solutions Architect Pro (SAP-C02) · DevOps Engineer Pro (DOP-C02) · Advanced Networking / Security Specialty | Fund.→Specialty |
| **Microsoft Azure** | AZ-900 (Fundamentals) · AZ-104 (Administrator) · AZ-204 (Developer) · AZ-305 (Solutions Architect Expert) · AZ-400 (DevOps Expert) · AZ-500 (Security) | Fund.→Expert |
| **Google Cloud** | Associate Cloud Engineer · Professional Cloud Architect · Cloud Developer · Cloud DevOps Engineer · Cloud Security Engineer · Cloud Network/Database Engineer | Assoc.→Pro |

> **BR:** AWS é a mais pedida; **Azure cresce muito** em bancos, governo e grandes empresas. **Exterior:**
> AWS + GCP (GCP forte em startups e dados/IA). Multi-cloud é diferencial nos próximos 5 anos.

### 2.2 Backend e linguagens

| Área | Certificações |
|---|---|
| **Java** | **Oracle Certified Professional: Java SE 21 Developer (1Z0-830)** (ou SE 17, 1Z0-829) |
| **Spring** | **VMware Spring Certified Professional** (Spring 6) |
| **JavaScript/Node** | Poucas certs respeitadas; mercado valoriza portfólio > cert |
| **Python** | PCEP/PCAP/PCPP (Python Institute) — reconhecimento moderado; o valor vem via **cloud/dados/IA** |
| **.NET/C#** | Trilhas Azure (AZ-204) cobrem o ecossistema |

> Backend em si tem **poucas certs de peso** além de Oracle Java e Spring; o valor migrou para **cloud,
> dados e IA**. Java segue essencial em fintech, bancos e telecom no BR.

### 2.3 Bancos de dados

| Tecnologia | Certificações |
|---|---|
| **Oracle DB** | Oracle Database SQL (1Z0-071) · Oracle DBA |
| **PostgreSQL** | EDB PostgreSQL Associate / Professional |
| **MongoDB** | MongoDB Associate Developer / Associate DBA |
| **Cloud DB** | AWS Data Engineer Assoc. (DEA-C01) · GCP Professional Database/Data Engineer · Azure DP-300/DP-700 |

### 2.4 Data Engineering, streaming e analytics

| Plataforma | Certificações |
|---|---|
| **Databricks** | Data Engineer Associate/Professional · Data Analyst |
| **Snowflake** | SnowPro Core · SnowPro Advanced |
| **Confluent (Kafka)** | Confluent Certified Developer (CCDAK) · Administrator (CCAAK) |
| **Cloud** | AWS Data Engineer Assoc. · GCP Professional Data Engineer · **Microsoft Fabric** (DP-600 Analytics Engineer, DP-700 Fabric Data Engineer) |

> **Área em forte alta** (convergência dados + IA). Alta relevância nos próximos 5 anos.

### 2.5 DevOps, SRE, Kubernetes, IaC e Platform Engineering

| Domínio | Certificações |
|---|---|
| **Kubernetes / cloud-native (CNCF)** | **KCNA** e **KCSA** (associate) · **CKAD** (dev) · **CKA** (admin) · **CKS** (segurança; exige CKA antes) — provas **práticas em cluster real** |
| **CNCF expandido (2026)** | GitOps (Argo), observabilidade, **Prometheus (PCA)**, networking (Cilium), policy, **FinOps**, **Platform Engineering** |
| **IaC** | **HashiCorp Terraform Associate (003)** · Vault Associate · Consul Associate |
| **Contêineres** | Docker Certified Associate (DCA) |
| **DevOps cloud** | AWS DevOps Engineer Pro · Azure DevOps Expert (AZ-400) · GCP Professional Cloud DevOps Engineer |

> As certs de Kubernetes são **hands-on** (terminal + cluster reais) — por isso pesam muito em contratação
> de SRE/Platform Engineering. **Platform Engineering** é a disciplina que mais cresce para os próximos 5 anos.

### 2.6 Segurança / cibersegurança

| Trilha | Certificações |
|---|---|
| **Entrada** | **CompTIA Security+ (SY0-701)** (melhor ROI de entrada) · CySA+ · PenTest+ |
| **Ofensiva / pentest** | **OSCP (OffSec, PEN-200)** — o "portão" do pentest · **OSWE** (web) · CEH (agora "CEH AI") · GIAC (GPEN/GWAPT) |
| **Liderança / gestão** | **CISSP (ISC²)** — padrão-ouro sênior · CISM · CCSP (cloud) |
| **Cloud security** | CCSK (Cloud Security Alliance) · AWS Security Specialty · **Azure AZ-500** · GCP Cloud Security Engineer |

> **Novo eixo de 5 anos:** **segurança de IA** (prompt injection, segurança de LLM/RAG, dados de treino).
> Ainda sem cert consolidada, mas será uma sub-área quente.

### 2.7 IA, Machine Learning e IA Generativa ⭐ (maior alta de 2026)

| Fornecedor/Plataforma | Certificações |
|---|---|
| **AWS** | **AI Practitioner (AIF-C01)** · **Machine Learning Engineer Assoc. (MLA-C01)** · **Generative AI Developer – Professional (AIP-C01)** |
| **Microsoft Azure** | AI Fundamentals (**AI-901**, substitui a AI-900 que se aposenta em 30/06/2026) · AI Engineer Associate (AI-102) |
| **Google Cloud** | **Professional Machine Learning Engineer** · Generative AI Leader/Developer |
| **Databricks** | **Generative AI Engineer Associate** · ML Associate/Professional |
| **NVIDIA** | Certificações de Deep Learning / deploy de LLM (referência em hardware/GPU) |

> **A área de maior ROI salarial em 2026 e para os próximos 5 anos.** O papel emergente é **"AI
> Engineer"** (construir sobre LLMs: RAG, agentes, avaliação, **LLMOps**), distinto do ML clássico.

### 2.8 Frontend e web

| Área | Certificações |
|---|---|
| **Frontend** | **Meta Front-End Developer** (Coursera) · freeCodeCamp (gratuito) |
| **Realidade** | Frontend tem **poucas certs de peso**; contratação é por **portfólio + projetos**. Cert vale mais em cloud/JS-fullstack |

### 2.9 Arquitetura

| Tipo | Certificações |
|---|---|
| **Cloud architect** | AWS Solutions Architect Pro · Azure AZ-305 · GCP Professional Cloud Architect |
| **Enterprise/independente** | **TOGAF 10** (enterprise architecture) · **iSAQB CPSA** (Certified Professional for Software Architecture — forte na Europa/BR) |

### 2.10 Git, plataformas e produtividade com IA

| Área | Certificações |
|---|---|
| **GitHub** | **GitHub Foundations** · GitHub Actions · **GitHub Advanced Security** · **GitHub Copilot** |
| **GitLab** | GitLab Certified (Associate/Professional) |

> **GitHub Copilot cert** = interseção IA + dev, tendência clara de 5 anos (produtividade assistida por IA).

### 2.11 Ágil, gestão e FinOps

| Área | Certificações |
|---|---|
| **Ágil/Scrum** | **PSM I/II/III (Scrum.org)** · **CSM/A-CSM (Scrum Alliance)** · SAFe · PMI-ACP |
| **Projetos** | PMP (PMI) |
| **FinOps** | **FinOps Certified Practitioner (FOCP)** |

> **BR valoriza muito PSM/CSM** — aparece em enorme parte das vagas, mesmo técnicas.

---

## 3. O que o Plano já cobre (mapa trilha → certificação)

O plano tem 14 trilhas e 13 Academias dirigidas por dados. Cobertura atual e a cert natural de cada uma:

| Trilha do plano | Conteúdo | Cert(s) natural(is) | Situação |
|---|---|---|---|
| **AWS** | Cloud, arquitetura, operação, FinOps | SAA-C03 → SAP-C02 | ✅ **Já tem página de certificações** dedicada |
| **Java** | Java 21, Spring, concorrência, produção | OCP Java SE 21 · Spring Pro | ✅ Conteúdo cobre; falta apontar a cert |
| **Arquitetura** | DDD, distribuídos, C4/ADR, System Design | AWS SA Pro · iSAQB · TOGAF | ✅ Forte |
| **DevOps** | CI/CD, K8s, Terraform, SRE, observabilidade | **CKA/CKAD** · Terraform Assoc. · DOP-C02 | 🟡 Conteúdo sim; **cert path não explícito** |
| **Segurança** | AppSec, DevSecOps | Security+ · AWS Security Specialty | 🟡 Cobre AppSec; falta a largura de certs |
| **Bancos** | SQL/NoSQL, PostgreSQL, tuning | EDB Postgres · AWS DEA | ✅ Conteúdo |
| **IA** | ML, LLMs, RAG, MLOps (aplicado) | AWS AI/ML · Databricks GenAI | 🟡 Conteúdo sim; **cert path e LLMOps a aprofundar** |
| **Python** | Backend, dados, IA aplicada | via cloud/dados | ✅ |
| **Frontend** | HTML/CSS/JS/React | Meta Front-End | ✅ (área com poucas certs) |
| **Git** | Versionamento, plataformas, GitOps | **GitHub certs** | 🟡 Falta apontar as certs GitHub/Copilot |
| **Matemática / Inglês / Financeiro / Treino** | Base transversal / registro | — (não são áreas de cert dev) | ✅ Fora do escopo de cert |

---

## 4. LACUNAS — conteúdos e certificações de relevância que faltam

> Critério de relevância: **impacto no mercado hoje + tendência para ~5 anos (2026–2031)**. Ordenado por
> prioridade. O plano é deliberadamente **backend/cloud/arquitetura-cêntrico** — nem toda lacuna precisa
> ser preenchida, mas estas são as de maior peso.

### 🔴 Prioridade máxima (relevância alta hoje **e** crescente)

1. **Trilha explícita de certificação em IA / GenAI + LLMOps.**
   O plano tem IA *aplicada*, mas o mercado explodiu com um **cert path** próprio (AWS AIF-C01 → MLA-C01 →
   AIP-C01; Azure AI-102; Google ML Engineer; **Databricks Generative AI Engineer**) e um **papel novo —
   "AI Engineer"** (RAG, agentes, avaliação, **LLMOps**). É a área de maior ROI de 2026 e dos próximos 5
   anos. *Falta:* mapear os módulos de IA a essas certs e aprofundar LLMOps/avaliação de LLM.

2. **Multi-cloud: Azure e Google Cloud.**
   O plano é **AWS-only**. O mercado BR pede **Azure** cada vez mais (bancos, governo, enterprise) e o
   exterior valoriza **GCP** (dados/IA). *Falta:* ao menos os fundamentos + uma associate de Azure
   (AZ-104/AZ-204) e GCP (Associate Cloud Engineer). Multi-cloud será quase padrão em 5 anos.

3. **Cert path de Kubernetes / cloud-native (CNCF).**
   O plano tem conteúdo de K8s, mas **sem trilha de certificação** (**KCNA → CKAD/CKA → CKS**). São provas
   **práticas**, muito valorizadas em SRE/Platform. *Falta:* transformar a parte de DevOps num caminho
   até CKA/CKAD.

### 🟠 Prioridade alta

4. **Data Engineering como trilha própria (+ certs).**
   Dados estão espalhados entre Bancos, Python e IA, mas **não há uma trilha de Data Engineering**
   (pipelines, Spark, streaming, lakehouse). *Falta:* **Databricks Data Engineer**, **Confluent Kafka
   (CCDAK)**, **Snowflake SnowPro**, AWS/GCP Data Engineer. Convergência dados+IA = alta relevância 5 anos.

5. **Platform Engineering / IaC como disciplina + certs.**
   O plano cobre IaC pontualmente, mas **Platform Engineering** (IDPs, Backstage, GitOps) é a disciplina
   que mais cresce. *Falta:* **HashiCorp Terraform Associate**, GitOps (Argo), e o enquadramento de
   "plataforma interna". Forte tendência de 5 anos.

6. **Largura de segurança + segurança de IA.**
   A trilha de Segurança foca AppSec. Falta o **cert path de mercado**: **CompTIA Security+** (entrada),
   **OSCP** (ofensiva), **CISSP** (sênior), cloud security (**AZ-500**/AWS Security Specialty). E o eixo
   **novo de 5 anos — segurança de IA** (prompt injection, LLM/RAG security), que a auditoria já apontou
   como ausente na trilha `sec`.

### 🟡 Prioridade média (alto valor no BR / tendência)

7. **Ágil / Scrum (PSM / CSM).**
   O plano é 100% técnico e **não tem nada de Ágil**. No **BR**, **PSM (Scrum.org)** e **CSM** aparecem em
   grande parte das vagas, inclusive técnicas. Baixo esforço, alto sinal de contratação. Estável por 5 anos.

8. **Certificações GitHub (incl. Copilot).**
   A trilha de Git é sólida, mas **GitHub Foundations / Actions / Advanced Security / Copilot** dão
   sinal de mercado. **GitHub Copilot cert** = tendência IA+dev de 5 anos. Baixo esforço.

9. **Java: apontar a cert (OCP 21) e Spring Professional.**
   O conteúdo de Java é excelente, mas **não aponta a certificação** (OCP Java SE 21 / VMware Spring
   Certified Professional). Fechar esse elo agrega ao portfólio backend.

10. **Observabilidade / SRE cert (Prometheus PCA) e FinOps (FOCP).**
    Há conteúdo de observabilidade e FinOps; existem **certs específicas** (Prometheus Certified Associate;
    **FinOps Certified Practitioner**) que valeria mapear — crescimento estável nos próximos anos.

### ⚪ Emergentes para observar (5 anos)

- **AI Engineering / agentes / LLMOps** como especialidade (para além de "usar IA").
- **Security de IA** e **AI governance/compliance** (regulação crescente).
- **FinOps + sustentabilidade (GreenOps)** em cloud.
- **WebAssembly / edge** e **Rust** ganhando espaço em sistemas de alto desempenho.
- **Quantum-safe / pós-quântica** em criptografia (horizonte mais longo).

---

## 5. Recomendação executiva

O plano já forma um **backend sênior com trilha de arquitetura/cloud (AWS)** muito completo. Para blindá-lo
para os **próximos 5 anos**, as três adições de maior retorno são:

1. **Cert path de IA/GenAI + LLMOps** (a onda dominante);
2. **Multi-cloud (Azure/GCP)** além de AWS;
3. **Kubernetes/CNCF (CKA/CKAD)** e **Platform Engineering** como disciplina.

Complementos de baixo esforço e alto sinal, sobretudo no **BR**: **Scrum (PSM)**, **GitHub/Copilot** e
apontar as certs que o conteúdo já sustenta (**OCP Java**, **Terraform Associate**, **Security+**).

---

## Fontes

- [AWS Certification (oficial)](https://aws.amazon.com/certification/) · [Guias de exame AWS](https://docs.aws.amazon.com/aws-certification/latest/examguides/aws-certification-exam-guides.html)
- [Microsoft Learn — Certifications](https://learn.microsoft.com/credentials/) · [Google Cloud Certification](https://cloud.google.com/learn/certification) · [CNCF Training & Certification](https://www.cncf.io/training/)
- [Top AI Certifications 2026 — DataCamp](https://www.datacamp.com/blog/top-ai-certifications) · [AI/ML Certifications Guide 2026 — Proftia](https://proftia.com/blog/ai-ml-certifications-guide-2026.html) · [Top AI Certifications 2026 — Nucamp](https://www.nucamp.co/blog/top-10-ai-certifications-worth-getting-in-2026-roi-career-impact)
- [Kubernetes Certification 2026 — Spacelift](https://spacelift.io/blog/kubernetes-certification) · [CNCF Certification Map 2026 — CertQnA](https://certqna.com/blog/cncf-certification-map-2026) · [Kubernetes Certifications 2026 — KodeKloud](https://kodekloud.com/blog/kubernetes-certification/)
- [Best Cybersecurity Certifications 2026 — CertificationCamps](https://www.certificationcamps.com/top-cybersecurity-certifications/) · [Top Cyber Security Certifications 2026 — QA](https://www.qa.com/en-us/browse/certifications/cyber-security-certifications/best-cyber-security-certifications/)
- [Software Developer Certifications 2026 — The Interview Guys](https://blog.theinterviewguys.com/software-developer-certifications/)
