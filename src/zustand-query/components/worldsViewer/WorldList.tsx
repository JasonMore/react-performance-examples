import { memo } from "react";
import { useWorldData } from "../../hooks/useWorldData";
import css from "./WorldList.module.css";
import { RenderToken } from "../../RenderToken";
import { World } from "./World";

export const WorldList = memo(() => {
  const { worlds, isLoading } = useWorldData();
  
  return (
    <div className={css.worldList}>
      <div className={css.textXsBold}>
        World List <RenderToken />
      </div>
      <div className={css.textXs}>
        world length: <strong>{isLoading ? "Loading..." : worlds.length}</strong>
      </div>
      <ul>
        {worlds.map(({ id }) => (
          <li key={id}>
            <World id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
});

WorldList.displayName = "WorldList";