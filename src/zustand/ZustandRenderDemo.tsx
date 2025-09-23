import css from "./ZustandRenderDemo.module.css";
import { Actions } from "./demoControls/Actions";
import { DebugInfo } from "./demoControls/DebugInfo";
import { RenderToken } from "./RenderToken";
import { WorldApp } from "./exampleComponents/WorldApp.tsx";

export function ZustandRenderDemo() {
  return (
    <div className={css.app}>
      <h1>Zustand Render Demo</h1>
      <p>
        This demo shows you can prevent re-rendering without using prop
        drilling. The <code>RenderToken</code> <RenderToken /> is a random
        string generated on each render. When that value changes, the component
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

      <Actions />
      <WorldApp />
      <DebugInfo />
    </div>
  );
}
