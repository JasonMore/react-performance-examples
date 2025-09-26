import { memo } from "react";
import { RenderToken } from "../../../zustand/RenderToken";
import css from "./WorldInfo.module.css";

type Props = {
  data: {
    id: string;
    name: string;
    distanceFromSun: string;
    diameter: string;
    orbitalPeriod: string;
    type: string;
    selectionMeta: {
      isSelected: boolean;
      token: string;
    };
  };
};

export const PropDrillingWorldInfo = memo(({ data }: Props) => {
  const infoRows = [
    { label: "Type", value: data.type },
    { label: "Distance from Sun", value: data.distanceFromSun },
    { label: "Diameter", value: data.diameter },
    { label: "Orbital Period", value: data.orbitalPeriod },
  ].map((row) => ({ ...row }));

  return (
    <div className={css.worldInfo}>
      <div>
        <strong>{data.name}</strong>
        <span className={css.worldId}>
          ({data.id})
        </span>
        <RenderToken />
      </div>
      <div className={css.worldDetails}>
        {infoRows.map((row) => (
          <div key={`${data.id}-${row.label}`} className={css.factItem}>
            <div className={css.factLabel}>{row.label}</div>
            <div className={css.factValue}>{row.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
});

PropDrillingWorldInfo.displayName = "PropDrillingWorldInfo";
