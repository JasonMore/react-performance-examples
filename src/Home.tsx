import css from "./Home.module.css";
import { DemoCard } from "./components/DemoCard";

export function Home() {
  return (
    <div className={css.home}>
      <h1 className={css.title}>React Performance Examples</h1>
      <p className={css.description}>
        A collection of React performance examples and demos to help you
        understand various optimization techniques and patterns.
      </p>

      <div className={css.demoGrid}>
        <DemoCard to="/zustand" title="Zustand Render">
          This demo shows you can prevent re-rendering without using prop
          drilling.
        </DemoCard>
        <DemoCard to="/prop-drilling" title="Prop Drilling">
          A performant implementation of prop drilling.
        </DemoCard>
        <DemoCard to="/prop-drilling-naive" title="Prop Drilling Naive">
          A deliberately inefficient example that keeps state at the top and
          reshapes props at every level to force re-renders.
        </DemoCard>
      </div>
    </div>
  );
}
