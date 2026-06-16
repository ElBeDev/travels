import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PLANS } from '../data/content'
import styles from './Pricing.module.css'

export default function Pricing() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="pricing" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <motion.p className={styles.eyebrow}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}>
          Choose your plan
        </motion.p>
        <motion.h2 className={styles.title}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}>
          Browse free.<br /><em>Book when you're ready.</em>
        </motion.h2>
        <motion.p className={styles.sub}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}>
          Activate your membership when ready — backed by our 30-day money-back guarantee.
        </motion.p>

        <div className={styles.plans}>
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`${styles.plan} ${plan.featured ? styles.featured : ''}`}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              {plan.featured && <div className={styles.featuredLabel}>Most popular</div>}
              <div className={styles.planBadge}>{plan.badge}</div>
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planTagline}>{plan.tagline}</p>
              <div className={styles.priceBlock}>
                <span className={styles.amount}>{plan.amount}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.a
                href={plan.href}
                className={plan.featured ? styles.btnPrimary : styles.btnSecondary}
                whileTap={{ scale: 0.97 }}
              >
                {plan.cta}
              </motion.a>
              <p className={styles.guarantee}>30-day money-back guarantee</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
