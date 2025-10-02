import { create } from "zustand";
import { scan } from "react-scan";

type Store = {
  enabled: boolean;
  toggleReactScan: () => void;
};

export const useScanStore = create<Store>((set, get) => ({
  enabled: false,
  toggleReactScan: () => {
    const { enabled } = get();
    if (enabled) {
      return location.reload();
    }
    scan({ enabled: true });
    return set({ enabled: true });
  },
}));
