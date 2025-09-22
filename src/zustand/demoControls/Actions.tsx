import css from "./Actions.module.css";
import { useExampleStore } from "../UseExampleStore.tsx";
import { getRandomWorldName } from "../solarSystemWorlds.ts";

export function Actions() {
  const addWorld = useExampleStore((s) => s.addWorld);

  return (
    <div className={css.actions}>
      <button
        className={css.secondaryButton}
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
