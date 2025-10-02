import { memo } from "react";
import css from "../../../../components/css/worldsViewer/WorldList.module.css";
import { RenderToken } from "../../../../components/perf/RenderToken";
import { World } from "./World";
import { useGetWorlds } from "../../data/WorldData.ts";

export const WorldList = memo(() => {
  const { data } = useGetWorlds();

  return (
    <div className={css.worldList}>
      <div className={css.textXsBold}>
        World List <RenderToken />
      </div>
      <div className={css.textXs}>
        world length: <strong>{data?.worlds.length}</strong>
      </div>
      <ul>
        {data?.worlds.map(({ id }) => (
          <li key={id}>
            <World id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
});

WorldList.displayName = "WorldList";
