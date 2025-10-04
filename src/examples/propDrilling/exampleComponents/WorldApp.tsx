import { useEffect, useState, useCallback, useRef } from "react";
import css from "../../../components/css/WorldApp.module.css";
import { WorldSelector } from "./worldSelector/WorldSelector.tsx";
import { WorldsViewer } from "./worldsViewer/WorldsViewer.tsx";
import { memo } from "react";
import { addWorld as apiAddWorld, type World } from "../../../api/worlds.ts";

type Props = {
  worlds: World[];
  revalidate: () => void;
  onSnapshotChange?: (snapshot: {
    selectedWorldId: string;
    hello: { worlds: World[] };
  }) => void;
};

// memo this component as it receives onSnapshotChange from the debug panel
export const WorldApp = memo(
  ({ worlds, revalidate, onSnapshotChange }: Props) => {
    const [activeWorldId, setActiveWorldId] = useState<string>("ven002");

    // Use ref to stabilize onSnapshotChange callback and prevent unnecessary effect runs
    const onSnapshotChangeRef = useRef(onSnapshotChange);

    // Update ref in useEffect to comply with React 19 rules
    useEffect(() => {
      onSnapshotChangeRef.current = onSnapshotChange;
    }, [onSnapshotChange]);

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

    const addWorld = useCallback(async () => {
      await apiAddWorld();
      revalidate();
    }, [revalidate]);

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
        <WorldsViewer worlds={worlds} activeWorldId={activeWorldId} />
      </div>
    );
  },
);

WorldApp.displayName = "WorldApp";
