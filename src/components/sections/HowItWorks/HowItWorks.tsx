import Heading from '@/components/common/Heading'
import Section from '@/components/common/Section'
import styles from './HowItWorks.module.css'

export interface HowItWorksStep {
  id: string
  title: string
  description: string
  chips?: string[]
}

interface HowItWorksProps {
  id?: string
  title: string
  subtitle?: string
  steps: HowItWorksStep[]
  background?: 'white' | 'muted'
}

function HowItWorks({ id, title, subtitle, steps, background = 'white' }: HowItWorksProps) {
  return (
    <Section id={id} background={background}>
      <div className={styles.header}>
        <Heading level={2} size="lg">
          {title}
        </Heading>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={step.id} className={styles.step}>
            <span className={styles.stepNumber} aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <p className={styles.title}>{step.title}</p>
              <p className={styles.description}>{step.description}</p>
              {step.chips && step.chips.length > 0 && (
                <div className={styles.chips}>
                  {step.chips.map((chip) => (
                    <span key={chip} className={styles.chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default HowItWorks
