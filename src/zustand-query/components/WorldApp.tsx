import css from "./WorldApp.module.css";
import { WorldSelector } from "./worldSelector/WorldSelector";
import { WorldsViewer } from "./worldsViewer/WorldsViewer";

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