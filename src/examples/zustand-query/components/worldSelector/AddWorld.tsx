import css from "./AddWorld.module.css";
import { memo } from "react";
import { useAddWorld } from "../../data/WorldData.ts";

export const AddWorld = memo(() => {
  const { mutate, isPending } = useAddWorld();

  return (
    <div>
      <button
        className={css.primaryButton}
        onClick={() => mutate()}
        disabled={isPending}
      >
        Add World
      </button>
    </div>
  );
});

AddWorld.displayName = "AddWorld";
