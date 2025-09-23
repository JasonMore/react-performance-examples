import styles from "./ZustandRenderDemo.module.css";
import { WorldsViewer } from "./exampleComponents/worldsViewer/WorldsViewer.tsx";
import { WorldsSelector } from "./exampleComponents/worldSelector/WorldsSelector.tsx";
import { Actions } from "./demoControls/Actions.tsx";
import { DebugInfo } from "./demoControls/DebugInfo.tsx";
import { RenderToken } from "./RenderToken.tsx";

export function ZustandRenderDemo() {
  return (
    <div className={styles.app}>
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

      <div className={styles.grid}>
        <WorldsSelector />
        <WorldsViewer />
      </div>

      <DebugInfo />
    </div>
  );
}
