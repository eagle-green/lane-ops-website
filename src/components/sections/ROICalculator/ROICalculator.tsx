import { useId, useState } from 'react'
import Button from '@/components/common/Button'
import Heading from '@/components/common/Heading'
import Section from '@/components/common/Section'
import { bookDemoPath } from '@/data/navigation'
import { calculateAnnualSavings } from '@/data/roi'
import type { ROIInputs } from '@/types/common'
import styles from './ROICalculator.module.css'

const DEFAULT_INPUTS: ROIInputs = {
  fleetSize: 15,
  monthlyPayroll: 12000,
  monthlyJobs: 300,
}

function ROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>(DEFAULT_INPUTS)
  const { annualSavings } = calculateAnnualSavings(inputs)
  const formattedSavings = annualSavings.toLocaleString('en-US')

  const fleetSizeId = useId()
  const monthlyPayrollId = useId()
  const monthlyJobsId = useId()

  function handleChange(field: keyof ROIInputs, value: string) {
    const parsed = value === '' ? 0 : Number(value)
    setInputs((prev) => ({ ...prev, [field]: Number.isNaN(parsed) ? prev[field] : parsed }))
  }

  return (
    <Section background="white">
      <div className={styles.header}>
        <Heading level={2} align="center">
          See What LaneOps Can Save You
        </Heading>
      </div>

      <div className={styles.layout}>
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor={fleetSizeId}>
              Fleet Size
            </label>
            <input
              id={fleetSizeId}
              className={styles.input}
              type="number"
              inputMode="numeric"
              min={0}
              value={inputs.fleetSize}
              onChange={(event) => handleChange('fleetSize', event.target.value)}
            />
            <span className={styles.hint}>Number of vehicles, e.g. 15 vehicles</span>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor={monthlyPayrollId}>
              Monthly Payroll
            </label>
            <input
              id={monthlyPayrollId}
              className={styles.input}
              type="number"
              inputMode="decimal"
              min={0}
              value={inputs.monthlyPayroll}
              onChange={(event) => handleChange('monthlyPayroll', event.target.value)}
            />
            <span className={styles.hint}>Total monthly payroll, e.g. $12,000</span>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor={monthlyJobsId}>
              Monthly Jobs
            </label>
            <input
              id={monthlyJobsId}
              className={styles.input}
              type="number"
              inputMode="numeric"
              min={0}
              value={inputs.monthlyJobs}
              onChange={(event) => handleChange('monthlyJobs', event.target.value)}
            />
            <span className={styles.hint}>Jobs completed per month, e.g. 300 jobs</span>
          </div>
        </form>

        <div className={styles.resultCard} aria-live="polite">
          <p className={styles.resultLabel}>Estimated Annual Savings</p>
          <p className={styles.resultValue}>${formattedSavings}</p>
          <p className={styles.resultExplainer}>
            Based on reduced admin time, better fleet utilization, and fewer missed billings.
          </p>

          <div className={styles.resultActions}>
            <Button to={bookDemoPath} variant="primary" fullWidth>
              Book a Demo
            </Button>
            <p className={styles.microcopy}>
              No commitment. See exactly how this applies to your business.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default ROICalculator
