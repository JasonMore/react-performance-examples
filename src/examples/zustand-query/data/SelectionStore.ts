import { create } from "zustand";

interface SelectionStore {
  selectedWorldId: string;
  setWorldId: (id: string) => void;
}

export const useSelectionStore = create<SelectionStore>((set) => ({
  selectedWorldId: "ven002",
  setWorldId: (id) => set({ selectedWorldId: id }),
}));

// Helper function for cleaner component usage
export const useIsSelectedWorld = (id: string) =>
  useSelectionStore((state) => state.selectedWorldId === id);
