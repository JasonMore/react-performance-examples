import { memo, useEffect, useRef } from "react";
import { RenderToken } from "../../../zustand/RenderToken";
import css from "./World.module.css";
import { PropDrillingWorldInfo } from "./WorldInfo";

type Props = {
  payload: {
    id: string;
    display: string;
    world: {
      id: string;
      name: string;
      distanceFromSun: string;
      diameter: string;
      orbitalPeriod: string;
      type: string;
      listIndex: number;
      isCurrent: boolean;
      annotations: {
        shoutyName: string;
        fingerprint: string;
      };
      computedLabel: string;
    };
    selected: boolean;
  };
};

export const PropDrillingWorld = memo(({ payload }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!payload.selected) return;

    containerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [payload.selected]);

  const decoratedWorld = {
    ...payload.world,
    selectionMeta: {
      isSelected: payload.selected,
      token: `${payload.id}-${payload.world.annotations.fingerprint}`,
    },
  };

  return (
    <div
      ref={containerRef}
      className={`${css.world} ${payload.selected ? css.selected : ""}`}
    >
      <RenderToken className={css.floatOnBoarder} />
      <PropDrillingWorldInfo data={decoratedWorld} />
    </div>
  );
});

PropDrillingWorld.displayName = "PropDrillingWorld";
