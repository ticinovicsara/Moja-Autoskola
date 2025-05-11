import { getCandidateSessions } from "@/api";
import { useEffect, useState } from "react";
import { Session } from "@/types";

export const useCandidateNextSession = (candidateId: string) => {
  const [nextSession, setNextSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNextSession = async () => {
      try {
        const sessions = await getCandidateSessions(candidateId);
        const now = new Date();

        const upcomingSessions = sessions
          .filter(
            (session: { startTime: string }) =>
              new Date(session.startTime) > now
          )
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
    };

    if (candidateId) {
      fetchNextSession();
    }
  }, [candidateId]);

  return { nextSession, loading, error };
};
