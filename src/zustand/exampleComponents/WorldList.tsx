import { memo } from "react";
import { useWorldStore } from "../WorldStore.tsx";
import css from "./WorldList.module.css";
import { RenderToken } from "../RenderToken.tsx";
import { World } from "./World.tsx";

export const WorldList = memo(() => {
  const worlds = useWorldStore((s) => s.hello.worlds);
  return (
    <div className={css.worldList}>
      <div className={css.textXsBold}>
        World List <RenderToken />
      </div>
      <div className={css.textXs}>
        world length: <code>{worlds.length}</code>
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
