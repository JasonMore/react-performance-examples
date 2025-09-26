import { memo } from "react";
import { RenderToken } from "../../../shared/components/RenderToken";
import css from "./WorldList.module.css";
import { PropDrillingWorld } from "./World";
import type { WorldViewerItem } from "./WorldsViewer.tsx";

type Props = {
  worlds: WorldViewerItem[];
};

export const PropDrillingWorldList = memo(({ worlds }: Props) => {
  return (
    <div className={css.worldList}>
      <div className={css.textXsBold}>
        World List <RenderToken />
      </div>
      <div className={css.textXs}>
        world length: <strong>{worlds.length}</strong>
      </div>
      <ul>
        {worlds.map((world) => (
          <li key={world.id}>
            <PropDrillingWorld world={world} />
          </li>
        ))}
      </ul>
    </div>
  );
});

PropDrillingWorldList.displayName = "PropDrillingWorldList";
