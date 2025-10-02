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
      <p>Puts API state in tanstack/react-query and client state in Zustand.</p>
      <p>
        The <code>WorldsSelector</code> and <code>WorldsViewer</code> components
        are siblings. The <code>WorldsViewer</code> component has a child
        component <code>WorldList</code>.
      </p>

      <h2>Instructions:</h2>
      <p>
        Simulate API data changing by clicking <strong>Add world</strong>{" "}
        (notice the loading state and error handling). Simulate client state
        changing by clicking a different world in the{" "}
        <strong>World Selector</strong>.
      </p>

      <WorldApp />
      <DebugInfo />
    </div>
  </QueryClientProvider>
));
