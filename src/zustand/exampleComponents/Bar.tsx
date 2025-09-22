import { memo } from "react";
import { useExampleStore } from "../UseExampleStore.tsx";
import styles from "./Bar.module.css";
import { RenderToken } from "../RenderToken.tsx";
import { World } from "./World.tsx";

export const Bar = memo(() => {
  const worlds = useExampleStore((s) => s.hello.worlds);
  return (
    <div className={styles.bar}>
      <div className={styles.textXsBold}>Bar</div>
      <div className={styles.textXs}>
        world length: <code>{worlds.length}</code>
      </div>
      <ul>
        {worlds.map(({ id }) => (
          <li key={id}>
            <World id={id} />
          </li>
        ))}
      </ul>
      <RenderToken />
    </div>
  );
});

Bar.displayName = "Bar";
