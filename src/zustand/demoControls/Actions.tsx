import css from "./Actions.module.css";
import { useWorldStore } from "../data/WorldStore.tsx";
import { getNextWorld } from "../data/solarSystemWorlds.ts";

export function Actions() {
  const addWorld = useWorldStore((s) => s.addWorld);

  return (
    <div className={css.actions}>
      <button
        className={css.primaryButton}
        onClick={() => {
          const worldData = getNextWorld();
          if (worldData) {
            addWorld({
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
