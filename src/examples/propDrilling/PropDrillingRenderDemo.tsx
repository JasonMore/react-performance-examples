import { useState } from "react";
import css from "../../components/css/DemoLayout.module.css";
import { RenderToken } from "../../components/perf/RenderToken.tsx";
import type { World } from "../zustand/data/types.ts";
import { WorldApp } from "./exampleComponents/WorldApp.tsx";
import { PropDrillingDebugInfo } from "./demoControls/PropDrillingDebugInfo.tsx";

type Snapshot = {
  selectedWorldId: string;
  hello: { worlds: World[] };
};

export function PropDrillingRenderDemo() {
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);

  return (
    <div className={css.app}>
      <h1>Optimized Prop Drilling Demo</h1>
      <p>
        This demo shows an optimized version of prop drilling. State is kept at
        the top level and passed to children through prop drilling. By not
        transforming data through layers, when combined with memoization, you
        can prevent unnecessary re-renders. Unfortunately it will not be as
        efficient as not prop drilling demos.
      </p>
      <p>
        The <code>RenderToken</code> <RenderToken /> shows render counts. When
        that value increases, the component just re-rendered. This demo has
        shows significantly reduced render counts compared to the naive version.
        Proper optimization techniques can make prop drilling performant when
        used correctly.
      </p>

      <h2>Instructions:</h2>
      <p>
        Click <strong>Add world</strong> to simulate changing data. Select a
        world from the <strong>World Selector</strong> to change the highlighted
        item.
      </p>

      <WorldApp onSnapshotChange={setSnapshot} />
      <PropDrillingDebugInfo snapshot={snapshot} />
    </div>
  );
}
