import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@/components/common/Button'
import { bookDemoPath, navItems, platformDropdownItems } from '@/data/navigation'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import styles from './MobileMenu.module.css'

function PlatformAccordion({ onNavigate }: { onNavigate: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <li>
      <button
        type="button"
        className={styles.accordionTrigger}
        aria-expanded={isExpanded}
        aria-controls="mobile-platform-submenu"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        Platform
        <svg
          className={isExpanded ? `${styles.chevron} ${styles.chevronOpen}` : styles.chevron}
          viewBox="0 0 12 8"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isExpanded && (
        <ul id="mobile-platform-submenu" className={styles.subList}>
          {platformDropdownItems.map((item) => (
            <li key={item.id}>
              <NavLink to={item.path} className={styles.subLink} onClick={onNavigate}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

function MobileMenu() {
  const { isOpen, open, close, containerRef } = useMobileMenu()

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        onClick={open}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        aria-label="Open menu"
      >
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
          <div className={styles.overlay} onClick={close} />
          <div
            id="mobile-menu-panel"
            ref={containerRef}
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className={styles.panelHeader}>
              <button
                type="button"
                className={styles.closeButton}
                onClick={close}
                aria-label="Close menu"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav aria-label="Mobile">
              <ul className={styles.list}>
                {navItems.map((item) =>
                  item.id === 'platform' ? (
                    <PlatformAccordion key={item.id} onNavigate={close} />
                  ) : (
                    <li key={item.id}>
                      <NavLink
                        to={item.path}
                        end
                        className={({ isActive }) =>
                          isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ),
                )}
              </ul>
            </nav>

            <Button to={bookDemoPath} variant="primary" fullWidth onClick={close}>
              Book a Demo
            </Button>
          </div>
        </>
      )}
    </>
  )
}

export default MobileMenu
