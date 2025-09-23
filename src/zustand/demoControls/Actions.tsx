import css from "./Actions.module.css";
import { useWorldStore } from "../WorldStore.tsx";
import { getRandomWorldData } from "../solarSystemWorlds.ts";

export function Actions() {
  const addWorld = useWorldStore((s) => s.addWorld);

  return (
    <div className={css.actions}>
      <button
        className={css.primaryButton}
        onClick={() => {
          const worldData = getRandomWorldData();
          if (worldData) {
            addWorld({
              id: Math.random().toString(36).slice(2, 7),
              ...worldData,
            });
          }
        }}
      >
        Add world
      </button>
    </div>
  );
}
