import type { ReactNode } from 'react'
import Container from '../Container'
import styles from './Section.module.css'

type SectionBackground = 'white' | 'muted' | 'wave-accent' | 'dark'

interface SectionProps {
  id?: string
  background?: SectionBackground
  children: ReactNode
  className?: string
  containerless?: boolean
  'aria-labelledby'?: string
}

const backgroundClass: Record<SectionBackground, string> = {
  white: styles.white!,
  muted: styles.muted!,
  'wave-accent': styles.waveAccent!,
  dark: styles.dark!,
}

function Section({
  id,
  background = 'white',
  children,
  className,
  containerless = false,
  'aria-labelledby': ariaLabelledBy,
}: SectionProps) {
  const classes = [styles.section, backgroundClass[background], className].filter(Boolean).join(' ')

  return (
    <section id={id} className={classes} aria-labelledby={ariaLabelledBy}>
      {containerless ? children : <Container>{children}</Container>}
    </section>
  )
}

export default Section
