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
          <span>{world.id}</span> <span>{world.name}</span>
          <RenderToken />
        </div>
      </div>
    </>
  );
});

World.displayName = "World";
