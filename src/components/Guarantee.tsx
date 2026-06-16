import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Guarantee.module.css'

export default function Guarantee() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
        >
          30
        </motion.div>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className={styles.title}>The 30-Day Guarantee</h2>
          <p className={styles.body}>
            Join Travels and explore the full platform for 30 days.
            If you haven't saved at least the cost of your membership on your first booking,
            we'll refund you — no questions, no hoops.
          </p>
          <a href="#pricing" className={styles.btn}>Start saving today</a>
        </motion.div>
      </div>
    </section>
  )
}
