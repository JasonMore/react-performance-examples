import styles from "./Actions.module.css";
import { useExampleStore } from "../UseExampleStore.tsx";
import { useMemo } from "react";

export function Actions() {
  const setEditId = useExampleStore((s) => s.setEditId);
  const addWorld = useExampleStore((s) => s.addWorld);
  const editId = useExampleStore((s) => s.editId);

  // next id to set, just for the demo
  const nextId = useMemo(
    () => (editId === "def456" ? "ytch789" : "def456"),
    [editId],
  );

  return (
    <div className={styles.actions}>
      <button
        className={styles.primaryButton}
        onClick={() => setEditId(nextId)}
      >
        Update editId → {nextId}
      </button>

      <button
        className={styles.secondaryButton}
        onClick={() => addWorld({ id: crypto.randomUUID(), name: "new world" })}
      >
        Update world
      </button>
    </div>
  );
}
