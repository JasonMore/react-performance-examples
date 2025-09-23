import { memo } from "react";
import { useWorldStore } from "../../data/WorldStore";
import css from "./WorldSelector.module.css";
import { RenderToken } from "../../RenderToken";
import { WorldIdButton } from "./WorldIdButton";
import sharedStyles from "../shared.module.css";

export const WorldSelector = memo(() => {
  const worlds = useWorldStore((s) => s.hello.worlds);

  return (
    <div className={`${sharedStyles.card} ${css.root}`}>
      <div className={sharedStyles.cardTitle}>
        World Selector <RenderToken />
      </div>

      <ul className={css.worldList}>
        {worlds.map((w) => (
          <WorldIdButton key={w.id} id={w.id} />
        ))}
      </ul>
    </div>
  );
});

WorldSelector.displayName = "WorldsSelector";
