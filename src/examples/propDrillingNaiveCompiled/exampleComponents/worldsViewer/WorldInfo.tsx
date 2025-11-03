import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import css from "../../../../components/css/worldsViewer/WorldInfo.module.css";
import type { WorldViewerItem } from "./WorldsViewer.tsx";

type Props = {
  world: WorldViewerItem;
};

// React Compiler will automatically optimize this component
export function WorldInfo({ world }: Props) {
  const infoRows = [
    { label: "Type", value: world.type },
    { label: "Distance from Sun", value: world.distanceFromSun },
    { label: "Diameter", value: world.diameter },
    { label: "Orbital Period", value: world.orbitalPeriod },
  ].map((row) => ({ ...row }));

  return (
    <div className={css.worldInfo}>
      <div>
        <strong>{world.name}</strong>
        <span className={css.worldId}>({world.id})</span>
        <RenderToken />
      </div>
      <div className={css.worldDetails}>
        {infoRows.map((row) => (
          <div key={`${world.id}-${row.label}`} className={css.factItem}>
            <div className={css.factLabel}>{row.label}</div>
            <div className={css.factValue}>{row.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
