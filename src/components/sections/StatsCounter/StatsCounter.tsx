import Section from '@/components/common/Section'
import { useCountUp } from '@/hooks/useCountUp'
import styles from './StatsCounter.module.css'

export interface Stat {
  id: string
  target: number
  prefix?: string
  suffix?: string
  label: string
  note: string
  color: string
}

interface StatsCounterProps {
  stats: Stat[]
  footnote?: string
}

function StatItem({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp<HTMLParagraphElement>(stat.target)

  return (
    <div>
      <p ref={ref} className={styles.value} style={{ color: stat.color }}>
        {stat.prefix}
        {value}
        {stat.suffix}
      </p>
      <p className={styles.label}>{stat.label}</p>
      <p className={styles.note}>{stat.note}</p>
    </div>
  )
}

function StatsCounter({ stats, footnote }: StatsCounterProps) {
  return (
    <Section background="dark">
      <div className={styles.grid}>
        {stats.map((stat) => (
          <StatItem key={stat.id} stat={stat} />
        ))}
      </div>
      {footnote && <p className={styles.footnote}>{footnote}</p>}
    </Section>
  )
}

export default StatsCounter
