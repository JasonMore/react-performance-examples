import { memo } from "react";
import { Link } from "react-router-dom";
import css from "./DemoCard.module.css";
import { type ReactNode } from "react";

type Props = {
  to: string;
  title: string;
  children: ReactNode;
};

export const DemoCard = memo(function DemoCard({ to, title, children }: Props) {
  return (
    <Link to={to} className={css.demoCard}>
      <h2 className={css.demoTitle}>{title}</h2>
      <p className={css.demoDescription}>{children}</p>
      <span className={css.demoLink}>View Demo →</span>
    </Link>
  );
});
