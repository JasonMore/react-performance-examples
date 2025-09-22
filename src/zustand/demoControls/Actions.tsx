import styles from "./Actions.module.css";
import { useExampleStore } from "../UseExampleStore.tsx";
import { getRandomWorldName } from "../solarSystemWorlds.ts";
import { WorldIdItem } from "./WorldIdItem.tsx";

export function Actions() {
  const addWorld = useExampleStore((s) => s.addWorld);
  const worlds = useExampleStore((s) => s.hello.worlds);

  return (
    <div className={styles.actions}>
      {/* Vertical list of world ids. Clicking one sets the editId for that world */}
      <ul className={styles.worldList}>
        {worlds.map((w) => (
          <WorldIdItem key={w.id} id={w.id} />
        ))}
      </ul>

      <button
        className={styles.secondaryButton}
        onClick={() =>
          addWorld({
            id: Math.random().toString(36).slice(2, 7),
            name: getRandomWorldName(),
          })
        }
      >
        Add world
      </button>
    </div>
  );
}
