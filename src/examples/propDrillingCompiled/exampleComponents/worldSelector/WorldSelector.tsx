import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import sharedStyles from "../../../../components/css/shared.module.css";
import css from "../../../../components/css/worldSelector/WorldSelector.module.css";
import { AddWorldButton } from "./AddWorld.tsx";
import { WorldIdButton } from "./WorldIdButton.tsx";
import type { World } from "../../../../api/worlds";

type Props = {
  activeWorld: string;
  worlds: World[];
  addWorld: () => void;
  chooseWorld: (id: string) => void;
};

// React Compiler will automatically optimize this component
export function WorldSelector({
  activeWorld,
  worlds,
  chooseWorld,
  addWorld,
}: Props) {
  const onClick = (id: string) => chooseWorld(id);
  console.count('>>> WorldSelector')
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
            onClick={onClick}
          />
        ))}
      </ul>
    </div>
  );
}
