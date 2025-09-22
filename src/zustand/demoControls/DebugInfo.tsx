import styles from './DebugInfo.module.css'
import { useStore } from '../UseStore.tsx'

export function DebugInfo() {
  const editId = useStore((s) => s.editId);
  const world = useStore((s) => s.hello.world);

  return (
    <div className={styles.snapshot}>
      <div className={styles.snapshotTitle}>Store snapshot</div>
      <pre className={styles.pre}>{JSON.stringify({ editId, hello: { world } }, null, 2)}</pre>
    </div>
  )
}
