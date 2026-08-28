import type { FeedEvent } from '@/data/liveFeed'
import styles from './LiveFeedCard.module.css'

interface LiveFeedCardProps {
  label?: string
  items: FeedEvent[]
  offset: number
  className?: string
}

function LiveFeedCard({ label = 'Live activity', items, offset, className }: LiveFeedCardProps) {
  return (
    <div className={className ? `${styles.card} ${className}` : styles.card} aria-hidden="true">
      <p className={styles.label}>{label}</p>
      {items.map((event, i) => (
        <div key={`${offset}-${i}`} className={styles.item} style={{ opacity: 1 - i * 0.2 }}>
          <span className={styles.dot} style={{ backgroundColor: event.dot }} />
          <span className={styles.text}>{event.text}</span>
          <span className={styles.time}>{i === 0 ? 'now' : `${i * 2}m`}</span>
        </div>
      ))}
    </div>
  )
}

export default LiveFeedCard
