import { memo } from "react";
import { useWorldData } from "../../hooks/useWorldData";
import css from "./WorldSelector.module.css";
import { RenderToken } from "../../RenderToken";
import { WorldIdButton } from "./WorldIdButton";
import sharedStyles from "../shared.module.css";
import { AddWorld } from "./AddWorld";

export const WorldSelector = memo(() => {
  const { worlds, isLoading, isError, error } = useWorldData();

  if (isLoading) {
    return (
      <div className={`${sharedStyles.card} ${css.root}`}>
        <div className={sharedStyles.cardTitle}>
          World Selector <RenderToken />
        </div>
        <div>Loading worlds...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={`${sharedStyles.card} ${css.root}`}>
        <div className={sharedStyles.cardTitle}>
          World Selector <RenderToken />
        </div>
        <div style={{ color: 'red' }}>
          Error loading worlds: {error?.message || 'Unknown error'}
        </div>
      </div>
    );
  }

  return (
    <div className={`${sharedStyles.card} ${css.root}`}>
      <div className={sharedStyles.cardTitle}>
        World Selector <RenderToken />
      </div>
      <AddWorld />
      <ul className={css.worldList}>
        {worlds.map((w) => (
          <WorldIdButton key={w.id} id={w.id} />
        ))}
      </ul>
    </div>
  );
});

WorldSelector.displayName = "WorldsSelector";