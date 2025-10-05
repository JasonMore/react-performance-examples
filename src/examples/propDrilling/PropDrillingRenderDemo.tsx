import { useState } from "react";
import { useLoaderData, useRevalidator } from "react-router-dom";
import css from "../../components/css/DemoLayout.module.css";
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
        This demo highlights an optimized prop drilling flow. State still lives
        at the top, but children receive stable data and callbacks via
        <code>React.memo</code>, <code>useMemo</code>, and
        <code>useCallback</code>. Keeping shapes consistent across layers
        prevents prop churn and keeps memoized children from re-rendering
        unnecessarily.
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
