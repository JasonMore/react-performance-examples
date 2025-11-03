import { useState } from "react";
import { useLoaderData, useRevalidator } from "react-router-dom";
import css from "../../components/css/DemoLayout.module.css";
import { WorldApp } from "./exampleComponents/WorldApp.tsx";
import { DebugInfo } from "../../components/DebugInfo.tsx";
import type { World, WorldsResponse } from "../../api/worlds.ts";

type Snapshot = {
  selectedWorldId: string;
  hello: { worlds: World[] };
};

export function PropDrillingCompiledRenderDemo() {
  const data = useLoaderData() as WorldsResponse;
  const revalidator = useRevalidator();
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);

  return (
    <div className={css.app}>
      <h1>React Compiler Prop Drilling Demo</h1>
      <p>
        This demo uses the <strong>React Compiler</strong> to automatically optimize
        prop drilling without manual memoization. The compiler automatically memoizes
        components and callbacks, providing similar performance to the manually
        optimized version but without <code>React.memo</code>, <code>useMemo</code>,
        or <code>useCallback</code>.
      </p>

      <WorldApp
        worlds={data?.worlds || []}
        onSnapshotChange={setSnapshot}
        revalidate={revalidator.revalidate}
      />
      <DebugInfo snapshot={snapshot} title="Top level state snapshot" />
    </div>
  );
}
