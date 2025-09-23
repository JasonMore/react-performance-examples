import { memo } from "react";
import { useWorldStore } from "../../data/WorldStore.tsx";
import styles from "./WorldsSelector.module.css";
import { RenderToken } from "../../RenderToken.tsx";
import { WorldIdButton } from "./WorldIdButton.tsx";
import sharedStyles from "../shared.module.css";

export const WorldsSelector = memo(() => {
  const worlds = useWorldStore((s) => s.hello.worlds);

  return (
    <div className={sharedStyles.card}>
      <div className={sharedStyles.cardTitle}>
        World Selector <RenderToken />
      </div>

      <ul className={styles.worldList}>
        {worlds.map((w) => (
          <WorldIdButton key={w.id} id={w.id} />
        ))}
      </ul>
    </div>
  );
});

WorldsSelector.displayName = "WorldsSelector";
