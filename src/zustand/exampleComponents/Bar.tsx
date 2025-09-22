import { memo } from "react";
import { useExampleStore } from "../UseExampleStore.tsx";
import css from "./Bar.module.css";
import { RenderToken } from "../RenderToken.tsx";
import { World } from "./World.tsx";

export const Bar = memo(() => {
  const worlds = useExampleStore((s) => s.hello.worlds);
  return (
    <div className={css.bar}>
      <div className={css.textXsBold}>Bar</div>
      <div className={css.textXs}>
        world length: <code>{worlds.length}</code>
        <RenderToken />
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

Bar.displayName = "Bar";
