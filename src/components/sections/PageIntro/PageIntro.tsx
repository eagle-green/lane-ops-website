import type { ReactNode } from 'react'
import Button from '@/components/common/Button'
import Heading from '@/components/common/Heading'
import Section from '@/components/common/Section'
import styles from './PageIntro.module.css'

interface PageIntroAction {
  label: string
  to: string
  variant?: 'primary' | 'outline'
}

interface PageIntroProps {
  eyebrow?: string
  title: string
  subheadline?: string
  actions?: PageIntroAction[]
  children?: ReactNode
}

/**
 * Shared dark banner treatment for standalone-page intros (How It Works,
 * Who It's For, Contact, Pricing) — matches the Home/Features hero theme
 * (dark background with ambient blobs, badge eyebrow, action buttons) so the
 * site reads as one consistent design instead of a light intro on some pages
 * and a dark one on others.
 */
function PageIntro({ eyebrow, title, subheadline, actions, children }: PageIntroProps) {
  return (
    <Section background="dark" className={styles.section}>
      <div className={styles.content}>
        {eyebrow && (
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <Heading level={1} align="center">
          {title}
        </Heading>
        {subheadline && <p className={styles.subheadline}>{subheadline}</p>}

        {actions && actions.length > 0 && (
          <div className={styles.actions}>
            {actions.map((action) => (
              <Button
                key={action.label}
                to={action.to}
                variant={action.variant === 'outline' ? 'outline' : 'primary'}
                className={action.variant === 'outline' ? styles.outlineBtn : undefined}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}

        {children && <div className={styles.extra}>{children}</div>}
      </div>
    </Section>
  )
}

export default PageIntro
