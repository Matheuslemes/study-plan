import { P } from '../phases.js';
import { CONFIG } from '../config.js';

export const backendSequence = {
  id: 'backend', name: 'Formação Backend Java', shortName: 'Backend',
  description: 'Percurso completo de fundamentos, engenharia backend, produção e senioridade. Conteúdo e progresso originais preservados.',
  phases: P, weeks: CONFIG.semanas, hours: CONFIG.horasTotais, weeklyHours: 38, mainTrack: 'java'
};
