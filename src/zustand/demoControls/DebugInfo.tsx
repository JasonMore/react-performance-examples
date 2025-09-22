import styles from "./DebugInfo.module.css";
import { useExampleStore } from "../UseExampleStore.tsx";

export function DebugInfo() {
  const editId = useExampleStore((s) => s.editId);
  const world = useExampleStore((s) => s.hello.worlds);

  return (
    <div className={styles.snapshot}>
      <div className={styles.snapshotTitle}>Store snapshot</div>
      <pre className={styles.pre}>
        {JSON.stringify({ editId, hello: { world } }, null, 2)}
      </pre>
    </div>
  );
}
