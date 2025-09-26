import css from "./WorldApp.module.css";
import { WorldSelector } from "./worldSelector/WorldSelector.tsx";
import { WorldsViewer } from "./worldsViewer/WorldsViewer.tsx";

export function WorldApp() {
  return (
    <div className={css.grid}>
      <div className={css.selectorPane}>
        <WorldSelector />
      </div>
      <WorldsViewer />
    </div>
  );
}
