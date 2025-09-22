import styles from './ZustandRenderDemo.module.css'
import { Foo } from './exampleComponents/Foo.tsx'
import { IdToEdit } from './exampleComponents/IdToEdit.tsx'
import { Actions } from './demoControls/Actions.tsx'
import { DebugInfo } from './demoControls/DebugInfo.tsx'

export function ZustandRenderDemo() {

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Zustand Render Demo</h1>
      <p className={styles.description}>
        Click <strong>Update editId</strong> to change only <code>editId</code>. The
        <code>hello.world</code> array reference stays the same. You should see
        <strong> IdToEdit</strong> render, while <strong>Foo</strong> and <strong>Bar</strong> do not.
        Open the console to view <code>console.count</code> logs.
      </p>

      <Actions/>

      <div className={styles.grid}>
        <IdToEdit />
        <Foo />
      </div>

      <DebugInfo/>
    </div>
  );
}
