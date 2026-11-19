export interface NewsItem {
  date: string;
  text: string;
  href?: string;
}

/** Most recent first. Keep this to the last five or six items. */
export const news: NewsItem[] = [
  {
    date: 'Aug 2026',
    text: 'Co-organized the Montreal Robotics Summer School 2026 at Mila.',
    href: 'https://sites.google.com/mila.quebec/mrss/',
  },
  {
    date: 'Jul 2026',
    text: 'New first-author preprint on searching satellite image archives with text queries.',
    href: 'https://arxiv.org/abs/2607.28571',
  },
  {
    date: 'Jun 2026',
    text: 'Two preprints with collaborators: LAGO, on latent goal prediction for model-based planning, and VISTA, on scale-aware visual navigation.',
  },
  { date: 'May 2026', text: 'Started my PhD in robot learning at Polytechnique Montréal and Mila.' },
  {
    date: 'Dec 2025',
    text: 'First-author preprint revisiting the learning objectives of vision-language reward models.',
    href: 'https://arxiv.org/abs/2512.20675',
  },
  { date: 'Sep 2025', text: 'Teaching assistant for INF3995, the third-year robotics design project at Polytechnique.' },
  { date: 'Jul 2025', text: 'Co-founded Aquilix, where I am CTO.', href: 'https://www.aquilix.ca/en/' },
];
