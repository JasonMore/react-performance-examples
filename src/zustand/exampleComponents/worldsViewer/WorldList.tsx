import { memo } from "react";
import { useWorldStore } from "../../data/WorldStore";
import css from "./WorldList.module.css";
import { RenderToken } from "../../../shared/components/RenderToken";
import { World } from "./World";

export const WorldList = memo(() => {
  const worlds = useWorldStore((s) => s.hello.worlds);
  return (
    <div className={css.worldList}>
      <div className={css.textXsBold}>
        World List <RenderToken />
      </div>
      <div className={css.textXs}>
        world length: <strong>{worlds.length}</strong>
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
