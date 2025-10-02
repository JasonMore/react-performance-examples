import { create } from "zustand";
import { scan } from "react-scan";

type Store = {
  enabled: boolean;
  enableReactScan: () => void;
};

export const useScanStore = create<Store>((set) => ({
  enabled: false,
  enableReactScan: () => {
    scan({ enabled: true });
    return set({ enabled: true });
  },
}));
