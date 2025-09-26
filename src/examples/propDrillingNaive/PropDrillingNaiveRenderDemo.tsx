import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./PropDrillingNaiveRenderDemo.module.css";
import { RenderToken } from "../../shared/components/RenderToken.tsx";
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
      <nav className={css.nav}>
        <Link to="/" className={css.homeLink}>
          ← Back to Home
        </Link>
      </nav>
      <h1>Prop Drilling Render Demo</h1>
      <p>
        This intentionally clumsy demo uses anit-patterns commonly used with
        prop drilling. All state at the top level and threads it through deeply
        nested props.
      </p>
      <p>
        The <code>RenderToken</code> <RenderToken /> shows render counts. It
        will be much higher than a well implemented example.
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
