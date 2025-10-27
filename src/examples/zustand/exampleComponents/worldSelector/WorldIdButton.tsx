import { memo } from "react";
import {
  useIsSelectedWorld,
  useWorldStore,
} from "../../data/WorldStore.tsx";
import css from "../../../../components/css/worldSelector/WorldIdButton.module.css";
import { RenderToken } from "../../../../components/perf/RenderToken.tsx";

export const WorldIdButton = memo(function WorldIdItem({ id }: { id: string }) {
  const isSelected = useIsSelectedWorld(id);
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

WorldIdButton.displayName = "WorldIdButton";
