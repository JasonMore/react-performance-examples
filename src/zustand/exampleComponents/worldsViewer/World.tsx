import { memo } from "react";
import { useWorldStore } from "../../data/WorldStore";
import { RenderToken } from "../../RenderToken";
import css from "./World.module.css";
import { WorldInfo } from "./WorldInfo";

type Props = { id: string };

export const World = memo(({ id }: Props) => {
  const selected = useWorldStore((s) => s.isSelectedWorld(id));

  return (
    <>
      <div className={`${css.world} ${selected ? css.selected : ""}`}>
        <RenderToken className={css.floatOnBoarder} />
        <WorldInfo id={id} />
      </div>
    </>
  );
});

World.displayName = "World";
