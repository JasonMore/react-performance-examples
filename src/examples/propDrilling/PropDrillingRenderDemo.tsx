import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./PropDrillingRenderDemo.module.css";
import { RenderToken } from "../../shared/components/RenderToken.tsx";
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
      <nav className={css.nav}>
        <Link to="/" className={css.homeLink}>
          ← Back to Home
        </Link>
      </nav>
      <h1>Optimized Prop Drilling Demo</h1>
      <p>
        This demo shows an optimized version of prop drilling with proper React
        performance patterns. State is still kept at the top level and threaded
        through props, but now uses <code>useMemo</code>,{" "}
        <code>useCallback</code>, and proper memoization to prevent unnecessary
        re-renders.
      </p>
      <p>
        The <code>RenderToken</code> <RenderToken /> shows significantly reduced
        render counts compared to the naive version, demonstrating how proper
        optimization techniques can make prop drilling performant when used
        correctly.
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
