import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home.tsx";
import { ZustandRenderDemo } from "./examples/zustand/ZustandRenderDemo.tsx";
import { fetchWorlds } from "./api/worlds.ts";
import { ZustandQuery } from "./examples/zustand-query/ZustandQuery.tsx";
import { PropDrillingRenderDemo } from "./examples/propDrilling/PropDrillingRenderDemo.tsx";
import { PropDrillingNaiveRenderDemo } from "./examples/propDrillingNaive/PropDrillingNaiveRenderDemo.tsx";
import { Layout } from "./Layout.tsx";
import { worldsLoader } from "./examples/zustand-query/data/WorldData.ts";

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
