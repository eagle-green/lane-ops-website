import { NavLink } from 'react-router-dom'
import { navItems } from '@/data/navigation'
import styles from './Navigation.module.css'

function Navigation() {
  return (
    <nav className={styles.nav} aria-label="Main">
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
  )
}

export default Navigation
