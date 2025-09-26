import { memo } from "react";
import css from "./AddWorld.module.css";
import { RenderToken } from "../../../../shared/components/RenderToken.tsx";

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
