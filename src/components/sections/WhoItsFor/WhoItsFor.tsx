import Card from '@/components/common/Card'
import Heading from '@/components/common/Heading'
import Section from '@/components/common/Section'
import type { AudienceItem } from '@/types/common'
import styles from './WhoItsFor.module.css'

interface WhoItsForProps {
  id?: string
  title: string
  subtitle?: string
  items: AudienceItem[]
  background?: 'white' | 'muted'
}

function WhoItsFor({ id, title, subtitle, items, background = 'muted' }: WhoItsForProps) {
  return (
    <Section id={id} background={background}>
      <div className={styles.header}>
        <Heading level={2} align="center">
          {title}
        </Heading>
        {subtitle && <p>{subtitle}</p>}
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <Card key={item.id}>
            <p className={styles.label}>{item.label}</p>
            {item.description && <p className={styles.description}>{item.description}</p>}
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default WhoItsFor
