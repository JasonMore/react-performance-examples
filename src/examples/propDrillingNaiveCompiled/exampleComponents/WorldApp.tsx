import { useEffect, useState } from "react";
import css from "../../../components/css/WorldApp.module.css";
import { PropDrillingWorldSelector } from "./worldSelector/WorldSelector.tsx";
import { WorldsViewer } from "./worldsViewer/WorldsViewer.tsx";
import { addWorld as apiAddWorld, type World } from "../../../api/worlds.ts";
import { fetchWorlds } from "../../../api/worlds.ts";

type Props = {
  worlds: World[];
  setWorlds: React.Dispatch<React.SetStateAction<World[]>>;
  onSnapshotChange?: (snapshot: {
    selectedWorldId: string;
    hello: { worlds: World[] };
  }) => void;
};

// React Compiler will automatically optimize this component
export function PropDrillingWorldApp({ worlds, setWorlds, onSnapshotChange }: Props) {
  const [activeWorldId, setActiveWorldId] = useState<string>("ven002");

  // used to update the debug window
  useEffect(() => {
    if (!onSnapshotChange) return;
    onSnapshotChange({
      selectedWorldId: activeWorldId,
      hello: { worlds },
    });
  }, [worlds, activeWorldId, onSnapshotChange]);

  const worldOptions = worlds.map((world) => ({
    id: world.id,
  }));

  const worldsWithCurrent = worlds.map((world, index) => ({
    ...world,
    listIndex: index,
    isCurrent: world.id === activeWorldId,
  }));

  const handleAddWorld = async () => {
    await apiAddWorld();
    const data = await fetchWorlds();
    setWorlds(data.worlds);
  };

  return (
    <div className={css.grid}>
      <div className={css.selectorPane}>
        <PropDrillingWorldSelector
          activeWorld={activeWorldId}
          worldOptions={worldOptions}
          chooseWorld={(id: string) => {
            setActiveWorldId(id);
          }}
          addWorld={handleAddWorld}
        />
      </div>
      <WorldsViewer worlds={worldsWithCurrent} />
    </div>
  );
}
