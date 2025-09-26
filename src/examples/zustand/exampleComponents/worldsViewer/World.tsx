import { memo, useEffect, useRef } from "react";
import { useWorldStore } from "../../data/WorldStore.tsx";
import { RenderToken } from "../../../../shared/components/RenderToken.tsx";
import css from "./World.module.css";
import { WorldInfo } from "./WorldInfo.tsx";

type Props = { id: string };

export const World = memo(({ id }: Props) => {
  const selected = useWorldStore((s) => s.isSelectedWorld(id));
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
