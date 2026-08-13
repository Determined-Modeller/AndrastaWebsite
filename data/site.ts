export const siteConfig = {
  name: 'Andrasta Marine',
  domain: 'andrastamarine.com',
  mission: 'Persistent subsea autonomy, built around the mission.',
  heroCopy:
    'Andrasta Marine is developing replenishable hydrogen-electric autonomous systems for civil, security, and defence missions - integrating vehicle, energy, payload, and logistics into one controlled architecture.',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/operating-system', label: 'Operating System' },
    { href: '/technology', label: 'Technology' },
    { href: '/product-lines', label: 'Platforms' },
    { href: '/case-studies', label: 'Missions' },
    { href: '/responsibility', label: 'Responsibility' },
    { href: '/about', label: 'Company' },
    { href: '/contact', label: 'Contact' }
  ]
};

export const systemLayers = [
  {
    index: '01',
    title: 'Vehicle',
    detail:
      'Low-signature autonomous subsea platforms sized for evidence-led development, payload integration, and demanding maritime operations.'
  },
  {
    index: '02',
    title: 'Energy',
    detail:
      'Hydrogen-electric and battery-hybrid architectures selected around mission duty cycle, handling constraints, and development maturity.'
  },
  {
    index: '03',
    title: 'Payload + autonomy',
    detail:
      'Modular mission payloads and defined autonomy, navigation, communications, and command-and-control interfaces.'
  },
  {
    index: '04',
    title: 'Replenishment + logistics',
    detail:
      'Recovery, resupply, handling, transport, and re-tasking designed as part of the system rather than added after the vehicle.'
  }
];

export const operatingCycle = [
  {
    step: '01',
    title: 'Configure',
    detail: 'Define the mission, operating boundary, payload, evidence need, and assurance route.'
  },
  {
    step: '02',
    title: 'Deploy',
    detail: 'Match the platform and logistics package to the port, vessel, or controlled trial environment.'
  },
  {
    step: '03',
    title: 'Operate',
    detail: 'Execute repeatable survey, inspection, patrol, or observation tasks with remote oversight.'
  },
  {
    step: '04',
    title: 'Replenish',
    detail: 'Recover, service, resupply, and re-task through a controlled mission-support workflow.'
  },
  {
    step: '05',
    title: 'Evidence',
    detail: 'Capture test, system-health, and mission data for decisions, assurance, and the next configuration.'
  }
];

export const missionMarkets = [
  {
    label: 'Civil',
    title: 'Offshore energy + infrastructure',
    detail:
      'Persistent environmental survey, subsea asset observation, inspection support, cable and pipeline monitoring, and decommissioning assurance.'
  },
  {
    label: 'Security + defence',
    title: 'Maritime awareness + seabed security',
    detail:
      'Long-duration sensing, infrastructure awareness, controlled trials, and integration pathways for operators and prime contractors.'
  },
  {
    label: 'Research',
    title: 'Ocean science + evidence',
    detail:
      'Repeatable environmental observation and configurable payload integration where longer operating windows improve data continuity.'
  }
];

export const technologyThemes = [
  {
    title: 'Hydrogen-electric endurance architecture',
    detail:
      'Fuel-cell and battery-hybrid design is developed around the vehicle duty cycle, thermal balance, handling, and test evidence - not a headline range figure.'
  },
  {
    title: 'Conformal hydride integration',
    detail:
      'Solid-state hydrogen storage is being investigated as an integrated part of the vehicle form and thermal architecture. Detailed construction and performance data remain controlled.'
  },
  {
    title: 'Low-signature platform design',
    detail:
      'Propulsion, structure, thermal management, and payload placement are considered together to reduce avoidable acoustic and electrical disturbance.'
  },
  {
    title: 'Modular mission interfaces',
    detail:
      'Payload, navigation, autonomy, communications, and command-and-control interfaces are structured to support partner integration and configuration control.'
  },
  {
    title: 'Replenishment by design',
    detail:
      'The development programme treats energy resupply, docking, recovery, and re-tasking as system-level engineering problems rather than vehicle afterthoughts.'
  },
  {
    title: 'Evidence-led assurance',
    detail:
      'Requirements, hazards, interfaces, test results, anomalies, and configuration changes are intended to form a traceable engineering evidence spine.'
  }
];

