import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { NAV_LINKS } from '../data/content'
import { useScrollY } from '../hooks/useScrollY'
import styles from './Navbar.module.css'

export default function Navbar() {
  const y = useScrollY()
  const scrolled = y > 80
  const [open, setOpen] = useState(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>
        Travels
      </a>

      <ul className={styles.links}>
        {NAV_LINKS.map((l) => (
          <li key={l.label}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>

      <div className={styles.cta}>
        <a href="#" className={styles.login}>Login</a>
        <motion.a
          href="#pricing"
          className={styles.btnPrimary}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Join now
        </motion.a>
      </div>

      <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="menu">
        <span /><span /><span />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href="#pricing" className={styles.mobileJoin} onClick={() => setOpen(false)}>Join now</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
