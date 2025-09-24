import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>React Performance Examples</h1>
      <p className={styles.description}>
        A collection of React performance examples and demos to help you understand
        various optimization techniques and patterns.
      </p>
      
      <div className={styles.demoGrid}>
        <Link to="/zustand" className={styles.demoCard}>
          <h2 className={styles.demoTitle}>Zustand Render Demo</h2>
          <p className={styles.demoDescription}>
          This demo shows you can prevent re-rendering without using prop
          drilling.
          </p>
          <span className={styles.demoLink}>View Demo →</span>
        </Link>
      </div>
    </div>
  );
}