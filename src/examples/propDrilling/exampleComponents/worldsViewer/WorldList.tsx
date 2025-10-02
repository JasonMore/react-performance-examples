import { memo } from "react";
import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import css from "./WorldList.module.css";
import { World } from "./World.tsx";
import type { World as WorldType } from "../../data/types.ts";

type Props = {
  worlds: WorldType[];
  activeWorldId: string;
};

export const WorldList = memo(({ worlds, activeWorldId }: Props) => {
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
            <World world={world} isActive={world.id === activeWorldId} />
          </li>
        ))}
      </ul>
    </div>
  );
});

WorldList.displayName = "WorldList";
