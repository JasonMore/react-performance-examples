import { memo } from "react";
import { useWorldData } from "../../hooks/useWorldData";
import css from "./WorldInfo.module.css";
import { RenderToken } from "../../RenderToken";

interface Props {
  id: string;
}

export const WorldInfo = memo(({ id }: Props) => {
  const { getWorldById } = useWorldData();
  const world = getWorldById(id);

  if (!world) return null;

  return (
    <div className={css.worldInfo}>
      <div>
        <strong>{world.name}</strong>
        <span className={css.worldId}>({world.id})</span>
        <RenderToken />
      </div>
      <div className={css.worldDetails}>
        <div className={css.factItem}>
          <div className={css.factLabel}>Type</div>
          <div className={css.factValue}>{world.type}</div>
        </div>
        <div className={css.factItem}>
          <div className={css.factLabel}>Distance from Sun</div>
          <div className={css.factValue}>{world.distanceFromSun}</div>
        </div>
        <div className={css.factItem}>
          <div className={css.factLabel}>Diameter</div>
          <div className={css.factValue}>{world.diameter}</div>
        </div>
        <div className={css.factItem}>
          <div className={css.factLabel}>Orbital Period</div>
          <div className={css.factValue}>{world.orbitalPeriod}</div>
        </div>
      </div>
    </div>
  );
});

WorldInfo.displayName = "WorldInfo";