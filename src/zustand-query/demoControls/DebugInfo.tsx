import css from "./DebugInfo.module.css";
import sharedStyles from "../components/shared.module.css";
import { useWorldData } from "../hooks/useWorldData";
import { useSelectionStore } from "../data/SelectionStore";

export function DebugInfo() {
  const { worlds, isLoading, isError } = useWorldData();
  const selectedWorldId = useSelectionStore((s) => s.selectedWorldId);

  const snapshot = {
    selectedWorldId,
    query: {
      isLoading,
      isError,
      worldsCount: worlds.length,
    },
    hello: { worlds }, // Keep same structure as original for consistency
  };

  return (
    <div className={`${sharedStyles.card} ${css.snapshot}`}>
      <div className={css.snapshotTitle}>Store snapshot</div>
      <pre className={css.pre}>{JSON.stringify(snapshot, null, 2)}</pre>
    </div>
  );
}