import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getData } from "@/utils/fetchUtils";
import { API_ENDPOINTS } from "@/constants";
import { Session, UserRoles } from "@/types";
import { useAuth } from "@/hooks";

const useUserSessions = (userId: string) => {
  const { user } = useAuth();
  const role = user?.role;

  const endpoint =
    role === UserRoles.Instructor
      ? `${API_ENDPOINTS.SESSION.INSTRUCTOR}/${userId}`
      : `${API_ENDPOINTS.SESSION.CANDIDATE}/${userId}`;

  const { data, isLoading, error } = useQuery<Session[], AxiosError>({
    queryKey: ["sessions", role, userId],
    queryFn: () => getData(endpoint),
    enabled: !!userId,
  });

  const sessions: Session[] | undefined = data?.map((session: Session) => ({
    ...session,
    startTime: new Date(session.startTime),
    endTime: new Date(session.endTime),
  }));

  console.log("Sessions data:", sessions);

  return { sessions: sessions || [], isLoading, error };
};

export default useUserSessions;
