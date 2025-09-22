import { memo } from "react";
import { useExampleStore } from "../UseExampleStore.tsx";
import { RenderToken } from "../RenderToken.tsx";
import css from "./World.module.css";

type Props = { id: string };

export const World = memo(({ id }: Props) => {
  const world = useExampleStore((s) => s.getWorldById(id));
  const selected = useExampleStore((s) => s.isSelectedWorld(id));

  if (!world) {
    return null;
  }

  return (
    <>
      <div className={`${css.world} ${selected ? css.selected : ""}`}>
        <div>🌍</div>
        <div className={css.worldInfo}>
          <div>
            <strong>{world.name}</strong> <span className={css.worldId}>({world.id})</span>
          </div>
          <div className={css.worldDetails}>
            <div><strong>Type:</strong> {world.type}</div>
            <div><strong>Distance from Sun:</strong> {world.distanceFromSun}</div>
            <div><strong>Diameter:</strong> {world.diameter}</div>
            <div><strong>Orbital Period:</strong> {world.orbitalPeriod}</div>
          </div>
          <RenderToken />
        </div>
      </div>
    </>
  );
});

World.displayName = "World";
