import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { API_ENDPOINTS } from "@/constants";
import { getData } from "@/utils/fetchUtils";
import { InstructorSlot, User } from "@/types";
import { useAuth } from "@/hooks";

const useInstructorSlot = () => {
    const { user } = useAuth();
    const { data: instructor } = useQuery<User, AxiosError>({
        queryKey: ["candidates-instructor", user?.id],
        queryFn: () =>
            getData(API_ENDPOINTS.CANDIDATE.INSTRUCTOR + "/" + user?.id),
        enabled: !!user?.id,
    });

    const {
        data: slots,
        isLoading,
        error,
    } = useQuery<InstructorSlot[], AxiosError>({
        queryKey: ["instructor-slot", instructor?.id],
        queryFn: () =>
            getData(API_ENDPOINTS.INSTRUCTOR.SLOT + "/" + instructor?.id),
        enabled: !!instructor?.id,
    });

    const formattedSlots: InstructorSlot[] | undefined = slots?.map(
        (s: InstructorSlot) => ({
            ...s,
            startTime: new Date(s.startTime),
            endTime: new Date(s.endTime),
        })
    );

    return { slots: formattedSlots || [], isLoading, error };
};

export default useInstructorSlot;
