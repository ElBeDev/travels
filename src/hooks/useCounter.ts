import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `end` over `duration` ms.
 * Starts when `active` becomes true.
 */
export function useCounter(end: number, duration = 1800, active = false) {
  const [value, setValue] = useState(0)
  const raf = useRef<number>(0)

  useEffect(() => {
    if (!active) return
    let start: number | null = null

    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * end))
      if (progress < 1) raf.current = requestAnimationFrame(step)
      else setValue(end)
    }

    raf.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf.current)
  }, [active, end, duration])

  return value
}
