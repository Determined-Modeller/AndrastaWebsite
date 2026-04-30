export const siteConfig = {
  name: 'Andrasta Marine',
  domain: 'andrastamarine.com',
  mission: 'Redefining what is possible offshore',
  heroCopy:
    'Andrasta Marine develops hydrogen-powered autonomous marine vessels for persistent offshore survey, inspection, and environmental evidence-gathering without continuous dependence on support vessels.',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/our-solution', label: 'Our Solution' },
    { href: '/technology', label: 'Technology' },
    { href: '/product-lines', label: 'Product Lines' },
    { href: '/about', label: 'About Us' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/contact', label: 'Contact' }
  ]
};

export const solutionProblems = [
  'Offshore survey and inspection are constrained by support-vessel dependence, mobilisation cost, and limited time-on-task.',
  'Battery systems remain highly effective in short-duration roles, but become harder to handle at larger form factors and high-utilisation offshore duty cycles.',
  'Repeated deck recovery, wet/dry handling, and charging logistics can interrupt useful data collection and increase operational disturbance.',
  'Environmental decision-making during decommissioning benefits from repeatable information over longer windows, not just short episodic campaigns.'
];

export const solutionApproach = [
  'Hydrogen-electric vessel architecture designed around hydride-focused storage and practical remote replenishment.',
  'Waypoint-based missions, patrol patterns, linger modes, and recovery planning using commercially deployed vessel autonomy features where appropriate.',
  'Modular vessel form factors and mission payload families for environmental survey, hull inspection, and persistent monitoring workflows.',
  'Operational emphasis on time-on-task, asset utilisation, reduced support-vessel dependence, and useful evidence for offshore decision-making.'
];

export const designPrinciples = [
  'Vessel OEM model integrating COTS and bespoke marine, hydrogen, sensing, autonomy, and payload systems.',
  'Hydride-focused hydrogen-electric design from the vessel architecture upward, not as a late-stage energy module.',
  'Low-pressure storage philosophy and ruggedised powertrain integration for practical offshore handling.',
  'Quiet operation with minimal moving parts, low bubble generation, polymer hull design intent, and low electrical signature.',
  'Controlled public disclosure: performance figures, maturity claims, and operational data are released only when validated.',
  'Demonstration-led pathway for decommissioning environmental survey and ad hoc hull inspection.'
];

export const technologyThemes = [
  {
    title: 'Hydride-focused hydrogen-electric architecture',
    detail:
      'The vessel, powertrain, handling philosophy, and replenishment chain are designed around hydride-based hydrogen storage from the start.'
  },
  {
    title: 'Remote replenishment concept',
    detail:
      'Andrasta Marine owns IP for a droppable refuelling robot, with patent pending protection. Further validation is required before operational deployment.'
  },
  {
    title: 'Waypoint mission logic',
    detail:
      'Mission concepts include repeatable survey routes, patrol patterns, linger modes, recovery planning, and remote monitoring.'
  },
  {
    title: 'Quiet sensing platform',
    detail:
      'Minimal moving parts, low bubble generation, low electrical signature, and polymer hull design intent support improved acoustic and environmental data quality.'
  },
  {
    title: 'Low-pressure storage philosophy',
    detail:
      'Low-pressure hydride storage is intended to improve the relationship between endurance, handling mass, shock tolerance, and operational flexibility.'
  },
  {
    title: 'Modular mission payloads',
    detail:
      'Payload families are structured around acoustic inspection, environmental field sensing, above-water observation, and station-keeping workflows.'
  },
  {
    title: 'Civil demonstration pathway',
    detail:
      'The first commercial focus is low-regret environmental survey during and after offshore decommissioning works.'
  }
];

export const payloadFamilies = [
  {
    name: 'AndraBeam',
    note: 'High-resolution acoustic sensing and inspection payload family for detailed subsea survey, inspection, and evidence-grade environmental observation.'
  },
  {
    name: 'AndraField',
    note: 'Environmental and field-sensing payload family, combining field measurements, sensor inputs, and fused mission data products.'
  },
  {
    name: 'AndraRise',
    note: 'Semi-submersible mission configuration for camera-based observation above the waterline while retaining a low-profile marine operating mode.'
  },
  {
    name: 'AndraKeep',
    note: 'Low-disturbance station-keeping concept using a bio-inspired gripping or holding interface to reduce continuous propulsion demand during persistent monitoring.'
  }
];

