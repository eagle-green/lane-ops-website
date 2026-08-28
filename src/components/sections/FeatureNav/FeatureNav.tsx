import Container from '@/components/common/Container'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import styles from './FeatureNav.module.css'

interface FeatureNavTab {
  id: string
  label: string
}

interface FeatureNavProps {
  tabs: readonly FeatureNavTab[]
}

function FeatureNav({ tabs }: FeatureNavProps) {
  const tabIds = tabs.map((tab) => tab.id)
  const activeId = useScrollSpy(tabIds)

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault()
    const target = document.getElementById(id)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <nav className={styles.nav} aria-label="Feature sections">
      <Container>
        <ul className={styles.list}>
          {tabs.map((tab) => {
            const isActive = tab.id === activeId
            return (
              <li key={tab.id}>
                <a
                  href={`#${tab.id}`}
                  className={isActive ? `${styles.tab} ${styles.tabActive}` : styles.tab}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={(event) => handleClick(event, tab.id)}
                >
                  {tab.label}
                </a>
              </li>
            )
          })}
        </ul>
      </Container>
    </nav>
  )
}

export default FeatureNav
