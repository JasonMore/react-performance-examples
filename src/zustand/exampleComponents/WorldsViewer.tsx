import { memo } from "react";
import css from "./WorldsViewer.module.css";
import { WorldList } from "./WorldList.tsx";
import { RenderToken } from "../RenderToken.tsx";

export const WorldsViewer = memo(() => {
  return (
    <div className={css.card}>
      <div className={css.cardTitle}>
        Worlds Viewer <RenderToken />
      </div>
      <WorldList />
    </div>
  );
});

WorldsViewer.displayName = "WorldsViewer";
