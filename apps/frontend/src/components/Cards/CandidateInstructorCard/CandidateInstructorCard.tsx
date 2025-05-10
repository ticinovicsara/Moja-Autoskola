import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import { CandidateInstructorCardProps } from "./CandidateInstructorProps";

export const CandidateInstructorCard: React.FC<
  CandidateInstructorCardProps
> = ({ instructor, phone }) => {
  return (
    <CardComponent
      headerTitle="Tvoj instruktor"
      headerBgColor="#6C8C3E"
      bodyBgColor="#B1CF86"
      borderColor="#eab308"
      width="100%"
    >
      <div>
        <div>{instructor}</div>
        <span>Br. tel: {phone}</span>
      </div>
    </CardComponent>
  );
};
