import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getData } from "@/utils";
import { API_ENDPOINTS } from "@/constants";
import { User } from "@/types";

const useCandidatesBySchoolId = (schooldID: string) => {
  const { data, isLoading, error } = useQuery<User[], AxiosError>({
    queryKey: ["candidates-school", schooldID],
    queryFn: () =>
      getData<User[]>(`${API_ENDPOINTS.CANDIDATE.BY_SCHOOL}/${schooldID}`),
    enabled: !!schooldID,
    refetchOnMount: true,
  });

  return {
    candidates: data || [],
    isLoading,
    error,
  };
};

export { useCandidatesBySchoolId };
