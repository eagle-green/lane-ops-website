import Card from '@/components/common/Card'
import Heading from '@/components/common/Heading'
import Icon from '@/components/common/Icon'
import Section from '@/components/common/Section'
import type { BenefitItem } from '@/types/common'
import styles from './Differentiator.module.css'

interface DifferentiatorProps {
  title: string
  subtitle?: string
  items: BenefitItem[]
}

function Differentiator({ title, subtitle, items }: DifferentiatorProps) {
  return (
    <Section background="muted">
      <div className={styles.header}>
        <Heading level={2} align="center">
          {title}
        </Heading>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      <div className={styles.grid}>
        {items.map((item, index) => (
          <Card key={item.id} hoverLift>
            <span
              className={`${styles.icon} ${index % 2 === 0 ? styles.iconPrimary : styles.iconSecondary}`}
            >
              {item.icon && <Icon name={item.icon} />}
            </span>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.description}>{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Differentiator
