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
export const { weekDays, PERFIS_ROTINA } = routine;
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
export function perfilRotina() {
  const id = ler('perfilRotina', routine.PERFIL_PADRAO);
  return PERFIS_ROTINA[id] ? id : routine.PERFIL_PADRAO;
}
export function setPerfilRotina(id) {
  if (!PERFIS_ROTINA[id]) return false;
  const gravou = gravar('perfilRotina', id);
  refreshContext();
  return gravou;
}
export const weeklyHours = () => PERFIS_ROTINA[perfilRotina()].horasSemanais;

// No Backend, o calendário, a carga do modo Ideal e as tags seguem o perfil.
function ajustarBackendAoPerfil({ horasSemanais, cargaIdeal, heroTags }) {
  const periodo = (horasAntes, horasAoFim) => `Sem ${Math.floor(horasAntes / horasSemanais) + 1}–${Math.ceil(horasAoFim / horasSemanais)} · estimativa`;
  P = P.map((p) => ({ ...p, w: periodo((p.id - 1) * p.h, p.id * p.h) }));
  // Cada ciclo agrupa duas fases.
  syncCycles = syncCycles.map((ciclo, i) => ({ ...ciclo, period: periodo(i * 2 * P[0].h, (i + 1) * 2 * P[0].h) }));
  MODOS_ROTINA = { ...MODOS_ROTINA, ideal: { ...MODOS_ROTINA.ideal, carga: cargaIdeal } };
  heroTagsData = heroTagsData.map((tag) => (heroTags[tag.label] ? { ...tag, label: heroTags[tag.label] } : tag));
}

export function refreshContext() {
  sequence = SEQUENCES[ler('sequenciaAtual', 'backend')] || SEQUENCES.backend;
  P = sequence.phases;
  const perfil = perfilRotina();
  const faseBackend = phases.faseporId(ler('faseAtual', 1))?.id ?? 1;
  weeklyFocusByDay = routine.weeklyFocusDaFase(faseBackend); dailyPlansByDay = routine.dailyPlansDaFase(perfil, faseBackend);
  monthlyCycle = config.monthlyCycle; MODOS_ROTINA = routine.MODOS_ROTINA; syncCycles = config.syncCycles;
  ({ rules, awsMilestones, syncDependencies, syncCheckpoints } = milestones);
  ({ DEPENDENCIAS_CURRICULO, TRILHAS_TRANSVERSAIS } = path);
  heroTagsData = backendTags;
  SIMULADOS_ENTREVISTA = backendInterviews; projetos = backendProjects; tracks = backendTracks;
  if (!isArchitecture()) {
    ajustarBackendAoPerfil(PERFIS_ROTINA[perfil]);
    return;
  }
  ({ P, weeklyFocusByDay, dailyPlansByDay, monthlyCycle, MODOS_ROTINA, syncCycles, rules, awsMilestones, syncDependencies, syncCheckpoints, DEPENDENCIAS_CURRICULO, TRILHAS_TRANSVERSAIS, SIMULADOS_ENTREVISTA, projetos, heroTagsData, tracks } = createArchitecturePlan(sequence, {
    hours: weeklyHours(), phaseId: Number(ler('faseAtual:arquitetura', 1)), mode: ler('modoRotina:arquitetura', 'ideal'), perfil
  }));
}
refreshContext();
