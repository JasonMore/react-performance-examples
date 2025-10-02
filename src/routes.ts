export type Route = {
  id: string;
  path: string;
  navLabel: string;
  title: string;
  description?: string;
};

export const homeRoute = {
  id: "home",
  path: "/",
  navLabel: "Home",
  navTitle: "Home",
};

export const routes: Route[] = [
  {
    id: "prop-drilling-naive",
    path: "/prop-drilling-naive",
    navLabel: "🌪️ ❌ Prop-Naive",
    title: "🌪️ ❌ Prop Drilling Naive",
    description:
      "Deliberately inefficient example that keeps state at the top and reshapes props at every level to force re-renders.",
  },
  {
    id: "prop-drilling",
    path: "/prop-drilling",
    navLabel: "🌪️ ✅ Prop-Optimized",
    title: "🌪️ ✅ Prop Drilling Optimized",
    description: "Performant implementation of prop drilling.",
  },
  {
    id: "zustand",
    path: "/zustand",
    navLabel: "🌤️ Zustand",
    title: "🌤️ Zustand Optimized",
    description: "Prevent re-rendering without using prop drilling.",
  },
  {
    id: "zustand-query",
    path: "/zustand-query",
    navLabel: "🌟 Zustand+Query",
    title: "🌟 Zustand + Query Worlds Demo",
    description: "Worlds come from TanStack Query (with add-world mutation + loading states) while selection lives in a tiny Zustand store—shows how to cleanly bridge the two with a custom hook.",
  },
];
