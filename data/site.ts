export const siteConfig = {
  name: 'Andrasta Marine',
  domain: 'andrastamarine.com',
  mission: 'Persistent subsea autonomy, built around the mission.',
  heroCopy:
    'Replenishable hydrogen-electric autonomous systems for civil, security, and defence missions - integrating vehicle, energy, payload, manufacture, and logistics into one architecture.',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/technology', label: 'Technology' },
    { href: '/product-lines', label: 'Platforms' },
    { href: '/case-studies', label: 'Missions' },
    { href: '/responsibility', label: 'Responsibility' },
    { href: '/about', label: 'Company' },
    { href: '/contact', label: 'Contact' }
  ]
};

export const missionMarkets = [
  {
    label: 'Civil',
    title: 'Offshore energy + infrastructure',
    detail:
      'Persistent environmental survey, subsea asset observation, inspection support, cable and pipeline monitoring, and decommissioning assurance.'
  },
  {
    label: 'Dual-use',
    title: 'Maritime awareness + seabed security',
    detail:
      'Long-duration sensing, infrastructure awareness, controlled trials, and integration pathways for operators and prime contractors.'
  }
];

export const technologyThemes = [
  {
    title: 'Conformal hydride energy architecture',
    detail:
      'Low-pressure hydride hydrogen storage and electrochemical conversion carry persistent demand while a temperature-managed battery power domain is reserved for peak propulsion, sensing, and demanding appliance loads.'
  },
  {
    title: 'Low-signature propulsion',
    detail:
      'Direct-drive electric propulsion, a low moving-part count, and system-level acoustic design support quiet operation and maintainability.'
  },
  {
    title: 'Robotic replenishment',
    detail:
      'AndraCharge connects portable fuel and service nodes, compatible vehicles, and mission turnaround without dependence on a single fixed recovery point.'
  },
  {
    title: 'Modular payload bays',
    detail:
      'Accessible, configurable payload volumes with defined power, data, and thermal interfaces support sensing, inspection, communications, and demanding specialist appliances.'
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
    status: 'Physical development',
    summary:
      'A compact, field-portable vehicle for rapid physical development, subsystem proving, and payload trials.',
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
    status: 'Pre-integration design',
    summary:
      'The lead persistent mission platform, with platform architecture and pre-integration design defined while research, design, and development continue.',
    role: 'Persistent survey + maritime awareness',
    highlights: [
      'Mission-configurable payload architecture',
      'Conformal hydride hybrid architecture',
      'Defined autonomy and command interfaces'
    ],
    imageUrl: '/andrasound-wireframe.webp',
    datasheetUrl: null as string | null
  },
  {
    slug: 'andrahold',
    name: 'AndraHold',
    category: 'Large flooded-payload platform',
    status: 'Pre-integration design',
    summary:
      'A larger endurance architecture with platform architecture and pre-integration design defined around a substantial flooded mission bay.',
    role: 'Extended payload + persistent presence',
    highlights: [
      'Large flooded payload bay',
      'Configurable mission power domain',
      'Extended endurance architecture'
    ],
    imageUrl: '/andrahold-wireframe.webp',
    datasheetUrl: null as string | null
  },
  {
    slug: 'andracharge',
    name: 'AndraCharge',
    category: 'Robotic mission-support system',
    status: 'Independent testing planned',
    summary:
      'A portable robotic replenishment system connecting distributed fuelling, servicing, and rapid vehicle re-tasking.',
    role: 'Distributed sustainment + mission turnaround',
    highlights: [
      'Portable mission-support system',
      'Compatible service interfaces',
      'Reusable mission-cycle support'
    ],
    imageUrl: '/andracharge-wireframe.webp',
    datasheetUrl: null as string | null
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
  location: 'Edinburgh, Scotland',
  email: 'info@andrastamarine.com'
};
