import styles from './Actions.module.css'
import { useStore } from '../UseStore.tsx'
import { useMemo } from 'react'

export function Actions() {
  const setEditId = useStore((s) => s.setEditId);
  const setWorld = useStore((s) => s.setWorld);
  const editId = useStore((s) => s.editId);
  const world = useStore((s) => s.hello.world);

  // next id to set, just for the demo
  const nextId = useMemo(() => (editId === "def456" ? "ytch789" : "def456"), [editId]);


  return (
    <div className={styles.actions}>
      <button
        className={styles.primaryButton}
        onClick={() => setEditId(nextId)}
      >
        Update editId → {nextId}
      </button>

      <button
        className={styles.secondaryButton}
        onClick={() => setWorld([...world, Math.random().toString(36).slice(2, 5)])}
      >
        Update world (changes reference)
      </button>
    </div>
  )
}
