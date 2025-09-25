import { memo } from "react";
import { useWorldData } from "../../hooks/useWorldData";
import { RenderToken } from "../../RenderToken";
import css from "./WorldIdButton.module.css";

interface Props {
  id: string;
}

export const WorldIdButton = memo(({ id }: Props) => {
  const { setWorldId, isSelectedWorld } = useWorldData();
  const isSelected = isSelectedWorld(id);

  return (
    <li>
      <button
        className={`${css.worldButton} ${
          isSelected ? css.selected : ""
        }`}
        onClick={() => setWorldId(id)}
      >
        {id} <RenderToken />
      </button>
    </li>
  );
});

WorldIdButton.displayName = "WorldIdButton";