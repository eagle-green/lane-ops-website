import Button from '@/components/common/Button'
import Heading from '@/components/common/Heading'
import Section from '@/components/common/Section'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import styles from './NotFound.module.css'

function NotFound() {
  useDocumentTitle('Page Not Found — LaneOps')

  return (
    <Section background="white">
      <div className={styles.wrapper}>
        <Heading level={1} align="center">
          Page Not Found
        </Heading>
        <p className={styles.body}>The page you're looking for doesn't exist or has moved.</p>
        <Button to="/" variant="primary" className={styles.action}>
          Back to Home
        </Button>
      </div>
    </Section>
  )
}

export default NotFound
