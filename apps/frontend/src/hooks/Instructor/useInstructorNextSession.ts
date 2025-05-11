import { useEffect, useState } from "react";
import { Session } from "@/types";
import { getInstructorSessions } from "@/api/instructor/getInstructorSessions";

export const useInstructorNextSession = (instructorId: string) => {
  const [nextSession, setNextSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNextSession = async () => {
      if (!instructorId) {
        console.error("No instructorId provided.");
        return;
      }

      try {
        const sessions = await getInstructorSessions(instructorId);
        console.log("Fetched sessions:", sessions);

        const now = new Date();
        console.log("Current time:", now);

        const upcomingSessions = sessions
          .filter((session: { startTime: string }) => {
            const sessionStartTime = new Date(session.startTime);
            return sessionStartTime >= now;
          })
          .sort(
            (a: { startTime: string }, b: { startTime: string }) =>
              new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
          );

        console.log("Upcoming sessions:", upcomingSessions);

        setNextSession(upcomingSessions[0] || null);
      } catch (err: any) {
        setError(err.message || "Greška pri dohvaćanju sesija.");
        console.error("Error fetching sessions:", err);
      } finally {
        setLoading(false);
      }
    };

    if (instructorId) {
      fetchNextSession();
    }
  }, [instructorId]);

  console.log("Next session inside useEffect:", nextSession);

  const activity = nextSession?.type ?? "Nema aktivnosti";
  const startTime = nextSession?.startTime;

  return { activity, loading, error, startTime };
};
