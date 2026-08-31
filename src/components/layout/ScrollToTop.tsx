import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    // Client-side route transitions don't get the browser's native
    // scroll-to-hash behavior (that only fires on a hard page load), so
    // scroll to the target manually once it's rendered.
    const target = document.getElementById(hash.slice(1))
    target?.scrollIntoView({ block: 'start' })
  }, [pathname, hash])

  return null
}

export default ScrollToTop
