import Heading from '@/components/common/Heading'
import ProductScreenshot from '@/components/common/ProductScreenshot'
import Section from '@/components/common/Section'
import styles from './VehicleInventorySpotlight.module.css'

interface VehicleInventorySpotlightProps {
  eyebrow?: string
  headline: string
  description: string
  bullets: string[]
  screenshotSrc: string
  screenshotAlt: string
}

const STATUS_TAGS = [
  { id: 'adequate', label: 'Adequate', className: styles.statusAdequate },
  { id: 'repair', label: 'Repair', className: styles.statusRepair },
  { id: 'inactive', label: 'Inactive', className: styles.statusInactive },
]

function VehicleInventorySpotlight({
  eyebrow,
  headline,
  description,
  bullets,
  screenshotSrc,
  screenshotAlt,
}: VehicleInventorySpotlightProps) {
  return (
    <Section background="white">
      <div className={styles.wrapper}>
        <div className={styles.text}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <Heading level={2} size="lg">
            {headline}
          </Heading>
          <p className={styles.description}>{description}</p>
          <ul className={styles.bullets}>
            {bullets.map((bullet) => (
              <li key={bullet} className={styles.bulletItem}>
                <span className={styles.bulletBadge} aria-hidden="true">
                  ✓
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className={styles.statusTags}>
            {STATUS_TAGS.map((tag) => (
              <span key={tag.id} className={`${styles.statusTag} ${tag.className}`}>
                {tag.label.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        <ProductScreenshot src={screenshotSrc} alt={screenshotAlt} />
      </div>
    </Section>
  )
}

export default VehicleInventorySpotlight
