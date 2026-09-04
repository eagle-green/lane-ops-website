import type { AudienceItem } from '@/types/common'

/**
 * Home's scrolling marquee. LaneOps positions as traffic-control-only, so
 * every entry names a traffic-control segment specifically rather than a
 * generic field-service/operations category (see marketing review).
 */
export const audiences: AudienceItem[] = [
  { id: 'traffic-control', label: 'Traffic Control Companies' },
  { id: 'lane-closure', label: 'Lane Closure & Traffic Management Providers' },
  { id: 'tcp-staffing', label: 'TCP Staffing Companies' },
  { id: 'municipal-utility', label: 'Municipal & Utility Traffic Control Contractors' },
  { id: 'road-construction', label: 'Road Construction Traffic Control' },
  { id: 'event-traffic-control', label: 'Event Traffic Control Companies' },
]
