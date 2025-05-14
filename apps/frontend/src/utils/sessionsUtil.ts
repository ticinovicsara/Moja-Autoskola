import { Day } from "@/types";
import { Session } from "@/types";

export const formatSessionTime = (startTime: string) => {
  if (!startTime) return "";

  const sessionStart = new Date(startTime);

  const dayName = Day[sessionStart.getDay()];

  const formattedTime = sessionStart.toLocaleTimeString("hr-HR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${dayName}, ${formattedTime}`;
};

export const getUpcomingSessions = (sessions: Session[]): Session[] => {
  const now = new Date();

  return sessions
    .filter((session) => {
      const startTime =
        typeof session.startTime === "string"
          ? new Date(session.startTime)
          : session.startTime;
      return startTime > now;
    })
    .sort((a, b) => {
      const aTime =
        typeof a.startTime === "string"
          ? new Date(a.startTime).getTime()
          : a.startTime.getTime();
      const bTime =
        typeof b.startTime === "string"
          ? new Date(b.startTime).getTime()
          : b.startTime.getTime();
      return aTime - bTime;
    });
};
