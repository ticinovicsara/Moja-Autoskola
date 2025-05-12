import styles from "./progressCard.module.css";
import CardComponent from "../CardComponent/CardComponent";
import { ArrowBack } from "@/components/ArrowBack/ArrowBack";

interface ProgressCardProps {
  title: string;
  progress: number;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  progress,
}) => {
  return (
    <CardComponent className={styles["progress-card"]}>
      <div className={styles["title"]}>
        <div>{title}</div>
        <ArrowBack />
      </div>
      <div className={styles["progress-container"]}>
        <div className={styles["progress-bar"]}>
          <div
            className={styles["progress-fill"]}
            style={{ width: `${progress}%` }}
          ></div>
          <div className={styles["progress-percentage"]}>{progress}%</div>
        </div>
      </div>
    </CardComponent>
  );
};
