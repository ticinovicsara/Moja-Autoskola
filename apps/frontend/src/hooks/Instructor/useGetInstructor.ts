import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getData } from "@/utils/fetchUtils";
import { API_ENDPOINTS } from "@/constants";

export interface Instructor {
  firstName: string;
  lastName: string;
  phone: string;
}

export const useGetInstructor = (candidateId: string) => {
  const { data, isLoading, error } = useQuery<Instructor, AxiosError>({
    queryKey: ["instructor", candidateId],
    queryFn: () =>
      getData(`${API_ENDPOINTS.INSTRUCTOR.CANDIDATE}/${candidateId}`),
    enabled: !!candidateId,

    select: (result): Instructor => ({
      firstName: result.firstName,
      lastName: result.lastName,
      phone: result.phone,
    }),
  });

  return { ...data, loading: isLoading, error };
};
