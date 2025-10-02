import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home.tsx";
import { ZustandRenderDemo } from "./examples/zustand/ZustandRenderDemo.tsx";
import { fetchWorlds } from "./api/worlds.ts";
import { ZustandQuery } from "./examples/zustand-query/ZustandQuery.tsx";
import { PropDrillingRenderDemo } from "./examples/propDrilling/PropDrillingRenderDemo.tsx";
import { PropDrillingNaiveRenderDemo } from "./examples/propDrillingNaive/PropDrillingNaiveRenderDemo.tsx";
import { Layout } from "./Layout.tsx";

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
        path: "zustand",
        element: <ZustandRenderDemo />,
        loader: fetchWorlds,
      },
      {
        path: "zustand-query",
        element: <ZustandQuery />,
      },
      {
        path: "prop-drilling",
        element: <PropDrillingRenderDemo />,
        loader: fetchWorlds,
      },
      {
        path: "prop-drilling-naive",
        element: <PropDrillingNaiveRenderDemo />,
      },
    ],
  },
]);
