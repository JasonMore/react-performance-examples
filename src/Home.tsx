import css from "./Home.module.css";
import { DemoCard } from "./components/DemoCard";
import { routes } from "./routes";
import { WorldAppSkeleton } from "./components/WorldAppSkeleton/WorldAppSkeleton.tsx";
import { RenderToken } from "./components/perf/RenderToken.tsx";

export function Home() {
  return (
    <div className={css.home}>
      <h1 className={css.title}>React Performance Examples</h1>
      <p className={css.description}>
        A collection of React performance examples and demos to help you
        understand various optimization techniques and patterns.
      </p>

      <div className={css.demoGrid}>
        {routes.map(({ id, path, title, description }) => (
          <DemoCard key={id} to={path} title={title}>
            {description}
          </DemoCard>
        ))}
      </div>

      <h2>Demo App layout</h2>
      <p>
        Here is what the app looks like in each example. Each component is named
        below.
      </p>
      <p>
        The <code>RenderToken</code> <RenderToken /> shows render counts. When
        that value increases, the component just re-rendered.
      </p>
      <p>
        Enable <code>react-scan</code> to see performance differences with DOM
        render times. It will disable <code>RenderToken</code>.
      </p>
      <WorldAppSkeleton />
    </div>
  );
}
