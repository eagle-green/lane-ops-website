import type { ReactNode } from 'react'
import styles from './Heading.module.css'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
type HeadingSize = 'sm' | 'md' | 'lg' | 'xl'

interface HeadingProps {
  level: HeadingLevel
  size?: HeadingSize
  align?: 'left' | 'center'
  id?: string
  children: ReactNode
  className?: string
}

function Heading({ level, size = 'lg', align = 'left', id, children, className }: HeadingProps) {
  const Tag = `h${level}` as const
  const classes = [styles.heading, styles[size], align === 'center' ? styles.center : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag id={id} className={classes}>
      {children}
    </Tag>
  )
}

export default Heading
