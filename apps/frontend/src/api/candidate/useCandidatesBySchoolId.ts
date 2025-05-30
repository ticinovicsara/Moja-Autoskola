import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getData } from "@/utils";
import { API_ENDPOINTS } from "@/constants";
import { User } from "@/types";

const useCandidatesBySchoolId = (schooldId: string) => {
  const { data, isLoading, error } = useQuery<User[], AxiosError>({
    queryKey: ["candidates-school", schooldId],
    queryFn: () =>
      getData<User[]>(`${API_ENDPOINTS.CANDIDATE.BY_SCHOOL}/${schooldId}`),
    enabled: !!schooldId,
    refetchOnMount: true,
  });

  return {
    candidates: data || [],
    isLoading,
    error,
  };
};

export { useCandidatesBySchoolId };
