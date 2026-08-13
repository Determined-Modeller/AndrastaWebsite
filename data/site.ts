export const siteConfig = {
  name: 'Andrasta Marine',
  domain: 'andrastamarine.com',
  mission: 'Persistent subsea autonomy, built around the mission.',
  heroCopy:
    'Replenishable hydrogen-electric autonomous systems for civil, security, and defence missions - integrating vehicle, energy, payload, manufacture, and logistics into one architecture.',
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
      'Low-signature autonomous subsea platforms spanning rapid demonstration, persistent missions, and extended payload operations.'
  },
  {
    index: '02',
    title: 'Energy',
    detail:
      'Hydrogen-electric and battery-hybrid architectures integrated around mission duty cycle, thermal balance, and handling.'
  },
  {
    index: '03',
    title: 'Payload + autonomy',
    detail:
      'Modular mission payloads with defined autonomy, navigation, communications, and command-and-control interfaces.'
  },
  {
    index: '04',
    title: 'Replenishment + logistics',
    detail:
      'Transport, deployment, recovery, resupply, servicing, and re-tasking designed into the operating model.'
  }
];

export const operatingCycle = [
  {
    step: '01',
    title: 'Prepare + fuel',
    detail: 'Configure the vehicle, payload, energy package, and mission order from shore or port.'
  },
  {
    step: '02',
    title: 'Insert',
    detail: 'Use road, port, vessel, or air-delivery concepts to reach the operating area.'
  },
  {
    step: '03',
    title: 'Operate as a cohort',
    detail: 'Coordinate sensing, survey, inspection, station-keeping, and payload activity.'
  },
  {
    step: '04',
    title: 'Replenish + recover',
    detail: 'Use subsea replenishment and recovery of opportunity to extend the useful operating window.'
  },
  {
    step: '05',
    title: 'Re-task',
    detail: 'Refresh payloads, software, mission orders, and service needs for the next cycle.'
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
    title: 'Conformal energy architecture',
    detail:
      'Hydrogen and oxidant storage, fuel cells, battery buffering, and phase-change thermal management are integrated around the vehicle form and mission duty cycle.'
  },
  {
    title: 'Low-signature propulsion',
    detail:
      'Direct-drive electric propulsion, a low moving-part count, and system-level acoustic design support quiet operation and maintainability.'
  },
  {
    title: 'Robotic replenishment',
    detail:
      'AndraCharge connects underwater energy transfer, vehicle servicing, and mission turnaround without routine deck recovery.'
  },
  {
    title: 'Modular payload bays',
    detail:
      'Accessible, configurable payload volumes support sensing, inspection, communications, and specialist partner equipment.'
  },
  {
    title: 'Autonomy + command interfaces',
    detail:
      'Defined power, data, navigation, communications, and command interfaces allow specialist autonomy and C2 capability to integrate cleanly.'
  },
  {
    title: 'Design for manufacture',
    detail:
      'Additive manufacture is used where it reduces tooling, weight, part count, or iteration time; conventional fabrication remains where it is stronger.'
  }
];

export const platforms = [
  {
    slug: 'manta',
    name: 'Manta',
    category: 'Compact winged demonstrator',
    status: 'Prototype platform',
    summary:
      'A compact, field-portable vehicle for rapid build-test-iterate cycles, subsystem proving, and payload trials.',
    role: 'Rapid development + payload integration',
    highlights: [
      'Approximately 1.8 m winged form',
      'Twin wing-tip electric propulsion',
      'Fast-turn modular construction'
    ],
    imageUrl: '/manta-wireframe.webp',
    datasheetUrl: null as string | null
  },
  {
    slug: 'andrasound',
    name: 'AndraSound',
    category: 'Persistent mission platform',
    status: 'Lead system programme',
    summary:
      'The lead persistent mission platform, combining hydrogen-electric endurance, low-signature propulsion, modular payloads, and practical deployment logistics.',
    role: 'Persistent survey + maritime awareness',
    highlights: [
      'Mission-configurable payload architecture',
      'Hydrogen-electric hybrid architecture',
      'Defined autonomy and command interfaces'
    ],
    imageUrl: '/andrasound-wireframe.webp',
    datasheetUrl: null as string | null
  },
  {
    slug: 'andrahold',
    name: 'AndraHold',
    category: 'Extended payload platform',
    status: 'Platform architecture',
    summary:
      'A larger endurance and payload architecture for distributed sensing, subsea logistics, and long-duration field presence.',
    role: 'Extended payload + persistent presence',
    highlights: [
      'Expanded modular payload volume',
      'Long-duration energy architecture',
      'Subsea logistics and node support'
    ],
    imageUrl: '/andrahold-wireframe.webp',
    datasheetUrl: null as string | null
  },
  {
    slug: 'andracharge',
    name: 'AndraCharge',
    category: 'Robotic mission-support system',
    status: 'Replenishment programme',
    summary:
      'A portable robotic replenishment system connecting staged subsea energy transfer, servicing, and rapid vehicle re-tasking.',
    role: 'Subsea replenishment + mission turnaround',
    highlights: [
      'Portable subsea service robot',
      'Controlled multi-service interface',
      'Reusable mission-cycle support'
    ],
    imageUrl: '/andracharge-wireframe.webp',
    datasheetUrl: null as string | null
  }
];

