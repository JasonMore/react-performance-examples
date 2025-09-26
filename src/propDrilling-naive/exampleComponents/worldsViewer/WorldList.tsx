import { memo } from "react";
import { RenderToken } from "../../../shared/components/RenderToken";
import css from "./WorldList.module.css";
import { PropDrillingWorld } from "./World";

type Payload = {
  selectedId: string;
  entries: Array<{
    id: string;
    world: {
      id: string;
      name: string;
      distanceFromSun: string;
      diameter: string;
      orbitalPeriod: string;
      type: string;
      listIndex: number;
      isCurrent: boolean;
      annotations: {
        fingerprint: string;
      };
    };
  }>;
};

export const PropDrillingWorldList = memo(({ payload }: { payload: Payload }) => {
  const normalizedList = payload.entries.map((entry, index) => ({
    key: `${entry.id}-${index}`,
    item: {
      id: entry.id,
      display: `${entry.world.name} (${entry.world.listIndex + 1})`,
      world: { ...entry.world },
      selected: entry.id === payload.selectedId,
    },
  }));

  return (
    <div className={css.worldList}>
      <div className={css.textXsBold}>
        World List <RenderToken />
      </div>
      <div className={css.textXs}>
        world length: <strong>{normalizedList.length}</strong>
      </div>
      <ul>
        {normalizedList.map((entry) => (
          <li key={entry.key}>
            <PropDrillingWorld payload={entry.item} />
          </li>
        ))}
      </ul>
    </div>
  );
});

PropDrillingWorldList.displayName = "PropDrillingWorldList";
