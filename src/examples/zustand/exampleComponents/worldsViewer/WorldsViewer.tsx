import { memo } from "react";
import { WorldList } from "./WorldList.tsx";
import { RenderToken } from "../../../../shared/components/RenderToken.tsx";
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
