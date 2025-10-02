import { useState, useEffect } from "react";
import css from "../../components/css/DemoLayout.module.css";
import { RenderToken } from "../../components/perf/RenderToken.tsx";
import type { World } from "../../types/World.ts";
import { PropDrillingWorldApp } from "./exampleComponents/WorldApp.tsx";
import { DebugInfo } from "../../components/DebugInfo.tsx";
import { fetchWorlds } from "../../api/worlds.ts";

type Snapshot = {
  selectedWorldId: string;
  hello: { worlds: World[] };
};

export function PropDrillingNaiveRenderDemo() {
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);
  const [worlds, setWorlds] = useState<World[]>([]);

  // Fetch data with useEffect
  useEffect(() => {
    fetchWorlds().then((data) => {
      setWorlds(data.worlds);
    });
  }, []);

  return (
    <div className={css.app}>
      <h1>Prop Drilling Render Demo</h1>
      <p>
        This intentionally clumsy demo uses anti-patterns commonly seen with
        prop drilling. All state sits at the top of the tree, forcing every
        child to receive new prop objects each render—causing relentless prop
        churn, broken memoization, and a cascade of unnecessary updates.
      </p>
      <p>
        The <code>RenderToken</code> <RenderToken /> shows render counts. When
        that value increases, the component just re-rendered. Expect the counter
        to spike across multiple components compared to healthier patterns, so
        use it to spot how far the churn propagates.
      </p>

      <h2>Instructions:</h2>
      <p>
        Click <strong>Add world</strong> to simulate changing data. Select a
        world from the <strong>World Selector</strong> to change the highlighted
        item.
      </p>

      <PropDrillingWorldApp
        worlds={worlds}
        setWorlds={setWorlds}
        onSnapshotChange={setSnapshot}
      />
      <DebugInfo snapshot={snapshot} title="Top level state snapshot" />
    </div>
  );
}
