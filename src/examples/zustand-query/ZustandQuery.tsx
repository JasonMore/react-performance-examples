import { QueryClientProvider } from "@tanstack/react-query";
import css from "../../components/css/DemoLayout.module.css";
import { DebugInfo } from "./demoControls/DebugInfo";
import { WorldApp } from "./components/WorldApp";
import { memo } from "react";
import { queryClient } from "./data/WorldData.ts";

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
      <DebugInfo />
    </div>
  </QueryClientProvider>
));
