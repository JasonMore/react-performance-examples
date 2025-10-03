import { useState } from "react";
import { useLoaderData, useRevalidator } from "react-router-dom";
import css from "../../components/css/DemoLayout.module.css";
import { RenderToken } from "../../components/perf/RenderToken.tsx";
import { WorldApp } from "./exampleComponents/WorldApp.tsx";
import { PropDrillingDebugInfo } from "./demoControls/PropDrillingDebugInfo.tsx";
import type { World, WorldsResponse } from "../../api/worlds.ts";

type Snapshot = {
  selectedWorldId: string;
  hello: { worlds: World[] };
};

export function PropDrillingRenderDemo() {
  const data = useLoaderData() as WorldsResponse;
  const revalidator = useRevalidator();
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);

  return (
    <div className={css.app}>
      <h1>Optimized Prop Drilling Demo</h1>
      <p>
        This demo highlights an optimized prop drilling flow: state still lives
        at the top, but children receive stable data and callbacks via
        <code>React.memo</code>, <code>useMemo</code>, and{" "}
        <code>useCallback</code>. Keeping shapes consistent across layers
        prevents prop churn and keeps memoized children from re-rendering
        unnecessarily—even if a dedicated state store would still be leaner.
      </p>
      <p>
        The <code>RenderToken</code> <RenderToken /> shows render counts. When
        that value increases, the component just re-rendered. This demo shows
        noticeably lower counts across the tree than the naive version, making
        it easier to see how the optimizations pay off in practice.
      </p>

      <h2>Instructions:</h2>
      <p>
        Click <strong>Add world</strong> to simulate changing data. Select a
        world from the <strong>World Selector</strong> to change the highlighted
        item.
      </p>

      <WorldApp
        worlds={data?.worlds || []}
        onSnapshotChange={setSnapshot}
        revalidate={revalidator.revalidate}
      />
      <PropDrillingDebugInfo snapshot={snapshot} />
    </div>
  );
}
