import { Session } from "@/types";

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
