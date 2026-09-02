import Heading from '@/components/common/Heading'
import LiveFeedCard from '@/components/common/LiveFeedCard'
import Section from '@/components/common/Section'
import { useLiveFeed } from '@/hooks/useLiveFeed'
import styles from './DispatchPreview.module.css'

const bullets = [
  'Assign crews and vehicles to jobs in seconds',
  'Spot double-bookings before the truck leaves the yard',
  'Dispatch and crews see the exact same board, live',
]

interface DispatchPreviewProps {
  screenshotSrc: string
  screenshotAlt: string
}

function DispatchPreview({ screenshotSrc, screenshotAlt }: DispatchPreviewProps) {
  const { visible, offset } = useLiveFeed()

  return (
    <Section background="dark" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            Live view
          </p>
          <Heading level={2} size="lg">
            The Live Dispatch Board
          </Heading>
          <p className={styles.body}>
            Every crew, every job, updated the moment something changes in the field, no phone
            calls, no guesswork.
          </p>
          <ul className={styles.bullets}>
            {bullets.map((bullet) => (
              <li key={bullet} className={styles.bulletItem}>
                <span className={styles.bulletBadge} aria-hidden="true">
                  ✓
                </span>
                <span className={styles.bulletText}>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={styles.panel}>
            <div className={styles.screen}>
              <img src={screenshotSrc} alt={screenshotAlt} />
            </div>
          </div>

          <LiveFeedCard items={visible} offset={offset} className={styles.feedCard} />
        </div>
      </div>
    </Section>
  )
}

export default DispatchPreview
