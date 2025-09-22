import css from "./DebugInfo.module.css";
import { useExampleStore } from "../UseExampleStore.tsx";

export function DebugInfo() {
  const editId = useExampleStore((s) => s.editId);
  const world = useExampleStore((s) => s.hello.worlds);

  return (
    <div className={css.snapshot}>
      <div className={css.snapshotTitle}>Store snapshot</div>
      <pre className={css.pre}>
        {JSON.stringify({ editId, hello: { world } }, null, 2)}
      </pre>
    </div>
  );
}
