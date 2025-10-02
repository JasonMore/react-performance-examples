import css from "../../../../components/css/worldSelector/AddWorld.module.css";
import { memo } from "react";
import { RenderToken } from "../../../../components/perf/RenderToken.tsx";
import { addWorld as apiAddWorld } from "../../../../api/worlds.ts";

type Props = {
  revalidate: () => void;
};

export const AddWorld = memo(({ revalidate }: Props) => {
  return (
    <button
      className={css.primaryButton}
      onClick={async () => {
        await apiAddWorld();
        revalidate();
      }}
    >
      Add world
      <RenderToken />
    </button>
  );
});

AddWorld.displayName = "AddWorld";
