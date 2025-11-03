import { useEffect, useRef } from "react";
import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import css from "../../../../components/css/worldsViewer/World.module.css";
import { WorldInfo } from "./WorldInfo.tsx";
import type { WorldViewerItem } from "./WorldsViewer.tsx";

type Props = {
  world: WorldViewerItem;
};

export function World(props: Props) {
  const { world } = props;
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
      <RenderToken className={css.floatOnBoarder} forceRender={props} />
      <WorldInfo world={world} />
    </div>
  );
}
