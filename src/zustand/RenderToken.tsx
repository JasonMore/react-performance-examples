// Small helper to give each render a unique visual token
import styles from './ZustandRenderDemo.module.css'

export const RenderToken =() => {
  const token = Math.random().toString(36).slice(2, 7)
  return <span className={styles.renderToken}>#{token}</span>
}