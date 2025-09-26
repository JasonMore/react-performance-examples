import { memo } from "react";
import { RenderToken } from "../../../shared/components/RenderToken";
import sharedStyles from "../shared.module.css";
import { PropDrillingWorldList } from "./WorldList";

export interface WorldViewerItem {
  id: string;
  name: string;
  distanceFromSun: string;
  diameter: string;
  orbitalPeriod: string;
  type: string;
  listIndex: number;
  isCurrent: boolean;
}

type Props = {
  worlds: WorldViewerItem[];
};

export const PropDrillingWorldsViewer = memo(({ worlds }: Props) => {
  return (
    <div className={sharedStyles.card}>
      <div className={sharedStyles.cardTitle}>
        Worlds Viewer <RenderToken />
      </div>
      <PropDrillingWorldList worlds={worlds} />
    </div>
  );
});

PropDrillingWorldsViewer.displayName = "PropDrillingWorldsViewer";
