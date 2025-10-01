import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export function Navigation() {
  return (
    <nav className={css.navigation}>
      <NavLink to="/" title="Home">
        Home
      </NavLink>
      <NavLink to="/prop-drilling-naive" title="Naive Prop Drilling">
        🚰 ❌ Prop-Naive
      </NavLink>
      <NavLink to="/prop-drilling" title="Optimized Prop Drilling">
        🚰 ✅ Prop-Optimized
      </NavLink>
      <NavLink to="/zustand" title="Zustand Demo">
        ☁️ Zustand
      </NavLink>
    </nav>
  );
}
