import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { resetTokenCounter } from "./components/perf/renderTokenState.ts";
import { Navigation } from "./components/Navigation.tsx";

export const Layout = () => {
  const location = useLocation();

  // Reset render pass counter whenever the route path changes
  useEffect(() => {
    resetTokenCounter();
  }, [location.pathname]);

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};