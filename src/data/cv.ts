export interface Entry {
  title: string;
  org: string;
  orgUrl?: string;
  dates: string;
  detail?: string;
}

export const education: Entry[] = [
  {
    title: 'PhD, Robot learning',
    org: 'Polytechnique Montréal and Mila',
    orgUrl: 'https://mila.quebec/',
    dates: '2026 – present',
    detail: 'Advised by Giovanni Beltrame. World models, language-conditioned planning and vision-language reward models.',
  },
  {
    title: 'M.Sc., Artificial intelligence',
    org: 'Polytechnique Montréal and Mila',
    orgUrl: 'https://mila.quebec/',
    dates: '2025 – 2026',
  },
  {
    title: 'B.Eng., Software engineering',
    org: 'École de technologie supérieure (ÉTS)',
    orgUrl: 'https://www.etsmtl.ca/',
    dates: '2020 – 2024',
  },
];

export const experience: Entry[] = [
  {
    title: 'Computer vision and machine learning engineer',
    org: 'NIO Robotics',
    dates: 'Summer 2025 – Apr 2026',
    detail:
      'Developed computer vision and machine learning methods to identify the paintable areas of a wall for an autonomous wall-painting robot.',
  },
  {
    title: 'Quantum machine learning research',
    org: 'Université de Sherbrooke',
    orgUrl: 'https://www.usherbrooke.ca/',
    dates: 'May – Sep 2024',
    detail: 'Developed fermionic machine learning algorithms and data pipelines in the quantum machine learning group.',
  },
  {
    title: 'Autonomy software lead',
    org: 'Club Capra, ÉTS',
    orgUrl: 'https://www.clubcapra.com/',
    dates: '2022 – 2024',
    detail:
      'Led the autonomy stack of a search-and-rescue robot: containerized ROS 2 architecture, SLAM and EKF-based navigation, simulation, and a vision-language pipeline for 3D object mapping. Competed at EnRicH 2023 and ELROB 2024.',
  },
  {
    title: 'Robotics software engineer',
    org: 'Canadian Space Agency',
    orgUrl: 'https://www.asc-csa.gc.ca/eng/',
    dates: 'Sep 2022 – Dec 2023',
    detail:
      'Built mission-planning tools for the Canadian lunar rover (Django, React), worked on path planning (RRT*, genetic algorithms) and operated the lunar map server and its CI/CD.',
  },
  {
    title: 'Co-founder and president',
    org: 'QuantumÉTS',
    orgUrl: 'https://quantumets.etsmtl.ca/',
    dates: '2022 – 2024',
    detail:
      'Founded the ÉTS quantum computing club: about 20 active members, workshops for more than 200 students, and hackathon teams ranked in the top 5% at QHack two years in a row.',
  },
  {
    title: 'Software developer',
    org: 'Orolia (now Safran)',
    orgUrl: 'https://www.safran-group.com/',
    dates: 'Sep – Dec 2021',
    detail: 'Signal processing and generation features for the Skydel GNSS simulator, in C++, Python and MATLAB.',
  },
  {
    title: 'Hardware engineering',
    org: 'Lion Électrique',
    orgUrl: 'https://thelionelectric.com/',
    dates: 'Jan – Apr 2021',
  },
];

export const teaching: Entry[] = [
  {
    title: 'Teaching assistant, INF3995',
    org: 'Polytechnique Montréal',
    orgUrl: 'https://www.polymtl.ca/',
    dates: 'Sep 2025 – May 2026',
    detail:
      'Third-year team design project in robotics. Taught ROS 2, Docker and Linux, introduced course rules on responsible use of AI tools, and ran a rate-limited inference server so every team had fair access to shared models.',
  },
  {
    title: 'Teaching assistant, MTI882B',
    org: 'École de technologie supérieure',
    orgUrl: 'https://www.etsmtl.ca/',
    dates: 'Summer 2023',
    detail: 'Algorithmic aspects of quantum computing. Wrote the course notebooks and taught PennyLane.',
  },
];

export interface Honor {
  year: string;
  result: string;
  event: string;
}

export const honors: Honor[] = [
  { year: '2024', result: 'Honorable mention from NVIDIA', event: 'ETH Zurich Quantum Hackathon' },
  { year: '2024', result: 'Competed with Club Capra', event: 'ELROB, European Land Robot Trial' },
  { year: '2023', result: 'Best in class, search and rescue', event: 'EnRicH, European Robotics Hackathon' },
  { year: '2023–24', result: 'Top 5% of teams, two years running', event: 'Xanadu QHack' },
  { year: '2022', result: '3rd place', event: 'BIG Quantum Hackathon' },
  { year: '2020', result: '1st place, Halifax', event: 'NASA Space Apps Challenge' },
];
