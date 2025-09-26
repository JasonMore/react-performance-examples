import { memo } from "react";
import css from "./AddWorld.module.css";

type Props = {
  onAdd: () => void;
};

export const PropDrillingAddWorld = memo(({ onAdd }: Props) => {
  return (
    <button className={css.primaryButton} onClick={() => onAdd()}>
      Add World
    </button>
  );
});

PropDrillingAddWorld.displayName = "PropDrillingAddWorld";
