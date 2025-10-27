import { NavLink } from "react-router-dom";
import { memo } from "react";
import { homeRoute, routes } from "../routes";
import css from "./Navigation.module.css";
import { ReactScanToggle } from "./perf/ReactScanToggle.tsx";

export const Navigation = memo(() => {
  return (
    <nav className={css.navigation}>
      <span>
        <NavLink to={homeRoute.path} title={homeRoute.navTitle}>
          {homeRoute.navLabel}
        </NavLink>
        {routes.map(({ id, path, navLabel, title }) => (
          <NavLink key={id} to={path} title={title}>
            {navLabel}
          </NavLink>
        ))}
      </span>
      <ReactScanToggle />
    </nav>
  );
});

Navigation.displayName = "Navigation";
