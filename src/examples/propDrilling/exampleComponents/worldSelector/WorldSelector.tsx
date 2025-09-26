import { memo } from "react";
import { RenderToken } from "../../../../shared/components/RenderToken.tsx";
import sharedStyles from "../shared.module.css";
import css from "./WorldSelector.module.css";
import { AddWorldButton } from "./AddWorld.tsx";
import { WorldIdButton } from "./WorldIdButton.tsx";
import type { World } from "../../data/types.ts";

type Props = {
  activeWorld: string;
  worlds: World[];
  addWorld: () => void;
  chooseWorld: (id: string) => void;
};

export const WorldSelector = memo(
  ({ activeWorld, worlds, chooseWorld, addWorld }: Props) => {
    return (
      <div className={`${sharedStyles.card} ${css.root}`}>
        <div className={sharedStyles.cardTitle}>
          World Selector <RenderToken />
        </div>
        <AddWorldButton onClick={addWorld} />
        <ul className={css.worldList}>
          {worlds.map((world) => (
            <WorldIdButton
              key={world.id}
              id={world.id}
              isActive={world.id === activeWorld}
              onClick={(id) => chooseWorld(id)}
            />
          ))}
        </ul>
      </div>
    );
  },
);

WorldSelector.displayName = "WorldSelector";
