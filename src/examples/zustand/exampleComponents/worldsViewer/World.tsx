import { memo, useEffect, useRef } from "react";
import { useIsSelectedWorld } from "../../data/WorldStore.tsx";
import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import css from "../../../../components/css/worldsViewer/World.module.css";
import { WorldInfo } from "./WorldInfo.tsx";

type Props = { id: string };

export const World = memo(({ id }: Props) => {
  const selected = useIsSelectedWorld(id);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!selected) return;

    containerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [selected]);

  return (
    <>
      <div
        ref={containerRef}
        className={`${css.world} ${selected ? css.selected : ""}`}
      >
        <RenderToken className={css.floatOnBoarder} />
        <WorldInfo id={id} />
      </div>
    </>
  );
});

World.displayName = "World";
