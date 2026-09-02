import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import Heading from '@/components/common/Heading'
import Section from '@/components/common/Section'
import { solutionTiers } from '@/data/tiers'
import styles from './SolutionTiers.module.css'

function SolutionTiers() {
  return (
    <Section background="muted">
      <div className={styles.header}>
        <Heading level={2} align="center">
          A LaneOps Solution Built Around Your Operation
        </Heading>
      </div>

      <div className={styles.grid}>
        {solutionTiers.map((tier) => (
          <Card
            key={tier.id}
            hoverLift={false}
            className={tier.featured ? `${styles.card} ${styles.cardFeatured}` : styles.card}
          >
            {tier.featured && <p className={styles.badge}>Most Popular</p>}
            <Heading level={3} size="md">
              {tier.name}
            </Heading>
            <p className={styles.tagline}>{tier.tagline}</p>

            {tier.includesFrom && <p className={styles.includesFrom}>{tier.includesFrom}</p>}

            <ul className={styles.featureList}>
              {tier.features.map((feature) => (
                <li key={feature} className={styles.featureItem}>
                  <svg
                    className={styles.featureIcon}
                    width="16"
                    height="16"
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
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              to={tier.ctaTo}
              variant={tier.featured ? 'primary' : 'outline'}
              fullWidth
              className={styles.cta}
            >
              {tier.ctaLabel}
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default SolutionTiers
