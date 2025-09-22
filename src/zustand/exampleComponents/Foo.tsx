import { memo } from "react";
import css from "./Foo.module.css";
import { Bar } from "./Bar.tsx";
import { RenderToken } from "../RenderToken.tsx";

export const Foo = memo(() => {
  return (
    <div className={css.card}>
      <div className={css.cardTitle}>Foo</div>
      <Bar />
      <RenderToken />
    </div>
  );
});

Foo.displayName = "Foo";
