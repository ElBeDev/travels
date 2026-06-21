import { useLang } from '../i18n'
import styles from './Stats.module.css'

export default function Stats() {
  const { t } = useLang()
  const ITEMS = [...t.stats, ...t.stats, ...t.stats]
  return (
    <section className={styles.section}>
      <div className={styles.track}>
        {ITEMS.map((s, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.num}>{s.num}</span>
            <span className={styles.lbl}>{s.label}</span>
            <span className={styles.sep}>—</span>
          </div>
        ))}
      </div>
    </section>
  )
}
