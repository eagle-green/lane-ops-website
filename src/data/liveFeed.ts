export interface FeedEvent {
  text: string
  dot: string
}

/** Illustrative "live activity" ticker items — used by HomeHero and DispatchPreview. */
export const FEED: FeedEvent[] = [
  { text: 'Crew B clocked in — Hwy 7', dot: '#35c25a' },
  { text: 'Invoice #4192 generated', dot: '#ff8a3d' },
  { text: 'Truck 14 flagged for repair', dot: '#ff5a3d' },
  { text: 'FLRA submitted — Etobicoke', dot: '#35c25a' },
  { text: 'Timesheet approved — Doyle', dot: '#35c25a' },
  { text: 'Cones restocked, Yard 2', dot: '#8b96a7' },
]
