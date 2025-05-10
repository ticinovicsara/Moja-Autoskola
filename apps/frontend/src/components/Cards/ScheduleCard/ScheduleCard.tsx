import React from "react";
import "./scheduleCard.module.css";
import CardComponent from "../CardComponent/CardComponent";

interface ScheduleCardProps {
  activity: string;
  time: string;
}

export const ScheduleCard: React.FC<ScheduleCardProps> = ({
  activity,
  time,
}) => {
  return (
    <CardComponent
      headerTitle="Sljedeće na redu u kalendaru"
      headerBgColor="#facc15"
      bodyBgColor="#fef9c3"
      borderColor="#eab308"
      width="250px"
    >
      <div>
        <div>{activity}</div>
        <div
          style={{ marginTop: "8px", display: "flex", alignItems: "center" }}
        >
          <span style={{ marginRight: "8px" }}>🕒</span>
          <span>{time}</span>
        </div>
      </div>
    </CardComponent>
  );
};
