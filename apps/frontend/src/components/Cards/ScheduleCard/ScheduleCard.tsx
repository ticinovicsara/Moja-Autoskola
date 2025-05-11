import React, { useContext } from "react";
import "./scheduleCard.module.css";
import CardComponent from "../CardComponent/CardComponent";
import { ScheduleCardProps } from "./ScheduleCardProps";
import { AuthContext } from "@/contexts/AuthContext/authContext";
import { routes } from "@/constants";
import { UserRole } from "@/enums";

export const ScheduleCard: React.FC<ScheduleCardProps> = ({
  activity,
  time,
}) => {
  const context = useContext(AuthContext);
  const user = context?.user;

  const calendarLink =
    user?.role === UserRole.Candidate
      ? routes.CANDIDATE_DASHBOARD
      : routes.INSTRUCTOR_CALENDAR;

  return (
    <CardComponent
      headerTitle="Sljedeće na redu u kalendaru"
      bodyBgColor="#FFF192"
      headerBgColor="#FFB855"
      borderColor="#eab308"
      width="100%"
      linkTo={calendarLink}
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
