import { QueryClientProvider } from "@tanstack/react-query";
import css from "../../components/css/DemoLayout.module.css";
import { DebugInfo } from "../../components/DebugInfo.tsx";
import { WorldApp } from "./components/WorldApp";
import { memo } from "react";
import { queryClient } from "./data/WorldData.ts";
import { useGetWorlds } from "./data/WorldData.ts";
import { useWorldStore } from "../zustand/data/WorldStore.tsx";

function ZustandQueryDebugInfo() {
  const selectedWorldId = useWorldStore((s) => s.selectedWorldId);
  const { data } = useGetWorlds();

  return (
    <DebugInfo
      snapshot={{ selectedWorldId, hello: { worlds: data?.worlds } }}
    />
  );
}

export const ZustandQuery = memo(() => (
  <QueryClientProvider client={queryClient}>
    <div className={css.app}>
      <h1>🌤 Zustand + tanstack-query/react</h1>
      <p>
        Puts API state in tanstack-query/react and client state in Zustand.
        Since tanstack-query is a specialized tool for managing api data, its
        more fully featured for handling data specific needs.
      </p>
      <WorldApp />
      <ZustandQueryDebugInfo />
    </div>
  </QueryClientProvider>
));
