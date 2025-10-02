import css from "../../../components/css/WorldApp.module.css";
import { WorldSelector } from "./worldSelector/WorldSelector.tsx";
import { WorldsViewer } from "./worldsViewer/WorldsViewer.tsx";

type Props = {
  revalidate: () => void;
};

export function WorldApp({ revalidate }: Props) {
  return (
    <div className={css.grid}>
      <div className={css.selectorPane}>
        <WorldSelector revalidate={revalidate} />
      </div>
      <WorldsViewer />
    </div>
  );
}
