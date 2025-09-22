import React, { useMemo, useRef } from "react";
import { create } from "zustand";

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
    set((s) => ({ hello: { world } })), // replaces reference intentionally when called
}));

// Small helper to give each render a unique visual token
const RenderToken: React.FC = React.memo(() => {
  const tokenRef = useRef(Math.random().toString(36).slice(2, 7));
  return <span className="font-mono text-xs opacity-60">#{tokenRef.current}</span>;
});

// -------------------------------
// Components
// -------------------------------
const IdToEdit: React.FC = React.memo(() => {
  const editId = useStore((s) => s.editId);
  console.count("IdToEdit render");
  return (
    <div className="p-3 rounded-2xl shadow bg-white">
      <div className="text-sm font-semibold">IdToEdit</div>
      <div className="text-sm">editId: <code>{editId}</code></div>
      <div><RenderToken /></div>
    </div>
  );
});

const Foo: React.FC = React.memo(() => {
  console.count("Foo render");
  return (
    <div className="p-3 rounded-2xl shadow bg-white">
      <div className="text-sm font-semibold">Foo</div>
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
    <div className="mt-2 p-2 rounded-xl bg-gray-50">
      <div className="text-xs font-semibold">Bar</div>
      <div className="text-xs">world length: <code>{world.length}</code></div>
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
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-3xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold">Zustand Render Demo</h1>
        <p className="text-sm text-slate-700">
          Click <strong>Update editId</strong> to change only <code>editId</code>. The
          <code>hello.world</code> array reference stays the same. You should see
          <strong> IdToEdit</strong> render, while <strong>Foo</strong> and <strong>Bar</strong> do not.
          Open the console to view <code>console.count</code> logs.
        </p>

        <div className="flex flex-wrap gap-2">
          <button
            className="px-3 py-2 rounded-xl bg-black text-white"
            onClick={() => setEditId(nextId)}
          >
            Update editId → {nextId}
          </button>

          <button
            className="px-3 py-2 rounded-xl bg-white shadow"
            onClick={() => setWorld([...world, Math.random().toString(36).slice(2, 5)])}
          >
            Update world (changes reference)
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          <IdToEdit />
          <Foo />
        </div>

        <div className="mt-4 p-3 text-xs text-slate-600 bg-white rounded-2xl shadow">
          <div className="font-semibold mb-1">Store snapshot</div>
          <pre className="whitespace-pre-wrap">{JSON.stringify({ editId, hello: { world } }, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
