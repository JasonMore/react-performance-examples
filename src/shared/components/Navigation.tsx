import { Link, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

interface NavItem {
  path: string;
  label: string;
  shortName: string;
}

const navItems: NavItem[] = [
  { path: "/", label: "Home", shortName: "Home" },
  { path: "/zustand", label: "Zustand Demo", shortName: "Zustand" },
  { path: "/prop-drilling", label: "Optimized Prop Drilling", shortName: "Optimized" },
  { path: "/prop-drilling-naive", label: "Naive Prop Drilling", shortName: "Naive" },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className={styles.navigation}>
        
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                title={item.label}
              >
                {item.shortName}
              </Link>
            );
          })}
        
    </nav>
  );
}
