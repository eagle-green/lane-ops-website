import styles from './Marquee.module.css'

interface MarqueeProps {
  items: string[]
}

function Marquee({ items }: MarqueeProps) {
  // Rendered twice back-to-back so the -50% translateX loop is seamless.
  const looped = [...items, ...items]

  return (
    <div className={styles.wrapper}>
      <div className={styles.track} aria-hidden="true">
        {looped.map((item, i) => (
          <span key={`${item}-${i}`} className={styles.item}>
            {item}
            <span className={styles.itemDot} />
          </span>
        ))}
      </div>
      <span className="visually-hidden">{items.join(', ')}</span>
    </div>
  )
}

export default Marquee
