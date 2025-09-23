import css from "./WorldApp.module.css";
import { WorldsSelector } from "./worldSelector/WorldsSelector.tsx";
import { WorldsViewer } from "./worldsViewer/WorldsViewer.tsx";

export function WorldApp() {
  return (
    <div className={css.grid}>
      <WorldsSelector />
      <WorldsViewer />
    </div>
  );
}
