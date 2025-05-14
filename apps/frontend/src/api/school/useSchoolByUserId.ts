import { API_ENDPOINTS } from "@/constants";
import { getData } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const useSchoolByUserId = (userId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["school-by-user", userId],
    queryFn: () => getData(`${API_ENDPOINTS.SCHOOL.BY_USER}/${userId}`),
    enabled: !!userId,
  });

  return {
    school: data,
    isLoading,
    error,
  };
};
export default useSchoolByUserId;
