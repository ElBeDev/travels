import { useLang } from '../i18n'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>Travels</div>
          <p className={styles.tagline}>
            {t.footer_tagline}
          </p>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <p className={styles.colHead}>{t.footer_col_travels}</p>
            <ul>
              {t.footer_links_travels.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={styles.link}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.col}>
            <p className={styles.colHead}>{t.footer_col_help}</p>
            <ul>
              {t.footer_links_help.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={styles.link}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Travels. {t.footer_copy.split('. ').slice(1).join('. ')}</p>
        <p className={styles.note}>Member rates not affiliated with any hotel chain or airline.</p>
      </div>
    </footer>
  )
}
