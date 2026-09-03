import type { ReactNode } from 'react'
import Button from '@/components/common/Button'
import Heading from '@/components/common/Heading'
import ProductScreenshot from '@/components/common/ProductScreenshot'
import Section from '@/components/common/Section'
import styles from './Hero.module.css'

interface HeroAction {
  label: string
  to: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
}

interface HeroProps {
  eyebrow?: string
  headline: ReactNode
  subheadline?: string
  supportLine?: string
  bullets?: string[]
  actions: HeroAction[]
  screenshotSrc: string
  screenshotAlt: string
  screenshotChrome?: boolean
  reverse?: boolean
}

function Hero({
  eyebrow,
  headline,
  subheadline,
  supportLine,
  bullets,
  actions,
  screenshotSrc,
  screenshotAlt,
  screenshotChrome = true,
  reverse = false,
}: HeroProps) {
  return (
    <Section background="dark" className={styles.section}>
      <div className={`${styles.hero} ${reverse ? styles.reverse : ''}`}>
        <div className={styles.content}>
          {eyebrow && (
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <Heading level={1}>{headline}</Heading>
          {subheadline && <p className={styles.subheadline}>{subheadline}</p>}
          {supportLine && <p className={styles.supportLine}>{supportLine}</p>}

          {bullets && bullets.length > 0 && (
            <ul className={styles.bullets}>
              {bullets.map((bullet) => (
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

          <div className={styles.actions}>
            {actions.map((action) => (
              <Button key={action.label} to={action.to} variant={action.variant ?? 'primary'}>
                {action.label}
              </Button>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <ProductScreenshot
            src={screenshotSrc}
            alt={screenshotAlt}
            priority
            chrome={screenshotChrome}
          />
        </div>
      </div>
    </Section>
  )
}

export default Hero
