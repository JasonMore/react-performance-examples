import { memo } from "react";
import css from "../../../../components/css/worldSelector/AddWorld.module.css";
import { RenderToken } from "../../../../components/perf/RenderToken.tsx";

type Props = {
  onAdd: () => void;
};

export const PropDrillingAddWorld = memo(({ onAdd }: Props) => {
  return (
    <button className={css.primaryButton} onClick={() => onAdd()}>
      Add World
      <RenderToken />
    </button>
  );
});

PropDrillingAddWorld.displayName = "PropDrillingAddWorld";
