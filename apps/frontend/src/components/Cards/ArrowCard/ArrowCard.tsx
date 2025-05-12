import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import styles from "./arrowCard.module.css";
import { ArrowCardProps } from "./ArrowCardProps";
import { ArrowBack } from "@/components/ArrowBack/ArrowBack";

export const ArrowCard: React.FC<ArrowCardProps> = ({
  title,
  color,
  onClick,
  linkTo,
  style,
}) => {
  return (
    <CardComponent
      bodyBgColor={color}
      width="100%"
      bodyPadding="1.5em"
      linkTo={linkTo}
    >
      <div className={styles["status-card-arrow"]}>
        <div
          onClick={onClick}
          style={{
            textAlign: "left",
            fontWeight: "bold",
            ...(typeof style === "object" && style !== null ? style : {}),
          }}
        >
          {title}
        </div>
        <ArrowBack rotate />
      </div>
    </CardComponent>
  );
};
