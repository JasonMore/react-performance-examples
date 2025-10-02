import sharedStyles from "../../css/shared.module.css";
import css from "../../css/worldSelector/WorldSelector.module.css";
import { RenderToken } from "../../perf/RenderToken.tsx";
import { AddWorldButton } from "./AddWorld.tsx";
import { WorldIdButton } from "./WorldIdButton.tsx";

export const WorldSelector = () => {
  return (
    <div className={`${sharedStyles.card} ${css.root}`}>
      <div className={sharedStyles.cardTitle}>
        WorldSelector <RenderToken />
      </div>
      <AddWorldButton />
      <ul className={css.worldList}>
        <WorldIdButton />
        <WorldIdButton />
        <WorldIdButton />
      </ul>
    </div>
  );
};
