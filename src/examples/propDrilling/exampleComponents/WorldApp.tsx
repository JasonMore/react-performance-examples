import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import css from "./WorldApp.module.css";
import { WorldSelector } from "./worldSelector/WorldSelector.tsx";
import { WorldsViewer } from "./worldsViewer/WorldsViewer.tsx";
import { getNextWorld } from "../data/solarSystemWorlds.ts";
import type { World } from "../data/types.ts";
import { memo } from "react";

type Props = {
  onSnapshotChange?: (snapshot: {
    selectedWorldId: string;
    hello: { worlds: World[] };
  }) => void;
};

// components render twice in dev mode so pulling this out for consistency
const starterWorlds = [getNextWorld(), getNextWorld(), getNextWorld()];

// memo this component as it receives onSnapshotChange from the debug panel
export const WorldApp = memo(({ onSnapshotChange }: Props) => {
  const [worlds, setWorlds] = useState<World[]>(starterWorlds);
  const [activeWorldId, setActiveWorldId] = useState<string>("ven002");

  // Use ref to stabilize onSnapshotChange callback and prevent unnecessary effect runs
  const onSnapshotChangeRef = useRef(onSnapshotChange);
  onSnapshotChangeRef.current = onSnapshotChange;

  const stableOnSnapshotChange = useCallback(
    (snapshot: { selectedWorldId: string; hello: { worlds: World[] } }) => {
      onSnapshotChangeRef.current?.(snapshot);
    },
    [],
  );

  // Memoize event handlers to provide stable references
  const chooseWorld = useCallback((id: string) => {
    setActiveWorldId(id);
  }, []);

  const addWorld = useCallback(() => {
    setWorlds((prev) => [...prev, getNextWorld()]);
  }, []);

  // used to update the debug window
  useEffect(() => {
    if (!onSnapshotChangeRef.current) return;
    stableOnSnapshotChange({
      selectedWorldId: activeWorldId,
      hello: { worlds: worlds },
    });
  }, [worlds, activeWorldId, stableOnSnapshotChange]);

  return (
    <div className={css.grid}>
      <div className={css.selectorPane}>
        <WorldSelector
          activeWorld={activeWorldId}
          worlds={worlds}
          chooseWorld={chooseWorld}
          addWorld={addWorld}
        />
      </div>
      <WorldsViewer worlds={worlds} />
    </div>
  );
});

WorldApp.displayName = "WorldApp";
