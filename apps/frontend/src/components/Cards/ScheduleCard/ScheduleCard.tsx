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
      headerBgColor="#FFB855A3"
      bodyBgColor="#FFF192"
      borderColor="#eab308"
      width="250px"
    >
      <div>
        <div>{activity}</div>
        <div>
          <span style={{ marginRight: "8px" }}>🕒</span>
          <span>{time}</span>
        </div>
      </div>
    </CardComponent>
  );
};
