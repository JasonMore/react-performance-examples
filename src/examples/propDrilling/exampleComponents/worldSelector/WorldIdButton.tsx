import { memo } from "react";
import { RenderToken } from "../../../../shared/components/RenderToken.tsx";
import css from "./WorldIdButton.module.css";

type Props = {
  id: string;
  isActive: boolean;
  onClick: (id: string) => void;
};

export const WorldIdButton = memo(({ id, isActive, onClick }: Props) => {
  return (
    <li>
      <button
        type="button"
        className={`${css.worldButton} ${isActive ? css.selected : ""}`}
        onClick={() => onClick(id)}
      >
        {id}
        <RenderToken />
      </button>
    </li>
  );
});

WorldIdButton.displayName = "WorldIdButton";
