import type { IconName } from '@/components/common/Icon'

export interface NavItem {
  id: string
  label: string
  path: string
}

export interface FeatureItem {
  id: string
  title: string
  description: string
  icon?: IconName
  tag?: string
  screenshot?: string
  bullets?: string[]
}

export interface BenefitItem {
  id: string
  title: string
  description: string
  icon?: IconName
}

export interface AudienceItem {
  id: string
  label: string
  description?: string
  icon?: string
}

export interface ModuleItem {
  id: string
  label: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role?: string
  company?: string
}

export interface ROIInputs {
  employeeCount: number
  averageWage: number
  adminWage: number
  weeklyHoursPerEmployee: number
  weeklySchedulingAdminHours: number
  payrollCorrectionHours: number
  fleetAdminHours: number
  currentSoftwareSpend: number
  revenue: number
  adminTimeReductionRate: number
  minutesRecoveredPerDay: number
}

export interface ROIBreakdownItem {
  id: string
  label: string
  amount: number
}

export interface ROIResult {
  annualSavings: number
  monthlySavings: number
  hoursRecoveredPerWeek: number
  systemsReplacedEstimate: number
  roiPercent: number
  savingsAsPercentOfRevenue?: number
  breakdown: ROIBreakdownItem[]
}

export interface FeatureCategory {
  id: string
  title: string
  items: string[]
}
