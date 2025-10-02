import css from "./ReactScanToggle.module.css";
import { useScanStore } from "./useScanStore.ts";

export const ReactScanToggle = () => {
  const enableReactScan = useScanStore((s) => s.toggleReactScan);
  return (
    <label className={css.reactScanToggle}>
      React-Scan{" "}
      <input
        type="checkbox"
        name="react-scan-enabled"
        onChange={() => enableReactScan()}
      />
    </label>
  );
};
