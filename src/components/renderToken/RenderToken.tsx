import css from "./RenderToken.module.css";
import { useId } from "react";
import { getRenderPassToken } from "./renderTokenState.ts";
import { useScanStore } from "../useScanStore.ts";

type Props = { className?: string };

export const RenderToken = ({ className }: Props) => {
  const enabled = useScanStore((s) => s.enabled);
  const token = getRenderPassToken();
  const instanceId = useId();
  if (enabled) return null;

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
