import css from "./PropDrillingDebugInfo.module.css";
import sharedStyles from "../exampleComponents/shared.module.css";
import type { World } from "../../zustand/data/types.ts";

type Props = {
  snapshot: {
    selectedWorldId: string;
    hello: { worlds: World[] };
  } | null;
};

export function PropDrillingDebugInfo({ snapshot }: Props) {
  const pretty = snapshot
    ? JSON.stringify(
        {
          selectedWorldId: snapshot.selectedWorldId,
          hello: {
            worlds: snapshot.hello.worlds.map((world) => ({ ...world })),
          },
        },
        null,
        2,
      )
    : "Snapshot pending…";

  return (
    <div className={`${sharedStyles.card} ${css.snapshot}`}>
      <div className={css.snapshotTitle}>Top level state snapshot</div>
      <pre className={css.pre}>{pretty}</pre>
    </div>
  );
}
