import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Home } from "./Home.tsx";
import { fetchWorlds } from "./api/worlds.ts";
import { Layout } from "./Layout.tsx";
import { worldsLoader } from "./examples/zustand-query/data/WorldData.ts";

// Lazy load demo components for better code splitting
const ZustandRenderDemo = lazy(() =>
  import("./examples/zustand/ZustandRenderDemo.tsx").then((m) => ({
    default: m.ZustandRenderDemo,
  })),
);
const ZustandQuery = lazy(() =>
  import("./examples/zustand-query/ZustandQuery.tsx").then((m) => ({
    default: m.ZustandQuery,
  })),
);
const PropDrillingRenderDemo = lazy(() =>
  import("./examples/propDrilling/PropDrillingRenderDemo.tsx").then((m) => ({
    default: m.PropDrillingRenderDemo,
  })),
);
const PropDrillingNaiveRenderDemo = lazy(() =>
  import("./examples/propDrillingNaive/PropDrillingNaiveRenderDemo.tsx").then(
    (m) => ({ default: m.PropDrillingNaiveRenderDemo }),
  ),
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "prop-drilling-naive",
        element: <PropDrillingNaiveRenderDemo />,
      },
      {
        path: "prop-drilling",
        element: <PropDrillingRenderDemo />,
        loader: fetchWorlds,
      },
      {
        path: "zustand",
        element: <ZustandRenderDemo />,
        loader: fetchWorlds,
      },
      {
        path: "zustand-query",
        element: <ZustandQuery />,
        loader: worldsLoader,
      },
    ],
  },
]);
