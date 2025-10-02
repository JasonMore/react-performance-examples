import sharedStyles from "../../css/shared.module.css";
import { RenderToken } from "../../perf/RenderToken.tsx";
import { WorldList } from "./WorldList.tsx";

export const WorldsViewer = () => {
  return (
    <div className={sharedStyles.card}>
      <div className={sharedStyles.cardTitle}>
        WorldsViewer <RenderToken />
      </div>
      <WorldList />
    </div>
  );
};
