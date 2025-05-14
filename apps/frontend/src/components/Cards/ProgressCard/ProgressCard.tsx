import styles from "./progressCard.module.css";
import CardComponent from "../CardComponent/CardComponent";
import { ArrowBack } from "@/components/ArrowBack/ArrowBack";

interface ProgressCardProps {
  title: string;
  progress: number;
  total?: number;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  progress,
  total,
}) => {
  const displayText = total ? `${progress} / ${total}` : `${progress}%`;
  const barWidth = total ? `${(progress / total) * 100}%` : `${progress}%`;

  return (
    <CardComponent className={styles["progress-card"]}>
      <div className={styles["title"]}>
        <div>{title}</div>
        <ArrowBack rotate />
      </div>
      <div className={styles["progress-container"]}>
        <div className={styles["progress-bar"]}>
          <div
            className={styles["progress-fill"]}
            style={{ width: barWidth }}
          ></div>
          <div className={styles["progress-percentage"]}>{displayText}</div>
        </div>
      </div>
    </CardComponent>
  );
};
