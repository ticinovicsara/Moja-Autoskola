import { useQuery } from "@tanstack/react-query";
import { getData } from "@/utils/fetchUtils";
import { API_ENDPOINTS } from "@/constants";
import { Session, UserRoles } from "@/types";
import { getUpcomingSessions } from "@/utils";
import { AxiosError } from "axios";
import { useAuth } from "../Auth/useAuth";

export const useNextSession = (id: string) => {
  const { user } = useAuth();
  const role = user?.role;

  const endpoint =
    role === UserRoles.Instructor
      ? `${API_ENDPOINTS.SESSION.INSTRUCTOR}/${id}`
      : `${API_ENDPOINTS.SESSION.CANDIDATE}/${id}`;

  const {
    data: sessions,
    isLoading,
    error,
  } = useQuery<Session[], AxiosError>({
    queryKey: [`${role}Sessions`, id],
    queryFn: () => getData(endpoint),
    enabled: !!id,
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
