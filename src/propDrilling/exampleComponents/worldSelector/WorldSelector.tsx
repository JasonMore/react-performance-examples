import { memo } from "react";
import { RenderToken } from "../../../zustand/RenderToken";
import sharedStyles from "../shared.module.css";
import css from "./WorldSelector.module.css";
import { PropDrillingAddWorld } from "./AddWorld";
import { PropDrillingWorldIdButton } from "./WorldIdButton";

type SelectorOption = {
  id: string;
  label: string;
  details: {
    index: number;
    upperName: string;
    original: {
      id: string;
      name: string;
      distanceFromSun: string;
      diameter: string;
      orbitalPeriod: string;
      type: string;
    };
  };
};

type Props = {
  selectorData: {
    active: { id: string };
    options: SelectorOption[];
  };
  actions: {
    chooseWorld: (id: string) => void;
    addWorld: () => void;
  };
};

export const PropDrillingWorldSelector = memo(({ selectorData, actions }: Props) => {
  const hydratedOptions = selectorData.options.map((option) => ({
    ...option,
    badges: [option.details.upperName, `#${option.details.index + 1}`],
    isSelected: option.id === selectorData.active.id,
  }));

  const listItems = hydratedOptions.map((option) => ({
    button: {
      id: option.id,
      label: option.label,
      badges: option.badges,
      isActive: option.isSelected,
      onChoose: () => actions.chooseWorld(option.id),
    },
  }));

  return (
    <div className={`${sharedStyles.card} ${css.root}`}>
      <div className={sharedStyles.cardTitle}>
        World Selector <RenderToken />
      </div>
      <PropDrillingAddWorld
        configuration={{
          label: "Add world",
          onAdd: () => actions.addWorld(),
        }}
      />
      <ul className={css.worldList}>
        {listItems.map((item) => (
          <PropDrillingWorldIdButton key={item.button.id} payload={item.button} />
        ))}
      </ul>
    </div>
  );
});

PropDrillingWorldSelector.displayName = "PropDrillingWorldSelector";
