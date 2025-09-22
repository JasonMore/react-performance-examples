import React, { useMemo, useRef } from "react";
import { create } from "zustand";
import styles from "./App.module.css";

// -------------------------------
// Zustand store
// -------------------------------
interface Store {
  editId: string;
  hello: { world: string[] };
  setEditId: (id: string) => void;
  setWorld: (world: string[]) => void;
}

const useStore = create<Store>((set) => ({
  editId: "def456",
  hello: { world: ["abc", "123"] },
  setEditId: (id) => set({ editId: id }),
  // IMPORTANT: update hello.world by reusing the same object reference
  // when we want to demonstrate stability across editId changes.
  setWorld: (world) =>
    set(() => ({ hello: { world } })), // replaces reference intentionally when called
}));

// Small helper to give each render a unique visual token
const RenderToken: React.FC = React.memo(() => {
  const tokenRef = useRef(Math.random().toString(36).slice(2, 7));
  return <span className={styles.renderToken}>#{tokenRef.current}</span>;
});

// -------------------------------
// Components
// -------------------------------
const IdToEdit: React.FC = React.memo(() => {
  const editId = useStore((s) => s.editId);
  console.count("IdToEdit render");
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>IdToEdit</div>
      <div className={styles.textSm}>editId: <code>{editId}</code></div>
      <div><RenderToken /></div>
    </div>
  );
});

const Foo: React.FC = React.memo(() => {
  console.count("Foo render");
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>Foo</div>
      <Bar />
      <div><RenderToken /></div>
    </div>
  );
});

const Bar: React.FC = React.memo(() => {
  // IMPORTANT: selector returns the array reference directly (no transforms)
  const world = useStore((s) => s.hello.world);
  console.count("Bar render");
  return (
    <div className={styles.bar}>
      <div className={styles.textXsBold}>Bar</div>
      <div className={styles.textXs}>world length: <code>{world.length}</code></div>
      <div><RenderToken /></div>
    </div>
  );
});

// -------------------------------
// Playground
// -------------------------------
export default function App() {
  const setEditId = useStore((s) => s.setEditId);
  const setWorld = useStore((s) => s.setWorld);
  const editId = useStore((s) => s.editId);
  const world = useStore((s) => s.hello.world);

  // next id to set, just for the demo
  const nextId = useMemo(() => (editId === "def456" ? "ytch789" : "def456"), [editId]);

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <h1 className={styles.title}>Zustand Render Demo</h1>
        <p className={styles.description}>
          Click <strong>Update editId</strong> to change only <code>editId</code>. The
          <code>hello.world</code> array reference stays the same. You should see
          <strong> IdToEdit</strong> render, while <strong>Foo</strong> and <strong>Bar</strong> do not.
          Open the console to view <code>console.count</code> logs.
        </p>

        <div className={styles.actions}>
          <button
            className={styles.primaryButton}
            onClick={() => setEditId(nextId)}
          >
            Update editId → {nextId}
          </button>

          <button
            className={styles.secondaryButton}
            onClick={() => setWorld([...world, Math.random().toString(36).slice(2, 5)])}
          >
            Update world (changes reference)
          </button>
        </div>

        <div className={styles.grid}>
          <IdToEdit />
          <Foo />
        </div>

        <div className={styles.snapshot}>
          <div className={styles.snapshotTitle}>Store snapshot</div>
          <pre className={styles.pre}>{JSON.stringify({ editId, hello: { world } }, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}