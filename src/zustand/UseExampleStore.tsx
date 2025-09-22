import { create } from "zustand";

type World = {
  id: string;
  name: string;
};

interface Store {
  selectedWorldId: string;
  hello: { worlds: World[] };
  setWorldId: (id: string) => void;
  addWorld: (world: World) => void;
  getWorldById: (id: string) => World | undefined;
  isSelectedWorld(id: string): boolean;
}

export const useExampleStore = create<Store>((set, get) => ({
  selectedWorldId: "def456",
  hello: {
    worlds: [
      { id: "abc123", name: "mercury" },
      { id: "def456", name: "venus" },
      { id: "ghi789", name: "earth" },
    ],
  },
  setWorldId: (id) => set({ selectedWorldId: id }),
  addWorld: (world) =>
    set((state) => ({ hello: { worlds: [...state.hello.worlds, world] } })),

  getWorldById: (id) => {
    const state = get();
    return state.hello.worlds.find((w) => w.id === id);
  },

  isSelectedWorld: (id: string) => {
    const state = get();
    return state.selectedWorldId === id;
  },
}));
