import Heading from '@/components/common/Heading'
import ProductScreenshot from '@/components/common/ProductScreenshot'
import Section from '@/components/common/Section'
import type { FeatureItem } from '@/types/common'
import styles from './FeatureDetail.module.css'

const STATUS_TAGS = [
  { id: 'adequate', label: 'Adequate', className: styles.statusAdequate },
  { id: 'repair', label: 'Repair', className: styles.statusRepair },
  { id: 'inactive', label: 'Inactive', className: styles.statusInactive },
] as const

interface FeatureDetailProps {
  feature: FeatureItem
  screenshotSrc: string
  screenshotAlt: string
  reverse?: boolean
  showStatusTags?: boolean
  background?: 'white' | 'muted'
}

function FeatureDetail({
  feature,
  screenshotSrc,
  screenshotAlt,
  reverse = false,
  showStatusTags = false,
  background = 'white',
}: FeatureDetailProps) {
  return (
    <Section id={feature.id} background={background} aria-labelledby={`${feature.id}-heading`}>
      <div className={`${styles.wrapper} ${reverse ? styles.reverse : ''}`}>
        <div className={styles.text}>
          <Heading level={2} size="lg" id={`${feature.id}-heading`}>
            {feature.title}
          </Heading>
          <p className={styles.description}>{feature.description}</p>

          {feature.bullets && feature.bullets.length > 0 && (
            <ul className={styles.bullets}>
              {feature.bullets.map((bullet) => (
                <li key={bullet} className={styles.bulletItem}>
                  <svg
                    className={styles.bulletIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {showStatusTags && (
            <div className={styles.statusTags}>
              {STATUS_TAGS.map((tag) => (
                <span key={tag.id} className={`${styles.statusTag} ${tag.className}`}>
                  <span className={styles.statusDot} aria-hidden="true" />
                  {tag.label}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className={styles.visual}>
          <ProductScreenshot src={screenshotSrc} alt={screenshotAlt} />
        </div>
      </div>
    </Section>
  )
}

export default FeatureDetail
