import styles from './ZustandRenderDemo.module.css'
import tokenStyle from './RenderToken.module.css'
import { Foo } from './exampleComponents/Foo.tsx'
import { IdToEdit } from './exampleComponents/IdToEdit.tsx'
import { Actions } from './demoControls/Actions.tsx'
import { DebugInfo } from './demoControls/DebugInfo.tsx'

export function ZustandRenderDemo() {

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Zustand Render Demo</h1>
      <p className={styles.description}>
        This demo shows you can share state without using prop drilling.
        The <code>IdToEdit</code> and <code>Foo</code> components are sibling components.
        The <code>Bar</code> component is a child component of <code>Foo</code>.
      </p>
      <p className={styles.description}>
        The <span className={tokenStyle.renderToken}>#8c7yv</span> is a random string generated on each render. That value only changes on render.
      </p>
      <p className={styles.description}>
        Click <strong>Update editId</strong> to change only <code>editId</code>. The
        <code>hello.world</code> array reference stays the same. You should see
        <strong> IdToEdit</strong> render, while <strong>Foo</strong> and <strong>Bar</strong> do not.
        Open the console to view <code>console.count</code> logs.
      </p>

      <Actions />

      <div className={styles.grid}>
        <IdToEdit />
        <Foo />
      </div>

      <DebugInfo />
    </div>
  );
}
