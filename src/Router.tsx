import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { fetchWorlds } from "./api/worlds.ts";
import { worldsLoader } from "./examples/zustand-query/data/WorldData.ts";

// Lazy load route components for code splitting
const Home = lazy(() =>
  import("./Home.tsx").then((m) => ({ default: m.Home })),
);
const Layout = lazy(() =>
  import("./Layout.tsx").then((m) => ({ default: m.Layout })),
);
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
    (m) => ({
      default: m.PropDrillingNaiveRenderDemo,
    }),
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
