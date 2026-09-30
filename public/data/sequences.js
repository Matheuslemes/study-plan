import { backendSequence } from './sequences/backend.js';
import { architectureSequence } from './sequences/arquitetura.js';

export const SEQUENCES = { backend: backendSequence, arquitetura: architectureSequence };
// Somente equivalências revisadas podem reutilizar um registro legado.
// Nenhum objetivo amplo do plano original é presumido equivalente às novas entregas.
export const OBJECTIVE_EQUIVALENCES = {};
export function objectiveId(sequence, track, phase, index) {
  if (sequence.id === 'backend') return `${track}:${phase.id}:${index}`;
  const objective = phase.objectives[track]?.[index];
  if (!objective) throw new Error(`Objetivo ausente: ${phase.slug}/${track}/${index}`);
  const id = `${track}:arquitetura:${phase.slug}:${objective.id}`;
  return OBJECTIVE_EQUIVALENCES[id] || id;
}
const DESCRIBE_TRACKS = ['java', 'dsa', 'db', 'git', 'arquitetura', 'devops', 'sec', 'pratica', 'frontend', 'py', 'ia', 'math', 'fin', 'ingles', 'aws'];
// Índice id → descrição, construído sob demanda uma única vez. As sequências são
// estáticas por carga de página, e o history.js resolve um registro por linha —
// varrer todas as fases × trilhas a cada chamada era custo desnecessário.
// "Primeira ocorrência vence" (if !map.has) preserva a semântica do loop original.
let objectiveIndex = null;
function buildObjectiveIndex() {
  const map = new Map();
  for (const sequence of Object.values(SEQUENCES)) {
    for (const phase of sequence.phases) {
      for (const track of DESCRIBE_TRACKS) {
        const items = track === 'aws' ? (phase.aws?.topics || []) : (phase[track] || []);
        items.forEach((texto, i) => {
          const id = objectiveId(sequence, track, phase, i);
          if (!map.has(id)) map.set(id, { trilha: track, faseId: phase.id, label: phase.l, texto, sequenceId: sequence.id, sequenceName: sequence.shortName });
        });
      }
    }
  }
  return map;
}
export function describeObjective(id) {
  if (!objectiveIndex) objectiveIndex = buildObjectiveIndex();
  return objectiveIndex.get(id)
    || { trilha: id.split(':')[0], texto: id, label: 'Registro preservado', sequenceName: 'Histórico' };
}
