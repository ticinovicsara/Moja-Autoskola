import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getData } from "@/utils";
import { API_ENDPOINTS } from "@/constants";
import { EnrollmentRequest } from "@/types/enrollment";

const useCandidateEnrollment = (userId: string) => {
  const { data, isLoading, error } = useQuery<EnrollmentRequest, AxiosError>({
    queryKey: ["waiting-page", userId],
    queryFn: () =>
      getData<EnrollmentRequest>(
        `${API_ENDPOINTS.ENROLLMENT.CANDIDATE}/${userId}`
      ),
    enabled: !!userId,
  });

  console.log(data);
  return {
    enrollment: data,
    isLoading,
    error,
  };
};

export { useCandidateEnrollment };
