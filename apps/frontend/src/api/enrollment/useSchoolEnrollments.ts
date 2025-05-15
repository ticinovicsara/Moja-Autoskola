import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getData } from "@/utils";
import { API_ENDPOINTS } from "@/constants";
import { EnrollmentRequest } from "@/types/enrollment";
import { EnrollmentStatus } from "@/types/EnrollmentStatus";

const useSchoolEnrollments = (schoolId: string, status?: EnrollmentStatus) => {
  const queryKey = ["school-enrollments", status];

  const queryFn = () => {
    const url =
      status !== undefined
        ? `${API_ENDPOINTS.ENROLLMENT.SCHOOL}/${schoolId}?status=${status}`
        : `${API_ENDPOINTS.ENROLLMENT.SCHOOL}/${schoolId}`;

    return getData<EnrollmentRequest[]>(url);
  };

  const { data, isLoading, error } = useQuery<EnrollmentRequest[], AxiosError>({
    queryKey,
    queryFn,
    enabled: !!schoolId,
    refetchOnMount: false,
  });

  return {
    enrollments: data || [],
    isLoading,
    error,
  };
};

export { useSchoolEnrollments };
