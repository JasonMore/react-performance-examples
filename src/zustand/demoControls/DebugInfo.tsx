import css from "./DebugInfo.module.css";
import { useWorldStore } from "../data/WorldStore.tsx";

export function DebugInfo() {
  const editId = useWorldStore((s) => s.selectedWorldId);
  const world = useWorldStore((s) => s.hello.worlds);

  return (
    <div className={css.snapshot}>
      <div className={css.snapshotTitle}>Store snapshot</div>
      <pre className={css.pre}>
        {JSON.stringify({ editId, hello: { world } }, null, 2)}
      </pre>
    </div>
  );
}
