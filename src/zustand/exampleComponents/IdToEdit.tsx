import { memo } from 'react'
import { useStore } from '../UseStore.tsx'
import sharedStyles from './shared.module.css'
import styles from './IdToEdit.module.css'
import { RenderToken } from '../RenderToken.tsx'

export const IdToEdit = memo(() => {
  const editId = useStore((s) => s.editId)
  console.count('IdToEdit render')
  return (
    <div className={sharedStyles.card}>
      <div className={sharedStyles.cardTitle}>IdToEdit</div>
      <div className={styles.textSm}>editId: <code>{editId}</code></div>
      <RenderToken/>
    </div>
  )
})
