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
  title: "React Performance Examples",
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
    id: "prop-drilling-naive-compiled",
    path: "/prop-drilling-naive-compiled",
    navLabel: "⚡ 🌪️ Prop-Naive+Compiler",
    title: "⚡ 🌪️ Prop Drilling Naive + React Compiler",
    description:
      "Naive prop drilling pattern automatically optimized by React Compiler. No manual memoization needed.",
  },
  {
    id: "prop-drilling-compiled",
    path: "/prop-drilling-compiled",
    navLabel: "⚡ 🌪️ Prop-Optimized+Compiler",
    title: "⚡ 🌪️ Prop Drilling Optimized + React Compiler",
    description:
      "Optimized prop drilling pattern with React Compiler. Shows compiler benefits on already-clean code.",
  },
  {
    id: "zustand",
    path: "/zustand",
    navLabel: "🌤️ Zustand",
    title: "🌤️ Zustand",
    description:
      "Both API and client state are in zustand. Optimized to prevent re-rendering. Props are passed only as lookup keys.",
  },
  {
    id: "zustand-query",
    path: "/zustand-query",
    navLabel: "🌤 Zustand+tanstack",
    title: "🌤 Zustand + tanstack-query/react",
    description:
      "API state in tanstack-query/react, client state in zustand. Shows how you can combine state from multiple libraries.",
  },
];
