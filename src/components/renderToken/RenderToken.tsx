import css from "./RenderToken.module.css";
import { useId } from "react";
import { getRenderPassToken } from "./renderTokenState.ts";

type Props = { className?: string };

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
