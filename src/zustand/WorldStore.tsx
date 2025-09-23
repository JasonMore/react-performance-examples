import { create } from "zustand";

type World = {
  id: string;
  name: string;
  distanceFromSun: string;
  diameter: string;
  orbitalPeriod: string;
  type: string;
};

interface Store {
  selectedWorldId: string;
  hello: { worlds: World[] };
  setWorldId: (id: string) => void;
  addWorld: (world: World) => void;
  getWorldById: (id: string) => World | undefined;
  isSelectedWorld(id: string): boolean;
}

export const useWorldStore = create<Store>((set, get) => ({
  selectedWorldId: "def456",
  hello: {
    worlds: [
      { 
        id: "abc123", 
        name: "mercury",
        distanceFromSun: "58 million km",
        diameter: "4,879 km",
        orbitalPeriod: "88 days",
        type: "terrestrial planet"
      },
      { 
        id: "def456", 
        name: "venus",
        distanceFromSun: "108 million km",
        diameter: "12,104 km",
        orbitalPeriod: "225 days",
        type: "terrestrial planet"
      },
      { 
        id: "ghi789", 
        name: "earth",
        distanceFromSun: "150 million km",
        diameter: "12,756 km",
        orbitalPeriod: "365 days",
        type: "terrestrial planet"
      },
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