export const productLines = [
  {
    name: 'AndraMini',
    scale: 'Smaller vessel form factor',
    summary:
      'AndraMini is the smaller Andrasta Marine vessel form factor, intended to support early demonstration, practical offshore survey workflows, payload integration, and near-term partner trials.',
    highlights: [
      'Seeking test and demonstration partners',
      'Target pathway toward commercial operation within 18 months',
      'Suited to decommissioning environmental survey and payload demonstration workflows'
    ],
    specs: [
      { label: 'Public status', value: 'Seeking demonstration partners' },
      { label: 'First mission focus', value: 'Decommissioning environmental survey' },
      { label: 'Payload families', value: 'AndraBeam, AndraField, AndraRise, AndraKeep' }
    ]
  },
  {
    name: 'Andra40',
    scale: 'Larger autonomous offshore form factor',
    summary:
      'Andra40 is the larger Andrasta Marine vessel form factor, under development around hydrogen-electric endurance, hydride replenishment, modular payloads, and practical offshore logistics.',
    highlights: [
      'Under development',
      'Designed around hydride-focused remote replenishment',
      'Public details released progressively as the platform matures'
    ],
    specs: [
      { label: 'Public status', value: 'Under development' },
      { label: 'Design emphasis', value: 'Hydride replenishment and practical offshore logistics' },
      { label: 'Performance data', value: 'Publication pending' }
    ]
  }
];

export const teamPlaceholders = [
  {
    title: 'Engineering-led development team',
    subtitle: 'Marine, hydrogen, and high-integrity engineering experience',
    detail:
      'Andrasta Marine is being developed by an experienced professional team currently active across the marine, hydrogen, and high-integrity engineering sectors.'
  },
  {
    title: 'Controlled public disclosure',
    subtitle: 'Fuller profiles to follow',
    detail:
      'Public disclosure is being staged deliberately while platform development, partner engagement, and IP protection mature.'
  },
  {
    title: 'Demonstration partner focus',
    subtitle: 'Practical offshore validation pathway',
    detail:
      'The immediate priority is to work with credible partners on decommissioning environmental survey and ad hoc hull inspection demonstration pathways.'
  }
];

export const partnerPlaceholders = [
  {
    title: 'Demonstration partners',
    subtitle: 'Decommissioning environmental survey',
    detail:
      'Andrasta Marine is seeking credible partners for low-regret environmental survey during and after offshore decommissioning works.'
  },
  {
    title: 'Payload and sensing partners',
    subtitle: 'Acoustic, field, camera, and sampling workflows',
    detail:
      'Payload integration discussions are welcomed where the mission need aligns with persistent offshore survey, inspection, or environmental monitoring.'
  },
  {
    title: 'Strategic and supply partners',
    subtitle: 'Marine, hydrogen, autonomy, and operations',
    detail:
      'Supplier and strategic conversations are focused on practical demonstration, robust integration, and credible route-to-market development.'
  }
];

export const caseStudies = [
  {
    slug: 'decommissioning-environmental-survey',
    title: 'Decommissioning environmental survey',
    framing: 'Repeatable environmental data before, during, and after offshore works',
    challenge:
      'Offshore decommissioning creates a need for repeatable environmental data across changing works conditions and post-works assurance periods.',
    limitation:
      'Short vessel campaigns can miss temporal variation, increase mobilisation cost, and reduce the continuity of information available for decision-making.',
    approach:
      'Persistent autonomous survey using hydride-replenished hydrogen-electric vessels, modular environmental payloads, and repeatable mission logic.',
    outcomes:
      'Baseline survey data, repeat transects, environmental observations, and decision-support evidence packages for operators and service partners.'
  },
  {
    slug: 'ad-hoc-hull-inspection',
    title: 'Ad hoc hull inspection',
    framing: 'Targeted inspection without immediately mobilising a full conventional survey spread',
    challenge:
      'Operators may need timely hull or structure inspection where mobilisation cost and scheduling friction create delays.',
    limitation:
      'Conventional inspection campaigns can be disproportionate for targeted questions, early anomaly review, or repeat observation.',
    approach:
      'Low-disturbance vessel operation with acoustic or camera-capable payload families for targeted inspection workflows.',
    outcomes:
      'Targeted visual or acoustic records, inspection planning data, anomaly review packages, and repeatable survey records. Certified inspection claims remain publication pending.'
  },
  {
    slug: 'persistent-environmental-monitoring',
    title: 'Persistent environmental monitoring and sampling',
    framing: 'Longer-window observation for better offshore environmental decisions',
    challenge:
      'Some offshore decisions benefit from repeated environmental observations over longer windows rather than isolated campaign snapshots.',
    limitation:
      'Single campaigns may not capture variability in environmental conditions, biological activity, or local disturbance patterns.',
    approach:
      'Persistent monitoring missions using field-sensing payloads and potential biological or environmental sampling workflows, including float-like sampling concepts.',
    outcomes:
      'Repeated observations, field measurements, sampling records where applicable, and fused mission data products. Sampling capability remains a development pathway.'
  }
];

export const contactDetails = {
  company: 'Andrasta Marine',
  domain: 'andrastamarine.com',
  location: 'Public operating location to be confirmed',
  email: 'andrastamarine@gmail.com'
};
