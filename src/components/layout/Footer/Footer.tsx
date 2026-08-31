import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import { CONTACT_EMAIL } from '@/data/contact'
import { navItems } from '@/data/navigation'
import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div>
            <Link to="/" className={styles.logo} aria-label="LaneOps home">
              <span className={styles.logoMark} aria-hidden="true" />
              <span>
                Lane<span className={styles.logoOps}>Ops</span>
              </span>
            </Link>
            <p className={styles.tagline}>
              One system for scheduling, dispatch, time, payroll, assets and compliance.
            </p>
          </div>

          <div>
            <p className={styles.heading}>Site</p>
            <ul className={styles.list}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link to={item.path} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/pricing" className={styles.link}>
                  Pricing & Savings Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className={styles.heading}>Contact</p>
            <ul className={styles.list}>
              <li>
                <a className={styles.link} href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className={styles.copyright}>&copy; {year} LaneOps. All rights reserved.</p>
      </Container>
    </footer>
  )
}

export default Footer
