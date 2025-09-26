import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { PropDrillingNaiveRenderDemo } from "./propDrillingNaive/PropDrillingNaiveRenderDemo.tsx";
import { ZustandRenderDemo } from "./zustand/ZustandRenderDemo";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/zustand" element={<ZustandRenderDemo />} />
      <Route path="/prop-drilling" element={<PropDrillingNaiveRenderDemo />} />
    </Routes>
  );
}
