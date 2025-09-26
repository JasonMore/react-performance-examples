import { memo, useEffect, useRef } from "react";
import { RenderToken } from "../../../../shared/components/RenderToken.tsx";
import css from "./World.module.css";
import { WorldInfo } from "./WorldInfo.tsx";
import type { WorldViewerItem } from "./WorldsViewer.tsx";

type Props = {
  world: WorldViewerItem;
};

export const World = memo(({ world }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!world.isCurrent) return;

    containerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [world.isCurrent]);

  return (
    <div
      ref={containerRef}
      className={`${css.world} ${world.isCurrent ? css.selected : ""}`}
    >
      <RenderToken className={css.floatOnBoarder} />
      <WorldInfo world={world} />
    </div>
  );
});

World.displayName = "World";
