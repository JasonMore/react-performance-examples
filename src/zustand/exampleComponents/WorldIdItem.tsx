import { memo } from "react";
import { useExampleStore } from "../UseExampleStore.tsx";
import css from "./WorldIdItem.module.css";
import { RenderToken } from "../RenderToken.tsx";

export const WorldIdItem = memo(function WorldIdItem({ id }: { id: string }) {
  const isSelected = useExampleStore((s) => s.isSelectedWorld(id));
  const setEditId = useExampleStore((s) => s.setWorldId);
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
