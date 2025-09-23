// Small helper to give each render a unique visual token
import styles from "./RenderToken.module.css";

type Props = { className?: string };

export const RenderToken = ({ className }: Props) => {
  const token = Math.random().toString(36).slice(2, 7);
  return (
    // key forces remount so the CSS animation runs on every value change
    <span key={token} className={`${styles.renderToken} ${className}`}>
      #{token}
    </span>
  );
};
