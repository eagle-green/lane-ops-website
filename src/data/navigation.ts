import type { NavItem } from '@/types/common'

/**
 * Main nav — repositioned per the traffic-control feedback brief. "Platform"
 * opens a dropdown (see platformDropdownItems); its own path is the Platform
 * page itself, used as the link target on mobile/no-JS and as the anchor
 * base for the dropdown's in-page links.
 */
export const navItems: NavItem[] = [
  { id: 'platform', label: 'Platform', path: '/features' },
  { id: 'solutions', label: 'Solutions', path: '/solutions' },
  { id: 'how-it-works', label: 'How It Works', path: '/how-it-works' },
  { id: 'why-laneops', label: 'Why LaneOps', path: '/why-laneops' },
  { id: 'savings-calculator', label: 'Savings Calculator', path: '/savings-calculator' },
]

/**
 * "Platform" dropdown — one dedicated page per category (src/pages/
 * PlatformCategory, driven by src/data/platformCategories.ts) plus the
 * standalone All Features page. Ids must match platformCategories entries.
 */
export const platformDropdownItems: NavItem[] = [
  {
    id: 'dispatch-scheduling',
    label: 'Dispatch & Scheduling',
    path: '/features/dispatch-scheduling',
  },
  {
    id: 'workforce-management',
    label: 'Workforce Management',
    path: '/features/workforce-management',
  },
  { id: 'fleet-management', label: 'Fleet Management', path: '/features/fleet-management' },
  {
    id: 'inventory-equipment',
    label: 'Inventory & Equipment',
    path: '/features/inventory-equipment',
  },
  { id: 'safety-compliance', label: 'Safety & Compliance', path: '/features/safety-compliance' },
  { id: 'timecards', label: 'Timecards', path: '/features/timecards' },
  { id: 'payroll-billing', label: 'Payroll & Billing', path: '/features/payroll-billing' },
  { id: 'all-features', label: 'All Features', path: '/features/all' },
]

export const bookDemoPath = '/contact'
