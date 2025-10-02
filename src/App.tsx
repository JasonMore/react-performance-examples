import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./Home";
import { PropDrillingNaiveRenderDemo } from "./examples/propDrillingNaive/PropDrillingNaiveRenderDemo.tsx";
import { ZustandRenderDemo } from "./examples/zustand/ZustandRenderDemo";
import { PropDrillingRenderDemo } from "./examples/propDrilling/PropDrillingRenderDemo.tsx";
import { Navigation } from "./components/Navigation";

import { resetTokenCounter } from "./components/perf/renderTokenState.ts";

export default function App() {
  const location = useLocation();

  // Reset render pass counter whenever the route path changes
  useEffect(() => {
    resetTokenCounter();
  }, [location.pathname]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zustand" element={<ZustandRenderDemo />} />
        <Route path="/prop-drilling" element={<PropDrillingRenderDemo />} />
        <Route
          path="/prop-drilling-naive"
          element={<PropDrillingNaiveRenderDemo />}
        />
      </Routes>
    </>
  );
}
