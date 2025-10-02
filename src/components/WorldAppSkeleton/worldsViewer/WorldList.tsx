import css from "../../css/worldsViewer/WorldList.module.css";
import { RenderToken } from "../../perf/RenderToken.tsx";
import { World } from "./World.tsx";

export const WorldList = () => {
  return (
    <div className={css.worldList}>
      <div className={css.textXsBold}>
        WorldList <RenderToken />
      </div>
      <div className={css.textXs}>
        world length: <strong>3</strong>
      </div>
      <ul>
        <li>
          <World />
        </li>

        <li>
          <World />
        </li>

        <li>
          <World />
        </li>
      </ul>
    </div>
  );
};
