import { create } from "zustand";

type World = {
  id: string;
  name: string;
};

interface Store {
  editId: string;
  hello: { worlds: World[] };
  setEditId: (id: string) => void;
  addWorld: (world: World) => void;
  getWorldById: (id: string) => World | undefined;
}

export const useExampleStore = create<Store>((set, get) => ({
  editId: "def456",
  hello: {
    worlds: [
      { id: "abc123", name: "earth" },
      { id: "def123", name: "mars" },
    ],
  },
  setEditId: (id) => set({ editId: id }),
  addWorld: (world) =>
    set((state) => ({ hello: { worlds: [...state.hello.worlds, world] } })),

  getWorldById: (id) => {
    const state = get();
    return state.hello.worlds.find((w) => w.id === id);
  },
}));
