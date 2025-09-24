import { memo } from "react";
import { RenderToken } from "../../../zustand/RenderToken";
import css from "./WorldIdButton.module.css";

type Props = {
  payload: {
    id: string;
    label: string;
    badges: string[];
    isActive: boolean;
    onChoose: () => void;
  };
};

export const PropDrillingWorldIdButton = memo(({ payload }: Props) => {
  const { id, label, badges, isActive, onChoose } = payload;
  const renderLabel = `${label} ${badges.join(" ")} (${id})`;

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
