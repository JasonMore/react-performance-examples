import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { ZustandRenderDemo } from "./zustand/ZustandRenderDemo";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/zustand" element={<ZustandRenderDemo />} />
    </Routes>
  );
}
