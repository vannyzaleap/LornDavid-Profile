export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  accentColor: string;
  accentBg: string;
  accentText: string;
  technologies: string[];
  year: string;
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  designProcess: string;
  result: string;
  role: string;
  metrics: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface TechnologyItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Database' | 'DevOps' | 'Design & Tools';
  level: 'Core' | 'Advanced' | 'Proficient';
  experienceYears: string;
  note: string;
  color: string;
}

export interface Experiment {
  id: string;
  number: string;
  title: string;
  category: string;
  accentColor: string;
  description: string;
  interactiveType: 'color' | 'type' | 'physics' | 'audio';
}

export interface JourneyMilestone {
  year: string;
  role: string;
  organization: string;
  description: string;
  technologies: string[];
}

export const PORTFOLIO_DATA = {
  creator: {
    name: 'LORN David',
    role: 'Full Stack Developer / Designer / Builder',
    shortBio: 'I build digital experiences, products and scalable systems.',
    location: 'Phnom Penh / Cambodia',
    year: '2026',
    availability: 'AVAILABLE',
    availabilityNote: 'Available for Select Contracts & Products (Q2/Q3 2026)',
    email: 'vannyzaleap@gmail.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    telegram: 'https://t.me/lorndavid',
  },

  about: {
    number: '01',
    title: 'ABOUT',
    who: 'Full-stack developer & creative engineer focused on digital products, systems architecture, and modern tactile user interfaces.',
    what: ['Web Architecture', 'Mobile Systems', 'Backend & APIs', 'UI/UX Engineering', 'Cloud & Containers'],
    where: 'Phnom Penh, Cambodia — operating globally across timezones.',
    currently: 'Building digital products, systems and experiments with unapologetic precision.',
    philosophy: [
      {
        title: 'Function First',
        content: 'Zero dead clicks, zero artificial decoration. Every line of code and visual component exists to solve a concrete problem.',
      },
      {
        title: 'Swiss Precision',
        content: 'Rooted in grid mathematics, disciplined typography, intentional whitespace, and high-contrast hierarchy.',
      },
      {
        title: 'Tactile Interfaces',
        content: 'Digital products that feel physical, confident, and responsive under your fingertips.',
      },
    ],
  },

  projects: [
    {
      id: 'digitalsmm',
      number: '01',
      title: 'DIGITALSMM',
      subtitle: 'SMM MANAGEMENT PLATFORM',
      category: 'Web Application',
      accentColor: '#315CFF',
      accentBg: '#EBF0FF',
      accentText: '#102B9E',
      technologies: ['Vue 3', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Redis'],
      year: '2026',
      role: 'Lead Full-Stack Engineer & Product Designer',
      metrics: '120k+ Monthly Actions · 99.98% Uptime',
      summary: 'Centralized social media operations platform featuring automated batch scheduling, multi-account analytics, and customer billing.',
      overview: 'DigitalSMM is an enterprise-grade platform built for marketing agencies and growth operators. It replaces fragmented dashboards with a unified, high-speed command center.',
      problem: 'Agencies managing dozens of client brand accounts faced constant webhook rate-limiting, scattered spreadsheet schedules, and delayed analytical reporting.',
      solution: 'Engineered an asynchronous queue-backed scheduling architecture with PostgreSQL timeseries aggregation and a clean Swiss-grid dashboard offering sub-second page transitions.',
      features: [
        'Multi-channel synchronized publishing queue with automatic fallback retry mechanisms',
        'Real-time engagement aggregation with PostgreSQL window functions and Redis caching',
        'Granular role-based workspace permissions with audit logging',
        'Automated PDF invoice generation and regional payment webhook reconciliation',
      ],
      designProcess: 'Created a high-density Neo-Brutalist interface with tabular figures, monospace metadata counters, and distinct color-coded operational states.',
      result: 'Reduced agency reporting turnaround by 75% and reliably handled over 120,000 monthly automated scheduled posts without event drops.',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'nexus-os',
      number: '02',
      title: 'NEXUS OS',
      subtitle: 'SPATIAL WEB WORKSPACE & RUNTIME',
      category: 'Systems & Web UI',
      accentColor: '#FFD84D',
      accentBg: '#FFFBE6',
      accentText: '#785A00',
      technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'WebGL', 'IndexedDB'],
      year: '2026',
      role: 'Systems Architect & UI Engineer',
      metrics: 'Sub-16ms Frame Budget · 100% Offline-First',
      summary: 'An experimental web-native desktop environment featuring draggable windows, developer tooling, and spatial note-taking.',
      overview: 'Nexus OS brings desktop-class window management and tool chaining directly into the modern browser without Electron bloat.',
      problem: 'Standard browser tabs fragment complex cognitive workflows, forcing constant context-switching between code editors, documentation, and task boards.',
      solution: 'Constructed a modular canvas window manager with persistent state, custom hotkey routing, and an offline-first local synchronization engine.',
      features: [
        'Physics-governed floating windows with custom snap grids and virtual desktop spaces',
        'Integrated Markdown workspace with live relational knowledge graph rendering',
        'Client-side state persistence with zero server telemetry via IndexedDB',
        'Instant theme calibrator supporting high-contrast brutalist light and dark modes',
      ],
      designProcess: 'Drew inspiration from Swiss industrial control panels and 90s UNIX workstations, modernizing them with fluid React 19 concurrent transitions.',
      result: 'Achieved sustained 60fps performance on 4K monitors and zero layout shifts across deep multi-window hierarchies.',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'chroma-studio',
      number: '03',
      title: 'CHROMA STUDIO',
      subtitle: 'GENERATIVE COLOR & TYPOGRAPHY ENGINE',
      category: 'Creative Tool',
      accentColor: '#FF4FD8',
      accentBg: '#FFF0FA',
      accentText: '#A00078',
      technologies: ['Canvas API', 'TypeScript', 'Web Audio', 'Vite', 'SVG Engine'],
      year: '2025',
      role: 'Creative Technologist',
      metrics: '40+ Creator Teams · APCA & WCAG AA/AAA',
      summary: 'Generative design tool that produces accessible high-contrast palettes, mathematical type scales, and production-ready tokens.',
      problem: 'Design engineers waste countless hours recalculating color contrast compliance and manually mapping Figma tokens into clean CSS variables.',
      solution: 'Built an interactive mathematical color perception lab calculating perceptual APCA scores and harmonic scales in real time with one-click export.',
      features: [
        'Real-time perceptual contrast evaluation engine for foreground and background pairings',
        'Audio-reactive kinetic typography canvas for testing extreme type weight dynamics',
        'One-click export to Tailwind v4 @theme, standard CSS variables, and Figma JSON tokens',
        'Color vision deficiency simulation matrix (Protanopia, Deuteranopia, Tritanopia)',
      ],
      designProcess: 'Designed with tactile oversized brutalist sliders, interactive color matrices, and instant keyboard shortcuts.',
      result: 'Featured widely across developer design channels and adopted by product teams seeking guaranteed accessible color palettes.',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'pulsepay',
      number: '04',
      title: 'PULSEPAY',
      subtitle: 'FINTECH TERMINAL FOR SOUTHEAST ASIA',
      category: 'Mobile & Backend',
      accentColor: '#B8FF3D',
      accentBg: '#F7FFE6',
      accentText: '#3B6800',
      technologies: ['Flutter', 'Go', 'Docker', 'PostgreSQL', 'Redis'],
      year: '2025',
      role: 'Full-Stack Mobile Engineer',
      metrics: '250k+ Micro-Tx · Sub-500ms Confirmation',
      summary: 'High-reliability mobile payment terminal and merchant POS infrastructure designed for rapid QR transactions in Southeast Asia.',
      problem: 'Regional merchants suffer from unstable mobile network conditions causing delayed QR payment confirmations and merchant disputes.',
      solution: 'Engineered an offline-tolerant local transaction ledger powered by lightweight Go microservices and push-event notifications.',
      features: [
        'Sub-500ms transaction confirmation with instant audio-haptic feedback',
        'Local cryptographic queue preventing duplicate submissions during network blackouts',
        'Full compatibility with regional KHQR standards and banking payment gateways',
        'Daily automated merchant batch reconciliation summaries with one-tap export',
      ],
      designProcess: 'Engineered for high outdoor glare readability: massive 48px touch targets, zero decorative fluff, and unmistakable status cues.',
      result: 'Successfully processed over 250,000 live micro-transactions across pilot merchants with zero double-charge anomalies.',
      liveUrl: '#',
      githubUrl: '#',
    },
  ] as Project[],

  techStack: [
    { name: 'Vue.js', category: 'Frontend', level: 'Core', experienceYears: '3+ yrs', note: 'Single-file components, Pinia, Vue Router, reactive systems', color: '#B8FF3D' },
    { name: 'React', category: 'Frontend', level: 'Core', experienceYears: '4+ yrs', note: 'React 19, Server Components, Hooks, Context, concurrent mode', color: '#315CFF' },
    { name: 'TypeScript', category: 'Frontend', level: 'Core', experienceYears: '4+ yrs', note: 'Strict typing, generic design, runtime validation', color: '#315CFF' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 'Core', experienceYears: '4+ yrs', note: 'Tailwind v4 tokens, arbitrary values, responsive architecture', color: '#315CFF' },
    { name: 'Next.js', category: 'Frontend', level: 'Advanced', experienceYears: '3+ yrs', note: 'App router, SSR, static generation, edge routes', color: '#FFD84D' },

    { name: 'Node.js', category: 'Backend', level: 'Core', experienceYears: '4+ yrs', note: 'Express, async pipelines, event streams, microservices', color: '#B8FF3D' },
    { name: 'Go (Golang)', category: 'Backend', level: 'Advanced', experienceYears: '2+ yrs', note: 'High concurrency services, goroutines, REST/gRPC', color: '#315CFF' },
    { name: 'Python', category: 'Backend', level: 'Proficient', experienceYears: '2+ yrs', note: 'Data extraction, scripting, automation, API bridges', color: '#FFD84D' },
    { name: 'REST & GraphQL', category: 'Backend', level: 'Core', experienceYears: '4+ yrs', note: 'Clean API contract design, versioning, documentation', color: '#FF6B35' },

    { name: 'Flutter', category: 'Mobile', level: 'Core', experienceYears: '3+ yrs', note: 'Cross-platform mobile apps for iOS & Android, Dart', color: '#315CFF' },
    { name: 'React Native', category: 'Mobile', level: 'Advanced', experienceYears: '2+ yrs', note: 'Mobile apps with native bridges and shared web codebases', color: '#315CFF' },

    { name: 'PostgreSQL', category: 'Database', level: 'Core', experienceYears: '4+ yrs', note: 'Complex queries, indexing, JSONB, foreign keys, migrations', color: '#315CFF' },
    { name: 'Redis', category: 'Database', level: 'Advanced', experienceYears: '3+ yrs', note: 'In-memory caching, message queues, rate limiters, pub/sub', color: '#FF6B35' },
    { name: 'Supabase', category: 'Database', level: 'Advanced', experienceYears: '2+ yrs', note: 'PostgreSQL auth, realtime subscriptions, storage buckets', color: '#B8FF3D' },

    { name: 'Docker', category: 'DevOps', level: 'Core', experienceYears: '3+ yrs', note: 'Multi-stage builds, container orchestration, compose files', color: '#315CFF' },
    { name: 'Linux', category: 'DevOps', level: 'Advanced', experienceYears: '4+ yrs', note: 'Ubuntu/Debian server administration, bash scripting, systemd', color: '#FFD84D' },
    { name: 'Git & CI/CD', category: 'DevOps', level: 'Core', experienceYears: '4+ yrs', note: 'GitHub Actions, automated tests, linting, deployment workflows', color: '#FF6B35' },

    { name: 'Figma', category: 'Design & Tools', level: 'Core', experienceYears: '4+ yrs', note: 'Design systems, auto-layout, interactive prototypes, tokens', color: '#FF4FD8' },
    { name: 'Vite', category: 'Design & Tools', level: 'Core', experienceYears: '3+ yrs', note: 'Fast bundling, plugin authoring, dev server tuning', color: '#8B5CF6' },
  ] as TechnologyItem[],

  currently: {
    number: '04',
    title: 'CURRENTLY',
    status: 'IN PROGRESS',
    headline: 'Building digital products, systems and experiments.',
    description: 'Focusing on high-density web products, microservices, and tactile interactive design that respects user attention.',
    learningTopics: [
      'Distributed System Architecture & Event Sourcing',
      'Advanced Cloud Infrastructure & Scalability',
      'Containerized Deployments with Docker',
      'AI Agent Workflows & Structured Tool Calling',
      'Neo-Brutalist & Swiss Design Philosophy',
    ],
    nowPlaying: 'Signals — Tycho / Ambient Electronic Focus',
    reading: 'Designing Data-Intensive Applications by Martin Kleppmann',
  },

  experiments: [
    {
      id: 'exp-1',
      number: '01',
      title: 'KINETIC SWISS TYPO',
      category: 'Motion Experiment',
      accentColor: '#315CFF',
      description: 'Interactive letterform distortion with variable weight curves responding to cursor velocity.',
      interactiveType: 'type',
    },
    {
      id: 'exp-2',
      number: '02',
      title: 'BRUTALIST PALETTE LAB',
      category: 'Design Concept',
      accentColor: '#FF6B35',
      description: 'Generative high-contrast color scheme synthesizer built strictly on WCAG AAA mathematical ratios.',
      interactiveType: 'color',
    },
    {
      id: 'exp-3',
      number: '03',
      title: 'TACTILE SPRING PHYSICS',
      category: 'Micro-Interaction',
      accentColor: '#B8FF3D',
      description: 'Interactive button and card spring physics engine using dampening equations without heavy libraries.',
      interactiveType: 'physics',
    },
    {
      id: 'exp-4',
      number: '04',
      title: 'MINIMAL AUDIO SYNTH',
      category: 'Web Audio API',
      accentColor: '#FF4FD8',
      description: 'In-browser square wave 8-bit frequency generator with harmonic brutalist keypads.',
      interactiveType: 'audio',
    },
  ] as Experiment[],

  journey: [
    {
      year: '2026',
      role: 'Independent Full Stack Developer & Systems Builder',
      organization: 'Studio Build / Phnom Penh',
      description: 'Architecting end-to-end web applications, modular design systems, and client software products. Specializing in high-performance full-stack architectures.',
      technologies: ['Vue', 'React', 'Node.js', 'Go', 'PostgreSQL', 'Docker'],
    },
    {
      year: '2025',
      role: 'Lead Systems & Frontend Developer',
      organization: 'Digital Solutions Lab',
      description: 'Spearheaded full-stack platform development for regional clients. Engineered real-time dashboards, payment integrations, and design tokens.',
      technologies: ['TypeScript', 'Flutter', 'Express', 'Redis', 'PostgreSQL'],
    },
    {
      year: '2024',
      role: 'Full-Stack Developer & UI Designer',
      organization: 'Product Engineering Collective',
      description: 'Constructed responsive web interfaces, REST APIs, and database models. Led transition to component-driven design systems.',
      technologies: ['React', 'Node.js', 'Tailwind CSS', 'Docker', 'Figma'],
    },
    {
      year: '2023',
      role: 'Creative Technologist & Junior Engineer',
      organization: 'Independent Projects & Labs',
      description: 'Started building larger software projects, diving deep into modern web standards, systems programming, and tactile design.',
      technologies: ['JavaScript', 'HTML/CSS', 'Python', 'Git', 'Linux'],
    },
  ] as JourneyMilestone[],

  stats: [
    { value: '14+', label: 'PROJECTS SHIPPED', note: 'Production web apps & systems' },
    { value: '04', label: 'YEARS OF CRAFT', note: 'Continuous code & design' },
    { value: '100%', label: 'PRODUCTION READY', note: 'Zero mock stubs or dead clicks' },
    { value: '∞', label: 'CREATIVE IDEAS', note: 'Continuous experiments' },
  ],
};
