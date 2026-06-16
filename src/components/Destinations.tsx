import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { DESTINATIONS } from '../data/content'
import styles from './Destinations.module.css'

export default function Destinations() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="destinations" className={styles.section} ref={ref}>
      <div className={styles.header}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Destinations & Experiences
        </motion.p>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Whatever your<br /><em>travel style</em>
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
        {DESTINATIONS.map((d, i) => (
          <motion.div
            key={d.tag}
            className={`${styles.card} ${d.large ? styles.large : ''}`}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={styles.cardBg}
              style={{ backgroundImage: `url('${d.image}')` }}
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
