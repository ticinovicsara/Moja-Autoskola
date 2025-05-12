import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import { ArrowBack } from "@/components/ArrowBack/ArrowBack";
import styles from "./arrowCard.module.css";

export interface ArrowCardProps {
  title: string;
  onClick?: () => void;
  linkTo?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const ArrowCard: React.FC<ArrowCardProps> = ({
  title,
  onClick,
  linkTo,
  style,
  className,
}) => {
  return (
    <CardComponent
      linkTo={linkTo}
      className={`${styles["arrow-card"]} ${className}`}
    >
      <div className={styles["arrow-card-content"]}>
        <div
          onClick={onClick}
          className={styles["arrow-card-title"]}
          style={style}
        >
          {title}
        </div>
        <ArrowBack />
      </div>
    </CardComponent>
  );
};
