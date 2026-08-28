import Card from '@/components/common/Card'
import Heading from '@/components/common/Heading'
import Icon from '@/components/common/Icon'
import Image from '@/components/common/Image'
import Section from '@/components/common/Section'
import type { FeatureItem } from '@/types/common'
import styles from './FeatureGrid.module.css'

interface FeatureGridProps {
  id?: string
  eyebrow?: string
  title: string
  subtitle?: string
  features: FeatureItem[]
}

function FeatureGrid({ id, eyebrow, title, subtitle, features }: FeatureGridProps) {
  return (
    <Section id={id} background="white">
      <div className={styles.header}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <Heading level={2} size="lg">
          {title}
        </Heading>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      <div className={styles.grid}>
        {features.map((feature) => (
          <Card key={feature.id} className={styles.card}>
            <div className={styles.cardInner}>
              {feature.screenshot && (
                <div className={styles.imageWrap}>
                  <Image src={feature.screenshot} alt="" className={styles.image} />
                </div>
              )}
              <div className={styles.content}>
                <div className={styles.titleRow}>
                  {feature.icon && (
                    <span className={styles.icon}>
                      <Icon name={feature.icon} size={18} />
                    </span>
                  )}
                  <p className={styles.title}>{feature.title}</p>
                </div>
                <p className={styles.description}>{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default FeatureGrid
