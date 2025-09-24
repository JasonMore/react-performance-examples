import { memo } from "react";
import { RenderToken } from "../../../zustand/RenderToken";
import sharedStyles from "../shared.module.css";
import { PropDrillingWorldList } from "./WorldList";

interface ViewerItem {
  id: string;
  name: string;
  distanceFromSun: string;
  diameter: string;
  orbitalPeriod: string;
  type: string;
  listIndex: number;
  isCurrent: boolean;
  annotations: {
    shoutyName: string;
    fingerprint: string;
  };
}

type Props = {
  worlds: ViewerItem[];
};

export const PropDrillingWorldsViewer = memo(({ worlds }: Props) => {
  const listEnvelope = worlds.map((item) => ({
    id: item.id,
    world: {
      ...item,
      computedLabel: `${item.annotations.shoutyName} (${item.listIndex + 1})`,
    },
  }));

  const lookup = listEnvelope.reduce<Record<string, typeof listEnvelope[number]["world"]>>(
    (acc, entry) => ({ ...acc, [entry.id]: entry.world }),
    {},
  );

  const selectedId = worlds.find((item) => item.isCurrent)?.id ?? worlds[0]?.id ?? "";

  const worldListPayload = {
    selectedId,
    entries: listEnvelope.map((entry) => ({
      id: entry.id,
      world: lookup[entry.id],
    })),
  };

  return (
    <div className={sharedStyles.card}>
      <div className={sharedStyles.cardTitle}>
        Worlds Viewer <RenderToken />
      </div>
      <PropDrillingWorldList payload={worldListPayload} />
    </div>
  );
});

PropDrillingWorldsViewer.displayName = "PropDrillingWorldsViewer";
