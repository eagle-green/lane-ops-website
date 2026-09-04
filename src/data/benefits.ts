import type { BenefitItem } from '@/types/common'

/** Home — "Where Other Systems Stop" differentiator band, full 8-item icon grid. */
export const differentiatorItems: BenefitItem[] = [
  {
    id: 'increase-revenue',
    title: 'Increase Revenue',
    description: 'Capture every billable hour, lane closure, and equipment rental, automatically.',
    icon: 'trending-up',
  },
  {
    id: 'reduce-admin-time',
    title: 'Reduce Admin Time',
    description: 'Cut the manual data entry between the field crew and the dispatch office.',
    icon: 'zap',
  },
  {
    id: 'improve-visibility',
    title: 'Improve Job Site Visibility',
    description: 'See every job, TCP, crew, and asset status across every site in one place.',
    icon: 'eye',
  },
  {
    id: 'strengthen-accountability',
    title: 'Strengthen Accountability',
    description: 'Every FLRA, timecard, and job action tied to a person and a timestamp.',
    icon: 'shield',
  },
  {
    id: 'fuel-tracking',
    title: 'Fuel & Vehicle Tracking',
    description: 'Track fuel use and cost per truck and traffic control trailer, no spreadsheets.',
    icon: 'fuel',
  },
  {
    id: 'driver-management',
    title: 'TCP & Driver Management',
    description: 'Keep TCP certifications, driver records, and assignments organized and current.',
    icon: 'user',
  },
  {
    id: 'maintenance-scheduling',
    title: 'Equipment Maintenance',
    description: 'Stay ahead of service dates for trucks, signs, and traffic control devices.',
    icon: 'wrench',
  },
  {
    id: 'customer-management',
    title: 'Client & Site Management',
    description: 'Keep municipal, utility, and contractor client details tied to every job site.',
    icon: 'users',
  },
]

/** Home — 4-card benefits summary (same content as the first 4 differentiator items). */
export const homeBenefits: BenefitItem[] = differentiatorItems.slice(0, 4)

/** Home — ROI/business-value band, 4 cards. */
export const roiValueCards: BenefitItem[] = [
  {
    id: 'reduce-missed-billing',
    title: 'Reduce Missed Billing',
    description: 'Capture labour, equipment and rentals.',
    icon: 'receipt',
  },
  {
    id: 'reduce-administration',
    title: 'Reduce Administration',
    description: 'Enter operational information once instead of repeatedly.',
    icon: 'zap',
  },
  {
    id: 'control-equipment',
    title: 'Control Equipment',
    description: 'Know where company inventory is located.',
    icon: 'truck',
  },
  {
    id: 'reduce-paper',
    title: 'Reduce Paper',
    description: 'Digitize timecards, inspections, safety forms and employee records.',
    icon: 'shield',
  },
]

/** Features page — "Results" section, 4 cards. */
export const featuresResults: BenefitItem[] = [
  {
    id: 'reduce-admin-work',
    title: 'Reduce Admin Work',
    description: 'Less manual data entry between the field and the back office.',
    icon: 'zap',
  },
  {
    id: 'improve-crew-accountability',
    title: 'Improve Crew Accountability',
    description: 'Every job, hour, and task tracked back to the person who did it.',
    icon: 'shield',
  },
  {
    id: 'eliminate-missed-billing',
    title: 'Eliminate Missed Billing',
    description: 'Completed jobs turn into invoices automatically, nothing slips through.',
    icon: 'receipt',
  },
  {
    id: 'increase-operational-visibility',
    title: 'Increase Operational Visibility',
    description: 'One system shows the real-time status of every job and asset.',
    icon: 'eye',
  },
]
