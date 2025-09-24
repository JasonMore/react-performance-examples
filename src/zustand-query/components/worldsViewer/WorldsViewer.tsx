import { memo } from "react";
import { WorldList } from "./WorldList";
import { RenderToken } from "../../RenderToken";
import sharedStyles from "../shared.module.css";

export const WorldsViewer = memo(() => {
  return (
    <div className={sharedStyles.card}>
      <div className={sharedStyles.cardTitle}>
        Worlds Viewer <RenderToken />
      </div>
      <WorldList />
    </div>
  );
});

WorldsViewer.displayName = "WorldsViewer";