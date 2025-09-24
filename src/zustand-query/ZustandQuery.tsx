import { Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import css from "./ZustandQuery.module.css";
import { DebugInfo } from "./demoControls/DebugInfo";
import { RenderToken } from "./RenderToken";
import { WorldApp } from "./components/WorldApp";

// Create a client instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 2,
    },
  },
});

export function ZustandQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={css.app}>
        <nav className={css.nav}>
          <Link to="/" className={css.homeLink}>← Back to Home</Link>
        </nav>
        <h1>Zustand + Query Worlds Demo</h1>
        <p>
          Same worlds demo, but worlds come from TanStack Query (with add-world mutation + loading states) 
          while selection lives in a tiny Zustand store—shows how to cleanly bridge the two with a custom hook.
          The <code>RenderToken</code> <RenderToken /> is a counter which counts each render. 
          When that value increases, the component just re-rendered.
        </p>
        <p>
          The <code>WorldsSelector</code> and <code>WorldsViewer</code> components
          are siblings. The <code>WorldsViewer</code> component has a child
          component <code>WorldList</code>.
        </p>

        <h2>Instructions:</h2>
        <p>
          Simulate API data changing by clicking <strong>Add world</strong> (notice the loading state and error handling).
          Simulate client state changing by clicking a different world in the{" "}
          <strong>World Selector</strong>.
        </p>

        <WorldApp />
        <DebugInfo />
      </div>
    </QueryClientProvider>
  );
}