import css from "./RenderToken.module.css";
import { useId } from "react";

type Props = { className?: string };

let currentPassToken: string | undefined;
let clearHandle: ReturnType<typeof setTimeout> | undefined;
let passCounter = 0;

// Generate (or reuse) a token that is stable for the current JS macrotask.
// All calls within the same render flush will reuse the token; a new token
// is created on the next tick after React commits more updates.
function getRenderPassToken(): string {
  if (currentPassToken) return currentPassToken;

  passCounter = (passCounter % 999) + 1;
  currentPassToken = `«${passCounter.toString().padStart(3, "0")}`;

  if (clearHandle) {
    clearTimeout(clearHandle);
  }
  clearHandle = setTimeout(() => {
    currentPassToken = undefined;
    clearHandle = undefined;
  }, 0);
  return currentPassToken;
}

export const RenderToken = ({ className }: Props) => {
  const token = getRenderPassToken();
  const instanceId = useId();
  return (
    // key forces remount so the CSS animation runs every time the shared token changes
    <span
      key={`${token}:${instanceId}`}
      className={`${css.renderToken} ${className || ""}`}
    >
      {token}
    </span>
  );
};
