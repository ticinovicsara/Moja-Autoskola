import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getData } from "@/utils";
import { API_ENDPOINTS } from "@/constants";
import { EnrollmentRequest } from "@/types/enrollment";

const useCandidateEnrollment = (userId: string, isGuest: boolean) => {
  const { data, isLoading, error } = useQuery<EnrollmentRequest, AxiosError>({
    queryKey: ["enrollment"],
    queryFn: () =>
      getData<EnrollmentRequest>(
        `${API_ENDPOINTS.ENROLLMENT.CANDIDATE}/${userId}`
      ),
    enabled: !!userId && isGuest,
    refetchOnMount: true,
  });
  return {
    enrollment: data,
    isLoading,
    error,
  };
};

export { useCandidateEnrollment };
