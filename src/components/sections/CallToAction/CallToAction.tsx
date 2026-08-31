import Button from '@/components/common/Button'
import Container from '@/components/common/Container'
import Heading from '@/components/common/Heading'
import styles from './CallToAction.module.css'

interface CallToActionProps {
  eyebrow?: string
  title: string
  body?: string
  primaryLabel: string
  primaryTo: string
  secondaryLabel?: string
  secondaryTo?: string
  footnote?: string
  variant?: 'gradient' | 'dark'
}

function CallToAction({
  eyebrow,
  title,
  body,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  footnote,
  variant = 'gradient',
}: CallToActionProps) {
  const isDark = variant === 'dark'

  return (
    <section className={isDark ? styles.bandDark : styles.band}>
      <Container>
        <div className={styles.wrapper}>
          {eyebrow && <p className={isDark ? styles.eyebrowDark : styles.eyebrow}>{eyebrow}</p>}
          <Heading level={2} align="center" className={styles.title}>
            {title}
          </Heading>
          {body && <p className={isDark ? styles.bodyDark : styles.body}>{body}</p>}

          <div className={styles.actions}>
            <Button
              to={primaryTo}
              variant="primary"
              className={isDark ? undefined : styles.primaryBtn}
            >
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryTo && (
              <Button to={secondaryTo} variant="outline" className={styles.secondaryBtn}>
                {secondaryLabel}
              </Button>
            )}
          </div>

          {footnote && <p className={isDark ? styles.footnoteDark : styles.footnote}>{footnote}</p>}
        </div>
      </Container>
    </section>
  )
}

export default CallToAction
