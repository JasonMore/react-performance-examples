import { memo, useCallback } from "react";
import { RenderToken } from "../../../../shared/components/RenderToken.tsx";
import sharedStyles from "../shared.module.css";
import css from "./WorldSelector.module.css";
import { PropDrillingAddWorld } from "./AddWorld.tsx";
import { PropDrillingWorldIdButton } from "./WorldIdButton.tsx";

type SelectorOption = {
  id: string;
};

type Props = {
  activeWorld: string;
  worldOptions: SelectorOption[];
  chooseWorld: (id: string) => void;
  addWorld: () => void;
};

export const PropDrillingWorldSelector = memo(
  ({ activeWorld, worldOptions, chooseWorld, addWorld }: Props) => {
    // Memoize the choice handler to prevent inline function creation
    const handleChooseWorld = useCallback((id: string) => () => {
      chooseWorld(id);
    }, [chooseWorld]);

    return (
      <div className={`${sharedStyles.card} ${css.root}`}>
        <div className={sharedStyles.cardTitle}>
          World Selector <RenderToken />
        </div>
        <PropDrillingAddWorld onAdd={addWorld} />
        <ul className={css.worldList}>
          {worldOptions.map((option) => (
            <PropDrillingWorldIdButton
              key={option.id}
              id={option.id}
              isActive={option.id === activeWorld}
              onChoose={handleChooseWorld(option.id)}
            />
          ))}
        </ul>
      </div>
    );
  },
);

PropDrillingWorldSelector.displayName = "PropDrillingWorldSelector";
