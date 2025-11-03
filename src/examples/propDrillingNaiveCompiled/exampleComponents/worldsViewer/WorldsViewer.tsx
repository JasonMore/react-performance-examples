import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import sharedStyles from "../../../../components/css/shared.module.css";
import { WorldList } from "./WorldList.tsx";

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

export function WorldsViewer(props: Props) {
  const { worlds } = props;
  return (
    <div className={sharedStyles.card}>
      <div className={sharedStyles.cardTitle}>
        Worlds Viewer <RenderToken forceRender={props} />
      </div>
      <WorldList worlds={worlds} />
    </div>
  );
}
