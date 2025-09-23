import { memo } from "react";
import { useWorldStore } from "../../data/WorldStore.tsx";
import { RenderToken } from "../../RenderToken.tsx";
import css from "./World.module.css";
import { WorldInfo } from "./WorldInfo.tsx";

type Props = { id: string };

export const World = memo(({ id }: Props) => {
  const selected = useWorldStore((s) => s.isSelectedWorld(id));

  return (
    <>
      <div className={`${css.world} ${selected ? css.selected : ""}`}>
        <RenderToken />
        <WorldInfo id={id} />
      </div>
    </>
  );
});

World.displayName = "World";
