import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import css from "../../../../components/css/worldsViewer/WorldList.module.css";
import { World } from "./World.tsx";
import type { WorldViewerItem } from "./WorldsViewer.tsx";

type Props = {
  worlds: WorldViewerItem[];
};

// React Compiler will automatically optimize this component
export function WorldList({ worlds }: Props) {
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
}
