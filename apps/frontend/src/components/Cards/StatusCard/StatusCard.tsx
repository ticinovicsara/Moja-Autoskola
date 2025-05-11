import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import styles from "./status.module.css";
import { StatusCardProps } from "./StatusCardProps";
import { ArrowBack } from "@/components/ArrowBack/ArrowBack";

export const StatusCard: React.FC<StatusCardProps> = ({
  title,
  color,
  onClick,
  linkTo,
}) => {
  return (
    <CardComponent
      bodyBgColor={color}
      width="100%"
      height="100%"
      bodyPadding="1.5em"
      linkTo={linkTo}
    >
      <div className={styles["status-card-arrow"]}>
        <div
          onClick={onClick}
          style={{
            textAlign: "left",
            fontWeight: "bold",
            width: "70%",
          }}
        >
          {title}
        </div>
        <ArrowBack rotate />
      </div>
    </CardComponent>
  );
};
