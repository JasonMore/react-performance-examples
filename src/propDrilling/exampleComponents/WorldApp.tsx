import { useEffect, useState } from "react";
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

type AppState = {
  timeline: { allWorlds: World[] };
  selections: { activeId: string };
};

const cloneWorlds = (worlds: World[]) => worlds.map((world) => ({ ...world }));

export function PropDrillingWorldApp({ onSnapshotChange }: Props) {
  const [appState, setAppState] = useState<AppState>(() => {
    const worlds: World[] = [];
    for (let i = 0; i < 3; i += 1) {
      worlds.push(getNextWorld());
    }
    const clonedSeed = cloneWorlds(worlds);
    return {
      timeline: { allWorlds: clonedSeed },
      selections: { activeId: clonedSeed[0]?.id ?? "" },
    };
  });

  useEffect(() => {
    if (!onSnapshotChange) return;
    onSnapshotChange({
      selectedWorldId: appState.selections.activeId,
      hello: { worlds: cloneWorlds(appState.timeline.allWorlds) },
    });
  }, [appState, onSnapshotChange]);

  const selectorPayload = {
    active: { id: appState.selections.activeId },
    options: appState.timeline.allWorlds.map((world, index) => ({
      id: world.id,
      label: `${index + 1}. ${world.id}`,
      details: {
        index,
        upperName: world.name.toUpperCase(),
        original: { ...world },
      },
    })),
  };

  const viewerPayload = {
    selectedId: appState.selections.activeId,
    items: appState.timeline.allWorlds.map((world, index) => ({
      ...world,
      listIndex: index,
      isCurrent: world.id === appState.selections.activeId,
      annotations: {
        shoutyName: world.name.toUpperCase(),
        fingerprint: `${world.id}-${index}`,
      },
    })),
  };

  return (
    <div className={css.grid}>
      <div className={css.selectorPane}>
        <PropDrillingWorldSelector
          selectorData={selectorPayload}
          actions={{
            chooseWorld: (id: string) => {
              setAppState((previous) => ({
                timeline: {
                  allWorlds: cloneWorlds(previous.timeline.allWorlds),
                },
                selections: { activeId: id },
              }));
            },
            addWorld: () => {
              setAppState((previous) => {
                const nextWorld = getNextWorld();
                if (!nextWorld) return previous;
                const expanded = cloneWorlds(previous.timeline.allWorlds);
                expanded.push({ ...nextWorld });
                return {
                  timeline: { allWorlds: expanded },
                  selections: { activeId: previous.selections.activeId },
                };
              });
            },
          }}
        />
      </div>
      <PropDrillingWorldsViewer data={viewerPayload} />
    </div>
  );
}
