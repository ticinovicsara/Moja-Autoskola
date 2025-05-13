import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getData } from "@/utils/fetchUtils";
import { API_ENDPOINTS } from "@/constants";
import { User } from "@/types";

export const useGetInstructor = (candidateId: string) => {
  const { data, isLoading, error } = useQuery<User, AxiosError>({
    queryKey: ["instructor", candidateId],
    queryFn: () =>
      getData(`${API_ENDPOINTS.INSTRUCTOR_CANDIDATE}/${candidateId}`),
    enabled: !!candidateId,

    select: (result): User => ({
      firstName: result.firstName,
      lastName: result.lastName,
      phone: result.phone,
    }),
  });

  return { ...data, loading: isLoading, error };
};
