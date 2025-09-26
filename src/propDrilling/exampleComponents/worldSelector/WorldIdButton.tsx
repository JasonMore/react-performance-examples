import { memo } from "react";
import { RenderToken } from "../../../shared/components/RenderToken";
import css from "./WorldIdButton.module.css";

type Props = {
  payload: {
    id: string;
    isActive: boolean;
    onChoose: () => void;
  };
};

export const PropDrillingWorldIdButton = memo(({ payload }: Props) => {
  const { id, isActive, onChoose } = payload;
  const renderLabel = `${id}`;

  return (
    <li>
      <button
        type="button"
        className={`${css.worldButton} ${isActive ? css.selected : ""}`}
        onClick={() => onChoose()}
      >
        {renderLabel}
        <RenderToken />
      </button>
    </li>
  );
});

PropDrillingWorldIdButton.displayName = "PropDrillingWorldIdButton";
