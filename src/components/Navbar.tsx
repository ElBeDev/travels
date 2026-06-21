import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useScrollY } from '../hooks/useScrollY'
import { useLang } from '../i18n'
import styles from './Navbar.module.css'

export default function Navbar() {
  const y = useScrollY()
  const scrolled = y > 80
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  const NAV_LINKS = [
    { label: t.nav_how,          href: '#how' },
    { label: t.nav_destinations, href: '#destinations' },
    { label: t.nav_pricing,      href: '#pricing' },
    { label: t.nav_contact,      href: 'mailto:hello@travels.com' },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>Travels</a>

      <ul className={styles.links}>
        {NAV_LINKS.map((l) => (
          <li key={l.label}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>

      <div className={styles.cta}>
        <button
          className={styles.langSwitch}
          onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
          aria-label="Switch language"
        >
          {lang === 'en' ? 'ES' : 'EN'}
        </button>
        <a href="#" className={styles.login}>Login</a>
        <motion.a href="#pricing" className={styles.btnPrimary} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          {t.nav_cta}
        </motion.a>
      </div>

      <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="menu">
        <span /><span /><span />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div className={styles.mobileMenu} initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <button
              className={styles.langSwitchMobile}
              onClick={() => { setLang(lang === 'en' ? 'es' : 'en'); setOpen(false) }}
            >
              {lang === 'en' ? '🇲🇽 Español' : '🇺🇸 English'}
            </button>
            <a href="#pricing" className={styles.mobileJoin} onClick={() => setOpen(false)}>{t.nav_cta}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
