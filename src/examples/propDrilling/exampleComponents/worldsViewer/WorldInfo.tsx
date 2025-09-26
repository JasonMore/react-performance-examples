import { memo, useMemo } from "react";
import { RenderToken } from "../../../../shared/components/RenderToken.tsx";
import css from "./WorldInfo.module.css";
import type { WorldViewerItem } from "./WorldsViewer.tsx";

type Props = {
  world: WorldViewerItem;
};

export const WorldInfo = memo(({ world }: Props) => {
  // Memoize infoRows to prevent recreation and remove unnecessary spread operator
  const infoRows = useMemo(() => [
    { label: "Type", value: world.type },
    { label: "Distance from Sun", value: world.distanceFromSun },
    { label: "Diameter", value: world.diameter },
    { label: "Orbital Period", value: world.orbitalPeriod },
  ], [world.type, world.distanceFromSun, world.diameter, world.orbitalPeriod]);

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
});

WorldInfo.displayName = "WorldInfo";
