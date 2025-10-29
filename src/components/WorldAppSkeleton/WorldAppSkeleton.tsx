import { memo } from "react";
import css from "../../components/css/WorldApp.module.css";
import { WorldSelector } from "./worldSelector/WorldSelector.tsx";
import { WorldsViewer } from "./worldsViewer/WorldsViewer.tsx";

export const WorldAppSkeleton = memo(() => {
  return (
    <div className={css.grid}>
      <div className={css.selectorPane}>
        <WorldSelector />
      </div>
      <WorldsViewer />
    </div>
  );
});

WorldAppSkeleton.displayName = "WorldAppSkeleton";
