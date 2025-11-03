import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import sharedStyles from "../../../../components/css/shared.module.css";
import { WorldList } from "./WorldList.tsx";
import type { World } from "../../../../api/worlds";

type Props = {
  worlds: World[];
  activeWorldId: string;
};

export function WorldsViewer({ worlds, activeWorldId }: Props) {
  return (
    <div className={sharedStyles.card}>
      <div className={sharedStyles.cardTitle}>
        Worlds Viewer <RenderToken />
      </div>
      <WorldList worlds={worlds} activeWorldId={activeWorldId} />
    </div>
  );
}
