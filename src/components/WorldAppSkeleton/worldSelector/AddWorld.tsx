import css from "../../css/worldSelector/AddWorld.module.css";
import { RenderToken } from "../../perf/RenderToken.tsx";

export const AddWorldButton = () => {
  return (
    <button className={css.primaryButton}>
      AddWorldButton
      <RenderToken />
    </button>
  );
};
