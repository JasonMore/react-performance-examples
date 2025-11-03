import css from "./RenderToken.module.css";
import { useId } from "react";
import { getRenderPassToken } from "./renderTokenState.ts";
import { useScanStore } from "./useScanStore.ts";

type Props = {
  className?: string;
  // the parent is rendering, but react compilier is so smart we have to pass junk in to the props to force a child to render :eyepop:
  forceRender?: any;
};

export const RenderToken = ({ className, forceRender }: Props) => {
  const enabled = useScanStore((s) => s.enabled);
  const instanceId = useId();

  if (enabled) return null;

  const token = getRenderPassToken();

  return (
    // key forces remount so the CSS animation runs every time the shared token changes
    <span
      key={`${token}:${instanceId}:${JSON.stringify(forceRender)}`}
      className={`${css.renderToken} ${className || ""}`}
    >
      {token}
    </span>
  );
};
