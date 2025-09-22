import { memo } from "react";
import { useStore } from "../UseStore.tsx";
import styles from "./Bar.module.css";
import { RenderToken } from "../RenderToken.tsx";

export const Bar = memo(() => {
  const worlds = useStore((s) => s.hello.worlds);
  console.count("Bar render");
  return (
    <div className={styles.bar}>
      <div className={styles.textXsBold}>Bar</div>
      <div className={styles.textXs}>
        world length: <code>{worlds.length}</code>
      </div>
      <RenderToken />
    </div>
  );
});
