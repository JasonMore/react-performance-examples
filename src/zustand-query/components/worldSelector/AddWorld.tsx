import css from "./AddWorld.module.css";
import { useWorldData } from "../../hooks/useWorldData";
import { memo } from "react";

export const AddWorld = memo(() => {
  const { addWorld, isAddingWorld, addWorldError } = useWorldData();

  return (
    <div>
      <button
        className={css.primaryButton}
        onClick={() => addWorld()}
        disabled={isAddingWorld}
      >
        {isAddingWorld ? "Adding..." : "Add world"}
      </button>
      {addWorldError && (
        <div style={{ color: 'red', fontSize: '0.75rem', marginTop: '0.25rem' }}>
          Error: {addWorldError.message}
        </div>
      )}
    </div>
  );
});

AddWorld.displayName = "AddWorld";