import type { ImageMetadata } from 'astro';
import goatBrain from '../assets/projects/goat_brain.png';
import shepherd from '../assets/projects/shepherd.png';
import capra from '../assets/projects/markhor.jpg';
import quantumGame from '../assets/projects/quantum_game.png';
import ntn from '../assets/projects/optimisation_ntn.png';
import quantumEts from '../assets/projects/quantum.jpg';
import quantumAlgo from '../assets/projects/quantum_algo_2.png';
import lightControl from '../assets/projects/camera.jpg';
import drybox from '../assets/projects/dry.jpg';
import wand from '../assets/projects/baguette.jpg';

export type ProjectGroup = 'Robotics and AI' | 'Quantum computing' | 'Side projects';

export interface Project {
  name: string;
  /** Where or with whom, shown under the name. */
  context?: string;
  desc: string;
  img: ImageMetadata;
  imgAlt: string;
  group: ProjectGroup;
  /** Shown on the home page. Keep this to three or four. */
  featured?: boolean;
  links: { label: string; href: string }[];
}

export const projectGroups: ProjectGroup[] = ['Robotics and AI', 'Quantum computing', 'Side projects'];

export const projects: Project[] = [
  {
    name: 'Goat Brain',
    desc: 'A speech-to-action agent for a mobile robot: a LoRA-tuned LLM with retrieval turns spoken instructions into ROS 2 behavior trees, with a visual interface to follow what the robot is doing.',
    img: goatBrain,
    imgAlt: 'Goat Brain interface with the chat and the generated behavior tree',
    group: 'Robotics and AI',
    featured: true,
    links: [
      { label: 'Code', href: 'https://github.com/SimonR99/goat-planner' },
      { label: 'Video', href: 'https://youtu.be/d-8-XF0w_FI' },
    ],
  },
  {
    name: 'Shepherd',
    desc: 'Open-vocabulary semantic mapping for a mobile robot. Segments and captions objects with FastSAM, CLIP and BLIP, then answers natural-language queries over the map.',
    img: shepherd,
    imgAlt: '3D semantic map of an indoor scene with detected objects in red',
    group: 'Robotics and AI',
    featured: true,
    links: [{ label: 'Code', href: 'https://github.com/kapr-ai/shepherd' }],
  },
  {
    name: 'Search-and-rescue robot autonomy',
    context: 'Club Capra, ÉTS',
    desc: 'Autonomy stack for a tracked search-and-rescue robot: ROS 2 architecture in Docker, 3D SLAM, exploration, object tracking, arm inverse kinematics and Gazebo simulation. Best in class for search and rescue at EnRicH 2023; competed at ELROB 2024.',
    img: capra,
    imgAlt: 'Tracked rescue robot with a manipulator arm beside a rescue dummy',
    group: 'Robotics and AI',
    featured: true,
    links: [{ label: 'Club Capra', href: 'https://www.clubcapra.com/' }],
  },
  {
    name: 'NTN optimization simulator',
    desc: 'Simulator for energy-aware task offloading in non-terrestrial networks, comparing greedy methods, Q-learning, PSO, genetic algorithms and differential evolution, with a Qt interface.',
    img: ntn,
    imgAlt: 'Simulator window with the network animation and energy charts',
    group: 'Robotics and AI',
    links: [{ label: 'Code', href: 'https://github.com/SimonR99/optimisationNTN' }],
  },
  {
    name: 'Entangled Explorer',
    context: 'QuantumÉTS',
    desc: 'A 2D puzzle platformer that teaches quantum computing concepts to a general audience.',
    img: quantumGame,
    imgAlt: 'Game level with a quantum circuit puzzle below it',
    group: 'Quantum computing',
    featured: true,
    links: [
      { label: 'Play', href: 'https://simonr99.itch.io/entangledexplorer' },
      { label: 'Video', href: 'https://www.youtube.com/watch?v=ki_t9ciqDEw' },
    ],
  },
  {
    name: 'QuantumÉTS',
    context: 'Co-founder and president, 2022–2024',
    desc: 'Student club on quantum computing: workshops for more than 200 students on Qiskit, PennyLane and Pulser, and teams at QHack, the BIG Quantum Hackathon and the ETH Zurich Quantum Hackathon.',
    img: quantumEts,
    imgAlt: 'QuantumÉTS workshop in a lecture hall',
    group: 'Quantum computing',
    links: [{ label: 'Website', href: 'https://quantumets.etsmtl.ca/' }],
  },
  {
    name: 'Quantum algorithm notebooks',
    desc: 'Notebooks exploring quantum algorithms on real datasets, including quantum clustering on Iris and sentiment classification with quantum support vector machines.',
    img: quantumAlgo,
    imgAlt: 'Quantum circuit diagram',
    group: 'Quantum computing',
    links: [{ label: 'Code', href: 'https://github.com/SimonR99/qiskit-algorithm' }],
  },
  {
    name: 'Pointing-based light control',
    desc: 'Point at a smart light on camera to toggle it. Pose estimation with OpenCV on a Raspberry Pi, connected to Home Assistant.',
    img: lightControl,
    imgAlt: 'Webcam wired to a Raspberry Pi',
    group: 'Side projects',
    links: [],
  },
  {
    name: 'Drybox IoT server',
    desc: 'Keeps 3D-printer filament dry: a Django app with humidity history and an over-the-air firmware update server for ESP8266 sensors. Built with an electrical engineering student.',
    img: drybox,
    imgAlt: 'Drybox dashboard with humidity history',
    group: 'Side projects',
    links: [],
  },
  {
    name: 'Gesture-controlled wand',
    desc: 'A 3D-printed wand with an accelerometer and radio link that changes lamp colors and makes a toy bear talk. Arduino, written in C.',
    img: wand,
    imgAlt: 'Glowing lamp next to the 3D-printed wand',
    group: 'Side projects',
    links: [],
  },
];
