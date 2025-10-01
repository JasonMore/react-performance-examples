export type Route = {
  id: string;
  path: string;
  navLabel: string;
  navTitle: string;
  demoCardTitle?: string;
  demoCardDescription?: string;
};

export const homeRoute = {
  id: "home",
  path: "/",
  navLabel: "Home",
  navTitle: "Home",
  demoCardTitle: "React Performance Examples",
  demoCardDescription:
    "Return to the overview of performance demos and learning resources.",
};

export const routes: Route[] = [
  {
    id: "prop-drilling-naive",
    path: "/prop-drilling-naive",
    navLabel: "🚰 ❌ Prop-Naive",
    navTitle: "Naive Prop Drilling",
    demoCardTitle: "Prop Drilling Naive",
    demoCardDescription:
      "Deliberately inefficient example that keeps state at the top and reshapes props at every level to force re-renders.",
  },
  {
    id: "prop-drilling",
    path: "/prop-drilling",
    navLabel: "🚰 ✅ Prop-Optimized",
    navTitle: "Optimized Prop Drilling",
    demoCardTitle: "Prop Drilling",
    demoCardDescription: "Performant implementation of prop drilling.",
  },
  {
    id: "zustand",
    path: "/zustand",
    navLabel: "☁️ Zustand",
    navTitle: "Zustand Demo",
    demoCardTitle: "Zustand Render",
    demoCardDescription: "Prevent re-rendering without using prop drilling.",
  },
];
