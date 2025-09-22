import { create } from 'zustand'

interface Store {
  editId: string;
  hello: { world: string[] };
  setEditId: (id: string) => void;
  setWorld: (world: string[]) => void;
}

export const useStore = create<Store>((set) => ({
  editId: 'def456',
  hello: { world: ['abc', '123'] },
  setEditId: (id) => set({ editId: id }),
  // IMPORTANT: update hello.world by reusing the same object reference
  // when we want to demonstrate stability across editId changes.
  setWorld: (world) =>
    set(() => ({ hello: { world } })), // replaces reference intentionally when called
}))