import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useLang } from '../i18n'
import styles from './Deals.module.css'

export default function Deals() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })
  const [active, setActive] = useState<number | null>(null)
  const { t } = useLang()

  return (
    <section id="deals" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <motion.p className={styles.eyebrow}
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}>
            {t.deals_eyebrow}
          </motion.p>
          <motion.h2 className={styles.title}
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}>
            {t.deals_title_a}<br /><em>{t.deals_title_b}</em>
          </motion.h2>
          <motion.p className={styles.sub}
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}>
            Refreshed regularly — this is what membership looks like in practice.
          </motion.p>
        </div>

        <div className={styles.cards}>
          {DEALS.map((d, i) => (
            <motion.div
              key={`${d.city}-${d.hotel}`}
              className={`${styles.card} ${active === i ? styles.active : ''}`}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardCity}>{d.city}</span>
                <span className={styles.cardSave}>-{d.pct}</span>
              </div>
              <h3 className={styles.cardHotel}>{d.hotel}</h3>
              <p className={styles.cardNights}>{d.nights}</p>
              <div className={styles.cardPrices}>
                <span className={styles.cardPublic}>{d.public}</span>
                <span className={styles.cardOurs}>{d.ours}</span>
              </div>
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    className={styles.cardBar}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.35 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
