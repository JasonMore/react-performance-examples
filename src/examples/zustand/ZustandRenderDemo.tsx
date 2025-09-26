import { Link } from "react-router-dom";
import css from "./ZustandRenderDemo.module.css";
import { DebugInfo } from "./demoControls/DebugInfo.tsx";
import { RenderToken } from "../../shared/components/RenderToken.tsx";
import { WorldApp } from "./exampleComponents/WorldApp.tsx";

export function ZustandRenderDemo() {
  return (
    <div className={css.app}>
      <nav className={css.nav}>
        <Link to="/" className={css.homeLink}>
          ← Back to Home
        </Link>
      </nav>
      <h1>Zustand Render Demo</h1>
      <p>
        This demo shows you can prevent re-rendering without using prop
        drilling. The <code>RenderToken</code> <RenderToken /> is a counter
        which counts each render. When that value increases, the component just
        re-rendered.
      </p>
      <p>
        The <code>WorldsSelector</code> and <code>WorldsViewer</code> components
        are siblings. The <code>WorldsViewer</code> component has a child
        component <code>WorldList</code>.
      </p>

      <h2>Instructions:</h2>
      <p>
        Simulate API data changing by clicking <strong>Add world</strong>.
        Simulate client state changing by clicking a different world in the{" "}
        <strong>World Selector</strong>.
      </p>

      <WorldApp />
      <DebugInfo />
    </div>
  );
}
