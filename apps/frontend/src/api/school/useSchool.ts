import { API_ENDPOINTS } from "@/constants";
import { School } from "@/types/school";
import { getData } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const useSchool = () => {
    const { data, isLoading, error } = useQuery<School[], AxiosError>({
        queryKey: ["school"],
        queryFn: () => getData(API_ENDPOINTS.SCHOOL.CRUD),
    });

    return { schools: data || [], isLoading, error };
};

export default useSchool;
