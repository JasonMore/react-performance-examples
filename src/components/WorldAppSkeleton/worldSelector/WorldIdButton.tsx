import css from "../../css/worldSelector/WorldIdButton.module.css";
import { RenderToken } from "../../perf/RenderToken.tsx";

export const WorldIdButton = () => {
  return (
    <li>
      <button type="button" className={`${css.worldButton}`}>
        WorldIdButton
        <RenderToken />
      </button>
    </li>
  );
};
