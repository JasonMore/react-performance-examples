import { memo } from "react";
import { useWorldStore } from "../../data/WorldStore.tsx";
import css from "./WorldSelector.module.css";
import { RenderToken } from "../../../../shared/components/RenderToken.tsx";
import { WorldIdButton } from "./WorldIdButton.tsx";
import sharedStyles from "../shared.module.css";
import { AddWorld } from "./AddWorld.tsx";

export const WorldSelector = memo(() => {
  const worlds = useWorldStore((s) => s.hello.worlds);

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
