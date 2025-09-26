import css from "./DebugInfo.module.css";
import sharedStyles from "../exampleComponents/shared.module.css";
import { useWorldStore } from "../data/WorldStore.tsx";

export function DebugInfo() {
  const selectedWorldId = useWorldStore((s) => s.selectedWorldId);
  const worlds = useWorldStore((s) => s.hello.worlds);

  const snapshot = { selectedWorldId, hello: { worlds } };

  return (
    <div className={`${sharedStyles.card} ${css.snapshot}`}>
      <div className={css.snapshotTitle}>Store snapshot</div>
      <pre className={css.pre}>{JSON.stringify(snapshot, null, 2)}</pre>
    </div>
  );
}
