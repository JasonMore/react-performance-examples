import { memo, useEffect, useRef } from "react";
import { useWorldData } from "../../hooks/useWorldData";
import css from "./World.module.css";
import { RenderToken } from "../../RenderToken";
import { WorldInfo } from "./WorldInfo";

interface Props {
  id: string;
}

export const World = memo(({ id }: Props) => {
  const { isSelectedWorld } = useWorldData();
  const isSelected = isSelectedWorld(id);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isSelected) return;

    containerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [isSelected]);

  return (
    <div
      ref={containerRef}
      className={`${css.world} ${isSelected ? css.selected : ""}`}
    >
      <RenderToken className={css.floatOnBoarder} />
      <WorldInfo id={id} />
    </div>
  );
});

World.displayName = "World";