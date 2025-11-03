import css from "../../../../components/css/worldSelector/AddWorld.module.css";
import { RenderToken } from "../../../../components/perf/RenderToken.tsx";

type Props = {
  onClick: () => void;
};

export function AddWorldButton({ onClick }: Props) {
  return (
    <button className={css.primaryButton} onClick={onClick}>
      Add World
      <RenderToken />
    </button>
  );
}
