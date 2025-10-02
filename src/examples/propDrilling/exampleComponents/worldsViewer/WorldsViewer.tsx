import { memo } from "react";
import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import sharedStyles from "../shared.module.css";
import { WorldList } from "./WorldList.tsx";
import type { World } from "../../data/types.ts";

type Props = {
  worlds: World[];
  activeWorldId: string;
};

export const WorldsViewer = memo(({ worlds, activeWorldId }: Props) => {
  return (
    <div className={sharedStyles.card}>
      <div className={sharedStyles.cardTitle}>
        Worlds Viewer <RenderToken />
      </div>
      <WorldList worlds={worlds} activeWorldId={activeWorldId} />
    </div>
  );
});

WorldsViewer.displayName = "WorldsViewer";
