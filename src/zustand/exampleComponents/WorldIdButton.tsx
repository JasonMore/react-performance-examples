import { memo } from "react";
import { useWorldStore } from "../WorldStore.tsx";
import css from "./WorldIdItem.module.css";
import { RenderToken } from "../RenderToken.tsx";

export const WorldIdButton = memo(function WorldIdItem({ id }: { id: string }) {
  const isSelected = useWorldStore((s) => s.isSelectedWorld(id));
  const setEditId = useWorldStore((s) => s.setWorldId);
  return (
    <li>
      <button
        type="button"
        className={[css.worldButton, isSelected ? css.selected : ""].join(" ")}
        onClick={() => setEditId(id)}
      >
        {id}
        <RenderToken />
      </button>
    </li>
  );
});
