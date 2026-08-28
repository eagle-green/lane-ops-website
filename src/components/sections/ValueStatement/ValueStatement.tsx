import Heading from '@/components/common/Heading'
import Section from '@/components/common/Section'
import styles from './ValueStatement.module.css'

interface ValueStatementProps {
  eyebrow?: string
  headline: string
  body: string
}

function ValueStatement({ eyebrow, headline, body }: ValueStatementProps) {
  return (
    <Section background="white">
      <div className={styles.wrapper}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <Heading level={2} align="center">
          {headline}
        </Heading>
        <p className={styles.body}>{body}</p>
      </div>
    </Section>
  )
}

export default ValueStatement
