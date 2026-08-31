import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems, platformDropdownItems } from '@/data/navigation'
import styles from './Navigation.module.css'

function PlatformDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (!isOpen) return

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <li ref={containerRef} className={styles.dropdownContainer}>
      <button
        type="button"
        className={styles.link}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Platform
        <svg
          className={isOpen ? `${styles.chevron} ${styles.chevronOpen}` : styles.chevron}
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

      {isOpen && (
        <div className={styles.dropdownPanel} role="menu" aria-label="Platform">
          {platformDropdownItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              role="menuitem"
              className={styles.dropdownLink}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  )
}

function Navigation() {
  return (
    <nav className={styles.nav} aria-label="Main">
      <ul className={styles.list}>
        {navItems.map((item) =>
          item.id === 'platform' ? (
            <PlatformDropdown key={item.id} />
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
  )
}

export default Navigation
