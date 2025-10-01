import { NavLink } from "react-router-dom";
import { homeRoute, routes } from "../routes";
import css from "./Navigation.module.css";

export function Navigation() {
  return (
    <nav className={css.navigation}>
      <NavLink to={homeRoute.path} title={homeRoute.navTitle}>
        {homeRoute.navLabel}
      </NavLink>
      {routes.map(({ id, path, navLabel, title }) => (
        <NavLink key={id} to={path} title={title}>
          {navLabel}
        </NavLink>
      ))}
    </nav>
  );
}
