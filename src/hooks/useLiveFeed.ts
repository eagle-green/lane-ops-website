import { useEffect, useState } from 'react'
import { FEED } from '@/data/liveFeed'

const ROTATE_MS = 2800

/** Rotates through FEED, returning a window of `count` visible items. */
export function useLiveFeed(count = 3) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setOffset((prev) => (prev + 1) % FEED.length)
    }, ROTATE_MS)
    return () => window.clearInterval(id)
  }, [])

  const visible = Array.from({ length: count }, (_, i) => FEED[(offset + i) % FEED.length]!)

  return { visible, offset }
}
