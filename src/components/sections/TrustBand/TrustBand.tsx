import Heading from '@/components/common/Heading'
import Section from '@/components/common/Section'
import styles from './TrustBand.module.css'

interface TrustBandProps {
  highlight?: string
  title: string
  body?: string
  checklist?: string[]
  background?: 'white' | 'muted'
}

function TrustBand({ highlight, title, body, checklist, background = 'muted' }: TrustBandProps) {
  return (
    <Section background={background}>
      <div className={styles.wrapper}>
        {highlight && <p className={styles.highlight}>{highlight}</p>}
        <Heading level={2} align="center">
          {title}
        </Heading>
        {body && <p className={styles.body}>{body}</p>}

        {checklist && checklist.length > 0 && (
          <ul className={styles.checklist}>
            {checklist.map((item) => (
              <li key={item} className={styles.checklistItem}>
                <svg
                  className={styles.checklistIcon}
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
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  )
}

export default TrustBand
