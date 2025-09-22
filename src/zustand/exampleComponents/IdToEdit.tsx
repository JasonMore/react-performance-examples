// -------------------------------
// Components
// -------------------------------
import React, { memo } from 'react'
import { useStore } from '../UseStore.tsx'
import styles from '../ZustandRenderDemo.module.css'
import { RenderToken } from '../RenderToken.tsx'

export const IdToEdit = memo(() => {
  const editId = useStore((s) => s.editId)
  console.count('IdToEdit render')
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>IdToEdit</div>
      <div className={styles.textSm}>editId: <code>{editId}</code></div>
      <RenderToken/>
    </div>
  )
})