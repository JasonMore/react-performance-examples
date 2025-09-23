// Small helper to give each render a unique visual token
// Now debounced so every RenderToken rendered within the same render pass shares the same token.
import styles from "./RenderToken.module.css";
import { useRef } from "react";

type Props = { className?: string };

let currentPassToken: string | undefined = undefined;
let clearHandle: number | undefined = undefined;
let passCounter = 0;
let instanceCounter = 0; // monotonic per component instance id

// Generate (or reuse) a token that is stable for the current JS macrotask.
// All calls within the same render flush will reuse the token; a new token
// is created on the next tick after React commits more updates.
function getRenderPassToken() {
  if (currentPassToken) return currentPassToken;

  passCounter = (passCounter % 999) + 1;
  currentPassToken = `«${passCounter.toString().padStart(3, "0")}`;

  clearTimeout(clearHandle);
  clearHandle = setTimeout(() => {
    currentPassToken = undefined;
    clearHandle = undefined;
  }, 0);
  return currentPassToken;
}

export const RenderToken = ({ className }: Props) => {
  // Deterministic per-instance id; stable for life of the component.
  const instanceIdRef = useRef<string | undefined>(undefined);
  if (!instanceIdRef.current) {
    instanceCounter += 1;
    instanceIdRef.current = "i" + instanceCounter.toString(36);
  }
  const token = getRenderPassToken();
  const instanceId = instanceIdRef.current; // now guaranteed defined
  return (
    // key forces remount so the CSS animation runs every time the shared token changes
    <span
      key={`${token}:${instanceId}`}
      className={`${styles.renderToken} ${className || ""}`}
    >
      {token}
    </span>
  );
};
