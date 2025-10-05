import { create } from "zustand";

import type { World } from "../../../api/worlds.ts";

interface Store {
  selectedWorldId: string;
  hello: { worlds: World[] };
  setWorldId: (id: string) => void;
  setWorlds: (worlds: World[]) => void;
  addWorld: (world: World) => void;
  getWorldById: (id: string) => World | undefined;
  isSelectedWorld(id: string): boolean;
}

export const useWorldStore = create<Store>((set, get) => ({
  selectedWorldId: "ven002",
  hello: {
    worlds: [],
  },
  setWorldId: (id) => set({ selectedWorldId: id }),
  setWorlds: (worlds) => set({ hello: { worlds } }),
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
