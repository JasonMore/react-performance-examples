import css from "../../css/worldsViewer/World.module.css";
import { RenderToken } from "../../perf/RenderToken.tsx";
import { WorldInfo } from "./WorldInfo.tsx";

export const World = () => {
  return (
    <div className={`${css.world}`}>
      <RenderToken className={css.floatOnBoarder} />
      <WorldInfo />
    </div>
  );
};
