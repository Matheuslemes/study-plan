import { createArchitecturePlan } from '../../../data/sequences/architecture-plan.js';
import { SEQUENCES, objectiveId, describeObjective } from '../../../data/sequences.js';
import * as phases from '../../../data/phases.js';
import * as config from '../../../data/config.js';
import * as routine from '../../../data/routine.js';
import * as milestones from '../../../data/milestones.js';
import * as path from '../../../data/learning-path.js';
import { SIMULADOS_ENTREVISTA as backendInterviews } from '../../../data/interviews.js';
import { projetos as backendProjects } from '../../../data/projetos.js';
import { heroTagsData as backendTags, tracks as backendTracks } from '../../../data/tracks.js';
import { ler, gravar } from './storage.js';

export { SEQUENCES, describeObjective };
export const { conteudoDaFase, trilhaAtiva, chaveTrilha, trilhasAtivas } = phases;
export const { PC, PBG } = config;
export const { weekDays } = routine;
export let sequence, P, weeklyFocusByDay, dailyPlansByDay, monthlyCycle, MODOS_ROTINA;
export let syncCycles, rules, awsMilestones, syncDependencies, syncCheckpoints;
export let DEPENDENCIAS_CURRICULO, TRILHAS_TRANSVERSAIS, SIMULADOS_ENTREVISTA, projetos, heroTagsData, tracks;
export const isArchitecture = () => sequence.id === 'arquitetura';
export const sequenceKey = (key, id = sequence.id) => id === 'backend' ? key : `${key}:${id}`;
export const faseDeEntrada = (track) => P.find(p => trilhaAtiva(p, track))?.id ?? null;
export const faseporId = (id) => P.find(p => p.id === Number(id));
export const topicId = (track, phaseId, index) => objectiveId(sequence, track, faseporId(phaseId), index);
export function setSequence(id) {
  return Boolean(SEQUENCES[id]) && gravar('sequenciaAtual', id);
}
export function weeklyHours() {
  const hours = Number(ler('cargaSemanal:arquitetura', 20));
  return Number.isFinite(hours) && hours >= 5 && hours <= 40 ? hours : 20;
}


export function refreshContext() {
  sequence = SEQUENCES[ler('sequenciaAtual', 'backend')] || SEQUENCES.backend;
  P = sequence.phases;
  weeklyFocusByDay = routine.weeklyFocusByDay; dailyPlansByDay = routine.dailyPlansByDay;
  monthlyCycle = config.monthlyCycle; MODOS_ROTINA = routine.MODOS_ROTINA; syncCycles = config.syncCycles;
  ({ rules, awsMilestones, syncDependencies, syncCheckpoints } = milestones);
  ({ DEPENDENCIAS_CURRICULO, TRILHAS_TRANSVERSAIS } = path);
  SIMULADOS_ENTREVISTA = backendInterviews; projetos = backendProjects; heroTagsData = backendTags; tracks = backendTracks;
  if (!isArchitecture()) return;
  ({ P, weeklyFocusByDay, dailyPlansByDay, monthlyCycle, MODOS_ROTINA, syncCycles, rules, awsMilestones, syncDependencies, syncCheckpoints, DEPENDENCIAS_CURRICULO, TRILHAS_TRANSVERSAIS, SIMULADOS_ENTREVISTA, projetos, heroTagsData, tracks } = createArchitecturePlan(sequence, {
    hours: weeklyHours(), phaseId: Number(ler('faseAtual:arquitetura', 1)), mode: ler('modoRotina:arquitetura', 'ideal')
  }));
}
refreshContext();
