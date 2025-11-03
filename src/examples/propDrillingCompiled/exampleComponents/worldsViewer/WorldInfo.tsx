import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import css from "../../../../components/css/worldsViewer/WorldInfo.module.css";
import type { World } from "../../../../api/worlds";

type Props = {
  world: World;
};

 and memoize infoRows
export function WorldInfo({ world }: Props) {
  const infoRows = [
    { label: "Type", value: world.type },
    { label: "Distance from Sun", value: world.distanceFromSun },
    { label: "Diameter", value: world.diameter },
    { label: "Orbital Period", value: world.orbitalPeriod },
  ];

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
