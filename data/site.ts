export type PlatformSpec = {
  label: string;
  value: string;
  status: 'confirmed' | 'pending';
};

export type Platform = {
  name: 'AndraMini' | 'Andra40';
  scale: string;
  summary: string;
  intendedRole: string;
  missionFits: string[];
  deploymentNotes: string[];
  payloadCompatibility: string[];
  confirmedSpecs: PlatformSpec[];
  pendingSpecs: PlatformSpec[];
  publicationStatus: string;
};

export type MissionUseCase = {
  slug: string;
  title: string;
  framing: string;
  operationalProblem: string;
  currentLimitation: string;
  andrastaApproach: string;
  likelyBenefit: string;
  outputs: string;
  readinessCaveat: string;
};

export type TechnologyTheme = {
  title: string;
  detail: string;
  maturity: 'publishable' | 'in-development';
};

export type PayloadFamily = {
  name: 'AndraBeam' | 'AndraField' | 'AndraRise';
  role: string;
  detail: string;
  status: 'concept' | 'in-development';
};

export type TrustSignal = {
  title: string;
  detail: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ResourceItem = {
  title: string;
  description: string;
  availability: 'available' | 'publication-pending';
  href?: string;
};

export const siteConfig = {
  name: 'Andrasta Marine',
  domain: 'andrastamarine.com',
  siteUrl: 'https://andrastamarine.com',
  primaryCta: 'Discuss a mission profile',
  secondaryCta: 'Explore platforms',
  heroHeadline: 'Persistent offshore autonomy for lower-disturbance maritime operations',
  heroSubhead:
    'Hydrogen-electric autonomous marine systems for inspection, emissions enforcement, and persistent maritime awareness where continuity of evidence and time-on-task matter.',
  valueTags: [
    'Hydrogen-electric architecture',
    'Low-noise mission profile',
    'Persistent sensing',
    'Modular payload families',
    'Flexible deployment pathways',
    'Reduced support-vessel dependence'
  ],
  companyDescription:
    'Andrasta Marine develops autonomous marine systems for persistent offshore inspection, emissions enforcement, and maritime awareness missions where continuity and operational restraint matter.',
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

export const platforms: Platform[] = [
  {
    name: 'AndraMini',
    scale: 'Approx. 1 m³ class system',
    summary:
      'Compact autonomous platform concept for focused inspection, directional sensing, and lower-footprint deployment scenarios.',
    intendedRole:
      'Short-to-medium area tasking where disturbance, deployment footprint, and sensing continuity are prioritized over large-area sweep coverage.',
    missionFits: ['Near-asset inspection support', 'Targeted emissions sensing', 'Persistent local monitoring stations'],
    deploymentNotes: ['Compatible with existing marine logistics workflows', 'Concept pathway includes flexible launch and recovery options'],
    payloadCompatibility: ['AndraBeam mission package options', 'AndraField sensor configurations', 'Partner payload integration pathway (publication pending)'],
    confirmedSpecs: [
      { label: 'Scale class', value: 'Approx. 1 m³ form factor', status: 'confirmed' },
      { label: 'Programme state', value: 'Public concept and development programme', status: 'confirmed' }
    ],
    pendingSpecs: [
      { label: 'Endurance band', value: 'To be confirmed after system-level validation', status: 'pending' },
      { label: 'Payload envelope', value: 'Publication pending', status: 'pending' },
      { label: 'Coverage envelope', value: 'Mission-dependent; publication pending', status: 'pending' }
    ],
    publicationStatus: 'Selected high-level details are publishable; quantitative performance values remain pending verification.'
  },
  {
    name: 'Andra40',
    scale: 'Approx. 40 ft ISO-container-scale architecture (~16.9 m³ class)',
    summary:
      'Larger platform pathway oriented to broader-area mission persistence and modular payload flexibility in offshore operating contexts.',
    intendedRole:
      'Extended offshore awareness and inspection tasking where coverage continuity and integration flexibility are required.',
    missionFits: ['Persistent offshore awareness sweeps', 'Wider-area emissions enforcement missions', 'Multi-payload mission packages'],
    deploymentNotes: ['Aligned with container-scale handling concepts', 'Development pathway includes staged deployment and recovery concepts'],
    payloadCompatibility: ['AndraBeam mission packages', 'AndraField distributed sensing packages', 'AndraRise deployment/surface-interface modules'],
    confirmedSpecs: [
      { label: 'Scale class', value: '40 ft ISO-container-scale architecture', status: 'confirmed' },
      { label: 'Programme state', value: 'Public concept and development programme', status: 'confirmed' }
    ],
    pendingSpecs: [
      { label: 'Endurance band', value: 'To be confirmed after system-level validation', status: 'pending' },
      { label: 'Payload envelope', value: 'Publication pending', status: 'pending' },
      { label: 'Coverage envelope', value: 'Mission-dependent; publication pending', status: 'pending' }
    ],
    publicationStatus: 'Architecture direction is public; quantified mission performance values are intentionally withheld pending validation and release approvals.'
  }
];

export const payloadFamilies: PayloadFamily[] = [
  {
    name: 'AndraBeam',
    role: 'Inspection, directional sensing, and survey payload family',
    detail: 'Designed to support inspection and directed sensing profiles where repeatable measurement tracks are required.',
    status: 'in-development'
  },
  {
    name: 'AndraField',
    role: 'Distributed environmental and field-monitoring sensor family',
    detail: 'Focused on distributed sensing packages for persistent environmental or field-state monitoring workflows.',
    status: 'in-development'
  },
  {
    name: 'AndraRise',
    role: 'Deployment, recovery, surface-interface, and partner mission-package family',
    detail: 'Intended to support deployment/recovery workflows and partner-oriented mission package integration pathways.',
    status: 'concept'
  }
];

export const missionUseCases: MissionUseCase[] = [
  {
    slug: 'north-sea-emissions-enforcement',
    title: 'North Sea emissions enforcement',
    framing: 'Mission scenario: turning intermittent detection windows into continuity-oriented evidence collection.',
    operationalProblem: 'Offshore emissions monitoring frequently depends on intermittent crewed sorties that may miss key windows of evidence.',
    currentLimitation: 'Short observation windows and high support-vessel demand can produce costly operations with fragmented evidence timelines.',
    andrastaApproach: 'Use lower-disturbance autonomous patrol and sensing patterns designed for longer time-on-task and repeat coverage passes.',
    likelyBenefit: 'Improved continuity of evidence collection and reduced dependence on frequent high-cost vessel dispatch for routine monitoring periods.',
    outputs: 'Time-series sensing records, geospatially linked mission tracks, and event-correlated observation logs for review workflows.',
    readinessCaveat: 'Use-case frame only; public details are intentionally limited to publishable programme information.'
  },
  {
    slug: 'offshore-asset-inspection-and-integrity-monitoring',
    title: 'Offshore asset inspection and integrity monitoring',
    framing: 'Mission scenario: extending inspection persistence where asset condition trends matter over time.',
    operationalProblem: 'Asset integrity workflows often rely on episodic inspections that can leave long intervals between observations.',
    currentLimitation: 'Traditional inspection campaigns are frequently constrained by vessel availability, weather windows, and operating cost.',
    andrastaApproach: 'Deploy autonomous inspection-oriented missions with modular sensing packages and repeatable route/station profiles.',
    likelyBenefit: 'Higher inspection cadence potential and better continuity for anomaly tracking between full campaign windows.',
    outputs: 'Structured inspection datasets, comparative route-pass observations, and evidence packages for engineering review pipelines.',
    readinessCaveat: 'Application concept for engagement discussions; final payload configuration and performance bands remain publication pending.'
  },
  {
    slug: 'persistent-maritime-awareness-exclusion-zone-monitoring',
    title: 'Persistent maritime awareness and exclusion-zone monitoring',
    framing: 'Mission scenario: maintaining continuity in defined offshore operating zones without constant crewed presence.',
    operationalProblem: 'Monitoring defined maritime zones continuously is operationally difficult when relying on crewed assets alone.',
    currentLimitation: 'Crewing constraints and vessel redeployment cycles can leave periodic awareness gaps in exclusion or priority zones.',
    andrastaApproach: 'Use autonomous patrol patterns with low-noise sensing posture and mission profiles intended for persistent presence.',
    likelyBenefit: 'More consistent monitoring posture with potential reduction in support-vessel utilization for routine zone awareness tasks.',
    outputs: 'Persistent track awareness logs, mission event records, and timestamped evidence outputs for operational decision support.',
    readinessCaveat: 'Publicly presented as a mission scenario; detailed operational envelopes remain subject to validation and release controls.'
  }
];

export const technologyThemes: TechnologyTheme[] = [
  {
    title: 'Hydrogen-electric propulsion architecture',
    detail:
      'System architecture combines hydrogen-electric energy pathways with autonomy objectives to support longer time-on-task design goals.',
    maturity: 'publishable'
  },
  {
    title: 'Low-noise loiter and sensing posture',
    detail:
      'Low-disturbance operational intent is central to sensing quality, repeatable evidence capture, and mission suitability near sensitive operations.',
    maturity: 'publishable'
  },
  {
    title: 'Modular payload family integration',
    detail:
      'AndraBeam, AndraField, and AndraRise are structured as mission-package families to support evolving sensing and deployment pathways.',
    maturity: 'in-development'
  },
  {
    title: 'Deployment and refuelling pathway concepts',
    detail:
      'Deployment and refuelling concepts are being developed as staged operational pathways to reduce dependence on high-cost support cycles.',
    maturity: 'in-development'
  }
];

export const trustSignals: TrustSignal[] = [
  {
    title: 'Engineering-led system development',
    detail: 'Programme communication is grounded in architecture, mission logic, and technical review rather than promotional claims.'
  },
  {
    title: 'Hydrogen and hazardous-systems competence',
    detail: 'Hydrogen system direction is presented conservatively with bounded statements suitable for public technical communication.'
  },
  {
    title: 'Maritime and offshore operating focus',
    detail: 'Use-case framing prioritizes offshore operational constraints, deployment realities, and evidence continuity requirements.'
  },
  {
    title: 'Modular platform roadmap',
    detail: 'Platform and payload families are structured for phased capability publication and partner-oriented integration pathways.'
  },
  {
    title: 'Publishable-claims policy',
    detail: 'Public site content intentionally limits detail to confirmed or publishable claims while development data matures.'
  }
];

export const faqs: FaqItem[] = [
  {
    question: 'What is Andrasta Marine developing?',
    answer:
      'Andrasta Marine is developing hydrogen-electric autonomous marine platform systems and modular payload pathways for offshore inspection, emissions enforcement, and maritime awareness missions.'
  },
  {
    question: 'Is this a final product specification?',
    answer:
      'No. Public material is intentionally limited to publishable programme information. Quantitative performance bands and detailed envelopes are released only after validation and approval.'
  },
  {
    question: 'Why hydrogen-electric?',
    answer:
      'Hydrogen-electric architecture is being pursued as part of a mission model focused on longer time-on-task and lower-disturbance offshore operations.'
  },
  {
    question: 'What missions are the platforms aimed at?',
    answer:
      'Current mission focus includes emissions enforcement scenarios, offshore inspection and integrity monitoring scenarios, and persistent maritime awareness/exclusion-zone monitoring scenarios.'
  },
  {
    question: 'What is confirmed versus under development?',
    answer:
      'Platform classes, mission intent, and architecture direction are publishable. Detailed endurance, payload, and coverage values remain publication pending until validation is complete.'
  },
  {
    question: 'How can partners engage?',
    answer:
      'Partners can engage through mission-profile discussions covering operating context, evidence requirements, payload priorities, and phased programme collaboration options.'
  }
];

export const resources: ResourceItem[] = [
  {
    title: 'Platform brief pack',
    description: 'High-level AndraMini and Andra40 programme overview for mission-fit discussions.',
    availability: 'publication-pending'
  },
  {
    title: 'Mission scenario one-pager',
    description: 'Structured summary of emissions enforcement, inspection, and awareness application frames.',
    availability: 'publication-pending'
  }
];

export const solutionContent = {
  operationalProblems: [
    'High-cost episodic offshore operations can limit mission continuity.',
    'Support-vessel dependence introduces schedule and OPEX pressure.',
    'Limited time-on-task constrains evidence continuity across dynamic conditions.',
    'Operational disturbance and emissions intensity can be high in conventional deployment cycles.'
  ],
  andrastaApproach: [
    'Persistent autonomous systems oriented toward continuity-sensitive missions.',
    'Flexible deployment pathways aligned to offshore logistics realities.',
    'Low-noise sensing posture for reduced-disturbance evidence collection.',
    'Modular mission payload families to support phased capability growth.',
    'Reduced reliance on high-cost support assets for routine monitoring profiles.'
  ],
  operatingModel: [
    { step: 'Mission planning', detail: 'Define operating zone, mission objectives, sensing priorities, and evidence requirements.' },
    { step: 'Deployment', detail: 'Deploy using mission-appropriate logistics pathways based on operating conditions.' },
    { step: 'Autonomous route/station/survey execution', detail: 'Execute planned route, station-keeping, or survey behaviours with continuity-focused posture.' },
    { step: 'Data and evidence collection', detail: 'Capture timestamped mission observations for technical and operational review.' },
    { step: 'Recovery or redeployment', detail: 'Recover, refit, or redeploy based on mission cadence and operating requirements.' }
  ],
  fitStatement:
    'Andrasta Marine is not positioned as a generic replacement for every AUV class. The operating model is targeted to missions where continuity, disturbance profile, and deployment economics are central constraints.'
};

export const aboutContent = {
  purpose:
    'Andrasta Marine exists to develop offshore autonomy systems that improve continuity of mission evidence while reducing operational disturbance and support burden.',
  engineeringPhilosophy:
    'Design choices are made for technical credibility, modularity, and operational realism. Public claims remain bounded to information suitable for publication.',
  whyNow:
    'Offshore stakeholders increasingly need continuity-sensitive sensing and inspection workflows that can operate with less dependence on high-cost episodic vessel campaigns.',
  notYetClaimed:
    [
      'No unvalidated endurance or coverage values are being presented as final.',
      'No unconfirmed certifications, contracts, or partner claims are being presented.',
      'No production-readiness claims are made beyond currently publishable programme status.'
    ],
  engagementModel:
    'Near-term engagement focuses on technical mission-profile discussions, payload alignment conversations, and phased programme collaboration planning.',
  teamPartnersNote:
    'Team and partner profiles will be published as public-facing details are confirmed for release.'
};

export const contactDetails = {
  company: 'Andrasta Marine',
  domain: 'andrastamarine.com',
  location: 'Operating location details: publication pending',
  confirmedEmail: '',
  endpointEnvVar: 'NEXT_PUBLIC_CONTACT_ENDPOINT'
};
