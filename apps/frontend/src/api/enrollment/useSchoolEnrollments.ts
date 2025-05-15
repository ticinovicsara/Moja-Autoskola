import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getData } from "@/utils";
import { API_ENDPOINTS } from "@/constants";
import { EnrollmentRequest } from "@/types/enrollment";
import { EnrollmentStatus } from "@/types/enrollmentStatus";

const useSchoolEnrollments = (schoolId: string, status?: EnrollmentStatus) => {
    const url =
        status !== undefined
            ? `${API_ENDPOINTS.ENROLLMENT.SCHOOL}/${schoolId}?status=${status}`
            : `${API_ENDPOINTS.ENROLLMENT.SCHOOL}/${schoolId}`;

    const { data, isLoading, error } = useQuery<
        EnrollmentRequest[],
        AxiosError
    >({
        queryKey: ["enrollment", status],
        queryFn: () => getData<EnrollmentRequest[]>(url),
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
