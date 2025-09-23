import { memo } from "react";
import { useWorldStore } from "../../data/WorldStore";
import css from "./WorldIdButton.module.css";
import { RenderToken } from "../../RenderToken";

export const WorldIdButton = memo(function WorldIdItem({ id }: { id: string }) {
  const isSelected = useWorldStore((s) => s.isSelectedWorld(id));
  const setEditId = useWorldStore((s) => s.setWorldId);
  return (
    <li>
      <button
        type="button"
        className={`${css.worldButton} ${isSelected ? css.selected : ""}`}
        onClick={() => setEditId(id)}
      >
        {id}
        <RenderToken />
      </button>
    </li>
  );
});