export const platforms = [
  {
    slug: 'manta',
    name: 'Manta',
    category: 'Compact demonstrator',
    status: 'Prototype programme',
    summary:
      'A compact development vehicle for manoeuvring, energetics, acoustics, autonomy, and payload-integration evidence before scale-up.',
    role: 'Evidence generation + subsystem integration',
    highlights: [
      'Controlled water-test pathway',
      'Battery-first demonstrator configuration',
      'Designed to retire integration risk early'
    ],
    datasheetUrl: null as string | null
  },
  {
    slug: 'andrasound',
    name: 'AndraSound',
    category: 'Persistent mission platform',
    status: 'Full-scale integration programme',
    summary:
      'A mid-size autonomous subsea platform being developed around mission endurance, low-signature operation, modular payloads, and practical offshore logistics.',
    role: 'Primary near-term system integration path',
    highlights: [
      'Mission-configurable payload architecture',
      'Hydrogen-electric integration pathway',
      'Partner-led autonomy and command interfaces'
    ],
    datasheetUrl: null as string | null
  },
  {
    slug: 'andrahold',
    name: 'AndraHold',
    category: 'Extended payload platform',
    status: 'Concept definition',
    summary:
      'A future larger system concept for missions where payload volume, endurance, and multi-role configuration drive the operating model.',
    role: 'Future extended-range + payload envelope',
    highlights: [
      'Expanded modular payload volume',
      'Longer-duration mission architecture',
      'Development gated by smaller-platform evidence'
    ],
    datasheetUrl: null as string | null
  },
  {
    slug: 'andracharge',
    name: 'AndraCharge',
    category: 'Mission-support subsystem',
    status: 'Development programme',
    summary:
      'A replenishment and mission-support concept intended to connect energy logistics, servicing, and vehicle turnaround in a controlled operating workflow.',
    role: 'Replenishment + logistics integration',
    highlights: [
      'Designed around practical handling',
      'Controlled energy-transfer pathway',
      'Supports reusable mission cycles'
    ],
    datasheetUrl: null as string | null
  }
];

export const missionScenarios = [
  {
    slug: 'offshore-infrastructure-assurance',
    market: 'Civil offshore',
    title: 'Offshore infrastructure assurance',
    framing: 'Repeatable observation around subsea assets and energy infrastructure',
    challenge:
      'Operators need reliable evidence around cables, pipelines, foundations, and adjacent seabed without treating every question as a major vessel campaign.',
    approach:
      'Configure a low-disturbance platform and payload around a controlled inspection, survey, or change-detection task, with repeatable routes and evidence capture.',
    value:
      'Better continuity between campaigns, faster anomaly follow-up, and a practical route to targeted autonomous support.'
  },
  {
    slug: 'environmental-survey',
    market: 'Civil + research',
    title: 'Persistent environmental survey',
    framing: 'Longer-window observations for decommissioning, monitoring, and science',
    challenge:
      'Short campaign snapshots can miss temporal variation and increase mobilisation cost when the decision requires repeated environmental evidence.',
    approach:
      'Use configurable sensor payloads and repeatable mission logic for baseline, works-phase, and post-works observation over useful time windows.',
    value:
      'More consistent datasets, reduced reliance on continuous support-vessel presence, and clearer evidence for operational decisions.'
  },
  {
    slug: 'maritime-awareness',
    market: 'Security + defence',
    title: 'Maritime awareness + seabed security',
    framing: 'Persistent sensing around critical maritime areas and infrastructure',
    challenge:
      'Wide areas, long timelines, and constrained support assets make persistent underwater awareness operationally difficult and expensive.',
    approach:
      'Integrate mission-appropriate sensing, autonomy, and command interfaces into a controlled platform and logistics architecture for trials and partner-led operations.',
    value:
      'Longer observation windows, configurable payload integration, and an evidence-led path from demonstration to an assured operational concept.'
  },
  {
    slug: 'technology-demonstration',
    market: 'Primes + partners',
    title: 'Payload + autonomy demonstration',
    framing: 'A controlled subsea route for integration evidence',
    challenge:
      'New sensors, autonomy components, and mission software need credible marine integration evidence before they can enter a customer programme.',
    approach:
      'Define interfaces, hazards, test objectives, acceptance evidence, and disclosure boundaries before integrating the partner subsystem into a development platform.',
    value:
      'A clearer integration baseline, reusable evidence, and reduced uncertainty for procurement, programme, and technical stakeholders.'
  }
];

