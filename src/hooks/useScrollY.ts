import { useEffect, useState } from 'react'

/** Returns how many px the page has been scrolled */
export function useScrollY() {
  const [y, setY] = useState(0)

  useEffect(() => {
    const onScroll = () => setY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return y
}
