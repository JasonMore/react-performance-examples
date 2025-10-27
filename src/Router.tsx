import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home.tsx";
import { fetchWorlds } from "./api/worlds.ts";
import { Layout } from "./Layout.tsx";
import { worldsLoader } from "./examples/zustand-query/data/WorldData.ts";
import { lazy } from "react";

// Lazy load demo components for code-splitting
const ZustandRenderDemo = lazy(
  () => import("./examples/zustand/ZustandRenderDemo.tsx"),
);
const ZustandQuery = lazy(
  () => import("./examples/zustand-query/ZustandQuery.tsx"),
);
const PropDrillingRenderDemo = lazy(
  () => import("./examples/propDrilling/PropDrillingRenderDemo.tsx"),
);
const PropDrillingNaiveRenderDemo = lazy(
  () => import("./examples/propDrillingNaive/PropDrillingNaiveRenderDemo.tsx"),
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
