import { useState, useEffect } from "react";
import css from "../../components/css/DemoLayout.module.css";
import { PropDrillingWorldApp } from "./exampleComponents/WorldApp.tsx";
import { DebugInfo } from "../../components/DebugInfo.tsx";
import { fetchWorlds, type World } from "../../api/worlds.ts";

type Snapshot = {
  selectedWorldId: string;
  hello: { worlds: World[] };
};

export function PropDrillingNaiveCompiledRenderDemo() {
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
      <h1>React Compiler Naive Prop Drilling Demo</h1>
      <p>
        This demo shows the <strong>React Compiler</strong> optimizing a naive
        prop drilling implementation. The original naive version had
        anti-patterns like prop churn and broken memoization. The compiler
        automatically handles these issues without requiring manual{" "}
        <code>React.memo</code>, <code>useMemo</code>, or{" "}
        <code>useCallback</code>.
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
