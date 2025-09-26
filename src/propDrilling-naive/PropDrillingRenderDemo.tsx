import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./PropDrillingRenderDemo.module.css";
import { RenderToken } from "../shared/components/RenderToken";
import type { World } from "../zustand/data/types";
import { PropDrillingWorldApp } from "./exampleComponents/WorldApp";
import { PropDrillingDebugInfo } from "./demoControls/PropDrillingDebugInfo";

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
      <h1>Prop Drilling Render Demo</h1>
      <p>
        This intentionally clumsy demo recreates the Zustand example, but keeps all
        state at the top level and threads it through deeply nested props. The 
        <code>RenderToken</code> <RenderToken /> still shows render counts, but the
        extra prop transformations make those numbers spike.
      </p>
      <p>
        Props are constantly reshaped and cloned as they flow through the tree.
        That means even memoized components receive brand new objects every render,
        forcing them to re-render anyway.
      </p>

      <h2>Instructions:</h2>
      <p>
        Click <strong>Add world</strong> to simulate changing data. Select a world
        from the <strong>World Selector</strong> to change the highlighted item.
      </p>

      <PropDrillingWorldApp onSnapshotChange={setSnapshot} />
      <PropDrillingDebugInfo snapshot={snapshot} />
    </div>
  );
}
