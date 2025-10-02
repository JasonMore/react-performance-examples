import { memo, useEffect, useRef } from "react";
import css from "../../../../components/css/worldsViewer/World.module.css";
import { RenderToken } from "../../../../components/perf/RenderToken";
import { WorldInfo } from "./WorldInfo";
import { useSelectionStore } from "../../data/SelectionStore.ts";

interface Props {
  id: string;
}

export const World = memo(({ id }: Props) => {
  const isSelected = useSelectionStore((s) => s.isSelectedWorld(id));
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
