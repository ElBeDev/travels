import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../i18n'
import styles from './HotelBrands.module.css'

const AIRLINES = [
  { name: 'American Airlines', file: '/brands/american-airlines.svg' },
  { name: 'Delta',             file: '/brands/delta.svg' },
  { name: 'United Airlines',   file: '/brands/united.svg' },
  { name: 'Emirates',          file: '/brands/emirates-icon.svg' },
  { name: 'Lufthansa',         file: '/brands/lufthansa.svg' },
  { name: 'Southwest',         file: '/brands/southwest.svg' },
  { name: 'Air France',        file: '/brands/air-france.svg' },
  { name: 'British Airways',   file: '/brands/british-airways.svg' },
  { name: 'Aeromexico',        file: '/brands/aeromexico.svg' },
  { name: 'KLM',               file: '/brands/klm.svg' },
]

const AIRLINE_TICKER = [...AIRLINES, ...AIRLINES, ...AIRLINES]

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
  const { t } = useLang()

  return (
    <section className={styles.section} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className={styles.eyebrow}>{t.brands_eyebrow}</p>
        <h2 className={styles.title}>{t.brands_title}</h2>
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

      <motion.div
        className={`${styles.marqueeWrap} ${styles.marqueeReverse}`}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        <div className={`${styles.track} ${styles.trackReverse}`}>
          {AIRLINE_TICKER.map((a, i) => (
            <div key={`${a.name}-${i}`} className={`${styles.logo} ${styles.logoAirline}`}>
              <img src={a.file} alt={a.name} loading="lazy" style={a.name === 'Delta' ? { width: 60, height: 60 } : undefined} />
              <span>{a.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
