import { useEffect, useMemo, useState } from "react";
import css from "./WorldApp.module.css";
import { PropDrillingWorldSelector } from "./worldSelector/WorldSelector";
import { PropDrillingWorldsViewer } from "./worldsViewer/WorldsViewer";
import { getNextWorld } from "../../zustand/data/solarSystemWorlds";
import type { World } from "../../zustand/data/types";

type Props = {
  onSnapshotChange?: (snapshot: {
    selectedWorldId: string;
    hello: { worlds: World[] };
  }) => void;
};

export function PropDrillingWorldApp({ onSnapshotChange }: Props) {
  const [allWorlds, setAllWorlds] = useState<World[]>([
    getNextWorld(),
    getNextWorld(),
    getNextWorld(),
  ]);
  const [activeWorldId, setActiveWorldId] = useState<string>("ven002");

  // used to update the debug window
  useEffect(() => {
    if (!onSnapshotChange) return;
    onSnapshotChange({
      selectedWorldId: activeWorldId,
      hello: { worlds: allWorlds },
    });
  }, [allWorlds, activeWorldId, onSnapshotChange]);

  const worldOptions = allWorlds.map((world, index) => ({
    id: world.id,
    label: `${index + 1}. ${world.id}`,
    details: {
      index,
      upperName: world.name.toUpperCase(),
      original: { ...world },
    },
  }));

  const worlds = allWorlds.map((world, index) => ({
    ...world,
    listIndex: index,
    isCurrent: world.id === activeWorldId,
    annotations: {
      shoutyName: world.name.toUpperCase(),
      fingerprint: `${world.id}-${index}`,
    },
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
      <PropDrillingWorldsViewer worlds={worlds} />
    </div>
  );
}
