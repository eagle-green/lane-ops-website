import { Fragment } from 'react'
import Button from '@/components/common/Button'
import LiveFeedCard from '@/components/common/LiveFeedCard'
import Section from '@/components/common/Section'
import { useLiveFeed } from '@/hooks/useLiveFeed'
import styles from './HomeHero.module.css'

interface HomeHeroAction {
  label: string
  to: string
  variant?: 'primary' | 'outline'
}

interface HomeHeroProps {
  eyebrow: string
  headline: string
  headlineAccent: string
  subheadline: string
  tagline: string
  footnote?: string
  actions: [HomeHeroAction, HomeHeroAction]
  screenshotSrc: string
  screenshotAlt: string
}

const CHAR_STEP_MS = 32

/**
 * Renders one opaque "cover" <span> per letter, each staggered by
 * CHAR_STEP_MS starting from `startIndex`, fading out to reveal the gradient
 * text sitting underneath (see .headlineOverlay below). A gradient painted
 * with background-clip:text can't be revealed by animating opacity on its
 * own descendants — that gradient is painted once, as part of the ancestor's
 * own paint step, before child compositing even happens, so a child's
 * opacity has no effect on it. Animating a separate opaque overlay instead
 * sidesteps that entirely: the letters are always fully rendered in gradient
 * color beneath, and what's animating is a normal, unrelated opaque layer.
 */
function LetterCovers({ text, startIndex }: { text: string; startIndex: number }) {
  let index = startIndex
  const words = text.split(' ')

  return (
    <>
      {words.map((word, wordIndex) => (
        <Fragment key={wordIndex}>
          <span className={styles.word}>
            {word.split('').map((char, charIndex) => {
              const delay = index * CHAR_STEP_MS
              index += 1
              return (
                <span
                  key={charIndex}
                  className={styles.char}
                  style={{ animationDelay: `${delay}ms` }}
                >
                  {char}
                </span>
              )
            })}
          </span>
          {wordIndex < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </>
  )
}

function HomeHero({
  eyebrow,
  headline,
  headlineAccent,
  subheadline,
  tagline,
  footnote,
  actions,
  screenshotSrc,
  screenshotAlt,
}: HomeHeroProps) {
  const { visible, offset } = useLiveFeed()
  const headlineLetterCount = headline.replace(/\s/g, '').length

  return (
    <Section background="dark" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <p className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className={styles.headline} aria-label={`${headline} ${headlineAccent}`}>
            <span className={styles.headlineText}>
              {headline}
              <br />
              {headlineAccent}
            </span>
            <span className={styles.headlineOverlay} aria-hidden="true">
              <LetterCovers text={headline} startIndex={0} />
              <br />
              <LetterCovers text={headlineAccent} startIndex={headlineLetterCount} />
            </span>
          </h1>
          <p className={styles.subheadline}>{subheadline}</p>
          <p className={styles.tagline}>{tagline}</p>
          <div className={styles.actions}>
            {actions.map((action) => (
              <Button
                key={action.label}
                to={action.to}
                variant={action.variant === 'outline' ? 'outline' : 'primary'}
                className={action.variant === 'outline' ? styles.outlineBtn : undefined}
              >
                {action.label}
              </Button>
            ))}
          </div>
          {footnote && <p className={styles.footnote}>{footnote}</p>}
        </div>

        <div className={styles.visual}>
          <div className={styles.panel}>
            <div className={styles.chrome} aria-hidden="true">
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.chromeLabel}>laneops / dispatch</span>
            </div>
            <div className={styles.screen}>
              <img src={screenshotSrc} alt={screenshotAlt} />
              <div className={styles.sweep} aria-hidden="true" />
            </div>
          </div>

          <LiveFeedCard items={visible} offset={offset} className={styles.feedCard} />

          <div className={styles.statBadge} aria-hidden="true">
            <span className={styles.statValue}>$48,250</span>
            <span className={styles.statLabel}>billed today</span>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default HomeHero
