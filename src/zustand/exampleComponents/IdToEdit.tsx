import { memo } from "react";
import { useExampleStore } from "../UseExampleStore.tsx";
import styles from "./IdToEdit.module.css";
import { RenderToken } from "../RenderToken.tsx";
import { WorldIdItem } from "./WorldIdItem.tsx";
import sharedStyles from "./shared.module.css";

export const IdToEdit = memo(() => {
  const worlds = useExampleStore((s) => s.hello.worlds);

  return (
    <div className={sharedStyles.card}>
      <div className={sharedStyles.cardTitle}>IdToEdit</div>

      <ul className={styles.worldList}>
        {worlds.map((w) => (
          <WorldIdItem key={w.id} id={w.id} />
        ))}
      </ul>
      <RenderToken />
    </div>
  );
});

IdToEdit.displayName = "IdToEdit";
