import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import sharedStyles from "../../../../components/css/shared.module.css";
import css from "../../../../components/css/worldSelector/WorldSelector.module.css";
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

export function PropDrillingWorldSelector(props: Props) {
  const { activeWorld, worldOptions, chooseWorld, addWorld } = props;
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
        World Selector{" "}
        <RenderToken className={activeWorld} forceRender={props} />
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
}
