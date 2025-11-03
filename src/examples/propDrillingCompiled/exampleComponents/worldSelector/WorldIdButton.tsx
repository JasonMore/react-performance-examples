import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import css from "../../../../components/css/worldSelector/WorldIdButton.module.css";

type Props = {
  id: string;
  isActive: boolean;
  onClick: (id: string) => void;
};

export function WorldIdButton({ id, isActive, onClick }: Props) {
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
}
