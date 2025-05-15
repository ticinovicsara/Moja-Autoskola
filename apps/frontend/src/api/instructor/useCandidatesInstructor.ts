import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getData } from "@/utils/fetchUtils";
import { API_ENDPOINTS } from "@/constants";

export interface Instructor {
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export const useCandidatesInstructor = (candidateId: string) => {
    const {
        data: instructor,
        isLoading,
        error,
    } = useQuery<Instructor, AxiosError>({
        queryKey: ["instructor", candidateId],
        queryFn: () =>
            getData(`${API_ENDPOINTS.CANDIDATE.INSTRUCTOR}/${candidateId}`),
        enabled: !!candidateId,

        select: (result): Instructor => ({
            firstName: result.firstName,
            lastName: result.lastName,
            phoneNumber: result.phoneNumber,
        }),
    });

    return { instructor, loading: isLoading, error };
};
