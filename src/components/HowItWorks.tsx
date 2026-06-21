import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { STEPS } from '../data/content'
import styles from './HowItWorks.module.css'

function StepIcon({ icon }: { icon: string }) {
  if (icon === 'handshake') return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 7H13.5L11 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2" />
      <path d="M17 21h2a2 2 0 0 0 2-2v-4" />
      <path d="M14 13l-2-2-3 3 2 2" />
      <path d="M10 14l1.5 1.5" />
      <path d="M17 9l-4 4" />
      <path d="M14 7l3 3 3-3-3-3-3 3Z" />
    </svg>
  )
  if (icon === 'ai') return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
      <path d="M11 8v3l2 2" />
      <path d="M8 6.5l1 1" />
      <path d="M6.5 8l1 1" />
      <path d="M6 11h1" />
      <path d="M8 13.5l1-1" />
      <circle cx="18.5" cy="4.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="21" cy="7" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="17" cy="2.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
  if (icon === 'search') return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
      <path d="M8 11h6M11 8v6" />
    </svg>
  )
  if (icon === 'check') return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M7.5 12l3 3 6-6" />
    </svg>
  )
  return null
}

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
          Four steps to<br />
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
            transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          >
            <div className={styles.stepImg}>
              <StepIcon icon={step.icon} />
            </div>
            <div className={styles.stepNum}>{step.num}</div>
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
