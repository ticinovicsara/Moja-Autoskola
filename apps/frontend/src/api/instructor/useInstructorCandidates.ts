import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { User } from "@/types";
import { getData } from "@/utils";
import { API_ENDPOINTS } from "@/constants";

const useInstructorCandidates = (instructorId: string) => {
  const { data, isLoading, error } = useQuery<User[], AxiosError>({
    queryKey: ["instructor-candidates", instructorId],
    queryFn: () =>
      getData<User[]>(`${API_ENDPOINTS.INSTRUCTOR_CANDIDATES}/${instructorId}`),
    enabled: !!instructorId,
  });

  return {
    candidates: data || [],
    isLoading,
    error,
  };
};

export { useInstructorCandidates };
