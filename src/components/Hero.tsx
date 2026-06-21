import { motion } from 'framer-motion'
import { useLang } from '../i18n'
import styles from './Hero.module.css'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } }
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } }

export default function Hero() {
  const { t } = useLang()
  return (
    <section className={styles.hero}>
      <div className={styles.photo} />
      <div className={styles.overlay} />
      <motion.div className={styles.inner} variants={container} initial="hidden" animate="show">
        <motion.span variants={item} className={styles.eyebrow}>{t.hero_eyebrow}</motion.span>
        <motion.h1 variants={item} className={styles.h1}>
          {t.hero_h1_a}<br /><em>{t.hero_h1_b}</em>
        </motion.h1>
        <motion.p variants={item} className={styles.sub}>{t.hero_sub}</motion.p>
        <motion.div variants={item} className={styles.actions}>
          <motion.a href="#pricing" className={styles.btnPrimary} whileHover={{ scale: 1.03, backgroundColor: 'var(--terra-h)' }} whileTap={{ scale: 0.97 }}>
            {t.hero_cta}
          </motion.a>
          <motion.a href="#how" className={styles.btnGhost} whileHover={{ backgroundColor: 'rgba(255,255,255,0.18)' }}>
            {t.hero_ghost}
          </motion.a>
        </motion.div>
        <motion.div variants={item} className={styles.trust}>
          <span>✓ 30-day money-back</span>
          <span>✓ Cancel anytime</span>
          <span>✓ 500K+ properties</span>
        </motion.div>
      </motion.div>
      <motion.div className={styles.badge} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.6 }}>
        <span className={styles.badgeDot} />
        <span>{t.hero_badge}</span>
      </motion.div>
      <div className={styles.scrollCue}>
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </div>
    </section>
  )
}
