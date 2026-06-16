import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { STEPS } from '../data/content'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="how" className={styles.section} ref={ref}>
      <div className={styles.header}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          How it works
        </motion.p>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Three steps to<br />
          <em>exclusive rates</em>
        </motion.h2>
        <motion.p
          className={styles.desc}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          No hidden fees, no agents, no commissions.
          Just private prices, directly yours.
        </motion.p>
      </div>

      <div className={styles.steps}>
        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            className={styles.step}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.stepImg}>
              <div className={styles.stepNum}>{step.num}</div>
            </div>
            <div className={styles.stepBody}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
