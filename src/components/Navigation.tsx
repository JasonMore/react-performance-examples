import { NavLink } from "react-router-dom";
import { routes } from "../routes";
import css from "./Navigation.module.css";

export function Navigation() {
  return (
    <nav className={css.navigation}>
      {routes.map(({ id, path, navLabel, navTitle }) => (
        <NavLink key={id} to={path} title={navTitle}>
          {navLabel}
        </NavLink>
      ))}
    </nav>
  );
}
