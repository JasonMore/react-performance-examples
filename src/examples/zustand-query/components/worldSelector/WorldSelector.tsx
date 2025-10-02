import { memo } from "react";
import css from "./WorldSelector.module.css";
import { RenderToken } from "../../../../components/perf/RenderToken";
import { WorldIdButton } from "./WorldIdButton";
import sharedStyles from "../shared.module.css";
import { AddWorld } from "./AddWorld";
import { useGetWorlds } from "../../data/WorldData.ts";

export const WorldSelector = memo(() => {
  const { data } = useGetWorlds();

  return (
    <div className={`${sharedStyles.card} ${css.root}`}>
      <div className={sharedStyles.cardTitle}>
        World Selector <RenderToken />
      </div>
      <AddWorld />
      <ul className={css.worldList}>
        {data?.worlds.map((w) => (
          <WorldIdButton key={w.id} id={w.id} />
        ))}
      </ul>
    </div>
  );
});

WorldSelector.displayName = "WorldsSelector";
