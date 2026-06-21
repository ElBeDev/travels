import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../i18n'
import styles from './Destinations.module.css'

const DEST_IMAGES = [
  'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=900&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
]

export default function Destinations() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })
  const { t } = useLang()

  return (
    <section id="destinations" className={styles.section} ref={ref}>
      <div className={styles.header}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {t.dest_eyebrow}
        </motion.p>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {t.dest_title_a}<br /><em>{t.dest_title_b}</em>
        </motion.h2>
        <motion.p
          className={styles.desc}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Member rates on every type of travel, everywhere in the world.
        </motion.p>
      </div>

      <div className={styles.grid}>
        {t.destinations.map((d, i) => (
          <motion.div
            key={d.tag}
            className={`${styles.card} ${i === 0 ? styles.large : ''}`}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={styles.cardBg}
              style={{ backgroundImage: `url('${DEST_IMAGES[i]}')` }}
            />
            <div className={styles.cardContent}>
              <span className={styles.cardTag}>{d.tag}</span>
              <h3 className={styles.cardTitle}>{d.title}</h3>
              <p className={styles.cardPlaces}>{d.places}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
