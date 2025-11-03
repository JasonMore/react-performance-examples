import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import css from "../../../../components/css/worldsViewer/WorldList.module.css";
import { World } from "./World.tsx";
import type { WorldViewerItem } from "./WorldsViewer.tsx";

type Props = {
  worlds: WorldViewerItem[];
};

export function WorldList(props: Props) {
  const { worlds } = props;
  return (
    <div className={css.worldList}>
      <div className={css.textXsBold}>
        World List <RenderToken forceRender={props} />
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
