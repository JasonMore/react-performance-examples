import { memo } from "react";
import { RenderToken } from "../../../../shared/components/RenderToken.tsx";
import css from "./WorldIdButton.module.css";

type Props = {
  id: string;
  isActive: boolean;
  onChoose: () => void;
};

export const PropDrillingWorldIdButton = memo(({ id, isActive, onChoose }: Props) => {

  return (
    <li>
      <button
        type="button"
        className={`${css.worldButton} ${isActive ? css.selected : ""}`}
        onClick={() => onChoose()}
      >
        {id}
        <RenderToken />
      </button>
    </li>
  );
});

PropDrillingWorldIdButton.displayName = "PropDrillingWorldIdButton";
