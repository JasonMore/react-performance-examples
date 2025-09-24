import { create } from "zustand";

interface SelectionStore {
  selectedWorldId: string;
  setWorldId: (id: string) => void;
  isSelectedWorld: (id: string) => boolean;
}

export const useSelectionStore = create<SelectionStore>((set, get) => ({
  selectedWorldId: "ven002",
  setWorldId: (id) => set({ selectedWorldId: id }),
  isSelectedWorld: (id: string) => {
    const state = get();
    return state.selectedWorldId === id;
  },
}));