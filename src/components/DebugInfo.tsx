import { memo } from "react";
import css from "./css/DebugInfo.module.css";
import sharedStyles from "./css/shared.module.css";
import type { World } from "../types/World.ts";

type Snapshot = {
  selectedWorldId: string;
  hello: { worlds: World[] | undefined };
};

type Props = {
  /**
   * Snapshot data to display.
   */
  snapshot: Snapshot | null;
  /**
   * Optional title for the debug panel. Defaults to "Store snapshot".
   */
  title?: string;
};

export const DebugInfo = memo(({ snapshot, title }: Props) => {
  const displayTitle = title || "Store snapshot";

  const pretty =
    snapshot != null
      ? JSON.stringify(
          {
            selectedWorldId: snapshot.selectedWorldId,
            hello: {
              worlds: snapshot.hello.worlds?.map((world) => ({ ...world })),
            },
          },
          null,
          2,
        )
      : "Snapshot pending…";

  return (
    <div className={`${sharedStyles.card} ${css.snapshot}`}>
      <div className={css.snapshotTitle}>{displayTitle}</div>
      <pre className={css.pre}>{pretty}</pre>
    </div>
  );
});

DebugInfo.displayName = "DebugInfo";
