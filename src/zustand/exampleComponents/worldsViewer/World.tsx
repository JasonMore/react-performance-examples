import { memo } from "react";
import { useWorldStore } from "../../data/WorldStore.tsx";
import { RenderToken } from "../../RenderToken.tsx";
import css from "./World.module.css";

type Props = { id: string };

export const World = memo(({ id }: Props) => {
  const world = useWorldStore((s) => s.getWorldById(id));
  const selected = useWorldStore((s) => s.isSelectedWorld(id));

  if (!world) {
    return null;
  }

  return (
    <>
      <div className={`${css.world} ${selected ? css.selected : ""}`}>
        <div className={css.worldInfo}>
          <div>
            <strong>{world.name}</strong>{" "}
            <span className={css.worldId}>({world.id})</span>
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
          <RenderToken />
        </div>
      </div>
    </>
  );
});

World.displayName = "World";
