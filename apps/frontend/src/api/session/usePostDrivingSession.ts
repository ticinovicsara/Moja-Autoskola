import { API_ENDPOINTS } from "@/constants";
import { DrivingSessionReq } from "@/types";
import { postData } from "@/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const usePostDrivingSession = () => {
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation<
        any,
        AxiosError,
        DrivingSessionReq
    >({
        mutationFn: (newSession: DrivingSessionReq) =>
            postData(API_ENDPOINTS.SESSION.DRIVING, newSession),
        onSuccess: () => {
            toast.success("Session successfully created");
            queryClient.invalidateQueries({
                queryKey: ["instructor-slot"],
            });
            queryClient.invalidateQueries({
                queryKey: ["sessions"],
            });
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { addDrivingSession: mutate, isPending };
};

export default usePostDrivingSession;
