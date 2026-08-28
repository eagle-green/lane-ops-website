import type { ReactNode } from 'react'
import styles from './Card.module.css'

interface CardProps {
  children: ReactNode
  hoverLift?: boolean
  className?: string
}

function Card({ children, hoverLift = true, className }: CardProps) {
  const classes = [styles.card, hoverLift ? styles.hoverLift : '', className]
    .filter(Boolean)
    .join(' ')
  return <div className={classes}>{children}</div>
}

export default Card
