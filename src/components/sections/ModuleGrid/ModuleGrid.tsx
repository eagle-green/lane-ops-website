import Heading from '@/components/common/Heading'
import ProductScreenshot from '@/components/common/ProductScreenshot'
import Section from '@/components/common/Section'
import type { ModuleItem } from '@/types/common'
import styles from './ModuleGrid.module.css'

interface ModuleGridSplitProps {
  layout?: 'split'
  headline: string
  body: string
  modules: ModuleItem[]
  background?: 'white' | 'muted'
}

interface ModuleGridGridProps {
  layout: 'grid'
  headline: string
  body?: string
  modules: ModuleItem[]
  screenshotSrc?: string
  screenshotAlt?: string
  background?: 'white' | 'muted'
}

type ModuleGridProps = ModuleGridSplitProps | ModuleGridGridProps

function ModuleGrid(props: ModuleGridProps) {
  const background = props.background ?? 'white'

  if (props.layout === 'grid') {
    const { headline, body, modules, screenshotSrc, screenshotAlt } = props
    return (
      <Section background={background}>
        <div className={styles.gridHeader}>
          <Heading level={2} align="center">
            {headline}
          </Heading>
          {body && <p className={styles.body}>{body}</p>}
        </div>

        {screenshotSrc && screenshotAlt && (
          <div className={styles.visual}>
            <ProductScreenshot src={screenshotSrc} alt={screenshotAlt} />
          </div>
        )}

        <div className={styles.grid}>
          {modules.map((module) => (
            <div key={module.id} className={styles.gridItem}>
              {module.label}
            </div>
          ))}
        </div>
      </Section>
    )
  }

  const { headline, body, modules } = props
  return (
    <Section background={background}>
      <div className={styles.split}>
        <div className={styles.text}>
          <Heading level={2} size="lg">
            {headline}
          </Heading>
          <p className={styles.body}>{body}</p>
        </div>

        <ul className={styles.list}>
          {modules.map((module) => (
            <li key={module.id} className={styles.listItem}>
              <span className={styles.listDot} aria-hidden="true" />
              {module.label}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default ModuleGrid
