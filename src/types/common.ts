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
  fleetSize: number
  monthlyPayroll: number
  monthlyJobs: number
}

export interface ROIResult {
  annualSavings: number
}

export interface FeatureCategory {
  id: string
  title: string
  items: string[]
}
