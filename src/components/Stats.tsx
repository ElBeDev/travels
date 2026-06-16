import { STATS } from '../data/content'
import styles from './Stats.module.css'

const ITEMS = [...STATS, ...STATS, ...STATS]

export default function Stats() {
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
