import css from "../../css/worldsViewer/WorldInfo.module.css";
import { RenderToken } from "../../perf/RenderToken.tsx";

export const WorldInfo = () => {
  return (
    <div className={css.worldInfo}>
      <div>
        <strong>WorldInfo</strong>
        <span className={css.worldId}>(abc123)</span>
        <RenderToken />
      </div>
      <div className={css.worldDetails}>
        <div className={css.factItem}>
          <div className={css.factLabel}>Type</div>
          <div className={css.factValue}>worldType</div>
        </div>
        <div className={css.factItem}>
          <div className={css.factLabel}>Distance from Sun</div>
          <div className={css.factValue}>distanceFromSun</div>
        </div>
        <div className={css.factItem}>
          <div className={css.factLabel}>Diameter</div>
          <div className={css.factValue}>diameter</div>
        </div>
        <div className={css.factItem}>
          <div className={css.factLabel}>Orbital Period</div>
          <div className={css.factValue}>orbitalPeriod</div>
        </div>
      </div>
    </div>
  );
};
