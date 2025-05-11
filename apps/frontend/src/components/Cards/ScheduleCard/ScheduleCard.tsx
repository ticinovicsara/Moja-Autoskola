import React, { useMemo } from "react";
import "./scheduleCard.module.css";
import CardComponent from "../CardComponent/CardComponent";
import { ScheduleCardProps } from "./ScheduleCardProps";
import { routes } from "@/constants";
import { UserRole } from "@/enums";
import { useAuth } from "@/hooks";

export const ScheduleCard: React.FC<ScheduleCardProps> = ({
  activity,
  time,
}) => {
  const context = useAuth();
  const user = context.user;

  const calendarLink = useMemo(() => {
    if (!user) return "#";

    if (user.role === UserRole.Candidate) return routes.CANDIDATE_CALENDAR;
    if (user.role === UserRole.Instructor) return routes.INSTRUCTOR_CALENDAR;

    console.warn("Nepoznata uloga:", user.role);
    return "#";
  }, [user]);

  if (!user) return null;

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
