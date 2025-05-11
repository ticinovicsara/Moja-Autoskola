import { useEffect, useState, useCallback } from "react";
import { Session } from "@/types";
import { useUserSessions } from "@/api";

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
      const { sessions } = await useUserSessions(instructorId);

      if (!sessions || sessions.length === 0) {
        setNextSession(null);
        setLoading(false);
        return;
      }

      const now = new Date();

      const upcomingSessions = sessions
        .filter((session: Session) => {
          const sessionStartTime =
            session.startTime instanceof Date
              ? session.startTime
              : new Date(session.startTime);
          return sessionStartTime >= now;
        })
        .sort((a: Session, b: Session) => {
          const aTime =
            a.startTime instanceof Date
              ? a.startTime.getTime()
              : new Date(a.startTime).getTime();
          const bTime =
            b.startTime instanceof Date
              ? b.startTime.getTime()
              : new Date(b.startTime).getTime();
          return aTime - bTime;
        });

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
