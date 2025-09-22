import { create } from "zustand";
import { useMemo } from "react";

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

export const useExampleStore = create<Store>((set) => ({
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

export const useGetWorldById = (id: string) => {
  const worlds = useExampleStore((store) => store.hello.worlds);
  const worldsHash = useMemo(
    () => Object.fromEntries(worlds.map((world) => [world.id, world])),
    [worlds],
  );
  return worldsHash[id];
};
