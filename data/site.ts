export type PublicStatus =
  | 'seeking-demonstration-partners'
  | 'under-development'
  | 'publication-pending'
  | 'concept-validation'
  | 'available-for-discussion';

export type PlatformFormFactor = {
  name: 'AndraMini' | 'Andra40';
  role: string;
  summary: string;
  publicStatus: PublicStatus;
  statusCopy: string;
  missionFit: string[];
  replenishmentConcept: string;
  payloadCompatibility: string[];
  caveats: string[];
};

export type PayloadFamily = {
  name: 'AndraBeam' | 'AndraField' | 'AndraRise' | 'AndraKeep';
  category: string;
  summary: string;
  applications: string[];
  maturityCopy: string;
};

export type MissionScenario = {
  title: string;
  slug: string;
  priority: 'primary' | 'secondary' | 'future';
  context: string;
  problem: string;
  limitation: string;
  approach: string;
  outputs: string[];
  whyItMatters?: string;
  demonstrationPathway?: string;
  caveat: string;
};

export type FaqItem = { question: string; answer: string };

export const siteConfig = {
  name: 'Andrasta Marine',
  domain: 'andrastamarine.com',
  siteUrl: 'https://andrastamarine.com',
  brandLine: 'Redefining what is possible offshore.',
  heroExplainer:
    'Andrasta Marine develops hydrogen-powered autonomous marine vessels for persistent offshore survey, inspection, and environmental evidence-gathering without continuous dependence on support vessels.',
  companyDescription:
    'Andrasta Marine is a vessel OEM integrating commercial-off-the-shelf and bespoke marine, hydrogen, sensing, and autonomy systems into complete offshore products.',
  primaryCta: 'Discuss a demonstration mission',
  secondaryCta: 'Explore platform form factors',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/our-solution', label: 'Our Solution' },
    { href: '/technology', label: 'Technology' },
    { href: '/product-lines', label: 'Product Lines' },
    { href: '/about', label: 'About' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/contact', label: 'Contact' }
  ]
};

export const valueRibbon = [
  'Vessel OEM',
  'Hydrogen-electric architecture',
  'Hydride replenishment',
  'Remote refuelling IP, patent pending',
  'Modular payload families',
  'Decommissioning survey first'
];

export const formFactors: PlatformFormFactor[] = [
  {
    name: 'AndraMini',
    role: 'Smaller form factor for near-term offshore demonstration and practical survey workflows.',
    summary:
      'AndraMini is intended to support early demonstration programmes, payload integration, and repeatable offshore data-capture missions.',
    publicStatus: 'seeking-demonstration-partners',
    statusCopy: 'Seeking test and demonstration partners, with a target pathway toward commercial operation within 18 months.',
    missionFit: ['Decommissioning environmental survey', 'Ad hoc hull inspection', 'Persistent environmental monitoring'],
    replenishmentConcept: 'Hydride-focused remote refuelling and replenishment pathway under progressive validation.',
    payloadCompatibility: ['AndraBeam', 'AndraField', 'AndraRise', 'AndraKeep (concept pathway)'],
    caveats: ['Detailed endurance, range, and depth figures are publication pending.', 'Validation pathway in progress; details released progressively.']
  },
  {
    name: 'Andra40',
    role: 'Larger form factor under development for longer-duration offshore missions with modular payload options.',
    summary:
      'Andra40 extends the same hydrogen-hydride and replenishment logic into a larger vessel architecture for persistent operations.',
    publicStatus: 'under-development',
    statusCopy: 'Under development as a larger autonomous offshore form factor.',
    missionFit: ['Persistent environmental monitoring', 'Offshore asset inspection', 'Future adjacent monitoring missions'],
    replenishmentConcept: 'Designed around hydrogen-electric endurance and remote replenishment logistics.',
    payloadCompatibility: ['AndraBeam', 'AndraField', 'AndraRise', 'AndraKeep (concept pathway)'],
    caveats: ['Final configuration and mission envelope are publication pending.', 'Commercial pathway details are released progressively.']
  }
];

