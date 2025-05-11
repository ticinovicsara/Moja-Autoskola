import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { API_ENDPOINTS } from "@/constants";
import { getData } from "@/utils/fetchUtils";
import { Session } from "@/types";

const useCandidateSessions = (candidateId: string) => {
    const { data, isLoading, error } = useQuery<Session[], AxiosError>({
        queryKey: ["sessions", candidateId],
        queryFn: () =>
            getData(API_ENDPOINTS.SESSION + "/candidate/" + candidateId),
    });

    const sessions = data?.map((session) => ({
        ...session,
        startTime: new Date(session.startTime),
        endTime: new Date(session.endTime),
    }));

    return { sessions, isLoading, error };
};

export default useCandidateSessions;
