import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { PropDrillingNaiveRenderDemo } from "./examples/propDrillingNaive/PropDrillingNaiveRenderDemo.tsx";
import { ZustandRenderDemo } from "./examples/zustand/ZustandRenderDemo";
import { PropDrillingRenderDemo } from "./examples/propDrilling/PropDrillingRenderDemo.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/zustand" element={<ZustandRenderDemo />} />
      <Route path="/prop-drilling" element={<PropDrillingRenderDemo />} />
      <Route
        path="/prop-drilling-naive"
        element={<PropDrillingNaiveRenderDemo />}
      />
    </Routes>
  );
}
