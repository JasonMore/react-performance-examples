import css from "../../../../components/css/worldSelector/AddWorld.module.css";
import { RenderToken } from "../../../../components/perf/RenderToken.tsx";

type Props = {
  onAdd: () => void;
};

export function PropDrillingAddWorld({ onAdd }: Props) {
  return (
    <button className={css.primaryButton} onClick={() => onAdd()}>
      Add World
      <RenderToken />
    </button>
  );
}
