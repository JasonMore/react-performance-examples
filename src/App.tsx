import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { PropDrillingNaiveRenderDemo } from "./examples/propDrillingNaive/PropDrillingNaiveRenderDemo.tsx";
import { ZustandRenderDemo } from "./examples/zustand/ZustandRenderDemo";
import { PropDrillingRenderDemo } from "./examples/propDrilling/PropDrillingRenderDemo.tsx";
import { Navigation } from "./shared/components/Navigation";

export default function App() {
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
