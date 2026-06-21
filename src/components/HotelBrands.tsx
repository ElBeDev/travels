import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './HotelBrands.module.css'

const BRANDS = [
  { name: 'JW Marriott',       file: '/brands/jw-marriott.png' },
  { name: 'Hilton',            file: '/brands/hilton.png' },
  { name: 'Four Seasons',      file: '/brands/four-seasons.png' },
  { name: 'Fairmont',          file: '/brands/fairmont.png' },
  { name: 'Marriott',          file: '/brands/marriott.png' },
  { name: 'Sheraton',          file: '/brands/sheraton.png' },
  { name: 'Radisson',          file: '/brands/radisson.png' },
  { name: 'Conrad',            file: '/brands/conrad.png' },
  { name: 'Leading Hotels',    file: '/brands/leading-hotels.png' },
  { name: 'Baglioni',          file: '/brands/baglioni.png' },
]

// Triple-duplicate for seamless infinite scroll
const TICKER = [...BRANDS, ...BRANDS, ...BRANDS]

export default function HotelBrands() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className={styles.section} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className={styles.eyebrow}>Exclusive member rates at</p>
        <h2 className={styles.title}>Leading Hotels Worldwide</h2>
      </motion.div>

      <motion.div
        className={styles.marqueeWrap}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.track}>
          {TICKER.map((b, i) => (
            <div key={`${b.name}-${i}`} className={styles.logo}>
              <img src={b.file} alt={b.name} loading="lazy" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
