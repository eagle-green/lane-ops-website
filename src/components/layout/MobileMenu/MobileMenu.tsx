import { NavLink } from 'react-router-dom'
import Button from '@/components/common/Button'
import { bookDemoPath, navItems } from '@/data/navigation'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import styles from './MobileMenu.module.css'

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
                {navItems.map((item) => (
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
                ))}
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
