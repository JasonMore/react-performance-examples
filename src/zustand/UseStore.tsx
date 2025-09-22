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
}

export const useStore = create<Store>((set) => ({
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
}));
