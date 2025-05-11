import { useEffect, useState, useCallback } from "react";
import { Session } from "@/types";
import { getInstructorSessions } from "@/api/instructor/getInstructorSessions";

export const useInstructorNextSession = (instructorId: string) => {
  const [nextSession, setNextSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNextSession = useCallback(async () => {
    if (!instructorId) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const sessions = await getInstructorSessions(instructorId);

      if (!sessions || sessions.length === 0) {
        setNextSession(null);
        setLoading(false);
        return;
      }

      const now = new Date();

      const upcomingSessions = sessions
        .filter((session: { startTime: string }) => {
          const sessionStartTime = new Date(session.startTime);
          return sessionStartTime >= now;
        })
        .sort(
          (a: { startTime: string }, b: { startTime: string }) =>
            new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
        );

      setNextSession(upcomingSessions[0] || null);
    } catch (err: any) {
      setError(err.message || "Greška pri dohvaćanju sesija.");
    } finally {
      setLoading(false);
    }
  }, [instructorId]);

  useEffect(() => {
    if (instructorId) {
      fetchNextSession();
    } else {
      setLoading(false);
    }

    return () => {};
  }, [instructorId, fetchNextSession]);

  const activity = nextSession?.type ?? "Nema aktivnosti";
  const startTime = nextSession?.startTime;

  return { activity, loading, error, startTime, refetch: fetchNextSession };
};
