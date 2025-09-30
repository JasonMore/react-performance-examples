import { memo } from "react";
import css from "./AddWorld.module.css";
import { RenderToken } from "../../../../shared/components/RenderToken.tsx";

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
