import React from "react";
import styles from "./progressCard.module.css";
import CardComponent from "../CardComponent/CardComponent";
import c from "../CardComponent/cardComponent.module.css";

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
      bodyBgColor="#84CDEE"
      borderColor="#3D3D3D"
      width="100%"
      bodyPadding="10px 0 0 0"
    >
      <div className={c["card-title"]}>{title}</div>
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