export const responsibilityPillars = [
  {
    title: 'Responsible dual-use innovation',
    detail:
      'The governance framework is being designed around lawful end use, human accountability, defined operating boundaries, proportionate customer and partner review, and escalation where a use case creates ethical or security concern.'
  },
  {
    title: 'Safety + engineering assurance',
    detail:
      'Requirements, hazards, design decisions, configuration, testing, anomalies, and corrective actions are intended to be controlled and traceable through the development lifecycle.'
  },
  {
    title: 'Export controls + sanctions',
    detail:
      'Technology, software, hardware, destinations, counterparties, and end uses will be assessed for applicable UK export-control and sanctions requirements before controlled transfers or commitments.'
  },
  {
    title: 'Business integrity + financial crime',
    detail:
      'The policy set in development covers anti-bribery, conflicts, gifts and hospitality, counter-fraud, sanctions, transparent payment routes, and risk-based counterparty due diligence.'
  },
  {
    title: 'Modern slavery + supplier conduct',
    detail:
      'Supplier expectations are being built around fair work, no forced or trafficked labour, proportionate supply-chain risk review, escalation, and remediation rather than a paper-only statement.'
  },
  {
    title: 'Environmental responsibility',
    detail:
      'Design decisions will consider energy, material use, maintainability, reuse, support-vessel demand, operational disturbance, and end-of-life evidence without making unvalidated emissions claims.'
  }
];

export const supplierReadiness = [
  {
    standard: 'ISO 9001',
    status: 'Targeting certification before 2027',
    detail:
      'A proportionate quality management system is being implemented to support controlled requirements, document and configuration management, supplier assurance, non-conformance, corrective action, and test evidence.'
  },
  {
    standard: 'DEF STAN 05-138 Issue 4',
    status: 'Supplier-control readiness targeted before 2027',
    detail:
      'Andrasta Marine is preparing for the MOD Cyber Security Model v4 supplier controls. Applicable compliance is contract-specific and will be assessed against the customer-assigned Cyber Risk Profile and supplier-assurance process.'
  },
  {
    standard: 'Procurement evidence pack',
    status: 'Core policy suite in development',
    detail:
      'The roadmap covers quality and configuration, information security, responsible innovation, export and sanctions, anti-bribery and counter-fraud, counterparty due diligence, modern slavery, and supplier conduct.'
  }
];

export const companyPrinciples = [
  {
    title: 'System authority mindset',
    detail:
      'Own the physical platform architecture, energy integration, marine packaging, interfaces, and the engineering evidence that connects them.'
  },
  {
    title: 'Partner where it is stronger',
    detail:
      'Integrate specialist autonomy, command-and-control, sensing, fabrication, test, and assurance capability through explicit technical and commercial boundaries.'
  },
  {
    title: 'Prove before claiming',
    detail:
      'Use controlled demonstrations and test evidence to retire risk. Public performance and maturity claims follow validation, not presentation timelines.'
  }
];

export const contactDetails = {
  company: 'Andrasta Marine',
  domain: 'andrastamarine.com',
  location: 'United Kingdom',
  email: 'info@andrastamarine.com'
};
