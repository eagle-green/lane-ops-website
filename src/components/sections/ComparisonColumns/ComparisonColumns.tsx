import Heading from '@/components/common/Heading'
import Section from '@/components/common/Section'
import styles from './ComparisonColumns.module.css'

interface ComparisonColumnsProps {
  title: string
  subtitle?: string
  leftLabel: string
  leftItems: string[]
  rightLabel: string
  rightItems: string[]
  closingStatement?: string
}

function ComparisonColumns({
  title,
  subtitle,
  leftLabel,
  leftItems,
  rightLabel,
  rightItems,
  closingStatement,
}: ComparisonColumnsProps) {
  return (
    <Section background="muted">
      <div className={styles.header}>
        <Heading level={2} align="center">
          {title}
        </Heading>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      <div className={styles.grid}>
        <div className={`${styles.column} ${styles.columnNegative}`}>
          <p className={styles.columnLabel}>{leftLabel}</p>
          <ul className={styles.list}>
            {leftItems.map((item) => (
              <li key={item} className={styles.item}>
                <svg
                  className={styles.iconNegative}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.column} ${styles.columnPositive}`}>
          <p className={styles.columnLabel}>{rightLabel}</p>
          <ul className={styles.list}>
            {rightItems.map((item) => (
              <li key={item} className={styles.item}>
                <svg
                  className={styles.iconPositive}
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
        </div>
      </div>

      {closingStatement && <p className={styles.closingStatement}>{closingStatement}</p>}
    </Section>
  )
}

export default ComparisonColumns
