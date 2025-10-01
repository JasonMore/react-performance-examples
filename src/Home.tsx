import css from "./Home.module.css";
import { DemoCard } from "./components/DemoCard";
import { routes } from "./routes";

export function Home() {
  return (
    <div className={css.home}>
      <h1 className={css.title}>React Performance Examples</h1>
      <p className={css.description}>
        A collection of React performance examples and demos to help you
        understand various optimization techniques and patterns.
      </p>

      <div className={css.demoGrid}>
        {routes.map(({ id, path, demoCardTitle, demoCardDescription }) =>
          demoCardTitle && demoCardDescription ? (
            <DemoCard key={id} to={path} title={demoCardTitle}>
              {demoCardDescription}
            </DemoCard>
          ) : null,
        )}
      </div>
    </div>
  );
}
