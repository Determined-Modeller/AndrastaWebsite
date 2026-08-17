export type MissionStory = {
  id: 'civil' | 'dual-use';
  tabLabel: string;
  market: string;
  title: string;
  framing: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition?: string;
  context: {
    value: string;
    label: string;
    detail: string;
  };
  decision: {
    question: string;
    detail: string;
  };
  barrier: string;
  response: Array<{
    title: string;
    detail: string;
  }>;
  value: string;
  principle?: string;
  sources?: Array<{
    label: string;
    href: string;
  }>;
};

export const missionStories: MissionStory[] = [
  {
    id: 'civil',
    tabLabel: 'Civil',
    market: 'Civil · Offshore decommissioning',
    title: 'Evidence before an irreversible removal decision.',
    framing:
      'An ageing offshore structure can be both a liability and a colonised artificial habitat. Operators need evidence strong enough to compare environmental outcomes, cost and long-term responsibility before the removal plan hardens.',
    imageUrl: '/mission-decommissioning.webp',
    imageAlt: 'Autonomous subsea vehicle surveying marine habitat established on an offshore steel structure',
    context: {
      value: '£43.4bn',
      label: 'Remaining UKCS decommissioning forecast',
      detail: 'The 2026 NSTA estimate illustrates the scale of the decisions still ahead for operators, the supply chain and the public purse.'
    },
    decision: {
      question: 'What outcome is justified by the evidence?',
      detail:
        'OSPAR 98/3 makes removal the regulatory starting point. Where an alternative may legally be considered, the ecological condition and consequences must be understood alongside safety, technical, societal and economic factors.'
    },
    barrier:
      'High-cost vessel surveys are typically episodic. Widely spaced snapshots can miss seasonal change and weaken the environmental baseline. Where evidence remains incomplete, corporate risk tolerance understandably favours the legally clear removal route even if another permitted outcome might reduce cost and environmental disturbance.',
    response: [
      {
        title: 'Repeat the same evidence route',
        detail: 'Waypoint-led observation can return to the same structure, elevations and habitat features without rebuilding the campaign each time.'
      },
      {
        title: 'Stay across the decision window',
        detail: 'Continuous service or hibernation between tasks supports multi-day and multi-week evidence gathering around weather, works and ecological change.'
      },
      {
        title: 'Intervene when evidence changes',
        detail: 'Persistent presence allows anomalies or uncertainty to trigger focused follow-up while the finding is still relevant to the decision.'
      }
    ],
    value:
      'Denser, more comparable evidence can reduce avoidable offshore cost, strengthen the operator’s decision basis and protect genuine habitat value where the regulatory route permits it to be considered.',
    sources: [
      {
        label: 'NSTA decommissioning cost estimate',
        href: 'https://www.nstauthority.co.uk/regulatory-information/decommissioning/cost-estimate/'
      },
      {
        label: 'UK offshore decommissioning guidance',
        href: 'https://www.gov.uk/guidance/oil-and-gas-decommissioning-of-offshore-installations-and-pipelines'
      }
    ]
  },
  {
    id: 'dual-use',
    tabLabel: 'Dual-use',
    market: 'Dual-use · Configurable mission capability',
    title: 'Capability without turning every vehicle into an expensive special case.',
    framing:
      'A useful platform must be capable, robust, affordable, interoperable and adaptable. It must accept large payloads and demanding electrical loads without sacrificing endurance, quietness or unit cost.',
    imageUrl: '/mission-dual-use.webp',
    imageAlt: 'Large autonomous subsea vehicle operating around critical maritime infrastructure',
    imagePosition: 'object-[58%_center]',
    context: {
      value: 'One hull',
      label: 'Many mission configurations',
      detail: 'A large flooded payload bay, explicit interfaces and a power architecture designed around payload diversity preserve useful configuration freedom.'
    },
    decision: {
      question: 'How much capability can the platform carry without losing endurance, quietness or affordability?',
      detail:
        'In a battery-only vehicle, endurance storage, peak power, payload volume, thermal conditioning and acoustic treatment compete inside the same hull. Improving one can quietly degrade several others.'
    },
    barrier:
      'Special-purpose payloads can impose large transient loads, reject difficult heat and require quiet operating conditions. Adding them late drives auxiliary machinery, pressure-hull volume, integration risk and cost.',
    response: [
      {
        title: 'Protect the payload volume',
        detail: 'AndraHold is organised around a large flooded payload bay so mission equipment is not automatically forced into the pressure-hull design problem.'
      },
      {
        title: 'Energy and power do different jobs',
        detail: 'The hybrid system is not a bolt-on: low-pressure hydride hydrogen storage carries endurance while the battery domain is configured around propulsion peaks and special-purpose appliance loads.'
      },
      {
        title: 'Quietness is designed in',
        detail: 'Hull, propulsion and thermal behaviour are optimised together for high practical efficiency and low signature across a usable seakeeping window.'
      }
    ],
    value:
      'The same architecture can support a wider payload and power design space while retaining the fleet-level virtues that matter: low signature, robustness, interoperability, serviceability and an affordable unit cost.',
    principle:
      'Hybrid does not make hydrogen simpler than batteries in isolation. Its value is in the complete design: shared thermal and acoustic systems can reduce dependence on complex damping or pumped-fluid equipment where noise, failure modes and cost hurt most.'
  }
];
