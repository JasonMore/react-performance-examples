import { useEffect, useState } from "react";
import css from "../../../components/css/WorldApp.module.css";
import { WorldSelector } from "./worldSelector/WorldSelector.tsx";
import { WorldsViewer } from "./worldsViewer/WorldsViewer.tsx";
import { addWorld as apiAddWorld, type World } from "../../../api/worlds.ts";

type Props = {
  worlds: World[];
  revalidate: () => void;
  onSnapshotChange?: (snapshot: {
    selectedWorldId: string;
    hello: { worlds: World[] };
  }) => void;
};

export function WorldApp({ worlds, revalidate, onSnapshotChange }: Props) {
  const [activeWorldId, setActiveWorldId] = useState<string>("ven002");

  // Event handlers - React Compiler will memoize these automatically
  const chooseWorld = (id: string) => {
    setActiveWorldId(id);
  };

  const addWorld = async () => {
    await apiAddWorld();
    revalidate();
  };

  // used to update the debug window
  useEffect(() => {
    if (!onSnapshotChange) return;
    onSnapshotChange({
      selectedWorldId: activeWorldId,
      hello: { worlds },
    });
  }, [worlds, activeWorldId, onSnapshotChange]);

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
}
