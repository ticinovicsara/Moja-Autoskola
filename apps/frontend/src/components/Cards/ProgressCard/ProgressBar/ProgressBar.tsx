import styles from "./progressBar.module.css";

type ProgressBarProps = {
  progress: number;
  total?: number;
  colorClass?: string;
  barClass?: string;
  borderColorClass?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  total,
  colorClass,
  barClass,
  borderColorClass,
}) => {
  const percentage = total
    ? Math.min(100, Math.round((progress / total) * 100))
    : Math.min(100, progress);

  return (
    <div className={`${styles["progress-container"]} ${borderColorClass}`}>
      <div className={`${styles["progress-bar"]} ${barClass}`}>
        <div
          className={`${styles["progress-fill"]} ${colorClass}`}
          style={{ width: `${percentage}%` }}
        ></div>
        <div className={styles["progress-percentage"]}>
          {total != null ? `${progress} / ${total}` : `${percentage}%`}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
