import { memo } from "react";
import { RenderToken } from "../../../../shared/components/RenderToken.tsx";
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
