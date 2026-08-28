import type { ROIInputs, ROIResult } from '@/types/common'

/**
 * Placeholder ROI constants (illustrative only, not business-validated).
 * The Pricing/Demo spec explicitly says "simple formula OK for now" — no
 * real figures were supplied. Flagged for business sign-off before launch
 * (see docs/IMPLEMENTATION_PLAN.md §2a.6). Kept isolated here so swapping
 * in real figures never touches the ROICalculator component.
 */
export const ADMIN_TIME_REDUCTION_RATE = 0.08 // 8% of monthly payroll admin overhead recovered
export const PER_VEHICLE_ANNUAL_SAVINGS = 400 // $ per vehicle/year from better inventory control
export const PER_JOB_BILLING_RECOVERY = 6 // $ recovered per job/month from reduced missed billing

export function calculateAnnualSavings(inputs: ROIInputs): ROIResult {
  const fleetSize = Math.max(0, inputs.fleetSize)
  const monthlyPayroll = Math.max(0, inputs.monthlyPayroll)
  const monthlyJobs = Math.max(0, inputs.monthlyJobs)

  const annualSavings =
    monthlyPayroll * ADMIN_TIME_REDUCTION_RATE * 12 +
    fleetSize * PER_VEHICLE_ANNUAL_SAVINGS +
    monthlyJobs * PER_JOB_BILLING_RECOVERY * 12

  return { annualSavings: Math.round(annualSavings) }
}
