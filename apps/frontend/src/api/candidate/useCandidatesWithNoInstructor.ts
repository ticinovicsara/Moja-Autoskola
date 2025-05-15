import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getData } from "@/utils";
import { API_ENDPOINTS } from "@/constants";
import { User } from "@/types";

const useCandidatesWithoutInstructor = (schoolId: string) => {
  const { data, isLoading, error } = useQuery<User[], AxiosError>({
    queryKey: ["candidates-no-instructor", schoolId],
    queryFn: () =>
      getData<User[]>(`${API_ENDPOINTS.CANDIDATE.NO_INSTRUCTOR}/${schoolId}`),
    enabled: !!schoolId,
    refetchOnMount: true,
  });

  console.log("NOINST:", data);

  return {
    candidates: data || [],
    isLoading,
    error,
  };
};

export { useCandidatesWithoutInstructor };
