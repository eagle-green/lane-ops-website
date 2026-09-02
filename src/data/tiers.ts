import { bookDemoPath } from '@/data/navigation'

export interface SolutionTier {
  id: string
  name: string
  tagline: string
  featured?: boolean
  includesFrom?: string
  features: string[]
  ctaLabel: string
  ctaTo: string
}

/** Solution packages — feature tiers only, no dollar pricing (per the brief). */
export const solutionTiers: SolutionTier[] = [
  {
    id: 'core',
    name: 'Core',
    tagline: 'Essential Workforce Operations',
    features: [
      'Scheduling & Dispatch',
      'Digital Timecards',
      'Employee Profiles',
      'Announcements',
      'Time-Off Management',
    ],
    ctaLabel: 'Book a Demo',
    ctaTo: bookDemoPath,
  },
  {
    id: 'operations',
    name: 'Operations',
    tagline: 'Connected Operations & Automation',
    featured: true,
    includesFrom: 'Everything in Core, plus:',
    features: [
      'Automated Billing',
      'Vehicle Inventory',
      'Inventory Management',
      'Invoicing',
      'Job History',
      'Site Audits',
      'Vehicle Audits',
      'Attendance & Conduct',
      'Operational Reporting',
    ],
    ctaLabel: 'Book a Demo',
    ctaTo: bookDemoPath,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Complete Operational Control',
    includesFrom: 'Everything in Operations, plus:',
    features: [
      'Incident Reporting',
      'Safety & Compliance',
      'Advanced Reporting',
      'Audit History',
      'Advanced Administration',
      'Priority Support',
    ],
    ctaLabel: 'Talk to Sales',
    ctaTo: '/contact',
  },
]
