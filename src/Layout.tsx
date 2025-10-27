import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { resetTokenCounter } from "./components/perf/renderTokenState.ts";
import { Navigation } from "./components/Navigation.tsx";
import { homeRoute, routes } from "./routes.ts";

export const Layout = () => {
  const location = useLocation();

  // Reset render pass counter whenever the route path changes
  useEffect(() => {
    resetTokenCounter();

    // Update page title based on current route
    const currentRoute = routes.find(
      (route) => route.path === location.pathname,
    );
    if (currentRoute) {
      document.title = currentRoute.title;
    } else if (location.pathname === homeRoute.path) {
      document.title = homeRoute.title;
    }
  }, [location.pathname]);

  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
