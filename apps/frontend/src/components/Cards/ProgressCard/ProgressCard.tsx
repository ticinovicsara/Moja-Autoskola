import styles from "./progressCard.module.css";
import CardComponent from "../CardComponent/CardComponent";
import { ArrowBack } from "@/components/ArrowBack/ArrowBack";
import ProgressBar from "./ProgressBar/ProgressBar";

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
  return (
    <CardComponent className={styles["progress-card"]}>
      <div className={styles["title"]}>
        <div>{title}</div>
        <ArrowBack />
      </div>
      <ProgressBar progress={progress} total={total ?? 100} />{" "}
    </CardComponent>
  );
};
