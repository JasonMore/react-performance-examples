import { memo } from "react";
import css from "./AddWorld.module.css";

type Props = {
  configuration: {
    label: string;
    onAdd: () => void;
  };
};

export const PropDrillingAddWorld = memo(({ configuration }: Props) => {
  const buttonState = {
    ...configuration,
    title: `${configuration.label} now`,
  };

  return (
    <button
      className={css.primaryButton}
      onClick={() => buttonState.onAdd()}
    >
      {buttonState.title}
    </button>
  );
});

PropDrillingAddWorld.displayName = "PropDrillingAddWorld";
