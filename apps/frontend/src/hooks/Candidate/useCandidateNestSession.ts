import { useQuery } from "@tanstack/react-query";
import { getData } from "@/utils/fetchUtils";
import { API_ENDPOINTS } from "@/constants";
import { Session } from "@/types";
import { getUpcomingSessions } from "@/utils";
import { AxiosError } from "axios";

export const useCandidateNextSession = (candidateId: string) => {
  const {
    data: sessions,
    isLoading,
    error,
  } = useQuery<Session[], AxiosError>({
    queryKey: ["candidateSessions", candidateId],
    queryFn: () => getData(`${API_ENDPOINTS.SESSION.CANDIDATE}/${candidateId}`),
    enabled: !!candidateId,
  });

  if (isLoading) {
    return { activity: null, startTime: null, loading: true, error: null };
  }

  if (error) {
    return {
      activity: null,
      startTime: null,
      loading: false,
      error: error.message,
    };
  }

  const upcomingSessions = getUpcomingSessions(sessions || []);

  const nextSession = upcomingSessions[0] || null;

  const activity = nextSession?.type ?? "Nema aktivnosti";
  const startTime = nextSession?.startTime ?? null;

  return { activity, startTime, loading: false, error: null };
};
