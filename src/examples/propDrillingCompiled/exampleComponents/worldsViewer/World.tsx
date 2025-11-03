import { useEffect, useRef } from "react";
import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import css from "../../../../components/css/worldsViewer/World.module.css";
import { WorldInfo } from "./WorldInfo.tsx";
import type { World as WorldType } from "../../../../api/worlds";

type Props = {
  world: WorldType;
  isActive: boolean;
};

export function World(props: Props) {
  const { world, isActive } = props;
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    containerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [isActive]);

  return (
    <div
      ref={containerRef}
      className={`${css.world} ${isActive ? css.selected : ""}`}
    >
      <RenderToken className={css.floatOnBoarder} forceRender={props} />
      <WorldInfo world={world} />
    </div>
  );
}
