import styles from "./progressCard.module.css";
import CardComponent from "../CardComponent/CardComponent";
import ProgressBar from "./ProgressBar/ProgressBar";
import { Arrow2 } from "@/assets/svgs";
import { routes } from "@/constants";

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
    <CardComponent
      className={styles["progress-card"]}
      linkTo={routes.CANDIDATE_PROGRESS}
    >
      <div className={styles["title"]}>
        <div>{title}</div>
        <img src={Arrow2} />
      </div>
      <ProgressBar progress={progress} total={total} />{" "}
    </CardComponent>
  );
};
