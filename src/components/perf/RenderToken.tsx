import css from "./RenderToken.module.css";
import { useId, useEffect, useRef, useState } from "react";
import { getRenderPassToken } from "./renderTokenState.ts";
import { useScanStore } from "./useScanStore.ts";

type Props = {
  className?: string;
  // the parent is rendering, but react compilier is so smart we have to pass junk in to the props to force a child to render :eyepop:
  forceRender?: any;
};

export const RenderToken = ({ className, forceRender }: Props) => {
  const enabled = useScanStore((s) => s.enabled);
  const [token, setToken] = useState(getRenderPassToken());
  const lastForceRenderRef = useRef(forceRender);
  const instanceId = useId();

  // Detect when forceRender prop changes (indicating a React Compiler update)
  useEffect(() => {
    if (lastForceRenderRef.current !== forceRender) {
      lastForceRenderRef.current = forceRender;
      setToken(getRenderPassToken());
    }
  }, [forceRender]);

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