export const missionScenarios = [
  {
    slug: 'offshore-infrastructure-assurance',
    imageUrl: null as string | null,
    imageAlt: 'Andrasta autonomous subsea system observing offshore infrastructure',
    market: 'Civil offshore',
    title: 'Offshore infrastructure assurance',
    framing: 'Repeatable observation around subsea assets and energy infrastructure',
    challenge:
      'Cables, pipelines, foundations, and adjacent seabed need repeatable observation between major vessel campaigns.',
    approach:
      'Mission-configured sensing, repeatable routes, and persistent vehicle presence support inspection and change detection.',
    value:
      'Faster anomaly follow-up and better continuity between campaigns.'
  },
  {
    slug: 'environmental-survey',
    imageUrl: null as string | null,
    imageAlt: 'Andrasta autonomous subsea system conducting an environmental survey',
    market: 'Civil + research',
    title: 'Persistent environmental survey',
    framing: 'Longer-window observations for decommissioning, monitoring, and science',
    challenge:
      'Short campaign snapshots can miss temporal variation when decisions require repeated environmental evidence.',
    approach:
      'Configurable sensors and repeatable mission logic sustain baseline, works-phase, and post-works observation.',
    value:
      'More consistent datasets with less dependence on continuous support-vessel presence.'
  },
  {
    slug: 'maritime-awareness',
    imageUrl: null as string | null,
    imageAlt: 'Andrasta autonomous subsea system operating around critical maritime infrastructure',
    market: 'Security + defence',
    title: 'Maritime awareness + seabed security',
    framing: 'Persistent sensing around critical maritime areas and infrastructure',
    challenge:
      'Wide areas, long timelines, and constrained support assets make persistent underwater awareness difficult.',
    approach:
      'Combine mission sensing, autonomy, command interfaces, and replenishable platform logistics in one operating architecture.',
    value:
      'Longer observation windows and flexible cohort deployment around critical areas.'
  },
  {
    slug: 'technology-demonstration',
    imageUrl: null as string | null,
    imageAlt: 'Andrasta development platform integrating a partner payload',
    market: 'Primes + partners',
    title: 'Payload + autonomy demonstration',
    framing: 'A controlled subsea route for integration evidence',
    challenge:
      'Sensors, autonomy components, and mission software need credible marine integration before customer adoption.',
    approach:
      'Use defined interfaces and a configurable development platform to integrate and demonstrate partner subsystems.',
    value:
      'A reusable integration baseline and clearer route into customer programmes.'
  }
];

export const responsibilityPillars = [
  {
    title: 'Responsible use',
    detail:
      'Lawful end use, defined operating boundaries, accountable human decision-making, and clear escalation for ethical or security concerns.'
  },
  {
    title: 'Secure delivery',
    detail:
      'Information and cyber security, export-control and sanctions review, controlled technology transfer, and proportionate customer due diligence.'
  },
  {
    title: 'Business integrity + supply chain',
    detail:
      'Anti-bribery, conflicts, counter-fraud, AML risk, modern-slavery risk, supplier conduct, and proportionate counterparty checks.'
  },
  {
    title: 'Engineering + lifecycle',
    detail:
      'Controlled requirements, hazards, configuration, testing and corrective action, alongside maintainability, reuse, operational disturbance, and end-of-life planning.'
  }
];

export const supplierReadiness = [
  {
    standard: 'ISO 9001',
    status: 'Certification targeted before 2027',
    detail:
      'Quality, document and configuration control, supplier assurance, non-conformance, corrective action, and test evidence.'
  },
  {
    standard: 'DEF STAN 05-138 Issue 4',
    status: 'CSMv4 readiness targeted before 2027',
    detail:
      'Cyber security controls aligned to MOD Cyber Security Model v4 supplier expectations and customer-assigned Cyber Risk Profiles.'
  },
  {
    standard: 'Procurement evidence pack',
    status: 'Approved-supplier evidence in progress',
    detail:
      'Core policies, registers, supplier controls, due-diligence evidence, improvement planning, and customer-specific responses.'
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
    title: 'Build knowledge through evidence',
    detail:
      'Use test data, configuration history, and mission feedback to improve the platform family and compound learning across the programme.'
  }
];

export const contactDetails = {
  company: 'Andrasta Marine',
  domain: 'andrastamarine.com',
  location: 'United Kingdom',
  email: 'info@andrastamarine.com'
};
