import { FOOTER_LINKS } from '../data/content'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>Travels</div>
          <p className={styles.tagline}>
            Private member rates on hotels, flights,<br />
            and experiences worldwide.
          </p>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <p className={styles.colHead}>Travels</p>
            <ul>
              {FOOTER_LINKS.travels.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={styles.link}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.col}>
            <p className={styles.colHead}>Help</p>
            <ul>
              {FOOTER_LINKS.help.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={styles.link}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Travels. All rights reserved.</p>
        <p className={styles.note}>Member rates not affiliated with any hotel chain or airline.</p>
      </div>
    </footer>
  )
}
