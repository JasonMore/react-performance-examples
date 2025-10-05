import { useState, useEffect } from "react";
import css from "../../components/css/DemoLayout.module.css";
import { PropDrillingWorldApp } from "./exampleComponents/WorldApp.tsx";
import { PropDrillingDebugInfo } from "./demoControls/PropDrillingDebugInfo.tsx";
import { fetchWorlds, type World } from "../../api/worlds.ts";

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
        prop drilling. Prop churn, broken memoization, and a cascade of
        unnecessary updates.
      </p>

      <PropDrillingWorldApp
        worlds={worlds}
        setWorlds={setWorlds}
        onSnapshotChange={setSnapshot}
      />
      <PropDrillingDebugInfo snapshot={snapshot} />
    </div>
  );
}
