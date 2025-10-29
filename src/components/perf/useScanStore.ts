import { create } from "zustand";

type Store = {
  enabled: boolean;
  toggleReactScan: () => void;
};

export const useScanStore = create<Store>((set, get) => ({
  enabled: false,
  toggleReactScan: async () => {
    const { enabled } = get();
    if (enabled) {
      return location.reload();
    }
    // Lazy load react-scan to reduce initial bundle size
    const { scan } = await import("react-scan");
    scan({ enabled: true });
    return set({ enabled: true });
  },
}));
