import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Candidate } from "@/types";
import { getData } from "@/utils";
import { API_ENDPOINTS } from "@/constants";

const useInstructorCandidates = (instructorId: string) => {
  const { data, isLoading, error } = useQuery<Candidate[], AxiosError>({
    queryKey: ["instructor-candidates", instructorId],
    queryFn: () =>
      getData<Candidate[]>(
        `${API_ENDPOINTS.INSTRUCTOR_CANDIDATES}/${instructorId}`
      ),
    enabled: !!instructorId,
  });

  return {
    candidates: data || [],
    isLoading,
    error,
  };
};

export { useInstructorCandidates };
