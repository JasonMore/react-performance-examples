import { memo } from "react";
import { RenderToken } from "../../../shared/components/RenderToken";
import sharedStyles from "../shared.module.css";
import css from "./WorldSelector.module.css";
import { PropDrillingAddWorld } from "./AddWorld";
import { PropDrillingWorldIdButton } from "./WorldIdButton";

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
    const listItems = worldOptions.map((option) => ({
      button: {
        id: option.id,
        isActive: option.id === activeWorld,
        onChoose: () => chooseWorld(`${option.id}`),
      },
    }));

    return (
      <div className={`${sharedStyles.card} ${css.root}`}>
        <div className={sharedStyles.cardTitle}>
          World Selector <RenderToken />
        </div>
        <PropDrillingAddWorld onAdd={addWorld} />
        <ul className={css.worldList}>
          {listItems.map((item) => (
            <PropDrillingWorldIdButton
              key={item.button.id}
              payload={item.button}
            />
          ))}
        </ul>
      </div>
    );
  },
);

PropDrillingWorldSelector.displayName = "PropDrillingWorldSelector";
