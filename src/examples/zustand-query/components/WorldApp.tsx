import { memo } from "react";
import css from "../../../components/css/WorldApp.module.css";
import { WorldSelector } from "./worldSelector/WorldSelector";
import { WorldsViewer } from "./worldsViewer/WorldsViewer";

export const WorldApp = memo(() => {
  return (
    <div className={css.grid}>
      <div className={css.selectorPane}>
        <WorldSelector />
      </div>
      <WorldsViewer />
    </div>
  );
});

WorldApp.displayName = "WorldApp";
