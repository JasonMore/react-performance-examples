import { memo } from "react";
import css from "./AddWorld.module.css";
import { RenderToken } from "../../../../components/perf/RenderToken.tsx";

type Props = {
  onClick: () => void;
};

export const AddWorldButton = memo(({ onClick }: Props) => {
  return (
    <button className={css.primaryButton} onClick={onClick}>
      Add World
      <RenderToken />
    </button>
  );
});

AddWorldButton.displayName = "PropDrillingAddWorld";
