import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./Home";
import { PropDrillingNaiveRenderDemo } from "./examples/propDrillingNaive/PropDrillingNaiveRenderDemo.tsx";
import { ZustandRenderDemo } from "./examples/zustand/ZustandRenderDemo";
import { PropDrillingRenderDemo } from "./examples/propDrilling/PropDrillingRenderDemo.tsx";
import { ZustandQuery } from "./examples/zustand-query/ZustandQuery";
import { Navigation } from "./components/Navigation";
import { fetchWorlds } from "./api/worlds.ts";

import { resetTokenCounter } from "./components/perf/renderTokenState.ts";

function Layout() {
  const location = useLocation();

  // Reset render pass counter whenever the route path changes
  useEffect(() => {
    resetTokenCounter();
  }, [location.pathname]);

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
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

export default function App() {
  return <RouterProvider router={router} />;
}
