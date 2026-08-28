import Button from '@/components/common/Button'
import Container from '@/components/common/Container'
import Heading from '@/components/common/Heading'
import styles from './CallToAction.module.css'

interface CallToActionProps {
  title: string
  body?: string
  primaryLabel: string
  primaryTo: string
  secondaryLabel?: string
  secondaryTo?: string
  variant?: 'gradient' | 'dark'
}

function CallToAction({
  title,
  body,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  variant = 'gradient',
}: CallToActionProps) {
  const isDark = variant === 'dark'

  return (
    <section className={isDark ? styles.bandDark : styles.band}>
      <Container>
        <div className={styles.wrapper}>
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
        </div>
      </Container>
    </section>
  )
}

export default CallToAction
