import css from "./Actions.module.css";
import { useExampleStore } from "../UseExampleStore.tsx";
import { getRandomWorldData } from "../solarSystemWorlds.ts";

export function Actions() {
  const addWorld = useExampleStore((s) => s.addWorld);

  return (
    <div className={css.actions}>
      <button
        className={css.secondaryButton}
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
