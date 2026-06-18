import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { WHY_FEATURES } from '../data/content'
import styles from './WhyDifferent.module.css'

const R = 52
const CIRC = 2 * Math.PI * R

function RingSavings({ active }: { active: boolean }) {
  // 3 segments: hotels 48%, flights 38%, tours 52% → show as donut slices of avg
  const segments = [
    { label: 'Hotels',  pct: 0.48, color: '#eee273' },
    { label: 'Flights', pct: 0.38, color: '#d4af37' },
    { label: 'Tours',   pct: 0.52, color: 'rgba(244,228,193,0.35)' },
  ]
  // Draw 3 arcs: each takes 1/3 of circle, filled proportionally by pct
  const sliceAngle = (2 * Math.PI) / 3
  let offset = 0

  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className={styles.ringSvg}>
      {/* Background ring */}
      <circle cx="60" cy="60" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
      {segments.map((seg, i) => {
        const arcLen = sliceAngle * CIRC / (2 * Math.PI)
        const gap = 4
        const dash = active ? arcLen * seg.pct - gap : 0
        const currentOffset = -(offset * CIRC / (2 * Math.PI)) - CIRC * 0.25
        const el = (
          <motion.circle
            key={seg.label}
            cx="60" cy="60" r={R}
            fill="none"
            stroke={seg.color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${CIRC - dash}`}
            strokeDashoffset={currentOffset}
            initial={{ strokeDasharray: `0 ${CIRC}` }}
            animate={active ? { strokeDasharray: `${dash} ${CIRC - dash}` } : {}}
            transition={{ duration: 1.2, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
        )
        offset += sliceAngle
        return el
      })}
    </svg>
  )
}

export default function WhyDifferent() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="why" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        {/* Left: photo + charts */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: -32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.photo} />
          <div className={styles.photoAccent} />

          {/* Floating counter */}
          <div className={styles.counterBox}>
            <span className={styles.counterNum}>500K+</span>
            <span className={styles.counterLbl}>Properties worldwide</span>
          </div>

          {/* Ring chart card */}
          <motion.div
            className={styles.ringCard}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <RingSavings active={inView} />
            <div className={styles.ringText}>
              <span className={styles.ringPct}>48%</span>
              <span className={styles.ringLbl}>avg. savings</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: features */}
        <div className={styles.content}>
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Why Travels is different
          </motion.p>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Built for<br /><em>serious travelers</em>
          </motion.h2>

          <div className={styles.features}>
            {WHY_FEATURES.map((f, i) => (
              <motion.div
                key={f.num}
                className={styles.feature}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              >
                <span className={styles.fNum}>{f.num}</span>
                <div>
                  <h3 className={styles.fTitle}>{f.title}</h3>
                  <p className={styles.fText}>{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
