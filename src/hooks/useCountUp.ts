import { useEffect, useState } from 'react'
import { useInView } from './useInView'

const DURATION_MS = 1400

/**
 * Animates from 0 to `target` once the returned ref scrolls into view, using
 * an eased requestAnimationFrame loop. Jumps straight to `target` under
 * prefers-reduced-motion.
 */
export function useCountUp<T extends HTMLElement>(target: number) {
  const { ref, isInView } = useInView<T>()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setValue(target)
      return
    }

    let frame: number
    const start = performance.now()

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION_MS)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(target * eased))
      if (t < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [isInView, target])

  return { ref, value }
}
