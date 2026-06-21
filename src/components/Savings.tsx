import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../i18n'
import styles from './Savings.module.css'

const BAR_DATA = [
  { city: 'Cancun, Mexico',    hotel: 'Grand Fiesta Americana Coral Beach', pub: 4059, ours: 2117, pct: 48, save: '$1,942' },
  { city: 'Los Cabos, Mexico', hotel: 'Hyatt Vacation Club Sirena del Mar', pub: 3800, ours: 2090, pct: 45, save: '$1,710' },
  { city: 'Miami, USA',        hotel: 'The Miami Beach EDITION',            pub: 3297, ours: 2324, pct: 29, save: '$973'   },
  { city: 'Nassau, Bahamas',   hotel: 'Margaritaville Beach Resort',        pub: 3027, ours: 1545, pct: 49, save: '$1,482' },
  { city: 'Punta Cana, DR',    hotel: 'Wyndham Alltra Resort',              pub: 2261, ours: 1073, pct: 53, save: '$1,188' },
  { city: 'Chicago, USA',      hotel: 'Le Méridien Essex Chicago',          pub: 1646, ours:  759, pct: 54, save: '$887'   },
]
const MAX = 4059

const fmt = (n: number) =>
  '$' + n.toLocaleString('en-US')

export default function Savings() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })
  const { t } = useLang()

  return (
    <section id="savings" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <motion.p className={styles.eyebrow}
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}>
            {t.savings_eyebrow}
          </motion.p>
          <motion.h2 className={styles.title}
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}>
            {t.savings_title_a}<br /><em>{t.savings_title_b}</em>
          </motion.h2>
          <motion.p className={styles.sub}
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}>
            Public rate vs. Travels member rate — 5-night stay
          </motion.p>
        </div>

        {/* Legend */}
        <motion.div className={styles.legend}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <span className={styles.legendPublic}><span />{t.savings_public}</span>
          <span className={styles.legendOurs}><span />{t.savings_member}</span>
        </motion.div>

        {/* Bar chart */}
        <div className={styles.chart}>
          {BAR_DATA.map((d, i) => {
            const pubW  = (d.pub  / MAX) * 100
            const oursW = (d.ours / MAX) * 100
            return (
              <motion.div
                key={d.city}
                className={styles.row}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
              >
                <div className={styles.rowLabel}>
                  <span className={styles.rowCity}>{d.city}</span>
                  <span className={styles.rowHotel}>{d.hotel}</span>
                </div>
                <div className={styles.bars}>
                  {/* Public bar */}
                  <div className={styles.barRow}>
                    <span className={styles.priceLabel}>{fmt(d.pub)}</span>
                    <div className={styles.barTrack}>
                      <motion.div
                        className={styles.barPublic}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${pubW}%` } : {}}
                        transition={{ duration: 0.9, delay: 0.3 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                  {/* Member bar */}
                  <div className={styles.barRow}>
                    <span className={`${styles.priceLabel} ${styles.oursLabel}`}>{fmt(d.ours)}</span>
                    <div className={styles.barTrack}>
                      <motion.div
                        className={styles.barOurs}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${oursW}%` } : {}}
                        transition={{ duration: 0.9, delay: 0.4 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <span className={styles.saveBadge}>-{d.pct}%</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className={styles.saveAmt}>{d.save}</div>
              </motion.div>
            )
          })}
        </div>

        <p className={styles.note}>
          Sample rates for illustration. Actual savings vary by destination, dates, and availability.
        </p>
      </div>
    </section>
  )
}
