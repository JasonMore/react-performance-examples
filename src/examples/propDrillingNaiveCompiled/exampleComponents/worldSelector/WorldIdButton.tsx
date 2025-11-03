import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import css from "../../../../components/css/worldSelector/WorldIdButton.module.css";

type Props = {
  payload: {
    id: string;
    isActive: boolean;
    onChoose: () => void;
  };
};

// React Compiler will automatically optimize this component
export function PropDrillingWorldIdButton({ payload }: Props) {
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
}
