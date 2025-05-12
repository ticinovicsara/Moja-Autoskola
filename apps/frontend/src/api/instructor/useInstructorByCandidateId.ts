import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { API_ENDPOINTS } from "@/constants";
import { getData } from "@/utils/fetchUtils";
import { User } from "@/types";
import { useAuth } from "@/hooks";

const useInstructorByCandidateId = () => {
    const { user } = useAuth();
    const { data, isLoading, error } = useQuery<User, AxiosError>({
        queryKey: ["instructor-slot", user?.id],
        queryFn: () => getData(API_ENDPOINTS.INSTRUCTOR.SLOT + "/" + user?.id),
    });

    return { data, isLoading, error };
};

export default useInstructorByCandidateId;
