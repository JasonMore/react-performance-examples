import { useEffect, useState } from "react";
import css from "./WorldApp.module.css";
import { PropDrillingWorldSelector } from "./worldSelector/WorldSelector";
import { WorldsViewer } from "./worldsViewer/WorldsViewer";
import { getNextWorld } from "../data/solarSystemWorlds";
import type { World } from "../data/types";
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
export const PropDrillingWorldApp = memo(({ onSnapshotChange }: Props) => {
  const [allWorlds, setAllWorlds] = useState<World[]>(starterWorlds);
  const [activeWorldId, setActiveWorldId] = useState<string>("ven002");

  // used to update the debug window
  useEffect(() => {
    if (!onSnapshotChange) return;
    onSnapshotChange({
      selectedWorldId: activeWorldId,
      hello: { worlds: allWorlds },
    });
  }, [allWorlds, activeWorldId, onSnapshotChange]);

  const worldOptions = allWorlds.map((world) => ({
    id: world.id,
  }));

  const worlds = allWorlds.map((world, index) => ({
    ...world,
    listIndex: index,
    isCurrent: world.id === activeWorldId,
  }));

  return (
    <div className={css.grid}>
      <div className={css.selectorPane}>
        <PropDrillingWorldSelector
          activeWorld={activeWorldId}
          worldOptions={worldOptions}
          chooseWorld={(id: string) => {
            setActiveWorldId(id);
          }}
          addWorld={() => {
            setAllWorlds([...allWorlds, getNextWorld()]);
          }}
        />
      </div>
      <WorldsViewer worlds={worlds} />
    </div>
  );
});
