import Heading from '@/components/common/Heading'
import Section from '@/components/common/Section'
import type { FAQItem } from '@/data/faq'
import styles from './FAQAccordion.module.css'

interface FAQAccordionProps {
  title: string
  items: FAQItem[]
  background?: 'white' | 'muted'
}

function FAQAccordion({ title, items, background = 'white' }: FAQAccordionProps) {
  return (
    <Section background={background}>
      <Heading level={2} size="lg" align="center" className={styles.heading}>
        {title}
      </Heading>
      <div className={styles.list}>
        {items.map((item) => (
          <details key={item.id} className={styles.item}>
            <summary className={styles.question}>{item.question}</summary>
            <p className={styles.answer}>{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}

export default FAQAccordion
