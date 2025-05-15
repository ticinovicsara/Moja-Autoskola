import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/constants";
import { getData } from "@/utils";

export const useCandidateProgressData = (candidateId: string) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["candidateProgress", candidateId],
        queryFn: () =>
            getData(API_ENDPOINTS.CANDIDATE.PROGRESS + "/" + candidateId),
        enabled: !!candidateId,
        staleTime: 0,
    });

    return {
        data,
        loading: isLoading,
        error,
    };
};
