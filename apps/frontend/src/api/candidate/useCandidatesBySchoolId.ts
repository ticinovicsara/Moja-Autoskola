import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getData } from "@/utils";
import { API_ENDPOINTS } from "@/constants";
import { User } from "@/types";

const useCandidatesBySchoolId = (schooldID: string) => {
  console.log(schooldID);
  const { data, isLoading, error } = useQuery<User[], AxiosError>({
    queryKey: ["candidates-school", schooldID],
    queryFn: () =>
      getData<User[]>(`${API_ENDPOINTS.CANDIDATE.BY_SCHOOL}/${schooldID}`),
    enabled: !!schooldID,
    refetchOnMount: true,
  });

  console.log(data);
  return {
    candidates: data || [],
    isLoading,
    error,
  };
};

export { useCandidatesBySchoolId };
