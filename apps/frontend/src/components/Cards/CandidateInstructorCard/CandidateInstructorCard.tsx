import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import { CandidateInstructorCardProps } from "./CandidateInstructorProps";
import styles from "./candidateInstructorCard.module.css";

export const CandidateInstructorCard: React.FC<
  CandidateInstructorCardProps
> = ({ instructor, phone }) => {
  return (
    <CardComponent linkTo="#" className={styles["candidate-instructor-card"]}>
      <div className={styles["content-title"]}>Tvoj Instruktor</div>
      <div className={styles["card-content"]}>
        <div className={styles["instructor-name"]}>{instructor}</div>
        <span className={styles["instructor-phone"]}>{phone}</span>
      </div>
    </CardComponent>
  );
};
