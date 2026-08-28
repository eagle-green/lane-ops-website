import Card from '@/components/common/Card'
import Heading from '@/components/common/Heading'
import Icon from '@/components/common/Icon'
import Section from '@/components/common/Section'
import type { BenefitItem } from '@/types/common'
import styles from './Benefits.module.css'

interface BenefitsProps {
  title: string
  items: BenefitItem[]
  background?: 'white' | 'muted'
}

function Benefits({ title, items, background = 'white' }: BenefitsProps) {
  return (
    <Section background={background}>
      <div className={styles.header}>
        <Heading level={2} align="center">
          {title}
        </Heading>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <Card key={item.id}>
            {item.icon && (
              <span className={styles.icon}>
                <Icon name={item.icon} />
              </span>
            )}
            <p className={styles.title}>{item.title}</p>
            <p className={styles.description}>{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default Benefits
