import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { API_ENDPOINTS } from "@/constants";
import { getData } from "@/utils/fetchUtils";
import { InstructorSlot } from "@/types";
import useInstructorByCandidateId from "./useInstructorByCandidateId";

const useInstructorSlot = () => {
    const { data: instructor } = useInstructorByCandidateId();
    const {
        data: slots,
        isLoading,
        error,
    } = useQuery<InstructorSlot[], AxiosError>({
        queryKey: ["instructor-slot", instructor?.id],
        queryFn: () =>
            getData(API_ENDPOINTS.INSTRUCTOR.SLOT + "/" + instructor?.id),
    });

    return { slots: slots || [], isLoading, error };
};

export default useInstructorSlot;
