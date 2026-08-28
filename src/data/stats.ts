import type { Stat } from '@/components/sections/StatsCounter'

/**
 * Home page — dark stats band. Example figures, not business-validated
 * (same caveat as the ROI calculator's placeholder constants in roi.ts) —
 * disclosed to visitors via the section footnote in Home.tsx.
 */
export const homeStats: Stat[] = [
  {
    id: 'admin-hours',
    target: 12,
    suffix: 'h',
    label: 'Admin hours back per week',
    note: 'per dispatcher, typical mid-size fleet',
    color: 'var(--color-secondary-on-dark)',
  },
  {
    id: 'billable-hours',
    target: 98,
    suffix: '%',
    label: 'Billable hours captured',
    note: 'hours reaching an invoice',
    color: 'var(--color-primary-bright)',
  },
  {
    id: 'tools-consolidated',
    target: 6,
    suffix: '→1',
    label: 'Tools consolidated',
    note: 'spreadsheets, paper, point apps',
    color: 'var(--color-white)',
  },
  {
    id: 'payback',
    target: 45,
    suffix: ' days',
    label: 'To payback',
    note: 'based on admin time and billing recovery',
    color: 'var(--color-secondary-on-dark)',
  },
]
