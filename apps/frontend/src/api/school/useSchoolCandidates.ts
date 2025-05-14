import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { User } from "@/types";
import { getData } from "@/utils";
import { API_ENDPOINTS } from "@/constants";

const useSchoolCandidates = (adminId: string) => {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery<User[], AxiosError>({
    queryKey: ["school-candidates", adminId],
    queryFn: () =>
      getData<User[]>(`${API_ENDPOINTS.SCHOOL.CANDIDATES}/${adminId}`),
    enabled: !!adminId,
  });

  return {
    candidates: data,
    candidateCount: data.length,
    isLoading,
    error,
  };
};

export { useSchoolCandidates };
