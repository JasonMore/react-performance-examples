import { memo } from 'react'
import styles from '../ZustandRenderDemo.module.css'
import { Bar } from './Bar.tsx'
import { RenderToken } from '../RenderToken.tsx'

export const Foo = memo(() => {
  console.count('Foo render')
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>Foo</div>
      <Bar/>
      <RenderToken/>
    </div>
  )
})