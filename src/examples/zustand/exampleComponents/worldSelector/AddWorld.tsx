import css from "./AddWorld.module.css";
import { useWorldStore } from "../../data/WorldStore.tsx";
import { getNextWorld } from "../../data/solarSystemWorlds.ts";
import { memo } from "react";

export const AddWorld = memo(() => {
  const addWorld = useWorldStore((s) => s.addWorld);

  return (
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
  );
});

AddWorld.displayName = "AddWorld";
