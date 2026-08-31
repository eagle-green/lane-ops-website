import { Link } from 'react-router-dom'
import Button from '@/components/common/Button'
import Container from '@/components/common/Container'
import { bookDemoPath } from '@/data/navigation'
import Navigation from '../Navigation'
import MobileMenu from '../MobileMenu'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo} aria-label="LaneOps home">
            <span className={styles.logoMark} aria-hidden="true" />
            <span>
              Lane<span className={styles.logoOps}>Ops</span>
            </span>
          </Link>

          <Navigation />

          <div className={styles.actions}>
            <Button to={bookDemoPath} variant="primary" className={styles.desktopCta}>
              Book a Demo
            </Button>
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
