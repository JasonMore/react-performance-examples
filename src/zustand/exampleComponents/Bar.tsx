import { memo } from 'react'
import { useStore } from '../UseStore.tsx'
import styles from '../ZustandRenderDemo.module.css'
import { RenderToken } from '../RenderToken.tsx'

export const Bar = memo(() => {
  const world = useStore((s) => s.hello.world)
  console.count('Bar render')
  return (
    <div className={styles.bar}>
      <div className={styles.textXsBold}>Bar</div>
      <div className={styles.textXs}>world length: <code>{world.length}</code></div>
      <RenderToken/>
    </div>
  )
})