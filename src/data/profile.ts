export const profile = {
  name: 'Simon Roy',
  title: 'Simon Roy | Robot learning researcher, co-founder & CTO of Aquilix',
  description:
    'Simon Roy is a PhD student in robot learning at Polytechnique Montréal and Mila, and co-founder and CTO of Aquilix, a Montréal company building AI cameras for construction and industrial sites.',
  url: 'https://simonr99.github.io',
  github: 'https://github.com/SimonR99',
  linkedin: 'https://www.linkedin.com/in/simonroy99/',
  scholar: 'https://scholar.google.com/citations?user=Ltu98iQAAAAJ&hl=en',
  advisor: { name: 'Giovanni Beltrame', url: 'https://mistlab.ca/' },
  /**
   * The contact address is never stored or served in plain text: it is the
   * base64 of the reversed address, decoded in the browser only when a
   * visitor clicks "Show email address".
   */
  emailEncoded: 'YWMubHRteWxvcC5kdXRlQHlvci43LW5vbWlz',
};

export interface Aquilix {
  url: string;
  logo: string;
  since: string;
  summary: string;
  points: string[];
}

export const aquilix: Aquilix = {
  url: 'https://www.aquilix.ca/en/',
  logo: '/static/assets/img/landing/aquilix-wordmark.svg',
  since: 'July 2025',
  summary:
    'Aquilix builds self-contained AI cameras that detect risks and critical events in real time on construction sites, rail yards and remote sites. A unit installs in a few hours and runs over LTE, with no site internet needed.',
  points: [
    'Lead the technology end to end: camera systems, on-device vision models and the analytics platform.',
    'Turn research in computer vision and vision-language models into systems that run unattended in the field.',
  ],
};
