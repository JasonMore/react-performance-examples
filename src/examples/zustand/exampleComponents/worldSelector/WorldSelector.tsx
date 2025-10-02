import { memo } from "react";
import { useWorldStore } from "../../data/WorldStore.tsx";
import css from "../../../../components/css/worldSelector/WorldSelector.module.css";
import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import { WorldIdButton } from "./WorldIdButton.tsx";
import sharedStyles from "../../../../components/css/shared.module.css";
import { AddWorld } from "./AddWorld.tsx";

type Props = {
  revalidate: () => void;
};

export const WorldSelector = memo(({ revalidate }: Props) => {
  const worlds = useWorldStore((s) => s.hello.worlds);

  return (
    <div className={`${sharedStyles.card} ${css.root}`}>
      <div className={sharedStyles.cardTitle}>
        World Selector <RenderToken />
      </div>
      <AddWorld revalidate={revalidate} />
      <ul className={css.worldList}>
        {worlds.map((w) => (
          <WorldIdButton key={w.id} id={w.id} />
        ))}
      </ul>
    </div>
  );
});

WorldSelector.displayName = "WorldSelector";