export const payloadFamilies: PayloadFamily[] = [
  {
    name: 'AndraBeam',
    category: 'High-resolution acoustic sensing and inspection payload family',
    summary:
      'AndraBeam supports detailed subsea survey, inspection, and evidence-grade environmental observation. The vessel design intent includes minimal moving parts, low bubble generation, polymer hull construction, and low electrical signature to support data quality.',
    applications: ['Decommissioning survey', 'Hull inspection', 'Higher-energy acoustic method development pathways'],
    maturityCopy: 'Capability details are released progressively during validation.'
  },
  {
    name: 'AndraField',
    category: 'Environmental and field-sensing payload family',
    summary:
      'AndraField combines environmental and field-job-band sensing inputs into fused mission data products for offshore monitoring and decommissioning assurance workflows.',
    applications: ['Environmental baselines', 'Post-works assurance', 'Decision-support data products'],
    maturityCopy: 'Validation pathway in progress; integration details publication pending.'
  },
  {
    name: 'AndraRise',
    category: 'Semi-submersible observation configuration',
    summary:
      'AndraRise is intended for camera-based observation above the waterline while retaining a low-profile marine operating mode.',
    applications: ['Ad hoc visual checks', 'Surface-interface observation', 'Mixed camera/sensing workflows'],
    maturityCopy: 'Under development as a mission configuration pathway.'
  },
  {
    name: 'AndraKeep',
    category: 'Low-disturbance station-keeping concept',
    summary:
      'AndraKeep is a bio-inspired gripping or holding interface concept intended to reduce continuous propulsion demand during persistent monitoring missions.',
    applications: ['Persistent monitoring', 'Low-disturbance station holding', 'Energy-managed linger operations'],
    maturityCopy: 'Concept validation in progress.'
  }
];

export const missionScenarios: MissionScenario[] = [
  {
    title: 'Decommissioning environmental survey',
    slug: 'decommissioning-environmental-survey',
    priority: 'primary',
    context: 'Environmental survey during and after offshore decommissioning works is the first commercial focus.',
    problem: 'Operators need repeatable, evidence-grade environmental data over meaningful time windows.',
    limitation: 'Support-vessel dependence and short campaign windows can limit continuity and increase cost.',
    approach: 'Hydrogen-electric vessel missions with waypoint plans, linger/patrol modes, and remote replenishment logic.',
    outputs: ['Repeatable transect datasets', 'Timestamped environmental evidence logs', 'Baseline and post-works comparison packages'],
    whyItMatters: 'Longer time-on-task and lower deployment friction can improve decommissioning decision confidence.',
    demonstrationPathway: 'Demonstration partners are sought through service companies and major asset-owner programmes.',
    caveat: 'Detailed mission performance figures remain publication pending.'
  },
  {
    title: 'Ad hoc hull inspection',
    slug: 'ad-hoc-hull-inspection',
    priority: 'secondary',
    context: 'Secondary commercial focus for targeted inspection tasks without mobilising a full survey spread.',
    problem: 'Unplanned hull checks often require disproportionate mobilisation effort.',
    limitation: 'Conventional inspection mobilisations can be expensive and slow for time-sensitive checks.',
    approach: 'Deploy low-disturbance missions using acoustic and camera-oriented payload configurations.',
    outputs: ['Targeted acoustic/camera evidence packs', 'Mission-linked inspection observations'],
    caveat: 'Not presented as certified NDT equivalence; capability details released progressively.'
  },
  {
    title: 'Persistent environmental monitoring and sampling workflows',
    slug: 'persistent-environmental-monitoring',
    priority: 'future',
    context: 'Long-duration monitoring and sampling-style workflows for offshore environmental assurance.',
    problem: 'Long campaigns need continuity that is difficult with episodic vessel deployment patterns.',
    limitation: 'Battery logistics and repeated recovery cycles can limit practical monitoring persistence.',
    approach: 'Repeatable autonomous transects and linger missions with selected biological/environmental sampling concepts.',
    outputs: ['Continuous environmental trend records', 'Mission-linked sampling or proxy data streams'],
    caveat: 'Selected sampling variants are development pathways and not presented as finalised deployed capability.'
  }
];

export const faqs: FaqItem[] = [
  { question: 'What is Andrasta Marine?', answer: siteConfig.companyDescription },
  { question: 'What is the first commercial focus?', answer: 'Decommissioning environmental survey is the first commercial focus, with ad hoc hull inspection as a secondary focus.' },
  { question: 'What is public about the refuelling approach?', answer: 'Andrasta Marine is developing remote refuelling and replenishment based on hydride fuel logistics, including patent pending IP for a droppable refuelling robot.' },
  { question: 'Are final performance figures public?', answer: 'No. Endurance, range, depth, and detailed autonomy figures are publication pending and released progressively.' }
];

export const contactDetails = {
  email: 'andrastamarine@gmail.com',
  endpointEnvVar: 'NEXT_PUBLIC_CONTACT_ENDPOINT',
  categories: [
    'Decommissioning environmental survey',
    'Hull inspection',
    'Demonstration partnership',
    'Payload integration',
    'Technical partnership',
    'Strategic partnership / investment',
    'Supplier engagement',
    'General enquiry'
  ]
};
