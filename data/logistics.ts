export type LogisticsScenarioKey = 'civil' | 'dual-use';
export type LogisticsModelKey = 'conventional' | 'andrasta';

export type LogisticsIcon = 'base' | 'vessel' | 'vehicle' | 'asset' | 'charge' | 'recovery' | 'command';

export type LogisticsNode = {
  id: string;
  label: string;
  kicker: string;
  detail: string;
  x: number;
  y: number;
  icon: LogisticsIcon;
};

export type LogisticsModel = {
  label: string;
  strapline: string;
  primaryNodeId: string;
  nodes: LogisticsNode[];
  routes: string[];
};

export type LogisticsScenario = {
  label: string;
  title: string;
  intro: string;
  models: Record<LogisticsModelKey, LogisticsModel>;
  comparison: Array<{
    label: string;
    conventional: string;
    andrasta: string;
  }>;
};

export const logisticsScenarios: Record<LogisticsScenarioKey, LogisticsScenario> = {
  civil: {
    label: 'Civil operations',
    title: 'Offshore infrastructure + environmental assurance',
    intro:
      'Compare a periodic vessel-led campaign with a replenishable autonomous cohort operating across an offshore asset corridor.',
    models: {
      conventional: {
        label: 'Conventional campaign',
        strapline: 'Vehicle, crew and support vessel move as one package.',
        primaryNodeId: 'civil-conventional-vessel',
        routes: ['M 14 73 C 22 62 28 52 36 46 S 57 39 72 36 S 64 66 49 76 C 35 83 22 80 14 73'],
        nodes: [
          {
            id: 'civil-conventional-port',
            label: 'Mobilisation port',
            kicker: 'Start point',
            detail: 'Specialist vessel, crew, launch equipment and vehicle are mobilised together before the campaign can begin.',
            x: 14,
            y: 73,
            icon: 'base'
          },
          {
            id: 'civil-conventional-vessel',
            label: 'Support vessel',
            kicker: 'Primary dependency',
            detail: 'The support vessel carries the operating team and remains central to launch, recovery, charging and intervention.',
            x: 36,
            y: 46,
            icon: 'vessel'
          },
          {
            id: 'civil-conventional-asset',
            label: 'Single worksite',
            kicker: 'Mission area',
            detail: 'Survey and inspection are concentrated around the vessel campaign window and its immediate operating area.',
            x: 72,
            y: 36,
            icon: 'asset'
          },
          {
            id: 'civil-conventional-deck',
            label: 'Deck turnaround',
            kicker: 'Cycle reset',
            detail: 'Energy replenishment, payload changes and routine servicing interrupt the in-water mission and require recovery.',
            x: 49,
            y: 76,
            icon: 'recovery'
          }
        ]
      },
      andrasta: {
        label: 'Andrasta operating system',
        strapline: 'Vehicle, energy and logistics are designed as a repeatable loop.',
        primaryNodeId: 'civil-andrasta-charge',
        routes: [
          'M 13 73 C 18 60 23 50 29 44 C 38 36 48 31 57 31 C 66 31 73 35 79 42',
          'M 29 44 C 37 54 45 65 55 70 C 47 77 38 81 29 79',
          'M 55 70 C 66 63 74 53 79 42'
        ],
        nodes: [
          {
            id: 'civil-andrasta-base',
            label: 'Shore logistics',
            kicker: 'Prepare + configure',
            detail: 'Mission payloads, energy modules and vehicle configurations are prepared through a controlled shore or port workflow.',
            x: 13,
            y: 73,
            icon: 'base'
          },
          {
            id: 'civil-andrasta-insert',
            label: 'Flexible insertion',
            kicker: 'Reach the mission',
            detail: 'Road, port, workboat and host-vessel options can be selected around the site rather than a single dedicated mobilisation route.',
            x: 29,
            y: 44,
            icon: 'vessel'
          },
          {
            id: 'civil-andrasta-cohort',
            label: 'Vehicle cohort',
            kicker: 'Distributed operations',
            detail: 'Mission-configured vehicles divide sensing, inspection and station-keeping work across the operating area.',
            x: 57,
            y: 31,
            icon: 'vehicle'
          },
          {
            id: 'civil-andrasta-corridor',
            label: 'Asset corridor',
            kicker: 'Persistent evidence',
            detail: 'Repeatable routes support infrastructure observation, environmental evidence and faster follow-up of change or anomalies.',
            x: 79,
            y: 42,
            icon: 'asset'
          },
          {
            id: 'civil-andrasta-charge',
            label: 'Subsea replenishment',
            kicker: 'Mission extension',
            detail: 'AndraCharge is intended to replenish and service compatible vehicles in water, reducing routine deck-recovery interruptions.',
            x: 55,
            y: 70,
            icon: 'charge'
          },
          {
            id: 'civil-andrasta-recover',
            label: 'Recovery of opportunity',
            kicker: 'Flexible turnaround',
            detail: 'Recovery can be aligned with available vessels, ports and maintenance need rather than defining every operating cycle.',
            x: 29,
            y: 79,
            icon: 'recovery'
          }
        ]
      }
    },
    comparison: [
      {
        label: 'Operating pattern',
        conventional: 'Periodic vessel campaign',
        andrasta: 'Persistent cohort operation'
      },
      {
        label: 'Turnaround',
        conventional: 'Routine deck recovery',
        andrasta: 'In-water replenishment pathway'
      },
      {
        label: 'Support model',
        conventional: 'Specialist asset-led',
        andrasta: 'Flexible, multimodal logistics'
      }
    ]
  },
  'dual-use': {
    label: 'Dual-use operations',
    title: 'Persistent maritime awareness + seabed security',
    intro:
      'Compare a support-asset-led deployment with a distributed system able to sustain, reposition and re-task an autonomous cohort.',
    models: {
      conventional: {
        label: 'Conventional deployment',
        strapline: 'Coverage follows the availability and operating pattern of a high-value support asset.',
        primaryNodeId: 'dual-conventional-support',
        routes: ['M 14 73 C 23 60 29 49 38 43 S 58 34 73 31 S 65 65 49 76 C 35 82 22 80 14 73'],
        nodes: [
          {
            id: 'dual-conventional-base',
            label: 'Fixed base',
            kicker: 'Mobilisation',
            detail: 'The mission begins from a defined base with a coupled vehicle, crew and support-asset deployment plan.',
            x: 14,
            y: 73,
            icon: 'base'
          },
          {
            id: 'dual-conventional-support',
            label: 'Support asset',
            kicker: 'Primary dependency',
            detail: 'A scarce or conspicuous support asset remains central to deployment, communications, intervention and recovery.',
            x: 38,
            y: 43,
            icon: 'vessel'
          },
          {
            id: 'dual-conventional-patrol',
            label: 'Patrol area',
            kicker: 'Intermittent presence',
            detail: 'Coverage is shaped by transit, tasking and recovery windows around the supporting platform.',
            x: 73,
            y: 31,
            icon: 'asset'
          },
          {
            id: 'dual-conventional-recovery',
            label: 'Planned recovery',
            kicker: 'Cycle reset',
            detail: 'The vehicle returns to a predictable recovery point for energy, payload and maintenance turnaround.',
            x: 49,
            y: 76,
            icon: 'recovery'
          }
        ]
      },
      andrasta: {
        label: 'Andrasta operating system',
        strapline: 'Distributed insertion, cohort operation and replenishment support a less predictable footprint.',
        primaryNodeId: 'dual-andrasta-watch',
        routes: [
          'M 14 73 C 20 58 27 48 36 42 C 46 34 57 29 68 31 C 75 32 80 27 84 19',
          'M 36 42 C 45 51 52 63 59 71 C 49 78 39 81 29 79',
          'M 59 71 C 68 62 72 47 68 31'
        ],
        nodes: [
          {
            id: 'dual-andrasta-insert',
            label: 'Distributed insertion',
            kicker: 'Multiple routes',
            detail: 'Port, road, vessel and air-delivery concepts allow the mission package to be positioned around operational constraints.',
            x: 14,
            y: 73,
            icon: 'base'
          },
          {
            id: 'dual-andrasta-cohort',
            label: 'Vehicle cohort',
            kicker: 'Distributed presence',
            detail: 'Multiple mission-configured vehicles can divide sensing, communications and payload roles across the operating area.',
            x: 36,
            y: 42,
            icon: 'vehicle'
          },
          {
            id: 'dual-andrasta-watch',
            label: 'Watch areas',
            kicker: 'Persistent awareness',
            detail: 'Low-signature vehicles are intended to sustain observation around critical areas without continuous close support.',
            x: 68,
            y: 31,
            icon: 'asset'
          },
          {
            id: 'dual-andrasta-c2',
            label: 'C2 + re-tasking',
            kicker: 'Mission control',
            detail: 'Defined command interfaces allow authorised operators and partner systems to cue, re-task and coordinate the cohort.',
            x: 84,
            y: 19,
            icon: 'command'
          },
          {
            id: 'dual-andrasta-charge',
            label: 'Forward replenishment',
            kicker: 'Mission extension',
            detail: 'A staged AndraCharge node is intended to extend the useful operating window and support mission turnaround in water.',
            x: 59,
            y: 71,
            icon: 'charge'
          },
          {
            id: 'dual-andrasta-recovery',
            label: 'Recovery of opportunity',
            kicker: 'Flexible footprint',
            detail: 'Vehicles can be recovered through available routes when the mission, configuration or maintenance state requires it.',
            x: 29,
            y: 79,
            icon: 'recovery'
          }
        ]
      }
    },
    comparison: [
      {
        label: 'Presence',
        conventional: 'Support-window limited',
        andrasta: 'Persistent, distributed cohort'
      },
      {
        label: 'Mission geometry',
        conventional: 'Single support axis',
        andrasta: 'Dispersed insertion + recovery'
      },
      {
        label: 'Adaptation',
        conventional: 'Recovery-led reconfiguration',
        andrasta: 'Remote re-tasking + forward support'
      }
    ]
  }
};
