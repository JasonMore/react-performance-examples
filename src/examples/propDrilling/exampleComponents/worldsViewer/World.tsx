import { memo, useEffect, useRef } from "react";
import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import css from "./World.module.css";
import { WorldInfo } from "./WorldInfo.tsx";
import type { World as WorldType } from "../../data/types.ts";

type Props = {
  world: WorldType;
  isActive: boolean;
};

export const World = memo(({ world, isActive }: Props) => {
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
      <RenderToken className={css.floatOnBoarder} />
      <WorldInfo world={world} />
    </div>
  );
});

World.displayName = "World";
