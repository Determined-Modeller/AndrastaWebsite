export const siteConfig = {
  name: 'Andrasta Marine',
  domain: 'andrastamarine.com',
  mission: 'Redefine delivery of challenging offshore operations',
  heroCopy:
    'A low-noise, hydrogen-powered autonomous vessel system providing persistent maritime awareness, enabling continuous evidence collection and reducing reliance on high-cost assets.',
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
  'Conventional support fleets and boat-deployed operations are operational-expenditure heavy.',
  'Many operations remain dependent on mother systems for deployment and sustainment.',
  'Subsurface systems are often tethered or battery-based, requiring frequent deck recovery for charging.',
  'This reduces time on task, limits utilisation, and increases operational disturbance and emissions intensity.'
];

export const solutionApproach = [
  'Route-following missions with waypoint return, home-port logic, and configurable autonomy.',
  'Fuel dropped along the operational path and in situ via low-cost marinized fuelling robots.',
  'Deployment flexibility: helicopter, transport aircraft, and conventional marine methods.',
  'Operational emphasis on time-on-task, utilisation, flexibility, and reduced emissions intensity.'
];

export const designPrinciples = [
  'Designed for automated and remote operation from day 1.',
  'Design-for-manufacture architecture for credible scale-out.',
  'Low-cost potential despite hydrogen and light air/marine deployment architecture.',
  'Rugged hydrogen fuel-cell plus battery powertrain approach.',
  'Operation above or below water within the initial design envelope.',
  'Persistent, low-disturbance measurement and maritime awareness.'
];

export const technologyThemes = [
  {
    title: 'Underwater refuelling robot concept',
    detail:
      'In-situ refuelling intended to reduce deck recovery dependence and extend mission persistence.'
  },
  {
    title: 'Airdroppable deployment package',
    detail:
      'System and fuelling robot designed for helicopter or transport aircraft deployment workflows.'
  },
  {
    title: 'Low-noise, high-loiter profile',
    detail:
      'Quiet propulsion and endurance-first mission profiles for persistent evidence collection.'
  },
  {
    title: 'Hydrogen-electric direct-drive propulsion',
    detail:
      'Fuel-cell electric architecture with direct-drive motor and contrarotating prop concept for efficient range extension.'
  },
  {
    title: 'Onboard oxygen and hydrogen hydride storage',
    detail: 'Simple pressure-driven operation concept intended for practical field use.'
  },
  {
    title: 'Low-pressure hydrogen operation',
    detail:
      'Low-pressure architecture positioned as a deployment and safety advantage across civil operations.'
  },
  {
    title: 'Civil safety package',
    detail: 'Includes buoyancy pack system and safety-oriented features for civil deployment credibility.'
  }
];

export const payloadFamilies = [
  { name: 'AndraBeam', note: 'Payload family overview in development.' },
  { name: 'AndraField', note: 'Sensor integration variant details to be published.' },
  { name: 'AndraRise', note: 'Mission package and partner payload detail pending confirmation.' }
];

export const productLines = [
  {
    name: 'AndraMini',
    scale: '~1 m³ system',
    summary:
      'Effector form factor designed to integrate with existing marine supply chain equipment.',
    highlights: ['Persistent, low-noise sensing', 'Limited repositioning'],
    specs: [
      { label: 'Endurance', value: 'Performance data to be published' },
      { label: 'Range', value: 'Performance data to be published' },
      { label: 'Payload Capacity', value: 'Performance data to be published' }
    ]
  },
  {
    name: 'Andra40',
    scale: '~16.9 m³ / 40 ft ISO-container-scale system',
    summary:
      'Designed around lowest overall cost potential and flexible operational performance with larger coverage area.',
    highlights: ['Larger coverage area', 'Flexible deployment architecture'],
    specs: [
      { label: 'Endurance', value: 'Performance data to be published' },
      { label: 'Coverage Envelope', value: 'Performance data to be published' },
      { label: 'Payload Options', value: 'Performance data to be published' }
    ]
  }
];

export const teamPlaceholders = Array.from({ length: 6 }, (_, i) => ({
  title: `Team Profile ${i + 1}`,
  subtitle: 'Name and role to be announced',
  detail: 'Profile summary pending final review.'
}));

export const partnerPlaceholders = Array.from({ length: 3 }, (_, i) => ({
  title: `Partner ${i + 1}`,
  subtitle: 'Partner details to be announced',
  detail: 'Integration role and relationship summary pending confirmation.'
}));

export const caseStudies = [
  {
    slug: 'north-sea-emissions-enforcement',
    title: 'North Sea emissions enforcement',
    framing: 'Turning intermittent detection into continuous evidence',
    challenge:
      'Enforcement teams face intermittent observation windows and high-cost deployment cycles that limit evidentiary continuity.',
    limitation:
      'Crewed support fleets and episodic surveys introduce gaps in evidence capture and increase operational overhead.',
    approach:
      'Persistent low-noise autonomous monitoring with in-situ refuelling pathways designed to maintain operational continuity.',
    outcomes:
      'Stronger evidence continuity, improved mission utilisation, and reduced dependence on high-cost assets.'
  }
];

export const contactDetails = {
  company: 'Andrasta Marine',
  domain: 'andrastamarine.com',
  location: 'Primary operating location to be confirmed',
  email: 'TODO: confirm final production contact email (intended as info@...)'
};
