import React from "react";
import "./scheduleCard.module.css";
import CardComponent from "../CardComponent/CardComponent";
import { ScheduleCardProps } from "./ScheduleCardProps";

export const ScheduleCard: React.FC<ScheduleCardProps> = ({
  activity,
  time,
}) => {
  return (
    <CardComponent
      headerTitle="Sljedeće na redu u kalendaru"
      bodyBgColor="#FFF192"
      headerBgColor="#FFB855"
      borderColor="#eab308"
      width="100%"
    >
      <div>
        <div style={{ fontWeight: "bold", marginBottom: "0.5em" }}>
          {activity}
        </div>
        <div>
          <span style={{ marginRight: "8px" }}>🕒</span>
          <span>{time}</span>
        </div>
      </div>
    </CardComponent>
  );
};
