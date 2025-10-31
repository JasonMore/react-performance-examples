import { useEffect } from "react";
import { useLoaderData, useRevalidator } from "react-router-dom";
import css from "../../components/css/DemoLayout.module.css";
import { WorldApp } from "./exampleComponents/WorldApp.tsx";
import { useWorldStore } from "./data/WorldStore.tsx";
import type { WorldsResponse } from "../../api/worlds.ts";
import { ZustandDebugInfo } from "./demoControls/ZustandDebugInfo.tsx";

export function ZustandRenderDemo() {
  const data = useLoaderData() as WorldsResponse;
  const revalidator = useRevalidator();
  const setWorlds = useWorldStore((s) => s.setWorlds);

  // Initialize store with loader data
  useEffect(() => {
    if (data?.worlds) {
      setWorlds(data.worlds);
    }
  }, [data, setWorlds]);

  return (
    <div className={css.app}>
      <h1>Zustand Render Demo</h1>
      <p>
        This demo shows you can prevent re-rendering without using prop
        drilling. Because a zustand is used, its internal data pub/sub is more
        efficient than React memoization.
      </p>

      <WorldApp revalidate={revalidator.revalidate} />
      <ZustandDebugInfo />
    </div>
  );
}
