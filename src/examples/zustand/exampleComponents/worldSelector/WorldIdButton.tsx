import { memo } from "react";
import { useWorldStore } from "../../data/WorldStore.tsx";
import css from "./WorldIdButton.module.css";
import { RenderToken } from "../../../../shared/components/RenderToken.tsx";

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
