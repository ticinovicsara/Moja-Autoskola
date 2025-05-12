import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getData } from "@/utils/fetchUtils";
import { API_ENDPOINTS } from "@/constants";

interface InstructorInfo {
  name: string;
  phone: string;
}

export const useGetInstructor = (candidateId: string) => {
  const { data, isLoading, error } = useQuery<any, AxiosError>({
    queryKey: ["instructor", candidateId],
    queryFn: () =>
      getData(`${API_ENDPOINTS.INSTRUCTOR_CANDIDATE}/${candidateId}`),
    enabled: !!candidateId,

    select: (result): InstructorInfo => ({
      name: `${result.firstName} ${result.lastName}`,
      phone: result.phoneNumber,
    }),
  });

  return { ...data, loading: isLoading, error };
};
