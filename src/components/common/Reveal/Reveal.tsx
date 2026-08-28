import type { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'
import styles from './Reveal.module.css'

interface RevealProps {
  children: ReactNode
  delay?: 1 | 2 | 3
  className?: string
}

function Reveal({ children, delay, className }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>()
  const classes = [
    styles.reveal,
    isInView ? styles.visible : '',
    delay ? styles[`delay${delay}`] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}

export default Reveal
