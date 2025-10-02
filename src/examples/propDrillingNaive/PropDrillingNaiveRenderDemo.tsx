import { useState } from "react";
import css from "../../components/css/DemoLayout.module.css";
import { RenderToken } from "../../components/perf/RenderToken.tsx";
import type { World } from "../zustand/data/types.ts";
import { PropDrillingWorldApp } from "./exampleComponents/WorldApp.tsx";
import { PropDrillingDebugInfo } from "./demoControls/PropDrillingDebugInfo.tsx";

type Snapshot = {
  selectedWorldId: string;
  hello: { worlds: World[] };
};

export function PropDrillingNaiveRenderDemo() {
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);

  return (
    <div className={css.app}>
      <h1>Prop Drilling Render Demo</h1>
      <p>
        This intentionally clumsy demo uses anit-patterns commonly used with
        prop drilling. All state is at the top of the component tree, and
        travels to children through prop drilling.
      </p>
      <p>
        The <code>RenderToken</code> <RenderToken /> shows render counts. When
        that value increases, the component just re-rendered. It will be much
        higher than a well implemented example.
      </p>

      <h2>Instructions:</h2>
      <p>
        Click <strong>Add world</strong> to simulate changing data. Select a
        world from the <strong>World Selector</strong> to change the highlighted
        item.
      </p>

      <PropDrillingWorldApp onSnapshotChange={setSnapshot} />
      <PropDrillingDebugInfo snapshot={snapshot} />
    </div>
  );
}
