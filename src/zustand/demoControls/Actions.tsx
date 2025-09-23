import css from "./Actions.module.css";
import { useWorldStore } from "../WorldStore.tsx";
import { getRandomWorldName } from "../solarSystemWorlds.ts";

export function Actions() {
  const addWorld = useWorldStore((s) => s.addWorld);

  return (
    <div className={css.actions}>
      <button
        className={css.primaryButton}
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
