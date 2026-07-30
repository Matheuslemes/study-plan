/*
 * LEARNING PATH — dependências explícitas do currículo (DIDATIC-023)
 */

export const DEPENDENCIAS_CURRICULO = [
  { id: 'base', fases: 'F1', titulo: 'Base executável', itens: ['Lógica e Linux', 'Java Core', 'SQL'], desbloqueia: 'backend' },
  { id: 'backend', fases: 'F2', titulo: 'Backend HTTP', itens: ['Java avançado', 'Spring', 'JPA e HTTP'], desbloqueia: 'entrega' },
  { id: 'entrega', fases: 'F3', titulo: 'Entrega confiável', itens: ['Testes', 'Docker', 'CI/CD'], desbloqueia: 'seguranca' },
  { id: 'seguranca', fases: 'F4', titulo: 'Segurança forte', itens: ['OWASP', 'OAuth2/OIDC', 'Threat model'], desbloqueia: 'operacao' },
  { id: 'operacao', fases: 'F5–F6', titulo: 'Medir e operar', itens: ['Performance', 'Redis', 'Observabilidade'], desbloqueia: 'arquitetura' },
  { id: 'arquitetura', fases: 'F7–F8', titulo: 'Distribuir com critério', itens: ['Monólito modular', 'DDD', 'Kafka e padrões'], desbloqueia: 'escala' },
  { id: 'escala', fases: 'F9–F10', titulo: 'Cloud e escala', itens: ['AWS e IaC', 'Kubernetes', 'System Design'], desbloqueia: 'produto' },
  { id: 'produto', fases: 'F11–F12', titulo: 'Produto demonstrável', itens: ['React e FastAPI', 'RAG avaliado', 'Portfólio e entrevistas'], desbloqueia: null }
];

export const TRILHAS_TRANSVERSAIS = ['Git', 'Inglês', 'DSA', 'Clean Code', 'Segurança básica'];
