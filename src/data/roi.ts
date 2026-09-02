import type { ROIInputs, ROIResult } from '@/types/common'

/**
 * Savings calculator engine — six buckets (scheduling/admin time, payroll &
 * timesheet corrections, fleet/vehicle admin, recovered productive time,
 * software consolidation), per the calculator spec. All figures are
 * illustrative estimates, never guaranteed results — surfaced as such on
 * the results screen.
 *
 * WORKDAYS_PER_YEAR annualizes the daily "minutes recovered" input; it's a
 * fixed assumption (not user-adjustable), unlike the two efficiency
 * assumptions the visitor can tune (adminTimeReductionRate,
 * minutesRecoveredPerDay).
 *
 * LANEOPS_MONTHLY_COST_PER_EMPLOYEE is an internal illustrative placeholder
 * used only to compute the software-savings and ROI% lines — we have no
 * real LaneOps pricing yet. It is never rendered on its own; only the
 * resulting savings/ROI figures are shown, so no implied price is ever
 * displayed to a visitor. Swap for a real per-seat rate once pricing is set.
 */
const WORKDAYS_PER_YEAR = 250
const WEEKS_PER_YEAR = 52
const LANEOPS_MONTHLY_COST_PER_EMPLOYEE = 35
const SYSTEMS_REPLACED_ESTIMATE = 6

export const DEFAULT_ADMIN_TIME_REDUCTION_RATE = 0.3
export const DEFAULT_MINUTES_RECOVERED_PER_DAY = 15

export const DEFAULT_ROI_INPUTS: ROIInputs = {
  employeeCount: 40,
  averageWage: 28,
  adminWage: 32,
  weeklyHoursPerEmployee: 40,
  weeklySchedulingAdminHours: 12,
  payrollCorrectionHours: 4,
  fleetAdminHours: 5,
  currentSoftwareSpend: 20000,
  revenue: 0,
  adminTimeReductionRate: DEFAULT_ADMIN_TIME_REDUCTION_RATE,
  minutesRecoveredPerDay: DEFAULT_MINUTES_RECOVERED_PER_DAY,
}

function nonNegative(value: number): number {
  return Number.isFinite(value) && value > 0 ? value : 0
}

export function calculateAnnualSavings(inputs: ROIInputs): ROIResult {
  const employeeCount = nonNegative(inputs.employeeCount)
  const averageWage = nonNegative(inputs.averageWage)
  const adminWage = nonNegative(inputs.adminWage)
  const weeklySchedulingAdminHours = nonNegative(inputs.weeklySchedulingAdminHours)
  const payrollCorrectionHours = nonNegative(inputs.payrollCorrectionHours)
  const fleetAdminHours = nonNegative(inputs.fleetAdminHours)
  const currentSoftwareSpend = nonNegative(inputs.currentSoftwareSpend)
  const revenue = nonNegative(inputs.revenue)
  const reductionRate = Math.min(1, Math.max(0, inputs.adminTimeReductionRate))
  const minutesRecoveredPerDay = Math.max(0, inputs.minutesRecoveredPerDay)

  const laneOpsAnnualCost = employeeCount * LANEOPS_MONTHLY_COST_PER_EMPLOYEE * 12

  const adminSavings = weeklySchedulingAdminHours * reductionRate * adminWage * WEEKS_PER_YEAR
  const payrollSavings = payrollCorrectionHours * reductionRate * adminWage * WEEKS_PER_YEAR
  const fleetSavings = fleetAdminHours * reductionRate * adminWage * WEEKS_PER_YEAR
  const timeLeakageSavings =
    employeeCount * (minutesRecoveredPerDay / 60) * averageWage * WORKDAYS_PER_YEAR
  const softwareSavings = Math.max(0, currentSoftwareSpend - laneOpsAnnualCost)

  const annualSavings =
    adminSavings + payrollSavings + fleetSavings + timeLeakageSavings + softwareSavings

  const hoursRecoveredPerWeek =
    (weeklySchedulingAdminHours + payrollCorrectionHours + fleetAdminHours) * reductionRate +
    employeeCount * (minutesRecoveredPerDay / 60) * 5

  const roiPercent =
    laneOpsAnnualCost > 0 ? ((annualSavings - laneOpsAnnualCost) / laneOpsAnnualCost) * 100 : 0

  return {
    annualSavings: Math.round(annualSavings),
    monthlySavings: Math.round(annualSavings / 12),
    hoursRecoveredPerWeek: Math.round(hoursRecoveredPerWeek),
    systemsReplacedEstimate: SYSTEMS_REPLACED_ESTIMATE,
    roiPercent: Math.round(roiPercent),
    savingsAsPercentOfRevenue:
      revenue > 0 ? Math.round((annualSavings / revenue) * 1000) / 10 : undefined,
    breakdown: [
      { id: 'admin', label: 'Scheduling & Admin Time', amount: Math.round(adminSavings) },
      {
        id: 'payroll',
        label: 'Payroll & Timesheet Corrections',
        amount: Math.round(payrollSavings),
      },
      { id: 'fleet', label: 'Fleet & Vehicle Administration', amount: Math.round(fleetSavings) },
      {
        id: 'time-leakage',
        label: 'Recovered Productive Time',
        amount: Math.round(timeLeakageSavings),
      },
      { id: 'software', label: 'Software Consolidation', amount: Math.round(softwareSavings) },
    ],
  }
}
