import { create } from "zustand";

import type { World } from "../../../api/worlds.ts";

interface Store {
  selectedWorldId: string;
  hello: { worlds: World[] };
  setWorldId: (id: string) => void;
  setWorlds: (worlds: World[]) => void;
  addWorld: (world: World) => void;
}

export const useWorldStore = create<Store>((set) => ({
  selectedWorldId: "ven002",
  hello: {
    worlds: [],
  },
  setWorldId: (id) => set({ selectedWorldId: id }),
  setWorlds: (worlds) => set({ hello: { worlds } }),
  addWorld: (world) =>
    set((state) => ({ hello: { worlds: [...state.hello.worlds, world] } })),
}));

// Helper hooks for efficient component access
export const useWorldById = (id: string) =>
  useWorldStore((state) => state.hello.worlds.find((w) => w.id === id));

export const useIsSelectedWorld = (id: string) =>
  useWorldStore((state) => state.selectedWorldId === id);
