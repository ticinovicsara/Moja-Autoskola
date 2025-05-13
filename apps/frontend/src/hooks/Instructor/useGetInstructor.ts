import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getData } from "@/utils/fetchUtils";
import { API_ENDPOINTS } from "@/constants";

export interface Instructor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export const useGetInstructor = (candidateId: string) => {
  const { data, isLoading, error } = useQuery<Instructor, AxiosError>({
    queryKey: ["instructor", candidateId],
    queryFn: () =>
      getData(`${API_ENDPOINTS.GET_INSTRUCTOR_CANDIDATE}/${candidateId}`),
    enabled: !!candidateId,

    select: (result): Instructor => ({
      firstName: result.firstName,
      lastName: result.lastName,
      phoneNumber: result.phoneNumber,
    }),
  });

  console.log("DATA", data);
  console.log("ID", candidateId);

  return { ...data, loading: isLoading, error };
};
