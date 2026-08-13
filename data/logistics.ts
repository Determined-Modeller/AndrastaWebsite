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
      'Compare a periodic vessel-led campaign with waypoint-led systems designed to remain useful across real operational decision windows.',
    models: {
      conventional: {
        label: 'Conventional campaign',
        strapline: 'Vehicle, crew and support vessel move as one package.',
        primaryNodeId: 'civil-conventional-vessel',
        routes: ['M 16 73 C 23 62 29 52 36 46 S 57 39 72 36 S 64 66 49 76 C 35 83 23 80 16 73'],
        nodes: [
          {
            id: 'civil-conventional-port',
            label: 'Mobilisation port',
            kicker: 'Start point',
            detail: 'Specialist vessel, crew, launch equipment and vehicle are mobilised together before the campaign can begin.',
            x: 16,
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
        strapline: 'Waypoint tasking, long service intervals and portable fuelling are designed as one repeatable loop.',
        primaryNodeId: 'civil-andrasta-corridor',
        routes: [
          'M 16 73 C 20 60 24 50 29 44 C 38 36 48 31 57 31 C 66 31 73 35 79 42',
          'M 29 44 C 37 54 45 65 55 70 C 47 77 38 81 29 79',
          'M 55 70 C 66 63 74 53 79 42'
        ],
        nodes: [
          {
            id: 'civil-andrasta-base',
            label: 'Shore logistics',
            kicker: 'Prepare + configure',
            detail: 'Mission payloads, energy modules and vehicle configurations are prepared through a controlled shore or port workflow.',
            x: 16,
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
            label: 'Waypoint tasking',
            kicker: 'Adaptive mission state',
            detail: 'Vehicles can follow repeatable waypoints, loiter, hibernate or remain continuously in service as the evidence need changes.',
            x: 57,
            y: 31,
            icon: 'vehicle'
          },
          {
            id: 'civil-andrasta-corridor',
            label: 'Decision window',
            kicker: 'Actionable continuity',
            detail: 'Designed to stay on task across real multi-day and multi-week decision windows - long enough to turn observation into actionable information.',
            x: 79,
            y: 42,
            icon: 'asset'
          },
          {
            id: 'civil-andrasta-charge',
            label: 'Portable fuelling nodes',
            kicker: 'Distributed endurance',
            detail: 'Portable fuelling nodes can be staged through available logistics routes, supporting repeated mission cycles without dependence on a permanent facility.',
            x: 55,
            y: 70,
            icon: 'charge'
          },
          {
            id: 'civil-andrasta-recover',
            label: 'Planned service window',
            kicker: 'Lifecycle design',
            detail: 'Inspection and maintenance are intended around long service intervals, rather than every fuelling cycle, with recovery aligned to condition and mission need.',
            x: 29,
            y: 79,
            icon: 'recovery'
          }
        ]
      }
    },
    comparison: [
      {
        label: 'Decision window',
        conventional: 'Periodic campaign snapshot',
        andrasta: 'Multi-day / multi-week continuity'
      },
      {
        label: 'Mission state',
        conventional: 'Recover to re-task',
        andrasta: 'Waypoint, loiter or hibernate'
      },
      {
        label: 'Lifecycle',
        conventional: 'Energy cycle sets recovery',
        andrasta: 'Service interval sets recovery'
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
        routes: ['M 16 73 C 24 60 30 49 38 43 S 58 34 73 31 S 65 65 49 76 C 35 82 23 80 16 73'],
        nodes: [
          {
            id: 'dual-conventional-base',
            label: 'Fixed base',
            kicker: 'Mobilisation',
            detail: 'The mission begins from a defined base with a coupled vehicle, crew and support-asset deployment plan.',
            x: 16,
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
        strapline: 'Distributed insertion, cohort operation and sustainment support a less predictable footprint.',
        primaryNodeId: 'dual-andrasta-sustainment',
        routes: [
          'M 16 73 C 21 58 28 48 36 42 C 46 34 57 29 68 31 C 75 32 80 27 84 19',
          'M 36 42 C 45 51 52 63 59 71 C 49 78 39 81 29 79',
          'M 59 71 C 68 62 72 47 68 31'
        ],
        nodes: [
          {
            id: 'dual-andrasta-insert',
            label: 'Distributed insertion',
            kicker: 'Multiple routes',
            detail: 'Port, road, vessel and air-delivery concepts allow the mission package to be positioned around operational constraints.',
            x: 16,
            y: 73,
            icon: 'base'
          },
          {
            id: 'dual-andrasta-cohort',
            label: 'Vehicle cohort',
            kicker: 'Hybrid performance',
            detail: 'Hydrogen-electric endurance supports persistence while a managed battery buffer is reserved for peak propulsion, sensor and payload demand.',
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
            id: 'dual-andrasta-sustainment',
            label: 'Distributed sustainment',
            kicker: 'Mission extension',
            detail: 'Portable fuel and service nodes can be distributed across available routes and host platforms, reducing dependence on a single recovery point.',
            x: 59,
            y: 71,
            icon: 'charge'
          },
          {
            id: 'dual-andrasta-v2v',
            label: 'Vehicle-to-vehicle support',
            kicker: 'Cooperative sustainment',
            detail: 'Common service interfaces are intended to support vehicle-to-vehicle sustainment, cooperative recovery and re-tasking where the mission benefits.',
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
        label: 'Energy role',
        conventional: 'Battery sized for mission duration',
        andrasta: 'Hydrogen endurance + battery peaks'
      },
      {
        label: 'Sustainment',
        conventional: 'Central recovery point',
        andrasta: 'Distributed nodes + vehicle support'
      }
    ]
  }
};
