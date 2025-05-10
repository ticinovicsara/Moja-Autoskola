import React from "react";
import styles from "./progressCard.module.css";
import CardComponent from "../CardComponent/CardComponent";

interface ProgressCardProps {
  title: string;
  progress: number;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  progress,
}) => {
  return (
    <CardComponent
      headerBgColor="#84CDEE"
      headerTitle={title}
      bodyBgColor="#84CDEE"
      borderColor="#eab308"
      width="250px"
      bodyPadding="0"
    >
      <div className={styles["progress-container"]}>
        <div className={styles["progress-bar"]}>
          <div
            className={styles["progress-fill"]}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className={styles["progress-percentage"]}>{progress}%</div>
      </div>
    </CardComponent>
  );
};
