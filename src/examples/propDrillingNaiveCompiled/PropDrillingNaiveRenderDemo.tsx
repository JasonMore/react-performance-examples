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
        This intentionally clumsy demo uses anti-patterns commonly seen with
        prop drilling. Prop churn, broken memoization, and a cascade of
        unnecessary updates. Even with <strong>React Compiler</strong>,
        components still re-render due to how the application changes data as
        data flows through props.
      </p>

      <p>
        NOTE: React Compiler is very good at not re-rendering children that
        shouldn't. While this is awesome, it breaks <code>RenderToken</code>
        automatically re-rendering. To solve this, I pass all props from the
        parent to <code>RenderToken</code>. To verify, run the examples with
        React Dev Tools Profiler.
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
