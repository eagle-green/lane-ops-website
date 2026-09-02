import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import Button from '@/components/common/Button'
import Heading from '@/components/common/Heading'
import Section from '@/components/common/Section'
import { bookDemoPath } from '@/data/navigation'
import { DEFAULT_ROI_INPUTS, calculateAnnualSavings } from '@/data/roi'
import type { ROIInputs, ROIResult } from '@/types/common'
import styles from './SavingsCalculator.module.css'

function currency(value: number) {
  return `$${Math.round(value).toLocaleString('en-US')}`
}

function downloadSavingsReport(inputs: ROIInputs, result: ROIResult) {
  const lines = [
    'LaneOps Savings Estimate',
    '(Illustrative estimate — not a guaranteed result)',
    '',
    `Estimated annual savings: ${currency(result.annualSavings)}`,
    `Estimated monthly savings: ${currency(result.monthlySavings)}`,
    `Hours recovered per week: ${result.hoursRecoveredPerWeek}`,
    `Systems potentially replaced: ${result.systemsReplacedEstimate}`,
    `Estimated ROI: ${result.roiPercent}%`,
    '',
    'Savings breakdown:',
    ...result.breakdown.map((item) => `  ${item.label}: ${currency(item.amount)}`),
    '',
    'Figures based on:',
    `  Employees: ${inputs.employeeCount}`,
    `  Average wage: $${inputs.averageWage}/hr`,
    `  Manager/admin wage: $${inputs.adminWage}/hr`,
    `  Weekly scheduling & admin hours: ${inputs.weeklySchedulingAdminHours}`,
    `  Weekly payroll correction hours: ${inputs.payrollCorrectionHours}`,
    `  Weekly fleet admin hours: ${inputs.fleetAdminHours}`,
    `  Current annual software spend: ${currency(inputs.currentSoftwareSpend)}`,
    `  Assumed admin time reduction: ${Math.round(inputs.adminTimeReductionRate * 100)}%`,
    `  Assumed minutes recovered per employee per day: ${inputs.minutesRecoveredPerDay}`,
  ]

  const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'laneops-savings-estimate.txt'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

function SavingsCalculator() {
  const [inputs, setInputs] = useState<ROIInputs>(DEFAULT_ROI_INPUTS)
  const [result, setResult] = useState<ROIResult | null>(null)

  const employeeCountId = useId()
  const averageWageId = useId()
  const adminWageId = useId()
  const weeklyHoursId = useId()
  const schedulingHoursId = useId()
  const payrollHoursId = useId()
  const fleetHoursId = useId()
  const softwareSpendId = useId()
  const revenueId = useId()
  const reductionRateId = useId()
  const minutesRecoveredId = useId()

  function handleChange(field: keyof ROIInputs, value: string) {
    const parsed = value === '' ? 0 : Number(value)
    setInputs((prev) => ({ ...prev, [field]: Number.isNaN(parsed) ? prev[field] : parsed }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setResult(calculateAnnualSavings(inputs))
  }

  if (result) {
    return (
      <Section background="white">
        <div className={styles.resultsWrapper}>
          <p className={styles.resultsEyebrow}>Your Estimated Savings</p>
          <p className={styles.headlineValue}>{currency(result.annualSavings)}</p>
          <p className={styles.headlineLabel}>Estimated Annual Savings</p>

          <div className={styles.statGrid}>
            <div className={styles.stat}>
              <p className={styles.statValue}>{currency(result.monthlySavings)}</p>
              <p className={styles.statLabel}>Per Month</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>{result.hoursRecoveredPerWeek}</p>
              <p className={styles.statLabel}>Hours Recovered / Week</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>{result.systemsReplacedEstimate}</p>
              <p className={styles.statLabel}>Systems Potentially Replaced</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>{result.roiPercent}%</p>
              <p className={styles.statLabel}>Estimated ROI</p>
            </div>
          </div>

          <div className={styles.breakdown}>
            <p className={styles.breakdownTitle}>Where the savings come from</p>
            <ul className={styles.breakdownList}>
              {result.breakdown.map((item) => (
                <li key={item.id} className={styles.breakdownItem}>
                  <span>{item.label}</span>
                  <span className={styles.breakdownAmount}>{currency(item.amount)}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className={styles.disclaimer}>
            These are estimated potential savings based on the figures you entered and adjustable
            efficiency assumptions — not a guaranteed result for your business.
          </p>

          <div className={styles.resultActions}>
            <Button
              type="button"
              variant="outline"
              onClick={() => downloadSavingsReport(inputs, result)}
            >
              Download Savings Report
            </Button>
            <Button to={bookDemoPath} variant="primary">
              Book a Demo
            </Button>
          </div>

          <button type="button" className={styles.adjustLink} onClick={() => setResult(null)}>
            ← Adjust your numbers
          </button>
        </div>
      </Section>
    )
  }

  return (
    <Section background="white">
      <div className={styles.header}>
        <Heading level={2} align="center">
          See What LaneOps Can Save You
        </Heading>
        <p className={styles.headerBody}>
          Tell us about your operation and we&apos;ll estimate your potential annual savings.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fieldGrid}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor={employeeCountId}>
              Number of Employees
            </label>
            <input
              id={employeeCountId}
              className={styles.input}
              type="number"
              inputMode="numeric"
              min={0}
              value={inputs.employeeCount}
              onChange={(event) => handleChange('employeeCount', event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor={averageWageId}>
              Average Employee Wage ($/hr)
            </label>
            <input
              id={averageWageId}
              className={styles.input}
              type="number"
              inputMode="decimal"
              min={0}
              value={inputs.averageWage}
              onChange={(event) => handleChange('averageWage', event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor={adminWageId}>
              Manager / Admin Wage ($/hr)
            </label>
            <input
              id={adminWageId}
              className={styles.input}
              type="number"
              inputMode="decimal"
              min={0}
              value={inputs.adminWage}
              onChange={(event) => handleChange('adminWage', event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor={weeklyHoursId}>
              Weekly Hours per Employee
            </label>
            <input
              id={weeklyHoursId}
              className={styles.input}
              type="number"
              inputMode="numeric"
              min={0}
              value={inputs.weeklyHoursPerEmployee}
              onChange={(event) => handleChange('weeklyHoursPerEmployee', event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor={schedulingHoursId}>
              Weekly Scheduling & Admin Hours
            </label>
            <input
              id={schedulingHoursId}
              className={styles.input}
              type="number"
              inputMode="numeric"
              min={0}
              value={inputs.weeklySchedulingAdminHours}
              onChange={(event) => handleChange('weeklySchedulingAdminHours', event.target.value)}
            />
            <span className={styles.hint}>Time spent scheduling crews and jobs each week</span>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor={payrollHoursId}>
              Weekly Payroll Correction Hours
            </label>
            <input
              id={payrollHoursId}
              className={styles.input}
              type="number"
              inputMode="numeric"
              min={0}
              value={inputs.payrollCorrectionHours}
              onChange={(event) => handleChange('payrollCorrectionHours', event.target.value)}
            />
            <span className={styles.hint}>Time spent fixing timesheet and payroll errors</span>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor={fleetHoursId}>
              Weekly Fleet Admin Hours
            </label>
            <input
              id={fleetHoursId}
              className={styles.input}
              type="number"
              inputMode="numeric"
              min={0}
              value={inputs.fleetAdminHours}
              onChange={(event) => handleChange('fleetAdminHours', event.target.value)}
            />
            <span className={styles.hint}>Time spent tracking vehicles and equipment</span>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor={softwareSpendId}>
              Current Annual Software Spend ($)
            </label>
            <input
              id={softwareSpendId}
              className={styles.input}
              type="number"
              inputMode="decimal"
              min={0}
              value={inputs.currentSoftwareSpend}
              onChange={(event) => handleChange('currentSoftwareSpend', event.target.value)}
            />
            <span className={styles.hint}>Across the tools LaneOps could replace</span>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor={revenueId}>
              Annual Revenue ($) — optional
            </label>
            <input
              id={revenueId}
              className={styles.input}
              type="number"
              inputMode="decimal"
              min={0}
              value={inputs.revenue || ''}
              onChange={(event) => handleChange('revenue', event.target.value)}
            />
          </div>
        </div>

        <div className={styles.assumptions}>
          <p className={styles.assumptionsTitle}>Adjustable Assumptions</p>
          <p className={styles.assumptionsHint}>
            These drive the estimate — adjust them to match your operation.
          </p>

          <div className={styles.sliderField}>
            <label className={styles.label} htmlFor={reductionRateId}>
              Admin Time Reduction: {Math.round(inputs.adminTimeReductionRate * 100)}%
            </label>
            <input
              id={reductionRateId}
              type="range"
              min={0}
              max={80}
              step={5}
              value={Math.round(inputs.adminTimeReductionRate * 100)}
              onChange={(event) =>
                setInputs((prev) => ({
                  ...prev,
                  adminTimeReductionRate: Number(event.target.value) / 100,
                }))
              }
            />
          </div>

          <div className={styles.sliderField}>
            <label className={styles.label} htmlFor={minutesRecoveredId}>
              Minutes Recovered per Employee per Day: {inputs.minutesRecoveredPerDay}
            </label>
            <input
              id={minutesRecoveredId}
              type="range"
              min={0}
              max={60}
              step={5}
              value={inputs.minutesRecoveredPerDay}
              onChange={(event) =>
                setInputs((prev) => ({
                  ...prev,
                  minutesRecoveredPerDay: Number(event.target.value),
                }))
              }
            />
          </div>
        </div>

        <Button type="submit" variant="primary" fullWidth>
          Calculate My Savings
        </Button>
      </form>
    </Section>
  )
}

export default SavingsCalculator
