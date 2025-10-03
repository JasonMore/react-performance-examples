import css from "../../../components/css/DebugInfo.module.css";
import sharedStyles from "../../../components/css/shared.module.css";
import type { World } from "../../../api/worlds";

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
