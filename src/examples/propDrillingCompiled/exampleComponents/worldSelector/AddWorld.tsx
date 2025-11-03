import css from "../../../../components/css/worldSelector/AddWorld.module.css";
import { RenderToken } from "../../../../components/perf/RenderToken.tsx";

type Props = {
  onClick: () => void;
};

export function AddWorldButton(props: Props) {
  const { onClick } = props;
  return (
    <button className={css.primaryButton} onClick={onClick}>
      Add World
      <RenderToken forceRender={props} />
    </button>
  );
}
