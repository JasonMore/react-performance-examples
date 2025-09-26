import { memo } from "react";
import { RenderToken } from "../../../shared/components/RenderToken";
import css from "./WorldList.module.css";
import { World } from "./World";
import type { WorldViewerItem } from "./WorldsViewer.tsx";

type Props = {
  worlds: WorldViewerItem[];
};

export const WorldList = memo(({ worlds }: Props) => {
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
            <World world={world} />
          </li>
        ))}
      </ul>
    </div>
  );
});

WorldList.displayName = "WorldList";
