import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getData } from "@/utils";
import { API_ENDPOINTS } from "@/constants";
import { User } from "@/types";

const useInstructorsBySchoolId = (schooldID: string) => {
  const { data, isLoading, error } = useQuery<User[], AxiosError>({
    queryKey: ["instructors-school", schooldID],
    queryFn: () =>
      getData<User[]>(`${API_ENDPOINTS.INSTRUCTOR.BY_SCHOOL}/${schooldID}`),
    enabled: !!schooldID,
    refetchOnMount: true,
  });

  return {
    instructors: data || [],
    isLoading,
    error,
  };
};

export { useInstructorsBySchoolId };
