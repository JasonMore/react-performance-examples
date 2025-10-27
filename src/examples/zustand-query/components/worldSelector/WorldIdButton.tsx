import { memo } from "react";
import { RenderToken } from "../../../../components/perf/RenderToken";
import css from "../../../../components/css/worldSelector/WorldIdButton.module.css";
import {
  useIsSelectedWorld,
  useSelectionStore,
} from "../../data/SelectionStore.ts";

interface Props {
  id: string;
}

export const WorldIdButton = memo(({ id }: Props) => {
  const isSelected = useIsSelectedWorld(id);
  const setEditId = useSelectionStore((s) => s.setWorldId);

  return (
    <li>
      <button
        className={`${css.worldButton} ${isSelected ? css.selected : ""}`}
        onClick={() => setEditId(id)}
      >
        {id} <RenderToken />
      </button>
    </li>
  );
});

WorldIdButton.displayName = "WorldIdButton";
