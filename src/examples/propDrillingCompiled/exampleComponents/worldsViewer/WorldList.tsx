import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import css from "../../../../components/css/worldsViewer/WorldList.module.css";
import { World } from "./World.tsx";
import type { World as WorldType } from "../../../../api/worlds";

type Props = {
  worlds: WorldType[];
  activeWorldId: string;
};

// React Compiler will automatically optimize this component
export function WorldList({ worlds, activeWorldId }: Props) {
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
}
