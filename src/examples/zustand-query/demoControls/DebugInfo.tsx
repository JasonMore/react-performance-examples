import { memo } from "react";
import css from "../../../components/css/DebugInfo.module.css";
import sharedStyles from "../../../components/css/shared.module.css";
import { useGetWorlds } from "../data/WorldData.ts";
import { useWorldStore } from "../../zustand/data/WorldStore.tsx";

export const DebugInfo = memo(() => {
  const selectedWorldId = useWorldStore((s) => s.selectedWorldId);
  const { data } = useGetWorlds();

  const snapshot = { selectedWorldId, hello: { worlds: data?.worlds } };

  return (
    <div className={`${sharedStyles.card} ${css.snapshot}`}>
      <div className={css.snapshotTitle}>Store snapshot</div>
      <pre className={css.pre}>{JSON.stringify(snapshot, null, 2)}</pre>
    </div>
  );
});

DebugInfo.displayName = "DebugInfo";
