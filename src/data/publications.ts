export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  date: string;
  arxivId: string;
  arxivUrl: string;
  summary: string;
  tags: string[];
  firstAuthor: boolean;
  /** Public repository. Link it once it has a README and reproduces a main result. */
  code?: string;
  /** Project page, e.g. https://simonr99.github.io/<repo>/ served from the paper's repo. */
  projectPage?: string;
}

/** BibTeX for an arXiv preprint, generated from the entry. */
export function bibtex(p: Publication): string {
  const year = p.date.slice(-4);
  const firstSurname = p.authors[0].split(' ').slice(-1)[0].toLowerCase();
  const firstWord = p.title.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(' ').find((w) => w.length > 3) ?? 'paper';
  return [
    `@misc{${firstSurname}${year}${firstWord},`,
    `  title         = {${p.title}},`,
    `  author        = {${p.authors.join(' and ')}},`,
    `  year          = {${year}},`,
    `  eprint        = {${p.arxivId}},`,
    `  archivePrefix = {arXiv},`,
    `  url           = {${p.arxivUrl}},`,
    `}`,
  ].join('\n');
}

export const publications: Publication[] = [
  {
    id: 'sat-change-search-2026',
    title: 'Finding Change in Satellite Archives from Text: How to Combine Before-and-After Images Efficiently',
    authors: ['Simon Roy', 'Mark Bong', 'Giovanni Beltrame'],
    venue: 'arXiv:2607.28571',
    date: 'Jul 2026',
    arxivId: '2607.28571',
    arxivUrl: 'https://arxiv.org/abs/2607.28571',
    summary:
      'Investigates efficient bi-temporal image fusion and two-stage retrieval to search massive satellite archives with natural language queries.',
    tags: ['Multimodal AI', 'Earth Observation', 'Retrieval'],
    firstAuthor: true,
  },
  {
    id: 'lago-2026',
    title: 'Latent Goal Prediction from Language for Model-Based Planning',
    authors: ['Samuel Barbeau', 'Simon Roy', 'Giovanni Beltrame', 'Christian Desrosiers', 'Nicolas Thome'],
    venue: 'arXiv:2606.20627',
    date: 'Jun 2026',
    arxivId: '2606.20627',
    arxivUrl: 'https://arxiv.org/abs/2606.20627',
    summary:
      'Introduces LAGO, a framework grounding natural language instructions into intermediate latent subgoals for long-horizon model-based robot planning.',
    tags: ['Robot Learning', 'World Models', 'Planning'],
    firstAuthor: false,
  },
  {
    id: 'vista-2026',
    title: 'VISTA: Scale-Aware Visual Navigation via Action History Conditioning',
    authors: ['Maeva Guerrier', 'Koki Kobayashi', 'Simon Roy', 'Jana Pavlasek', 'Giovanni Beltrame'],
    venue: 'arXiv:2606.17294',
    date: 'Jun 2026',
    arxivId: '2606.17294',
    arxivUrl: 'https://arxiv.org/abs/2606.17294',
    summary:
      'Presents a scale-aware visual navigation approach conditioned on action history for robust robotic navigation.',
    tags: ['Robot Learning', 'Visual Navigation'],
    firstAuthor: false,
  },
  {
    id: 'skill-distill-2026',
    title: 'To Select or not to Select, that is the Question: Distilling Robot Skill Prediction into a Small Ensemble',
    authors: ['Haechan Mark Bong', 'Simon Roy', 'Euhid Aman', 'Giovanni Beltrame'],
    venue: 'arXiv:2605.21242',
    date: 'May 2026',
    arxivId: '2605.21242',
    arxivUrl: 'https://arxiv.org/abs/2605.21242',
    summary:
      'Explores distilling robot skill prediction into compact ensembles for efficient onboard execution.',
    tags: ['Robot Learning', 'Distillation'],
    firstAuthor: false,
  },
  {
    id: 'vlm-reward-2025',
    title: 'Revisiting the Learning Objectives of Vision-Language Reward Models',
    authors: ['Simon Roy', 'Samuel Barbeau', 'Giovanni Beltrame', 'Christian Desrosiers', 'Nicolas Thome'],
    venue: 'arXiv:2512.20675',
    date: 'Dec 2025',
    arxivId: '2512.20675',
    arxivUrl: 'https://arxiv.org/abs/2512.20675',
    summary:
      'Examines training objectives for vision-language reward models to improve alignment and generalization in robotic tasks.',
    tags: ['Robot Learning', 'VLM', 'Reward Modeling'],
    firstAuthor: true,
  },
];
